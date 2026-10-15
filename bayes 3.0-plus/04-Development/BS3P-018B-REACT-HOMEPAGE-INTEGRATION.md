# BS3P-018B — React Homepage Integration

**Tarih:** 2026-10-15  
**Durum:** completed — hedefli React entegrasyonu; kullanıcı incelemesi beklenir.  
**Branch / checkpoint:** `feature/bayessoft-3.0-plus` / `1218e58`.  
**Gerçek yerel ana sayfa:** http://127.0.0.1:3018/  
**Onaylı demo:** http://127.0.0.1:3018/prototype/bs3p-homepage  
Commit, push, merge ve deploy yapılmadı. BS3P-018A çalışma ağacı ve kullanıcı dosyaları korundu.

## Uygulama
- Server `app/page.tsx`, ayrı Header, SpatialHero, HeroPrism, HeroSystemScene, SystemLayers, ReferencesMarquee, SelectedProjects/GalleryStage, Services, Contact ve Footer. `SiteChrome` yalnız `/` için yeni chrome seçer; iç sayfaların eski Header/Footer kaynakları aynıdır. Sayfa bütünü client yapılmadı; locale/etkileşim bileşenleri kontrollü client sınırlarında.
- Aynı Instrument Sans dosyası next/font/local ile production yoluna alındı. Onaylı CSS homepage kapsamında scope edildi; global resetin kaldırdığı browser başlık boşlukları yalnız homepage için geri getirildi. Soğuk nötr/lacivert-mavi sistem, bölüm sırası ve wordmark korunur. Yaklaşım bölümü geri gelmedi.
- Prizma mevcut state machine'den adapte: dört fiziksel yüz, masaüstü540×420, X−90° adımlar,5000ms okuma/900ms dönüş, dört nokta, hover/focus ve reduced-motion. Root-scoped selector, AbortController, timer/RAF cleanup ve React status/announcement callback'leri eklendi. Geometri/zamanlama yeniden tasarlanmadı.
- Three scene/geometry/timeline aynı kaynaklardan production lib'e alındı; kamera, objeler, renkler,8.4s akış korunur. Dynamic import;899px altı/reduced/WebGL hatasında aynı statik SVG. Renderer/observer/listener/RAF/WebGL kaynakları dispose edilir; async generation kapısı stale mount'u engeller. UI durumları React tarafından çevrilir; dekoratif sahne sanatındaki yazılar demo gibi kalır.
- Referanslar gerçek mevcut10logo/URL/sizing map, iki artwork katmanı,120s marquee, hover/klavye odağı duraklaması ve reduced-motion ile taşındı.
- R2 aynı9slot/13dilim/40° ortak rotor, aynı radius/perspective hesapları,1040ms desktop/700ms mobil, klavye ve swipe; yeni motor yok. React yalnız merkezi proje kaydı ve senkron bilgi panelini render eder. SVG meet poster oranını korur; tekrarlanan yüzeyler aynı symbol/posteri kullanır.
- Tek `LanguageProvider` ve BS3P-018A `copy.homepage`/`getSelectedProjects(locale)` kullanılır. Yeni DOM çeviri motoru veya dependency yok. Dil değişimi canvas/prizma/galeri controller'ını yeniden kurmaz.

## Proje bağlantıları
| Proje | İç detay | Canlı site |
|---|---|---|
| FurtherUp Drive | `/projeler/furtherup-drive` | `https://drive.further-up.net` |
| Reviel | Yok; CTA render edilmez | `https://www.reviel.com.tr/` |
| Metek Makina | Yok; CTA render edilmez | `https://metekmakina.com/urunler` |

Dış bağlantılar yeni sekme/`noopener noreferrer`/yerelleştirilmiş harici etiketlidir. Atlı ve AI kayıtları/detayları silinmedi. Header/contact/footer gerçek mevcut e-posta ve doğrulanmış sosyal kayıtları kullanır.

## Gerçek kontroller
- `npm run typecheck`: geçti. Hedefli ESLint:0hata/0uyarı. Native image kullanımı onaylı statik SVG ve iki katmanlı logolar için açıklamalı yerel lint istisnasıdır.
- Nihai `npm run build`: geçti;18statik sayfa, homepage12.5kB/first-load132kB (Next raporu, performans profili değildir).679artifact dosyası,0prototypeartifact,0prototypedependency. Lifecycle cleanup sonrası build tekrarlandı.
- `node scripts/check-foundation.mjs`: legacyTR/EN/DE, onaylı namespace, proje URL/poster/null-detail ve negatif artifact fixture kontrolleri geçti.
- `node scripts/check-production-access.mjs http://127.0.0.1:3018`: altı development prototipi ve asset200; gerçek export yerelstatik sunucusunda10prototypeURLvaryantı404/productionroutes200. Canlı host/deploy testi değildir.
- Desktop1440×1000: hero/prizma/sahne ölçüleri demoyla aynı; son karşılaştırmada references/projects/services/contact/footer y ve yükseklikleri birebir aynı. Örneğin services y1974.453/h523.078 ve footer y2889.609/h440 her iki sayfada eşit. Bu hedefli DOM ölçümüdür; kapsamlı piksel karşılaştırması yapılmadı.
- Prizma manuel seçim: yüz1/angle−90/rotatingfalse. Reduced seçim: yüz2/angle−180/paused. Gallery ileri Reviel, klavye Metek; doğru canlı URL/null detay kontrol edildi. TR→EN→DE→TR: html.lang ve UI değişti, seçili proje ve aynı canvas korundu.
- Mobil390×844: yatay taşma yok; statik hero, Escape menüyü kapatır. Almanca taşma yok. CDP gerçek touch swipe Reviel'e geçti; mobil pageerror0. DE tercihi reload sonrası korundu. Ayrı WebGL getContext kapalı kısa kontrolünde statik poster görünür.
- Three final: time8.400/phasefinal/runningfalse; frame sayacı509 ve350ms sonra aynı. İlk zaman tabanlı örnek8.399'da alındığı için final kontrolü koşul bekleyerek düzeltildi.
- İlk sentetik PointerEvent denemesi tarayıcının setPointerCapture kısıtından hata verdi; uygulama hatası gibi gizlenmedi. Gerçek CDP touch tekrarı hatasız geçti; ham iki sonuç ayrı saklandı.
- 133 korunan kaynak checkpoint ile byte eşit: prototiproute/runtime/CSS/publicasset, orijinalposter, eskiHeader/Footer, katalog,SEO/config/robots/sitemap/iletişim/lock. Metadata/JSON-LD/canonical layout'ta korunur; foundation build verifier SEO kapıları geçti.

## Kanıtlar ve sınırlar
[[../07-Reviews/evidence/BS3P-018B/desktop-hero.png|Desktop çalışan sahne]] · [[../07-Reviews/evidence/BS3P-018B/desktop-page.png|Desktop tam sayfa]] · [[../07-Reviews/evidence/BS3P-018B/mobile-page.png|Mobil tam sayfa]]. JSON dosyaları aynı klasörde.

Tam sayfa headless yakalamalarında WebGL alanı boş çıkabildi; aynı durum referans demoda da görüldü. Bu nedenle desktop-hero viewport görüntüsü çalışan WebGL sahnesini ayrıca gösterir. Kanıtı iyileştirmek için render motoru veya preserveDrawingBuffer değiştirilmedi. Developer sunucusunun Next debug göstergesi dev kanıtlarında bulunur; production build'de yoktur.

Safari, gerçek cihaz, piksel matrisi, video, kapsamlı performans/profilleme/screen-reader QA yapılmadı. SPA'da iç sayfaya geçişte eski chrome gözlendi; GPU bellek profillemesi ayrı kapsam. BS3P-018C/019: kalıcı motion-pause erişilebilirlik kararı, SafariCSS3D, gerçek cihaz/WebGLcontextloss, ayrıntılı font/poster payload ve a11y/SEO finalQA. Reviel/Metek gerçek case sayfaları, yasal sayfalar ve font/referans izinlerinin release teyidi eksik. Ayrı minimalistReviel dosyası bulunmadığına ilişkin önceki kayıt sürer; onaylı mevcut poster kullanılır. Google Fonts build ağ bağımlılığı foundation'dan sürer.

## Bu görevde değişen uygulama dosyaları
- `app/page.tsx`
- `app/layout.tsx`
- `components/SiteChrome.tsx`
- `components/homepage/Contact.tsx`
- `components/homepage/Footer.tsx`
- `components/homepage/GalleryStage.tsx`
- `components/homepage/Header.tsx`
- `components/homepage/HeroPrism.tsx`
- `components/homepage/HeroSystemScene.tsx`
- `components/homepage/ReferencesMarquee.tsx`
- `components/homepage/SelectedProjects.tsx`
- `components/homepage/Services.tsx`
- `components/homepage/SpatialHero.tsx`
- `components/homepage/SystemLayers.tsx`
- `components/homepage/homepage.css`
- `components/homepage/useHomepageCopy.ts`
- `lib/homepage/gallery/controller.ts`
- `lib/homepage/gallery/dom.ts`
- `lib/homepage/gallery/geometry.ts`
- `lib/homepage/gallery/stage.ts`
- `lib/homepage/gallery/state.ts`
- `lib/homepage/gallery/swipe.ts`
- `lib/homepage/gallery/types.ts`
- `lib/homepage/prism.ts`
- `lib/homepage/reference-links.ts`
- `lib/homepage/reference-sizing.ts`
- `lib/homepage/system/geometry.ts`
- `lib/homepage/system/motion.ts`
- `lib/homepage/system/scene.ts`
- `components/fonts/InstrumentSans.ttf`
- `public/hero/system-static.svg`

BS3P-018A dosyaları bu görevde yeniden yazılmadı. Buna ek olarak bu rapor, TASK_REGISTER, CURRENT_STATUS, NEXT_STEPS, SESSION_LOG, günlük log, DECISION_LOG, REVIEW_REGISTER ve BS3P-018B evidence klasörü güncellendi/eklendi. Foundation dosyalarının Git diff'te görünmesi önceki tamamlanan görevden gelir.

## Geri dönüş ve sonraki adım
Kullanıcı onayı beklenir. Yayın yapılmadı. Görsel rollback için checkpoint'in `app/page.tsx` ve `app/layout.tsx` kompozisyonu referanstır; 018A izolasyon/dil-veri temelini geri almadan ayrı diff uygulanmalı. Otomatik reset yapılmaz. 018C/019 finalQA ve yayın için ayrıca açık yetki gerekir.
