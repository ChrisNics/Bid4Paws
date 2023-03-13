/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: 'class',
  content: [
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto, sans-serif'],
      mono: ['Merriweather, serif']
    },
    screens: {
      xs: '23.44em',
      sm: '40em',
      md: '48em',
      lg: '64em',
      xl: '80em',
      '2xl': '96em'
    },

    extend: {
      height: {
        card: '20rem',
        cardSmall: '32rem',
        cardLg: '40rem'
      },
      width: {
        card: '20rem',
        cardSmall: '32rem',
        cardLg: '40rem'
      }
    }
  },
  plugins: [require('tailwindcss-debug-screens'), require('flowbite/plugin')]
};
