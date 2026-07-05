import { projects } from "@/data/site";
import { projectDetails } from "@/data/projectDetails";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Code2 } from "lucide-react";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Object.keys(projectDetails).map((slug) => ({
    slug,
  }));
}

// Generate dynamic metadata
export async function generateMetadata(
  props: Props
): Promise<Metadata> {
  const resolvedParams = await props.params;
  const detail = projectDetails[resolvedParams.slug];
  if (!detail) {
    return {
      title: "Proje Bulunamadı | BayesSoft",
    };
  }
  return {
    title: `${detail.title} - Proje Detayları | BayesSoft`,
    description: detail.overview,
  };
}

export default async function ProjectDetailPage(
  props: Props
) {
  const resolvedParams = await props.params;
  const slug = resolvedParams.slug;
  const detail = projectDetails[slug];
  const projectSummary = projects.find((p) => p.slug === slug);

  if (!detail || !projectSummary) {
    notFound();
  }

  // Merging links from the summary if they exist
  const liveUrl = projectSummary.liveUrl || detail.liveUrl;
  const sourceUrl = projectSummary.sourceUrl || detail.sourceUrl;

  return (
    <main className="min-h-screen bg-bayes-aqua/10 pt-28 pb-20">
      {/* Container */}
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/projeler"
            className="group inline-flex items-center gap-2 font-label text-xs uppercase tracking-[0.14em] text-bayes-ink hover:text-bayes-blue transition duration-100"
          >
            <ArrowLeft className="size-4 transition-transform duration-100 group-hover:-translate-x-1" />
            Projelere Geri Dön
          </Link>
        </div>

        {/* Hero Section */}
        <header className="border-b border-bayes-ink/20 pb-12 mb-12">
          <span className="border border-bayes-blue px-3 py-1.5 font-label text-[11px] font-semibold uppercase tracking-[0.14em] text-bayes-blue bg-bayes-paper">
            {detail.domain}
          </span>
          <h1 className="font-display mt-6 text-4xl md:text-5xl lg:text-6xl text-bayes-ink leading-tight">
            {detail.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg md:text-xl leading-relaxed text-bayes-silver">
            {detail.overview}
          </p>
        </header>

        {/* Note if exists */}
        {detail.note && (
          <div className="mb-12 border-l-4 border-bayes-sand bg-bayes-paper p-6">
            <h4 className="font-label text-xs font-semibold uppercase tracking-[0.14em] text-bayes-sand mb-2">
              Önemli Bilgi / Gizlilik Notu
            </h4>
            <p className="text-sm leading-7 text-bayes-ink">
              {detail.note}
            </p>
          </div>
        )}

        {/* Main Content Layout */}
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
          {/* Left Column: Technical Details */}
          <div className="lg:col-span-2 space-y-12">
            <section className="bg-bayes-paper border border-bayes-ink/10 p-6 md:p-8">
              <h2 className="font-display text-2xl md:text-3xl text-bayes-ink border-b border-bayes-ink/10 pb-4 mb-6">
                Teknik Problem & Gereksinim
              </h2>
              <p className="leading-8 text-bayes-silver whitespace-pre-line text-base md:text-lg">
                {detail.problem}
              </p>
            </section>

            <section className="bg-bayes-paper border border-bayes-ink/10 p-6 md:p-8">
              <h2 className="font-display text-2xl md:text-3xl text-bayes-ink border-b border-bayes-ink/10 pb-4 mb-6">
                Mimari & Teknik Çözüm
              </h2>
              <p className="leading-8 text-bayes-silver whitespace-pre-line text-base md:text-lg">
                {detail.solution}
              </p>
            </section>

            {/* Screenshots section if exists */}
            {detail.screenshots && detail.screenshots.length > 0 && (
              <section className="bg-bayes-paper border border-bayes-ink/10 p-6 md:p-8">
                <h2 className="font-display text-2xl md:text-3xl text-bayes-ink border-b border-bayes-ink/10 pb-4 mb-6">
                  Ekran Görüntüleri
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {detail.screenshots.map((src, i) => (
                    <div key={i} className="border border-bayes-ink/10 overflow-hidden bg-bayes-aqua/10 relative h-64 w-full">
                      <Image
                        src={src}
                        alt={`${detail.title} - Ekran Görüntüsü ${i + 1}`}
                        fill
                        className="object-cover transition-transform duration-200 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Column: Key Features, Tech Stack, Links */}
          <div className="space-y-8">
            {/* Project Specs */}
            <section className="bg-bayes-ink text-bayes-paper p-6 md:p-8">
              <h3 className="font-display text-xl md:text-2xl text-bayes-teal border-b border-bayes-paper/10 pb-4 mb-6">
                Öne Çıkan Özellikler
              </h3>
              <ul className="space-y-4">
                {detail.keyFeatures.map((feat, i) => {
                  const parts = feat.split(":");
                  const title = parts[0];
                  const desc = parts.slice(1).join(":");
                  return (
                    <li key={i} className="text-sm leading-relaxed">
                      {desc ? (
                        <>
                          <strong className="text-bayes-teal font-medium">{title}:</strong>
                          <span className="text-bayes-mint">{desc}</span>
                        </>
                      ) : (
                        <span className="text-bayes-mint">{feat}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </section>

            {/* Technologies */}
            <section className="bg-bayes-paper border border-bayes-ink/10 p-6 md:p-8">
              <h3 className="font-display text-xl md:text-2xl text-bayes-ink border-b border-bayes-ink/10 pb-4 mb-6">
                Kullanılan Teknolojiler
              </h3>
              <div className="flex flex-wrap gap-2">
                {detail.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="border border-bayes-ink/10 px-3 py-1.5 font-label text-xs uppercase tracking-[0.08em] text-bayes-ink bg-bayes-aqua/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Actions Links */}
            {(liveUrl || sourceUrl) && (
              <section className="bg-bayes-paper border border-bayes-ink/10 p-6 md:p-8 flex flex-col gap-4">
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 w-full items-center justify-center gap-2 border-2 border-bayes-ink bg-bayes-ink px-6 font-label text-xs font-semibold uppercase tracking-[0.14em] text-bayes-paper transition duration-100 hover:bg-bayes-paper hover:text-bayes-ink"
                  >
                    Canlı Proje
                    <ArrowUpRight className="size-4" />
                  </a>
                )}
                {sourceUrl && (
                  <a
                    href={sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 w-full items-center justify-center gap-2 border-2 border-bayes-ink bg-bayes-paper px-6 font-label text-xs font-semibold uppercase tracking-[0.14em] text-bayes-ink transition duration-100 hover:bg-bayes-ink hover:text-bayes-paper"
                  >
                    Kaynak Kodu
                    <Code2 className="size-4" strokeWidth={1.5} />
                  </a>
                )}
              </section>
            )}
          </div>
        </div>

        {/* Footer Back Link */}
        <div className="mt-16 border-t border-bayes-ink/10 pt-8">
          <Link
            href="/projeler"
            className="group inline-flex items-center gap-2 font-label text-xs uppercase tracking-[0.14em] text-bayes-ink hover:text-bayes-blue transition duration-100"
          >
            <ArrowLeft className="size-4 transition-transform duration-100 group-hover:-translate-x-1" />
            Projelere Geri Dön
          </Link>
        </div>

      </div>
    </main>
  );
}
