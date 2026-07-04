import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Layers3, ShieldCheck, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const signals = [
  { label: "Web, mobil ve backend tek ekipte", icon: Layers3 },
  { label: "JWT, RBAC ve güvenlik odaklı mimari", icon: ShieldCheck },
  { label: "AI destekli ürün ve otomasyon", icon: Sparkles }
];

export function Hero() {
  return (
    <section className="theme-hero-base relative isolate overflow-hidden border-b-4 border-bayes-ink px-5 pt-32 md:px-8 md:pt-36">
      <div className="texture-lines absolute inset-0 opacity-60" />
      <Image
        src="/bayes.png"
        alt=""
        width={840}
        height={840}
        priority
        className="absolute right-[-180px] top-10 -z-10 w-[760px] max-w-none opacity-[0.08] md:right-[-120px] md:top-0"
      />

      <div className="relative mx-auto flex min-h-[76svh] max-w-7xl flex-col justify-center pb-14">
        <Reveal className="max-w-6xl">
          <div className="mb-8 flex items-center gap-3">
            <span className="size-4 border-2 border-bayes-ink bg-bayes-teal" aria-hidden="true" />
            <span className="font-label text-xs font-semibold uppercase tracking-[0.2em] text-bayes-blue">
              Kurumsal yazılım, mobil ürün ve yapay zeka mühendisliği
            </span>
          </div>

          <h1 className="font-display text-6xl leading-none text-bayes-ink sm:text-7xl md:text-8xl lg:text-9xl">
            BayesSoft
          </h1>
          <div className="mt-7 h-2 w-32 bg-bayes-ink" aria-hidden="true" />
          <p className="mt-8 max-w-3xl text-xl leading-9 text-bayes-deep md:text-2xl">
            Operasyonunu dijitalleştirmek isteyen kurumlar için yönetim paneli, mobil uygulama,
            güvenli backend ve AI entegrasyonlarını üretime hazır bir sistem olarak kuruyoruz.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/iletisim"
              className="group inline-flex min-h-12 items-center justify-center gap-3 border-2 border-bayes-ink bg-bayes-ink px-6 font-label text-xs font-semibold uppercase tracking-[0.14em] text-bayes-paper transition duration-100 hover:bg-bayes-paper hover:text-bayes-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bayes-ink"
            >
              Proje İçin Görüşelim
              <ArrowUpRight className="size-4 transition duration-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/hizmetler"
              className="inline-flex min-h-12 items-center justify-center border-2 border-bayes-ink bg-bayes-paper px-6 font-label text-xs font-semibold uppercase tracking-[0.14em] text-bayes-ink transition duration-100 hover:bg-bayes-ink hover:text-bayes-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bayes-ink"
            >
              Hizmetleri İncele
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="mt-16 grid border-y border-bayes-ink md:grid-cols-3">
          {signals.map((signal) => {
            const Icon = signal.icon;

            return (
              <div
                key={signal.label}
                className="flex min-h-24 items-center gap-4 border-b border-bayes-ink/18 bg-bayes-paper/62 p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
              >
                <span className="flex size-11 shrink-0 items-center justify-center border border-bayes-ink bg-bayes-aqua text-bayes-ink">
                  <Icon className="size-5" strokeWidth={1.5} />
                </span>
                <span className="font-label text-xs font-semibold uppercase tracking-[0.16em] text-bayes-ink">
                  {signal.label}
                </span>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
