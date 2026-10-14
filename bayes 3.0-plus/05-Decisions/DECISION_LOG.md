# Karar günlüğü — append-only

| ID | Tarih | Karar | Gerekçe | Durum |
|---|---|---|---|---|
| D-001 | 2026-10-13 | 3.0 dört yüzlü mimari hero ana yön | Alternatifler arasında en güçlü “wow” etkisi | approved |
| D-002 | 2026-10-13 | 4.0 çalışmalarını kodlamadan önce arşivleme | Ayrı aday ve Three.js öğrenimlerini koruma | approved |
| D-003 | 2026-10-14 | 3.0+ dalı 3.0 commit'inden açılır | 4.0 deneysel bağımlılıkları taşınmasın | implemented |
| D-004 | 2026-10-14 | Sağ videoya alternatif özgün Three.js; önce plan, sonra ayrı demo | Başarılı hero'yu riske atmadan marka anlamını güçlendirme | approved in principle |
| D-005 | 2026-10-14 | Küçük iterasyonlarda kısa kontrol, kapsamlı QA ayrı | Önceki turlarda testlerin geliştirmeyi aşırı uzatması | approved |
| D-006 | 2026-10-14 | Prototipler prod yayında erişilemez olmalı | Route 404 tek başına static asset koruması değildir | deferred to release |
| D-007 | 2026-10-14 | 3.0+ için ayrı Obsidian vault | Oturum devamlılığı ve izlenebilir kararlar | approved |
| D-008 | 2026-10-14 | AGENTS.md tek yetkili rehber; AGENT_WORKFLOW ayrıntılı prosedür; CLAUDE yalnızca yönlendirme; eski talimatlar tarihsel yedek | Kullanıcının açık “AGENT INSTRUCTION CLEANUP” talebi; BS3P-007 kapsamında uygulandı, eski tasarım/geliştirme yetkileri aktif değil | implemented |
| D-009 | 2026-10-14 | Sağ hero adayı: “İşinize göre kurulan sistem”; native Three.js, kısa tek giriş/sabit final, mobil statik alternatif ve ayrı karşılaştırma demosu | Özel yazılım anlamını veri/kural/ortak web-mobil çıktısıyla kurmak; sol prizmanın odağını korumak. [[../04-Development/BS3P-001-RIGHT-HERO-3D-PLAN]] | proposed |
| D-010 | 2026-10-14 | D-009 planının kullanıcı onaylı bağımsız deney uygulaması; kesin rota `/prototype/bs3p-right-3d`, three 0.180.0, kısa QA; mevcut hero/production korunur | Kullanıcının açık “RIGHT HERO THREE.JS PROTOTYPE” talebi. Görsel kabul/entegrasyon kararı değildir; [[../04-Development/BS3P-002-RIGHT-HERO-3D-IMPLEMENTATION]] | implemented |
| D-011 | 2026-10-14 | BS3P-002 R1: uzun çizgi kaldırılır; daha okunur panel/kamera oranları, küçük yardımcı renkler, 8.4s sıralı akış, hazırlık kapısıyla ilk kare | Kullanıcının açık “VISUAL & MOTION REFINEMENT” talebi; bağımsız demo sınırı korunur. [[../04-Development/BS3P-002-R1-VISUAL-MOTION-REFINEMENT]] | implemented |
| D-012 | 2026-10-14 | Yeni `/prototype/spatial-hero-plus`: R1 ortamına özgün dört yüzlü CSS prizma; kaynak prototipler değişmeden yeniden kullanım, sahne üstünden erişilebilir replay | Kullanıcının açık “INTEGRATED SPATIAL HERO V2” talebi; yalnızca yeni birleşik prototip. [[../04-Development/BS3P-008-INTEGRATED-SPATIAL-HERO-V2]] | implemented |
| D-013 | 2026-10-14 | BS3P-008 R3: birleşik demoya özel sabit carrier/transport çıkarımı, dört nokta, gerçek site locale/header,8:5 kadraj ve kontrollü UI renkleri | Kullanıcının açık “INTEGRATED HERO R3 POLISH” talebi; kaynak mekanikler ve production korunur. [[../04-Development/BS3P-008-R3-INTEGRATED-HERO-POLISH]] | implemented |
| D-014 | 2026-10-14 | Yeni bağımsız homepage: onaylanan hero aynen yeniden kullanılır; mevcut referanslar, sadece proje slotu ve modüler kısa bölümler | Kullanıcının açık “FULL HOMEPAGE SKELETON” talebi; yeni BS3P-009, production/yayın ve animasyonlu vitrin izni değildir. [[../04-Development/BS3P-009-FULL-HOMEPAGE-SKELETON]] | implemented |
| D-015 | 2026-10-14 | BS3P-011 bağımsız üç yüzlü CSS3D proje folyosu; gerçek kayıtlar/özgün konsept kapaklar ve kullanıcı kontrollü dönüş | Kullanıcının açık görev/brief talebi; Three.js gerekmiyor. Görsel kabul ve homepage entegrasyonu ayrı kullanıcı kararı. [[../04-Development/BS3P-011-PROJECT-SHOWCASE-IMPLEMENTATION]] | implemented |
| D-016 | 2026-10-14 | BS3P-011 R2 horizontal cylindrical gallery; ortak CSS3D kavis/9 konum/13 dilim, üç gerçek projenin tekrarları | Kullanıcı R1 mekanik görsel kabulünü vermedi, ayrı R2 istedi. [[../04-Development/BS3P-011-R2-HORIZONTAL-CYLINDRICAL-SHOWCASE]]; yalnız prototip, görsel kabul/homepage entegrasyonu ayrı | implemented |
| D-017 | 2026-10-14 | R2 kullanıcı onayı; BS3P-012 ortak renderer/motor ile homepage slot entegrasyonu | Kullanıcının açık entegrasyon talebi; bağımsız R2 default HTML aynı/diğer alanlar korunur. [[../04-Development/BS3P-012-R2-HOMEPAGE-INTEGRATION]]; homepage kabulü ayrı | implemented |

## Tasarım kararlarında doğruluk standardı
`approved` kullanıcıca kabul edilmiş öneridir; `proposed` yalnızca öneridir. `implemented` gerçek kod değişikliğini; `verified` testle doğrulanmış durumu anlatır. Birini diğerine dönüştürme.

## Yeni kayıt şablonu
**D-### — Tarih — Kısa ad**  
- Problem / alternatifler:  
- Karar:  
- Gerekçe:  
- Onay kaynağı:  
- Etkilenen dosyalar:  
- Geri dönüş yolu:  
- Durum: proposed / approved / implemented / superseded

## D-009 — 2026-10-14 — İşinize göre kurulan sistem
- **Problem / alternatifler:** Sağ videoya marka anlamı güçlü bir aday gerekir. Rastgele heykel/küp birleşmesi, dört bağımsız hizmet döngüsü ve devamlı dönüş önerilmedi. İnce sistem kesiti seçilerek tek aday planlandı.
- **Öneri:** Sabit orthographic kamera; mat web yüzeyi, arkasında veri/kural katmanları, ortak sonucu taşıyan mobil yüzey ve kontrollü mavi bağlantı; yaklaşık 3.3s girişten sonra sabit final. Native Three.js; mobil ve reduced-motion statik. Eş mevcut zeminde ilk MP4 karşılaştırması, soğuk zemin ayrı varyant.
- **Onay kaynağı:** Kullanıcı BS3P-001 için yalnızca plan ve kayıt güncellemesi istedi. Konsept, bağımlılık kurulumu ve prototip uygulaması henüz onaylanmadı.
- **Bu oturumda etkilenenler:** Plan ve ilgili görev/agent/inceleme kayıtları; kod/asset/package değişimi yok.
- **Geri dönüş yolu:** Öneri reddedilebilir veya revize edilebilir; mevcut `/prototype/spatial-hero`, sol prizma ve MP4 korunur.
- **Durum:** `proposed`. D-004'ün ilkesel onayı uygulama onayına dönüştürülmedi; BS3P-002 onay bekler.

## D-010 — 2026-10-14 — Bağımsız Three.js deneyi için açık onay ve uygulama
- **Onay kaynağı:** Kullanıcı BS3P-001 yaratıcı/teknik planını bağımsız deney olarak uygulamayı, gerekli uyumlu bağımlılıkları ve sınırlı QA'yı açıkça onayladı. Önceki D-009 proposed kaydı tarihsel öneridir; bu kayıt onun bağımsız uygulama kapısını açar.
- **Kesin kapsam:** `/prototype/bs3p-right-3d`; veri/kural/web-mobil sistem sahnesi, 3–3.5s giriş ve sabit final, açık replay, mobil statik alternatif. Mevcut hero/prizma/MP4, production ve 4.0 korunur; commit/push/deploy yok.
- **Uygulama:** Native Three.js 0.180.0 ve uyumlu tip paketi; ayrı HTML route + yerel ESM. Yeni deneyde soğuk stage kullanıldı; özgün CSS tokenları değişmedi. İlk renderdaki örtüşme giderildi; tek küçük self-shadow, prosedürel ortam ve özgün geometriyle malzeme ayrımı sağlandı.
- **Etkilenen dosyalar / doğrulamalar:** [[../04-Development/BS3P-002-RIGHT-HERO-3D-IMPLEMENTATION]] tam manifest, kısa kontroller ve açık sorunları içerir. BS3P-002 uygulama teslimi tamamlandı.
- **Geri dönüş:** Özgün `/prototype/spatial-hero` ve MP4 birebir korunur. Bu adaya devam edilmezse bağımsız dosyalar/Git değişiklikleri ayrı kullanıcı talebiyle ele alınır; otomatik silme/merge yok.
- **Durum:** `implemented`; görsel seçim henüz onaylanmadı. MP4 A/B (BS3P-003) ve entegrasyon (BS3P-004) ayrı karar kapılarıdır.

## D-011 — 2026-10-14 — BS3P-002 hedefli refinement
- **Onay kaynağı:** Kullanıcı mevcut konseptin revizyonunu açıkça istedi: uzun mavi çizginin tamamen kaldırılması, daha büyük/kontrastlı/okunur yüzeyler, sınırlı yardımcı renkler, yaklaşık 7–9s sıralı motion, F5 teşhisi/çözümü ve yalnızca kısa kontroller.
- **Uygulanan kapsam:** Aynı `/prototype/bs3p-right-3d`; veri/kural/web/mobil panel oranları/kamera/malzemeler rafine edildi. Uzun dış yol/port işareti kaldırıldı; iki küçük oturma parçası ve iç kayıt vurguları kaldı. 8.4s tek seferlik akış; loading/static/WebGL ayrımı ve hazır `pose(0)` sonrasında reveal.
- **Renk sınırı:** Önerilen yardımcı renkler yalnızca demo arayüzlerinde küçük vurgulardır; production marka sistemi değiştirilmedi. Yeni dependency yok.
- **Kaynak neden / kısa kontrol:** Önceki SVG finali ve farklı WebGL başlangıcı arasındaki geçiş; React/hydration yok. Hazırlık kapısı, ilk yükleme ve geciktirilmiş/cache-disabled tek reload ile sınandı; ilk görünür durum 0.000. Kısa desktop/mobile/motion/TS ve desktop boyut düzeltmesi sonuçları R1 notunda.
- **Etkilenenler / geri dönüş:** [[../04-Development/BS3P-002-R1-VISUAL-MOTION-REFINEMENT]] manifesti; mevcut hero/MP4/production/arşivler ve planlar korundu. Kullanıcı değerlendirmesine göre ayrı demo rafine edilebilir; otomatik entegrasyon/merge yok.
- **Durum:** `implemented`; görsel kalite kabulü ve mevcut hero entegrasyonu ayrı kullanıcı kararlarıdır.

## D-012 — 2026-10-14 — Bağımsız birleşik Spatial Hero V2
- **Onay kaynağı:** Kullanıcı yeni `/prototype/spatial-hero-plus` için entegrasyon talep etti; görsel temel R1 olmalı, özgün iki rota/MP4/production/eski kasalar korunmalı ve teslim sonrası durulmalı.
- **Uygulama:** Aynı R1 çevresi/kamera/malzeme/8.4s timeline yanında özgün dört yüzlü HTML/CSS prizma. Kaynak subtree/initializer/renderer yeniden kullanılır; prensip onayı production iznine çevrilmez. Ortak zemin ve header; scene üstünde native click/keyboard replay; mobil/reduced statik alternatif.
- **Mekanik sınır:**540px desktop kolonunda420px kare kesit/90° kümülatif X/5000ms+900ms aynen korundu. Yerleşim için dış alan değişti, prizma veya sağ kompozisyon yeniden tasarlanmadı.
- **Doğrulama/manifest:** [[../04-Development/BS3P-008-INTEGRATED-SPATIAL-HERO-V2]] kısa kontrolleri,7.80s kanıtı ve açık konuları içerir.441 görev öncesi dosya hash'i aynı; dependency/Git/yayın işlemi yok.
- **Geri dönüş/sonraki:** İki kaynak demo ayrı ve değişmeden erişilebilir. Birleşik adayın görsel kabulü beklenir; mevcut hero/production entegrasyonu, MP4 A/B ve release QA ayrıca kullanıcı kararı gerektirir.
- **Durum:** `implemented`; kalite onayı değildir.

## D-013 — 2026-10-14 — Birleşik hero R3 polish
- **Onay kaynağı:** Kullanıcı aynı birleşik rotada üst/alt sabit bantları ve transport kontrollerini kaldırmayı, dört nokta bırakmayı, gerçek route/dil sistemine bağlı header'ı ve daha canlı/büyük sağ sahneyi açıkça istedi. Özgün iki demo/MP4/production/eski kasalar korunmalı.
- **Uygulama:** Carrier parçaları DOM'dan çıkarıldı; aynı420px kare kesit ve özgün motion initializer, geçici referans adaptörüyle dört noktalı DOM'a bağlandı.8:5 çizim alanı mevcut auto-fit kamerayla +%11.11 panel boyutu sağlar; UI küçük vurgu renkleri ve yerel SVG varyantı. Native R1 scene/material/light/timeline/readiness değiştirilmedi.
- **Dil sınırı:** Gerçek provider aynı route'larda `bayessoft-locale` kullanır. Prototip TR mesajlarını korur; EN/DE bu preference ile gerçek `/` sayfasını açar, in-place çevrilmiş demo iddiası yok. Gerçek EN desktop/DE mobil geçişi doğrulandı.
- **Kapsam/geri dönüş:** [[../04-Development/BS3P-008-R3-INTEGRATED-HERO-POLISH]] manifesti; V2 notu/kanıtlar ve446 korumalı dosya değişmedi. Kullanıcı bu adayı değerlendirebilir; kaynakları değiştirme/production/release izni verilmiş sayılmaz.
- **Durum:** `implemented`; görsel kabul ve tam erişilebilirlik/final QA ayrı kullanıcı kapılarıdır.

## D-014 — 2026-10-14 — İlk bağımsız homepage
- **Onay kaynağı:** Kullanıcı hero'yu büyük ölçüde görsel olarak onayladı, yeniden tasarlamadan yeni `/prototype/bs3p-homepage` istedi; proje vitrini bu turda yalnızca slot, kısa kontroller ve ayrı görev kimliği.
- **Uygulama:** R3 belge/runtime aynen kullanılır; typed sunum/veri modülleri, nötr mevcut referans listesi, ProjectsShowcase/renderVisual kontratı, eşit dört hizmet, üç aşama, gerçek iletişim/kurumsal footer. Mevcut EN/DE gerçek site locale köprüsü; yerinde yeni çeviri veya sahte yasal route yok.
- **Kaynak sınırı:** ClientReference/public mevcut logo dosyaları kullanıldı; yeni müşteri/partner sınıflandırması yapılmadı. Ayrı izin belgeleri kaynaklarda bulunmadı; yayın teyidi açık kalır. Kaynak prototipler/production/i18n/eski kasalar değişmedi.
- **Manifest/doğrulama:** [[../04-Development/BS3P-009-FULL-HOMEPAGE-SKELETON]] gerçek kısa kontrolleri, logo/capture düzeltmelerini ve iki PNG/JSON'u içerir.468 korumalı dosya aynı; dependency/Git/yayın işlemi yok.
- **Durum/geri dönüş:** `implemented`; yeni ana sayfa görsel kabulü beklenir. Onaylanmış hero ayrı rotada korunur. Animasyonlu vitrin, final içerik/QA/production/release ayrıca talep gerektirir.


## D-015 — 2026-10-14 — Bağımsız Signature Project Showcase
- **Yetki:** Kullanıcının BS3P-011 ve [[../04-Development/BS3P-011_PROJECT_SHOWCASE_MOTION_BRIEF]] talebi; only isolated prototype.
- **Karar:** Üç fiziksel CSS3D folyo yüzü/Y120°/900ms, manuel nav/continuous step ve senkron settle; mobil440ms2D/reduced instant. Native WAAPI yeterli; Three.js/GSAP gerekmedi.
- **İçerik:** Atlı Logistics/FurtherUp Drive/AI-Powered Chatbot gerçek iki repo kaynağı/URL'leri; orijinal1600×1000 SVG konseptler açık etiketli, client screenshot/logo kopyası yok.
- **Sınır/durum:** implemented; sanat yönü ve homepage entegrasyonu onaylanmış sayılmaz. [[../04-Development/BS3P-011-PROJECT-SHOWCASE-IMPLEMENTATION]] test/manifest/known issues.499 korumalı dosya aynı; source brief/MOV/homepage/hero/ref/production/arşiv/dependency/Git/yayın korunur. Önceki D-014/006 kapıları değişmez.


## D-016 — 2026-10-14 — R2 yatay silindirik proje galerisi
- **Yetki:** Kullanıcının açık BS3P-011 R2 talebi; R1'in prizmaya benzeyen görsel mekanik kabulü verilmedi. D-015 uygulaması/rotası ve önceki kanıtlar tarihsel olarak korunur.
- **Karar:** Yeni /prototype/bs3p-project-showcase-r2; ortak CSS3D silindir/9 konum/13 dilim/40° açısal gezinme. Desktop5/mobil3 görünür yüzey, sadece üç gerçek projenin döngüsel tekrarları.1040/700ms/manual final/settle metadata; native WAAPI yeterli, Three.js/GSAP gerekmedi.
- **İçerik:** Aynı doğrulanmış model/veri sağlayıcısı; yeni özgün4:5 kod SVG kapaklar/3 symbol, client screenshot veya referans görüntüsü kopyası yok. Görünür3 proje/concept açıklaması, erişilebilir kontrol/swipe/reduced davranışı.
- **Sınır/durum:** implemented;533 dosya aynı. [[../04-Development/BS3P-011-R2-HORIZONTAL-CYLINDRICAL-SHOWCASE]] gerçek kısa kontrol/manifest/limitleri içerir. Kullanıcı görsel kabulü/homepage entegrasyonu verilmiş sayılmaz; release ve önceki kapılar sürer.


## D-017 — 2026-10-14 — R2 onayı ve homepage slot entegrasyonu
- **Yetki/onay:** Kullanıcının R2 PROJECT SHOWCASE INTEGRATION talebindeki “Onaylanan BS3P-011 R2” ifadesi R2 mekanik/görsel kabulünü kaydeder. Önceki D-016/R2 uygulama ve inceleme notları tarihsel olarak korunur; yeni homepage görünümü bu onayla kabul edilmiş sayılmaz.
- **Karar:** BS3P-012; mevcut ProjectsShowcase sınırı ortak GalleryShowcase/entry modülünü kullanır. İsteğe bağlı bölüm ID/heading/class/action ve GalleryInfo seviye seçeneği; bağımsız R2 default HTML hash'i aynı. Native CSS3D geometry/art/controller/1040–700ms/swipe/reduced/idle/lifecycle aynıdır; ikinci motor/WebGL yok.
- **Yerleşim:** Yaklaşık64,3/35,7, H2/H3 ve sadece #selected-projects override; mevcut Tüm projeler linki korunur. Üç doğrulanmış kayıt/konsept kapak, section sırası aynı; hero/ref/diğer bölümler/production/arşiv korunur.
- **Durum:** implemented; [[../04-Development/BS3P-012-R2-HOMEPAGE-INTEGRATION]] gerçek kısa kontroller/manifest/capture limitlerini içerir.551 protected dosya aynı; Git/yayın yok. Homepage kullanıcı değerlendirmesi ve release kapıları sürer.


## D-018 — 2026-10-14 — FurtherUp poster yalnız homepage önizlemesi
- **Yetki:** Kullanıcının BS3P-013 talebi, supplied FurtherUp posterinin /prototype/bs3p-homepage içinde entegrasyonu; diğer kapaklar/mekanik/production/eski prototipler korunur.
- **Uygulama:** Mevcut readonly proje modeli image dalı ve ortak R2 renderer; yalnız homepage visual override. Mevcut meet oranı korur, CSS/geometri/motion değişmez; bağımsız R2 HTML aynı. OrijinalPNG değişmez, public kopyası birebir aynıdır.
- **Durum:** implemented; [[../04-Development/BS3P-013-FURTHERUP-DRIVE-POSTER-INTEGRATION]] gerçek kısa kontrolleri içerir. Kullanıcı görsel onayı/homepage kabulü/production veya release yetkisi değildir; onay beklenir.


## D-019 — 2026-10-14 — Homepage Reviel featured kaydı ve olmayan detay desteği
- **Yetki:** BS3P-014 kullanıcı talebi: Reviel/FurtherUp/AI; Atlı kayıt/detay/kapak korunur, yalnız homepage seçimleri değişir. Production/eski galeri/hero/ref/diğer bölümler korunur.
- **Uygulama:** Prototype merkezi registry ve mevcut image modeli/meet; additive nullable GalleryProject/link sunumu/entry doğrulaması. Yeni proje/animasyon koşulu yok. Ortak R2 defaultHTML aynı, shared runtime yalnız genel olmayan-link desteği değişti; geometri/motion/CSS aynı.
- **Açık:** Yerel Reviel detay yok/null; teknoloji kullanıcı sağladığı kanıta ilişkin bilgiye dayanır, ilgili GitHub repo bulunamadı. Framework/DB/ödeme iddiası yok. Kozmetik/formül değil dijital web deneyimi.
- **Durum:** implemented; [[../04-Development/BS3P-014-REVIEL-PROJECT-INTEGRATION]] kısa doğrulama/manifest içerir. Kullanıcı görsel kabulü/production/release onayı değildir; onay beklenir.


## D-020 — 2026-10-14 — İki aktif vitrinin ortak seçimi ve gerçek dış CTA
- **Yetki:** Kullanıcı FurtherUp/Reviel/Metek sırası, AI featured kaldırma ve homepage/bağımsızshowcase senkronizasyonunu istedi; önceki standalone seçim koruması bu kapsamda güncellenir. Production/R1/Atlı-AI kayıt/detay/kapak değişmez.
- **Uygulama:** Ortakreadonlyregistry/iki route; Reviel veMetek gerçekHTTPSURL, FurtherUp içdetayhref korunur. GalleryProject/entry HTTPSdesteği veCTAmetni/ariaadı; motion/state/geometri/CSS aynıdır.
- **Asset farkı:** Ayrı minimalistReviel kaynak bulunamadı, mevcutreviel-cover.png kullanıldı; kullanıcıya dosyayolu sorusu iletildi. Orijinalposterler değişmedi, kopyalar birebir aynı.
- **Durum:** implemented; [[../04-Development/BS3P-015-SELECTED-PROJECTS-METEK-CTA]] gerçekkısaTS/desktop/mobil/motion/manifesti içerir. Görselkabul/production/releaseyetkisi değildir; kullanıcıonayı beklenir.


## D-021 — 2026-10-14 — Homepage polish: üç dil, hero bütünlüğü, ayrı aksiyonlar ve footer
- **Yetki:** Kullanıcı production-ready homepage polish istedi; yalnız /prototype/bs3p-homepage. Production/yayın/bağımsız prototiplerin değiştirilmesi yetkisi yok.
- **Kararlar:** (1) Approach homepage render'ından çıkarılır, kaynak/tarihçe korunur. (2) Doğrulanmış içdetay ve canlıURL ayrı model/aksiyon; eksikdetay gizlenir. (3) DışURL blank/noopener-noreferrer/haricietiket. (4) Homepage ön yüz stagezemin/border0/shadownone,900ms ışık; geometri/kernel aynı. (5) Merkezi typedTR-EN-DE/aynıproductionpreference/sayfadaDOM-lang; provider değişmez. (6) Footer aynıwordmark/gerçeklinkler/email/telif/yerelnav/üçdil ile yenilenir.
- **Koruma:** Orijinalhero/prizma/sağThree ve bağımsızR2/refmekaniği/poster/production/arşiv/package aynı. Homepage galeri adapter ortak motoru kullanır; yeni scene/motion/dependency yok.
- **Durum:** implemented; [[../04-Development/BS3P-016-HOMEPAGE-PRODUCTION-POLISH]] kısaTS/lint/browser/manifest/tercihharness sınırını içerir. Kullanıcı kabulü/finalQA/production entegrasyonu yetkisi değildir; onay beklenir.


## D-022 — 2026-10-14 — Görsel kabul ve production migration planının ayrılması
- **Açık kullanıcı kararı:** BS3P-017 talebindeki “BayesSoft 3.0+ ana sayfasının görsel tasarımını onaylıyoruz” ifadesi BS3P-016 görsel sonucu için kabulü kaydeder. Mevcut prototip/kernel/asset ve geçmiş test kayıtları korunur; bu tasarım kabulü production uygulama/yayın izni değildir.
- **Denetim sonucu/plan önerisi:** [[../04-Development/BS3P-017-PRODUCTION-MIGRATION-PLAN]]; AppRouter root component adaptasyonu/tekproductionLanguageProvider+dilnamespace, SEO-route-contact koruması, StaticPages artifact staging ile prototype URL izolasyonu, lifecyclecleanup ve küçük0–7 adımlar/rollback/finalQA. Kod yazılmadı; öneriler uygulanmış sayılmaz.
- **Açık kapılar:** Uygulama planı onayı, gerçek release baseline, Reviel/Metek detay içerikleri, kalıcı motionpause/a11y kararı ve release QA. Plan içinde anılan minimal erişilebilirlik kontrolü bu oturumda eklenmedi.
- **Durum:** Görsel kabul kullanıcı tarafından verildi; geçiş planı uygulama onayı bekler. Commit/push/merge/deploy ayrıca onay gerektirir.
