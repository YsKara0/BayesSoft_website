# NEXT STEPS — en fazla 3 aktif öncelik

## 1. BS3P-031 — Sitewide Page Inventory & Skeleton Migration
Kullanıcının belirlediği sıradaki görev; henüz başlatılmadı. Yeni oturumda güncel branch/Git durumu ve AGENTS/workflow okunarak kullanıcı kapsamına göre ilerlenir. Bu kapanışta yeni tasarım veya migration yapılmadı.

## 2. BS3P-030 yerel checkpoint / handoff
Kullanıcı mobil marquee tasarımını şimdilik görsel onayladı. Mevcut kod değişmeden seçili030dosyaları `feat: improve mobile references marquee` mesajıyla master’da commit edilecek; gerçek SHA sonrası handoff’a yazılır. Yeni test yok. Push/deploy yapılmayacak.

## 3. Koruma
Kişisel.obsidian/eski kasalar/MOV/test harnessleri ve ilgisiz yerel dosyalar korunur.030kapsamı dışında staging yok. Son commit SHA’sı içeren kapanış notları ikinci commit olmadan yerel kalır; yeni oturum bunları silmemeli.

## Tarihsel NEXT_STEPS — aşağıdakiler030 görevinin aktif talimatı değildir

### NEXT STEPS — en fazla 3 aktif öncelik

#### 1. Windows kanıtlarının aktarımı ve kullanıcı incelemesi
[[../04-Development/BS3P-029B-WINDOWS-HERO-SHARPNESS]] mevcut; `06-Evidence/BS3P-029B/` Mac’te yok. Kaynak Windows kanıtlarını kayıpsız aktar ve dosyaların bütünlüğünü ayrıca doğrula. 100% /3× A-B-C-D-E karşılaştırmasını kullanıcı değerlendirir; bu görevde yeni aktarım veya görsel kabul yapılmadı.

#### 2. Hero: mevcut A’yı koru, kanıtsız düzeltme uygulama
[[../04-Development/BS3P-029-LIVE-HERO-SHARPNESS]] ve029B birlikte okunmalı. Windows DPR1 ölçümü cap1,5 hipotezini bu oturum için dışlar; DPR artırma. Backface/rounding/zoom denemelerinde tutarlı kazanç yok. PMREM uyarısını kanıtsız değiştirme. Kalıcı uygulama ancak doğrulanmış aday ve kullanıcı onayıyla; Safari galerisi, tasarım, oranlar ve timing korunur.

#### 3. Belge/Git ve koruma sınırı
[[../04-Development/BS3P-029C-OBSIDIAN-RECORD-MERGE]] kullanıcı incelemesine hazır. Yerel fixbranch HEADdb53596; Windows docs562d770 kaynak olarak okundu, commit/branch birleştirilmedi. Stash korunur. Sonraki staging/commit/push/PR/yayın ayrı açık yetki ister. Eski kasa/.obsidian/MOV/userfiles ve BS3P-000 kabul kapısı korunur. Aşağıdaki025CIbeklentisi ve026BLOCKED dönemin anlık görüntüsüdür; bugünkü yayın talimatı değildir.

#### Tarihsel Windows NEXT_STEPS — aktif talimat değildir

### NEXT STEPS — en fazla 3 aktif öncelik

#### 1. BS3P-029B karşılaştırmasının kullanıcı incelemesi
**Durum:** Teşhis tamamlandı; doğrulanmış kazanan yok, kalıcı uygulama değişikliği yok.
[[../04-Development/BS3P-029B-WINDOWS-HERO-SHARPNESS]] ve etiketli3×/100%PNG'leri incele. A'yı koruma önerilir; B mevcutkurallaaynı, C/D/E kazancı belirsiz. Yeni uygulama ancak somut aday seçimi ve açık onayla; Safari/motion kabulü ayrıca gerekir. HEADc3327e1; aşağıdaki025/CI bilgileri tarihsel, günceluzakdurum doğrulanmadı.

#### 2. BS3P-025 ve Ubuntu CI/yayın kapıları — tarihsel takip
**Yerel doğrulama:** 025 düzeltmesi artık `c3327e1` commit'inde (`fix: fetch full Git history for release validation`). Bu commit mevcut oturumdan önce oluşturulmuş; bu oturum commit/push yapmadı. Uzak push/UbuntuCI sonucu denetlenmedi. [[../04-Development/BS3P-025-UBUNTU-CI-GIT-HISTORY-FIX]] önceki yerel kontrolleri içerir; yeni Git/yayın işlemini otomatik başlatma.

##### Yeni SHA üzerinde Ubuntu CI ve yayın kapıları
**Durum:** tekrar koşu beklenir; öncekiUbuntuCI foundationgitshowadımında başarısız.
Açıkonaylıfeaturepush sonrası yeniworkflowSHA'sını doğrula; eski5809965runrerun yeniayarları kullanmaz. FoundationvegerikalanCIadımları tamamengeçmedenbaşarılıCIiddiası/yayınilerlemesi yok. Pagesworkflowmain/master/manualdeploy davranışı değişmedi; ayrıyetki gerekir.021devsecurity/oldartifact0-rollbackprovası/cache/yedek koşulları sürer.

#### 3. BS3P-000 — Vault kullanıcı kabulü
**Durum:** in-progress — önceki yerel doğrulama tamamlandı, kabul kapısı korunur.
Eski3.0/4.0kasalar, kişiselObsidianayarları, referansMOV, logo denemeleri ve geçiciQAçalıştırıcıları korunur. Kullanıcıkabulü olmadan otomatik kapatma yok.


#### Tarihsel Mac NEXT_STEPS — aktif talimat değildir

### NEXT STEPS — en fazla 3 aktif öncelik

#### 1. BS3P-029 gerçek Windows ölçümü
**Durum:** waiting for Windows DPR/zoom confirmation.
[[../04-Development/BS3P-029-LIVE-HERO-SHARPNESS]]: sorunlumonitörde çözünürlük/Windowsölçekleme/tarayıcızoom ve rapordakisaltokunurcanvasölçümü gerekir. Chromiumcanlı/yerelDPR1pikseleşit; sabit1.5capveDPRdeğişimindeeskiratio kanıtlandı ama24inçşikâyetinin kesin nedeni kapatılmadı.

#### 2. Kanıta göre minimal hero önerisi / ayrı PR
**Durum:** no application changes; user approval pending.
WindowsstaleDPRvarsa mevcut1.5cap'i artırmadan DPRwatch/resize/rendercleanup önerisi. Cap2istenecekse hedefGPU'da aynıkoşulönce/sonraframemaliyeti veSafari/retina/mobile/buildregresyonu gerekir; pixelbudget%77.84artışıFPSölçümüdeğildir. Galeriye açıkonayolmadan müdahaleetme;tasarım/boşluk/timingkorunur.

#### 3. Koruma ve yayın sınırı
Fixbranchfix/bs3p-029-hero-sharpness liveSHA db53596tabanlıdır; master'dadoğrudançalışma yok. Şuanda yalnızbelge/kanıtdeğişiklikleri var;commit/push/merge/deploy yapılmadı. Önceki026userbelgeleri/eskiarşiv/.obsidian/MOV/harnessdosyalarıkorunur. GelecekproductionPR/yayın ayrıca kullanıcıonayı gerektirir.
