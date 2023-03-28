import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Burger, HoverCard } from '@mantine/core';
import Drawer from '@/components/Matching/Drawer';
import { useDisclosure } from '@mantine/hooks';
import { IconHelpSquare } from '@tabler/icons-react';
import DogFacts from '@/components/DogFacts';
import MovingBackground from '@/components/MovingBackground';

const TinderCard = dynamic(() => import('react-tinder-card'), {
  ssr: false
});

const URL = 'https://randomuser.me/api/';

const matching = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [lastDirection, setLastDirection] = useState();

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
                <div className="relative h-card w-card md:w-cardSmall md:h-cardSmall  bg-orange-500">
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

      <Drawer opened={opened} open={open} close={close} />
      <div className="absolute p-2 top-[70%] left-[2%] bg-slate-300 rounded-full">
        <Burger onClick={open} opened={opened} />
      </div>

      <div className="absolute top-0 right-0 max-w-sm">
        <DogFacts color="white" />
      </div>
    </section>
  );
};

export default matching;
