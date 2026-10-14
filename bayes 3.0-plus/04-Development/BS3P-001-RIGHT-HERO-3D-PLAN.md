# BS3P-001 — Right Hero 3D Exploration

**Tarih:** 2026-10-14  
**Teslim:** Yaratıcı ve teknik plan; uygulama yapılmadı.  
**Öneri durumu:** `proposed` — kullanıcı onayı bekleniyor.  
**İlişkili kararlar:** D-001, D-004, D-005, D-006; yeni öneri D-009.  
**Sonraki görev:** BS3P-002; bu belge onun otomatik başlangıç izni değildir.

## 1. Öneri: İşinize göre kurulan sistem

Sağda, bir iş ihtiyacının **veri → iş kuralı → web ve mobil arayüz** ilişkisiyle çalışan yazılıma dönüşmesini gösteren ince bir sistem kesiti öneriyorum. Geniş beyaz bir web yüzeyinin arkasında, küçük bir ofsetle görünen kural ve veri katmanları bulunur. Yanındaki dar mobil yüzey aynı sistemin bir başka kullanım biçimidir. Tek kontrollü mavi yol, arkadaki kaydı ön arayüzdeki ve mobildeki sonuçla bağlar.

Katmanlar kısa bir hareketle hizalanır, bağlantı kurulur, aynı kayıt iki arayüzde karşılık bulur. Sonra sahne sabit kalır. Sol prizma “İşinize göre yazılım” derken sağ sahne bunun nasıl bir bütün olduğunu gösterir. Özel yazılım anlamı, müşterinin süreçlerine göre kurulan mantık katmanından gelir; yalnızca cihaz ikonlarına dayanmaz.

Bu, gerçek müşteri ürünü veya çalışan uygulama demosu değildir. Prototip inceleme alanında **“Kavramsal görsel — müşteri ürünü değildir”** açıklaması bulunur. Gelir grafiği, performans metriği, müşteri logosu, hayali ürün adı ve yeni SaaS/Ürünler sayfası yoktur. Sahne içindeki iş akışı örnektir, yeni hizmet vaadi değildir.

## 2. Mevcut kaynaklardan doğrulanan sınırlar

Bu bölüm kaynak incelemesidir; canlı tarayıcı/motion testi değildir.

| Kaynak | Yerinde bulgu | Plan üzerindeki etkisi |
|---|---|---|
| `app/prototype/spatial-hero/route.ts` | `force-static` Route Handler bağımsız HTML döndürür; `noindex, nofollow`, header, mobil details menü, dört yüz ve sağ video içerir | Yeni demo da production layout/global CSS'e müdahale etmeden ayrı HTML yüzeyi olabilir |
| `faces.ts` | Dört metin: İşinize göre yazılım; Web ve mobil çözümler; Yapay zekâ ile daha fazlası; Size özel yazılım sistemleri | Metinler ve fiziksel yüz yapısı aynen korunur |
| `motion.ts` | Kümülatif −90° X adımları; 5000 ms bekleme, 900 ms geçiş; hover/focus, visibility ve reduced-motion koşulları | Sağdaki otomatik giriş kısa ve tek seferlik olur; sola yeni kontrol bağımlılığı eklenmez |
| `hero.css` | 540px sol kolon, 24px boşluk; prizma yüksekliği `77.777778cqw`, merkezden yüz mesafesi H/2 | 540px kolon için H≈420px, merkezden yüz mesafesi≈210px; tam kare kesit yaklaşık 420px'dir |
| `hero.css` | Sağ alan 16:9; 1279px ve altında 46/54 kolon oranı; 899px ve altında tek kolon; 699px ve altında mobil menü | İlk karşılaştırmada aynı alan oranı ve breakpoint'ler kullanılır |
| `hero.css` | Paper `#fcfcfa`, stage `#e4e2dc`, metin `#20282f`; mavi focus `#245fd5` | Mevcut zemin sıcak gri. Soğuk palet isteği mevcut CSS'e uygulanmış bir karar değildir |
| `video.ts`, MP4/PNG | MP4 dosyası mevcut; route 1920×1080 belirtir. Reduced-motion veya oynatma hatasında PNG gösterilir | Video ve fallback korunur. Dosyanın codec'i, gerçek kareleri ve oynatma kalitesi bu oturumda ölçülmedi |
| `assets/hero/bayessoft-spatial-v1.png` | Statik referans görseli incelendi: açık mimari yapı, camı andıran mavi kenarlı paneller ve hizmet ikonları | Açık malzeme diliyle süreklilik kurulabilir; görsel değiştirilmez, texture olarak kopyalanmaz |
| `package.json`, `package-lock.json` | Three.js, R3F, Drei, GSAP tanımlı değil; TypeScript mevcut | Bu plan bağımlılık kurulumu içermez; sonraki onaylı görevde seçici kurulum gerekir |
| `next.config.mjs`, `tsconfig.json` | Static export; mevcut TS ayarında `noEmit: true` | Yeni tarayıcı modülünün üretimi ayrıca planlanmalı; `toString()` içine modül import'u gömülemez |
| Yerel font/lisans | Instrument Sans TTF ve OFL dosyası mevcut | Demo kontrol/açıklamalarında mevcut font ve lisans korunur |

**CSS'ten türetilmiş örnekler:** 1440px genişlikte, 64px yan padding ile sahne içi genişlik 1312px; sağ alan yaklaşık 748×421px'dir. 375px'de 20px yan padding ile sağ alan yaklaşık 335×188px, sol yüz yüksekliği yaklaşık 261px olur. Bunlar CSS hesabıdır; gerçek viewport ölçümü veya kırpılmama testi değildir. Mevcut `--prism-depth` adı merkezden yüz mesafesini ifade eder; 210px'i tüm prizmanın kesit derinliği diye okumamak gerekir.

**Belge/kod farkı:** Tasarım sistemi soğuk nötr yönü anlatırken mevcut CSS sıcak bir stage kullanır (R-004). Bunu sessizce değiştirmemek için ilk A/B mevcut zeminle yapılır; soğuk zemin yalnızca ayrı demo varyantı olarak değerlendirilir. TR/EN/DE korunur; bu route'un mevcut HTML dili TR'dir, üç dilde çalıştığı iddia edilmez.

## 3. Statik sahnenin görsel yapısı

### Kamera ve yerleşim

Sabit, hafif üstten ve yandan bakan **orthographic kamera** öneriyorum. Başlangıç yönü yaklaşık 20–25° yatay, 10–15° düşey açı; kameranın look-at hedefi web yüzeyinin merkezidir. Perspektif abartısı, kamera turu ve kullanıcı orbit kontrolü yoktur. Ortografik projeksiyon derinliğe göre nesne boyutunu değiştirmez; katmanları tutarlı ve mimari göstermeye uygundur. [Three.js OrthographicCamera](https://threejs.org/docs/pages/OrthographicCamera.html)

Görselin en büyük düzlemi geniş web yüzeyidir; arka katmanlar aynı yapıya ait görünür. Mobil yüzey sağ alt yanında, web yüzeyinin üçte biri genişlikte ve biraz öndedir. Mobilin bağlantısı açıkça görünür; ekranın önünü kapatmaz. Yapı soldan sağa okunur, boşluk sol prizmaya doğru açılır. Modelin sol kenarı kolon sınırını geçmez.

Önerilen oranlar, model biriminde:

| Parça | İlk oran | Son pozdaki rol |
|---|---|---|
| Web yüzeyi | 3.6 genişlik × 2.35 yükseklik × 0.04 kalınlık | Ana beyaz yüzey; küçük üst bar, üç düzenli kayıt satırı ve bir seçili sonuç |
| Kural katmanı | 3.25 × 2.1 × 0.035 | Web'in arkasında; üst/sol kenarda açığa çıkan üç aşamalı iş akışı |
| Veri katmanı | 2.9 × 1.9 × 0.035 | En arkada; üç kayıt izi ve kural katmanına giriş portu |
| Mobil yüzey | 0.85 × 1.65 × 0.04 | Aynı seçili kaydın tek sade sonuç görünümü; donanım telefonu maketi değil |
| Bağlantı | Tek ana yol, mobil için tek dal | Veri, kural ve çıktı arasındaki ilişkiyi görünür kılar |

Son pozda arka yüzeyler yaklaşık 0.12–0.18 birim derinlik aralığıyla, hafif üst/sol ofsetle görünür. Tamamen kapanıp anlamlarını kaybetmezler; birbirinden kopmuş uçan kartlara da dönüşmezler. Dış yüzeylerin köşe yarıçapı yaklaşık 0.035–0.06 birim, kenar pahı çok küçüktür. Şişkin kart, parlak cam ve büyük yuvarlatmalar yerine hassas işlenmiş ince yüzey hissi hedeflenir.

Sağdaki tüm yapı, 16:9 alanın yaklaşık %75–80 genişliği ve en fazla %78 yüksekliği içinde kalır; çevresinde boşluk vardır. 1440px örneğinde modelin görünen yüksekliği yaklaşık 320–328px başlangıç hedefidir; 420px sol metin yüzünden daha düşük kalır. Bunlar prototipte ayarlanacak önerilerdir, doğrulanmış ölçüler değildir.

### Katmanların anlamı

| Görsel işaret | Anlamı | Anlamı koruyan ayrıntı |
|---|---|---|
| Arkadaki düzenli kayıt izleri | İşin verisi | Süs amaçlı rastgele noktalar yerine birbirini tekrar eden satır yapısı |
| Ortadaki üç adım ve kısa yönlendirme dalı | İhtiyaca göre kurulan iş kuralları / özel yazılım | Bir girdinin belirli bir sonuç yolunu izlemesi |
| Geniş ön arayüz | Web | Browser oranı, üst bar ve tutarlı içerik düzeni |
| Dar eş arayüz | Mobil | Aynı kayıt biçimi ve aynı mavi seçim izi |
| İş kuralında küçük değerlendirme düğümü | Yapay zekâ destekli işlem için kavramsal yer | Robot/beyin/sparkle yok; tüm sistem “AI ürünü” diye sunulmaz |

Yapay zekâ işareti tek başına kolay okunmayabilir. Dört hizmetin açık adları mevcut footer ve prizma metinlerinde korunur; sahneye dört yeni etiket ve dört ayrı döngü yüklenmez. İlk prototipte anlaşılabilirliğin sınanacağı nokta budur.

İç yüzeyler 3–5 sade geometrik UI işaretiyle tanınır. Mikroskobik kod satırı veya fake dashboard kullanılmaz. “Veri”, “Kural”, “Arayüz” açıklamaları gerekiyorsa inceleme alanında HTML olarak verilir; sahnenin güzel görünmesi için bunların okunmasına ihtiyaç olmamalıdır.

### Palet, malzeme ve ışık

| Rol | Önerilen değer | Kullanım |
|---|---|---|
| Ana yüzey | `#FFFFFF` | Ön web/mobil yüzeyleri |
| Soğuk açık gri | `#F3F5F7` | Arka yüzeyler; soğuk demo varyantında ortak stage |
| Kenar / katman ayrımı | `#E9EEF3` | Kalınlık ve açığa çıkan kesitler |
| Kontrollü mavi | `#285BD6` | Bağlantı yolu ve aynı seçili kayıt; görünür model yüzeyinin yaklaşık %5–8'i hedef |
| Hafif mavi | `#DDE7FF` | Küçük seçili alan dolgusu |
| Nötr ayrıntı | `#536270` | Az sayıdaki UI izi; önemli HTML metni için kontrast ayrıca kontrol edilir |

Bunlar sahneye ait aday tokenlardır; production token değişimi değildir. İlk A/B'de mevcut `#e4e2dc` sahne zemini korunur, canvas transparan olur. Ardından yalnızca yeni demoda ortak zemin `#F3F5F7` ile incelenebilir. Video için aynı soğuk zemin karşılaştırması yapılacaksa ayrı karşılaştırma kopyası gerekir; özgün route değiştirilmez.

Yüzeyler mat beyaz ve hafif saten: başlangıç roughness 0.65–0.8, metalness 0.0–0.05. Ana ışık üst soldan, düşük güçlü dolgu karşı yönden gelir. Ön yüz beyaz kalmalı, arka kesitler soğuk gri ayrışmalıdır. `MeshStandardMaterial` metalness/roughness yaklaşımını destekler; bu malzeme seçimi bir başlangıç önerisidir. [Three.js MeshStandardMaterial](https://threejs.org/docs/pages/MeshStandardMaterial.html)

İlk sürümde tek hafif, prosedürel temas gölgesi; yoğun AO, gerçek zamanlı yansıma, HDR dosyası, bloom, depth-of-field ve transmission yoktur. Böylece kaliteyi yüzey oranı, ışık ve hassas hizalama taşır. Gerçek gölge haritası ancak ilk statik poz onsuz yeterince derinlik vermiyorsa ayrıca değerlendirilir.

## 4. Motion: hizalanma → bağlantı → sakin sonuç

**Tek seferlik yaklaşık 3.3 saniyelik giriş, ardından tamamen sabit son poz** öneriyorum. Başlangıç pozu bile düzenlidir: tüm yüzeyler görünür, katmanlar yalnızca biraz daha ayrık; merkezde boşluk veya parçacık patlaması yoktur. Sabit kamera, aynı nesneler ve aynı yollar bütün aşamalarda korunur.

| Poz / zaman | Görünen hareket | Neden / son görünüm |
|---|---|---|
| 1 — 0–0.25s | Düzenli açık kesit kısa süre tutulur | Veri, kural ve arayüzün ayrı sorumlulukları okunur |
| 2 — 0.25–1.55s | Veri ve kural yüzeyleri sıra ile son derinliklerine yaklaşır; mobil yüzey küçük mesafeyle yerine oturur | Aynı ihtiyaca göre kurulan yapı. En fazla iki grup aynı anda hareket eder; yer değiştirme yüzey yüksekliğinin yaklaşık %8–12'si |
| 3 — 1.55–2.25s | Portlar arasındaki mavi bağlantı yolu kontrollü olarak görünür | Parçalar yalnızca yan yana değil, birbirine bağlıdır; model çarpışması veya sert snap yok |
| 4 — 2.25–2.85s | Tek kısa veri işareti yol üzerinden ön arayüze, sonra mobil dala ilerler; aynı sonuç izi görünür | Ortak mantık ve verinin iki arayüzde karşılığı. Renge ek olarak aynı kayıt biçimi de tekrar eder |
| 5 — 2.85–3.3s ve sonrası | İşaret sonuç yüzeyine yerleşir, hareket yavaşlayarak biter; bağlantı sabit kalır | Son poz işleyen bir bütün olarak okunur. Otomatik replay, nefes alma, spin, hover parallax veya idle pulse yok |

Hareketler mesafeye göre ease-out eğrisiyle yavaşlar; bounce/overshoot yoktur. Katmanların zamanlamasında yaklaşık 100–140ms fark yeterlidir. Süreler tasarım önerisidir, motion testi sonucu değildir. Mobil sonuç işareti girişi tamamlandığında kamera ve ışık da değişmez.

**Sol hareketle denge:** Sol prizmanın ilk otomatik dönüşü hazır olduktan yaklaşık 5s sonra başlar. Yeni demo, solun mevcut `data-ready` durumunu yalnızca okuyabilir; sol kodu değiştirilmez. Sağ sahne sol hazır olduktan ilk 1s içinde hazır olursa 3.3s giriş oynar; daha geç hazır olursa doğrudan son pozu gösterir. Böylece geç yüklenme nedeniyle iki büyük otomatik hareketin çakışması önlenir. Manuel sol dönüş sağ girişi sırasında yapılırsa demo sağ sahneyi son pozuna alır; sola komut göndermez. Sağ hareket sol metin yüzlerinin sırasına bağlanmaz.

Sekme gizlenir veya sağ sahne viewport dışına çıkarsa render durur. Giriş yarıda kesilmişse geri dönüşte son poz gösterilir; baştan tekrarlama yoktur. Reduced-motion tercih değişiminde anında son poz uygulanır. Sağ girişi atlamak için demoda klavyeyle erişilebilir “Hareketi atla” kontrolü olabilir; başlık/header eylemleri hiçbir aşamada bekletilmez. İnceleme için “Tekrar göster” kontrolü hero'nun dışında bulunur; yalnızca açık kullanıcı eylemiyle yeniden oynatır.

## 5. Teknik yaklaşım ve sorumluluklar

### Küçük native Three.js sahnesi

İlk aday için **native Three.js + TypeScript** öneriyorum. Sol taraf CSS 3D olarak kalır. Bir kamera, üç katman grubu, bir mobil grup ve tek bağlantı grubu yeterlidir. R3F/Drei/GSAP, fizik motoru, GLTF modeli, custom shader ve raycasting bu aşamada gerekli değildir. Çerçeve seçimi sahnenin gerçek ihtiyacına göre yapılır; 4.0'dan merge veya deney kopyalama yapılmaz.

- **Geometri:** Köşeleri hafif yumuşatılmış `Shape` + düşük segmentli `ExtrudeGeometry`; katman tekrarlarında ortak geometri/malzeme kullanımı. İnce pah yüzeyin kaliteli görünmesini sağlar. [Three.js ExtrudeGeometry](https://threejs.org/docs/pages/ExtrudeGeometry.html)
- **UI işaretleri:** Metinsiz satırlar, portlar ve sonuç blokları mesh/plane geometrisi. Bağlantının kalınlığı küçük ekranda kaybolmayacak şekilde geometriyle tanımlanır; platforma göre değişen kalın WebGL çizgilerine güvenilmez.
- **Koreografi:** Sabit başlangıç/son transform'lar ve elapsed-time tabanlı interpolasyon. Nesneler her frame yeniden yaratılmaz; frame süresi animasyon hızını değiştirmez. Yolun görünmesi geometri aralığıyla; tek veri işareti önceden tanımlanmış yol üzerinde ilerler.
- **Render:** Transparan canvas, sRGB çıktı; başlangıçta nötr ton eşleme, beyazların CSS ile birlikte görsel incelemesi. Animasyon sırasında `setAnimationLoop`, son pozda loop kapatılır; resize veya açık replay gerektiğinde yeni render yapılır. Güncel renderer WebGL2 gerektirir; başarısız oluşturma fallback'e gider. [Three.js WebGLRenderer](https://threejs.org/docs/pages/WebGLRenderer.html)
- **Boyutlandırma:** `ResizeObserver` ile gerçek sağ konteyner ölçüsü; kamera frustum'u ve canvas buffer birlikte güncellenir. Hedef: desktop DPR en fazla 1.5, opsiyonel mobil WebGL DPR en fazla 1.0. Model sınırlarına güvenli boşluk eklenerek kadraja sığdırılır.
- **Yaşam döngüsü:** Observer/listener/loop temizliği; kullanılmayan geometri, malzeme, texture ve renderer kaynakları dispose edilir. Geometri/texture için açık kaynak serbest bırakma API'leri vardır. [Three.js BufferGeometry](https://threejs.org/docs/pages/BufferGeometry.html), [Three.js Texture](https://threejs.org/docs/pages/Texture.html)

### HTML/CSS ve WebGL ayrımı

| HTML/CSS | Three.js |
|---|---|
| Header, gerçek linkler, mobil menü, sol prizma ve mevcut kontroller | Sağdaki yüzeylerin gerçek derinliği, ışığı ve örtüşmesi |
| Hizmet adları, inceleme kontrol/açıklamaları, erişilebilir görsel özeti | Bağlantı yolu, tek işaretin ilerlemesi ve hizalanma |
| Rezerv edilmiş 16:9 alan ve responsive grid | Konteynere göre frustum ve render kalitesi |
| Başlangıçta görünen özgün statik fallback | İlk başarılı frame sonrası fallback'in yerini alma |

Canvas focus alamaz ve içindeki metinsiz şekiller ayrı kontrol gibi sunulmaz. Figure, örneğin “Veri ve iş kurallarını ortak web ve mobil arayüzlere bağlayan yazılım sistemi” biçiminde tek erişilebilir açıklama taşır; canvas ve fallback onun altında dekoratif kalır. Açıklama mevcut hizmet metinleriyle uyumlu olur. TR/EN/DE etiketi uygulamaya geçilirse mevcut dil altyapısıyla ele alınır; 3D içine raster metin basılmaz.

### Mevcut HTML route'una modül bağlama planı

Mevcut `motion.ts` ve `video.ts`, bağımsız fonksiyonlarını HTML'e `toString()` ile seri hale getiriyor. Three.js import'ları bu yöntemle tarayıcıya taşınamaz. Yeni sağ sahne **ayrı `type="module"` girişinden** yüklenmelidir.

Önerilen küçük hazırlık akışı: onay sonrası npm'den sürümü sabitlenmiş `three`, gerektiğinde uyumlu `@types/three`; mevcut TypeScript compiler'ı ile yalnızca yeni demo kaynaklarını emit eden ayrı config; yerel paket içindeki browser ESM build dosyalarının transitif import'larıyla ve lisansıyla demo asset dizinine hazırlanması. Import map `three` adını bu yerel modüle bağlar. CDN, uzaktan çalıştırılan script ve elle yazılmış Three.js kopyası kullanılmaz. Bu hazırlık normal production build/dev script'ine otomatik eklenmez.

İlk uygulama adımı, onaylı ayrı route'ta bu modül yolunu tek statik yüzeyle doğrulamaktır. Paket sürümüne ait gerçek build/import yolları kurulumdan sonra incelenir; bugün varmış gibi dosya adı veya başarılı bundling sonucu yazılmaz. Akış ek bundler ya da production layout değişikliği gerektirecek kadar büyürse kapsam yeniden kullanıcıya sunulur. İlk plan R3F/GSAP kurulumu için gerekçe oluşturmaz.

### Fallback ve performans sınırı

Başlangıçtan itibaren aynı son pozun özgün, repo-native SVG/poster alternatifi görünür. Yeni sahnenin fallback'i mevcut PNG'nin düzenlenmiş türevi olmaz. WebGL2 yoksa, modül yüklenmezse, context kaybı olursa veya reduced-motion seçiliyse bu görsel kalır. Aynı figure ölçüsü korunur; boş canvas ve layout sıçraması oluşmamalıdır. Context-loss sonrasında otomatik yeniden başlatma döngüsü yerine statik görsel yeterlidir.

İlk hedefler: bir canvas, tek render pass, yaklaşık 15–25 görünür mesh, 30'dan az draw call, 20k'dan az triangle; büyük texture ve post-processing yok. Bunlar **ölçülmemiş bütçe hedefleri**, başarı iddiaları değildir. `renderer.info` ile sonraki kısa kontrolde kaydedilebilir. GPU gücü bilinmeyen cihazlara 60fps garantisi verilmez; ilk çözüm kalite azaltmak veya statik alternatiftir.

## 6. Mobil ve azaltılmış hareket

Mevcut 899px tek kolon ve 699px mobil menü eşikleri korunur. Sol prizma üstte, sağ sahne altta kalır. Mobilde sağ görseli desktop'ın bütün ayrıntılarıyla küçültmek yerine web, mobil ve tek bağlantı okunur; arkadaki kayıt sayısı azaltılır.

**İlk demo varsayılanı:** 899px ve altında, aynı 16:9 alan içinde mobil için yeniden kadrajlanmış statik SVG/poster. Önde web yüzeyi, yanında mobil yüzey, arkada tek açığa çıkan kural/veri kesiti; çok küçük UI satırları kaldırılır. Three.js modülü bu durumda yüklenmez. Bu, mobil GPU maliyetini ve uzun giriş hareketini ilk denemeden çıkarır; masaüstü ana konsept ile aynı anlamı korur.

375px örneğinde 335×188px alan içinde anlam kayboluyorsa alanı büyütmek otomatik çözüm sayılmaz; önce ayrıntı azaltılır. Mobil için 4:3 oran ayrı görsel onay gerektirir, ilk karşılaştırmaya karıştırılmaz. Dokunma parallax'ı, sürükleme ve scroll hijack yoktur. Reduced-motion desktop'ta da doğrudan statik son poz kullanır. JS olmadan açıklama, fallback, header linkleri ve mevcut native mobil menü erişilebilir kalmalıdır.

İleride hareketli mobil varyant özellikle istenirse en fazla 1.5–1.8s kısa hizalanma ve DPR 1.0 değerlendirilebilir; bu ilk prototipin zorunlu kapsamı değildir.

## 7. Ayrı prototip ve MP4 karşılaştırması

**Önerilen yeni rota:** `/prototype/spatial-hero-right3d`. İsim ve kapsam BS3P-002 onayıyla kesinleşir. Özgün `/prototype/spatial-hero`, MP4, PNG, CSS ve prizma kaynakları değiştirilmez.

Olası yeni dosya sınırları (henüz oluşturulmadı):

- `app/prototype/spatial-hero-right3d/route.ts`: bağımsız HTML demo shell ve erişilebilir inceleme kontrolleri.
- `prototypes/spatial-hero-right3d/`: `scene.ts`, geometri, motion/config, ayrı emit ayarı ve asset hazırlama aracı; yalnızca ihtiyaç kadar bölünür.
- `public/prototype-assets/spatial-hero-right3d/`: yalnızca yeni demo CSS'i, üretilmiş browser modülü, yerel vendor modülleri/lisans ve özgün statik fallback.
- `package.json` / lockfile: yalnızca onaylı Three.js ve gerekli tip bağımlılığı için sonraki görevde değişebilir. Production sayfa/layout/global CSS değişimi kapsam dışıdır.

Yeni shell mevcut `faces.ts` ve `initializeSpatialHero` fonksiyonunu salt okunur yeniden kullanır; sağ renderer onlara ek kütüphane yüklemez. Yeni demo CSS'i mevcut dosyayı değiştirmek yerine onun üzerine yalnızca yeni route'ta yüklenen, sınırlandırılmış kurallar içerir.

**Karşılaştırma sırası:**

1. Yeni demo üzerinde **Video / 3D** seçimi; video aynı MP4/PNG ve `initializeSpatialVideo` davranışını kullanır. Aynı header, metin, prizma, sağ 16:9 ölçüsü, zemin ve sol yüz durumu korunur. Seçim yalnızca sağ figure'ı değiştirir; sol prizma yeniden başlatılmaz. Görünmeyen video pause edilir, görünmeyen 3D loop durur; ikisi aynı anda çalışmaz.
2. Önce statik son pozlar; ardından yaklaşık 10–12s gözlemde sağ girişin bitişi ve solun sonraki dönüşü. Kullanıcının karşılaştırma/replay eylemi hareket çakışmasına yol açabilir; bu otomatik açılış zamanlamasından ayrı değerlendirilir.
3. İki tam hero ekran görüntüsü aynı desktop ölçüsünde yan yana incelenir. İki sıkıştırılmış hero'yu aynı viewport'a koyup ölçüleri değiştirmek yerine eş ölçülü ayrı görüntüler kullanılır. Orijinal route her zaman kontrol referansıdır.
4. Soğuk zemin ayrı varyanttır: yalnızca 3D tarafında soğuk zemin seçiliyken sonucu salt “video/3D farkı” diye yorumlamamak gerekir. Palet kararı ayrıca verilir.

Prototipteki Video/3D, Son poz/Tekrar göster ve mevcut sürüme dönüş linki inceleme alanında yer alır; gerçek siteye yeni ürün navigasyonu eklemez.

**BS3P-002 için küçük kontrol:** bir desktop görünümü (ör. 1440×900), bir mobil görünüm (ör. 375×812), kısa motion gözlemi; reduced-motion ve WebGL başlatma/fallback için hedefli kontrol; değişen demo modülünün type/syntax kontrolü. Kapsamlı build, cihaz matrisi, Safari/iOS, tam erişilebilirlik ve yayın izolasyonu BS3P-006 kapsamında ayrı onaylı QA'dır. Bu plan oturumunda test yoktur.

**Karşılaştırma karar soruları:**

- Son poz tek başına düzenli ve kaliteli mi?
- Açıklama okunmadan arayüz ve bağlı sistem hissi geliyor mu; özel yazılım anlamı yeterli mi?
- Sol metin ilk odak olarak kalıyor mu; 3.3s sonrasında sağ taraf gerçekten sakin mi?
- Transparan canvas ortak zemine bütünleşiyor mu; yeni bir medya kartı kenarı oluşuyor mu?
- Mobil statik alternatif aynı fikri taşıyor mu?
- Yeni runtime yükü, görsel ve marka katkısıyla gerekçelendirilebiliyor mu?

Bu soruların olumlu yanıtı henüz verilmedi. BS3P-003'te kullanıcı görseli seçer; BS3P-004 entegrasyonu için ayrıca açık onay gerekir.

## 8. Riskler ve sadeleştirme yolu

| Risk | İlk önlem / karar sınırı |
|---|---|
| Katmanlar jenerik dashboard kartları gibi okunabilir | Aynı kaydı arka girişten iş kuralına ve iki arayüze taşı; bağlantıyı son pozda görünür tut. Anlam başarısızsa daha fazla ikon eklemek yerine metaforu yeniden incele |
| Yapay zekâ işareti zayıf veya yanıltıcı kalabilir | Mevcut dört hizmet metnini koru; işlem düğümünü yalnızca kavramsal destek olarak anlat; gerçek AI ürün iddiası kurma |
| Arka katmanlar kapanıp işlev anlamı kaybolabilir | Üst/sol ofset ve açık port alanı; statik pozu animasyondan önce onaya sun |
| Sağ sahne sol prizmayla yarışabilir | Küçük görünen yükseklik, az mavi, tek kısa giriş; idle motion ve büyük kamera hareketi yok |
| Sıcak mevcut stage ve soğuk aday palette çelişebilir | Eş zeminle ilk A/B; soğuk zemin ayrı karar. R-004 mevcut hero'ya izinsiz müdahaleyle çözülmez |
| İnce kenarlar/bağlantı mobilde kaybolabilir | Yeniden kadrajlanmış sade statik mobil görsel; kırpma ve okunabilirlik hedefli kontrolde değerlendirilir |
| WebGL2/GPU yükü veya context kaybı | Mobil/reduced-motion statik varsayılan, DPR sınırı, küçük geometri, loop durdurma ve kalıcı fallback |
| HTML route + npm ESM hazırlığı ek bakım oluşturabilir | Tek yerel hazırlık akışı, sabit sürüm, mevcut TS compiler; gerekirse kapsamı büyütmeden kullanıcıya geri sun |
| Demo dosyaları static export ile yayına karışabilir | `noindex` erişim izolasyonu değildir. D-006/R-006 açık; route, vendor ve asset'lerin production artefact'ından dışlanması release öncesi BS3P-006 kapısıdır. Bu plan izolasyonu uygulanmış saymaz |
| Statik güzel, hareket anlamsız olabilir | Önce statik final, sonra yalnızca neden-sonuç anlatan hizalanma/bağlantı. Hareket katkı vermiyorsa son pozla devam etme seçeneği kullanıcıya sunulur |

## 9. Onaylanacak kapsam ve bu oturumun sonucu

Onaya sunulan öneri: **İşinize göre kurulan sistem** metaforu; sabit orthographic kamera, mat beyaz/soğuk gri ve kontrollü mavi, 3.3s tek giriş ve sabit final, mobil/reduced-motion statik alternatif, ayrı route ve native Three.js yaklaşımı. Onay, önce BS3P-002'de küçük statik sahne ve ardından motion denemesi içindir; mevcut videonun değiştirilmesi veya production entegrasyonu anlamına gelmez.

Bu oturumda talimatlar, güncel tasarım/motion/kararlar ve gerçek route kaynakları incelendi; mevcut PNG görüntülendi; yerel dependency/ayarlar ve ilgili resmi Three.js API sayfaları kontrol edildi. Plan dosyası ve çalışma kayıtları yazıldı. Yeni sahne kodu, render, tarayıcı testi, MP4 oynatma/codec ölçümü, bağımlılık kurulumu, Figma değişikliği, commit/push/merge/deploy yapılmadı. BS3P-001 plan teslimi tamamlandı; BS3P-002 kullanıcı onayını bekler.
