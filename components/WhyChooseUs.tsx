"use client";

import { CheckCircle2, LockKeyhole, Route, Workflow } from "lucide-react";
import { SectionIntro } from "@/components/SectionIntro";
import { useLanguage } from "@/components/LanguageProvider";

const icons = [Workflow, LockKeyhole, Route, CheckCircle2];

export function WhyChooseUs() {
  const { copy } = useLanguage();

  return (
    <section className="theme-section-secondary border-b border-bayes-ink/10 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow={copy.why.eyebrow} title={copy.why.title}>
          {copy.why.intro}
        </SectionIntro>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {copy.why.items.map((reason, index) => {
            const Icon = icons[index] ?? Workflow;

            return (
              <article key={reason.title} className="group min-h-[300px] rounded-[1.5rem] border border-bayes-ink/10 bg-bayes-paper p-7 shadow-premium-sm transition duration-300 hover:-translate-y-1 hover:bg-bayes-ink hover:text-bayes-paper hover:shadow-premium-lg">
                <div className="flex justify-end">
                  <span className="flex size-12 items-center justify-center rounded-xl border border-current">
                    <Icon className="size-5" strokeWidth={1.5} />
                  </span>
                </div>
                <h3 className="font-subheading mt-10 text-3xl leading-tight">{reason.title}</h3>
                <p className="mt-5 leading-8 text-bayes-silver group-hover:text-bayes-aqua">{reason.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
