# İnceleme ve kalite kaydı

## Geçmişten taşıdığımız bulgular
- **Sol prizma:** Önce iki yüzlü 180° flip yanlış geliştirilmişti; dört ayrı yüz ve 90° X dönüşü düzeltildi. 270px'lik küçük yüz daha sonra ~420px'e çıkarıldı. Başarılı mekanik korunmalı.
- **Sağ MP4:** Video 16:9, H.264 ve opak açık/gri zeminli; görünür kare/ton sınırı CSS `contain` ile tamamen giderilemez.
- **4.0 Modular Assembly:** Görsel/teknik kalite iyi, marka ilişkisi zayıf. Aynı hatayı tekrar etme.
- **4.0 Figma:** Renk/Instrument Sans ve daha görsel ağırlıklı sistemlerden ders al; 3.0 hero karakteri kaybolmasın.

## BS3P-001 kabul kriteri
- Karşılaştırılabilir, özgün marka fikri.
- Sol prizmanın odak etkisini bozmayan sağ hareket.
- Kamera/ışık/malzeme önerisi, giriş/bekleme/fallback akışı.
- Kod ve varlık sınırları, erişilebilirlik ve performans riski.
- **Henüz implementation değil:** Kullanıcı onayı bekler.

## Hızlı geliştirme testi
1 desktop ekran görüntüsü + 1 mobile kontrol + kısa animasyon gözlemi + hedefli type/syntax kontrolü. Kapsamlı responsive matrisi/uzun video kaydı/build ancak final QA veya hata teşhisi gerekiyorsa.

## Final QA (ileri tarihte)
Safari/iOS, Android, reduced motion, klavye, screen reader davranışı, 3D context-loss, performans ve GPU, linkler, gerçek content, SEO, prototip izolasyonu.

## Yeni sorun şablonu
`R-### | tarih | öncelik | gözlem | kanıt | etkilenen rota | karar | durum`

## 2026-10-14 — BS3P-000 yerel inceleme kanıtı

Belge ve kaynak incelemesi tamamlandı. Bu kayıt canlı UI/motion test başarısı değildir. 20 Markdown dosyası ve tüm kasa içi wiki hedefleri mevcut; ARCHITECTURE dosya haritasındaki yollar da mevcut. HEAD/3.0 `c5bf841`, 4.0 `aade98e`; yerel `origin` referansları eşleşiyor, uzak sunucu sorgulanmadı. Tracked kaynaklarda `c5bf841` farkı yok.

| ID | Öncelik | Gözlem / kanıt | Durum / sonraki işlem |
|---|---|---|---|
| R-001 | Yüksek | BS3P-000 bulgusu: eski `agents.md` 2.0 branch/kasasını, `CLAUDE.md` eski Phase 1 kapsamını anlatıyordu. | BS3P-007 ile giderildi: kullanıcı talimatıyla birebir yedek, AGENTS.md tek rehber, CLAUDE yönlendirmesi ve workflow düzeltmesi. Eski kaynaklar arşivde korunur. |
| R-002 | Orta | NEXT_STEPS BS3P-002 `blocked`, TASK_REGISTER `planned` idi; aynı BS3P-001 onay bağımlılığı mevcut. BS3P-000 dosyaları artık yerelde mevcut, kurulum bekleyen güncel ifadeler eskimişti. | Durum kayıtları eşitlendi; BS3P-000 yerel doğrulaması tamam, NEXT_STEPS'teki kullanıcı kabul kapısı korunur. Tarihsel bootstrap kayıtları silinmedi. |
| R-003 | Orta | `01-Brand/BRAND_FOUNDATION.md` içindeki `bayes 4.0/01-Brand/BRAND_FOUNDATION.md` bu checkout'ta yok; `git ls-tree feature/bayessoft-4.0` hedefi içeriyor. | Açık; branch'e ait referans olarak açıklanmalı. Arşiv dosyası kopyalanmadı/merge edilmedi. |
| R-004 | Orta | `public/prototype-assets/spatial-hero/hero.css` Instrument Sans, `#fcfcfa` paper, `#e4e2dc` stage, `#20282f` metin kullanır. `app/layout.tsx` production için Balanced Premium ve farklı fontları korur. 4.0 aday tokenları uygulanmış değildir. | Kasa tasarım ifadelerinin prototip ve gelecekteki homepage kapsamı açıklaştırılmalı; production'a otomatik uygulama onayı sayılmaz. Karar değiştirilmedi. |
| R-005 | Düşük | D-004 `approved in principle`, D-006 `deferred to release`; LOG_SCHEMA karar durumları yalnızca `proposed/approved/implemented/superseded`. DECISION_LOG ayrıca `verified` anlatıyor. | Açık belge şeması tutarsızlığı; onay anlamını değiştirmemek için karar kaydı korunur. |
| R-006 | Yayın öncesi | `route.ts` force-static ve noindex; `next.config.mjs` static export. `.github/workflows/pages.yml` export'u yayınlar, prototype dışlama adımı yok. MP4 yalnızca prototip route'unda referanslı; REFERENCE_REGISTER'daki “üretim asset'i” ifadesi yayında onaylandığı şeklinde okunmamalı. | Mevcut release riski doğrulandı; bu oturumda build/hosting incelemesi veya izolasyon uygulaması yok. Pages push tetikleyicisi main/master; diğer preview hosting ayarları doğrulanmadı. |
| R-007 | Bilgi | `package.json` / `package-lock.json` Three.js, R3F, Drei veya GSAP içermiyor. | Belgedeki “yok olabilir” belirsizliği giderildi. Gelecekte teknoloji seçimi/kurulumu ayrı görev; işlem yapılmadı. |
| R-008 | Bilgi | 3.0+ kasa, eski evidence/Obsidian ayarları, iki logo ikonu ve 4.0 yerel klasörü untracked. `.gitignore` yalnızca 2.0 Obsidian ayarlarını dışlıyor. | Yedeklenmiş/commit edilmiş sayılmaz; seçici Git işlemleri açık kullanıcı talebine bağlı. Dosyalar korunur. |

Kaynakla örtüşen motion: `faces.ts` dört metin; `motion.ts` 5000 ms bekleme/900 ms dönüş, kümülatif 90° X adımları, manuel seçim ve hover/focus/visibility/reduced-motion koşulları; CSS dört kalıcı yüz ve 540px konteynerde yaklaşık 420px yüz/210px derinlik. `video.ts` reduced-motion/hata durumunda PNG fallback içerir. Header linkleri ve native details mobil menü kodda mevcut. Bu özelliklerin canlı davranışı, video codec/ton sınırı, gerçek viewport ölçüleri ve erişilebilirliği bu oturumda test edilmedi. Figma/link/lisans sahipliği dış kaynaklarla doğrulanmadı; yerel Instrument Sans OFL dosyası mevcut.

## 2026-10-14 — BS3P-001 plan inceleme kanıtı
- Plan: [[../04-Development/BS3P-001-RIGHT-HERO-3D-PLAN]]; D-009 proposed. Statik yapı, marka ilişkisi, beş motion pozu, kamera/malzeme/ışık, modül yükleme, fallback, mobil ve A/B sınırları yazıldı. Görsel uygulama onayı veya runtime başarısı değildir.
- Gerçek `app/prototype/spatial-hero/{route,faces,motion,video}.ts` ve `public/prototype-assets/spatial-hero/hero.css` okundu; MP4/PNG/font/lisans varlığı kontrol edildi, PNG görüntülendi. MP4 oynatılmadı, codec veya gerçek kare ölçüsü incelenmedi.
- CSS hesap ayrıntısı: H=`77.777778cqw`; 540px kolonda ≈420px. `--prism-depth`=H/2, merkezden yüz mesafesi ≈210px; karşılıklı yüzler arası tam kare kesit ≈420px. Önceki “210px derinlik” kısaltması bu bağlamda okunmalıdır. 1440px'de sağ alan ≈748×421px, 375px'de ≈335×188px; canlı viewport ölçümü değil.
- R-004 devam ediyor: gerçek stage `#e4e2dc` sıcak gri; planın soğuk `#F3F5F7` varyantı yalnızca ayrı demoya önerildi. Mevcut CSS değiştirilmedi.
- R-006/R-007 devam ediyor: static export/production izolasyonu uygulanmadı; package/lockfile Three.js/R3F/Drei/GSAP içermiyor. Modül hazırlığı sonraki onaylı görev için öneridir.
- Resmi Three.js renderer/orthographic/geometry/material/texture API sayfaları incelendi; skill aramasının ilgisiz raycasting önerisi kullanılmadı. Yeni performans bütçeleri ölçülmemiş hedef olarak yazıldı.
- Plan-only: canlı UI/motion, erişilebilirlik, WebGL fallback, lint/typecheck/build/GPU testleri `not-run`; kaynak/belge kontrolleri dışında test çalıştırılmadı.
- Kapanış kapsam kontrolü: 155 kaynak/asset/talimat dosyası ve eski kasalardaki 259 görünür dosya SHA-256 ile aynı; yalnızca 8 ilgili 3.0+ Markdown değişti/eklendi. Değişen belgelerin wiki hedefleri/whitespace kontrolü ve `git diff --check` uygun. Başlangıçtaki Git değişiklikleri korunuyor.

## 2026-10-14 — BS3P-002 sınırlı prototip kontrolü
- Uygulama/manifest/sınırlar: [[../04-Development/BS3P-002-RIGHT-HERO-3D-IMPLEMENTATION]]. Yeni rota `/prototype/bs3p-right-3d`, D-010 açık kullanıcı onayı kapsamında implemented; görsel kabul kararı verilmedi.
- Hedefli `prototype:bs3p:typecheck` passed; tam repo typecheck/lint/build yok. Desktop Chrome 1440×900, mobil emülasyonu 375×812 ve kısa motion kontrolü yapıldı; ilk desktop örtüşmesi için tek hedefli düzeltme kontrolü gerekti, mobile tekrar bakılmadı.
- Son kanıtlar: `evidence/BS3P-002-desktop.png`, `BS3P-002-mobile.png`, 6.00s `BS3P-002-motion.webm`, `BS3P-002-quick-check.json`. JSON ilk kontrolü ve desktopCorrection finalini ayrı kaydeder; son ana pass 10 draw call/2.218 triangle, final 3.350s/frame 198→198. Giriş/stüdyo-shadow maliyeti veya gerçek cihaz FPS ölçümü değil.
- Mobil static SVG hazır, canvas=0, WebGL modül isteği yok, scrollWidth=innerWidth=375. İlk kısa kontrolde pageerror/HTTP hata yok; düzeltmede pageerror yok. Context-loss/reduced-motion/replay için ayrı runtime matrisi yapılmadı.
- 419 mevcut korumalı dosyanın SHA-256'sı aynı: mevcut spatial-hero/prizma/MP4/production, eski kasalar, yönergeler/config ve plan korundu.
- R-007 artık bu prototip için giderildi: three/@types 0.180.0 package/lockfile'da kayıtlı; R3F/Drei/GSAP yok. R-004 özgün hero için sürer; yeni demo soğuk zemin kullanır. R-006/D-006 production izolasyonu hâlâ açık.
- Açık görsel değerlendirme: ince yüzey kontrastı, bağlantı çizgisi baskınlığı, stilize mobil fallback ve gerçek dönen prizmayla denge. MP4 A/B yapılmadı; 4.0 standardına eşit kalite onayı verilmedi. Bu teslim kullanıcı incelemesini bekler.

## 2026-10-14 — BS3P-002 R1 kısa refinement kanıtı
- [[../04-Development/BS3P-002-R1-VISUAL-MOTION-REFINEMENT]] güncel görsel/motion/F5 açıklaması ve tam manifesti içerir; önceki not/evidence korunur. D-011 implemented, görsel onay beklenir.
- Uzun dış mavi çizgi ve yol üstündeki işaret tamamen kaldırıldı; source/üretilmiş modüllerde eğri/path instance'ı yok. SVG de çizgisiz. Vendor'ın genel geometri export'ları sahne kullanımı değildir.
- Hedefli TypeScript passed; desktop1440×900/tek mobil375×812/kısa motion/tek hedefli hard reload. İlk desktop auto-fit webi küçültmüştü; gerçek oranlar/yerleşim düzeltildi ve yalnızca desktop boyut kontrolü tekrar yapıldı. JSON sizeCorrection son değerlerdir.
- Son yüzey kutuları: Veri159×199, Kurallar319×126, Web372×226, Mobil125×189px; dördü figure içinde. Son frame509→509, final8.400s, ana pass11 call/1.290 triangle. Gerçek cihaz/performance garantisi değil.
- İlk yükleme/reload trace'i: loading sırasında poster/canvas/overlay hidden; görünür geçişte ready=true/time0.000/firstPose0.000. Scene import600ms geciktirildi, cache kapalı tek reload yapıldı; replay0.000/final8.400 doğrulandı. R-009 ilk kare kaynak kusuru bu hedefli kapsamda giderildi; diğer tarayıcılar sınanmadı.
- Mobil SVG görünür/hazır; canvas0/WebGL isteği yok/scrollWidth=innerWidth375. Pageerror/HTTP hata kaydı yok. Kanıtlar R1-desktop.png/R1-mobile.png/R1-motion.webm (10.16s)/R1-check.json.
- 422 korumalı dosyanın hash'i aynı; package/config/plan/eski not, production/mevcut hero/MP4/eski kasalar korunuyor. Uzun QA/Git/yayın yok.
- Açık: premium kalite kabulü, Safari/gerçek cihaz, context-loss kapsamı, 8.4s girişin gerçek sol prizmayla dengesi ve MP4 A/B; R-006/D-006 release izolasyonu sürer.

## 2026-10-14 — BS3P-008 birleşik prototip kısa kontrolü
- Sonuç/manifest/sınırlar: [[../04-Development/BS3P-008-INTEGRATED-SPATIAL-HERO-V2]]; D-012 açık yeni rota yetkisi kapsamında implemented. Kaynak iki demo veya production entegrasyonu değildir.
- Birleşik hero: R1 soğuk zemin, ortak grid/header; büyük özgün CSS tipografi solda, aynı R1 sistem sağda. Sağ8.4s sonra sabit, sol5000+900ms periyodik kalır; kısa kayıtta birlikte hareket değerlendirmesi yapıldı, gecikme eklenmedi. Görsel kabul beklenir.
- Hedefli TS passed. Chrome1440×900; dört yüz,540px kolon/420px yüz/210px merkez-yüz/82-60px font/900ms ölçüldü. Geçiş hacminde viewport taşması/clipping gözlenmedi; aynı yön−360/manual/hover/focus kontrol edildi.
- Sağ ilk görünür0.000 ve final8.400/running=false, frame509→509; dört UI figure içinde, web≈323px/mobil≈109px. Click/Enter/Space replay; gerçek Tab focus2px mavi outline. Ana pass11 draw call/1.290 triangle, tam performans ölçümü değildir.
- Mobil375×812 touch/reduced-motion: statik SVG, canvas0/Three isteği0/yatay taşma yok;44px kontroller ve anlık manuel yüz seçimi. Başka cihaz/breakpoint matrisi yapılmadı.
- Script'in tıklama hedefi ve reduced-motion eksik attribute varsayımı düzeltildi; ürün kusuru değildi. Kaydedilmiş ölçümler ve yalnızca kısa gerçek klavye devamı JSON'da açıklandı; bir final desktop/mobile kanıt seti.
- Kanıt: evidence/BS3P-008-desktop.png, mobile.png, motion.webm (7.80s kesit, hız aynı), check.json. Önceki evidence değişmedi.
- 441 görev öncesi dosyanın hash'i aynı; kaynak rotalar/prizma/MP4/production/package/config/yönergeler/eski kasalar/plan/önceki notlar korunur. Yeni dependency/Git/yayın yok.
- Açık: kullanıcı görsel onayı, Safari/gerçek cihaz/kapsamlı erişilebilirlik/context-loss/final QA; kaynak HTML sınırları değişirse adaptör kontrolü; MP4 A/B ve R-006/D-006 release izolasyonu.

## 2026-10-14 — BS3P-008 R3 kısa polish kontrolü
- [[../04-Development/BS3P-008-R3-INTEGRATED-HERO-POLISH]] sonuç/sınır/manifest; D-013 implemented. Yalnızca birleşik demo revizyonu; kaynak prototip/production değişikliği yok.
- Carrier bant/dikme/mil/yatak0 ve transport0, dört erişilebilir nokta; aynı420px kare kesit/210px yüz mesafesi/90° X/5000+900ms source kernel. Yeni kenar/ton ayrımı ve serbest dış obje.
- Bir Chrome1440×900 desktop ve bir375×812 touch/reduced-motion mobil pass'i, kısa iki prizma geçişi/Three akışı; hedefli TS/prepare passed. QA tekrarı veya video yok.
- Sweep55/56 frame, en yakın−45.31/−135.31; tüm yüz bounds x41.56–626.44/y170.83–677.09, header altı82/noktalar694/sağ alan644. Clipping, viewport/komşu alan çakışması yok.
- Sağ8:5 area732×457.5, web359.13/mobil120.93px; önceki birleşik doğrusal boyuttan +%11.11, dört panel figure içinde. Küçük UI renkleri; R1 native renderer/materyal/ışık/readiness/timeline korunur.
- İlk görünür0.000/final8.400/frame509→509;11 call/1.290 triangle. Tab focus2px, Space replay ve hover/focus pause uygun; demo pageerror/HTTP hata yok. Tam performance veya erişilebilirlik kabulü değildir.
- Header gerçek route'lar/wordmark/localeOptions kullanır. Prototip TR; EN desktop ve DE mobil, gerçek `/` üzerinde lang/preference uygun. Mobil menü viewport içinde/Escape kapanışı; mobilcanvas0/Three isteği0/taşma yok/dört44px nokta/anlık seçim.
- R3 desktop/mobile PNG ve check.json;446 korumalı dosya aynı. V2 notu/evidence, özgün demolar/MP4/production/i18n/eski kasalar/package/config korundu.
- Açık: yerinde EN/DE demo çevirisi, küçük mobil panel ayrıntıları, görünür kalıcı pause olmadan tam motion erişilebilirlik değerlendirmesi, Safari/gerçek cihaz/geniş responsive/context-loss/final QA. Kaynak HTML/initializer adaptör bağımlılığı ve R-006/D-006 release izolasyonu sürer.

## 2026-10-14 — BS3P-009 kısa homepage kontrolü
- [[../04-Development/BS3P-009-FULL-HOMEPAGE-SKELETON]] manifest/sınır/kanıt; D-014 implemented. Kullanıcı hero'yu temel olarak onayladı; yeni homepage görsel kabulü henüz yok.
- Header/hero→referanslar→proje slotu→dört hizmet→üç aşama→iletişim→footer; tek main/h1 ve gerçek linkler. Ayrı ProjectsShowcase/renderVisual, görsel/metin host'u; slotta müşteri screenshot/canvas/animasyon0.
- Hedefli TS passed; ilk desktop1440×900 doğal90°/aynı yön−360 hero, dört yüz/420/210/dört nokta, ilk0.000/final8.400/running=false. Altı unique yerel href200; mailto source kontrolü, gönderim yok.
- Logo clipping/lazy-loading düzeltildi; yalnızca ilgili desktop devamı.10 gerçek mevcut logo yüklenmiş, eş2400px gruplar/4800px track/120s; hover/focus pause ve görünür focus. Tam120s loop izlenmedi. Alt piksel ölçüm toleransı script düzeltmesidir.
- Tek375×812/reduced-motion mobil; taşma/Three isteği/canvas0,10 statik logo/duplicate gizli/tek kolon proje/dört hizmet. DE gerçek root/lang/preference uygun; yeni homepage TR, yerinde yeni çeviri yok.
- Tam sayfa capture hazırlığı tetikledi; sadece capture denemeleri yapıldı. Son viewport yüklemeden önce1440×3537 sabitlendi/native CDP; final8.400/frame33→33. İki final tam sayfa PNG ve JSON, mobile375×4427; video/uzun QA/matris yok. Kısmi kontrol/kayıt tekrarları notta.
- 468 görev öncesi dosya aynı: hero prototipleri/renderer/MP4/production/data/i18n/referans PNG/arşivler/package/config/önceki not ve kanıt korunur. Yeni dependency/Git/yayın yok.
- Açık: animasyonlu vitrin ve final içerik; kaynaklarda referans izin belgeleri/müşteri-partner ayrımı/yasal route yok. Safari/gerçek cihaz/uzun loop/screen reader/GPU/context-loss/full QA ve R-006/D-006 yayın izolasyonu bekler. Composer'ın kaynak HTML sınırı bağımlılığı kayıtlıdır.


## 2026-10-14 — BS3P-010 referans polish kısa kontrolü
- [[../04-Development/BS3P-010-REFERENCES-MARQUEE-POLISH]] scope/manifest/bağlantı kaynakları. Yalnız homepage referansları; D-014 yönü değişmedi.
- **Giderildi:** Boş tabindex0 kapsayıcı click odağı + focus-within sürekli pause. Kapsayıcı gereksiz odağı çıkarıldı; native hedef focus-visible/hover gerçek etkileşimi duraklatır. Tıklanmış gerçek link odakta/focus-visible=false/running;250ms transform−11.9978→−16.9998. Klavye renk/2px pause/blur→resume uygun.
- **Görünüm:** Mevcut PNG aynen; nötr ortak filtre, ilgili hover/focus180ms özgün renk; light-ink kaynak ayrı normalleştirme, opak beyaz detay korunur. Normalde karanlık kutu yok. İlk düz filtre Arel'i disk yaptı; sadece logo görünümüne yönelik düzeltme/tekrar yapıldı. Alt piksel ölçüm toleransı script düzeltmesidir.
- **Linkler:**10 mevcut adres marka kimliğiyle doğrulandı; hastane fetch timeout sonrası Bakanlık domain indeksinde. Prototip-local whitelist; yeni/değişmiş URL link oluşturmaz. Klonlar Tab dışı/aria-hidden, gerçek hedefler adlandırılmış. Yeni müşteri/partner iddiası yok.
- **Gerçek kontrol:** Hedefli TS, tek desktop1440×900/mobil375×812 touch-reduced/click-resume; eş2400px/120s,0/119999ms seam0.020px. Tam120s izlenmedi. Mobil157.5×64 hedefler/10 logo/taşma0/statik/duplicate gizli/geçiş0s. Pageerror0. Sadece filtre-görüntü tekrarları; hero/diğer bölümler QA'sı veya video/matris yok.
- **Koruma:**486 başlangıç dosyası aynı; diğer homepage modülleri, özgün demolar/prizma/MP4/production/data/logo/arşiv/package/config/BS3P-009 not ve kanıtları korundu. İki yeni bölüm PNG/JSON; Git/yayın işlemi yok.
- **Açık:** Kullanıcı görsel değerlendirmesi; Safari/gerçek cihaz/screen reader/tam loop yapılmadı. Önceki referans izin/ilişki ayrımı ve R-006/D-006 release izolasyonu bulguları açık kalır; bu görev kapsamlı QA değildir.


## 2026-10-14 — BS3P-010 Hover Color Fix
- **Giderildi:**180ms filter→none interpolasyonu sırasında yüksek contrast/artan brightness/azalan grayscale parlak ara renk yaratıyordu. İki aynı PNG/grid katmanı; sabit nötr filtre/renkli none ve200ms yalnız opacity. Dark-logo zemini de sabit renk/opacity pseudo-element.
- **Gerçek kontrol:** Tek hover, bir klavye focus ve bir click-resume passed.10 hover karesinde filtre değişmez/renkli none, ara opacity mevcut; ölçüler aynı. Klavye2px/final0–1/pause, iki görsel aria-hidden/alt boş/Tab dışı. Click sonrası link pointer odağında kalsa da fare çıkışı/running ve250ms transform ilerler; donma yeniden oluşmadı.
- **Sınır/koruma:** Yeni mobil/TS/full QA/hero/screenshot/video kontrolü yapılmadı.490 korumalı dosya aynı; eski not/kanıt/URL kümesi, marquee/link/mobil/reduced kuralları/diğer homepage/prod/orijinal prototip/arşiv/PNG/package/config korundu. Dependency/JS runtime/Git/yayın yok.
- **Kanıt/sonraki:** [[../04-Development/BS3P-010-REFERENCES-MARQUEE-POLISH]] ek hata kaydı; evidence/BS3P-010-hover-color-check.json. Üç kontrolde açık hata yok, kullanıcı görsel incelemesi beklenir. Önceki kapsam dışı review bulguları değişmedi.


## 2026-10-14 — BS3P-010 Reference Logo Sizing Fix
- **Giderildi:**64px frame içinde auto grid intrinsic row171–205px; contain büyük img kutusunu sınırlandırmadığı için marquee dikey kırpıyordu. Definite block frame, iki absolute inset0/max-width-height100%/contain katman ve yerel round/square/horizontal sınıfları. Önceki kontrol yalnız karşılıklı hizayı ölçmüş; frame sınırı artık kontrol edildi.
- **Gerçek kısa kontrol:** Before ölçümü sonrası tek1440×900 desktop/375×812 touch-reduced mobil görüntüsü. Her katman frame/slot içinde/hizalı; round56/48 ve square64/56, desktop band88→88. Mobil scrollWidth375/statik/duplicate gizli. Kısa Arel hover bounds aynı/opacity200ms/filter none; click sonrası pointer focus kalırken fare çıkışı/running ve250ms ilerleme. Tek iki PNG/JSON; tekrar/TS/hero/full QA/matris/video yok.
- **Koruma:**491 başlangıç dosyası aynı. Yatay logo sınırları, PNG/link kümesi/120s loop/mobil/reduced/focus/200ms opacity/diğer homepage/hero/production/orijinal prototip/arşiv/package/config/eski kanıtlar korunur. Dependency/JS runtime/Git/yayın yok.
- **Manifest/sonraki:** [[../04-Development/BS3P-010-REFERENCES-MARQUEE-POLISH]] yeni sizing ek kaydı; sizing-desktop.png/sizing-mobile.png/sizing-check.json. Kısa kontrolde açık hata yok; kullanıcı görsel incelemesi ve önceki kapsam dışı review bulguları bekler.


## 2026-10-14 — BS3P-011 bağımsız vitrin kontrolü
- [[../04-Development/BS3P-011-PROJECT-SHOWCASE-IMPLEMENTATION]]; brief/MOV ve eski notlar korunur. D-015 implemented, görsel kabul ve homepage entegrasyonu değildir.
- Üç gerçek kaynak kaydı/slug/hasDetailsPage, detay linkleri200; net konsept etiketiyle üç özgünSVG. Falsified client/UI/metric claim0; başka firma görseli/istemci logo kopyası yok.
- Native CSS3D Y120/900ms/continuous reverse-wrap ve atomic settled selection; typed machine/input lock. Mobil440ms swipe/48px/capture; reduced instant/focus2px/polite status/idle0. Background commit handler var; gerçek OS testi yok.
- Final1440×1000 desktop/375×812 mobile;58 frame/two-face depth/visible-face clipping0, wrap iki yön/key/swipe/reduced/console0/failed-resource0 ve WebGL/React/hero animation request0. Hedefli TS/prepare geçti; config JSX dependency/harness aria-disabled beklemesi düzeltmeleri notta. Initial art whitespace correction ve son mobile nav row stabilize; yalnız final PNG ve mobil üç seçimde aynı y489.734 hedefli kontrolü tekrarlandı. Geniş responsive/video/full QA yok.
- 499 korumalı dosya aynı; homepage/hero/ref/original prototypes/MP4/production/data/logolar/eski kasalar/package/config/önceki note/evidence/brief/MOV değişmedi.28 yeni uygulama dosyası/üç kanıt; dependency/Git/yayın yok.
- Açık: kullanıcı sanat yönü ve içerik sunumu incelemesi; Safari/gerçek cihaz/SR/OS background/BFCache/performance/full QA yapılmadı. Homepage için typed props/headLevel/controller adapter ayrı onaylı iş; renderVisual tek-proje slotu aynı kaldı. R-006/D-006 release izolasyonu kapısı korunur.

## 2026-10-14 — BS3P-011 ek referans hareket incelemesi
- [[../04-Development/BS3P-011-MOTION-REFERENCE-ANALYSIS]]: önceki yalnız1s kareye karşı bu tur verilen5,593333s MOV sona kadar Chrome playback/ended=true ve12 zamanlı gözlem. Metadata [[evidence/BS3P-011-reference-analysis.json]]; kareler geçici, kaynak medya aynı.
- Ortak silindirik Y dönüşü/perspektif/örtüşme/yüzey ışığı/sürekli ritim incelendi; kısa kesit orijinal etkileşim sözleşmesi veya kesin easing/geometri doğrulaması değildir. Mevcut düz üç yüzlü, kullanıcı kontrollü900ms folyo BayesSoft yorumu olarak korunur.
- Ürün kodu/önceki kanıtlar ve530 korumalı dosya aynı. Ürün browser/TS testleri tekrarlanmadı; yeni dependency/yayın veya homepage entegrasyonu yok. Sanat yönü ve mevcut kapsam dışı QA bulguları kullanıcı incelemesine açık; D-015'in statüsü/onay anlamı değişmedi.


## 2026-10-14 — BS3P-011 R2 horizontal cylindrical gallery
- Kullanıcı R1 mekanik görsel kabulünü vermedi; R1 note/code/evidence korunur. [[../04-Development/BS3P-011-R2-HORIZONTAL-CYLINDRICAL-SHOWCASE]] yeni bağımsız rota, D-016 implemented; görsel kabul/entegrasyon değildir.
- Final desktop5/mobil3 görünür yüzey;9 ortak silindir konumu/13 kavis dilimi ve yalnız üç gerçek projenin tekrarları. Typed state/1040–700ms/reverse wrap/settle metadata/input lock/48px/focus2px/swipe/reduced instant/idle0. Özgün4:5 kapaklar, görünür3 proje/concept; client screenshot/logo/iddia üretilmedi.
- Hedefli TS/prepare ve kısa1440×1000/375×812: taşma0, iki yön wrap/key/swipe/reduced/console0/failed-resource0. Initial seams tek UV/overscan rötuşuyla giderildi; harness SVG hit-test/stdin giderme notta. İki PNG/3,88s VP9 WebM/JSON; video süre başlığı doğrulandı, optional JPEG export desteklenmedi. MOV gerçek QuickTime olarak sona kadar incelendi.
- 533 korumalı dosya aynı;19 yeni R2 uygulama dosyası/four evidence; production/homepage/hero/ref/original demos/arşiv/sourceMOV/brief/R1 note ve kanıtlar/package korunur. Dependency/Git/yayın yok.
- Açık: CSS13 dilimli kavis yaklaşık yüzeydir; dış iki desktop yüz yalnız önizleme, aynı üç proje tekrar eder. Safari/gerçek cihaz/SR/OS background/performance ve release QA yapılmadı; D-006/R-006 izolasyon kapısı korunur. R2 sanat yönü ve homepage entegrasyonu kullanıcı kararı bekler.


## 2026-10-14 — BS3P-012 R2 homepage entegrasyonu
- [[../04-Development/BS3P-012-R2-HOMEPAGE-INTEGRATION]]; R2 onayı kullanıcı bu görev talebinde açıkça verdi. D-017 implemented; homepage görünümü/release kabulü değildir.
- Aynı galeri renderer/motor/art/geometri/data; H2-H3/ortak entry/yerel64,3–35,7/korunan Tüm projeler linki. Bağımsız R2 HTTP HTML hash'i aynı;551 dosya aynı. Header/hero/ref/services/approach/contact/footer raw markup/sıra aynı.
- Hedefli TS/kısa1440×1000 desktop5 yüzey/ileri0→1/klavye geri1→0/metadata-href/idle0/focus2px;375×812 touch-reduced mobile3 yüzey/taşma0. Pageerror/failed-resource0. Initial bg sayım/capture driver düzeltmeleri notta; son mevcut-link ekleme sonrası yalnız PNG/R2 hash tekrarlandı. Mobil normal swipe/wrap/full QA/video yok.
- Desktop full-page screenshot original heroWebGL katmanını final-ready8.400 iken göstermedi. Sebep uygulamada doğrulanmadı; hero kaynağı değiştirilmedi. Teslim desktop galeriyi homepage içinde gösterir; mobil tam sayfa/reduced. Bu capture sınırlaması açık bırakılır.
- Açık: kullanıcı homepage entegrasyon değerlendirmesi, Safari/gerçek cihaz/SR/performance/final QA; konsept görseller/EN-DE/yasal/referans ve D-006/R-006 release kapıları ayrı. Altı uygulama dosyası/iki PNG/JSON; dependency/Git/yayın yok.


## 2026-10-14 — BS3P-014 Reviel homepage
- [[../04-Development/BS3P-014-REVIEL-PROJECT-INTEGRATION]] completed, kullanıcı incelemesi beklenir. Reviel/FurtherUp/AI sırası, tam poster/korunan oran; Atlı production kayıt/detay/kapak aynı.
- HedefliTS/desktop/mobil reduced/kısa ileri-geri/doğru nullable CTA geçti; bağımsızR2 HTML aynı, ortak runtime yalnız genel link desteği değişti. Geometri/motion/CSS/hero/ref/diğer bölümler/production/arşivler aynı.
- Açık: Reviel mevcut BayesSoft detay sayfası yok, link eklenmedi; ilgili GitHub repository bulunamadı, teknoloji bağımsız kod teyidi bekler. Tam framework/DB/commerce iddiası yok. FinalQA/normal mobil swipe/motion/Safari/SR/performans/release izolasyonu ayrı kapsam; video/uzun QA yapılmadı. Mobil clip capture düzeltmesi notta kayıtlı.


## 2026-10-14 — BS3P-015 ortak FurtherUp / Reviel / Metek vitrini
- [[../04-Development/BS3P-015-SELECTED-PROJECTS-METEK-CTA]] completed/incelemebekler. İkiaktifrotaJSON eşit, AI-Atlı featured dışında/kayıtlar korunur; gerçekReviel-MetekCTA ve korunmuşFurtherUp.
- HedefliTS/desktop1040ms/mobil700ms/reduced/doğruhref/tamposter/taşma0/idle0/pageerror0/failedresource0 geçti. Motion/geometri/CSS/production/hero/ref/diğerbölüm/arşiv/R1 aynı; video/fullQA/nativeCTA dışnavigation/swipematrisi yok.
- Açık: Ayrı minimalistReviel asset bulunamadı; mevcuthibritposter kullanıldı/dosyayolu sorusu iletildi. Genelhomepagekabulü/BS3P-006releaseizolasyonu/nihaiQA ayrı kapsam. Tech kullanıcıbilgisine dayanır; bağımsızGitHubteyidi yapılmadı, yeni teknik iddia eklenmedi.


## 2026-10-14 — BS3P-016 homepage polish
- [[../04-Development/BS3P-016-HOMEPAGE-PRODUCTION-POLISH]] completed/prototipincelemesi bekler. Yerelheader/typedTR-EN-DE/zeminekarışanprizma/ayrıdetay-canlı/approachkaldırma/yenifooter. Production/bağımsızR2/orijinalhero-Three/refmekaniği/poster/arşiv aynı.
- HedefliTS-lint/kısa desktop-mobil/dil-lang/taşma0/linkler/doğal−90°/hoverpause/Escape/menuclose geçti. Tercihreloadassert test DEseed yüzünden durdu; round-trip bağımsıztekrar yok. Yalnız eksikmobilcapture/ikiPNG/JSON; ilkpasshamtelemetry saklanmadı, finalmobilerrors0/failed0. UzunQA/video/fullbuild yok.
- Açık: Reviel/Metek gerçekBayesSoftdetay yok; yasalroute/ref izinleri/productionizolasyonu/Safari/gerçekcihaz/SR/performance/finalQA/çeviri kullanıcıkabulü. Three illüstrasyonunun dekoratif sanat yazıları korunur, UI ve accessibleetiketler çevrilir. Yeni üretim/yayın kararı alınmadı.


## 2026-10-14 — BS3P-017 production migration audit
- [[../04-Development/BS3P-017-PRODUCTION-MIGRATION-PLAN]] completed; görsel tasarım D-022 ile kullanıcıca kabul edildi, production uygulama/finalQA kabulü değildir. Yalnız kaynak denetimi ve belgeler; browser/TS/lint/build/test yok.
- Önemli fark: AppRouter/layout/provider/SEO ile layout'u atlayan prototypeHTML/ESM; composer doğrudan taşınmaz. Global CSS/font/chrome, ReactStrictMode/SPA cleanup ve locale redraw riskleri için scopedcomponent/tekprovider/lifecycle planı.
- Static export ve ./out Pages upload; noindex/robots erişim engeli değildir, Next15 middleware desteklenmez. Source/dev korunarak temizstagingartifact/CI negatifroute kontrolü ve gerçek404 önerildi; bu oturumda uygulanmadı. Canlıdeployrevision/cachehost durumu bilinmiyor.
- Açık yayın kapıları: Kalıcı motionpause (prizma/marquee; uzunscene), Safari/gerçekcihaz/WebGLfallback/performance/a11y; Reviel/Metek detailsayfası yok; hukuki/ref/font teyidi; BS3P-016 storageharness sınırlaması. Son iyiartifact/rollback manifesti olmadan release yapılmaz.
- Plan0–7 küçükadım ve rollback/finalQA listesi içerir; production/asset/bağımsızproto/eski kasalar/Git/yayın değişmedi. Uygulama onayı beklenir.
