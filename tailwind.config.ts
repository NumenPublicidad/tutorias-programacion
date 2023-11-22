// tailwind.config.js
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // colors: {
        // customBlue: "#0F172A",
        // greenNode: '#8DC612',
        // blueReact : #51A2CC,
        // orangeHtml: #E4512C,
        // yellowJavascript: #F8E025,
       

     // },
    },
  },
  plugins: [],
};

export default config;
