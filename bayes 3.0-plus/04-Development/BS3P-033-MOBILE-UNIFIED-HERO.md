# BS3P-033 — R3 onaylı / mobil production entegrasyonu — 2026-10-24

Kullanıcı R3 tasarımını ve20s animasyonu onayladı; yalnız mobil entegrasyon ile commit/push/Pages yayını açıkça yetkilendirildi. Onaylı MobileHero ve timeline ortak production dosyalarına çıkarıldı; prototip aynı kodu kullanır. Desktop içeriği/Three.js/diğer bölümler ve tasarım değerleri aynı. Mobilde eski iki parçalı içerik899px altında gizlenir ve hydration sonrası unmount edilir; tek görünür hero ve sabit `#hero` hedefi korunur.

Yerel production export:12mobil dil/boyut, dört başlık ve20s senkron döngü, pause/resume/reduced/SSR/CLS/tekhero; navigasyon/referans kaydırması/üç proje galerisi geçti. Onaylı mobil390px kare ile0piksel;desktop1440/1920ile0piksel, normaldesktop1canvas4yüz. TS/hedefli lint/build/export geçti:686dosya,0prototip bağımlılığı/artifact. İlk desktop karşılaştırmasındaki fark testin DEdilinde kalmasından geldi;TRkoşulunda tekrar0fark doğrulandı. Gerçek Safari testi yok; canlı site açılmadı.

Fetch sonrası master/origin-master03779c2ve0/0. Bu kayıt commit öncesidir; seçici staging/`feat: integrate unified mobile hero`/push/Pages takibi yetkili. Kesin yayın sonucu final teslimde ve yerel `07-Reviews/evidence/BS3P-033/release/workflow.json` kaydında verilir. Büyük GIF/WebP/MOV/ham kareler, kişisel/ilgisiz dosyalar stage edilmez. Yayın sonrasında ikinci dokümantasyon commit'i yapılmayacak; canlı son kontrol kullanıcıya aittir.

## Önceki raporlar — tarihsel, korundu

# BS3P-033 — Revizyon 3: Premium Unified Mobile Hero

**2026-10-24 · R3 yerel prototip hazır; kullanıcı görsel onayı beklenir.**
Önizleme: http://localhost:3033/prototype/bs3p-mobile-hero
Branch/HEAD: `master` / `03779c24274f317ba16e9a42b47702d3a7f3dd2d` — değişmedi.

## Değerlendirme ve yön

R1 küçük/sıkışık katmanlar ve zayıf hiyerarşi nedeniyle yetersiz bulundu. R2 daha büyük ve temizdi; kullanıcı yaklaşık6.5/10 değerlendirdi. Sabit başlık ve büyük ölçüde aynı kalan infografik, dört hizmetin ürün dönüşümünü anlatmıyordu. Bu değerlendirme kullanıcı görüşüdür; ölçülmüş tasarım puanı değildir. R3 aynı mineral/lacivert/mavi yönü ve ürün arayüzünü geliştirir; önceki tasarımlar kabul edilmiş sayılmaz.

R2 kaynaklarının tam yedeği yeni kanıt klasöründeki `Prototype.tsx.r2-before` ve `prototype.module.css.r2-before` dosyalarında; R1/R2 ekran/kayıt/raporları aynen korunur. R3 karşılaştırması `r2-r3-comparison.png`.

## Tek sahne, dört dönüşüm

| Hizmet | Aynı sistemdeki dönüşüm | TR başlık |
|---|---|---|
| Web | Geniş tarayıcı yüzeyi, yan araç alanı, iki içerik modülü ve analiz grafiği | Dijitalde güçlü bir deneyim. |
| Mobil | Aynı ana yüzey telefon oranına daralır; aynı üç modül iki sütundan tek dikey akışa yerleşir. Tarayıcı chrome'u telefon üst çizgisine dönüşür. | Her yerde çalışan çözümler. |
| Yapay zekâ | Telefon yeniden açılır; aynı ürünün arkasındaki veri ve AI/iş mantığı yüzeyleri görünür. Veri işaretleri, mantık ve analiz aynı sistemin katmanları olarak okunur. | Veriden akıllı kararlara. |
| Özel yazılım | Veri/mantık katmanları ana ürünün arkasında hizalanır; birleşmiş sistem web yüzeyine genişleyerek yeni döngüye bağlanır. | İşinize göre yazılım. |

EN: “A stronger digital experience.” / “Solutions that work anywhere.” / “Turn data into smart decisions.” / “Software for your business.”

DE: “Starke digitale Erlebnisse.” / “Überall nutzbare Lösungen.” / “Daten für kluge Entscheidungen.” / “Software für Ihr Unternehmen.”

Metinler yalnız bu prototipe aittir; production copy/SEO değişikliği değildir. TR/EN/DE başlıkları bilinçli iki satırda tutulur. Aynı grid hücresini paylaşan başlıklar yüksekliği baştan ayırır; yalnız aktif metin görünür. Çıkış opacity+7px yukarı, giriş opacity+7px aşağı hareketlidir; çıkış tamamlanmadan giriş başlamaz. Görünür başlığın değişimi ekran okuyucuya sürekli canlı anons üretmez: mevcut marka mesajı/dört hizmet özeti sabit H1 karşılığı olarak korunur.

Dört etiket altta aynı sıra/anlamda kalır. Etkileşimsiz `li` öğeleridir; yeni navigasyon/slider kontrolü eklenmedi. Aktif öğe renk+ince işaret ve `aria-current` ile belirtilir. İlk yüklemede EN/DE sarılmasından doğan kayma saptanıp dört sabit etiket alanıyla giderildi; her alan iki satırlık çeviriyi karşılar.

## Teknik seçim ve hareket politikası

Mevcut desktop Three.js renderer/orthographic kamera, DPR1.5 sınırı, gölgeler/PMREM/HTML overlay ve8.4s zamanlaması incelendi; değiştirilmedi. Mobilde mevcut production sahnesi zaten statik SVG'ye geçiyor. Ayrı bir WebGL renderer eklemek bu dört yeniden yerleşim için gerekli görülmedi.

**SVG + tek20s requestAnimationFrame saati korundu.** Yeni `mobileHeroMotion.ts` dört hedef geometrisi, ortak interpolasyon, başlık/aktif hizmet ve çevirileri tek yerde tanımlar. Her hizmet5s:3.4s okunur duruş+1.6s dönüşüm. Başlık, SVG ve etiket aynı frame sonucunu kullanır; ayrı timer/CSS döngüsü veya faz başına farklı sahne mount/unmount yok. Aynı frame, üç modül, grafik, veri ve mantık elemanları sürekli yeniden kullanılır. Perspective hissi sınırlı−2.2°…0° eğim ve katman oturma yüzeyleriyle verilir; filtre, glow, parçacık veya sürekli kart dönüşü yok.

Frame içinde React state güncellenmez; DOM düğümleri effect başında seçilir, frame'de layout okuması yapılmaz. React yalnız ready/motion/görünürlük/dil olaylarında devreye girer. Standart SVG transform/attribute güncellemeleri mobil WebGL yükünü önler; bunun gerçek cihaz FPS/batarya kazancı ölçülmedi.

- Mevcut MotionProvider/global `bayessoft-motion` tercihi korunur. Pause bütün başlık/geometri/vurguyu bulunduğu karede tutar; resume aynı elapsed saati sürdürür.
- Reduced-motion, 15s özel yazılım pozunu ve onun başlığını sabitler; sistem tercihi resume talebinden üstündür.
- IntersectionObserver + document.visibilitychange birlikte rAF'i durdurur. Sekme/görünürlük dönüşünde uzun delta biriktirilmez.
- SSR/no-JS halinde web pozu ve başlığı dolu SVG ile hazırdır; JS/asset/WebGL bekleyen boş hero yok. Orijinal `/hero/system-static.svg` ve production fallback kodu değişmedi.
- SVG aspect-ratio, iki satırlık başlık ve sabit etiket alanları yerleşim için önceden alan ayırır. Hero'da100vh/sabit ekran doldurma/kırpma yok. 390px TR hero yaklaşık500px;375px yaklaşık483px. 390×480 kısa ekranda kaydırma ve tüm etiketlere erişim kontrol edildi.

## Son doğrulama ve kanıtlar

Kanıt: `07-Reviews/evidence/BS3P-033/mobile-unified-r3/`.

- **12 dil/boyut ×4 hizmet =48 görünüm:**320/375/390/430px ve TR/EN/DE; gerçek dil menüsü kullanıldı. Her aşamada başlık/SVG/aktif etiket eşit, tek görünür başlık, taşma yok, mobil canvas0. Her kombinasyonda başlık ve hero yüksekliği dört aşamada sabit. Son tur12durumun tamamında ilk yükleme layout-shift kaydı boş. Bu tek makine/Chrome ölçümüdür; tüm cihazlar için sıfır CLS garantisi değildir. `checks.json`.
- **Geçişler ve loop:**16zaman örneği, iki başlığın aynı anda görünmemesi ve aynı aktif state kontrolü.0/5/10/15s son pozlar yanında3.8/9.2/14.2/19.2s geçiş ekranları ve19.984/20.016s loop sınırı ekranları. Üç değil, dört hizmetin tamamı görsel incelendi.
- **Hareket:** geçiş sırasında bütün hero innerHTML'i pause boyunca değişmedi; resume ilerledi. Reduced-motion sabit özel yazılım pozu, offscreen pause, saklanan pause/reload geçti. Document.hidden override+visibilitychange ile simüle arka plan durması ve geri dönüş doğrulandı; gerçek OS arka plan/batarya deneyi değildir. Son normal cold-load smoke CLS kaydı da boş. `smoke.json`.
- **Kayıt:**20s/200kare/10fps GIF+WebP, kontrollü Playwright saatiyle render edilen karelerden üretildi. Gerçek zamanlı cihaz video/FPS ölçümü değildir.0ile20s kareleri arasında ortalama mutlak RGB farkı0; boş kare veya görünür seam sıçraması saptanmadı. `recording.json`.
- **Desktop:**1440/1920px TR/reduced-motion koşulunda `/` ve prototip ilk900px görüntülerinde0değişen piksel. Hareketli900/1440/1920smoke özgün WebGL-ready1canvas/4prizma yüzünü doğruladı.899/900geçişi ve mobil dönüşte canvas0. Statik karşılaştırma hareketli her frame'in piksel eşitliği iddiası değildir.
- **Koruma:** `Shell()` R2ile birebir; CSS'in mobil media dışı bölümü R2ile birebir. Mevcut tracked app/components/lib/data/public/package kaynaklarında HEAD'e göre fark yok. Geçici3033önizleme kaynakları repoyla byte eşit. `source-protection.json`.
- **Kod:** `tsc --noEmit`, yalnız yeni prototip klasöründe hedefli ESLint ve git diff --check geçti. Production build/fullQA/CI/canlı site testleri çalıştırılmadı.
- **Safari/perf:** WebKit launch denendi, executable yok. Native Safari/iPhone/Android/gerçek düşük güçlü cihazda CPU/FPS/batarya ölçülmedi. SVG paint/attribute maliyeti ve Safari font/raster davranışı gerçek cihaz doğrulaması bekler. Otomatik kontrol tam ekran okuyucu/kontrast/a11y denetimi değildir; klavye/menü mevcut bileşenlerde korunur.

## Görseller ve değişen dosyalar

[[../07-Reviews/evidence/BS3P-033/mobile-unified-r3/four-services-390.png|390px dört hizmet]] · [[../07-Reviews/evidence/BS3P-033/mobile-unified-r3/r2-r3-comparison.png|R2/R3 karşılaştırma]] · [[../07-Reviews/evidence/BS3P-033/mobile-unified-r3/mobile-hero-r3.gif|20s GIF]] · [[../07-Reviews/evidence/BS3P-033/mobile-unified-r3/mobile-hero-r3.webp|20s WebP]]. Ayrı48ekran ve desktop karşılaştırmaları aynı klasörde.

Uygulama: `Prototype.tsx`, `prototype.module.css` güncellendi; `mobileHeroMotion.ts` eklendi. Hepsi `app/prototype/bs3p-mobile-hero/` altında. `page.tsx`, desktop/Three.js/header/menü/referans marquee/galeri/hizmetler/içsayfalar/URL/SEO ve bağımlılıklar aynı. Bu rapor ve TASK_REGISTER/DECISION_LOG/CURRENT_STATUS/NEXT_STEPS/SESSION_LOG/günlük log güncellendi; R3kanıtları eklendi.

Mevcut `.obsidian`, eski kasalar, kişisel dosyalar/MOV/ilgisiz harness'ler ve önceki dirty geçmiş korunur. `git diff --stat` mevcut tracked kayıtların toplamını gösterir; prototip/rapor/günlük/kanıtların bir kısmı untracked olduğundan bu istatistiğe girmez. Tamçıktılar `git-diff-stat.txt`, `git-status.txt`; R2kaynağa göre prototip statı ayrıca `r3-source-diff-stat.txt`.

Görsel kullanıcı değerlendirmesi beklenir. Production taşıma/staging/commit/push/merge/deploy yok. Yerel3033sunucu `/tmp/bs3p033-preview`/ayrı `.next-dev-final` üzerinden açık bırakıldı.

---

## R2 ve R1 raporları — tarihsel, korundu

# BS3P-033 — İkinci mobil prototip revizyonu (R2)

**2026-10-24 · Yerel R2 hazır; kullanıcı görsel onayı beklenir.**
Önizleme: http://localhost:3033/prototype/bs3p-mobile-hero

Kullanıcı tek parça mobil hero yaklaşımını doğru buldu; R1 sahnesini basit, sıkışık ve küçük buldu. R1 görsel olarak kabul edilmedi. R2 bu yönün revizyonudur; production taşıma veya yayın yetkisi değildir. Önceki rapor ve kanıtlar aşağıda/ilk kanıt klasöründe aynen korunur.

## Giderilen sorunlar ve uygulama

| R1 sorunu | R2 karşılığı |
|---|---|
| Benzer ağırlıkta üst üste üç panel, gizlenen küçük yazılar | Tam üç görsel grup: kompakt akıllı işlem yüzeyi, baskın ürün arayüzü, ikincil mobil çıktı. Ayrı veri paneli kaldırıldı; veri üç dönüştürülen işaret olarak aynı hikâyede kalır. |
| Kesişen dekoratif hatlar ve çok sayıda çerçeve | Dış bağlantı/dekoratif yollar, panel sınırları ve perspektif katmanları azaltıldı. Yalnız işlem ilerlemesi ve işlevi açıklayan arayüz çizgileri kaldı. |
| Ürün küçük ve küçük hareketlerle statik görünüyor | Ana ürün 350 birimlik sahnenin 332 birimini kaplar. Üç veri işareti başlangıçta (244/270/296,57) ve 18 birim genişlikte; orta karede (88,196/228/260) ve154/126/144 genişlikte ürün satırlarına dönüşür. Hareket yalnız panel kayması değildir. |
| Başlık ve görsel ayrı büyük alanlar gibi | Mevcut başlık/dil metni korunur; sahne başlığın hemen altından başlar. Üstünde boş dekoratif taşıyıcı yok. Sahne büyütülürken sabit SVG oranıyla alan ayrıldı. |
| Dört hizmet etiketi ayrı bir gezinme gibi algılanabilir | Web/Mobil/Yapay zekâ/Özel yazılım mevcut anlam ve sırayla, linksiz açıklayıcı liste olarak kaldı. Yeni alt navigasyon veya slogan yok. |

Mevcut mineral/lacivert/mavi palet ve Instrument Sans korunur. Yeni bağımlılık, raster/üçüncü taraf görsel veya Three.js sahnesi yok. Mobil SVG ve aynı tek9s requestAnimationFrame saati korunarak çizim/geometri ve poz hesabı revize edildi. DOM seçicileri effect başında cache'lenir; frame içinde layout okuma, filtre/parlama ve sürekli kart dönüşü yok.

0–yaklaşık4s: üç ihtiyaç/veri işareti akıllı işlem yüzeyinden ürünün içerik satırlarına dönüşür. Yaklaşık3.3–4.8s ürün tamamlanma işaretleri görünür;4–5.8s mobil çıktı teslim olur.5.8–7.35s sonuç okunur;7.35–9s aynı şekiller sakin biçimde ilk poza döner. Ana ürün başlangıçta da dolu/okunur bir çizimdir; boş sahne yok. 6.5s reduced-motion son karesidir. Pause/resume aynı saati tutar; mevcut global saklanan tercih ve system reduction üstünlüğü devam eder.

Hero'ya min-height/100vh verilmedi; mevcut `.shell` min-height bütün homepage kabına aittir ve aynen korundu. 390px TR hero yaklaşık523px;375px yaklaşık504px. R1'e göre sahne için yaklaşık36–37px daha fazla alan kullanılır; bu, büyütülen ürünün gerçek içeriğidir. Referans bölümünün kendi kodu/boşluğu değiştirilmedi. 390×480 kısa ekranda içerik doğal olarak kaydırılır, hero overflow visible ve dört etiket erişilebilir.

## R2 kanıt ve kontroller

Kanıt klasörü: `07-Reviews/evidence/BS3P-033/mobile-unified-r2/`. Eski `mobile-unified/` ve eski033hizmet kanıtları değiştirilmedi. Kodun R1 yedeği iki `.before` dosyasında tutulur.

- **Mobil:** Chrome TR/EN/DE ×320/375/390/430=12durum; gerçek dil menüsü seçimi, H1/dil, yatay taşma yok, mobil canvas0, dört hizmet etiketi korunur. 390×480 kısa ekran/scroll/etiket erişimi kontrol edildi. [[../07-Reviews/evidence/BS3P-033/mobile-unified-r2/checks.json|Checks]].
- **İlk/orta/son:** 390px 0s/4.480s/yaklaşık6.48s tamamlanmış kare ayrı alındı ve görsel incelendi. Döngü sonu8.880s ayrıca `frame-loop-end.png`. [[../07-Reviews/evidence/BS3P-033/mobile-unified-r2/first-middle-last.png|Üç kare]] / [[../07-Reviews/evidence/BS3P-033/mobile-unified-r2/mobile-hero-r2.gif|9s GIF]] / [[../07-Reviews/evidence/BS3P-033/mobile-unified-r2/mobile-hero-r2.webp|WebP]].
- **Döngü:** Kontrollü Playwright saatiyle90kare/10fps/9s kayıt; gerçek cihaz FPS veya gerçek zamanlı video değildir. Başlangıç ile yaklaşık8.976s karenin ortalama mutlak RGB farkı0.0093/255; büyük seam sıçraması/boş kare görülmedi. [[../07-Reviews/evidence/BS3P-033/mobile-unified-r2/recording.json|Kayıt yöntemi]].
- **Hareket:** Pause/resume, offscreen pause, live reduced-motion/sonkare ve saklanan pause/reload geçti. Son cold-load smoke'da layout-shift kaydı boş. Bu tek yerel ölçüm tüm cihazlar için garanti değildir.
- **Desktop:** 1440/1920px, TR/reduced-motion koşulunda `/` ve prototip ilk900px ekranı arasında0değişen piksel. Hareketli smoke900/1440/1920px özgün WebGL-ready sahne1canvas ve4prizma yüzünü doğruladı.899/900geçiş ve mobil dönüşte canvas0. [[../07-Reviews/evidence/BS3P-033/mobile-unified-r2/smoke.json|Smoke]].
- **Kaynak koruma:** R1 ile `Shell()` sonrası kod birebir eşit; CSS'in mobil media dışı bölümü birebir eşit. Mevcut tracked app/components/lib/data/public/package dosyalarında HEAD'e göre değişiklik yok. Yeni kod yalnız prototipin iki mobil dosyası. Geçici önizleme kaynakları repoyla byte eşit. [[../07-Reviews/evidence/BS3P-033/mobile-unified-r2/source-protection.json|Koruma]].
- **Kod kontrolleri:** TypeScript `tsc --noEmit`, yeni prototype klasöründe hedefli ESLint ve git diff --check geçti. Build/fullQA/CI/canlı yayın testi yapılmadı.
- **Safari/perf sınırı:** WebKit launch tekrar denendi; executable kurulu değil. Native Safari/iPhone/Android ve gerçek cihaz CPU/FPS/batarya ölçülmedi. WebGL/gölge/blur yerine standart SVG transform/attribute güncellemeleri kullanılması teknik yükü sınırlar; ölçülmüş cihaz performans kazancı iddiası yok.

## Değişen dosyalar / sonraki adım

Uygulama: `app/prototype/bs3p-mobile-hero/Prototype.tsx`, `prototype.module.css`. `page.tsx`, desktop hero/Three.js/header/referanslar/galeri/iç sayfalar değişmedi. Bu rapor, TASK_REGISTER, DECISION_LOG, CURRENT_STATUS, NEXT_STEPS, SESSION_LOG, DAILY_LOG_2026-10-24 ve yeniR2kanıtları güncellendi/eklendi. Kişisel/ilgisiz untracked dosyalar korunur.

Master/HEAD03779c2 aynı; staging/commit/push/deploy yok. Önizleme mevcut `/tmp/bs3p033-preview` kopyası/ayrı `.next-dev-final` üzerinden3033'te açık. Sıradaki adım yalnız kullanıcı görsel değerlendirmesi; R2 onaylanmış veya production'a taşınmış sayılmaz.

---

## R1 raporu — tarihsel, korundu

# BS3P-033 — Mobile Unified Hero / Tasarım ve Hareket Prototipi

Tarih: 2026-10-24 · Durum: **Yerel prototip; görsel onay bekliyor**.
Önizleme: http://localhost:3033/prototype/bs3p-mobile-hero
Branch: `master`; başlangıç/son HEAD `03779c24274f317ba16e9a42b47702d3a7f3dd2d`.

## Kimlik ve yetki sınırı

BS3P-033 daha önce 2026-10-23 Hizmetler/Nasıl Çalışıyoruz kart çalışmasına atanmış. Kullanıcının bu görevde verdiği kimlik korunarak ayrı bu rapor ve `evidence/BS3P-033/mobile-unified/` alt klasörü kullanıldı. Eski rapor/kanıtlar değiştirilmedi. AGENTS/Workflow eski feature branch bekliyor; bu görevdeki açık kullanıcı talimatı gereği master üzerinde kalındı. Önceki push yetkisi bu göreve taşınmadı.

**Production'a entegrasyon yok; commit, push, deploy, merge, branch/index işlemi yok.** Yeni prototip sadece `app/prototype/bs3p-mobile-hero/` altında. Mevcut build-production.mjs tüm app/prototype ağacını export çalışma alanından dışlıyor; bu tur build çalıştırılmadı. İzolasyon bu mevcut filtre ve production kaynaklarının değişmemesiyle doğrulandı. Mevcut `.obsidian`, eski kasalar, kişisel dosyalar, untracked test/yedekler korunur.

## Gerçek kaynak analizi

- `SpatialHero.tsx`: bağımsız HeroPrism ve HeroSystemScene; metinlerin screen-reader karşılıkları, ortak hareket kontrolü ve servis etiketleri.
- `HeroPrism.tsx` / `lib/homepage/prism.ts`: dört yüzlü X ekseni mekanizması; mobilde de bağımsız başlık hareketi. Geometri/zamanlama değiştirilmedi.
- `HeroSystemScene.tsx`: `(max-width:899px)` veya reduced-motion durumunda statik `/hero/system-static.svg`. Mobilde Three.js import edilmez. Desktop dinamik import; failure/static/loading, replay, pause ve page lifecycle korumaları mevcut.
- `lib/homepage/system/scene.ts`: orthographic kamera, fiziksel materyaller, çevre ışığı/PMREM, gölgeler, HTML overlay projeksiyonu, DPR üst sınırı 1.5. `motion.ts`: 8.4 saniyelik tek seferlik veri → kurallar → web → mobil → birleşim; mobil için döngü değil.
- `homepage.css`: 1199 px altında tek kolona geçiş; 899/699 px ek aralıklar, ayrı prizma kontrolleri ve statik geniş sahne dikey ayrılığı büyütüyor. Desktop 1440/1920 düzeni korunmalı.
- MotionProvider sistem tercihini üstün tutuyor; `bayessoft-motion` saklanan global tercih, loading sırasında paused. Yeni prototip aynı provider'ı kullanıyor. Üç dil mevcut LanguageProvider ve homepage copy üzerinden gelir.

## Teknik seçenek ve tasarım

| Seçenek | Görsel kalite / uyumluluk / maliyet | Sonuç |
|---|---|---|
| Mevcut Three.js sahnesini mobile uyarlamak | 3D materyaller güçlü; geniş sahne oranı ve HTML projeksiyonu telefonda yeniden düzenlenmeli; mevcut statik mobil politikasını ve desktop ortak kodunu değiştirme riski | Seçilmedi |
| SVG + tek requestAnimationFrame saati | Keskin çizgiler ve okunur metin, WebGL/context/texture yükü yok, SSR'de dolu ilk çizim; SVG attribute dönüşümleri, yeni bağımlılık yok | **Yerel prototip için seçildi** |
| Ayrı mobil Three.js sahnesi | Bağımsız kompozisyon mümkün; renderer/lifecycle/fallback bakımını çoğaltır, gerçek cihaz GPU/Safari doğrulaması gerektirir | Bu görsel hikâye için gerekli görülmedi |

Palet mevcut mineral `#f3f5f7`, lacivert `#172b43`, mavi `#285bd6`, çizgi `#acbbcd`, veri yüzeyi `#e6ecf2`, beyaz ürün yüzeyi. Mevcut Instrument Sans; yeni font/görsel/dependency yok. Başlık solda, altındaki ince bağlantı hattı aynı kompozisyondaki büyük katmanları birleştiriyor. Başlangıç konseptindeki iki büyük ayrı blok yerine örtüşen üç katman seçildi; kaynaklar → iş kuralları/AI → çalışan web/mobil ürün tek görsel nesne olarak okunuyor. Yeni slogan yok; hero0'ın anlamı/metni korunur, kalan üç mevcut mesaj erişilebilir metinde saklanır. SVG içindeki süreç adları yalnız prototip açıklamasıdır.

Tek 9 saniyelik saat tüm katman konumu, veri satırı ilerlemesi, sinyal ve çizgi vurgusunu yönetir. 0–2.2s veri; 2.2–4.4s kurallar/AI; 4.4–5.8s ürün birleşimi; 5.8–7.4s sakin sonuç; 7.4–9s yumuşak geri dönüş. Başlangıç ve döngü sonu aynı pozdur; ilk karede de ürün/katmanlar vardır. Bağımsız CSS animasyonu yok. Reduced-motion 6.5s son kareyi sabitler; manual pause bulunduğu kareyi tutar, resume kaldığı yerden devam eder. Offscreen/document-hidden durumda rAF durur. SVG pointer-events:none; kontrol ve menü normal native etkileşimlerini korur. SVG için açıklama, mevcut görünür H1, klavye focus ve global hareket tercihi vardır.

Desktop prototipte **mevcut SpatialHero doğrudan kullanılır**. Header, referanslar, proje galerisi ve diğer bölümler mevcut bileşenlerin yeniden kullanımıdır. Yeni mobil bileşen yalnız 899 px ve altında görünür. Prototype CSS'i dış layout'un legacy chrome'unu yalnız bu rota içinde gizler; homepage Header/Footer'ı değiştirmeden kullanır. Prototype CSS'i yüklü kalsa bile :has(local-shell) koşulu ana production rotasında eşleşmez.

## Hedefli doğrulama

Kanıt: [[../07-Reviews/evidence/BS3P-033/mobile-unified/checks.json|checks.json]], [[../07-Reviews/evidence/BS3P-033/mobile-unified/smoke.json|smoke.json]], [[../07-Reviews/evidence/BS3P-033/mobile-unified/protection.json|kaynak koruması]].

- Kurulu headless Google Chrome / Playwright: **TR/EN/DE × 320/375/390/430 = 12 durum**. Gerçek menü dil düğmeleriyle seçim; görünür H1/dil doğrulandı, yatay taşma yok, mobil canvas sayısı 0.
- 375 ve 390 px TR hero yüksekliği yaklaşık 468/486 px. İlk yükleme no-JS/SSR çizimi dolu; SVG aspect-ratio alan ayırır. İlk/orta/son kareler görsel incelendi. AI simgesinin katman altında kapanması düzeltilerek son kanıtlar yenilendi.
- 1440 ve 1920 px desktop: `/` ile prototip ilk 900 px görüntüsü, aynı TR/reduced-motion koşulunda **0 değişen piksel**. Bu statik karşılaştırma hareketli piksel eşitliği iddiası değildir.
- Hareketli desktop smoke: 900/1440/1920 px özgün sahne WebGL-ready, 1 canvas, 4 prism yüzü. 899/900 breakpoint ve mobile dönüş doğru; dönüşte canvas 0. Kaynak koruma kontrolünde 259 mevcut tracked dosyada fark yok.
- Pause/resume, saklanan pause/reload, live reduced-motion değişimi, reduction override ve offscreen pause geçti. Görünür ilk yükleme son smoke ölçümünde layout-shift kayıtları boş. İlk turda kontrol metninin daralmasından gelen çok küçük kayma saptandı; metin alanı sabitlenerek giderildi. Bu tek yerel ölçüm tüm cihazlarda sıfır CLS garantisi değildir.
- Tek döngü 10 fps kontrollü tarayıcı kareleriyle kaydedildi; WebP/GIF 90 kare/9s. Bu gerçek zamanlı cihaz video/FPS ölçümü değildir. 0 ile yaklaşık 8.976s kareleri arasındaki ortalama mutlak RGB farkı son görsel turda yaklaşık 0.023/255; görünür büyük seam sıçraması saptanmadı. Son görsel kayıt bu sürümden alındı; recording.json yöntemi/ölçümü saklar.
- `tsc --noEmit`, yalnız yeni prototipte ESLint ve `git diff --check` geçti. Test logları boş hata çıktısını saklar. Yeni production build/full QA yapılmadı.
- WebKit launch denendi: tarayıcı executable kurulu değil; test **çalışmadı**. Native Safari/iPhone/Android, uzun süreli CPU/GPU/batarya ve gerçek cihaz FPS ölçümü yapılmadı. CI veya canlı site testi yok. Tarayıcı pageerror kaydı 0.

## Görsel teslim

- [[../07-Reviews/evidence/BS3P-033/mobile-unified/tr-375.png|375 px mobil]] / [[../07-Reviews/evidence/BS3P-033/mobile-unified/tr-390.png|390 px mobil]]
- [[../07-Reviews/evidence/BS3P-033/mobile-unified/first-middle-last.png|İlk / orta / son kare]]
- [[../07-Reviews/evidence/BS3P-033/mobile-unified/mobile-hero-loop.webp|9s WebP hareket kaydı]] / [[../07-Reviews/evidence/BS3P-033/mobile-unified/mobile-hero-loop.gif|GIF]]
- [[../07-Reviews/evidence/BS3P-033/mobile-unified/reduced-final.png|Reduced-motion son kare]]
- [[../07-Reviews/evidence/BS3P-033/mobile-unified/desktop-baseline-1440.png|Desktop mevcut 1440]] / [[../07-Reviews/evidence/BS3P-033/mobile-unified/desktop-prototype-1440.png|Desktop prototip 1440]]; 1920 eşleri aynı kanıt klasöründe.

## Açık risk ve sonraki adım

Görsel kullanıcı onayı beklenir. Safari/WebKit gerçek doğrulaması gerekir; standart SVG/DOM transform yaklaşımı uyumluluk riskini azaltır ancak test yerine geçmez. rAF ana thread'de SVG paint yapar; sıfır GPU/CPU maliyeti veya cihaz performans kazancı ölçülmüş değildir. Gerçek cihazda akıcılık ve batarya değerlendirmesi açıktır. Uzun Almanca başlık/etiketler responsive olarak sarılır, içerik saklanmaz. Yeni süreç etiketleri prototipe aittir; production metin kararı verilmedi.

Production taşıma ancak ayrı açık onayla; bu prototip yayın adayı veya kabul edilmiş tasarım sayılmaz. Yerel sunucu 3033, `/tmp/bs3p033-preview` kaynak kopyası ve ayrı `.next-dev-final` önbelleğiyle açık bırakıldı. İlk kanıt yenilemelerinde paylaşılan `.next-dev` kaynaklı geçici 404 oluştu; Symlink kurulumundan kalan modül önbelleği de geçici context hatası üretti; kaynak kopyası + temiz ayrı önbellekle son tur başarıyla alındı. Bu başarısız turlar test başarısı sayılmadı. 3030 sürecini durdurma/yapılandırma komutu çalıştırılmadı. Git durumunun tamamı kanıt klasöründe `git-status.txt`; mevcut kişisel/untracked geçmişi korunur.
