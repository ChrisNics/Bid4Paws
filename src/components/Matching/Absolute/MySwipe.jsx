import { Affix, rem, ActionIcon, Tooltip } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

const MySwipe = ({ open }) => {
  return (
    <Affix position={{ bottom: rem(100), left: rem(20) }}>
      <Tooltip
        label="My swipes"
        color="orange"
        position="right-start"
        withArrow
        arrowPosition="center">
        <ActionIcon
          onClick={open}
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

export default MySwipe;
