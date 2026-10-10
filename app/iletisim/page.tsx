"use client";

import { type FormEvent, useState } from "react";
import { AlertCircle, ArrowUpRight, CheckCircle2, Github, Linkedin, LoaderCircle, Mail, Send } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SocialIcon } from "@/components/SocialIcon";
import { contactHref, siteConfig } from "@/data/config";
import { socialLinks } from "@/data/site";
import { useLanguage } from "@/components/LanguageProvider";

export default function ContactPage() {
  const { copy } = useLanguage();
  const page = copy.pages.contact;
  const form = copy.contact;
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error" | "configuration-error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!siteConfig.contactApiUrl) {
      setFormStatus("configuration-error");
      return;
    }

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    setFormStatus("sending");

    try {
      const response = await fetch(siteConfig.contactApiUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: String(formData.get("full_name") ?? ""),
          email: String(formData.get("email") ?? ""),
          project_type: String(formData.get("project_type") ?? ""),
          budget_timeline: String(formData.get("budget_timeline") ?? ""),
          message: String(formData.get("message") ?? ""),
        }),
      });

      if (!response.ok) {
        throw new Error(`Contact request failed with status ${response.status}`);
      }

      formElement.reset();
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <main>
      <PageHero eyebrow={page.eyebrow} title={page.title}>
        {page.body}
      </PageHero>

      <section className="theme-dark bs-section bs-contact border-b border-[color:var(--bs-tone-border)] bg-[var(--bs-tone-bg)] px-5 py-20 text-[color:var(--bs-tone-text)] md:px-8 md:py-28">
        <div className="mx-auto grid max-w-[1216px] gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <form
            onSubmit={handleSubmit}
            className="theme-light bs-card rounded-[var(--bs-radius-panel)] border border-[color:var(--bs-tone-border)] bg-[var(--bs-tone-card)] p-7 shadow-[var(--bs-shadow-soft)] md:p-10"
          >
            <div className="mb-8 flex items-start justify-between gap-6">
              <div>
                <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--bs-tone-accent)]">
                  {form.form}
                </p>
                <h2 className="font-display mt-4 max-w-2xl text-4xl leading-tight text-[color:var(--bs-tone-text)] md:text-5xl">
                  {form.title}
                </h2>
              </div>
              <Send className="hidden size-8 shrink-0 text-[color:var(--bs-tone-accent)] md:block" strokeWidth={1.5} />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2">
                <span className="font-label text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--bs-tone-accent)]">
                  {form.name}
                </span>
                <input
                  name="full_name"
                  autoComplete="name"
                  required
                  className="min-h-12 rounded-[var(--bs-radius-control)] border border-[color:var(--bs-tone-border)] bg-[var(--bs-tone-card)] px-4 text-base text-[color:var(--bs-tone-text)] transition focus:border-[color:var(--bs-primary)] focus:ring-1 focus:ring-[var(--bs-primary)]"
                />
              </label>
              <label className="grid gap-2">
                <span className="font-label text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--bs-tone-accent)]">
                  {form.email}
                </span>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-h-12 rounded-[var(--bs-radius-control)] border border-[color:var(--bs-tone-border)] bg-[var(--bs-tone-card)] px-4 text-base text-[color:var(--bs-tone-text)] transition focus:border-[color:var(--bs-primary)] focus:ring-1 focus:ring-[var(--bs-primary)]"
                />
              </label>
              <label className="grid gap-2">
                <span className="font-label text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--bs-tone-accent)]">
                  {form.projectType}
                </span>
                <select
                  name="project_type"
                  className="min-h-12 rounded-[var(--bs-radius-control)] border border-[color:var(--bs-tone-border)] bg-[var(--bs-tone-card)] px-4 text-base text-[color:var(--bs-tone-text)] transition focus:border-[color:var(--bs-primary)] focus:ring-1 focus:ring-[var(--bs-primary)]"
                  defaultValue={form.types[0]}
                >
                  {form.types.map((type) => <option key={type} className="bg-[var(--bs-tone-card)] text-[color:var(--bs-tone-text)]">{type}</option>)}
                </select>
              </label>
              <label className="grid gap-2">
                <span className="font-label text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--bs-tone-accent)]">
                  {form.budget}
                </span>
                <input
                  name="budget_timeline"
                  placeholder={form.budgetPlaceholder}
                  className="min-h-12 rounded-[var(--bs-radius-control)] border border-[color:var(--bs-tone-border)] bg-[var(--bs-tone-card)] px-4 text-base text-[color:var(--bs-tone-text)] transition placeholder:text-[color:var(--bs-tone-muted)] focus:border-[color:var(--bs-primary)] focus:ring-1 focus:ring-[var(--bs-primary)]"
                />
              </label>
              <label className="grid gap-2 md:col-span-2">
                <span className="font-label text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--bs-tone-accent)]">
                  {form.message}
                </span>
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder={form.messagePlaceholder}
                  className="resize-y rounded-[var(--bs-radius-control)] border border-[color:var(--bs-tone-border)] bg-[var(--bs-tone-card)] px-4 py-3 text-base leading-8 text-[color:var(--bs-tone-text)] transition placeholder:text-[color:var(--bs-tone-muted)] focus:border-[color:var(--bs-primary)] focus:ring-1 focus:ring-[var(--bs-primary)]"
                />
              </label>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-xl text-sm leading-7">
                <p className="text-[color:var(--bs-tone-muted)]">{form.note}</p>
                <div className="mt-2 min-h-7" aria-live="polite">
                  {formStatus === "success" && (
                    <p className="inline-flex items-center gap-2 font-semibold text-[color:var(--bs-success)]">
                      <CheckCircle2 className="size-4 shrink-0" aria-hidden="true" />
                      {form.success}
                    </p>
                  )}
                  {(formStatus === "error" || formStatus === "configuration-error") && (
                    <p className="inline-flex items-center gap-2 font-semibold text-[color:var(--bs-danger)]">
                      <AlertCircle className="size-4 shrink-0" aria-hidden="true" />
                      {formStatus === "configuration-error" ? form.configurationError : form.error}
                    </p>
                  )}
                </div>
              </div>
              <button
                type="submit"
                disabled={formStatus === "sending"}
                className="action-primary gap-3 px-6 disabled:cursor-wait disabled:opacity-65"
              >
                {formStatus === "sending" ? form.sending : form.send}
                {formStatus === "sending" ? (
                  <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
                ) : (
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                )}
              </button>
            </div>
          </form>

          <div className="grid gap-4">
            <a
              href={contactHref}
              className="group flex min-h-[200px] flex-col justify-between rounded-[var(--bs-radius-control)] border border-[color:var(--bs-tone-border)] bg-[var(--bs-tone-bg)] p-7 text-[color:var(--bs-tone-text)] shadow-[var(--bs-shadow-soft)] transition duration-300 hover:-translate-y-1 hover:border-[color:var(--bs-primary)] hover:shadow-[var(--bs-shadow-soft)]"
            >
              <Mail className="size-8 text-[color:var(--bs-tone-accent)]" strokeWidth={1.5} />
              <div>
                <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--bs-tone-accent)]">
                  {form.emailLabel}
                </p>
                <h3 className="font-subheading mt-4 break-all text-2xl text-[color:var(--bs-tone-text)]">{siteConfig.contactEmail}</h3>
              </div>
              <ArrowUpRight className="size-5 text-[color:var(--bs-tone-muted)] transition duration-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[color:var(--bs-tone-accent)]" />
            </a>

            <a
              href={siteConfig.githubUrl}
              className="group flex min-h-[190px] flex-col justify-between rounded-[var(--bs-radius-control)] border border-[color:var(--bs-tone-border)] bg-[var(--bs-tone-card)] p-7 text-[color:var(--bs-tone-text)] shadow-[var(--bs-shadow-soft)] transition duration-300 hover:-translate-y-1 hover:border-[color:var(--bs-primary)] hover:shadow-[var(--bs-shadow-soft)]"
            >
              <Github className="size-8 text-[color:var(--bs-tone-muted)] group-hover:text-[color:var(--bs-tone-accent)] transition" strokeWidth={1.5} />
              <div>
                <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--bs-tone-accent)]">
                  GitHub
                </p>
                <h3 className="font-subheading mt-4 text-3xl text-[color:var(--bs-tone-text)]">{form.code}</h3>
              </div>
              <ArrowUpRight className="size-5 text-[color:var(--bs-tone-muted)] transition duration-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[color:var(--bs-tone-accent)]" />
            </a>

            <a
              href={siteConfig.linkedinUrl}
              className="group flex min-h-[190px] flex-col justify-between rounded-[var(--bs-radius-control)] border border-[color:var(--bs-tone-border)] bg-[var(--bs-tone-card)] p-7 text-[color:var(--bs-tone-text)] shadow-[var(--bs-shadow-soft)] transition duration-300 hover:-translate-y-1 hover:border-[color:var(--bs-primary)] hover:shadow-[var(--bs-shadow-soft)]"
            >
              <Linkedin className="size-8 text-[#0A66C2] group-hover:text-[color:var(--bs-tone-accent)] transition" strokeWidth={1.5} />
              <div>
                <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--bs-tone-accent)]">
                  LinkedIn
                </p>
                <h3 className="font-subheading mt-4 text-3xl text-[color:var(--bs-tone-text)]">{form.profile}</h3>
              </div>
              <ArrowUpRight className="size-5 text-[color:var(--bs-tone-muted)] transition duration-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[color:var(--bs-tone-accent)]" />
            </a>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-[1216px] rounded-[var(--bs-radius-control)] border border-[color:var(--bs-tone-border)] bg-[var(--bs-tone-card)] p-7 md:p-10">
          <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--bs-tone-accent)]">
            {form.social}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={`BayesSoft ${social.label}`}
                className="flex min-h-11 items-center gap-3 rounded-[var(--bs-radius-control)] border border-[color:var(--bs-tone-border)] bg-[var(--bs-tone-soft)] px-4 font-label text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--bs-tone-text)] transition hover:border-[color:var(--bs-primary)] hover:bg-[var(--bs-primary)] hover:text-white hover:shadow-[var(--bs-shadow-soft)]"
              >
                <SocialIcon icon={social.icon} className="size-4" />
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
