import React, { useState, useEffect, useCallback, useMemo } from 'react';
import MovingBackground from '@/components/Matching/MovingBackground';
import useCurrentUser from '@/store/useCurrentUser';
import { dogAnimation } from '../../dev-data/dogsAnimation';
import dynamic from 'next/dynamic';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { MySwipe, Exit, ChangeDog, FlirtingDog, Radius } from '@/components/Matching/Absolute';
import CustomLottie from '@/components/CustomLottie';
import { Drawer, LoadingOverlay, Loader } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useRandomDogs, getRandomDogs } from '@/hooks/useRandomDogs';
import Pusher from 'pusher-js';

const Card = dynamic(() => import('@/components/Matching/Card'), {
  ssr: false,
  loading: () => <CustomLottie animationData={dogAnimation} />
});

const Content = dynamic(() => import('@/components/Matching/Drawer/Content'), {
  loading: () => (
    <LoadingOverlay
      overlayOpacity={1}
      visible={true}
      loader={<Loader variant="dots" color="orange" />}
    />
  )
});

const Matching = () => {
  const { currentUser } = useCurrentUser((state) => ({ currentUser: state.currentUser }));
  const [opened, { open, close }] = useDisclosure(false);
  const queryClient = useQueryClient();
  const [direction, setDirection] = useState('');
  const [count, setCount] = useState(0);
  const [nearbyDogs, setNearbyDogs] = useState(0);

  const currentDog = useMemo(
    () => currentUser?.dogs?.find((dog) => dog.isCurrent === true),
    [currentUser]
  );

  const { data: randomDog, error, isFetching } = useRandomDogs(currentUser);

  const swipeLeftMutation = useMutation({
    mutationFn: async (randomDog) => {
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
            dog: randomDog?._id
          }
        })
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'An error occurred while matching.');
      }

      return await res.json();
    },

    onSettled: () => {
      queryClient.invalidateQueries(['my-swipes']);
      queryClient.invalidateQueries(['swipe-you']);
      queryClient.invalidateQueries(['random-dogs']);
    },

    onError: () => {
      console.log(error);
    }
  });

  useEffect(() => {
    if (!direction) return;

    if (direction === 'left') {
      swipeLeftMutation.mutate(randomDog);
    } else {
      queryClient.invalidateQueries(['random-dogs']);
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

  useEffect(() => {
    const pusher = new Pusher('effba3036d4404fa793d', {
      cluster: 'ap1',
      forceTLS: true
    });

    const channel = pusher.subscribe('match');

    channel.bind(`dog-nearby-${currentDog?._id}`, function (data) {
      setNearbyDogs(data.nearbyDogs);
    });

    return () => {
      channel.unbind(`dog-nearby-${currentDog?._id}`);
      pusher.unsubscribe('match');
    };
  }, []);

  return (
    <section className="background relative">
      <MovingBackground />

      <div className="container mx-auto flex min-h-screen items-center justify-center ">
        {isFetching || swipeLeftMutation.isLoading ? (
          <CustomLottie animationData={dogAnimation} />
        ) : (
          <Card
            handleCardLeftScreen={handleCardLeftScreen}
            count={count}
            randomDog={randomDog}
            nearbyDogs={nearbyDogs}
          />
        )}
      </div>

      <Drawer opened={opened} onClose={close}>
        <Content currentDog={currentDog} />
      </Drawer>

      <FlirtingDog />
      <Exit />
      <MySwipe open={open} />
      <Radius />
      <ChangeDog />
    </section>
  );
};

export const getServerSideProps = async (context) => {
  return {
    props: {}
  };
};

export default Matching;
