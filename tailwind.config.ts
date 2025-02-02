import type { Config } from 'tailwindcss';
import TailwindCSSMotion from 'tailwindcss-motion';
import colors from 'tailwindcss/colors';

const config: Config = {
  content: ['./src/**/*.{astro,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gitify: {
          navbar: '#24292e',
          footer: colors.gray[800],
          section: {
            light: colors.gray[50],
            dark: colors.gray[800],
          },
          hero: colors.gray[100],
          repo: {
            hover: colors.gray[300],
          },
          link: colors.white,
          download: {
            link: colors.black,
            rest: colors.green[700],
            hover: colors.green[800],
          },
          button: {
            rest: colors.blue[600],
            hover: colors.blue[700],
          },
        },
      },
    },
  },
  plugins: [TailwindCSSMotion],
};

export default config;
