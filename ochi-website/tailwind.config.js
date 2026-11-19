/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        FoundersGrotesk: ["FoundersGrotesk", "sans-serif"],
        NeueMontreal: ["NeueMontreal", "sans-serif"],
      },

      maxWidth: {
        container: "1440px",
      },
    },
  },

  plugins: [],
};