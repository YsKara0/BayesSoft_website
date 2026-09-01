"use client";

import { CheckCircle2, LockKeyhole, Route, Workflow } from "lucide-react";
import { SectionIntro } from "@/components/SectionIntro";
import { useLanguage } from "@/components/LanguageProvider";

const icons = [Workflow, LockKeyhole, Route, CheckCircle2];

export function WhyChooseUs() {
  const { copy } = useLanguage();

  return (
    <section className="border-b border-white/10 bg-[#0A1018] px-5 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow={copy.why.eyebrow} title={copy.why.title}>
          {copy.why.intro}
        </SectionIntro>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {copy.why.items.map((reason, index) => {
            const Icon = icons[index] ?? Workflow;

            return (
              <article key={reason.title} className="group min-h-[300px] rounded-none border border-white/15 bg-[#0C1420] p-7 shadow-premium-sm transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:shadow-premium-lg">
                <div className="flex justify-end">
                  <span className="flex size-12 items-center justify-center rounded-none border border-white/15 bg-white/5 text-white transition group-hover:border-white/30 group-hover:bg-white/10">
                    <Icon className="size-5" strokeWidth={1.5} />
                  </span>
                </div>
                <h3 className="font-subheading mt-10 text-3xl leading-tight text-white">{reason.title}</h3>
                <p className="mt-5 leading-8 text-bayes-silver">{reason.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
