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
        root: {
          backgroundImage:
            router.pathname === '/'
              ? theme.colorScheme === 'light'
                ? 'url(https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*)'
                : 'url(https://rare-gallery.com/mocahbig/33220-Dog-Puppy-Baby-AnimalGolden-Retriever-HD-Wallpaper.jpg)'
              : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        },
        main: {
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0
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
