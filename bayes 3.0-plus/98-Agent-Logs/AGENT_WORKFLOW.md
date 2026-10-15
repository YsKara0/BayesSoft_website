# Codex çalışma protokolü — BayesSoft 3.0+

> Tek yetkili çalışma yönergesi proje kökündeki `AGENTS.md`; bu dosya onun ayrıntılı oturum prosedürüdür. `CLAUDE.md` yalnızca AGENTS.md'ye yönlendirir. Arşivlenmiş eski agent talimatları aktif kurallar değildir. Talimat dosyalarında değişiklik yalnızca kullanıcı talebiyle yapılır.

## 1 — Oturum açılışı (zorunlu)
1. `git branch --show-current`, `git status --short`; branch beklentisi `feature/bayessoft-3.0-plus`.
2. Proje kuralları: kökteki `AGENTS.md`.
3. `bayes 3.0-plus/` içinde `00-Dashboard.md`, `98-Agent-Logs/CURRENT_STATUS.md`, `98-Agent-Logs/NEXT_STEPS.md`, `98-Agent-Logs/AGENT_WORKFLOW.md`, `05-Decisions/DECISION_LOG.md`, `04-Development/TASK_REGISTER.md`.
4. Göreve ilgili gerçek kaynak dosyaları aç. **Belgeden kodun çalıştığı sonucunu çıkarma.**
5. Görev ID ve yapılacak iş sınırını kullanıcıya tek paragrafta belirt.

## 2 — Çalışma ilkeleri
- Tek görevde tek başarı kriteri; önce küçük prototip.
- Belirsizlik varsa açık varsayım kaydı.
- Mevcut çalışan 4-face prism mekanizmasına dokunma (aksi açıkça onaylanmadıkça).
- Figma'yı ve üçüncü taraf görselleri onaysız değiştirme/kopyalama.
- 4.0'ın deneysel kodunu branch'e rastgele merge etme.
- Gerçek müşteri iddiası, proje metriği, test başarısı veya web linki uydurma.
- Her izole prototip production'ın parçası olma riskini not eder.
- Küçük iterasyonlarda hızlı kontroller; final QA için kapsamlı test.

## 3 — Test disiplini
Plan-only: kod yok, test yok.  
UI/motion: bir desktop, bir mobil ve kısa hareket incelemesi.  
Hata teşhisi: gerektiği kadar hedefli test.  
Final QA: ayrıca kullanıcı onayıyla tam matris, lint/build, gerçek cihaz, erişilebilirlik, güvenlik/izolasyon.

## 4 — Oturum kapanışında ZORUNLU teslim
- Değişen dosyalar (yollarıyla), varsa commit hash.
- Yapılan ve yapılmayan doğrulamalar.
- Mevcut sorunlar ve onay gerektiren kararlar.
- Güncelle: `CURRENT_STATUS`, `NEXT_STEPS`, `SESSION_LOG`, günün `DAILY_LOG_YYYY-MM-DD`.
- Görev statüsünü `TASK_REGISTER` içine yaz, yeni karar varsa `DECISION_LOG`'a ekle.
- Mevcut geçmişi silme, eksik testleri yapılmış gösterme.

## 5 — Çakışma kontrolü
İki agent oturumu eşzamanlıysa aynı loga körlemesine yazma. Önce Git diff ve dosya sonunu incele; çakışan değişiklikleri birleştir. Kritik dosyaların eski sürümünü otomatik overwrite etme.

## 6 — Codex açılış prompt'u (kopyala)
> `feature/bayessoft-3.0-plus` üzerinde çalışıyorum. Önce kökteki `AGENTS.md` dosyasını ve onun yönlendirdiği 3.0+ Obsidian açılış dosyalarını oku. Branch ve Git durumunu doğrula; görev ID/kapsamını belirt, bitirirken ilgili agent loglarını güncelle. Production ve korumalı prizma/video için açık kullanıcı onayı gerekir; eski kasaları ve kullanıcı çalışmalarını koru.
