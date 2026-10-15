# BayesSoft 3.0 — Proje Dashboard'u

Başlangıç: 12 Ekim 2026 · Güncel durum: Spatial Concept sol modül rafinesi tamamlandı; kullanıcı incelemesi bekleniyor. Frontend başlamadı.

## Çalışmaya devam ederken

Önce [[98-Agent-Logs/CURRENT_STATUS]], ardından [[98-Agent-Logs/NEXT_STEPS]] ve [[98-Agent-Logs/SESSION_LOG]] içindeki son oturumu oku. Günlük kayıt: [[98-Agent-Logs/DAILY_LOG_2026-10-12]]. Güncel tasarım ve Figma bağlantıları: [[03-Design/05-Spatial-Concept]].

Kullanıcının 12 Ekim talebi: her görev sonunda bu dört çalışma hafızası dosyasını güncelle; başka günlerde ilgili tarihin günlük dosyasını kullan. Tamamlanan iş, gerçek doğrulama ve bekleyen onayı ayrı kaydet.

**Aşağıdaki başlangıç envanteri ve aşama durumu tarihsel kayıttır.** Güncel durum için agent loglarını kullan; başlangıçtaki “bekliyor/işlem yapılmadı” ifadeleri bugünkü Figma durumunu anlatmaz.

## Projenin amacı

BayesSoft'un mevcut web sitesinin kullanıcı tarafından belirtilen jenerik AI template görünümünden uzaklaşarak özgün, tutarlı ve güvenilir bir marka kimliği kazanması hedefleniyor. Bu görünüm değerlendirmesi kullanıcı brief'idir; bu başlangıç çalışmasında canlı site görsel denetimi yapılmadı.

Kullanıcının belirlediği hedef konumlandırma: küçük ve orta ölçekli işletmelere ve büyüyen girişimlere web, mobil, yapay zekâ ve özel yazılım çözümleri sunan butik bir yazılım stüdyosu.

Warm Technical Minimalism + Editorial Design yaklaşımı araştırılacak. Bu yaklaşım henüz onaylanmış nihai görsel kimlik değildir. Renk, font, logo, yerleşim ve animasyon kararları bu aşamada verilmedi.

## Mevcut durum ve repository incelemesi

- Aktif Git branch'i `feature/bayessoft-3.0` olarak doğrulandı; branch değişikliği yapılmadı.
- `agents.md`, `CLAUDE.md` ve `README.md` okundu. Rehberler 2.0 kapsamını anlatıyor; `agents.md` içinde eski branch adı bulunuyor. Dosyalar değiştirilmedi; bu başlangıç görevinin kapsamı kullanıcının 3.0 talebidir.
- `bayes 2.0/` incelendi: kökte numaralı plan notları, iki süreç tasarım brief'i, tarihli `logs/` kayıtları ve `.obsidian/` ayarları bulunuyor. Handoff, karar kaydı, yol haritası, tasarım sistemi ve Phase 1 tasarım önerisi okundu. Bu kasa tarihsel kaynak olarak korunuyor; önceki tasarım kararları 3.0 için otomatik kabul sayılmıyor.
- `bayes 3.0/` kasası başlangıçta mevcuttu ve yalnızca `.obsidian/` ayarlarını içeriyordu. Ayarlar korunarak aşağıdaki çalışma yapısı oluşturuldu.
- `package.json`, `next.config.mjs`, ana sayfa ve layout kaynakları üzerinden mevcut teknik yapı incelendi: Next.js App Router, React, TypeScript, Tailwind CSS, CSS Modules ve Framer Motion; statik export yapılandırması bulunuyor.
- `app/` sayfaları ve ortak stilleri, `components/` arayüz bileşenlerini, `data/` içerik/çeviri/SEO kaynaklarını, `assets/` kaynak görsellerini, `public/` sunulan varlıkları içeriyor. Mevcut sayfalar: ana sayfa, hizmetler, projeler/proje detayı, hakkımızda ve iletişim.
- Ana sayfa kaynak sırası: Hero → Web/Mobil/AI geçişi → Yetkinlikler → Öne çıkan/seçili çalışmalar → Referanslar → Süreç. Bu, mevcut kodun envanteridir; yeni sayfa düzeni kararı değildir.
- Başlangıçta iki untracked logo denemesi vardı: `assets/logo_v2/bayes-icon-purple-192.png` ve `assets/logo_v2/bayes-icon-purple-32.png`. Dosyalar korunuyor.
- Frontend geliştirme başlamadı. Website kodu, tasarım bileşenleri ve Figma dosyaları üzerinde işlem yapılmadı. Bu tur lint, typecheck, build veya tarayıcı QA çalıştırılmadı; önceki notlardaki test sonuçları 3.0 doğrulaması sayılmıyor.

## Kasa yapısı

| Konum | Amaç | Başlangıç durumu |
|---|---|---|
| `00-Dashboard.md` | Amaç, durum ve aşama takibi | Bu not |
| `01-Brand/` | Konumlandırma ve içerik ilkeleri | [[01-Brand/BRAND]], [[01-Brand/CONTENT_GUIDELINES]] başlangıç taslakları |
| `02-Research/` | Kaynaklı araştırma ve referans incelemeleri | Boş; araştırma başlamadı |
| `03-Design/` | Tasarım sistemi ve tasarım çalışmaları | [[03-Design/DESIGN_SYSTEM]] başlangıç taslağı |
| `04-Website/` | Sayfa yapısı ve ilerideki uygulama notları | Boş |
| `05-Decisions/` | Tarihli, gerekçeli kararlar ve onaylar | Boş |
| `06-Tasks/` | Görevler ve ilerleme takibi | Boş |
| `07-Reviews/` | İncelemeler ve gerçek doğrulama sonuçları | Boş |
| `98-Agent-Logs/` | Güncel durum, sonraki işler, oturum ve günlük hafıza | [[98-Agent-Logs/CURRENT_STATUS]], [[98-Agent-Logs/NEXT_STEPS]], [[98-Agent-Logs/SESSION_LOG]] |

## Aşamalar — başlangıç planı

Bu aşamalar çalışma sırasını tarif eder; ayrıntılı tasarım veya geliştirme onayı değildir.

1. **Hazırlık ve mevcut durum:** branch, rehberler ve kasaları incele; yeni dokümantasyon iskeletini oluştur. Bu tur tamamlandı.
2. **Marka ve içerik keşfi:** hedef kitle ihtiyaçlarını, hizmet kapsamını, farklılaşmayı ve yayımlanabilir kanıtları doğrula. Bekliyor.
3. **Araştırma:** Warm Technical Minimalism + Editorial Design örneklerini kaynaklarıyla incele; BayesSoft için uygunluğu ve jenerik görünüm nedenlerini değerlendir. Bekliyor.
4. **Tasarım önerisi:** araştırmaya dayanarak görsel yön, içerik hiyerarşisi ve tasarım sistemi alternatiflerini değerlendir. Nihai tercihler bekliyor.
5. **Website planı ve uygulama:** kararlaştırılan tasarım üzerinden mevcut sayfa ve bileşenlerin uygulama kapsamını belirle. Frontend geliştirme henüz başlamayacak.
6. **İnceleme ve doğrulama:** ilerideki uygulamanın responsive görünümünü, erişilebilirliğini, TR/EN/DE metinlerini, işlevlerini ve SEO'sunu kontrol et; gerçek sonuçları kaydet. Bekliyor.
7. **Yayın hazırlığı:** kabul edilen çalışmanın yayın adımlarını değerlendir. Commit, push ve deploy için ayrı açık onay gerekir.

## Bu başlangıç çalışmasının sınırları

Yalnızca `bayes 3.0/` içinde klasörler ve dört Markdown notu oluşturuldu. Eski kasa, rehberler, README, website kaynakları, mevcut görseller ve Obsidian ayarları korunur. Secret/`.env` dosyaları okunmaz veya değiştirilmez. SaaS/Ürünler sayfası eklenmez.

Şirket geçmişi, ekip ölçeği, müşteri ilişkileri, proje sonuçları ve ticari vaatler doğrulanmadan yeni marka metinlerine aktarılmaz. Mevcut README veya asset klasöründe bulunmaları tek başına doğrulama ve yayın izni değildir.

Sonraki çalışma: marka ve içerik keşfindeki açık soruları ele almak; ardından kaynaklı tasarım araştırması yapmak.

## Başlangıç doğrulaması — 12 Ekim 2026

Yedi klasör, dört Markdown notu, notların biçimi ve tüm Obsidian iç bağlantıları kontrol edildi. `git diff --check` geçti; takip edilen dosyalarda değişiklik yok.

Başlangıç ve son SHA-256 karşılaştırmasında eski kasa, rehberler, README, website kaynakları ve iki untracked logo denemesi dahil 214 dosya aynı kaldı. `bayes 3.0/.obsidian/workspace.json` çalışma sırasında değişmiş olarak gözlendi; bu dosyaya bu görev kapsamında yazılmadı ve geri alma yapılmadı. Değişikliğin kaynağı doğrulanmadı.
