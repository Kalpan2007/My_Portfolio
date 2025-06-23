/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      transitionProperty: {
        'transform': 'transform',
      },
      textShadow: {
        glow: '0 0 8px rgba(173, 216, 230, 0.9), 0 0 12px rgba(173, 216, 230, 0.7)',
      },
    }
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
  variants: {
    extend: {
      transform: ['hover', 'focus'],
    }
  }
};
