import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      colors: {
        'deep-purple': 'var(--color-deep-purple)',
        'royal-purple': 'var(--color-royal-purple)',
        'lavender': 'var(--color-lavender)',
        'soft-pink': 'var(--color-soft-pink)',
        'rose-pink': 'var(--color-rose-pink)',
        'light-gray': 'var(--color-light-gray)',
        'dark-text': 'var(--color-dark-text)',
      },
      fontFamily: {
        heading: 'var(--font-family-heading)',
        sans: 'var(--font-family-sans)',
        mono: 'var(--font-family-mono)',
      },
      borderRadius: {
        full: 'var(--radius-full)',
      },
      boxShadow: {
        'luxury': '0 20px 60px rgba(106, 63, 203, 0.15)',
        'luxury-lg': '0 30px 90px rgba(106, 63, 203, 0.2)',
      },
      backgroundImage: {
        'gradient-luxury': 'linear-gradient(135deg, #3b1c6e, #6a3fcb, #f7b2d9)',
        'gradient-purple-pink': 'linear-gradient(135deg, #6a3fcb, #e86aa3)',
      },
    },
  },
  plugins: [],
}

export default config
