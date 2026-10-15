# BayesSoft 3.0 — Interactive Hero Prototype

13 Ekim 2026 · Oturum S2026-10-13-PROTOTYPE-01 (12 Ekim 23:49 TRT başlangıç). **Balanced yalnız prototip için onaylı; production'a aktarma yetkisi yok.** Yaratıcı rehber yalnız Anthropic `frontend-design`; Figma yönergesi teknik okuma/uyarlama için kullanıldı.

Yerel adres: [Spatial Hero](http://127.0.0.1:3000/prototype/spatial-hero).

Tasarım kaynağı: [Desktop Balanced](https://www.figma.com/design/gLI3OMMpoaiaxm1zfa0Apf?node-id=99-961), [[03-Design/08-Integrated-Hero]], [[03-Design/07-Architectural-Spatial-C]]. Figma tasarımı değiştirilmedi; generated design context ve render uygulama hedefi olarak incelendi.

## İzolasyon ve dosyalar

Mevcut kök layout production header/footer'ı koşulsuz ekliyor. Onu, global CSS'yi veya iş bileşenlerini değiştirmek yerine **Next.js App Router GET Route Handler** kendi HTML belgesini döndürür. Route Handler'ların layout'a katılmaması [resmî Next.js belgesinde](https://nextjs.org/docs/app/getting-started/route-handlers) açıklanır. Bu React homepage'in yeni sürümü değildir; izole, TypeScript ile hazırlanan yerel inceleme rotasıdır.

| Yeni dosya | İşlev |
|---|---|
| `app/prototype/spatial-hero/route.ts` | Statik HTML, semantik içerik, minimal gezinme, kaynak görsel import'u; `force-static`, noindex/nofollow |
| `app/prototype/spatial-hero/motion.ts` | Self-contained typed browser giriş fonksiyonu; CSS 3D state, timer, pointer/keyboard/reduced-motion kontrolü |
| `public/prototype-assets/spatial-hero/hero.css` | Yalnız bu belgenin yüklediği font, malzeme, oran, responsive ve 3D stilleri |
| `public/prototype-assets/spatial-hero/instrument-sans.ttf` | Figma'daki Instrument Sans'ın yerel variable font'u; Türkçe karakterler |
| `public/prototype-assets/spatial-hero/OFL.txt` | Fontun SIL OFL lisansı |

Font [Google Fonts'un resmî Instrument Sans deposundan](https://github.com/google/fonts/tree/main/ofl/instrumentsans) indirildi; production font sistemi değiştirilmedi. `package.json` / lockfile / Next config değişmedi. Playwright yalnız `/private/tmp` altında QA için kuruldu, proje dependency'si değildir. Animasyon library'si eklenmedi.

Sağ görsel: `/Users/yavuz/Projects/BayesSoft_website/assets/hero/bayessoft-spatial-v1.png`. 1448×1086, 4:3, aynı SHA-256 `127512edabe5538cb93eddd766bb032b0a5b25033980e74bfe6924794c1a3341`. Next static import'u ile hash'li local media URL'si kullanılır. Tam kadraj, doğal oran; ek crop, filtre, glow, shadow veya yeniden üretim yok. Müşteri projesi olarak sunulmaz.

## Kompozisyon ve Figma farkları

1440 px'de 80 px yan boşluk, 540×512 sol C, 40 px ara, 700×525 sağ PNG. Header 30 px Instrument Sans SemiBold; desktop nav Figma'daki x=880 hizasında. A 82 px, B 54 px; 1.06 line height, -.02em tracking. Mobil 24 px yan boşluk, 342×324.27 obje ve 342×256.5 PNG; dört hizmet eşit metin etiketleriyle korunur.

- İstenen erişilebilir kontroller Figma'nın butonsuz objesine eklenmedi. Hizmet satırının **altında** bulunur; belge Figma frame'inden bu yüzden daha uzundur.
- 1024 px'de orantılı split; 768 px ve 390 px'de üst üste akış. 768 px'de okunurluk için obje en çok 540 px, görsel en çok 700 px genişlikte.
- CSS perspektifi gerçek bir browser projeksiyonu; native Figma'nın 2D trapezoid çizimiyle birebir piksel eşliği iddia edilmez. 16°/164° durağan sunum ve malzeme ilişkisi korunur.
- Mobil Menü native `details` ile çalışır; linkler mevcut production URL'lerine gider. Yeni işlev/sayfa üretilmedi.
- Durağan hâlde sol obje bilinçli olarak çok az derinlik gösterir; esas fiziksel ilişki dönüş sırasında okunur. Sağ raster daha zengin malzemeli; Figma'daki bu fark korunur. Daha fazla gölge ile örtülmedi.

## Hareket ve erişilebilirlik

Yalnız orta plaka Y ekseninde döner. `perspective: 2200px`, `preserve-3d`, iki yerel yüz ve `backface-visibility: hidden`. A 16°, B 164°; B kendi yüzünde 180° çevrilmiştir, aynalanmaz. 7000 ms okuma → 750 ms dönüş → yeni 7000 ms okuma. Easing `cubic-bezier(.22,.61,.36,1)`. Bütün değerler prototip parametresi.

Hover ve klavye focus otomatiği bekletir. Durdur kalıcıdır; elle seçim otomatiği durdurur. Pointer/touch ile başlatma ayrıca blur istemez. Devam eden dönüş kenarda dondurulmaz; durağan yüze tamamlanır. Yeni dönüşler sıraya dizilmez. Sekme gizli/obje viewport dışında ise yeni otomatik geçiş yok.

Mobil/touch A ile elle seçim modunda başlar, isteyen otomatiği başlatabilir. Reduced-motion otomatiği ve transition'ı kapatır; A ilk yüz, B anlık seçilebilir. Çalışma sırasında tercih açılırsa A'ya dönülür. HTML'deki stable H1 ve hizmet cümlesi zamandan bağımsız erişilebilir; otomatik yüz değişimi live-region duyurusu üretmez. Elle seçim polite duyurulur. Görsel tekrar yüzleri aria-hidden. JS kapalıyken A ve hizmet bilgisi korunur.

**90° çevresinde metin kısa süre kenardan görülür ve kaybolur.** Son brief durağan yüzlerin okunurluğunu istiyor; sürekli okunurluk sağlandı iddiası yok. Kaydırma/fade alternatifine sessiz geçiş yapılmadı. Tam motion ayrıntısı [[03-Design/MOTION_GUIDELINES]].

## Gerçek QA

Son kayıt: **13 Ekim 00:30 TRT**. 55 ana browser kontrolü ve üç ek etkileşim kontrolü geçti. Son header hizası ve fresh reduced-motion başlangıcı da doğrulandı. [Scope/hash ve CLI sonuçları](evidence/prototype-scope-qa.json).

- Chrome ile 1440, 1024, 768, 390 px: render, iki yüz, metin taşması, 4:3 görsel, hizmet/controls ayrımı doğrulandı; sekiz screenshot saklandı.
- Otomatik timer gerçek zamanla test edildi; gözlenen rotation yaklaşık **750 ms**. Hover/focus pause, pointer leave, klavye Enter ile kalıcı pause/resume, mouse resume, elle yüz seçimi doğrulandı.
- Reduced-motion başlangıç/runtime değişimi, anlık B, statik mobil/touch, touch ile opt-in, >=44 px hedefler, Menü ve JS-off fallback kontrol edildi.
- Otomatik değişimde live duyuru yok; stable H1/B anlamı accessibility tree'de. Bu otomatik tree kontrolüdür; VoiceOver ile manuel test yapılmadı.
- Dönüş sırasında ölçülen layout-shift girdisi **0**; üst-alt sabit panel sınırları dönüş öncesi/sırasında aynı. İlk testte disable padding kaynaklı küçük kontrol kayması bulundu, düzeltildi.
- Prototipte console/page error veya başarısız HTTP isteği yok. İlk favicon 404 giderildi. Optimize export HTML'si de browser'a yüklenip initialization ve dönüş testini geçti; serialized giriş fonksiyonu minifikasyon sonrasında çalışıyor.
- `npm run lint`, `npm run typecheck`, `npm run build` başarılı. Build'in otomatik değiştirdiği `next-env.d.ts` başlangıç içeriğine döndürüldü; kalıcı ortak kaynak farkı yok.
- Production homepage başlık/navigation/link/zemin verileri önceki kayıtla aynı. Aynı viewport'ta önce/sonra görüntüleri saklandı. **Mevcut production'da reduced-motion altında SSR/hydration attribute uyarısı ayrı context'te tekrarlandı.** Prototip kaynaklı değil; scope dışı production kodu düzeltilmedi.
- Mevcut 213 içerik/kod/varlık dosyası başlangıç SHA-256 kaydıyla aynı (macOS `.DS_Store` metadatası hariç). Bayes 2.0, rehberler, logo denemeleri, PNG, production app/components/config korundu. Commit/push/deploy yok.

[Browser QA JSON](evidence/prototype-browser-qa.json), [ek etkileşim QA](evidence/prototype-additional-qa.json), [accessibility tree](evidence/prototype-accessibility.yml), [mevcut production uyarısı](evidence/production-reduced-motion-console.json).

## Ekran görüntüleri

| Viewport | Face A | Face B |
|---|---|---|
| 1440 | [A](evidence/prototype-1440-face-a.png) | [B](evidence/prototype-1440-face-b.png) |
| 1024 | [A](evidence/prototype-1024-face-a.png) | [B](evidence/prototype-1024-face-b.png) |
| 768 | [A](evidence/prototype-768-face-a.png) | [B](evidence/prototype-768-face-b.png) |
| 390 | [A](evidence/prototype-390-face-a.png) | [B](evidence/prototype-390-face-b.png) |

## Kalan inceleme ve teknik sınır

1. Kullanıcı gerçek dönüşün hissini, durağan yüzlerin okunurluğunu, dış kontrolleri ve mobil akışı incelesin. Açı/perspektif/timing nihai onay değildir.
2. Gerçek iOS/Safari ve Android cihaz, VoiceOver ve düşük güç performansı test edilmedi. Headless Chrome / emulated touch doğrulaması evrensel cihaz/60 fps onayı değildir.
3. Bu GET rota mevcut `output: export` build'inde extensionless HTML üretir. Statik host'un MIME/route davranışı doğrulanmadı; yalnız yerel Next dev onay kapsamıdır. Deploy/config düzenlemesi yapılmadı.
4. Production reduced-motion hydration uyarısı ayrı mevcut sorun olarak kayıtlı; bu görev onu değiştirme izni vermiyor.

**Burada durulur. Production'a taşıma veya ortak layout/CSS değişikliği, kullanıcı incelemesi ve ayrıca yetki gerektirir.** [[98-Agent-Logs/CURRENT_STATUS]], [[98-Agent-Logs/NEXT_STEPS]], [[98-Agent-Logs/SESSION_LOG]].
