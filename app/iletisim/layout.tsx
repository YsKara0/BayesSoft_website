import type { ReactNode } from "react";
import { createPageMetadata } from "@/data/seo";

export const metadata = createPageMetadata({
  title: "İletişim",
  description:
    "Kurumsal yazılım, mobil uygulama, yapay zekâ entegrasyonu veya sistem modernizasyonu projeniz için BayesSoft ile iletişime geçin.",
  path: "/iletisim",
  keywords: [
    "BayesSoft iletişim",
    "yazılım projesi teklif",
    "kurumsal yazılım danışmanlığı",
  ],
});

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
