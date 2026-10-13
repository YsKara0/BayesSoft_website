---
project: BayesSoft 4.0
created: 2026-10-13
status: review-method-proposal
tags: [bayessoft-4, review]
---

# Konsept karşılaştırma ölçütleri

Amaç BayesSoft'un hizmet yaklaşımını özgün ve anlaşılır bir görsel dille anlatan yönü bulmaktır. Yöntem agent önerisidir; henüz prototip, puan veya kullanıcı testi yok.

## Eşit inceleme koşulları

Üç konsept aynı gelişim seviyesinde, benzer sahne alanı/ışık/kalite ve aynı hizmet etiketleriyle incelenir. Önce durağan görüntü, sonra tek hareket, sonra temel seçim. Masaüstü/mobil ve azaltılmış hareket ayrı gözlemlenir. Farklı stack veya kalite zorunluysa ölçümde belirtilir.

Kısa review önerisi: ilk bakış için yaklaşık 5 saniye, bir temel etkileşim ve ardından “Ne anlatıyor?”, “Dört hizmetten hangileri anlaşılıyor?”, “Hareket neyi değiştirdi?” soruları. Katılımcı sayısı, cihaz ve gerçek yanıtlar kaydedilir; bu küçük review istatistiksel araştırma gibi sunulmaz.

## Puanlama önerisi

| Ölçüt | Ağırlık | İncelenecek kanıt |
|---|---:|---|
| Marka uyumu ve özgünlük | %20 | Premium/minimal kalite; SaaS template, mimari dekor veya AI ağı çağrışımı |
| Hizmet anlamı ve denge | %25 | Web/mobil/AI/özel yazılım ayırt ediliyor; biri diğerlerini gölgelemiyor |
| Malzeme, ışık ve durağan okunurluk | %15 | Hareket olmadan hacim, kesit ve ilişkiler net |
| Hareket ve etkileşim | %15 | Geçiş anlam katıyor; başlangıç/son durum ve seçim tutarlı |
| Mobil ve erişilebilirlik | %15 | Dokunma/klavye, focus, sabit metin, reduced-motion/statik sunum |
| Performans ve bakım yükü | %10 | Aynı cihaz/kalitede aktarım, kare süresi, boşta çalışma; geometri/state karmaşıklığı |

Her ölçüt 1–5: 1 belirgin başarısızlık, 3 revizyonla kullanılabilir, 5 kanıtla güçlü. `Toplam = Σ(puan / 5 × ağırlık)`; ağırlık yüzde puanıdır, toplam 100 üzerinden. Ölçülmeyen alan boş kalır; sıfır veya tahmini başarı puanı yazılmaz. Nihai seçim kullanıcıya aittir.

## Puanın önüne geçen kabul koşulları

- Dört hizmetin bilgisi hareket ve canvas olmadan erişilebilir.
- Klavye/dokunma eşdeğeri, görünür focus ve azaltılmış hareket sunumu vardır.
- Mobil kadraj taşmaz; native scroll/zoom korunur.
- WebGL/yükleme/context kaybında anlamlı alternatif bulunur.
- Belirlenen hedef cihazda akıcılık ve boşta durma doğrulanır; ağır sorun çözülmeden toplam puan kabul sayılmaz.

Bu koşulların prototip ve final doğrulamaları farklı derinliktedir. Hızlı review tam erişilebilirlik veya cihaz kabulü iddiası üretmez; final QA ayrıca yapılır.

## Konsepte özgü kritik soru

| Konsept | Başarı göstergesi | Revizyon işareti |
|---|---|---|
| A | Birleşme, hizmetlerin birlikte çalışmasını açıklıyor | Puzzle/oyuncak veya 2.0 süreç kopyası okunuyor |
| B | Form değişimi, ihtiyaca uyarlanmayı açıklıyor | Hizmetler mimari soyutlukta kayboluyor |
| C | Seçili bağlantı, entegrasyon ilişkisini açıklıyor | AI/blockchain çağrışımı veya düğüm karmaşası baskın |

## Sonuç kaydı

Her review için tarih/rota/revizyon, cihaz/tarayıcı/viewport/kalite, durağan ve hareket bulgusu, gerçek kullanıcı yanıtı, ölçülen performans, açık sorun ve sonraki tek revizyon kaydedilir. Ekran görüntüsü/video ancak gerçekten üretildiyse bağlanır.

Şimdiki durum: A/B/C puanları **bekliyor**; test veya tercih yok. İlk hedef temel varsayımı sınamak. Kazananın polish'i ve uzun final QA daha sonraki ayrı çalışmadır.

İlgili: [[03-Design/CREATIVE_DIRECTION]], [[04-Prototypes/PROTOTYPE_PLAN]], [[05-Decisions/DECISION_LOG]].
