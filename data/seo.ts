import type { Metadata } from "next";
import { siteConfig } from "@/data/config";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export const absoluteUrl = (path = "/") =>
  new URL(path, `${siteConfig.siteUrl}/`).toString();

const normalizeDescription = (description: string) => {
  const normalized = description.replace(/\s+/g, " ").trim();
  return normalized.length > 160
    ? `${normalized.slice(0, 157).trimEnd()}…`
    : normalized;
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageMetadataOptions): Metadata {
  const canonical = absoluteUrl(path);
  const normalizedDescription = normalizeDescription(description);
  const socialTitle = title.includes("BayesSoft")
    ? title
    : `${title} | BayesSoft`;

  return {
    title,
    description: normalizedDescription,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title: socialTitle,
      description: normalizedDescription,
      url: canonical,
      siteName: "BayesSoft",
      locale: "tr_TR",
      type: "website",
      images: [
        {
          url: absoluteUrl("/og.png"),
          width: 1733,
          height: 907,
          alt: "BayesSoft kurumsal yazılım ve teknoloji çözümleri",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: normalizedDescription,
      images: [absoluteUrl("/og.png")],
    },
  };
}
