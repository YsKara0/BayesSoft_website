# 11 Ekim 2026 — Atlı ve KSS referans bağlantıları

Kullanıcı, ana sayfadaki “Ciddi ürünler geliştiren ekiplerin güvendiği teknoloji partneri.” bölümünün slider'ında bu iki logonun diğerleri gibi tıklanabilir olmasını ve PR açılmasını istedi.

`data/references.ts`: Atlı Lojistik için `https://atlidepohizmetleri.com/`, Kanuni Sultan Süleyman Hastanesi için `https://kanunieah.saglik.gov.tr/` website alanları eklendi. ClientsSection mevcut anchor, `_blank`, `noopener noreferrer`, aria-label ve kopya grubun tab dışı davranışını sağlar. Bileşen, tasarım, sıra ve animasyon değişikliği yok; ortak veri TR/EN/DE için geçerlidir.

Başlangıç çalışma ağacı temiz; master/origin/master `138c2f9`. PR #10 ile 2.0 çalışması zaten birleştirilmiş. Yalnızca bu düzeltme için `codex/reference-logo-links` dalı oluşturuldu. Kullanıcı bu kapsamın commit/push ve PR açılışını açıkça yetkilendirdi; merge/deploy yapılmadı.

Doğrulama:

- İlk build yerelde eksik `flag-icons` nedeniyle başarısız oldu. Tek paket kurulumunun yerel sürümleri de güncellemesi üzerine `npm ci --ignore-scripts --no-audit --no-fund` ile kilit dosyasındaki bağımlılıklar geri yüklendi; package.json/package-lock.json değişmedi.
- `npm run lint`: geçti.
- `npm run typecheck -- --incremental false`: geçti.
- `npm run build`: kilit dosyasındaki Next.js 15.5.20 ile geçti; 18 statik sayfa üretildi.
- `out/index.html`: her URL için iki anchor; `_blank` ve `noopener noreferrer` mevcut. İlk grup tab sırasına açık, kopya grupta tabindex=-1.
- `git diff --check`: geçti.

Tarayıcı etkileşim testi yapılmadı; bu kayıt üretim HTML'i ve kod kontrollerine dayanır.
