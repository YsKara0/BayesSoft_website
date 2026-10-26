> 2026-10-27 — Kullanıcı bu görevi BS3P-037 kapsamında yayın için onayladı. Toplu preflight TS/lint/build ve hedefli kontroller geçti. Yayın öncesi kayıt; kesin SHA/Pages sonucu [[BS3P-037-TEAM-TITLE-PRODUCTION-RELEASE]] yerel sonuç kaydında. Aşağıdaki önceki onay bekleme ifadeleri tarihsel olarak korunur.

# BS3P-034 — Ek kapsam: Ekip unvanları TR/EN/DE — 2026-10-26

**Yerelde tamamlandı; kullanıcı onayı beklenir.** Güncel önizleme: http://localhost:3033/hakkimizda

- `data/i18n.ts`: üç mesleki unvanın çevirileri tek `teamRoleLabels` sözlüğünde tutulur. Mevcut `teamMembers.role` değerlerinden beş kişilik `copy.team.roles` dizileri türetilir; kişi bazında tekrar eden sabit çeviri dizileri kaldırıldı. TR: Full-Stack Geliştirici / Backend Geliştirici / Mobil Uygulama Geliştiricisi; EN ve DE kullanıcıdaki karşılıklarla aynıdır.
- `components/interior/TeamProfiles.tsx`: fotoğraf alt metni de kart/modalın kullandığı aynı unvan çevirisine bağlandı. Kart ve modal zaten `copy.team.roles` kullanıyordu; yeni modal/dil mekanizması veya CSS eklenmedi.
- İsim/fotoğraf/sıra/unvan eşleştirmeleri ve BAYES korunur; ekip verisi ve interior CSS HEAD ile byte eşit. Önceki034mobil hero/Zirve kayıtları ve mevcut dirty dosyalar korundu.
- Yerel Chrome:1440/375px ×TR/EN/DE=6durum,30kart eşleştirmesi+30modal; tüm unvanlar doğru, fotoğraf alt metinleri aynı çeviri, yenilemesiz dil değişimi, kart/modal yatay taşma yok. Almanca mobil ekran ve modal görsel incelendi. Escape kapanması/odağın karta dönüşü geçti; isim/fotoğraf/harf sırası doğrulandı.
- TypeScript `tsc --noEmit`, yalnız iki dosyada hedefli ESLint ve git diff --check geçti. Bu ek kapsam için production build, geniş QA, Safari/gerçek cihaz testi yapılmadı. Kanıtlar: `07-Reviews/evidence/BS3P-034/team-roles/`.

Master/adeed19 korunur; stage/commit/push/deploy yok. Önceki statik3038önizleme bu yeni ekip değişikliğini içermez; güncel birleşik geliştirme önizlemesi3033'tür.

---

## Önceki BS3P-034 kapsamı — korundu

# BS3P-034 — Mobil Hero Kontrolü ve Zirve Çilingir

2026-10-25 · **Yerel uygulama tamamlandı, görsel onay beklenir.**
Branch/HEAD: `master` / `adeed1904371f2b38d69cfcb1a46c72ddd3a0d31`.
Önizleme: http://localhost:3038 · Katalog: /projeler · Detay: /projeler/zirve-cilingir

Bu kullanıcı görevi, 2026-10-23 tarihli aynı034kimlikli istatistik/footer çalışmasından ayrıdır; önceki kayıtlar ve mevcut033yayın handoff değişiklikleri korundu. Commit/stage/push/deploy yapılmadı.

## Uygulama

- `components/homepage/MobileHero.tsx`: yalnız mobil kontrol markup'ı ve kullanılmayan toggle referansı kaldırıldı. `MobileHero.module.css`: kontrolün44pxalanını ayıran stiller kaldırıldı. Başlık yukarı geldi; aynıSVG/pozlar/20s timeline, MotionProvider ve reduced-motion devam ediyor. Desktop kontrolü/sahnesi aynı. Saklanan ortak motion tercihi değiştirilmedi.
- `data/site.ts`: Zirve Çilingir katalog kaydı; Next.js frontend, Spring Boot backend, CMS ve tüm içeriklerin yönetim panelinden yönetilmesi. Yeni canlı/source URL veya ekran görüntüsü eklenmedi. Kart diğer projelerle aynı şablonda ZÇ monogramıyla sunulur; logo ürün ekran görüntüsü gibi kullanılmaz.
- `data/projectDetails.ts`: yeni `zirve-cilingir` detayı, yalnız kullanıcının verdiği teknik bilgiler; `screenshots: []`. Ortak ProjectDetailView boş listeyi zaten gizlediğinden bileşen/galeri değiştirilmedi. İleride aynı diziye ekranlar eklenebilir.
- `data/projectTranslations.ts`: kategori/problem/özet/işlev bilgisi için doğal EN/DE metinler. Teknoloji adları Next.js/Spring Boot/CMS olarak ortak kalır. Başka projelerin eski kayıtları AST karşılaştırmasıyla birebir korundu:9→10katalog verisi,8→9detay.

## Referans logosu

`data/references.ts` içinde Zirve Çilingir **zaten tek kayıt olarak vardı**; doğru kaynak `/references/zirve-cilingir.png`. Referans verisi, mevcut doğrulanmış bağlantı listesi ve marquee kodu değiştirilmedi; kayıt çoğaltılmadı. Kullanıcının `assets/referances/zirve-cilingir.png` dosyası ile public kopyası SHA256/byte olarak aynı. Mevcut horizontal/`object-fit:contain` kuralları1680×639logo oranını koruyor. Yeni URL uydurulmadı; mevcut referans bağlantısı korundu, yeni proje için canlı site linki eklenmedi.

## Kontroller

- Yerel statik production preview/Chrome:375/390px mobilde kontrol0, otomatik saat ilerliyor, yatay taşma yok; reduced-motion sabit özel yazılım karesinde kalıyor. Ekranlar görsel incelendi.
- Desktop1440px kontrol görünür; WebGL1canvas/4prizma yüzü. Önceki release'in1440px ilk900px görüntüsüyle0değişen piksel. Timeline/desktop kontrol/marquee/galeri kaynakları byte eşit.
- Zirve logosu375/1440px orijinal logo grubunda yüklendi, `object-fit:contain`; focus/scroll ile görünürlüğü ve ekranı kontrol edildi. Gizli döngü kopyaları yeni referans sayılmadı.
- Katalogdan gerçek detay linki ile TR/EN/DE gezildi; isim/kategori/açıklama/teknoloji ve panel yönetimi içerikleri doğru. Galeri/screenshot anchor'ı yok, kırık görsel yok, taşma yok.
- `/projeler/zirve-cilingir.html` statik dosyası ve sitemap girdisi üretildi. Canonical `/projeler/zirve-cilingir`; title Zirve Çilingir|BayesSoft, description Next.js/Spring Boot/CMS içeriyor. Mevcut mimaride metadata statikTR, EN/DE içerik istemcide aynıURLüzerinde seçiliyor; yeni dil rotası/SEO davranışı eklenmedi.
- TypeScript `tsc --noEmit`, yalnız5kaynakta hedefli ESLint ve git diff --check geçti. Production build/export:688dosya,0prototype artifact/dependency. İlk tarayıcı denemelerinde eski yerel sunucunun yeniden oluşturulan out dizinine bağlı kalması ve dizin/HTMLönceliği nedeniyle test sunucusu hataları görüldü; doğru statik çözümlemeli3038sunucuda son kontroller geçti. Uygulama kaynaklı browsererror0.
- Native Safari/iPhone, geniş site QA, canlı site/yayın kontrolü yapılmadı. Testler yalnız istenen dar kapsamda kaldı.

Kanıtlar: `07-Reviews/evidence/BS3P-034/mobile-hero-zirve/` içindeki checks.json/source-proof.json,375/390mobil,1440desktop,iki referans ekranı ve üç dil detay PNG'leri. Geçmiş kanıtlar/kişisel dosyalar korunur.

## Teslim / sonraki adım

Yalnız5uygulama/veri dosyası değişti. Referanslar ve ortak detay/rota/sitemap kodunda değişiklik gerekmedi; mevcut veri tabanlı üretim kullanıldı. Mevcut yerel Markdown değişiklikleri silinmedi. Kullanıcı yerel görünümü değerlendirecek; bu aşamada commit/push/deploy yetkisi yok.
