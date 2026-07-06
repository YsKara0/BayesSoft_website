"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { SectionIntro } from "@/components/SectionIntro";
import { SocialIcon } from "@/components/SocialIcon";
import { teamMembers, type TeamMember } from "@/data/site";

const accentClasses: Record<TeamMember["accent"], string> = {
  blue: "bg-bayes-blue text-bayes-paper",
  teal: "bg-bayes-teal text-bayes-ink",
  gold: "bg-bayes-sand text-bayes-ink",
  silver: "bg-bayes-silver text-bayes-paper",
  navy: "bg-bayes-navy text-bayes-paper",
};

export function TeamSection() {
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
    <section className="theme-section-primary relative overflow-hidden px-5 py-20 md:px-8 md:py-28">
      <div className="absolute inset-x-0 top-0 h-1 bg-bayes-ink" />
      <div className="texture-lines absolute inset-0 opacity-35" />

      <div className="relative mx-auto max-w-7xl">
        <SectionIntro eyebrow="Ekip" title="Biz Kimiz">
          İsmimiz kurucuların isimlerinin baş harflerinden gelir. Büyük ve
          ölçeklenebilir projelerimizin mimarlarını daha yakından tanıyın
        </SectionIntro>

        <div
          className="mb-7 grid grid-cols-5 border border-bayes-ink bg-bayes-ink"
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
                className={`font-display flex min-h-14 items-center justify-center border-r border-bayes-ink text-4xl leading-none transition duration-300 last:border-r-0 sm:min-h-16 sm:text-5xl md:min-h-20 md:text-6xl ${
                  isActive
                    ? accentClasses[member.accent]
                    : "bg-bayes-paper/80 text-bayes-ink/40 hover:bg-bayes-aqua"
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
                className="group relative isolate aspect-[4/5] overflow-hidden border border-bayes-ink bg-bayes-ink shadow-[0_18px_45px_rgba(6,39,45,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(6,39,45,0.18)] focus-within:-translate-y-1 focus-within:shadow-[0_24px_60px_rgba(6,39,45,0.18)]"
              >
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                  className={`object-cover object-center transition duration-500 group-hover:scale-[1.04] ${
                    isActive
                      ? "grayscale-0 saturate-110"
                      : "grayscale saturate-0 contrast-110 opacity-80"
                  }`}
                  priority={index < 2}
                />

                <div
                  className={`absolute inset-0 bg-gradient-to-t from-bayes-ink via-bayes-ink/30 to-transparent transition duration-300 ${
                    isActive ? "opacity-75" : "opacity-90"
                  }`}
                />
                <div
                  className={`absolute inset-0 transition duration-300 ${
                    isActive ? "bg-bayes-ink/0" : "bg-bayes-ink/25"
                  }`}
                />
                <div className="absolute inset-x-0 bottom-0 z-10 p-4 text-bayes-paper md:p-5">
                  <h3 className="font-display text-2xl leading-tight">
                    {member.name}
                  </h3>
                  <p className="font-label mt-2 text-[10px] font-semibold uppercase leading-5 tracking-[0.12em] text-bayes-mint">
                    {member.role}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedMember(member)}
                    className="mt-4 inline-flex items-center gap-2 border border-bayes-paper/80 bg-bayes-paper px-3 py-2 font-label text-[10px] font-semibold uppercase tracking-[0.12em] text-bayes-ink opacity-100 outline-offset-4 transition duration-300 hover:bg-bayes-mint focus-visible:outline focus-visible:outline-2 focus-visible:outline-bayes-paper lg:translate-y-2 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-within:translate-y-0 lg:group-focus-within:opacity-100"
                  >
                    Daha Fazla
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-bayes-ink/70 px-4 py-8 backdrop-blur-sm"
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
            className="max-h-[90vh] w-full max-w-3xl overflow-y-auto border border-bayes-ink bg-bayes-paper text-bayes-ink shadow-[0_28px_90px_rgba(0,0,0,0.28)]"
          >
            <div className="grid md:grid-cols-[0.78fr_1fr]">
              <div className="relative min-h-[320px] border-b border-bayes-ink md:border-b-0 md:border-r">
                <Image
                  src={selectedMember.image}
                  alt={`${selectedMember.name}, ${selectedMember.role}`}
                  fill
                  sizes="(min-width: 768px) 320px, 100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bayes-ink/55 to-transparent" />
              </div>

              <div className="relative flex flex-col items-center justify-center p-6 text-center md:p-8">
                <button
                  type="button"
                  aria-label="Close team member details"
                  onClick={() => setSelectedMember(null)}
                  className="absolute right-4 top-4 flex size-10 items-center justify-center border border-bayes-ink bg-bayes-paper text-bayes-ink transition duration-150 hover:bg-bayes-ink hover:text-bayes-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bayes-ink"
                >
                  <X className="size-4" strokeWidth={1.8} />
                </button>

                <h3
                  id={`team-member-${selectedMember.id}-title`}
                  className="font-display max-w-full px-12 text-4xl leading-tight text-bayes-ink"
                >
                  {selectedMember.name}
                </h3>
                <p className="font-label mt-3 text-xs font-semibold uppercase leading-6 tracking-[0.12em] text-bayes-blue">
                  {selectedMember.role}
                </p>
                <p className="mt-6 leading-8 text-bayes-silver">
                  {selectedMember.bio}
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
                        className="inline-flex items-center gap-2 border border-bayes-ink bg-bayes-paper px-3 py-2 font-label text-[10px] font-semibold uppercase tracking-[0.12em] text-bayes-ink transition duration-150 hover:bg-bayes-ink hover:text-bayes-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bayes-ink"
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
