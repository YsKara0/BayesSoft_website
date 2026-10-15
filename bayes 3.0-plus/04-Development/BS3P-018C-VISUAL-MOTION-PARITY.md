# BS3P-018C — Visual & Motion Parity Review

**Tarih:** 2026-10-15  
**Durum:** completed — kısa eşdeğerlik incelemesi tamamlandı; kullanıcı onayı beklenir.  
**Branch / HEAD:** `feature/bayessoft-3.0-plus` / `1218e58`.  
**Hedef:** http://127.0.0.1:3018/  
**Referans:** http://127.0.0.1:3018/prototype/bs3p-homepage

Kullanıcı React ana sayfasını demo ile gözle karşılaştırıp belirgin fark görmediğini bildirdi. Bu görev doğrulama odaklı yürütüldü. Görünür veya işlevsel bir eşdeğerlik farkı kanıtlanmadı; **uygulama kodu, CSS, font, animasyon ve asset değiştirilmedi**. Kullanıcının olumlu görsel değerlendirmesi yayın/final QA onayı sayılmadı.

## Sonuç ve font kanıtı
Aynı Chromium sürümünde desktop1440×1000 ve mobil390×844 karşılaştırıldı. DOM ölçüleri, computed stiller, gerçek render edilen font, kısa etkileşim telemetrisi, kaynak eşitliği ve eşleşen viewport ekran görüntüleri birlikte kullanıldı; tek screenshot üzerinden sonuç çıkarılmadı.

| Kontrol | Sonuç |
|---|---|
| Gerçek font | Her iki sayfada Instrument Sans; fallback gözlenmedi |
| Wordmark | InstrumentSans-Regular_SemiBold / weight600;29px |
| Hero ve hizmet başlığı | InstrumentSans-Regular_Medium / weight500 |
| Açıklama | InstrumentSans-Regular / weight400 |
| İlk hero metni | Aynı metin, br satırları, logical ölçü, font-size/weight/line-height/letter-spacing |
| Font dosyası | Production TTF ile demo TTF byte eşit; SHA-256 `b24f1812584816958afcf22e22d08e44318c5e51651e25d2438efdde389b33b1` |

Chrome DevTools Protocol `CSS.getPlatformFontsForNode` doğrudan kullanıldı: `familyName: Instrument Sans`, `isCustomFont: true`, aynı PostScript adları ve glyph sayıları. Computed aile adları React'te Next tarafından `instrument, "instrument Fallback", sans-serif`, demoda `"Instrument Sans", sans-serif`; bu CSS isimlendirme farkı, gerçek fallback kullanımı değildir. Mobil font örnekleri de aynı.

## Görsel ölçümler
- Desktop prizma540×420; solkolon x64/y214. Sağ scene x644/y195.25,732×457.5. Aynı kolon/ratio/padding, açık yüzeyler ve metin rengi.
- İlk başlık logical407.766×173.812px, font81.999px/weight500/line-height86.9189px; wordmark128.969×33.625px. Başlık satırları/metinleri aynı.
- Desktop referanslar y852/h241.4375; proje bölümü y1093.4375/h881.015625; hizmetler y1974.453125/h523.078125; iletişim y2497.53125/h392.078125; footer y2889.609375/h440. Referans artwork boyutları ve kalan sabit stiller eşleşir.
- R2 aynı9panel/117dilim, postermeet, radius465.3231px/perspective2888.2125px/strip24.9319px/coverheight385.7675px. Mobil radius364px/perspective1330px ve350×340stage eşit. Orijinal üç poster ve production kopyaları byte eşit; esnetme/kırpma farkı gözlenmedi.
- Mobil kaydedilen layout ölçümleri eşit; yatay taşma yok. Aynı hero statik sahnesi, grid, proje paneli, hizmetler ve footer. Görseller decode edildikten sonraki nihai mobil kanıtlarında yüklenmeyen image yok.
- Three camera/renderer/ışık/materyal/kompozisyon ayarları kaynak diff'inde aynı; farklar yalnız önceden eklenmiş React status callback ve lifecyclecleanup. Geometry/timeline kaynakları import uzantıları dışında eşit; statik SVG de byte eşit. Aktif sahne viewport kanıtlarında aynı düzen/renk yaklaşımı görüldü.

**Ölçüm ayrımları:** İlk React örneği adaptör ready olmadan alındığı için CSS fallback `cqw` değişkenleri ve0s başlangıçtransition gösterdi. Ready sonrası aynı px geometri ve0.9s transition doğrulandı. Farklı animasyon fazlarında alınan face-0 projected bounding rect ve kayan logonun X konumu sabit tasarım ölçüsü sayılmadı; logical metin ölçüleri ve sabit alanlar eşleşir. 0.000061px logo genişliği yuvarlama farkı için CSS değiştirilmedi. Ham örnekler JSON'da saklandı.

## Kısa hareket karşılaştırması
| Davranış | React / demo sonucu |
|---|---|
| Prizma otomatik döngü | Aynı5000ms dwell/900ms CSS transition;−90° adım. Event süresi932.2/931.5ms; tarayıcı frame/event zamanlaması farkı, tasarım farkı değil |
| Hover | İkisinde de auto paused |
| Klavye-visible odak | İkisinde de auto paused/focus-visible true |
| Nokta seçici | İkisinde de istenen yüz2'de settle; aynı kümülatif−90° yön |
| Three replay/final |8.400timeline; replaymarker→final8412.8/8412.1ms; runningfalse ve250ms sonra frame sayacı sabit |
| Referans marquee | İkisinde120s; hover/focus paused; hovercoloropacity1/neutral0,200ms geçiş |
| R2 | İleriReviel/geriFurtherUp/ArrowRightReviel; gerçek touch swipeReviel her iki sayfada çalıştı |
| R2 süreleri | Aynı stage kaynak algoritması: desktop1040ms/mobil700ms; ayrı süre profillemesi yapılmadı |
| Reduced-motion | İkisinde yüz3 anlık/auto paused/scene static/marquee animation none |
| Mobil menü | İkisinde Escape kapatır |

Sayfalar motion ölçümünde ön plana alındı; background visibility pause yanlış eşdeğerlik farkı sayılmadı. React ve demo pageerror listeleri boş. İlk logo-hover otomasyon adımı hareketli hedefin sabitlenmesini bekleyerek timeout verdi; koordinat tabanlı hover ile tamamlandı. İlk programatik focus örneği pointer modality nedeniyle demo için running gördü; gerçek keyboard-visible focus iki sayfada aynı sonucu verdi. Bu test aracı ayrımları için uygulama değiştirilmedi.

## Kontroller ve kapsam
- `npm run typecheck`: geçti.
- Hedefli ESLint (`app/page.tsx`, `app/layout.tsx`, `components/SiteChrome.tsx`, `components/homepage`, `lib/homepage`):0hata/0uyarı.
- `npm run verify:production`: geçti; mevcut018B artifact679dosya/0prototypeartifact/0prototypedependency.
- Bu görevde yeni production build yapılmadı: uygulama/config/dependency değişmedi. BS3P-018B build sonucu yeniden yapılmış gibi kaydedilmedi.
- Oturum başı/sonu275uygulama dosyasının SHA-256 eşitliği doğrulandı; prototipler, runtime, production bileşenleri, public assetler ve build/izolasyon scriptleri değişmedi. Önceki018A/B çalışma ağacı ve kullanıcı dosyaları korunur.
- Yeni cross-browser matrix/Safari/gerçekcihaz/Lighthouse/GPU-performans/screen-reader/erişilebilirlik denetimi yapılmadı. TR/EN/DE matrisi bu görevin yeni testi değildir; önceki018B kaydı korunur.

## Kanıtlar
- [[../07-Reviews/evidence/BS3P-018C/react-desktop-hero.png|React desktop aktif sahne]] · [[../07-Reviews/evidence/BS3P-018C/demo-desktop-hero.png|Demo desktop aktif sahne]]
- [[../07-Reviews/evidence/BS3P-018C/react-desktop-page.png|React desktop tüm bölümler]] · [[../07-Reviews/evidence/BS3P-018C/demo-desktop-page.png|Demo desktop tüm bölümler]]
- [[../07-Reviews/evidence/BS3P-018C/react-mobile.png|React mobil]] · [[../07-Reviews/evidence/BS3P-018C/demo-mobile.png|Demo mobil]]
- `parity-review.json`: renderedfonts/computed/layout/motion/raw başlangıç ölçümleri.
- `settled-review.json`: ready sonrası geometri/keyboard-visible focus/hover/decodedimage ölçümleri.
- `review-summary.json`, `source-check.json`, `unchanged-source-manifest.json`: sonuçlar ve değişmedi kanıtı.

Aktif sahne kanıtları aynı viewport'tadır; otomatik prizma yüzü/kümülatif açı ve birkaç karelik sahne fazı yakalama anında farklı olabilir. Başlık/faz farklılıkları tasarım farkı diye yorumlanmadı. Tam sayfa WebGL yakalaması her zaman canvası göstermediğinden çalışan sahne için ayrı viewport kanıtı kullanılır; capture uğruna render döngüsü değiştirilmedi. Dev Next göstergesi ve klavye odağındaki skip-link bazı görüntülerde görünür.

## Kalan riskler / BS3P-019
SafariCSS3D/WebGLcontextloss, gerçek iOS/Android, performans ve payload, kapsamlı klavye/SR/contrast/reflow, kalıcı motionpause gereksinimi ayrı finalQA kapsamında. Reviel/Metek içdetayları yok; yasal sayfalar, font/ref kullanım izinleri ve gerçek deploy/cache/rollback teyidi açık. Bu inceleme finalrelease onayı değildir.

## Değişen dosyalar
Yalnız bu rapor, BS3P-018C evidence klasörü, TASK_REGISTER, CURRENT_STATUS, NEXT_STEPS, SESSION_LOG, DAILY_LOG_2026-10-15 ve REVIEW_REGISTER. Yeni tasarım kararı veya kod düzeltmesi olmadığı için DECISION_LOG değiştirilmedi. Commit/push/merge/deploy yok. Kullanıcı onayı beklenir.
