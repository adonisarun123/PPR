import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        earth: {
          50: '#f8f6f3',
          100: '#ede8e0',
          200: '#ddd3c3',
          300: '#c7b69e',
          400: '#b39a7b',
          500: '#9f8260',
          600: '#8a6e53',
          700: '#715a45',
          800: '#5e4c3c',
          900: '#4f4033',
        },
        sage: {
          50: '#f6f7f4',
          100: '#e3e8dd',
          200: '#c7d1bc',
          300: '#a5b594',
          400: '#849a6f',
          500: '#6a8055',
          600: '#526442',
          700: '#415037',
          800: '#36412f',
          900: '#2e3829',
        },
        terracotta: {
          50: '#fdf5f3',
          100: '#fbe8e3',
          200: '#f8d5cb',
          300: '#f2b8a7',
          400: '#e98f76',
          500: '#dc6c4d',
          600: '#c95335',
          700: '#a8422a',
          800: '#8b3926',
          900: '#743325',
        },
        sand: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config


