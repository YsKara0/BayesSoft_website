# CURRENT STATUS — 2026-10-16 BS3P-029C Mac / Windows birleşimi

**Durum:** Kayıt birleştirme tamamlandı; hero için doğrulanmış kalıcı çözüm yok.
**Gerçek yerel branch / HEAD:** `fix/bs3p-029-hero-sharpness` / `db535966e27c53fe6095fe2760f520e163fcb033`.
**Kaynaklar:** Mac stash `68ddf86945e64f306c5ef49380f394efcb15a6ef`, Windows dokümantasyon commit’i `562d770a08ac59795246a533c67852ffe933dd9f`, mevcut çalışma ağacı.
**Teslim:** [[../04-Development/BS3P-029C-OBSIDIAN-RECORD-MERGE]].
- Mac 026/029 geçmişi ile Windows 029B raporu/logları birleştirildi. Windows kararının eski D-034 kimliği D-036 olarak eşlendi; Mac D-034/D-035 korunur.
- Kullanıcının Windows ölçümü: innerWidth 1487, DPR 1, yaklaşık764×478 CSS /764×477 backing. Bu oturumda DPR1,5 sınırı neden değildir; artırılmayacak. Windows A/B’de B/C/D/E için belirgin tutarlı netlik kazancı yok; küçük HTML metni + affine projeksiyon hâlâ hipotezdir. Mevcut A korunur.
- Mac’in sonraki salt okunur incelemesi: yazılar HTML overlay; PMREM 0,045 uyarısı ortam haritasında22→20 örnek sınırından gelir. Global blur veya metin texture’ı değil; kullanıcı bulanıklığıyla nedensel bağ kanıtlanmadı.
- Mac029’da kayıtlı canlı db53596/Pages38798593922 ve CI#2 c332 başarı bilgisi tarihsel kanıttır; bu birleştirmede GitHub/canlı/CI yeniden sorgulanmadı. Windows c332 HEAD’i araştırmanın kaynak SHA’sıdır, mevcut Mac HEAD’i değildir.
- Windows raporu commit ile birebir aynı. Bağlı `06-Evidence/BS3P-029B/` yerelde yok; görseller/JSON/scriptler bu oturumda doğrulanamadı. Mac rapor/kanıtları ve026raporu korunur.
- Yalnız Markdown kayıtları değişti; uygulama/CSS/Safari galerisi/asset/workflow değişmedi. Stash/index/branch/HEAD korundu; staging, commit, push, Git merge ve deploy yok. Yeni browser/build/QA yapılmadı.

## Tarihsel Mac anlık görüntüsü — sonraki Windows bulguları üstte özetlendi

### CURRENT STATUS — 2026-10-15 BS3P-029 Live Hero Sharpness

**Durum:** DIAGNOSED — gerçekWindowsDPR/zoom teyidi beklenir; appfix yapılmadı.
**Branch / HEAD:** `fix/bs3p-029-hero-sharpness` / `db535966e27c53fe6095fe2760f520e163fcb033`.
**Teslim:** [[../04-Development/BS3P-029-LIVE-HERO-SHARPNESS]].
- Canlımasterdb53596/Pages38798593922successAPIteyitli; site artık3.0+yayında. Önceki026preflightnotları aşağıda tarihsel; buoturumyayın yapmadı. Canlıtreeonaylıc332ileaynı,orijinalfeaturec332korundu. Fixbranch'de öncekiuserdirty026logları/untrackedveriler taşındı/korundu.
- Chromiumlive/local1920DPR1finalhero828×518PNG pikselfark0. StableFHD/QHDcanvas828×517, CSS828×517.5; AAtrue/MSAA4. DesktopgerçekWebGL/posterhidden;mobile390DPR3staticSVG.
- DPR1.25backing1035×646;DPR2cap1.5backing1242×776. AçıkpenceredeDPR1→2eskibacking828×517kalıyor; setPixelRatioyalnızmount'ta/resizeDPRgüncellemiyor. Bu koddavranışıkanıtlı, kullanıcınınWindowsşikâyetiyleeşleşmesihenüzkanıtlanmadı.
- Cap1.5→2pixelmaliyeti%77.84artış; gerçekWindowsGPUms/bellekmaliyetiölçülmedi. KeyfiDPR/qualityartışıveapp/CSSdeğişikliği yok. Öncelikliöneri: WindowsstaleDPRteyidinde mevcut1.5politikasını koruyarakDPRsenkronu.
- Galeriyalnızteşhis:640WebP DPR1/1.25,1080 DPR2/nominalboyutyeterli;CSS3Dresample etkisikanıtlanmadı. SafariSVGfix/galleryposter/geometri/motion veonaylıboşluklaraynı.
- AsenkronWindowsçözünürlük/ölçek/zoom/tarayıcı soruldu; cevapbeklenir. Koddeğişmediğinden yeniSafari/Windows/GPUprofil/buildQA yapılmadı.029Obsidian/kanıtgüncel; staging/commit/push/merge/deploy yok.

## Önceki BS3P-026 preflight özeti — tarihsel; site sonradan kullanıcı tarafından yayınlandı

**Karar: BLOCKED — B-026-01 prototipe özel genericpublicvideo export'a giriyor.**
**Branch / RC HEAD:** `feature/bayessoft-3.0-plus` / `c3327e1fd59e3775ff8ae07a52b9a6b1141124e1`; GitHubfeatureaynıSHA.
**Teslim:** [[../04-Development/BS3P-026-PRODUCTION-RELEASE-PREFLIGHT]].
- GerçekUbuntuCI#2/run38792754250 exactRC'de Checkout/Node22/npmci/TS/lint/foundation/build/export/HTTPisolationadımları success;025shallowhistorykapısı kapandı. Rawjoblog403, actualCIartifactlist0; minorNode/artifactbyteiddiası yok.
- GitHubmaster/sonproductiondeploy `b8c38de99330def9182eb9c837d8b8f52d1a38e5`,run38187511219/deployment7003855534success. Mainyok; defaultmaster. Yerelmaster/originmasterstale,refgüncellenmedi.
- GitHubcomparediverged5ahead/1behind; productionactualtree=mergebaseefcef2c tree. RCile483file(474A9M)fark; sourceconflictbeklenmez ama gerçekmergeyapılmadı. Kontrollümastermerge/RCtreeeşitliği önerisi; ekintegrationbranchşimdilikgereksiz.
- **B-026-01:** yalnızapp/prototype/spatial-hero/route.ts:64 kullandığı public/videos/bayessoft-spatial-motion-v1.mp4(3.647.493B) mevcutpubliccopyfilter'dankalır/öncekiout'taaynıhash; verifiergenericpath'iyakalayamaz. Ayrıminimalbuildfilter+verifier/HTTPnegativefix/yeniRC/CI gerekir; bupreflightcodefixyapmadı.
- CanlıHTTPSHEAD200/Cloudflare/maxage600; oldartifact0/sourcefallbackprovasız. PagesSettingsanonimAPI404; yetkiliayarteyidi/rollbackyedek/envbranchpolicy açık. Önceki021devsecurityveperf/cihazrisklerisürer.
- Yalnızrapor/kanıt/Obsidian güncellendi. Uygulama/workflow/tasarım/sourcebranch/ref/indexaynı; commit/push/merge/tag/deploy/branchdeğişimi yok. B-026-01kapandıktan sonra ayrıca açıkproductionyayınonayı beklenir.


## Tarihsel Windows anlık görüntüsü — araştırma sırasındaki branch / HEAD

### CURRENT STATUS — 2026-10-16 BS3P-029B Windows Hero Sharpness

**Durum:** Teşhis ve geçici A/B tamamlandı; belirgin kazanç sağlayan çözüm doğrulanmadı, kullanıcı görsel incelemesi beklenir.
**Branch / HEAD:** `feature/bayessoft-3.0-plus` / `c3327e1fd59e3775ff8ae07a52b9a6b1141124e1`; oturum başlangıcı tree/index temiz.
**Teslim:** [[../04-Development/BS3P-029B-WINDOWS-HERO-SHARPNESS]].
- Windows kurulu Chrome155 headed /1920×1080/DPR1/NVIDIA D3D11: canlı ve yerel 828×517,5 CSS /828×517 backing; panel ölçeği0,82992. Son hero karşılaştırmasında yalnız6 RGB kanal farkı/max4. Gerçek font Instrument Sans custom doğrulandı.
- Backface hidden zaten var, B fark0. Global piksel hizalama C ve zoom/inverse-matrix D/E, tutarlı belirgin netlik kazancı göstermedi. D kısa replay'de ek layout üretti; tek örnek/test observer maliyeti dahil, GPU benchmark değildir.
- 764px canvas yerelde viewport1487'de/scale0,76577; scale0,78983 viewport1511'de/788px canvas. Önceki764/0,79 çifti birlikte üretilemedi. Küçük font+affine projeksiyon güçlü hipotez; tek kesin kök neden değil.
- Kaynak uygulama/CSS/dependency/config değişmedi; yalnız rapor/kanıt/tekrar scriptleri ve kasa kayıtları. Native pencere capture onayı zaman aşımına uğradı; görüntüler gerçek Windows Chrome CDP capture. Safari/physical24inç/ClearType/genişQA kabulü yok.
- Tanı sunucusu durduruldu. Staging/commit/push/merge/deploy yok. Önceki025/CI kayıtları aşağıda tarihsel; mevcut CI/yayın durumu bu görevde yeniden doğrulanmadı.


## Ortak önceki durum — BS3P-025; CI #2 sonucu Mac026’da sonradan doğrulanmıştır

**Durum:** IMPLEMENTED / LOCAL CHECKS PASSED — commit/push onayı ve yeni UbuntuCI beklenir.
**Branch / HEAD:** `feature/bayessoft-3.0-plus` / `58099657ec0582c18f29669dbc9918697f25a4cb`.
**Teslim:** [[../04-Development/BS3P-025-UBUNTU-CI-GIT-HISTORY-FIX]].
- Kullanıcı024checkpoint'ini5809965olarak kaydetmiş; buoturumbaşında trackedtree/index temizdi. Eski024staging/02739d1kayıtları aşağıda tarihsel; buoturumcommit/push yapmadı.
- BildirilenUbuntuCI foundationgitshow1218e58hatası shallowcheckout kaynaklı. Yereldepth1barekopyadaaynıexit128; unshallow sonrasıexit0. Baseline1218e58 mevcutfeatureHEAD'in atası.
- Yalnızrelease-validation.yml checkout'a fetch-depth0eklendi. Diğerworkflowadımları/branchguard/contentsreadaynı; foundation/pages.yml/homepage/Safari/prod/prototype/package değişmedi.
- YAML/teksemantikdeğişiklik/atalık/Node22foundation/diffcheck geçti. GerçekUbuntuCI yenidenkoşmadı; yeniSHApush sonrası koşu gerekir. Eski failedrunrerun yeniworkflow'u içermez.
- 025task/session/daily/review/D-033/rapor/kanıt güncel. Untrackeduserfiles/.obsidian/eskiarşivlerkorundu; staging/commit/push/merge/deploy/forcepush/main-masterişlemi yok. Kullanıcıonayı beklenir.

## Önceki BS3P-024 durum özeti — tarihsel; checkpoint artık5809965

**Durum:** PREPARED — stagedcheckpoint kullanıcıonayı; gerçekUbuntuCIbekliyor.
**Branch / HEAD:** `feature/bayessoft-3.0-plus` / `02739d112d65dbb6fc420eadd6611ff701415561`; yeniRCcommit yok.
**Teslim:** [[../04-Development/BS3P-024-RELEASE-PREPARATION]].
- Kullanıcı023B ve023C'yi kabul etti: gerçekSafari poster/motion/normalrootrefresh doğru; #hero82 doğalfragment. Kabulnotları task/report/review'da; eski pending kayıtlar tarihseldir.
- Kabul edilen4gallerysource ve pages.yml/package/lock hash'leri korundu. Yeni deployiçermeyen feature-only Ubuntu22/npmci validationworkflow ve mevcut HTTPchecker'a --production-only eklendi; tasarım/appedit yok.
- YerelmacOSNode22TS/lint/foundation/build/ikiizolasyonmodu passed;686file0prototype. Chromiumkısadil/font/motion/links/rootscroll/mobile passed; reducedilkearlyreadkanıtı+targetedreadyconfirmation saklandı.
- GerçekGitHubUbuntu/npmci NOT RUN; Dockerdaemonçalışmıyor. Push/deployyetkisiyok; YAML/minpermissionsstatikcheckpassed gerçekrunner yerine sayılmaz.
- GitHubAPIsonPagesmasterb8c38de…/run38187511219success,masterHEADaynı; oldartifact0. Rollbacksourcefallback/provasızlık/cachekontrolönkoşulları raporda. Localcandidateoutmanifest eskiyayınbackup'ı değil.
- 90hedefdosya staging'e alındı;185user/harness+1localsnapshotdışarıda. Allowlist/mode/secretaudit uygun;15MD/rawlogwhitespaceuyarısı kaydedildi; tamliste024evidence'da. İlgisizuserfiles/.obsidian/eskiarşiv/MOV/harnesslerdışarıda. Commit/push/merge/deploy yok; kullanıcıonayı beklenir.021devsecurity/CI/rollbackkoşulları kapanmışsayılmaz.

## Önceki BS3P-023C durum özeti — tarihsel; kullanıcı artık onayladı

**Durum: PENDING USER SAFARI ACCEPTANCE** — 023C teşhisi tamamlandı; uygulama hatası doğrulanmadı, kod değişmedi.
**Branch / HEAD:** `feature/bayessoft-3.0-plus` / `02739d112d65dbb6fc420eadd6611ff701415561`.
**Teslim:** [[../04-Development/BS3P-023C-SAFARI-REFRESH-SCROLL-RESTORATION]].
- **BS3P-023B kullanıcı tarafından onaylandı/completed:** gerçekSafari posterleri ve silindirik animasyon doğru, header kaybolmuyor. Eski pending kayıtları tarihsel; kabul notu023Braporuna eklendi.
- KuruluSafari native ölçüm: hash olmayan `/` üst refresh0→0, aşağı refresh622→622, projects hash1093, geri622/ileri1093. ActiveBODY/restorationauto/hero718px sabit; uygulamadan scroll/focus çağrısı yok.
- `#hero` elle0'a alınıp yenilenince82'ye gider/headerY−52. Mevcut wordmark/AnaSayfa bufragmente bağlı; aynı mekanizma Chromium'da da görülür. Kullanıcının ilk hata anının tamURLkaydı yok, normal `/` sorunu buoturumda üretilemedi.
- Koşulsuzscroll/fixedheader/hash/historyoverride yok; 023B ve diğer tüm kaynaklar korunur. Mevcutartifactverifier686file/0prototype geçti; yeni build/TS/lint gerekmedi ve çalıştırılmadı.
- Native3020teşhisaynası kapatıldı,debug repo/artifact'e eklenmedi. Manueltest http://127.0.0.1:3019/ ve /#selected-projects ; 023C kullanıcıkabulü beklenir. Git/staging/yayın yok;021diğerriskler sürer.

## Önceki BS3P-023B durum özeti — tarihsel; kullanıcı artık onayladı

**Durum: PENDING USER SAFARI ACCEPTANCE**
**Branch / HEAD:** `feature/bayessoft-3.0-plus` / `02739d112d65dbb6fc420eadd6611ff701415561`.
**Teslim:** [[../04-Development/BS3P-023B-REAL-SAFARI-GALLERY-FIX]]. Kullanıcı023düzeltmesini gerçekSafari'de reddetti; önceki completed/WebKit kaydı native kabul değildir.
- Safari27.0 native pencerede boş galeri A/B üretildi. Poster decode640×863/863/861, stage821.5625×500,117dilim ve projected-surfaces aktif; SVGsymbol/use yolu boş boyanıyor. DirectSVGimage ile dev ve production posterleri görünür.
- Yalnız GalleryStage.tsx değişti: aynı dilim/viewBox/oran/lazyWebP; sıfırdefs/use kaldırıldı.023CSS/stage/helper, geometri/motion/veri/diğer bölümler korundu.
- Chromium piksel farkı1/1.206.909kanal; WebKit+Chromium desktop/mobil kontroller, Chromium touch, Node22TS-lint-foundation-build-isolation geçti.686artifact0prototype,3tekilposteristeği.
- NativeSafari AX geçiş tamamlanması görülmedi; geçici teşhiste document.hidden=true. Foreground Safari ok/klavye/swipe ve gerçekmobil kabulü kullanıcıya aittir. Debug kaldırıldı; WebKit testi yerine sayılmaz.
- Manuel production: http://127.0.0.1:3019/?review=023b#selected-projects ; dev3018. Görev kullanıcı sonucu gelene kadar pending; yeniREADY/staging/commit/push/merge/deploy yok.021diğer riskler sürer.

## Önceki BS3P-023 durum özeti — tarihsel; kullanıcı kabul etmedi

**Branch / gerçek HEAD:** `feature/bayessoft-3.0-plus` / `02739d112d65dbb6fc420eadd6611ff701415561`.
**Aşama:** BS3P-023 implementation completed; WebKit motorunda galeri görünür/kullanılabilir, kuruluSafari manuel kabulü beklenir.
**Teslim:** [[../04-Development/BS3P-023-SAFARI-GALLERY-RENDERING-FIX]].
**Git:** Oturum başında022releasecandidate zaten02739d1commit'indeydi/indexboş.023yalnız3uygulamadosyası+belge/kanıt/log değiştirir; yeni staging/commit/push/merge/deploy yok.
**Yerel:** dev http://127.0.0.1:3018/ ; testproductionartifact http://127.0.0.1:3019/ . Canlıyayın değişmedi.

## Güncel BS3P-023 teslimi
- WebKit27.2'de posterHTTP/DOMmatrisleri doğru,nestedpreserve3dpaintüstüste bozuk. KullanıcınıntamblankNativeSafari görüntüsü birebirreprodeğil; SafariDriverautomationkapalı. Nativeayardeğişmeden geçiciWebKitheadless/headedbaselineincelendi.
- İzoleWebKit-onlyper-stripprojection aynıgeometri/9×13/perspective/radius veexistingWAAPIprogress1040/700ms; facing-depth yönetimi/transition-onlyRAF/cleanup. Chromiumeskiyol/pikselfark0; posterdata/CTA/motionlogic/diğerbölümleraynı. WebKitkenardilimörtüşmesifarklıolabilir; motormotorpikseleşitlikiddiasıyok.
- WebKit+Chromium1440/390poster/ileri-geri/klavye/orderlinks/globalpausemanual/reduced0/DEmenuEscape/nooverflow/noerrors veNode22TS-lint-foundation-build-isolationpassed.686artifact0proto;285snapshot283aynı+2diff+1newhelper. FinalSafari/iOS/SR/perf/UbuntuCI ve021security-rollback koşulları sürer.
- Task/current/next/session/daily/review/D-029/023kanıtlar güncel. KullanıcıSafari manuelret/onayı beklenir; yeniREADY/yayın/staging yok. Aşağıdaki önceki checkpoint kayıtları tarihseldir; güncelHEAD02739d1'dir.

## Güncel BS3P-022 teslimi
- 55releasekaynağı+111belge/kanıt=166staged;185hariç(177ilgisizuserfile+8geçiciQA.cjs).021tamlistesinden açık dosya seçimi yapıldı, genişgitadd kullanılmadı.022staged/excludedlisteleri ve stagingchecks hazır; zorunluObsidian kayıtları dahildir.
- Gerçekindexallowlist/mode/knownsecretpattern/blob eşitliği kontrolleri uygun;yasakpath0/bilinentokenbulgu0/100644mode. `git diff --cached --check`20mevcutbiçimuyarısı veriyor;16MDhardbreak/3rawlogCRLF/1geometryEOFblank tarihçe/kod koruması için değişmedi. Bu sonuç temizdiffcheck diye sunulmadı.
- 55sourcehashaynı;177hariçdosyadan176aynı/yalnızkişisel.obsidianworkspaceoturumsırasındadışarıdandeğişti(stageedilmedi/gerialınmadı); yeniapp/CSS/dependency/testbuild/browser yok. Finaldarrestaging sonrası index-worktreefarkı0 doğrulanır. Eski3.0/4.0/Obsidian/MOV/logo/temporary/generated çıktılar stagingdışı.
- GerçekHEAD1218e58aynı.021sonPagesmasterb8c38de…/run38187511219 önceki doğrulanmışrollbackreferansı; yenidenremote sorgusu/rollbackprovası yok. YeniRCcommitSHA ancak ayrıca açıkcommitonayından sonra oluşur.
- Task/current/next/session/daily/review/D-028/teslim güncel ve staging kapsamında. Önerilenmesaj: feat: integrate BayesSoft 3.0+ React homepage release candidate. Kullanıcıonayı beklenir; sonrakiGit/yayın işlemini otomatik başlatma. Aşağıdakiler tarihsel teslim özetleridir.

## Güncel BS3P-021 teslimi
- 296uygulama/asset/config hash'i aynı; bu görev yalnız rapor/kanıt/log üretti.55releasekaynağı+ilgiligörevbelgeleri önerilen checkpoint;177yereluserfile hariç, beklenmeyen appdiff yok. Tam dosya manifesti ve44lockpath değişimi notta; diğer kullanıcıkasaları/logo/ayar/MOV korunur.
- ResmîSHA256Node22.23.3/macOSARM64: TS/targetlint/foundation/temizbuild/verify/HTTPisolation passed;18page/686file/0prototype. GerçekUbuntuCI/temiznpmci tetiklenmedi; localNode22 başarı bunun yerine sayılmaz. GoogleFonts ilkNode22build'de geçti.
- SafariDriver remoteautomationkapalı/HTTP500,WebKitbinaryyok; test yapılamadı. KısaChromiumfontInstrumentSans,TR-EN-DE/lang/persistentpause/reload/resume/Threeframefreeze/R2üçlink-safe-rel/3WebP/13sitemaproute200/canonical/robots/404/mobilEscape-staticcanvas0-nooverflow/reducedanimationnone0 doğrulandı. Hamharnesserkenokuma sınırları raporda.
- Prodaudit0/fulldev10high3moderate;13paketpath-versiyon-etki/darpatch-plan incelendi, dependency değişmedi. LastPagesmasterb8c38de…/run38187511219success teyitli;artifact0/rollbackprovasıyok. İzolasyonkoruyanrunbook ve yeniartifacthashmanifesti hazır; eskibackup diye sunulmadı.
- Rapor/evidence/task/current/next/session/daily/review/D-027 güncel. Yeni koşulsuzREADY/yayın yok; kullanıcıincelemesi ve açık koşul/risk kabulü beklenir. Aşağıdakiler önceki teslimlerin tarihsel özetleridir; güncel eylem NEXT_STEPS'tedir.

## Güncel BS3P-020 teslimi
- Kullanıcıtekminimalglobalcontrolkararı uygulandı. Hero tekbutton/TR-EN-DE/storage/reducedönceliği; prizma gerçektransition/timerpause,marqueephasepause,aktifThreeaynıframe-timepause-resume. Geometri/5000+900ms/8.4s/120s/R2manualmotor/onaylıyerleşimkorunur.
- B-019-01kapandı;locale/reload/mouseleave5400ms/midturn/Space-focus2px/reducedsavedrunningçatışması/samecanvasThree/mobilemenuEscape veSSRnoJSposter doğrulandı. TamWCAG/SR/diğerbrowseriddiasıyok.
- LCPmobilSVGhidrasyonbekliyordu:SSR+koşullupreload. AynıtekcoldlabpairLCP7.964→3.148s,CLS0→.000203/örnekevent24→24ms. Firstviewportposter0;WebPlarge681612B(−87.42%)/small329188B(−93.92%);PNG5418072B/orijinalleraynı. DPR1/3tekvaryant3istek/PNGpairgörselkoruma.
- Next/eslintconfig15.5.28/PostCSS8.5.30/nanoid3.3.20/source-map-js1.2.2/supportedsharp0.35.5:finalprodaudit0;fullaudit10high3moderatedev/buildtakibiaçık. TS/targetlint/foundation/sonisolatedbuild/routeisolationpassed;686artifact0prototype. BirGoogleFontURLparsefail/tekretrypass; riskraporda. Performansfinalsharp-onlypatchöncesiUIbuild,nihaiCSS/SVG/WebPhashaynı.
- PublicGitHubsonbaşarılıPagesmasterSHA b8c38de99330def9182eb9c837d8b8f52d1a38e5/run38187511219/deploymentsuccess;artifactlist0/rollbackprovayok.1218e58tasarımcheckpoint'icanlıSHAdeğil. Hostingmutasyonuyok.
- Rapor/evidence/task/current/next/session/daily/review/D-026güncel.269/281snapshotaynı/12hedeflidiff/0silme;demo/font/PNG/geometri/header-footer/SEO/saklıprojelerkorunur. Aşağıdakiler önceki teslimlerin tarihsel özetleridir; güncel sonraki eylem NEXT_STEPS'tedir.

## Güncel BS3P-019 teslimi
- Kullanıcı018C onayı/tasarımkilidi; temizproductionbuild/TS/targetlint/foundationdata/sonartifactverifier passed.679dosya/0prototypeartifact-dependency; dev200/prod10varyant404 ve13sitemaproute200/favicon/SEO/404 doğru.
- TR/EN/DE/persistence/html.lang/Chromium/320-390-768mobil-tablet/keyboard-CDPtouch/reduced/WebGLfallback-contextloss/SPAcleanup doğrulandı. EN/DE ilk yüz CSSscope hatası görünürkesilme üretiyordu; yalnız2selector düzeltildi,12fontcase demoileeşit. Diğer274uygulama dosyası aynı.
- **BLOCKER B-019-01:** hiddenprismapause/final-state ve hover-focus-onlymarquee; kalıcımotionstop yok. YeniUI/timing değişikliği buQA'da yapılmadı; releaseNOTREADY.
- Önemli: tekmobil4×CPU/1.6MbpslabLCP7.944s/CLS0; poster5.42MB. npmprodAudit1critical4highpaket(staticserveruygulanabilirliği ayrı). Safariremoteautomationkapalı/WebKit-Firefoxbinaryyok/gerçekcihazyok/CI22teyidyok; lastgoodartifact/rollbacktatbikatı yok. Kanıtlar/limitler raporda açık.
- Rapor/evidence/task/current/next/session/daily/review/D-025 güncel. CanlıPOST/hosting/deploy yok. Kullanıcıincelemesi/onayı beklenir.

## Güncel BS3P-018C teslimi
- Kullanıcı olumlu görsel değerlendirmesi kaydedildi; tasarım yeniden düzenlenmedi. CDP gerçek renderedInstrumentSans Regular/Medium/SemiBold, aynı logicaltipografi ve assetbytes; desktop1440×1000/mobil390×844 sabitölçüler eşit.
- Kısa foregroundprizma/hover-keyboardfocus/dots/Three8.4finalidle/marquee120s-hovercolor/R2ileri-geri-klavye-gerçektouch/reduced/menuEscape aynı. Readyöncesi ölçüm/faz ve otomasyon modality farkları normalize edilerek hamJSON'da korundu; uygulama farkı diye değiştirilmedi.
- TS/targetlint/artifactverify geçti; yeni build gerekmedi.275uygulama dosyası başlangıç/son hash eşit. Yalnız rapor/evidence/task/current/next/session/daily/review güncellendi.
- Safari/gerçekcihaz/performance/a11y ve diğer releasekapıları BS3P-019'a bırakıldı. Kullanıcı onayı beklenir; yayın yok.

## Güncel BS3P-018B teslimi
- Ayrı root React composition/chrome/scopedCSS/localInstrumentSans, production asset paths, tekLanguageProvider/merkezi seçili kayıtlar. Hero/ref/R2 aynı geometri/zamanlama; cleanup/adapters React'e uygun. İç route chrome/SEO/katalog/prototipler korunur; yaklaşım bölümü yok.
- Desktop demo ölçüleri eşit; mobil/üçdil/canvas korunması/reloadlocale/klavye-gerçektouch/reduced/fallback/Threefinalidle kısa kontroller geçti. TS/lint/nihai isolatedbuild passed;679artifact/0prototype refs. Dev200/prod10varyant404 doğrulandı. Ham harness/capture sınırlamaları raporda açık.
- FurtherUp detay+canlı, Reviel/Metek yalnız gerçekcanlı/null-detail; AI/Atlı saklı. Evidence/report/task/D-024/review/session/daily güncel.
- FinalQA yapılmadı; Safari/gerçekcihaz/pausea11y/performans/eksikcase-yasal-izin/releasebaseline kapıları sürer. Kullanıcı onayı beklenir.

## Güncel BS3P-018A teslimi
- Aktifbranch/HEAD1218e58; başlangıçtrackedtree temiz, kullanıcıuntrackedlogo/vault/research/arşivler korunur. Production app/page-layout/header-footer/SEO/contact/katalog/config/lock checkpoint ile aynı.
- StatikPages için production-only geçici kaynak build'i: app/prototype/publicprototypeassets/prototyperuntime dışarıda. Source/dev yerinde; aynıdependency/Nextbuild. Zorunlu exportverifier+workflowgate+previewgate,677 export dosyası/0prototypeasset/0dependency; yanlışdemo/assetref fixture reddediliyor.
- Additive `translations[locale].homepage`, tekLanguageProvider API/storageexceptionguard; legacy3dil ağacıcheckpoint eşit. Data/selectedProjects readonlylocale selector/gerçekURL/detailnull/productionposterpaths; Reviel-Metekdetail uydurulmadı, AI/Atlı kayıtları aynı.
- TS/hedeflilint/data checks geçti. İlkbuildsandboxGoogleFontsDNSfail; ağizinli tekrar başarılı/18staticpages/prototyperoute yok. Dev6route+asset200; gerçekout yerelstatikmodelinde10prototypevaryantı404/productionroutes200. Canlıhostingtest/deploy/screenshot/Playwright/fullQA yok.
- Not/evidence/task/current/next/session/2026-10-15günlük/D-023/review güncel. Yeni `/` görseli yok; commit/push/merge/deploy yok. 018B temel hazır, kullanıcıonayı beklenir.

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
- BS3P-018A ile production build/export prototype rotalarını ve prototype assetlerini dışlar. Canlı deployment henüz yapılmadı; dev erişimi korunur.
- Homepage BS3P-016 ile TR/EN/DE UI destekler; kullanıcı BS3P-017 talebinde görsel tasarımı onayladı. Dil tercihinin reload testi hâlâ harness sınırlıdır; production entegrasyonu uygulanmadı. Referanslar müşteri/partner ayrımı ve ayrı kullanım izin belgeleri kaynaklarda yok; yasal sayfa rotası yok. Yayın öncesi kullanıcı içerik teyidi gerekir.
- Homepage composer kaynak belge sınırlarına bağlı; kaynak hero HTML sözleşmesi değişirse adapter gözden geçirilmeli. Referans PNG payload/uzun loop/final erişilebilirlik release aşamasında değerlendirilmeli.

## Bir sonraki Codex eylemi
Kullanıcının BS3P-018A incelemesini ve BS3P-018B kapsam onayını bekle; BS3P-010/009 inceleme kayıtları korunur. Vitrin entegrasyonu tamamlandı; ek revizyon, çeviri/yasal içerik, A-B/production veya release işlemini otomatik başlatma. Açık kalite/izolasyon/kasa bulguları [[../07-Reviews/REVIEW_REGISTER]] ve ilgili görev notlarında; final QA ayrı kapsamdır.

> Bu dosyayı her oturumda yeniden, yalnızca gerçek duruma göre güncelle. Eski anlık görüntüyü SESSION_LOG'a gömmek yerine gerekiyorsa tarihçede referansla.
