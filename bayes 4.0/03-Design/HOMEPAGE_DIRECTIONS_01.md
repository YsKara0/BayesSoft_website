---
project: BayesSoft 4.0
created: 2026-10-13
status: direction-selection
tags: [bayessoft-4, homepage, figma]
---

# Üç gerçek desktop ana sayfa yönü

Kullanıcının yeni brief'i, ana sayfa tasarımı için açık yetkidir: kimlik panosu soyut kaldığı için üç gerçek, editable Figma website önerisi istendi. Pano başlangıç adayıdır; kesinleşmiş yön değildir. Ana teslim tasarımlardır; bu not kısa karar kaydıdır. Production uygulaması veya yeni 3D yetkisi değildir.

**Figma sayfası:** BayesSoft 4.0 — Homepage Directions (`152:2`). Üç ayrı 1440px frame; her birinde tam header, gerçek Türkçe hero, belirgin “Projenizi konuşalım” aksiyonu, dört eşit hizmet, gerçek FurtherUp Drive önizlemesi, iletişim kapanışı ve footer. Referans müşteri/sonuç/KPI uydurulmadı; proje kapsamı mevcut `data/projectDetails.ts` ve `data/site.ts` içinden doğrulandı.

| Yön | Figma | Screenshot |
|---|---|---|
| A — Editorial Precision | [A / 153:3](https://www.figma.com/design/gLI3OMMpoaiaxm1zfa0Apf/?node-id=153-3) | [1440×1756 PNG](evidence/homepage-directions-01-a.png) |
| B — Engineered Minimalism | [B / 153:15](https://www.figma.com/design/gLI3OMMpoaiaxm1zfa0Apf/?node-id=153-15) | [1440×2136 PNG](evidence/homepage-directions-01-b.png) |
| C — Digital Atelier | [C / 153:27](https://www.figma.com/design/gLI3OMMpoaiaxm1zfa0Apf/?node-id=153-27) | [1440×1992 PNG](evidence/homepage-directions-01-c.png) |

## A — Editorial Precision

“İşinize göre yazılım.” Büyük Manrope 88/94 başlık, beyaz ve asimetrik yerleşim; ilk ekranda küçük ama gerçek proje kanıtı. Hizmetler yan başlıkla birlikte açık satırlar; sürekli kart dizisi yok. İletişim kapanışı mineral yüzeyde. En hızlı iş/kanıt/iletişim okuması.

Motion notları frame dışında: **1** hero satırları ilk açılışta tek kısa yerleşim, CSS/opsiyonel GSAP; **2** hizmet focus/hover kenarı 12px uzar, CSS; **3** proje açık kenarı focus/hover'da 4px yaklaşır, CSS. Reduced motion: baştan görünür metin, sabit underline/outline. Hareket uygulanmadı.

## B — Engineered Minimalism

“İşinize uyum sağlayan yazılım.” Merkezi Manrope 64/72 başlık, mineral ana alan, aynı raya bağlı dört native yazılım yüzeyi. Web arayüzü, mobil yüzey, sınırlı girdi/çıktı ve özel iş akışı sembolleri eşit bir sisteme bağlanır. Bunlar şematik kimlik illüstrasyonudur; çalışan ürün/model iddiası değildir. Hizmetler tek birleşik bant, gerçek proje ayrı geniş kanıt alanı. Başka deneyin geometri/animasyonu alınmadı.

Motion notları: **1** hizmet seçimiyle bağlı yüzeyler geniş/dar yerleşime oturur, SVG+GSAP; gerçek hacim gerekli bulunursa Three.js adayı; otomatik loop yok. **2** seçili bölüm göstergesi click/focus'la oturur, CSS. **3** gerçek proje çerçevesi ilk görünümde ekrana hizalanır, CSS/GSAP. Reduced motion: anlık statik poz/seçim ve hazır ekran. Risk: teknik metafor donanım çağrışımı yapabilir; A kadar doğrudan değildir.

## C — Digital Atelier

“Fikrinizin çalışan hâli.” Koyu mürekkep sahne, Instrument Sans 108/112 display ve Manrope body; büyük gerçek proje ekranı, yanında kısa anlatım. Sonrasında açık dört hizmet sütunu ve beyaz iletişim alanı. Tipografi ve proje ölçeği, 3D süs yerine yaratıcı stüdyo karakterini taşır.

Motion notları: **1** iki headline satırı birlikte tek girişte yerleşir, CSS/opsiyonel GSAP. **2** hizmet başlığı hover/focus underline, CSS. **3** proje seçimi aynı görselden detay sayfasına genişleyen geçiş, GSAP/FLIP veya View Transition. Reduced motion: son tipografi, sabit outline, normal sayfa geçişi. Risk: fazla kreatif ajans/portfolyo olarak okunabilir; gerçek yazılım ve dengeli hizmet metni bu riski sınırlar.

## Kısa sonuç

**Agent önerisi A.** Girişim/KOBİ ziyaretçisi için özel yazılım vaadi, gerçek iş ve iletişim ilk ekranda birlikte okunur. Özenli tipografi ve asimetri hareket olmadan çalışır. B en teknik, C en stüdyo karakterli alternatif; bunlar renk değiştirilmiş aynı template değildir. Kullanıcı seçimi henüz yok.

Tek görsel review turunda üç screenshot incelendi; taşan metin/eksik font görülmedi. Toplam 99 native text, üç gerçek proje rasterı, dört yeni display style; header ve hizmetlerin local component instance'ları editable. Dokuz küçük numaralı motion notu webpage frame'lerinin dışındadır; statik kareler animasyon kanıtı değildir. Ekranlar resmî MCP'den alınmış PNG; mevcut görsel hash'i kullanıldı, yeniden upload gerekmedi.

Mobil/EN/DE/runtime a11y ve hareket uygulanmadı veya test edilmedi. Source/dependency/production/3.0/prototip/kimlik panosu korunur. Dal `feature/bayessoft-4.0`. Üç gerçek website tasarımı sonrası dur; kullanıcının A/B/C kararını bekle.
