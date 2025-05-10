/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        hand: ['"Patrick Hand"', 'cursive'],
      },
      colors: {
        beige: '#f5f5dc',
        pink: {
          300: '#f9a8d4',
          500: '#ec4899',
        },
        orange: {
          200: '#fed7aa',
        },
        green: {
          400: '#4ade80',
        },
      },
    },
  },
  plugins: [],
};
