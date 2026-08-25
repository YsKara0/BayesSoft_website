import type { ReactNode } from "react";
import { createPageMetadata } from "@/data/seo";

export const metadata = createPageMetadata({
  title: "Kurumsal Yazılım Hizmetleri",
  description:
    "Kurumsal web yazılımı, Flutter mobil uygulama, yapay zekâ entegrasyonu, bulut, güvenlik ve DevOps hizmetlerini tek ürün mimarisinde sunuyoruz.",
  path: "/hizmetler",
  keywords: [
    "kurumsal yazılım hizmetleri",
    "mobil uygulama geliştirme",
    "yapay zekâ entegrasyonu",
    "DevOps danışmanlığı",
    "özel yazılım çözümleri",
  ],
});

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return children;
}
