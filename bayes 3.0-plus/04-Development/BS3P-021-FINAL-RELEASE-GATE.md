# BS3P-021 — Final Release Gate

**Tarih:** 2026-10-15
**Durum:** completed — denetim tamamlandı, kullanıcı onayı beklenir.
**Branch / HEAD:** `feature/bayessoft-3.0-plus` / `1218e589fd5275f45d8b610b5ec87eeac05f6886`.
**Yetki:** BS3P-020 kabulü sonrası son teknik denetim. Onaylı tasarım kilitli. Bu görevde uygulama/CSS/package/lock/workflow değiştirilmedi; commit/push/merge/deploy/staging yapılmadı.

## Nihai karar: READY WITH CONDITIONS

Doğrulanmış açık bir **RELEASE BLOCKER uygulama hatası yok**. B-019-01 kapalı kalıyor; Node22 ile gerçek production build ve izolasyon başarılı. Bununla birlikte Safari testi yapılamadı, tam dev/build audit13 kaydı ve geçmiş artifact yokluğu sürüyor. **Bu karar canlı yayın izni veya risklerin kullanıcı tarafından kabul edildiği anlamına gelmez.** Aşağıdaki koşullar yayın onayında açıkça ele alınmalı:

1. Safari/WebKit hedefli kontrolü izinli ortamda tamamlamak veya test yokluğunu açıkça kabul etmek. Safari testi geçti denemez.
2. Yalnız incelenen ref ve lockfile'dan Node22 Ubuntu CI `npm ci`+build+verify başarıyla geçmeli; upload yalnız doğrulanmış `out` olmalı. Yerel macOS Node22 başarısı gerçek Ubuntu koşusu yerine sunulmuyor.
3. On üç dev/build bulgusu için yalnız güvenilir kaynak/girdilerle build sınırını ve ayrı dar patch takibini kabul etmek veya yayımdan önce kapatmak. Production audit0 sonucu, build zincirini risksiz yapmaz.
4. Eski indirilebilir artifact olmadığını kabul ederek kaynak geri dönüş adayının hazırlık/prova sorumlusunu belirlemek; yeni yayın artifact'ini hash/ref ile kalıcı saklamak. “Tek tıkla önceki artifact restore hazır” iddiası yok.
5. Aşağıdaki dar checkpoint kapsamını gözden geçirmek. Diğer yerel dosyaları `git add .`/`git add -A` ile sürüme karıştırmamak. Commit/yayın için ayrıca açık onay gerekir.

## Sınıflandırma

| Sınıf | Bulgu / durum | Yayınla ilişkisi |
|---|---|---|
| RELEASE BLOCKER | Bu denetimde kanıtlanmış aktif kritik uygulama/izolasyon hatası bulunmadı. Önceki B-019-01 hareket kontrolü çalışıyor. | Yok; sonraki CI build/izolasyon başarısızlığı doğrudan blocker olur. |
| ACCEPTED RISK — kabul önerisi | Safari/WebKit testi yok; Safari remote automation kapalı, Playwright WebKit binary yok. | Testi tamamla veya kullanıcı açıkça eksik kapsamı kabul etsin. |
| ACCEPTED RISK — kabul önerisi |10high/3moderate dev/build zinciri; production0. | Güvenilen ref/girdiler, ayrı patch görevi ve kullanıcı risk kabulü şart. |
| ACCEPTED RISK — kabul önerisi | Eski Pages artifact0; kaynak rollback planı var, prova yok. | Artifact bazında doğrudan restore garanti değil; yayın öncesi geri dönüş hazırlığı/kabul gerekli. |
| ACCEPTED RISK — kabul önerisi | Yerel Node22/macOSARM64 doğrulandı; temiz Ubuntu npmci/CI koşusu yok. | Gerçek release workflow'unun build+verify kapısı zorunlu. |
| IMPROVEMENT | Global Google Fonts build-time ağ bağımlılığı;020'de tek parse hatası,021Node22 ilk build geçti. | Bu koşuda hata yok; ayrı görevde güvenilir yerel kaynak seçeneğini değerlendir, tasarıma dokunma. |
| IMPROVEMENT |020mobilLCP3,148s tek lab örneği; fieldCWV/Safari/cihaz/SR kapsamı eksik. | Bu görevde performans sayısı tekrar üretilmedi; önceki sayı güncel saha ölçümü değildir. |
| IMPROVEMENT | Reviel/Metek detay sayfası, yasal/izin içerik kararları önceki kayıtlarda açık. | Bozuk/sahte detay linki gösterilmiyor; otomatik blocker değil. |

“ACCEPTED RISK” bu raporda teknik olarak sınırlanmış ve kullanıcının kabulüne **sunulan** risk kategorisidir; kullanıcı yerine kabul verilmedi.

## Safari / WebKit sonucu

Safari uygulaması ve sistem SafariDriver var.3020portunda yalnız yeni test session açma denemesi yapıldı; HTTP500 `session not created`: Safari Settings/Developer içinde “Allow remote automation” etkinleştirilmesi gerekiyor. Sistem/tarayıcı ayarları değiştirilmedi. Playwright beklenen `webkit-2370/pw_run.sh` binary'si yok; büyük browser kurulumu yapılmadı.

**Safari/WebKit üzerinde heroCSS3D, Threefallback, R2galeri, motioncontrol, mobilmenü ve üç dil doğrulanamadı.** Chromium sonucu Safari sonucu yerine sayılmadı. Safari/gerçekcihaz/Firefox/SR testi yapılmadı. Kanıt: `safari-attempt.json`, `webkit-availability.json`.

## Node22 ve production kontrolleri

Resmî nodejs.org release index'inden **Node v22.23.3/darwin-arm64** indirildi; resmî SHASUMS256 ile SHA256 eşleşti. Binary yalnız `/private/tmp` altında; repo veya sistem Node kurulumu değiştirilmedi. Test komutlarında Node22 binary ve çocuk süreçlerin PATH'i açıkça kullanıldı; buildwrapper `process.execPath` ile Next'i aynı runtime'da çalıştırdı. Public env değerleri workflow'daki değerlerle eşlendi; .env/secret okunmadı.

| Kontrol | Sonuç |
|---|---|
| TypeScript `tsc --noEmit` |PASS|
| HedefliESLint app/layout-page,homepage,LanguageProvider,data,lib,scripts |PASS|
| Foundation üç dil/eski key/proje/negative isolationfixture |PASS|
| Temiz isolated production build Next15.5.28 |PASS,18staticpage; ilk deneme başarılı|
| Export verifier |PASS,686files/0prototypeartifact/0prototypedependency|
| Dev/prodHTTP izolasyonu |PASS;6devprototype+asset200,10productionURLvaryantı404,productionroutes200|

Node22 ile mevcut kurulu lockfile bağımlılıkları kullanıldı. Bu, temiz `npm ci` kurulumu veya GitHub Ubuntu/Linuxx64 runner testi değildir; releaseCI henüz tetiklenmedi. Production build Google Fonts'a gerçek erişim kullandı, mock/cache enjeksiyonu yapılmadı. Root13,7kB/firstload134kB/shared103kB; önceki tasarımın daha basit alternatifi oluşturulmadı.

Kanıt: `node22-runtime.json`, `node22-checks.json`, `node22-{typecheck,lint,foundation,build,verify,isolation}.txt`. .txt kanıtları `.gitignore` içindeki `*.log` kuralına takılmadan seçilerek sürümlenebilir.

## Kısa regresyon — Node22 artifact'i

Yerel static production modelinde3019; Chromium1440×1000 ve390×844. Onaylı görsel düzen screenshot'larda korundu; yeni uygulama/CSS düzeltmesi gerekmedi.

- Hero gerçek renderedfont CDP: **Instrument Sans / InstrumentSans-Regular_Medium**, customfont,20glyph. Computed family'ye bakılarak fallback varsayılmadı.
- Tek motionbutton pause: prizma matrix/angle, marquee transform, Three time/frame sabit; userresume ve reloadpause çalıştı. EN/DE/TR değişirken paused kalır, `html.lang` doğru, yatay taşma yok.
- Reduced-motion: statik scene/canvas0, prizmaauto paused; marquee `animation-name:none`, gerçekanimasyon0. Global `animation:none!important` shorthand nedeniyle computed `animation-play-state:running` görülebilir; çalışan animasyon anlamına gelmez.
- R2ileri: FurtherUp→Reviel→Metek, bilgi/link senkron. Üçunique640WebPisteği/329188B; her9×13dilim için tekrar indirme yok. OrijinalPNG/font/heroSVG/galerigeometri snapshot'ında değişmedi.
- FurtherUp detay `/projeler/furtherup-drive`, canlı `https://drive.further-up.net`; Reviel `https://www.reviel.com.tr/`, Metek `https://metekmakina.com/urunler`. Dış linkler `_blank`/`noopener noreferrer`; Reviel/Metek null-detail/sahtebuton yok. Bu tur üçüncü taraf sitelere availability isteği yapılmadı; href/render sözleşmesi kontrol edildi.
- Canonical `https://bayessoft.com.tr/`, doğru metadata title,1H1/JSONLD, dört içanchor hedefi mevcut. Sitemap'teki13route200 (saklıAI/Atlı detayları dâhil), robots200, bilinmeyenURL404. SEO kaynakları değiştirilmedi.
- MobilDEmenü/Escape çalıştı; horizontaloverflow0,350pxstatikSVG/canvas0. Footer/contact kaynakları aynı; tam formlivePOST yapılmadı.
- Pageerror0. Tüm assertion'ların tek kesintisiz koşuda geçtiği iddia edilmez: ilk immediatepause snapshot'ında bir compositorframe0,33px farkı vardı;100ms stil oturması sonrası iki snapshot eşit. Ana devam koşusu en sonda mediachange'i Reacteffect uygulanmadan okuduğu için durdu. Reduced-only devamında uygulanan durum beklendi. İlk reduced harness play-statepaused bekliyordu; CSS'in animasyonu tamamen kaldırdığı görülerek beklenti `animationName:none`/animasyon0 olarak düzeltildi. Ham başarısızlıklar saklandı, uygulama hatası gibi düzeltilmedi.

Kanıt: `regression-initial-harness.json`, `regression.json` (son erkenokuma dahil), `regression-summary.json`, `reduced-continuation.json`, harness dosyaları. Desktop/mobilPNG'ler ayrıca görsel incelendi. Geniş matris/video/Lighthouse/piksel eşitleme yapılmadı.

## Bağımlılık güvenliği — tek tek13paket

Güncel `npm audit --omit=dev`: **0bulgu**. Tam audit: **10high/3moderate**. Lockfile'da aşağıdaki bütün nodes `dev:true`; static Pages'ta npm/Node/ESLint/Tailwind sunucusu çalışmaz ve bu araçlar HTTP endpoint değildir. Ancak build/dev süreci hâlâ saldırı yüzeyidir; kötü amaçlıPR/config/pattern/YAML/CSS/browserstats işlenirse DoS/CPU/memory riskleri vardır. “Production0” bütün build risklerini ortadan kaldırmaz. Mevcut workflow main/master push veya manualdispatch'tir; güvenilmeyen ref'i ayrıcalıklı release build'inde çalıştırmama koşulu önemlidir.

| Paket/sürüm | Gerçek dependency yolu | Etki ve güvenli seçenek |
|---|---|---|
| @next/eslint-plugin-next15.5.28 **H**|eslint-config-next→plugin→fast-glob→micromatch→braces|InheritedpatternDoS; tekbaşına plugindowngrade etme. Braces zincirini uyumlu parent çözümüyle ele al.|
| baseline-browser-mapping2.10.41 **M**|autoprefixer→browserslist→baseline|Geçersizgirdi process termination.2.11.28 registrylatest;2.11.x içinde uyumlu minorpatch adayını build ile doğrula.|
| brace-expansion1.1.15 ve5.0.7 **H**|eslint→minimatch3; eslint-config-next→typescript-estree→minimatch10|CPU/stack/OOM pattern sorunları. Aynımajorda1.1.21 ve5.0.12+ minimum adaylar; her iki kopyayı hedefle, parentrange/lock/tests doğrula. Latest5.0.12 registry teyitli;1.x adayı uygulama öncesi registry teyidi ister.|
| braces3.0.3 **H**|Tailwind→chokidar ve Tailwind/plugin→micromatch|Derinnestedpattern stack exhaustion. Registrylatest de3.0.3; mevcut3.x için doğrulanmış güvenli doğrudan patch yok. Uyumsuz override yerine parentmigrasyonunu ayrı planla.|
| browserslist4.28.4 **H**|autoprefixer→browserslist|QuerycacheOOM ve güvenilmeyen statscrash/prototypewrite. Aynımajor4.29.3 registrylatest; parentrange ve CSSçıktısıyla doğrulanacak düşük kapsamlı aday.|
| chokidar3.6.0 **H**|Tailwind→chokidar→braces|Inheritedbraces; devwatch/buildgirdi riski. Chokidar majoroverride'u körlemesine yapma; Tailwind uyumlu parent çözümü.|
| eslint-config-next15.5.28 **H**|directdev→plugin→fast-glob|Inherited. Audit14.2.35downgrade öneriyor; Next15 ile eşleşmeyi bozacağı için güvenli sayılmadı. Latest16.4.1 de major; ayrı uyumluluk görevi.|
| fast-glob3.3.1 ve3.3.3 **H**|Nextplugin ve Tailwind→micromatch→braces|InheritedpatternDoS; fastglobpatch tekbaşına braces açığını kapatmaz. İki parent zincirini birlikte izle.|
| js-yaml4.3.0 **H**|eslint→@eslint/eslintrc→js-yaml|YAMLmerge/omapCPUDoS. Audit aralığına göre enaz4.3.2 uyumlu4.x adayını registry/range ile doğrula; latest5.4.3majoruna otomatik atlama.|
| micromatch4.0.8 **H**|Tailwind/fast-glob→micromatch→braces|Inheritedbraces. Parentmajoru/uyumsuzoverride için davranış testi gerekir; auditforce güvenli çözüm değil.|
| postcss-nested6.2.0 **M**|Tailwind→postcss-nested→selector-parser|InheritedparserCPU. Registrylatest8.0.1major; Tailwind3'e körlemesine takma.|
| postcss-selector-parser6.1.4 **M**|Tailwind direct ve nested→parser|FlatselectorquadraticCPU. Fix7.1.6 registryteyitli fakat6→7major; dar override bile API/CSS uyumluluğu kanıtı ister.|
| tailwindcss3.4.19 **H**|directdev→chokidar/glob/micromatch/nested/parser|Birden çokinheritedbulgu. Audit4.3.3major öneriyor; tasarım kilidi altında plansızmigrasyon yapılmaz.|

13paket kaydı13bağımsız exploit demek değildir; inherited bağımlılıklar bir kök sorunu çoğaltabilir. Öncelik: uyumlu baseline/browserslist/brace-expansion/js-yaml yaprak güncellemelerini **ayrı görevde** uygula/test et; kalanbraces/parser için parentmigrasyon kapsamı çıkar. Bu audit-only görevde package/lock/node_modules güncellenmedi; `npm audit fix` veya `--force` çalıştırılmadı. Sürüm önerisi uygulanmış/testedpatch değildir.

Kaynaklar: [npm registry](https://registry.npmjs.org/), güncel audit advisory URL'leri `audit-full.json` içinde; `security-installed.json`, `dependency-paths.json`, `security-registry-metadata.json`. Bu veriler ve gerçekrepo path'leri üzerinden dağıtım etkisi değerlendirmesi yapıldı; pentest yapılmadı.

## Yayın mekanizması ve rollback

Saltokunur GitHub API teyidi: [son başarılı Pages run38187511219](https://github.com/YsKara0/BayesSoft_website/actions/runs/38187511219), branchmaster, SHA **b8c38de99330def9182eb9c837d8b8f52d1a38e5**; deployment7003855534/success2026-10-12T00:19:59Z. MevcutHEAD1218e58 tasarımcheckpoint'idir, son canlıcommit değildir. Canlıdomain içerik/cachehash bu görevde ölçülmedi.

Aynırun artifactlist0, repo genelartifactlist0. Önceki artifact'in silinme/expiry sebebi bilinmiyor. **Geçmiş artifact restore erişimi yok, rollback tatbikatı yapılmadı.** Mevcut workflow: main/masterpush veya manualdispatch→UbuntuNode22/npmci→güvenli productionwrapper→exportverifier→yalnızoutupload→deploy-pages. Featurebranch push otomatik yayını tetiklemez; manualdispatch branchseçimi mümkündür. Workflow değiştirilmedi/tetiklenmedi.

### Geri dönüş runbook'u (çalıştırılmadı)

1. Yeni yayından önce, yetkili kişi mevcut sonbaşarılıSHA'nın kaynaklarını ayrıworkspace'e alır. Mevcutçalışmaağacında reset/checkout/stash yapılmaz.

```sh
git clone --no-checkout https://github.com/YsKara0/BayesSoft_website.git /private/tmp/bayessoft-rollback-review
git -C /private/tmp/bayessoft-rollback-review checkout --detach b8c38de99330def9182eb9c837d8b8f52d1a38e5
```

2. Eski kaynak ile incelenen releasecheckpoint'i karşılaştır; mevcut güvenli Nextpatch/lockfile,018A build-time izolasyonu ve verifier'ı koruyan ayrı **rollbackcandidate** hazırla. Bu aşama kodreview/build gerektirir; eskiSHA'yı körlemesine deploy veya rawoldnpmrunbuild ile yayınlama. Eski dependency/route düzeni mevcut gate'i karşılamayabilir. Eski tasarımı geri getirmek prototip yayınını açmaya izin vermez.
3. Rollbackcandidate workspace'inde Node22/publicenv ile `npm ci`, `npm run typecheck`, güvenli `npm run build`, `npm run verify:production` ve `node scripts/check-production-access.mjs <dev-origin>` çalıştır. Bu komutlar güncel güvenli scripts sözleşmesi rollbackcandidate'e aktarılmış olduğunda geçerlidir; eski kaynaktaki aynı isimlerin güvenli olduğu varsayılmaz. Prototype404,SEO,13route ve kritiklink kontrolü geçmeden ilerleme.
4. Başarılı `out`'u SHA256manifest ve kaynakSHA ile kalıcıartifact olarak sakla. Bu görev yeni aday için `candidate-artifact-sha256.json` üretti; bu dosya **yeni Node22artifact'i** tanımlar, eski canlı artifact'in yedeği değildir. Repoignored `out` veya `/private/tmp` kalıcıyedek sayılmaz.
5. Yalnız ayrı açık yayın/rollback onayından sonra incelenmiş rollbackref'inde workflow'u çalıştır. Komutşablonu: `gh workflow run pages.yml --repo YsKara0/BayesSoft_website --ref <reviewed-rollback-ref>`. gh bu ortamda kurulu değil; komut çalıştırılmadı. Workflow'un yalnızdoğrulanmışout'u yüklediğini kontrol et. Eski hatalıbuild'i rerun etmek yerine incelenmişref kullan.
6. Deploysonrası yetkili kişi canonical/rotalar/prototype404 ve kaynak/artifactSHAeşleşmesini smokecheck eder; cache/CDN durumunu doğrular. Bu görevde bu canlıadımların hiçbiri yapılmadı.

Kaynakfallback uygulanabilir bir hazırlık yoludur; prova/artifact eksikliği nedeniyle anlık,byteidenticalgeri dönüş garantisi verilemez. Yeni releaseartifact'i saklanırsa sonraki rollback rebuild/ağ/font değişiminden bağımsız yapılabilir.

## Git checkpoint kapsamı

Başlangıç `git status --porcelain -z --untracked-files=all`: **313dosya** =55releasekaynağı +81görevbelgesi/kanıtı +177hariçyereldosya. Tracked13modified; büyük çoğunlukuntracked. Son görevbelgeleri/021kanıtları final manifestte ayrıca bulunur. **Beklenmeyen uygulama değişikliği bulunmadı.** Kapsam dışı yereldosyalar silinmedi/değiştirilmedi.

Tam dosya listesi (klasör wildcard'ı yerine herdosyanın gerçek yolu/status/sınıfı): [[../07-Reviews/evidence/BS3P-021/checkpoint-file-list]]. Makineokunur başlangıçlistesi `initial-git-inventory.json`, başlangıçgrupları `checkpoint-scope.json`, finalöneri `checkpoint-final-scope.json`.

- **018A:** package/workflow,LanguageProvider/i18n namespace,merkezihomepage/projeverisi,4build-checkscripti ve3productionPNG.
- **018B:** app/page/layout,SiteChrome,gerçekfont,ayrıhomepagebileşenleri,libmotor/lifecycle ve heroSVG.55kaynak finalbirleşimde alttadır.
- **018C:** uygulamadeğişikliği yok; rapor/kanıt/loglar.
- **019:** homepageCSS'te iki EN/DEselector kapsam düzeltmesi; rapor/kanıt/loglar.
- **020:** tekmotionprovider/control,prizma/Threepauseadaptasyonu,SSR/LCP/lazyresponsiveposter,WebPtürevleri/dönüştürücü,hedefliseçili/projectcopy/foundation ve güvenlipackage-lockpatchleri.
- **021:** yalnız bu rapor/kanıt/log/review/karar; **296korumalıkaynak/asset/config dosyası hash'leri aynı**. Package/lock/Nextconfig/CSS/prototipler ve kullanıcıçalışmaları korunur.

Lockfile checkpoint farkında44packagepath sürüm/varlık değişimi var: Next/env/SWC/eslintconfig-plugin patch ailesi; PostCSS/nanoid/source-map-js; sharp/libvips platform optional aileleri ve emnapi. Bunlar020 güvenlik yamasına bağlı; yeni bağımsız ürün dependency'si yok. `checkpoint-lockfile-changes.json` herpath/önce-sonra listesini içerir. Manifest^15.3.4→^15.5.28 iken eski lockresolved15.5.20 idi; başlangıçraporundaki15.5.20 ile çelişki değil.

### Önerilen55uygulama/altyapı/asset dosyası

- `.github/workflows/pages.yml`
- `app/layout.tsx`
- `app/page.tsx`
- `components/LanguageProvider.tsx`
- `data/i18n.ts`
- `package-lock.json`
- `package.json`
- `components/SiteChrome.tsx`
- `components/fonts/InstrumentSans.ttf`
- `components/homepage/Contact.tsx`
- `components/homepage/Footer.tsx`
- `components/homepage/GalleryStage.tsx`
- `components/homepage/Header.tsx`
- `components/homepage/HeroPrism.tsx`
- `components/homepage/HeroSystemScene.tsx`
- `components/homepage/MotionControl.tsx`
- `components/homepage/MotionProvider.tsx`
- `components/homepage/ReferencesMarquee.tsx`
- `components/homepage/SelectedProjects.tsx`
- `components/homepage/Services.tsx`
- `components/homepage/SpatialHero.tsx`
- `components/homepage/SystemLayers.tsx`
- `components/homepage/homepage.css`
- `components/homepage/useHomepageCopy.ts`
- `data/homepage.ts`
- `data/selectedProjects.ts`
- `lib/homepage/gallery/controller.ts`
- `lib/homepage/gallery/dom.ts`
- `lib/homepage/gallery/geometry.ts`
- `lib/homepage/gallery/stage.ts`
- `lib/homepage/gallery/state.ts`
- `lib/homepage/gallery/swipe.ts`
- `lib/homepage/gallery/types.ts`
- `lib/homepage/prism.ts`
- `lib/homepage/reference-links.ts`
- `lib/homepage/reference-sizing.ts`
- `lib/homepage/system/geometry.ts`
- `lib/homepage/system/motion.ts`
- `lib/homepage/system/scene.ts`
- `public/hero/system-static.svg`
- `public/projects/covers/derivatives.json`
- `public/projects/covers/furtherup-drive-cover-640.webp`
- `public/projects/covers/furtherup-drive-cover-large.webp`
- `public/projects/covers/furtherup-drive-cover.png`
- `public/projects/covers/metek-makina-cover-640.webp`
- `public/projects/covers/metek-makina-cover-large.webp`
- `public/projects/covers/metek-makina-cover.png`
- `public/projects/covers/reviel-cover-640.webp`
- `public/projects/covers/reviel-cover-large.webp`
- `public/projects/covers/reviel-cover.png`
- `scripts/build-production.mjs`
- `scripts/check-foundation.mjs`
- `scripts/check-production-access.mjs`
- `scripts/optimize-project-posters.mjs`
- `scripts/verify-production-export.mjs`

### Belgeler ve kapsam dışında tutulacaklar

Seçili checkpoint'e018A/B/C/019/020/021raporları, TASK_REGISTER/DECISION_LOG/REVIEW_REGISTER/CURRENT_STATUS/NEXT_STEPS/SESSION_LOG/DAILY_LOG_2026-10-15 ve gerekli evidence eklenmeli. Tam liste bağlımanifestte; eski görevlerin zatentracked belgeleri tekrar yeni dosya gibi sayılmadı.

**Hariç177yereldosya:** `assets/logo_v2/bayes-icon-purple-{32,192}.png`; `bayes 3.0-plus/.obsidian/**`; eski `bayes 3.0/**` yerelayar/araştırma/evidence dosyaları; `bayes 4.0/**` arşivi; `bayes 3.0-plus/02-Research/project-showcase-motion-reference.mov`. Bunlar öncedenvardı;018A–020release scope'una dahil edilmemeli. Başka görevden dosya gerekirse kullanıcı ayrıseçim yapmalı.

Ayrıca ignoredçıktılar `.next*`,out,node_modules,*.tsbuildinfo,*.log,.env*,kişiselagentayarları,tempdosyalar/runtimebinary commitdışı. Önceki020production-build.log ignored'dır; bu görevin buildkanıtı `.txt` olarak tutuldu. Secret/.env içerikleri okunmadı, staging yapılmadı. Dosyaadı `AGENTS.md` ile Gitindex'teki `agents.md` case farkı eskirisk; yönergeler değişmedi, bu checkpoint'te onaysızcase-rename önerilmiyor.

Checkpointöncesi yalnız açık listedekidosyaları seç, `git diff --cached --name-status`/`--stat`/`--check` ile incele; henüz bu komutlarla staging yapılmadı. Geniş `git add .` veya tüm kasaları topluca ekleme önerilmiyor. Artifact rollback içingerekliolsada üretilenout kaynakcheckpoint'e değil ayrıreleaseartifact deposuna konmalı.

## Teslim ve sınırlar

[[../07-Reviews/evidence/BS3P-021/desktop-regression.png]] · [[../07-Reviews/evidence/BS3P-021/mobile-regression.png]]. Node22/build/izolasyon, güvenlik, rollbackmetadata, tamdosyalistesi, kaynakhashleri ve regresyonkanıtları021evidence altında.

Görev/task/current/next/session/günlük/review veD-027 güncellendi. Gitbranch/HEAD değişmedi, stageddosya0; uygulamakodu/CSS/dependency/yönerge/eskikasalar değiştirilmedi. Yeni özellik, fontboyutu/timing/görsel rötuş, genişQA veya yayın yapılmadı. **READY WITH CONDITIONS — kullanıcı incelemesi ve açık koşul/risk kabulü beklenir.**
