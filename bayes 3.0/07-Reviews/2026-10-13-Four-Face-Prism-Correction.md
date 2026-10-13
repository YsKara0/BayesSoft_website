# Dört Yüzlü Prizma — Sol Hero Mekanik Düzeltmesi

13.10.2026 01:56 TRT · `S2026-10-13-PRISM-01` · `feature/bayessoft-3.0` · **İzole prototip hazır; kullanıcı onayı bekliyor.**

## Hata ve düzeltme

Önceki teknik brief iki fiziksel yüz ve 180° flip istediği için uygulama ince flip card oluşturdu; 90°'de yalnız kesit görünüyordu. Yeni [[03-Design/BAYESSOFT_3_FOUR_FACE_PRISM_CORRECTION]] amaçlanan dört yüzlü dikdörtgen prizmayı tanımlar ve bu çelişen talimatları geçersiz kılar. Görsel konsept değiştirilmedi.

Dört eşit DOM yüzü yerel rotateX 0/90/180/270 + translateZ(H/2) ile ortak preserve-3d objeye yerleştirildi. 540 px dış genişlikte W534/H270/depth135; kare 270×270 kesit. İki metinsiz kare uç kapak. Parent translateZ(-depth) rotateX(angle), perspective 1800, merkez origin, hidden backface. Sabit üst/alt/dikme/yatak/mil rotor dışındadır. Eski 398 px yüz kare kesitle desteklere çarpışacağından yalnız rotor H270'e ayarlandı; dış 540×512 ve sabit parça kaynakları aynı. Dinlenmede artan üst-alt açıklık dönen hacmin alanıdır.

Tek `faces.ts` provisional metin kaynağı: İşinize göre yazılım.; Web ve mobil çözümler.; Yapay zekâ ile daha fazlası.; Size özel yazılım sistemleri. İlk font yaklaşık 82, diğerleri 54 px; aynı Instrument Sans 500. Metin swap/fade yok. Birikimli 0→-90→-180→-270→-360→-450, aynı yön; 7000 ms okuma/900 ms geçiş. Uzak yüz seçimi de ayrı 90° adımlardan geçer.

## Gerçek tarayıcı kanıtları

| Kontrol | Sonuç | Kanıt |
|---|---|---|
| 0° Face0 | Tam önden, upright, okunur | [PNG](evidence/prism-angle-000.png) |
| -45° ara | İki komşu fiziksel yüz ve gerçek 3D perspektif | [PNG](evidence/prism-angle-045.png) |
| -90° Face1 | Tam önden; edge-on değil | [PNG](evidence/prism-angle-090.png) |
| -180° Face2 | Tam önden, aynasız, okunur | [PNG](evidence/prism-angle-180.png) |
| -270° Face3 | Tam önden, aynasız, okunur | [PNG](evidence/prism-angle-270.png) |
| -360° Face0 | Başlangıç mesajı yeniden; reset yok | [PNG](evidence/prism-angle-360.png) |
| -450° sonraki döngü | Aynı yön; snap yok | [PNG](evidence/prism-angle-450.png) |
| Destekler ve sağ konum | Aynı geometri; destekler dönmez | [Geometri QA](evidence/prism-geometry-qa.json) |
| Normal auto, 5 adım/6 dinlenme | 40,64 sn kesintisiz Chrome viewport | [WebM](evidence/prism-four-face-real-browser.webm), [cycles QA](evidence/prism-cycles-qa.json) |
| Desktop/mobile dört yüz | 1440/1024/768/390/360/320/280 px; 28 kontrol | [QA](evidence/prism-geometry-qa.json), [390 Face0](evidence/prism-390-face-0.png), [390 Face3](evidence/prism-390-face-3.png) |
| Mobil -45° / optimized export | İki yüz, destek açıklığı, no-overflow, tam döngü | [PNG](evidence/prism-390-angle-045.png), [export QA](evidence/prism-export-qa.json) |
| Pause/hover/keyboard/touch/reduced/JS-off | 29 kontrol başarılı | [interaction QA](evidence/prism-interaction-qa.json), [a11y YML](evidence/prism-accessibility.yml), [reduced PNG](evidence/prism-reduced-motion-face-3.png) |
| Production/sağ korunması | 216 kaynak/asset/config aynı; sağ CSS/grid aynı | [scope QA](evidence/prism-scope-qa.json) |

-45° PNG'leri **gerçek CSS transition inceleme için pause** edilerek alındı. WebM normal auto akıştır; pause/hızlandırma/splice yok. Kayıt 40,64 sn, 1440×960, 25 fps, VP9, yaklaşık 4,5 MB. Beş geçiş 882,3/898,8/898,9/899,3/899,7 ms; dwell 7033,3–7034,5 ms. 275 karede X matrisi/monoton açı/sabit caps/yüz DOM kimliği/boş auto live region doğrulandı. Görünür yüzler desteklere çarpışmadı veya viewport dışına çıkmadı; CLS 0, console/page/HTTP hata 0.

Masaüstü ve mobil ekran görüntüleri incelendi; metinler ve Türkçe karakterler okunur. Kaydın 15,6 sn karesi ayrıca decode edilip incelendi. Native kullanıcının Chrome sekmesinde reload/pause/manual de doğrulandı.

Mobile/touch manuel ve statik başlar; explicit opt-in auto ilerleme test edildi. Reduced auto kapalı; tüm yüzler anlık ve non-animated seçilir. Runtime aç-kapa ve in-flight settlement yüz/açıyı korur. JS kapalı Face0 + noscript diğer üç mesaj; çalışmayan kontrol yok. Pause/next/dört seçim dışarıda ve en az 44 px; keyboard focus/stable screen reader metni/manuel polite duyuru var. Autoplay duyurusu yok.

## Kontroller ve dosyalar

`npm run lint`, `npm run typecheck`, `npm run build` (19 statik sayfa) ve `git diff --check` başarılı. İlk TypeScript denemesinde eski Next generated route tipi hatası vardı; `npx next typegen` ve son build sonrası geçti. İlk viewport testi scroll koordinatlarını yanlış karşılaştırdı; doc-space ölçümüne düzeltilip geçti. FFmpeg mevcut temp QA kurulumundan kullanıldı; app dependency/config/lockfile değişmedi. Build'in geçici next-env referansı restore edildi.

**Değişen uygulama dosyaları (tam liste):**

- `app/prototype/spatial-hero/faces.ts` — yeni tek mesaj yapılandırması.
- `app/prototype/spatial-hero/route.ts` — dört fiziksel yüz, iki uç, accessible/noscript/dış kontroller.
- `app/prototype/spatial-hero/motion.ts` — birikimli 90° adımlar, uzak manuel seçimde komşu adımlar, dört yüz fallback.
- `public/prototype-assets/spatial-hero/hero.css` — kare kesit, yüz konumları, rotor açıklığı, uç kapak, reduced/responsive kontroller. Sağ selectorlar ve ortak stage aynı.

**Güncellenen Obsidian dosyaları:**

- `03-Design/MOTION_GUIDELINES.md`
- `03-Design/DESIGN_SYSTEM.md`
- `98-Agent-Logs/CURRENT_STATUS.md`
- `98-Agent-Logs/NEXT_STEPS.md`
- `98-Agent-Logs/SESSION_LOG.md` — append.
- `98-Agent-Logs/DAILY_LOG_2026-10-13.md` — append.
- `07-Reviews/2026-10-13-Four-Face-Prism-Correction.md` — bu rapor.
- `07-Reviews/evidence/prism-*` — 17 PNG, 5 QA JSON, a11y YML ve WebM. Eski kanıtlar korunur.

Browser QA scriptleri yalnız `/private/tmp/bayes-prism-qa/geometry.cjs` (`--export` optimize HTML için), `interactions.cjs`, `record.cjs`. Playwright/FFmpeg önceki `/private/tmp/bayes-spatial-qa/` araçlarından; yeni proje dependency'si yok.

## Sınır ve onay

Bilinen mekanik kabul hatası kalmadı. Dururken hacim hareket kadar belirgin değildir; daha geniş rotor açıklığı fiziksel kesit gereğidir. Sol mat CSS ve sağ raster ışığı aynı fiziksel render değildir; yeni görsel/sağ konsepti üretilmedi. Parametreler, dört provisional mesaj ve estetik kullanıcı onayında.

Gerçek Safari/iOS/Android/VoiceOver/düşük güç cihaz/MIME testi yapılmadı. Headless browser viewport video OS kaydı veya 60 fps onayı değildir. Production homepage/shared/global/nav/layout, sağ görsel/kadraj/asset, Bayes 2.0, Figma, rehberler, logo ve config/dependencies korunur. 216 kaynak hash'i aynı. Commit/push/deploy yok. **[Canlı prototip](http://127.0.0.1:3000/prototype/spatial-hero) için kullanıcı onayı beklenir; sağ animasyona devam edilmez.**
