# Teknik mimari ve dosya haritası

## Çalışma ortamı
Next.js / TypeScript / Tailwind projesi. **Gerçek `package.json` ve route yapısını açarak doğrula.** Aşağıdaki dosya adları önceki başarılı prototipten bilinmektedir.

| Dosya | İşlev |
|---|---|
| `app/prototype/spatial-hero/route.ts` | 3.0 izole demo route'u |
| `app/prototype/spatial-hero/motion.ts` | Dört yüzlü prizma ve otomatik ilerleme |
| `app/prototype/spatial-hero/faces.ts` | Dört yazı yüzü |
| `app/prototype/spatial-hero/video.ts` | MP4 sunumu ve fallback |
| `public/prototype-assets/spatial-hero/hero.css` | Hero kompozisyon, prism CSS |
| `public/videos/bayessoft-spatial-motion-v1.mp4` | Sağ video (silme) |
| `assets/hero/bayessoft-spatial-v1.png` | Önceki statik görsel / referans |

## Branch politikası
`feature/bayessoft-3.0-plus` aktif çalışma. `feature/bayessoft-3.0` ve `feature/bayessoft-4.0` kayıtlı geçmiş. 4.0'dan kütüphane veya bileşen alınması **seçici port** gerektirir, otomatik merge değildir.

## Geliştirme sırası
1. **Plan:** Mevcut hero ölçüleri, malzeme, hareket rekabeti ve anlam.
2. **Ayrı demo:** ör. `/prototype/spatial-hero-right3d` (yalnızca önerilen isim; rotayı oluşturmadan önce onayla).
3. **Karşılaştırma:** eski video ve Three.js ile aynı ölçü/arka plan.
4. **Entegrasyon:** yalnızca açık tasarım onayıyla.
5. **Homepage:** header, hizmetler, projeler, yaklaşım, CTA, footer; mevcut gerçek yönlendirmeler.
6. **Final QA:** kapsamlı test, performans, mobile/Safari, prototip izolasyonu.

## Demo güvenliği — yayın öncesi
Canlı dağıtımda `/prototype/*` adresleri ve `public/prototype-assets/*` dosyaları erişilebilir olmamalı. Yalnızca menü bağlantılarını gizlemek **yeterli değildir**. İdeal çözüm prototip kaynak/asset'lerini production artefact'ına dahil etmemek ve build/deploy ayarlarını doğrulamak. Şu an bu iş **deferred**; erişim kapatılmış sayılmaz.

## Git ve lisans
- Commit/push ancak kullanıcı istediğinde.
- Font lisansı (OFL) korunur.
- Başkasına ait Dashline/Widehue görselinin ayırt edici tasarımı kopyalanmaz.
- 4.0'daki skill'ler yerelde `.agents/skills/` altında olabilir ve `.gitignore` ile gizleniyor olabilir; aktif kurulumları doğrula.
