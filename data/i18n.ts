export type Locale = "tr" | "en" | "de";

const tr = {
  language: { label: "Dil", names: { tr: "Türkçe", en: "English", de: "Deutsch" } },
  nav: {
    home: "Ana Sayfa",
    about: "Hakkımızda",
    services: "Hizmetler",
    team: "Ekip",
    projects: "Projeler",
    contact: "İletişim",
    menu: "Menüyü aç veya kapat",
    cta: "Projenizi konuşalım",
  },
  hero: {
    eyebrow: "Kurumsal yazılım · Mobil ürün · Yapay zeka",
    titleLead: "Karmaşık fikirleri",
    titleAccent: "çalışan ürünlere",
    titleEnd: "dönüştürüyoruz.",
    body: "Kurumlar için güvenli backend, web paneli, mobil uygulama ve yapay zeka katmanlarını tek bir ürün sistemi olarak tasarlıyor ve geliştiriyoruz.",
    primary: "Projenizi konuşalım",
    secondary: "Hizmetleri incele",
    status: "Sistemler çevrimiçi",
    cardTitle: "Ürün mühendisliği",
    cardBody: "Fikirden üretime tek ekip, net mimari ve ölçülebilir çıktı.",
    signals: [
      "Web, mobil ve backend tek ekipte",
      "Güvenlik odaklı, ölçeklenebilir mimari",
      "AI destekli ürün ve otomasyon",
    ],
  },
  services: {
    eyebrow: "Hizmetler",
    title: "Ürünü yalnızca kodlamıyor, sistem olarak kuruyoruz.",
    intro: "Backend, mobil, panel, güvenlik ve yapay zeka katmanlarını birbirinden kopuk işler gibi değil; aynı ürün mimarisinin parçaları olarak ele alıyoruz.",
    more: "Tüm hizmetler",
    items: [
      { title: "Kurumsal Yazılım Geliştirme", summary: "Operasyonel ihtiyaçları ölçülebilir, güvenli ve bakımı kolay web sistemlerine dönüştürüyoruz.", outcome: "Teslim: yönetim paneli, rol bazlı yetkilendirme, API dokümantasyonu ve sürdürülebilir backend yapısı.", points: ["Admin panelleri", "REST API tasarımı", "Veritabanı mimarisi"] },
      { title: "Mobil Ürün Mühendisliği", summary: "Flutter tabanlı mobil uygulamaları backend servisleri ve yönetim panelleriyle birlikte uçtan uca kurguluyoruz.", outcome: "Teslim: iOS/Android uygulama, bildirim akışları, backend bağlantıları ve yayın öncesi test paketi.", points: ["iOS / Android", "Push bildirimleri", "Offline akışlar"] },
      { title: "Yapay Zeka ve Görü Sistemleri", summary: "Chatbot, sınıflandırma ve bilgisayarlı görü projelerini üretim ortamına uygun güvenlik katmanlarıyla geliştiriyoruz.", outcome: "Teslim: model entegrasyonu, güvenli kullanım katmanı, panel bağlantısı ve ölçülebilir çıktı raporu.", points: ["LLM entegrasyonu", "Computer vision", "Prompt güvenliği"] },
      { title: "Bulut, Güvenlik ve DevOps", summary: "Sistemleri izlenebilir, yedekli, erişim kontrollü ve ölçeklenebilir hale getiren altyapı kararlarını uyguluyoruz.", outcome: "Teslim: dağıtım akışı, depolama yapısı, erişim güvenliği, yedekleme ve ortam konfigürasyonu.", points: ["Docker", "Cloud storage", "RBAC / JWT"] },
    ],
  },
  why: {
    eyebrow: "Neden BayesSoft",
    title: "İşinizi anlayan, süreci açık ve güvenilir biçimde yöneten bir ekip.",
    intro: "Her adımı anlaşılır şekilde paylaşır, projenizi ilk fikirden yayına ve sonrasına kadar birlikte geliştiririz.",
    items: [
      { title: "Tek ekiple kolay iletişim", text: "Tasarım, yazılım ve diğer ihtiyaçlar için farklı ekiplerle uğraşmazsınız. Tüm süreci birlikte yönetiriz." },
      { title: "Güvenli ve sağlam ürünler", text: "Bilgilerinizi koruyan, düzenli çalışan ve ihtiyaçlarınız büyüdükçe size uyum sağlayan ürünler geliştiririz." },
      { title: "Her adımda şeffaflık", text: "Projenin hangi aşamada olduğunu, sırada ne bulunduğunu ve ne zaman tamamlanacağını açıkça paylaşırız." },
      { title: "Yayından sonra da destek", text: "Ürününüz yayına çıktıktan sonra bakım, iyileştirme ve yeni özellik ihtiyaçlarında yanınızda oluruz." },
    ],
  },
  featured: { eyebrow: "Seçili Projeler", title: "Farklı sektörlerde aynı mühendislik disiplini.", intro: "Fintech, sağlık ve yapay zeka projelerinde ortak hedefimiz net: güvenli mimari, anlaşılır ürün akışı ve üretime hazır sistem.", all: "Tüm projeler" },
  references: { eyebrow: "Referanslarımız", title: "Birlikte çalıştığımız kurum ve markalar." },
  stats: [
    { value: "09", label: "yayınlanmış ve araştırma odaklı proje" },
    { value: "05", label: "ürün, backend, mobil ve AI alanında ekip üyesi" },
    { value: "04", label: "temel uzmanlık alanı: web, mobil, AI, bulut" },
  ],
  process: {
    eyebrow: "Süreç",
    title: "Belirsizliği azaltan, ölçülebilir bir üretim akışı.",
    intro: "Her projede önce mimari kararları görünür hale getirir, sonra tasarım ve geliştirme disiplinini aynı ritimde ilerletiriz.",
    step: "Aşama",
    items: [
      { title: "Keşif ve Mimari", summary: "İş hedeflerini, kullanıcı rollerini, veri akışlarını ve teknik riskleri netleştirerek uygulanabilir bir sistem haritası çıkarırız." },
      { title: "Tasarım ve Prototip", summary: "Arayüzleri, yönetim panellerini ve temel ürün akışlarını erken aşamada test edilebilir prototiplere dönüştürürüz." },
      { title: "Geliştirme ve Entegrasyon", summary: "Backend, mobil, web panel, kimlik doğrulama, depolama ve bildirim servislerini tek bir ürün mimarisinde birleştiririz." },
      { title: "Yayın ve İyileştirme", summary: "Yayına alma sonrası performans, güvenlik, kullanım verisi ve yeni modül ihtiyaçlarını düzenli olarak iyileştiririz." },
    ],
  },
  cta: { eyebrow: "Başlayalım", title: "Yeni ürününüz için net bir teknik yol haritası çıkaralım.", mail: "E-posta gönder", page: "İletişim sayfası" },
  pages: {
    about: { eyebrow: "Hakkımızda", title: "Uygulanabilir teknoloji kararları üreten bir yazılım ekibiyiz.", body: "Kurumsal ihtiyaçları ürün mantığıyla ele alır; backend, mobil, web panel, yapay zeka ve bulut katmanlarını aynı mühendislik bütünlüğü içinde geliştiririz.", approach: "Yaklaşım", approachTitle: "Küçük ve odaklı bir ekip, büyük sistem ciddiyetiyle çalışır.", principles: [
      { title: "Mimari önce gelir", text: "Ürün hızını yalnızca arayüzle değil; doğru veri modeli, güvenli yetkilendirme ve temiz servis sınırlarıyla kurarız." },
      { title: "Arayüz üretimin parçasıdır", text: "Yönetim panelleri, mobil deneyimler ve müşteri ekranları ürün mimarisinin görünen tarafıdır." },
      { title: "Güvenlik varsayılan davranıştır", text: "JWT, RBAC, 2FA, rate limiting, audit log ve yedekleme kararlarını proje ihtiyacına göre erken aşamada planlarız." },
    ] },
    services: { eyebrow: "Hizmetler", title: "Kurumsal ürünleri uçtan uca tasarlayan yazılım hizmetleri.", body: "Web panellerinden mobil uygulamalara, yapay zeka entegrasyonlarından bulut altyapısına kadar ürünün ihtiyacı olan parçaları aynı sistem içinde kuruyoruz." },
    team: { eyebrow: "Ekip", title: "Farklı uzmanlıklar, aynı ürün disiplini.", body: "Backend, frontend, mobil, güvenlik ve yapay zeka alanlarında çalışan ekibimiz projeleri fikirden üretime birlikte taşır." },
    projects: { eyebrow: "Projeler", title: "Geliştirdiğimiz ürünler ve teknik çalışmalar.", body: "Her projeyi çözdüğü problem, kurduğu sistem ve ürettiği ölçülebilir etki üzerinden anlatıyoruz." },
    contact: { eyebrow: "İletişim", title: "Yeni projeniz ya da ürün fikriniz için konuşalım.", body: "İhtiyacınız kurumsal panel, mobil uygulama, yapay zeka entegrasyonu veya mevcut sistem modernizasyonu olabilir. İlk adım net bir teknik çerçeve çıkarmak." },
  },
  team: { eyebrow: "Ekip", title: "Biz Kimiz", intro: "İsmimiz kurucuların isimlerinin baş harflerinden gelir. Ölçeklenebilir projelerimizin mimarlarını daha yakından tanıyın.", more: "Daha fazla", close: "Ekip üyesi detaylarını kapat", roles: ["Full-Stack Developer", "Backend Developer", "Mobile Developer", "Full-Stack Developer", "Backend Developer"], bios: [
    "Web ve mobil ürünlerde deneyimli; ürün akışlarını hızlı ve güvenilir arayüzlere dönüştüren bir geliştirici. Mobil uygulama tasarımı ve donanım alanlarında da tecrübelidir.",
    "Karmaşık iş kurallarını sürdürülebilir servis mimarilerine, güvenli API katmanlarına ve anlaşılır veri akışlarına dönüştürür. Veritabanı, sistem tasarımı ve ürün yönetiminde deneyimlidir.",
    "Ürün fikrini mobil deneyim, teknik planlama ve üretime hazır sistemler arasında bütünlüklü bir yapıya taşır. Kullanıcı deneyimi, mobil güvenlik ve oyun geliştirme alanlarında çalışır.",
    "Arayüz mimarisi, etkileşim kalitesi ve sistem tasarımına odaklanır. Finans sektöründeki deneyimiyle ağ güvenliği ve ağ yönetimi alanlarında da uzmanlık sunar.",
    "Ölçeklenebilir backend sistemleri, güvenli REST API’ler ve üretim seviyesinde yapay zeka projeleri geliştirir. Savunma sanayisinde yapay zeka ve görüntü işleme deneyimine sahiptir.",
  ] },
  projects: {
    eyebrow: "Projeler", title: "Problem, çözüm ve etki üzerinden okunan teknik işler.", intro: "Projeleri kimin yaptığına göre değil; hangi problemi çözdüğüne, nasıl bir sistem kurduğuna ve hangi etkiyi ürettiğine göre anlatıyoruz.", problem: "Problem", solution: "Çözüm", impact: "Etki", details: "Detaylar", live: "Canlı", source: "Kaynak", back: "Projelere geri dön", technicalProblem: "Teknik problem ve gereksinim", architecture: "Mimari ve teknik çözüm", screenshots: "Ekran görüntüleri", previousScreenshot: "Önceki ekran görüntüsü", nextScreenshot: "Sonraki ekran görüntüsü", features: "Öne çıkan özellikler", technologies: "Kullanılan teknolojiler", privacy: "Önemli bilgi / Gizlilik notu", compactNotice: "Bu vaka çalışmasının seçtiğiniz dilde özet sürümü gösteriliyor.",
  },
  contact: { form: "Proje formu", title: "İhtiyacı kısaca anlatın, teknik çerçeveyi birlikte netleştirelim.", name: "Ad Soyad", email: "E-posta", projectType: "Proje türü", budget: "Bütçe / Zamanlama", budgetPlaceholder: "Örn. 6-8 hafta içinde MVP", message: "Mesaj", messagePlaceholder: "Projenin hedefini, kullanıcılarını ve beklenen çıktıyı kısaca yazabilirsiniz.", note: "Genelde 24 saat içinde dönüş yaparız. Bilgileriniz doğrudan iletişim servisimize gönderilir.", send: "Gönder", sending: "Gönderiliyor", success: "Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.", error: "Mesaj gönderilemedi. Lütfen tekrar deneyin veya bize e-posta gönderin.", configurationError: "İletişim servisi henüz yapılandırılmadı.", emailLabel: "E-posta", code: "Kod ve çalışmalar", profile: "Kurumsal profil", social: "Sosyal bağlantılar", types: ["Kurumsal yazılım", "Mobil uygulama", "Yapay zeka entegrasyonu", "Bulut / güvenlik / DevOps", "Diğer"] },
  footer: { statement: "Net mimari, güçlü ürün, ölçülebilir teknoloji.", rights: "Tüm hakları saklıdır." },
};

const en = {
  language: { label: "Language", names: { tr: "Türkçe", en: "English", de: "Deutsch" } },
  nav: { home: "Home", about: "About Us", services: "Services", team: "Team", projects: "Projects", contact: "Contact", menu: "Open or close menu", cta: "Discuss your project" },
  hero: { eyebrow: "Enterprise software · Mobile products · Artificial intelligence", titleLead: "We turn complex ideas", titleAccent: "into products", titleEnd: "that work.", body: "We design and build secure backends, web dashboards, mobile apps and AI layers as one coherent product system for ambitious organizations.", primary: "Discuss your project", secondary: "Explore services", status: "Systems online", cardTitle: "Product engineering", cardBody: "One team from idea to production, with clear architecture and measurable outcomes.", signals: ["Web, mobile and backend in one team", "Secure, scalable architecture", "AI-powered products and automation"] },
  services: { eyebrow: "Services", title: "We do more than code products. We build complete systems.", intro: "We treat backend, mobile, dashboards, security and AI as connected parts of one product architecture.", more: "All services", items: [
    { title: "Enterprise Software", summary: "We turn operational needs into measurable, secure and maintainable web systems.", outcome: "Delivery: admin dashboard, role-based access, API documentation and a sustainable backend.", points: ["Admin dashboards", "REST API design", "Database architecture"] },
    { title: "Mobile Product Engineering", summary: "We design Flutter apps end to end together with backend services and management dashboards.", outcome: "Delivery: iOS/Android app, notification flows, backend integrations and a pre-release test package.", points: ["iOS / Android", "Push notifications", "Offline flows"] },
    { title: "AI and Vision Systems", summary: "We build chatbots, classification and computer-vision products with production-grade safeguards.", outcome: "Delivery: model integration, safety layer, dashboard connection and measurable output report.", points: ["LLM integration", "Computer vision", "Prompt security"] },
    { title: "Cloud, Security and DevOps", summary: "We implement infrastructure that makes systems observable, backed up, access-controlled and scalable.", outcome: "Delivery: deployment flow, storage, access security, backups and environment configuration.", points: ["Docker", "Cloud storage", "RBAC / JWT"] },
  ] },
  why: { eyebrow: "Why BayesSoft", title: "A team that understands your business and keeps the process clear.", intro: "We explain every step in plain language and work with you from the first idea to launch and beyond.", items: [
    { title: "One team, easy communication", text: "You do not need to coordinate separate teams for design and development. We manage the whole process together." },
    { title: "Safe and reliable products", text: "We build products that protect your information, work reliably and adapt as your needs grow." },
    { title: "Clarity at every step", text: "We clearly share the project status, what comes next and when each stage will be completed." },
    { title: "Support after launch", text: "After launch, we stay with you for maintenance, improvements and new features." },
  ] },
  featured: { eyebrow: "Selected Projects", title: "One engineering discipline across different industries.", intro: "Across fintech, healthcare and AI, our goal is consistent: secure architecture, clear product flows and production-ready systems.", all: "All projects" },
  references: { eyebrow: "Our References", title: "Organizations and brands we have worked with." },
  stats: [{ value: "09", label: "published and research-driven projects" }, { value: "05", label: "specialists across product, backend, mobile and AI" }, { value: "04", label: "core disciplines: web, mobile, AI and cloud" }],
  process: { eyebrow: "Process", title: "A measurable delivery flow that reduces uncertainty.", intro: "We make architecture decisions visible first, then move design and development forward in the same rhythm.", step: "Stage", items: [
    { title: "Discovery and Architecture", summary: "We clarify business goals, user roles, data flows and technical risks to create an actionable system map." },
    { title: "Design and Prototype", summary: "We turn interfaces, dashboards and core product journeys into testable prototypes early." },
    { title: "Development and Integration", summary: "We combine backend, mobile, web, identity, storage and notifications in one product architecture." },
    { title: "Launch and Improvement", summary: "After launch, we continuously improve performance, security, usage insights and new modules." },
  ] },
  cta: { eyebrow: "Let’s begin", title: "Let’s create a clear technical roadmap for your next product.", mail: "Send an email", page: "Contact page" },
  pages: {
    about: { eyebrow: "About Us", title: "We are a software team that makes technology decisions actionable.", body: "We approach enterprise needs with a product mindset and build backend, mobile, web, AI and cloud layers as one engineering whole.", approach: "Approach", approachTitle: "A small, focused team working with enterprise-level rigor.", principles: [
      { title: "Architecture comes first", text: "Product speed comes from the right data model, secure authorization and clean service boundaries—not only the interface." },
      { title: "Interface is part of delivery", text: "Dashboards, mobile experiences and customer screens are the visible surface of the product architecture." },
      { title: "Security is the default", text: "We plan JWT, RBAC, 2FA, rate limits, audit logs and backups early according to the product’s needs." },
    ] },
    services: { eyebrow: "Services", title: "Software services that design enterprise products end to end.", body: "From web dashboards and mobile apps to AI integrations and cloud infrastructure, we build every required layer within one system." },
    team: { eyebrow: "Team", title: "Different specialties, one product discipline.", body: "Our backend, frontend, mobile, security and AI specialists take products from idea to production together." },
    projects: { eyebrow: "Projects", title: "Products and technical work we have delivered.", body: "We present every project through the problem it solves, the system it builds and the measurable impact it creates." },
    contact: { eyebrow: "Contact", title: "Let’s talk about your next project or product idea.", body: "Whether you need an enterprise dashboard, mobile app, AI integration or system modernization, the first step is a clear technical frame." },
  },
  team: { eyebrow: "Team", title: "Who We Are", intro: "Our name comes from the founders’ initials. Meet the people behind our scalable products.", more: "Learn more", close: "Close team member details", roles: ["Full-Stack Developer", "Backend Developer", "Mobile Developer", "Full-Stack Developer", "Backend Developer"], bios: [
    "An experienced web and mobile developer who turns product flows into fast, reliable interfaces, with additional experience in mobile design and hardware.",
    "Transforms complex business rules into sustainable service architectures, secure APIs and clear data flows, with experience in databases, system design and product management.",
    "Connects product ideas, mobile experiences, technical planning and production-ready systems, with expertise in user experience, mobile security and game development.",
    "Focuses on interface architecture, interaction quality and system design, adding experience in network security and administration from the finance sector.",
    "Builds scalable backend systems, secure REST APIs and production AI projects, with defense-industry experience in artificial intelligence and computer vision.",
  ] },
  projects: { eyebrow: "Projects", title: "Technical work explained through problem, solution and impact.", intro: "We present projects by the problem solved, the system built and the impact created—not by who worked on them.", problem: "Problem", solution: "Solution", impact: "Impact", details: "Details", live: "Live", source: "Source", back: "Back to projects", technicalProblem: "Technical problem and requirements", architecture: "Architecture and technical solution", screenshots: "Screenshots", previousScreenshot: "Previous screenshot", nextScreenshot: "Next screenshot", features: "Key features", technologies: "Technologies", privacy: "Important information / Privacy note", compactNotice: "A concise version of this case study is shown in your selected language." },
  contact: { form: "Project brief", title: "Tell us what you need and we’ll shape the technical frame together.", name: "Full name", email: "Email", projectType: "Project type", budget: "Budget / Timeline", budgetPlaceholder: "e.g. MVP within 6–8 weeks", message: "Message", messagePlaceholder: "Briefly describe the goal, users and expected outcome.", note: "We usually reply within 24 hours. Your information is sent directly to our contact service.", send: "Send", sending: "Sending", success: "Your message was sent successfully. We’ll get back to you shortly.", error: "Your message could not be sent. Please try again or email us directly.", configurationError: "The contact service has not been configured yet.", emailLabel: "Email", code: "Code and work", profile: "Company profile", social: "Social links", types: ["Enterprise software", "Mobile application", "AI integration", "Cloud / security / DevOps", "Other"] },
  footer: { statement: "Clear architecture, strong products, measurable technology.", rights: "All rights reserved." },
};

const de = {
  language: { label: "Sprache", names: { tr: "Türkçe", en: "English", de: "Deutsch" } },
  nav: { home: "Start", about: "Über uns", services: "Leistungen", team: "Team", projects: "Projekte", contact: "Kontakt", menu: "Menü öffnen oder schließen", cta: "Projekt besprechen" },
  hero: { eyebrow: "Unternehmenssoftware · Mobile Produkte · Künstliche Intelligenz", titleLead: "Wir machen aus komplexen Ideen", titleAccent: "Produkte", titleEnd: "die funktionieren.", body: "Wir konzipieren und entwickeln sichere Backends, Web-Dashboards, mobile Apps und KI-Komponenten als ein zusammenhängendes Produktsystem.", primary: "Projekt besprechen", secondary: "Leistungen ansehen", status: "Systeme online", cardTitle: "Product Engineering", cardBody: "Ein Team von der Idee bis zur Produktion – mit klarer Architektur und messbaren Ergebnissen.", signals: ["Web, Mobile und Backend aus einem Team", "Sichere, skalierbare Architektur", "KI-gestützte Produkte und Automatisierung"] },
  services: { eyebrow: "Leistungen", title: "Wir programmieren nicht nur Produkte. Wir bauen vollständige Systeme.", intro: "Backend, Mobile, Dashboards, Sicherheit und KI behandeln wir als verbundene Teile einer Produktarchitektur.", more: "Alle Leistungen", items: [
    { title: "Unternehmenssoftware", summary: "Wir verwandeln operative Anforderungen in messbare, sichere und wartbare Websysteme.", outcome: "Lieferumfang: Admin-Dashboard, rollenbasierter Zugriff, API-Dokumentation und nachhaltiges Backend.", points: ["Admin-Dashboards", "REST-API-Design", "Datenbankarchitektur"] },
    { title: "Mobile Product Engineering", summary: "Wir entwickeln Flutter-Apps durchgängig mit Backend-Services und Verwaltungsoberflächen.", outcome: "Lieferumfang: iOS-/Android-App, Benachrichtigungen, Backend-Anbindung und Testpaket.", points: ["iOS / Android", "Push-Nachrichten", "Offline-Abläufe"] },
    { title: "KI- und Vision-Systeme", summary: "Wir entwickeln Chatbots, Klassifikation und Computer Vision mit produktionsreifen Schutzmechanismen.", outcome: "Lieferumfang: Modellintegration, Sicherheitsebene, Dashboard-Anbindung und messbarer Ergebnisbericht.", points: ["LLM-Integration", "Computer Vision", "Prompt-Sicherheit"] },
    { title: "Cloud, Sicherheit und DevOps", summary: "Wir schaffen beobachtbare, gesicherte, zugriffskontrollierte und skalierbare Infrastrukturen.", outcome: "Lieferumfang: Deployment, Speicher, Zugriffsschutz, Backups und Umgebungskonfiguration.", points: ["Docker", "Cloud-Speicher", "RBAC / JWT"] },
  ] },
  why: { eyebrow: "Warum BayesSoft", title: "Ein Team, das Ihr Geschäft versteht und den Ablauf klar gestaltet.", intro: "Wir erklären jeden Schritt verständlich und begleiten Sie von der ersten Idee bis zum Start und darüber hinaus.", items: [
    { title: "Ein Team, einfache Kommunikation", text: "Sie müssen Design und Entwicklung nicht mit verschiedenen Teams koordinieren. Wir betreuen den gesamten Ablauf gemeinsam." },
    { title: "Sichere und zuverlässige Produkte", text: "Wir entwickeln Produkte, die Ihre Daten schützen, zuverlässig funktionieren und mit Ihren Anforderungen wachsen." },
    { title: "Klarheit bei jedem Schritt", text: "Wir zeigen offen, wo das Projekt steht, was als Nächstes kommt und wann die einzelnen Schritte abgeschlossen sind." },
    { title: "Unterstützung nach dem Start", text: "Auch nach dem Start helfen wir bei Wartung, Verbesserungen und neuen Funktionen weiter." },
  ] },
  featured: { eyebrow: "Ausgewählte Projekte", title: "Eine Engineering-Disziplin für verschiedene Branchen.", intro: "In Fintech, Gesundheit und KI bleibt unser Ziel gleich: sichere Architektur, klare Produktabläufe und produktionsreife Systeme.", all: "Alle Projekte" },
  references: { eyebrow: "Unsere Referenzen", title: "Organisationen und Marken, mit denen wir zusammengearbeitet haben." },
  stats: [{ value: "09", label: "veröffentlichte und forschungsorientierte Projekte" }, { value: "05", label: "Spezialisten für Produkt, Backend, Mobile und KI" }, { value: "04", label: "Kerndisziplinen: Web, Mobile, KI und Cloud" }],
  process: { eyebrow: "Prozess", title: "Ein messbarer Ablauf, der Unsicherheit reduziert.", intro: "Wir machen Architekturentscheidungen zuerst sichtbar und führen Design und Entwicklung anschließend im selben Rhythmus.", step: "Phase", items: [
    { title: "Analyse und Architektur", summary: "Wir klären Geschäftsziele, Nutzerrollen, Datenflüsse und technische Risiken in einer umsetzbaren Systemkarte." },
    { title: "Design und Prototyp", summary: "Oberflächen, Dashboards und zentrale Produktabläufe werden früh als testbare Prototypen umgesetzt." },
    { title: "Entwicklung und Integration", summary: "Backend, Mobile, Web, Identität, Speicher und Benachrichtigungen werden in einer Architektur vereint." },
    { title: "Go-live und Verbesserung", summary: "Nach dem Start verbessern wir Performance, Sicherheit, Nutzungsdaten und neue Module kontinuierlich." },
  ] },
  cta: { eyebrow: "Los geht’s", title: "Erstellen wir einen klaren technischen Fahrplan für Ihr nächstes Produkt.", mail: "E-Mail senden", page: "Kontaktseite" },
  pages: {
    about: { eyebrow: "Über uns", title: "Wir machen Technologieentscheidungen umsetzbar.", body: "Wir betrachten Unternehmensanforderungen aus Produktsicht und entwickeln Backend, Mobile, Web, KI und Cloud als ein technisches Ganzes.", approach: "Ansatz", approachTitle: "Ein kleines, fokussiertes Team mit Enterprise-Anspruch.", principles: [
      { title: "Architektur zuerst", text: "Produktgeschwindigkeit entsteht durch das richtige Datenmodell, sichere Berechtigungen und klare Servicegrenzen." },
      { title: "Die Oberfläche gehört zum Produkt", text: "Dashboards, mobile Erlebnisse und Kundensichten sind die sichtbare Seite der Produktarchitektur." },
      { title: "Sicherheit ist Standard", text: "JWT, RBAC, 2FA, Rate Limits, Audit-Logs und Backups planen wir früh nach Produktbedarf." },
    ] },
    services: { eyebrow: "Leistungen", title: "Softwareleistungen für durchgängige Unternehmensprodukte.", body: "Von Web-Dashboards und mobilen Apps bis zu KI-Integrationen und Cloud-Infrastruktur bauen wir alle Ebenen in einem System." },
    team: { eyebrow: "Team", title: "Verschiedene Kompetenzen, eine Produktdisziplin.", body: "Unser Team aus Backend, Frontend, Mobile, Sicherheit und KI bringt Produkte gemeinsam von der Idee in die Produktion." },
    projects: { eyebrow: "Projekte", title: "Produkte und technische Lösungen, die wir realisiert haben.", body: "Jedes Projekt erklären wir über sein Problem, das entwickelte System und seine messbare Wirkung." },
    contact: { eyebrow: "Kontakt", title: "Sprechen wir über Ihr nächstes Projekt oder Ihre Produktidee.", body: "Ob Unternehmens-Dashboard, mobile App, KI-Integration oder Modernisierung: Der erste Schritt ist ein klarer technischer Rahmen." },
  },
  team: { eyebrow: "Team", title: "Wer wir sind", intro: "Unser Name stammt aus den Initialen der Gründer. Lernen Sie die Menschen hinter unseren skalierbaren Produkten kennen.", more: "Mehr erfahren", close: "Details zum Teammitglied schließen", roles: ["Full-Stack-Entwickler", "Backend-Entwickler", "Mobile-Entwickler", "Full-Stack-Entwickler", "Backend-Entwickler"], bios: [
    "Ein erfahrener Web- und Mobile-Entwickler, der Produktabläufe in schnelle, zuverlässige Oberflächen überführt und auch Erfahrung mit Mobile Design und Hardware besitzt.",
    "Überführt komplexe Geschäftsregeln in nachhaltige Servicearchitekturen, sichere APIs und klare Datenflüsse; erfahren in Datenbanken, Systemdesign und Produktmanagement.",
    "Verbindet Produktideen, mobile Erlebnisse, technische Planung und produktionsreife Systeme mit Know-how in UX, mobiler Sicherheit und Spieleentwicklung.",
    "Konzentriert sich auf Interface-Architektur, Interaktionsqualität und Systemdesign und bringt Erfahrung in Netzwerksicherheit und -verwaltung aus dem Finanzsektor ein.",
    "Entwickelt skalierbare Backend-Systeme, sichere REST-APIs und produktionsreife KI-Projekte mit Erfahrung in KI und Bildverarbeitung aus der Verteidigungsindustrie.",
  ] },
  projects: { eyebrow: "Projekte", title: "Technische Arbeit erklärt durch Problem, Lösung und Wirkung.", intro: "Wir zeigen Projekte anhand des gelösten Problems, des gebauten Systems und der erzielten Wirkung.", problem: "Problem", solution: "Lösung", impact: "Wirkung", details: "Details", live: "Live", source: "Quellcode", back: "Zurück zu den Projekten", technicalProblem: "Technisches Problem und Anforderungen", architecture: "Architektur und technische Lösung", screenshots: "Screenshots", previousScreenshot: "Vorheriger Screenshot", nextScreenshot: "Nächster Screenshot", features: "Kernfunktionen", technologies: "Technologien", privacy: "Wichtige Information / Datenschutzhinweis", compactNotice: "Diese Fallstudie wird in Ihrer Sprache als kompakte Fassung angezeigt." },
  contact: { form: "Projektanfrage", title: "Beschreiben Sie kurz Ihren Bedarf – den technischen Rahmen klären wir gemeinsam.", name: "Vor- und Nachname", email: "E-Mail", projectType: "Projekttyp", budget: "Budget / Zeitplan", budgetPlaceholder: "z. B. MVP in 6–8 Wochen", message: "Nachricht", messagePlaceholder: "Beschreiben Sie kurz Ziel, Nutzer und erwartetes Ergebnis.", note: "Wir antworten in der Regel innerhalb von 24 Stunden. Ihre Angaben werden direkt an unseren Kontaktdienst gesendet.", send: "Senden", sending: "Wird gesendet", success: "Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns in Kürze.", error: "Ihre Nachricht konnte nicht gesendet werden. Versuchen Sie es erneut oder schreiben Sie uns eine E-Mail.", configurationError: "Der Kontaktdienst ist noch nicht konfiguriert.", emailLabel: "E-Mail", code: "Code und Projekte", profile: "Unternehmensprofil", social: "Soziale Links", types: ["Unternehmenssoftware", "Mobile Anwendung", "KI-Integration", "Cloud / Sicherheit / DevOps", "Sonstiges"] },
  footer: { statement: "Klare Architektur, starke Produkte, messbare Technologie.", rights: "Alle Rechte vorbehalten." },
};

export const translations = { tr, en, de };

export const localeOptions: Locale[] = ["tr", "en", "de"];
