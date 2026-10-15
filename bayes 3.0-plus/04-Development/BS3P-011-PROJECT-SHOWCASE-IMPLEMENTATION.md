# BS3P-011 — Signature Project Showcase

**Tarih:** 2026-10-14  
**Durum:** completed — bağımsız prototip; görsel onay bekleniyor.  
**Dal / HEAD:** `feature/bayessoft-3.0-plus` / `c5bf841`.  
**Şartname:** [[BS3P-011_PROJECT_SHOWCASE_MOTION_BRIEF]] baştan sona okundu; özgün dosya korunur.  
**Yerel URL:** http://127.0.0.1:3000/prototype/bs3p-project-showcase  
**Karar:** D-015 implemented; homepage entegrasyonu veya görsel kabul değildir.

## Yön ve görsel sistem
“İşlerimiz konuşsun.” Solda üç geniş fiziksel yüzeyli folyo, sağda kısa ve senkron proje hikâyesi. Silindirik raymarching referansı yalnız mekânsal geçiş ilhamı olarak kullanıldı; yüzey/texture/görsel kopyalanmadı. Yerel MOV, minimal FFmpeg'in MOV desteği olmadığı için Chrome video öğesiyle okunup1s karesi incelendi; video değişmedi.

Instrument Sans mevcut yerel fontundan; beyaz#FFFFFF, mineral#F3F5F7, lacivert#15263B, ikincil metin#53677A ve BayesSoft mavisi#285BD6. Periwinkle yalnız kapakta. Desktop iki kolon yaklaşık63/37;640px civarında frontal kapak, kontrollü gölge/ince kenar. Üç SVG1600×1000: cobalt operasyon akışı, lacivert editoryal gelişim kapağı, silver/periwinkle yapılandırılmış diyalog. Büyük tipografi, gerçek iş alanını anlatan soyut motifler; stok görsel/client screenshot/başka firma portfolyosu veya client logosu yok. Görünür etiket: “Özgün görsel konsept”.

## Gerçek proje verileri
`data/projectDetails.ts` ile `data/site.ts` birlikte doğrulandı; kayıt/slug/hasDetailsPage eşleşmezse renderer açık hata verir. Üç gerçek detay route'u tarayıcı kontrolünde200 döndü. Açıklamalar bu kayıtların kısa Türkçe özetidir; yeni metrik/başarı/partner iddiası yok.

| Seçim | Kaynak başlık / domain | Detay |
|---|---|---|
| Atlı Logistics | Atlı Logistics - Workforce Management System / Operations; ekranda doğrulanmış başlığın kısa ön kısmı | `/projeler/atli-logistics` |
| FurtherUp Drive | FurtherUp Drive / Enterprise Coaching | `/projeler/furtherup-drive` |
| AI-Powered Chatbot Platform | Aynı başlık / AI Platform | `/projeler/ai-chatbot` |

Teknoloji satırları gerçek techStack alanından gelir. Konsept kapaklarda proje adları kullanılmaz; yalnız editoryal bilgi panelinde gerçek isim vardır. Gerçek UI kullanımına ilişkin yeni izin/iddia üretilmedi.

## Motion ve davranış
- Tek nesne/üç düz yüz: Y ekseni120° adımlar, radius=faceWidth/(2*tan(π/3)). Tüm yüzler aynı rotorla döner; final düz ve keskindir. Desktop900ms WAAPI/cubic-bezier(.65,0,.2,1); önceki yön+120°, sonraki−120°. Adım sayısı süreklidir, wrap sırasında açı sıfırlanmaz.
- Tek typed state: activeIndex/fromIndex/toIndex/direction/phase/step/targetStep. Geçişte yeni komutlar reddedilir, düğmeler aria-disabled olur ve focus kaybolmaz. Metadata eski seçimi korur; animation.finished sonrası yeni yüz/isim/kategori/açıklama/link aynı commit'te güncellenir.
- Autoplay yok. Idle'da animation/rAF döngüsü yok. visibilitychange hidden/geometry değişiminde uçuş hedefte sonlandırılır; Promise token'ı çift commit'i engeller. Gerçek OS arka-plan testi yapılmadı.
- Mobil440ms2D translate/opacity;48px yatay/eksen eşiği ve pointer capture ile swipe, dikey scroll/pinch korunur. Link gesture yüzeyinin dışında. Reduced-motion anlık seçim; tüm kontroller korunur.
- Kontroller metadata uzunluğundan bağımsız üst satırdadır; mobilde üç seçimde y489.734px aynı ve48×48 hedefler viewport içinde. Değişken proje adları okları aşağı taşımaz.
- Türkçe native düğme adları,2px focus, galeri içi klavye okları; Tab/Alt/Ctrl/Meta kısayollarına müdahale yok. Offscreen SVG yüzler aria-hidden/non-actionable. Tek polite/atomic status yalnız seçim sonunda güncellenir. JS olmadan ilk kapak/detay linki kullanılabilir; çalışmayan kontroller gösterilmez.

## Mimari / sonraki entegrasyon sınırı
Next15 mevcut bağımsız prototip geleneği: force-static native HTML GET, küçük browser ESM modülleri; React/Three.js/GSAP/hero runtime veya yeni dependency yüklenmez. Ortak hafif escapeHtml helper yeniden kullanılır.

- Server: ProjectShowcase / ProjectStage / ProjectInfo / ProjectControls, typed project-data ve ayrı project-visuals/üç SVG renderer.
- Client: saf state, stage/WAAPI/ResizeObserver, swipe, controller, küçük entry/schema guard. Transform sahipliği stage modülündedir; timeout/magic metadata delay yok.
- `ProjectShowcase({id,projects,headingLevel})`: üç readonly kayıt; standalone headingLevel1, gelecekte bölüm için2/h3. Base alanlar mevcut homepage ShowcaseProject ile yapısal uyumludur; visual concept/image union'ı kapak sağlayıcısını değiştirebilir.
- `mountProjectShowcase(root,projects)` → navigate/getState/destroy. Unique id ve scoped ps-* stiller/tokens; aktör, metadata ve kontroller aynı root altında.
- Mevcut homepage renderVisual yalnız tek proje görselidir; senkron üçlü vitrin için onaydan sonra section renderer'ın bu bileşene bağlanması gerekir. H1/başlık hiyerarşisi headingLevel2 ile korunabilir. Bu tur slot/hero/homepage değiştirilmedi; entegrasyon yapılmış sayılmaz.
- Hazırlık: `node prototypes/bs3p-project-showcase/prepare.mjs`; production build hook/package script değiştirilmedi.

## Gerçek kısa doğrulama ve iterasyon
- Hedefli TS ve prepare passed. İlk server check metadata'nın type-only TSX bağımlılığı nedeniyle JSX ayarı istedi; yalnız prototype check config'e jsx:preserve eklenip geçti. Son API/yerleşim değişiklikleri sonrası hedefli TS tekrar geçti; full lint/build yok.
- Final Chrome desktop1440×1000: üç detay URL200, başlangıç Atlı/idle/animation0, viewport taşma0.900ms fiziksel ilk→son dönüşte58 frame örneği; iki ön yüz birlikte görünür, stage sınırı dışında görünür yüz0. Metadata transition boyunca eski seçim, finalde doğru yüz/link.
- Önceki0→2/+120 ve sonraki2→0/−120 wrap, stage odaklı ArrowRight,2px focus ve idle animation0. Console/pageerror ve başarısız resource0; React/WebGL/hero animation asset isteği0.
- Bir kısmi desktop pass, Playwright'ın aria-disabled ikinci düğmeyi bekletmesi nedeniyle yanlış rapid-test beklentisinde durdu. Simülasyon force:true ile gerçekten geçiş içinde gönderilecek şekilde düzeltildi; kısa pass tamamlandı. Ürün state hatası değildi.
- İlk görünümde sağ başlık rezervi/boşluk tek odaklı rötuşla sıkılaştırıldı. Sonrasında kontrol satırı üstte sabitlendi; yalnız son iki PNG ve mobil üç seçimde sabit kontrol konumu hedefli doğrulandı. Motion wrap/route/klavye testleri bu son capture'da tekrar edilmedi.
- Mobil375×812/touch: flat mode, viewport taşma0,48px hedefler; gerçek CDP touch swipe0→1, reduced-motion1→2 anlık/animation0. Yeni headingLevel/tokens/title sınıfları varsayılan h1/h2 ve görsel değerleri korur; son capture bu markup/stilleri kullanır.
- Video kaydı, geniş responsive matrisi, gerçek cihaz/Safari, screen reader, OS background/BFCache, full performance veya release QA yapılmadı.
- 499 başlangıç dosyası hash'i aynı: homepage/hero/referanslar, kaynak prototipler/MP4, production/data/i18n/logolar, eski kasalar, package/config/yönergeler, önceki not/kanıt ve özgün brief/reference MOV korunur.

## Kanıt
- [[../07-Reviews/evidence/BS3P-011-desktop.png]] — final seçili Atlı,1440×1000.
- [[../07-Reviews/evidence/BS3P-011-mobile.png]] —375px final yerleşim.
- [[../07-Reviews/evidence/BS3P-011-check.json]] — motion/controls/link/resource ve son sabit mobil navigasyon ölçümleri; hedefli tekrar notları.

## Dosyalar
Yeni uygulama dosyaları28:
- `app/prototype/bs3p-project-showcase/`: route.ts, project-data.ts, project-visuals.ts, ProjectShowcase.ts, ProjectStage.ts, ProjectInfo.ts, ProjectControls.ts; visuals/operations.ts, coaching.ts, intelligence.ts.
- `prototypes/bs3p-project-showcase/`: types.ts, state.ts, dom.ts, stage.ts, swipe.ts, controller.ts, entry.ts, prepare.mjs, tsconfig.json, tsconfig.check.json.
- `public/prototype-assets/bs3p-project-showcase/`: showcase.css ve yedi üretilmiş ESM JS.

Kayıtlar: bu not, TASK_REGISTER/CURRENT_STATUS/NEXT_STEPS/SESSION_LOG/günlük/REVIEW_REGISTER/DECISION_LOG ve üç yeni kanıt. Mevcut tarihsel kayıtlar silinmedi; briefing değiştirilmedi.

## Açık / dur
Kısa Chrome kontrolünde açık işlev/kırpılma hatası kalmadı. Kapaklar konsepttir; sanat yönü ve nihai proje sunumu kullanıcı incelemesine açıktır. Safari/gerçek cihaz/SR/OS-background ve release izolasyonu ayrıca kontrol edilmeli. Homepage entegrasyonu ayrı açık onaylı görevdir; API varlığı entegrasyon kabulü değildir.

Yerel server açık. Yeni dependency/commit/push/merge/deploy yok. Kullanıcı onayı beklenir; başka işe geçilmez.

## 2026-10-14 — Ek MOV referans incelemesi
İlk oturumda yalnız 1s karesi incelenmişti. Kullanıcının ek talebiyle verilen 5,593333s MOV Chrome video öğesinde sona kadar oynatıldı/ended=true; 12 zamanlı kareden yüzey dönüşü, perspektif, derinlik ve ritim analiz edildi. [[BS3P-011-MOTION-REFERENCE-ANALYSIS]] gözlem/yorum sınırlarını ve BayesSoft folyosuyla ilişkiyi açıklar. Kısa kesit orijinal demonun tam davranış sözleşmesi değildir; sürekli silindirik hareketten seçim süresi/autoplay kuralları uydurulmadı.

Mevcut üç düz yüzlü CSS3D900ms/manual navigation kararı korunur; prototype kodunda değişiklik veya tekrar ürün QA'sı yok. 530 dosya (499 eski korumalı +28 vitrin kaynağı +3 mevcut kanıt) aynı. Yeni analiz notu/metadata JSON ve task/status/next/session/günlük/review ek kayıtları; kaynak MOV/brief/diğer alanlar korunur. D-015 implemented ve kullanıcı görsel onayı/entegrasyon kapısı aynen geçerlidir.
