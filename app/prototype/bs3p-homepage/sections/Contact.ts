import { escapeHtml } from "../html";
import { text } from "../copy";

export function Contact(contact: Readonly<{ email: string; href: string }>): string {
  return `<section id="contact" class="homepage-section homepage-contact homepage-band" aria-labelledby="contact-title">
    ${text("contactTitle", "h2", 'id="contact-title"')}
    <div class="homepage-contact-details">${text("contactBody", "p")}
      <div class="homepage-contact-actions">${text("cta", "a", `class="homepage-contact-button" href="${escapeHtml(contact.href)}"`)}
        <a class="homepage-email" href="${escapeHtml(contact.href)}">${escapeHtml(contact.email)}</a>
      </div>
    </div>
  </section>`;
}
