import React, { useState, useEffect, useCallback } from 'react';
import MovingBackground from '@/components/MovingBackground';
import useCurrentUser from '@/store/useCurrentUser';
import Lottie from 'lottie-react';
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
  const queryClient = useQueryClient();
  const [direction, setDirection] = useState('');
  const [count, setCount] = useState(0);
  const [randomDogs, setRandomDogs] = useState([]);

  const randomDog = randomDogs[randomDogs.length - 1];
  const currentDog = currentUser?.dogs?.find((dog) => dog.isCurrent === true);

  const { data, isLoading, error, isFetching } = useQuery({
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
    console.log(direction);
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
          <div className="max-w-[200px] max-h-[200px]">
            <Lottie animationData={dogAnimation} loop={true} />
          </div>
        ) : (
          <Card
            handleCardLeftScreen={handleCardLeftScreen}
            count={count}
            randomDog={randomDog}
            potentialMatchesCount={data.dogCount}
          />
        )}
      </div>

      <FlirtingDog />
      <Exit />
      <MySwipe />
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
