import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      spacing: {
        container: '81.25rem',
        gutter: '2rem',
        xxs: '0.5rem',
        xs: '1rem',
        sm: '1.5rem',
        md: '2rem',
        lg: '2.5rem',
        xl: '3rem',
        xxl: '3.5rem'
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        sans: ['Poppins', 'sans-serif']
      },

      fontWeight: {
        light: '300',
        normal: '400',
        bold: '600'
      },

      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        xxl: '1.75rem'
      },

      colors: {
        primary: '#F231A5',
        secondary: '#3CD3C1',
        white: '#FAFAFA',
        black: '#030517',
        gray: {
          light: '#EAEAEA',
          DEFAULT: '#8F8F8F',
          dark: '#2E2F42'
        },
        bg: {
          main: '#06092B'
        }
      },

      zIndex: {
        base: '10',
        menu: '20',
        overlay: '30',
        modal: '40',
        alwaysOnTop: '50'
      },

      keyframes: {
        'grow-from-center': {
          from: { width: '0', left: '50%' },
          to: { width: '100%', left: '0' }
        }
      },

      animation: { 'underline-grow': 'grow-from-center 0.2s forwards' }
    }
  },
  plugins: []
}
export default config
