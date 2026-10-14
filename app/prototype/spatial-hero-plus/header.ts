import { localeOptions, translations } from "@/data/i18n";

function languageOptions() {
  return `<div class="language-options" role="group" aria-label="Site dili" aria-describedby="prototype-language-note">${localeOptions.map(locale => locale === "tr"
    ? '<span class="language-current" lang="tr" aria-current="true" aria-label="Türkçe, etkin dil">TR</span>'
    : `<a href="/" data-site-locale="${locale}" lang="${locale}" title="${translations.tr.language.names[locale]} ana sayfayı aç" aria-label="${translations.tr.language.names[locale]} — bu dilde ana sayfayı aç">${locale.toUpperCase()}</a>`).join("")}</div>`;
}

export function renderIntegratedHeader(wordmark: string) {
  const links = '<a href="/projeler" data-site-locale="tr">Projeler</a><a href="/hizmetler" data-site-locale="tr">Hizmetler</a><a href="/iletisim" data-site-locale="tr">İletişim</a>';
  const cta = '<a class="contact-action" href="/iletisim" data-site-locale="tr">Birlikte çalışalım</a>';
  return `<header class="prototype-header integrated-header">
    ${wordmark.replace('href="/"', 'href="/" data-site-locale="tr"')}
    <div class="header-links">
      <nav class="desktop-nav" aria-label="Ana gezinme">${links}</nav>
      <div class="header-actions">${languageOptions()}${cta}</div>
    </div>
    <details class="mobile-nav">
      <summary>Menü</summary>
      <nav aria-label="Mobil gezinme">${links}${languageOptions()}${cta}</nav>
    </details>
    <p id="prototype-language-note" class="sr-only" role="status">Bu prototip Türkçe. EN ve DE, seçilen dilde gerçek BayesSoft ana sayfasını açar.</p>
  </header>`;
}
