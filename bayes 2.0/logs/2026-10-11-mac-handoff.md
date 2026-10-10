# Mac aktarımı hazırlığı

Kullanıcı feature/bayessoft-2.0 için push ve mevcut çalışma için commit onayı verdi. Ana dala merge ve deployment onayı yok.

Mevcut Phase 1 kodu, ortak tasarım tokenları, lacivert revizyonu ve Markdown kasa belgeleri birlikte aktarılacak. .env, node_modules, derleme çıktıları ve cihazın .obsidian ayarları dahil edilmez. Mac kurulum/devam notu eklendi; handoff ve roadmap güncellendi.

GitHub Pages workflow'u yalnızca main/master push'larını ve manuel dispatch'i dinliyor; feature dalı push'u bu workflow'u tetiklemez. Harici hosting ayarları bu yerel incelemeyle doğrulanmış değildir. Deployment komutu çalıştırılmayacak.

Görsel QA tamamlanmadı. Windows'ta son tarayıcı denemesi yeniden başlatma sonrası da kayıtlı izin nedeniyle reddedildi. Mac'te önce desteklenen, izinli tarayıcı bağlantısı test edilmeli. Git transferinin sonucu gerçek remote ref üzerinden doğrulanmalı; bu not başarıyı önceden varsaymaz.

11 Ekim aktarım öncesi kontroller: lint ve typecheck geçti; yerel build 18 statik sayfa üretti. Seçilen Markdown dosyalarında dar kapsamlı token/private-key desen taraması eşleşme vermedi; bu kapsamlı güvenlik taraması değildir. Staged dosya listesinde .env, .obsidian, node_modules ve derleme çıktıları yok. Üretim build'inin değiştirdiği next-env.d.ts route tip yolu mevcut geliştirme yoluna geri alındı; bu üretilen dosya yeni değişiklik olarak commit edilmez.
