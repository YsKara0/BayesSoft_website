"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { SectionIntro } from "@/components/SectionIntro";
import { SocialIcon } from "@/components/SocialIcon";
import { teamMembers, type TeamMember } from "@/data/site";
import { useLanguage } from "@/components/LanguageProvider";

const accentClasses: Record<TeamMember["accent"], string> = {
  blue: "bg-bayes-blue text-white shadow-[0_0_15px_#0066FF]",
  teal: "bg-bayes-blue text-white shadow-[0_0_15px_#0066FF]",
  gold: "bg-bayes-cobalt text-white shadow-[0_0_15px_#0052CC]",
  silver: "bg-white/10 text-white border-white/30",
  navy: "bg-[#101B2A] text-white border-bayes-blue/40",
};

export function TeamSection() {
  const { copy } = useLanguage();
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
    <section id="ekip" className="relative overflow-hidden border-b border-white/10 bg-[#060A10] px-5 py-20 text-white md:px-8 md:py-28">
      <div className="absolute inset-x-0 top-0 h-1 bg-bayes-blue shadow-[0_0_10px_#0066FF]" />
      <div className="texture-lines absolute inset-0 opacity-25" />

      <div className="relative mx-auto max-w-7xl">
        <SectionIntro eyebrow={copy.team.eyebrow} title={copy.team.title}>
          {copy.team.intro}
        </SectionIntro>

        <div
          className="mb-7 grid grid-cols-5 overflow-hidden rounded-none border border-white/15 bg-white/5"
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
                className={`font-display flex min-h-14 items-center justify-center border-r border-white/15 text-4xl leading-none transition duration-300 last:border-r-0 sm:min-h-16 sm:text-5xl md:min-h-20 md:text-6xl ${
                  isActive
                    ? accentClasses[member.accent]
                    : "bg-white/[0.03] text-white/40 hover:bg-white/[0.08] hover:text-white"
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
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.28, delay: index * 0.04 }}
                onFocus={() => setActiveMemberId(member.id)}
                onMouseEnter={() => setActiveMemberId(member.id)}
                className="group relative isolate aspect-[4/5] overflow-hidden rounded-none border border-white/15 bg-[#0C1420] shadow-premium-sm transition duration-300 hover:-translate-y-1 hover:border-bayes-blue/70 hover:shadow-[0_0_30px_rgba(0,102,255,0.25)] focus-within:-translate-y-1"
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
                <div className="absolute inset-x-0 bottom-0 z-10 p-4 text-white md:p-5">
                  <h3 className="font-subheading text-2xl leading-tight text-white">
                    {member.name}
                  </h3>
                  <p className="font-label mt-2 text-[10px] font-semibold uppercase leading-5 tracking-[0.12em] text-bayes-blue">
                    {copy.team.roles[index] ?? member.role}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedMember(member)}
                    className="mt-4 inline-flex items-center gap-2 border border-bayes-blue bg-bayes-blue px-3 py-2 font-label text-[10px] font-semibold uppercase tracking-[0.12em] text-white opacity-100 outline-offset-4 transition duration-300 hover:bg-blue-600 lg:translate-y-2 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-within:translate-y-0 lg:group-focus-within:opacity-100"
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
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-none border border-white/20 bg-[#080E17] text-white shadow-premium-lg"
          >
            <div className="grid md:grid-cols-[0.78fr_1fr]">
              <div className="relative min-h-[320px] border-b border-white/15 md:border-b-0 md:border-r">
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
                  className="absolute right-4 top-4 flex size-10 items-center justify-center border border-white/20 bg-white/5 text-white transition duration-150 hover:border-bayes-blue hover:bg-bayes-blue hover:text-white"
                >
                  <X className="size-4" strokeWidth={1.8} />
                </button>

                <h3
                  id={`team-member-${selectedMember.id}-title`}
                  className="font-subheading max-w-full px-12 text-4xl leading-tight text-white"
                >
                  {selectedMember.name}
                </h3>
                <p className="font-label mt-3 text-xs font-semibold uppercase leading-6 tracking-[0.12em] text-bayes-blue">
                  {copy.team.roles[teamMembers.findIndex((member) => member.id === selectedMember.id)] ?? selectedMember.role}
                </p>
                <p className="mt-6 leading-8 text-bayes-silver">
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
                        className="inline-flex items-center gap-2 border border-white/20 bg-white/5 px-3 py-2 font-label text-[10px] font-semibold uppercase tracking-[0.12em] text-white transition duration-150 hover:border-bayes-blue hover:bg-bayes-blue hover:text-white"
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
