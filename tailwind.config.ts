/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'luxe-beige': '#F5F5DC',
        'luxe-cream': '#FFFDD0',
        'luxe-sage': '#B2AC88',
        'luxe-gold': '#D4AF37',
      },
    },
  },
  plugins: [],
}
