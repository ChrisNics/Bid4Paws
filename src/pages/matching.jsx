import React, { useState, useMemo, useEffect, useCallback } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { HoverCard, Affix, rem, ActionIcon, Tooltip, Popover, Title } from '@mantine/core';
import { IconHeart, IconHelpSquare, IconArrowsExchange2, IconLogout } from '@tabler/icons-react';
import MovingBackground from '@/components/MovingBackground';
import DogButton from '@/components/DogButton';
import useCurrentUser from '@/store/useCurrentUser';
import Lottie from 'lottie-react';
import { dogFlirtingAnimation, dogAnimation } from '../../dev-data/dogsAnimation';
import Link from 'next/link';
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

const TinderCard = dynamic(() => import('react-tinder-card'), {
  ssr: false
});

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
  const [characters, setCharacters] = useState();
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

  console.log(queryClient.getQueryData(['random-dogs']), isFetching);
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

  const handleCardLeftScreen = (dir) => {
    setDirection(dir);
  };

  return (
    <section className="relative background">
      <MovingBackground />
      <div className="container mx-auto flex justify-center items-center min-h-screen ">
        {isFetching || swipeLeftMutation.isLoading ? (
          <div className="max-w-[200px] max-h-[200px]">
            <Lottie animationData={dogAnimation} loop={true} />
          </div>
        ) : (
          <div>
            <TinderCard
              swipeRequirementType="position"
              preventSwipe={['up', 'down']}
              className="swipe"
              key={count}
              onCardLeftScreen={handleCardLeftScreen}>
              <div className="relative h-card w-card lg:w-cardSmall lg:h-cardSmall ">
                <Image
                  priority
                  fill
                  sizes="33vw"
                  draggable={false}
                  alt="image"
                  style={{ filter: 'brightness(.80)' }}
                  src={randomDog?.avatar}
                />

                <div className="font-mono absolute bottom-0 left-0 text-white pl-2 pb-2 flex items-center gap-x-5">
                  <div>
                    <h3>{randomDog?.name}</h3>
                    <h5>{randomDog?.age} years old</h5>
                  </div>
                  <div className="cursor-pointer">
                    <HoverCard width={280} shadow="md" position="top">
                      <HoverCard.Target>
                        <IconHelpSquare />
                      </HoverCard.Target>
                      <HoverCard.Dropdown>
                        <div>
                          <p className="font-sans text-black">
                            Hover card is revealed when user hovers over target element, it will be
                            hidden once mouse is not over both target and dropdown elements
                          </p>
                        </div>
                      </HoverCard.Dropdown>
                    </HoverCard>
                  </div>
                </div>
              </div>
            </TinderCard>

            <Title color="white" order={3} mt={20}>
              {data.dogCount} potential matches nearby {count}
            </Title>
          </div>
        )}
      </div>

      <Affix position={{ top: rem(40), right: rem(20) }}>
        <div className="max-w-[200px] max-h-[200px]">
          <Lottie animationData={dogFlirtingAnimation} loop={true} />
        </div>
      </Affix>

      <Affix position={{ top: rem(20), left: rem(20) }}>
        <Link href="/" passHref legacyBehavior>
          <Tooltip
            label="Back"
            color="orange"
            position="right-start"
            withArrow
            arrowPosition="center">
            <ActionIcon
              size="xl"
              variant="gradient"
              gradient={{ from: 'red', to: 'orange' }}
              radius="xl">
              <IconLogout size="1.2rem" />
            </ActionIcon>
          </Tooltip>
        </Link>
      </Affix>

      <Affix position={{ bottom: rem(100), left: rem(20) }}>
        <Tooltip
          label="My swipes"
          color="orange"
          position="right-start"
          withArrow
          arrowPosition="center">
          <ActionIcon
            size="xl"
            variant="gradient"
            gradient={{ from: 'red', to: 'orange' }}
            radius="xl">
            <IconHeart size="1.2rem" />
          </ActionIcon>
        </Tooltip>
      </Affix>

      <Affix position={{ bottom: rem(50), left: rem(20) }}>
        <Popover position="right-end" arrowPosition="side" withArrow shadow="md" width={350}>
          <Popover.Target>
            <Tooltip
              label="Change dog"
              color="orange"
              position="right-start"
              withArrow
              arrowPosition="center">
              <ActionIcon size="xl" variant="light" radius="xl">
                <IconArrowsExchange2 size="1.2rem" />
              </ActionIcon>
            </Tooltip>
          </Popover.Target>

          <Popover.Dropdown>
            {currentUser?.dogs?.map((dog) => (
              <DogButton dog={dog} />
            ))}
          </Popover.Dropdown>
        </Popover>
      </Affix>
    </section>
  );
};

export const getServerSideProps = async (context) => {
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
