import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bayes: {
          ink: "#06272D",
          deep: "#083F47",
          navy: "#0B5964",
          blue: "#117C8A",
          teal: "#42D8CD",
          aqua: "#DDF8F5",
          mint: "#BDF0E9",
          paper: "#F7FFFD",
          frost: "#FFFFFF",
          silver: "#5C7478",
          line: "#96DAD2",
          sand: "#D8C58C"
        }
      },
      boxShadow: {
        "premium-sm": "none",
        "premium-lg": "none"
      },
      backgroundImage: {
        "mesh-lines":
          "linear-gradient(rgba(6,39,45,0.075) 1px, transparent 1px), linear-gradient(90deg, rgba(6,39,45,0.075) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
