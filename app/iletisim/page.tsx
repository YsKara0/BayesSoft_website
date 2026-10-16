"use client";

import { type FormEvent, useState } from "react";
import { AlertCircle, ArrowUpRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { InteriorIntro } from "@/components/interior/InteriorIntro";
import styles from "@/components/interior/pages.module.css";
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

  return <main id="main-content" tabIndex={-1} className={styles.page}>
    <InteriorIntro eyebrow={page.eyebrow} title={page.title}>{page.body}</InteriorIntro>
    <section className={styles.contactLayout} aria-labelledby="contact-form-title">
      <form onSubmit={handleSubmit} className={styles.form}>
        <p className={styles.eyebrow}>{form.form}</p>
        <h2 id="contact-form-title">{form.title}</h2>
        <div className={styles.fields}>
          <label><span>{form.name}</span><input name="full_name" autoComplete="name" required /></label>
          <label><span>{form.email}</span><input name="email" type="email" autoComplete="email" required /></label>
          <label><span>{form.projectType}</span>
            <select name="project_type" defaultValue={form.types[0]}>
              {form.types.map(type => <option key={type}>{type}</option>)}
            </select>
          </label>
          <label><span>{form.budget}</span><input name="budget_timeline" placeholder={form.budgetPlaceholder} /></label>
          <label className={styles.message}><span>{form.message}</span>
            <textarea name="message" required rows={6} placeholder={form.messagePlaceholder} />
          </label>
        </div>
        <div className={styles.formFooter}>
          <p>{form.note}</p>
          <button type="submit" disabled={formStatus === "sending"} className={styles.submit}>
            {formStatus === "sending" ? form.sending : form.send}
            {formStatus === "sending" ? <LoaderCircle size={18} aria-hidden="true" /> : <ArrowUpRight size={18} aria-hidden="true" />}
          </button>
        </div>
        <div className={styles.formStatus} aria-live="polite" aria-atomic="true">
          {formStatus === "success" && <p className={styles.success}><CheckCircle2 size={18} aria-hidden="true" />{form.success}</p>}
          {(formStatus === "error" || formStatus === "configuration-error") && <p className={styles.error}>
            <AlertCircle size={18} aria-hidden="true" />{formStatus === "configuration-error" ? form.configurationError : form.error}
          </p>}
        </div>
      </form>
      <aside className={styles.contactDetails}>
        <a href={contactHref}><span>{form.emailLabel}</span><strong>{siteConfig.contactEmail}</strong><ArrowUpRight size={20} aria-hidden="true" /></a>
        <a href={siteConfig.githubUrl}><span>GitHub</span><strong>{form.code}</strong><ArrowUpRight size={20} aria-hidden="true" /></a>
        <a href={siteConfig.linkedinUrl}><span>LinkedIn</span><strong>{form.profile}</strong><ArrowUpRight size={20} aria-hidden="true" /></a>
        <div className={styles.socialBlock}>
          <h2>{form.social}</h2>
          <div className={styles.socialLinks}>{socialLinks.map(social => <a key={social.label} href={social.href} aria-label={`BayesSoft ${social.label}`}>
            <SocialIcon icon={social.icon} className="size-4" />{social.label}
          </a>)}</div>
        </div>
      </aside>
    </section>
  </main>;
}
