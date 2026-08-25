import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailView } from "@/components/ProjectDetailView";
import { projectDetails } from "@/data/projectDetails";
import { projects } from "@/data/site";
import { createPageMetadata } from "@/data/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return Object.keys(projectDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const detail = projectDetails[slug];
  return detail
    ? createPageMetadata({
        title: detail.title,
        description: detail.overview,
        path: `/projeler/${slug}`,
        keywords: [detail.title, detail.domain, ...detail.techStack],
      })
    : { title: "Proje Bulunamadı", robots: { index: false, follow: false } };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const detail = projectDetails[slug];
  const project = projects.find((item) => item.slug === slug);
  if (!detail || !project) notFound();
  return <ProjectDetailView detail={detail} project={project} />;
}
