/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

export default withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  important: true,
  theme: {
    extend: {
      colors: {
        primary: {
          200: '#FF88FF',
          300: '#FF1ffe',
          400: '#ff00fe',
          500: '#e800e7',
        },

        secondary: {
          200: '#FFA93F',
          300: '#FF9B21',
          400: '#FE8C00',
          500: '#DC9000',
        },

        tertiary: {
          200: '#3FAEFF',
          300: '#20A1FF',
          400: '#0094FF',
          500: '#0081DF',
        },

        question: {
          saved: {
            100: '#C16D04',
            200: '#6C4727',
            300: '#553C2D'
          },
          selected : {
            100: '#48D9BC',
            200: '#3A6363',
            300: '#37454D'
          },
          scratched: {
            100: '#C2C9D1',
            200: '#C2C9D1',
            300: '#ffffff10',
            400: '#1b1b1b80'
          }
        },

        black: '#1b1b1b',

        light: '#fafafa',

        border: '#c4c4c460',

        blurred: '#ffffff10',

        modal: {
          bg: '#2E2937',
          heading: '#4D4955',
        }
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(0px, -50px) scale(1)',
          },
          '66%': {
            transform: 'translate(0px, 20px) scale(1)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          }
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-out-up': {
          '0%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
        },
        'float': {
          '0%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },

      },
      animation: {
        'fade-in-down': 'fade-in-down 0.2s ease-out',
        'fade-out-up': 'fade-out-up 0.2s ease-out',
        'float': 'float 1s',
        blob: 'blob 7s infinite',
      },
    },
  },
  plugins: [],
});
