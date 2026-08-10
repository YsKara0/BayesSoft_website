import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LanguageProvider } from "@/components/LanguageProvider";
import { siteConfig } from "@/data/config";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin", "latin-ext"], weight: ["700", "800"], variable: "--font-montserrat", display: "swap" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin", "latin-ext"], weight: ["500", "600", "700"], variable: "--font-jakarta", display: "swap" });
const inter = Inter({ subsets: ["latin", "latin-ext"], weight: ["400", "500", "600"], variable: "--font-inter", display: "swap" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin", "latin-ext"], weight: ["500", "600"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: "BayesSoft | Kurumsal Yazılım ve Teknoloji",
  description:
    "BayesSoft; kurumsal yazılım, mobil uygulama, yapay zeka destekli sistemler ve modern mühendislik çözümleri geliştiren teknoloji ekibidir.",
  keywords: [
    "BayesSoft",
    "kurumsal yazılım",
    "web geliştirme",
    "mobil uygulama",
    "yapay zeka",
    "bulut mimarisi"
  ],
  icons: {
    icon: "/bayes_logo_dark.png",
  },
  openGraph: {
    title: "BayesSoft | Kurumsal Yazılım ve Teknoloji",
    description:
      "Kurumsal ürün mühendisliği, mobil uygulamalar, bulut sistemleri ve yapay zeka destekli teknoloji çözümleri.",
    url: siteConfig.siteUrl,
    siteName: "BayesSoft",
    type: "website",
    images: [
      {
        url: `${siteConfig.siteUrl}/og.png`,
        width: 1733,
        height: 907,
        alt: "BayesSoft — Fikirden üretime, tek sistem.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BayesSoft | Kurumsal Yazılım ve Teknoloji",
    description: "Fikirden üretime, tek sistem.",
    images: [`${siteConfig.siteUrl}/og.png`],
  },
  alternates: {
    canonical: siteConfig.siteUrl
  }
};

export const viewport: Viewport = {
  themeColor: "#0B192C",
  colorScheme: "light"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${montserrat.variable} ${jakarta.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`} data-theme="light" suppressHydrationWarning>
      <body>
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
