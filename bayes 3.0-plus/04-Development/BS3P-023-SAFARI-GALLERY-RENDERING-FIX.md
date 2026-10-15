# BS3P-023 — Safari Selected Projects Gallery Rendering Fix

**Tarih:** 2026-10-15
**Durum:** completed — hedefli WebKit düzeltmesi uygulandı/doğrulandı; kurulu Safari'de son manuel kabul beklenir.
**Branch / HEAD:** `feature/bayessoft-3.0-plus` / `02739d112d65dbb6fc420eadd6611ff701415561`.
**Yetki:** Kullanıcının production homepage galerisindeki Safari boyama sorununu düzeltme talebi; yeniden tasarım, commit/push/merge/deploy yok.

## Sonuç

WebKit için galeriye küçük ve izole bir yüzey boyama adaptörü eklendi. Yeni carousel veya farklı proje tasarımı yok. Aynı9konum×13kavis dilimi, posterler, perspektif/radius ölçüleri, proje sırası, metin/CTA/linkler, ileri/geri/klavye motoru ve1040/700ms geçişler korunur. Chromium eski render yolunu kullanır; önce/sonra803×501galeri PNG'sinde **1.206.909RGBkanalın tamamı aynı, piksel farkı0**.

WebKit27.2/desktop ve390pxmobil kontrolünde posterler görünür, kullanılabilir ve aktif bilgi paneliyle senkron. Bu, WebKit için mevcut gösterime yakın bir compositing fallback'idir; Safari ile Chromium rasterizasyonunun piksel eşitliği iddia edilmez. WebKit'te öndeki poster ve iki komşu belirgin görünür; kenar dilimlerin örtüşmesi Chromium'dan farklı olabilir. HTMLbilgi panelinin tasarımı/yerleşimi değişmedi.

## Kök neden ve yeniden üretim sınırı

Kullanıcı kuruluSafari'de solalanın tamamen boş olduğunu bildirdi. SistemSafariDriver yeniden denendi; HTTP500/sessionnotcreated, “Allow remote automation” kapalı. Ayar değiştirilmedi. Repo bağımlılığı eklemeden geçici `/private/tmp` altına PlaywrightWebKit27.2 indirildi. Aynı productionartifact hemheadless hemgerçekpencere modunda incelendi.

Bu motorda kullanıcının **tamamen boş** görüntüsü birebir oluşmadı: dokuzpanel aynımerkezde üstüste boyandı ve sonMetekposteri diğerlerini örttü. Ancak normal silindir WebKit'te bozuktu, Chromium'da doğruydu. ÜçWebPisteği200/tambyte, lazyresolution640,readytrue; JS/pageerror0. Stage802.28125px/radius465.323125px/perspective2888.2125px;13dilim/panel ve CSSrotationmatrisleri doğru. `getBoundingClientRect` komşu dilimleri farklıx/z izdüşümlerinde hesaplarken gerçek boyama bunları doğru uygulamıyordu.

**Bu uygulamada ayrıştırılan neden:** içiçe `preserve-3d` ring→sıfırboyutlu panel→dilim zincirinin WebKit compositing/boyama etkileşimi; layout doğru, paint yanlış. Sadece0boyutun tek başına sebep olduğu veya belirli bir upstream WebKitbug numarası kesinleştirilmedi. SVGkaynak/HTTP/veri/IOhatası değildi. SVGsymbolboyutu, doğrudanSVG/HTMLimage, overflow/container, explicitpanelboyutu, prefiks/backface ve katman ipuçları DOMdenemelerinde yeterli olmadı. HeadedWebKit de aynıbozuktemeli gösterdi; başsızcapture'a özgü kabul edilmedi.

[WebKit3D transforms açıklaması](https://webkit.org/blog/386/3d-transforms/) ve [Apple nested3D guide](https://developer.apple.com/library/archive/documentation/InternetWeb/Conceptual/SafariVisualEffectsProgGuide/Using2Dand3DTransforms/Using2Dand3DTransforms.html) 3Dcontext/flattening ayrımını destekler; bu kaynaklar burada gözlenen hatanın birebir upstreamkaydı olduğu iddiasıyla kullanılmadı. Sonuç gerçek öncesonra render ve DOMizolasyonuyla belirlenmiştir.

**Sınır:** KuruluSafari sürümündeki tamamenboş durumun düzeldiği bu ortamda doğrudan test edilmedi. GerçekWebKitmotorunda düzeltme doğrulandı; kullanıcı aynıSafari sürümünde homepage'i manuel yeniden kontrol etmeli. NativeSafari kabulü otomatik geçti sayılmıyor.

## Uygulanan uyumluluk yolu

- `webkit-surfaces.ts`: WebKitUA'sında (Chromium aileleri hariç) devreye girer. CSSfeaturequery bu paintbug'ını göremiyor; tarayıcı `preserve-3d` desteği bildiriyor. UAkararı tek dosyada izole; Safari/iOSWebKit için bu yolu seçer,Chromium/Firefoxdesktop için seçmez. Gelecekte UA/engine değişimi ayrıca izlenmeli.
- Aynı kavis açısı `slot*40 + stripAngle − step*40`. Ara panel kutuları `display:contents`, ara 3Dbağlamı flat; her yaprağa tüm `perspective(P) translateZ(−r) rotateY(angle) translateZ(r)` kamera dönüşü doğrudan uygulanır. Görünmeyen arka yüzler ve derinlik sırası açık yönetilir. Örnek dört dilimin orijinal/projeksiyon bounds farkı floatyuvarlamasıyla ençokyaklaşık0.03px; oran/radius/perspektif değişmez.
- Mevcut `ring.animate` Promise/1040–700ms/easing/inputlock/settle/cancel sözleşmesi aynıdır. WebKit'te animasyon zamanlayıcısının `getComputedTiming().progress` değeri aynı açılara aktarılır; ikinci bağımsız saat veya autoplay eklenmedi. Normalringtransform yalnız bu render yolunda CSSiledevredışı; eski animasyon zamanlama/Promise kaynağı olarak kalır.
- Tek RAF yalnız manuelgeçiş sırasında örnekler; commit/resize/reduced değişimi/destroy RAF'ı iptal eder. Idle'da süreklirender/timer yok;250msidle gözleminde stil yazımı0. Lifecycle'da marker/inlineyüzeystil temizliği var. Kapsamlı performansprofil/tümSPAunmountmatrisi yapılmadı; kaynakcleanup gözden geçirildi.
- Globalmotionpause otomatikprizma/marquee/scene tercihini korur; kullanıcıbaşlatmalı galeri eskisi gibi çalışır. Reduced-motion'da galeri anlıksettle/animasyon0. Galeri kendi kendine dönmez.

## Doğrulama

| Kontrol | Sonuç |
|---|---|
| WebKit27.2 desktop1440×1000 |Posterler görünür; FurtherUp→Reviel→Metek,ileri/keyboardgeri/aktifpanel senkron|
| Chromium155 aynıviewport |Eski renderer; öncesonragaleri piksel farkı0|
| WebKit+Chromium390×844 |Posterler görünür,taşma0; mobile700ms,DEmenü/Escape çalışır|
| Normaldesktopgeçiş |1040ms;WebKit180msörneğinde yüzeyaçısı−22.03499° (idle−17.53846°'den ilerlemiş)|
| Klavye/globalpause altında manuelgeçiş |İki motorda geçti; bilgi paneli/CTA hedefigüncelleniyor|
| Reduced-motion |İki motorda ringanimasyonu0 ve doğru sonproje|
| URL/model |Foundation3dil/gerçekURL/null-detail ve saklıAI-Atlı checksgeçti;MetekliveHTTPS/safe rel/null-detail browserda görüldü|
| Kaynak/assetkoruma |285snapshotdosyadan283aynı;yalnızCSS/stage değişti,+1compatmodülü|
| Node22.23.3macOS TypeScript/hedeflint/foundation |PASS|
| Temizproductionbuild/verifier/HTTPisolasyon |PASS;18staticpage/686artifact/0prototypeasset-dependency;dev200/prod10varyant404|

Node22testi macOSARM64/varolankurulumdur; UbuntuCI/temiznpmci değildir. Testharness ilkdenemede controller'ınidle durumundan hemen sonra Reacttextcommit'ini beklemeden eskiadıokudu; sonucu yanlışprojesırası diye kodda değiştirmedik. İkinci koşu idle+beklenenReacttext'i birlikte bekler; tümiki-motor kontrolleri geçti/pageerror0. Bu harnesssınırı `verification-harness-initial.txt` içinde.

Normalmobil swipe altyapısı dosya/hash olarak aynı; bu görev nativeSafari/iOStouchswipe/VoiceOver/fullA11y/performanceQA yapmadı. Mobil test390pxviewport'tur, gerçekiPhone değildir. CanlıcontactPOST/haricisiteleravailability/deploy yok. Kalan021security/rollback/CI riskleri bu task ile kapanmış sayılmadı; yeni bütünreleaseREADY kararı verilmedi.

## Kanıtlar

- [[../07-Reviews/evidence/BS3P-023/webkit-before.png|WebKit önce]] · [[../07-Reviews/evidence/BS3P-023/webkit-desktop-info.png|WebKit desktop sonra]] · [[../07-Reviews/evidence/BS3P-023/webkit-mobile.png|WebKit mobil sonra]].
- [[../07-Reviews/evidence/BS3P-023/chromium-before.png|Chromium önce]] · [[../07-Reviews/evidence/BS3P-023/chromium-after.png|Chromium sonra]]; `chromium-pixel-comparison.json` fark0.
- `diagnosis.json`, `diagnosis-summary.json`, `projection-boxes.json`, `ancestor-styles.json`, `paint-probes.json`, `verification.json`, `source-preservation.json`; node22checks/logTXT, nativeSafariDriverretJSON.
- Başarısız izoleDOMdeneme ekranları repo dışında `/private/tmp/bs3p023-diagnostics` altında tutuldu. Yeni geçici testharness repo uygulamasına eklenmedi. Ekran kaydı/yeni dependency yok.

## Değişen dosyalar

1. `components/homepage/homepage.css` — yalnız data-renderer ile sınırlı6satırWebKitfallbackCSS.
2. `lib/homepage/gallery/stage.ts` — mevcut lifecycle/timing'e8satıradapterbağlantısı.
3. `lib/homepage/gallery/webkit-surfaces.ts` — yeni küçük izoleboyamaadaptörü.
4. Bu rapor/023evidence; TASK_REGISTER, CURRENT_STATUS, NEXT_STEPS, SESSION_LOG, DAILY_LOG_2026-10-15, DECISION_LOG(D-029), REVIEW_REGISTER.

Header/hero/prizma/Three/ref/services/contact/footer,LanguageProvider,TR-EN-DE/projectdata,posterfontassets,kavisgeometrisi/controller/state/swipe,bağımsızprototipler,productionizolasyonu ve arşivler korunur. Oturumbaşında022çalışması zaten02739d1commit'indeydi/indexboştu; bu görev onun geçmişini değiştirmedi. Yeni değişiklikler unstaged bırakıldı. Commit/push/merge/deploy yapılmadı.

Yereldev: http://127.0.0.1:3018/ ; test edilen güncelproductionartifact: http://127.0.0.1:3019/ . Kullanıcı Safari manuel doğrulaması/onayı beklenir.
