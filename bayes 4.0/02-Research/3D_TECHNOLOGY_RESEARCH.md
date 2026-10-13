---
project: BayesSoft 4.0
created: 2026-10-13
status: preliminary-research
tags: [bayessoft-4, research, three-dimensional]
---

# 3D teknoloji ve skill hazırlığı

13.10.2026: Yerel manifest ve sınırlı resmî dokümantasyon incelemesi yapıldı. Bu not adayları değerlendirmeye hazırlar; stack seçimi, skill kurulumu veya bağımlılık ekleme yetkisi değildir. Benchmark yapılmadı.

## Mevcut proje bulgusu

[package.json](../../package.json), Next.js `^15.3.4`, React/React DOM `^19.0.0` ve Framer Motion `^12.23.0` bildiriyor. Bunlar manifest aralıklarıdır; kurulu/lockfile sürümleri ayrıca incelenmedi. `three`, `@react-three/fiber`, `@react-three/drei` ve `gsap` doğrudan bağımlılık listesinde yok. Production'ın mevcut animasyon sistemi bu görevde değiştirilmez.

## Skill adayları

| Araç | Hazırlık durumu | Değerlendirme işi |
|---|---|---|
| Anthropic Frontend Design | Kullanıcıya göre kurulu; yerel `frontend-design/SKILL.md` okundu | Konseptin özgünlüğü, tipografi ve az metin disiplini; 3D motoru olarak değerlendirilmez |
| UI UX Pro Max | Kullanıcıya göre henüz kurulmadı | Tam kaynak/sürüm/lisansı belirle; mobil, kontrast ve etkileşim review'unda katkısını değerlendir |
| Three.js Skills | Kullanıcıya göre henüz kurulmadı | Paket/repo kimliğini netleştir; geometri, malzeme, ışık, etkileşim ve performans kapsamını oku |

Yerel Frontend Design rehberi: `/Users/yavuz/.agents/skills/frontend-design/SKILL.md`. Bu yerel kaydın upstream Anthropic kaynağı ayrıca doğrulanmadı. Diğer iki skill'in içeriği veya kalitesi henüz doğrulanmadı; isimleri kurulum için yeterli kaynak tanımı sayılmaz. Bu tur hiçbir skill kurulmadı.

## Kütüphane adayları

| Araç | Rol ve değerlendirme odağı | İlk prototipte olası kullanımı |
|---|---|---|
| Three.js | Sahne, kamera, geometri, malzeme ve renderer temeli. [Resmî temel rehber](https://threejs.org/manual/pages/fundamentals.html) | Üç konsept için doğrudan motor; yaşam döngüsü ve kaynak temizliği ayrıca tasarlanır |
| React Three Fiber | Three.js için React renderer; deklaratif sahne ve React state ilişkisi. [Resmî giriş](https://r3f.docs.pmnd.rs/getting-started/introduction) | React içinde izole sahne adayımız; production entegrasyonu anlamına gelmez |
| Drei | R3F için kamera, çizgi, staging ve başka yardımcılar. [Resmî giriş](https://drei.docs.pmnd.rs/getting-started/introduction) | Yalnız somut ihtiyacı çözen yardımcılar; hazır demo estetiği alınmaz |
| GSAP | Timeline ile animasyonların sırasını ve ortak kontrolünü yönetir. [Resmî timeline rehberi](https://www.gsap.com/docs/v3/GSAP/Timeline/) | A/B'de çok parçalı zamanlama sade yöntemle yetmezse; başlangıç zorunluluğu değil |

R3F resmî giriş dokümanı React 19 ile Fiber 9 eşleşmesini belirtiyor. Bu projede uyumluluk araştırmasının başlangıcıdır; Three.js/Drei eş sürümleri, lockfile ve seçilecek kararlı sürümler uygulama öncesi yeniden doğrulanır. Alpha/WebGPU geçişi bu foundation aşamasında seçilmedi. [R3F sürüm eşleşmesi](https://r3f.docs.pmnd.rs/getting-started/introduction)

## Değerlendirilecek iki yaklaşım

- **Doğrudan Three.js:** sahne ve render yaşam döngüsünü doğrudan yönetmek; izolasyon, cleanup ve etkileşim köprüsünün bakımını değerlendirmek.
- **Three.js + R3F, gerektiği kadar Drei:** React bileşenleriyle sahne kurmak; client yükleme sınırı, paket maliyeti ve gereksiz React güncellemelerini değerlendirmek.

React tabanlı proje nedeniyle R3F ilk araştırma adayıdır; bu bir agent önerisidir. Üç prototip mümkünse aynı stack ve kalite ayarlarıyla karşılaştırılır. Teknoloji farkı zorunluysa ölçümlerde açıkça kaydedilir.

## Konsepte özgü teknik sorular

| Konsept | İlk araştırma sorusu | İlk turda ertelenecek yük |
|---|---|---|
| A — Modular Assembly | Dört modülün kesitleri ve birleşme yolları çakışmadan nasıl kurulur? | Fizik motoru, karmaşık CSG, büyük model dosyaları |
| B — Kinetic Architecture | İnce yüzeyler ayrı pivotlarla mı, gerçek mesh deformasyonuyla mı dönüşmeli? | Özel shader, çok katmanlı saydamlık, pahalı yansıma |
| C — Living Network | Sabit topoloji ve sınırlı düğüm hareketi ilişkileri okunur tutar mı? | Kuvvet simülasyonu, çok parçacık, tüm düğümleri her karede React state'e yazma |

## Performans ve erişilebilirlik araştırması

Hareketsiz durumda ihtiyaç üzerine render, gizli/ekran dışı sahneyi durdurma ve düşük cihazlarda kalite azaltma değerlendirilecek. R3F'nin performans rehberi ihtiyaç üzerine render ve kaynak paylaşımı yaklaşımlarını anlatıyor. [Resmî performans rehberi](https://r3f.docs.pmnd.rs/advanced/scaling-performance)

Ölçülecekler: sahneye özel JS/asset aktarımı, ilk anlamlı görüntü zamanı, draw call/üçgen sayısı, kare süreleri ve boşta çalışma. Öneri hedefi hareket sırasında masaüstünde 60, sınırlı mobilde en az 30 fps; gerçek cihaz ve kalite düzeyi olmadan başarı iddia edilmez. Başarısızlıkta geometri/ışık/piksel oranı sadeleştirme veya statik sunum değerlendirilir.

Canvas dört hizmeti anlatan tek bilgi kaynağı olmaz. HTML etiketleri, klavye kontrolleri, azaltılmış hareket ve WebGL/yükleme hatasında anlamlı statik alternatif birlikte planlanır. Bunlar motor veya helper kullanınca otomatik çözülmüş sayılmaz.

Sonraki araştırma: tam skill kaynakları, sürüm uyumu, route izolasyonu ve konsept başına en küçük sahne ihtiyacı. Sonuç [[05-Decisions/DECISION_LOG]] içine öneri/karar ayrımıyla yazılır.
