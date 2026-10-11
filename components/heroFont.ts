import localFont from "next/font/local";

export const heroFont = localFont({
  src: "./fonts/SpaceGrotesk-Bold.woff2",
  weight: "700",
  style: "normal",
  display: "swap",
  variable: "--font-hero",
});

