import dynamic from 'next/dynamic';
import Image from 'next/image';
import { HoverCard, Title } from '@mantine/core';
import { IconHelpSquare } from '@tabler/icons-react';
const TinderCard = dynamic(() => import('react-tinder-card'), {
  ssr: false,
  loading: () => <h1>loading...</h1>
});

const Card = ({ handleCardLeftScreen, randomDog, potentialMatchesCount, count }) => {
  return (
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
                      Hover card is revealed when user hovers over target element, it will be hidden
                      once mouse is not over both target and dropdown elements
                    </p>
                  </div>
                </HoverCard.Dropdown>
              </HoverCard>
            </div>
          </div>
        </div>
      </TinderCard>

      <Title color="white" order={3} mt={20}>
        {potentialMatchesCount} potential matches nearby {count}
      </Title>
    </div>
  );
};

export default Card;
