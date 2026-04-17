import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'luxe-beige': '#F5F5DC',
        'luxe-cream': '#FFFDD0',
        'luxe-sage': '#B2AC88',
        'luxe-gold': '#D4AF37',
        beige: '#F5F5DC',
        cream: '#FFFDD0',
        sage: '#B2AC88',
        'champagne-charcoal': '#2F2D26',
        'champagne-muted': '#5B5645',
      },
    },
  },
  plugins: [],
}

export default config
