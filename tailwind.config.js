/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        caveat: ["Caveat", "cursive"],
        sans: ["Montserrat", "sans-serif"],
      },
      colors: {
        "dark-border": "#383838",
        "yellow-highlight": "rgba(253, 224, 71, .7)",
      },
    },
  },
  plugins: [],
};
