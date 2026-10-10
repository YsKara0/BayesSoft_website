# 11 Ekim 2026 — Hero boşluk ve örnek web/mobil arayüzler

Kod kapsamı yalnızca Hero.tsx, Hero.module.css, HeroShowcase.tsx ve HeroShowcase.module.css. Önceki çalışma ağacı korunur.

Hero eyebrow kaldırıldı; ana başlık/Space Grotesk/açıklama/CTA korunur. Masaüstü üst padding header + 32–48px, açıklama üst aralığı 20px, CTA üst aralığı 26px, vitrin üst aralığı 24–36px oldu. Önceki etiket ve boşluğunun kalkmasıyla cihaz başlangıcı yukarı alınır. Mobil/tablet üst boşluk da azaltıldı. Cihazlar küçültülmedi; genişlik, aspect-ratio, perspektif ve çerçeveler korunur.

Laptop: BayesSoft markalı yan menü, genel bakış, örnek proje/görev/ekip sayıları, üç proje ve ilerleme, ekip aktiviteleri. Telefon: aynı örnek çalışma alanı, görevler, proje ve aktivite, üç sekmeli görsel navigasyon. Finans/sektör teması yok. Gerçek ticari ürün iddiası yok; rozet ve vitrin altında “Örnek web ve mobil arayüz” açıklaması. Mock ekranlar statik/dekoratif, tıklanabilir kontroller oluşturulmadı; dış açıklama erişilebilir metindir. TR/EN/DE metinleri mevcut locale ile değişir. Container ölçülerine bağlı CSS font boyutları ve küçük ekranda sade laptop paneli kullanılır.

TypeScript noEmit/incremental false, hedefli Hero/HeroShowcase ESLint no-cache, PostCSS parse/sınıf referans eşleşmesi ve git diff --check geçti. İlk kontrol sırasında örnek istatistik JSX'inde parantez hatası bulundu, düzeltildi; son kontroller geçti. Build/tarayıcı/screenshot yok; MacBook viewport ve uzun EN/DE satırlarının manuel görsel kontrolü kullanıcıda. Web–Mobil–AI sahnesi/scroll mantığı ve diğer bölümler değişmedi. Yeni bağımlılık/animasyon yok. feature/bayessoft-2.0 dalında commit/push/deploy yapılmadı.
