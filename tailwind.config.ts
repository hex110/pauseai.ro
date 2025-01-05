import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent": "#ff9416",
      },
      fontFamily: {
        "saira": ["Saira Condensed", "sans-serif"],
        "roboto": ["Roboto Slab", "serif"],
      },
      fontWeight: {
        light: "300",
        regular: "400",
        bold: "700",
      },
    },
  },
} as Config;
