# BS3P-025 — Ubuntu CI Git History Fix

**Tarih:** 2026-10-15
**Durum:** IMPLEMENTED / LOCAL CHECKS PASSED — yeni GitHub Ubuntu koşusu bekleniyor.
**Branch / HEAD:** `feature/bayessoft-3.0-plus` / `58099657ec0582c18f29669dbc9918697f25a4cb`.

## Kök neden

Kullanıcının bildirdiği Release Validation hatası: foundation adımındaki `git show 1218e58:data/i18n.ts` için `fatal: invalid object name '1218e58'`.

Workflow'da `actions/checkout@v6` fetch-depth ayarı yoktu. [Resmî action tanımı](https://github.com/actions/checkout/blob/v6/action.yml) varsayılanı1, bütün geçmiş seçeneğini0 olarak tanımlar. Foundation kontrolü, üretimdeki eski TR/EN/DE anahtarlarını korumak için gerçek baselinecommit'teki dosyayı okuyor; bu bağımlılık sığCIcheckout'unda karşılanmıyordu. Önceki024workflow hazırlığında bu geçmiş gereksinimi atlanmıştı.

`1218e589fd5275f45d8b610b5ec87eeac05f6886` yerel nesne veritabanında var ve `git merge-base --is-ancestor 1218e58 HEAD` exit0: mevcutfeatureHEAD'in atası. Referans yanlış değil; script'i değiştirmek veya kontrolü atlamak gerekmiyor.

## İzole yeniden üretim

Çalışma ağacına dokunmadan `/private/tmp` altında featurebranch'in yerel `file://` kaynağından depth1 **bare** kopyası oluşturuldu:
- Shallow=true; aynı `git show` exit128 ve aynı invalidobjectname hatası.
- Yalnız testkopyasında `git fetch --unshallow origin` sonrası aynıkomut exit0,31144byte baseline içeriği.
- Asıl repository/fullhistory/userfiles değiştirilmedi. GitHub'a fetch/push veya canlıdeploy yapılmadı.

Bu deney reportedCIhatasının geçmiş eksikliği mekanizmasını doğrudan tekrarlar; gerçek Ubuntu koşusu yerine sunulmaz. Hamkanıt: [[../07-Reviews/evidence/BS3P-025/history-reproduction.json]].

## Minimal düzeltme

Yalnız `.github/workflows/release-validation.yml` checkout adımına iki satır eklendi:

```yaml
      - name: Checkout
        uses: actions/checkout@v6
        with:
          fetch-depth: 0
```

YAML nesne karşılaştırmasında bunun dışındaki yapı birebir aynı. Ubuntu/Node22/npmci/TS/lint/foundation/build/export/HTTPizolasyon adımları, featurebranchjobguard, pushbranch filtresi ve `permissions: contents: read` korundu. Deploy/upload-pages-artifact/publish/pageswrite/idtokenwrite eklenmedi. `pages.yml`, `scripts/check-foundation.mjs`, geçmişcommitreferansı, tümhomepage/Safari/prototype/production kaynakları ve package/lock değişmedi.

## Kontroller

- Branch/HEAD ve başlangıçGitdurumu doğrulandı; başlangıçta trackedtree/index temiz, mevcut untracked kullanıcıdosyaları vardı ve korundu.
- Baselinecommit varlığı/atalığı: PASS.
- Depth1hata→unshallowbaşarı izole deneyi: PASS.
- YAMLparse, teksemantikdeğişiklik, minimumpermission/diğeradımların eşitliği: PASS.
- Node22.23.3/macOSARM64 `scripts/check-foundation.mjs`: PASS; üçdil/eskiçeviri/projeverisi/asset/eksikdetay/saklıAI-Atlı/negativeisolationfixture denetimleri aktif.
- Workflow `git diff --check`: PASS.
- GerçekGitHubUbuntuCI: **NOT RUN**. Yeni build/TypeScript/browserQA gerekmedi ve çalıştırılmadı; uygulamakodu değişmedi. UbuntuCI'nın sonrakiadımlarının da geçtiği iddia edilmiyor.

Kanıt: [[../07-Reviews/evidence/BS3P-025/checks.json]], [[../07-Reviews/evidence/BS3P-025/foundation.txt]].

## Değişen dosyalar ve sonraki adım

Teknik değişiklik yalnız `release-validation.yml`; ayrıca bu rapor, TASK_REGISTER, CURRENT_STATUS, NEXT_STEPS, SESSION_LOG, DAILY_LOG_2026-10-15, REVIEW_REGISTER, DECISION_LOG(D-033) ve025kanıtları güncellendi. Eski024kayıtları tarihsel korunur;024sonrasında kullanıcı5809965checkpoint'ini oluşturmuş, buoturumHEAD'i değiştirmedi.

**Önerilen commit:** `fix: fetch full Git history for release validation`

Kullanıcı commit/push için açık onay verdikten sonra:
1. Yalnız025workflow/belge değişiklikleri featurebranch'e commit/push edilir; bu görevde yapılmadı.
2. Featurepush yeniSHAüzerinde **Validate BayesSoft release candidate** koşusunu otomatik başlatır.
3. Checkout'un tamgeçmiş aldığını ve foundation adımının geçtiğini; ardından tümCI'nın sonucunu kontrol edin.
4. Eski5809965koşusunda yalnız **Re-run jobs** yapmak eskiworkflowSHA'sını kullanır; yeni fetch-depth düzeltmesini içermez. Yeni commit'e ait koşuyu esas alın.

main/master/staging/deploy/merge/forcepush işlemi yok. YeniCIbaşarısı ve yayınonayı ayrı kapılardır;025düzeltmesi yayın yetkisi değildir.
