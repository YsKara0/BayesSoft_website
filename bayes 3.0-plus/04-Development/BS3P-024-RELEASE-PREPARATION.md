# BS3P-024 — Release Preparation

**Tarih:** 2026-10-15  
**Durum:** PREPARED — staging hazır; commit/push ve gerçek Ubuntu CI onayı beklenir.  
**Branch / HEAD:** `feature/bayessoft-3.0-plus` / `02739d112d65dbb6fc420eadd6611ff701415561`.

## Safari kabulü ve kaynak kapsamı

Kullanıcı gerçek macOS Safari'de **023B ve023C'yi kabul etti**: posterler görünür, silindirik galeri animasyonu doğru, normal `/` refresh konumu korunuyor; `#hero`82px kaydırması doğal fragment davranışı. Başka görünür hata bildirilmedi. Önceki otomasyon sınırlamaları tarihsel kayıtlarda korunur; kullanıcı kabulü bunların yerine uydurulmuş test sonucu eklemek değildir.

Kabul edilen dört uygulama dosyası:
- `components/homepage/GalleryStage.tsx`: ortak sıfırboyutlu SVGsymbol/use yerine her mevcut dilimde doğrudan `<image>`. AynıviewBox/overscan/oran/lazy640–1080WebP.
- `components/homepage/homepage.css`: yalnız `data-renderer=projected-surfaces` altındaki WebKitcompatCSS.
- `lib/homepage/gallery/stage.ts`: mevcut WAAPI1040/700ms ve lifecycle'a adaptör bağlantısı.
- `lib/homepage/gallery/webkit-surfaces.ts`: aynı silindir dönüşümlerini yapraklara uygulayan, geçiş sırasında çalışan adaptör/cleanup.

023'ün tek başına projection adaptörü gerçekSafari boşluğunu çözmemişti.023B aynı adaptörün üstünde SVGboyama yolunu düzeltti. Son kabul **ikisinin birleşimine** aittir. CSShack temizliği/3Dyenidentasarım yapılmadı.023C yalnız teşhistir; unconditional scrollTo/fixedheader eklenmedi. Bu görevde dört kabul edilmiş kaynak, pages.yml ve package/lock hash'leri başlangıç/son eşit.

## Deploy içermeyen Ubuntu CI

Yeni `.github/workflows/release-validation.yml`:
- `ubuntu-latest`, Node22, `npm ci`, TS, hedefli lint, foundation3dil/proje/negativefixtures, isolatedproductionbuild, exportverifier, gerçekHTTPprototype404 kontrolleri.
- Yalnız `feature/bayessoft-3.0-plus` push'u; workflow_dispatch tanımlı, job aynıref'e kilitli. İlk onaylı featurepush otomatik tetikler; manuelworkflow UI erişimi GitHub'ın defaultbranch workflow keşfine bağlı olabilir.
- Yalnız `contents: read`; deploy/upload-pages-artifact/publish/id-token/pageswrite adımı yok. `pages.yml` aynen korundu; main/masterpush otomatikyayın davranışı değişmedi.
- `scripts/check-production-access.mjs --production-only` seçeneği eklendi: CI için devserver açmadan aynı staticorigin200/404 kontrolleri. Varsayılan dev+prod sözleşmesi korunur ve iki mod da yerelde geçti.

YAMLparse ve branch/permission/Node/install/deployolmaması kontrolleri geçti. actionlint çalıştırılmadı. **Gerçek GitHub-hosted Ubuntu koşusu: NOT RUN.** Workflow push edilmedi/tetiklenmedi; yeni commit yok. Yerel Dockercli var, socket erişiminden sonra izinli kontrolde daemonun çalışmadığı görüldü; Dockerbaşlatma/kurulum/temizLinuxnpmci yapılmadı. Yerel macOS Node22 başarısı UbuntuCI yerine sayılmaz.

## Son hedefli kontroller

| Kontrol | Sonuç |
|---|---|
| Node22.23.3macOSARM64 TypeScript/hedeflint |PASS|
| Foundation/TR-EN-DE/proje/negatifizolasyonfixture |PASS|
| Yeni isolatedproductionbuild |PASS|
| Exportverifier |686file / 0prototypeartifact / 0prototypedependency|
| Production-only ve varsayılan dev+prod HTTPkontrol |PASS; production10yasakvaryant404, mevcutrotalar200, dev6prototype+asset200|
| Chromium kısa regresyon |TR/EN/DE, pause/locale/reload/resume, üçproje/safelinks, InstrumentSans gerçekrenderedfont, rootrefresh0,13sitemaproute200/canonical/robots/404, mobilDEmenüEscape/taşma0 geçti|
| Reduced-motion |İlk combinedharness aria-disabled değerini Reacteffectöncesi okudu; yalnız hedeflikontrolde hazırdurumbeklenince true/pausedtrue/marqueenone. İlk hamhata saklandı; appfix yapılmadı|
| Safari galeri/scroll |Kullanıcının açık023B–Ckabulü esas; bu görevde nativeSafari QA tekrarlanmadı|

GenişgörselQA/video/performansmatrisi yok. ÜçWebPisteği/oran ve kaynak/motionkoruması önceki023Bkanıtlarıyla birlikte incelendi. Reviel/Metek detaynull; gerçekcanlılinkler, FurtherUp gerçekdetay/canlı korunur.

## Rollback ve yayın runbook'u

Saltokunur publicGitHubAPI buoturumda yeniden doğrulandı:
- Sonbaşarılı Pages: **master / b8c38de99330def9182eb9c837d8b8f52d1a38e5**, [run38187511219](https://github.com/YsKara0/BayesSoft_website/actions/runs/38187511219), success/2026-10-12T00:19:59Z. MasterHEADaynı. Bu, deploymentworkflow başarısıdır; canlıdomain/CDNbyteları bu görevde sorgulanmadı.
- SonGitHubcheckpoint: **02739d112d65dbb6fc420eadd6611ff701415561** publicAPI ile teyitli. Bu RCcheckpoint soncanlıSHA değildir.
- **Yeni RCcommit: henüz yok.** Stagedtree commit değildir; gerçekyeniSHA ancak açıkcommitonayından sonra kaydedilebilir.
- Repositoryartifactlistesi **0**. Eskiindirilebilirartifact yok; byte-identical tekadımlırollback hazır değildir.

Önerilen yayın sırası (bu görevde uygulanmadı):
1. Kullanıcı stagedkapsamı inceler; ayrı commit/pushonayından sonra featurebranch'de gerçekRC_SHA oluşturulur. Yeni CI aynıSHAüzerinde Ubuntu/npmci/TS/lint/build/isolasyon geçmelidir. BaşarısızCIyayınengeli olur.
2. CIbaşarısı ve açık yayınonayı sonrası incelenen kaynak defaultproductionbranch **master**'a alınabilir. Merge/push bu görevde yetkili değildir; masterpush mevcutPagesworkflow'unu otomatik tetikler. Deploy kaynağı incelenmiş masterSHA olacaktır; featureCI ağacıyla eşleşmesi kontrol edilir. Manualdispatch de deploy yapar, doğrulama workflow'u diye kullanılmaz.
3. **Yayınlanacak artifact:** `pages.yml` buildjob'unda bu releaseSHA/lock/publicenv ile yeniden üretilmiş ve verifier'dan geçmiş **`out/`**, `upload-pages-artifact` ile `github-pages` artifact'i; ardından deploy-pages. Yereldekiout veya deployiçermeyenCI'nın ephemeralout'u doğrudanyayın değildir. ArtifactID/digest/gerçekRC_SHA şimdi bilinmiyor; yayın aşamasında kaydedilmeli.
4. Yayın adımından önce doğrulanmış sourceSHA, Pagesrun/commit, publicconfig, lockhash ve yayınlanacakout SHA256manifest'i; mümkünse indirilen aynı deployartifact'i kalıcı ve erişilebilir yedekte tutulmalı.024candidate-artifact-sha256.json **yerel yenicandidateout** manifest'idir, eskiyayınınbackup'ı değildir. Git'te generatedout yok.

Hata halinde (ayrı açık rollbackonayıyla):
1. Arızalırelease SHA/run/artifact bilgisini koru; art arda yayın yapma. Uygunsa saklanmış **önceki doğrulanmış** artifact ve eşleşenmanifest'i kullan. Şuanda eskiartifact erişimi olmadığından bu yol garanti edilemez.
2. Sourcefallback için izoleworkspace'te `b8c38de…` eskihomepagekaynaklarını referans al; mevcut güvenli Next/lockpatch'leri ve018Aprototypebuildizolasyonu/verifier'ını koruyan **incelenmiş rollbackref** hazırla. Körlemesine eskiSHA'yıdeploy/rerun etmek prototip veya eski güvenlikrisklerini geri getirebilir; canlıbranch resetleme önerilmez.
3. Güncelgüvenliscripts sözleşmesiyle rollbackcandidate'de Node22 `npm ci`, `npm run typecheck`, hedeflint, `npm run build`, `npm run verify:production`, `node scripts/check-production-access.mjs --production-only`; ana sayfa/SEO/13detayrota/link/motion/locale ve Safari kısa kontrollerini geç. Kaynakta baselinecommitvar diye bu testlerin geçmiş olduğu varsayılmaz.
4. Ayrı rollback/yayınonayından sonra incelenmiş ve uzakta bulunan ref için komutşablonu: `gh workflow run pages.yml --repo YsKara0/BayesSoft_website --ref <reviewed-rollback-ref>`. Bu ortamda gh yok; komut çalıştırılmadı. Mevcut Pages izin/environmentkısıtları ve gerekli ref workflow erişimi önceden kontrol edilmeli.
5. Deploysonrası yetkili kişi root/header/galeri/TR-EN-DE/motion, gerçekprojelinkleri, metadata/canonical/sitemap/robots/favicon/404 ve `/prototype/*`/asset404'ü; beklenencommit/artifacteşleşmesini tekrar kontrol eder.

**Cache/CDN:** Bu görev canlıHTTPheader/CDNTTL/invalidation kontrolü yapmadı. Sayısal TTL veya anındapurgedgarantisi yok. AssetlerNexthash'leriyle versiyonlense de HTML/browser/CDN eskiiçerik sunabilir. Yetkiliyayın sonrası normalveönbelleksiz/yenioturum gözlemi, networkassetURL/hash ve rolloutdurumu karşılaştırılmalı. Aynı kontrol rollbacksonrasında da yapılmalı; Safari'de `/#hero` fragmentkonumu eskiyayınsanılmamalı. Cachetemizliği sunucu/hesapmutasyonu gerektirirse ayrıca yetki gerekir.

## Staging ve önerilen commit

**Kapsam:**90dosya =4galeri kaynağı+2CI/testaltyapısı+11rapor/log+73kanıt/manifest.185ilgisiz kullanıcı/harnessdosyası ve1yerel024başlangıçsnapshot'ı staging dışında; ignoredgenerated/secretdosyalar ayrıca dışarıda.

Tam stagedliste: [[../07-Reviews/evidence/BS3P-024/checkpoint-file-list|checkpoint-file-list]]. Denetimsonucu: `staging-checks.json`; diffstat `staged-stat.txt`. Yalnız023/023B/023C/024 kaynakları ve ilgili belge/kanıtlar açıkpathlistesiyle seçildi; gitadddot yok. Eski3.0/4.0kasalar, kişisel.obsidian,referansMOV,logo denemeleri,020/021geçiciharnessler,ignoredout/node_modules/.env dosyaları eklenmedi. Önceki testkanıtlarını tutmak geçiciharnessscriptlerini commit etmek değildir; .cjs/.py testçalıştırıcıları listede yok.

**Index denetimi:**90path allowlist ile aynı;100644mode;bilinensecretpattern0/yasakpath0. Bu, sınırlı çevrimdışıkalıptaramasıdır; kapsamlısecretgarantisi değildir. `git diff --cached --check`exit2/**15uyarı**:6Markdownhardbreak ve9hamBuildlogsatırsonu. Uygulamakodunda whitespaceuyarısıyok; tarihselhamkanıt/intentionalMDformat korunur. Sonindex-worktreeeşitliği ayrıca doğrulandı.

**Önerilen mesaj:** `fix: ensure Safari compatibility for BayesSoft project gallery`

## Açık koşullar

- **YAYIN KAPISI:** GerçekUbuntu22/temiznpmci henüz koşmadı. Workflowhazırlamaktestbaşarısı değildir; onaylıpush sonrası başarılıkoşugerekir.
- **RİSK KABULÜ GEREKİR:** İndirilebilireskiartifact yok; sourcefallbackprovası yapılmadı. Yeniartifactkalıcısaklama/yetkilirollbacksorumlusu yayınöncesi belirlenmeli.
- **ÖNEMLİ:**021'de10high/3moderatedev-buildaudit vardı; package/lock değişmedi, buoturumda audittekrarlanmadı. Önceki prod0 sonucu güncelyeniaudit diye sunulmaz. Darpatchtakibi/kullanıcı riskkabulü ayrı kalır.
- **İYİLEŞTİRME:**Build-timeGoogleFonts ağbağımlılığı, gerçekcihaz/tamSafari/SR/fieldperformans ve eksikReviel-Metekcase/yasaliçerik kararları ayrı takip. Bu görev yeniözellik veya koşulsuzREADYkararı üretmez.

Uygulama tasarımı değiştirilmedi. **Commit/push/merge/deploy yok; stagedsonuç kullanıcıonayı bekler.** Canlısunucuya/yayına dokunulmadı; GitHub'a yalnızmetadataGET yapıldı.
