# BayesSoft 3.0 — Visual Recovery ve X Flip İncelemesi

13 Ekim 2026 · S2026-10-13-RECOVERY-01. **Önceki prototip kullanıcı tarafından görsel kalitesi nedeniyle reddedildi.** Fonksiyonel testler görsel onay değildir. Ana talimat [[03-Design/BAYESSOFT_3_VISUAL_FIDELITY_AND_3D_FLIP]] eksiksiz okundu. Yaratıcı rehber yalnız Anthropic frontend-design. Bu dosyanın ilk eleştirisi kod değiştirilmeden kaydedildi.

## Kaynaklar ve önce karşılaştırması

Figma Balanced 99:961, C 85:966 ve motion 85:1012 design context + güncel render'ları okundu. Orijinal `02-Research/hero-spatial-reference.png` ve onaylı `assets/hero/bayessoft-spatial-v1.png` görüntülendi. Mevcut yerel Chrome render'ı 1440×960 ve 390×844 olarak yakalandı. Figma/reference/prototype yan yana incelendi. Kaynak Figma'ya yazım yok.

[Yan yana](evidence/recovery-before-comparison.png), [desktop önce](evidence/recovery-before-desktop.png), [mobil önce](evidence/recovery-before-mobile.png), [ölçüler](evidence/recovery-before-metrics.json).

## Koddan önce somut görsel eleştiri

1. **Kompozisyon/ölçek:** 540×512 sol, 40 px ara, 700×525 sağ ölçüleri Figma'yı büyük oranda karşılıyor; sorun yalnız grid boyutu değil. İki bağımsız dikdörtgen arasında 40 px beyaz yarık ve ortak sahne/ışık ilişkisi yok. Orijinal referansın modüler bütünlüğü browser'da kayboluyor. Figma da tam birleşmiş ışık sahnesi değildir; referansla birebir eşlik iddia edilmez.
2. **Panel devamlılığı:** üst/alt sabit yüzeyler beyaz zeminde büyük ölçüde siliniyor. Üst parça ince boş şerit, alt parça ayrı altlık gibi; orta plakanın çevresindeki tam ince border ise kapalı bir UI kutusu kuruyor. Figma'daki dönüş düzlemleri ve ince birleşim ışıkları yeterince aktarılmıyor.
3. **Tipografi/boşluk:** font gerçekten Instrument Sans 82 px / 500; temel karar doğru. Ancak gerçek Y perspektifi ön yüzü yaklaşık 514 px görünür genişliğe sıkıştırıp başlığı eğiyor. Orta yüz ile sabit yapının kenarları ayrışıyor. Yeni brief düz 0° A / 180° B istiyor; fontu büyütmek/yeniden seçmek yerine fiziksel yüzün projeksiyonu düzeltilmeli.
4. **Malzeme/kenar/gölge:** aynı düz rectangle + tam border, yüksek kaliteli referansın imal edilmiş yüzeyinden çok inset HTML card hissi veriyor. Ortam gölgeleri çok düşük yoğunlukta ama temas/kalınlık bilgisi de kayıp; büyük drop shadow eklemek çözüm değil. Ortak taşıyıcı ve doğru eksene bağlı ince kenar/yatak gerekli.
5. **Sağ entegrasyon:** PNG tam 4:3 ve doğru ölçekli; semboller korunuyor. Buna rağmen görselin soğuk tint'li sert dış kenarları sıcak beyaz düz zeminde ayrı bir image box gibi kesiliyor. Piksel/varlık değiştirmeden ortak sahne tonunu ve kenar geçişini rafine etmek gerekiyor.
6. **UI clutter:** altta üç belirgin outlined buton, seçili yüz kutusu ve ayrı timer satırı yeni bir UI bandı oluşturuyor. Figma'nın sessiz objesi ve referansın minimum copy hedefiyle yarışıyor. Kontroller kaldırılmayacak; çerçevesiz, küçük ve objenin dışında tek sakin satıra indirilecek.
7. **Hareket:** mevcut matrix Y ekseninde 16°/164°; B→A geri dönen hareket kullanıyor. Yeni zorunlu X ekseni/top-to-bottom/aynı yönde 0→180→360 modelini karşılamıyor.

## Rafine planı — prototip kapsamında

Figma'nın split oranı, 80 px desktop marjı, seçilmiş metinler ve Instrument Sans hiyerarşisi korunacak. Bütün hero için çok açık ortak nötr sahne; üst-alt dönüşler ve taşıyıcı daha okunur, çevreleyen UI border daha zayıf. Yalnız orta iki yüzlü plaka yatay merkez ekseninde rotateX ile dönecek. 7 saniye okuma, başlangıç 900 ms kontrollü geçiş; 180°'den sonra aynı yönde 360° ve devamı. Başlığın kendisi/satırları animasyonla değişmeyecek. Kontroller erişilebilir kalıp görsel olarak geri çekilecek. Sağ PNG natural aspect ratio, semboller korunarak yerleşecek; başka illustration/AI üretim yok.

**Plan kontrolü:** yeni marka yönü, yeniden hero mimarisi, CTA, glow, kalın offset gölge, jenerik mavi-mor gradient veya yeni section eklenmez. Ortak sahne/kenar geçişi bu iki öğenin entegrasyonuna hizmet eder; CSS 3D gerçek browser'da ayrıca doğrulanacak. Görsel sonuç kendiliğinden onaylanmış sayılmayacak.

## Revizyon sonrası

### İlk screenshot inceleme turu

1440 / 1024 / 390 px A-B render'ları alındı (`recovery-pass1-*`). Figma oranı/hiyerarşi korundu; gerçek düz X yüzün başlığı artık Y perspektifiyle sıkışmıyor. Orta yüzün çevreleyen border'ı çıkarıldı; ortak nötr ışık alanı ve sabit yatay yataklarla taşıyıcı ilişkisi belirginleşti. Üç outlined kontrol ve visible timer bandı, çerçevesiz sakin satıra dönüştürüldü.

**Kalan somut sapmalar:** sağ kenardaki 14/10 px geçiş fazla yaygın; özellikle mobilde bulanık/washed görüntü hissi veriyor. Üst-alt bağlantının sağ malzeme kesiti yeterince açık değil. Düz 0° görünümde orta yüz doğal olarak dikdörtgen; salt durağan screenshot fiziksel obje algısını tek başına tamamlamıyor. Sağ raster ile sol CSS malzemesi hâlâ birebir ışık/render dili değildir.

### İkinci tur için yapılan düzeltmeler

Sağ geçiş desktop'ta yalnız 6 px yatay / 3 px düşey, mobilde 2/2 px olarak daraltıldı; görüntünün kendisine blur/filter veya yeniden üretim yapılmadı. Önemli hizmet sembolleri bu dış kenar alanlarının içindedir, değiştirilmez. Sabit yüzeylerin derzine yaklaşık %2.5 yoğunluklu 1 px temas ve ince sağ material edge eklendi; büyük offset shadow yok. Reduced-motion tercihi kapatılırken beklenmedik flip oluşmaması için discrete state geçişi anlık yerleştirildi.

### İkinci screenshot inceleme turu — sonuç

[Son desktop A](evidence/recovery-pass2-1440-a.png), [B](evidence/recovery-pass2-1440-b.png), [tablet A](evidence/recovery-pass2-1024-a.png), [mobil A](evidence/recovery-pass2-390-a.png), [mobil B](evidence/recovery-pass2-390-b.png), [Figma/reference ile son yan yana](evidence/recovery-after-comparison.png).

İkinci turda sağın washed/fuzzy dış kenarı daraltıldı; mobil sahne tekrar keskinleşti. Sabit cap birleşiminde ince temas ve malzeme kesiti gözlenir; büyük gölge eklenmedi. Dört hizmet ile dış kontrol satırı birbirinden ayrıdır, yeni UI kart bandı yok. Ana oranlar ve 82/54 px hiyerarşi korunur.

**Eleştirel son durum:** card border/UI kontrol problemi azaldı, ama 0° durağan bakış hâlâ dikdörtgen bir yüzeydir. 3D obje mantığı 45/90/135° hareket hâllerinde, sabit yan yataklar ve taşıyıcının açığa çıkmasıyla çok daha nettir. Bu gerçek fiziksel ışık/render simülasyonu değildir. Sol mat CSS malzemesi ve sağ yarı saydam raster birebir aynı ışığa sahip değil; birleşik sahne ilişkisi iyileştirildi, tamamen çözüldüğü/onaylandığı iddia edilmez.

## Gerçek X flip ve kanıtlar

[32.72 sn kesintisiz Chrome viewport kaydı](evidence/recovery-x-flip-real-browser.webm) · 1440×960, VP9/WebM,25 fps,3,725,819 byte. Yerel [prototype](http://127.0.0.1:3000/prototype/spatial-hero).

| Durum | Browser PNG | Açıklama |
|---|---|---|
| A0° | [0](evidence/recovery-x-0.png) | İlk düz yüz |
| 45° | [45](evidence/recovery-x-45.png) | Gerçek CSS transition inceleme için pause |
| 90° | [90](evidence/recovery-x-90.png) | Gerçek edge-on kesit, text kaybı beklenen |
| 135° | [135](evidence/recovery-x-135.png) | B açılır; transition pause ile incelendi |
| B180° | [180](evidence/recovery-x-180.png) | Düz, upright/unmirrored B |
| A360° | [360](evidence/recovery-x-360.png) | Aynı yöndeki ikinci flip tamamlandı |

Ara PNG'ler kesintisiz kayıt diye sunulmaz: gerçek CSS animasyonu seçili açıda pause edildi. **WebM ise müdahale edilmeden normal 7 saniyelik timer'la 0° → 180° → 360° → 540° → 720° dört flip kaydıdır.**

X axis matrix'leri, monoton artan açı, 4 transition run/end, yaklaşık886–900 ms dönüş ve7033–7034 ms yeni okuma aralığı doğrulandı. Her geçişte üst-alt cap bounding rect'leri aynı. Face sınırları viewport içinde, beklenmedik clipping yok. Dönüşte CLS 0; captured states/video örneklerinde backface bleed, mirror veya beklenmedik flicker gözlenmedi. CSS gerçek perspective 1800/preserve3d/rotateX/hiddenbackface kullanır; fade/slide/textswap değil.

[Cycle/geometry/CLS QA](evidence/recovery-cycles-qa.json), [altı açı metrikleri](evidence/recovery-state-captures.json), [33 interaction/viewport/a11y kontrolü](evidence/recovery-interaction-qa.json), [accessibility tree](evidence/recovery-accessibility.yml), [optimize HTML X kontrolü](evidence/recovery-export-qa.json).

## QA ve kaynak sınırı

- 1440/1024/768/390: yatay taşma yok, doğal 4:3 / 1448×1086 görsel, readable A, upright/unmirrored B. İki görsel review turunda1440 / 1024 / 390 A-B screenshot;768 ayrıca geometry/interaction kontrolünde.
- Hover/focus pause, klavye Enter pause/resume, kalıcı pause, touch manual / otomatik opt-in, reduced başlangıç/runtime/aç-kapa, anlık B, JS-off ve >=44 px kontrol hedefleri geçti. Otomatik live duyuru yok; iki anlam accessibility tree'de.
- Lint, typecheck, build başarılı. Optimize export'un self-contained script'i de0→180→360 çalışıyor. Yeni animasyon dependency'si yok; video encoder yalnız private/tmp QA klasöründe, proje package/config/lockfile değişmedi.
- 214 korunmuş mevcut içerik/kod/asset/config dosyası başlangıç SHA-256 ile aynı. Production homepage/shared layout/nav/global CSS,PNG,Bayes 2.0,rehberler ve logo denemeleri değişmedi. Build'in otomatik next-env referansı başlangıç hâline döndürüldü. Figma yalnız okundu. Commit/push/deploy ve AI görsel üretimi yok.

## Kalan işler — kullanıcı incelemesinden sonra

1. Kullanıcı durağan malzeme kalitesini ve top-to-bottom X somersault'u inceleyecek. Sonuç kendiliğinden onaylanmış değildir; fonksiyonel başarı görsel onay sayılmaz.
2. İzinli rafine gerekirse üst-alt dönüşlerin ışık/temas derzleri ve sağın çok dar kenar geçişi üzerinde; font/hero mimarisi veya PNG yeniden üretilmeden. Yeni yön eklenmez.
3. Gerçek Safari/iOS/Android/VoiceOver ve düşük güç cihaz testi yok. 25 fps kayıt, renderer60 fps veya bütün cihaz kabulü değildir. Mevcut production reduced-motion hydration uyarısı ilk prototip kaydında mevcut ayrı sorun, bu scope'ta değişmedi.
4. Statik host MIME/route davranışı deployment kapsamında henüz test edilmedi. Production entegrasyonu/commit/push/deploy yetkisi yok.

**Dur ve kullanıcı onayı bekle.** [[98-Agent-Logs/CURRENT_STATUS]], [[98-Agent-Logs/NEXT_STEPS]], [[98-Agent-Logs/SESSION_LOG]].
