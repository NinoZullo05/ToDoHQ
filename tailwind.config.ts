import type { Config } from 'tailwindcss';

export default {
  content: [],
  theme: {
    colors: {
      primary: '#ffffff', // classic white
      secondary: '#ff6767', // Custom red
      greenIndicator: '#05a301', // Custom green for completed tasks
      blueIndicator: '#0225ff', // Custom blue for in progress tasks
      redIndicator: '#f21e1eq', // Custom red for not started tasks
      date: '#3abeff', // Custom blue for date
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
