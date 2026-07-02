const env = (key: string, fallback: string) => {
  const value = process.env[key];
  return value && value.trim().length > 0 ? value.trim() : fallback;
};

const withoutTrailingSlash = (value: string) => value.replace(/\/+$/, "");

export const siteConfig = {
  siteUrl: withoutTrailingSlash(env("NEXT_PUBLIC_SITE_URL", "https://bayessoft.com")),
  contactEmail: env("NEXT_PUBLIC_CONTACT_EMAIL", "hello@bayessoft.com"),
  githubUrl: env("NEXT_PUBLIC_GITHUB_URL", "https://github.com/bayessoft"),
  linkedinUrl: env("NEXT_PUBLIC_LINKEDIN_URL", "https://linkedin.com/company/bayessoft"),
  xUrl: env("NEXT_PUBLIC_X_URL", "https://x.com/bayessoft")
};

export const contactHref = `mailto:${siteConfig.contactEmail}`;
