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
          ink: "#0B192C",
          deep: "#163452",
          navy: "#0B192C",
          blue: "#008F85",
          teal: "#00C4B6",
          aqua: "#E8FBF9",
          mint: "#BDF4EF",
          coral: "#FF6B6B",
          paper: "#FFFFFF",
          frost: "#FFFFFF",
          silver: "#5B6978",
          line: "#B5E7E3",
          sand: "#FF6B6B"
        }
      },
      boxShadow: {
        "premium-sm": "0 12px 32px rgba(11, 25, 44, 0.08)",
        "premium-lg": "0 28px 80px rgba(11, 25, 44, 0.16)"
      },
      backgroundImage: {
        "mesh-lines":
          "linear-gradient(rgba(0,196,182,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(0,196,182,0.09) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
