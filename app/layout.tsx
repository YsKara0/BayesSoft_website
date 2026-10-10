import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LanguageProvider } from "@/components/LanguageProvider";
import { siteConfig } from "@/data/config";
import { createPageMetadata } from "@/data/seo";
import "flag-icons/css/flag-icons.min.css";
import "./globals.css";
import "./design-tokens.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const mono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-mono",
  display: "swap",
});

const homeTitle =
  "BayesSoft | Dijital Ürün Mühendisliği — Web, Mobil ve Yapay Zekâ";

const homeMetadata = createPageMetadata({
  title: homeTitle,
  description:
    "BayesSoft, iş operasyonlarını tek mühendislik ekibiyle web, mobil ve yapay zekâ katmanlarında çalışan dijital ürünlere dönüştüren yazılım şirketidir.",
  path: "/",
  keywords: [
    "BayesSoft",
    "kurumsal yazılım şirketi",
    "özel yazılım geliştirme",
    "mobil uygulama geliştirme",
    "yapay zekâ çözümleri",
    "web uygulama geliştirme",
    "bulut ve DevOps",
  ],
});

export const metadata: Metadata = {
  ...homeMetadata,
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: homeTitle,
    template: "%s | BayesSoft",
  },
  applicationName: "BayesSoft",
  authors: [{ name: "BayesSoft", url: siteConfig.siteUrl }],
  creator: "BayesSoft",
  publisher: "BayesSoft",
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/bayes_logo_dark.png",
  },
};

const structuredData = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.siteUrl}/#organization`,
      name: "BayesSoft",
      url: siteConfig.siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.siteUrl}/bayes_logo_dark.png`,
      },
      email: siteConfig.contactEmail,
      sameAs: [
        siteConfig.linkedinUrl,
        siteConfig.githubUrl,
        siteConfig.xUrl,
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.siteUrl}/#website`,
      url: siteConfig.siteUrl,
      name: "BayesSoft",
      inLanguage: ["tr", "en", "de"],
      publisher: {
        "@id": `${siteConfig.siteUrl}/#organization`,
      },
    },
  ],
}).replace(/</g, "\\u003c");

export const viewport: Viewport = {
  themeColor: "#101827",
  colorScheme: "dark light"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`scroll-smooth ${jakarta.variable} ${inter.variable} ${mono.variable}`}
      data-theme="balanced-premium"
      suppressHydrationWarning
    >
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredData }}
        />
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
