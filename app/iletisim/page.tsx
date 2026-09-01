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

      <section className="border-b border-white/10 bg-[#060A10] px-5 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <form
            onSubmit={handleSubmit}
            className="rounded-none border border-white/15 bg-[#0C1420] p-7 shadow-premium-sm md:p-10"
          >
            <div className="mb-8 flex items-start justify-between gap-6">
              <div>
                <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-bayes-blue">
                  {form.form}
                </p>
                <h2 className="font-display mt-4 max-w-2xl text-4xl leading-tight text-white md:text-5xl">
                  {form.title}
                </h2>
              </div>
              <Send className="hidden size-8 shrink-0 text-bayes-blue md:block" strokeWidth={1.5} />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2">
                <span className="font-label text-[11px] font-semibold uppercase tracking-[0.14em] text-bayes-blue">
                  {form.name}
                </span>
                <input
                  name="full_name"
                  autoComplete="name"
                  required
                  className="min-h-12 rounded-none border border-white/15 bg-[#080E17] px-4 text-base text-white outline-none transition focus:border-bayes-blue focus:ring-1 focus:ring-bayes-blue"
                />
              </label>
              <label className="grid gap-2">
                <span className="font-label text-[11px] font-semibold uppercase tracking-[0.14em] text-bayes-blue">
                  {form.email}
                </span>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-h-12 rounded-none border border-white/15 bg-[#080E17] px-4 text-base text-white outline-none transition focus:border-bayes-blue focus:ring-1 focus:ring-bayes-blue"
                />
              </label>
              <label className="grid gap-2">
                <span className="font-label text-[11px] font-semibold uppercase tracking-[0.14em] text-bayes-blue">
                  {form.projectType}
                </span>
                <select
                  name="project_type"
                  className="min-h-12 rounded-none border border-white/15 bg-[#080E17] px-4 text-base text-white outline-none transition focus:border-bayes-blue focus:ring-1 focus:ring-bayes-blue"
                  defaultValue={form.types[0]}
                >
                  {form.types.map((type) => <option key={type} className="bg-[#080E17] text-white">{type}</option>)}
                </select>
              </label>
              <label className="grid gap-2">
                <span className="font-label text-[11px] font-semibold uppercase tracking-[0.14em] text-bayes-blue">
                  {form.budget}
                </span>
                <input
                  name="budget_timeline"
                  placeholder={form.budgetPlaceholder}
                  className="min-h-12 rounded-none border border-white/15 bg-[#080E17] px-4 text-base text-white outline-none transition placeholder:text-white/30 focus:border-bayes-blue focus:ring-1 focus:ring-bayes-blue"
                />
              </label>
              <label className="grid gap-2 md:col-span-2">
                <span className="font-label text-[11px] font-semibold uppercase tracking-[0.14em] text-bayes-blue">
                  {form.message}
                </span>
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder={form.messagePlaceholder}
                  className="resize-y rounded-none border border-white/15 bg-[#080E17] px-4 py-3 text-base leading-8 text-white outline-none transition placeholder:text-white/30 focus:border-bayes-blue focus:ring-1 focus:ring-bayes-blue"
                />
              </label>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-xl text-sm leading-7">
                <p className="text-bayes-silver">{form.note}</p>
                <div className="mt-2 min-h-7" aria-live="polite">
                  {formStatus === "success" && (
                    <p className="inline-flex items-center gap-2 font-semibold text-emerald-400">
                      <CheckCircle2 className="size-4 shrink-0" aria-hidden="true" />
                      {form.success}
                    </p>
                  )}
                  {(formStatus === "error" || formStatus === "configuration-error") && (
                    <p className="inline-flex items-center gap-2 font-semibold text-bayes-blue">
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
              className="group flex min-h-[200px] flex-col justify-between rounded-none border border-white/15 bg-[#040608] p-7 text-white shadow-premium-lg transition duration-300 hover:-translate-y-1 hover:border-bayes-blue/70 hover:shadow-[0_0_30px_rgba(0,102,255,0.2)]"
            >
              <Mail className="size-8 text-bayes-blue" strokeWidth={1.5} />
              <div>
                <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-bayes-blue">
                  {form.emailLabel}
                </p>
                <h3 className="font-subheading mt-4 break-all text-2xl text-white">{siteConfig.contactEmail}</h3>
              </div>
              <ArrowUpRight className="size-5 text-white/40 transition duration-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-bayes-blue" />
            </a>

            <a
              href={siteConfig.githubUrl}
              className="group flex min-h-[190px] flex-col justify-between rounded-none border border-white/15 bg-[#0C1420] p-7 text-white shadow-premium-sm transition duration-300 hover:-translate-y-1 hover:border-bayes-blue/70 hover:shadow-[0_0_30px_rgba(0,102,255,0.2)]"
            >
              <Github className="size-8 text-white/70 group-hover:text-bayes-blue transition" strokeWidth={1.5} />
              <div>
                <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-bayes-blue">
                  GitHub
                </p>
                <h3 className="font-subheading mt-4 text-3xl text-white">{form.code}</h3>
              </div>
              <ArrowUpRight className="size-5 text-white/40 transition duration-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-bayes-blue" />
            </a>

            <a
              href={siteConfig.linkedinUrl}
              className="group flex min-h-[190px] flex-col justify-between rounded-none border border-white/15 bg-[#0C1420] p-7 text-white shadow-premium-sm transition duration-300 hover:-translate-y-1 hover:border-bayes-blue/70 hover:shadow-[0_0_30px_rgba(0,102,255,0.2)]"
            >
              <Linkedin className="size-8 text-[#0A66C2] group-hover:text-bayes-blue transition" strokeWidth={1.5} />
              <div>
                <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-bayes-blue">
                  LinkedIn
                </p>
                <h3 className="font-subheading mt-4 text-3xl text-white">{form.profile}</h3>
              </div>
              <ArrowUpRight className="size-5 text-white/40 transition duration-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-bayes-blue" />
            </a>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl rounded-none border border-white/15 bg-[#0C1420] p-7 md:p-10">
          <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-bayes-blue">
            {form.social}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={`BayesSoft ${social.label}`}
                className="flex min-h-11 items-center gap-3 rounded-none border border-white/15 bg-white/5 px-4 font-label text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:border-bayes-blue hover:bg-bayes-blue hover:text-white hover:shadow-[0_0_12px_#0066FF]"
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
