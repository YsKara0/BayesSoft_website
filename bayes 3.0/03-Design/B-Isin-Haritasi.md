# B — İşin Haritası

Durum: creative direction önerisi; onay bekliyor.

[Desktop hero](https://www.figma.com/design/gLI3OMMpoaiaxm1zfa0Apf?node-id=4-4) · [Mobil hero](https://www.figma.com/design/gLI3OMMpoaiaxm1zfa0Apf?node-id=4-5)

![[evidence/concept-b-desktop.png]]

## Marka karakteri

Sahaya ve günlük operasyona yakın, düzen kuran, anlaşılır bir teknik ortak. Otorite; siyah/neon ekranla değil, işletmenin işini doğru modellemeyle kurulur. “Teknolojiyi biliyoruz” yerine “talebinizin nasıl ilerlediğini anlıyoruz” hissi araştırılır. Bu özellikler hedeflenen kişiliktir; BayesSoft'un kanıtlanmış süreç vaadi değildir.

## Tipografi

IBM Plex Sans Medium/Regular ana önerme, iş akışı ve UI metninde; IBM Plex Serif Regular yalnızca senaryo ve vaka girişinde. Sans merkezli, işaretleme ve açıklama dili güçlü. Desktop ana başlık 56/63.3 px, mobil 38/42.9 px; gövde 20/32 ve 17/27.2 px. Monospace kod etiketi yok; kullanıcıya API adıyla değil iş eylemiyle hitap edilir.

## Renk stratejisi

| Token önerisi | Hex | Rol |
|---|---|---|
| Petrol | #123C46 | Ana zemin ve açık yüzeyde metin |
| Açık mürekkep | #F7F4EC | Başlıklar ve kapsam şeritleri |
| Sis | #CCDBD8 | Koyu yüzeyde ikincil metin |
| İş kâğıdı | #E6D9BD | Talep yolculuğu yüzeyi |
| Sinyal sarısı | #E5B75B | Tek birincil CTA |
| Petrol çizgisi | #45646A | Bölüm sınırı |

Gösterişli glow veya neon değil; çalışma planı kadar okunur düz renkler. Başlık/koyu zemin 10.85:1; ikincil/koyu zemin 8.35:1; petrol/kâğıt 8.53:1; CTA petrol/sarı 6.39:1. Harita içi yardımcı ayırıcı #B4AE9B yalnızca dekoratif çizgi; anlam metinle verilir.

## Sayfa kompozisyonu ve görsel dil

1440 px'te 80 px yan boşluk, üstte solda önerme ve sağda 420 px açıklama. Ana görsel, tek geniş kâğıt yüzeyde dört 286 px hizmet alanıdır. Sıralı bir servis talebi örneği: müşteri web'de açar; saha mobilde günceller; AI metni özetler ve ekip onaylar; özel yazılım mevcut sisteme bağlar. Bu dört kartın satılması değil, bir işin ilişkili parçalarını açıklamadır. Hizmetler eşit genişlikte; AI merkez veya zirve değildir.

Mobilde dört alan tek sütuna geçer; CTA uzun yolculuğun önündedir. Detaylar legibility için küçültülmez. Tam homepage önerisi: hero/senaryo → farklı sektörlerden doğrulanmış iş haritaları → dört hizmetin bağımsız kapsamları → keşif/teslim/işletme süreci → görüşme. Her senaryo farklı alan ilişkisi taşımalı; tüm projeler aynı dört aşamayı izlemez.

## Hero konsepti ve metni

**“İşin akışını anlayalım. Yazılımı ona göre kuralım.”**

“Web, mobil, yapay zekâ ve özel yazılım. İşletmenizin günlük ihtiyacından başlayan butik yazılım geliştirme.”

CTA: “İhtiyacınızı konuşalım” (`/iletisim` önerisi); ikincil “Çalışmalarımızı inceleyin” (`/projeler`). Harita üstünde konsept ve “her proje dört hizmeti birden gerektirmez” açıklaması var. Bu yaklaşım hazır ticari ürün veya zorunlu paket anlatmamalı.

## Animasyon ilkeleri

Normalde bütün akış görünür. Kullanıcı bir hizmet alanını seçince ilgili iş eylemi belirginleşir; içerik değişimi 120–180 ms, tekrar eden otomatik tur yok. Klavyede sıra ve focus açık, seçim renk dışında metinle belirtilir. Reduced-motion'da değişim anlık. Gelecekte çizgi hareketi düşünülürse yalnızca kullanıcı tetikler; mevcut konseptte connector/motion prototipi yok. Sticky scroll hikâyesi yerine doğal içerik akışı.

## Güçlü ve zayıf yanlar

Güç: Dört hizmeti ve somut iş sonucunu en hızlı açıklayan yön. Teknik ve operasyonel güven güçlü; üretim, saha, lojistik gibi işlerde bağlam kurma potansiyeli var. Bu sektör uyumu bir tasarım hipotezidir.

Zayıflık: Daha çok sistem entegratörü/danışman gibi algılanabilir; butik yakınlık ikinci planda. Talep örneği satış sitesini operasyon yazılımı gibi göstermemeli. Dört yan yana alan klişe bir kart grid'ine dönüşebilir; senaryonun ilişki ve kararları bunu taşımalı. Mobil frame 1595 px ile en uzun. CTA'yı öne aldık, yine de tek ekran sade hero isteyen kullanıcı için zayıf.

Sonraki aşamada sınanacak konu: web-only veya özel yazılım-only projelerde aynı sistem gerçekten anlamlı mı? Dört hizmeti zorunlu birlikte satma izlenimi oluşuyor mu? Tam süreç anlatısı ile dört eşit hizmetin farklı kategoriler olduğu açık kalmalı.

Mobil önizleme: ![[evidence/concept-b-mobile.png]]
