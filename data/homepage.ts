import type { Locale } from "@/data/i18n";

export type CopyKey = "pauseMotion" | "resumeMotion" | "motionReducedInfo" | "scenePaused" | "home" | "projects" | "services" | "contact" | "cta" | "menu" | "navigation" | "language" | "skip" | "homeLabel" | "hero0" | "hero1" | "hero2" | "hero3" | "prism" | "selectFace" | "face" | "motionRead" | "motionPaused" | "motionManual" | "motionReduced" | "scene" | "replay" | "sceneLoading" | "sceneStatic" | "scenePlaying" | "sceneFinal" | "web" | "mobile" | "ai" | "custom" | "references" | "referenceGroup" | "referenceRegion" | "selected" | "works" | "allProjects" | "detail" | "live" | "external" | "previous" | "next" | "gallery" | "galleryCaption" | "galleryHelp" | "webTitle" | "webBody" | "mobileTitle" | "mobileBody" | "aiTitle" | "aiBody" | "customTitle" | "customBody" | "contactTitle" | "contactBody" | "footer" | "footerBrand" | "footerLinks" | "footerSocial" | "rights";
export type HomepageCopy = Record<CopyKey, string>;
export type ProjectSlug = "furtherup-drive" | "reviel" | "metek-makina";
export type ProjectCopy = { category: string; description: string; technologyLabel?: string };
export type HomepageLocale = { text: HomepageCopy; projects: Record<ProjectSlug, ProjectCopy> };


// Approved copy only. Uses the existing provider; no browser runtime or storage.
export function createHomepageTranslations(rights: Record<Locale, string>): Record<Locale, HomepageLocale> {
const tr = {
  pauseMotion: "Hareketi duraklat", resumeMotion: "Hareketi sürdür", motionReducedInfo: "Sisteminizde azaltılmış hareket açık. Otomatik animasyonlar kapalı kalır.", scenePaused: "Yazılım sistemi animasyonu duraklatıldı",
  home: "Ana Sayfa", projects: "Projeler", services: "Hizmetler", contact: "İletişim", cta: "Birlikte çalışalım",
  menu: "Menü", navigation: "Ana gezinme", language: "Site dili", skip: "İçeriğe geç", homeLabel: "BayesSoft ana sayfa",
  hero0: "İşinize göre\nyazılım.", hero1: "Web ve mobil\nçözümler.", hero2: "Yapay zekâ ile\ndaha fazlası.", hero3: "Size özel yazılım\nsistemleri.",
  prism: "Dört yüzlü tipografi prizması", selectFace: "Metin yüzünü seç", face: "Yüz",
  motionRead: "5 saniye okuma, ardından geçiş", motionPaused: "Otomatik geçiş bekliyor", motionManual: "Elle yüz seçimi", motionReduced: "Anlık yüz seçimi",
  scene: "Veri, kurallar ve web ile mobil arayüzlerden oluşan yazılım sistemi", replay: "Yazılım sistemi animasyonunu yeniden oynat",
  sceneLoading: "Sahne hazırlanıyor", sceneStatic: "Statik yazılım sistemi", scenePlaying: "Veri, kurallar ve arayüzler oluşuyor", sceneFinal: "Tamamlandı / sabit görünüm",
  web: "Web", mobile: "Mobil", ai: "Yapay zekâ", custom: "Özel yazılım",
  references: "Referanslar", referenceGroup: "Mevcut site referansları", referenceRegion: "Referans logoları. Akış, fare veya klavye odağı üzerindeyken duraklar.",
  selected: "Seçili projeler", works: "İşlerimiz konuşsun.", allProjects: "Tüm projeler", detail: "Proje detayları", live: "Canlı site", external: "Yeni sekmede açılır",
  previous: "Önceki proje", next: "Sonraki proje", gallery: "Proje görseli", galleryCaption: "3 proje · BayesSoft proje kapakları",
  galleryHelp: "Komşu yüzeyler aynı üç projenin döngüsel gösterimidir. Sol ve sağ ok tuşlarını, önceki ve sonraki düğmelerini veya yatay kaydırmayı kullanın.",
  webTitle: "Web geliştirme", webBody: "İş akışınıza uyum sağlayan web arayüzleri.", mobileTitle: "Mobil geliştirme", mobileBody: "Günlük kullanıma odaklanan mobil deneyimler.",
  aiTitle: "Yapay zekâ", aiBody: "Ürününüzde anlamlı karşılığı olan akıllı çözümler.", customTitle: "Özel yazılım", customBody: "İhtiyacınıza göre şekillenen sistemler ve entegrasyonlar.",
  contactTitle: "İşinizi konuşalım.", contactBody: "İhtiyacınızı anlatın. İlk adımı birlikte netleştirelim.",
  footer: "Site alt bilgisi", footerBrand: "İşinize göre yazılım. Birlikte, uçtan uca.", footerLinks: "Bağlantılar", footerSocial: "Bizi takip edin", rights: rights.tr,
};
return {
  tr: { text: tr, projects: {
    "furtherup-drive": { category: "Enterprise Coaching", description: "Koçluk, gelişim değerlendirmeleri ve abonelik süreçlerini bir araya getiren çalışma alanı." },
    reviel: { category: "Dermokozmetik / Eczane odaklı cilt bakımı", description: "Egzama ve hassas cilt odaklı ürünleri öne çıkaran, ürün tanıtımı ve ürün sayfaları içeren dermokozmetik marka sitesi." },
    "metek-makina": { category: "Endüstriyel sistemler / Makine mühendisliği", description: "Alüminyum döküm, ekstrüzyon ve yüzey işlem alanlarına yönelik mühendislik çözümlerini ve sistemlerini tanıtan endüstriyel kurumsal web sitesi.", technologyLabel: "Kurumsal web / Endüstriyel ürün sunumu" },
  } },
  en: { text: {
    pauseMotion: "Pause motion", resumeMotion: "Resume motion", motionReducedInfo: "Reduced motion is enabled on your system. Automatic animations stay off.", scenePaused: "Software system animation paused",
    home: "Home", projects: "Projects", services: "Services", contact: "Contact", cta: "Let’s work together",
    menu: "Menu", navigation: "Main navigation", language: "Site language", skip: "Skip to content", homeLabel: "BayesSoft home",
    hero0: "Software for\nyour business.", hero1: "Web and mobile\nsolutions.", hero2: "Go further\nwith AI.", hero3: "Software systems\nbuilt for you.",
    prism: "Four-sided typography prism", selectFace: "Choose a message", face: "Face",
    motionRead: "Read for 5 seconds, then transition", motionPaused: "Automatic transition paused", motionManual: "Manual message selection", motionReduced: "Instant message selection",
    scene: "A software system connecting data and business rules with web and mobile interfaces", replay: "Replay the software system animation",
    sceneLoading: "Preparing the scene", sceneStatic: "Static software system", scenePlaying: "Building data, rules and interfaces", sceneFinal: "Complete / still view",
    web: "Web", mobile: "Mobile", ai: "Artificial intelligence", custom: "Custom software",
    references: "References", referenceGroup: "References from the existing site", referenceRegion: "Reference logos. Motion pauses on hover or keyboard focus.",
    selected: "Selected projects", works: "Our work speaks.", allProjects: "All projects", detail: "Project details", live: "Live website", external: "Opens in a new tab",
    previous: "Previous project", next: "Next project", gallery: "Project visual", galleryCaption: "3 projects · BayesSoft project covers",
    galleryHelp: "Adjacent surfaces repeat the same three projects. Use the left and right arrow keys, previous and next buttons, or swipe horizontally.",
    webTitle: "Web development", webBody: "Web interfaces that fit the way you work.", mobileTitle: "Mobile development", mobileBody: "Mobile experiences built for everyday use.",
    aiTitle: "Artificial intelligence", aiBody: "Intelligent solutions with a clear role in your product.", customTitle: "Custom software", customBody: "Systems and integrations shaped around your needs.",
    contactTitle: "Let’s talk about your business.", contactBody: "Tell us what you need. We’ll define the next step together.",
    footer: "Site footer", footerBrand: "Software for your business. Together, from end to end.", footerLinks: "Explore", footerSocial: "Follow us", rights: rights.en,
  }, projects: {
    "furtherup-drive": { category: "Enterprise Coaching", description: "A workspace bringing coaching, development assessments and subscriptions together." },
    reviel: { category: "Dermocosmetics / Pharmacy-focused skincare", description: "A dermocosmetics brand website presenting products for eczema-prone and sensitive skin through dedicated product pages." },
    "metek-makina": { category: "Industrial systems / Mechanical engineering", description: "An industrial corporate website presenting engineering solutions and systems for aluminium casting, extrusion and surface treatment.", technologyLabel: "Corporate website / Industrial product presentation" },
  } },
  de: { text: {
    pauseMotion: "Bewegung pausieren", resumeMotion: "Bewegung fortsetzen", motionReducedInfo: "Ihr System bevorzugt reduzierte Bewegung. Automatische Animationen bleiben ausgeschaltet.", scenePaused: "Animation des Softwaresystems pausiert",
    home: "Startseite", projects: "Projekte", services: "Leistungen", contact: "Kontakt", cta: "Gemeinsam starten",
    menu: "Menü", navigation: "Hauptnavigation", language: "Sprache der Website", skip: "Zum Inhalt springen", homeLabel: "BayesSoft Startseite",
    hero0: "Software für\nIhr Unternehmen.", hero1: "Lösungen für\nWeb und Mobil.", hero2: "Mehr erreichen\nmit KI.", hero3: "Softwaresysteme\nnach Maß.",
    prism: "Vierseitiges Typografie-Prisma", selectFace: "Botschaft auswählen", face: "Seite",
    motionRead: "5 Sekunden lesen, dann wechseln", motionPaused: "Automatischer Wechsel pausiert", motionManual: "Manuelle Auswahl", motionReduced: "Sofortiger Wechsel",
    scene: "Ein Softwaresystem verbindet Daten und Geschäftsregeln mit Web- und mobilen Oberflächen", replay: "Animation des Softwaresystems erneut abspielen",
    sceneLoading: "Szene wird vorbereitet", sceneStatic: "Statische Ansicht des Softwaresystems", scenePlaying: "Daten, Regeln und Oberflächen entstehen", sceneFinal: "Abgeschlossen / statische Ansicht",
    web: "Web", mobile: "Mobil", ai: "Künstliche Intelligenz", custom: "Individuelle Software",
    references: "Referenzen", referenceGroup: "Referenzen der bestehenden Website", referenceRegion: "Referenzlogos. Die Bewegung pausiert bei Maus- oder Tastaturfokus.",
    selected: "Ausgewählte Projekte", works: "Unsere Arbeit spricht für sich.", allProjects: "Alle Projekte", detail: "Projektdetails", live: "Live-Website", external: "Öffnet in einem neuen Tab",
    previous: "Vorheriges Projekt", next: "Nächstes Projekt", gallery: "Projektvisualisierung", galleryCaption: "3 Projekte · BayesSoft-Projektmotive",
    galleryHelp: "Die benachbarten Flächen zeigen dieselben drei Projekte im Wechsel. Verwenden Sie die Pfeiltasten, die Schaltflächen oder wischen Sie horizontal.",
    webTitle: "Webentwicklung", webBody: "Weboberflächen, die zu Ihren Arbeitsabläufen passen.", mobileTitle: "Mobile Entwicklung", mobileBody: "Mobile Anwendungen für den täglichen Einsatz.",
    aiTitle: "Künstliche Intelligenz", aiBody: "Intelligente Lösungen mit klarem Nutzen für Ihr Produkt.", customTitle: "Individuelle Software", customBody: "Systeme und Integrationen für Ihre Anforderungen.",
    contactTitle: "Sprechen wir über Ihr Vorhaben.", contactBody: "Erzählen Sie uns, was Sie brauchen. Den nächsten Schritt planen wir gemeinsam.",
    footer: "Fußbereich der Website", footerBrand: "Software für Ihr Unternehmen. Gemeinsam, von Anfang bis Ende.", footerLinks: "Entdecken", footerSocial: "Folgen Sie uns", rights: rights.de,
  }, projects: {
    "furtherup-drive": { category: "Enterprise Coaching", description: "Ein gemeinsamer Arbeitsbereich für Coaching, Entwicklungsbewertungen und Abonnements." },
    reviel: { category: "Dermokosmetik / Hautpflege für Apotheken", description: "Eine Markenwebsite für Dermokosmetik, die Produkte für zu Ekzemen neigende und empfindliche Haut auf eigenen Produktseiten vorstellt." },
    "metek-makina": { category: "Industriesysteme / Maschinenbau", description: "Eine industrielle Unternehmenswebsite mit technischen Lösungen und Systemen für Aluminiumguss, Extrusion und Oberflächenbehandlung.", technologyLabel: "Unternehmenswebsite / Industrielle Produktpräsentation" },
  } },
};

}
