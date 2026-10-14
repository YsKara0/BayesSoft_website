import { GET as renderApprovedHero } from "../spatial-hero-plus/route";
import { composeHomepage } from "./compose";
import { contact, references } from "./content";
import { homepageProjects } from "./project-data";
import { References } from "./sections/References";
import { ProjectsShowcase } from "./sections/ProjectsShowcase";
import { Services } from "./sections/Services";
import { Contact } from "./sections/Contact";
import { SiteFooter } from "./sections/SiteFooter";

export const dynamic = "force-static";

export async function GET() {
  const heroDocument = await (await renderApprovedHero()).text();
  const html = composeHomepage(heroDocument, [
    References(references),
    ProjectsShowcase({ projects: homepageProjects }),
    Services(),
    Contact(contact),
  ], SiteFooter(heroDocument.match(/<a class="wordmark"[\s\S]*?<\/a>/)?.[0] ?? ""));
  return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}
