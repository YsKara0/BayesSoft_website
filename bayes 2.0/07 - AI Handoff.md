# AI Handoff — Phase 1 Lacivert Revizyonu

## 12 Ekim 2026 — Dört geometrik modül / güncel uygulama

Güncel kaynak [[bayessoft-how-we-work-assembly-interaction-spec]]. Kullanıcı bu tur tüm checkpoint'leri uygulamaya yetki verdi. Önceki Phase B teslim dashboard'u ve onun Phase C onay kapısı bu tasarım için geçersizdir; tarihsel kayıtlar korunur. Yalnızca Nasıl Çalışıyoruz bölümü: dört gerçek dil/yuva profiliyle birleşen sade SVG obje. Solda Anla, üstte ince Tasarla, merkez/sağda açık Geliştir, altta İşlet; küçük arayüz ipucu ve örnek arayüz açıklaması dışında dashboard içeriği yok. Space Grotesk/Inter, koyu dış zemin ve TR/EN/DE korunur.

ProcessAssembly + yerel CSS, ortak geometriden üretilen processAssemblyGeometry, saf state/transform yardımcıları processAssemblyMotion ve useAssemblyInteraction. Desktop obje 800×300px; mobil farklı oranlı 500×390 viewBox ile aynı dört birleşim. Anla'nın sağ dili Geliştir yuvasına, Tasarla'nın alt dili Geliştir üstüne, İşlet'in üst dili Geliştir altına, Anla'nın alt topuğu İşlet yuvasına oturur. Ortak kenarlar aynı ölçülerle ters yönde çizilir; dört ayrı dikdörtgen kart değildir. ProcessSection normal akışta, yaklaşık 662px desktop bölüm yüksekliği; sticky, scroll spacer ve scroll listener yok.

SSR tamamlanmış görünüm. Yalnızca başlangıçta viewport altında kalan obje, >=768px + hover/fine-pointer + normal motion ortamında ayrık hazırlanır. %45 görünürlükte IntersectionObserver bir kez tetikler: dört parça 250ms aralıkla, 550ms ease-out ile toplam 1.3s'de birleşir. Paylaşılan hitbox üzerinde hover yaklaşık 12px / 380ms ayrılma, çıkışta 380ms birleşme; dar tablette mesafe %65. Giriş sırasında hover join'i kesmez, bitişte gerçek pointer durumu uygulanır. Beş state: initialSeparated/assembling/assembled/hoverSeparated/reassembling. Mobil, coarse/touch, reduced-motion ve observer desteği olmayan ortamlar doğrudan tamamlanmış obje görür. Restore-scroll/ilk anda görünür obje için giriş bilinçli atlanır; görünür hydration sıçraması yok. Geometri resize veya capability değişimi tamamlanmış state'e döner; normal scroll geri dönüşünde replay yok.

Kontroller: TypeScript, hedefli ESLint, CSS parse, state/timing kontrolleri, SVG iç bölgesinde desktop 21.912 + mobil 17.784 noktalı boşluk/çakışma testi ve diff-check geçti. Production build 18 statik sayfa üretti. Hedefli Chrome: statik joined ve detached önce incelendi; bir kez giriş, scroll geri dönüşü, hover/rejoin ve giriş sırasında hover doğrulandı. DE uzun etiketlerle 1440/1024/768/390/360px ölçümlerinde yatay/etiket taşması yok; mobil assembled/statik. Process dışı çeviriler ve korunacak kaynakların tur öncesi hash'leri eşit; önceden mevcut AI çalışmaları korundu. Gerçek Windows/telefon, OS reduced-motion ve farklı zoom/DPR'de optik birleşim kabulü manuel bekler; tüm sayfa QA iddiası yok.

Son review görseli repo dışında /private/tmp/bayessoft-interlocking-joined.png. Handoff/roadmap/tasarım sistemi/güncel ve tarihsel brief/log güncellendi. feature/bayessoft-2.0 korunur; commit/push/merge/deploy yapılmadı. Detay: [[logs/2026-10-12-interlocking-assembly]].

## 12 Ekim 2026 — Modular Product Assembly / Phase B

> Tarihsel uygulama: aşağıdaki dashboard, detached prop ve ayrı Phase C onay şartı yeni [[bayessoft-how-we-work-assembly-interaction-spec]] ile geçersizdir. Güncel durum yukarıdadır.

Phase A kompozisyonu kullanıcı tarafından onaylandı; bu tur yalnızca Phase B. ProcessSection eski Sticky Process Strip yerine kısa başlık, baskın tamamlanmış ürün ve dört küçük editorial açıklama içerir. Yeni ProcessAssembly.tsx/module.css gerçek arayüz hiyerarşisi kurar: lacivert proje header'ı ve navigation, mavi-gri kapsam rail'i, açık çalışma alanında iki teslim katmanı + seçili talep akışının form önizlemesi, tam genişlikte işletim durum şeridi. Başlık Space Grotesk; gövde Inter, mevcut palette/tokenlar. Yerel arayüz ifadeleri, dört adım ve örnek arayüz açıklaması data/i18n.ts process alanında TR/EN/DE; diğer çeviriler değişmedi. Arayüz örnektir, ticari ürün/müşteri projesi iddiası yok; önizleme kontrolleri dekoratiftir.

Dört module (data-module=understand/design/build/operate) tek sıfır-gap docking grid'ini paylaşır. Dış üst köşeleri header, alt köşeleri status strip sahiplenir; rail/workspace bağımsız radius/gölge taşımaz. Tamamlanmış halde tek frame/perimeter/shadow vardır. Browser geometrisinde header-body, rail-workspace, body-footer birleşimleri birebir eşit ölçüldü. Bu dört ayrı kartın yerleştirilmesi değil, tek uygulamanın yapısal bölümleridir.

Varsayılan pose=assembled. Statik inceleme için ProcessAssembly copy={process.assembly} pose="detached" kullanılabilir; desktop rail -32px X, header -24px Y, workspace +32px X/+8px Y, footer +24px Y. Tablet 16px travel. Ayrık poz stage'i kenar/alt caption boşluğunu korur. Normal siteye preview toggle/replay CTA eklenmedi. <=767px ve reduced-motion'da detached dahi tamamlanmış ürüne döner. Mobil rail kompakt kapsam şeridi, workspace okunabilir talep önizlemesi olur; küçük secondary teslim listesi/nav gizlenir. Dört semantik adım açıklaması görünür kalır.

Eski sticky top/240–300px spacer, scroll/rAF/ResizeObserver, adım switch ve motion importları kaldırıldı. Yeni effect/observer/animasyon/scroll kontrolü yok; tamamlanmış ürün SSR'da görünür. Phase C giriş animasyonu uygulanmadı. app/page.tsx sırası, Web/Mobil/AI, diğer bölümler/global CSS ve bağımlılıklar değişmedi; önceki AI çalışma ağacı korundu.

Kontroller: TypeScript ve hedefli ESLint geçti; CSS parse/sınıf eşleşmesi, dört adım/TR-EN-DE şema, process dışı tüm çevirilerin tur öncesi kaynakla eşitliği, yeni sticky/spacer/listener/motion yokluğu ve diff-check geçti. Chrome control skill ile localhost preview: desktop 1470px, mobil 390px, tablet 768px; ürün yatay taşması yok. German tablet copy de overflow olmadan doğrulandı. Desktop product 960×432px, section yaklaşık 747px; TR tablet section ~734px, DE tablet ~754px; mobil section ~885px ve product 350×477px. Bu doğal içerik yüksekliğidir, viewport spacer değildir. Ana sayfanın kapsamlı QA'sı yapılmadı. Mobil screenshot capture viewport override sırasında ölçekli çıktı verdi; mobil layout ölçümleri doğrulandı, nihai telefon optik kabulü kullanıcıda. HMR sırasında mini-css-extract-plugin removeChild hatası görüldü; yerel preview reload sonrası arayüz yeniden düzgün render oldu. Production build Phase B'de tekrarlanmadı.

Review screenshot repo dışında /private/tmp/bayessoft-phase-b-desktop.png. Detached pozların tam görsel kabulü ve giriş motion kalitesi bekler. Phase C için ayrıca kullanıcı onayı gerekir. feature/bayessoft-2.0 korunur; commit/push/merge/deploy yapılmadı. Detay: [[logs/2026-10-12-process-assembly-phase-b]].

## 12 Ekim 2026 — Kompakt Sticky Process Strip

Yalnızca ProcessSection.tsx ve yeni ProcessSection.module.css: dört eşit kart/texture/Reveal yerine kısa başlık, dört adımlı yatay gösterge ve tek geniş açık #E9EEF5 içerik yüzeyi. Anla/Tasarla/Geliştir/İşlet anlamı yerel TR/EN/DE kısa metinlerle korunur; ortak i18n verileri değişmedi. Space Grotesk başlık, lacivert dış zemin; her adımda küçük ikon ve statik çizgi detayı. Scroll'da dört eşit aralık, 180ms örtüşen opacity; zoom/3D yok. Dört katman aynı grid hücresinde yer kaplar, en uzun içerik yüksekliği sabit kalır; pasif scroll + rAF, state yalnızca adım değişince güncellenir. ResizeObserver panel yüksekliği ölçer; değişmediyse CSS değişkenine tekrar yazılmaz.

Track yüksekliği gerçek panel + yalnızca clamp(240px,32svh,300px) scroll mesafesi. Sticky top header + 16px. Yeni uzun vh hikâyesi/slider/carousel yok; bölüm içerik temellidir. Gösterge düğmeleri fare/klavye ile adımın aralığına native anlık scroll yapar; aria-current=step, görünmeyen içerik aria-hidden. Mobil tek sütun panel, dört sütun gösterge korunur. Reduced-motion veya <=600px viewport yüksekliği: sticky/scroll takibi kapalı, dört kısa adım normal akışta; gösterge yerel anchor olur. Böylece yatay telefon/kısa ekranlarda içerik viewport altında kilitlenmez. Listener/observer/rAF temizlenir.

TypeScript ve hedefli ESLint geçti. İlk sınıf kontrolünde eksik understand stil seçicisi bulundu ve düzeltildi; yeniden PostCSS/sınıf kontrolü, dört aralık ve gösterge hedef hesabı, diff-check geçti. Tarayıcı/build yapılmadı; gerçek scroll/klavye/telefon optik kabulü manuel kontrol bekler. Web–Mobil–AI kaynakları ve diğer bölümler değişmedi; önceki AI çalışma ağacı korundu. Commit/push/deploy yok. Detay: [[logs/2026-10-12-sticky-process-strip]].

## 12 Ekim 2026 — AI Studio açık çalışma yüzeyleri

Yalnızca AIScene.module.css: koyu dış çerçeve/toolbar korunurken içeride soft #E9EEF5 talep listesi ve beyaz AI taslak/insan onayı yüzeyleri. Draft/onay ince #D5DEEB kenar, 8px radius ve çok hafif gölgeyle aynı studio içindeki çalışma panelleridir. Genel üç kolon ve mobil tek kolon/kompakt onay düzeni korunur; çalışma alanında desktop .65em, mobil .45em iç gutter. Kısa mevcut içerik/başlıklar/örnek etiketi değişmedi.

Ana metin #152238, ikincil #53647B. Aktif talep açık mavi, birincil aksiyon #2563EB; AI taslak rozeti soft mor, önerilen aksiyon ikonları ölçülü yeşil. Bekleyen onay nötr kaldı; tamamlanmış onay iddiası yok. Avatar ve öncelik göstergesi gri tonlara alındı. CSS renk değişkenleri AIScene'e yereldir; bölüm laciverti, ana başlık, Web/Mobil, scroll/sticky/height, TR/EN/DE ve reduced-motion altyapısı değişmez. Yeni hareket/kütüphane yok.

PostCSS parse/sınıf kontrolü, temel metin/zemin çiftlerinde >=4.5:1 kontrast kontrolü ve diff-check geçti. CSS-only turda TypeScript/build/tarayıcı tekrarlanmadı; görünüm ve dar ekran optik kabulü manuel kontrol bekler. Commit/push/deploy yok. Detay: [[logs/2026-10-12-ai-studio-light-surfaces]].

## 12 Ekim 2026 — AI Workflow Studio statik sahne

Yalnızca AIScene.tsx/module.css: üç bağımsız AI kartı yerine tek çerçeve, ortak toolbar ve bölücü çizgilerle bütünleşik örnek yazılım yüzeyi. Sol talep listesi (üç örnek), orta seçili talebin AI taslağı/özeti/kategorisi/öncelik önerisi, sağ inceleyen/insan onayı/iki önerilen aksiyon. Kontrollü mavi seçim ve onay vurgusu; yalnızca küçük AI taslak metninde mor. Büyük beyin/AI ikonları, glow ve üç adımlı dış bağlantılar kaldırıldı. Space Grotesk/Inter ve TR/EN/DE korunur. AI Workflow Studio açıklayıcı sunum başlığıdır; örnek arayüz rozeti görünür, gerçek ticari ürün iddiası yok. Onay aksiyonu statik görsel öğe, çalışan buton değildir; görev oluşturma açıkça insan onayına bağlıdır.

Mobil aynı yüzeyde kompakt talep şeridi → özet/metaveri → onay alanı; ikincil kişi detayları gizlenir, seçili talep/kategori/öncelik ve onay şartı görünür. Reduced-motion aynı AIScene'i statik kullanmaya devam eder. Web/Mobil kaynakları, WebToMobileTransition.tsx/module.css, tüm scroll aralıkları/spring/sticky/340-280-260svh yükseklikleri değişmedi. Yetkinlikler AI görsel alanı bu görev kapsamı dışındadır ve değişmedi.

TypeScript, hedefli ESLint, PostCSS parse/sınıf eşleşmesi ve diff-check geçti. Tarayıcı/screenshot/build yok; responsive optik kabul manuel değerlendirme bekler. Önceden mevcut next-env.d.ts üretim farkı ve kullanıcı logo ikonları korundu, bu tur dokunulmadı. Commit/push/deploy yok. Detay: [[logs/2026-10-12-ai-workflow-studio]].

## 11 Ekim 2026 — Atlı ve KSS referans bağlantıları

Kullanıcının açık PR talebiyle `data/references.ts` içindeki Atlı Lojistik ve Kanuni Sultan Süleyman Hastanesi kayıtlarına sırasıyla `https://atlidepohizmetleri.com/` ve `https://kanunieah.saglik.gov.tr/` eklendi. Mevcut ClientsSection bağlantı davranışı kullanılır; bileşen/CSS değişikliği yok. Lint, TypeScript, build (18 statik sayfa), üretilen HTML'de iki marquee grubunun href/target/rel ve tab sırası kontrolü geçti. Tarayıcı etkileşim testi yapılmadı.

Başlangıç checkout'u temiz `master`, commit `138c2f9`; 2.0 dalı zaten PR #10 ile master'a birleştirilmişti. Bu düzeltme `codex/reference-logo-links` dalında hazırlandı; kullanıcı talebi bu kapsamın commit/push ve PR açılışını yetkilendirir. Detay: [[logs/2026-10-11-reference-links]].

## 11 Ekim 2026 — Mobil konseptin zemine entegrasyonu

Yalnızca CapabilitiesSection.module.css Mobil seçicileri değişti. Kaynak PNG/WebP, TSX, caption ve içerik korunur. Önceki lighten blend kaldırıldı; renkleri değiştiren filtre yok. Görselin dört kenarında dış %5 içinde iki kesişen linear CSS mask ile yumuşak fade (standart intersect + WebKit source-in) kullanılır. Merkezi %90 tam opaktır; kırpma/esnetme/ek panel yok. Kaynak parlak mavi köşeler ve kenara uzanan telefon detayları içerdiğinden CSS tüm afiş hissini detay kaybı olmadan tamamen gideremez; mask dar tutuldu. Kaynağın dış %5'indeki detaylar da hafifçe söner; bu sınırlama görsel kabulde değerlendirilmeli.

Desktop Mobil sütun oranı .9/1.1; gap 32–48px'e çekildi, mevcut 430px metin max-width ve paragraf boşlukları korundu. Görsel normal alanı en fazla 560px, statik scale(1.06) ile yaklaşık 594px sunum; transform ekstra scroll yüksekliği oluşturmaz. Caption üst mesafesi 28px; içerik yüksekliği masaüstü genişliğine göre sınırlı artabilir (1216px inner'da yaklaşık 37px), yeni min-height/padding/scroll alanı yok. Tablet/mobil mevcut genişlikler ve tek sütun düzeni değişmedi; aynı dar edge fade kullanılır. Yeni animasyon yok, reduced-motion için hareket eklenmedi.

PostCSS parse, tur öncesi snapshot'la tüm Mobil dışı deklarasyon eşitliği, blend/filter yokluğu, contain ve mask kontrolü, diff-check geçti. CSS-only işte TypeScript/lint/build/tarayıcı tekrarlanmadı. Canlı görsel bütünlük/kenar detayları manuel değerlendirme bekler. Web/AI ve diğer bölümler değişmedi. Commit/push/deploy yok. Detay: [[logs/2026-10-11-mobile-visual-integration]].

## 11 Ekim 2026 — Yetkinlikler Mobil konsept görseli

Gerçek kaynak assets/demo/demo_phone.png (1254×1254, RGB, 2.123.883 byte). Kaynak korunarak aynı çözünürlükte assets/demo/demo_phone.webp oluşturuldu (quality 84, 178.818 byte; yaklaşık %92 küçülme). Header/hero veya proje verileriyle ilişkili olmayan, kullanıcı sağladığı konsepttir.

Yalnızca CapabilitiesSection Mobil branch ve mobil CSS: boş telefon/ikon/orbit kaldırıldı. Statik Next Image import ile WebP, intrinsic ölçüler, loading=lazy ve responsive sizes; output:export/unoptimized yapılandırmasında da önceden optimize edilmiş dosya yüklenir. width:100%, height:auto/object-fit:contain; kırpma/esnetme/mask yok. Desktop mevcut metin solda/görsel sağda, kare görsel en fazla 560px; tablet alanı en fazla 520px, mobil %90. Ek min-height/scroll alanı/animasyon yok. CSS mix-blend-mode:lighten ve izole aynı lacivert yüzey ile kaynak koyu pikselleri zemine kaynaşır; aydınlık mavi kenarlar kaynakta kalır. Görselde zaten var olan alt kenar kesimleri kaynak kompozisyonudur; CSS yeni kesim eklemez. TR/EN/DE caption ve alt metni açıkça konsept çalışması der; gerçek/yayındaki müşteri uygulaması iddiası yok.

Web ve AI markup ve tüm Mobil dışı CSS deklarasyonları tur öncesi snapshot'larla birebir karşılaştırıldı. TypeScript, hedefli ESLint, CSS parse, WebP çözünürlük kontrolü ve diff-check geçti. Tarayıcı/screenshot/build yok; lacivert birleşimi ve optik boyut görsel kabulü kullanıcıda. Diğer bölümler değişmedi. Commit/push/deploy yok. Detay: [[logs/2026-10-11-mobile-concept-visual]].

## 11 Ekim 2026 — Yetkinlikler: statik editorial yerleşim

CapabilitiesSection.tsx ve yeni CapabilitiesSection.module.css: üç beyaz kart yerine geniş, zemine bütünleşen Web/Mobil/AI blokları. Desktop Web görsel solda/metin sağda, Mobil metin solda/görsel sağda, AI görsel solda/metin sağda. Web geniş yatay, Mobil içe çekilmiş dikey, AI daha alçak kompozisyon; farklı sütun oranları, hizalar ve boşluklar kullanılır. Tablet/mobil tek sütun, metin → görsel akışı. Mevcut bölüm giriş metinleri, pillar başlık/summary ve mühendislik açıklaması/hizmet linki korunur; uzun items listeleri yalnızca bu görünümden kaldırıldı (data/home.ts değişmedi). Mühendislik altı kutu yerine sade ayırıcı ve bağlantı. Bölüm Reveal animasyonları kaldırıldı; sticky/slider/carousel/yeni motion yok. Ortak mevcut Space Grotesk tanımı kullanılır.

Web görseli mevcut gerçek FurtherUp Drive ekran görüntüsü; proje adıyla ve native 1669/911 oranında, kırpılmadan gösterilir. Mobil ve AI mevcut uygun görsel olmadığı için ürün ekranı çizmek yerine açıkça TR/EN/DE etiketlenmiş statik, değiştirilebilir görsel alanlarıdır. Mobil telefon konturu/ikon, AI sade bağlantı/ikon kompozisyonu; yeni ürün/marka iddiası veya örnek dashboard eklenmedi. Bu alanlar nihai ürün görselleri değildir.

Yetkinlikler lacivert teması ve mevcut bölüm birleşim CSS'i korunur; bölüm yüksekliği içerik odaklı yeni editorial düzenin gereği değişir. Hero, scroll sahneleri, Projeler, Referanslar, header/footer ve veri kaynakları değişmedi. TypeScript, hedefli ESLint, CSS parse, statik kaynak/yerel görsel/link kontrolü ve diff-check geçti. Tarayıcı/screenshot/build yapılmadı; ilk yerleşim ve placeholder kabulü kullanıcı manuel değerlendirmesinde. Commit/push/deploy yok. Detay: [[logs/2026-10-11-capabilities-editorial]].

## 11 Ekim 2026 — Header logo v2 taslak denemesi

Kullanıcı assets/logo_v2 taslağını yalnızca header'da denemeyi istedi. Üç PNG incelendi; tam logo bayes-logo-purple.png (2163×371, şeffaf RGBA) seçildi; 32/192px ikonlar kullanılmadı. Beyaz wordmark/mor simge koyu header üzerinde renk olarak uygun; asset görseli ve alfa pikselleri incelendi, canlı tarayıcı görünümü kontrol edilmedi.

Header.tsx yeni tam logoyu statik Next Image import ile kullanır; yeni public kopyası veya değiştirilmiş görsel yok. Ana sayfa Link/aria-label korunur. Header.module.css: oran korunarak desktop 40px yüksekliğe (~233px genişlik), tablet/mobil 32px (~187px genişlik); block img ve flex ortalama. Navigasyon/dil/menu/progress/header yüksekliği değişmedi. Ortak Logo.tsx, eski logo dosyaları, footer ve favicon değişmedi. Geri dönüş: Header'ta eski Logo import ve `<div className={styles.logo}><Logo variant="light" /></div>` kullanımını geri getir; logo yüksekliğini desktop 46px, tablet/mobil 40px'e döndür. Diğer çalışma ağacını resetleme.

TypeScript, hedefli ESLint, CSS parse, Header kaynağında yalnızca logo değişimi ve ortak Logo korunması, diff-check geçti. Tarayıcı/screenshot/build yok; canlı optik kabul kullanıcıda. Commit/push/deploy yapılmadı. Detay: [[logs/2026-10-11-header-logo-v2]].

## 11 Ekim 2026 — Referanslar monokrom/renkli etkileşimi

ClientsSection.module.css: bant #D8DEE8. Logo görselleri normalde grayscale(1) ile tek renk gri ailesinde; yalnızca ilgili kart fine-pointer hover veya focus-visible aldığında grayscale(0) ile 300ms ease üzerinden orijinal renklerine döner. Beyaz kartlar, kaynak dosyalar ve logo oran/ölçüleri değişmedi. Gömülü beyaz arka planları kaldırmak/koyulaştırmak için brightness, invert, blend veya mask kullanılmadı; beyazlar kartla bütünleşir. Grayscale kaynak parlaklığını koruduğu için logolar aynı sabit lacivert renge zorlanmaz; bu tercih beyaz zeminleri ve tanınabilirliği korur. Mobilde hover bağımlı bilgi yok; logo/isim/linkler korunur ve sticky touch-hover efekti uygulanmaz. Reduced-motion'da renk değişimi anlık olur.

ClientsSection.tsx: bağlantısız ilk grup logo kartları da klavyeyle focus alabilir; gizli ikinci grup tab dışındadır. Linkler ve sıralama aynıdır. Marquee/global CSS, süre/döngü, hover/focus/touch durma ve reduced-motion yatay erişim kuralları değişmedi.

TypeScript, hedefli ESLint, CSS parse ve TSX'in yalnızca tabIndex farkı taşıması, diff-check geçti. Tarayıcı/görsel test yok; manuel kabul kullanıcıda. Başka bölüm değişmedi. Commit/push/deploy yok. Detay: [[logs/2026-10-11-reference-monochrome]].

## 11 Ekim 2026 — Referanslar yüzey ve marquee iyileştirmesi

Yalnızca ClientsSection.tsx, yeni ClientsSection.module.css ve globals.css referans kuralları değişti. Bölüm zemini #E4E9F1; kartlar beyaz, #D5DEEB ince kenar ve çok hafif gölge. Mevcut 208×96 / 240×112px kart ölçüleri korunur; yatay logo alanı 48px, kare/dikey 64px, beyaz boşluğu fazla bazı wordmark'lar 56px. object-contain ve orijinal dosyalar korunur. Hover'da kart/logo hareketi yerine ince kenar/gölge vurgusu kullanılır. Veriler, sıra, bağlantılar ve TR/EN/DE metinleri değişmedi.

İki eşit marquee grubu, 34s linear ve translateX(-50%) döngüsü korundu; yeniden yazılmadı. 10 kart/grup ve son 16px boşlukla grup genişliği mobil 2240px, desktop 2560px; kaydırma tam bir grup genişliğidir. pageshow/visibilitychange sırasında inline running yazan ve hover pause'u geçersiz kılabilen eski handler kaldırıldı; gereksiz global focus blur da kaldırıldı. CSS hover uygun farede, focus-within klavyede ve active dokunma sırasında durdurur; koşul bitince mevcut konumdan devam eder. Gizli kopya linkler tab sırasından çıkarıldı. Reduced-motion animasyonsuz yatay erişim kuralları birebir korunur.

TypeScript, hedefli ESLint, CSS parse, referans veri eşitliği, döngü/reduced-motion kaynak koruma ve diff-check geçti. PNG ölçüleri/görünür piksel sınırları yalnızca okunarak optik ölçek seçimi yapıldı; görseller değiştirilmedi. Tarayıcı/screenshot üretilmedi; optik görünüm ve touch/hover kabulü kullanıcı manuel kontrolünde. Header ve diğer bölümler değişmedi. Commit/push/deploy yok. Detay: [[logs/2026-10-11-reference-polish]].

## 11 Ekim 2026 — Koyu bölüm renk birleşimleri

Kullanıcı mevcut yerleşimleri ve referanslara kadar renk dağılımını onayladı. Yalnızca app/globals.css ve WebToMobileTransition.module.css değişti. Hero → Web mevcut ortak lacivert birleşimi korundu. Sticky sahnenin ve reduced-motion zemininin alt 6rem'inde hafif ambient ana --bs-foundation (#101827) tonuna söner; kenar shading maskesi de alt sınırda şeffaflaşır. Ana sayfadaki Yetkinlikler üst/alt 48–80px içinde aynı ana laciverte birleşir; orta zemin --bs-surface-dark (#17263F) kalır. Yetkinlikler'in dış alt çizgisi yalnızca renk olarak şeffaflaştı (border kalınlığı korunur); Projeler'in mevcut koyu zemini ve açık Referanslar tasarımı değişmedi.

Global ekleme yalnızca main > #capabilities.bs-home-section seçicisine sınırlıdır; diğer sayfa ve header/kartlar etkilenmez. Yeni glow/animasyon/alan yok. Tüm section ölçü/padding ve motion kaynakları korunur. PostCSS parse, globals'ın yalnızca hedefli ek kural içermesi, sahne CSS'inde yalnızca background/mask deklarasyonlarının değişmesi ve diff-check geçti. CSS-only işte TypeScript/build/tarayıcı tekrarlanmadı; görsel kabul kullanıcı manuel kontrolünde. Commit/push/deploy yok. Detay: [[logs/2026-10-11-dark-section-flow]].

## 11 Ekim 2026 — Web giriş boşluğu: içerik yüksekliğine bağlı yerleşim

Önceki renk/%4 konum düzeltmesi kullanıcı tarafından yetersiz bulundu. Web başlangıç opacity'si zaten 1; ek fade uygulanmadı. WebToMobileTransition.tsx/module.css içinde yalnızca Web metni/paneli yeni webEntry grid kapsayıcısına alındı. Desktop header + 32px'den başlayan yan yana düzen, tablet header + 24px ve mobil header + 16px'den başlayan üst üste düzen kullanılır. Tablet/mobil panel, viewport'un %65/%72 merkezinde beklemek yerine gerçek metin yüksekliği + 24px/20px boşluk sonrasında gelir. Panelin -50% x/y merkezleme transformları kaldırıldı; ölçek/opacity ve Web metninin çıkış hareketi korunur. Web, stage doğal scroll ile ekrana girerken görünür; sticky başladığında aynı grid konumunu kullanır.

Hero v1 kaynağı/vitrini ve sahne içerikleri değişmedi. Mobil/AI timing ve markup, tüm motion aralıkları/useScroll/spring, stage top/height/min-height, 340/280/260svh yükseklikler ve reduced-motion statik akış birebir korunur. Yeni animasyon/kütüphane yok. TypeScript, hedefli ESLint, CSS parse, Web dışı deklarasyon ve motion/Mobil/AI/reduced-motion kaynak koruma kontrolü, diff-check geçti. Tarayıcı testi yapılmadı; görsel kabul ve özellikle küçük yükseklikli ekran kontrolü kullanıcıda. Commit/push/deploy yok. Detay: [[logs/2026-10-11-web-entry-layout]].

## 11 Ekim 2026 — Hero → Web görsel devamlılığı

Hero.module.css ve WebToMobileTransition.module.css: önceki #0B111B ara ton geçişi kaldırıldı; iki taraf --bs-foundation (#101827) üzerinde birleşir. Hero'nun son 8rem'inde vurgu renkleri ana zemine söner; sticky stage üstünde aynı lacivertten hafif ambient'e açılır. Hero alt padding desktop 16–32px, tablet 24px, mobil 16px. Yalnızca desktop Web metni ve paneli birlikte stage yüksekliğinin %4'ü kadar yukarı alındı; tablet/mobil Web konumları değişmedi. Reduced-motion statik akışın üst padding'i 80px'den 48px'e indirildi; aynı zemin birleşimi kullanılır.

Hero başlık/CTA/vitrin, üç sahnenin içeriği, Mobil/AI yerleşimleri ve tüm motion kaynakları korunur. Sticky top/height/min-height ve 340/280/260svh bölüm yükseklikleri değişmedi; negatif margin, yeni scroll boşluğu veya animasyon eklenmedi. Web mevcut opacity=1 ile doğal akışta görünür, aynı konumda sticky olur. CSS parse, izin verilen deklarasyonların dışında değişiklik yokluğu, motion TSX birebir korunma ve diff-check geçti. Tarayıcı kontrolü yapılmadı; birleşim ve sticky başlangıcının görsel kabulü kullanıcıda. Önceki ara ton notları tarihsel kayıttır; bu kayıt onları günceller. Commit/push/deploy yok. Detay: [[logs/2026-10-11-hero-web-continuity]].

## 11 Ekim 2026 — Sahne zemini sadeleştirildi

Yalnızca WebToMobileTransition.module.css: grid üreten stage::before kaldırıldı. Ana zemin hero'nun #101827 tokenını kullanır; üst #0B111B birleşim rengi korunur. Mavi/mor ambient .045/.025 opaklıkla çok hafiftir; mevcut kenar shading'i lacivert/.22 seviyesine çekildi. Reduced-motion zemini de aynı palette. Web/Mobil/AI bileşenleri, timing, layout ve header/diğer bölümler değişmedi. CSS parse/grid yokluğu/zemin dışı deklarasyonların korunması ve diff-check geçti; tarayıcı testi yok. Commit/push/deploy yok. Detay: [[logs/2026-10-11-scene-background]].

## 11 Ekim 2026 — Scroll zamanlama iyileştirmesi

Kullanıcı son sahne tasarımlarını beğendi; yalnızca timing revize edildi. WebToMobileTransition.tsx: Web %0–28 tam görünür, %28–36 çıkış; Mobil %28–36 giriş, %36–70 tam görünür/sabit, %70–78 çıkış; AI %70–78 giriş, %78–100 tam görünür. Metin ve görsel ortak opacity kullanır. Telefonun konum/dönüş/scale girişi %36'da tamamlanır; erken kaybolmasına yol açan ayrı opacity çarpımı kaldırıldı. Görsel hareketlerin mevcut uç değerleri korunur.

Sahne tasarımı/içeriği, responsive CSS, reduced-motion markup, scroll offset/spring ve 340/280/260svh yükseklikleri değişmedi. TypeScript, hedefli lint, gerçek opacity eğrileriyle boş aralık olmaması/Mobil hold ve markup korunma kontrolü, diff-check geçti. Tarayıcı/build yok. Commit/push/deploy yok. Detay: [[logs/2026-10-11-scene-timing]].

## 11 Ekim 2026 — AI iş akışı ve telefon header boşluğu

Kullanıcı Mobil sahnesini beğendi. Yeni AIScene; örnek gelen talep → AI özet/kategori önerisi → insan onayından sonra görev iş akışını gösterir. Başlık “Tekrarlayan işleri akıllı akışlara dönüştürün.”, açıklama özel AI çözümleri hizmetini anlatır; lacivert/mavi/mor ve ortak Space Grotesk, TR/EN/DE korunur. AI önerileri açıkça öneri olarak etiketlenir, görev insan onayına bağlıdır; gerçek SaaS iddiası yok.

Eski PhoneVisual/telefon katmanı, screenGlobe, ekosistem etiketleri ve kullanılmayan CSS kaldırıldı. Onaylı yeni Mobil telefon %65–70 aralığında çıkar; AI %70–78 mevcut aralığında gelir. Web/Mobil içerikleri ve mevcut scroll/phone/mobil/AI transform değerleri, 340/280/260svh yükseklikleri korunur. Mobil telefon top konumu desktop/tablet +32px, mobil +16px aşağı alınarak header boşluğu artırıldı. Hero değişmedi.

TypeScript, hedefli lint, CSS/sınıf kontrolü, değişiklik öncesine göre Web/Mobil copy ve korunan timing karşılaştırması, eski katman yokluğu ve diff-check geçti. Tarayıcı/build yok; responsive görünüm kullanıcı manuel kontrolünde. Commit/push/deploy yok. Detay: [[logs/2026-10-11-ai-workflow]].

## 11 Ekim 2026 — Mobil sahnesi yenilendi

Kullanıcı Web sahnesini beğendi; bu tur yalnızca Mobil yenilendi. Yeni MobileScene açık blue-gray zemin/beyaz kart/mavi vurgularla, WebScene'deki aynı görev/sorumlu/checklist'i bildirim ve görev detayı olarak gösterir. Başlık “İşiniz, her an yanınızda.”; açıklama özel mobil uygulama geliştirme hizmetini anlatır. TR/EN/DE ve ortak Space Grotesk korunur.

WebScene ve AI kaynakları/transformları değiştirilmedi. Yeni mobil telefon mevcut phone motion değerlerini kullanır; %65–70 mevcut geçiş aralığında eski telefon geri gelir, AI %70 girişinde orijinal görünümü korur. Mobil küçük ekranda yalnızca yeni telefon/metin geometrisi ayrılır; açıklama görünür. Reduced-motion mobil görünümü aynı statik ekrandır. Bölüm yükseklikleri/scroll offset/spring/süre aralıkları korunur.

TypeScript, hedefli lint, CSS parse, eski PhoneVisual ve mevcut AI/phone zamanlama karşılaştırması, diff-check geçti. Tarayıcı/build yok; manuel görsel kontrol kullanıcıda. Commit/push/deploy yok. Detay: [[logs/2026-10-11-mobile-scene]].

## 11 Ekim 2026 — İlk Web sahnesi uygulaması

Storyboard genel olarak onaylandı; bu tur yalnızca Web sahnesi uygulandı. DigitalGlobe yerine yeni WebScene paneli: BayesSoft markası, yönetim menüsü, kurumsal platform/portal/operasyon projeleri ve seçili görev detayı. Başlık “İş süreçleriniz, tek ekranda.”; açıklama özel yönetim paneli/kurumsal platform hizmetini açıkça anlatır. TR/EN/DE korunur. Hero'daki tek Space Grotesk tanımı heroFont.ts'e taşınıp paylaşılır; hero tasarımı/içeriği değişmedi.

Mevcut useScroll/useSpring, Web fade aralığı ve tüm telefon/AI motion değerleri korunur. Yalnızca Web görselinin aşırı küre zoom'u yerine 1–1.04 ölçek kullanılır. Bölüm yüksekliği 340/280/260svh değişmedi. Tablet Web metni üstte/panel altta, mobil açıklama görünür ve panel sadeleşir. Reduced-motion Web kartında aynı statik panel vardır; mobil/AI kaynakları korunur.

TypeScript, hedefli lint, CSS parse, telefon/AI dönüşümleri ve bölüm yüksekliği karşılaştırması, diff-check geçti. Tarayıcı/build yok; görsel değerlendirme kullanıcıda. Commit/push/deploy yok. Detay: [[logs/2026-10-11-web-scene]].

## 11 Ekim 2026 — Hero / Web–Mobil–AI zemin geçişi

Kullanıcı Hero v1'in tamamlandığını/pushlandığını bildirdi; bu turun başlangıcında feature/bayessoft-2.0 çalışma ağacı temizdi. Yalnızca Hero.module.css ve WebToMobileTransition.module.css zemin birleşimi düzenlendi. Hero alt çizgisi kaldırıldı; son 8rem içinde #0B111B ara laciverte hafif fade, sonraki sticky sahnenin üstünde aynı tondan mevcut laciverte geçiş kullanılır. Sahne kenar gölgesi üst sınırda şeffaf başlayarak mobile dahil yumuşar. Reduced-motion statik görünümü de aynı birleşim rengini kullanır.

Boyut/padding/scroll yüksekliği ve tüm motion/TSX kaynakları değişmedi; ekstra alan/animasyon/kütüphane yok. CSS parse ve Git HEAD ile zemin dışı CSS deklarasyon karşılaştırması, diff-check geçti. Görsel kontrol kullanıcıda, tarayıcı/build yok. Commit/push/deploy yok. Detay: [[logs/2026-10-11-hero-scene-transition]].

## 11 Ekim 2026 — Son küçük vitrin düzenlemeleri

HeroShowcase UI mavi/mor vurguları hafif canlandırıldı; değişkenler bileşen içinde sınırlı, glow/animasyon artmadı. Vitrin altı caption ve kullanılmayan TR/EN/DE note alanları kaldırıldı; cihaz içi örnek arayüz rozetleri kalır. Hero alt padding masaüstü 32–48px, tablet 40px, mobil 32px'e indirildi. Başlık/CTA, cihaz ölçü/yerleşimi, koyu web/açık telefon ve diğer bölümler korunur. TypeScript, hedefli ESLint, CSS parse/caption yokluğu ve diff-check geçti; tarayıcı kontrolü yok. Commit/push/deploy yok. Detay: [[logs/2026-10-11-showcase-final-tweaks]].

## 11 Ekim 2026 — Açık telefon / koyu web karşıtlığı

Yalnızca HeroShowcase.module.css telefon ekran renkleri değişti. Telefon zemin #E9EEF5 → #F5F7FB, kartlar beyaz, ince #D5DEEB sınırlar, ana metin #152238 ve ikincil #53647B; vurgular mevcut mavi ve ölçülü mor. Avatar/progress/nav renkleri açık zemine uyarlandı. Koyu web paneli, cihaz çerçevesi/ölçüsü/kompozisyonu, metinler ve hero/CTA değişmedi. CSS parse/ayrı tema kontrolü ve diff-check geçti; görsel kontrol kullanıcıda. Commit/push/deploy yok. Detay: [[logs/2026-10-11-phone-light-theme]].

## 11 Ekim 2026 — Cihaz yerine rafine web paneli

Güncel onay: fiziksel laptop kaldırılır, mevcut web arayüzü perspektifsiz sade panelde sunulur. HeroShowcase.tsx/module.css içinde laptop lid/base/kamera ve transformları kaldırıldı; aynı genel konum/ölçüde ince kenarlık, radius ve ölçülü gölge kullanılır. Telefon ayrı ön plan mockup olarak kaldı; ince metal kenar, orantılı bezel/köşeler, kamera lensli daha küçük island ve yan düğmeler iyileştirildi. Web/mobil içerikleri, hero başlığı/CTA ve diğer bölümler değişmedi. Yeni animasyon/kütüphane yok.

TypeScript, hedefli ESLint, CSS parse/sınıf eşleşmesi ve diff-check geçti. Görsel kabul kullanıcıda; tarayıcı testi yapılmadı. Commit/push/deploy yok. Detay: [[logs/2026-10-11-showcase-web-panel]].

## 11 Ekim 2026 — Laptop ölçeği ve ekran kontrastı

Yalnızca HeroShowcase.module.css değişti. Laptop genişliği %76 → %68.4 (mobil %90 → %81), yani %10 küçüldü; merkez hizası korunarak daha yukarı konumlandı. Telefon boyutu/konumu ve cihaz perspektifleri korunur. Ekranlarda aktif menü ana mavi/beyaz, kartlarda daha net lacivert yüzey/border, ikincil metinde #C0CDE0; ilerleme ve görev göstergelerinde kontrollü mavi/mor vurgular kullanılır. Yeni glow/animasyon yok. Hero başlık/CTA, arayüz içerikleri/diller ve diğer bölümler değişmedi.

CSS parse, %10 ölçek/telefon genişliği kontrolü ve diff-check geçti; tarayıcı kontrolü yok. Commit/push/deploy yok. Detay: [[logs/2026-10-11-showcase-contrast]].

## 11 Ekim 2026 — Hero etiketi/boşluklar ve örnek cihaz arayüzleri

Kullanıcı hero eyebrow etiketinin kaldırılmasını ve cihaz içlerinin genel amaçlı BayesSoft web yönetim paneli + uyumlu mobil arayüzle doldurulmasını onayladı. Yalnızca Hero.tsx/module.css ve HeroShowcase.tsx/module.css değişti. Üst padding ve CTA–vitrin aralığı azaltıldı; cihaz genişliği/oranı/perspektifi ve başlık fontu/ölçeği korunur. Web–Mobil–AI kaynakları değişmedi.

Örnek projeler/görevler/ekip/aktiviteler, TR/EN/DE dil seçimine uyar. Web ve mobil aynı örnek proje adları/sayılarını kullanır. “Örnek arayüz” rozetleri ve görünür vitrin açıklaması vardır; gerçek SaaS veya sektör ürünü iddiası yok. Statik dekoratif ekranlar etkileşimsiz/aria-hidden; yeni kütüphane/animasyon yok. CSS container ölçülerine göre font ölçekler; mobil laptop içi daha sade düzen kullanır.

TypeScript, hedefli ESLint, CSS parse/sınıf eşleşmesi ve diff-check geçti. Yeni tarayıcı testi/build yok; görsel kontrol kullanıcıda. Commit/push/deploy yok. Detay: [[logs/2026-10-11-hero-sample-interfaces]].

## 11 Ekim 2026 — HeroShowcase ölçek/boşluk ayarı

Kullanıcı ilk cihaz kompozisyonunu beğendi. Yalnızca iki hero CSS dosyasına >=1024px kuralları eklendi: vitrin genişliği %88 / maksimum 968px (1280–1512px'te önceki 1100px'e göre %12 küçük), CTA–vitrin boşluğu clamp(2.5rem, 4vw, 3.5rem), başlık clamp(44px, 4.4vw, 66px). Cihaz oranları/transformları, placeholder ekranları, HTML ve mobil/tablet kuralları değişmedi. CSS parse, hedef genişliklerde ölçek hesabı ve diff-check geçti; görsel kontrol kullanıcıda, tarayıcı testi yok. Commit/push/deploy yok. Detay: [[logs/2026-10-11-showcase-scale]].

## 11 Ekim 2026 — HeroShowcase: statik cihaz kompozisyonu

Kullanıcı yalnızca laptop + telefon vitrini istedi. `HeroShowcase.tsx` ve modül CSS'i eklendi; Hero içinde mevcut metin/CTA bloğunun ardından render edilir. Masaüstünde büyük perspektifli laptop, önde solda telefon; mobilde laptop daha yukarı, telefon alt/ön planda daha büyük oranda konumlanır. CSS cihaz çerçeveleri, gölgeler, çok hafif mavi/mor ışık ve sade placeholder ekranlar kullanılır. Referans görseli siteye gömülmedi; dashboard/animasyon/yeni kütüphane yok. Dekoratif kompozisyon aria-hidden ve etkileşimsizdir.

Hero metinleri, Space Grotesk/Inter, CTA bağlantıları ve diğer bölümler korundu. TypeScript, hedefli lint, CSS parse/statik kompozisyon ve diff-check geçti. Tarayıcı testi yapılmadı; manuel görsel değerlendirme kullanıcıda. Commit/push/deploy yok. Detay: [[logs/2026-10-11-hero-showcase]].

## 11 Ekim 2026 — Hero ölçek/boşluk revizyonu

Kullanıcı sade hero stilini beğendi; paylaştığı Linear ekran görüntüsündeki metin–CTA–ürün görseli ritmi referans alındı. Yalnızca `Hero.module.css` düzenlendi: masaüstü başlık yaklaşık %24 küçültüldü (1440px: 92 → 70px); mobil 34–48px ölçeği korunur. Başlık–açıklama 24px, açıklama–CTA 32px (mobil 30px). Viewport'a bağlı minimum yükseklik yerine içerik yüksekliği ve kontrollü padding kullanılır; `.inner` doğal akışta ileride CTA altında ürün görselini barındırabilir. Şimdilik görsel/placeholder eklenmedi. Space Grotesk, metin/link/renk/motion ve diğer bölümler korunur.

CSS parse, 1024/1440/1920px ölçek hesabı ve diff-check geçti. CSS-only değişiklikte typecheck/build/tarayıcı testi tekrarlanmadı; görsel kabul kullanıcıda. Commit/push/deploy yok. Detay: [[logs/2026-10-11-hero-scale]].

## 11 Ekim 2026 — Güncel hero: ortalanmış sade kompozisyon

Kullanıcı Space Grotesk'i beğendi ve korunmasını istedi. Yeni onay yalnızca hero section içindir: büyük ortalanmış Space Grotesk 700 başlık, mevcut Inter açıklama ve iki CTA, lacivert zemin üzerinde çok hafif statik mavi/mor radial glow. Başlık/açıklama/CTA metinleri ve bağlantıları korundu; mobilde CTA'lar alt alta, hero yüksekliği içeriğe göre büyür. Yeni dashboard/3D/karmaşık animasyon yok; mevcut metin reveal ve reduced-motion davranışı korunur.

Video öğesi, oynatma effect/ref'i ve kullanılmayan video/overlay CSS'i kaldırıldı. Video dosyaları silinmedi/değişmedi. Bu karar önceki “hero videosunu koru” talimatının kullanım kısmını geçersiz kılar. Diğer bölümlerde bu tur değişiklik yok; önceki onaylı çalışma ağacı korunur.

TypeScript, hedefli Hero ESLint, CSS parse/içerik-CTA kontrolü ve diff-check geçti. Tarayıcı incelemesi/build çalıştırılmadı; görsel değerlendirme kullanıcıda. Dal `feature/bayessoft-2.0`; commit/push/deploy yok. Detay: [[logs/2026-10-11-hero-centered]].

## 11 Ekim 2026 — Phase 2 ilk adım: hero font denemesi

Kullanıcı yalnızca hero H1 üzerinde Montserrat → Space Grotesk karşılaştırması istedi. `Hero.tsx` içinde `next/font/local` ile tek 700 WOFF2 (41.780 byte) ve yalnızca H1 üzerinde `--font-hero` kullanılır. Inter gövde, başlık metni, video, renkler, CTA ve motion korunur. Diğer bölümlere dokunulmadı; önceki Phase 1 çalışma ağacı değişiklikleri korundu. Türkçe glifler kontrol edildi; typecheck, hedefli lint, Next yerel font yükleyicisi ve diff-check geçti. Görsel karşılaştırma/kabul kullanıcıda. Commit/push/deploy yok. Detay: [[logs/2026-10-11-hero-space-grotesk]].

## 11 Ekim 2026 — Onaylı küçük tasarım iyileştirmeleri

Güncel checkout: `/Users/yavuz/Projects/BayesSoft_website`, dal `feature/bayessoft-2.0`. Kullanıcı önerilen sekiz iyileştirmeyi ve 768px tablet metin çakışmasının CSS ile giderilmesini onayladı. Lacivert ağırlık ve mevcut açık yüzeylerin dağılımı korunur; hizmetler/projeler/süreç tamamen açık yapılmaz. Hero videosu korunur; yeni görsel yön Phase 2'de değerlendirilir.

Ortak ana sayfa bölüm boşluğu, dengeli başlık satırları, tablet hero yüksekliği, mobil hizmet kartı aralıkları, proje başlık/görsel başlangıç hizası, Tam Finans logo kontrastı, referans logo oranları ve footer ölçeği düzenlendi. Hover/focus için mevcut semantik renk sistemi kullanılır. Tablet animasyonunda yalnızca metin sütunu genişliği/typografi değişti; TSX, sahneler, transform/zamanlama ve scroll mesafesi değişmedi.

Bu tur: TypeScript (`--incremental false`), ESLint (`--no-cache`), bellekte Tailwind CSS üretimi ve `git diff --check` geçti. Yeni bağımlılık, commit, push, deploy yok. Önceki Mac görsel incelemesi 1440/768/390px'te yapıldı; bu revizyon sonrası tarayıcı kontrolü kullanıcının talebiyle yapılmadı, manuel kabul bekliyor. Aşağıdaki Windows erişim engeli/QA notları tarihsel kayıttır.

Detay: [[logs/2026-10-11-phase1-refinements]].

Repo: C:/Users/yavuz/Desktop/BayesSoft_website. Dal: feature/bayessoft-2.0.

## 11 Ekim 2026 — Mac'e devam devri

Kullanıcı Mac'te yerel test için feature/bayessoft-2.0 dalına push istedi ve ardından commit onayı verdi. Bu onay yalnızca mevcut 2.0 kodu ve Markdown planlarının aktarımı içindir; merge/deploy onayı değildir. Transfer sonucunu Git'ten doğrula. .env ve cihazın .obsidian ayarları taşınmaz; mevcut Markdown kasa korunur.

Son kullanıcı geri bildirimi: revizyon sonrası renk tonları daha iyi, asıl fark animasyon detaylarıyla ortaya çıkacak. Bu, tüm desktop/mobile QA'nın veya Phase 2 storyboard'un kabulü değildir. Windows'ta yeniden başlatma sonrası son tarayıcı denemesi de kayıtlı site izni nedeniyle reddedildi. Başka araçla aşılmadı. Mac'te erişimin çalışacağı garanti edilmez; önce izinli tarayıcı ve yerel sunucu kontrol edilmeli.

Mac kurulumu ve yeni sohbete verilecek devam metni: [[15 - Mac Devam ve Test]]. Windows dosya yollarını Mac'te kullanma; Mac'teki gerçek checkout kökünü keşfet. Phase 2 için önce mevcut kaydırma sahnesini canlı değerlendir, sonra storyboard'u kullanıcıya sun. Yeni commit/push/deploy ayrıca onay gerektirir.

## 10 Ekim 2026 — Güncel lacivert ağırlıklı revizyon

Kullanıcının son açıklaması: beyaz detaylar, lacivert üzerinde premium çoğunluk. Bu yön, ZIP'teki geniş açık bölüm ritmi önerisini ve ilk uygulamadaki açık header/süreç alanlarını geçersiz kılar. Sabit bir renk yüzdesi onaylanmadı.

- Ana zemin/header: #101827; ikinci koyu yüzey: #17263F. Beyaz hizmet/proje kartları ve iletişim formu seçici kontrast sağlar. Süreç zemini/kartları lacivert; beyaz ikon yüzeyleri küçük detaydır. Referans bandı açık kalır, yüksekliği azaltılır.
- Yetkinlikler başlığına daha geniş masaüstü sütunu ve daha kontrollü başlık ölçeği verildi. Seçili proje kartında sol sütuna eşitlenerek büyüyen flex kuralları kaldırıldı.
- Mevcut içerik, bölüm sırası, bağlantılar, form mantığı ve Web/Mobil/AI animasyonu korunur. Animasyon yeniden tasarımı Phase 2.
- Kullanıcının sağladığı tam sayfa PNG incelendi. Görsel önceki sürümü gösterir; revizyon sonrası desktop/mobile canlı QA yapılmış değildir.
- Uzun koyu boşluk, 340svh kaydırma alanı ve sticky sahneyle ilişkili olabilir; tam sayfa görüntüsü tek başına gerçek kaydırma hatasını kanıtlamaz. Sahne kısaltılmadı. Sağdaki/alttaki açık alanın capture sınırı mı gerçek taşma mı olduğu doğrulanmadı.
- Revizyon için lint, typecheck, yerel build (18 statik sayfa) ve diff-check geçti. Data ve WebToMobileTransition kaynaklarında Git farkı yok. Tarayıcı erişimi engelli; başka araçla aşılmadı.
- Commit/push/deploy yok. Sonraki adım yenilenen görünümün kullanıcı değerlendirmesi ve desktop/mobile görsel-etkileşim QA.

Detay: [[logs/2026-10-10-phase1-navy-rebalance]].

## Bağlam ve güvenlik

ZIP'teki 15 Markdown plan kaynağıdır; son kullanıcı açıklaması önceki önerilerden üstündür. Mevcut bayes 2.0/ kasası ve .obsidian ayarları korunur. Yeşil prototip önceki geçişte kullanıcı onayıyla kaldırıldı. SaaS/Ürünler sayfası eklenmez. Secret dosyalarını okuma/değiştirme; diğer çalışmaları koru.

Phase 1 tüm mevcut sayfalara uygulanabilir. TR/EN/DE, içerik, URL/SEO ve form davranışı korunur. Önceki azaltılmış hareket desteği kalır; normal animasyon akışı yeniden tasarlanmaz. Gerçek form gönderimi, commit, push veya deployment ayrıca kullanıcı onayı gerektirir.

Kaynaklar: [[03 - Tasarım Sistemi]], [[06 - Karar Kaydı]], [[08 - Phase 1 Tasarım Önerisi]].

## Görsel doğrulama sınırı

İncelenen dosya: C:/Users/yavuz/Downloads/127.0.0.1_3000_.png. Önceki sürümün tam sayfa görüntüsüdür; canlı kaydırma/mobil/menu/dil/form/galeri testinin yerine geçmez. Tarayıcı aracı kullanıcı izin değişikliklerine rağmen kayıtlı izin engeli döndürdü. Aynı izin adımlarını kullanıcıya tekrar tekrar yaptırma; erişimi dolaylı yolla aşma.
