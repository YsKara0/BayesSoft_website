# 11 Ekim 2026 — Header logo v2 denemesi

Kullanıcı assets/logo_v2 taslağını yalnızca header'da denemeyi istedi. Üç PNG incelendi; tam logo bayes-logo-purple.png (2163×371, şeffaf RGBA) seçildi; 32/192px ikonlar kullanılmadı. Beyaz wordmark/mor simge koyu header üzerinde renk olarak uygun; asset görseli ve alfa pikselleri incelendi, canlı tarayıcı görünümü kontrol edilmedi.

Header.tsx yeni tam logoyu statik Next Image import ile kullanır; yeni public kopyası veya değiştirilmiş görsel yok. Ana sayfa Link/aria-label korunur. Header.module.css: oran korunarak desktop 40px yüksekliğe (~233px genişlik), tablet/mobil 32px (~187px genişlik); block img ve flex ortalama. Navigasyon/dil/menu/progress/header yüksekliği değişmedi. Ortak Logo.tsx, eski logo dosyaları, footer ve favicon değişmedi. Geri dönüş: Header'ta eski Logo import ve `<div className={styles.logo}><Logo variant="light" /></div>` kullanımını geri getir; logo yüksekliğini desktop 46px, tablet/mobil 40px'e döndür. Diğer çalışma ağacını resetleme.

TypeScript, hedefli ESLint, CSS parse, Header kaynağında yalnızca logo değişimi ve ortak Logo korunması, diff-check geçti. Tarayıcı/screenshot/build yok; canlı optik kabul kullanıcıda. Commit/push/deploy yapılmadı. Detay: [[logs/2026-10-11-header-logo-v2]].

