import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#16303b",
        mist: "#f2f6f4",
        sage: "#b7d0c0",
        sea: "#2f6f68",
        linen: "#fcfaf6",
        sand: "#dcc9a3",
      },
      boxShadow: {
        panel: "0 20px 45px rgba(22, 48, 59, 0.08)",
      },
      fontFamily: {
        sans: ['"Avenir Next"', "Manrope", "Segoe UI", "sans-serif"],
        display: ['"Iowan Old Style"', '"Palatino Linotype"', "Book Antiqua", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
