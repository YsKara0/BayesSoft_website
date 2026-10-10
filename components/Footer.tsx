"use client";

import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { Logo } from "@/components/Logo";
import { SocialIcon } from "@/components/SocialIcon";
import { contactHref, siteConfig } from "@/data/config";
import { useLanguage } from "@/components/LanguageProvider";

const footerSocialLinks = [
  { label: "LinkedIn", href: siteConfig.linkedinUrl, icon: "linkedin" as const },
  { label: "Website", href: siteConfig.siteUrl, icon: "website" as const },
];

const footerLinks = [
  { key: "about", href: "/hakkimizda" },
  { key: "services", href: "/hizmetler" },
  { key: "projects", href: "/projeler" },
  { key: "contact", href: "/iletisim" }
] as const;

export function Footer() {
  const { copy } = useLanguage();

  return (
    <footer className="theme-dark bs-footer bs-section relative overflow-hidden bg-[var(--bs-tone-bg)] px-5 py-14 text-[color:var(--bs-tone-text)] md:px-8">
      <div className="absolute -right-28 -top-28 size-96 bg-[var(--bs-surface-dark)] blur-3xl" />
      <div className="mx-auto max-w-[1216px]">
        <div className="relative grid gap-10 border-b border-[color:var(--bs-tone-border)] pb-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <Logo variant="light" large />
            <p className="font-display mt-8 max-w-2xl text-4xl leading-[1.08] text-[color:var(--bs-tone-text)] md:text-6xl">
              {copy.footer.statement}
            </p>
          </div>

          <div className="lg:justify-self-end">
            <a
              href={contactHref}
              className="action-primary-on-dark group px-5"
            >
              <Mail className="size-4" />
              {siteConfig.contactEmail}
              <ArrowUpRight className="size-4 transition duration-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <div className="mt-6 flex flex-wrap gap-2">
              {footerSocialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={`BayesSoft ${social.label}`}
                  className="flex size-11 items-center justify-center rounded-[var(--bs-radius-control)] border border-[color:var(--bs-tone-border)] bg-[var(--bs-tone-soft)] text-[color:var(--bs-tone-text)] transition duration-200 hover:border-[color:var(--bs-tone-border)] hover:bg-[var(--bs-tone-soft)] hover:text-[color:var(--bs-tone-text)]"
                >
                  <SocialIcon icon={social.icon} className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="relative grid gap-6 pt-7 text-sm text-[color:var(--bs-tone-muted)] md:grid-cols-[1fr_auto] md:items-center">
          <p>&copy; {new Date().getFullYear()} <span className="font-semibold text-[color:var(--bs-tone-text)]">BAYES<span className="text-[color:var(--bs-tone-accent)]">SOFT</span></span>. {copy.footer.rights}</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="font-label text-xs uppercase tracking-[0.12em] transition hover:text-[color:var(--bs-tone-accent)]">
                {copy.nav[link.key]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
