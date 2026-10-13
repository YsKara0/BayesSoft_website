---
project: BayesSoft 4.0
created: 2026-10-13
status: reviewed-semantically-weak
tags: [bayessoft-4, prototype, modular-assembly]
---

# Experiment 01 — Modular Assembly

**Yerel URL:** http://127.0.0.1:3000/prototype/v4-modular

![1470×745 Chrome — birleşmiş heykel](evidence/experiment-01-modular-desktop.jpg)

## Heykel ve görsel karar

Birbirini tamamlayan dört mimari kesit, tek bir negatif alan çevresinde birleşir. Geniş basamaklı beyaz kaide; mineral gri, dönüşlü dikme; beyaz üst kiriş/iniş; soft-blue alt dönüş. Dar derzler ve hafif pahlar kalır. Puzzle dişi, küre, neon, partikül, cam veya eski 3.0 prizması yok. Bunlar dört yetkinliğin birlikteliği metaforudur; zorunlu paket ya da çalışan müşteri yazılımı iddiası değildir.

Tek ortografik kamera, mat/ölçülü clearcoat PBR malzemeler, sıcak ana ışık ve serin dolgu. Environment, Lightformer yüzeylerinden yerelde üretilir; dış HDRI/model indirilmez. Beyaz/mineral sıcaklığı ve sınırlı mavi bu deneyin adaylarıdır; kesin marka token'ı değildir. Sistem sans-serif kullanılır, font eklenmedi.

## Hareket

| Döngü zamanı | Davranış |
|---|---|
| 0–0,8 s | Dört parça ayrık, kadraj içinde bekler |
| 0,8–2,93 s | Kaide → dikme → kiriş → dönüş; 160ms başlangıç farkı, her parçada 1,65s hizalanma |
| 2,93–7 s | Tek yapı yaklaşık 4,07s bekler |
| 7–9,27 s | Dönüş → kiriş → dikme → kaide; 140ms fark, her parçada 1,85s ayrılma |
| 9,27–10,8 s | Başlangıçtaki aynı ayrık poz; sonraki döngüye sıçrama yok |

Smootherstep uçlarda sıfır hız/ivme sağlar. Çeviri ve küçük rotasyonlar birlikte çözülür; hareket sırasında çok küçük bir yükselme yayı vardır. Mobil ayrılma mesafesi %70, daha yakın kadraj; pointer kamera yok. Son kullanıcı talebi bu deneyde sürekli loop'u açıkça istediği için önceki foundation'ın mobil durağan/loop olmayan önerisi burada uygulanmadı.

## Kontrol ve alternatif

Durdur/oynat zamanı durduğu pozda tutar. Birleşmiş görünüm tamamlanmış heykeli durdurur; tekrar oynat bu pozdan devam eder. Masaüstü normal motion/fine-pointer'da küçük kamera yanıtı; sürekli orbit yok. Azaltılmış harekette ilk yüklemede ve tercih değişince assembled durağan görünüm, kamera hareketi kapalı. Gizli sekme/ekran dışı animasyon durur; kaçırılan zamanı hızlandırarak telafi etmez. WebGL/context hatasında aynı kesitlerden SVG alternatif; geri dönüş reload gerektirir. OS tercih/hata yolları kodlandı, ayrı final QA'da doğrulanacak.

## İzolasyon ve bağımlılıklar

Mevcut Next `output: export` ve production root layout'unu değiştirmemek için yeni Route Handler bağımsız HTML verir. React/R3F kaynakları esbuild ile aynı origin'deki bundle'a çevrilir. Mevcut React/Next sürümleri ve önceki lockfile paket sürümleri korundu. [R3F resmî kurulum rehberi](https://r3f.docs.pmnd.rs/getting-started/installation), React 19 ile Fiber 9 eşleşmesini belirtir; paketlerin npm peer alanları da kontrol edildi.

| Paket | Sürüm | Amaç |
|---|---|---|
| three | 0.180.0 | Geometri, materyal, WebGL |
| @react-three/fiber | 9.8.1 | React sahne/render akışı |
| @react-three/drei | 10.7.9 | Environment/Lightformer/SoftShadows |
| @types/three | 0.180.0 | Geliştirme: TypeScript tipleri |
| esbuild | 0.28.2 | Geliştirme: izole yerel JS/CSS bundle |

Çalıştırma: `npm run prototype:v4-modular`, sonra `npm run dev -- --hostname 127.0.0.1`. Hızlı kaynak iterasyonunda bundle komutuna `-- --watch` eklenebilir; Next dev bu bağımsız bundle'ı kendiliğinden yenilemez.

## Hızlı doğrulama ve sınırlar

Yerel bundle, TypeScript, hedefli ESLint, saf hareket endpoint/range/loop-boundary ve diff-check geçti. Chrome 1470×745'te render ve bir çevrim; pause/assembled kontrolü; yukarıdaki tek teslim screenshot. 390×844 temel mobil kontrolde dört parça kadrajda, document scrollWidth 390 ve kontroller 44px. Bu viewport kontrolü gerçek telefon/dokunma testi değildir. İlk sert gölge rafine edildi; final render'da yeni console error/warning yok.

JS yaklaşık 1,15 MB sıkıştırılmamış; aktarım ve gerçek GPU/FPS ölçülmedi. Safari/telefon, OS reduced-motion, ekran okuyucu/zoom, context kaybı, route/cleanup ve full production build/regresyon ayrı final QA. Sahne stilize mimari görseldir; fizik/çarpışma simülasyonu veya kapsamlı swept-volume kontrolü yok. Prototip metinleri TR; production TR/EN/DE değişmedi. Figma, 3.0 ve production sayfaları değiştirilmedi; commit/push/deploy yok. Kullanıcı geri bildirimi beklenir.

## Bu oturumun dosyaları

- `app/prototype/v4-modular/route.ts`
- `app/prototype/v4-modular/scene/entry.tsx`
- `app/prototype/v4-modular/scene/Scene.tsx`
- `app/prototype/v4-modular/scene/geometry.ts`
- `app/prototype/v4-modular/scene/motion.ts`
- `app/prototype/v4-modular/scene/fallback.ts`
- `app/prototype/v4-modular/scene/experiment.css`
- `scripts/build-v4-modular.mjs`
- `package.json`, `package-lock.json`
- `public/prototype-assets/v4-modular/experiment.js`
- `public/prototype-assets/v4-modular/experiment.css`
- `public/prototype-assets/v4-modular/experiment.js.LEGAL.txt`
- `bayes 4.0/98-Agent-Logs/CURRENT_STATUS.md`
- `bayes 4.0/98-Agent-Logs/NEXT_STEPS.md`
- `bayes 4.0/98-Agent-Logs/SESSION_LOG.md`
- `bayes 4.0/98-Agent-Logs/DAILY_LOG_2026-10-13.md`
- Bu deney notu ve `04-Prototypes/evidence/experiment-01-modular-desktop.jpg`

Devir: [[98-Agent-Logs/CURRENT_STATUS]], [[98-Agent-Logs/NEXT_STEPS]].

## 13.10.2026 — Kullanıcı değerlendirmesi

Experiment 02 brief'indeki geri bildirim: teknik ve görsel uygulama başarılı; BayesSoft'la anlamsal ilişki zayıf. Sonuç, özel yazılımın değerini yeterince taşımayan soyut mimari heykel olarak okundu. Bu kayıt önceki teknik kontrolleri veya tarihsel teslimi değiştirmez. Modular Assembly kodu ve görseli korunur. [[EXPERIMENT_02_KINETIC_ARCHITECTURE]] daha somut arayüz/mekanizma ve ihtiyaç değişimine yönelik dönüşüm hipotezini sınar.
