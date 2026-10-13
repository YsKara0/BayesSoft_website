# Variant C — Architectural Spatial

12 Ekim 2026 · Yalnız sol obje rafinesi. A/B korunur; yeni marka konsepti, sağ tasarım veya frontend yok. **C'nin görseli ve hareket modeli onaysız.**

## A/B değerlendirmesi ve plan

Anthropic `frontend-design` rehberi, güncel loglar ve A/B karşılaştırması incelendi. A'nın geometrisi/typografisi temiz; derinlik çok sessiz. B'nin hafif ışığı yüzeyi daha iyi hissettiriyor; ancak ortak üst panel hâlâ şerit ve önden görünüm düz kart gibi okunabiliyor.

C planı: aynı 540×512 px ölçeği ve 82/54 px Instrument Sans Medium hiyerarşisini koru; üst-alt parçaları arkaya devam eden yüzeyler ve ince ortak taşıyıcıyla bağla. Alt ifadeyi çıkar. Orta yüzü üst-alt eksen yataklarına bağla, gölge/kenarı azalt. Plan kontrolünde tam offset arka dikdörtgen, güçlü gölge, UI kontrolü ve yeni süs elendi. Görsel bütçe tipografi ve yapı ilişkisinde.

## Yeni yapı

- Üst bölüm: 12 px derinlik projeksiyonlu üst düzlem ve 28 px öne dönen yüz. Bir boş şerit yerine objenin devam eden mimari başlığı.
- İki ince arka dikme üst-alt yüzeyleri bağlar. Bunlar dönmez; rota açıldığında taşıyıcı boşluğu görünür.
- Orta plaka: 534×398 px, yaklaşık 1.1 px mat malzeme kesiti. Üst-alt küçük yatakları bağlayan x=270 düşey eksen önerisi.
- Alt bölüm: 10 px dönüş düzlemi ve 56 px sade ön yüz. “Küçük ve orta ölçekli işletmeler için.” kaldırıldı; alt bölümde metin yok.
- Üst-alt ışık/gölge tek yönde, çok hafif. Ortam %2.6 / 18 px blur / 1–4 px offset; orta yüz %1.4–2.1 / 12 px blur / 0.5–2 px offset. Önceki B'ye göre daha az offset/gölge; kalın renkli kenar ve neumorphism yok.

Bu ölçüler görsel projeksiyondur; üretim/CAD veya fiziksel simülasyon değildir. Malzeme/renk/ışık ve eksen değerleri [[DESIGN_SYSTEM]] içinde geçici olarak kayıtlıdır.

## Figma — yalnız yeni C

[C / sade sol obje inceleme](https://www.figma.com/design/gLI3OMMpoaiaxm1zfa0Apf?page-id=36%3A64&node-id=88-961)

| Frame | Link | İçerik |
|---|---|---|
| Variant C / sol obje inceleme | [Sade kadraj](https://www.figma.com/design/gLI3OMMpoaiaxm1zfa0Apf?node-id=88-961) | 720×660, sadece yeni sol obje |
| Variant C / iki yüz | [A/B metin durumları](https://www.figma.com/design/gLI3OMMpoaiaxm1zfa0Apf?node-id=85-961) | 1320×726, eşit ölçek |
| C / Yüz A | [İşinize göre yazılım.](https://www.figma.com/design/gLI3OMMpoaiaxm1zfa0Apf?node-id=85-966) | 540×512, hafif 16° sunum |
| C / Yüz B | [İkinci metin](https://www.figma.com/design/gLI3OMMpoaiaxm1zfa0Apf?node-id=85-990) | Aynı obje, 164° arka yüz sunumu |
| C / dönüş durumları | [0°–35°–90°–145°–180°](https://www.figma.com/design/gLI3OMMpoaiaxm1zfa0Apf?node-id=85-1012) | 1824×yaklaşık 640, ayrı native durumlar |

![[evidence/left-c-architectural-spatial.png]]

![[evidence/left-c-faces.png]]

## Eksen ve hareket niyeti

İnce plakanın ön/arka yüzleri için düşey eksende yarım dönüş denenir. Önceki 90° X eksenli bitişik yüz modeli C'ye taşınmadı; eski frame korunur. Ana sunum 16°/164° hafif açılıdır: önden tamamen düz algıyı azaltır, taşıyıcı açıklığını gösterir. Font boyutu/weight/tracking değişmedi; baskı yüzünün projeksiyonu görsel genişliği hafif daraltır.

Dönüş durumu board'unda 0° A, 35° A, 90° yalnız kesit, 145° B ve 180° B vardır. Üst-alt yapı sabittir; orta plaka yerinden kayan kart değildir. Native text/vector/frame/rectangle katmanları düzenlenebilir. Bu gerçek animasyon veya 3D mesh değildir.

![[evidence/left-c-rotation-states.png]]

**Kritik sınır:** ince iki yüzlü panel 90°'de yazıyı gösteremez. C bu nedenle önceki “her fazda okunur mesaj” hedefini henüz karşılamıyor. Fiziksel niyet daha açık olsa da otomatik hareket çözümü onaylanmadı. Sürekli okunurluk korunacaksa eksen/yüz ilişkisi yeniden değerlendirilmelidir; durağan/elle değişim geçerli alternatif. [[MOTION_GUIDELINES]]

## 3D obje mi, kart mı?

Önden görünümde merkez hâlâ dikdörtgen bir yüzey; tek başına bu görüntü tamamlanmış 3D algısı sağlamaz. Üst-alt dönüş düzlemleri, ortak dikmeler, küçük yataklar ve açılan orta yüzün bıraktığı boşluk fiziksel taşıyıcı ilişkisini daha açık anlatır. Hafif açılı sunum kart hissini azaltır; gölgeyi büyüterek derinlik taklidi yapılmadı.

Sonuç: **öncekine göre obje mantığı daha inandırıcı, fakat 3D hissi bütünüyle çözülmüş değil.** Native 2D çizim mekanik/ışık doğruluğunu kanıtlamaz. Temiz tipografi korundu; küçük yatakların gerçek boyutta yeterince algılanması ve taşıyıcının UI border gibi okunup okunmaması kullanıcı incelemesine açık. Başarı iddiası veya motion onayı yok.

## Gerçek kontrol / korunmuş alanlar

- Önceki Spatial page'in A/B dahil 17 kök frame/component'inin bütün alt ağaç özellikleri aynı. Sağ kaynak/kompozisyon, eski page'ler ve önceki görseller düzenlenmedi. Bu tur yeni sağ kopya yok.
- Yeni C'de yalnız başlık text'i var; alt ifade, CTA, pause ve sayfalama taraması boş. Açılı görünür yüzlerin metin sınırları obje içinde; 90°'de text olmaması bilinen fiziksel sınır.
- Tüm ürün katmanları native; image fill yok. İnceleme, iki yüz ve durum board'u render edildi. İlk tam önden görünüm düz kaldığı için yalnız yeni C sunumu hafif açılı rafine edildi; son render kaydedildi.
- Üç PNG ve [QA JSON'u](evidence/left-c-qa.json) saklandı. 213 korunan yerel dosyanın SHA-256 karşılaştırması aynı; `git diff --check` geçti. Takip edilen dosyalarda değişiklik yok.
- Website, Bayes 2.0, agent rehberleri, logo ve referans korundu. AI üretim, commit/push/deploy yok. Gerçek browser/mobil/reduced-motion testi veya frontend animasyonu yapılmadı.

Güncel hafıza [[98-Agent-Logs/CURRENT_STATUS]], [[98-Agent-Logs/SESSION_LOG]], [[98-Agent-Logs/NEXT_STEPS]]. **Yalnız C sunulur; kullanıcı onayı beklenir.**
