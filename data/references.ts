export type ClientReference = {
  name: string;
  src: string;
  website?: string;
  dark?: boolean;
};

export const clientReferences: ClientReference[] = [
  { name: "Arel Üniversitesi", src: "/references/arel.png" },
  { name: "Atlı Lojistik", src: "/references/atli.png" },
  { name: "FurtherUp", src: "/references/further-up.png" },
  { name: "Kanuni Sultan Süleyman Eğitim ve Araştırma Hastanesi", src: "/references/kanuni_sultan_suleyman_hastanesi.png" },
  { name: "Metek Makina", src: "/references/metek.png", website: "https://metekmakina.com/" },
  { name: "Reviel", src: "/references/reviel.png" },
  { name: "Tam Finans", src: "/references/tamfinans.png" },
  { name: "Teşkilat ICOM", src: "/references/teskilat-icom.png", dark: true },
  { name: "Hypersense", src: "/references/hypersense.png" },
];
