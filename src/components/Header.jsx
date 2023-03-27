import { useState } from 'react';
import {
  createStyles,
  Header as MantineHeader,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  rem
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantine/ds';
import UserMenu from './UserMenu';
import useCurrentUser from '@/store/useCurrentUser';
import _ from 'lodash';

const HEADER_HEIGHT = rem(60);

const links = [
  {
    link: '/about',
    label: 'Features'
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

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1
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
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0]
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md
    }
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color
    }
  }
}));

export default function Header({ hidden }) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();
  const { currentUser } = useCurrentUser((state) => ({ currentUser: state.currentUser }));

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        close();
      }}>
      {link.label}
    </a>
  ));

  return (
    <MantineHeader height={HEADER_HEIGHT} hidden={true} className={classes.root}>
      <Container className={classes.header}>
        <MantineLogo size={28} />
        <div spacing={5} className="hidden md:flex">
          {items}
        </div>

        {!_.isEmpty(currentUser) && (
          <div className="hidden md:block">
            <UserMenu currentUser={currentUser} />
          </div>
        )}

        <Burger opened={opened} onClick={toggle} className="md:hidden" size="sm" />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper
              className={`absolute top-16 left-0 right-0 z-0 rounded-t-none border-t-0 overflow-hidden md:hidden`}
              withBorder
              style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </MantineHeader>
  );
}
