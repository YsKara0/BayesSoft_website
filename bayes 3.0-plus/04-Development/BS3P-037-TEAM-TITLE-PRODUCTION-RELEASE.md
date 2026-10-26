# BS3P-037 — Batuhan unvanı ve BS3P-034/035/036 toplu release

2026-10-27 · Kullanıcı BS3P-034/035/036 sonuçlarını ve bu görevde tek commit/push/Pages yayınını açıkça onayladı. Bu bölüm yayın öncesi kaydıdır; kesin SHA/workflow sonucu yayın sonrası yalnız yerel kayıtta ve teslimde belirtilir.

## Kapsam ve uygulama

Batuhan Ersan'ın `data/site.ts` içindeki role alanı tam olarak **AI Integration and Development Engineer** oldu. Mevcut merkezi `teamRoles` sözlüğünde çevirisi olmayan rol kendi canonical metniyle kullanılır; böylece TR/EN/DE kart/modal/fotoğrafaltmetni aynı İngilizce unvanı gösterir. Üç ayrı sabit metin veya yeni UI/CSS gerekmedi. İsim/fotoğraf/biyografi/sıra ve diğer dört kişinin çevirileri değişmedi.

Toplu uygulama dosyaları: `app/globals.css`, `components/homepage/MobileHero.tsx`, `MobileHero.module.css`, `components/interior/TeamProfiles.tsx`, `data/i18n.ts`, `data/site.ts`, `data/projectDetails.ts`, `data/projectTranslations.ts`.

- **BS3P-034:** mobil durdurma kontrolü/44pxalanı kaldırıldı; desktop kontrolü ve R3 timeline/reduced-motion aynı. Zirve katalog/detay/EN-DEteknik metinleri var. Logo `public/references/zirve-cilingir.png` ve referans verisi zaten HEAD içinde; yeni asset veya URL gerekmiyor. Screenshots boş, ortak detay galeriyi göstermiyor. Ekip unvanları merkezi yerelleştirmeyle çalışıyor; Batuhan bu037kapsamında yeni unvan aldı.
- **BS3P-035:** yalnız main landmark outline düzeltmesi korunuyor; gerçek kontrol focus-visible stilleri aynı. Önceki native Safari27.0.1 12durum/klavye kanıtları mevcut; tekrar edilmedi.
- **BS3P-036:** main scroll-margin-top mevcut header token'ı; router/history/focus aynı. Önceki native Safari geçiş/history/TRrefresh testleri mevcut; tekrar edilmedi.

## Yayın öncesi doğrulama

- Fetch sonrası master/origin/master `adeed1904371f2b38d69cfcb1a46c72ddd3a0d31`; başlangıç index boş.
- Chromium yerel3033:1440/375×TR/EN/DE=6durum;30kart/doğru5rol ve6Batuhanmodalı. Yenilemesiz dil değişimi, sabit isim/fotoğraf/BAYES, rol ve modal taşması0, Escape/focusreturn geçti. Mobil unvan ekranı ayrıca görsel incelendi.
- Homepage375/1440:Zirveimg yüklü;mobilhero buton0/desktopmotion1. CSS main outline kuralı ve scrollmargin76/88px mevcut.
- Katalogdan gerçek Zirve detay linki, üç dil Next.js/SpringBoot/CMS metni, canonical, boş/kırık galeri olmaması geçti. Static export `projeler/zirve-cilingir.html`, sitemap ve yeni unvanın statik HTML'de varlığı doğrulandı.
- TypeScript `tsc --noEmit`, değişenTSX/veri dosyalarında hedefliESLint, productionbuild/export geçti:688dosya/prototypeartifact0/dependency0. İlk build sandboxGoogleFonts erişiminde durdu;yetkili ağ tekrarı geçti. İlk QA harness desktopta gizli mobilhero'nun visible olmasını beklediği için timeout aldı;attached koşuluyla düzeltildi, sonrun hata0.
- Korunan motion/header/interiorshell/ProjectDetailView/references kaynakları HEAD ile eşit.034önceki reduced-motion/desktop piksel/mobil390/metadata/logo testleri rapor/JSON'da mevcut; bu yayında gereksiz tamQA veya eskiSafari test tekrarı yapılmadı. Canlı site açılmadı;soncanlıkontrol kullanıcıda.

## Bilinen sınırlar

BS3P-036 İngilizce reload793→760px mevcut anchoring farkı düzeltme yokken de görülür; kesin ikinci neden izole edilmedi. Gerçek iPhone/düşük güçlü cihaz performansı bu release'te ölçülmedi. Yeni Zirve ürün ekranları henüz yok;galeri bilinçli gizli. Bunlar yeni kritik build/navigasyon hatası değildir.

## Git kapsamı ve yayın

Yalnız034/035/036/037uygulama dosyaları,ilgiliraporlar/görev-karar/log kayıtları ve seçilmiş küçükJSON/TXT/PNGkanıtlar stage edilir.033'e ait ayrı rapor/2026-10-24handoff dirty dosyaları yerelde korunur;ortak loglardaki geçmişhandoff kayıtları silinmez. Yeni logoasset gereksiz olduğundan assetsource kopyası eklenmez. .obsidian,eski kasalar,MOV,kullanıcıuntracked/ilgisizharness/hamkayıtlar hariçtir.

Tekcommit: `feat: add Zirve Cilingir and polish site experience`;originmaster push ve Pages workflow kontrolü yetkili. Yayın sonrası ikinci dokümantasyoncommit'i yok.

Kanıtlar: [[../07-Reviews/evidence/BS3P-037/checks.json|Hedefli tarayıcı kontrolleri]], [[../07-Reviews/evidence/BS3P-037/release-checks.json|Build/kaynak kontrolleri]], [[../07-Reviews/evidence/BS3P-037/build.txt|Build]], [[../07-Reviews/evidence/BS3P-037/en-375.png|Mobil unvan]], [[../07-Reviews/evidence/BS3P-037/de-modal-375.png|Mobil modal]]. Önceki034/035/036raporları ve kanıtları korunur.
