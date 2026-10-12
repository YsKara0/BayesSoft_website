# 12 Ekim 2026 — AI Workflow Studio

Yalnızca AIScene.tsx/module.css: üç bağımsız AI kartı yerine tek çerçeve, ortak toolbar ve bölücü çizgilerle bütünleşik örnek yazılım yüzeyi. Sol talep listesi (üç örnek), orta seçili talebin AI taslağı/özeti/kategorisi/öncelik önerisi, sağ inceleyen/insan onayı/iki önerilen aksiyon. Kontrollü mavi seçim ve onay vurgusu; yalnızca küçük AI taslak metninde mor. Büyük beyin/AI ikonları, glow ve üç adımlı dış bağlantılar kaldırıldı. Space Grotesk/Inter ve TR/EN/DE korunur. AI Workflow Studio açıklayıcı sunum başlığıdır; örnek arayüz rozeti görünür, gerçek ticari ürün iddiası yok. Onay aksiyonu statik görsel öğe, çalışan buton değildir; görev oluşturma açıkça insan onayına bağlıdır.

Mobil aynı yüzeyde kompakt talep şeridi → özet/metaveri → onay alanı; ikincil kişi detayları gizlenir, seçili talep/kategori/öncelik ve onay şartı görünür. Reduced-motion aynı AIScene'i statik kullanmaya devam eder. Web/Mobil kaynakları, WebToMobileTransition.tsx/module.css, tüm scroll aralıkları/spring/sticky/340-280-260svh yükseklikleri değişmedi. Yetkinlikler AI görsel alanı bu görev kapsamı dışındadır ve değişmedi.

TypeScript, hedefli ESLint, PostCSS parse/sınıf eşleşmesi ve diff-check geçti. Tarayıcı/screenshot/build yok; responsive optik kabul manuel değerlendirme bekler. Önceden mevcut next-env.d.ts üretim farkı ve kullanıcı logo ikonları korundu, bu tur dokunulmadı. Commit/push/deploy yok. Detay: [[logs/2026-10-12-ai-workflow-studio]].

