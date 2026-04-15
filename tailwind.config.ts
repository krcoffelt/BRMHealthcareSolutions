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
        ink: "#18181b",
        mist: "#f7ecef",
        sage: "#f3c7cf",
        sea: "#b21e35",
        linen: "#fcf8f4",
        sand: "#ead9dd",
        steel: "#5f6673",
        ember: "#7f1722",
        cloud: "#fffdfb",
      },
      boxShadow: {
        panel: "0 24px 60px rgba(113, 20, 32, 0.10)",
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
