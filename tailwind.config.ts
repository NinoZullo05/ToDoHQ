import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    colors: {
      primary: '#ffffff', // classic white
      secondary: '#ff6767', // Custom red
      greenIndicator: '#05a301', // Custom green for completed tasks
      blueIndicator: '#0225ff', // Custom blue for in progress tasks
      redIndicator: '#f21e1eq', // Custom red for not started tasks
      date: '#3abeff', // Custom blue for date
      secondaryDisabled: '#ff9090', // secoondary color with less opacity
      link: '#008bd9', // color for link like <a> tag
      popupbackground : '#000000',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
