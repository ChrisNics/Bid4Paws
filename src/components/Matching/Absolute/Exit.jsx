import { Affix, Tooltip, ActionIcon, rem } from '@mantine/core';
import Link from 'next/link';
import { IconLogout } from '@tabler/icons-react';

const Exit = () => {
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

export default Exit;
