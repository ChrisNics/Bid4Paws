import '@/styles/globals.css';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }) {
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
        <Component {...pageProps} />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
