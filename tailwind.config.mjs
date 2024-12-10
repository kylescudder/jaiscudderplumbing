/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        "roboto-slab": ["RobotoSlab", "serif"],
      },
      keyframes: {
        slideFromRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideFromLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideOutLeft: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(-100%)', opacity: '0' },
        },
        slideOutRight: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        }
      },
      animation: {
        'slideFromRight': 'slideFromRight 0.5s ease-in-out',
        'slideFromLeft': 'slideFromLeft 0.5s ease-in-out',
        'slideOutLeft': 'slideOutLeft 0.5s ease-in-out',
        'slideOutRight': 'slideOutRight 0.5s ease-in-out'
      }
    },
  },
  plugins: [],
};
