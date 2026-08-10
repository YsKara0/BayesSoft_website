const env = (value: string | undefined, fallback: string) => {
  return value && value.trim().length > 0 ? value.trim() : fallback;
};

const withoutTrailingSlash = (value: string) => value.replace(/\/+$/, "");

export const siteConfig = {
  siteUrl: withoutTrailingSlash(
    env(process.env.NEXT_PUBLIC_SITE_URL, "https://bayessoft.com.tr")
  ),
  contactEmail: env(
    process.env.NEXT_PUBLIC_CONTACT_EMAIL,
    "info.bayessoft@gmail.com"
  ),
  githubUrl: env(
    process.env.NEXT_PUBLIC_GITHUB_URL,
    "https://github.com/bayessoft2024"
  ),
  linkedinUrl: env(
    process.env.NEXT_PUBLIC_LINKEDIN_URL,
    "https://linkedin.com/company/bayessoft"
  ),
  xUrl: env(process.env.NEXT_PUBLIC_X_URL, "https://x.com/bayessoft")
};

export const contactHref = `mailto:${siteConfig.contactEmail}`;
