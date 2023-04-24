import { Tabs, LoadingOverlay, Loader } from '@mantine/core';
import { IconSwipe, IconHeart, IconUsers } from '@tabler/icons-react';
import Card from './Card';
import { useMySwipes } from '@/hooks/useMySwipes';
import { useSwipeYou } from '@/hooks/useSwipeYou';
import { useMutualSwipes } from '@/hooks/useMutualSwipes';

const Content = ({ currentDog }) => {
  const { data: mySwipes, isFetching: mySwipesFetching } = useMySwipes(currentDog);
  const { data: swipeYou, isFetching: swipeYouFetching } = useSwipeYou(currentDog);
  const { data: mutualSwipes, isFetching: mutualSwipesFetching } = useMutualSwipes(currentDog);

  if (mySwipesFetching || swipeYouFetching || mutualSwipesFetching)
    return (
      <LoadingOverlay
        overlayOpacity={1}
        visible={true}
        loader={<Loader variant="dots" color="orange" />}
      />
    );

  return (
    <Tabs defaultValue="my-swipes" color="orange">
      <Tabs.List grow>
        <Tabs.Tab value="my-swipes" icon={<IconSwipe size="0.8rem" />}>
          My Swipes
        </Tabs.Tab>
        <Tabs.Tab value="swipe-you" icon={<IconHeart size="0.8rem" />}>
          Swipe you
        </Tabs.Tab>
        <Tabs.Tab value="mutual-swipes" icon={<IconUsers size="0.8rem" />}>
          Mutual Swipes
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="my-swipes" pt="xs">
        <div className="grid grid-cols-3 gap-2 sm:gap-5">
          {mySwipes?.map((swipe) => (
            <Card swipe={swipe} dog={swipe.to.dog} matchID={swipe._id} />
          ))}
        </div>
      </Tabs.Panel>

      <Tabs.Panel value="swipe-you" pt="xs">
        <div className="grid grid-cols-3 gap-2 sm:gap-5">
          {swipeYou?.map((swipe) => (
            <Card dog={swipe.from.dog} matchID={swipe._id} showButton />
          ))}
        </div>
      </Tabs.Panel>

      <Tabs.Panel value="mutual-swipes" pt="xs">
        <div className="grid grid-cols-3 gap-2 sm:gap-5">
          {mutualSwipes?.map((swipe) => (
            <Card
              currentDog={currentDog}
              dog={
                swipe.from.dog._id === currentDog._id
                  ? swipe.to.dog
                  : swipe.to.dog._id === currentDog._id
                  ? swipe.from.dog
                  : null
              }
              matchID={swipe._id}
            />
          ))}
        </div>
      </Tabs.Panel>
    </Tabs>
  );
};

export default Content;
