import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { Logo } from "@/components/Logo";
import { SocialIcon } from "@/components/SocialIcon";
import { contactHref, siteConfig } from "@/data/config";
import { socialLinks } from "@/data/site";

const footerLinks = [
  { label: "Kurumsal", href: "/hakkimizda" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Ekip", href: "/ekip" },
  { label: "Projeler", href: "/projeler" },
  { label: "İletişim", href: "/iletisim" }
];

export function Footer() {
  return (
    <footer className="theme-section-primary border-t-4 border-bayes-ink px-5 py-14 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-bayes-ink/18 pb-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <Logo />
            <h2 className="font-display mt-8 max-w-2xl text-4xl leading-[1.08] text-bayes-ink md:text-6xl">
              Net mimari, güçlü ürün, ölçülebilir teknoloji.
            </h2>
          </div>

          <div className="lg:justify-self-end">
            <a
              href={contactHref}
              className="group inline-flex min-h-12 items-center justify-center gap-3 border-2 border-bayes-ink bg-bayes-ink px-5 font-label text-xs font-semibold uppercase tracking-[0.14em] text-bayes-paper transition duration-100 hover:bg-bayes-paper hover:text-bayes-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bayes-ink"
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
                  className="flex size-11 items-center justify-center border border-bayes-ink bg-bayes-paper text-bayes-ink transition duration-100 hover:bg-bayes-ink hover:text-bayes-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bayes-ink"
                >
                  <SocialIcon icon={social.icon} className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 pt-7 text-sm text-bayes-silver md:grid-cols-[1fr_auto] md:items-center">
          <p>&copy; {new Date().getFullYear()} BayesSoft. Kurumsal yazılım ve teknoloji ekibi.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-bayes-ink hover:underline">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
