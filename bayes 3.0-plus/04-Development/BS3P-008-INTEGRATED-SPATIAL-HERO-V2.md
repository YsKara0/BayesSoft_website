# BS3P-008 — Integrated Spatial Hero V2

**Tarih:** 2026-10-14  
**Durum:** completed — bağımsız birleşik prototip teslimi; kullanıcı görsel onayı bekleniyor.  
**Dal:** `feature/bayessoft-3.0-plus`, HEAD `c5bf841`; commit/push/merge/deploy yapılmadı.  
**Yerel demo:** http://127.0.0.1:3000/prototype/spatial-hero-plus  
**Yetki:** Kullanıcının “INTEGRATED SPATIAL HERO V2” talebi; yeni birleşik rota, production veya özgün iki demo değişikliği izni değildir. D-012.

## Sonuç ve sanat yönetimi

Temel, R1 demosunun Instrument Sans / soğuk `#f3f5f7` zemini ve lacivert tipografisi. Solda büyük statik başlık yerine özgün mimari prizma, sağda aynı veri–iş kuralları–web–mobil sahnesi var. Ortak zemin, aynı kolonlara oturan özgün BayesSoft header'ı ve hizalı merkezler iki parçayı tek hero alanında topluyor. Ayrı kart/çerçeve/gradient/glow veya yeni dekoratif obje eklenmedi. Mevcut hizmet satırı ve header bağlantıları kullanıldı; yeni CTA/metin yazılmadı.

1440px masaüstünde sol kolon 540px, sağ alan 732×411.75px; 40px kolon aralığı. Soldaki 420px fiziksel yüz, 82/60px özgün tipografiyle ana odak. Sağdaki web yüzeyi yaklaşık323px, mobil109px genişlikte; daha küçük ama anlamlı ikinci odak. R1 kamera/malzeme/renk değişimi gerekmedi. Sağ sahne 8.4s sonunda sakinleştiği için periyodik sol dönüş görsel odağı sürdürüyor. Kısa kayıtta ilk dönüş ve sağ web/mobil gelişinin örtüşmesi incelendi; başlangıç gecikmesi eklenmedi. Bu bir sanat yönetimi değerlendirmesidir, kullanıcı kabulü değildir.

Tablet için1199px ve altında tek kolon, prizma en fazla540px ve sağ sahne en fazla800px;899px ve altında sağ SVG alternatif. Mobilde dış boşluklar/kontrol yerleşimi farklıdır; özgün container-relative prizma geometrisi ve font oranları korunur. Mobilde420px sabit yüz zorlanmadı; özgün responsive mekanik kullanıldı.

## Kaynakları yeniden kullanma

- Yeni route, iki kaynak `GET()` yanıtından header/prizma/kontrol/hizmet ve R1 figure alt ağaçlarını alır. Sınır işaretleri bulunamazsa açık hata verir. HTML veya scene geometry kopyası oluşturulmadı; geniş bir refactor yapılmadı.
- Prizmanın `initializeSpatialHero` fonksiyonu ve `SPATIAL_FACES` metinleri doğrudan import edilir; özgün CSS değişmeden yüklenir. Dört kalıcı fiziksel yüz, kare kesit, X ekseninde kümülatif0→−90→−180→−270→−360 adımları,5000ms bekleme/900ms geçiş, hover/focus, manuel seçim ve reduced-motion davranışı aynı koddan gelir. HTML metinler WebGL dokusuna dönüştürülmedi.
- Yeni küçük `entry.ts`, mevcut `/prototype-assets/bs3p-right-3d/scene.js` modülünü yerinde yükler. Geometri, orthographic kamera/frustum, PBR kenarlar, RoomEnvironment/ışık, HTML UI projeksiyonu ve8.4s timeline birebir yeniden kullanılır. Three.js0.180.0 ve tipleri zaten uyumluydu; package/lockfile ve bağımlılıklar değişmedi.
- Debug replay/final düğmeleri görünmez. Sahnenin üzerinde erişilebilir adı olan şeffaf bir native button bulunur; click/touch, Enter/Space yeniden oynatır. `:focus-visible`2px mavi outline. Kontrol, `role=img` figure'ın dışında olduğundan görüntü semantiğine gömülmez. Native button davranışı [WAI Button Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/) ile uyumludur.
- R1 renderer'ın final-state argümanı için hidden adaptör kalır; kullanıcıya debug kontrolü gösterilmez. Mobil/reduced-motion durumunda erişilebilir statik SVG ve durum metni vardır, replay gizlenir ve WebGL yüklenmez. WebGL yüklemesi başarısız olursa statik alternatife geçilir. Noscript fallback kaynak figure'dan korunur.
- Loading placeholder → font/`compileAsync`/pose(0)/ilk frame → reveal kapısı korunur. React/hydration yok. Finalde loop kapanır; sayfa arka plana/offscreen geçtiğinde özgün renderer hareketi bitirip gereksiz çizimi durdurur. Render-loop API referansı: [Three.js WebGLRenderer](https://threejs.org/docs/pages/WebGLRenderer.html).

## Kısa doğrulama ve kanıt

- **Hedefli TypeScript:** `node node_modules/typescript/bin/tsc -p prototypes/spatial-hero-plus/tsconfig.check.json` passed. Başlangıç config'ine `DOM.Iterable` eklendi; özgün NodeList iterator kodu değiştirilmedi. `node prototypes/spatial-hero-plus/prepare.mjs` entry.js üretir; package script eklenmedi.
- **Desktop:** Chrome1440×900; dört yüz, kolon540px/yüz420px/merkezden yüz210px, font82/60px,900ms CSS transition ve yatay taşma olmaması ölçüldü. Otomatik ilk90° dönüş, sonraki manuel90° dönüş ve−360'a aynı yönde dönüş izlendi.45°/135° geçiş bölgelerinde yaklaşık−36.7°/−126.7° örneklerde yüz sınırları viewport içinde; atada clipping yok. Kısa kayıt dönüş hacmini de gösterir.
- **Sağ başlangıç/final:** İlk görünür WebGL frame0.000; data→rules→web→mobile→align→final. Son time8.400/running=false; final dört UI yüzeyi figure içinde. Frame509→509 (350ms aralık); ana pass11 draw call/1.290 triangle. Bu cihaz FPS/enerji veya tüm render pass maliyeti ölçümü değildir.
- **Etkileşim:** Click ve Enter replay başlangıcı yeniden kurar. Tek kısa ek klavye kontrolünde gerçek Shift+Tab/Tab, görünür2px `rgb(40,91,214)` outline ve Space replay doğrulandı. Sol hover/focus otomatik dönüşü duraklatır.
- **Mobil:**375×812, touch/reduced-motion emülasyonu; document width375px, yükseklik851px, dört yüz DOM'da. Statik sağ SVG, canvas0, Three scene/vendor isteği0; otomatik hareket kapalı, manuel yüz seçimi anlık−90°. Kontroller44px yüksek. Normal mobil otomatik sol dönüş, bu pass'te ayrı koşul olarak çalıştırılmadı; özgün kaynak davranışı korunur.
- **Kontrol aracı sınırı:** İlk script'in body dışındaki tıklama hedefi düzeltildi. Mobil anlık seçimde `data-rotating` bulunmamasını hata sayan assertion, kaynak davranışı ve kaydedilmiş face=1/angle=−90 ölçümüyle düzeltildi; uygulama kusuru değildi. Programatik pointer focus yerine gerçek klavye focus kontrolü tamamlandı. Bir tamamlanmış desktop/mobile kanıt seti var; kısmi kontrol girişimleri ve yalnızca focus devamı JSON'da açıklanır. Kapsamlı test matrisi yapılmadı.
- **Koruma:**441 görev öncesi dosyanın SHA-256 hash'i aynı: iki özgün route, prizma/motion/CSS, R1 kod/asset, MP4, production, eski kasalar, package/config/yönergeler ve önceki plan/notlar korunur. Yeni bağımlılık yok.

Kanıtlar:
- [Desktop](../07-Reviews/evidence/BS3P-008-desktop.png)
- [Mobil](../07-Reviews/evidence/BS3P-008-mobile.png)
- [7.80s kısa hareket kaydı](../07-Reviews/evidence/BS3P-008-motion.webm) —8.4s girişin kısa kesiti; final desktop PNG'de. Geçici kaynak kayıt10.4s, teslim kesiti7.80s; hız değiştirilmedi.
- [Hedefli ölçümler](../07-Reviews/evidence/BS3P-008-check.json)

## Değişen dosyalar

Yeni uygulama dosyaları:
- `app/prototype/spatial-hero-plus/route.ts`
- `prototypes/spatial-hero-plus/entry.ts`
- `prototypes/spatial-hero-plus/prepare.mjs`
- `prototypes/spatial-hero-plus/tsconfig.json`
- `prototypes/spatial-hero-plus/tsconfig.check.json`
- `public/prototype-assets/spatial-hero-plus/hero-plus.css`
- `public/prototype-assets/spatial-hero-plus/entry.js` (üretilmiş)

Kasa kayıtları:
- `04-Development/BS3P-008-INTEGRATED-SPATIAL-HERO-V2.md` (bu not)
- `04-Development/TASK_REGISTER.md`
- `05-Decisions/DECISION_LOG.md`
- `98-Agent-Logs/CURRENT_STATUS.md`
- `98-Agent-Logs/NEXT_STEPS.md`
- `98-Agent-Logs/SESSION_LOG.md`
- `98-Agent-Logs/DAILY_LOG_2026-10-14.md`
- `07-Reviews/REVIEW_REGISTER.md`
- `07-Reviews/evidence/BS3P-008-{desktop.png,mobile.png,motion.webm,check.json}`

## Açık konular ve sonraki kapı

- Gözlenen bir entegrasyon kusuru kalmadı; görsel denge/kalite kullanıcı incelemesini bekliyor.
- Mobil statik görselde küçük panel metinleri ayrıntı düzeyinde kalır; ana tipografi ve sistemin dört yüzeyli hiyerarşisi öndedir.
- Safari/iOS, gerçek cihaz, kapsamlı screen reader/aksesibilite/GPU/context-loss, geniş responsive matrisi, F5 tekrar matrisi, lint/build ve MP4 A/B yapılmadı. Bu görev final QA değildir.
- HTML alt ağaçlarının kaynak işaretleri değişirse yeni rota adaptörü birlikte gözden geçirilmeli. Tam CSS dosyalarını paylaşma, özgün mekanizmayı refactor etmeden koruma tercihidir.
- Yeni rota da mevcut prototiplerin static export/yayın izolasyonu riskini taşır (R-006/D-006); production teslimi ayrıca kullanıcı onaylı görevdir. Bu çalışmada production'a bağlantı/entegrasyon eklenmedi.
- Plan ve önceki uygulama/R1 notları silinmedi. BS3P-003 karşılaştırma, BS3P-004 mevcut hero entegrasyonu ve BS3P-006 final QA otomatik başlatılmaz. Kullanıcı onayı beklenir.
