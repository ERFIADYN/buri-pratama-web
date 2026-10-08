import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#173A5E', dark: '#102B46', soft: '#E8EEF4' },
        wood: { DEFAULT: '#9C6B3E', dark: '#7F5530', soft: '#F6EEE6' },
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
