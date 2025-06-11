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
    }
  },
  variants: {
    extend: {
      transform: ['hover', 'focus'],
    }
  }
};
