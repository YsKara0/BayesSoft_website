import type { IconName } from "@/components/SocialIcon";
import { siteConfig } from "@/data/config";

export type SocialLink = {
  label: string;
  href: string;
  icon: IconName;
};

export type TeamMember = {
  name: string;
  role: string;
  letter: string;
  image: string;
  accent: "blue" | "teal" | "gold" | "silver" | "navy";
  skills: string[];
  bio: string;
  socials: SocialLink[];
};

export type Project = {
  title: string;
  domain: string;
  problem: string;
  summary: string;
  impact: string;
  technologies: string[];
  liveUrl?: string;
  sourceUrl?: string;
};

export type Service = {
  title: string;
  summary: string;
  outcome: string;
  points: string[];
};

export type ProcessStep = {
  title: string;
  summary: string;
};

const profileLinks = ({
  website,
  github,
  linkedin
}: {
  website: string;
  github: string;
  linkedin: string;
}): SocialLink[] => [
  { label: "Website", href: website, icon: "website" },
  { label: "GitHub", href: github, icon: "github" },
  { label: "LinkedIn", href: linkedin, icon: "linkedin" }
];

export const teamMembers: TeamMember[] = [
  {
    name: "Batuhan Ersan",
    role: "Full-Stack Developer / Mobile Developer",
    letter: "B",
    image: "/team/batuhan_ersan.jpg",
    accent: "blue",
    skills: ["React", "Flutter", "Express", "JavaScript", "Node.js"],
    bio: "Web ve mobil uygulama geliştirmede uçtan uca sorumluluk alan, ürün akışlarını hızlı ve güvenilir arayüzlere dönüştüren geliştirici.",
    socials: profileLinks({
      website: "https://example.com/batuhan-ersan",
      github: "https://github.com/BatuErsann",
      linkedin: "https://www.linkedin.com/in/batuhan-ersan-bayes/"
    })
  },
  {
    name: "Ahmet Buğrahan Çınar",
    role: "Software Engineer / Backend Developer",
    letter: "A",
    image: "/team/bugrahan_cinar.jpeg",
    accent: "teal",
    skills: ["Spring Boot", "API Design", "Databases", "WebSocket"],
    bio: "Karmaşık iş kurallarını sürdürülebilir servis mimarilerine, güvenli API katmanlarına ve net veri akışlarına çevirir.",
    socials: profileLinks({
      website: "https://example.com/ahmet-bugrahan-cinar",
      github: "https://github.com/BugraCinar",
      linkedin: "https://www.linkedin.com/in/ahmetbugrahancinar/"
    })
  },
  {
    name: "Yavuz Selim Kara",
    role: "Software Engineer / Mobile Developer",
    letter: "Y",
    image: "/team/yavuz_selim_kara.jpg",
    accent: "navy",
    skills: ["Mobile", "Flutter", "Firebase", "Product Systems"],
    bio: "Ürün fikrini mobil deneyim, teknik planlama ve üretime hazır sistemler arasında bütünlüklü bir yapıya taşır.",
    socials: profileLinks({
      website: "https://example.com/yavuz-selim-kara",
      github: "https://github.com/YsKara0",
      linkedin: "https://www.linkedin.com/in/yskara/"
    })
  },
  {
    name: "Enes Keleş",
    role: "Software Engineer / Frontend Developer",
    letter: "E",
    image: "/team/enes_keles.jpeg",
    accent: "gold",
    skills: ["Frontend", "React", "TypeScript", "Design Systems"],
    bio: "Arayüz mimarisi, etkileşim kalitesi ve tasarım sistemleriyle ürünlerin daha net, hızlı ve premium hissetmesine odaklanır.",
    socials: profileLinks({
      website: "https://example.com/enes-keles",
      github: "https://github.com/Enesfreigthinus",
      linkedin: "https://www.linkedin.com/in/enes-kele%C5%9F-a3717a28a/"
    })
  },
  {
    name: "Sefa Ağardan",
    role: "Backend Engineer / Full-Stack Developer",
    letter: "S",
    image: "/team/sefa_agardan.jpg",
    accent: "silver",
    skills: ["Spring Boot", "API Design", "Security", "Computer Vision", "React"],
    bio: "Ölçeklenebilir backend sistemleri, güvenli REST API'ler, çok kiracılı mimariler ve üretim seviyesinde yapay zeka hatları geliştirir.",
    socials: profileLinks({
      website: "https://g4stly.tr/",
      github: "https://github.com/g4stlyx",
      linkedin: "https://www.linkedin.com/in/sef4/"
    })
  }
];

export const projects: Project[] = [
  {
    title: "Tam Finans Multi-Platform Fintech System",
    domain: "Fintech",
    problem: "Fintech ekibinin mobil kullanıcı, yönetim paneli ve güvenli servis katmanını aynı akışta yönetmesi gerekiyordu.",
    summary:
      "Tam Finans ürün ekibiyle geliştirilen; Spring Boot backend, Flutter mobil uygulama ve React yönetim panelinden oluşan çok platformlu fintech sistemi.",
    impact:
      "Uçtan uca şifreli mesajlaşma, quiz modülleri, audit log, push bildirimleri ve yerel işletme keşfi entegre edildi.",
    technologies: [
      "Java",
      "Spring Boot",
      "Flutter",
      "React",
      "MySQL",
      "JWT / RBAC",
      "Firebase FCM",
      "Cloudflare R2"
    ]
  },
  {
    title: "Smart Hospital System - Kanuni Sultan Süleyman Hospital",
    domain: "Healthcare",
    problem: "Hastane içinde düşük altyapı koşullarında hasta, personel ve yönetim akışlarının birlikte çalışması gerekiyordu.",
    summary:
      "Hasta ve personel mobil uygulamaları, masaüstü yönetim paneli ve Spring Boot backend içeren entegre sağlık platformu.",
    impact:
      "Düşük altyapılı ortamlarda gerçek zamanlı yönlendirme ve acil durum koordinasyonunu destekleyecek şekilde tasarlandı.",
    technologies: ["Java", "Spring Boot", "Flutter", "JavaScript", "Electron", "JWT", "Cloudflare R2"]
  },
  {
    title: "PetNest - Pet-Friendly Venue Finder Platform",
    domain: "Marketplace",
    problem: "Mekan keşfi, kullanıcı güvenliği ve işletme yönetimi tek ürün içinde ölçeklenebilir şekilde kurgulanmalıydı.",
    summary:
      "Evcil hayvan dostu mekanları keşfetmek için Spring Boot REST API, Flutter mobil uygulama ve React panel ile geliştirilen platform.",
    impact:
      "JWT/Argon2id kimlik doğrulama, TOTP 2FA, rate limiting ve otomatik yedekleme ile güvenli hale getirildi.",
    technologies: ["Java", "Spring Boot", "Flutter", "React", "TypeScript", "MySQL", "JWT", "Cloudflare R2"]
  },
  {
    title: "Atlı Logistics - Workforce Management System",
    domain: "Operations",
    problem: "Lojistik operasyonlarında görev dağıtımı, çalışan doğrulama ve ödeme takibi merkezi bir sistem gerektiriyordu.",
    summary:
      "Lojistik operasyonları için hiyerarşik admin rolleri, güvenli görev atama ve çalışan doğrulama akışları içeren iş gücü yönetim sistemi.",
    impact:
      "Ödeme takibi ve saha koordinasyonu için ölçeklenebilir REST backend ve responsive React panel geliştirildi.",
    technologies: ["Java", "Spring Boot", "React", "MySQL", "JWT", "Cloudflare R2"],
    liveUrl: "https://atlidepohizmetleri.com"
  },
  {
    title: "Military Aircraft Classification System",
    domain: "Computer Vision",
    problem: "Çok sınıflı ve dengesiz görsel veri setinde yüksek doğrulukla uçak sınıflandırması yapılması gerekiyordu.",
    summary:
      "EfficientNet-B4 mimarisiyle 38.826 görselde 89 askeri uçak tipini sınıflandıran derin öğrenme hattı.",
    impact:
      "Sınıf dengesizliğini azaltmak için weighted loss ve agresif augmentation kullanılarak %92.86 Top-1 doğruluk elde edildi.",
    technologies: ["Python", "PyTorch", "scikit-learn", "NumPy", "Pandas", "EfficientNet-B4"]
  },
  {
    title: "AI-Powered Chatbot Platform",
    domain: "AI Platform",
    problem: "LLM tabanlı sohbet deneyiminin kimlik doğrulama, yönetim paneli ve prompt güvenliğiyle üretime hazır hale gelmesi gerekiyordu.",
    summary:
      "Ollama üzerinden Llama3 ile çalışan, JWT kimlik doğrulama, TOTP 2FA ve çok seviyeli admin panelleri içeren chatbot platformu.",
    impact:
      "8 katmanlı prompt injection koruması, Redis cache ve otomatik günlük veritabanı yedekleriyle üretime hazır hale getirildi.",
    technologies: ["Java", "Spring Boot", "React", "TypeScript", "MySQL", "Redis", "Docker", "JWT", "Llama3 / Ollama"],
    sourceUrl: "https://github.com/g4stlyx/chatbot"
  },
  {
    title: "FurtherUp Drive",
    domain: "Enterprise Coaching",
    problem: "Kurumsal koçluk operasyonları için çok kiracılı, güvenli ve ödeme akışı bulunan çalışma alanı gerekiyordu.",
    summary:
      "FurtherUp için geliştirilen; çok kiracılı React ve Spring Boot mimarisi, güvenli rol tabanlı erişim, değerlendirme motoru ve marketplace içeren koçluk platformu.",
    impact:
      "Otomatik takvimleme, assessment akışları ve ödeme deneyimi olan sağlam bir kurumsal çalışma alanı teslim edildi.",
    technologies: ["Java", "Spring Boot", "React", "TypeScript", "MySQL", "Tailwind CSS", "JWT", "Cloudflare R2", "Iyzico"],
    liveUrl: "https://drive.further-up.net"
  },
  {
    title: "Maritime Horizon Line Segmentation",
    domain: "Computer Vision",
    problem: "Deniz görüntülerinde ufuk çizgisi, gökyüzü, su ve nesne ayrımının gerçek zamanlı tahmin edilmesi hedeflendi.",
    summary:
      "Deniz ufuk çizgisi tespiti için geleneksel bilgisayarlı görü yöntemlerinden derin öğrenme modellerine uzanan araştırma projesi.",
    impact:
      "U-Net ve RT-DETR ile gökyüzü/su/nesne ayrımı ve piksel mesafesi tahmini yapan gerçek zamanlı segmentasyon elde edildi.",
    technologies: ["Python", "PyTorch", "OpenCV", "NumPy", "U-Net", "RT-DETR", "YOLOv8-seg"],
    sourceUrl: "https://github.com/g4stlyx/horizon_line_segmentation"
  },
  {
    title: "Arelim University Vulnerability Report",
    domain: "Cybersecurity",
    problem: "Üniversite web varlığında kritik veri sızıntısı ve yetkisiz erişim risklerinin görünür hale getirilmesi gerekiyordu.",
    summary:
      "Yetkisiz erişim, REST API sızıntıları, XSS ve SQL injection gibi kritik açıkları belirlemek için hazırlanan kapsamlı güvenlik analizi.",
    impact:
      "Öğrenci veritabanlarını güvenceye almak için exploitation senaryoları ve OWASP tabanlı iyileştirme önerileri çıkarıldı.",
    technologies: ["Broken Access Control", "SQL Injection", "XSS", "OWASP Top 10"]
  }
];

export const services: Service[] = [
  {
    title: "Kurumsal Yazılım Geliştirme",
    summary:
      "Operasyonel ihtiyaçları ölçülebilir, güvenli ve bakımı kolay web sistemlerine dönüştürüyoruz.",
    outcome: "Teslim: yönetim paneli, rol bazlı yetkilendirme, API dokümantasyonu ve sürdürülebilir backend yapısı.",
    points: ["Admin panelleri", "REST API tasarımı", "Veritabanı mimarisi"]
  },
  {
    title: "Mobil Ürün Mühendisliği",
    summary:
      "Flutter tabanlı mobil uygulamaları backend servisleri ve yönetim panelleriyle birlikte uçtan uca kurguluyoruz.",
    outcome: "Teslim: iOS/Android uygulama, bildirim akışları, backend bağlantıları ve yayın öncesi test paketi.",
    points: ["iOS / Android", "Push bildirimleri", "Offline akışlar"]
  },
  {
    title: "Yapay Zeka ve Görü Sistemleri",
    summary:
      "Chatbot, sınıflandırma ve bilgisayarlı görü projelerini üretim ortamına uygun güvenlik katmanlarıyla geliştiriyoruz.",
    outcome: "Teslim: model entegrasyonu, güvenli kullanım katmanı, panel bağlantısı ve ölçülebilir çıktı raporu.",
    points: ["LLM entegrasyonu", "Computer vision", "Prompt güvenliği"]
  },
  {
    title: "Bulut, Güvenlik ve DevOps",
    summary:
      "Sistemleri izlenebilir, yedekli, erişim kontrollü ve ölçeklenebilir hale getiren altyapı kararlarını uyguluyoruz.",
    outcome: "Teslim: dağıtım akışı, depolama yapısı, erişim güvenliği, yedekleme ve ortam konfigürasyonu.",
    points: ["Docker", "Cloud storage", "RBAC / JWT"]
  }
];

export const processSteps: ProcessStep[] = [
  {
    title: "Keşif ve Mimari",
    summary:
      "İş hedeflerini, kullanıcı rollerini, veri akışlarını ve teknik riskleri netleştirerek uygulanabilir bir sistem haritası çıkarırız."
  },
  {
    title: "Tasarım ve Prototip",
    summary:
      "Arayüzleri, yönetim panellerini ve temel ürün akışlarını erken aşamada test edilebilir prototiplere dönüştürürüz."
  },
  {
    title: "Geliştirme ve Entegrasyon",
    summary:
      "Backend, mobil, web panel, kimlik doğrulama, depolama ve bildirim servislerini tek bir ürün mimarisinde birleştiririz."
  },
  {
    title: "Yayın ve İyileştirme",
    summary:
      "Yayına alma sonrası performans, güvenlik, kullanım verisi ve yeni modül ihtiyaçlarını düzenli olarak iyileştiririz."
  }
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: siteConfig.githubUrl, icon: "github" },
  { label: "LinkedIn", href: siteConfig.linkedinUrl, icon: "linkedin" },
  { label: "X", href: siteConfig.xUrl, icon: "twitter" },
  { label: "Website", href: siteConfig.siteUrl, icon: "website" }
];
