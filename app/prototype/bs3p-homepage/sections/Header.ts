import { copy, text } from "../copy";
import { contact } from "../content";
import { escapeHtml } from "../html";

export function navigationLinks(): string {
  return ([ ["home", "#hero"], ["projects", "#selected-projects"], ["services", "#services"], ["contact", "#contact"] ] as const)
    .map(([key, href]) => text(key, "a", `href="${href}"`)).join("");
}
function languages(): string {
  return `<div class="language-options" role="group" data-copy-aria="language" aria-label="${copy("language")}">${["tr", "en", "de"].map(locale => `<button type="button" data-locale="${locale}" lang="${locale}" aria-pressed="${locale === "tr"}">${locale.toUpperCase()}</button>`).join("")}</div>`;
}
export function Header(wordmark: string): string {
  const logo = wordmark.replace('href="/"', 'href="#hero"').replace(/ data-site-locale="tr"/g, "");
  const cta = text("cta", "a", `class="contact-action" href="${escapeHtml(contact.href)}"`);
  return `<header class="prototype-header integrated-header homepage-header">${logo}
    <div class="header-links"><nav class="desktop-nav" data-copy-aria="navigation" aria-label="${copy("navigation")}">${navigationLinks()}</nav><div class="header-actions">${languages()}${cta}</div></div>
    <details class="mobile-nav"><summary data-copy="menu">${copy("menu")}</summary><nav data-copy-aria="navigation" aria-label="${copy("navigation")}">${navigationLinks()}${languages()}${cta}</nav></details>
  </header>`;
}
