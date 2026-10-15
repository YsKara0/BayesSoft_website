# BS3P-002 R1 — Sağ hero görsel ve motion revizyonu

**Tarih:** 2026-10-14  
**Kapsam:** Kullanıcı onaylı hedefli revizyon; mevcut konsept ve `/prototype/bs3p-right-3d` korunur.  
**Durum:** Uygulama ve kısa kontroller tamamlandı; kullanıcı görsel onayı bekleniyor.  
**Geçmiş:** [[BS3P-001-RIGHT-HERO-3D-PLAN]] ve [[BS3P-002-RIGHT-HERO-3D-IMPLEMENTATION]] değiştirilmedi. Bu not önceki uygulamanın güncel farklarını kaydeder.  
**Karar:** D-011; uzun çizginin kaldırılması, 8.4s koreografi ve deterministik açılış açık kullanıcı talebidir.

## Teslim

- [Yerel prototip](http://127.0.0.1:3000/prototype/bs3p-right-3d); dev server teslim sırasında açık bırakıldı.
- [[../07-Reviews/evidence/BS3P-002-R1-desktop.png]] — son desktop görünümü.
- [[../07-Reviews/evidence/BS3P-002-R1-mobile.png]] — tek mobil kontrol.
- [[../07-Reviews/evidence/BS3P-002-R1-motion.webm]] — 10.16s kısa kayıt; açılış hazırlığı, 8.4s giriş ve sabit finali içerir. VP9, 1440×900, 25fps kayıt formatı; renderer FPS ölçümü değildir.
- Kontrol verisi: `bayes 3.0-plus/07-Reviews/evidence/BS3P-002-R1-check.json`. İlk kontrol ve yalnızca desktop boyut düzeltmesine ait `sizeCorrection` ayrı kaydedilir; güncel desktop değerleri bu son bölümde bulunur.

Yerel yeniden üretim: `npm run prototype:bs3p:prepare`, `npm run dev -- --hostname 127.0.0.1`. Hedefli TypeScript: `npm run prototype:bs3p:typecheck`. Yeni bağımlılık yok; prepare/config/package komutları aynı kaldı.

## 1. Uzun çizgi tamamen kaldırıldı

`CONNECTION_POINTS`, CatmullRom eğrisi, TubeGeometry, dış bağlantı yolu, küresel portlar ve yol üzerindeki işaret sahne kaynaklarından ve üretilmiş modüllerden kaldırıldı. Mobil/reduced-motion SVG'deki uzun mavi path de kaldırıldı. Three.js vendor kütüphanesinin genel TubeGeometry export'u elbette kütüphanede kalır; sahne onu import/instantiate etmez.

İlişki artık dört unsurla okunur:

- Veri kayıtlarının düzenlenmesi ve seçili girdinin ortaya çıkması.
- Girdi → Koşul → Sonuç adımlarının kural panelinin içinde sırayla görünmesi; yalnızca kısa iç oklar.
- Aynı “Kayıt işlendi” sonucunun web, sonra mobil arayüzde görünmesi.
- Son hizalanmada iki küçük geometrik oturma parçası; her biri 0.14×0.08×0.22 model birimi. Çevreyi dolaşan kablo veya yeni uzun çizgi yoktur.

## 2. Kompozisyon, okunabilirlik ve malzeme

Veri paneli solda açık bir kesit, kural paneli üstte yatay süreç yüzeyi, geniş web yüzeyi önde, mobil sağ önde yer alır. Her panelin içerik alanı büyük ölçüde açığa çıkar; küçük hareketlerden sonra derinlik ofsetleri korunur. Yeni web/mobil oranları ve kamera birlikte ayarlandı; tüm sahneye CSS scale uygulanmadı.

| Panel | R1 model ölçüsü | Son desktop projeksiyon kutusu, 1440×900 |
|---|---|---|
| Veri | 2.1×2.5×0.13 | ≈159×199px |
| İş kuralları | 4.2×1.45×0.13 | ≈319×126px |
| Web | 4.9×2.72×0.13 | ≈372×226px |
| Mobil | 1.65×2.38×0.13 | ≈125×189px |

Bu ölçüler HTML yüzeylerinin dönüştürülmüş bounding rectangle'larıdır; mesh alanı veya tüm cihazlarda aynı ölçü garantisi değildir. İlk R1 kontrolde kamera auto-fit'i web genişliğini ≈319px'e düşürmüştü; bu yüzden web/mobil gerçek oranları ve yatay yerleşim yeniden ayarlandı. Yalnızca bu desktop düzeltmesi tekrar kontrol edildi; mobil/F5 matrisi tekrarlanmadı. Önceki demodaki web yüzeyinin yaklaşık 331px genişliğine göre son web daha geniştir; mobilin önceki ≈99px genişliği de artmıştır. Bu karşılaştırma önceki kaynak/projeksiyon hesabına dayanır; eski sahne yeniden render edilmedi.

Kamera daha önden bakar: sabit orthographic, konum `[3.3, 2.8, 13]`. Frustum, hareket boyunca açılan panellerin kamera uzayındaki köşe sınırları üzerinden hesaplanır ve yaklaşık %12–14 pay bırakır. Fazlar arasında zoom/pan yoktur. Finalde dört yüzeyin sınırı mevcut sağ figure içinde kaldı; mobil ayrı SVG olarak yeniden kadrajlandı.

Malzeme farkları: veri yüzeyi `#DCE5EE`, iş kuralları `#EEF1F5`, web beyaz, mobil çok hafif soğuk beyaz. Kenarlar ayrı PBR malzemesiyle daha belirgin; 0.13 kalınlık ve 0.01 pah, kontrollü roughness/metalness, küçük clearcoat. Ortam ışığı azaltılıp key/rim dengesi yeniden kuruldu; NeutralToneMapping kullanıldı. Mevcut prosedürel stüdyo ortamı, tek 1024px gölge ve hafif zemin gölgesi sürdürüldü. Yeni HDR, görsel, post-processing veya efekt kütüphanesi eklenmedi.

HTML ayrıntılarda koyu lacivert metin, okunur gerçek kavramsal kayıt/adım adları ve daha büyük fontlar var. Dünya boyutu ile HTML boyutu aynı 100px/model birimi ilişkisinden hesaplanır; arka UI'nın öne taşmasını önleyen clip-path korunur. Vurgu renkleri yalnızca bu demo içindeki küçük işaret/dolgu/kenarlarda: Web `#285BD6`, Mobil `#7B87D6`, İş mantığı `#D49355`, Veri `#647B91`. Production marka tokenları değiştirilmedi; büyük yardımcı renk blokları, neon/glassmorphism yoktur.

## 3. Yeniden koreografi — 8.4 saniye

Yeni `motion.ts` tek zaman çizelgesi sahibidir; 3.35s eski akış yalnızca yavaşlatılmadı.

| Zaman | Görünen süreç |
|---|---|
| 0–2.05s | Veri yüzeyi belirir; kayıt satırları 0.52/0.90/1.28s'de düzenli konumlarına gelir |
| 2.05–4.05s | Kural paneli küçük fiziksel açılmayla oturur; Girdi 2.50, Koşul 2.98, Sonuç 3.46s'de görünür |
| 4.05–5.85s | Web yüzeyi ve içerik düzeni oluşur; işlenmiş kayıt vurgusu görünür |
| 5.85–7.15s | Mobil yüzey aynı sonucu taşır; büyük hareket/rotasyon yerine kısa geliş ve sabit açının kapanması |
| 7.15–8.40s | Açık sistem hassas final hizasına yerleşir; kısa oturma parçaları tamamlanır |
| 8.40s sonrası | Tüm yüzey/arayüzler sabit; render loop kapalı |

Smoothstep ile kontrollü hızlanma/yavaşlama; bounce, sonsuz repeat ve otomatik yeniden oynatma yoktur. Replay bütün fazları sıfırdan kurar; “Hareketi atla”/“Son görünüm” aynı final durumunu uygular. R1 kontrolünde iki kontrol de hedefli olarak çalıştırıldı. Mobil/reduced-motion statik politika sürer; tercih değişiminde önceki renderer temizlenir.

## 4. İlk kare/F5 — neden ve çözüm

**Kaynak teşhisi:** Bu rota React sayfası değildir; bağımsız HTML döndüren Route Handler'dır. React ilk render/hydration sahne başlatıcısı yoktur. Önceki açılışta `data-mode=static` ile bütün sistemin farklı çizilmiş SVG finali gösteriliyor; entry de WebGL hazırlanırken bu finali görünür tutuyordu. Ardından farklı kadraj/geometriye sahip `pose(0)` canvas'ına doğrudan geçiliyordu. Bu iki kompozisyon arasındaki kısa değişim bildirilen “yanlış/farklı sahne” için somut kaynak nedenidir. Ayrıca hazır oluşu font/shader/ilk doğru frame ile tanımlayan bir kapı yoktu. Eski tarayıcıda kullanıcı semptomu birebir yeniden oynatılmış gibi sunulmuyor; teşhis mevcut önceki kaynak ve iki farklı başlangıç tanımına dayanır.

**Çözüm:**

1. HTML ilk durum `loading`, poster/canvas/HTML yüzeyler `hidden`. Tamamlanmış başka bir sistem yerine sakin, nötr hazırlık işareti görünür. Mobile/error/reduced-motion SVG ayrı sunumdur; autoplay desktop yükleme placeholder'ı değildir.
2. Policy uygun modu seçer; desktop renderer kaynağı yüklenir. `ready` fontları bekler, final malzemelerini `compileAsync` ile hazırlar, frustum'u ve `pose(0)`'ı kurar, gizli doğru frame'i render eder.
3. Bir frame sınırında başlangıç tekrar 0 uygulanır; `firstPose=0.000` kaydıyla readiness tamamlanır. Yalnızca sonra host/overlay açılır, kontrollü 180ms görünürlük geçişi olur ve zaman sayacı başlar. Animasyon yükleme sırasında gizlice ilerlemez.
4. Fallback'e dönüşte veya tercih değişiminde renderer/listener/observer kaynakları temizlenir. JS olmadan noscript statik alternatifi vardır. CSS ve entry için R1 revizyon query'si eklenmiştir.

Bu, rastgele opacity gizlemesi değildir; görünürlük gerçek hazırlık promise'ine bağlıdır. Three.js `compileAsync` malzemeleri önceden hazırlamak için sunulur; font ve ilk pose kapısı uygulamanın kendi yaşam döngüsüdür. [Three.js WebGLRenderer](https://threejs.org/docs/pages/WebGLRenderer.html)

**Hedefli kanıt:** İlk yükleme ve cache-disabled hard reload'da `loading/ready=false` sırasında poster, canvas ve overlay kapalı gözlendi. Scene import'u 600ms geciktirilerek kapı sınandı. Her iki görünür geçişte `webgl/ready=true`, `time=0.000`, `firstPose=0.000` kaydedildi; hazırlanmadan final/canvas görünümü görülmedi. Replay de `time=0.000`, son görünüm `8.400` oldu. Bu tek Chrome kontrolünün sınırıdır; bütün tarayıcılarda kusursuz açılış garantisi değildir.

## 5. Yapılan kısa kontroller

- Hedefli TypeScript/emit geçti; yeni motion modülü, mevcut demo kaynakları ve route kapsandı.
- Bir desktop 1440×900 kontrolü; auto-fit'in küçülttüğü oranlar için yalnızca desktop boyut düzeltmesi tekrar incelendi. Son dört yüzeyin projeksiyon kutuları figure içine sığdı, pageerror yok.
- Bir mobil emülasyonu 375×812: SVG hazır/görünür, canvas=0, WebGL modül isteği yok, scrollWidth=innerWidth=375.
- Bir kısa motion kontrolü: veri → veri+kurallar → +web → +mobil sırası kaydedildi; final 8.400s; final frame sayısı 509→509. Son ana render pass'i 11 draw call/1.290 triangle; startup/environment/shadow veya gerçek cihaz FPS/enerji ölçümü değildir.
- Yukarıdaki tek hedefli F5 kontrolü ve kısa replay/final etkileşimi; çoklu reload/tarayıcı/viewport matrisi yok.
- 422 korumalı mevcut dosyanın SHA-256'sı aynı: mevcut hero/prizma/MP4/production, eski kasalar, package/lockfile, root config/yönergeler, plan ve önceki uygulama notu korundu.

Tam lint/build/QA, Safari/iOS/gerçek telefon, kapsamlı erişilebilirlik/GPU/context-loss matrisi, MP4 A/B, gerçek sol prizmayla denge, production izolasyonu ve Git/yayın işlemleri yapılmadı.

## 6. Bu revizyonda değişen dosyalar

- `app/prototype/bs3p-right-3d/route.ts`
- `prototypes/bs3p-right-3d/{entry.ts,geometry.ts,scene.ts,motion.ts}` — motion yeni.
- `public/prototype-assets/bs3p-right-3d/{study.css,system-static.svg}`
- Üretilen `public/prototype-assets/bs3p-right-3d/{entry.js,geometry.js,scene.js,motion.js}` — motion yeni.
- `bayes 3.0-plus/04-Development/BS3P-002-R1-VISUAL-MOTION-REFINEMENT.md` (bu not), `TASK_REGISTER.md`
- `bayes 3.0-plus/05-Decisions/DECISION_LOG.md`
- `bayes 3.0-plus/98-Agent-Logs/{CURRENT_STATUS,NEXT_STEPS,SESSION_LOG,DAILY_LOG_2026-10-14}.md`
- `bayes 3.0-plus/07-Reviews/REVIEW_REGISTER.md`
- Yeni `bayes 3.0-plus/07-Reviews/evidence/{BS3P-002-R1-desktop.png,BS3P-002-R1-mobile.png,BS3P-002-R1-motion.webm,BS3P-002-R1-check.json}`; önceki evidence dosyaları korundu.

Package/lockfile, prepare/config ve vendor içeriği bu revizyonda değiştirilmedi; yeni dependency kurulmadı. Önceki Git çalışma ağacı farkları korunur.

## Kalan sorunlar / onay sınırı

- Son görselin premium kalite ve marka uyumu kullanıcı değerlendirmesini bekler. Tek desktop kontrolü tüm ekranlarda kırpılmama garantisi değildir; kamera payı kaynakta ve mevcut ölçüde doğrulanmıştır.
- Mobil SVG sade bir alternatif olup desktop Three.js'in birebir raster kopyası değildir. Safari/gerçek cihaz ve context-loss kapsamlı testleri yapılmadı.
- 8.4s giriş bağımsız deney için açık kullanıcı yönüdür. Gerçek sol prizmanın 5s dönüşüyle hareket dengesi ve eş bağlamlı MP4 A/B ayrıca değerlendirilmeli; bu görev mevcut hero'ya bağlanmadı.
- D-006/R-006 yayın izolasyonu hâlâ açık; noindex erişim engeli değildir. Vendor modülleri minify/tree-shake edilmedi; yayın performansı bu kısa iterasyonun dışında.

Teslimden sonra durulur; yeni revizyon, karşılaştırma veya entegrasyon için kullanıcı onayı/talebi beklenir.
