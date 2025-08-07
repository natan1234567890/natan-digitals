/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        gray: {
          900: '#0F0F0F',
          800: '#1A1A1A',
          700: '#2A2A2A',
          600: '#3A3A3A',
        },
        blue: {
          400: '#007BFF',
          500: '#007BFF',
          600: '#0056CC',
        },
        purple: {
          400: '#7B2CBF',
          500: '#7B2CBF',
          600: '#5A1F8C',
        },
        cyan: {
          400: '#00C2FF',
          500: '#00C2FF',
          600: '#008FCC',
        },
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};