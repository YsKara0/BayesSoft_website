# 11 Ekim 2026 — Hero Space Grotesk karşılaştırma denemesi

Kullanıcı yalnızca hero başlığı için Space Grotesk denemesini onayladı; bu nihai font kabulü değildir. Dal `feature/bayessoft-2.0`. Önceki onaylı Phase 1 değişiklikleri korunur.

- `components/Hero.tsx`: tek `next/font/local` tanımı, yalnızca H1'e font değişkeni. 700 ağırlık, normal stil, swap; Next varsayılan preload'u kullanılır.
- `components/Hero.module.css`: yalnızca başlık font-family Montserrat yerine hero değişkenini kullanır. Ölçek, satır yüksekliği ve harf aralığı korunur.
- `components/fonts/SpaceGrotesk-Bold.woff2`: 41.780 byte; tek statik ağırlık ve font dosyası. Google Fonts import'u veya ikinci CSS font-face eklenmedi.
- `components/fonts/SpaceGrotesk-OFL.txt`: resmi SIL Open Font License.

Kaynak: [Space Grotesk resmi deposu](https://github.com/floriankarsten/space-grotesk), `fonts/woff2/static/SpaceGrotesk-Bold.woff2`. Next'in mevcut fontkit'iyle doğrudan WOFF2 glif kontrolünde `ÇçĞğİıÖöŞşÜü` eksiksiz çıktı; yeni bağımlılık kurulmadı.

Kontroller: TypeScript noEmit/incremental false, Hero.tsx hedefli ESLint no-cache, diff-check geçti. Next yerel font yükleyicisinin bellek kontrolü tek dosya/tek URL, 700 ve swap üretti. İlk yardımcı yükleyici çağrısının functionName parametresi düzeltildi; uygulama kodunda sorun yoktu. Tam build veya tarayıcı görsel incelemesi yapılmadı; karşılaştırma kullanıcıda.

Inter, diğer bölüm fontları, hero başlık metni/video/renk/CTA/animasyon ve sahneler değişmedi. Commit/push/deploy yapılmadı.
