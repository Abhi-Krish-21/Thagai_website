
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: '#6B2D3C',
          light: '#8A3A4D',
          dark: '#4A1F2A',
        },
        coral: {
          DEFAULT: '#E07B54',
          light: '#E89575',
          dark: '#C05A35',
        },
        teal: {
          DEFAULT: '#2D8B8B',
          light: '#4AA3A3',
          dark: '#1F6161',
        },
        gold: {
          DEFAULT: '#D4A853',
          light: '#E0BC75',
          dark: '#A88235',
        },
        cream: {
          DEFAULT: '#FAF7F2',
          dark: '#F0EBE0',
          accent: '#F5F0E6',
        },
        brown: {
          DEFAULT: '#3D2E2A',
          light: '#5C4640',
        },
      },
      fontFamily: {
        serif: ['Lora', 'serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2.5rem',
        '5xl': '3.5rem',
        'blob': '40% 60% 70% 30% / 40% 50% 60% 50%',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'spin-slow': 'spin 20s linear infinite',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
