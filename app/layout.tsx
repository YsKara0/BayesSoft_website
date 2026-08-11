import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LanguageProvider } from "@/components/LanguageProvider";
import { siteConfig } from "@/data/config";
import "flag-icons/css/flag-icons.min.css";
import "./globals.css";

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
    <html lang="tr" className="scroll-smooth" data-theme="light" suppressHydrationWarning>
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
