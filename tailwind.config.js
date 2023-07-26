/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // class, 'media' or boolean
  theme: {
    fontSize: {
      sm: ["14px", "20px"],
      base: ["16px", "20px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
    },
    extend: {
      colors: {
        blurple: "#5865F2",
        gray: {
          900: "#1e2124",
          800: "#282b30",
          700: "#36393e",
          600: "#424549",
          500: "#949BA4",
          400: "#d4d7dc",
          300: "#e3e5e8",
          200: "#ebedef",
          100: "#f2f3f5",
        },
      },
      spacing: {
        88: "22rem",
      },
    },
  },
  plugins: [],
};
