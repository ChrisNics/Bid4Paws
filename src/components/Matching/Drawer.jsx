import { Drawer as MantineDrawer, Group, Button, Divider } from '@mantine/core';
import UserButton from '../UserButton';

function Drawer({ opened, open, close }) {
  return (
    <MantineDrawer
      opened={opened}
      onClose={close}
      title="Swipe Right"
      overlayProps={{ opacity: 0 }}>
      <UserButton />
      <Divider size="sm" />
      <UserButton />
      <UserButton />
      <UserButton />
      <UserButton />
      <UserButton />
      <UserButton />
      <UserButton />
      <UserButton />
      <UserButton />
      <UserButton />
      <UserButton />
      <UserButton />
      <UserButton />
      <UserButton />
      <UserButton />
    </MantineDrawer>
  );
}

export default Drawer;
