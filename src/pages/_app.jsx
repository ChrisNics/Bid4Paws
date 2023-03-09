import '@/styles/globals.css';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import { SessionProvider } from 'next-auth/react';
import { Notifications } from '@mantine/notifications';
import { useEffect, useState } from 'react';
import useCurrentUser from '@/store/useCurrentUser';
import { useSession } from 'next-auth/react';

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
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        theme={{
          colorScheme,
          fontFamily: 'Roboto, sans-serif',
          fontFamilyMonospace: 'Monaco, Courier, monospace',
          headings: { fontFamily: 'Merriweather, serif' },
          breakpoints: {
            xs: '375px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px'
          }
        }}
        withGlobalStyles
        withNormalizeCSS>
        <Notifications />
        <SessionProvider session={session}>
          <Auth>
            <Component {...pageProps} />
          </Auth>
        </SessionProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

const Auth = ({ children }) => {
  const { data: session, status } = useSession();
  const { fetchCurrentUser, loading } = useCurrentUser((state) => ({
    fetchCurrentUser: state.fetchCurrentUser,

    loading: state.loading
  }));

  useEffect(() => {
    // We need to wait the useSession before calling our customize session
    if (status !== 'loading') {
      const fetchUser = async () => {
        await fetchCurrentUser(session?.id);
      };

      fetchUser();
    }
  }, [session]);

  if (loading) return <h1>LOading</h1>;
  return children;
};
