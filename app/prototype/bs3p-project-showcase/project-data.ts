import { projectDetails } from "@/data/projectDetails";
import { projects as siteProjects } from "@/data/site";
import type { ConceptTheme, ShowcaseProject } from "@/prototypes/bs3p-project-showcase/types";

const selections: readonly Readonly<{ slug: string; description: string; theme: ConceptTheme; visualLabel: string }>[] = [
  {
    slug: "atli-logistics",
    description: "İş atamaları, çalışan doğrulamaları ve hak ediş takibi için geliştirilen operasyon platformu.",
    theme: "operations",
    visualLabel: "Talep, atama ve onayı bir araya getiren iş gücü akışı",
  },
  {
    slug: "furtherup-drive",
    description: "Koçluk, gelişim değerlendirmeleri ve abonelik süreçlerini bir araya getiren çalışma alanı.",
    theme: "coaching",
    visualLabel: "Koçluk ve gelişim için tasarlanmış editoryal kapak",
  },
  {
    slug: "ai-chatbot",
    description: "Yerel yapay zekâ modellerini veri filtreleme ve yönetici denetimiyle buluşturan sohbet platformu.",
    theme: "intelligence",
    visualLabel: "Girdi, bağlam ve yanıt arasındaki yapılandırılmış diyalog",
  },
];

export const showcaseProjects: readonly ShowcaseProject[] = selections.map(selection => {
  const detail = projectDetails[selection.slug];
  const site = siteProjects.find(project => project.slug === selection.slug);
  if (!detail || !site?.hasDetailsPage || detail.slug !== site.slug) {
    throw new Error(`Showcase: unverified project route ${selection.slug}`);
  }
  return {
    slug: detail.slug,
    name: detail.title.split(" - ")[0],
    category: detail.domain,
    description: selection.description,
    detailHref: `/projeler/${detail.slug}`,
    technologyLabel: selection.theme === "intelligence"
      ? detail.techStack.filter(technology => technology === "Ollama" || technology === "React / Vite").join(" / ")
      : detail.techStack.slice(0, 2).join(" / "),
    visual: { kind: "concept", theme: selection.theme, label: selection.visualLabel },
  };
});
