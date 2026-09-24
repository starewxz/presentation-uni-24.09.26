/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gupta: {
          dark: '#080E1E',
          card: '#0E172E',
          cardLight: '#16223F',
          gold: '#D4AF37',
          goldLight: '#F3C766',
          goldDark: '#A27B2B',
          bronze: '#C58940',
          terracotta: '#C85A32',
          sandstone: '#F4EDE2',
          sandstoneMuted: '#C2B8A3',
          border: 'rgba(212, 175, 55, 0.22)',
          borderHover: 'rgba(212, 175, 55, 0.55)',
        }
      },
      fontFamily: {
        serif: ['"Cinzel"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.18)',
        'gold-glow-lg': '0 0 45px rgba(212, 175, 55, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.35s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
