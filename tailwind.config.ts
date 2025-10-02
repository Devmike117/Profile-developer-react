/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // <- muy importante
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
