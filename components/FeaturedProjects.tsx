import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionIntro } from "@/components/SectionIntro";
import { projects } from "@/data/site";

const featuredTitles = [
  "Tam Finans Multi-Platform Fintech System",
  "Smart Hospital System - Kanuni Sultan Süleyman Hospital",
  "AI-Powered Chatbot Platform"
];

export function FeaturedProjects() {
  const featuredProjects = featuredTitles
    .map((title) => projects.find((project) => project.title === title))
    .filter(Boolean)
    .slice(0, 3);

  return (
    <section className="theme-section-primary border-b-4 border-bayes-ink px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Seçili Projeler" title="Farklı sektörlerde aynı mühendislik disiplini.">
          Fintech, sağlık ve yapay zeka projelerinde ortak hedefimiz net: güvenli mimari, anlaşılır ürün akışı ve üretime hazır sistem.
        </SectionIntro>

        <div className="grid gap-px border border-bayes-ink bg-bayes-ink lg:grid-cols-3">
          {featuredProjects.map((project, index) =>
            project ? (
              <article key={project.title} className="flex min-h-[360px] flex-col bg-bayes-paper p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="border border-bayes-ink px-3 py-1.5 font-label text-[11px] font-semibold uppercase tracking-[0.14em] text-bayes-blue">
                    {project.domain}
                  </span>
                  <span className="font-display text-5xl leading-none text-bayes-ink/18">0{index + 1}</span>
                </div>
                <h3 className="font-display mt-8 text-3xl leading-tight text-bayes-ink">{project.title}</h3>
                <p className="mt-5 leading-8 text-bayes-silver">{project.summary}</p>
                <p className="mt-auto border-l-4 border-bayes-teal pl-4 pt-7 text-sm leading-7 text-bayes-deep">
                  {project.impact}
                </p>
              </article>
            ) : null
          )}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/projeler"
            className="group inline-flex min-h-12 items-center justify-center gap-3 border-2 border-bayes-ink bg-bayes-ink px-6 font-label text-xs font-semibold uppercase tracking-[0.14em] text-bayes-paper transition duration-100 hover:bg-bayes-paper hover:text-bayes-ink"
          >
            Tüm Projeler
            <ArrowUpRight className="size-4 transition duration-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
