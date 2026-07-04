import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { contactHref } from "@/data/config";

export function CallToAction() {
  return (
    <section className="theme-section-primary px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-8 border-4 border-bayes-ink bg-bayes-aqua p-7 md:p-10 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-bayes-blue">
            Başlayalım
          </p>
          <h2 className="font-display mt-5 max-w-3xl text-4xl leading-[1.06] text-bayes-ink md:text-6xl">
            Yeni bir ürün, panel ya da entegrasyon için net bir teknik yol haritası çıkaralım.
          </h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <a
            href={contactHref}
            className="group inline-flex min-h-12 items-center justify-center gap-3 border-2 border-bayes-ink bg-bayes-ink px-6 font-label text-xs font-semibold uppercase tracking-[0.14em] text-bayes-paper transition duration-100 hover:bg-bayes-paper hover:text-bayes-ink"
          >
            <Mail className="size-4" />
            Mail Gönder
          </a>
          <Link
            href="/iletisim"
            className="group inline-flex min-h-12 items-center justify-center gap-3 border-2 border-bayes-ink bg-bayes-paper px-6 font-label text-xs font-semibold uppercase tracking-[0.14em] text-bayes-ink transition duration-100 hover:bg-bayes-ink hover:text-bayes-paper"
          >
            İletişim Sayfası
            <ArrowUpRight className="size-4 transition duration-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
