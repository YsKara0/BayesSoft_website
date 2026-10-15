import { clientReferences } from "@/data/references";
import { siteConfig, contactHref } from "@/data/config";
import { socialLinks } from "@/data/site";

export const references = clientReferences;
export const contact = { email: siteConfig.contactEmail, href: contactHref } as const;
export const corporateLinks = socialLinks.filter(link => ["GitHub", "LinkedIn", "X"].includes(link.label));
