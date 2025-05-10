/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        hand: ['"Patrick Hand"', 'cursive'],
      },
    },
  },
  plugins: [],
}

module.exports = {
  theme: {
    extend: {
      colors: {
        beige: '#f5f5dc', // light beige
      },
    },
  },
  plugins: [],
};