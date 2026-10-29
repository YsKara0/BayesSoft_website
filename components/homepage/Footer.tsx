"use client";
import Link from "next/link";
import { contactHref, siteConfig } from "@/data/config";
import { socialLinks } from "@/data/site";
import { useHomepageCopy } from "./useHomepageCopy";
const links = socialLinks.filter(link => ["GitHub", "LinkedIn", "X"].includes(link.label));
export function Footer() {
  const t = useHomepageCopy(); return <footer className="homepage-footer" aria-label={t.footer}>
    <div className="homepage-footer-brand">
      <Link className="wordmark" href="/" aria-label={t.homeLabel}>BayesSoft</Link>
      <p>{t.footerBrand}</p>
      <a className="homepage-email" href={contactHref}>{siteConfig.contactEmail}</a>
    </div>
    <nav aria-label={t.footerSocial}>
      <h2>{t.footerSocial}</h2>{links.map(link =>
        <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`${link.label} — ${t.external}`}>{link.label} <span aria-hidden="true">↗</span>
        </a>)}</nav>
    <p className="homepage-copyright">© {new Date().getFullYear()} BayesSoft. {t.rights}</p>
  </footer>;
}
