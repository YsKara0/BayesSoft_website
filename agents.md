# BayesSoft — Agent Rehberi

Tek yetkili çalışma yönergesi bu dosyadır. Aktif geliştirme odağı **BayesSoft 3.0+**, branch `feature/bayessoft-3.0-plus`, ana Obsidian kasası `bayes 3.0-plus/`.

- Her oturum başında branch ve Git durumunu doğrula; kasadaki `00-Dashboard.md`, `98-Agent-Logs/CURRENT_STATUS.md`, `98-Agent-Logs/NEXT_STEPS.md` ve `98-Agent-Logs/AGENT_WORKFLOW.md` dosyalarını oku.
- Ayrıntılı oturum prosedürü `AGENT_WORKFLOW.md` içindedir; görevleri `04-Development/TASK_REGISTER.md` üzerinden takip et, ilgili `05-Decisions/DECISION_LOG.md` kararlarını oku.
- Belgedeki bilgileri gerçek kaynaklarla doğrula; çelişkileri raporla, önemli kararları onaysız değiştirme.
- Her görev sonunda CURRENT_STATUS, NEXT_STEPS, SESSION_LOG, günlük log ve görev durumunu güncelle; yeni karar varsa DECISION_LOG'a ekle. Yalnızca gerçekten yapılan değişiklik ve doğrulamaları kaydet.
- Mevcut dört yüzlü, X ekseninde 90° adımlarla dönen prizmayı ve sağ MP4 videoyu açık kullanıcı onayı olmadan değiştirme veya silme.
- Production koduna açık kullanıcı onayı olmadan dokunma; prototip çalışması production değişikliğine izin vermez.
- `bayes 2.0/`, `bayes 3.0/` ve `bayes 4.0/` kasalarını ve kayıtlı branch'lerini koru; 4.0 deneylerini otomatik merge etme.
- Secret/.env dosyalarını okuma veya değiştirme; kullanıcı çalışmalarını ve görev dışı değişiklikleri koru.
- İçerik, URL/SEO, mevcut işlevler, TR/EN/DE ve erişilebilirliği koru; SaaS/Ürünler sayfası ekleme.
- Figma ve üçüncü taraf görsellerini onaysız değiştirme veya kopyalama; müşteri iddiası, metrik ve test sonucu uydurma.
- Küçük görevlerde hedefli kontroller yap; uzun/kapsamlı QA'yı ayrı, kullanıcı onaylı görev olarak ele al.
- Commit, push, merge ve deploy öncesinde açık kullanıcı onayı al.

`CLAUDE.md` yalnızca uyumluluk yönlendirmesidir. Eski 2.0 talimatları `bayes 3.0-plus/99-Archive/Legacy-Agent-Instructions/` altında tarihsel yedektir; aktif rehberlik değildir.
