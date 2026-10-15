# BS3P-020 — Accessibility Blocker & Performance Fixes

**Tarih:** 2026-10-15
**Durum:** completed — hedefli düzeltmeler ve doğrulama tamamlandı; kullanıcı incelemesi beklenir.
**Branch / HEAD:** `feature/bayessoft-3.0-plus` / `1218e58`. Bu checkpoint tasarım/kaynak referansıdır; son canlı yayın commit'i değildir.
**Yetki:** Kullanıcının tek küçük hareket kontrolü kararı ve BS3P-020 talebi. Görsel tasarım kilitli; commit/push/merge/deploy yapılmadı. 018A/B/C/019 uncommitted çalışmalar korundu.

## Sonuç ve sınıflandırma

- **BLOCKER B-019-01: giderildi.** Tek erişilebilir kalıcı kontrol, prizma ve marquee yanında devam eden Three.js açılışını da gerçekten duraklatır. Dil, mouseleave, blur veya galeri etkileşimi tercihi sıfırlamaz. Bu sonuç tam WCAG uygunluk sertifikası değildir.
- **ÖNEMLİ I-019-02: azaltıldı.** Aynı mobil laboratuvar koşulunda LCP7,964→3,148s (%60,47 azalma). Büyük poster toplamı5,418→0,682MB (%87,42); küçük sürüm0,329MB (%93,92). İlk viewport'ta poster isteği0.
- **ÖNEMLİ I-019-04: production audit kapandı; toolchain takibi açık.** `npm audit --omit=dev`: önce1critical+4high, son0bulgu. Tam audit:0critical/10high/3moderate; bunların tümü dev/build zincirinde kaldı. Audit temizliği, güvenlik garantisi değildir.
- **ÖNEMLİ I-019-03/I-019-05: açık.** Safari/WebKit/Firefox/gerçek cihaz/SR ve CI Node22 bu görevde doğrulanmadı. Son başarılı Pages deployment SHA'sı doğrulandı; indirilebilir eski artifact ve rollback provası yok.
- **ÖNEMLİ yeni build riski:** Bir nihai build denemesinde mevcut `next/font/google` loader font URL uzantısını ayrıştıramadı (`loader.js:122`, null[1]). Önceki build ve kaynak değiştirmeden tek tekrar başarılı. Instrument Sans yereldir/değişmedi; diğer global fontların build-time Google erişimi hâlâ dış bağımlılık. Sahte font mock'u/cache enjeksiyonu kullanılmadı.

Yeni koşulsuz **READY** kararı verilmedi. B-019-01 kapanışı, kalan tarayıcı/CI/toolchain/rollback kapılarının kabulü veya doğrulanması yerine geçmez. Önceki019 raporu tarihsel olarak değiştirilmedi; bu rapor güncel durumdur.

## Tek hareket kontrolü

Hero'nun sağ üstünde, header'ın altında tek native button; küçük ikon+12px metin,44px dokunma yüksekliği, mevcut2px görünür focus. Ek büyük/bileşen bazlı durdurma butonu yok. TR: “Hareketi duraklat / Hareketi sürdür”; EN: “Pause motion / Resume motion”; DE: “Bewegung pausieren / Bewegung fortsetzen”. `aria-controls`, durum ve azaltılmış hareket açıklaması mevcut.

Tek root MotionProvider; `bayessoft-motion` localStorage tercihi ve sekmeler arası storage olayı. Deterministik öncelik: hydration tamamlanana kadar güvenli duruş → OS reduced-motion → açık kayıtlı tercih → varsayılan çalışma. OS azaltma, kayıtlı “running” tercihini geçersiz kılar; azaltma kapatılınca kayıtlı tercih yeniden uygulanır. Reduced-motion sırasında kontrol odaklanabilir/aria-disabled ve açıklamalıdır, click guard hareket başlatmaz. Storage engellenirse mounted sayfada bellek tercihi çalışır; reload kalıcılığı storage olmadan garanti edilmez (guard kaynak incelemesi; bu ortamda storage-block testi yapılmadı).

- **Prizma:** dwell ve completion timeout'ları temizlenir; dönüş ortasındaki gerçek CSS transitions Web Animations API ile dondurulur, kalan süreyle sürer. Dört yüz,420px kare kesit,−90° X adımı,5000ms okuma/900ms dönüş korunur. Hover/focus geçici duruşu eskisi gibi kalır. Duraklatılmış idle durumda manuel yüz seçimi anlıktır; otomatik döngüyü açmaz. Eski getAnimations desteği olmayan tarayıcıda okunabilir hedef yüze sabitleme fallback'i vardır; bu fallback Safari'de denenmedi.
- **Marquee:** CSS animation-play-state root tercihine bağlanır; transform/faz korunarak durur/sürer.120s, hover/focus, renk ve reduced-motion kuralları değişmedi. CSS compositor animasyonu dışında JS frame/timer eklenmedi.
- **Three.js:** aktif sahnede renderer loop null olur; time/frame sabit, sürdürme aynı canvas ve zamandan devam eder. Biten8,4s sahne sırf “sürdür” ile yeniden başlamaz. Paused reload/reduced/compact veya hazırlama sırasında pause, mevcut anlamlı statik final SVG'yi gösterir; gizli RAF çalışmaz. Replay paused iken devre dışı. Kompozisyon/kamera/material/geometri/motion timeline dosyaları korunur. Abort/listener/observer/timer/WebGL cleanup kaynakta gözden geçirildi; yeni kontrollerin unmount temizliği mevcut lifecycle'a bağlıdır.
- **Galeri:** autoplay yok; kullanıcı başlatmalı1040/700ms geçişler global pause tarafından engellenmez. Kullanıcı paused iken Reviel'e manuel geçebildi. Bu davranış otomatik hareketin yeniden başlaması değildir.

## WCAG 2.2.2 değerlendirmesi

[W3C Pause, Stop, Hide açıklaması](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html) doğrultusunda otomatik başlayan,5s üzerinde süren ve başka içerikle eşzamanlı olan esas olmayan hareket kontrol gerektirir. Sonsuz prizma/marquee kapsamdadır. Three.js'in8,4s'de bitmesi tek başına muafiyet değildir; aynı kontrole dâhil edildi. Galeri kendiliğinden başlamaz, kısa manuel geçiştir. Hover/focus duruşu ve reduced-motion tek başına kalıcı kullanıcı kontrolünün yerine sayılmadı. Klavye Space, görünür focus, native button, üç dil ve gerçek duruş test edildi; tam ekran okuyucu/WCAG denetimi yapılmadı.

## Performans: neden, müdahale ve ölçüm

Önce LCP öğesi `img.static-art` `/hero/system-static.svg`; ilk başlık3,160s'de, SVG7,964s'de görünüyordu. Mobil SVG önceden hydration/policy bekliyordu; posterler ilk yükte5,42MB indirme başlatıyordu. Mobilde zaten Three import/canvas yoktu; ana sorun için Three animasyonunu veya tasarımı değiştirmek gerekmedi.

SVG artık SSR markup'ında mobil/reduced durumda görünür, eager/high priority ve media koşullu preload kullanır. Desktop hazırlama görünümü CSS ile aynı tutulur. SVG ölçüsü/yerleşimi aynı. Font assetleri/font ölçüleri değiştirilmedi. Galeri,300px yaklaşınca geometri×DPR ölçüsünden tek640/1080 sürümü seçer; SVG symbol tekrarları aynı URL'yi paylaşır. Animasyon koduna özel proje koşulu eklenmedi.

| Ölçüm | Önce | Sonra |
|---|---:|---:|
| Mobil LCP |7.964ms|3.148ms|
| FCP |3.160ms|3.148ms|
| CLS (bu TR örneği) |0|0,000203|
| Örnek menü/Escape etkileşimi, en uzun EventTiming |24ms|24ms|
| Long task sayısı/toplamı |1 /68ms|1 /69ms|
| Tamamlanan JS transferi (identity) |621.613B|627.620B|
| İlk görünüm poster URL bağları |3 PNG|0 (lazy)|

Yöntem: aynıChromium,390×844/DPR1/touch,4×CPU,200.000B/s down/93.750B/s up/150ms latency; aynı3019 static server, soğuk browser context/cache, DOMContentLoaded sonrası15s. Tek önce/sonra örneği; Lighthouse/fieldCWV/INP değildir, gerçek hosting sıkıştırması/cache'i yok. Ağçakışması ve hydration etkisi birlikte değişti; kazancı tek değişkene kesin oranla atfetmiyoruz. LCP iyileşti ama3,148s hâlâ2,5s “iyi” hedefinin üzerinde; gerçek cihaz/hosting doğrulaması gerekir. JS azaltımı iddia edilmiyor; yeni kontrolün küçük maliyeti ölçüme dahildir.

Son performans ölçümü, yalnız sharp transitive yamasından önceki başarılı UI artifact'i üzerindedir. Nihai patch sonrası yeniden build başarılı; CSS/SVG/WebP hash'leri aynı, Next build/chunk kimlikleri yeniden üretildi (`measured-artifact-comparison.json`). Bu nedenle nihai build için ikinci performans sayısı uydurulmadı.

## Posterler

| Proje | Orijinal PNG |640px WebP|Büyük WebP (1080px)|
|---|---:|---:|---:|
| FurtherUp |1.458.998B|72.610B|151.008B|
| Reviel |1.897.092B|114.566B|239.932B|
| Metek |2.061.982B|142.012B|290.672B|
| **Toplam** |**5.418.072B**|**329.188B**|**681.612B**|

Quality94 WebP; AVIF gerekmedi. Kaynak `assets/projects/*.png` ve public PNG kopyaları hash ile aynı. Boyutlar metadata manifestinde;1081px Metek1080px'e oranlı küçülür, integer yuvarlama dışında stretch/crop yok; `xMidYMid meet`,9×13 slice/UV/geometri aynı. DPR1 mobilde tam3küçük URL, DPR3 mobilde tam3büyük URL gözlendi; her tekrar ayrı indirme başlatmıyor. Resize/DPR değişimi gerektiğinde diğer sürümü talep edebilir. JavaScript engellendiğinde galeri lazy href'leri bağlanmaz; mevcut site etkileşimlerinin JS gereksinimi sürer. Hero statik fallback JS engellenerek ayrıca görüldü.

PNG/WebP aynı mobil galeri pozunda görsel incelendi: belirgin renk/keskinlik/perspektif/taşma farkı gözlenmedi. Sayısal karşılaştırma PSNR38,35–43,73dB (`poster-quality.json`); görsel kusursuzluk garantisi değildir. Dönüştürücü `scripts/optimize-project-posters.mjs`; PNG'ye yazmaz. Var olan sharp kullanılır; yeni doğrudan dependency eklenmedi.

## Güvenlik: özgün beş kayıt ayrı değerlendirildi

Audit severity advisory sayısından farklı olarak paket bazındadır. Kaynaklar yerel npm audit/advisory URL'leri ve gerçek npm explain yollarıdır; JSON'lar kanıttadır. Güvenlik advisory başlıkları/etki koşulları [Next Windows RCE](https://github.com/advisories/GHSA-p293-qw3h-jr36), [AVIF optimizer RCE](https://github.com/advisories/GHSA-2xp9-vwfh-vxw4) kaynaklarıyla da karşılaştırıldı.

| Paket / önce | Path ve tür | Bu dağıtımda etki | Dar düzeltme / son |
|---|---|---|---|
| next15.5.20 /critical|root prod|Static Pages'ta Next server, ServerActions,ISR,optimizer yok; Windows/customserver/AVIF optimizer yolları canlı static hostta sunulmuyor. Build/dev yine risk yüzeyi.|15.5.28 patch, eşleşen eslint-config-next15.5.28; audit kaydı yok.|
| postcss8.4.31 /high|next→postcss prod; root8.5.16 dev|CSS stringify/XSS ve sourceMappingURL path/read sorunları build girdileriyle ilişkili. Dış/untrusted CSS işleme incelenmeli; statik host Node çalıştırmaz.|Root8.5.30; yalnız next kapsamlı postcss override ile aynı güvenli8.x; audit kaydı yok.|
| nanoid3.3.15 /high|next→postcss→nanoid; devCSS zinciri de paylaşır|Negatif/sıfır boyut generators DoS; canlı client uygulaması bu API'yi çağırmıyor, build aracı bağımlılığı.|PostCSS kapsamlı3.3.x override, kurulu3.3.20; audit kaydı yok.|
| source-map-js1.2.1 /high|next→postcss→source-map-js; devCSS de paylaşır|Zararlı indexed sourcemap offsetlerinde event-loop DoS; runtime static hostta yok, build girdileri için anlamlı.|PostCSS kapsamlı^1.2.2; kurulu1.2.2; audit kaydı yok.|
| sharp0.34.5 /high|next→sharp optional prod|libvips/libheif/librsvg image işlem açıkları. Canlı statik sitede optimizer yok; offline poster üretimi güvenilen yerelPNG. Zararlı görsel alan build/dev araçları için önemlidir.|Next15.5.28'in desteklediği `^0.34.3 || ^0.35.5` aralığından npm update sharp→0.35.5; native load başarılı; audit kaydı yok.|

`npm audit fix --force`, kontrolsüz major, yeni dependency yok. Lockfile güncellendi. Next patch sonrası sharp için ilk kalan high durumu ara sonuçtu; gerçek final production audit **0**. Next'in sharp aralığı gerçek node_modules/package metadata'sından doğrulandı; destek dışı override kullanılmadı.

Tam audit kalan13paket: yüksek10 (`@next/eslint-plugin-next`,brace-expansion,braces,browserslist,chokidar,eslint-config-next,fast-glob,js-yaml,micromatch,tailwindcss), moderate3 (baseline-browser-mapping,postcss-nested,postcss-selector-parser). Bunlar dev/build ağacında; production omit raporunda bulunmuyor. Kaynak/girdi güvenilirliği ve CI izolasyonu yine önemli. Audit bazı zincirler için Tailwind4 major veya eslint-config-next14 downgrade öneriyor; tasarım kilitli bu görevde otomatik uygulanmadı. Ayrı toolchain görevi: önce uyumlu leaf patch'ler, sonra yalnız gerekli parser/glob/brace parent yükseltmeleri; TS/lint/build ve CSS parity ile doğrulama. “Tüm audit temiz” iddiası yok.

## Rollback hazırlığı — sadece read-only

GitHub public REST, son başarılı “Deploy GitHub Pages” workflow run ve deployment status'ü doğruladı:

- [Run38187511219](https://github.com/YsKara0/BayesSoft_website/actions/runs/38187511219), branch `master`, commit **b8c38de99330def9182eb9c837d8b8f52d1a38e5**.
- github-pages deployment7003855534, son status success2026-10-12T00:19:59Z. Commit API200. Bu GitHub metadata doğrulamasıdır; canlı domain içerik/hash/cache doğrulaması değildir.
- Run artifacts total_count0; genel artifact listesi0. İndirilebilir eski `github-pages` paketi bulunamadı. Nedeninin süresinin dolması olduğu varsayılmadı. Artifact hash'i/doğrudan artifact restore doğrulanamadı.
- Mevcut workflow main/master push veya workflow_dispatch; Node22/npmci→isolatedbuild→verify→out upload→deploy-pages. Featurebranch push tetiklenmez; manualdispatch için branch seçimi mümkündür, yayın öncesi açık yetki ve doğru ref/artifact kontrolü şarttır. Workflow bu görevde değiştirilmedi.

**Uygulanabilir kaynak geri-alma hazırlığı (komutlar çalıştırılmadı):**

```sh
# Ayrı, yeni bir checkout'ta; mevcut çalışma ağacında reset/stash/checkout yapma.
git clone --no-checkout https://github.com/YsKara0/BayesSoft_website.git /private/tmp/bayessoft-rollback-source
git -C /private/tmp/bayessoft-rollback-source checkout --detach b8c38de99330def9182eb9c837d8b8f52d1a38e5
# Doğrulanmış Node22 ve gözden geçirilmiş lockfile ile ayrı build ortamında:
cd /private/tmp/bayessoft-rollback-source
npm ci
npm run build
node /path/to/reviewed-release/scripts/verify-production-export.mjs out
```

Önkoşullar: temiz ayrı workspace; doğruSHA/lockfile erişimi; Node22; workflow'taki doğrulanmış public site/contact değerleri; Pages yetkisi ve artifact saklama planı. `npm ci/build` komutlarının cwd'si bu ayrı checkout olmalı. Eski build `out`'unu otomatik yayınlama: eski source prototip izolasyonunu içermeyebilir. Üretim build'ini mevcut018A source-first izolasyon/verifier'ı koruyan incelemeli rollback paketine uyarlayıp prototype404,SEO,route ve güvenlik kontrollerini geçir. Aynı dosyaları yeniden üretmek eski artifact'in byte-identical kopyasını garanti etmez.

**Yalnız ayrı yayın onayından sonra** gözden geçirilmiş rollback ref'inde CI build+verify+Pages upload/deploy çalıştırılır; `out` dışı klasör yüklenmez. Komut şablonu (bu ortamda gh kurulu değil; çalıştırılmadı): `gh workflow run pages.yml --repo YsKara0/BayesSoft_website --ref <reviewed-rollback-ref>`. Bu ref eski çıplak SHA değil, mevcut izolasyon/güvenlik kapılarını koruyarak gözden geçirilmiş geri dönüş ref'i olmalıdır. Eski workflow'u körlemesine rerun etme. Yeni sürüm yayınından önce doğrulanan `out` paketini/SHA256manifestini kalıcı sakla; böylece sonraki rollback rebuild gerektirmez. Bu görevde clone/build-old-source/rollbackprovasi/deploy yapılmadı; public APIGET dışında hosting'e dokunulmadı. İndirilebilir geçmiş artifact yokluğu önemli açık risk olarak kalır.

## Hedefli kontroller ve kanıtlar

- TS / hedefli ESLint / foundation check geçti; legacy locale key'leri ve onaylı kalan homepage copy korunur, yalnız dört motion key eklenmesine izin verilir.
- Temiz isolated production build Next15.5.28:18staticpages, root13,7kB/firstload134kB/shared103kB; son686dosya/0prototypeartifact/0prototypedependency. Bir Google Fonts hatası ve tek başarılı tekrar ayrımı yukarıda; final log kanıttadır.
- Dev altı prototype route+asset200; production on URL varyantı/asset404; gerçek production rotaları200. Son artifact route testi build sonrası tekrarlandı.
- Chromium desktop1440×1000, mobil390×844/DPR1 ve responsive seçim içinDPR3. Native mouse/Space/focus2px/TR-EN-DE/locale/reload;5400ms beklemede frame/matrix/transform değişmiyor. Midturn CSStransitions paused/samecurrentTime; resume gerçek kalan dönüşü bitirir. Three1,089→1,089 frozen, resume1,332 ve aynıcanvas. Mobil yataytaşma yok; menü/Escape korundu.
- Reduced-motion kayıtlıpaused ve kayıtlırunning çatışmaları ayrı test edildi; savedrunning+OSreduce paused/canvas0, OSreduce kaldırılınca savedrunning yürür. Mobil ve JS-block hero statik fallback görüldü.
- İlk harness broad `data-motion-paused` selector'ı iki eleman buldu; rootselector düzeltildi. Ana koşu aria-disabled reduced control üzerinde normal click beklediği için durdu; force-click guard devam koşusunda doğrulandı. Bunlar rawJSON'da saklı; uygulama bug'u veya bütün testin tek seferde pass ettiği şeklinde sunulmadı. Son devam koşusunda pageerror0.
-269/281 başlangıç snapshot kaynağı aynı;12hedefli dosya değişti,0silindi. Yeni2component/script/6WebP+manifest. Prototip kaynakları/assetleri,originalPNG,fontlar,Threegeometry/timeline,R2motor/geometry,header-footer ve SEO/oldprojectcatalog aynı. package/lock değişimi ayrıca listelenir; snapshot kapsamı bütünrepo/secret taraması değildir.
- Safari/WebKit/Firefox/gerçekcihaz,SR,Lighthouse/fieldINP,tamperformanceprofili,CI Node22 ve gerçekrollback/cache test edilmedi. Kullanıcı onayı beklenir.

Kanıt dizini: [[../07-Reviews/evidence/BS3P-020/]]. `motion-summary.json`, `motion-qa*.json`, `final-smoke.json`, `performance-summary.json`+raw pair, `poster-quality.json`, audit/dependency JSON'ları, rollback metadata, route-isolation, source-manifest, final buildlog.

Desktop: [[../07-Reviews/evidence/BS3P-020/desktop-idle-control.png]]; dönüş ortası [[../07-Reviews/evidence/BS3P-020/desktop-motion-control.png]]. Mobil: [[../07-Reviews/evidence/BS3P-020/mobile-motion-control.png]]. Galeri WebP/PNG pair: [[../07-Reviews/evidence/BS3P-020/gallery-webp.png]], [[../07-Reviews/evidence/BS3P-020/gallery-source-png-comparison.png]].

## Değişen dosyalar (yalnız BS3P-020)

- `app/page.tsx`
- `components/SiteChrome.tsx`
- `components/homepage/HeroSystemScene.tsx`
- `components/homepage/SpatialHero.tsx`
- `components/homepage/GalleryStage.tsx`
- `components/homepage/homepage.css`
- `components/homepage/HeroPrism.tsx`
- `data/homepage.ts`
- `data/selectedProjects.ts`
- `lib/homepage/prism.ts`
- `lib/homepage/system/scene.ts`
- `scripts/check-foundation.mjs`
- `components/homepage/MotionProvider.tsx`
- `components/homepage/MotionControl.tsx`
- `scripts/optimize-project-posters.mjs`
- `package.json`
- `package-lock.json`

- `public/projects/covers/{furtherup-drive,reviel,metek-makina}-cover-{640,large}.webp` (6türev) ve `derivatives.json`.
- Bu rapor,020evidence; TASK_REGISTER, CURRENT_STATUS, NEXT_STEPS, SESSION_LOG, DAILY_LOG_2026-10-15, DECISION_LOG(D-026), REVIEW_REGISTER.

Önceki018A/B/C/019 çalışma ağacı dosyaları bu görevin değişikliğiymiş gibi sayılmadı. Arşivler/orijinal PNG/prototipler/saklıAI-Atlı kayıtları korunur. Yeni release/deploy görevi otomatik başlatılmaz.
