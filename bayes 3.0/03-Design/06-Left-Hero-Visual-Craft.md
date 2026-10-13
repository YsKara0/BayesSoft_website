# Sol Hero — Visual Craft Rafinesi

12 Ekim 2026 · Mevcut Spatial Concept'in iki malzeme varyantı. Yeni konsept/page veya frontend değil. **İki varyant da kullanıcı incelemesi bekliyor.**

## Güncel brief ve plan

Anthropic `frontend-design` yaratıcı rehberi kullanıldı. Referans yeniden incelendi: güçlü sol tipografi, üst-orta-alt devamlılık ve açık malzeme dili alındı; marka, ikon, kalın dış çerçeve ve asılı cam sahnesi kopyalanmadı.

Plan: önce görünür UI'yi çıkar; üst/alt paneli incelt, merkezi büyüt; kalın mavi-gri offset yerine ince nötr kesit kullan. İki varyantta font, metin, oran ve hizalamayı aynı tut; yalnız malzeme ve ışığı değiştir. Plan kontrolünde ayrı panel radius/gölgeleri ve UI controls elendi; fiziksel yapı tipografiyle kuruldu. Ayrıntılı geçici değerler [[DESIGN_SYSTEM]] içinde.

```text
Sabit üst yüzey — boş ve ince
──────── hassas derz ────────
Dönen orta yüz — A veya B
──────── hassas derz ────────
Sabit alt yüzey — tek kısa cümle
```

## İki varyant

**A — Architectural Minimal / Mimari minimal:** Mat beyaz yüzey, neredeyse görünmez ortam gölgesi, nötr ince malzeme kesiti. Tipografi öne çıkar; fiziksel derinlik çok sessizdir.

**B — Soft Spatial / Yumuşak mekânsal:** Aynı geometri; sol üst ışığı çağrıştıran beyaza yakın nötr ton geçişi, hafif ortam/temas gölgesi, ince kesit ve çok düşük mavi yansıma. Işık sağ/alt yüzlerde daha fazla derinlik hissettirir. Glow veya dekoratif mavi gradient yok.

Ortak obje 540×512 px, ön yüz 538×510 px. Üst/orta/alt 36/398/72 px, derzler 2 px, nominal kesit 2 px. Önceki 635 px obje yüksekliği azaltıldı; orta yüz baskınlaştı. Başlık A 82 px, B 54 px Instrument Sans Medium; destek 16 px. Font, oran, ışık, gölge ve renkler denemedir.

Üst panelde yazı/kontrol yok. Alt panelde sadece “Küçük ve orta ölçekli işletmeler için.” kalır. Büyük mavi CTA, Projelerimiz, Duraklat/Diğer yüz ve 1/2 göstergeleri yeni objelerde yok; başka kontrol eklenmedi. Bu, website genelinde CTA kaldırma veya erişilebilirlikten vazgeçme kararı değildir.

## Figma — aynı page, korunmuş özgün frame'ler

[Eşit ölçekli karşılaştırma](https://www.figma.com/design/gLI3OMMpoaiaxm1zfa0Apf?page-id=36%3A64&node-id=68-831)

| Yeni rafine frame | Link | Ölçü |
|---|---|---|
| Variant A / Yüz A | [İlk görünüm](https://www.figma.com/design/gLI3OMMpoaiaxm1zfa0Apf?node-id=68-641) | 1440×878 |
| Variant A / Yüz B | [İkinci metin yüzü](https://www.figma.com/design/gLI3OMMpoaiaxm1zfa0Apf?node-id=68-688) | 1440×878 |
| Variant B / Yüz A | [İlk görünüm](https://www.figma.com/design/gLI3OMMpoaiaxm1zfa0Apf?node-id=68-735) | 1440×878 |
| Variant B / Yüz B | [İkinci metin yüzü](https://www.figma.com/design/gLI3OMMpoaiaxm1zfa0Apf?node-id=68-783) | 1440×878 |
| Sol obje karşılaştırması | [A ve B](https://www.figma.com/design/gLI3OMMpoaiaxm1zfa0Apf?node-id=68-831) | 1320×774 |
| Orta yüz / görsel durumlar | [A–ara faz–B](https://www.figma.com/design/gLI3OMMpoaiaxm1zfa0Apf?node-id=71-961) | 1440×yaklaşık 1308 |

![[evidence/left-craft-comparison.png]]

## Görsel durumlar ve hareket sınırı

Başlık “İşinize göre yazılım.” korunur; “Web, mobil, AI ve özel çözümler.” ikinci yüzdür. Yalnız orta yüz döner. Üst-alt yüzeyler, destek cümlesi ve ortak kesit sabit; nesne kaydırılan iki kart değildir. İki varyant için aynı ölçekte A/ara/B native çizimleri hazırlanmıştır. Ara faz 2D geometrik şemadır; çalışan animasyon veya gerçek malzeme simülasyonu değildir. Önceki Face C alternatifi değiştirilmedi, yeni döngüye eklenmedi.

Erişilebilir durdurma/yüz seçimi implementasyon aşamasında nesnenin dışında ayrıca tasarlanacaktır. Reduced-motion'da otomatik dönüş kapalıdır. Yeni kontrol UI'sı veya frontend animasyonu yapılmadı. [[MOTION_GUIDELINES]]

![[evidence/left-craft-states.png]]

## Eleştirel karşılaştırma

| | Güçlü taraf | Sınır |
|---|---|---|
| A | En sakin tipografik ifade; gölge UI card hissini büyütmez | Durağan görüntüde mimari derinlik daha az belirgin, çok düz algılanabilir |
| B | İnce malzeme/ışık ile obje hissi daha belirgin; merkez hâlâ tipografi | Gölge ve ton yoğunluğu artırılırsa yeniden UI/efekt hissi doğabilir |

Agent önerisi: **B**, fiziksel obje hedefini bir miktar daha iyi taşıyor; A'nın kısıtlı derz/gölge yaklaşımı referans olarak korunmalı. Bu öneri nihai seçim değildir. İki varyant arasındaki fark kasıtlı olarak küçük; yeni yaratıcı yön veya renk alternatifi değiller. Son malzeme hissi statik Figma ile sınırlı, gerçek dönüş ancak yetkilendirilmiş browser prototipinde değerlendirilebilir.

## Gerçek kontroller ve kanıt

- Dört hero, karşılaştırma ve durum board'u render edildi. Başlıklar iki satırda, Türkçe glyph'ler görünür; text-parent sınır kontrolünde taşma yok.
- Her durağan sol objede iki düzenlenebilir text katmanı, native frame/vector/rectangle var; image fill yok. CTA/pause/pagination metin taraması yeni sol objelerde boş.
- Spatial page'in önceki 11 üst seviye frame/component'i tüm alt ağaç özellikleriyle aynı kaldı. Yeni page yok; eski iki exploration page'e işlem yapılmadı.
- Yeni hero'lardaki sağ sistem kaynakla stil/hiyerarşi/koordinat olarak eşleşiyor. Native kopyada tek bir iç yükseklik yaklaşık 0.000244 px yuvarlandı; 0.001 px tolerans içinde, tasarım değişikliği yok. Sağ kaynaklar düzenlenmedi. [QA kaydı](evidence/left-craft-qa.json)
- Website, 2.0, rehberler, logo/varlıklar ve referans dahil 213 yerel dosyanın SHA-256 karşılaştırması aynı; `git diff --check` geçti. AI üretim, commit/push/deploy ve frontend yok.
- Yeni mobil/reduced-motion uygulaması, browser animasyonu, gerçek cihaz veya erişilebilirlik kabulü yapılmadı. Eski frame'lerin korunması yeni görsel tercihlerin onayı değildir.

Ekran görüntüleri: [A / Yüz A](evidence/left-craft-a-face-a.png), [A / Yüz B](evidence/left-craft-a-face-b.png), [B / Yüz A](evidence/left-craft-b-face-a.png), [B / Yüz B](evidence/left-craft-b-face-b.png).

Çalışma hafızası: [[98-Agent-Logs/CURRENT_STATUS]], [[98-Agent-Logs/SESSION_LOG]], [[98-Agent-Logs/NEXT_STEPS]]. **Onay beklenir; frontend'e geçilmez.**
