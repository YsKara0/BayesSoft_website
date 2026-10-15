import { escapeHtml } from "../html";
import { text, copy } from "../copy";
import { contact, corporateLinks } from "../content";
import { navigationLinks } from "./Header";

export function SiteFooter(wordmark: string): string {
  const logo = wordmark.replace('href="/"', 'href="#hero"').replace(/ data-site-locale="tr"/g, "");
  return `<footer class="homepage-footer" data-copy-aria="footer" aria-label="${copy("footer")}">
    <div class="homepage-footer-brand">${logo}${text("footerBrand", "p")}<a class="homepage-email" href="${escapeHtml(contact.href)}">${escapeHtml(contact.email)}</a></div>
    <nav data-copy-aria="navigation" aria-label="${copy("navigation")}">${text("footerLinks", "h2")}${navigationLinks()}</nav>
    <nav data-copy-aria="footerSocial" aria-label="${copy("footerSocial")}">${text("footerSocial", "h2")}${corporateLinks.map(link => `<a href="${escapeHtml(link.href)}" target="_blank" rel="noopener noreferrer" data-external-name="${escapeHtml(link.label)}">${escapeHtml(link.label)} <span aria-hidden="true">↗</span></a>`).join("")}</nav>
    <p class="homepage-copyright">© ${new Date().getFullYear()} BayesSoft. ${text("rights")}</p>
  </footer>`;
}
