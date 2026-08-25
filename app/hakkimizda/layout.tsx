import type { ReactNode } from "react";
import { createPageMetadata } from "@/data/seo";

export const metadata = createPageMetadata({
  title: "Hakkımızda",
  description:
    "BayesSoft'un kurumsal yazılım, mobil ürünler, yapay zekâ ve bulut sistemleri geliştiren ürün mühendisliği ekibini ve çalışma yaklaşımını tanıyın.",
  path: "/hakkimizda",
  keywords: [
    "BayesSoft hakkında",
    "yazılım geliştirme ekibi",
    "ürün mühendisliği ekibi",
  ],
});

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children;
}
