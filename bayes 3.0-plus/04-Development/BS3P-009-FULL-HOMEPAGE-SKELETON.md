# BS3P-009 — İlk tam homepage prototipi

**Tarih:** 2026-10-14  
**Durum:** completed — bağımsız iskelet teslimi, kullanıcı incelemesi bekleniyor.  
**Dal / HEAD:** `feature/bayessoft-3.0-plus` / `c5bf841`; commit/push/merge/deploy yok.  
**Yerel demo:** http://127.0.0.1:3000/prototype/bs3p-homepage  
**Yetki:** Kullanıcının “FULL HOMEPAGE SKELETON” talebi. Hero büyük ölçüde görsel olarak onaylandı; bu görev yeniden hero tasarımı veya production entegrasyonu değildir. D-014.

## Bölüm sırası ve görsel yaklaşım

1. Mevcut header + onaylanan R3 Spatial Hero.
2. Referanslar.
3. Seçili projeler — yalnızca geçici slot.
4. Eşit önemde Web geliştirme / Mobil geliştirme / Yapay zekâ / Özel yazılım.
5. Anlıyoruz / Tasarlıyoruz / Geliştiriyoruz.
6. Gerçek iletişim bağlantılarıyla kısa kapanış.
7. Kurumsal navigasyon ve mevcut telif metniyle footer.

Instrument Sans, beyaz/soğuk mineral yüzeyler, lacivert ve kontrollü mavi devam eder. Açık zeminler ve büyük tipografi bölümleri ayırır; hizmetler kutu/kart yerine aynı ritimde dört tipografik alan, yaklaşım üç kısa aşamadır. Ek giriş animasyonu, müşteri metriği, neon/glow veya yeni 3D nesne yok. Mobilde proje alanı ve metin tek kolona, hizmet/approach içerikleri ayrı okunur satırlara geçer.

## Korunan hero ve modüler mimari

Yeni standalone `force-static` HTML route, `/prototype/spatial-hero-plus` GET çıktısını çağırıp `composeHomepage` ile sayfa sınırları/metaveri ve yeni kardeş bölümleri ekler. Hero HTML'i, font/CSS, import map, prizma başlatıcısı, R3 entry ve R1 renderer aynen yeniden kullanılır. Production React layout'u yüklenmez; iframe, hydration, hero kopyası veya büyük refactor yok.

Tek main/tek h1 ve yeni section h2'leri; footer main dışında. `compose.ts` kaynak sınırları değişirse açık hata verir. Bu bilinçli kaynak sözleşmesi bağımlılığıdır; mevcut hero değiştiğinde adaptör gözden geçirilmelidir.

- `content.ts`: mevcut referans/proje/iletişim/i18n kaynakları ve yeni kısa TR bölüm metinleri.
- `types.ts`: readonly hizmet/aşama/proje/link ve görsel sağlayıcı türleri; `any` yok.
- `html.ts`: metin/attribute escape ve ortak gerçek site linki.
- Ayrı bölüm modülleri: References, ProjectsShowcase, Services, Approach, Contact, SiteFooter.
- Üç anlaşılır yerel CSS dosyası; yeni seçiciler `homepage-*` alanında. Hero boyut/material/motion seçicileri değiştirilmez.
- Homepage'e özel browser JS veya yeni dependency yok; yalnızca mevcut hero entry ve CSS microinteraction/marquee.

## Referans logoları ve doğrulama sınırı

Mevcut `data/references.ts`, production `ClientsSection`/`ReferencesTicker`, `public/references/` ve README'nin public website assets kaydı incelendi. Aynı mevcut logo dosyaları URL'leriyle yeniden kullanılır; kopyalama, yeniden üretme, kırpma veya recolor/filter yok. Teşkilat ICOM için kaynaktaki `dark` bilgisiyle koyu zemin kullanılır; logo pikseli değiştirilmez.

Tam Finans, Metek Makina, Reviel, FurtherUp, Arel Üniversitesi, Atlı Lojistik, Kanuni Sultan Süleyman Hastanesi, Teşkilat ICOM, Hypersense, Zirve Çilingir.

Yeni müşteri ilişkisi veya iş ortağı sınıflandırması eklenmedi. Repo mevcut referans listesini ve mevcut sitedeki kullanımını doğrular; ayrı marka izin belgeleri ve müşteri/iş ortağı ayrımı bu kaynaklarda bulunmadı. Bu yüzden nötr “Referanslar” başlığı seçildi. Yayın öncesi ilişki/izin kayıtlarının kullanıcı tarafından teyidi açık konudur; bu yerel görev yeni bir izin belgesi elde etmedi.

Masaüstünde iki aynı 2400px grup, 4800px track, `translateX(-50%)` ve120s linear loop. Grup sınırında aynı görsel dizilim; ikinci grup aria-hidden ve boş alt metinli. Hover/focus pause; görünür klavye focus'u. Mobil/reduced-motion'da tek statik grid, duplicate display:none. Tam120s döngü beklenip kaydedilmedi; eş grup geometrisi/dizi ve kısa play/pause kontrolü yapıldı.

Native lazy-loading'in clipping dışındaki logoları ertelemesi bulundu; eager + düşük fetchpriority ile tüm logolar önceden hazırlanır. Logo dosyaları optimize edilmedi; kaynak PNG boyutları yayın performansı için ayrıca değerlendirilmeli.

## Proje vitrini: yalnızca entegrasyon slotu

`ProjectsShowcaseProps` bir `ShowcaseProject` ve isteğe bağlı `renderVisual: ProjectVisualRenderer` alır. Varsayılan `ProjectPlaceholder` yalnızca mineral yüzey/küçük görsel işaretidir; gerçek screenshot veya dashboard taklidi yok.

Desktopta büyük sol figure ve sağ isim/kısa açıklama/kategori/gerçek detay linki; mobilde tek kolon. `[data-project-visual]` sabit görsel mount alanı, `[data-project-summary]` ayrı metin alanı ve `data-project-slug` proje kimliği sağlar. Gelecekte sadece görsel sağlayıcı veya mount içeriği değiştirilebilir. Animasyon, proje carousel'i, seçim mekanizması veya interaktif görsel uygulanmadı.

Örnek metadata mevcut `projectDetails["furtherup-drive"]` kaydından: FurtherUp Drive / Enterprise Coaching / `/projeler/furtherup-drive`. Açıklama mevcut kapsamın kısa TR özeti; yeni metrik/ürün iddiası yok. Detay route'u temel kontrolde200 döndü.

## İletişim, footer ve dil

`/iletisim` ve `contactHref`/`siteConfig.contactEmail` kullanıldı; form veya API submit eklenmedi. Footer gerçek `/hakkimizda`, `/projeler`, `/hizmetler`, `/iletisim` ve mevcut i18n telif metnini kullanır. Mevcut bir privacy/KVKK/terms route'u bulunmadı; çalışmayan yasal bağlantı veya belge uydurulmadı.

R3 header'ın gerçek locale köprüsü korunur: bu yeni prototip TR'dir; EN/DE `bayessoft-locale` tercihine bağlanıp gerçek `/` ana sayfasını o dilde açar. Yerinde EN/DE homepage çevirisi oluşturulmadı. Açıklaması mevcut erişilebilir header metninde var. Mobil DE geçişinde gerçek root URL, lang=de ve preference=de doğrulandı. Yeni TR site linkleri de aynı anahtarla gerçek TR sayfasını açar.

## Gerçekten yapılan kısa kontroller

- Hedefli `node node_modules/typescript/bin/tsc -p prototypes/bs3p-homepage/tsconfig.check.json` geçti; logo markup değişimi sonrası tekrar geçti. Tam repo typecheck/lint/build yok.
- İlk desktop Chrome1440×900: bölüm sırası, tek main/h1, dört hizmet/üç aşama, slotta img/canvas0, scrollWidth1440. Otomatik ilk90° dönüş ve manuel aynı yönde−360'a dönüş; dört yüz/420px/210px/dört nokta. İlk görünür scene0.000, final8.400/running=false; ana pass11 draw call/1.290 triangle. FPS/enerji veya tam erişilebilirlik sonucu değildir.
- Altı unique yerel link `/`, `/projeler`, `/hizmetler`, `/iletisim`, `/projeler/furtherup-drive`, `/hakkimizda`: HTTP200. Mailto kaynağı doğrulandı; e-posta veya form gönderilmedi.
- Referans yükleme hatası sonrası yalnızca ilgili desktop kontrolüne devam edildi; doğal hero ve altı route yeniden test edilmedi.10 logo naturalWidth>0,120s animation/eş gruplar, hover/focus pause ve görünür focus doğrulandı. Alt piksel BCR farkı için script toleransı0.01px yapıldı; ürün kodu kusuru değildi.
- Tek mobil375×812/touch/reduced-motion: scrollWidth375, canvas/Three isteği0, statik scene ve referanslar, duplicate gizli,10 logo yüklenmiş, proje tek kolonda/dört hizmet. Gerçek DE dil yönlendirmesi aynı pass'te.
- Tam sayfa desktop capture sırasında geçici viewport değişimi mevcut renderer'ın hazırlığını yeniden tetikledi; sadece teslim görüntüsü için hedefli capture denemeleri yapıldı. Son yöntemde viewport sayfa yüklenmeden önce1440×3537 olarak sabitlendi, hazır final native CDP ile yakalandı. Capture öncesi/sonrası8.400/final/running=false/frame33→33. Kaynak/runtime handler veya logo pikseli değiştirilmedi, kolaj yapılmadı. Mobil PNG375×4427 tam sayfa.
- Bir final desktop/mobile PNG seti ve JSON; video/uzun kayıt veya kapsamlı responsive matrisi yok. Kısmi kontrol ve yalnızca capture tekrarları JSON'da açıklanır.
- 468 görev öncesi korumalı dosyanın SHA-256 hash'i aynı: üç kaynak prototip, tüm hero/runtime/CSS/MP4, production/data/i18n/logo, eski kasalar, package/config/yönergeler ve önceki not/kanıtlar korunur.

Kanıtlar:
- [Desktop tam sayfa](../07-Reviews/evidence/BS3P-009-desktop.png)
- [Mobil tam sayfa](../07-Reviews/evidence/BS3P-009-mobile.png)
- [Hedefli kontrol ve capture JSON](../07-Reviews/evidence/BS3P-009-check.json)

## Değişen dosyalar

Yeni uygulama dosyaları:
- `app/prototype/bs3p-homepage/route.ts`
- `app/prototype/bs3p-homepage/compose.ts`
- `app/prototype/bs3p-homepage/content.ts`
- `app/prototype/bs3p-homepage/types.ts`
- `app/prototype/bs3p-homepage/html.ts`
- `app/prototype/bs3p-homepage/sections/References.ts`
- `app/prototype/bs3p-homepage/sections/ProjectPlaceholder.ts`
- `app/prototype/bs3p-homepage/sections/ProjectsShowcase.ts`
- `app/prototype/bs3p-homepage/sections/Services.ts`
- `app/prototype/bs3p-homepage/sections/Approach.ts`
- `app/prototype/bs3p-homepage/sections/Contact.ts`
- `app/prototype/bs3p-homepage/sections/SiteFooter.ts`
- `public/prototype-assets/bs3p-homepage/homepage.css`
- `public/prototype-assets/bs3p-homepage/references.css`
- `public/prototype-assets/bs3p-homepage/projects.css`
- `prototypes/bs3p-homepage/tsconfig.check.json`

Kasa: bu teslim notu, TASK_REGISTER, CURRENT_STATUS, NEXT_STEPS, SESSION_LOG, DAILY_LOG_2026-10-14, DECISION_LOG ve REVIEW_REGISTER; üç BS3P-009 evidence dosyası. Mevcut tarihsel notlar/log bölümleri silinmedi.

## Açık konular ve sonraki adımlar

- Kullanıcı bölüm ritmi, metinler ve placeholder yerleşimini değerlendirecek. Animasyonlu proje vitrini ayrı talep/uygulama olarak ertelendi; bu turda başlatılmadı.
- İn-place EN/DE çeviriler, eksik yasal içerik/route ve referans ilişki/izin kayıtları teyidi ayrı içerik/karar işidir; sahte link/çeviri yok.
- Safari/iOS/gerçek cihaz, geniş responsive, screen reader, uzun loop, GPU/context-loss, tam erişilebilirlik ve final QA yapılmadı. Capture aracının tam sayfa viewport davranışı ayrı yayın kusuru olarak teşhis edilmedi; son gerçek teslim görüntüsü hazır finali gösterir.
- Prototip/asset release izolasyonu (R-006/D-006) hâlâ açık; bu rota da static export'a dahil olabilir. Production veya release ayarı değiştirilmedi; yayın onayı verilmiş sayılmaz.
- Commit/push/merge/deploy/dependency kurulumu yok. Sonraki çalışmayı kullanıcı onayı olmadan başlatma.
