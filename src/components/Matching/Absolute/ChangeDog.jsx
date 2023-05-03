import dynamic from 'next/dynamic';
import { Tooltip, Affix, ActionIcon, rem, Popover } from '@mantine/core';
import { IconArrowsExchange2 } from '@tabler/icons-react';
import useCurrentUser from '@/store/useCurrentUser';

const DogButton = dynamic(() => import('../DogButton'), {
  loading: () => <p>Loading...</p>
});

const ChangeDog = () => {
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
            <DogButton dog={dog} key={dog._id} />
          ))}
        </Popover.Dropdown>
      </Popover>
    </Affix>
  );
};

export default ChangeDog;
