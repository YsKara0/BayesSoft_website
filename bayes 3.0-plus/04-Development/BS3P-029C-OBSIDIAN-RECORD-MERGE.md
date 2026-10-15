# BS3P-029C — Mac / Windows Obsidian kayıtlarını birleştirme

**Tarih:** 2026-10-16
**Durum:** COMPLETED — documentation merge only; Windows evidence transferred to 07-Reviews/evidence/BS3P-029B.
**Branch / HEAD:** `fix/bs3p-029-hero-sharpness` / `db535966e27c53fe6095fe2760f520e163fcb033`.

## Kaynaklar ve kapsam

- Mevcut çalışma ağacı: Windows’tan getirilen kayıtlar ve Mac’te korunmuş untracked raporlar.
- Mac stash: `stash@{0}` = `68ddf86945e64f306c5ef49380f394efcb15a6ef`; taban `db535966e27c53fe6095fe2760f520e163fcb033`. Yedi tracked Markdown dosyası içerir; 026/029 raporları bu stash içinde yok, mevcut çalışma ağacında untracked olarak korunmuş.
- Windows dokümantasyon commit’i: `562d770a08ac59795246a533c67852ffe933dd9f`; yedi Markdown dosyası. Mevcut beş ortak tracked dosya, 029B raporu ve16 Ekim günlük kaydı bu commit’teki sürümlerle karşılaştırıldı.
- Kullanıcı mesajındaki son `BS3P-026-PRO…` yolu mevcut `BS3P-026-PRODUCTION-RELEASE-PREFLIGHT.md` olarak yorumlandı. Bu rapor incelendi ve değiştirilmedi.

Git stash apply/pop/drop, checkout, reset, staging veya Git merge yapılmadı. Kaynak blob’lar salt okunur `git show` ile alındı; içerik birleştirmesi yalnız çalışma ağacındaki Markdown dosyalarında yapıldı. Başlangıç kopyaları ayrıca `/private/tmp/bs3p029c-before/` altında tutuldu; bu geçici kopya kalıcı Git yedeği değildir.

## Birleştirme ve çelişki çözümü

| Kayıt | Sonuç |
|---|---|
| TASK_REGISTER | Windows029B + Mac026/029 görevleri birlikte korundu;025’in Mac026’da doğrulanmış CI#2 sonucu geri getirildi;029C eklendi |
| DECISION_LOG | Mac026 D-034, Mac029 D-035 korundu; Windows029B’nin çakışan D-034 kimliği **D-036** olarak eşlendi; eşleme notu ve029C D-037 eklendi |
| REVIEW_REGISTER | Mac026/029 inceleme blokları geri getirildi; Windows029B rapor özeti, eksik kanıt sınırı ve029C incelemesi eklendi |
| CURRENT_STATUS | Gerçek Mac branch/HEAD ve birleşik sonuç üstte; Mac/Windows anlık görüntüleri tarihsel başlıklarla, ortak eski tarihçe bir kez korunur |
| NEXT_STEPS | Üç aktif öncelik: Windows kanıt aktarımı/kullanıcı incelemesi, A’yı koruma, Git ve kullanıcı dosyalarını koruma. İki eski NEXT_STEPS tam içerikle tarihsel/pasif olarak saklandı |
| SESSION_LOG | Ortak geçmiş + Mac026/029 + Windows029B kronolojisi +029C. Windows oturumundaki karar referansı D-036’ya eşlendi, özgün D-034 not edildi |
| DAILY_LOG_2026-10-15 | Mac026/029 blokları ortak geçmişe geri eklendi |
| DAILY_LOG_2026-10-16 | Windows029B kaydı korundu,029C eklendi |
| BS3P-029 raporu | İlk Mac raporu tam içerikle korundu; üstüne yeni DPR1/029B/PMREM ve tarihsel durum açıklaması eklendi |
| BS3P-029B raporu | Windows562d770 ile byte olarak aynı; araştırma sonuçları yeniden yazılmadı |
| BS3P-026 raporu | Başlangıç kopyasıyla byte olarak aynı; preflight döneminin BLOCKED kararı tarihsel olarak korundu, güncel yayın engeli/kapanış kararı uydurulmadı |

Windows raporundaki `c3327e1` araştırma başlangıcının HEAD’idir; Mac’in şu anki HEAD’i değildir. Mac026’da kayıtlı CI#2 başarısı ve Mac029’da kayıtlı db53596/Pages38798593922 yayın bilgisi, Windows’un bu uzak durumu incelememesiyle çelişmez. Bu görevde GitHub veya canlı site yeniden sorgulanmadı. Eski “Ubuntu tekrar koşusu bekleniyor”, “Windows DPR bekleniyor” ve “henüz yayın yapılmadı” ifadeleri kendi tarihsel bağlamlarında bırakıldı; güncel eylem olarak sunulmadı.

## Birleşik teknik sonuç — yeni bir düzeltme değildir

- Kullanıcının Windows ölçümü: ekran1920, innerWidth1487, DPR1, yaklaşık764×478 CSS /764×477 backing. **Bu olayda DPR1,5 üst sınırı neden değildir; artırılmayacak.**
- Mac’in ilk DPR değişiminde stale backing gözlemi ayrı senaryodur; sabitDPR1 Windows şikâyetinin kesin nedeni sayılmaz.
- Hero yazıları HTML overlay’dir; küçük yazı ve kesirli affine projeksiyon güçlü hipotez, kesin tek kök neden değildir. Windows029B A/B/C/D/E’de tutarlı belirgin kazanç doğrulanmadı; mevcut **A korunur**. Mac’teki önceki backface A/B önerisi Windows araştırmasında sonuçlanmış aday olarak okunmalı, yeniden denenmesi gereken doğrulanmış çözüm değildir.
- PMREM0,045 uyarısı ortam ışık/yansıma haritasındaki22→20 örnek sınırıdır; metin texture’ı veya global ekran blur’u değildir. Nedensel bağ olmadan değiştirilmeyecek.
- Windows029B’de fiziksel24inç monitör/ClearType/native pencere görüntüsü/Safari/GPU zaman maliyeti doğrulanmamıştır. Mevcut kabul edilmiş Safari galeri çözümü ve tasarım korunur.

## Kanıt eksikliği

Windows raporu `06-Evidence/BS3P-029B/` altındaki PNG/JSON/scriptlere bağlantı veriyor. Bu klasör mevcut Mac çalışma ağacında **yok**; rapor commit’inin yedi Markdown dosyası bu kanıtları içermiyor. Bağlantılar sahte dosyalarla doldurulmadı, görseller test edilmiş gibi sunulmadı. Kaynak Windows dosyalarının ayrıca aktarılması ve bütünlüğünün kontrolü açık iştir. Mac029’un mevcut `07-Reviews/evidence/BS3P-029/` dosyaları korunmuştur.

## Doğrulama ve sınırlar

- Üç kaynak karşılaştırıldı; ortak geçmiş, Mac ve Windows’a özgü paragraf/bullet içeriklerinin korunması hedefli metin kontrolüyle denetlendi. Yalnız karar kimliği/bağlam başlıkları bilinçli olarak eşlendi.
- Karar kimlikleri tekil;029/029B/026 raporları yerinde. Windows raporu ve026 raporu byte eşitliği kontrol edildi.
- Git HEAD, branch, index ve stash referansı değişmedi; uygulama/CSS/workflow/asset değişikliği yok. Kapsam dışı kullanıcı dosyalarına müdahale edilmedi.
- Yeni browser, Windows/Safari, TypeScript, lint, build, CI veya performans testi yapılmadı; bu görev belge birleştirmesidir. Önceki araştırmaların test sonuçları yeniden yapılmış sayılmaz.
- Değişen dosyalar: yukarıdaki tabloda belirtilen dokuz Markdown kayıt dosyası ve bu029C raporu;026 ve029B raporları değişmedi.

Commit/push/Git merge/deploy yapılmadı. Sonraki uygulama değişikliği, Git kaydı ve yayın için ayrı kullanıcı onayı gerekir.
