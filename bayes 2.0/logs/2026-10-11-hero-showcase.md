# 11 Ekim 2026 — Hero cihaz kompozisyonu

Kapsam: HeroShowcase.tsx / HeroShowcase.module.css yeni bileşen; Hero.tsx yalnızca import ve mevcut metin bloğu altına bileşen çağrısı. Önceki çalışma ağacı korunur.

Cihazlar referanstaki yerleşimden ilham alan CSS çerçevelerdir. Büyük laptop ekran/metal taban/kamera ve perspektif; önde solda telefon çerçevesi/island/yan düğme/home indicator. Basit geometrik placeholder ekranlar; metin, veri veya detaylı dashboard yok. Lacivert zemin, statik düşük opaklıklı mavi/mor ışık ve gölgeler. Mobil breakpoint'te vitrin daha dik, laptop yukarı ve telefon oranı %20'den %34'e çıkar; cihaz tabanı kompozisyon genişliği içinde tutulur. Görsel sonuç tarayıcıda doğrulanmadı.

Mevcut HTML hero başlık/açıklama/CTA, fontlar, bağlantılar ve diğer bölümler değişmedi. Dekoratif aria-hidden kompozisyonda animasyon/etkileşim yok, kütüphane eklenmedi. Referans resim asset olarak kullanılmadı.

TypeScript noEmit/incremental false, hedefli Hero/HeroShowcase ESLint no-cache, PostCSS parse/statik CSS/tek entegrasyon kontrolü ve diff-check geçti. Build/tarayıcı/screenshot yok; manuel değerlendirme kullanıcıda. Handoff ve roadmap güncellendi. feature/bayessoft-2.0 dalında commit/push/deploy yapılmadı.
