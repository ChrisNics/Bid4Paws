import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { AppShell, useMantineTheme } from '@mantine/core';
import { useRouter } from 'next/router';

export default function ApplicationContainer({ children }) {
  const theme = useMantineTheme();
  const router = useRouter();
  const isMatching =
    router.pathname.includes('/matching') ||
    router.pathname.includes('/signin') ||
    router.pathname.includes('/signup');

  if (isMatching) return children;

  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          paddingLeft: 0
        }
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      footer={<Footer />}
      header={<Header />}>
      {children}
    </AppShell>
  );
}
