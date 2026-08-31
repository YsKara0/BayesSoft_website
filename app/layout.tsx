import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LanguageProvider } from "@/components/LanguageProvider";
import { siteConfig } from "@/data/config";
import { createPageMetadata } from "@/data/seo";
import "flag-icons/css/flag-icons.min.css";
import "./globals.css";

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
  themeColor: "#060A10",
  colorScheme: "dark"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth" data-theme="dark" suppressHydrationWarning>
      <body className="bg-[#060A10] text-white selection:bg-bayes-blue selection:text-white">
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
