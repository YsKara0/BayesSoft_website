import type { Locale } from "@/data/i18n";

type Localized = Record<Locale, string>;

export type ProjectMeta = {
  // What was built, the single tag shown for each project (Metek's homepage label is the model).
  kind: Localized;
  // Brand logo from /public/references; projects without one are grouped separately.
  logo?: string;
  // Light artwork that needs a dark tile, same as the homepage marquee's dark references.
  logoDark?: true;
};

export const projectMeta: Readonly<Record<string, ProjectMeta>> = {
  "furtherup-drive": {
    kind: { tr: "Koçluk platformu / Web uygulaması ve abonelik", en: "Coaching platform / Web app and subscriptions", de: "Coaching-Plattform / Web-App und Abonnements" },
    logo: "/references/further-up.png",
  },
  reviel: {
    kind: { tr: "Marka sitesi / Ürün tanıtımı ve ürün sayfaları", en: "Brand website / Product showcase and product pages", de: "Markenwebsite / Produktpräsentation und Produktseiten" },
    logo: "/references/reviel.png",
  },
  "metek-makina": {
    kind: { tr: "Kurumsal web / Endüstriyel ürün sunumu", en: "Corporate website / Industrial product presentation", de: "Unternehmenswebsite / Industrielle Produktpräsentation" },
    logo: "/references/metek.png",
  },
  "zirve-cilingir": {
    kind: { tr: "Kurumsal web sitesi / İçerik yönetim paneli", en: "Corporate website / Content management panel", de: "Unternehmenswebsite / Content-Management-Panel" },
    logo: "/references/zirve-cilingir.png",
  },
  "teskilat-icom": {
    kind: { tr: "Ajans web sitesi / İçerik yönetim paneli", en: "Agency website / Content management dashboard", de: "Agentur-Website / Content-Management-Dashboard" },
    logo: "/references/teskilat-icom.png",
    logoDark: true,
  },
  "tam-finans-fintech": {
    kind: { tr: "Çok platformlu ürün / Mobil uygulama ve yönetim paneli", en: "Multi-platform product / Mobile app and admin dashboard", de: "Plattformübergreifendes Produkt / Mobile App und Admin-Dashboard" },
    logo: "/references/tamfinans.png",
  },
  "smart-hospital": {
    kind: { tr: "Entegre sağlık platformu / Mobil ve masaüstü uygulamalar", en: "Integrated healthcare platform / Mobile and desktop apps", de: "Integrierte Gesundheitsplattform / Mobile und Desktop-Apps" },
    logo: "/references/kanuni_sultan_suleyman_hastanesi.png",
  },
  "atli-logistics": {
    kind: { tr: "İş gücü yönetim sistemi / Yönetim paneli", en: "Workforce management system / Admin dashboard", de: "Workforce-Management-System / Admin-Dashboard" },
    logo: "/references/atli.png",
  },
  "arelim-vulnerability-report": {
    kind: { tr: "Güvenlik analizi / Zafiyet raporu", en: "Security assessment / Vulnerability report", de: "Sicherheitsanalyse / Schwachstellenbericht" },
    logo: "/references/arel.png",
  },
  "petnest-platform": {
    kind: { tr: "Mekân keşif platformu / Mobil uygulama ve panel", en: "Venue discovery platform / Mobile app and dashboard", de: "Plattform zur Ortssuche / Mobile App und Dashboard" },
  },
  "military-aircraft-classification": {
    kind: { tr: "Derin öğrenme / Görüntü sınıflandırma", en: "Deep learning / Image classification", de: "Deep Learning / Bildklassifikation" },
  },
  "ai-chatbot": {
    kind: { tr: "LLM sohbet platformu / Güvenli yönetim paneli", en: "LLM chat platform / Secure admin dashboards", de: "LLM-Chatplattform / Sichere Admin-Dashboards" },
  },
  "maritime-horizon-segmentation": {
    kind: { tr: "Araştırma / Görüntü segmentasyonu", en: "Research / Image segmentation", de: "Forschung / Bildsegmentierung" },
  },
};

export const otherProjectsLabel: Localized = { tr: "Diğer projeler", en: "Other projects", de: "Weitere Projekte" };
