import { Affix, ActionIcon, Tooltip, rem } from '@mantine/core';
import Link from 'next/link';
import { IconSettings2 } from '@tabler/icons-react';

const Radius = () => {
  return (
    <Affix position={{ bottom: rem(150), left: rem(20) }}>
      <Link href="/my-account" passHref legacyBehavior>
        <Tooltip
          label="Settings"
          color="orange"
          position="right-start"
          withArrow
          arrowPosition="center">
          <ActionIcon size="xl" variant="light" radius="xl">
            <IconSettings2 size="1.2rem" />
          </ActionIcon>
        </Tooltip>
      </Link>
    </Affix>
  );
};

export default Radius;
