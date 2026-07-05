export type ProjectDetail = {
  title: string;
  domain: string;
  slug: string;
  overview: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  techStack: string[];
  note?: string;
  screenshots?: string[];
  liveUrl?: string;
  sourceUrl?: string;
};

export const projectDetails: Record<string, ProjectDetail> = {
  "tam-finans-fintech": {
    title: "Tam Finans Multi-Platform Fintech System",
    domain: "Fintech",
    slug: "tam-finans-fintech",
    overview: "Tam Finans KOBİ'lerinin bölgedeki ticari iş birliklerini artırmak ve kullanıcı bağlılığını yükseltmek amacıyla geliştirilmiş çok platformlu bir finansal teknoloji ekosistemidir.",
    problem: "KOBİ'lerin aynı coğrafi bölgede faaliyet gösteren diğer işletmeleri kolayca keşfedip iş birliği yapabileceği güvenli bir konum tabanlı ağın olmaması ve kullanıcıların platformda aktif kalmasını sağlayacak etkileşim mekanizmalarının eksikliği temel sorundur. Bu süreçlerin yanı sıra, konum ve üyelik verilerinin korunması, yetkisiz veri erişimlerinin (IDOR) engellenmesi, bot saldırılarına karşı giriş güvenliğinin sağlanması ve yüksek işlem hacimlerinde API performansının optimize edilmesi gerekiyordu.",
    solution: "Sistem, Spring Boot tabanlı REST API, Flutter mobil uygulama ve React yönetim panelinden oluşan entegre bir yapıyla kuruldu.\n\nKonum tabanlı işletme keşfi (CivardaBul) için veritabanı düzeyinde Haversine formülü kullanılarak verimli mesafe sorgulamaları yapıldı. Medya dosyalarının güvenliği için Cloudflare R2 entegrasyonu sağlandı ve yüklenen görsellerin üstbilgileri yerine dosya içeriğindeki Magic Byte kodları doğrulanarak güvenli hale getirildi. Kimlik doğrulama katmanında ise Argon2id şifreleme algoritmaları, TOTP tabanlı iki faktörlü doğrulama (2FA), reCAPTCHA koruması ve hassas uç noktalarda rate-limiting (istek sınırlama) mekanizmaları uygulandı.",
    keyFeatures: [
      "CivardaBul (Konum Tabanlı Keşif): Harita üzerinde lat/lng koordinat doğrulamaları ve Haversine formülüyle 100km yarıçaplı konum tabanlı KOBİ keşfi, uygulama içi mesajlaşma desteği.",
      "Halleder Quiz Modülü: Kullanıcılara analitik ve davranışsal profiller çıkararak psikometrik veriler elde eden dinamik soru/cevap ve oturum yönetimi.",
      "Gelişmiş Güvenlik: Access/Refresh token rotasyonu, TOTP tabanlı 2FA, reCAPTCHA doğrulaması, ve günlük otomatik MySQL yedekleme cron yapısı."
    ],
    techStack: [
      "Java / Spring Boot",
      "Spring Security (JWT & Refresh Token)",
      "MySQL",
      "Flutter",
      "React  ",
      "Cloudflare R2 (S3 SDK)",  
      "Google Authenticator (TOTP)",
      "JUnit & Mockito"
    ]
  },
  "smart-hospital": {
    title: "Smart Hospital System - Kanuni Sultan Süleyman Hospital",
    domain: "Healthcare",
    slug: "smart-hospital",
    overview: "Hastane içi operasyonların, hasta acil durumlarının ve personel koordinasyonlarının zorlu ağ ve altyapı koşullarında dahi kesintisiz yönetilmesini sağlayan entegre bir akıllı sağlık platformudur.",
    problem: "Daha sonra eklenecek.",
    solution: "Daha sonra eklenecek.",
    keyFeatures: [
      "Daha sonra eklenecek."
    ],
    techStack: [
      "Java / Spring Boot",
      "Flutter",
      "Electron & JavaScript",
      "JWT Authentication",
      "Cloudflare R2 Storage"
    ]
  },
  "petnest-platform": {
    title: "PetNest - Pet-Friendly Venue Finder Platform",
    domain: "Marketplace",
    slug: "petnest-platform",
    overview: "Evcil hayvan sahiplerinin evcil hayvan dostu cafe, restoran, park gibi sosyal alanları keşfetmesini sağlayan; moderasyon, kullanıcı yorumları ve mekan sahibi panellerini birleştiren geniş kapsamlı bir pazaryeri platformudur.",
    problem: "Pet sahipleri için mekanların evcil hayvan kabul koşullarının (büyük köpek kabulü, açık alan zorunluluğu vb.) net olmaması ve internetteki bilgilerin güncelliğini yitirmesi temel sorundu. Ek olarak, kullanıcılar tarafından yüklenen mekan fotoğraflarının ve yorumlarının filtrelenmeden yayına alınması platform güvenilirliğini zedeliyordu. Mekan sahiplerinin kendi menülerini ve kurallarını güncelleyebileceği, yöneticilerin ise tüm içeriği denetleyip onay süreçlerini yürütebileceği hiyerarşik, güvenli ve rate-limit korumalı bir yönetim altyapısına ihtiyaç duyuluyordu.",
    solution: "Spring Boot REST API mimarisi üzerinde inşa edilen PetNest, Flutter mobil uygulaması ve admin moderatörlerinin kullandığı responsive React web paneli ile entegre edildi.\n\nYüklenen mekan resimlerinin kötü amaçlı kod barındırmasını engellemek için dosya içeriğini Magic Byte seviyesinde inceleyen doğrulama katmanı yazıldı. Kullanıcıların aşırı istek atarak sunucuyu yormasını önlemek için rate-limiting algoritmaları uygulandı. Veritabanı mimarisinde Türkiye genelindeki il ve ilçe sınırları, evcil hayvan türleri (kedi, köpek, kuş vb.) ve mekan tipleri normalize edilerek hızlı arama sorguları için optimize edildi. Admin paneli tarafında ise Level 0 (Süper Yönetici), Level 1 (Yönetici) ve Level 2 (Moderatör) şeklinde hiyerarşik roller tanımlanarak yetki kontrolleri sıkılaştırıldı.",
    keyFeatures: [
      "Merkezi Moderasyon Sistemi: Kullanıcı yorumlarının, puanlamaların ve mekan görsellerinin moderatör onayından geçerek yayına alınması.",
      "Hiyerarşik Admin ve Rol Yapısı: Kullanıcı, mekan sahibi ve farklı yetki seviyelerine sahip admin hesaplarının yönetimi.",
      "İçerik Güvenliği: Cloudflare R2 entegrasyonu ve yüklenen dosyalarda Magic Byte dosya tipi kontrolü.",
      "Lokasyon Tabanlı Filtreleme: Şehir ve ilçe bazlı gelişmiş arama mimarisi ile evcil hayvan dostu mekanların anlık listelenmesi."
    ],
    techStack: [
      "Java / Spring Boot",
      "Spring Security + JWT",
      "MySQL / Hibernate",
      "Flutter",
      "React / Vite",
      "Argon2id Şifreleme",
      "TOTP 2FA (Google Authenticator)",
      "Cloudflare R2 & Bucket4j Rate Limiting"
    ]
  },
  "atli-logistics": {
    title: "Atlı Logistics - Workforce Management System",
    domain: "Operations",
    slug: "atli-logistics",
    overview: "Lojistik depolarının ve antrepolarının günlük ve dönemsel iş gücü ihtiyaçlarını karşılamak amacıyla geliştirilmiş; iş atamaları, çalışan doğrulamaları ve finansal hak edişlerin takibini otomatikleştiren operasyonel yönetim sistemidir.",
    problem: "İstanbul Avrupa Yakası'ndaki (Esenyurt, Hadımköy, Çatalca vb.) lojistik merkezlerinde çalışan yüzlerce günlük işçinin ve saha denetçisinin (supervisor) koordinasyonu manuel yöntemlerle yönetiliyordu. İş ilanlarının açılması, işçilerin hangi depoya atanacağı, günlük giriş/çıkış onayları ve hak edilen yevmiyelerin, avansların ve geriye kalan bakiyelerin takibi kağıt üzerinde yapıldığı için finansal hatalara ve operasyonel gecikmelere sebep oluyordu. Bu karmaşayı çözmek için verilerin anlık işlenebildiği, veri çakışmalarını önleyen güvenli bir yazılım altyapısı gerekiyordu.",
    solution: "Sistem; firmaların iş gücü talepleri oluşturduğu, saha yöneticilerinin işçi ataması yaptığı ve finans ekibinin ödemeleri takip ettiği web tabanlı, veritabanı işlemlerinde veri tutarlılığını garanti eden bir mimaride geliştirildi.\n\nSpring Boot backend API katmanında, veritabanı işlemlerinde çakışmaları engellemek için transaction izolasyonları ve pessimistic locking mekanizmaları uygulandı. React admin paneli aracılığıyla yöneticiler firmaları, supervisor'ları ve işçileri merkezi olarak yönetebilir hale geldi. Saha denetçileri (supervisor) kendilerine atanan işçilerin işe başlama ve bitiş durumlarını onayladığında yevmiyeler otomatik hesaplanarak cari bakiye sistemine yansıtılır. İşçilere yapılan elden avans ödemeleri sisteme girilerek anlık borç/alacak tablosu hatasız şekilde güncellenmektedir.",
    keyFeatures: [
      "Supervisor Onay Mekanizması: Sahadaki denetçiler tarafından işçilerin çalışma saatlerinin doğrulanması ve otomatik yevmiye hesaplaması.",
      "Cari Bakiye ve Avans Takibi: Hak edilen ücretler, alınan avanslar ve kalan bakiyelerin anlık ve geriye dönük raporlanması.",
      "Hiyerarşik Erişim Kontrolü: Finans yetkilileri, saha sorumluları ve sistem yöneticileri için farklılaştırılmış işlem yetkileri.",
      "Dinamik İş Talepleri: Lojistik firmalarının anlık iş gücü talebi oluşturabilmesi ve bu taleplerin supervisor'lara otomatik atanması."
    ],
    techStack: [
      "Java / Spring Boot",
      "React / Bootstrap",
      "MySQL Database",
      "JWT Authentication",
      "Argon2id Şifreleme",
      "Spring Mail & Thymeleaf"
    ],
    liveUrl: "https://atlidepohizmetleri.com"
  },
  "military-aircraft-classification": {
    title: "Military Aircraft Classification System",
    domain: "Computer Vision",
    slug: "military-aircraft-classification",
    overview: "EfficientNet-B4 derin öğrenme modelini kullanarak 89 farklı askeri uçak sınıfını görsellerden yüksek doğrulukla ayırt eden yapay zeka tabanlı bir sınıflandırma hattıdır.",
    problem: "Askeri uçakların sınıflandırılmasında kullanılan açık kaynaklı veri setinin analizi sırasında, nesne tespiti (bounding box) yerine kırpılmış uçak gövdelerinden oluşan bir yapıda olduğu belirlendi. 38.000'den fazla görsel içeren veri setinde çok ciddi bir sınıf dengesizliği (imbalance) bulunmaktaydı; bazı uçak modellerinin binlerce görseli varken, KAAN, AKINCI veya B21 gibi kritik modellerin sadece 50-60 adet görseli mevcuttu. Bu dengesizlik, standart yapay zeka modellerinin az sayıda görseli olan uçakları tanıyamamasına ve aşırı öğrenmeye (overfitting) maruz kalmasına yol açıyordu.",
    solution: "Projede transfer öğrenimi (transfer learning) yöntemiyle EfficientNet-B4 derin öğrenme modeli PyTorch kütüphanesi üzerinde eğitildi.\n\nSınıf dengesizliğiyle başa çıkabilmek amacıyla Albumentations kütüphanesi entegre edilerek veri kısıtlılığı olan sınıflar için agresif veri artırımı (döndürme, açısal değişimler, kontrast ayarlamaları, gürültü ekleme) uygulandı. Eğitim sürecinde hata oranını minimize etmek için sınıf ağırlıklı kayıp fonksiyonu (class-weighted Cross Entropy Loss) kullanıldı. Model, Google Colab GPU altyapısında 90 epoch boyunca eğitildi ve erken durdurma (early stopping) kriterleri uygulanarak aşırı öğrenme engellendi. Sonuç olarak test veri setinde %92.86 Top-1 doğruluk ve %97.82 Top-5 doğruluk oranına başarıyla ulaşıldı.",
    keyFeatures: [
      "Yüksek Doğruluk Performansı: Zorlu askeri uçak veri setinde elde edilen %92.86 Top-1 ve %97.82 Top-5 doğruluk oranları.",
      "Albumentations Entegrasyonu: Kısıtlı veri setine sahip uçaklar için aşırı öğrenmeyi engelleyen dinamik veri artırım teknikleri.",
      "Sınıf Ağırlıklı Loss Modeli: Veri dengesizliğinin modeli yanıltmasını önleyen weighted loss tasarımı.",
      "Inference (Çıkarım) Yazılımı: Gönderilen bir uçak görselini analiz ederek en yüksek olasılıklı 5 sınıfı olasılık değerleriyle birlikte döndüren Python betiği."
    ],
    techStack: [
      "Python",
      "PyTorch",
      "EfficientNet-B4",
      "Albumentations",
      "scikit-learn & NumPy & Pandas"
    ]
  },
  "ai-chatbot": {
    title: "AI-Powered Chatbot Platform",
    domain: "AI Platform",
    slug: "ai-chatbot",
    overview: "Llama3 modelini Ollama üzerinden yerel altyapıda çalıştıran, gelişmiş veri filtreleme, prompt injection korumaları ve yönetici denetim panelleriyle donatılmış kurumsal yapay zeka sohbet platformudur.",
    problem: "Yapay zeka modellerinin kurumsal ortamlarda kullanımı sırasında prompt injection (kötü niyetli girdi yönlendirmesi) saldırıları ile sistem kurallarının aşılması ve hassas sistem promptlarının dışarı sızması (prompt leakage) büyük bir güvenlik riski oluşturmaktadır. Ayrıca, LLM çağrılarının kontrolsüz yapılması sunucuda aşırı yüklenmeye sebep olmakta, geçmiş sohbet verilerinin düzenli saklanması ve kullanıcı yetkilendirmelerinin yönetilmesi zorlaşmaktadır.",
    solution: "Sistem, Spring Boot backend ve React frontend mimarisi üzerinde, Ollama ile yerel Llama3 modelini entegre edecek şekilde kurgulandı.\n\nGirdi ve çıktı güvenliğini sağlamak amacıyla 8 katmanlı bir filtreleme mekanizması yazıldı; bu katman kötü niyetli girdileri tararken, AI tarafından üretilen çıktıların da sistem promptunu sızdırmasını engeller. Sunucu performansını optimize etmek amacıyla Redis önbellek yapısı entegre edilerek sık kullanılan veriler RAM üzerinde tutuldu. Sohbet oturumları CRUD işlemleriyle yönetilip projeler altında renk/ikon bazlı gruplandırılabilir hale getirildi. Yönetim tarafında ise sistem logları, kullanıcı hareketleri ve engellenen güvenlik ihlalleri, TOTP 2FA korumalı admin paneli üzerinden anlık olarak takip edilmektedir.",
    keyFeatures: [
      "8 Katmanlı Güvenlik Katmanı: Girdi ve çıktıları denetleyen prompt injection ve prompt leakage engelleme mekanizmaları.",
      "Projelendirme ve Gruplama: Sohbet oturumlarının kullanıcı tanımlı projeler (renk ve ikon destekli) altında organize edilmesi.",
      "Oturum Paylaşım Desteği: Sohbetlerin genel bağlantılarla paylaşılabilmesi ve diğer kullanıcıların bu sohbetleri kendi profillerine kopyalayabilmesi.",
      "TOTP 2FA Admin Koruması: Sistem yöneticileri için Google Authenticator uyumlu iki adımlı doğrulama güvenliği."
    ],
    techStack: [
      "Java / Spring Boot",
      "React / Vite",
      "Ollama",
      "Redis",
      "MySQL Database",
      "Argon2id Şifreleme",
      "TOTP 2FA (Google Authenticator)",
      "Docker"
    ],
    sourceUrl: "https://github.com/g4stlyx/chatbot"
  },
  "furtherup-drive": {
    title: "FurtherUp Drive",
    domain: "Enterprise Coaching",
    slug: "furtherup-drive",
    overview: "Kurumsal koçluk süreçlerini dijitalleştiren; danışanların gelişimini, koç atamalarını, psikometrik test değerlendirmelerini ve abonelik ödemelerini tek bir platformda birleştiren kapsamlı bir SaaS çalışma alanıdır.",
    problem: "Kurumsal koçluk operasyonlarında, danışanların hedeflerinin, ödevlerinin ve LifeWheel (Yaşam Çarkı) gibi gelişim grafiklerinin takibi genellikle farklı yazılımlar üzerinden yapılıyordu. Ayrıca, EQ, DriveDynamics gibi karmaşık değerlendirme testlerinin puanlanması ve raporlanması manuel yapıldığında büyük bir operasyonel yük oluşturmaktaydı. Bununla birlikte, koçların üyelik paketleri satın alabilmesi, Iyzico ödeme entegrasyonunun abonelik ve iptal işlemlerinde webhook güvenliğinin sağlanması ve veri çakışmalarının önlenmesi gerekiyordu.",
    solution: "Platform, Spring Boot backend ve modern React frontend mimarisi kullanılarak çoklu rol yetkilendirmesi (Client, Coach, Admin) ile geliştirildi.\n\nFarklı psikometrik testlerin (EQ, DriveDynamics, Learning Model vb.) anket soruları, puanlama algoritmaları ve görsel analiz raporlarını üreten gelişmiş bir test motoru entegre edildi. Koçlar için Iyzico abonelik akışları kurularak, Iyzico webhook çağrılarında imza doğrulaması ile ödeme güvenliği maksimuma çıkarıldı. Çift ödeme veya veri senkronizasyon hatalarını engellemek için veritabanında pessimistic locking (kararlı satır kilitleme) kullanıldı. Kullanıcıların yüklediği gelişim dosyaları ve profil medyaları Cloudflare R2 uyumlu S3 SDK entegrasyonu ile güvenli nesne depolama alanında saklanmaktadır.",
    keyFeatures: [
      "Değerlendirme Test Motoru: EQ, DriveDynamics, Learning Model ve EnnaMap testlerinin otomatik hesaplanması ve grafiksel raporları.",
      "Koçluk Gelişim Araçları: Danışanlar için hedefler, ödevler, kişisel notlar, LifeWheel ve EnergyLog modüllerinin yönetimi.",
      "Iyzico Webhook ve Abonelik: Koç abonelik paketlerinin otomatik takibi, webhook imza doğrulaması ve pessimistic lock güvenliği.",
      "Kurumsal Dosya Depolama: Cloudflare R2 nesne depolama entegrasyonu ile güvenli medya ve doküman yönetimi."
    ],
    techStack: [
      "Java / Spring Boot",
      "React / TypeScript / Vite",
      "Tailwind CSS & Headless UI",
      "MySQL Database",
      "Iyzico API Entegrasyonu",
      "Cloudflare R2 (AWS S3 SDK)",
      "JJWT (JSON Web Token)",
      "TOTP 2FA & Argon2id"
    ],
    liveUrl: "https://drive.further-up.net"
  },
  "maritime-horizon-segmentation": {
    title: "Maritime Horizon Line Segmentation",
    domain: "Computer Vision",
    slug: "maritime-horizon-segmentation",
    overview: "Deniz taşıtlarının otonom sürüş güvenliğini desteklemek amacıyla, video ve görüntülerde deniz ufuk çizgisini, gökyüzünü, kara parçalarını ve deniz üzerindeki engelleri gerçek zamanlı tespit eden yapay zeka tabanlı bir segmentasyon projesidir.",
    problem: "Otonom deniz seyrüsefer sistemlerinde kamera görüntülerinden ufuk çizgisinin bulunması, geminin rotasını belirlemesi için hayati önem taşır. Ancak deniz yüzeyindeki yansımalar, dalga hareketleri, sisli ve puslu hava koşulları geleneksel kenar bulma (Canny, Sobel) algoritmalarını tamamen kararsız hale getirmekteydi. Dahası, ufuk çizgisinin önünde seyreden büyük gemiler çizgiyi kestiğinde, algoritmaların ufuk çizgisini geminin üstünden geçecek şekilde hatalı çizmesi seyrüsefer güvenliğini tehlikeye atmaktaydı.",
    solution: "Sorunu çözmek için geleneksel görüntü işleme yöntemlerinden modern derin öğrenme modellerine uzanan kapsamlı bir mimari geliştirildi.\n\nSegFormer-B2 anlamsal segmentasyon mimarisi kullanılarak gökyüzü, deniz, kara ve nesneleri ayıran 4 sınıflı bir segmentasyon modeli eğitildi. Görüntüdeki gemileri algılamak için RT-DETR ve YOLO nesne tespit modelleri çıkarım hattına (inference pipeline) dahil edildi. Algılanan gemi alanları maskelenerek ufuk çizgisinin geminin arkasından kesintisiz geçmesi sağlandı. Ufuk çizgisi ile nesnelerin merkez noktaları arasındaki piksel bazlı mesafeyi ve açısal kaymayı hesaplayan runner kodları geliştirildi. Testler Singapore Maritime Dataset ve LaRS veri setleri üzerinde gerçekleştirilerek yüksek kararlılık sağlandı.",
    keyFeatures: [
      "4 Sınıflı Anlamsal Segmentasyon: SegFormer-B2 ile gökyüzü, deniz, kara ve gemilerin yüksek doğrulukla sınıflandırılması.",
      "Gemi Duyarlı Maskeleme: RT-DETR/YOLO nesne tespitiyle ufuk çizgisinin gemilerin arkasında kesintisiz kalmasını sağlayan hibrit çıkarım.",
      "Piksel Bazlı Uzaklık Hesabı: Algılanan engellerin ufuk çizgisine olan mesafesini piksel düzeyinde hesaplayan analiz yazılımı.",
      "Çevresel Faktör Dayanıklılığı: Dalga, yansıma ve olumsuz hava koşullarından etkilenmeyen derin öğrenme tabanlı stabilite."
    ],
    techStack: [
      "Python / PyTorch",
      "U-Net / SegFormer-B2 (Segmentasyon)",
      "RT-DETR / YOLOv8-seg (Nesne Tespiti)",
      "OpenCV (Görüntü İşleme)",
      "NumPy & scikit-learn"
    ],
    sourceUrl: "https://github.com/g4stlyx/horizon_line_segmentation"
  }
};
