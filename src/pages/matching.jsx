import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { HoverCard, Affix, rem, ActionIcon, Tooltip, Popover } from '@mantine/core';
import { IconHeart, IconHelpSquare, IconArrowsExchange2 } from '@tabler/icons-react';
import MovingBackground from '@/components/MovingBackground';
import DogButton from '@/components/DogButton';
import useCurrentUser from '@/store/useCurrentUser';

const TinderCard = dynamic(() => import('react-tinder-card'), {
  ssr: false
});

const URL = 'https://randomuser.me/api/';

const Matching = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [lastDirection, setLastDirection] = useState();
  const { currentUser } = useCurrentUser((state) => ({ currentUser: state.currentUser }));

  const loadData = async () => {
    const response = await fetch(URL);
    const responseJSON = await response.json();
    const person = responseJSON.results[0];
    const gender = person.gender;
    const name = person.name.first + ' ' + person.name.last;
    const age = person.dob.age;
    const picture = person.picture.large;
    const { street, city, state } = person.location;
    const address = street.name + ', ' + city + ', ' + state;
    const email = person.email;

    const newCharacter = {
      gender: gender,
      name: name,
      age: age,
      picture: picture,
      address: address,
      email: email,
      phone: person.phone
    };
    setCharacters([...characters, newCharacter]);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const childRefs = useMemo(
    () =>
      Array(characters.length)
        .fill(0)
        .map((i) => React.createRef()),
    [characters.length]
  );

  const swiped = (direction, character) => {
    setLastDirection(direction);
  };

  const outOfFrame = () => {
    loadData();
  };

  return (
    <section className="relative background">
      <MovingBackground />
      <div className="container mx-auto flex justify-center items-center min-h-screen ">
        {loading ? (
          <div>
            <span>Loading...</span>
          </div>
        ) : (
          <div>
            <div>
              <TinderCard
                ref={childRefs[childRefs.length - 1]}
                className="swipe"
                key={characters.length}
                onSwipe={(dir) => swiped(dir, characters[characters.length - 1])}
                onCardLeftScreen={() => outOfFrame()}>
                <div className="relative h-card w-card lg:w-cardSmall lg:h-cardSmall  bg-orange-500">
                  <Image
                    priority
                    fill
                    sizes="33vw"
                    draggable={false}
                    alt="image"
                    style={{ filter: 'brightness(.80)' }}
                    src="https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />

                  <div className="font-mono absolute bottom-0 left-0 text-white pl-2 pb-2 flex items-center gap-x-5">
                    <div>
                      <h3>Tommy Dogs</h3>
                      <h5>Aspin</h5>
                    </div>
                    <div className="cursor-pointer">
                      <HoverCard width={280} shadow="md" position="top">
                        <HoverCard.Target>
                          <IconHelpSquare />
                        </HoverCard.Target>
                        <HoverCard.Dropdown>
                          <div>
                            <p className="font-sans text-black">
                              Hover card is revealed when user hovers over target element, it will
                              be hidden once mouse is not over both target and dropdown elements
                            </p>
                          </div>
                        </HoverCard.Dropdown>
                      </HoverCard>
                    </div>
                  </div>
                </div>
              </TinderCard>
            </div>
          </div>
        )}
      </div>

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
              <DogButton name={dog.name} breed={dog.breed} image={dog.avatar} />
            ))}
          </Popover.Dropdown>
        </Popover>
      </Affix>
    </section>
  );
};

export default Matching;
