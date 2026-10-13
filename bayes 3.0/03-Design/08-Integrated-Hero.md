# BayesSoft 3.0 — Integrated Hero

12 Ekim 2026 · Figma entegrasyonu tamamlandı; kullanıcı incelemesi bekleniyor. **Frontend prototipi başlamadı.**

## Kullanıcı seçimi ve kapsam

Variant C — Architectural Spatial prototip temeli olarak seçildi. Sol kaynak yeniden çizilmez: üst-alt sabit mimari yüzeyler, iki yüzlü orta panel, seçilmiş A/B metinleri, hafif gölge, açık yüzey ve büyük native tipografi korunur. Yeni entegrasyon yalnız ölçek/boşluk ayarı yapar. Önceki tüm Figma frame'leri korunur.

Sağ için kullanıcı projedeki yeni beyaz-mavi spatial görseli prototip aşamasında onayladı. Mevcut native service illustration yeni hero'da kullanılmadı. Başka tasarım skill'i veya görsel üretim yok; yaratıcı rehber Anthropic `frontend-design`, Figma araç yönergeleri teknik kullanım içindir.

## Gerçek görsel dosyası

`/Users/yavuz/Projects/BayesSoft_website/assets/hero/bayessoft-spatial-v1.png`

`rg --files assets/hero` envanterinde tek PNG olarak bulundu; dosya adı tahmin edilmedi. Render incelendi: açık yüzeyler, kontrollü kobalt, katmanlı yarı saydam paneller ve işlenmiş hizmet sembolleri brief ile eşleşiyor.

1448×1086, 4:3, 1,547,393 byte. SHA-256: `127512edabe5538cb93eddd766bb032b0a5b25033980e74bfe6924794c1a3341`. Figma image hash: `f33f8d1414a285c04b135e8c6e42bf20e5f2aabb`. Kaynak değişmedi/üretilmedi; yalnız Figma'ya yüklendi. İlk upload ağ kısıtına takıldı; verilen ağ izniyle aynı onaylı PNG başarıyla yüklendi.

Bu kavramsal hizmet görselidir; gerçek müşteri projesi/ürün sonucu diye sunulmaz. Kullanım kuralları [[DESIGN_SYSTEM]] içinde.

## Plan ve uygulama

Solun tasarım bütçesi tipografi ve mimari yapı; sağın bütçesi onaylı kompozisyon. Beyaz #FCFCFA kadraj, #20282F yazı ve Instrument Sans ailesi korundu. Yeni renkli buton, dekoratif ayırıcı veya ikon üretmek yerine mevcut dört hizmet metni kullanıldı. Bütün görüntüler doğal 4:3 oranında FIT; ek kırpma ve filtre yok.

Balanced C'yi %100 korur, 40 px ara ile görsele nefes verir. Visual Emphasis sağı %8 daha geniş gösterir, C'yi yaklaşık %6 küçültür; aynı 1440×839 kadrajda karşılaştırılır. Mobilde önce başlık, sonra tam kadraj görsel. Native C/text katmanları ve gizli Face B her frame'de korunur; bunlar çalışan animasyon değildir.

## Figma bağlantıları

Mevcut Spatial Concept page'de yeni **BayesSoft 3.0 — Integrated Hero** section: [bölüm](https://www.figma.com/design/gLI3OMMpoaiaxm1zfa0Apf?page-id=36%3A64&node-id=98-961).

| Frame | Link | Sol C | Sağ PNG |
|---|---|---|---|
| Desktop Hero — Balanced | [Balanced](https://www.figma.com/design/gLI3OMMpoaiaxm1zfa0Apf?node-id=99-961) | 540×512, %100 | 700×525 |
| Desktop Hero — Visual Emphasis | [Visual Emphasis](https://www.figma.com/design/gLI3OMMpoaiaxm1zfa0Apf?node-id=99-1018) | 508×481.66, yaklaşık %94 | 756×567 |
| Mobile Hero — Integrated | [Mobil](https://www.figma.com/design/gLI3OMMpoaiaxm1zfa0Apf?node-id=99-1075) | 342×324.27 | 342×256.5 |

Desktop'lar 1440×839; mobil 390×yaklaşık 811. Ek source image katmanı 98:962; bu onaylı PNG'nin Figma kaynağıdır, yeni tasarım alternatifi değildir.

![[evidence/integrated-hero-balanced.png]]

![[evidence/integrated-hero-visual-emphasis.png]]

![[evidence/integrated-hero-mobile.png]]

## Kritik değerlendirme

| Soru | Gözlem |
|---|---|
| Sağ soldaki metni bastırıyor mu? | Balanced'da yüksek kontrast başlık önde kalıyor. Visual Emphasis'te büyük mavi alan daha baskın; başlık yine okunur, ancak görsel dikkat payını artırıyor. |
| Sol fazla küçük mü? | Balanced kaynak C'yi tam ölçekte tutuyor. Emphasis'te yalnız yaklaşık %6 küçülme; hiyerarşi kaybolmuyor, yine de tam ölçek daha güçlü bir tipografik duruş veriyor. |
| İki dil uyumlu mu? | Açık yüzey, hassas geometri ve mavi/neutral ilişki ortak. Sol mat native 2D, sağ yarı saydam render; malzeme/ışık birebir aynı değil. Görseli değiştirerek bu fark giderilmeye çalışılmadı. |
| Boş/kalabalık mı? | Balanced'ın 40 px arası daha rahat. Emphasis'in 16 px arası ve daha büyük fotoğrafı daha dolu; ekstra copy/CTA eklenmedi. İki desktop aynı kadrajda. |
| Mavi dengeli mi? | Yeni UI'ya ek mavi yok; vurgu rasterın içinde. Emphasis'te sağın büyümesi mavi ağırlığını artırıyor. Balanced daha kontrollü. |
| Mobil güçlü mü? | Yaklaşık 52 px başlık önce okunuyor; 4:3 görsel altta bozulmadan görünür. Hizmet sembolleri küçük olsa da dört metin etiketi anlamı destekliyor. Gerçek cihaz/zoom/menü veya motion testi değildir. |

Agent önerisi: **Balanced**. C'nin tam ölçekte kalması marka mesajını ve sağ görseli daha iyi dengeliyor. Visual Emphasis etkileyici görsel için geçerli alternatif; seçim kullanıcıda. C'nin 90° kesitte metin kaybı aynı açık motion sorunu, entegrasyon bunu çözmüş veya onaylamış sayılmaz. [[MOTION_GUIDELINES]]

## Gerçek doğrulama

- Üç frame render edildi; görünür text ve image sınırlarında taşma yok. Balanced/Emphasis aynı kadraj; mobil doğal akış.
- Üç image fill aynı onaylı image hash'ini, FIT ve 4:3 oranını kullanır. Opacity 1, rotation 0, identity image transform, tüm filtreler 0. Görsel esnetilmedi/yeniden üretilmedi.
- C'nin visible A / hidden B native text/vector katmanları var. Sol raster değildir. Yeni root'larda INSTANCE sayısı 0; eski service illustration kullanılmadı.
- Önceki Spatial page'in 20 kök frame/component'inin tüm alt ağaç özellikleri aynı. Eski page'lere işlem yok; yeni page sayısı 0. Section ve source asset yeni eklemelerdir.
- Website, eski kasa, rehberler, varlıklar, yeni PNG ve referans dahil 215 korunan dosya SHA-256 karşılaştırmasında aynı. `git diff --check` geçti; takip edilen dosyalarda değişiklik yok.
- Gerçek browser/mobil/erişilebilirlik/motion testi, frontend geliştirme ve build/lint yapılmadı. AI üretim, commit/push/deploy yok. [QA kaydı](evidence/integrated-hero-qa.json)

Güncel hafıza [[98-Agent-Logs/CURRENT_STATUS]], [[98-Agent-Logs/NEXT_STEPS]], [[98-Agent-Logs/SESSION_LOG]]. **Üç entegrasyon sunulduktan sonra durulur; frontend için yetki yok.**
