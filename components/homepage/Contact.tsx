"use client";
import { contactHref, siteConfig } from "@/data/config";
import { useHomepageCopy } from "./useHomepageCopy";
export function Contact() {
  const t = useHomepageCopy(); return <section id="contact" className="homepage-section homepage-contact homepage-band" aria-labelledby="contact-title">
    <h2 id="contact-title">{t.contactTitle}</h2>
    <div className="homepage-contact-details">
      <p>{t.contactBody}</p>
      <div className="homepage-contact-actions">
        <a className="homepage-contact-button" href={contactHref}>{t.cta}</a>
        <a className="homepage-email" href={contactHref}>{siteConfig.contactEmail}</a>
      </div>
    </div>
  </section>;
}
