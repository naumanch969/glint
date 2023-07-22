/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '420px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'green': '#00B753',
        'white': '#fff',
        'black': '#000',
        'darkGray': '#111111',
        'lightGray': '#161616',
        'textGray': '#595954',
        'silver': '#e6e6e6',
      },
      animation: {
        slowfade: 'slowfade 2.2s ease-in-out',
      },
      keyframes: {
        slowfade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
    },
  },
};
