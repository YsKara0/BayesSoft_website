export type ClientReference = {
  name: string;
  src: string;
  website?: string;
  dark?: boolean;
};

export const clientReferences: ClientReference[] = [
  { name: "Tam Finans", src: "/references/tamfinans.png", website: "https://www.tamfinans.com.tr/" },
  { name: "Metek Makina", src: "/references/metek.png", website: "https://metekmakina.com/" },
  { name: "Reviel", src: "/references/reviel.png", website: "https://revel.com.tr/" },
  { name: "FurtherUp", src: "/references/further-up.png", website: "https://furtherup.io/" },
  { name: "Arel Üniversitesi", src: "/references/arel.png", website: "https://www.arel.edu.tr/" },
  { name: "Atlı Lojistik", src: "/references/atli.png", website: "https://atlilojistik.com.tr/" },
  { name: "Kanuni Sultan Süleyman Hastanesi", src: "/references/kanuni_sultan_suleyman_hastanesi.png", website: "https://kanunissh.saglik.gov.tr/" },
  { name: "Teşkilat ICOM", src: "/references/teskilat-icom.png", website: "https://teskilaticom.com/", dark: true },
  { name: "Hypersense", src: "/references/hypersense.png", website: "https://hypersense.io/" },
];
