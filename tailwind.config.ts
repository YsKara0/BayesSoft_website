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
          navy: "#002244",
          blue: "#1E3E62",
          ink: "#070A12",
          midnight: "#0B0F19",
          panel: "#101724",
          line: "#243246",
          frost: "#F5F8FB",
          silver: "#DDE7F0",
          teal: "#51D6CA",
          gold: "#C7A35A"
        }
      },
      boxShadow: {
        "premium-sm": "0 18px 60px rgba(0, 20, 48, 0.24)",
        "premium-lg": "0 30px 120px rgba(0, 18, 44, 0.38)"
      },
      backgroundImage: {
        "mesh-lines":
          "linear-gradient(rgba(221,231,240,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(221,231,240,0.045) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
