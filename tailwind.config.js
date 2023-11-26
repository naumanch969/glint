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
        'gray': '#1a1a1a',
        'shadowGray': '#2d2c2c',
        'lightGray': '#161616',
        'textGray': '#595954',
        'silver': '#e6e6e6',
      },
      keyframes: {
        slowfade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        header_bubbles: {
          '0%': { scale: 0, translateY: '100vh' },
          '50%': { scale: 0.5, translateY: '45vh' },
          '100%': { scale: 1, translateY: '-10vh' },
        },
      },
      animation: {
        'slow-fade': 'slowfade 2s ease-in-out',
        'header-bubbles': 'header_bubbles 2s ease-in-out',
      },
    },
  },
};
