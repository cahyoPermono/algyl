/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8FA295', // Sage Green
        secondary: '#E6DCCD', // Cream/Beige
        accent: '#D4A373', // Warm Earth
        background: '#FDFBF7', // Off-white
        text: '#2D3436', // Dark Charcoal for text
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
