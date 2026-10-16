# BS3P-031 — Aşama2D yayın kanıtı

## BS3P-031 Aşama 2D — production yayın sonucu (2026-10-16)

- Uygulama commit'i: `c44fa17f723c1a7ccd5adb4d61f97df6914a85f1` — `feat: unify BayesSoft interior pages with 3.0+ design`. **105 dosya**:17 uygulama/doğrulama,7 Markdown kayıt,81 seçilmiş kanıt. `git diff --cached --check` ve exact105 allowlist geçti; kişisel dosya stage edilmedi. Önceden değiştirilmiş handoff geçmişi korundu.
- `git push origin master` başarılı. [GitHub Pages workflow #38932198707](https://github.com/YsKara0/BayesSoft_website/actions/runs/38932198707): **build success + deploy success**; install/build/static-export/upload/deploy adımları geçti. Feature branch'e bağlı ayrı release-validation workflow'u master'da tetiklenmez; eşdeğer TS/lint/foundation/access kontrolleri yerelde Node22 ile çalıştırıldı.
- Canlı `https://bayessoft.com.tr`: **13/13 rota desktop1440**, dört ana iç sayfa + homepage + FurtherUp detayı **390/375 (12 mobil durum)** geçti. 12 `.html` alias200; About alias UI yeni shell ile açılır. Eksik rota, Arelim sahte detay ve prototype404. Canonical/başlık/taşma/görseller/header/footer kontrolü geçti.
- 8 canlı katalog→detay→katalog turu; FurtherUp/Reviel/Metek kapakları yüklendi; yalnız8gerçekdetay. Mobil ana sayfa→Hakkımızda→Projeler menü navigasyonu ve Escape/odak dönüşü geçti. İletişim formu5alan/gönderim düğmesi görüntülendi; **gerçek gönderim yok**. 0 JavaScript hatası,0 başarısız asset.
- İlk smoke betiğinin son assertion'ı bütün arka plan POST'larını form sanarak durdu; form gönderimi yapılmamıştı. Tekrarda hedef URL'ler ayrıldı: `{'bayessoft.com.tr/cdn-cgi/rum': 60}`. Bütün POST'lar intercept ile engellendi; contact endpoint'ine0istek. Bu bir ürün düzeltmesi değildir; yanlış geniş test assertion'ı düzeltildi.
- QA/commit/push sonrasında17uygulama/doğrulama dosyasının hash'i aynı. Uygulama koduna tekrar dokunulmadı. Yayın sonrası yalnız bu sonuca ait Markdown kayıtları ayrı seçici commit'e alınır; CI ve canlı smoke JSON/PNG dosyaları yerel031kanıt dizininde korunur.
- Bilinen sınırlar: SmartHospitalTRplaceholder, EN/DE mevcut özetler, FurtherUp dışı detayların mevcut screenshot eksikleri. Projeler vitrininin ileri görsel polish'i sonraki tura bırakıldı. FurtherUp cold-load boşkapak6/6denemede yeniden üretilemedi; paint bug'ının kök nedeni kesinleşmiş sayılmaz. Safari/gerçekcihazQA ve gerçek iletişim servis teslimatı yapılmadı.

### Canlı rotalar

| Rota | HTTP | Desktop |
|---|---|---|
| `/` | 200 | 1440px/görseller/taşma kontrolü geçti |
| `/hakkimizda` | 200 | 1440px/görseller/taşma kontrolü geçti |
| `/hizmetler` | 200 | 1440px/görseller/taşma kontrolü geçti |
| `/projeler` | 200 | 1440px/görseller/taşma kontrolü geçti |
| `/iletisim` | 200 | 1440px/görseller/taşma kontrolü geçti |
| `/projeler/tam-finans-fintech` | 200 | 1440px/görseller/taşma kontrolü geçti |
| `/projeler/smart-hospital` | 200 | 1440px/görseller/taşma kontrolü geçti |
| `/projeler/petnest-platform` | 200 | 1440px/görseller/taşma kontrolü geçti |
| `/projeler/atli-logistics` | 200 | 1440px/görseller/taşma kontrolü geçti |
| `/projeler/military-aircraft-classification` | 200 | 1440px/görseller/taşma kontrolü geçti |
| `/projeler/ai-chatbot` | 200 | 1440px/görseller/taşma kontrolü geçti |
| `/projeler/furtherup-drive` | 200 | 1440px/görseller/taşma kontrolü geçti |
| `/projeler/maritime-horizon-segmentation` | 200 | 1440px/görseller/taşma kontrolü geçti |

Mobil390/375:homepage,hakkimizda,hizmetler,projeler,iletisim,furtherup-drive; tümü200/taşma yok/görseller yüklü.

Yerel canlı kanıtları: `2d-live-smoke.json` ve `2d-live-*-1440.png` / `2d-live-*-390.png`. Bu dosyalar ikinci commit’e dahil edilmedi; app release öncesi final PNG/JSON kanıtları c44fa17 içinde mevcuttur.
