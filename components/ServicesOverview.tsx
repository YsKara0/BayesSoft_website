import Link from "next/link";
import { ArrowUpRight, BrainCircuit, CloudCog, Code2, Smartphone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionIntro } from "@/components/SectionIntro";
import { services } from "@/data/site";

const icons = [Code2, Smartphone, BrainCircuit, CloudCog];

type ServicesOverviewProps = {
  compact?: boolean;
};

export function ServicesOverview({ compact = false }: ServicesOverviewProps) {
  return (
    <section className="theme-section-primary relative border-b-4 border-bayes-ink px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Hizmetler" title="Ürünü yalnızca kodlamıyor, sistem olarak kuruyoruz.">
          Backend, mobil, panel, güvenlik ve yapay zeka katmanlarını birbirinden kopuk işler
          gibi değil; aynı ürün mimarisinin parçaları olarak ele alıyoruz.
        </SectionIntro>

        <div className="grid gap-px border border-bayes-ink bg-bayes-ink md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = icons[index] ?? Code2;

            return (
              <Reveal key={service.title} delay={index * 0.03} className="h-full">
                <article className="group flex h-full min-h-[330px] flex-col bg-bayes-paper p-7 transition duration-100 hover:bg-bayes-ink hover:text-bayes-paper md:p-8">
                  <div className="mb-8 flex items-start justify-between gap-4">
                    <span className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-bayes-blue group-hover:text-bayes-mint">
                      0{index + 1}
                    </span>
                    <span className="flex size-12 items-center justify-center border border-current">
                      <Icon className="size-5" strokeWidth={1.5} />
                    </span>
                  </div>
                  <h3 className="font-display text-3xl leading-tight">{service.title}</h3>
                  <p className="mt-5 text-base leading-8 text-bayes-silver group-hover:text-bayes-aqua">
                    {service.summary}
                  </p>
                  <p className="mt-5 border-l-4 border-bayes-teal pl-4 text-sm leading-7 text-bayes-deep group-hover:border-bayes-paper group-hover:text-bayes-paper">
                    {service.outcome}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-8">
                    {service.points.map((point) => (
                      <span
                        key={point}
                        className="border border-current px-3 py-1.5 font-label text-[11px] uppercase tracking-[0.12em]"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {!compact ? (
          <div className="mt-10 flex justify-center">
            <Link
              href="/hizmetler"
              className="group inline-flex min-h-12 items-center justify-center gap-3 border-2 border-bayes-ink bg-bayes-ink px-6 font-label text-xs font-semibold uppercase tracking-[0.14em] text-bayes-paper transition duration-100 hover:bg-bayes-paper hover:text-bayes-ink"
            >
              Detaylı Hizmetler
              <ArrowUpRight className="size-4 transition duration-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
