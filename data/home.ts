import type { Locale } from "@/data/i18n";

type HomeCopy = {
  hero: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    body: string;
    support: string;
    primary: string;
    secondary: string;
    operation: string;
    productCore: string;
    signal: string;
  };
  capabilities: {
    eyebrow: string;
    title: string;
    intro: string;
    foundation: string;
    foundationDetail: string;
    explore: string;
    pillars: Array<{ title: string; summary: string; items: string[] }>;
  };
  flagship: {
    eyebrow: string;
    title: string;
    intro: string;
    challenge: string;
    challengeText: string;
    solution: string;
    solutionText: string;
    product: string;
    layers: string[];
    outcome: string;
    outcomeText: string;
    detail: string;
    visualLabel: string;
    visualTitle: string;
  };
  work: {
    eyebrow: string;
    title: string;
    intro: string;
    viewAll: string;
    viewCase: string;
  };
  clients: { eyebrow: string; title: string; intro: string };
  team: {
    eyebrow: string;
    title: string;
    intro: string;
    partner: string;
    partnerDetail: string;
    stages: string[];
  };
};

export const homeCopy: Record<Locale, HomeCopy> = {
  tr: {
    hero: {
      eyebrow: "Dijital ürün mühendisliği",
      titleLead: "İş operasyonlarını",
      titleAccent: "dijital ürünlere dönüştürüyoruz.",
      body: "Web, mobil ve yapay zekâ katmanlarında çalışan sistemleri, tek bir mühendislik ekibiyle sıfırdan inşa ediyoruz.",
      support: "",
      primary: "İletişime Geç",
      secondary: "Projeleri İncele",
      operation: "İş operasyonu",
      productCore: "Ürün çekirdeği",
      signal: "Tek sistem · Sürekli gelişim",
    },
    capabilities: {
      eyebrow: "Yetkinlikler",
      title: "Bir ürünün ihtiyaç duyduğu üç deneyim katmanı.",
      intro: "Birbirinden kopuk teslimatlar değil; aynı iş hedefi, veri modeli ve ürün mimarisi etrafında çalışan web, mobil ve yapay zekâ deneyimleri.",
      foundation: "Mühendislik temeli",
      foundationDetail: "Backend mimarisi, API’ler, altyapı, güvenlik, entegrasyonlar ve dağıtım her ürünün doğal parçası olarak kurulur.",
      explore: "Tüm yetkinlikler",
      pillars: [
        { title: "Web Platformları", summary: "Operasyonunuzu görünür, yönetilebilir ve müşterileriniz için erişilebilir hale getiren dijital merkezler.", items: ["Kurumsal platformlar", "Müşteri portalları", "Operasyon panelleri", "E-ticaret", "İç sistemler", "Kurumsal web siteleri"] },
        { title: "Mobil Ürünler", summary: "Aynı ürün çekirdeğini sahaya, çalışanlarınıza ve müşterilerinizin cebine taşıyan uygulamalar.", items: ["iOS uygulamaları", "Android uygulamaları", "Müşteri uygulamaları", "Saha ekipleri", "Gerçek zamanlı akışlar", "Cross-platform ürünler"] },
        { title: "AI & Otomasyon", summary: "Ürününüzün verisini anlayan, iş akışlarını hızlandıran ve kararları destekleyen akıllı katmanlar.", items: ["AI asistanları", "Kurumsal bilgi sistemleri", "RAG", "İş akışı otomasyonu", "Akıllı arama", "AI entegrasyonları"] },
      ],
    },
    flagship: {
      eyebrow: "Öne çıkan vaka · Tam Finans",
      title: "Karmaşık finansal akışları bağlantılı bir dijital ürüne dönüştürmek.",
      intro: "KOBİ’ler, operasyon ekipleri ve yönetim için ayrı ihtiyaçları; ortak veri ve güvenlik katmanında çalışan çok platformlu bir fintech ekosisteminde birleştirdik.",
      challenge: "İhtiyaç",
      challengeText: "Konum tabanlı işletme keşfi, kullanıcı etkileşimi ve yönetim süreçlerinin güvenli ve merkezi bir ürün içinde çalışması gerekiyordu.",
      solution: "Çözüm",
      solutionText: "Flutter mobil deneyimi, React yönetim paneli ve Spring Boot servis katmanı tek ürün mimarisinde tasarlandı.",
      product: "Ürün katmanları",
      layers: ["Mobil uygulama", "Yönetim platformu", "Güvenli servisler", "Bildirim & depolama"],
      outcome: "Ortaya çıkan ürün",
      outcomeText: "İşletme keşfi, güvenli mesajlaşma, quiz akışları, audit log ve bildirimleri aynı deneyimde buluşturan üretime hazır bir sistem.",
      detail: "Vaka çalışmasını incele",
      visualLabel: "Bağlantılı fintech ürünü",
      visualTitle: "Tek çekirdek. Çoklu deneyim.",
    },
    work: {
      eyebrow: "Seçili çalışmalar",
      title: "İnşa ettiğimiz dijital deneyimlerden seçkiler.",
      intro: "Kurumsal web deneyimlerinden operasyon platformlarına ve mobil ürünlere — her çalışma gerçek bir iş akışının etrafında şekillenir.",
      viewAll: "Tüm çalışmaları gör",
      viewCase: "Projeyi incele",
    },
    clients: {
      eyebrow: "Güven",
      title: "Ciddi ürünler geliştiren ekiplerin güvendiği teknoloji partneri.",
      intro: "Finans, sağlık, lojistik, eğitim ve üretim alanlarında çalışan kurumlarla ürün ve teknoloji geliştirdik.",
    },
    team: {
      eyebrow: "Tek mühendislik ekibi",
      title: "Bütün ürün. Tek sorumlu ekip.",
      intro: "Web ajansı, mobil geliştirici, backend ekibi ve AI danışmanı arasında koordinasyon kurmak zorunda kalmazsınız. Ürünün tüm teknik yaşam döngüsünü tek ekip sahiplenir.",
      partner: "Birbirinden kopuk tedarikçiler yerine tek ürün partneri.",
      partnerDetail: "Stratejiden canlıya, canlıdan sürekli gelişime kadar bağlam kaybolmaz; kararlar aynı ürün hedefiyle alınır.",
      stages: ["Strateji", "Ürün tasarımı", "Web", "Backend", "Mobil", "AI", "Yayın", "Sürekli gelişim"],
    },
  },
  en: {
    hero: {
      eyebrow: "Digital product engineering",
      titleLead: "We turn business operations",
      titleAccent: "into digital products.",
      body: "We build end-to-end systems across web, mobile, and AI layers from the ground up with a unified engineering team.",
      support: "",
      primary: "Get in Touch",
      secondary: "Explore Projects",
      operation: "Business operation",
      productCore: "Product core",
      signal: "One system · Continuous evolution",
    },
    capabilities: {
      eyebrow: "Capabilities",
      title: "Three experience layers. One complete product.",
      intro: "Not disconnected deliverables, but web, mobile and AI experiences working around the same business goal, data model and product architecture.",
      foundation: "Engineering foundation",
      foundationDetail: "Backend architecture, APIs, infrastructure, security, integrations and deployment are built as a natural part of every product.",
      explore: "Explore all capabilities",
      pillars: [
        { title: "Web Platforms", summary: "Digital centers that make your operation visible, manageable and accessible to customers.", items: ["Corporate platforms", "Customer portals", "Operational dashboards", "E-commerce", "Internal systems", "Corporate websites"] },
        { title: "Mobile Products", summary: "Applications that carry the same product core into the field, your workforce and your customers’ hands.", items: ["iOS applications", "Android applications", "Customer-facing apps", "Workforce applications", "Real-time flows", "Cross-platform products"] },
        { title: "AI & Automation", summary: "Intelligent layers that understand product data, accelerate workflows and support better decisions.", items: ["AI assistants", "Enterprise knowledge", "RAG", "Workflow automation", "Intelligent search", "AI integrations"] },
      ],
    },
    flagship: {
      eyebrow: "Flagship case · Tam Finans",
      title: "Turning complex financial workflows into a connected digital product.",
      intro: "We unified distinct needs for SMEs, operations teams and administrators in a multi-platform fintech ecosystem built on shared data and security layers.",
      challenge: "Challenge",
      challengeText: "Location-based business discovery, user engagement and administration had to work securely inside one central product.",
      solution: "Solution",
      solutionText: "A Flutter mobile experience, React administration platform and Spring Boot service layer were designed as one product architecture.",
      product: "Product layers",
      layers: ["Mobile application", "Management platform", "Secure services", "Notifications & storage"],
      outcome: "Product outcome",
      outcomeText: "A production-ready system connecting business discovery, secure messaging, quizzes, audit logs and notifications in one experience.",
      detail: "Explore the case study",
      visualLabel: "Connected fintech product",
      visualTitle: "One core. Multiple experiences.",
    },
    work: {
      eyebrow: "Selected work",
      title: "Selected digital experiences we’ve built.",
      intro: "From corporate web experiences to operational platforms and mobile products — every engagement is shaped around a real business workflow.",
      viewAll: "View all work",
      viewCase: "Explore project",
    },
    clients: {
      eyebrow: "Trust",
      title: "Trusted by teams building serious products.",
      intro: "We have built products and technology with organizations across finance, healthcare, logistics, education and manufacturing.",
    },
    team: {
      eyebrow: "One engineering team",
      title: "The entire product. One accountable team.",
      intro: "You do not need to coordinate a web agency, mobile developer, backend team and AI consultant. One team owns the complete technical product lifecycle.",
      partner: "One product partner instead of disconnected vendors.",
      partnerDetail: "Context stays intact from strategy to launch and continuous development, so every decision serves the same product goal.",
      stages: ["Strategy", "Product design", "Web", "Backend", "Mobile", "AI", "Launch", "Continuous development"],
    },
  },
  de: {
    hero: {
      eyebrow: "Digital Product Engineering",
      titleLead: "Wir verwandeln Geschäftsabläufe",
      titleAccent: "in digitale Produkte.",
      body: "Wir entwickeln vernetzte Systeme über Web-, Mobile- und KI-Ebenen hinweg mit einem einzigen Engineering-Team von Grund auf.",
      support: "",
      primary: "Kontakt aufnehmen",
      secondary: "Projekte ansehen",
      operation: "Geschäftsablauf",
      productCore: "Produktkern",
      signal: "Ein System · Ständige Weiterentwicklung",
    },
    capabilities: {
      eyebrow: "Kompetenzen",
      title: "Drei Erlebnis-Ebenen. Ein vollständiges Produkt.",
      intro: "Web-, Mobile- und KI-Erlebnisse arbeiten rund um dasselbe Geschäftsziel, Datenmodell und dieselbe Produktarchitektur.",
      foundation: "Engineering-Fundament",
      foundationDetail: "Backend-Architektur, APIs, Infrastruktur, Sicherheit, Integrationen und Deployment sind natürlicher Bestandteil jedes Produkts.",
      explore: "Alle Kompetenzen",
      pillars: [
        { title: "Web-Plattformen", summary: "Digitale Zentralen, die Abläufe sichtbar, steuerbar und für Kunden zugänglich machen.", items: ["Unternehmensplattformen", "Kundenportale", "Operations-Dashboards", "E-Commerce", "Interne Systeme", "Unternehmenswebsites"] },
        { title: "Mobile Produkte", summary: "Apps, die denselben Produktkern ins Feld, zu Mitarbeitenden und in die Hände Ihrer Kunden bringen.", items: ["iOS-Apps", "Android-Apps", "Kunden-Apps", "Workforce-Apps", "Echtzeit-Abläufe", "Cross-Platform-Produkte"] },
        { title: "KI & Automation", summary: "Intelligente Ebenen, die Produktdaten verstehen, Abläufe beschleunigen und Entscheidungen unterstützen.", items: ["KI-Assistenten", "Enterprise Knowledge", "RAG", "Workflow-Automation", "Intelligente Suche", "KI-Integrationen"] },
      ],
    },
    flagship: {
      eyebrow: "Flagship Case · Tam Finans",
      title: "Komplexe Finanzabläufe werden zu einem vernetzten digitalen Produkt.",
      intro: "Unterschiedliche Anforderungen von KMU, Betrieb und Verwaltung wurden in einem Fintech-Ökosystem mit gemeinsamer Daten- und Sicherheitsebene verbunden.",
      challenge: "Herausforderung",
      challengeText: "Standortbasierte Firmensuche, Nutzerbindung und Verwaltung mussten sicher in einem zentralen Produkt arbeiten.",
      solution: "Lösung",
      solutionText: "Flutter-App, React-Verwaltungsplattform und Spring-Boot-Services wurden als gemeinsame Produktarchitektur entwickelt.",
      product: "Produktebenen",
      layers: ["Mobile Anwendung", "Verwaltungsplattform", "Sichere Services", "Nachrichten & Speicher"],
      outcome: "Ergebnis",
      outcomeText: "Ein produktionsreifes System für Firmensuche, sichere Nachrichten, Quizmodule, Audit-Logs und Benachrichtigungen.",
      detail: "Case Study ansehen",
      visualLabel: "Vernetztes Fintech-Produkt",
      visualTitle: "Ein Kern. Mehrere Erlebnisse.",
    },
    work: {
      eyebrow: "Ausgewählte Projekte",
      title: "Ausgewählte digitale Erlebnisse, die wir entwickelt haben.",
      intro: "Von Unternehmenswebsites über Operations-Plattformen bis zu mobilen Produkten — jedes Projekt folgt einem realen Geschäftsablauf.",
      viewAll: "Alle Projekte",
      viewCase: "Projekt ansehen",
    },
    clients: {
      eyebrow: "Vertrauen",
      title: "Vertraut von Teams, die ernsthafte Produkte bauen.",
      intro: "Wir entwickeln Produkte und Technologie mit Organisationen aus Finanzen, Gesundheit, Logistik, Bildung und Produktion.",
    },
    team: {
      eyebrow: "Ein Engineering-Team",
      title: "Das gesamte Produkt. Ein verantwortliches Team.",
      intro: "Sie müssen nicht Webagentur, Mobile-Entwicklung, Backend-Team und KI-Beratung koordinieren. Ein Team verantwortet den gesamten technischen Produktlebenszyklus.",
      partner: "Ein Produktpartner statt unverbundener Dienstleister.",
      partnerDetail: "Vom Konzept bis zum Launch und zur kontinuierlichen Entwicklung bleibt der Kontext erhalten und jede Entscheidung dient demselben Produktziel.",
      stages: ["Strategie", "Produktdesign", "Web", "Backend", "Mobile", "KI", "Launch", "Weiterentwicklung"],
    },
  },
};
