# BS3P-026 — Production Release Preflight

**Tarih:** 2026-10-15
**Karar: BLOCKED — B-026-01 production artifact izolasyon açığı.**
**Branch / RC HEAD:** `feature/bayessoft-3.0-plus` / `c3327e1fd59e3775ff8ae07a52b9a6b1141124e1`.

Bu görev yalnız salt okunur inceleme ve belgelemedir. Branch/ref/index/application/workflow değiştirilmedi; commit, push, merge, tag veya deploy yapılmadı. Aşağıdaki yayın komutları çalıştırılmadı. Kullanıcı dosyaları ve eski kasalar korunur.

## 1. Mevcut production ve GitHub durumu

Public GitHub API ile yeniden doğrulandı:

| Alan | Doğrulanan durum |
|---|---|
| Yerel RC HEAD / GitHub feature HEAD |İkisi de `c3327e1fd59e3775ff8ae07a52b9a6b1141124e1`; senkron|
| GitHub default / production branch |`master`|
| Güncel GitHub master |`b8c38de99330def9182eb9c837d8b8f52d1a38e5`|
| GitHub main |Branch listesinde yok; workflow main filtresi bulunması branch'in var olduğu anlamına gelmez|
| Son başarılı Pages run |[38187511219](https://github.com/YsKara0/BayesSoft_website/actions/runs/38187511219), master, aynı `b8c38de…`; build ve deploy job'ları success|
| Son deployment |7003855534 / github-pages / aynı SHA / success|
| Production sonradan ilerlemiş mi? |Kontrol anında masterHEAD son başarılı deploySHA'sıyla aynı; daha yeni production commit/deployment görülmedi|
| Yerel master / origin/master |Sırasıyla `721d211…` / `e49970d…`; güncelproduction değildir. Bu görevde fetch/ref güncellemesi yapılmadı|
| Canlı URL |`https://bayessoft.com.tr/` HEAD200; CNAME ve canonical aynı domain. Deployment environment_url geçmişte `http://bayessoft.com.tr/` olarak kayıtlı|

Gözlenen gerçek yayın yolu GitHub Actions `pages.yml` → Ubuntu/Node22/npmci → build → Pagesartifact → deploy-pages. Son başarılı master workflow'u bu mekanizmayı kullanıyor. Pages Settings API'si anonim istekte404 döndü; admin Settings/build_type/HTTPS/environment protection ayarları bu oturumda bağımsız teyit edilemedi. Actions deployment başarısı ve kaynak workflow gözlemi, erişilemeyen Settings yanıtı yerine uydurulmuş ayar bilgisi sayılmadı.

Mevcut ve RC Pages tetikleyicileri `main/master` push + manualdispatch. Featurepush yalnız release-validation çalıştırır. `pages:write/id-token:write` yalnız Pages yayınına ait; validation yalnız contentsread. Master'a push, build geçerse canlıyayını **otomatik** başlatır; merge/push'u “henüz deploy değil” diye değerlendirmeyin.

## 2. Gerçek Ubuntu CI kanıtı

[Validate BayesSoft release candidate #2 — run38792754250](https://github.com/YsKara0/BayesSoft_website/actions/runs/38792754250), **head_sha `c3327e1fd59e3775ff8ae07a52b9a6b1141124e1`**, success. [validate job116621237636](https://github.com/YsKara0/BayesSoft_website/actions/runs/38792754250/job/116621237636), runnergroup GitHub Actions, labels ubuntu-latest. API adım sonuçları:

| Adım | Sonuç |
|---|---|
| Checkout (RC workflow fetch-depth0) |success|
| Setup Node22 |success|
| Install locked dependencies / npmci |success|
| TypeScript |success|
| Lint release sources |success|
| Foundation / translations / project data / negative isolation fixtures |success|
| Build isolated production site |success|
| Verify production export |success|
| Production routes / denied prototype URLs |success|

025'in shallowhistory engeli bu SHA için kapanmıştır. Yeşil ikon yerine jobs/steps API incelendi. Tam joblog indirme403 döndü; Node minor/patch sürümü, CI artifact dosya manifesti veya npmci audit sayılarını logdan doğruladığımız iddia edilmez. Major22, RC workflow ayarı ve başarılı SetupNode22 adımıyla teyitlidir. Validation artifact yüklemiyor; repo ve sonproductionrun artifact listeleri0. Bu preflight'ta test/build/browser matrisi yeniden çalıştırılmadı.

**Yeşil CI yeterli değil:** mevcut verifier sadece belirli prototype yol adlarını ve bağımlılık desenlerini denetliyor; aşağıdaki genericpath kaçağı kapsam dışında kalmış.

## 3. BLOCKER B-026-01 — Prototipe özel MP4 export'a giriyor

`app/prototype/spatial-hero/route.ts:64` dosyası `/videos/bayessoft-spatial-motion-v1.mp4` kullanıyor. `app/components/lib/data/prototypes/scripts` kaynak taramasında bu videonun tek referansı o prototip rotası; React homepage bunu kullanmıyor.

- RC Git ağacında `public/videos/bayessoft-spatial-motion-v1.mp4` **3.647.493byte** ve productionbranch'e göre yeni bir dosya.
- `build-production.mjs` bütün public'i kopyalarken yalnız `public/prototype-assets` altını dışlıyor. `public/videos` içindeki bu dosya kalıyor.
- Aynı app/build kaynaklarından önceki yerel productionout'ta `out/videos/bayessoft-spatial-motion-v1.mp4` mevcut. Kaynak/output SHA256 ikisi de `193d3bb4f043796f6d4fbf2a1775b0e613955ff9c6d62f7d12b14d14edafb338`.
- `verify-production-export.mjs` yalnız prototype/prototype-assets isimlerini eşlediğinden bu genericvideo yolunu reddetmiyor. HTTPchecker'ın yasak URL listesinde de bu dosya yok.

Bu, prototipe özel assetlerin productionartifact dışında kalması gereksinimini ihlal eder. TamCIartifact indirilemedi; bytekanıtı önceki yerelout'tandır. Bununla birlikte RC'de aynı publicdosyası/kopyalama kuralı bulunması ve build girdilerinde sonyerelbuild'den beri app/build değişikliği olmaması kaçağı kaynak seviyesinde de gösterir. Önceki “0prototypeartifact” raporları yalnız mevcut verifier kapsamındaki başarılı sonucu gösterir; bu yeni semantik bulguyu kapatmaz.

**Yayın öncesi gereken ayrı uygulama işi:** Kaynağı/yerelprototipi silmeden bu prototipözelvideoyu productionkopyasından dışlamak; aynıdosya için verifier negatiffixture ve productionHTTP404 kontrolünü eklemek. Diğer genericpublic prototipassetleri için dar envanter kontrolü yapıp yeniRC üzerinde UbuntuCI geçmek. Bu görevde kod düzeltilmedi, build/run yapılmadı; `c3327e1` mevcut haliyle yayınlanmamalı. Tasarım veya Safari çözümünün değiştirilmesi gerekmiyor.

## 4. Production / RC farkı ve çatışma değerlendirmesi

GitHubcompare: **diverged**, RCahead5 / behind1. Ortak ata `efcef2c9d3d3cd6ca22e85328cfe87ccfb6bd18d`; production'daki tek ekcommit #12merge commit'i. Production'ın gerçektreeSHA'sı `088c7f82e8f445dd1fa28457a39920664d0db711`, ortakatanın treeSHA'sıyla **aynı**; recursivebloblistesi de0fark. RCtree `19ef98ac019748064a791bc1b81ebffd83890f98`.

Dolayısıyla mevcutmaster'ın ortakatanın üstünde RC'ye taşınması gereken ek kaynak değişikliği yok. Standart kontrollümerge'de conflict beklenmiyor ve sonuçRCtree olmalı. **Merge/dry-run uygulanmadı**; gerçek merge sırasında treeeşitliği zorunlu gate, gelecekte master ilerlerse analiz yenilenir. Yerelde güncelmastercommit nesnesi yoktu; stale origin/master'a dayanarak yanlışatalık sonucu verilmedi. GitHub kaynak/treemetadata ile incelendi; asılrepo fetch edilmedi.

Doğrudan production/RC tree farkı **483dosya:474ekleme,9değişiklik,0silme**. Tam liste `production-candidate-files.txt`:
- Root `/`: yeni ReactSpatialHero/SelectedProjects/References/Services/Contact; SiteChrome yalnız root'ta yeniheader/footer sağlar, içrotalarda eskichrome korunur. Çalışmayaklaşımı homepage'e dönmez.
- AppRouterlayout: localInstrumentSans + scopedhomepageCSS/SiteChrome; metadata tabanı korunur. TR/EN/DE tekLanguageProvider/homepagenamespace; URLprefix/redirectmotoru eklenmedi, dil browser/storage tercihiyle aynıURL'de kalır.
- Nextconfig **birebir aynı**: outputexport/unoptimizedimages, basePath/assetPrefix yok. Customdomainroot için absoluteassetURL'leri mevcut mekanizmayla uyumlu; bu yayın bir github.ioaltklasörüne taşınma değildir.
- `public/CNAME`, robots/sitemap, data/config/seo, projectDetails/site ve globalsCSS hash'leri production ile aynı. Canonical/OG/siteURL `https://bayessoft.com.tr`; mevcut13sitemaprota korunur. Reviel/Metek null-detail olarak kalır; sahtecaseURL yok.
- Statik404 Next export404.html ile; kaynakta SPA200rewrite yok. Nextserver/redirectmiddleware'a güvenilmez. Yayın sonrası `/projeler/<slug>` ve bilinmeyenURL gerçek404 smoke zorunlu.
- package/lock Next15.5.28/PostCSSpatch/Three gibi onaylı entegrasyon bağımlılıklarını içerir. `npmrunbuild` rawnextbuild'den isolatedwrapper'a; Pagesverify yalnız indexvarlığı kontrolünden gerçekexportverifier'a değişir.
- Git ağacına prototipkaynakları,32prototypesdosyası,272aktifvaultbelgesi/kanıtı ve **30öncedenRC'decommit edilmiş bayes3.0 arşivdosyası** da gelir. Bunlar wrapper'ın buildroot listesinde yoktur. Yereluntrackedeski3.0/4.0/.obsidian/MOV/harnessler merge'e dahil değildir. Master'a RC dışında dosya taşımayı önlemek için mevcut çalışma ağacı değil, onaylıtamSHA merge edilir; RC içindeki bu tarihselGitkapsamı açıkça bilinmelidir.
- Trackedpath envanterinde `.env.example` ismi var; içeriği okunmadı. Gerçek.env/kişisel.obsidian/node_modules/out tracked değil. Wrapper.envadlarını dışlar. Bu preflight kapsamlısecretscan veya CIartifactbyteaudit değildir.

**Büyükasset bulgusu:** Öncekiyerelout686dosya/**117.707.648byte**; bunun99.242.672byte'ı11MP4. Legacy/tekrarlıpublicvideoların çoğu production'da zaten var; yeni3.647.493byteprototipvideo yukarıdaki blocker. PublicPNGposterorijinalleri deout'a giriyor; yeniUI sadece optimizeWebP'lere başvurur. Bu envanter CIartifact boyutu diye sunulmaz. Gereksizlegacydosya azaltımı ayrıiyileştirme, kaynaklar silinmedi.

## 5. Yayın yöntemi seçimi

| Yöntem | Değerlendirme |
|---|---|
| A — Kontrollüfeature→mastermerge |**Önerilen**, blocker kapandıktan/yeniRC CI geçtikten sonra. Productiontree=mergebase olduğundan ekintegrationbranch gerekli değil; ayrıtemizworkspace'te exactSHAmerge/treegate yeterli|
| B — Ayrırelease/integrationbranch |Şimdi gereksiz ek süreç. Mevcutvalidationjob yalnızfeature ref'inde çalışır; başka branch'te otomatikCI geçti varsayılamaz. Production ilerler/gerçekconflict çıkarsa yeniintegrationref ve onunCIstratejisi ayrıca yetkilendirilmeli|

Pages, featureCIout'unu yayınlamaz: mastermergeSHA'sında Node22/npmci ile **yeniden** build eder; ojob'un doğrulanmış `out/` dizinini `github-pages` artifact'ine yükleyip deploy eder. RC ve Pagespublicenv ifadeleri birebir aynı; gerçekrepositoryCONTACT_API_URLvar değeri buoturumda okunmadı, fallbackaynı. Node22patch/npm/fontağı/vars zamanla değişebileceğinden **source tree eşitliği byte-identical artifact garantisi değildir**. Pagesbuild/verify/upload/deploy sonuçları, headSHA ve gerçekartifactID/digest ayrıca kaydedilmeli. Validationpermissionsreadonly; Pagesworkflow permissions ve github-pages environment ayrı kalır.

### Yalnız ayrı yayın onayından sonra uygulanacak komut şablonu

**Şimdi çalıştırılmadı. B-026-01 kapanmadan kullanmayın.** `RC_SHA`, izolasyon düzeltmesi sonrası yenionaylı/CIbaşarılıtamSHA olmalıdır; mevcutc3327e1BLOCKED'dır. Güncelproduction farklıysa durun.

```sh
PROD_SHA=b8c38de99330def9182eb9c837d8b8f52d1a38e5
RC_SHA="YENI_ONAYLI_CI_BASARILI_TAM_SHA"
git clone --branch master https://github.com/YsKara0/BayesSoft_website.git /private/tmp/bayessoft-release-review
cd /private/tmp/bayessoft-release-review
git fetch origin master feature/bayessoft-3.0-plus
test "$(git rev-parse origin/master)" = "$PROD_SHA"
test "$(git rev-parse origin/feature/bayessoft-3.0-plus)" = "$RC_SHA"
```

Önerilen backupreferansı: `pre-bs3p-3plus-b8c38de`. Oluşturulmadı. Onay sonrası önce aynıisimli tagvarsa hedefini kontrol edin; farklıhedefi zorlaezmeyin. Yoksa:

```sh
git tag -a pre-bs3p-3plus-b8c38de "$PROD_SHA" -m "Production before BayesSoft 3.0+"
git push origin refs/tags/pre-bs3p-3plus-b8c38de
git merge --no-ff --no-commit "$RC_SHA"
test "$(git write-tree)" = "$(git rev-parse "${RC_SHA}^{tree}")"
git diff --cached --stat
```

Conflict veya treefarkında **durun**, otomatikours/theirs seçmeyin. Onaylıkapsam ve eşitlik sağlanınca:

```sh
git commit -m "release: integrate BayesSoft 3.0+ homepage"
RELEASE_SHA="$(git rev-parse HEAD)"
test "$(git rev-parse HEAD^{tree})" = "$(git rev-parse "${RC_SHA}^{tree}")"
git push origin master
```

Sonkomut otomatikPagesyayını başlatır. Forcepush yok; remoteilerlemişse normalpushreddi aşılmadan yenidenpreflight yapılmalı. MergecommitSHA CI'nınRC_SHA'sından farklıdır; ağaçlaraynıolmalı. Pagesrun.head_sha **RELEASE_SHA** olmalı. Buşablon tekbir açıkpublicationonayı altında yapılacak gelecekişi tarifler; bupreflight yetkisi değildir.

## 6. Rollback — kaynak var, indirilebilir eskiartifact yok

Soniyi **tamSHA `b8c38de99330def9182eb9c837d8b8f52d1a38e5`**; önerilentag yukarıda. Gitref sadecekaynağı korur, deployartifactyedeklemez. Eskiartifactlistesi0; Pagesdeploygeçmişi/APIstatus kayıtları eskioutdosyalarını geri vermiyor. [GitHub Pages customworkflow belgesi](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) buildartifact→deploy bağımlılığını tanımlar; geçmişkayıt var diye tekbuton/byte-identicalrollback imkânı varsayılmaz.

Eski başarılırun'ı tekrar çalıştırmak veya oldSHAmanualdispatch yapmak **eskiworkflow/package/buildgüvenliği** ile rebuild eder; mevcutizolasyon/securitygates'i taşıdığı varsayılamaz. Doğrudan rawrevert/reset/forcepush önerilmez.

Yayınöncesi hazırlık: soniyiSHA/tag ve sourcearchive; mümkünse yeni ve önceki doğrulanmışartifact'leri erişilebilir kalıcıyerde manifest/digest/publicconfig ile saklama sorumlusu belirlenmeli. Eskiartifact bulunmadığı için **eski site + güncel güvenli build/lock/izolasyon kapıları** içeren ayrı rollbackcandidate sourceworkspace'i hazırlanıp onaylıgörevde build/smoke edilmeden hızlısourcefallback garanti edilemez. Bu prova bu görevde yapılmadı; rollbackriskkabulü ayrı gereklidir.

Müdahale sırası:
1. Yeni yayında sorun görülürse releaseSHA/run/artifact ve hata kaydını koruyun; yeni yayınları durdurun.
2. Hazır/manifesteşleşenöncekiartifact varsa uygun yetkili deployment yöntemiyle onu kullanın. Şuanda erişilebilir değildir.
3. Yoksa ayrı incelenmişrollbackref'te eski görsel/sitekaynaklarını güvenli foundation/build/lock ve B-026-01düzeltmesiyle birleştirin; Node22npmci,TS/lint/build/verifier/prototypeHTTP404 ve kısaSafari/Chromium/locale/link/SEO smoke geçsin. Yeniartifact üretip hash/ref kaydedin.
4. Ayrırollbackonayından sonra `gh workflow run pages.yml --repo YsKara0/BayesSoft_website --ref <reviewed-rollback-ref>` örnekkomutuyla kontrollü yayın yapılabilir. gh buoturumda kullanılmadı; environmentbranchpolicy/Pages Settings/ref erişimi yetkili kişi tarafından önceden teyit edilmeli.
5. Rolbacksonrası root/header/projeler/motion/locale, içdetay/liveCTA, canonical/sitemap/robots/favicon/404 ve prototypeyolları **ve genericvideoURL404** smoke edilir.

**CDN/cache:** Saltokunur HEAD ölçümünde serverCloudflare, Cache-Control max-age600, Last-Modified2026-10-12; HTTPSroot200. HTTProot da200 ve zorunluHTTPSredirect gözlenmedi. Bu değerler tekcevabın görünümüdür; tümCDN/objectTTL veya purge garantisi değildir. Yeni/eskihashedNexthunkları yanında sabitadlıposter/font/video/HTML cache'i karışabilir. Yayın/rollback sonrası normalveönbelleksiz/yenioturum erişimini,networkURL/hash/responsehead'lerini karşılaştırın; gerekiyorsa yetkiliCloudflarepurge ayrıonayla yapılmalı. Eskiartifact'i kontrol etmeden direktCDNcachetemizliği çözüm sayılmaz.

## 7. Regresyon ve güvenlik değerlendirmesi

| Sınıf | Bulgu |
|---|---|
| **BLOCKER** |B-026-01: yalnızprototipte kullanılan MP4 genericpublicyoldanexport'a giriyor; verifierfalse-negative. Ayrıminimalfix/yeniRC/CI gerekir|
| DOĞRULANDI |GerçekSafari galeri/motion ve normalrootrefresh/#herodavranışı kullanıcı023B/Ckabulüyle kapalı|
| DOĞRULANDI |CI#2 gerçekUbuntu/npmci/Node22/TS/lint/foundation/build/routekontrolleri exactc332SHA'da geçti|
| ÖNEMLİ |Önceki024Chromiumdesktop/mobile,3dil,realInstrumentSans,projelinkleri,pausepersist/reduced kayıtları mevcut; bupreflight yeniQA yapmadı|
| ÖNEMLİ |021audit10high/3moderatedev-build ve öncekiprod0 tarihsel; package/lock024–RCaynı, yeni audit yapılmadı. CIinstallgeçmesi vulnyok demek değildir. StatikPagesNode/npmserver çalıştırmaz; buildchainriskleri sürer|
| ÖNEMLİ |Eskiartifact0/sourcefallbackprovasız; mevcutSettings/envbranchpolicy anonimteyidi yok; yeniPagesartifact/context ayrıca kontrol edilmeli|
| İYİLEŞTİRME |020tekpair mobilLCP7.964→3.148s; güncelsaha/RCperformansölçümü değil. WebPlarge681612B/small329188B; publicorijinaller/legacyvideo artifactboyutunu şişiriyor|
| İYİLEŞTİRME |TamSafari/SR/gerçekcihaz/fieldperf kapsamı, Reviel/Metekdetaycase ve yasal içerik kararları ayrı. SahtecaseURLgösterilmiyor; mevcutbağlantımodeli korunur|

## 8. Release günü kısa checklist — şimdi uygulanmaz

1. B-026-01 için ayrıminimaldüzeltme/onaylıyeniRC; exactSHA'da başarılıUbuntuCI; güncelmaster/Pages/vars ve rollbackhazırlığını yeniden doğrulayın.
2. Açıkproductionyayınonayı alın; soniyiSHA/tag/sourcebackup ve artifactmanifest/saklama sorumlusunu kaydedin.
3. Ayrıtemizreleaseworkspace'te pinlenmişRC'yi güncelmaster'a kontrollümerge edin; conflict/treegate geçmedencommit/push yapmayın.
4. Masterpushsonrası Pagesrun.head_sha/Build→Verify→Upload→Deploy sonucunu izleyin; gerçekartifactID/digest/deployURL kaydedin.
5. Canlıroot,13route,canonical/sitemap/robots/favicon/404; `/prototype/*`, `/prototype-assets/*` **ve `/videos/bayessoft-spatial-motion-v1.mp4`404** smoke yapın.
6. Safari ve Chromiumdesktop/mobile, FurtherUp→Reviel→Metek/poster-CTA,TR/EN/DE/pause/reduced,rootrefresh/hash/geriileri ve cachekarışmasını kısaca kontrol edin.
7. Kritik hata varsa yukarıdaki onaylırollbackprosedürünü işletin; sonra aynısmoke'u tekrarlayın.
8. GerçekreleaseSHA/RC_SHA/run/artifact/rollbacksonuçlarını Obsidian'a kaydedip kapanış alın.

## Kanıtlar / görev sınırı

`07-Reviews/evidence/BS3P-026/`: github-readonly.json (run/jobs/branches/deployments), github-comparison.json (trees/compare/prodconfig), tree-difference.json, production-candidate-files.txt, readonly-http.json, asset-and-source-review.json, preflight-summary.json. Bunlar saltokunurGET ve varolanyerelkaynak/artifact envanteridir; gerçekCIartifactdownload yok.

Yalnız026rapor/task/decision/review/current/next/session/günlük kayıtları güncellendi. Eski025kanıtları ve kişiseluntrackedveriler korunur. **Staging/commit/push/merge/deploy/tag/branchdeğişimi ve application/tasarım/workflow düzeltmesi yapılmadı.** Mevcutc332RCiçin karar **BLOCKED**; ayrıdüzeltme ve ayrıca açıkproductionyayınonayı beklenir.
