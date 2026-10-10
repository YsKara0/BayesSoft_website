# Mac'te BayesSoft 2.0'a Devam

Tarih: 11 Ekim 2026. Dal: feature/bayessoft-2.0.

## İlk kurulum

Yeni bir checkout için terminalde uygun bir çalışma klasöründen:

```sh
git clone --branch feature/bayessoft-2.0 https://github.com/YsKara0/BayesSoft_website.git
cd BayesSoft_website
npm ci
npm run dev -- --hostname 127.0.0.1 --port 3000
```

Repo erişimi gerekiyorsa GitHub'a normal şekilde giriş yap. Node.js 22 kullanılması mevcut CI ortamıyla tutarlıdır. Node/npm kurulu değilse önce bunları kur. Repo zaten varsa yeni klon yerine Git durumunu incele; temiz checkout'ta dalı seçip `git pull --ff-only` kullan. Kaydedilmemiş Mac değişikliklerini silme veya üzerine yazma.

Yerel adres: http://127.0.0.1:3000/. `.env` aktarılmaz; yalnızca gerek duyulan geliştirme yapılandırmasını yerel olarak oluştur. Gizli değerleri Git'e veya sohbete ekleme. İlk görsel test için gerçek iletişim formu gönderimi yapma.

## Obsidian

Obsidian'da “Klasörü kasa olarak aç” ile Mac checkout'u içindeki `bayes 2.0` klasörünü aç. Markdown belgeleri Git'ten gelir; aynı Obsidian hesabı veya ücretli Sync gerekmez. .obsidian ayarları Mac'te yerel oluşturulur.

## Yeni Codex sohbeti için başlangıç

BayesSoft 2.0'a devam ediyoruz. Önce agents.md ile bayes 2.0/07 - AI Handoff.md, 06 - Karar Kaydı.md, 05 - Yol Haritası.md, 03 - Tasarım Sistemi.md ve 08 - Phase 1 Tasarım Önerisi.md dosyalarını oku. Git durumunu ve feature/bayessoft-2.0 dalını doğrula.

Güncel yön lacivert ağırlıklı premium ve seçici beyaz detaylardır; geniş beyaz bölümlere dönme. Phase 1 kod uygulandı, canlı görsel/etkileşim QA henüz tamamlanmadı. Windows'taki tarayıcı engelini dolaylı yöntemle aşma. Mac'te desteklenen ve izinli tarayıcıyla önce yerel erişimi test et; yoksa açıkça raporla. Erişim sağlanırsa kaydırma sahnesini desktop/mobile, menü/dil/galeri ve azaltılmış hareket açısından değerlendir. Gerçek form gönderimi yapma. Animasyon yeniden tasarımı Phase 2; önce storyboard'u sun, onay almadan kod değiştirme. Yeni commit/push/merge/deploy onayı yoktur.

## Sohbet ve kod farklıdır

Git push kaynak kodu ve seçilen belgeleri taşır; sohbet geçmişini taşımaz. Mac'te yeni bir sohbet yukarıdaki Markdown notlarını okuyarak devam edebilir. Bunun eski sohbetle birebir aynı geçmişe sahip olduğunu varsayma. Uygulama bağlantıları ve izinler her cihazda ayrıca doğrulanır.
