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
import { QueryClient, QueryClientProvider, Hydrate, useQuery } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import useCurrentUser from '@/store/useCurrentUser';
import LoadingScreen from '@/components/LoadingScreen';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import _ from 'lodash';

const CreateDog = dynamic(() => import('@/components/MyDogs/Modals/CreateDog'), {
  loading: () => (
    <LoadingOverlay
      visible={true}
      overlayBlur={2}
      loader={<Loader color="orange" variant="bars" />}
    />
  )
});

const UpdateDog = dynamic(() => import('@/components/MyDogs/Modals/UpdateDog'), {
  loading: () => (
    <LoadingOverlay
      visible={true}
      overlayBlur={2}
      loader={<Loader color="orange" variant="bars" />}
    />
  )
});

const Prompt = dynamic(() => import('@/components/MyDogs/Modals/Prompt'), {
  loading: () => (
    <LoadingOverlay
      visible={true}
      overlayBlur={2}
      loader={<Loader color="orange" variant="bars" />}
    />
  )
});

NiceModal.register('create-dog', CreateDog);
NiceModal.register('update-dog', UpdateDog);
NiceModal.register('prompt', Prompt);

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true
  });

  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['J', () => toggleColorScheme()]]);

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
                <Auth>
                  <ApplicationContainer>
                    <Component {...pageProps} />
                    <ReactQueryDevtools />
                    <div className="fixed bottom-10 right-10">
                      <ThemeToggle />
                    </div>
                  </ApplicationContainer>
                </Auth>
              </NiceModal.Provider>
            </SessionProvider>
          </MantineProvider>
        </ColorSchemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

const Auth = ({ children }) => {
  const { data: session, status } = useSession();
  const { setCurrentUser } = useCurrentUser((state) => ({
    setCurrentUser: state.setCurrentUser
  }));

  const { data, isLoading, error } = useQuery({
    queryKey: ['currentUser', session?.id],
    enabled: status !== 'loading',
    queryFn: async () => {
      if (!session) return {};
      const res = await fetch(`/api/user/${session.id}`);

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Failed to get current user.');
      }

      const { data } = await res.json();
      return data;
    },
    onSettled: (data) => {
      setCurrentUser(data);
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
      setCurrentUser({});
    }
  });

  console.log(isLoading);

  if (error) return <h1>{error}</h1>;
  if (isLoading) return <LoadingScreen />;

  return children;
};
