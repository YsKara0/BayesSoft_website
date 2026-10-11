# 11 Ekim 2026 — Mobil yetkinlik konsept görseli

Gerçek kaynak assets/demo/demo_phone.png (1254×1254, RGB, 2.123.883 byte). Kaynak korunarak aynı çözünürlükte assets/demo/demo_phone.webp oluşturuldu (quality 84, 178.818 byte; yaklaşık %92 küçülme). Header/hero veya proje verileriyle ilişkili olmayan, kullanıcı sağladığı konsepttir.

Yalnızca CapabilitiesSection Mobil branch ve mobil CSS: boş telefon/ikon/orbit kaldırıldı. Statik Next Image import ile WebP, intrinsic ölçüler, loading=lazy ve responsive sizes; output:export/unoptimized yapılandırmasında da önceden optimize edilmiş dosya yüklenir. width:100%, height:auto/object-fit:contain; kırpma/esnetme/mask yok. Desktop mevcut metin solda/görsel sağda, kare görsel en fazla 560px; tablet alanı en fazla 520px, mobil %90. Ek min-height/scroll alanı/animasyon yok. CSS mix-blend-mode:lighten ve izole aynı lacivert yüzey ile kaynak koyu pikselleri zemine kaynaşır; aydınlık mavi kenarlar kaynakta kalır. Görselde zaten var olan alt kenar kesimleri kaynak kompozisyonudur; CSS yeni kesim eklemez. TR/EN/DE caption ve alt metni açıkça konsept çalışması der; gerçek/yayındaki müşteri uygulaması iddiası yok.

Web ve AI markup ve tüm Mobil dışı CSS deklarasyonları tur öncesi snapshot'larla birebir karşılaştırıldı. TypeScript, hedefli ESLint, CSS parse, WebP çözünürlük kontrolü ve diff-check geçti. Tarayıcı/screenshot/build yok; lacivert birleşimi ve optik boyut görsel kabulü kullanıcıda. Diğer bölümler değişmedi. Commit/push/deploy yok. Detay: [[logs/2026-10-11-mobile-concept-visual]].

