/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        witt: ['Wittgenstein', 'serif'],
      },

      backgroundImage: {
        'heroBg': "url('/src/assets/images/tailwindHero.jpg')",
      }
    },
  },
  plugins: [],
}