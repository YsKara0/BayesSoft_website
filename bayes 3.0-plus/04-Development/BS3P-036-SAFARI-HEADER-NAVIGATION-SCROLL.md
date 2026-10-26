> 2026-10-27 — Kullanıcı bu görevi BS3P-037 kapsamında yayın için onayladı. Toplu preflight TS/lint/build ve hedefli kontroller geçti. Yayın öncesi kayıt; kesin SHA/Pages sonucu [[BS3P-037-TEAM-TITLE-PRODUCTION-RELEASE]] yerel sonuç kaydında. Aşağıdaki önceki onay bekleme ifadeleri tarihsel olarak korunur.

# BS3P-036 — Safari Sayfa Geçişlerinde Header Kayması

2026-10-26 · Yerel düzeltme tamamlandı; kullanıcı onayı bekleniyor. Kullanıcı talimatıyla `master`; HEAD/origin/master `adeed1904371f2b38d69cfcb1a46c72ddd3a0d31`. Commit/push/deploy yok.

## Doğrulanan neden

Gerçek macOS Safari 27.0.1 üzerinde Projeler → Hizmetler geçişi yeniden üretildi. Router yeni main'in üst kenarını zaten viewport içinde gördüğü için konumu değiştirmeden devam ediyor; ardından `main#main-content[tabindex="-1"].focus()` çağırıyor. Safari büyük main'i görünür alana hizalamak için ayrıca scroll başlatıyor. Root `<html>` üzerindeki mevcut `scroll-smooth` sebebiyle bu hareket çağrıdan sonra gerçekleşiyor:

- Focus öncesi ve hemen sonrası: scrollY=0, headerY=24, mainY=80.
- Yaklaşık145ms sonra scroll olayı: scrollY=80, headerY=-56, mainY=0.
- Arada uygulamadan scrollTo/scrollIntoView/scrollTop çağrısı yok. Router pushState ve focus çağrısı kayıtta görülüyor. Header position:relative; sticky/fixed/transform arızası değil.

`SiteChrome`, `InteriorShell`, homepage header, layout, global/interior/homepage CSS ve kurulu Next layout-router/disable-smooth-scroll kaynakları incelendi. Uygulamadaki diğer focus çağrıları menü Escape ve modal erişilebilirliğiyle sınırlı; ProjectDetailView scroll'u yalnız slider öğesine ait. BS3P-023C önceki homepage hash/refresh incelemesinde kod değişmemişti; bu görevde yeniden üretilen durum hash olmayan iç sayfa router odağıdır. BS3P-035 main outline düzeltmesi korunur.

## Minimal düzeltme

Tek uygulama dosyası: `app/globals.css`; bu görevin eki 4 satır:

```css
/* Keep the header in view when Safari scrolls the router-focused landmark.
   Scroll margin changes the focus target area, not the page layout or history. */
main#main-content { scroll-margin-top: var(--bs-header-height); }
```

Mevcut token desktop88px/mobil76px; mevcut içerik başlangıcını/header alanını kapsar. İlk olarak yalnız geçici yerel kopyada80px ile A/B doğrulandı; nihai token ile tüm hedefli kontroller yapıldı. Scroll hedefinin üst payı değişir, kutu yerleşimi/header yüksekliği değişmez. Main focus/tabIndex, Next Link URL'leri, router ve history davranışı aynen kalır. JS, scrollRestoration override, zorunlu scrollTo, bağımlılık veya sayfa başına düzeltme eklenmedi.

## Gerçek Safari önce/sonra

| Senaryo | Düzeltme sonrası scrollY / headerY |
|---|---|
| Ana Sayfa → Projeler | 0 / 24 |
| Projeler → Hizmetler | 0 / 24 (önce80 / -56) |
| Hizmetler → Hakkımızda | 0 / 24 |
| Hakkımızda → İletişim | 0 / 24 |
| Zirve proje detayı → Projeler | 0 / 24 |
| Projeler orta konum → FurtherUp detay | 793'ten yeni sayfa0 / 24 |
| Geri / ileri | Projeler793 / detay0; kayıtlı konumlar geri geldi |
| Üstte yenileme | 0 → 0 |
| Türkçe Hizmetler ortada yenileme | 793 → 793 |

Normal geçişlerde main odakta, outline-style=none; focus sonrası80px kayma oluşmadı. Geri/ileri sırasında sayfa ortasında header'ın üstte olmaması normal document scroll davranışıdır; header sticky yapılmadı. `history.scrollRestoration=auto` tüm ölçümlerde korundu. Bunlar SPA history/popstate testleridir; ayrı tam belge bfcache/persisted=true testi yapılmadı.

**Ayrı mevcut yenileme bulgusu:** İngilizce Hizmetler reload'unda tarayıcı önce793px'i geri getirip sonra760px'e düzeltti. Yeni CSS olmadan aynı793→760 tekrarlandı. LanguageProvider SSR'deTR başlayıp savedEN'i effect ile yükler; içerik yeniden akışıyla tarayıcı anchoring/restorasyon ilişkisi olası açıklamadır, bu ikinci olayın kesin nedeni ayrıca izole edilmedi. Bu görevde dil yükleme veya browser anchoring değiştirilmedi; İngilizce reload için piksel eşitliği iddia edilmiyor. FurtherUp reload ölçümü de793→853 olarak ham kanıtta saklıdır; normal navigasyon düzeltmesinin kabul ölçümü olarak kullanılmadı.

## Diğer hedefli kontroller

- Chromium: dört header geçişi, detay→katalog, orta sayfadan detaya geçiş, geri/ileri, refresh650→650, skip-link/Enter ile main focus ve sonraki Tab göstergesi;375/390mobil menü geçişleri0/header20. Tarayıcı hatası0. History ham değerleri JSON'dadır; Chromium geri/ileri için tam piksel eşitliği assertion'ı yoktur.
- Native Safari Option-Tab ile gerçek BUTTON odağı: solid2px mavi gösterge. Main odağı none; BS3P-035 çerçevesi dönmedi. Chromium skip-link/main/sonraki kontrol odak testi geçti.
- TypeScript `tsc --noEmit`, layout/SiteChrome/InteriorShell/homepage Header hedefli ESLint, global CSS PostCSS parse ve diffcheck geçti. İlk Chromium sandbox launch başarısız oldu; yetkili tekrar geçti.
- Task başlangıcı hash'lerine göre layout/SiteChrome/InteriorShell/header/interior+homepageCSS ve mevcut034uygulama/veri dosyaları byte eşit. Hero/Three/marquee/galeri kaynaklarına dokunulmadı. Tam site QA/build/canlı test/iOS Safari yapılmadı.

## Kanıt ve çalışma ağacı

Önizleme: http://localhost:3033

- [[../07-Reviews/evidence/BS3P-036/safari-before-services.txt|Önce olay akışı]] · [[../07-Reviews/evidence/BS3P-036/safari-before-services.png|Önce ekran]]
- [[../07-Reviews/evidence/BS3P-036/after-02-projects-services.txt|Sonra olay akışı]] · [[../07-Reviews/evidence/BS3P-036/after-02-projects-services.png|Sonra ekran]]
- [[../07-Reviews/evidence/BS3P-036/safari-results.json|Safari durumları]] · [[../07-Reviews/evidence/BS3P-036/chromium.json|Chromium]] · [[../07-Reviews/evidence/BS3P-036/source-proof.json|Koruma/denetimler]]
- [[../07-Reviews/evidence/BS3P-036/git-diff-stat.txt|Kümülatif git diff --stat]] · [[../07-Reviews/evidence/BS3P-036/git-status-final.txt|Tam git status -sb]]

Geçici gözlem script'i yalnız `/tmp/bs3p033-preview` kopyasında kullanıldı; scroll/focus yöntemleri argümanları değiştirmeden ölçüldü. Repository layout'u değiştirilmedi. Script kaldırıldı, preview layout'u repository ile eşit, ilk Safari dil tercihiEN geri yüklendi; motion tercihi değiştirilmedi. Son temiz Safari ekranı kaydedildi. BS3P-034/035 ve kişisel/untracked dosyalar korunur; index boş. Rapor ve zorunlu görev/log/karar kayıtları güncellendi.

Teknik dayanak: [Next Link scroll davranışı](https://nextjs.org/docs/app/api-reference/components/link), [HTML focus/preventScroll standardı](https://html.spec.whatwg.org/multipage/interaction.html). Kök neden kararı doküman varsayımına değil yukarıdaki native Safari ölçümüne dayanır.
