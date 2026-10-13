# A — Proje Defteri

Durum: creative direction önerisi; onay bekliyor.

## A.1 — Kullanıcı geri bildirimine göre tipografi revizyonu

Kullanıcı en çok A'yı beğendi, Lora kullanılan font yaklaşımını “gazete gibi” buldu. İlk serif önerisi aşağıda tarihsel keşif olarak korunur. Yeni A.1 frame'lerinde bütün Lora metinleri Manrope Medium ile değiştirildi; gövde mevcut Manrope Regular/SemiBold olarak kaldı. Başlık 66/74 px desktop, 39/45 px mobil; harf aralığı başlıkta -%2. Dosya ve bölüm başlıkları da sans-serif. Yerleşim, metin ve palet aynı tutularak font etkisi sınandı.

[A.1 Desktop](https://www.figma.com/design/gLI3OMMpoaiaxm1zfa0Apf?node-id=15-2) · [A.1 Mobil](https://www.figma.com/design/gLI3OMMpoaiaxm1zfa0Apf?node-id=15-41)

![[evidence/concept-a1-desktop.png]]

Manrope, gazete çağrışımını azaltıp teknik ve sakin bir ifade kuruyor. Bunun bedeli serif/sans karşıtlığının karakterini kaybetmek; A'nın ayırt ediciliği artık kapsam dosyası ve gerçek proje anlatısına daha fazla dayanıyor. Yeni font nihai olarak onaylanmadı.

Kontrol: iki native frame render edildi; tek font ailesi Manrope olarak geri okundu, katman sınır taşması yok. Desktop 1440×833, mobil 390×1206 px. Normal animasyon/prototip, EN/DE ve website kodu değişmedi. AI kredi üretim araçları, commit/push/deploy kullanılmadı.

Mobil revizyon: ![[evidence/concept-a1-mobile.png]]

## İlk A keşfi — tarihsel referans

[Desktop hero](https://www.figma.com/design/gLI3OMMpoaiaxm1zfa0Apf?node-id=4-2) · [Mobil hero](https://www.figma.com/design/gLI3OMMpoaiaxm1zfa0Apf?node-id=4-3)

![[evidence/concept-a-desktop.png]]

## Marka karakteri

Sakin, dikkatli, yakın ve işini bilen bir yazılım stüdyosu. Müşteriyle ilk ilişki “işinizi anlatın, kapsamı birlikte şekillendirelim” üzerinden kurulur. Sıcaklık; sevimli maskot, stok fotoğraf veya renkli dekorasyondan çok dinleyen metin ve anlaşılır kapsam dilinden gelir. Warm Technical Minimalism + Editorial Design'ın bir yorumudur, zorunlu 3.0 kimliği değildir.

## Tipografi

Lora Regular ana başlık ve editoryal bölüm girişlerinde; Manrope Regular/SemiBold gövde, navigasyon ve kapsam alanlarında. Serif sürekli romantik vurguya dönüşmez; tüm başlık tek renk ve aynı ağırlıkta. Desktop hero 66/74.6 px, mobil 39/44.1 px; gövde 20/32 ve 17/27.2 px. Taslak ölçülerdir. Türkçe örnek metin render edildi; EN/DE ve farklı cihaz font optiği sonraki aşamada.

## Renk stratejisi

| Token önerisi | Hex | Rol |
|---|---|---|
| Mineral kâğıt | #F1F3ED | Ana yüzey |
| Orman mürekkebi | #243D34 | Başlık, birincil CTA |
| Yosun metni | #526358 | Açıklama |
| Dosya yüzeyi | #DFE7DA | Örnek kapsam dosyası |
| Dosya çizgisi | #C9D2C7 | Anlamlı satır ayırıcı |

Geniş açık yüzey yalnızca bu 3.0 alternatifinin Figma keşfindedir; mevcut sitenin onaylı lacivert 2.0 yönü değiştirilmedi. Krem/terracotta kalıbı kullanılmaz. Metin kontrastları: ana 10.48:1, ikincil ana yüzeyde 5.72:1, dosya yüzeyinde 5.05:1. İnce ayırıcılar bilgi taşıyan tek işaret değildir; bu oranlar divider/focus kontrolü değildir.

## Sayfa kompozisyonu ve görsel dil

1440 px frame'de 80 px yan boşluk; solda 640 px anlatı, sağda 560 px dosya, arada 80 px. Sağdaki somut dosya, rastgele şekil veya dashboard yerine “bir işletmenin dijital çalışma alanı” kapsamını anlatır. Dört hizmet eşit satırlarla gösterilir. Desktop CTA anlatının altında; mobilde önce anlatı/CTA, sonra 342 px tek sütun dosya. Köşeler yalnızca eylemde 6 px; dosya düz yüzey, gösterişli gölge yok.

Tam homepage önerisi: hero → doğrulanmış bir projenin ihtiyaç/karar/teslim dosyası → dört hizmete farklı kapsam örnekleri → stüdyo ve çalışma biçimi → kısa proje görüşmesi/form. Her bölüm kart grid'i olmaz; görsel ve yazı oranı içeriğe göre değişir. Referanslar ancak doğrulanmış ilişki/izinle gelir. Tam sayfa henüz çizilmedi.

## Hero konsepti ve metni

**“İşinize uygun yazılımı birlikte şekillendirelim.”**

“Küçük ve orta ölçekli işletmeler için web, mobil, yapay zekâ ve özel yazılım geliştiren butik bir stüdyo.”

Birincil CTA: “Projenizi konuşalım”; mevcut `/iletisim` hedefi önerilir. İkincil: “Çalışmalarımızı inceleyin”; `/projeler`. Bu yeni metinler öneridir, siteye yazılmadı. Sağdaki müşteri portalı, saha uygulaması, talep özeti ve iş akışı/entegrasyon dosyası konsept örneğidir; gerçek müşteri işi olarak sunulmaz.

## Animasyon ilkeleri

Varsayılan okunur ve statik. İstenirse yalnızca dosyanın tek kısa girişinde 180–240 ms opaklık değişimi; satırlar ayrı ayrı sahneye girmez. Hizmet ayrıntısı kullanıcının tıklamasıyla açılır, yükseklik değişimi doğal akışta kalır. Hover yerine focus/touch eşdeğeri. Reduced-motion'da giriş kalkar, ayrıntı anlık açılır. Scroll kilidi, loop, parallax yok. Figma motion prototipi hazırlanmadı.

## Güçlü ve zayıf yanlar

Güç: KOBİ'yi adlandırır; sade teklif anlatımı, sakin güven, erken CTA, dört eşit hizmet ve mobilde kolay yeniden akış. Proje detaylarına aynı dosya dili taşınabilir.

Zayıflık: İlk hero teknik üretim kalitesini tek başına kanıtlamıyor. Sadece serif/açık yeşil kullanılırsa danışmanlık sitesi gibi algılanabilir. Sağdaki dosya gerçek iş örnekleri ve kararlara bağlanmazsa dekoratif belgeye dönüşür. Sakin ton bazı sektörlerde yeterince enerjik görünmeyebilir.

Sonraki tasarım aşamasında sınanacak konu: üç hizmet olmayan tek bir özel yazılım işi için de dosya dili çalışıyor mu; gerçek vaka görseli ve çalışma kararları bu kimliğin ayırt edici parçası olabiliyor mu? A bu tur önerilen yön, onaylanmış karar değildir.

Mobil önizleme: ![[evidence/concept-a-mobile.png]]
