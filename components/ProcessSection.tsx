import { SectionIntro } from "@/components/SectionIntro";
import { processSteps } from "@/data/site";

export function ProcessSection() {
  return (
    <section className="theme-section-secondary relative overflow-hidden border-b-4 border-bayes-ink px-5 py-20 md:px-8 md:py-28">
      <div className="texture-diagonal absolute inset-0 opacity-35" />
      <div className="relative mx-auto max-w-7xl">
        <SectionIntro eyebrow="Süreç" title="Belirsizliği azaltan, ölçülebilir bir üretim akışı.">
          Her projede önce mimari kararları görünür hale getirir, sonra tasarım ve geliştirme
          disiplinini aynı ritimde ilerletiriz.
        </SectionIntro>

        <div className="grid border border-bayes-ink bg-bayes-paper lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className="min-h-[260px] border-b border-bayes-ink p-7 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-bayes-blue">
                Aşama {index + 1}
              </p>
              <h3 className="font-display mt-8 text-3xl leading-tight text-bayes-ink">{step.title}</h3>
              <p className="mt-5 leading-8 text-bayes-silver">{step.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
