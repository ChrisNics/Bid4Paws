import { Menu, Group, Text, Avatar, UnstyledButton, createStyles, rem } from '@mantine/core';
import {
  IconLogout,
  IconHeart,
  IconStar,
  IconDog,
  IconSettings,
  IconTrash,
  IconMessage,
  IconChevronDown
} from '@tabler/icons-react';
import { useState } from 'react';
import Link from 'next/link';
import signOut from '../../../lib/signOut';
import { useRouter } from 'next/router';

const useStyles = createStyles((theme, router) => ({
  user: {
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : router.pathname === '/'
        ? theme.white
        : theme.black,
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    transition: 'background-color 100ms ease',

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[8]
          : router.pathname === '/'
          ? '#ecf0ef26'
          : theme.white
    },

    [theme.fn.smallerThan('xs')]: {
      display: 'none'
    }
  },

  userActive: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[8]
        : router.pathname === '/'
        ? '#ecf0ef26'
        : theme.white
  }
}));

const UserMenu = ({ currentUser }) => {
  const router = useRouter();
  const { classes, theme, cx } = useStyles(router);
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  return (
    <div className="hidden md:block">
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
              <Avatar src={currentUser.avatar} alt={currentUser.fullName} radius="xl" size={20} />
              <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
                {currentUser.fullName}
              </Text>
              <IconChevronDown size={rem(12)} stroke={1.5} />
            </Group>
          </UnstyledButton>
        </Menu.Target>
        <Menu.Dropdown>
          <Link href="/chat" passHref legacyBehavior>
            <Menu.Item
              icon={<IconMessage size="0.9rem" color={theme.colors.red[6]} stroke={1.5} />}>
              <span>Messages</span>
            </Menu.Item>
          </Link>

          <Menu.Label>Settings</Menu.Label>
          <Link href="my-account" passHref legacyBehavior>
            <Menu.Item icon={<IconSettings size="0.9rem" stroke={1.5} />}>
              <span>Account Settings</span>
            </Menu.Item>
          </Link>
          <Link href="my-dogs" passHref legacyBehavior>
            <Menu.Item icon={<IconDog size="0.9rem" stroke={1.5} />}>My dogs</Menu.Item>
          </Link>
          <Link href="/signin" passHref legacyBehavior>
            <Menu.Item
              color="red"
              icon={<IconLogout size="0.9rem" stroke={1.5} />}
              onClick={() => signOut()}>
              Logout
            </Menu.Item>
          </Link>

          <Menu.Divider />

          <Menu.Label>Danger zone</Menu.Label>
          <Menu.Item color="red" icon={<IconTrash size="0.9rem" stroke={1.5} />}>
            Delete account
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};

export default UserMenu;
