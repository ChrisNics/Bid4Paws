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
import { useCurrentUser } from '@/hooks/useCurrentUser';
import LoadingScreen from '@/components/LoadingScreen';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import _ from 'lodash';

const GetStarted = dynamic(() => import('.').then((o) => o.GetStarted), {
  loading: () => <LoadingOverlay overlayOpacity={1} visible={true} loader={<LoadingScreen />} />
});

const CreateDog = dynamic(() => import('@/components/MyDogs/Modals/CreateDog'), {
  loading: () => <LoadingOverlay overlayOpacity={1} visible={true} loader={<LoadingScreen />} />
});

const UpdateDog = dynamic(() => import('@/components/MyDogs/Modals/UpdateDog'), {
  loading: () => <LoadingOverlay overlayOpacity={1} visible={true} loader={<LoadingScreen />} />
});

const Prompt = dynamic(() => import('@/components/MyDogs/Modals/Prompt'), {
  loading: () => <LoadingOverlay visible={true} loader={<LoadingScreen />} />
});

const PaymentMethod = dynamic(() => import('@/components/Pricing/Modal/PaymentMethod'), {
  loading: () => <LoadingOverlay visible={true} loader={<LoadingScreen />} />
});

const UpdateDogAdmin = dynamic(() => import('@/components/Admin/Table/Modals/UpdateDog'), {
  loading: () => <LoadingOverlay visible={true} loader={<LoadingScreen />} />
});

const UpdateUserAdmin = dynamic(() => import('@/components/Admin/Table/Modals/UpdateUser'), {
  loading: () => <LoadingOverlay visible={true} loader={<LoadingScreen />} />
});

const VerificationModal = dynamic(() => import('@/components/VerificationModal'), {
  loading: () => <LoadingOverlay visible={true} loader={<LoadingScreen />} />
});

NiceModal.register('create-dog', CreateDog);
NiceModal.register('update-dog', UpdateDog);
NiceModal.register('prompt', Prompt);
NiceModal.register('payment-method', PaymentMethod);
NiceModal.register('update-dog-admin', UpdateDogAdmin);
NiceModal.register('update-user-admin', UpdateUserAdmin);
NiceModal.register('verification-modal', VerificationModal);
NiceModal.register('get-started', GetStarted);

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
  const { data, isLoading, error } = useCurrentUser(status, session);

  if (error) return <h1>{error}</h1>;
  if (isLoading) return <LoadingScreen />;

  return children;
};
