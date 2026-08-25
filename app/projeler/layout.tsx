import type { ReactNode } from "react";
import { createPageMetadata } from "@/data/seo";

export const metadata = createPageMetadata({
  title: "Yazılım Projeleri ve Vaka Çalışmaları",
  description:
    "BayesSoft'un fintech, sağlık, lojistik, mobil uygulama, yapay zekâ ve kurumsal yazılım alanlarında geliştirdiği projeleri inceleyin.",
  path: "/projeler",
  keywords: [
    "yazılım projeleri",
    "kurumsal yazılım örnekleri",
    "mobil uygulama projeleri",
    "yapay zekâ projeleri",
    "yazılım vaka çalışmaları",
  ],
});

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return children;
}
