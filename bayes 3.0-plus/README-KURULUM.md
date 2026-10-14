# BayesSoft 3.0+ — Obsidian paketini kullanma

Bu ZIP'in içindeki `bayes 3.0-plus/` klasörü, mevcut Obsidian kasasının **içerik şablonudur**.

## Dikkat: mevcut klasör var
Kullanıcı `bayes 3.0-plus` kasasının zaten bulunduğunu belirtti. **Klasörü körlemesine overwrite etme.** Önce Finder'da mevcut kasanın kopyasını `bayes 3.0-plus-backup` adıyla proje dışına yedekle. ZIP'i geçici ayrı klasöre aç, dosyaları karşılaştır, yalnızca istediğin Markdown'ları kopyala. `\.obsidian/` ayarlarını koru. Mevcut yazılı notlar varsa içerikleri birleştir.

## Yol
`~/Projects/BayesSoft_website/bayes 3.0-plus/` (Mac'indeki repo konumun farklıysa gerçek klasörünü kullan).

## Önemli
1. Paket 3.0 temel branch, 4.0 arşiv ve 3.0+ ayrımına göre hazırlanmıştır.
2. Dosya adları ve statüler konuşma geçmişine dayanır; Codex başlamadan gerçek repoda doğrulamalıdır.
3. ZIP, Git commit/push yapmaz. İstersen sonra `git status --short` ve seçici staging yap.
4. `.obsidian` dosyaları bu pakete **konmadı**; mevcut Obsidian ayarlarını değiştirmez.
5. Codex'in her oturum başında kasayı okumasını otomatik garanti etmez; AGENT_WORKFLOW içindeki kısa bootstrap prompt'unu kullan.

## Başlangıç görevleri
BS3P-000 vault entegrasyonunu doğrula; BS3P-001 sağ sahne için **yalnızca plan**; sonrasında onayla kod.
