# BS3P-032 — Sitewide Header & Navigation Audit

Tarih: 2026-10-16. Durum: **yerel düzeltme ve hedefli QA tamamlandı; kullanıcı incelemesi/yayın talimatı bekleniyor.** Commit, push ve deploy yapılmadı.

## Başlangıç ve gerçek kaynaklar

- Kullanıcı talimatıyla `master` üzerinde kalındı. `git fetch origin master` sonrası HEAD/origin `86e593a75abc31cbb8179b867f9dceddc84e7203`, ayrışma0/0; tracked çalışma ağacı ve index başlangıçta temizdi. Önceki kişisel/Obsidian/MOV/ara kanıt/harness untracked dosyalar korundu. Rehberdeki eski feature branch beklentisi bu görevde kullanıcı talimatının önüne geçirilmedi.
- Header/footer/SiteChrome, InteriorShell, eski fallback Header/Footer, data/homepage + i18n + config ve static-export rotaları incelendi. SiteChrome homepage için homepage bileşenlerini; dört iç sayfa + sekiz detay + mevcut .html alias'ları için InteriorShell'i kullanıyor. Eski Header/Footer fallback bileşenlerindeki hedefler gerçek rotalar; bunlar 13 canonical production sayfasının header'ı değil ve değiştirilmedi.
- Canlı beş hedef sayfa `/`, `/hakkimizda`, `/hizmetler`, `/projeler`, `/iletisim` HTTP200. Canlı homepage/About/FurtherUp header+footer:3dil×2genişlik=18durum incelendi. Canlıda homepage menü/footer anchor farkı ve iç menü etiket farkları doğrulandı. Kanıt:`live-before.json`.

## Doğrulanan hatalar ve düzeltmeler

| Öğe | Önce | Yerelde yeni hedef |
|---|---|---|
| Homepage header/mobile/footer Ana Sayfa | `#hero` | `/` |
| Homepage header/mobile/footer Projeler | `#selected-projects` | `/projeler` |
| Homepage header/mobile/footer Hizmetler | `#services` | `/hizmetler` |
| Homepage header/mobile/footer İletişim | `#contact` | `/iletisim` |
| Homepage header/footer logosu | `#hero` | `/` |
| Homepage Hakkımızda | Header'da `/hakkimizda`; footer listesinde yok | Her iki listede birer `/hakkimizda` |
| İç sayfa rotaları | Zaten doğru | Aynı hedefler korunur; ortak kaynaktan gelir |

- Yeni `data/navigation.ts` yalnız beş mevcut sayfanın key/URL eşlemesini ve aktif konum hesabını tutar. Yeni header veya bağımlılık eklenmedi. Desktop/mobil/footer aynı listeyi kullanır. Next.js Link, mevcut class'ları ve HTML anchor görünümünü korur.
- İç sayfalardaki TR`Çalışmalar/Yetkinlikler`, EN`Work/Capabilities`, DE`Start/Kompetenzen` farklılıkları giderildi. Var olan onaylı homepage çevirileri nav etiket kaynağı olarak kullanılır: TR`Ana Sayfa/Projeler/Hizmetler/Hakkımızda/İletişim`; EN`Home/Projects/Services/About Us/Contact`; DE`Startseite/Projekte/Leistungen/Über uns/Kontakt`. Hiçbir çeviri verisi/metin dosyası değiştirilmedi.
- Homepage'de eksik olan aktif sayfa semantiği eklendi. Canonical ve `.html` alias üzerinde tam eşleşme `aria-current="page"`; proje detayında üst Projeler bağlantısı `aria-current="location"`. Yeni görsel stil eklenmedi. İç sayfanın mevcut aktif renk stili korunur.
- Aynı nav listesinde yinelenen öğe, kırık hedef veya yanlış sayfa anchor'ı kalmadı. Header'daki ayrıca bulunan `Birlikte çalışalım` CTA'sı bir İletişim menü kopyası değildir; mevcut `mailto:info@bayessoft.com.tr` sözleşmesi korunur. Footer sosyal/kurumsal Website/e-posta bağlantıları aynı.

## Bilinçli korunan anchor ve etkileşimler

- `#main-content` erişilebilir içerik atlama bağlantısı korundu; hedef main id'si vardır.
- Homepage bölüm hedefleri `#hero`, `#selected-projects`, `#services`, `#contact` silinmedi veya yeniden adlandırılmadı. Bunlar artık üst düzey menünün hedefi değil; bölüm içi kaydırma/etkileşim sınırları korunur.
- Production homepage bileşenlerinde ayrıca değiştirilmesi gereken bir bölüm CTA anchor'ı bulunmadı. `Tüm projeler` ve gerçek proje detayları/canlı site CTA'ları zaten doğruydu; e-posta CTA'ları aynı kaldı. Detay sayfasının kendi problem/mimari/etki/ekran bölüm anchor'ları ve galeri scroll davranışı değiştirilmedi.
- Hero, mobile marquee, galeri, modallar, içerikler, SEO/URL, CSS, asset ve bağımlılık kaynakları aynı. SiteChrome render ayrımı aynı.

## Hedefli test sonuçları

- **Yerel production export, Chromium1440 ve390:** homepage + dört ana iç sayfa + FurtherUp detayı × TR/EN/DE = **36 durum**. Header/footer aynı5URL ve aynı çeviri; her nav listesi5benzersiz öğe; doğru aktif semantik; yatay taşma yok.
- **130 gerçek tıklama:** iki chrome ailesi × desktop/mobile ×3dil ×header/footer ×5hedef=120; ayrıca detay header'ından5sayfaya ×2genişlik=10. URL/hedef H1 ve dil doğrulandı; hedeflerde hash kalmadı. Mobilde dokunma kullanıldı; seçim sonrası menü kapandı.
- 8logo tıklaması `/` hedefine ulaştı. Her iki genişlikte Almanca seçim → sayfa geçişi → reload → geri/ileri; dil ve URL korundu. About/FurtherUp `.html` alias'ında aktif öğe doğru. Homepage/iç menüde Escape, odağın summary'ye dönüşü, dış tıklama ve Enter ile açma/kapama geçti. JavaScript hatası0.
- Node22.23.3: `npm run typecheck`, değişen4uygulama kaynağında hedefli ESLint, `node scripts/check-foundation.mjs`, `npm run build` başarılı. Export685dosya/0prototype artifact/0prototype dependency. İlk lint/build, yeni `/` logo bağlantısında Next Link talep etti; Link'e geçildikten sonra tekrar geçti. Kural kapatılmadı.
- 160mevcut app/components/data/lib kaynağından yalnız3nav bileşeni değişti;157kaynak byte olarak aynı. Yeni tek kaynak `data/navigation.ts`. Gerçek cihaz/Safari/fullsite işlev QA tekrarlanmadı; bu görev navigasyona odaklıdır. Canlıya düzeltme yayınlanmadı; mevcut canlı linkler hâlâ eski sürümdedir.

## Dosyalar ve kanıtlar

Uygulama: `components/homepage/Header.tsx`, `components/homepage/Footer.tsx`, `components/interior/InteriorShell.tsx`, yeni `data/navigation.ts`.

Kanıtlar: `../07-Reviews/evidence/BS3P-032/` içinde `live-before.json`, `navigation-qa.json`, `protection.json`, `source-baseline.json`, `before-home/about-1440/390.png`, `after-home/about-1440/390.png`.

Sonraki adım: kullanıcı yerel düzeltmeyi incelemeli; **ayrı açık yayın talimatı gelmeden commit/push/deploy yok.**

Test betiği notu: Son dış tıklama kontrolü başlangıçta homepage sr-only H1'i hedefledi; görünür dış alanla tamamlandı. Ek alias sunucusu percent-encoded `[slug]` chunk yolunu çözmediği için sahte404/chunk hatası üretti; decodeURIComponent eklenince aynı test geçti. Uygulamada bu teşhis için değişiklik yapılmadı. Canlı `.html` FurtherUp ve canonical rota ayrıca1440/390 üzerinde200/doğruH1/DE/0hata ile teyit edildi (`live-alias-probe.json`).

## Son Git özeti

`git diff --stat`:9tracked dosya,+51/−18. Yeni `data/navigation.ts`,bu rapor ve032kanıtları untracked olduğu için bu sayıya dahil değildir. `git status -sb`:master...origin/master,0/0;9modified tracked dosya;032raporu/yeni nav verisi/kanıtlar untracked;önceki untracked girdiler korunur. Index boş,HEAD86e593a aynı. Tam çıktılar032evidence `git-status.txt` ve `git-diff-stat.txt`. Commit/push/deploy yok.


## 2026-10-19 — BS3P-032 hızlı yayın onayı
Kullanıcı navigasyon düzeltmelerini ve master üzerinden commit/push/Pages yayınını onayladı. Önceki başarılı QA/TS/lint/build sonuçları kullanılır; bu oturumda test, tarayıcı veya canlı ziyaret yok. Bu not commit öncesidir; kesin SHA ve workflow sonucu son teslimde bildirilir. Kullanıcı canlı görsel/işlev doğrulamasını kendisi yapacak; ikinci dokümantasyon commit’i yok.
