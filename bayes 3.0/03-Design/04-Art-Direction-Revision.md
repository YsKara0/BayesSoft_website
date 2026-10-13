# Konsept 1 revizyonu — daha az açıklama, daha çok gösterim

12 Ekim 2026 · 1A ve 1B keşif önerisi; ikisi de onaylanmadı.

## Brief ve ilk tasarım planı

Konsept 1'in sakin hiyerarşisi korunur; sağdaki metin ağırlıklı kapsam dosyası gerçek proje görseline yerini bırakır. Konsept 2/3 ilerletilmez. Serif gazete çağrışımı kullanıcı geri bildirimi nedeniyle sürdürülmez. Web kodu değişmez.

Ortak geçici temel: #FAFAF7 ana yüzey, #24292D ana metin, #626B73 ikincil metin, #EEF1F3 ikincil yüzey, #2459CA eylem mavisi, #D9DEE2 ayırıcı. Manrope Medium başlık; Regular/SemiBold arayüz. Özgünlük yalnızca bu palete bırakılmaz: gerçek iş ekranı, kısa anlatı, anlamlı görüntü odağı ve eşit dört hizmet beraber çalışır. Bunlar nihai tokenlar değildir.

```text
1A / Visual Minimalism
Header
Kısa başlık + iki CTA       Gerçek arayüz ayrıntısı
Geniş seçili proje ekranı + tek satır caption
Dört eşit özel ikon / hizmet
Anla — Tasarla — Geliştir — İşlet
Gerçek ekip fotoğrafları + doğrudan iletişim

1B / Interactive Editorial
Header
Geniş kısa önerme          İki CTA
Geniş proje görünümü: kullanıcı seçimiyle genel / ayrıntı
Asimetrik iki görüntü, aynı projenin iki ekranı
Dört eşit özel ikon / hizmet
Kullanıcı odaklı hafif süreç şeridi
Gerçek ekip fotoğrafları + doğrudan iletişim
```

1A, içerik görüntülenmesi için etkileşim gerektirmez. 1B'de etkileşim yalnızca ek ayrıntıyı açar; ana hizmet/CTA bilgisi statik ve hemen okunur. Mobilde yatay taşan showcase, zorunlu sürükleme ve hover bağımlılığı yok. Ürün arayüzü ile BayesSoft'un hizmet sayfası birbirinden açıkça ayrılır.

## Klişe kontrolü — plan revizyonu

Krem/serif/terracotta, mavi-mor gradient, dev headline + rastgele mini kartlar ve sahte dashboard üretimi kullanılmadı. 1B'nin ilk fikrindeki üst üste yüzen iki ekran yerine aynı viewport içinde anlamlı genel/ayrıntı görünümü seçildi. 1A kapsam dosyasını dört yeni kartla çoğaltmak yerine tek gerçek arayüz odağı aldı. Özel ikonlar yalnızca hizmet tanımına yardım eder; siteyi dekoratif teknik şemayla doldurmaz.

## Linear incelemesi

[Linear](https://linear.app/) web kaynağı ve tarayıcıda yerleşmiş hero/ürün ekranı 12 Ekim 2026'da incelendi. Kısa ana önerme ve açıklama, belirgin tipografi, geniş ürün görüntüsü ve sade çevre ekranın önceliğini destekliyor. Bu tasarım yargısıdır. BayesSoft'a taşınan disiplin bu; Linear'ın koyu paleti, ürün paneli, müşteri logoları, yerleşimi veya hareketleri alınmadı. Dinamik demo değişimi gözlendi; timing/easing ölçülmedi ve kopyalanmadı.

## Görsel kaynak sınırı

İki FurtherUp Drive PNG, `data/projectDetails.ts` ekran listesi ve proje adıyla eşleşiyor. Bunlar özgün repository ekranları; sıfırdan üretilmiş UI değil. İkisi de marketing sayfası yakalaması; ilk görüntüde gömülü arayüz önizlemesi var. Heroda bu gerçek gömülü önizleme native kırpma viewport'u ile kullanılır; doğrudan uygulamadan yeni çekilmiş panel diye sunulmaz. Daha yüksek çözünürlüklü, anonimleştirilmiş doğrudan ürün ekranı hâlâ gerekir.

Beş ekip fotoğrafı `data/site.ts` isim/rol eşleşmesiyle kullanılır. Bu eşleşme mevcut kaynaktan doğrulama düzeyidir; güncel istihdam, ilişki, müşteri sonucu veya yayın izni belgesi değildir. Fotoğraf arka planlarındaki kurum işaretleri BayesSoft ortaklığı şeklinde kullanılmaz. Yeni başarı, müşteri sayısı, garanti veya sahte vaka eklenmez.

İkinci bağımsız proje görseli olmadığı için keşif tek doğrulanmış kaynak projenin iki görünümünü kullanır. İki ekran iki ayrı proje olarak gösterilmez. [[ASSET_REGISTER]] ayrıntılı ihtiyaçları kaydeder.

## Teslim ve değerlendirme

Figma linkleri, gerçek kontrol sonuçları ve kritik karşılaştırma kompozisyonlar tamamlandığında bu nota eklenecek. Hareket ilkeleri: [[MOTION_GUIDELINES]].
