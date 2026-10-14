# Uygulama notları — sıfırdan yazmak yerine seçici iyileştirme

## Önce doğrulanacaklar
- `app/prototype/spatial-hero/` ve `public/prototype-assets/spatial-hero/` gerçekten var mı?
- Route çalışıyor mu (`http://127.0.0.1:3000/prototype/spatial-hero` yalnızca yerel dev server açıkken)?
- Video dosyası ve fallback doğru mu?
- 3.0+ `package.json` içinde R3F / Drei / Three.js var mı? 4.0 branch'inde vardı, bu branch'te kendiliğinden gelmez.
- Kontroller, klavye ve reduced-motion davranışı ne durumda?

## Sağ sahne için tasarım kalite kapısı
Statik son poz screenshot'u tek başına güzel olmalı. Animasyon girişinde aşırı karmaşa yaratma. Orijinal video kalır; yeni demo başarısızsa geri dönmek kolay olmalı. Üçüncü taraf tasarım IP'sini taklit etme.

## Dağıtım notu
Feature branch push'ları preview deploy tetikleyebilir. GitHub push, prod merge ile eşdeğer değildir; repo/hosting ayarlarını doğrula. Demo rotalarını sadece menüden gizlemek güvenlik/erişim izolasyonu sağlamaz.
