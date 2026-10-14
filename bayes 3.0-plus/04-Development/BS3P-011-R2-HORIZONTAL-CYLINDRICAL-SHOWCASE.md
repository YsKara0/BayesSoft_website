# BS3P-011 R2 — Horizontal Cylindrical Showcase

**Tarih:** 2026-10-14  
**Durum:** completed — bağımsız deney teslim; kullanıcı görsel değerlendirmesi beklenir.  
**Dal:** `feature/bayessoft-3.0-plus`  
**Rota:** http://127.0.0.1:3000/prototype/bs3p-project-showcase-r2  
**Karar:** D-016 implemented; homepage veya görsel kabul anlamına gelmez.

## R1 geri bildirimi ve sınır
Kullanıcı R1'in teknik işleyişini başarılı buldu, fakat folyo/prizma mekaniğini görsel olarak kabul etmedi. R1'in kaynakları, rotası, notları ve kanıtları aynen korunur. R2 yeni ve bağımsızdır; mevcut homepage slotu, onaylanan hero, referanslar, production ve arşivler değişmedi. Özgün BS3P-011 brief'i korunur; yeni R2 talebi yüzey sayısı/mekanik/rota açısından önceki brief'i yönlendirir.

## Referans gerçekten incelendi
`02-Research/project-showcase-motion-reference.mov` dosyasının formatı `file` ile **ISO Media, Apple QuickTime MOV** olarak doğrulandı. Chrome video öğesinde verilen 5,593333s/2940×1912 kesit yeniden başlangıçtan sona oynatıldı; ended=true ve12 zamanlı gözlem alındı. Başlangıç/son ve referans hash'i R2-check.json içindedir. Yerel minimal FFmpeg MOV okuyamadığından mevcut Chrome codec desteği kullanıldı; paket kurulmadı.

Öne yaklaşan yüzün genişlemesi, komşuların perspektifle daralması, ortak Y ekseni ve kavisli yüzey/örtüşme hareketin temelidir. Kesit sürekli dönüyor; R2'nin kullanıcı komutu sonrası durması görev gereğidir. Kaynak görseller, ikonlar veya son bölümdeki karşılaştırma perdesi kullanılmadı. Video tam orijinal deneyimin etkileşim sözleşmesini göstermediğinden kaynak easing/FOV/otomatik seçim varsayılmadı.

## Görsel yön
Beyaz#FFFFFF/mineral#F3F5F7, lacivert#15263B, mavi#285BD6, ikincil#53677A; periwinkle#7B87D6 yalnız kapak içinde. Mevcut Instrument Sans yerel fontu yeniden kullanılır. Solda daha geniş yatay galeri, sağda sabit navigasyon ve kısa aktif proje bilgisi;1440px'de yaklaşık72/28 kolon oranı. Fazladan debug/CTA veya dekoratif obje yok.

Üç yeni özgün1280×1600 SVG kapak, kavisli yüzey için dikey4:5 oranına göre çizildi: cobalt iş gücü akışı; lacivert birlikte gelişim; silver/periwinkle yapılandırılmış diyalog. Kapaklar client UI veya gerçek screenshot değildir; “3 proje · Özgün görsel konseptler” görünür. BayesSoft dışındaki müşteri logoları/başka firma görselleri eklenmedi.

## Silindirin uygulanması
- **Tek ortak hacim:**9 konum,40° açısal aralık,38° kapak yayı. Üç proje silindir çevresinde üçer kez temsil edilir; yeni proje kaydı üretilmez. Desktop merkez kapak, iki komşu ve iki kenar kesiti aynı anda görünür.
- **Gerçek yüzey eğriliği:** Her kapak13 dar CSS3D dilimine ayrılır; her dilim kendi yay açısında `rotateY(localAngle) translateZ(radius)` konumlanır.9×13=117 dar yüzey aynı rotor altında taşınır. SVG çizimi yalnız üç symbol tanımıdır; dilimler `<use>`/viewBox ile doğru bölgeyi gösterir. Kapak yüzeyleri düz kart olarak kendi başlarına flip etmez.
- **Ortak dönüş:** Rotor `translateZ(-radius) rotateY(-step*40deg)` kullanır. Adım sürekli artar/azalır; ilk/son geçişte açı sıfırlanmaz. Seçili fiziksel konum step modulo9, gerçek proje step modulo3'tür. Backface gizleme ve CSS perspective doğal örtüşmeyi/yan daralmayı üretir.
- **Kadraj:** Desktop radius=stageWidth×.58, perspective=stageWidth×3.6. Mobil radius×1.04/perspective×3.8; bir büyük kapak ve iki komşu kesiti. Piksel ölçümleri/ResizeObserver ile geometri yenilenir; başlangıç CSS cqw değerleri aynı geometriyi kurar. Yalnız bütün galeriyi CSS scale etmek kullanılmadı.
- **Dilim rötuşu:** İlk desktop görünümündeki ince birleşim çizgileri, dilim genişliği ile SVG viewBox'ın aynı1.05 overscan oranına alınmasıyla giderildi. Görsel koordinatları birlikte genişletildi; bağımsız büyütmeyle dokuyu kaydırma yapılmadı.
- **Ritim:** Desktop1040ms, mobil700ms; tek WAAPI rotor animasyonu `cubic-bezier(.42,0,.18,1)`. Final hareketsiz, autoplay/rAF döngüsü yok. Reduced-motion doğrudan final seçime geçer. Geometri/preference değişimi veya document.hidden uçuşu hedefte tamamlar; gerçek OS-background testi yapılmadı.

## Veri, etkileşim ve mimari
R1'in readonly `showcaseProjects` veri sağlayıcısı ve model tipi doğrudan yeniden kullanıldı. Atlı Logistics, FurtherUp Drive, AI-Powered Chatbot Platform; `data/projectDetails.ts` + `data/site.ts` kaynak/slug/hasDetailsPage doğrulaması korunur. Açıklama/kategori/teknoloji/gerçek detay URL'leri aynı; üç kayıt dışında müşteri iddiası/metrik yok.

Sahne geometrisi/renderer, motion uygulaması, controller ve kapak çizimleri ayrı modüllerdir. R1 saf state/dom/swipe yardımcıları read-only yeniden kullanılır; R1 rotor/stage/entry çalıştırılmaz. Tek typed state activeIndex/from/to/direction/phase/step/targetStep üzerinden yönetilir. Geçişte çelişen komut reddedilir; metadata ve link hedef yüz yerleşince atomik değişir. Yeni dependency, GSAP veya Three.js gerekmedi; transform/perspective ve kırpılmış SVG bu görsel hedefi sağladı.

48px native önceki/sonraki düğmeleri,2px focus, odak galerideyken klavye okları, pointer-capture/48px yatay swipe eşiği. Pan-y/pinch korunur. Saydam gesture yüzeyi dönüştürülmüş SVG dilimleri üzerinde tutarlı pointer hedefi sağlar; kapaklar ayrı link/buton değildir. Tek role=status final seçimde duyurulur;117 görsel dilim ve tekrar kapaklar aria-hidden, erişilebilir isim aktif projededir. JS kapalıyken statik galeri ve ilk gerçek detay linki çalışır; JS kontrolleri gizlidir.

## Gerçek kısa doğrulama
- `node prototypes/bs3p-project-showcase-r2/prepare.mjs`: hedefli strict TS passed, yalnız R2 ESM dosyaları üretildi. İlk uygulama ve overscan düzeltmesi sonrası çalıştırıldı; full build/lint yok.
- İlk desktop önizlemesinde dilim çizgileri görüldü; tek odaklı görsel düzeltme. İlk harness `elementFromPoint` ile SVG use/sıfır-boyutlu3D grupları görünür yüz sayısı olarak okuyamadı; final ölçümü render edilmiş piksel bantlarından yapıldı. İlk bekleyen harness stdin kapalı olduğu için devam edemedi; yalnız göreve ait işlem temizlenip otomatik kısa pass tamamlandı.
- Final Chrome1440×1000:5 görünür yüzey; yatay taşma0, idle animation0. Dönüş ortasında4 görünür bant/1 rotor animasyonu ve eski proje bilgisi; finalde yeni doğru kapak/isim/link. Klavye önceki0→2/step−1/slot8, sonraki2→0/step0/slot0; ters yön ve wrap tutarlı. Geçiş içi ikinci sonraki komutu reddedildi; odak visible/2px.
- Tek mobil375×812:3 görünür yüzey, taşma0,48×48 kontroller. Native touch swipe0→1; reduced-motion sonraki1→2 animasyonsuz ve taşmasız. Başlık/açıklama/link doğru seçimle değişti.
- Pageerror0/başarısız kaynak0. Mevcut üç detay rotası bu tur yeniden HTTP test edilmedi; önceki200 kontrolleri korunur, bu tur değişen href/state değerleri kontrol edildi. Hero/homepage/referanslar yeniden test edilmedi.
- İki gerçek dönüşün WebM kaydı **3,88s**,1440×1000/VP9/25fps; dosya başlık/süre doğrulandı. Paket FFmpeg JPEG encoder'ı içermediği için isteğe bağlı still export yapılamadı; WebM teslim edilir. Uzun kayıt, responsive matris, gerçek cihaz/Safari/SR/OS-background/performance veya release QA yok.
- **533 korumalı dosya aynı:** source MOV/brief, R1 uygulama/not/kanıtları, homepage/hero/referanslar/orijinal prototipler/MP4, production/data/i18n/logolar/arşivler/package/config/yönergeler.

## Kanıt ve değişen dosyalar
- [[../07-Reviews/evidence/BS3P-011-R2-desktop.png]] —1440×1000.
- [[../07-Reviews/evidence/BS3P-011-R2-mobile.png]] —375px tam sayfa, viewport375×812.
- [[../07-Reviews/evidence/BS3P-011-R2-motion.webm]] —3,88s iki gerçek dönüş.
- [[../07-Reviews/evidence/BS3P-011-R2-check.json]] — kısa kontrol, referans/bitirme ve iterasyon kayıtları.

**19 yeni uygulama dosyası:**
- `app/prototype/bs3p-project-showcase-r2/`: route.ts, GalleryShowcase.ts, GalleryStage.ts, GalleryInfo.ts, cover-art.ts; visuals/operations.ts, coaching.ts, intelligence.ts.
- `prototypes/bs3p-project-showcase-r2/`: geometry.ts, stage.ts, controller.ts, entry.ts, prepare.mjs, tsconfig.check.json.
- `public/prototype-assets/bs3p-project-showcase-r2/`: showcase.css, geometry.js, stage.js, controller.js, entry.js.

Bu not, TASK_REGISTER/CURRENT_STATUS/NEXT_STEPS/SESSION_LOG/günlük/REVIEW_REGISTER/DECISION_LOG ve dört yeni kanıt güncellendi. R1 not/brief/kanıt ve tarihsel loglar silinmedi. Production hazırlık hook/package değiştirilmedi; prepare manuel çalıştırılır.

## Bilinen sınırlar / sonraki kapı
Kavis13 düz dilimle yaklaşılır; matematiksel olarak sürekli WebGL yüzeyi değildir. Yan kapaklar perspektifle daralır; dış iki yüz yalnız kısmi önizlemedir. Dokuz konum üç projenin tekrarlarıdır; counter03 ile görünür/yardımcı açıklama bunu belirtir. Mobil normal motion700ms ortak dönüş, reduced anlıktır.

Kısa Chrome kontrolünde açık işlev/merkez kırpılma hatası kalmadı. Sanat yönü kullanıcıca değerlendirilmelidir; Safari/gerçek cihaz/SR ve release izolasyonu/final QA ayrıca ele alınır. Homepage entegrasyonu yapılmadı; onay sonrası ayrı görevdir. Yerel server açık; commit/push/merge/deploy yok. Dur ve kullanıcı değerlendirmesini bekle.
