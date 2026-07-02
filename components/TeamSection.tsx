"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionIntro } from "@/components/SectionIntro";
import { SocialIcon } from "@/components/SocialIcon";
import { teamMembers } from "@/data/site";

const accentMap = {
  blue: {
    glow: "shadow-[0_28px_90px_rgba(30,62,98,0.38)]",
    gradient: "from-bayes-blue/92 via-bayes-navy/68 to-transparent",
    text: "text-bayes-teal"
  },
  teal: {
    glow: "shadow-[0_28px_90px_rgba(81,214,202,0.25)]",
    gradient: "from-bayes-teal/82 via-bayes-blue/58 to-transparent",
    text: "text-bayes-teal"
  },
  gold: {
    glow: "shadow-[0_28px_90px_rgba(199,163,90,0.24)]",
    gradient: "from-bayes-gold/78 via-bayes-blue/54 to-transparent",
    text: "text-bayes-gold"
  },
  silver: {
    glow: "shadow-[0_28px_90px_rgba(221,231,240,0.18)]",
    gradient: "from-bayes-silver/62 via-bayes-blue/52 to-transparent",
    text: "text-bayes-silver"
  },
  navy: {
    glow: "shadow-[0_28px_90px_rgba(0,34,68,0.44)]",
    gradient: "from-bayes-navy/95 via-bayes-blue/72 to-transparent",
    text: "text-bayes-teal"
  }
};

export function TeamSection() {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  const activeMember = hoveredMember ?? selectedMember;
  const bayesLetters = useMemo(() => teamMembers.map((member) => member.letter).join(""), []);

  return (
    <section
      id="team"
      className="theme-section-primary relative overflow-hidden px-5 py-24 md:px-8 md:py-32"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
      <div className="absolute left-1/2 top-16 h-64 w-[min(900px,92vw)] -translate-x-1/2 rounded-full bg-bayes-blue/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <SectionIntro eyebrow="Team" title="BAYES is built from the people behind it.">
          The name Bayessoft carries the initials of the team: Batuhan, Ahmet
          Buğrahan, Yavuz, Enes, and Sefa. Hover a card to bring that member
          into color while the rest of the system holds back.
        </SectionIntro>

        <div className="mb-8 grid grid-cols-5 gap-2 rounded-md border border-white/10 bg-white/[0.035] p-2">
          {teamMembers.map((member) => {
            const isActive = activeMember === member.name;
            const isDefaultActive = member.name === teamMembers[0].name;

            const buttonStyles = (() => {
              if (activeMember) {
                return isActive
                  ? "bg-bayes-frost text-bayes-ink"
                  : "text-bayes-silver/42 hover:text-bayes-frost";
              } else {
                if (isDefaultActive) {
                  return "bg-bayes-frost text-bayes-ink lg:bg-transparent lg:text-bayes-silver/42 lg:hover:text-bayes-frost";
                } else {
                  return "text-bayes-silver/42 hover:text-bayes-frost";
                }
              }
            })();

            return (
              <button
                key={member.letter}
                type="button"
                onMouseEnter={() => setHoveredMember(member.name)}
                onMouseLeave={() => setHoveredMember(null)}
                onFocus={() => setHoveredMember(member.name)}
                onBlur={() => setHoveredMember(null)}
                onClick={() => setSelectedMember(member.name)}
                className={`relative min-h-14 rounded-md text-2xl font-semibold transition md:text-3xl ${buttonStyles}`}
                aria-label={`Select ${member.name}`}
              >
                {member.letter}
              </button>
            );
          })}
        </div>

        <div className="grid gap-4 lg:grid-cols-5">
          {teamMembers.map((member, index) => {
            const isActive = activeMember === member.name;
            const isMuted = activeMember !== null && activeMember !== member.name;
            const accent = accentMap[member.accent];
            const isDefaultActive = index === 0;
            const isCardVisibleOnMobile = activeMember ? isActive : isDefaultActive;

            const cardStyles = (() => {
              let classes = "group relative cursor-pointer flex-col overflow-hidden rounded-md border transition duration-500 focus:outline-none focus:ring-2 focus:ring-bayes-teal/45";
              
              // 1. Visibility class: flex on mobile if active/default, otherwise hidden on mobile and flex on lg
              classes += isCardVisibleOnMobile ? " flex" : " hidden lg:flex";

              // 2. Active border and shadow (glow)
              if (activeMember) {
                if (isActive) {
                  classes += ` border-bayes-teal/45 ${accent.glow}`;
                } else {
                  classes += " border-white/10 hover:border-white/20";
                }
              } else {
                if (isDefaultActive) {
                  classes += ` border-bayes-teal/45 ${accent.glow} lg:border-white/10 lg:hover:border-white/20 lg:shadow-none`;
                } else {
                  classes += " border-white/10 hover:border-white/20";
                }
              }

              // 3. Muted opacity
              if (activeMember) {
                if (isMuted) {
                  classes += " opacity-[0.72]";
                } else {
                  classes += " opacity-100";
                }
              } else {
                classes += " opacity-100";
              }

              return classes;
            })();

            const imageStyles = (() => {
              let classes = "object-cover object-center transition duration-700 ease-out";
              if (activeMember) {
                classes += isActive
                  ? " scale-105 grayscale-0 saturate-125"
                  : " scale-100 grayscale contrast-125 saturate-0";
              } else {
                if (isDefaultActive) {
                  classes += " scale-105 grayscale-0 saturate-125 lg:scale-100 lg:grayscale lg:contrast-125 lg:saturate-0";
                } else {
                  classes += " scale-100 grayscale contrast-125 saturate-0";
                }
              }
              return classes;
            })();

            const gradientStyles = (() => {
              let classes = `absolute inset-0 bg-gradient-to-t ${accent.gradient} transition duration-700`;
              if (activeMember) {
                classes += isActive ? " opacity-[0.88]" : " opacity-30";
              } else {
                if (isDefaultActive) {
                  classes += " opacity-[0.88] lg:opacity-30";
                } else {
                  classes += " opacity-30";
                }
              }
              return classes;
            })();

            const bgLetterStyles = (() => {
              let classes = "absolute -bottom-7 right-3 text-[8.5rem] font-semibold leading-none text-white transition-all duration-700";
              if (activeMember) {
                classes += isActive ? " opacity-[0.28] translate-y-[-8px]" : " opacity-[0.13] translate-y-0";
              } else {
                if (isDefaultActive) {
                  classes += " opacity-[0.28] translate-y-[-8px] lg:opacity-[0.13] lg:translate-y-0";
                } else {
                  classes += " opacity-[0.13] translate-y-0";
                }
              }
              return classes;
            })();

            const arrowStyles = (() => {
              let classes = "size-4 transition duration-300";
              if (activeMember) {
                classes += isActive
                  ? " translate-x-0.5 -translate-y-0.5 text-bayes-teal"
                  : " text-bayes-silver/42";
              } else {
                if (isDefaultActive) {
                  classes += " translate-x-0.5 -translate-y-0.5 text-bayes-teal lg:translate-x-0 lg:translate-y-0 lg:text-bayes-silver/42";
                } else {
                  classes += " text-bayes-silver/42";
                }
              }
              return classes;
            })();

            return (
              <motion.article
                layout
                key={member.name}
                onMouseEnter={() => setHoveredMember(member.name)}
                onMouseLeave={() => setHoveredMember(null)}
                onFocus={() => setHoveredMember(member.name)}
                onBlur={() => setHoveredMember(null)}
                onClick={() => setSelectedMember(member.name)}
                tabIndex={0}
                role="button"
                aria-pressed={selectedMember === member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                whileHover={{ y: -8 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                  layout: { duration: 0.42, ease: [0.22, 1, 0.36, 1] }
                }}
                className={cardStyles}
              >
                <div className="relative aspect-[4/5] min-h-[300px] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, 100vw"
                    className={imageStyles}
                    priority={index < 2}
                  />
                  <div className={gradientStyles} />
                  <div className="absolute inset-0 bg-gradient-to-t from-bayes-ink via-bayes-ink/12 to-transparent" />

                  <span aria-hidden="true" className={bgLetterStyles}>
                    {member.letter}
                  </span>

                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-md border border-white/12 bg-black/20 px-3 py-1.5 backdrop-blur-md">
                    <span className={`text-sm font-semibold ${accent.text}`}>{member.letter}</span>
                    <span className="h-3 w-px bg-white/18" />
                    <span className="text-xs text-bayes-silver/76">{bayesLetters}</span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div>
                    <h3 className="text-xl font-semibold leading-tight text-bayes-frost">
                      {member.name}
                    </h3>
                    <p className={`mt-2 text-sm font-medium ${accent.text}`}>{member.role}</p>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-bayes-silver/68">{member.bio}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-white/10 bg-black/12 px-2.5 py-1 text-xs text-bayes-silver/72"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-6">
                    <div className="flex gap-2">
                      {member.socials.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          aria-label={`${member.name} ${social.label}`}
                          onClick={(event) => event.stopPropagation()}
                          className="flex size-9 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-bayes-silver/76 transition hover:border-bayes-teal/45 hover:text-bayes-frost"
                        >
                          <SocialIcon icon={social.icon} className="size-4" />
                        </a>
                      ))}
                    </div>
                    <ArrowUpRight className={arrowStyles} />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
