/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif']
      },
      backgroundImage: {
        'img': "url('./assets/img1.png')"
      }
    },
  },
  plugins: [],
}
