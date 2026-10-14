# BS3P-008 R3 — Integrated Hero Polish

**Tarih:** 2026-10-14  
**Durum:** completed — hedefli polish teslimi; kullanıcı görsel onayı bekleniyor.  
**Dal / HEAD:** `feature/bayessoft-3.0-plus` / `c5bf841`; Git/yayın işlemi yok.  
**Yerel demo:** http://127.0.0.1:3000/prototype/spatial-hero-plus  
**Yetki:** Kullanıcının “INTEGRATED HERO R3 POLISH” talebi; yalnızca birleşik rota ve ona özel entegrasyon kaynakları. V2 notu [[BS3P-008-INTEGRATED-SPATIAL-HERO-V2]] ve geçmiş kanıtlar korundu. D-013.

## Görsel sonuç

Sol tipografik obje sabit taşıyıcı çerçevesinden serbest bırakıldı. Sağ sistem biraz daha büyük ve arayüz vurguları daha net. Instrument Sans, beyaz/soğuk `#f3f5f7`, lacivert `#172b43`, mavi `#285bd6` korunuyor; küçük mor `#6675cf`, sıcak turuncu `#ca823b` ve veri mavi-grisi `#536f89` yalnızca sistem ayrıntıları. Ortak header ve kolon hizası sürdü; yeni bölüm/CTA/dekoratif obje/glow/yoğun gradient eklenmedi.

Prizma ana tipografik odak olmaya devam ediyor. Sahnenin büyümesi, veri ve kuralların ayırt edilmesini ve web/mobil sonuçların okunmasını iyileştiriyor. Hero'nun dikey alanı kısaldı; dönüş için gerekli boşluk korunuyor. Bu sanat yönetimi değerlendirmesidir, kullanıcı kalite kabulü değildir.

## Bantsız dört yüzlü obje

- Kaynak prizma subtree'sinden iki `fixed-cap`, iki `upright`, `fixed-axle` ve iki `bearing` birleşik route üretiminde tamamen çıkarıldı. CSS ile gizleme veya geride bağlantı parçaları bırakma yok. Özgün kaynak route/CSS/motion değişmedi.
- Dört hareketli fiziksel yüz ve iki dönen yan kapak kaldı. Özgün `77.777778cqw` yüz yüksekliği, H/2 derinlik, perspective, `translateZ(-H/2)` ve dört yüzün X dönüşleri korunuyor. 540px desktop kolonda H=420px ve merkezden yüz mesafesi=210px; tam kare kesit420px.
- Dış obje oranı540/512 yerine540/420: artık sabit bantlar için ayrılmış üst/alt boşluk yok. Yüzün fiziksel boyutu küçültülmedi. Dönüş hacmi overflow-visible dış yerleşimde karşılanır; noktalar desktopta60px, mobilde44px sonra başlar.
- Yüzler beyaz ve çok açık soğuk tonlarda, ince gerçek yüz kenarı ve hafif gölgeyle ayrılır. Dönen uç yüzeyler soğuk gri `#e3eaf1`; gereksiz sabit eleman yok. Tipografi/metin ve özgün font oranları aynı.

## Dört nokta ve korunan motion

`motion-transport` HTML'den çıkarıldı; kullanıcı DOM'unda yalnızca dört seçim düğmesi var. Aktif nokta mavi/dolu ve8px, diğerleri6px/boş; her biri44×44px ve8px aralıklı. Özgün anlamlı yüz etiketleri/`aria-pressed` ve manuel live announcement korunur. Klavyede2px görünür focus; reduced-motion durumunda anlık yüz seçimi.

Özgün `initializeSpatialHero` fonksiyonu birebir import/serialize edilmeye devam eder. Yeni küçük `initializePrismDots` adaptörü, başlatıcının zorunlu toggle/next referansları için setup sırasında gizli iki düğme oluşturur ve hemen DOM'dan çıkarır. Başlatıcının kapalı kapsamındaki referanslar geçerli kalır; geniş state-machine refactor veya ayrı motion kopyası yok. Son DOM'da toggle/next yok. Aynı yönde kümülatif90° X,5000ms dwell/900ms transition, otomatik döngü, hover/focus/visibility pause ve reduced-motion mekanizması aynı koddan gelir.

Kullanıcının açık talebiyle görünür pause/ileri transport kaldırıldı. Hover, klavye focus'u ve reduced-motion ile duraklatma/anlık seçim mevcut; sürekli durdurma düğmesi bu adayda yok. Tam erişilebilirlik kabulü/final QA bu görevde verilmedi.

## Header ve gerçek dil sistemi

- Özgün BayesSoft wordmark, Projeler `/projeler`, Hizmetler `/hizmetler`, İletişim ve CTA `/iletisim` kullanıldı. Header ve hero aynı540px/40px/sağ kolon grid'inde. Sticky/blur/scroll efekti yok.
- Gerçek `components/LanguageProvider.tsx`, `components/Header.tsx`, `data/i18n.ts` ve route dosyaları incelendi. Site TR/EN/DE destekler; `/en` veya `/de` route'u yok. Provider `bayessoft-locale` localStorage anahtarını okuyup aynı route'larda client çevirisi yapar.
- `localeOptions` ve gerçek dil adları mevcut i18n kaynağından alınır. Prototipin özgün dört mesajı Türkçe kalır; TR etkin ve sade alt çizgiyle gösterilir. EN/DE native bağlantıları tercihi aynı anahtara yazar ve gerçek `/` ana sayfasını o dilde açar. In-place EN/DE prototip çevirisi uygulanmadı; sahte çevrilmiş hero veya URL oluşturulmadı.
- Bağlantı adı/title ve screen-reader açıklaması bu davranışı belirtir. Tercih kaydedilemezse yanlış dilde yönlendirmek yerine erişilebilir durum mesajı gösterilir. Türkçe navigasyon aynı preference ile gerçek TR sayfasını açar. Sayfayı görmek tek başına kayıtlı tercihi değiştirmez.
- 899px ve altında native details mobil menü: gerçek route'lar, dil seçenekleri, CTA;44px kontroller, Escape ve dış tıklama kapanışı. Ayrı menü overlay'si viewport içinde kalır. Gizli linkler kapalı menüde focus sırasına girmez.

## Sağ sahne: daha büyük kadraj ve kontrollü renk

Sahne çizim alanı16:9'dan8:5'e değişti; 1440px viewportta732×411.75 yerine732×457.5px. Mevcut renderer'ın ResizeObserver'ı ve orthographic auto-fit hesabı yeni aspect'e göre kamera frustum'unu günceller. Canvas/HTML/CSS scale yok; kamera, panel boyutları ve dünya kompozisyonu yeniden yazılmadı. Böylece R1'in tüm motion sınırlarıyla aynı güvenli fit'i korunur.

Ölçülen final web323.22→359.13px, mobil108.84→120.93px: yatay görsel boyut +%11.11. Dört yüzey figure içinde, mobile sağ sınırdan kesilmiyor. Büyüme doğrusal ölçüdür; alan artışı yüzdesi değildir.

HTML arayüz projeksiyonlarında aktif web mavisi/pill kenarı, küçük mobil mor-mavi aksanları, turuncu koşul ve veri kayıt kontrastı güçlendirildi. Büyük panel renk blokları eklenmedi. Native R1 PBR/ışık/renderer modülü tamamen değişmeden kullanılır. Mobil/hata/reduced-motion SVG'si entegrasyona özel renk varyantıdır; kaynak R1 SVG değişmedi.

8.4s timeline, font/compileAsync/pose(0) readiness kapısı, native scene replay, sabit final ve visibility/offscreen render kapatma korundu. F5 kod yolu değişmedi; bu turda ayrı hard-reload matrisi yapılmadı.

## Hızlı doğrulama

Bir Chrome desktop1440×900 ve bir touch/reduced-motion mobil375×812 pass'i; kısa prizma ve Three.js akışı aynı desktop kontrolünde. Ek kayıt veya geniş test matrisi yok.

- Hedefli TS ve entry üretimi geçti: `node prototypes/spatial-hero-plus/prepare.mjs`; `node node_modules/typescript/bin/tsc -p prototypes/spatial-hero-plus/tsconfig.check.json`. Yeni dependency yok.
- Desktop: dört yüz, sabit parça0, transport düğmesi0, nokta4; obje/yüz420px, merkez-yüz210px, transition900ms ve scrollWidth1440px. Özgün otomatik90° dönüş, manuel sonraki90° ve aynı yönde−360'a dönüş izlendi.
- İlk/ikinci geçişlerde55/56 frame boyunca tüm yüz sınırları ölçüldü; en yakın açılar−45.31°/−135.31°. Birleşik sweep x41.56–626.44, y170.83–677.09px; header altı82, noktaların başlangıcı694, sağ alan başlangıcı644px. Viewport, kontroller ve sağ sahneyle çakışma yok; atada clipping yok.
- İlk görünür WebGL0.000; data→rules→web→mobile→align→final. Final8.400/running=false; frame509→509 (250ms). Ana pass11 draw call/1.290 triangle; dört panel figure içinde. Cihaz FPS/enerji veya tam GPU ölçümü değildir.
- Nokta ve scene gerçek Tab focus2px; hover/focus pause; Space replay0.074/running=true. Aynı click handler korunur; R3 turunda ayrı pointer replay tekrarı yapılmadı. Demo pageerror/HTTP hata listesi boş.
- EN desktop tıklamasında gerçek `/`, html.lang=en, preference=en. DE mobil menü tıklamasında gerçek `/`, html.lang=de, preference=de. Production dosyası değişmedi; bu yalnızca navigasyon/dil doğrulaması.
- Mobil scrollWidth375, canvas0/Three isteği0, dört44×44px nokta; anlık manuel face1/angle−90. Açık menü x35–355px ve Escape kapanışı uygun. Mobil screenshot default ilk yüz/kapalı menüdür. Normal mobil otomatik dönüş veya diğer breakpoint/cihazlar ayrı pass olarak test edilmedi.
- 446 korumalı görev öncesi dosyanın SHA-256 hash'i aynı: kaynak iki demo/R1 renderer/CSS/MP4, production/i18n, eski kasalar, package/ayar/yönergeler, önceki plan/notlar ve V2 evidence.

Kanıtlar:
- [Desktop](../07-Reviews/evidence/BS3P-008-R3-desktop.png)
- [Mobil](../07-Reviews/evidence/BS3P-008-R3-mobile.png)
- [Hedefli kontrol JSON](../07-Reviews/evidence/BS3P-008-R3-check.json)

## Değişen dosyalar

Uygulama:
- `app/prototype/spatial-hero-plus/route.ts` — carrier/transport çıkarımı, header ve dot adaptörü, yerel R3 poster.
- `app/prototype/spatial-hero-plus/header.ts` — yeni header/i18n seçenekleri.
- `app/prototype/spatial-hero-plus/prism.ts` — yeni minimal başlangıç adaptörü.
- `prototypes/spatial-hero-plus/entry.ts` — mevcut preference köprüsü ve mobil menü kapanışı.
- `public/prototype-assets/spatial-hero-plus/entry.js` — üretilmiş.
- `public/prototype-assets/spatial-hero-plus/hero-plus.css` — bantsız dış yerleşim/kenar/nokta/header/kadraj/renk.
- `public/prototype-assets/spatial-hero-plus/system-static.svg` — yeni R3 renk varyantı.

Kayıtlar: bu not, `TASK_REGISTER`, `CURRENT_STATUS`, `NEXT_STEPS`, `SESSION_LOG`, `DAILY_LOG_2026-10-14`, `DECISION_LOG`, `REVIEW_REGISTER`; üç R3 evidence dosyası. V2 entegrasyon notu ve mevcut tüm tarihsel kayıtlar korunur.

## Açık konular

- Prototip TR içeriklidir; EN/DE gerçek siteyi açar. Birleşik hero'nun yerinde çok dilli sürümleri ayrı içerik/yerleşim çalışması gerektirir.
- Mobil statik panel metinleri küçük ayrıntı olarak kalır. Safari/iOS/gerçek cihaz, geniş responsive, screen reader, tam motion/accessibility/GPU/context-loss, lint/build ve MP4 A/B yapılmadı.
- Kaynak HTML işaretleri ve başlatıcının iki transport referansı korunmuş sözleşmelerdir; kaynak değişirse entegrasyon adaptörleri gözden geçirilmeli.
- R-006/D-006 yayın izolasyonu sürer; production'da bu prototipe link/entegrasyon veya release ayarı eklenmedi. Commit/push/merge/deploy yapılmadı.
- Görsel denge/kalite için kullanıcı onayı beklenir; otomatik sonraki revizyon/entegrasyon yok.
