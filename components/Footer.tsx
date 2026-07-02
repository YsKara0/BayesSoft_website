import { ArrowUpRight, Mail } from "lucide-react";
import { contactHref, siteConfig } from "@/data/config";
import { Logo } from "@/components/Logo";
import { SocialIcon } from "@/components/SocialIcon";
import { socialLinks } from "@/data/site";

export function Footer() {
  return (
    <footer id="contact" className="theme-section-primary px-5 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-y border-white/10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <Logo />
            <h2 className="mt-8 max-w-2xl text-3xl font-semibold text-bayes-frost md:text-5xl">
              Let&apos;s build something exacting, fast, and beautifully engineered.
            </h2>
          </div>

          <div className="lg:justify-self-end">
            <a
              href={contactHref}
              className="group inline-flex items-center justify-center gap-3 rounded-md bg-bayes-frost px-5 py-3 text-sm font-semibold text-bayes-ink transition hover:bg-white"
            >
              <Mail className="size-4" />
              {siteConfig.contactEmail}
              <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <div className="mt-6 flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={`Bayessoft ${social.label}`}
                  className="flex size-11 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-bayes-silver/76 transition hover:border-bayes-teal/45 hover:text-bayes-frost"
                >
                  <SocialIcon icon={social.icon} className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-7 text-sm text-bayes-silver/55 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Bayessoft. Software and technology team.</p>
          <p>Next.js &middot; Tailwind CSS &middot; Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
