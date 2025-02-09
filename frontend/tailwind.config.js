/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: '#6A2C1C',
        gold: '#F4D03F',
        brown: {
        900: '#D4B29A'
        },
      },
      animation: {
        'slide-in-left': 'slide-in-left 1s ease-out',
        'fade-in': 'fade-in 2s ease-out',
      },
      keyframes: {
        'slide-in-left': {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
}
