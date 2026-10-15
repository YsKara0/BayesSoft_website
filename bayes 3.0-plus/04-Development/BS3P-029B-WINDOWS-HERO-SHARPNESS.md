# BS3P-029B — Windows hero netliği araştırması

Tarih: 2026-10-16 · Durum: teşhis/A-B tamamlandı; doğrulanmış çözüm yok, kullanıcı incelemesi beklenir.

**Sonuç:** Küçük HTML yazıları ve kesirli affine projeksiyon netlik kaybı için güçlü adaydır; tek ve kesin kök neden olarak kanıtlanmadı. B mevcut CSS ile aynıdır. C/D/E bazı kenarları değiştirir, fakat aynı yerleşimde belirgin ve tutarlı okunurluk kazancı doğrulanmadı. Kalıcı uygulama değişikliği önerilmiyor.

## 1. Ortam ve doğrulanan kaynak

- Branch `feature/bayessoft-3.0-plus`, HEAD `c3327e1fd59e3775ff8ae07a52b9a6b1141124e1`; başlangıçta Git tree/index temiz. CURRENT_STATUS/NEXT_STEPS önceki 025/5809965 durumunu anlatıyordu; uzak CI/yayın durumu bu görevde denetlenmedi.
- Windows üzerinde kurulu **Google Chrome 155.0.8059.79**, Playwright ile headed, ayrı geçici profil. Ekran API'si 1920×1080; ana test viewport 1920×1080, DPR 1, visualViewport.scale 1. Aynı context/tab, canlı https://bayessoft.com.tr/ ve yerel http://127.0.0.1:3029/ karşılaştırıldı.
- GPU: NVIDIA GeForce RTX 5070 Ti, ANGLE D3D11, DirectComposition. Software SwiftShader'a zorlanmadı. `gpu.json` ham kayıttır; GPU süre/VRAM ölçümü değildir.
- Bunlar gerçek Windows Chrome renderlarıdır; ekran görüntüleri CDP sayfa yakalamasıdır. Kullanıcının mevcut Chrome profili, fiziksel 24 inç paneli, ClearType ayarları ve monitördeki subjektif görünüm doğrulanmış değildir. Native pencere yakalama girişimi `Computer Use app approval timed out` ile sonuçlandı; bu yoldan görüntü kanıtı elde edilmedi.
- Node 22.16.0. İlk sandbox dev başlatması kurulu paket yollarını çözemeyip otomatik TypeScript kurulumu başlatmaya çalıştı; hemen durduruldu. CI=1 ile kurulum engellendi, sandbox dışında aynı mevcut paketlerle dev başarıyla başladı. Package/lock/uygulama dosyalarında Git farkı yok; bağımlılık yükseltme/audit fix yapılmadı. İlk npm dev argüman aktarımı da sunucu başlatmadı; doğrudan Next CLI kullanıldı.

## 2. Gerçek ölçümler

| Koşul | Canvas CSS | Backing | Panel x/y ölçeği | 14px / 11px yazının x yönündeki karşılığı |
|---|---|---|---|---|
| 1920×1080, DPR 1 — canlı ve yerel | 828×517,5 | 828×517 | 0,82992 / 0,83913 | 11,62 / 9,13 px |
| 1487×1080, DPR 1 — yerel | 764×477,5 | 764×477 | 0,76577 / 0,77427 | 10,72 / 8,42 px |
| 1511×1080, DPR 1 — yerel | 788×492,5 | 788×492 | 0,78983 / 0,79860 | 11,06 / 8,69 px |

`0,79` ve `764px` önceki ölçümlerini aynı anda yeniden üretemedim. İki ayrı viewport kontrolü, pencere/içerik alanı farkının önemini gösterir; önceki ölçümün neden farklı olduğunu kesinleştirmez. Effective font değerleri yaklaşık eksen ölçeğidir; gerçek glyph yüksekliği/x-height değildir.

1920px final web paneli: `matrix(0.829038, 0.0382626, 0, 0.839133, 232.887, 194.959)`. Global sınır x=1061,38696, y=372,95874, w=406,22852, h=246,99280. Kaynak layout boyutu 490×272px. Tüm panel/text rect, font, matrix ve ancestor CSS değerleri `measurements.json` içinde.

CDP platform font kontrolü: **Instrument Sans / InstrumentSans-SemiBold / isCustomFont=true / 13 glyph**, `.record-active span`. Computed family `instrument, "instrument Fallback", sans-serif`; font asset'inin internal adıyla CSS'teki tarihsel Instrument Sans adı karıştırılmadı. Kaynak fontun yerine fallback kullanıldığına dair bulgu yok.

## 3. Kök neden incelemesi

Doğrulananlar:

- Yazılar canvas texture değildir; `SystemLayers.tsx` HTML üretir. `scene.ts` ortografik Three kamerasından üç nokta projekte ederek **2D CSS matrix** yazar. Bu overlay'de CSS perspective veya matrix3d yoktur. Kameranın 3D açısı affine ölçek/shear'a dönüşür.
- WebGL antialias true; backing/CSS oranı yaklaşık 1. Canvas yüksekliğinin floor edilmesi geometrinin dikey örneklemesini etkileyebilir; ayrı HTML metni için doğrudan çözüm değildir. DPR cap 1,5 bu DPR 1 koşulunda aktif bir sınırlama değil.
- `.surface-ui` için `backface-visibility:hidden` zaten var; transform-origin 0 0; filter none; will-change auto; opacity finalde 1; contain layout style; overflow hidden. Öndeki paneli çıkartan clip-path vardır. Scene/composition isolation:isolate; overlay host başlangıç opacity geçişi finalde tamamlanır. Sol prizmanın preserve-3d/perspective kuralları ayrı ağaçtadır.
- Finalde de kesirli ölçek/konum ve shear kalır; hareket bitince bile harflerin tamamı piksel ızgarasına oturmaz. Yalnız panel origin'ini hizalamak tüm glyph/border noktalarını hizalamaz.
- Aynı görüntüde normal navigasyon, servis metinleri ve gerçek fontla eklenen transformsuz 14/11,62/9,13px tanı örneği karşılaştırıldı. Normal örnek daha düzenli kenarlar gösteriyor; küçük boyut tek başına da okunurluk sınırı. Zemin/yerleşim farklı olduğundan bu kontrollü psikofizik veya ClearType testi değildir.
- İlk çalışmada canlı/yerel hero piksel eşitliği görüldü. Saklanan son tekrarın farkı 1.288.266 RGB kanalından yalnız **6 kanal**, maksimum 4/255, ortalama mutlak fark 0,00001164/255. Yerel build'e özgü belirgin blur farkı yok. Bu, canlı deploy'un Git SHA'sını doğrulamaz.
- PMREM sigmaRadians uyarısı hem canlıda hem yerelde görüldü; metin bulanıklığıyla nedensel bağ kurulmadı. Pageerror kaydı yok; console warning'ler saklandı.

**Hâlâ olası:** küçük projected glyph'lerde Windows Chrome rasterizasyonu, affine dönüşüm ve transparent/clipped compositing birleşimi. AA türünü grayscale/ClearType diye kesin sınıflandırmadım; compositor tile raster ölçeği doğrudan ölçülmedi. LayerTree kaydı yalnız root içerik katmanlarını verdi, panel başına bağımsız GPU katmanı kanıtı sağlamadı. CSS dışındaki tüm sürücü/monitör/font raster nedenlerinin dışlandığı iddia edilmez.

Chromium'un [rendering critical path](https://www.chromium.org/developers/the-rendering-critical-path/) ve [compositing açıklaması](https://new.chromium.org/developers/design-documents/gpu-accelerated-compositing-in-chrome/) paint/raster/compositing ayrımını destekler. Bunlar bu site için kök neden kanıtı değildir; belirli eski Chromium bug kayıtları bu oturuma teşhis olarak taşınmadı.

## 4. Geçici A/B sonuçları

Tüm varyantlar aynı yerel sayfa, DPR/viewport ve final 8,400s pozunda tarayıcı belleğinde uygulandı. Kaynak CSS/TSX değiştirilmedi; screenshot'lara sharpen/filter eklenmedi.

| Varyant | Uygulama | Sonuç |
|---|---|---|
| A | Mevcut görünüm | Referans |
| B | backface-visibility:hidden | Zaten var; **0 farklı kanal**, kazanç yok |
| C | Parent global offset'i hesaba katarak panel origin'ini tam CSS/device piksele yuvarla | Bazı glyph kenarları değişiyor; bütün metinde net kazanç yok. Her eksende en çok 0,5px overlay kayması; WebGL aynı yerde kaldığı için hizalama ve hareket titreşimi riski |
| D | zoom≈0,82992; matrix'in 6 bileşenini aynı zoom'a böl | Fiziksel paneli yaklaşık koruyan layout/raster alternatif denemesi. Bazı kenarlarda fark, tutarlı üstünlük yok. Küçük layout yuvarlamaları ve animasyon layout maliyeti var |
| E | Ek kontrol: zoom2 + inverse matrix | Panel sınırları yaklaşık aynı; bazı harf/badge kenarları değişiyor. Belirgin genel kazanç doğrulanmadı; bu gerçek GPU supersampling ölçümü değildir |
| A tekrar | Orijinal inline style'a dön | En büyük kanal farkı 1/255; görünür baseline geri geldi |

D panel boyut sapması bu snapshot'ta en çok yaklaşık 0,015px; E yaklaşık 0,00025px. İç metin yerleşimi CSS zoom yuvarlamasından etkilenebilir. C/D/E için farklı piksel sayısı kalite puanı değildir; `pixel-comparison.json` yalnız farkı kaydeder.

**Görsel kanıt:** [3× etiketli karşılaştırma](../07-Reviews/evidence/BS3P-029B/comparison-3x.png), [canlı A](../07-Reviews/evidence/BS3P-029B/live-A-hero.png), [yerel A](../07-Reviews/evidence/BS3P-029B/local-A-hero.png), [normal HTML referansı](../07-Reviews/evidence/BS3P-029B/local-normal-html-reference.png). 3× görüntü nearest-neighbor kırpıntıdır; gerçek 100% kaliteyi kaynak PNG'lerle değerlendirin. Satırlar A/B, C/D, E/A-tekrar. Bu bir uygulanmış önce/sonra teslimi değildir; aday karşılaştırmasıdır.

## 5. Kısa performans ve hareket gözlemi

Kaynak timing değiştirilmedi. A/D/E birer replay; D/E için MutationObserver ile o frame'in kaynak matrix'i dönüştürüldü. Bu ek test mekanizması da maliyete dahildir; entegre çözüm benchmark'ı değildir.

| Varyant | Gözlenen duvar süresi | Render frame | Layout sayısı | Layout süresi | Main-thread task süresi |
|---|---|---|---|---|---|
| A | 8418ms | 1386 | 11 | 0,831ms | 2046,492ms |
| D | 8419ms | 1383 | 217 | 36,383ms | 2375,876ms |
| E | 8422ms | 1388 | 12 | 1,823ms | 2202,233ms |

Frame sayısı yüksek yenilemeli mevcut oturum örneğidir, 60Hz kullanıcı performansı değildir. D/E görünür geometriyi genel olarak koruyarak final 8,400'e ulaştı; bunun bütün frame'lerde sıfır kayma veya Safari uyumu anlamına geldiği iddia edilmez. Başlangıç/final drawCalls=11, triangles=1290; A final idle frame sayacı 500ms boyunca 2778→2778 (ham kayıttaki değer esas). GPU frame süresi, enerji/VRAM veya uzun çalışma testi yok. Tek örnekteki CPU farkından kalıcı yüzde regresyon sonucu çıkarılmamalı.

## 6. Öneri ve açık riskler

**En küçük güvenilir öneri şu an A'yı korumak.** B gereksiz; C net kazanç sağlamadan hizalama riski getirir; D ek layout üretir; E'nin kalite faydası belirsizdir. Bu nedenle bu adaylardan biri için production değişikliği istemiyorum. Kullanıcı 100% PNG ve büyütülmüş karşılaştırmada açık bir tercih bildirirse yalnız seçilen aday ayrı uygulama kapsamına alınmalı; Safari ve kısa hareket/parite kabulü o aşamada gerekir.

Metni büyütme, sahneyi/yerleşimi değiştirme, canvas'a taşıma, DPR artırma veya sahte keskinleştirme bu görevde uygulanmadı. Mobil SVG fallback, Safari galeri düzeltmesi, projeler/referanslar, header, diller ve prizma/video kaynakları değişmedi. Safari bu Windows oturumunda test edilmedi. Mobil/geniş QA, build/lint/typecheck yapılmadı; uygulama değişmediği için gereksiz kapsam genişletilmedi.

Kanıt ve tekrar çalıştırma scriptleri `../07-Reviews/evidence/BS3P-029B/` altında. Scriptler proje kökünden çalışır ve mevcut bundled Playwright yolunu kullanır; paket kurulumu yapmaz. Yeni branch gerekmedi; kalıcı uygulama edit'i yok. Commit/push/merge/deploy/staging yapılmadı. Yerel tanı sunucusu çalışma sonunda durduruldu.
