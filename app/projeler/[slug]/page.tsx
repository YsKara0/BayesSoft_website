import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailView } from "@/components/ProjectDetailView";
import { projectDetails } from "@/data/projectDetails";
import { projects } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return Object.keys(projectDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const detail = projectDetails[slug];
  return detail
    ? { title: `${detail.title} | BayesSoft`, description: detail.overview }
    : { title: "Proje Bulunamadı | BayesSoft" };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const detail = projectDetails[slug];
  const project = projects.find((item) => item.slug === slug);
  if (!detail || !project) notFound();
  return <ProjectDetailView detail={detail} project={project} />;
}
