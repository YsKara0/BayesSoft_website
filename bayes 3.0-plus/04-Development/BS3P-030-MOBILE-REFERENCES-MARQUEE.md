# BS3P-030 — Mobil referans marquee

**Tarih:** 2026-10-16
**Durum:** USER VISUALLY APPROVED — kullanıcı mobil marquee tasarımını şimdilik görsel olarak onayladı; yayın yapılmadı.
**Branch / başlangıç HEAD:** `master` / `031c055dbee78197e3e0fa475605136b175856de`. Kullanıcı açıkça master üzerinde yerel uygulama istedi; AGENTS’deki genel feature-branch beklentisine göre branch değiştirilmedi. Başlangıçta tracked dosyalar temizdi; mevcut untracked kullanıcı dosyaları korundu.

## Uygulama

Yalnız üç uygulama dosyası:
- `components/homepage/ReferencesMarquee.tsx`: aynı clientReferences/URL/logo katmanları; mobil başa döngü kopyası ve hareket tercihi bağlantısı.
- `components/homepage/useMobileReferenceMarquee.ts`: yeni, yalnız699px ve altında etkin mobil davranış hook’u.
- `components/homepage/homepage.css`: mobil grid yerine tek satır/native overflow; desktop kuralları ve120s CSS animasyonu korunur. Desktop reduced-motion grid davranışı da korunur.

Mobil viewportta iki logo genişliği,20px aralık ve10px grup kenar payı kullanılır. Oranlar object-fit:contain ile korunur. Aynı kaynaktan üç grup; baştaki ek kopya desktopta display:none. Tek orijinal grubun10 bağlantısı erişilebilir; kopyalar aria-hidden ve tabIndex−1. Yeni içerik kaynağı, bağımlılık, ok/kart/çerçeve veya ayrı durdurma butonu yok.

Native yatay touch/trackpad kaydırması kullanılır; preventDefault/pointer capture ile dikey sayfa kaydırması engellenmez. Otomatik akış bir grup için120s; rAF yalnız mobil alan görünürken, belge aktifken ve hareket izinliyken çalışır. Kesirli ilerleme ayrı tutulur: DPR1 scrollLeft yuvarlaması düşük hızdaki akışı durdurmaz. Döngü konumu aynı görünümlü kopyaya aktarılır. Touch boyunca durur; native pointercancel parmak kaldırıldı sanılmaz. Touch bitişi ve son manuel/momentum kaydırmasından1600ms sonra devam eder. Klavye görünür odağında durur, focus çıkışından sonra gecikmeyle sürer. Ortak MotionProvider pause/reduced-motion tercihleri otomatik hareketi durdurur; native manuel gezinti açık kalır. Resize/breakpoint değişimi ölçümleri günceller; unmount listener/observer/rAF/timer cleanup içerir.

## Gerçekleştirilen hedefli kontroller

| Kontrol | Sonuç |
|---|---|
| Chromium320/375/390×844, DPR1 | Tek satır, yaklaşık iki logo, otomatik ilerleme, yatay sayfa taşması yok, pageerror0 |
| Native CDP touch375px | Swipe çalışır; hold/pause ve gecikmeli resume geçti |
| Son pointercancel/uzun hold kontrolü | Scroll1880→1880 (1900ms parmak basılı), bırakınca500ms1880,2300ms1890; erken resume yok |
| Klavye odağı | Odakta scroll sabit;10 asıl tab durağı, kopyalarda0 |
| Reduced-motion | Otomatik konum sabit; manuel scroll çalışır |
| Global hareket kontrolü | Chromium ve WebKit’te pause sabit, resume ilerler |
| Döngü birleşimi | İleri birleşimin önce/sonra PNG raw piksel eşitliği Chromium ve WebKit’te geçti; geri birleşim konum kontrolü Chromium’da geçti |
| Desktop1440×1000 | Aynı12000ms animasyon anında eski HEAD referans kuralları/iki grup ile yeni alanın screenshot raw piksel farkı0;4800px track/2400px grup/120s aynı |
| Mobil galeri390px | Chromium ve WebKit’te FurtherUp Drive→Reviel→Metek Makina;117/117 SVG image href; yatay taşma yok |
| TypeScript | `npm run typecheck` geçti |
| Hedefli lint | `npx eslint components/homepage/ReferencesMarquee.tsx components/homepage/useMobileReferenceMarquee.ts` geçti |
| Son production build | `npm run build` geçti;18 statik sayfa,686 dosya, prototypeArtifacts0/prototypeDependencies0 |

İlk ara TypeScript kontrolü JSX return satırı hatasını yakaladı, düzeltildi ve son kontrol geçti. İlk akış testinde DPR1 kesirli scroll ilerlemesi duruyordu; düzeltildi, son ölçümler ilerliyor. İlk sandbox build Google Fonts DNS erişiminde başarısız oldu; izinli ağ erişimiyle build ve son touch düzeltmesinden sonraki nihai build geçti. WebKit galeri testinde React güncellemesini beklemeyen ilk test okuması başarısızdı; test gerçek proje adı ve idle durumunu bekleyecek biçimde düzeltildi, son kontrol geçti. Bunlar uygulama/galeri tasarım değişikliğine gerekçe yapılmadı.

## Kanıt ve sınırlar

Kanıtlar: `07-Reviews/evidence/BS3P-030/` altında `checks.json`, `regression.json`, `native-touch-hold.json`, mobile375/390 PNG’leri, desktop current/original-rules PNG’leri ve iki motorun seam before/after PNG’leri. Test scriptleri /private/tmp altında; mevcut kullanıcı harness’leri değiştirilmedi. Ekran görüntüleri yerel dev sunucusundandır. Build çıktısı yerelde üretildi, yayınlanmadı.

Tüm120s boyunca video veya uzun QA yapılmadı; akış örneklemesi ve döngü birleşimine kontrollü konum taşıma kullanıldı. Otomatik WebKit testi gerçek Safari/iPhone kabulü değildir. Gerçek cihaz touch hissi, momentum ve kenar logo görünümü kullanıcı incelemesinde değerlendirilmelidir. Yeni kapsamlı Safari/performance/erişilebilirlik matrisi yok. Galeri/Safari adapteri, hero,3D, header/footer, assetler, URL’ler, çeviriler ve diğer animasyon süreleri kaynak düzeyinde değişmedi. Uygulama farkı yalnız yukarıdaki üç dosyadır.

Yerel görsel kontrol: http://localhost:3030/#references — responsive modda375/390 ve isteğe bağlı320px. Yavaş akış, logo ölçeği/aralık ve parmak bırakıldıktan sonra gecikmeli devam kullanıcı onayı bekler.

Staging/commit/push/PR/Git merge/deploy/branch değişimi yapılmadı; Git HEAD aynı. Kişisel.obsidian, eski kasalar, MOV ve önceki kanıtlara dokunulmadı.


## Kullanıcı onayı ve Git checkpoint — 2026-10-16
Kullanıcı mevcut mobil marquee tasarımını şimdilik görsel olarak onayladı. Bu kapanışta uygulama/görsel değişikliği veya yeni test yapılmadı. Önceki test sonuçları yukarıda tarihsel doğrulama olarak korunur; onay gerçek Safari/iPhone test iddiası değildir.

Yalnız030 uygulama dosyaları, ilgili Markdown kayıtları ve030 test kanıtları seçilerek commit edilecek. Yetkilendirilen mesaj: `feat: improve mobile references marquee`. Push/deploy yetkisi yok. Commit sonrası gerçek SHA handoff kayıtlarına yazılır; bu son SHA kayıtları için ayrı commit yapılmaz.

**Sıradaki görev:** BS3P-031 — Sitewide Page Inventory & Skeleton Migration. Bu görev henüz başlatılmadı; kapsamı yeni oturumda kullanıcı talimatıyla ele alınacak.
