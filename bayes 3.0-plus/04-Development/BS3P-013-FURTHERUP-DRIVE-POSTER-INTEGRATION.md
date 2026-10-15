# BS3P-013 — FurtherUp Drive Poster Integration

**Tarih:** 2026-10-14  
**Durum:** completed — prototip teslim, kullanıcı görsel onayı beklenir.  
**Dal:** `feature/bayessoft-3.0-plus`  
**Rota:** http://127.0.0.1:3000/prototype/bs3p-homepage#selected-projects

## Uygulama ve sınır
Kullanıcının sağladığı `assets/projects/furtherup-drive-cover.png` (1080×1457) yalnız homepage FurtherUp kaydının mevcut `ProjectVisual` image dalına bağlandı. Readonly ortak proje sağlayıcısından yalnız bu kaydın visual alanı yerel olarak türetilir; metadata/link ve Atlı/AI kayıtları aynıdır. Ortak GalleryShowcase/GalleryStage/coverDefinitions ve tek R2 runtime kullanılır; yeni bileşen, carousel, dependency veya refactor yok.

Public prototype asset kopyası orijinalle byte-identical. Mevcut SVG image `preserveAspectRatio="xMidYMid meet"` 1280×1600 sabit alanda oranı korur; tamamı görünür, esnetme/kırpma yok. 4:5 alanla poster oranı farklı olduğu için her yanda yaklaşık %3,67 boşluk vardır. Yüzeyin doğal kavis/perspektifi korunur. Aynı symbol dokuz konumdaki üç FurtherUp yüzeyinin 39 diliminde paylaşılır. CSS/geometri/hız/yön/kontrol değişmedi; yerleşim rötuşu gerekmedi.

Bağımsız R1/R2 ve diğer eski prototipler değiştirilmedi. Homepage hero/referanslar/diğer bölümler, production ve arşivler korundu. Bu önizleme production veya release kabulü değildir; mevcut prototiplerin production izolasyon riski BS3P-006 kapsamında sürer.

## Gerçek kısa doğrulama
- Hedefli strict TypeScript: `node node_modules/typescript/bin/tsc -p prototypes/bs3p-homepage/tsconfig.check.json --jsx preserve` passed.
- Tek desktop 1440×1000: FurtherUp posterinin tamamı, korunmuş Atlı/AI komşu kapakları. Tek ileri 0→1: 1040ms, final −40°, doğru isim/href, geçişte eski bilgi ve finalde senkron FurtherUp, idle animation0.9 panel/117 dilim aynı.
- Görsel isteği geciktirildi; yükleme öncesi/sonrası `.cy-layout` x/y/width/height birebir aynı. Üç FurtherUp panelinin ortak symbol referansı doğrulandı. Bu galeri sınırı ölçümüdür; site genelinde CLS/performance testi değildir.
- Tek mobil 375×812/touch/reduced: aynı poster tam görünür, taşma0/idle0 ve doğru FurtherUp href. Yalnız statik görüntü için reduced seçim; normal mobil motion/swipe matrisi tekrarlanmadı. Mobil PNG bölüm elemanının 335px iç alanını kapsar; desktop PNG gerçek homepage viewport'udur.
- Desktop pageerror0/failed-resource0. Bağımsız R2 HTML SHA-256 önceki BS3P-012 default çıktısıyla aynı.
- İlk kontrol betiği mevcut düğmeyi yanlış `data-next` seçicisiyle aradı ve geçiş öncesi timeout verdi; gerçek `data-direction="1"` ile düzeltildi. Uygulama değişmedi, yalnız kısa kontrol tamamlandı. Video/uzun Playwright/full QA/build/lint yok.
- Kaynak/asset/arşiv snapshot'ındaki506 dosyadan yalnız homepage route.ts değişti; diğer505 dosya aynı. Orijinal poster hash'i/public kopyası aynı.

## Değişen dosyalar ve kanıt
- `app/prototype/bs3p-homepage/route.ts` — yalnız homepage FurtherUp visual override.
- `public/prototype-assets/bs3p-homepage/furtherup-drive-cover.png` — yeni, değiştirilmemiş kopya.
- Bu görev notu; TASK_REGISTER/CURRENT_STATUS/NEXT_STEPS/SESSION_LOG/DAILY_LOG ve D-018.
- [[../07-Reviews/evidence/BS3P-013-homepage-desktop.png]]
- [[../07-Reviews/evidence/BS3P-013-homepage-mobile.png]]
- [[../07-Reviews/evidence/BS3P-013-check.json]]

Commit/push/merge/deploy yapılmadı. Server3000 açık. Kullanıcı onayı beklenir; başka görev başlatılmaz.
