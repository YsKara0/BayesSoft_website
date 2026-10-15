# Kayıt sözlüğü ve tutarlılık kuralları

## Birincil kaynaklar
- **Durum:** CURRENT_STATUS (tek anlık görüntü)
- **Sıra:** NEXT_STEPS (en çok 3 aktif)
- **Görev:** TASK_REGISTER (ID ve durum)
- **Karar:** DECISION_LOG (onay gerekçesi, append-only)
- **Tarih:** SESSION_LOG (özlü görev geçmişi), DAILY_LOG (günlük kronoloji)
- **Kanıt:** REVIEW_REGISTER (dosya/yol + kontrol)

## Kullanılacak durumlar
Görev: planned / in-progress / blocked / completed / deferred / cancelled.
Karar: proposed / approved / implemented / superseded.
Test: passed / failed / not-run / not-applicable.

## Çelişki çözümü
Kod > gerçek test/kanıt > onaylı karar > güncel durum özeti > eski rapor. Çelişkiyi saklama; çözülmediyse blocker aç.

## Yazım ölçüsü
CURRENT_STATUS yaklaşık 1 ekran; NEXT_STEPS 3 aktif iş; SESSION_LOG kısa ama tarihsel; günlük log 5–12 satır. İlgisiz her dosyayı her görevde yenileme.
