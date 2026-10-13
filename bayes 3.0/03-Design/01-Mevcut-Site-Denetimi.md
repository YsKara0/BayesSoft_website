# Mevcut site — görsel ve içerik denetimi

12 Ekim 2026 · Kapsam: repository ve yerel Next.js render. Production denetimi değildir.

## Kaynaklar ve yöntem

`agents.md`, `CLAUDE.md`, README, package, ana sayfa, Header/Hero/Capabilities ve sayfa kaynakları; `data/home.ts`, `data/site.ts`, `data/projectDetails.ts`, referans verileri incelendi. 2.0 kasasında 07 AI Handoff, 06 Karar Kaydı, 05 Yol Haritası, 03 Tasarım Sistemi, 08 Phase 1 Tasarım Önerisi öncelikli okundu. Son geometrik süreç uygulaması, önceki dashboard/sticky tasarımlarından ayrıldı. 3.0 BRAND, CONTENT_GUIDELINES ve DESIGN_SYSTEM geçici taslak olarak okundu.

Tarayıcıda mevcut ana sayfanın hero, Web/Mobil sahne örnekleri, Web ve AI yetkinlik görselleri, referans/süreç/footer alanları; hizmetler, projeler, hakkımızda ve iletişim sayfalarının üstleri ile iletişim formu render edilerek incelendi. Varsayılan desktop yakalama yaklaşık 1470×745 px. Tüm proje detayları ve sayfaların bütün alt bölümleri optik olarak incelenmedi.

Kanıtlar:

![[evidence/current-home-desktop.jpg]]

![[evidence/current-process.jpg]]

![[evidence/current-contact.jpg]]

## Render ile desteklenen bulgular

| Alan | Gözlem | 3.0 açısından yorum / öneri |
|---|---|---|
| Genel sistem | Lacivert zemin, açık metin, mavi CTA ve sınırlar tutarlı | Sorun yalnızca koyu renk değildir. Görsel kalıptan önce hizmet ve marka anlatısı değişmeli. |
| Hero | Merkez başlık, tek bölümde açık mavi kelime vurgusu, iki CTA ve altta örnek dashboard/telefon | Ürün platformu/SaaS izlenimi riski var. Bu algı yorumu; her ziyaretçinin böyle düşündüğü iddia edilmez. |
| Küçük arayüz metinleri | Hero görselindeki örnek arayüz etiketi ve bilgiler ana önerme yanında çok küçük | Ana değer önerisi görsel içindeki minik yazıya bağımlı olmamalı. Örnek/ticari ürün ayrımı daha okunur kurulmalı. |
| Tekrarlı anlatım | Hero platform görselinden sonra Web/Mobil sahnesi, ardından aynı hizmetlerin yetkinlik anlatımı geliyor | İçerik tekrarının yolculuğu uzatma riski var; yeni homepage daha kısa, kanıta dayalı kurulabilir. |
| Yetkinlik görselleri | Web gerçek ekran; Mobil konsept olarak etiketli; AI alanında beyin/devre ikonu ve placeholder açıklaması | Görsel kanıt türleri farklı. AI için bir günlük iş ve insan onayı örneği daha açıklayıcı olur. |
| Alt sayfa girişleri | Hizmetler, projeler, şirket ve iletişimde aynı geometrik PRODUCT CORE motifi | Sistem tutarlı, fakat her sayfanın göreviyle özgül ilişki zayıf. Motif, içerik gerektiriyorsa kullanılmalı. |
| Logo | Header mor simge/yatay yazı; footer farklı çizgisel bilgisayar logosu | Kimlik iki ayrı işaretle anlatılıyor. 3.0 logo kararı sonra tek kullanım sistemi kurmalı; mevcut denemeler korunur. |
| Süreç | Dört parça ve kısa Anla/Tasarla/Geliştir/İşlet açıklamaları | Son uygulama okunur, somut çalışma sırası kuruyor. Korunabilecek anlam; birebir görsel miras alma zorunluluğu yok. |
| İletişim | Beyaz form koyu sayfada belirgin; uzun başlık ve büyük sosyal bağlantı panelleri var | Formun bulunabilirliği olumlu. Sosyal panellerin alanı, projeyi başlatma eylemi karşısında azaltılabilir. |

Renk, motif ve tipografi değerlendirmeleri render incelemesi sonrasında yapıldı. Kaydırma sırasında header'ın içerik üstünde görünmesi tek başına çakışma hatası sayılmadı. Sahnenin bir ekran görüntüsündeki anlık durumu animasyonun çalışmadığını kanıtlamaz.

## İçerik bulguları — kaynak ve görünür metin

1. Ana önerme “iş operasyonları / dijital ürünler / mühendislik ekibi” diliyle kuruluyor. Bu dil teknik güven sağlar; küçük işletmenin “ne yaptırabilirim?” sorusuna daha somut örnekle yanıt vermek gerekiyor. KOBİ ifadesi ana önerme yerine vaka anlatısında geçiyor.
2. Web, Mobil, AI üç deneyim katmanı olarak sunuluyor. Özel yazılım ayrı hizmet başlığı olarak hero/yetkinliklerde eşit yer almıyor; backend, API ve altyapı temel anlatısında kalıyor. Yeni brief dört hizmeti eşit istiyor.
3. “Ürün çekirdeği”, “mühendislik temeli”, API, RAG ve teknoloji yığınları teknik kapsamı ifade ediyor. İlk temas metninde iş ihtiyacı önce, teknoloji ayrıntısı vaka/detayda olmalı. Bu, teknolojilerin yanlış olduğu iddiası değil.
4. `data/projectDetails.ts` Smart Hospital problem/çözüm/özelliklerinde “Daha sonra eklenecek.” var. Bu kaynak bulgusudur; ilgili detay ekranı render edilmedi. Yayın öncesi tamamlama veya görünür kapsamı sınırlandırma gerekir.
5. `data/site.ts` ekip Website alanlarında `example.com` bağlantıları ve bazı bio metinlerinde dilbilgisi hataları var. Başarı, müşteri ilişkisi ve ekip deneyimi beyanları bağımsız doğrulanmış sayılmaz.
6. Proje girişinde “ölçülebilir etki” anlatısı, kaynaklarda doğruluk/performans/güvenlik iddiaları ve iletişimde “Genelde 24 saat içinde dönüş” beyanı bulunuyor. 3.0'a taşınmadan kaynak, ölçüm bağlamı ve kullanım onayı kaydedilmeli. Bu çalışmada yeni rakam veya garanti üretilmedi.
7. Müşteri logoları ve mevcut proje isimleri potansiyel güçlü kanıtlar. Repository'de bulunmaları yayın iznini veya sözleşme ilişkisini tek başına doğrulamaz; yeni heroda kullanılmadılar.
8. İletişim formunun proje türünde “Web” ayrı seçenek olarak görünmüyor; kurumsal yazılım, mobil, AI, bulut ve diğer var. Dört eşit hizmet brief'ine göre sonraki içerik aşamasında yeniden ele alınmalı; form mantığı değiştirilmedi veya gönderim yapılmadı.

## Mobil ve QA sınırı

390×844 viewport override ile DOM'da `scrollWidth=390` ölçüldü; o ölçüm anında yatay taşma yoktu. Ana sayfa bölüm yükseklikleri: hero 950, Web/Mobil/AI 2194, yetkinlikler 2241, çalışmalar 2526, referanslar 522, süreç 683 px. Bunlar içerik/yerleşim ölçümleridir; tek başına hata veya kötü kullanıcı deneyimi kanıtı değildir.

Browser screenshot override çıktısı sol şeritte ölçekli sayfa ve geniş boş alan üretti. Bu yakalama mevcut mobil tipografi/kompozisyonu güvenilir değerlendirmeye yetmedi. Mobil sitenin “bozuk” olduğu sonucu çıkarılmadı; override sıfırlandı. Figma mobil frame renderları bu araç sorunundan bağımsız incelendi.

Bu görevde lint/typecheck/build çalıştırılmadı; website kodu değişmedi. Önceki 2.0 testleri 3.0 kabulü sayılmadı. Tam erişilebilirlik, form gönderimi, normal/reduced-motion etkileşimi ve TR/EN/DE tüm sayfa QA ileride yapılmalı.

Öncelik: dört açık hizmet ve KOBİ dili → doğrulanabilir proje kanıtları → tek kimlik sistemi → daha kısa homepage → tüm diller/responsive/erişilebilirlik QA. Bu sıra uygulama onayı değildir.
