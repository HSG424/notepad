/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        jost: ["Jost", "sans-serif"],
      },
      colors: {
        "dark-border": "#383838",
        "yellow-highlight": "rgba(253, 224, 71, .85)",
      },
    },
  },
  plugins: [],
};
