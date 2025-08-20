/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#C2E6FF', // Light Blue
        secondary: '#111927', // Blue Gray
        accent: '#500F1C', // Red
        background: '#0D1520', // Blue
        decoration: '#C2E6FF', // Light Gray
      },
    },
  },

  plugins: [],
}
