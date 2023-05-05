import dynamic from 'next/dynamic';
import React from 'react';
import Image from 'next/image';
import { HoverCard, Title, Text } from '@mantine/core';
import { IconHelpSquare } from '@tabler/icons-react';
import TinderCard from 'react-tinder-card';
import { useQueryClient } from '@tanstack/react-query';

const Card = ({ handleCardLeftScreen, randomDog, count, nearbyDogs }) => {
  const queryClient = useQueryClient();
  const handleRefresh = () => {
    queryClient.invalidateQueries(['random-dogs']);
  };
  return (
    <div>
      {randomDog ? (
        <TinderCard
          swipeRequirementType="position"
          preventSwipe={['up', 'down']}
          className="swipe"
          key={count}
          onCardLeftScreen={handleCardLeftScreen}>
          <div className="h-card lg:w-cardSmall lg:h-cardSmall relative ">
            <Image
              priority
              fill
              sizes="33vw"
              draggable={false}
              alt="image"
              style={{ filter: 'brightness(.80)' }}
              src={randomDog?.avatar}
            />

            <div className="absolute bottom-0 left-0 flex items-center gap-x-5 pb-2 pl-2 font-mono text-white">
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
                      <Text>Height: {randomDog?.height}</Text>
                      <Text>Weight: {randomDog?.weight}</Text>
                      <Text>Color: {randomDog?.color}</Text>
                      <Text>BloodLine: {randomDog?.bloodLine}</Text>
                      <Text>Caption: {randomDog?.caption}</Text>
                    </div>
                  </HoverCard.Dropdown>
                </HoverCard>
              </div>
            </div>
          </div>
        </TinderCard>
      ) : (
        <div className="h-card lg:w-cardSmall lg:h-cardSmall relative">
          <p className="font-sans">
            No match found at the moment.{' '}
            <span className="cursor-pointer font-mono text-purple-700" onClick={handleRefresh}>
              Refresh
            </span>
          </p>
        </div>
      )}

      <Title color="white" order={3} mt={20}>
        {nearbyDogs} potential matches nearby
      </Title>
    </div>
  );
};

export default React.memo(Card);
