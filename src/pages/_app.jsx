import '@/styles/globals.css';
import { MantineProvider, ColorSchemeProvider, Loader, LoadingOverlay } from '@mantine/core';
import { SessionProvider } from 'next-auth/react';
import { Notifications } from '@mantine/notifications';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import ApplicationContainer from '@/components/ApplicationContainer';
import ThemeToggle from '@/components/ThemeToggle';
import NiceModal from '@ebay/nice-modal-react';
import dynamic from 'next/dynamic';
import { QueryClient, QueryClientProvider, Hydrate } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const CreateDog = dynamic(() => import('@/components/MyDogs/Modals/CreateDog'), {
  loading: () => (
    <LoadingOverlay
      visible={true}
      overlayBlur={2}
      loader={<Loader color="orange" variant="bars" />}
    />
  )
});

NiceModal.register('create-dog', CreateDog);

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const [colorScheme, setColorScheme] = useState('light');
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  const [queryClient] = useState(() => new QueryClient());

  useEffect(() => {
    const htmlTag = document.getElementsByTagName('html')[0];
    // Remove the previous colorScheme class
    htmlTag.classList.remove('light', 'dark');
    // Add the current colorScheme class
    htmlTag.classList.add(colorScheme);
  }, [colorScheme]);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
          <MantineProvider
            theme={{
              colorScheme,
              fontFamily: 'Roboto, sans-serif',
              fontFamilyMonospace: 'Monaco, Courier, monospace',
              headings: { fontFamily: 'Merriweather, serif' },
              breakpoints: {
                xs: '23.44em',
                sm: '40em',
                md: '48em',
                lg: '64em',
                xl: '80em',
                '2xl': '96em'
              }
            }}
            withGlobalStyles
            withNormalizeCSS>
            <Notifications />
            <SessionProvider session={session}>
              <NiceModal.Provider>
                <ApplicationContainer>
                  <Component {...pageProps} />
                  <ReactQueryDevtools />
                  <div className="fixed bottom-10 right-10">
                    <ThemeToggle />
                  </div>
                </ApplicationContainer>
              </NiceModal.Provider>
            </SessionProvider>
          </MantineProvider>
        </ColorSchemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
