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
          black: "#040608",
          darknavy: "#060A10",
          navy: "#0A1118",
          ink: "#080E17",
          deep: "#0F1926",
          card: "#0C1420",
          cardHover: "#121E2E",
          blue: "#0066FF",
          accent: "#0066FF",
          electric: "#0080FF",
          cyan: "#38BDF8",
          cobalt: "#0052CC",
          // Fallback aliases mapped to luminous blue
          red: "#0066FF",
          crimson: "#0052CC",
          darkred: "#003D99",
          paper: "#FFFFFF",
          frost: "rgba(255, 255, 255, 0.05)",
          silver: "#8A99AD",
          muted: "#5A687A",
          line: "rgba(255, 255, 255, 0.08)",
          teal: "#0080FF",
          aqua: "#121E2E",
          mint: "#38BDF8",
          coral: "#0066FF",
          sand: "#0052CC"
        }
      },
      boxShadow: {
        "premium-sm": "0 12px 32px rgba(0, 0, 0, 0.4)",
        "premium-lg": "0 28px 80px rgba(0, 0, 0, 0.6)",
        "blue-glow": "0 0 25px rgba(0, 102, 255, 0.45)",
        "blue-glow-lg": "0 0 50px rgba(0, 102, 255, 0.55)",
        "red-glow": "0 0 25px rgba(0, 102, 255, 0.45)",
        "red-glow-lg": "0 0 50px rgba(0, 102, 255, 0.55)"
      },
      backgroundImage: {
        "mesh-lines":
          "linear-gradient(rgba(0, 102, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 102, 255, 0.08) 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
