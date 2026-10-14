# CURRENT STATUS — 2026-10-14 BS3P-017 production migration audit/plan

**Aktif çalışma dalı:** `feature/bayessoft-3.0-plus`  
**Başlangıç commit'i:** `c5bf841` (3.0'dan dallandı).  
**Ana karar:** BayesSoft 3.0 Architectural Spatial hero + seçici yeni 3D iyileştirmeler.  
**Şu anki aşama:** BS3P-017 completed: kaynak denetimi ve production geçiş planı teslim. Kullanıcı 3.0+ homepage görsel tasarımını bu görev talebinde onayladı; entegrasyon veya yayın yetkisi verilmedi. Uygulama kodu aynı.  
**Teslim:** [[../04-Development/BS3P-017-PRODUCTION-MIGRATION-PLAN]]; BS3P-016 prototip/kaynak/kanıtlar korunur.  
**Yerel rota:** `/prototype/bs3p-homepage` BS3P-016 hâlinde; production `/` değiştirilmedi. Bu audit server/browse durumunu yeniden test etmedi.  
**Bekleyen görev:** BS3P-017 planının uygulanması için açık kullanıcı onayı; gerçek yayın baseline/artifact, Reviel-Metek detay eksikleri, kalıcı hareket duraklatma erişilebilirliği, izolasyon ve final QA kapıları planda.  

## Güncel BS3P-017 teslimi ve görsel kabul
- Görsel tasarım kullanıcı BS3P-017 talebinde onaylandı (D-022); bu kayıt geçmiş testleri değiştirmez ve production uygulama/yayın izni sayılmaz.
- Mevcut production AppRouter/React root layout-provider; prototip layout'u atlayan HTML/ESM. Doğrudancomposer taşınmaz; root-scoped component/CSS/lifecycle adaptasyonu ve tek production provider/dictionary önerilir. Production header/footer diğerroute'larda korunur.
- Static export/GitHub Pages/out upload gerçekkaynakta: middleware önerilmez, noindex/robots erişim engeli değildir. Kaynak/dev korunarak temiz production staging artifact'inden bütün prototype route çıktıları ve bağımlılıkları çıkarılır; CI ve gerçek404 release gate olur.
- Metadata/canonical/OG/Twitter/JSON-LD/sitemap/robots/config/CNAME/mevcut5route+detail/iletişimPOST sözleşmeleri korunur. FurtherUp detail+live mevcut; Reviel/Metekdetail yok/null, sahteURL yok. AI/Atlı kayıtları silinmez.
- Riskler: strictmode-SPA cleanup/global selector/dilstate, SafariCSS3D/WebGLfallback/assetpayload/CLS, kalıcımotionpause ihtiyacı; BS3P-016 tercih harness sınırlı. 0–7 entegrasyon adımları + diff/artifactrollback ve ayrıfinalQA listesi hazır. Gerçek deployrevision/hostingcache canlıda doğrulanmadı.
- Yalnız plan/task/current/next/session/günlük/D-022/review değişti. Test/build/browser/entegrasyon/commit/push/merge/deploy yok; kullanıcı plan onayı beklenir.

## Güncel BS3P-016 teslimi
- Header aynıwordmark/yerel4anchor/gerçekemailCTA/mobilEscape; merkezi tür güvenliTR-EN-DE/liveDOM/lang/storagepref. Production provider/i18n ve bağımsız prototipler değişmedi. Aynıprismamessagesarray ve galeri veri referansları korunarak metinler çevrilir; sahne reinitialize edilmez.
- Homepage yüzeyleri --stage/border0/shadownone;900ms yumuşakmotionışığı, geometri/X90°/420/5000+900kernel/dot/hover-focus/reduced aynı. SağThree renderer/timeline korunur.
- FurtherUp gerçekdetay+canlı; Reviel-Metek yereldetay yok/gizli/null, gerçekcanlılarblank/noopener-noreferrer/haricietiket. Homepage model/adapter yalnız; bağımsızR2 kaydı/render/runtime/CSS aynı. AI/Atlı production kayıtları korunur.
- Approach render/import kaldırıldı; component/tarihçe durur. Lightfooter/wordmark/kısamarka/yerelnav/mevcutsosyal/email/telif/üçdil. Sırahero-ref-projeler-hizmet-iletişim-footer.
- HedefliTS/lint passed; tek1440×1000desktop/375×812mobil/yerinde3dil/taşma0/doğrulinkler/natural−90°/hoverpaused/Escape/menuclose. Tercihreloadassert harness DEseed yüzünden durdu; yalnız eksikmobilcapture tamamlandı, matrix/motion tekrarı yok. İkiPNG/JSON/sınır notta; finalmobilerrors0/failed0.
-513source/asset/archive dosyasından504aynı/9mevcutdeğişti+12yeni yalnızhomepage kaynak-runtime-CSS/config. Production/orijinalprizma/Three/bağımsızR2/ref/poster/arşiv/package aynı. Note/task/current/next/session/günlük/D-021/review güncel; commit/push/merge/deploy yok.

## Güncel BS3P-015 teslimi
- Ortak R2 registry/homepage re-export: FurtherUp Drive → Reviel → Metek Makina; AI/Atlı iki aktif vitrinden çıktı. Production kayıt/detay/kapak/R1 korunur; bağımsız R2 verisini senkron değiştirme bu görevde açıkça yetkilidir.
- Reviel ve Metek kullanıcı metin/etiketleri, CTA “Projeyi inceleyin”/gerçekHTTPSURL; FurtherUp mevcut poster/açıklama/href aynı. Ortak GalleryProject/entry HTTPS desteği ve erişilebilirCTA adı değişti; motion/geometri/CSS aynı.
- Orijinal3 poster/public3 kopya aynı; meet/tam görüntü/kırpma-esnetme yok. Ayrı minimalist Reviel bulunamadı, mevcut hibrit kaynak kullanıldı; dosya yolu sorusu iletildi.
- İki hedefliTS geçti; tek desktop1440×1000/ileri1040ms/klavye geri, tek375×812mobil700ms ve reducedMetek/taşma0/idle0/doğru CTA. İki rota JSON verileri eşit, pageerror/failed-resource0; iki desktop/iki mobil PNG/JSON. FullQA/video/native dışsite CTA navigation yok; hedef siteler web aracında açıldı.
-511 başlangıç source/asset/archive dosyasından503 aynı,8 mevcut değişti+2 yeni ortakregistry/MetekPNG. Note/task/decisionD-020/review/current/next/session/günlük güncel; production/hero/ref/diğer bölüm/arşiv/package aynı. Commit/push/merge/deploy yok, kullanıcı onayı beklenir.

## Güncel BS3P-014 teslimi
- Homepage merkezi prototip registry: Reviel → FurtherUp Drive → AI-Powered Chatbot Platform; Atlı yalnız featured listeden çıktı, production/data/Atlı detay/kapak ve bağımsız R2 seçimleri aynı.
- Reviel1080×1456 orijinal/publicPNG aynı; mevcut meet/sabit4:5/tam poster/yan%3,64 boşluk. FurtherUp/AI korunur, üç Reviel yüzeyinde aynı symbol.
- Yerel Reviel detay kaydı yok; null detailHref ve genel bilgi-panel desteği href kaldırır/CTA gizler. R1 model/galeri mekaniği/CSS aynı; ortak R2 entry/controller yalnız link desteği değişti. Bağımsız R2 HTML birebir aynı, runtime byte-identical değildir.
- ASP.NET / C# / HTML / CSS / JavaScript kullanıcı bilgisine dayanır; ilgili GitHub repo bulunamadı, framework/DB/commerce iddiası yok. BayesSoft dijital web deneyimi geliştirmesi açık, kozmetik/formül iddiası yok.
- İki hedefli TS geçti; desktop1440×1000/kısa ileri1040ms→FurtherUp/klavye geri→Reviel/doğru CTA; mobil375×812 reduced/taşma0. İlk mobil capture clip hatası yalnız statik capture düzeltmesi; desktop/motion tekrarı/video/fullQA yok.508 dosyadan497 aynı/11 mevcut değişti+2 yeni uygulama/asset; note/log/review/D-019/ikiPNG/JSON güncel.
- Server3000 açık; commit/push/merge/deploy yok. Kullanıcı BS3P-014 görsel onayı beklenir.

## Güncel BS3P-013 teslimi — önceki BS3P-012 durumu tarihsel olarak aşağıda korunur
- BS3P-013 completed: yalnız homepage FurtherUp visual alanı yeni1080×1457 postere bağlandı. Ortak model/renderer, Atlı/AI, tüm metadata/linkler, R2 geometri/motion/kontroller aynı; bağımsız R2 HTML aynı.
- Sabit4:5 SVG alanında mevcut meet ile oran/tam görsel korunur; yanlarda yaklaşık%3,67 boşluk, kırpma/esnetme yok. Public PNG orijinalle byte-identical.
- Hedefli TS geçti; desktop1440×1000/tek1040ms ileri→FurtherUp/−40°/doğru href/idle0, mobil375×812 reduced statik/taşma0. Gecikmiş image öncesi/sonrası galeri layout ölçüleri aynı. İlk yanlış harness seçicisi düzeltildi; kapsamlı QA/video yok.
-506 source/asset/archive dosyasından yalnız route.ts değişti; diğer505 aynı. Yeni public PNG/ikiPNG/JSON ve görev/kasa kayıtları. [[../04-Development/BS3P-013-FURTHERUP-DRIVE-POSTER-INTEGRATION]] gerçek sonuç/manifest/sınırları içerir.
- **Güncel bekleyen kapı:** BS3P-013 homepage poster görünümü kullanıcı onayı; BS3P-012 genel entegrasyon kabulü otomatik verilmedi. Server3000 açık; commit/push/deploy yok.

## Korumalı uygulama
- `/prototype/bs3p-project-showcase` R1 kaynak/asset/not/kanıtları; görsel mekanik kabul edilmedi, tarihi uygulama korunur.
- Homepage BS3P-016 kapsamında polish aldı; kaynak hero/prizma/Three ve referans görsel mekanizması korunur. Yaklaşım artık render edilmez; kaynak component/tarihçe durur. Bağımsız R2 aynı motion/geometri/CSS ile BS3P-015 ortak seçili verisini kullanır; eski çıktı/kanıtlar tarihsel olarak korunur.
- `/prototype/spatial-hero` route'u, dört yüzlü sol prizma ve otomatik dönüş.
- `/prototype/spatial-hero-plus` R3 route'u, kaynakları ve tüm görsel/motion özellikleri.
- `/prototype/bs3p-right-3d` R1 route'u ve tüm sahne/asset'leri.
- Sağdaki MP4 ve header/mobile menü.
- Production kodu, mevcut 3.0 ve 4.0 GitHub branch'leri.

## Git referansı
Bu oturumda branch `feature/bayessoft-3.0-plus`, HEAD `c5bf841` doğrulandı. Önceki kayıtta 3.0 `c5bf841`, 4.0 `aade98e`; arşiv/origin referansları yeniden karşılaştırılmadı, uzak sunucu sorgulanmadı. Başlangıçta `CLAUDE.md`, Git index'indeki `agents.md`, `package.json` ve lockfile modified; kasa, R1 demo/kaynak/asset, önceki evidence/ayar/görseller ve 4.0 klasörü untracked idi. Önceki çalışmalar korundu; package bu görevde değişmedi, commit/push yok.

## Güncel BS3P-012 entegrasyon ve kısa doğrulama
- ProjectsShowcase sınırı ortak R2 GalleryShowcase/entry modülünü kullanır; mevcut placeholder DOM kaldırıldı. Readonly üç proje verisi/konsept kapak/geometri/motion ve cleanup aynı; ikinci motor/WebGL/dependency yok.
- İsteğe bağlı id/headingLevel/className/header-action ve GalleryInfo H2/H3 seçeneği; homepage H2/H3, R2 default H1/H2. Bağımsız R2 HTTP HTML hash'i önce→sonra aynı. Mevcut Tüm projeler linki korundu; sadece #selected-projects grid/spacing/token/focus override.
- Desktop yaklaşık64,3/35,7:802,281/445,719px,5 yüzey; mobil3 yüzey/tek kolon, yatay taşma0.1040/700ms ortak silindir/ileri-geri/klavye/swipe/reduced/final hold korunur; idle render/autoplay yok.
- Hedefli strict TS passed. Kısa normal desktop ileri0→1/FurtherUp ve klavye geri1→0/Atlı, doğru href/metin/idle0/focus2px; tek375×812 touch-reduced mobil statik görüntü/taşma0. Header/hero/ref/diğer bölüm markup'ları aynı, sıra korunur; pageerror/failed-resource0. Normal mobil swipe/full QA tekrarlanmadı.
- İlk harness beyaz-zemin piksel sayımı düzeltildi; capture software GPU/final-ready bekler. Test tarayıcısının tam sayfa görüntüsünde original hero WebGL katmanı görünmedi; sebep uygulamada doğrulanmadı/hero değişmedi. Final desktop PNG proje bölümünden1440×1000, mobil tam homepage; son eski-link geri ekleme sonrası yalnız PNG/R2 hash tekrarı. Video/matris yok.
- 551 korumalı dosya aynı; altı uygulama dosyası ve BS3P-012 note/log/review/D-017/üç kanıt güncellendi. D-017 implemented, R2 kullanıcı onayı kaydedildi; homepage/release kabulü değildir. Git/yayın yok.

## Korunan bağımsız R2 — önceki uygulama ve kontroller
- Tek CSS3D silindir/9 konum×13 kavis dilimi; üç gerçek proje üçer kez. Desktop5/mobil3 yüzey aynı anda görünür. Yeni özgün4:5 SVG kapaklar;72/28 yerleşim, yalnız üç gerçek kayıt/URL ve görünür konsept etiketi.
- Tek rotor Y40°/desktop1040ms/mobil700ms; sürekli step/reverse-wrap, settle sonrası senkron metadata/link, input lock.48px native kontrol/klavye/focus2px/swipe/reduced instant; final animation0/autoplay yok. R1 saf model/state/dom/swipe read-only yeniden kullanılır, R1 sahne çalıştırılmaz.
- MOV gerçek QuickTime formatında ve5,593333s kesit Chrome'da sona kadar/ended=true/12 zamanlı kareyle yeniden incelendi. Referans görselleri kopyalanmadı; son perde/dönüş ritmi R2'ye aynen taşınmadı.
- Strict hedefli TS/prepare passed. Bir desktop1440×1000 ve mobil375×812; taşma0,5/3 görünür yüzey; kısa reverse0→2/forward2→0/rapid lock/klavye2px, native touch0→1 ve reduced1→2/animation0; pageerror/failed-resource0. İlk dilim seams tek overscan/UV rötuşuyla giderildi; harness hit-test/stdin sorunu sonrası otomatik kısa pass. İki PNG/JSON ve3,88s WebM. Ayrıntılar notta; full QA yok.
- 533 korumalı dosya aynı;19 yeni R2 uygulama dosyası/dört yeni kanıt/kasa kayıtları. Dependency/Three.js/GSAP/package/Git/yayın değişmedi. D-016 implemented, görsel onay değildir; R1/homepage entegrasyonu yok.

## Korunan R1 — önceki uygulanmış durum ve kontroller
- Ek referans talebi tamamlandı: 5,593333s MOV Chrome'da sona kadar/ended=true ve12 zamanlı kareyle incelendi. İlk uygulama oturumundaki yalnız1s kare incelemesi açıkça ayrıldı. [[../04-Development/BS3P-011-MOTION-REFERENCE-ANALYSIS]] dönüş/perspektif/derinlik/ritim ve düz folyo yorumu; prototip kodu/önceki kanıtlar aynı, ürün QA'sı tekrarlanmadı.530 dosya korundu; D-015 ve görsel onay kapısı değişmedi.
- Yeni standalone native HTML/ESM rota; üç geniş CSS3D yüzlü proje folyosu, yaklaşık63/37 yerleşim ve editoryal kısa bilgi. Cobalt/lacivert/silver özgün1600×1000 SVG konseptler; gerçek client UI/logo yok, konsept etiketi görünür.
- Atlı Logistics, FurtherUp Drive, AI-Powered Chatbot Platform; data/projectDetails + data/site gerçek kayıt/slug/hasDetailsPage, kısa özet/teknoloji ve gerçek URL. Üç detay route'u200.
- 900ms Y120° fiziksel dönüş, reverse/wrap sürekli step, tek typed state, repeated input lock/aria-disabled ve settle sonrası atomik metadata. Autoplay/idle animation/rAF0. Mobil440ms2D/swipe, reduced anlık,48px kontroller/2px focus/tek polite status. Visibility/geometry handler uçuşu hedefte sonlandırır; gerçek OS background testi yapılmadı.
- Hedefli TS/prepare passed; ilk check config'e yalnız JSX preserve eklenmesi gerekti. Final desktop1440×1000/mobil375×812,58 rotation frame/two-face depth/clip0, iki yön wrap/keyboard/swipe/reduced/console0. Art/metin boşluğu rötuşu; harness aria-disabled beklemesi düzeltildi. Sonrasında sadece final PNG/sabit mobil kontrol satırı doğrulandı; üç seçimde y489.734 aynı. Ayrıntılı gerçek tekrarlar not/JSON'da.
- ProjectShowcase(id,projects,headingLevel) + mountProjectShowcase(root,projects); future h2/h3 ve scoped tokens/visual union. Mevcut renderVisual tek-proje slotu bu tur değişmedi. Yeni API/homepage entegrasyonu tarayıcıda denenmedi; default standalone render kontrol edildi.
- 499 korumalı dosya aynı: homepage/hero/ref/orijinal prototipler/MP4/production/data/logo/arşiv/package/config/yönergeler/önceki not ve kanıt/brief/MOV. Yeni28 uygulama dosyası/kasa kayıtları/üç kanıt; dependency/Three.js/GSAP/commit/push/merge/deploy yok. D-015 implemented, kullanıcı sanat onayı değildir.

## Önceki homepage iskeleti ve korunmuş kontroller — BS3P-009/010
- Yeni standalone route mevcut R3 GET belgesini ve runtime'ını aynen kullanır; bölüm sırası header/hero→referanslar→seçili proje slotu→hizmetler→yaklaşım→iletişim→footer. Hero yeniden tasarlanmadı.
- Readonly veri/türler, escape/site-link helper, ayrı bölüm modülleri ve üç yerel CSS. ProjectsShowcase/renderVisual + data-project-visual sınırı; FurtherUp metadata/gerçek link, screenshot/canvas/animasyon0.
- BS3P-010 Sizing Fix:64px frame içindeki auto grid satırı Arel171.19/hastane176/Hypersense205.03px büyümeyi oluşturuyordu. Artık definite block frame ve iki absolute inset0/max-width-height100%/contain katman. Yerel shape verisi: round56px desktop/48px mobil; square64/56px; yatay176px genişlik üst sınırı/64–56px yükseklik ve Teşkilat48–44px korunur. Slot/bant yüksekliği artırılmadı;200ms opacity, tek erişilebilir hedef/2px focus/120s marquee/pointer-focus donma düzeltmesi/linkler/reduced kuralları aynı.
- 10 mevcut URL önceki polish'te marka siteleriyle doğrulandı; prototipe ait URL kümesi değişmedi. Hastane önceki doğrudan fetch timeout sonrası resmî domain kaydıyla doğrulandı. Ayrı izin/ilişki sınıflandırması kaynaklarda yok; yeni müşteri iddiası eklenmedi.
- Dört eşit hizmet ve üç kısa aşama; gerçek iletişim ve kurumsal footer. Mevcut yasal route yok, sahte link eklenmedi. TR prototip; EN/DE R3 locale köprüsüyle gerçek siteyi açar; mobil DE doğrulandı.
- Son sizing fix kontrolü: aynı Chrome oturumunda önce gerçek grid taşması ölçüldü, düzeltmeden sonra tek1440×900 desktop/375×812 touch-reduced mobil görüntüsü ve kısa Arel hover/click. Her katman kendi çerçevesine/slotuna sığıyor; bounds aynı/hover değişmiyor. Desktop band88px önce→sonra, mobil scrollWidth375/statik/duplicate gizli. Click sonrası gerçek link odakta/focus-visible false/running ve250ms transform ilerliyor. Yeni sizing desktop/mobile PNG ve JSON; TS/hero/full QA/video veya matris yok.
- Önceki hover fix kontrolü: bir hover/klavye focus/click-resume,10 karede sabit filtre/filtresiz renk/200ms opacity. Katmanlar birbirine hizalıydı; frame'e sığma kontrolü eksik kalmıştı. Bu sizing fix'te frame/slot sınırları ayrıca ölçüldü. Eski JSON/notlar korunur.
- Önceki BS3P-010 polish kontrolü: hedefli TS, desktop1440×900/mobil375×812, gerçek link click/keyboard2px; eş2400px ve0/119999ms sınır0.020px. Arel beyaz alanı/ton filtresi için görünüm tekrarları ve alt piksel test toleransı düzeltmesi eski not/kanıtta korunur.
- Önceki BS3P-009 kontrolü: İlk1440×900 desktop doğal90°/−360 hero, dört yüz/420/210/dört nokta, ilk scene0.000/final8.400/loop-stop; altı unique yerel link200. Bu oturum hero/diğer bölümleri yeniden test etmedi.
- Tek mobil375×812/reduced-motion: scrollWidth375/canvas0/Three isteği0,10 logo statik, proje tek kolon/dört hizmet. Logo kontrolü ve yalnızca capture düzeltmeleri hedefli tekrarlandı; video veya geniş responsive matrisi yok.
- İki tam sayfa PNG/JSON: desktop1440×3537 için viewport yüklemeden önce sabitlendi, capture final8.400/frame33→33; mobil375×4427. Mid-capture viewport değişiminin hazırlık tetiklemesi kaynakları değiştirmeden çözüldü.
- Son sizing fix'te491 görev öncesi korumalı dosya hash'i aynı: doğrulanmış link kümesi/önceki BS3P-010 kanıtları, diğer homepage modülleri, özgün prototip/hero/MP4/production/data/logo/eski kasalar/package/config/yönergeler ve BS3P-009 notları. Yalnız References.ts/references.css/yeni reference-sizing.ts ve görev/log/review/üç yeni kanıt değişti; dependency/JS runtime/Git/yayın yok. D-014 yönü korunur.

## Mevcut riskler
- Eski kök yönerge çelişkisi (R-001) kullanıcı talimatıyla giderildi. Yeni rehberde 2.0'a aktif geliştirme yönlendirmesi yok.
- Yerel dosya adı AGENTS.md olsa da Git index'i hâlâ `agents.md` adını taşıyor; ileride kullanıcı onaylı Git kaydında harf değişimi ayrıca kaydedilmeli. Bu görevde staging/index işlemi yapılmadı.
- `BRAND_FOUNDATION` içindeki 4.0 marka dosyası çalışma ağacında yok; `feature/bayessoft-4.0` Git ağacında var.
- Karar durum etiketleri LOG_SCHEMA ile bütünüyle uyumlu değil; D-004/D-006 onay anlamı değiştirilmedi.
- CSS `--prism-depth` merkezden yüz mesafesidir; tam kesit derinliğiyle karıştırılmamalı. Yeni birleşik rotada desktop ölçümü/kısa hareket incelemesi yapıldı; geniş matris yapılmadı.
- Sağdaki opak videonun kenar/ton sınırı.
- Yeni demoda vendor ESM minify/tree-shake edilmedi; yayın maliyeti değerlendirilmedi. Prepare kaynak değişiminde manuel çalıştırılır.
- Birleşik route kaynak HTML işaretlerine bağlı; kaynak alt ağaç sınırları değişirse adaptör birlikte gözden geçirilmeli.
- Prizma initializer'ının iki transport referansı setup adaptöründe karşılanır; kaynak sözleşmesi değişirse adaptör kontrol edilmeli. EN/DE birleşik hero çevirisi uygulanmadı; gerçek siteye yönlendirme açıkça belirtilir.
- Untracked eski Obsidian evidence ve görseller, Git push ile yedeklenmiyor.
- Demo rotaları production izolasyonuna henüz alınmadı.
- Homepage BS3P-016 ile TR/EN/DE UI destekler; kullanıcı BS3P-017 talebinde görsel tasarımı onayladı. Dil tercihinin reload testi hâlâ harness sınırlıdır; production entegrasyonu uygulanmadı. Referanslar müşteri/partner ayrımı ve ayrı kullanım izin belgeleri kaynaklarda yok; yasal sayfa rotası yok. Yayın öncesi kullanıcı içerik teyidi gerekir.
- Homepage composer kaynak belge sınırlarına bağlı; kaynak hero HTML sözleşmesi değişirse adapter gözden geçirilmeli. Referans PNG payload/uzun loop/final erişilebilirlik release aşamasında değerlendirilmeli.

## Bir sonraki Codex eylemi
Kullanıcının BS3P-017 geçiş planı uygulama onayını bekle; BS3P-010/009 inceleme kayıtları korunur. Vitrin entegrasyonu tamamlandı; ek revizyon, çeviri/yasal içerik, A-B/production veya release işlemini otomatik başlatma. Açık kalite/izolasyon/kasa bulguları [[../07-Reviews/REVIEW_REGISTER]] ve ilgili görev notlarında; final QA ayrı kapsamdır.

> Bu dosyayı her oturumda yeniden, yalnızca gerçek duruma göre güncelle. Eski anlık görüntüyü SESSION_LOG'a gömmek yerine gerekiyorsa tarihçede referansla.
