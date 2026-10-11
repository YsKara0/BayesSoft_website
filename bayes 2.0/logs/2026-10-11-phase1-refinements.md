# 11 Ekim 2026 — Phase 1 küçük iyileştirmeler

## Kapsam ve uygulama

Kullanıcı sekiz öneriyi ve tablet metin yerleşimi düzeltmesini onayladı. Dal `feature/bayessoft-2.0`; başlangıç çalışma ağacı temizdi.

1. Hizmet/proje/süreç zeminleri mevcut iki lacivertte kaldı; ortak bölüm aralığı ve footer üst ayracı eklendi.
2. Bölüm iç/dış boşlukları ve tablet hero yüksekliği sıkılaştırıldı.
3. Mobil hizmet kartı padding/gap, açıklama line-height ve liste satırı yüksekliği azaltıldı; içerikler korunur.
4. Bölüm başlıkları dengeli satır kırar; ortak tablet başlığı 60px yerine 48px.
5. Proje başlık ve görsel başlangıçları masaüstünde subgrid ile hizalandı; kart yüksekliği zorla eşitlenmedi. Tam Finans logosuna küçük beyaz destek yüzeyi verildi.
6. Referans heading/ticker aralığı azaltıldı; Hypersense/Arel/hastane gibi dikey logoların kutusu 64px, yataylar 44px.
7. Footer sloganının ölçeği ve logo/CTA aralıkları düzenlendi; dengeli satır kırma kullanıldı.
8. Dekoratif mavi tokenlaştırıldı, kart/ikon/sosyal hover sınırları bağlamsal vurgu rengine bağlandı; mevcut focus tokenları korundu ve header CTA hover sınırı eşitlendi.

`WebToMobileTransition.module.css`: yalnızca 768–1023px metin sütunu genişliği ve typografi kuralları eklendi. Merkez telefonun 1.05 ölçeği ve yan boşluk hesaba katılır. Animasyon TSX, sahneler, scroll yüksekliği, zamanlama ve transform mantığı değişmedi. Hero videosu değişmedi; Phase 2 uygulaması yok.

## Kontroller

- TypeScript: `node node_modules/typescript/bin/tsc --noEmit --incremental false` — geçti.
- ESLint: `node node_modules/eslint/bin/eslint.js . --no-cache` — geçti.
- Tailwind/PostCSS bellekte CSS üretimi — geçti; subgrid/row-span ve yeni token kullanımları üretildi. İlk yardımcı kontrol konfigürasyonun default export'unu açmadığı için başarısızdı; kontrol betiği düzeltildi, kaynak hatası yoktu.
- `git diff --check` — geçti.
- Yeni bağımlılık kurulmadı. Bu CSS/yerleşim geçişinde tam build ve tarayıcı incelemesi çalıştırılmadı; kullanıcı talebine göre manuel görsel kontrol bekliyor. Görsel sonuç doğrulandı iddiası yok.

## Manuel değerlendirme

1440/768/390px'te başlıklar/proje görsel başlangıçları, mobil hizmet kartları, logo dengesi/footer ve özellikle 768px mobil/AI metin–telefon ayrımı kontrol edilmeli. TR/EN/DE uzun metinler değerlendirilmelidir. Önceki turdaki ekran görüntüleri bu revizyon öncesine aittir.

İçerik, bağlantılar, bölüm sırası, form mantığı, URL/SEO ve dil verileri değişmedi. Commit/push/deploy yapılmadı.
