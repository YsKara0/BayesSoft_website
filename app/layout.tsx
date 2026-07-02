import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { siteConfig } from "@/data/config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: "Bayessoft | Software and Technology Team",
  description:
    "Bayessoft is a software and technology team building polished digital products, reliable platforms, and modern engineering systems.",
  keywords: [
    "Bayessoft",
    "software team",
    "technology portfolio",
    "web development",
    "AI engineering",
    "cloud architecture"
  ],
  openGraph: {
    title: "Bayessoft | Software and Technology Team",
    description:
      "Premium software engineering, product design, cloud systems, and AI-powered technology from the Bayessoft team.",
    url: siteConfig.siteUrl,
    siteName: "Bayessoft",
    type: "website"
  },
  alternates: {
    canonical: siteConfig.siteUrl
  }
};

export const viewport: Viewport = {
  themeColor: "#0B0F19",
  colorScheme: "dark light"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-theme="dark" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
