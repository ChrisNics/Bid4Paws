import dynamic from 'next/dynamic';
import React from 'react';
import Image from 'next/image';
import { HoverCard, Title, Text } from '@mantine/core';
import { IconHelpSquare } from '@tabler/icons-react';
import TinderCard from 'react-tinder-card';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useQueryClient } from '@tanstack/react-query';

const dogProperties = [
  { label: 'Caption', value: 'caption' },
  { label: 'Height', value: 'height' },
  { label: 'Weight', value: 'weight' },
  { label: 'Color', value: 'color' },
  { label: 'BloodLine', value: 'bloodLine' },
  { label: 'Province', value: 'address.province' },
  { label: 'Barangay', value: 'address.barangay' },
  { label: 'Postal Code', value: 'address.postalCode' },
  { label: 'Landmark', value: 'address.geocoding.landmark' }
];

const Card = ({ handleCardLeftScreen, randomDog, count, nearbyDogs }) => {
  const queryClient = useQueryClient();
  const handleRefresh = () => {
    queryClient.invalidateQueries(['random-dogs']);
  };
  const currentYear = new Date().getFullYear();
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

            <div className="absolute bottom-0 left-0 flex w-full items-center gap-x-5 pb-2 pl-2 font-mono text-white">
              <div className="flex w-full justify-between px-5">
                <div>
                  <h3>{randomDog?.name}</h3>
                  <h5>{randomDog?.age} years old</h5>
                </div>

                <div className="flex flex-col items-end gap-y-2">
                  <div className="cursor-pointer">
                    <HoverCard width={350} shadow="md" position="top">
                      <HoverCard.Target>
                        <IconHelpSquare />
                      </HoverCard.Target>
                      <HoverCard.Dropdown>
                        {dogProperties.map(({ label, value }) => (
                          <Text
                            key={value}
                            sx={(theme) => ({
                              // subscribe to color scheme changes
                              color: theme.colorScheme === 'light' ? theme.black : '#C1C2C5'
                            })}>
                            {label}:{' '}
                            <Text span color="orange">
                              {value.includes('.')
                                ? (() => {
                                    let nestedValue = randomDog;
                                    const properties = value.split('.');
                                    for (let i = 0; i < properties.length; i++) {
                                      nestedValue = nestedValue?.[properties[i]];
                                    }
                                    return nestedValue;
                                  })()
                                : randomDog?.[value]}
                            </Text>
                          </Text>
                        ))}
                        <div className="z-50 flex gap-x-2">
                          {randomDog?.images.map((image) => (
                            <PhotoProvider className="z-50">
                              <PhotoView src={image}>
                                <div className="relative h-24 w-24">
                                  <Image
                                    priority
                                    fill
                                    src={image}
                                    alt="Random unsplash image"
                                    // imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
                                  />
                                </div>
                              </PhotoView>
                            </PhotoProvider>
                          ))}
                        </div>
                      </HoverCard.Dropdown>
                    </HoverCard>
                  </div>
                  <h5>{randomDog?.address?.city}</h5>
                </div>
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
