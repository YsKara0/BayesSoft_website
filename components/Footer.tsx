"use client";

import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { Logo } from "@/components/Logo";
import { SocialIcon } from "@/components/SocialIcon";
import { contactHref, siteConfig } from "@/data/config";
import { socialLinks } from "@/data/site";
import { useLanguage } from "@/components/LanguageProvider";

const footerLinks = [
  { key: "about", href: "/hakkimizda" },
  { key: "services", href: "/hizmetler" },
  { key: "team", href: "/ekip" },
  { key: "projects", href: "/projeler" },
  { key: "contact", href: "/iletisim" }
] as const;

export function Footer() {
  const { copy } = useLanguage();

  return (
    <footer className="relative overflow-hidden bg-bayes-ink px-5 py-14 text-white md:px-8">
      <div className="absolute -right-28 -top-28 size-96 rounded-full bg-bayes-teal/10 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <div className="relative grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <Logo variant="light" large />
            <h2 className="font-display mt-8 max-w-2xl text-4xl leading-[1.08] text-white md:text-6xl">
              {copy.footer.statement}
            </h2>
          </div>

          <div className="lg:justify-self-end">
            <a
              href={contactHref}
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-bayes-coral px-5 font-label text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-bayes-ink"
            >
              <Mail className="size-4" />
              {siteConfig.contactEmail}
              <ArrowUpRight className="size-4 transition duration-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <div className="mt-6 flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={`BayesSoft ${social.label}`}
                  className="flex size-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition hover:border-bayes-teal hover:bg-bayes-teal hover:text-bayes-ink"
                >
                  <SocialIcon icon={social.icon} className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="relative grid gap-6 pt-7 text-sm text-white/55 md:grid-cols-[1fr_auto] md:items-center">
          <p>&copy; {new Date().getFullYear()} BayesSoft. {copy.footer.rights}</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-bayes-teal">
                {copy.nav[link.key]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
