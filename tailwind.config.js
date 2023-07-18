/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'star': "url('src/assets/estrella.webp')",
      }
    },
  },
  plugins: [],
}

