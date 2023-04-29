import { useState } from 'react';
import {
  createStyles,
  Header as MantineHeader,
  Container,
  Burger,
  rem,
  useMantineTheme,
  Loader
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import UserMenu from './UserMenu';
import useCurrentUser from '@/store/useCurrentUser';
import _ from 'lodash';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';

const MobileUserMenu = dynamic(() => import('../Header/MobileUserMenu'), {
  loading: () => <Loader variant="dots" color="orange" />
});

const HEADER_HEIGHT = rem(60);

const links = [
  {
    link: '/',
    label: 'Home'
  },
  {
    link: '/pricing',
    label: 'Pricing'
  },
  {
    link: '/learn',
    label: 'Learn'
  },
  {
    link: '/community',
    label: 'Community'
  }
];

const useStyles = createStyles((theme, router) => ({
  root: {
    position: 'relative',
    zIndex: 1,
    background: 'transparent',
    borderBottom: 'none',
    height: 'max-content',
    maxHeight: 'max-content'
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%'
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : router.pathname === '/'
        ? theme.white
        : theme.black,
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colors.orange[0],
      color: theme.colors.orange[8]
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md
    }
  },

  linkPaper: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.colorScheme === 'light' ? theme.colors.orange[0] : '#423626',
      color: theme.colorScheme === 'light' ? theme.colors.orange[5] : theme.colors.orange[5]
      // backgroundColor: '#423626',
      // color:
    }
  }
}));

export default function Header() {
  const router = useRouter();
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles(router);
  const { currentUser } = useCurrentUser((state) => ({ currentUser: state.currentUser }));
  const theme = useMantineTheme();

  const itemsMobile = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, classes.linkPaper, {
        [classes.linkActive]: router.pathname === link.link
      })}>
      {link.label}
    </a>
  ));
  `~~`;

  const items = links.map((link) => (
    <Link key={link.label} href={link.link} legacyBehavior>
      <a
        className={cx(classes.link, theme.breakpoints, {
          [classes.linkActive]: router.pathname === link.link
        })}>
        {link.label}
      </a>
    </Link>
  ));

  return (
    <MantineHeader height={HEADER_HEIGHT} hidden={true} className={classes.root}>
      <Container className={classes.header}>
        <div className="flex justify-center items-center cursor-pointer">
          <Link href="/" passHref legacyBehavior>
            <Image
              src={
                theme.colorScheme === 'light'
                  ? router.pathname === '/'
                    ? '/logo-light.svg'
                    : '/logo-light-2.svg'
                  : '/logo-dark.svg'
              }
              alt="Logo"
              width={150}
              height={150}
              priority
            />
          </Link>
        </div>

        <div spacing={5} className="hidden md:flex gap-x-5">
          {items}
        </div>

        {!_.isEmpty(currentUser) && (
          <>
            <UserMenu currentUser={currentUser} />
            {opened && <MobileUserMenu items={itemsMobile} opened={opened} />}
          </>
        )}

        <Burger
          opened={opened}
          onClick={toggle}
          className="md:hidden"
          size="sm"
          color={router.pathname === '/' && 'white'}
        />
      </Container>
    </MantineHeader>
  );
}
