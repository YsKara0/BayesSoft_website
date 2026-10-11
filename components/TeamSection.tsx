"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { SectionIntro } from "@/components/SectionIntro";
import { SocialIcon } from "@/components/SocialIcon";
import { teamMembers, type TeamMember } from "@/data/site";
import { useLanguage } from "@/components/LanguageProvider";

const accentClasses: Record<TeamMember["accent"], string> = {
  blue: "bg-[var(--bs-primary)] text-white shadow-[var(--bs-shadow-soft)]",
  teal: "bg-[var(--bs-primary)] text-white shadow-[var(--bs-shadow-soft)]",
  gold: "bg-[var(--bs-primary)] text-white shadow-[var(--bs-shadow-soft)]",
  silver: "bg-[var(--bs-tone-soft)] text-[color:var(--bs-tone-text)] border-[color:var(--bs-tone-border)]",
  navy: "bg-[var(--bs-tone-card)] text-[color:var(--bs-tone-text)] border-[color:var(--bs-primary)]",
};

export function TeamSection() {
  const { copy } = useLanguage();
  const reducedMotion = useReducedMotion();
  const [activeMemberId, setActiveMemberId] = useState<string | null>(null);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  useEffect(() => {
    if (!selectedMember) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedMember(null);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedMember]);

  return (
    <section id="ekip" className="theme-dark bs-section relative overflow-hidden border-b border-[color:var(--bs-tone-border)] bg-[var(--bs-surface-dark)] px-5 py-20 text-[color:var(--bs-tone-text)] md:px-8 md:py-28">
      <div className="absolute inset-x-0 top-0 h-1 bg-[var(--bs-primary)] shadow-[var(--bs-shadow-soft)]" />
      <div className="texture-lines absolute inset-0 opacity-25" />

      <div className="relative mx-auto max-w-[1216px]">
        <SectionIntro eyebrow={copy.team.eyebrow} title={copy.team.title}>
          {copy.team.intro}
        </SectionIntro>

        <div
          className="mb-7 grid grid-cols-5 overflow-hidden rounded-[var(--bs-radius-control)] border border-[color:var(--bs-tone-border)] bg-[var(--bs-tone-soft)]"
          aria-label="BAYES"
          onMouseLeave={() => setActiveMemberId(null)}
        >
          {teamMembers.map((member) => {
            const isActive = activeMemberId === member.id;

            return (
              <button
                key={member.id}
                type="button"
                aria-label={`${member.name} harfi`}
                onFocus={() => setActiveMemberId(member.id)}
                onMouseEnter={() => setActiveMemberId(member.id)}
                className={`font-display flex min-h-14 items-center justify-center border-r border-[color:var(--bs-tone-border)] text-4xl leading-none transition duration-300 last:border-r-0 sm:min-h-16 sm:text-5xl md:min-h-20 md:text-6xl ${
                  isActive
                    ? accentClasses[member.accent]
                    : "bg-[var(--bs-tone-soft)] text-[color:var(--bs-tone-muted)] hover:bg-[var(--bs-tone-soft)] hover:text-[color:var(--bs-tone-text)]"
                }`}
              >
                {member.letter}
              </button>
            );
          })}
        </div>

        <div
          className="grid gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-5"
          onMouseLeave={() => setActiveMemberId(null)}
        >
          {teamMembers.map((member, index) => {
            const isActive = activeMemberId === member.id;

            return (
              <motion.article
                key={member.id}
                initial={reducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: reducedMotion ? 0 : 0.28, delay: reducedMotion ? 0 : index * 0.04 }}
                onFocus={() => setActiveMemberId(member.id)}
                onMouseEnter={() => setActiveMemberId(member.id)}
                className="theme-dark bs-team-card group relative isolate aspect-[4/5] overflow-hidden rounded-[var(--bs-radius-control)] border border-[color:var(--bs-tone-border)] bg-[var(--bs-tone-card)] shadow-[var(--bs-shadow-soft)] transition duration-300 hover:-translate-y-1 hover:border-[color:var(--bs-primary)] hover:shadow-[var(--bs-shadow-soft)] focus-within:-translate-y-1"
              >
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                  className={`object-cover object-center transition duration-500 group-hover:scale-[1.04] ${
                    isActive
                      ? "grayscale-0 saturate-110"
                      : "grayscale saturate-0 contrast-110 opacity-70"
                  }`}
                  priority={index < 2}
                />

                <div
                  className={`absolute inset-0 bg-gradient-to-t from-[#040608] via-[#040608]/40 to-transparent transition duration-300 ${
                    isActive ? "opacity-80" : "opacity-90"
                  }`}
                />
                <div className="absolute inset-x-0 bottom-0 z-10 p-4 text-[color:var(--bs-tone-text)] md:p-5">
                  <h3 className="font-subheading text-2xl leading-tight text-[color:var(--bs-tone-text)]">
                    {member.name}
                  </h3>
                  <p className="font-label mt-2 text-[10px] font-semibold uppercase leading-5 tracking-[0.12em] text-[color:var(--bs-tone-accent)]">
                    {copy.team.roles[index] ?? member.role}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedMember(member)}
                    className="mt-4 inline-flex items-center gap-2 border border-[color:var(--bs-primary)] bg-[var(--bs-primary)] px-3 py-2 font-label text-[10px] font-semibold uppercase tracking-[0.12em] text-white opacity-100 outline-offset-4 transition duration-300 hover:bg-blue-600 lg:translate-y-2 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-within:translate-y-0 lg:group-focus-within:opacity-100"
                  >
                    {copy.team.more}
                    <ArrowUpRight className="size-3.5" strokeWidth={1.8} />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {selectedMember ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-4 py-8 backdrop-blur-md"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedMember(null);
            }
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={`team-member-${selectedMember.id}-title`}
            initial={reducedMotion ? false : { opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: reducedMotion ? 0 : 0.2 }}
            className="theme-dark max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[var(--bs-radius-control)] border border-[color:var(--bs-tone-border)] bg-[var(--bs-tone-card)] text-[color:var(--bs-tone-text)] shadow-[var(--bs-shadow-soft)]"
          >
            <div className="grid md:grid-cols-[0.78fr_1fr]">
              <div className="relative min-h-[320px] border-b border-[color:var(--bs-tone-border)] md:border-b-0 md:border-r">
                <Image
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  fill
                  sizes="(min-width: 768px) 320px, 100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080E17]/70 to-transparent" />
              </div>

              <div className="relative flex flex-col items-center justify-center p-6 text-center md:p-8">
                <button
                  type="button"
                  aria-label={copy.team.close}
                  onClick={() => setSelectedMember(null)}
                  className="absolute right-4 top-4 flex size-10 items-center justify-center border border-[color:var(--bs-tone-border)] bg-[var(--bs-tone-soft)] text-[color:var(--bs-tone-text)] transition duration-150 hover:border-[color:var(--bs-primary)] hover:bg-[var(--bs-primary)] hover:text-white"
                >
                  <X className="size-4" strokeWidth={1.8} />
                </button>

                <h3
                  id={`team-member-${selectedMember.id}-title`}
                  className="font-subheading max-w-full px-12 text-4xl leading-tight text-[color:var(--bs-tone-text)]"
                >
                  {selectedMember.name}
                </h3>
                <p className="font-label mt-3 text-xs font-semibold uppercase leading-6 tracking-[0.12em] text-[color:var(--bs-tone-accent)]">
                  {copy.team.roles[teamMembers.findIndex((member) => member.id === selectedMember.id)] ?? selectedMember.role}
                </p>
                <p className="mt-6 leading-8 text-[color:var(--bs-tone-muted)]">
                  {copy.team.bios[teamMembers.findIndex((member) => member.id === selectedMember.id)] ?? selectedMember.bio}
                </p>

                {selectedMember.socials.length > 0 ? (
                  <div className="mt-8 flex flex-wrap justify-center gap-2">
                    {selectedMember.socials.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${selectedMember.name} ${social.label}`}
                        className="inline-flex items-center gap-2 border border-[color:var(--bs-tone-border)] bg-[var(--bs-tone-soft)] px-3 py-2 font-label text-[10px] font-semibold uppercase tracking-[0.12em] text-[color:var(--bs-tone-text)] transition duration-150 hover:border-[color:var(--bs-primary)] hover:bg-[var(--bs-primary)] hover:text-white"
                      >
                        <SocialIcon icon={social.icon} className="size-4" />
                        {social.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </section>
  );
}
