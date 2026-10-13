---
project: BayesSoft 4.0
created: 2026-10-13
status: motion-proposals
tags: [bayessoft-4, motion, accessibility]
---

# Hareket ilkeleri

Hareket bir ilişkiyi açıklar: A'da birleşme, B'de uyarlanma, C'de bağlantı. 3.0'ın dört yüz/90° rotasyonu, zamanlayıcısı veya otomatik video döngüsü 4.0'ın hareket şartnamesi değildir.

## Ortak davranış önerisi

1. Durağan sahne ilk bakışta hacim ve temel ilişkiyi gösterir.
2. Kullanıcı bir eylem veya hizmet seçer; tek amaçlı kısa geçiş gerçekleşir.
3. Sahne okunur bir son duruma yerleşir; yeni eylem bekler.

Başlangıç önerisi: mikro vurgu 150–250 ms; tek dönüşüm 600–1200 ms; A'nın çok parçalı birleşimi toplam en fazla yaklaşık 1,8 saniye. Bunlar test aralıklarıdır, onaylı timing değildir. Sürekli loop, uzun kamera uçuşu, scroll kilidi, otomatik metin carousel'i ve her öğede bağımsız reveal varsayılmaz.

| Konsept | Ana hareket | Durağan son durum |
|---|---|---|
| A | Hizmet parçalarının hizalanıp birleşmesi | Derzleri anlaşılır tek sistem |
| B | İnce yüzeylerin eksenlerinde yeni forma yerleşmesi | Silueti ve katman ilişkisi net yapı |
| C | Seçili kümenin bağlı yolunu kısa aktarım ile göstermesi | Seçili yol ve dört hizmet kümesi |

## Kontrol ve okunurluk

- Başlık, hizmet etiketleri ve gerekli açıklama canvas dışında kalır; okumak için animasyonun tamamlanması beklenmez.
- Fare, dokunma ve klavyeden yapılan aynı seçim aynı son duruma götürür. Hover ek ipucu olabilir; temel anlamı açan tek yöntem değildir.
- Hızlı tekrarlar sınırsız animasyon kuyruğu oluşturmaz. Son geçerli seçim tutarlı bir son duruma yerleşir; odağı ve seçili hizmeti korur.
- Kalıcı durdurma kullanıcının kararıdır; başka etkileşimle kendiliğinden geri açılmaz. Otomatik hareket sonradan önerilirse dışarıda erişilebilir durdur/başlat kontrolü gerekir.
- Geometri ve kamera hizmet etiketini örtmez. İnce yüzeyin edge-on anı, temel metni veya seçimi kaybettirmez.

## Mobil ve azaltılmış hareket

Mobil ilk görünüm durağan; hareket yalnız açık seçimle. Native dikey scroll, pinch zoom ve dokunma hedefleri korunur. Hedefler proje standardı olarak en az 44×44 CSS px planlanır; küçük mesh için dış HTML eşdeğeri kullanılır.

`prefers-reduced-motion` ilk yüklemede ve çalışma sırasında dikkate alınır. Otomatik/3D dönüşüm ve kamera hareketi kapalı; seçilen hizmet statik son poz, vurgu ve HTML açıklamayla anlık erişilir. Tercih değişiminde mevcut seçim korunur. WebGL yokluğu, context kaybı veya yükleme hatası da anlaşılır statik sunuma geçer.

Ekran okuyucu dört hizmete hareketten bağımsız ulaşır. Dekoratif 3D tekrarlar gereksiz duyuru üretmez; otomatik live announcement yapılmaz. Klavye odağı seçim sonrası aynı kontrolde kalır; görünür focus ve seçili durum yalnız renge dayanmaz.

## Çalışma ve kaynak kullanımı

Sekme gizliyken ve sahne ekran dışındayken animasyon/render işi durur. Yeniden görünmede kaçırılan kareleri hızla oynatmak yerine geçerli poz gösterilir. Durağan sahnede sürekli render ihtiyacı gerekçelendirilir. Listener, zamanlayıcı ve GPU kaynakları sahneden çıkışta temizlenir.

Hareket sırasında gerçek geometri, çakışma, ışık ve kadraj birlikte kontrol edilir. Kare süresi kötüleşirse detay, gölge veya piksel oranı azaltılır; hız artırarak sorun gizlenmez. Akıcılık iddiaları gerçek cihaz ölçümüne dayanır.

## Kontrol derinliği

Küçük iterasyonda yalnız değişen davranış, bir masaüstü/mobil görünüm ve ilgili reduced-motion/klavye yolu kontrol edilir. Uzun kayıt, tüm cihaz matrisi ve tam site QA her turda çalıştırılmaz. Final QA ayrı görevdir; plan [[04-Prototypes/PROTOTYPE_PLAN]] içinde.
