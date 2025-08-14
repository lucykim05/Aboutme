import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography')],
};

export default config;
