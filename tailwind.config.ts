import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          "100": "#FFFCFA",
          "200": "#FFF5F0",
          "300": "#FFEFE5",
          "400": "#FFDECC",
          "500": "#FFBE99",
          "600": "#FFAE80",
          "700": "#FF9E66",
          "800": "#FF8D4C",
        },
        secondary: {
          "100": "#B3B3B3",
          "200": "#98989A",
          "300": "#656567",
          "400": "#59595A",
          "500": "#4C4C4D",
          "600": "#333333",
          "700": "#262626",
          "800": "#191919",
        },
      },
    },
  },
  plugins: [],
};
export default config;
