> 2026-10-27 — Kullanıcı bu görevi BS3P-037 kapsamında yayın için onayladı. Toplu preflight TS/lint/build ve hedefli kontroller geçti. Yayın öncesi kayıt; kesin SHA/Pages sonucu [[BS3P-037-TEAM-TITLE-PRODUCTION-RELEASE]] yerel sonuç kaydında. Aşağıdaki önceki onay bekleme ifadeleri tarihsel olarak korunur.

# BS3P-035 — Sitewide Safari Blue Outline Fix

Tarih: 2026-10-26 · Durum: yerelde tamamlandı, kullanıcı onayı bekleniyor. Branch kullanıcı talimatıyla `master`; HEAD/origin/master `adeed1904371f2b38d69cfcb1a46c72ddd3a0d31`. Commit/push/deploy yapılmadı.

## Kesin neden

Gerçek macOS Safari 27.0.1 üzerinde Projeler ve Hizmetler bağlantılarıyla yeniden üretildi. Next.js router, gezinme sonrası `main#main-content[tabindex="-1"]` elemanına `.focus()` çağırıyor (`node_modules/next/dist/client/components/layout-router.js`). Safari bu programatik odağı `:focus-visible` kabul ediyor. Ortak `.shell :focus-visible` kuralı (`components/interior/interior.module.css`) bu büyük landmark üzerine de 2px mavi outline çiziyor. Ölçülen Hizmetler ana alanı 1342×2706px; outline `solid/2px/rgb(40, 91, 214)`, border `0px`. Dolayısıyla sorun sayfa border'ı değil, ortak focus stilinin ana içerik alanına uygulanması. Chromium aynı pointer gezinmesinde main için focus-visible=false gösterdi. Doğrudan ilk açılış önce de her zaman sorunu üretmiyordu.

`app/layout.tsx`, SiteChrome, InteriorShell, homepage/Header, main/tabIndex, focus/outline kuralları incelendi. Ana sayfada da geniş descendant focus-visible kuralları var; düzeltme ortak landmark üzerinden tüm sayfalara uygulanır.

## En küçük düzeltme

Tek uygulama dosyası: `app/globals.css`.

```css
main#main-content:focus { outline: none; }
```

Yalnız ana içerik landmark'ının sayfa boyundaki çerçevesi bastırılır. Focus, skip-link ve router davranışı, tabIndex ve etkileşimli alt öğelerin focus-visible kuralları korunur. `!important`, global focus iptali, sayfa başına CSS veya JS değişikliği yok. Tasarım/yerleşim/renk/içerik/animasyon değiştirilmedi. Layout, SiteChrome, InteriorShell, header ve sayfa focus stilleri HEAD ile byte eşit doğrulandı. Önceki BS3P-034 uygulama ve yerel kayıtları korunur.

## Hedefli doğrulama

- **Native macOS Safari 27.0.1:** `/`, `/hakkimizda`, `/hizmetler`, `/projeler`, `/iletisim`, `/projeler/zirve-cilingir` — altı doğrudan açılış ve altı bağlantı sonrası durumda büyük çerçeve yok. İç sayfalarda main odakta ve focus-visible=true kalırken outline-style=none. Safari computed width=3px gösterebilir; style=none olduğu için çizilmez.
- **Klavye:** mevcut Safari tercihleri değiştirilmeden input için Tab, bağlantı/buton için Option-Tab kullanıldı. Üçünde de gerçek odak göstergesi `solid 2px` mavi olarak korundu.
- **Chromium:** altı doğrudan rota, beş header geçişi, Tab/skip-link/Enter ile içerik odağı ve sonraki etkileşimli öğe; ayrıca buton/input odak göstergeleri geçti. Tarayıcı hata kaydı boş.
- **Kod:** TypeScript `tsc --noEmit`, layout/SiteChrome/InteriorShell/Header hedefli ESLint, değişen global CSS için PostCSS parse ve `git diff --check` geçti.
- Production build, tam site QA ve gerçek iPhone/iPad Safari testi yapılmadı. Kontroller yerel geliştirme önizlemesindedir; canlı site açılmadı.

DOM ölçümü için yalnız `/tmp/bs3p033-preview` kopyasında geçici görünür diagnostic kullanıldı; repository layout'una eklenmedi. Geçici script kaldırıldı, preview layout'u repository ile byte eşit ve önceki motion tercihi geri yüklendi.

## Kanıt ve önizleme

Önizleme: http://localhost:3033

- [[../07-Reviews/evidence/BS3P-035/safari-before-services.png|Safari önce]] → [[../07-Reviews/evidence/BS3P-035/safari-after-services.png|Safari sonra]]
- [[../07-Reviews/evidence/BS3P-035/safari-before-focus.txt|Kesin DOM ölçümü]]
- [[../07-Reviews/evidence/BS3P-035/safari-results.json|Safari 12 durum ve klavye sonuçları]]
- [[../07-Reviews/evidence/BS3P-035/chromium.json|Chromium sonuçları]] · [[../07-Reviews/evidence/BS3P-035/source-proof.json|Kaynak/denetim kaydı]]

Diğer sayfaların önce/sonra açılış ve gezinme PNG/TXT kayıtları aynı kanıt klasöründedir. Kullanıcı onayı olmadan Git kaydı veya yayın yapılmayacak.
