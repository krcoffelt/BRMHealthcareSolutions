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
        ink: "#0f0b0d",
        mist: "#f7f3f4",
        sage: "#f0d5da",
        sea: "#b0122d",
        linen: "#fafafa",
        sand: "#f1eff0",
        steel: "#5d5660",
        ember: "#7d0d20",
        cloud: "#ffffff",
        charcoal: "#09070a",
        bone: "#d9d3d7",
      },
      boxShadow: {
        panel: "0 24px 70px rgba(16, 10, 12, 0.10)",
        float: "0 18px 40px rgba(176, 18, 45, 0.18)",
      },
      fontFamily: {
        sans: ['"Avenir Next"', "Manrope", "Segoe UI", "sans-serif"],
        display: ['"Baskerville"', '"Iowan Old Style"', '"Palatino Linotype"', "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
