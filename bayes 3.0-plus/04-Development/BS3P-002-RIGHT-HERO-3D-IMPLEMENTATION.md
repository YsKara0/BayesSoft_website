# BS3P-002 — Right Hero Three.js bağımsız prototip

**Tarih:** 2026-10-14  
**Görev:** Kullanıcının “BS3P-001 — RIGHT HERO THREE.JS PROTOTYPE” talebinin uygulama kaydı; görev panosunda ayrı demo BS3P-002 olarak izlenir.  
**Durum:** Uygulama teslim edildi; görsel seçim/onay bekleniyor.  
**Plan:** [[BS3P-001-RIGHT-HERO-3D-PLAN]] değiştirilmedi.  
**Onay:** Kullanıcı bağımsız deney, gerekli uyumlu bağımlılıklar ve kısa kontroller için açık izin verdi; mevcut hero/production entegrasyonu için izin vermedi. D-010 bu kapsamı kaydeder.

## Teslim ve yerel açılış

- URL: [http://127.0.0.1:3000/prototype/bs3p-right-3d](http://127.0.0.1:3000/prototype/bs3p-right-3d).
- Desktop: [[../07-Reviews/evidence/BS3P-002-desktop.png]].
- Mobil: [[../07-Reviews/evidence/BS3P-002-mobile.png]].
- Kısa motion: [[../07-Reviews/evidence/BS3P-002-motion.webm]] — son teslim sürümü 6.00s, VP9, 1440×900, 25fps kayıt formatı. Bu kayıt fps'i, sahnenin performans garantisi değildir.
- Hedefli kontrol verisi: `bayes 3.0-plus/07-Reviews/evidence/BS3P-002-quick-check.json`.

Yerel dev server bu teslim sırasında 127.0.0.1:3000 üzerinde bırakıldı. Yeni bir oturumda önce `npm run prototype:bs3p:prepare`, sonra `npm run dev -- --hostname 127.0.0.1`; hedefli tip kontrolü `npm run prototype:bs3p:typecheck`. Prepare, yalnızca yeni demo modüllerini emit eder ve sabitlenmiş Three.js browser modüllerini/lisansını yerel asset dizinine hazırlar. Normal build/dev script'leri değiştirilmedi; prepare otomatik production adımı değildir. Kurulumun yeniden üretimi için mevcut package/lockfile kullanılmalıdır.

## Uygulanan görsel ve motion

Özgün, ince pahı olan dört yüzey: veri ve iş kuralları arkada; geniş web ve dar mobil arayüz önde. Üç kavramsal katman, dördüncü bağımsız hizmet kartı eklemeden okunur. Veri yüzeyinde düzenli kayıtlar ve seçilmiş bir kayıt; kural yüzeyinde Girdi → Koşul → Sonuç; iki arayüzde ortak kayıt biçimi bulunur. Mavi yol bu sorumlulukları veri, kural, web sonucu ve mobil sonuç portları üzerinden bağlar. Rastgele heykel/küp, devre kartı, müşteri ekranı veya metrik yoktur.

İlk poz ayrık fakat aynı düzenin parçalarıdır. 0–1.65s hassas hizalanma; 1.65–2.30s bağlantının açılması; 2.30–3.10s tek işaretin ilerlemesi; 3.35s son poz. Sabit orthographic kamera; autoplay tek seferdir. “Tekrar göster” giriş akışını yeniden başlatır, “Hareketi atla”/“Son görünüm” finali uygular. Otomatik spin, idle pulse, parallax veya orbit kontrolü yoktur. Son pozda render loop kapanır.

Three.js gerçek yüzey geometrisi, ışık, saten PBR malzeme, küçük clearcoat ve derinliği taşır. HTML/CSS detaylar orthographic kameradan hesaplanan affine matrislerle yüzeylere hizalanır. Arka HTML ön mesh üzerinden görünmesin diye CSS clip-path uygulanır. Three.js 4.0 Modular Assembly kaynakları salt okunur kalite referansı olarak incelendi; model/deney kopyalanmadı veya merge edilmedi.

Malzeme kalitesi için prosedürel RoomEnvironment/PMREM stüdyo ortamı ve tek 1024px PCF shadow map kullanıldı; dış HDR, texture/görsel, transmission, bloom, post-processing ve fizik motoru yoktur. Ayrıca hafif prosedürel zemin gölgesi vardır. PMREM, verilen bir sahneden PBR ortamı üretebilir; RoomEnvironment bu kullanım için Three.js addon'udur. [Three.js PMREMGenerator](https://threejs.org/docs/pages/PMREMGenerator.html), [Three.js RoomEnvironment](https://threejs.org/docs/pages/RoomEnvironment.html)

Transparan canvas ortak `#F3F5F7` demo zemininin üzerine çizilir. Beyaz/soğuk açık gri ve az mavi kullanılır. 899px ve altında veya reduced-motion seçiliyken küçük policy modülü WebGL sahnesini import etmez; özgün sade SVG gösterir. Statik alternatif aynı ilişkiyi gösteren ayrı çizimdir, WebGL'in birebir raster screenshot'u değildir. WebGL yükleme/oluşturma/context-loss hatasında da SVG kalır. Resize ve offscreen/visibility davranışı ile event/observer/GPU kaynak temizliği yazıldı.

## Planla farklar ve kapsam

- Kullanıcı rota ismini `/prototype/bs3p-right-3d` olarak kesinleştirdi; plandaki örnek rota kullanılmadı.
- Bu teslim kendi statik tanıtım metni ve sağ sahnesi olan bağımsız bir inceleme yüzeyidir. Mevcut sol prizma bu sayfaya taşınmadı; onunla gerçek hareket dengesi henüz test edilmedi. Mevcut hero'ya salt link vardır.
- Planın MP4/3D toggle ve aynı hero içindeki A/B önerisi bu görevde uygulanmadı. Kullanıcının son talebi bağımsız sahne kalite deneyidir; eş bağlamlı karşılaştırma BS3P-003'te kullanıcı kararıyla yapılır.
- İlk desktop kontrolde veri başlığı/kural akışı ön yüzeylerle örtüştü. Açık kesit büyütüldü, katman kalınlığı 0.10 model birimine alındı, web sonucu portu eklendi ve gerçek self-shadow ile katman ayrımı güçlendirildi. Bu nedenle yalnızca desktop düzeltmesine bir hedefli tekrar bakıldı; teslim görüntüsü/6s klibi güncellendi. Mobil kontrol tekrarlanmadı.
- Planın yalnızca prosedürel gölgeyle başlama önerisi, bu somut görsel kusuru gidermek için tek küçük gerçek gölge haritasıyla genişletildi. Yeni shadow/R3F/Drei bağımlılığı gerekmedi.
- SVG fallback küçük ekranda bilinçli olarak daha sade ve farklı kadrajlıdır. Desktop düzeltmesi SVG'nin çizimini değiştirmedi.

## Bağımlılık ve modül yaklaşımı

`package.json` ilk okumada Three.js/R3F/Drei/GSAP tanımlamıyordu; yerel `node_modules` içinde three ve @types/three 0.180.0 vardı. Npm sürüm sorgusu 0.186.1 döndürdü; en yeni sürüme taşıma gerekmeyip mevcut uyumlu **three 0.180.0 + @types/three 0.180.0** sabitlendi. İki npm install komutu `--ignore-scripts --no-audit --no-fund` ile çalıştırıldı; diğer doğrudan bağımlılık sürümleri değiştirilmedi. Npm ilk kurulumda 58 kayıtsız/extraneous paketi temizledi; tip kurulumu 8 paket ekledi. Bu, eski branch/kod/kasa değişimi değildir.

@types/three paketinin kendi transitif dev bağımlılıkları lockfile'a eklendi; örneğin rapier/tween/meshoptimizer tip paket zincirinde yer alır. Prototip bunları import etmez ve browser asset'lerine kopyalamaz; fizik/tween runtime kurulmuş gibi sunulmaz. R3F/Drei/GSAP eklenmedi. Ek bundler yok; mevcut TypeScript compiler'ı + yerel ESM/import map kullanılır. Three.js MIT lisansı vendor dizininde, mevcut font/OFL özgün yerinde korunur.

## Gerçekten yapılan kısa kontroller

| Kontrol | Sonuç / sınır |
|---|---|
| Hedefli TypeScript | `npm run prototype:bs3p:typecheck` geçti; yeni route ve yalnızca yeni TS modülleri kapsanır. İlk emit'teki DOM `status` isim çakışması modül kapsamıyla giderildi. Tam repo typecheck yapılmadı |
| Desktop render | Chrome headless 1440×900, HTTP 200, WebGL hazır. İlk görselde örtüşme kusuru bulundu/düzeltildi; yalnızca o düzeltme tekrar incelendi. Son screenshot teslim dosyasıdır |
| Kısa motion | İlk akışta align/connect/flow/final örnekleri kaydedildi. Son düzeltmede `time=3.350`, `running=false`, frame sayısı 198 → 198 (650ms arayla); sürekli idle render görülmedi |
| Render ölçüsü | Son sahne ana render pass'inde 10 draw call, 2.218 triangle. Startup PMREM/shadow maliyetlerinin tamamı veya gerçek cihaz fps/battery ölçümü değildir |
| Basit mobil | Chrome emülasyonu 375×812; SVG hazır, canvas sayısı 0, WebGL/vendor/scene isteği yok; scrollWidth=375 ve innerWidth=375. Gerçek telefon testi değildir |
| Konsol/ağ | İlk kısa kontrolde pageerror ve HTTP 4xx/5xx kaydı yok; desktop düzeltme kontrolünde pageerror yok. Tarayıcı matrisi/audit değildir |
| Koruma | Öncesi/sonrası 419 mevcut dosyanın SHA-256'sı aynı: mevcut hero/prizma/video, production kaynak/asset'leri, eski kasalar, AGENTS/CLAUDE, Next/root TS config ve onaylı plan korunuyor |

Tarayıcı kayıt aracı ilk başlatmada mevcut FFmpeg dizinini bulamadı; yerel cache yolu require'dan önce verilerek giderildi, yeni kayıt bağımlılığı indirilmedi. Geliştirme sırasında yeni public dosyaların önceki 404 yanıtı dev server yeniden başlatılınca giderildi. Son kısa kontrolde bu 404'ler yoktu. Bunlar gizlenmiş başarılı testler olarak kaydedilmedi.

**Yapılmayanlar:** Tam lint/build/QA, tekrar eden cihaz matrisi, Safari/iOS, gerçek mobil cihaz, kapsamlı erişilebilirlik veya performans testi, runtime context-loss/reduced-motion test matrisi, bağımsız replay etkileşimi testi, eski videoyla A/B, production izolasyonu, commit/push/merge/deploy. Kontrol kapsamı kullanıcının hızlı geliştirme sınırında tutuldu.

## Değişen dosyalar

Uygulama:

- `app/prototype/bs3p-right-3d/route.ts`
- `prototypes/bs3p-right-3d/{entry.ts,scene.ts,geometry.ts,prepare.mjs,tsconfig.json,tsconfig.check.json}`
- `public/prototype-assets/bs3p-right-3d/{study.css,system-static.svg}`
- Üretilen TS çıktıları: `public/prototype-assets/bs3p-right-3d/{entry.js,scene.js,geometry.js}`
- Yerel lisanslı vendor çıktıları: `public/prototype-assets/bs3p-right-3d/vendor/{three.module.js,three.core.js,RoomEnvironment.js,LICENSE.txt}`
- `package.json`, `package-lock.json`

3.0+ kayıtları ve teslim kanıtları:

- `bayes 3.0-plus/04-Development/BS3P-002-RIGHT-HERO-3D-IMPLEMENTATION.md` (bu not)
- `bayes 3.0-plus/04-Development/TASK_REGISTER.md`
- `bayes 3.0-plus/05-Decisions/DECISION_LOG.md`
- `bayes 3.0-plus/98-Agent-Logs/{CURRENT_STATUS,NEXT_STEPS,SESSION_LOG,DAILY_LOG_2026-10-14}.md`
- `bayes 3.0-plus/07-Reviews/REVIEW_REGISTER.md`
- `bayes 3.0-plus/07-Reviews/evidence/{BS3P-002-desktop.png,BS3P-002-mobile.png,BS3P-002-motion.webm,BS3P-002-quick-check.json}`

## Açık sorunlar / sonraki onay

1. Görsel kalite ve marka uyumu kullanıcı değerlendirmesini bekler; 4.0 denemesiyle aynı kaliteye ulaşıldığına dair ölçüm/karar verilmedi. İnce yüzeylerin kontrastı ve mavi bağlantının baskınlığı özellikle incelenmeli.
2. Gerçek dönen sol prizmayla denge ve mevcut MP4 ile aynı zemin/ölçüde karşılaştırma yapılmadı. BS3P-003 ayrı onaylı adım; hero entegrasyonu ayrıca BS3P-004 kapısıdır.
3. Mobil SVG, final Three.js kadrajının birebir kopyası değildir; küçük UI detayları kavramsal işaret düzeyindedir. Reduced-motion/context-loss yolları yazıldı fakat bu görevde ayrı runtime matrisi test edilmedi.
4. D-006/R-006 sürer: `noindex` erişim izolasyonu değildir. Route ve public vendor/asset'ler static export ile yayına karışabilir. Production artefact'ından dışlama BS3P-006 release kapısıdır; uygulanmadı.
5. Vendor ESM dosyaları minify/tree-shake edilmedi. İlk görsel deneyde ayrı route'ta kalır; yayın performansı ve modül hazırlık bakım maliyeti ileride değerlendirilmelidir. Üretilmiş JS, source değişince prepare ile yeniden üretilir.

Bu teslimden sonra durulur; görsel revizyon, A/B veya entegrasyon için kullanıcı talebi/onayı beklenir.
