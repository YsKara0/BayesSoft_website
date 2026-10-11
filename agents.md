# BayesSoft — Agent Rehberi

Güncel görsel yön: lacivert ağırlıklı premium; beyaz sadece seçici kart/form/ikon detayları ve kısa referans bandında. Önceki geniş açık bölüm ritmini veya açık header'ı geri getirme. Revizyon sonrası tarayıcı QA henüz yapılmadı.

Ana plan kaynağı kullanıcının ZIP'idir; yerel karşılıklar mevcut bayes 2.0/ kasasındadır. Önce 07 - AI Handoff, 06 - Karar Kaydı, 05 - Yol Haritası, 03 - Tasarım Sistemi ve 08 - Phase 1 Tasarım Önerisi notlarını oku.


## 10 Ekim 2026 — Güncel kullanıcı kararı

Mevcut bayes 2.0/ Obsidian kasası korunur. Kullanıcının son talebi “Phase 1’i tamamen yap” ile header/hero sınırı kaldırılmıştır: mevcut tüm sayfalara Balanced Premium renk, tipografi, yüzey, kart, buton, form ve footer sistemi uygulanabilir. İçerikler, URL/SEO ve işlevler korunur. Normal animasyon akışı yeniden tasarlanmaz; erişilebilirlik için azaltılmış hareket tercihi desteklenir. Web/Mobil/AI sahnesinin kaynakları değişmez ve Phase 2’de ele alınır. Commit/push/deploy açık onay gerektirir.

- Feature dalı korunur: feature/bayessoft-2.0.
- Secret/.env dosyalarını okuma/değiştirme; kullanıcı çalışmalarını koru.
- SaaS/Ürünler sayfası ekleme. TR/EN/DE ve erişilebilirlik korunur.
- Handoff, roadmap ve tarihli loga gerçek değişiklik/test sonuçlarını yaz.

## Tarihsel marka kılavuzu

Aşağıdaki önceden mevcut kılavuz referans olarak korunur; Phase 1 için Balanced Premium geçerlidir. Paletleri karıştırma.

## 🎨 Renk Paleti

Markanın teknolojik, güvenilir ve yenilikçi duruşunu yansıtmak amacıyla oluşturulmuş ana ve vurgu renkler:

*   **Dijital Turkuaz (Ana Renk)**
    *   **HEX:** `#00C4B6`
    *   **RGB:** `0, 196, 182`
    *   **Kullanım:** Markanın ana rengidir. Logoda, önemli ikonlarda, linklerde ve ana UI bileşenlerinde kullanılır.

*   **Derin Gece Mavisi (Zemin ve Kurumsallık)**
    *   **HEX:** `#0B192C`
    *   **RGB:** `11, 25, 44`
    *   **Kullanım:** Koyu mod (dark mode) tasarımlarında, altbilgi (footer) alanlarında, kalın başlıklarda ve turkuazı öne çıkarmak için arka plan olarak kullanılır.

*   **Canlı Mercan (Vurgu / Aksiyon)**
    *   **HEX:** `#FF6B6B`
    *   **RGB:** `255, 107, 107`
    *   **Kullanım:** Sistemin enerjisini ve "Full-Stack" / "İnovasyon" çekirdeğini temsil eder. Sadece dikkat çekmesi gereken yerlerde; butonlarda (CTA), bildirimlerde ve logodaki ufak detaylarda (işlemci merkezi) sınırlı oranda kullanılır.

*   **Saf Beyaz (Negatif Alan)**
    *   **HEX:** `#FFFFFF`
    *   **RGB:** `255, 255, 255`
    *   **Kullanım:** Temiz bir görünüm ve okunabilirlik için ana arka plan rengidir. Tasarımın nefes almasını sağlar.

---

## 🔤 Tipografi (Font Ailesi)

Bayessoft'un modern, okunabilir ve "agile" (çevik) teknoloji firması imajını destekleyen Google Fonts destekli yazı tipleri:

### 1. Başlıklar (Headings - H1, H2)
*   **Font:** `Montserrat`
*   **Ağırlık:** Bold (700) veya ExtraBold (800)
*   **Kullanım:** Ana sayfa manşetleri, büyük sloganlar ve logotype (Bayessoft yazısı). Geometrik ve otoriter yapısıyla markanın gücünü yansıtır.

### 2. Alt Başlıklar (Subheadings - H3, H4)
*   **Font:** `Plus Jakarta Sans`
*   **Ağırlık:** Medium (500) veya SemiBold (600)
*   **Kullanım:** Kategori isimleri, kart başlıkları ve arayüzdeki vurgulu kısa metinler. Ekranlarda mükemmel okunan, sıcak ve modern bir yapı sunar.

### 3. Gövde Metni (Body Text - p, span)
*   **Font:** `Inter`
*   **Ağırlık:** Regular (400)
*   **Kullanım:** Web sitesindeki tüm uzun metinler, paragraf yazıları ve arayüz okumaları. Dünyanın en iyi UI fontlarından biridir; temiz, yormayan ve çok okunaklıdır.

### 4. Kod ve Teknik Metinler (Opsiyonel)
*   **Font:** `JetBrains Mono` veya `Fira Code`
*   **Kullanım:** Sitede yer alacak kod blokları, API dokümantasyonları veya teknik terim vurguları için kullanılır. Markanın "Yazılım (Soft)" köklerine atıfta bulunur.
