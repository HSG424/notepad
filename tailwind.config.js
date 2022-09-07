/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#395B64",
        "primary-light": "#416771",
        "primary-lighter": "#4a7682",
        secondary: "#E7F6F2",
        dark: "#3b4444",
        darker: "#2C3333",
        "blue-highlight": "#8edbf0",
      },
    },
  },
  plugins: [],
};
