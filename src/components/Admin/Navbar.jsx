import Link from 'next/link';
import { Navbar, Center, Tooltip, UnstyledButton, createStyles, Stack, rem } from '@mantine/core';
import { IconHome2, IconDog, IconUser, IconLogout } from '@tabler/icons-react';
import { MantineLogo } from '@mantine/ds';
import { useRouter } from 'next/router';
import signOut from '../../../lib/signOut';

const useStyles = createStyles((theme) => ({
  link: {
    width: rem(50),
    height: rem(50),
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.white,
    opacity: 0.85,

    '&:hover': {
      opacity: 1,
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
        0.1
      )
    }
  },

  active: {
    opacity: 1,
    '&, &:hover': {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
        0.15
      )
    }
  }
}));

const mockdata = [
  { icon: IconHome2, label: 'Dashboard', link: '/admin/dashboard' },
  { icon: IconDog, label: 'Dogs', link: '/admin/dogs' },
  { icon: IconUser, label: 'Users', link: '/admin/users' }
];

export default function AdminNavbar() {
  const router = useRouter();

  function NavbarLink({ icon: Icon, label, link, onClick }) {
    console.log(link, label);
    const { classes, cx } = useStyles();
    return (
      <>
        {link ? (
          <Link href={link ? link : null} passHref legacyBehavior>
            <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
              <UnstyledButton
                className={cx(classes.link, { [classes.active]: router.pathname.includes(link) })}>
                <Icon size="1.2rem" stroke={1.5} />
              </UnstyledButton>
            </Tooltip>
          </Link>
        ) : (
          <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
            <UnstyledButton
              onClick={onClick}
              className={cx(classes.link, { [classes.active]: router.pathname.includes(link) })}>
              <Icon size="1.2rem" stroke={1.5} />
            </UnstyledButton>
          </Tooltip>
        )}
      </>
    );
  }

  const links = mockdata.map((link, index) => <NavbarLink {...link} key={link.label} />);

  return (
    <Navbar
      className="sm:mr-10"
      width={{ base: 80 }}
      p="md"
      sx={(theme) => ({
        backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
          .background,
        position: 'relative',
        top: 0
      })}>
      <Center>
        <MantineLogo type="mark" inverted size={30} />
      </Center>
      <Navbar.Section grow mt={50}>
        <Stack justify="center" spacing={0}>
          {links}
        </Stack>
      </Navbar.Section>
      <Navbar.Section>
        <Stack justify="center" spacing={0}>
          <NavbarLink icon={IconLogout} label="Logout" onClick={signOut} />
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
}
