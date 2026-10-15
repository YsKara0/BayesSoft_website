import { showcaseProjects } from "../bs3p-project-showcase/project-data";
import type { GalleryProject } from "@/prototypes/bs3p-project-showcase/types";

// Shared prototype selections; production records and the historical R1 stay intact.
export const revielProject: GalleryProject = {
  slug: "reviel",
  name: "Reviel",
  category: "Dermokozmetik / Eczane odaklı cilt bakımı",
  description: "Egzama ve hassas cilt odaklı ürünleri öne çıkaran, ürün tanıtımı ve ürün sayfaları içeren dermokozmetik marka sitesi.",
  detailHref: "https://www.reviel.com.tr/",
  technologyLabel: "ASP.NET / HTML / CSS / JavaScript / C#",
  visual: {
    kind: "image",
    src: "/prototype-assets/bs3p-homepage/reviel-cover.png",
    label: "Reviel dijital web deneyimi posteri",
  },
};

export const metekProject: GalleryProject = {
  slug: "metek-makina",
  name: "Metek Makina",
  category: "Endüstriyel sistemler / Makine mühendisliği",
  description: "Alüminyum döküm, ekstrüzyon ve yüzey işlem alanlarına yönelik mühendislik çözümlerini ve sistemlerini tanıtan endüstriyel kurumsal web sitesi.",
  detailHref: "https://metekmakina.com/urunler",
  technologyLabel: "Kurumsal web / Endüstriyel ürün sunumu",
  visual: {
    kind: "image",
    src: "/prototype-assets/bs3p-homepage/metek-makina-cover.png",
    label: "Metek Makina endüstriyel kurumsal web sitesi posteri",
  },
};

const furtherup = showcaseProjects.find(project => project.slug === "furtherup-drive");
if (!furtherup) throw new Error("Gallery: missing verified FurtherUp Drive record.");

export const selectedProjects: readonly GalleryProject[] = [
  {
    ...furtherup,
    visual: {
      kind: "image",
      src: "/prototype-assets/bs3p-homepage/furtherup-drive-cover.png",
      label: "FurtherUp Drive koçluk platformu posteri",
    },
  },
  revielProject,
  metekProject,
];
