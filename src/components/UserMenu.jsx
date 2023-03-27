import { Menu, Group, Text, Avatar, UnstyledButton, createStyles, rem } from '@mantine/core';
import {
  IconLogout,
  IconHeart,
  IconStar,
  IconDog,
  IconSettings,
  IconPlayerPause,
  IconTrash,
  IconSwitchHorizontal,
  IconChevronDown
} from '@tabler/icons-react';
import { useState } from 'react';

const test = {
  user: {
    name: 'Jane Spoonfighter',
    email: 'janspoon@fighter.dev',
    image:
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80'
  }
};

const useStyles = createStyles((theme) => ({
  user: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    transition: 'background-color 100ms ease',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white
    },

    [theme.fn.smallerThan('xs')]: {
      display: 'none'
    }
  },

  userActive: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white
  }
}));

const UserMenu = () => {
  const { classes, theme, cx } = useStyles();
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const { user, tabs } = test;
  return (
    <Menu
      width={260}
      position="bottom-end"
      transitionProps={{ transition: 'pop-top-right' }}
      onClose={() => setUserMenuOpened(false)}
      onOpen={() => setUserMenuOpened(true)}
      withinPortal>
      <Menu.Target>
        <UnstyledButton className={cx(classes.user, { [classes.userActive]: userMenuOpened })}>
          <Group spacing={7}>
            <Avatar src={user.image} alt={user.name} radius="xl" size={20} />
            <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
              {user.name}
            </Text>
            <IconChevronDown size={rem(12)} stroke={1.5} />
          </Group>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item icon={<IconHeart size="0.9rem" color={theme.colors.red[6]} stroke={1.5} />}>
          Your swipes
        </Menu.Item>
        <Menu.Item icon={<IconStar size="0.9rem" color={theme.colors.yellow[6]} stroke={1.5} />}>
          Your bids
        </Menu.Item>

        <Menu.Label>Settings</Menu.Label>
        <Menu.Item icon={<IconSettings size="0.9rem" stroke={1.5} />}>Account settings</Menu.Item>
        <Menu.Item icon={<IconDog size="0.9rem" stroke={1.5} />}>My dogs</Menu.Item>
        <Menu.Item icon={<IconLogout size="0.9rem" stroke={1.5} />}>Logout</Menu.Item>

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item color="red" icon={<IconTrash size="0.9rem" stroke={1.5} />}>
          Delete account
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default UserMenu;
