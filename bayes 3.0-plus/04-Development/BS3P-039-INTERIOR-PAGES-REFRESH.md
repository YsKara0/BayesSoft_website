# BS3P-039 — İç sayfa estetik yenilemesi

**Tarih:** 2026-10-29 · **Durum:** yerel, görsel onay bekliyor · **Branch:** master (commit yok)

## Kapsam
- Ortak: InteriorShell footer ana sayfa footer içeriğiyle aynı; InteriorCTA ana sayfa iletişim bandı kompozisyonu; `.band` tam genişlik beyaz bant; InteriorIntro iki kolonlu grid.
- Projeler: öne çıkanlar beyaz bantta, posterler gölge/hover; katalog numaralı satır listesi; teknik not açılır alanı yalnız detay sayfası olmayan projede.
- Hizmetler: tekrar eden "Hizmetler" etiketi kaldırıldı; kart başına dekoratif minyatür (ServiceVisual.tsx); süreç bağlı çizelge.
- Hakkımızda: harf satırı kaldırıldı, harfler portre üstünde; ilkeler numaralı kartlar; ortak CTA.
- Proje detayı: monogram kaldırıldı; teknoloji çipleri + üst Canlı/Kaynak düğmeleri; hikâye beyaz bantta; sticky outline göstergesi; etki vurgusu; özellik kartları.
- İletişim: form kartı, beyaz alanlar, odak halkası.

## Doğrulama
- `tsc --noEmit`, hedefli ESLint: geçti.
- Chrome headless 1440 tam sayfa görüntüler (önce/sonra: oturum scratchpad).
- Playwright-core + sistem Chrome: 390/768/1440, TR/EN/DE, beş rota; scrollWidth = clientWidth.
- Yapılmadı: production build/export, Safari, gerçek cihaz, tam erişilebilirlik taraması.

## Revizyon 1 — 2026-10-29
- CTA bandı kısaltıldı (dikey boşluk 104→64px, başlık 52px üst sınır).
- Zirve Çilingir canlı linki: https://esenyurtzirvecilingir.com/ (references.ts ve doğrulanmış site listesinde zaten vardı) → data/site.ts liveUrl.
- Yeni data/projectMeta.ts: her proje için TR/EN/DE "ne yaptık" etiketi (Metek etiketi model alındı) ve marka logosu eşlemesi (public/references). Logolu projeler üstte, logosuz projeler "Diğer projeler / Other projects / Weitere Projekte" grubunda.
- Teşkilat ICOM: 7c95847 commit'inin `hidden: true` bayrağı kaldırıldı; ana sayfa referans bandında tekrar görünüyor. Proje verisi olmadığı için Projeler listesine eklenmedi.
- Doğrulama: tsc + hedefli eslint geçti; 1440/390 taşma yok; Teşkilat logosu bantta görsel olarak doğrulandı.
- Düzeltme: tür etiketi Metek gibi açıklama altındaki etiket kutusunun ilk öğesi; başlık altı satır kaldırıldı.
- Düzeltme 2: başlık üstü kategori satırı tüm projelerden kaldırıldı; kategori etiket satırının başına taşındı (Metek hariç: kategori tamamen kaldırıldı, yalnız kendi etiketi). TS/lint, 1440/390 taşma yok.
- Düzeltme 3: her projede yalnız tek tür etiketi (ürünün ne olduğu); kategori ve teknoloji etiketleri Projeler sayfasından kaldırıldı. TS/lint geçti.
- Dil seçimi: TR/EN/DE düğmeleri yerine tek dünya ikonu + açılır menü (components/LanguageMenu.tsx), ana sayfa ve iç sayfa header'larında; mobil menüde satır içi açılır. Escape yalnız dil menüsünü kapatır (native listener; Next'te React olayları document'ta). 1440/390 ana sayfa+iç sayfa: seç/Escape/dışarı tıklama/lang=de doğrulandı, taşma yok. Eski 404 header'ı (components/Header.tsx) zaten açılır menü kullandığı için değişmedi.
- CTA+footer sıkıştırıldı (iç sayfalar ve ana sayfa, homepage.css sonuna BS3P-039 bloğu): footer linkleri tek satır, boşluklar azaltıldı. Ölçüm: masaüstü 1440×900 ve 1470×850'de CTA+footer 401–419px (< yarım ekran); mobil 390×844'te 602–659px (44px dokunma hedefleri korundu). Taşma yok.
- Footer 'Bağlantılar' sütunu kullanıcı isteğiyle kaldırıldı (iç sayfalar + ana sayfa; homepage/Footer.tsx, InteriorShell.tsx). Header menüsü aynı bağlantıları içerir. Mobil CTA+footer 514–571px'e indi; masaüstü 401–419px. TS/lint geçti.
- Footer sosyal linkleri (GitHub/LinkedIn/X) kullanıcı isteğiyle alt alta; ana sayfa + iç sayfalar. Masaüstü CTA+footer ~430px, mobil 602–659px (kullanıcı büyümeyi kabul etti). Taşma yok.
- Teşkilat ICOM projesi eklendi (public repo BatuErsann/TeskilatICOM README/package/kaynak incelendi: React+Vite+Tailwind, Express, MySQL, JWT, bcrypt, TOTP 2FA, Helmet, rate limit, zamanlanmış yedek). site.ts + projectDetails (TR) + projectTranslations EN/DE + projectMeta (koyu logo kutusu). Canlı: teskilat.com.tr, Kaynak: GitHub. Detay sayfası TR/EN/DE 200, sitemap'te. Dil menüsü tipografisi sabitlendi (14px/500, seçenek 14px, kod 12px); iç sayfa nav ağırlığı ana sayfayla eşitlendi (500). TS/lint geçti.

## Revizyon 2 — sayfa kimlikleri (2026-10-29)
- Kullanıcı geri bildirimi: Hizmetler ve Hakkımızda aynı kalıbı tekrarlıyor. Onaylanan yön uygulandı.
- Hizmetler: görselli giriş (metinsiz SystemComposite), 2×2 kartlar yerine dikey sekmeli ServicesExplorer (ok/Home/End tuşları; <700px tüm paneller sırayla), süreç lacivert bantta (yalnız bu sayfada).
- Hakkımızda: ortalanmış giriş, hemen ardından B-A-Y-E-S ekip şeridi (başlık srOnly, giriş metni alt yazı), ilkeler büyük tipografili manifesto listesi.
- Batuhan Ersan: TR unvan "Yapay Zekâ Entegrasyon ve Geliştirme Mühendisi" (EN/DE İngilizce kaldı); biyografi TR/EN/DE görüntü işleme/üretimi, model eğitimi ve chatbot altyapıları odaklı yeniden yazıldı.
- Doğrulama: tsc + hedefli eslint; 3000 portunda 1440/390 tam sayfa, taşma 0; sekme klavye gezinmesi ve modal biyografi kontrol edildi.
- Kullanıcı lacivert bandı reddetti: Hizmetler süreç bölümü açık zemine döndü (bandDark/processDark kaldırıldı); Teşkilat logo kutusu lacivert yerine nötr grafit (#2b2f36). Kural: koyu lacivert zemin bir daha kullanılmaz.
- Metin düzeltmesi: 'Yapay Zeka ve Görü Sistemleri' → 'Yapay Zeka ve Görüntü Sistemleri'; 'bilgisayarlı görü' ifadeleri 'görüntü işleme' (data/site.ts, data/i18n.ts). Sitede tek başına 'görü' kalmadı. TS geçti.
- Hakkımızda manifesto başlıkları küçültüldü (64→40px üst sınır, mobil 26px), satır aralığı 44→32px. Taşma yok.
