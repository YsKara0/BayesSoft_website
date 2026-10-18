// Shared page navigation; homepage section links remain owned by their sections.
export const navigationLinks = [
  ["home", "/"], ["projects", "/projeler"], ["services", "/hizmetler"],
  ["about", "/hakkimizda"], ["contact", "/iletisim"],
] as const;

export function navigationCurrent(pathname: string, href: string): "page" | "location" | undefined {
  const page = pathname.replace(/\.html$/, "");
  if (page === href) return "page";
  if (href === "/projeler" && page.startsWith("/projeler/")) return "location";
  return undefined;
}
