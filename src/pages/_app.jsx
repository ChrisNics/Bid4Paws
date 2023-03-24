import '@/styles/globals.css';
import { MantineProvider, ColorSchemeProvider, Loader, LoadingOverlay } from '@mantine/core';
import { SessionProvider } from 'next-auth/react';
import { Notifications } from '@mantine/notifications';
import { useEffect, useState } from 'react';
import useCurrentUser from '@/store/useCurrentUser';
import { useSession } from 'next-auth/react';
import ApplicationContainer from '@/components/ApplicationContainer';
import ThemeToggle from '@/components/ThemeToggle';
import NiceModal from '@ebay/nice-modal-react';
import dynamic from 'next/dynamic';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// Create a client
const queryClient = new QueryClient();

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

  useEffect(() => {
    const htmlTag = document.getElementsByTagName('html')[0];
    // Remove the previous colorScheme class
    htmlTag.classList.remove('light', 'dark');
    // Add the current colorScheme class
    htmlTag.classList.add(colorScheme);
  }, [colorScheme]);

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

const Auth = ({ children }) => {
  const { data: session, status } = useSession();
  const { setCurrentUser } = useCurrentUser((state) => ({
    setCurrentUser: state.setCurrentUser
  }));

  const { data, isLoading, error } = useQuery({
    queryKey: ['currentUser'],
    enabled: status === 'authenticated',
    queryFn: async () => {
      console.log(session.id);
      const res = await fetch(`/api/user/${session.id}`);

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Failed to get current user.');
      }

      const { data } = await res.json();
      return data;
    }
  });

  if (error) return <h1>{error}</h1>;

  if (isLoading || status === 'loading')
    return (
      <div className="min-h-screen min-w-full flex justify-center items-center">
        <Loader color="orange" variant="bars" />;
      </div>
    );
  return children;
};
