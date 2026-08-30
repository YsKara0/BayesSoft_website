"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/components/LanguageProvider";
import { homeCopy } from "@/data/home";
import { localizeProject } from "@/data/projectTranslations";
import { projects } from "@/data/site";

const slugs = ["furtherup-drive"];

export function SelectedWorkSection() {
  const { locale } = useLanguage();
  const copy = homeCopy[locale].work;
  const selected = slugs
    .map((slug) => projects.find((item) => item.slug === slug))
    .filter((project): project is NonNullable<typeof project> => Boolean(project))
    .map((project) => localizeProject(project, locale));

  return (
    <section id="work" className="theme-section-primary px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-end">
          <Reveal><p className="font-label text-xs font-semibold uppercase tracking-[.2em] text-bayes-blue">{copy.eyebrow}</p><h2 className="font-display mt-5 max-w-4xl text-4xl leading-[1.02] text-bayes-ink md:text-6xl">{copy.title}</h2></Reveal>
          <Reveal delay={.05}><p className="max-w-2xl text-lg leading-9 text-bayes-silver">{copy.intro}</p></Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {selected.map((project, index) => (
            <Reveal key={project.slug} className={index === 0 ? "lg:col-span-2" : ""}>
              <article className={`group overflow-hidden rounded-[1.75rem] border border-bayes-ink/10 bg-white shadow-premium-sm transition duration-500 hover:-translate-y-1 hover:shadow-premium-lg ${index === 0 ? "grid lg:grid-cols-[1.25fr_.75fr]" : ""}`}>
                <div className={`overflow-hidden ${index === 0 ? "relative aspect-[16/10] bg-[#f8f8f8] md:min-h-[500px] lg:aspect-auto" : "min-h-[300px] md:min-h-[390px]"}`}>
                  <Image src="/projects/furtherup-drive/further-up-1.png" alt={`${project.title} product interface`} fill sizes="(min-width:1024px) 62vw, 100vw" className="object-contain object-top transition duration-700 group-hover:scale-[1.015] lg:object-cover" />
                </div>
                <div className="flex min-h-[300px] flex-col p-7 md:p-9">
                  <div className="flex items-center justify-between gap-4"><span className="font-label text-[10px] font-semibold uppercase tracking-[.16em] text-bayes-blue">0{index + 1} · {project.domain}</span><ArrowUpRight className="size-5 text-bayes-ink/35 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-bayes-teal" /></div>
                  <h3 className="font-subheading mt-8 text-3xl leading-tight text-bayes-ink md:text-4xl">{project.title}</h3>
                  <p className="mt-5 leading-8 text-bayes-silver">{project.summary}</p>
                  <div className="mt-auto pt-8"><Link href={`/projeler/${project.slug}`} className="inline-flex items-center gap-2 border-b border-bayes-ink pb-1 font-label text-[10px] font-semibold uppercase tracking-[.14em] text-bayes-ink transition hover:border-bayes-teal hover:text-bayes-blue">{copy.viewCase}<ArrowUpRight className="size-4" /></Link></div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center"><Link href="/projeler" className="action-primary group">{copy.viewAll}<ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link></Reveal>
      </div>
    </section>
  );
}
