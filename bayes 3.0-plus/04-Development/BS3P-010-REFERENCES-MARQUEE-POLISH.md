# BS3P-010 — References Marquee Polish

**Tarih:** 2026-10-14  
**Durum:** completed — kullanıcı incelemesi bekleniyor.  
**Branch:** `feature/bayessoft-3.0-plus`; HEAD `c5bf841`.  
**Yetki:** Kullanıcının REFERENCES MARQUEE POLISH talebi; yalnızca mevcut homepage referans bileşeni.  
**Yerel demo:** http://127.0.0.1:3000/prototype/bs3p-homepage#references  
**İlişkili yön:** D-014; yeni marka/hero veya production kararı alınmadı.

**Güncel ek:** Son “Reference Logo Sizing Fix” kaydı iki katmanın intrinsic grid taşmasını giderir; şekle göre çerçeveler ve contain kullanılır. “Hover Color Fix” ile gelen200ms yalnız opacity ve önceki akış korunur. İlk polish/kanıtlar tarihsel olarak korunur.

## İlk polish uygulaması — hover düzeltmesi öncesi
- Mevcut PNG dosyaları aynen kullanıldı. Ortak grayscale/kontrast/opacity filtresi nötr tek renk görünümü verir; opak beyaz alanları korur. Açık renk mürekkepli Teşkilat dosyası mevcut `dark` bilgisiyle ayrıca tonlanır. Normal durumda koyu logo kutusu yok.
- Yalnızca ilgili logo hedefinde hover veya `:focus-visible`, filtreyi `none` yaparak özgün renkleri açar; 180ms ease-out geçiş. Teşkilat'ın açık mürekkebi için yalnızca bu etkileşimde mevcut lacivert zemin görünür. Reduced-motion geçişi anlıktır.
- İki eş logo grubu, mevcut 120s linear ve −50% döngü korunur. Mobil ve reduced-motion aynı statik iki kolon düzenini kullanır; tekrar grup gizlidir.
- Doğrulanmış on URL için gerçek yeni-sekme bağlantıları, erişilebilir adlar ve `noopener noreferrer`. Kopya grup aria-hidden ve tabindex−1 ile Tab sırasına girmez. Doğrulanmamış/eksik URL yolu link üretmez; adlandırılmış, odaklanabilir görüntü olarak kalır.
- `reference-links.ts` yalnızca bu prototipe ait doğrulanmış URL kümesidir. Kaynak veride yeni/değişmiş bir URL, yeniden doğrulanmadan bağlantı olmaz. Üretim referans verisi değiştirilmedi.

## Donmanın nedeni ve düzeltmesi
Önceki boş marquee kapsayıcısının `tabindex="0"` niteliği vardı. Fare tıklaması bu kapsayıcıya odak verdi; fare ayrıldıktan sonra odak kaldığı için `:focus-within` kuralı animasyonu süresiz duraklattı. Önceki logoların kendisi link değildi.

Gereksiz kapsayıcı odağı kaldırıldı; odak gerçek logo hedeflerine taşındı. Duraklama artık fare hover'ı veya hedefin **görünür klavye odağı** (`:focus-visible`) ile belirlenir. Fareyle tıklanmış bağlantıda odak kalması tek başına duraklatmaz. Klavye odağı renk, 2px görünür çerçeve ve duraklama sağlar; odak çıkınca devam eder. Zamanlayıcı, rastgele blur, animasyon reset'i veya gizleme kullanılmadı; ek JavaScript/dependency yok.

## Bağlantı doğrulaması — 2026-10-14
Mevcut `data/references.ts` adresleri marka siteleriyle karşılaştırıldı; sayfa başlığı/marka kimliği doğrulandı. Bu kontrol mevcut referansların müşteri/partner sınıflandırmasını değiştirmez.

| Logo | Kaynak/adres | Kontrol |
|---|---|---|
| Tam Finans | [Marka sitesi](https://www.tamfinans.com.tr/) | Doğrudan sayfa |
| Metek Makina | [Marka sitesi](https://metekmakina.com/) | Doğrudan sayfa |
| Reviel | [Marka sitesi](https://reviel.com.tr/) | Doğrudan sayfa |
| FurtherUp | [Drive](https://drive.further-up.net/) | Sayfa başlığı ve mevcut proje liveUrl aynı |
| Arel Üniversitesi | [Üniversite sitesi](https://www.arel.edu.tr/) | Resmî sayfa; arel.edu.tr yönlendirmesi |
| Atlı Lojistik | [Marka sitesi](https://atlidepohizmetleri.com/) | Doğrudan sayfa, şirket adı |
| Kanuni Sultan Süleyman Hastanesi | [Resmî Bakanlık sitesi](https://kanunieah.saglik.gov.tr/) | Doğrudan fetch timeout; resmî domain arama kaydı kurum adını doğruladı |
| Teşkilat ICOM | [Marka sitesi](https://www.teskilat.com.tr/) | Doğrudan sayfa |
| Hypersense | [Marka sitesi](https://hypersense.dev/) | Doğrudan sayfa |
| Zirve Çilingir | [Marka sitesi](https://esenyurtzirvecilingir.com/) | Doğrudan sayfa |

## Gerçek kontroller
- Hedefli TypeScript: `node node_modules/typescript/bin/tsc -p prototypes/bs3p-homepage/tsconfig.check.json` passed.
- Tek Chrome desktop1440×900 kontrolü: on logo yüklü, eş2400px gruplar,120s animasyon, taşma yok. Hover yalnız bir logoyu renklendirir/duraklatır. Tab odağı yalnız ilgili logoyu renklendirir,2px outline gösterir ve duraklatır; blur sonrası devam eder.
- Native Tam Finans bağlantısı gerçek URL'yi yeni sekmede açtı. Sekme kapatılıp fare ayrıldığında bağlantı hâlâ odakta, focus-visible false ve marquee running;250ms sonraki transform farklı. Donma giderildi.
- 120s beklemek yerine animasyonun0 ve119999ms noktaları hedefli ölçüldü; ilk ve kopya ilk logonun x farkı0.020px. Eş gruplar ve −50% geçiş sınırı hizalı; tam120s loop kaydı yapılmadı.
- Tek375×812 touch/reduced-motion mobil kontrolü: scrollWidth375, on logo,157.5×64px hedefler, statik animasyon, kopya gizli ve geçiş0s.
- İlk düz filtre Arel'in opak beyaz alanını da boyadı. Kaynak görüntü incelenip beyaz ayrıntıları koruyan filtreye geçildi, tonlar eşitlendi; yalnız logo görünümü/hover/mobil kontrolleri tekrarlandı. Bir kısmi kontrol0.00024px grup ölçüm farkında durdu; test toleransı0.5px olarak düzeltildi. Uygulama geometri hatası değildi.
- Browser pageerror0. Hero/diğer bölümler yeniden test edilmedi; uzun kayıt, matris, full build/lint/QA yapılmadı.
- 486 görev öncesi korumalı dosyanın SHA-256 değeri aynı: diğer homepage bileşenleri/CSS, özgün prototipler, hero/prizma/MP4, production/data/i18n/logolar, eski kasalar, package/config/yönergeler ve BS3P-009 not/kanıtları.

## Kanıt
- [[../07-Reviews/evidence/BS3P-010-desktop-references.png]] — yalnız referans bölümü.
- [[../07-Reviews/evidence/BS3P-010-mobile-references.png]] — on logo statik düzeni.
- [[../07-Reviews/evidence/BS3P-010-check.json]] — ilk etkileşim kontrolü ve son filtre görünüm kontrolü ayrı fazlarla kayıtlı.

## Değişen dosyalar
Uygulama:
- `app/prototype/bs3p-homepage/sections/References.ts`
- `app/prototype/bs3p-homepage/reference-links.ts` — yeni.
- `public/prototype-assets/bs3p-homepage/references.css`

Kayıtlar: bu not, `TASK_REGISTER.md`, `CURRENT_STATUS.md`, `NEXT_STEPS.md`, `SESSION_LOG.md`, `DAILY_LOG_2026-10-14.md`, `REVIEW_REGISTER.md` ve yukarıdaki üç yeni kanıt. Tarihsel kayıtlar korunur; DECISION_LOG yönü değişmedi.

## Açık durum / sonraki adım
Bu kapsamda bilinen donma/taşma sorunu kalmadı. Safari/gerçek cihaz, tam loop ve screen reader incelemesi yapılmadı. Mevcut izin/ilişki sınıflandırması ve release izolasyonu bulguları önceki review kayıtlarında açık kalır; yeni müşteri/iş ortaklığı iddiası eklenmedi. Proje vitrini ve diğer sayfa bölümleri bu görevin dışında kaldı.

Kullanıcı görsel onayı beklenir. Yerel server açık; commit/push/merge/deploy yapılmadı. Sonraki iş otomatik başlatılmaz.


## 2026-10-14 — Hover Color Fix
**Durum:** completed — kullanıcının BS3P-010 hata düzeltme talebi uygulanmıştır.

- **Gerçek neden:** Önceki CSS, `grayscale(1) brightness(.55) contrast(16) opacity(.56)` filtresini180ms içinde `none` değerine interpolasyonla değiştiriyordu. Brightness artarken contrast hâlâ yüksek ve grayscale kısmen kapalıydı; RGB kanallarının ara değerleri kırpılarak aşırı parlak/yanlış renk oluşabiliyordu. Aynı durum focus-visible için de geçerliydi.
- **Düzeltme:** Aynı kaynak PNG iki sunum katmanında kullanılır. Ortak grid alanı/width/height/object-fit ölçüleri birebir aynıdır. Nötr katmanın filtresi sürekli sabit ve normal opacity1; özgün renkli katmanın filtresi sürekli none ve normal opacity0. Hover/focus-visible nötr0/renkli1 yapar;200ms ease-out yalnız opacity animasyonu. Teşkilat'ın sabit lacivert zemini de opacity pseudo-element'iyle açılır; background-color veya filter interpolasyonu kalmadı.
- **Erişilebilirlik:** Aynı tek bağlantı/adlandırılmış görüntü hedefi korunur. İki img ve artwork wrapper aria-hidden; alt boş, ayrı Tab öğesi yok. Parent erişilebilir adı/focus çerçevesi değişmez.
- **Korunanlar:**120s marquee/−50% loop/hover ve focus-visible pause, click sonrası pointer focus ile devam, doğrulanmış linkler, mobile56/44px logo ölçüleri, reduced-motion statik düzen ve anlık geçiş. PNG dosyaları, link whitelist ve diğer sayfa/prototipler değişmedi.
- **Gerçek testler:** Yalnız tek Chrome1440×900 oturumunda bir hover, bir Tab focus ve bir native Tam Finans click→sekme kapat→fare çıkışı kontrolü.10 hover örnek karesinde nötr filtre aynı/renkli filtre none; ara opacity değerleri ve final0/1, transition-property opacity/duration0.2s, iki katman bounds aynı. Klavye focus2px, nötr0/renkli1 ve pause; görseller ayrı focus öğesi değil. Click sonrası bağlantı odakta/focus-visible false/running;250ms transform farklı. Üçü geçti; tekrar kontrolü yok.
- **Kanıt:** [[../07-Reviews/evidence/BS3P-010-hover-color-check.json]]. Önceki iki PNG/JSON aynen korundu. Bu fix'te yeni mobil, TypeScript, hero/full QA, ekran görüntüsü veya video kontrolü yapılmadı; kullanıcının üç kontrol sınırı uygulandı.
- **Dosyalar:** `app/prototype/bs3p-homepage/sections/References.ts`, `public/prototype-assets/bs3p-homepage/references.css`; bu nota ek kayıt, TASK_REGISTER/CURRENT_STATUS/NEXT_STEPS/SESSION_LOG/günlük/REVIEW_REGISTER ve yeni JSON. `reference-links.ts` değişmedi.
- **Koruma/sonraki:**490 başlangıç dosyası SHA-256 ile aynı. Yeni bağımlılık/JS runtime/Git/yayın işlemi yok. Kullanıcı görsel incelemesi beklenir; bu üç kontrolde açık hata kalmadı. Yerel server açık; başka işe geçilmez.


## 2026-10-14 — Reference Logo Sizing Fix
**Durum:** completed — kullanıcının aynı BS3P-010 kapsamındaki boyutlandırma düzeltmesi.

### Gerçek neden
İki görsel `grid-area:1/1` ile aynı otomatik grid satırını kullanıyordu. `height:100%` intrinsic satır hesaplamasında64px frame sınırını sağlamadı; source en-boy oranları/min-content satırı büyüttü. Chrome ölçümü: Arel171.1875px, hastane176px, Hypersense205.03125px; frame64px. Görseller static konumdaydı, max-height none idi. `object-fit:contain` büyük img kutusunun içinde çalışıyor, kutunun frame dışına taşmasını engellemiyordu.88px overflow-hidden marquee bu taşmayı dikey kırptı. Önceki hover kontrolü iki katmanın birbirine hizasını ölçtü; frame'e sığmalarını kaçırdı.

### CSS ve yerel şekil verisi
- Artwork artık definite block frame. İki img aynı `position:absolute; inset:0; width/height:100%; max-width/max-height:100%; object-fit:contain; object-position:center` kurallarını paylaşır. Intrinsic görüntü boyutları layout satırını büyütmez; doğal en-boy oranı contain ile korunur.
- Yeni prototip-local `reference-sizing.ts`: Arel/hastane round, Hypersense square; diğerleri horizontal. Production `ClientReference` verisi/türü değişmez.

| Görsel türü | Desktop frame | Mobil/reduced statik frame |
|---|---|---|
| horizontal | Genişlik en fazla176px, yükseklik64px | En fazla176px/mevcut hücre genişliği, yükseklik56px |
| round |56×56px |48×48px |
| square |64×64px |56×56px |

- Teşkilat'ın mevcut48/44px artwork yüksekliği/padding'i korunur.176px slotlar72px yüksekliğinde; mobil slot64px. Desktop band88px değişmez; mobil aynı5×64px sıra/gap/padding ile432px.
- Nötr/renkli katmanlar aynı ölçüdedir. Sabit nötr filtre/filtresiz özgün renk/200ms yalnız opacity, tek erişilebilir hedef, gerçek URL'ler,120s −50% marquee/hover-focus-visible pause ve click sonrası devam korunur. Logo dosyaları veya diğer bölümler değiştirilmedi.

### Gerçek kısa kontroller / kanıt
- Aynı Chrome oturumunda önce yukarıdaki mevcut intrinsic taşma ölçüldü; düzeltmeden sonra tek1440×900 desktop kontrolü/görüntüsü. Her iki katman frame/slot içinde, bounds aynı. Round56×56px; band önce88→sonra88px. Yatay çerçevelerin eski176/64 sınırları korundu.
- Desktop görüntüsünde iki yuvarlak ve kare logoyu birlikte göstermek için yalnız testte timeline48000ms konumuna alındı;120s beklenmedi. Kaynak animasyon değişmedi.
- Kısa Arel hover: bounds birebir aynı, nötr0/renkli1, filter none ve200ms yalnız opacity. Native Arel bağlantısı açılıp sekme kapatıldı; fare çıkınca link odakta/focus-visible false/running.250ms transform−964.333→−969.333; donma yeniden oluşmadı.
- Tek375×812 touch/reduced mobil kontrolü/görüntüsü: scrollWidth375, on logo/iki katman hizalı/frame içinde, round48×48px, animasyon none/duplicate gizli/geçiş0s. Yatay taşma yok.
- [[../07-Reviews/evidence/BS3P-010-sizing-desktop.png]], [[../07-Reviews/evidence/BS3P-010-sizing-mobile.png]], [[../07-Reviews/evidence/BS3P-010-sizing-check.json]]. Önceki kanıtlar değişmedi. Görsellerde yalnız referans bölümü var.
- Test tekrarları/matris, TS/lint/build/full QA, hero kontrolü veya video yapılmadı.491 başlangıç korumalı dosyanın SHA-256 değeri aynı.

### Dosyalar / durum
- `app/prototype/bs3p-homepage/sections/References.ts`
- `app/prototype/bs3p-homepage/reference-sizing.ts` — yeni, yalnız üç şekil kaydı/default horizontal.
- `public/prototype-assets/bs3p-homepage/references.css`
- Bu nota ek kayıt; TASK_REGISTER/CURRENT_STATUS/NEXT_STEPS/SESSION_LOG/günlük/REVIEW_REGISTER ve üç yeni kanıt. Link whitelist, PNG'ler, hero/production/diğer homepage bölümleri/kaynak demolar/eski kasalar/package/config değişmedi.

Bu kısa kontrollerde açık boyut/kırpılma/hover/donma sorunu kalmadı. Kullanıcı görsel incelemesi beklenir. Yeni dependency/JS runtime/commit/push/merge/deploy yok; başka işe geçilmez.
