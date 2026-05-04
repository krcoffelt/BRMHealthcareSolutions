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
        ink: "#f8f6f5",
        mist: "#181818",
        sage: "#e9bcb5",
        sea: "#e60000",
        linen: "#0a0a0a",
        sand: "#222222",
        steel: "#c6c6c7",
        ember: "#ff3b30",
        cloud: "#131313",
        charcoal: "#050505",
        bone: "#333333",
      },
      boxShadow: {
        panel: "none",
        float: "0 0 0 1px rgba(230, 0, 0, 0.35)",
      },
      fontFamily: {
        sans: ['"Inter"', '"Avenir Next"', "Segoe UI", "sans-serif"],
        display: ['"Space Grotesk"', '"Avenir Next"', "Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
