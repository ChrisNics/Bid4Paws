import React, { useState, useEffect, useCallback, useMemo } from 'react';
import MovingBackground from '@/components/Matching/MovingBackground';
import useCurrentUser from '@/store/useCurrentUser';
import { dogAnimation } from '../../dev-data/dogsAnimation';
import dbConnect from '../../lib/dbConnect';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  dehydrate
} from '@tanstack/react-query';
import { getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]';
import User from '@/models/userModel';
import baseUrl from '../../dev-data/baseUrl';
import Card from '@/components/Matching/Card';
import { MySwipe, Exit, ChangeDog, FlirtingDog } from '@/components/Matching/Absolute';
import CustomLottie from '@/components/CustomLottie';
import { Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Drawer from '@/components/Matching/Drawer';

const getRandomDogs = async (currentUser) => {
  const res = await fetch(
    `${baseUrl}/api/match/search?lng=${currentUser?.address?.geocoding?.coordinates[0]}&lat=${currentUser?.address?.geocoding?.coordinates[1]}&radius=100&userID=${currentUser?._id}`
  );

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || 'Failed to search for dogs.');
  }

  const { data } = await res.json();

  return data;
};

const Matching = () => {
  const { currentUser } = useCurrentUser((state) => ({ currentUser: state.currentUser }));
  const [opened, { open, close }] = useDisclosure(false);
  const queryClient = useQueryClient();
  const [direction, setDirection] = useState('');
  const [count, setCount] = useState(0);
  const [randomDogs, setRandomDogs] = useState([]);

  const randomDog = useMemo(() => randomDogs[randomDogs.length - 1], [randomDogs]);
  const currentDog = useMemo(
    () => currentUser?.dogs?.find((dog) => dog.isCurrent === true),
    [currentUser]
  );

  const { data, error, isFetching } = useQuery({
    queryKey: ['random-dogs'],
    queryFn: getRandomDogs.bind(this, currentUser),
    onSettled: (data) => {
      setRandomDogs(data.randomDogs);
    },
    refetchOnWindowFocus: false
  });

  const swipeLeftMutation = useMutation({
    mutationFn: async () => {
      const res = await fetch('/api/match', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          from: {
            owner: currentUser?._id,
            dog: currentDog?._id
          },
          to: {
            owner: randomDog.owner,
            dog: randomDog._id
          }
        })
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'An error occurred while matching.');
      }

      return await res.json();
    },

    onError: () => {
      console.log(error);
    }
  });

  useEffect(() => {
    if (!direction) return;

    if (direction === 'left') swipeLeftMutation.mutate();

    if (randomDogs.length === 1) {
      queryClient.invalidateQueries(['random-dogs']);
    } else if (randomDogs.length > 1) {
      setRandomDogs((state) => state.slice(0, -1));
    }

    setDirection('');
    setCount((state) => state + 1);
  }, [direction]);

  const handleCardLeftScreen = useCallback(
    (dir) => {
      setDirection(dir);
    },
    [direction]
  );

  return (
    <section className="relative background">
      <MovingBackground />

      <div className="container mx-auto flex justify-center items-center min-h-screen ">
        {isFetching || swipeLeftMutation.isLoading ? (
          <CustomLottie animationData={dogAnimation} />
        ) : (
          <Card
            handleCardLeftScreen={handleCardLeftScreen}
            count={count}
            randomDog={randomDog}
            potentialMatchesCount={data.dogCount}
          />
        )}
      </div>

      <Drawer close={close} opened={opened} />

      <FlirtingDog />
      <Exit />
      <MySwipe open={open} />
      <ChangeDog />
    </section>
  );
};

export const getServerSideProps = async (context) => {
  await dbConnect();
  const queryClient = new QueryClient();
  const session = await getServerSession(context.req, context.res, authOptions);
  const currentUser = await User.findById(session?.id);
  await queryClient.prefetchQuery(['random-dogs'], getRandomDogs.bind(this, currentUser));

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
};

export default Matching;
