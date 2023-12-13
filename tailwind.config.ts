import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    height: {
      dscreen: '100dvh',
    },
    screens: {
      desktop: '640px',
    },
    extend: {
      colors: {
        primary: '#1CD79F',
        grey50: '#F9F8F8',
        grey200: '#D9D9D9',
        grey400: '#BDBDBD',
        grey500: '#9F9F9F',
        black50: '#1e1e1e',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
