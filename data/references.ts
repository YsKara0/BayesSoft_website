export type ClientReference = {
  name: string;
  src: string;
  website?: string;
  dark?: boolean;
};

export const clientReferences: ClientReference[] = [
  { name: "Tam Finans", src: "/references/tamfinans.png", website: "https://www.tamfinans.com.tr/" },
  { name: "Metek Makina", src: "/references/metek.png", website: "https://metekmakina.com/" },
  { name: "Reviel", src: "/references/reviel.png", website: "https://reviel.com.tr/" },
  { name: "FurtherUp", src: "/references/further-up.png", website: "https://drive.further-up.net/" },
  { name: "Arel Üniversitesi", src: "/references/arel.png", website: "https://www.arel.edu.tr/" },
  { name: "Atlı Lojistik", src: "/references/atli.png" },
  { name: "Kanuni Sultan Süleyman Hastanesi", src: "/references/kanuni_sultan_suleyman_hastanesi.png" },
  { name: "Teşkilat ICOM", src: "/references/teskilat-icom.png", website: "https://www.teskilat.com.tr/", dark: true },
  { name: "Hypersense", src: "/references/hypersense.png", website: "https://hypersense.dev/" },
  { name: "Zirve Çilingir", src: "/references/zirve-cilingir.png", website: "https://esenyurtzirvecilingir.com/" },
];
