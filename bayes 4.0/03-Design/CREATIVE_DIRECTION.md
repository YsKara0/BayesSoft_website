---
project: BayesSoft 4.0
created: 2026-10-13
status: identity-proposal-review
tags: [bayessoft-4, design, concepts]
---

# Yaratıcı yön — önce görsel kimlik

## 13.10.2026 — Tek güncel öneri: İhtiyacın ölçüsü

Kullanıcı animation-first sürecini durdurup identity-first'e geçti. Teknik olarak güçlü 3D, marka anlamı zayıfsa kimliği taşıyamaz. Önceki deneyler yalnız referans; yeni animasyon, homepage veya 3D nesne bu görevde yok.

Merkez fikir: **BayesSoft, farklı ihtiyaçları size göre tasarlanmış ve birlikte çalışan yazılıma dönüştürür.** Açık ölçü çizgileri, ortak eksenden başlayıp içeriğe oturan dört eşit hattır. Farklı ihtiyacın aynı özenli sistemle karşılanmasını gösterir. Rastgele heykel, network, puzzle, AI çekirdeği veya ürün dashboard'u değildir.

Görsel sistem: Manrope tek aile; beyaz `#FFFFFF`, mineral `#EEF1EE`, mürekkep `#192D33`, ikincil `#52656C`, eylem mavisi `#285BD6`, tint `#DDE6F8`. 12/4 sütun, 8px boşluk tabanı, kare görseller, yalnız kontrol köşelerinde 4px. Kısa Türkçe metin ve doğal oranlı gerçek proje ekranı. Dört hizmet aynı hiyerarşi ve kontrol ölçüsünde.

Resmî Figma MCP ile ayrı **BayesSoft 4.0 — Visual Identity** sayfasında tek editable pano oluşturuldu: [Identity Board 01 — İhtiyacın ölçüsü](https://www.figma.com/design/gLI3OMMpoaiaxm1zfa0Apf/?node-id=141-2). A–G, ayrı H hareket niyeti ve I inceleme bölümleri tamamlandı. Başlık/support/navigation/label, native grid, üç aynı-dil motif kullanımı, gerçek FurtherUp Drive ekranı ve küçük iletişim specimen'i mevcut. Tam ana sayfa değildir.

UI UX Pro Max ile okunurluk/kontrast/48px hedef/focus/reduced-motion değerlendirmesi; Frontend Design ile tek fikir ve düşük görsel gürültü. Hareket yalnız niyet olarak anotasyon: kapsam ucunun ölçüye oturması, proje focus kenarı, yetkinlik seçim işareti. CSS yeterli; karmaşık reflow için GSAP aday, Three.js gerekli değil. Reduced-motion anlık statik durum.

Ana açık soru logosuz ayırt edicilik. Tipografi Türkçe specimen ile render edildi; uzun metin/EN/DE/gerçek responsive ve runtime a11y kabulü ayrı iş. Kullanıcı bu tek panoyu değerlendirmeden homepage'e geçilmez. Ayrıntı [[VISUAL_IDENTITY_PROPOSAL_01]].

## Tarihsel foundation — üç bağımsız 3D konsept

Aşağıdaki ilk araştırma silinmedi. Konsept rotalarının oluşturulmadığına dair cümleler o ilk oturumun durumudur; güncel deney sonucu [[98-Agent-Logs/CURRENT_STATUS]] içindedir. Bu üç konsept artık varsayılan kimlik yönü değildir.

Aşağıdaki fikirler kullanıcı brief'inin tasarım önerileridir; henüz görsel, model veya kod üretilmedi. A/B/C, 3.0'daki varyant ve metin yüzlerinin devamı değildir. Hiçbiri dört yüzlü dönen prizma veya metin carousel'i olmak zorunda değildir.

## Ortak araştırma zemini

Beyaz/mineral gri sahne, mat nötr malzeme ve sınırlı mavi. Tek görsel odak; başlık ve dört kısa hizmet etiketi gerektiğinde sahne dışında HTML ile desteklenir. Deney düzeneği header/footer, tam hero veya ana sayfa içermez. Hizmetlerin semantik önemi eşittir; geometrinin biçimi işlevine göre değişebilir.

İlk karşılaştırmada benzer kadraj alanı, ışık kalitesi, kısa açıklama ve tek temel etkileşim kullanılır. Premium hissi yoğun efektlerle değil oran, kesit, birleşim ve ışıkla araştırılır.

## A — Modular Assembly

**Görsel fikir:** Dört farklı ama aynı malzeme ailesinden geometrik modül, tamamlandığında bir çalışma sistemi oluşturur. Birleşim derzleri ve kesitler görünürdür; dört kutunun yan yana dizilmesi yerine parçaların birbirini tamamlaması araştırılır. 2.0 süreç assembly'sinin geometri, adım veya SVG'si kopyalanmaz.

**Hizmetlerle ilişkisi:** Web geniş bir düzlem, mobil daha dar düşey bir parça, AI giriş/çıkış ilişkili bir köprü, özel yazılım uyarlanabilir bir bağlantı modülü olabilir. Dördünün görünür ağırlığı ve seçim hakkı eşittir; özel yazılım veya AI diğerlerinin sahibi gibi sunulmaz. Birleşme iş birliği metaforudur; dört hizmetin zorunlu paket olduğu iddiası değildir.

**Olası 3D hareket:** Hafif ayrık poz → kısa, anlaşılır hizalanma → birleşmiş sistem. Seçilen modül sınırlı mesafede ayrılıp kendi bağlanma noktasını gösterir; sonra yerine oturur. Durağan tamamlanmış poz da tasarımı taşır; sürekli sökülüp kurulma yok.

**Malzeme ve ışık:** Mat beyaz ve mineral gri yüzeyler, küçük kesit/pah ayrıntısı; tek yumuşak ana ışık ve dengeli dolgu. Mavi yalnız seçili derz/bağlantı veya tek küçük yüzeyde. Cam, glow ve büyük gölge ilk turda yok.

**Etkileşim:** Modül seçimi veya “Birleşimi göster” eylemi; fare, dokunma ve dış HTML düğmesi aynı sonucu verir. Hover yalnız ek ipucu olabilir. İlk turda serbest sürükleme veya oyunlaştırma yok.

**Teknik zorluk:** Orta. Parça kesitleri, pivot/origin, birleşme toleransı ve tüm yol boyunca çakışma kontrolü. Önceden belirlenen yollar fizik simülasyonundan önce denenir.

**Mobil davranış:** Daha dik kadraj ve daha kısa ayrılma mesafesi; dört parça korunur. Tamamlanmış statik poz ilk durumdur; dokunmayla tek modül seçilir. Sürükleme native scroll'u ele geçirmez. Azaltılmış harekette seçim anlık vurgu olur.

**Test edilecek temel varsayım:** Birleşen parçalar, kısa hizmet etiketleriyle birlikte BayesSoft'un farklı yazılım yetkinliklerinin uyumunu anlatıyor mu? İlk kısa incelemede “yazılım sistemi” yerine puzzle/oyuncak okunuyorsa geometri veya metafor revize edilir.

**Planlanan rota:** `/prototype/v4-modular` — henüz oluşturulmadı.

## B — Kinetic Architecture

**Görsel fikir:** İnce mimari yüzeyler, ortak bir strüktür içinde açılıp yer değiştirerek farklı kullanım formları oluşturur. Negatif alan, kesit ve yüzeylerin devamlılığı ayırt edici öğedir. Metin taşıyan dört yüzlü rotor, sabit prizma çerçevesi veya 3.0 kompozisyonu alınmaz.

**Hizmetlerle ilişkisi:** Web geniş yatay açıklık, mobil düşey açıklık, AI iki yüzeyi bağlayan yönlendirilmiş geçiş, özel yazılım ihtiyaca göre yeniden kurulan katman ilişkisiyle araştırılır. Dört durum aynı strüktürün eşit seçenekleridir; son durum diğerlerinden daha önemli değildir.

**Olası 3D hareket:** Yüzeyler tanımlı eksenlerde döner, açılır ve yeni forma yerleşir. Hareket “aynı yapı farklı ihtiyaca uyum sağlar” fikrini taşır. İlk deneme rijit yüzey/pivot dönüşümüdür; gerçek bükülme ayrı teknik ihtiyaç olarak incelenir.

**Malzeme ve ışık:** Açık mineral kompozit veya mat alüminyum hissi; ince ama hacmi seçilen kesit. Yumuşak yanal ışık negatif alanı ve katmanı görünür kılar. Mavi küçük birleşim hattında; fazla parlak metal, cam kule veya neon ışık yok.

**Etkileşim:** Dışarıdaki dört eşit hizmet seçimi formu değiştirir. Kamera sabit veya çok sınırlı açı farkıyla kalır; seçim sonrası gerekli açıklama değişirken hizmet listesi yerinde kalır. Dönüşüm kullanıcı tarafından başlatılır; ilk turda scroll scrubbing yok.

**Teknik zorluk:** Yüksek. Hiyerarşik pivotlar, ince yüzeylerin kenardan kaybolması, öz örtüşme ve gölge tutarlılığı. Deformasyon gerekirse geometri/normaller ve shader maliyeti ayrıca sınanır; başlangıçta varsayılmaz.

**Mobil davranış:** Katman sayısı ve hareket açıklığı sadeleştirilir; formun ana silueti korunur. Sabit kamera, dokunmayla durum seçimi ve anlık statik alternatif. Kenar inceliği küçük ekranda okunamıyorsa kalınlık veya kadraj yeniden ayarlanır.

**Test edilecek temel varsayım:** Dönüşen mimari yüzeyler yazılımın uyarlanabilirliğini anlatırken hizmetler ayırt edilebiliyor mu? Yalnız bir mimarlık/enstalasyon nesnesi okunması veya hareket boyunca kimliğin kaybolması bu varsayımı zayıflatır.

**Planlanan rota:** `/prototype/v4-kinetic` — henüz oluşturulmadı.

## C — Living Network

**Görsel fikir:** Dört eşit hizmet kümesi, açık ve seyrek bir düğüm/bağlantı sisteminde ilişki kurar. Ağ rastgele parçacık bulutu değildir; hangi öğelerin bağlı olduğu durağan durumda da anlaşılır. Tek baskın AI çekirdeği veya beyin/küre sembolü yok.

**Hizmetlerle ilişkisi:** Web erişim yüzeyi, mobil hareket hâlindeki erişim, AI seçili girdi/çıktı ilişkisi, özel yazılım işletmeye göre kurulan akış olarak temsil edilebilir. Kümeler aynı ölçek ve seçilebilirlikle görünür; bağlantılar somut entegrasyon fikrini destekler.

**Olası 3D hareket:** Sınırlı ve düşük genlikli yer değiştirme; seçimde yalnız ilgili hat boyunca kısa bir aktarım. İlk prototipte sabit topoloji ve belirlenmiş pozlar kullanılır. Durduğunda ağın anlamı korunur; sonsuz veri akışı veya rastgele orbit yok.

**Malzeme ve ışık:** Mat beyaz/mineral düğümler, yeterince görünür nötr bağlantılar; mavi yalnız seçili yolda. Geniş yumuşak ışık ve hafif temas hissi. Bloom, ışıklı kablolar ve yıldız alanı ilk turda yok.

**Etkileşim:** Düğüm kümesi veya karşılık gelen HTML hizmet düğmesi seçilir; bağlı yol görünür ve kısa açıklama sunulur. Küçük 3D hedeflere hassas tıklama tek erişim yolu olmaz. Hover ile keşif ek olabilir; klavye/dokunma aynı ilişkiye ulaşır.

**Teknik zorluk:** Orta–yüksek. Bağlantıların derinlikte örtüşmesi, küçük hedefler, çizgi okunurluğu ve ağ büyüdükçe render maliyeti. Tekrarlı geometri/kaynak paylaşımı araştırılır; kuvvet simülasyonu ilk ihtiyaç değildir.

**Mobil davranış:** Dört ana küme kalır; ikincil düğümler azalır ve ağ daha düz bir derinliğe yerleşir. Dokunmayla yol seçimi; otomatik dolaşma yok. Azaltılmış harekette aynı yol anlık renk/kalınlık ve metinle gösterilir.

**Test edilecek temel varsayım:** Görünür bağlantılar BayesSoft'un hizmetler arası ilişkisini açıklıyor mu, yoksa jenerik AI/blockchain ağı olarak mı okunuyor? Etiketler varken bile AI diğerlerini gölgeliyorsa topoloji ve hareket dili revize edilir.

**Planlanan rota:** `/prototype/v4-network` — henüz oluşturulmadı.

## Ön karşılaştırma

| Konsept | Ana anlatı | Güçlü olabilecek yön | Ana risk |
|---|---|---|---|
| A | Parçalar birlikte bir sistem kurar | Somut ve anlaşılır birleşme | Puzzle veya eski süreç görseli çağrışımı |
| B | Yapı ihtiyaca göre dönüşür | Özgün siluet ve premium malzeme | Hizmet anlamının mimari soyutlukta kaybolması |
| C | Yetkinlikler ilişkilerle çalışır | Etkileşimde bağlantının açıklığı | Jenerik ağ estetiği ve görsel karmaşa |

Bu tablo beklentidir; test sonucu veya konsept seçimi değildir. Review yöntemi [[07-Reviews/COMPARISON_CRITERIA]], uygulama sırası [[04-Prototypes/PROTOTYPE_PLAN]].
