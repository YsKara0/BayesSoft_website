# BS3P-023C — Safari Refresh Scroll Restoration

**Tarih:** 2026-10-15  
**Durum: ACCEPTED / COMPLETED** — kullanıcı BS3P-024 talebinde normal `/` restorasyonunu ve `#hero` doğal fragment davranışını onayladı.  
**Branch / HEAD:** `feature/bayessoft-3.0-plus` / `02739d112d65dbb6fc420eadd6611ff701415561`.

## BS3P-024 kullanıcı kabulü

023C kullanıcı tarafından kabul edilmiştir. Aşağıdaki pending ifadeleri önceki teslim anının tarihsel kontrol adımlarıdır; yenileme kabul kapısı artık kapalıdır.

## Kullanıcı kabulü ve kapsam

Kullanıcı gerçek macOS Safari'de BS3P-023B posterlerinin göründüğünü, silindirik animasyonun doğru çalıştığını ve header'ın kaybolmadığını onayladı. **023B accepted/completed** olarak kaydedildi. Bu görev yalnız yenileme kaydırmasını inceler; önceki Safari SVG/3D düzeltmesi aynen korunur.

## Bulgular ve kök neden ayrımı

Normal, hash olmayan `/` adresindeki istemsiz kayma bu oturumda yeniden üretilemedi. Kurulu Safari'de üst konumda yenileme üstte kaldı; aşağıda yenileme önceki konuma döndü. Buna karşılık **`/#hero` yenilemesi** bildirilen küçük kaymayı yeniden üretti: elle en üste getirildikten sonra bile hero başlangıcına kaydırdı.

Native Safari penceresinin oturum başlangıcındaki adresi de `http://127.0.0.1:3019/?review=023b#hero` idi. Header, wordmark ve footer Ana Sayfa bağlantıları mevcut tasarımda `#hero` kullanıyor (`components/homepage/Header.tsx`, `Footer.tsx`). Hero, header'ın altında olduğundan fragment hedefi viewport'un tepesine hizalandığında header yukarıda kalır.

**Doğrulanan mekanizma:** tarayıcının URL fragment hedefini yeniden uygulaması ve normal history scroll restoration davranışı. Yeni bir uygulama scroll komutu, autofocus veya header kaybolması gözlenmedi. Kullanıcının ilk hata anındaki tam URL/scrollY kaydı yoktur; bildirimin kesin olarak aynı URL'den kaynaklandığı varsayılmadı. Normal `/` üzerinde tekrar oluşursa ayrıca bu durumun kaydı gerekir.

## Ölçümler

Kurulu Safari27.0 native CUA üzerinden açıldı. Sayısal teşhis için mevcut production `out/` dosyalarını aynen sunan, yalnız HTML yanıtına geçici gözlem script'i ekleyen **3020 yerel aynası** kullanıldı. Gözlem paneli fixed/akış dışındaydı; scroll/focus yöntemleri yalnız çağrıyı kaydedip aynı argümanlarla asıl yönteme iletiyordu. Uygulama dosyaları/artifact değiştirilmedi. Sonrasında teşhis eklenmemiş3019 `/` de açılıp yenilendi; AX scroll bar0 kaldı. Geçici3020sunucusu kapatıldı.

| Kurulu Safari senaryosu | Sonuç |
|---|---|
| `/` ilk açılış |scrollY0, hash boş, activeElement BODY, restoration auto |
| `/` üstte refresh |scrollY0 → 0; headerY30, heroY82 |
| `/` aşağıda refresh |scrollY622 → 622; tarayıcı önce DOM/pageshow'da0, ardından622 geri yükledi |
| `/#selected-projects` açılış / refresh |scrollY1093; ilgili bölüme gider |
| Geri |`/`, navigation back_forward, scrollY622 |
| İleri |`#selected-projects`, back_forward, scrollY1093 |
| `/#hero` açılış |scrollY82; heroY0, headerY−52 |
| `/#hero` elle0'a getirip refresh |scrollY0 → 82; aynı küçük kayma tekrar oluştu |

Native örneklerde `history.scrollRestoration="auto"`, aktif eleman `BODY`, hero yüksekliği **718px** kaldı. Scroll/focus/scrollIntoView çağrı gözleminde uygulama çağrısı0. Font tamamlanmasıyla aynı zamana denk gelen tarayıcı restorasyonu tek başına font kaynaklı layout shift olarak yorumlanmadı: hero ölçüleri değişmedi. Native Safari'de CLS PerformanceObserver ölçümü yapılmadı.

Ayrıca teşhis eklenmemiş production3019 üzerinde kısa **Playwright WebKit27.2 ve Chromium155** karşılaştırması alındı: ikisinde ilk açılış/üstte refresh0, seçili projeler1093, Ana Sayfa linki ve `#hero` refresh82. Chromium aşağıda refresh650'yi korudu. Chromium küçük layout-shift toplamı0.0000272003, hero/header sıçraması değil; bunu yeni bir performans sonucu veya optimizasyon gerekçesi saymadık. WebKit'te layout-shift girdisi gelmedi; bu gerçekCLS0 ölçümü diye sunulmaz.

**Harness sınırları:** Otomatik WebKit'te anında programatik scroll650→reload örneği0 döndü; native Safari'de kullanıcıya benzer ayrı UI kaydırma/yenileme622'yi korudu. Playwright wordmark tıklamadan önce header'a otomatik kaydırdığı için otomatik back konumu0'dır; native geri622/ileri1093 ölçümüyle ayrıştırıldı. Aynı belge hash navigasyonunda PerformanceNavigationTiming türü yeni navigation kaydı üretmez; hamJSON'daki önceki reload türü, fragment açılışının reload olduğu anlamına gelmez. Bu harness farkları uygulama hatası diye değiştirilmedi.

## Kod kararı ve kontroller

**Uygulama/CSS/dependency değişikliği yok.** Normal `/` kabul kriteri geçtiğinden koşulsuz scrollTo, history.scrollRestoration override, Safari UA koşulu veya sticky/fixed header eklenmedi. Hash hedeflerini değiştirmek mevcut bölüm navigasyonu davranışını değiştirirdi; bu görevde gerekmedi. 023B'nin SVGimage çözümü ve tüm diğer yerel çalışmalar korundu.

Kaynak taraması: homepage açılışında `scrollTo`, `scrollIntoView`, `autofocus` yok. Header'ın tek programatik focus'u açık mobil menüde Escape sonrası summary'ye dönüş; mount/refresh üzerinde çalışmıyor. ProjectDetailView'daki slider.scrollTo yalnız detay sayfası öğesine ait; homepage scroll'u değil. Hero/Three/locale mount kodlarında pencereyi kaydıran çağrı bulunmadı.

Mevcut production export verifier yeniden çalıştı: **686dosya,0prototypeartifact,0prototypedependency**. Uygulama değişmediği için yeni TypeScript/lint/productionbuild döngüsü çalıştırılmadı; BS3P-023B'nin başarılı build'i kullanılmaya devam ediyor. Bu görevde yeni build başarısı iddia edilmiyor. Safari galeri görsel/motion kabulü kullanıcının açık023Cbildirimine dayanır; burada galeri motoru yeniden test edilmedi veya değiştirilmedi.

## Kullanıcı manuel kabul adımları

Teşhis paneli olmayan [normal ana sayfa](http://127.0.0.1:3019/) üzerinden Safari ön plandayken:
1. Adresin sonunda **hash olmadığını** doğrulayın; en üste gidip Cmd+R yapın. Header görünür/konum0 kalmalı.
2. Aynı `/` üzerinde aşağı kaydırıp yenileyin; önceki konum geri yüklenmeli.
3. [Seçili projeler hash bağlantısını](http://127.0.0.1:3019/#selected-projects) açıp yenileyin. Bölüm görünmeli; geri/ileri önceki konumlara dönmeli.
4. Karşılaştırma için [hero hash bağlantısını](http://127.0.0.1:3019/#hero) yenileyin: hero tepeye hizalanır, header yukarıda kalabilir. Bu URL'nin hedef davranışıdır. Tam sayfa başlangıcı testi için adres çubuğundan tekrar hash olmayan `/` açın; Ana Sayfa/wordmark mevcut tasarımda `#hero` ekler.

Hash olmayan `/` üzerinde hâlâ kayma görürseniz tam URL'yi ve yenilemeden önceki yaklaşık konumu bildirin. **023C kabulü kullanıcıdan bekleniyor; yeni yayın READY kararı verilmedi.**

## Değişen belgeler / kanıtlar

Bu rapor, TASK_REGISTER, CURRENT_STATUS, NEXT_STEPS, SESSION_LOG, DAILY_LOG_2026-10-15, REVIEW_REGISTER, DECISION_LOG(D-031); ayrıca023Braporuna kullanıcı kabul notu eklendi. Önceki rapor ve kanıtlar korunur.

`07-Reviews/evidence/BS3P-023C/`: `native-safari-scroll.json` native ölçümleri; `browser-scroll.json` iki otomatik motorun ham sonuçları; `summary.json` yöntem ve sınırlamalar; `preservation.json` kaynak kontrolü. Geçici server/harness repo dışında `/private/tmp` altında kaldı. Secret/.env okunmadı; index boş, commit/push/merge/deploy yok. Önceki021releasekoşulları ayrı takip edilir.
