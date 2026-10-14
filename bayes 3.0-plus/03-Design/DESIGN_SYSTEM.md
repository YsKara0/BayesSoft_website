# Tasarım sistemi — 3.0+ temel sözleşme

> 3.0'ın çalışan kompozisyonunu iyileştir. Yeniden marka yaratma görevi değil.

## Ana kurallar
- **Instrument Sans** tipografisi; mevcut projedeki font ve lisans dosyasını kontrol et.
- Beyaz / çok açık soğuk mineral yüzeyler, koyu nötr metin, mavi aksan.
- Mekânsal ama abartısız; dekorasyon işlevin önüne geçmez.
- Tipografi büyük, özlü ve hiyerarşik. Gereksiz kutu, kart, glow, blur, neon, yoğun gradient yok.

## Renk yönü — değerler kesinleştirilecek
4.0'da denenmiş renkler (`#FFFFFF`, `#F3F5F7`, `#E9EEF3`, `#17252F`, `#536270`, `#285BD6`, `#DDE7FF`) **aday tokenlar** olarak tutulur. 3.0 CSS tokenlarıyla çelişenleri otomatik değiştirme. Renk değişimi ayrı görsel onay ister.

## Hero bileşenleri
- Sol mimari tipografik yüzey: dört yüzlü prizma, güçlü odak.
- Sağ görsel: videonun opak 16:9 içeriği ile dış zemin arasında ton sınırı; özgün Three.js adayının amacı bu sınırı çözmek ve marka anlamını iyileştirmek.
- Header ve hizmet etiketleri aynı grid'e oturur. Menü, mobil menü ve iletişim aksiyonu çalışır.

## Bilinen görsel sorunlar
1. Sağdaki MP4, ayrı video yüzeyi gibi algılanabiliyor.
2. Sol prizmanın sabit ince üst/alt kesitleri ve kontrol alanı daha iyi rafine edilebilir.
3. Hero iyi olsa da tam homepage henüz nihai değil.
4. 3D sahne çok hareketli olursa zaten dönen sol prizmayla yarışır.

## Responsive yaklaşım
Desktop kompozisyonu mobile küçültüp sıkıştırma. Prizma okunur kalmalı; sağ sahnenin basitleştirilmiş, ucuz renderlı veya statik alternatifi olabilir. Her ekran boyutunda gereksiz yatay kaydırma yasak.

## Tasarım değişikliği protokolü
Öneri → izole prototip → tek desktop/mobile görsel inceleme → kullanıcı onayı → ana hero'ya entegrasyon. Başarılı mevcut davranışı sırf yeniden yazmak için yeniden yazma.
