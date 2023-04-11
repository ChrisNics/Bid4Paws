import { Tabs, LoadingOverlay, Loader } from '@mantine/core';
import { IconSwipe, IconHeart } from '@tabler/icons-react';
import Card from './Card';
import { useMySwipes } from '@/hooks/useMySwipes';
import { useSwipeYou } from '@/hooks/useSwipeYou';

const Content = ({ currentDog }) => {
  const { data: mySwipes, isFetching: mySwipesFetching } = useMySwipes(currentDog);
  const { data: swipeYou, isFetching: swipeYouFetching } = useSwipeYou(currentDog);

  if (mySwipesFetching || swipeYouFetching)
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
        <Tabs.Tab value="my-matches" icon={<IconHeart size="0.8rem" />}>
          Swipe you
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="my-swipes" pt="xs">
        <div className="grid grid-cols-3 gap-2 sm:gap-5">
          {mySwipes?.map((swipe) => (
            <Card dog={swipe.to.dog} />
          ))}
        </div>
      </Tabs.Panel>

      <Tabs.Panel value="my-matches" pt="xs">
        <div className="grid grid-cols-3 gap-2 sm:gap-5">
          {swipeYou?.map((swipe) => (
            <Card dog={swipe.from.dog} />
          ))}
        </div>
      </Tabs.Panel>
    </Tabs>
  );
};

export default Content;
