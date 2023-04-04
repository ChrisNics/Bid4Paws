import { Affix, ActionIcon, rem, Tooltip, Popover } from '@mantine/core';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { IconArrowsExchange2, IconLogout, IconHeart } from '@tabler/icons-react';
import useCurrentUser from '@/store/useCurrentUser';
import Lottie from 'lottie-react';
import { dogFlirtingAnimation } from '../../../dev-data/dogsAnimation';

const DogButton = dynamic(() => import('../DogButton'), {
  loading: () => <p>Loading...</p>
});

export const ChangeDog = () => {
  const currentUser = useCurrentUser((state) => state.currentUser);
  return (
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
  );
};

export const Exit = () => {
  return (
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
  );
};

export const MySwipe = () => {
  return (
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
  );
};

export const FlirtingDog = () => {
  <Affix position={{ top: rem(40), right: rem(20) }}>
    <div className="max-w-[200px] max-h-[200px]">
      <Lottie animationData={dogFlirtingAnimation} loop={true} />
    </div>
  </Affix>;
};
