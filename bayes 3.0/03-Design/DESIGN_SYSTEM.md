# BayesSoft 3.0 — Tasarım Sistemi / Spatial Concept

## Güncel — ana beyaz alanı dolduran dört yüzlü mimari obje

**13.10.2026 11:49 TRT · S2026-10-13-FULLSIZE-01.** Dört yüzlü mekanizma kullanıcı onaylıdır; H270 küçük orta rotor görsel hedefi karşılamadığı için bu tur büyütüldü. **H420/perspektif/taşıyıcı düzeni ve 5 sn otomatik uygulama inceleme bekler; production-approved component değildir.**

Dört fiziksel yüz ve aynı yöndeki 90° adımlar korunur. Yüz W534×H420 px, derinlik H/2=210 px; kare kesit 420×420 px. CSS scale kullanılmaz. Dış obje 540×512 px olarak kalır. Üst/alt sabit parçalar 40'ar px; ön açıklık yaklaşık 432 px, rotor doluluk oranı %97,2. Alt parça y=472'ye alınır; eksen x=270/y=256, ana panelin tam merkezidir.

Kare kesitin süpürme yarıçapı H/√2=296,985 px, çapı 593,97 px. Rotor merkezi z=-210 olduğundan hacim z=-506,985…+86,985 aralığına uzanır. Üst-alt parçalar ön z=0 düzleminde, |y|≥216 bölgesindedir; süpürülen çemberle en küçük fiziksel radyal açıklık yaklaşık 4,26 px. Arka taşıyıcılar z=-210'a çekilir ve yaklaşık 610 px açıklık bırakır (çap + üst/alt 8'er px). Arka hacim açıktır; sığ kutu veya gizlenmiş yanlış kesit yoktur.

Tüm sabit parçalar ve rotor ortak 3D kamera kullanır. Perspektif 540 px genişlikte 1000 px, responsive olarak 185.185185cqw. Tam hacmin en büyük düşey projeksiyonu yaklaşık 506,37 px olduğundan 512 px dış alana sığar. Dönüşte öndeki sabit parçanın arkadaki yüzü örtmesi gerçek derinlik ilişkisidir; yüzlere mask/clip uygulanmaz. `.architectural-object`, `.plate-space` ve `.rotating-plate` overflow visible / clip-path none kalır. Chrome'un arka taşıyıcıların projeksiyon öncesi sınırından oluşturduğu 3–5 px fazladan yatay kaydırma alanı, sahnenin dışında yalnız prototip html/body viewport sınırında `overflow-x:clip` ile giderilir. Görünür fiziksel yüzlerin bütün projeksiyonları viewport içinde doğrulanır; geometriyi keserek sığdırma yoktur.

Variant C'nin yaklaşık 398 px ana yüzüne yakın olmak için H420 seçildi (%5,5 daha yüksek). Ana beyaz alanın %97,2'si döner; önceki üst-alt geniş boşluklar kalktı. Üst/alt sabit ve ince, arka taşıyıcılar mat ve hafif; yeni konsept veya belirgin boş çerçeve yok. Instrument Sans 500 korunur: ilk mesaj yaklaşık 82 px, diğer üçü 54→60 px; satır kırımları ve Türkçe içerik aynı. Dört eşit yüz artık aynı yüzey gradient'ini paylaşır. Mevcut çok hafif kenar/gölge korunur.

Sağ asset/CSS/grid/kadraj/kompozisyon, production homepage/shared/global/nav/layout, Bayes 2.0, Figma, rehberler, logo ve dependencies korunur. 218 korunan kaynak/asset/config SHA-256 aynı. Sağ görüntünün önce/sonra masaüstü 367.500 ve mobil 87.210 piksel karşılaştırmasında değişen piksel 0. Route ve dört mesaj yapılandırması değişmedi. Commit/push/deploy veya AI görsel üretimi yok.

0/-45/-90/-135/-180/-270/-360, 28 responsive yüz kontrolü ve 33 etkileşim kontrolü geçti. Önce/sonra masaüstü ve mobil görüntüler, 48,40 sn iki tur kaydı ve scope QA [[07-Reviews/2026-10-13-Full-Size-Prism-Auto]] içinde. Hareket [[MOTION_GUIDELINES]]. Kalan kabul: kullanıcı büyük ana yüzü ve perspektifi değerlendirecek; Safari/gerçek cihaz/VoiceOver QA açık. Sol CSS mat malzemesi ile sağ raster aynı fiziksel renderer değildir; sağ görsel bu tur rafine edilmedi.

---

## Tarihsel — küçük rotorun mekanik düzeltmesi ve önceki tasarım kayıtları

## Güncel prototip yönü — dört yüzlü mimari prizma

**13.10.2026 01:56 TRT · S2026-10-13-PRISM-01.** [[BAYESSOFT_3_FOUR_FACE_PRISM_CORRECTION]] çelişen iki yüz/180° talimatlarının yerine geçer. Yalnız sol `/prototype/spatial-hero` mekanizması düzeltildi; **production için onaylanmış component veya global tasarım sistemi değildir**. Kullanıcı incelemesi beklenir.

Mevcut Variant C dış 540×512 çerçeve, sabit üst-alt mimari dönüş parçaları, taşıyıcı/yataklar, Instrument Sans ve mat nötr malzeme korunur. Kare kesitli dört yüzün dönüş açıklığı için yalnız rotor H398'den H270'e değişti: eşit W534×H270 yüzler, H/2=135 px derinlik, iki metinsiz kare uç kapak. Önden görünüm yaklaşık 2:1 geniş dikdörtgendir. Dinlenmede artan destek boşluğu gerçek dönen hacmin açıklığıdır. Büyük gölge, yeni görsel konsept veya CTA yok.

Face0 yaklaşık 82 px; diğer üç yüzde 54 px, weight 500 / line-height 1.06 / tracking -.02em. Metinler tek `faces.ts` kaynağında; Türkçe diakritikler ve satır kırımı gerçek HTML. Öne bakan dört yüz aynı genişlik/yükseklik ve orijinal z=0 düzlemini paylaşır. Geçici nötr yüzey ışığı ve uç kapak mevcut palette kalır. Dış pause/next/dört seçim mobilde gerektiğinde satıra sarılır.

Sağ `.hero-visual`, image source, 4:3 oran, kadraj, mask, ölçek ve konum; ortak sahne/grid/header/hizmet etiketleri değişmedi. Sağ PNG SHA-256: `127512edabe5538cb93eddd766bb032b0a5b25033980e74bfe6924794c1a3341`. Production/shared components ve Bayes 2.0 dahil 216 kaynak/asset/config dosyası başlangıç hash'iyle aynı; generated cache'ler hariç.

Gerçek Chrome'da 0/-45/-90/-180/-270/-360/-450; 28 responsive yüz kontrolü, 29 etkileşim/a11y kontrolü, 40,64 sn video ve optimize export doğrulandı. Masaüstü/mobil görüntüler incelendi. Motion [[MOTION_GUIDELINES]], kanıt [[07-Reviews/2026-10-13-Four-Face-Prism-Correction]]. -90° artık tam okunur ikinci yüzdür; önceki edge-on dinlenme kabulü geçersiz.

**Kalan sınır:** Dururken düz ön yüzün hacmi hareket kadar belirgin değil; sol CSS mat malzemesiyle sağ raster ışığı aynı fiziksel renderer değildir. Yeni ışık/sağ konsepti üretilmedi. Dönüş açıklığı ve dört provisional metin kullanıcı değerlendirmesindedir. Safari/gerçek mobil/VoiceOver/düşük güç cihaz kabulü açık. Teknik test başarısı tasarım onayı değildir; production'a geçilmez.

---

## Tarihsel — önceki visual recovery ve Figma keşif kayıtları

13 Ekim 2026 · **İlk prototype görsel kalitesi nedeniyle reddedildi; visual recovery tamamlandı, inceleme bekleniyor.** Bu düzeltme tasarımın onaylandığı anlamına gelmez. [[BAYESSOFT_3_VISUAL_FIDELITY_AND_3D_FLIP]] ana talimat, [[07-Reviews/2026-10-13-Visual-Recovery-X-Flip]] before/after ve QA kaydıdır. Sadece `/prototype/spatial-hero`; production sınırı değişmez.

## Güncel prototipte doğrulanan görsel rafine

- Figma Balanced ölçüleri/hiyerarşisi korunur: 1440 px'de 80 px yan boşluk, sol 540×512, 40 px ara, sağ 700×525 / 4:3. 1024 split; 768 ve 390 stack. Mobil 24 px yan boşluk, 342 px obje/görsel genişliği.
- Instrument Sans Medium A82/B54, line-height1.06/tracking-.02em, seçilen Türkçe metinler aynı. Yeni brief'te A0°/B180° düz yüzler; **16°/164° Y sunumu yeni prototipte kullanılmaz**. Görünür yüzün yanal daralması kaldırıldı; 0°/180° okunurluk browser'da doğrulandı.
- Variant C'nin sabit üst-alt dönüş düzlemleri, iki arka taşıyıcı ve orta yüzü korunur. X eksenine göre yatay merkez yatakları ve ince sabit mil gerekir; düşey pimler artık aktif mekanik model değildir.
- Orta yüz çevreleyen tam UI border'dan arındırıldı. 2 px gerçek CSS 3D kesit, yaklaşık .6/.7 px yüzey ışığı/derzi ve çok düşük yoğunluklu temas gölgesi kullanılır. Kalın mavi-gri offset/background duplicate, neumorphism veya güçlü gölge yok.
- Tek ortak nötr sahne tonları #FCFCFA → #F7F9FB/#F6F8FC, iki öğenin background sürekliliği için kullanılır. Bu ortak hafif malzeme ışığıdır; yeni marka paleti veya onaylı global gradient token'ı değildir.
- Sağ dosya aynı PNG / SHA-256. Natural aspect, object-fit contain, önemli semboller/kadraj korunur. Source pixel/filter/renk/üretim değişmedi. Prototipte yalnız dış kenarda desktop 6px yatay/3px düşey, mobil2/2px mask geçişi var. **Bu, Figma'nın sert FIT kenarına sınırlı ve henüz onaysız bir render sapmasıdır**; devamlılık için denendi. İlk tur 14/10px fazla yumuşak bulundu ve ikinci tur daraltıldı. Blur uygulanmadı.
- Dış kontroller çerçevesiz 12px satır, dokunma44px; selected yüz ince underline, focus görünür. Timer açıklaması accessible visually-hidden. CTA veya kontrol nesnenin üst/orta/alt yüzeylerinde yok.
- Dört hizmet etiketi eşit, 15px; gerçek HTML bilgi ve stable heading korunur. Orta flip dışında dekoratif animasyon/section yok.

## Kalan görsel farklar / kabul

İkinci screenshot turu desktop/tablet/mobile A/B ile incelendi. Kontrollerin ayrı UI bandı ve inset border etkisi azaldı; üst-alt derzler daha seçilir. Ancak düz durağan bakışta obje hâlâ geometrik bir dikdörtgen; fiziksel ilişki gerçek X dönüşünde daha belirgin. Sol CSS mat yüzeyi ile sağ rasterın yarı saydam, zengin ışığı aynı fiziksel renderer'dan çıkmış değildir. Referansın tek mimari sahnesinin tam ışık bütünlüğü veya piksel eşliği iddia edilmez. Ek offset shadow veya rasterı yeniden üretme ile kapatılmadı.

Sonraki kabul kullanıcı incelemesidir. Gerekirse yalnız izinli prototipte sabit dönüş düzlemlerinin ışığı/derz yoğunluğu ve çok dar kenar geçişi rafine edilir. Marka/font/renk/perspektif/timing kesinleşmedi. [[MOTION_GUIDELINES]] aktif **X0→180→360** davranışını içerir.

---

## Tarihsel Figma / ilk prototype tasarım kaydı

Aşağıdaki önceki ölçü/denemeler korunur; aktif prototype ekseni ve render rafinesi üstte tanımlanmıştır. Önceki “bu tur frontend yok / motion kabul edilmedi” ifadeleri kendi tarihsel keşif aşamasını anlatır.


13 Ekim 2026 · **Desktop Balanced yalnız prototip için onaylandı.** Variant C + onaylı PNG, izole `/prototype/spatial-hero` rotasında uygulanıyor. Marka token'ları ve production onayı kesinleşmedi. Güncel hareket/kabul [[MOTION_GUIDELINES]], browser QA [[04-Website/01-Spatial-Hero-Prototype]]. Aşağıdaki kompozisyon ölçüleri 12 Ekim Figma keşfinin korunmuş tasarım kaydıdır.

## Kapsam

Mevcut Spatial Concept page'de **BayesSoft 3.0 — Integrated Hero** bölümü oluşturuldu. Sol C yeniden çizilmez; native kopyaları sadece ölçek/yerleşim için ayarlanır. Sağda kullanıcının prototip için onayladığı PNG kullanılır. Eski native service illustration yeni hero'ya girmez; önceki bütün frame'ler korunur. Güncel teslim [[08-Integrated-Hero]], sol kaynak [[07-Architectural-Spatial-C]], tarihsel A/B [[06-Left-Hero-Visual-Craft]]. Yeni marka/page/frontend yok.

## Geçici temel

| Rol | Denenen değer | Durum |
|---|---|---|
| Ana zemin | #FCFCFA | Onaylanmadı |
| Ana yazı | #20282F | Onaylanmadı |
| İkincil metin | #66737E | Onaylanmadı |
| Nötr yüzey | #EDF1F4 | Onaylanmadı |
| Önceki sağ sistemin kobaltı | #235AD6 | Tarihsel deneme; yeni rasterın rengi değiştirilmez |
| Önceki sağ sistemin yan yüzü | #D6E0EC | Tarihsel; yeni sol kenarda kullanılmaz |
| İnce geometri sınırı | #CAD3DE | Yardımcı, anlam taşıyan tek işaret değil |

Light-first ve kontrollü mavi kullanıcı tercihi. Hex değerleri kesin marka token'ı değil. Sol C'de büyük CTA, kalın mavi-gri kenar veya yeni efekt yok; mavi onaylı sağ rasterın kendi içeriğinde kalır. Solun denemesi #FFFFFF mat yüz, #FCFCFA kadraj, #FAFBFA/#F4F6F6 dönüşler, #E4E8E9 kesit ve #20282F yazı. Başlığın tek kelimesi boyanmaz. Sağ görselin mevcut yarı saydam malzemesi kullanıcı tarafından prototipte kabul edilmiştir; bu, başka glass/glow efekti veya görsel üretme izni değildir.

## Tipografi

Instrument Sans Medium ana yüz metni, SemiBold marka adı, Regular/Medium arayüz. Serif gazete yaklaşımı sürdürülmez; önceki Manrope kararı aktarılmaz. Font denemedir, nihai kimlik kararı değildir.

C kaynakta Yüz A 82 px, B 54 px; %106 satır yüksekliği ve -%2 tracking korunur. Balanced %100 ölçekte. Visual Emphasis tüm objeyi yaklaşık %94'e indirir: A 77.14, B 50.8 px. Mobil %63.33: A 51.93, B 34.2 px. Bunlar yeni font seçimleri değil, bütün objenin orantılı ölçeğidir. Face A görünür, Face B aynı alan içinde gizli düzenlenebilir alternatif durum olarak bulunur. Alt destek cümlesi yok. Rotorun 16°/164° sunum ilişkisi değişmedi; gerçek cihaz/zoom ve motion kabulü yapılmadı.

Seçilen kelimeler: A “İşinize göre yazılım.”; B “Web, mobil, AI ve özel çözümler.”; C “Karmaşık ihtiyaçlar için sade ürünler.” Satır kırımı dışında değişmez.

## Kompozisyon ve boşluk

Önceki hero'lar değişmez. Yeni desktop frame'ler 1440×839 px ve aynı kadrajda; 80 px yan boşluk, 1280 px içerik. Balanced: 540×512 px C + 40 px ara + 700×525 px görsel. Visual Emphasis: 508×481.66 px C + 16 px ara + 756×567 px görsel. Ortak 567 px yüksekliğindeki alanda parçalar merkezlenir. Header ve dört hizmet etiketi aynı native tipografik ailede, objenin dışında. Yeni CTA veya carousel UI yok.

Mobil 390×yaklaşık 811 px; 24 px yan boşluk. Header → C 342×324.27 px → 28 px ara → raster 342×256.5 px → iki satırda eşit hizmet etiketleri. Başlık önce okunur; görsel tam doğal kadrajda altta kalır. Bu Figma kompozisyonudur, gerçek cihaz/browser responsive testi değildir. Önceki C'nin tek obje/iki yüz/dönüş frame'leri korunur.

## Sağ görselin kullanım kuralları — prototip için onaylı

Kaynak, gerçek klasör envanteri ve görsel incelemeyle tespit edildi: `/Users/yavuz/Projects/BayesSoft_website/assets/hero/bayessoft-spatial-v1.png`. `assets/hero/` içindeki tek PNG; isim tahmin edilmedi. Boyut 1448×1086, doğal oran **4:3**, 1,547,393 byte. SHA-256: `127512edabe5538cb93eddd766bb032b0a5b25033980e74bfe6924794c1a3341`.

- Görsel yeniden üretilmez, düzenlenmez, recolor/filter uygulanmaz. Bu tur kaynak PNG aynı kaldı; yalnız Figma image asset olarak yüklendi.
- Üç hero aynı image hash'ini kullanır. Raster FIT, 4:3 kutu, opacity 1, rotation 0, nötr image transform ve sıfır filtre. Eksenler farklı oranlarda ölçeklenmez; TILE veya dekoratif tekrar yok.
- Güncel üç frame'de ilave kırpma yok; kaynakta görünen tüm kompozisyon korunur. Sonradan FILL/kırpma istenirse hizmet sembolleri ve önemli panellerin kaybolmadığı render ile kontrol edilmelidir. Dosyanın kendi kadrajı değişmez.
- Raster sadece sağ görsel alanında; başlık/native C yerine geçmez ve tüm hero'nun bitmap screenshot'u olarak kullanılmaz. Ek drop shadow/border/glow yok.
- Mobilde oran korunur, başlığın üstüne taşmaz. İnce ve küçük semboller tek bilgi kaynağı olmaz: Web, Mobil, Yapay zekâ ve Özel yazılım dört eşit görünür etiketle desteklenir.
- Görsel kavramsal hizmet sahnesidir; gerçek müşteri işi/ürün screenshot'u diye sunulmaz. İleride alt metin bu anlamı kısa ve Türkçe anlatır; alt metin henüz frontend'de uygulanmadı.
- Önceki native service illustration yalnız tarihsel frame'lerde kalır; yeni entegrasyonda instance/raster olarak kullanılmaz. Başka onaysız görsel eklenmez.

Kullanıcı C ve bu dosyayı **prototip temeli** olarak seçti. Bu kapsam yayın, bütün marka paleti, başka görseller veya gerçek motion için toplu onay değildir. [[08-Integrated-Hero]]

Geçici C obje 540×512 px. Üst parça 12 px derinlik projeksiyonu + 28 px ön dönüş; orta plaka 534×398 px, y=46–444; alt parça 10 px üst dönüş + 56 px ön yüz. Yaklaşık 1.1 px nötr malzeme kesiti, ince arka taşıyıcılar ve iki küçük eksen yatağı var. Buradaki 12/10 px alanlar yüzeyin arkaya devamını gösterir, kalın yan kenar değildir. Bunlar ekran projeksiyonu ölçüleridir; üretim/CAD toleransı değildir.

Üst-alt dönüşler aynı ince arka dikmelerle bağlanır. Orta plaka bu yapıdan ayrıdır; üst-alt yataklara bağlanan x=270 düşey eksen çevresinde döner. Aradaki açıklık mekanik ilişkiyi görünür kılar. Top panel boş şerit olmak yerine üst düzlem ve öne dönen yüz olarak çizilir. Alt yüzey aynı yapıyı tamamlar. Tam arka dikdörtgen, dış border veya ayrı yuvarlak kart yüzleri yok. Mimari devamlılık öncelikli.

## C — güncel geçici ışık ve yüzey

A'nın mat, temiz geometrisi ile B'nin ışığı azaltılarak birleştirildi. Sol üst ışığı, nötr kesit ve çok düşük yoğunluklu temas hissi kullanılır. Sabit üst-alt yüzeylerin ortak ortam gölgesi %2.6, 18 px blur, 1/4 px offset; orta plaka %1.4–2.1, 12 px blur, 0.5/2 px offset. İnce birleşim gölgesi %4 ve 0.7 px. B'deki 4/12 px offset ve daha güçlü gölge aktarılmadı. Neumorphic çift yönlü ışık/gölge, glow veya kalın renkli extrüzyon yok.

Native Figma yüzleri geometrik 2D projeksiyondur; gerçek 3D mesh, ray tracing veya fiziksel simülasyon değildir. Önden bakışta hâlâ düz panel hissi olabilir. Taşıyıcı boşluğu, hafif açı ve ayrı dönüş durumları obje mantığını güçlendirir; bunun başarı derecesi kullanıcı incelemesine açık.

## A/B malzeme denemeleri — korunmuş tarihsel referans

| Özellik | A / Architectural Minimal | B / Soft Spatial |
|---|---|---|
| Geometri ve tipografi | Aynı | Aynı |
| Üst / orta / alt yüzey | #FDFDFC / #FFFFFF / #FAFBF9 | Beyaza yakın nötr ışık geçişleri: #FFFFFF → #F6F8FA, #FFFFFF → #FAFBFC, #FCFDFD → #F3F5F7 |
| Yan / alt kesit | #E8EAE8 / #EAEBE9 | #D9DDE1 / #DDE0E3 |
| Ortam gölgesi | %2.2, 20 px blur, 2/5 px offset | %5.2, 30 px blur, 4/12 px offset |
| Yakın temas gölgesi | Derzde 0.5 px, %2.8 | Ortak gövdede %2.8, 5 px blur, 1/2 px offset; derzde 0.75 px, %6.5 |
| Mavi yansıma | Yok | 0.6 px kesitte #5176AA, %7 opaklık |

Bu tablo önceki A/B değerlerini korur; C'nin değerleri yukarıdaki bölümde. Malzeme gerçekçiliği ve ışık hâlâ keşif konusudur; değerler kesinleşmedi.

## Önceki Spatial Service System — tarihsel, yeni hero'da kullanılmaz

Aynı izometrik kamera, beyaz üst/ön yüz, açık gri yan yüz, ortak zemin ve kısa kobalt bağlantı dili. Native Figma vector path'leri, group'ları, component ve instance'ları kullanıldı; raster hero, generative image veya 3D render asset yok. Görsel native 2D izometrik projeksiyondur; gerçek 3D mesh/simülasyon değildir.

- **Web:** tarayıcı üst şeridi, çalışma bölmeleri ve işaret grafiği olan geniş panel.
- **Mobil:** cihaz oranı, üst speaker ve kompakt bilgi alanları olan modül.
- **Yapay zekâ:** giriş/çıkış düğümleri ve daha yüksek merkez işlem bloğu; bağlantılar somut.
- **Özel yazılım:** alçak modüler workflow parçaları; ayrı iş adımları ortak hatla bağlanır.

Modüller ortak zemine oturur; rastgele havada uçuşmaz. Hatlar paylaşılan bağlam/entegrasyon fikrini anlatır; dört hizmetin zorunlu paket olduğu iddiası yok. Browser/phone formu kullanıcı deneyimini, AI düğümleri işlem ilişkisinin, workflow blokları işletmeye özel sistemlerin kavramsal işaretidir. Müşteri projesi veya hazır ticari ürün diye sunulmaz.

Geometrinin ölçekleri cihaz/işlev formuna göre farklı, hizmet etiketlerinin semantik önemi eşittir. AI veya özel yazılım simgesinin tek başına yeterince anlaşılır olup olmadığı sonraki kullanıcı incelemesinde sınanmalı. Her durumda dört metin etiketi görünür; ikon tek bilgi kaynağı değildir. Derinlik ağırlıkla yüz renkleri/katman ilişkisiyle kurulur; büyük blur/glow değil.

## Hareket ve okunurluk

[[MOTION_GUIDELINES]] güncel kaynak. C için düşey eksende ince iki yüzlü plakanın yarım dönüşü denenir; 0°/35°/90°/145°/180° durumları ayrı native çizimlerdir. Üst-alt ve taşıyıcı sabit; carousel/controls yok. 90°'de yazı görünmez: bu model her açıdaki okunurluk hedefini karşılamaz, otomatik motion kabul edilmedi. Eksen, açı ve önceki timing değerleri onaysızdır. **Variant C**, alternatif başlık **Face C** ile karıştırılmaz.

Reduced-motion'da otomatik hareket kapalı, A statik. Uygulama için erişilebilir durdurma/yüz seçimi nesnenin dışında ayrıca tasarlanacak; görsel exploration'dan çıkarılması erişilebilirliğin kaldırılması kararı değildir. Bu tur yalnız durum çizimleri var; frontend/prototype yok.

## Hero sonrası ilk bölüm

Ayrı minimal vitrin: tek büyük mevcut FurtherUp Drive ekranı, proje adı, tek kısa kapsam cümlesi ve vaka linki. Görselin kendi UI'sı yoğun olabilir; website caption'ı kısa kalır. Ekran gerçek repository kaynağıdır; yeni müşteriye ait sahte UI veya sonuç rakamı eklenmez. Bu frame tam homepage veya production değişikliği değildir. [[ASSET_REGISTER]]

## Anti-pattern ve kaynak sınırı

Referans görselin kalın dış çerçevesi, asılı cam plakaları, ikonları, markası ve yerleşim ölçüleri kopyalanmaz. Linear component, ürün paneli, palette veya animasyon template'i olarak kullanılmaz. Üç boyut hissi açıklamasız teknik süs, orb, farklı ölçekli rastgele kartlar veya sürekli loop'a dönüşmez.

Erişilebilir ad, alt metin, görünür focus, en az 44 px etkileşim hedefi ve semantik heading uygulamada korunmalı. Yeni görsel obje etkileşimli UI olarak uygulanmadı. Gerçek klavye/browser QA yapılmadı. Font, renk, malzeme ve hareket ancak tasarım incelemesinden sonra kesinleşir.

İlgili: [[01-Brand/BRAND]], [[01-Brand/CONTENT_GUIDELINES]], [[05-Decisions/2026-10-12-spatial-concept-reset]].
