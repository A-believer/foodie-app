/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "425px",
      md: "768px"
    },
    extend: {
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif']
      },
      backgroundImage: {
        'img1': "url('./assets/img1.png')",
        'img2': "url('./assets/img2.png')",
        'img3': "url('./assets/img3.png')",
        'img4': "url('./assets/img4.png')",
        'img5': "url('./assets/img5.png')",
        'img6': "url('./assets/img6.png')"
      }
    },
  },
  plugins: [],
}
