import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/config";
import { projectDetails } from "@/data/projectDetails";

export const dynamic = "force-static";

const staticPages = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/hakkimizda", changeFrequency: "monthly", priority: 0.8 },
  { path: "/hizmetler", changeFrequency: "monthly", priority: 0.9 },
  { path: "/projeler", changeFrequency: "weekly", priority: 0.9 },
  { path: "/iletisim", changeFrequency: "yearly", priority: 0.7 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: new URL(page.path, `${siteConfig.siteUrl}/`).toString(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const projects: MetadataRoute.Sitemap = Object.keys(projectDetails).map(
    (slug) => ({
      url: new URL(`/projeler/${slug}`, `${siteConfig.siteUrl}/`).toString(),
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  return [...pages, ...projects];
}
