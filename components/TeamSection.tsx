"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionIntro } from "@/components/SectionIntro";
import { SocialIcon } from "@/components/SocialIcon";
import { teamMembers } from "@/data/site";

export function TeamSection() {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);
  const [selectedMember, setSelectedMember] = useState(teamMembers[0]?.name ?? null);
  const activeMemberName = hoveredMember ?? selectedMember ?? teamMembers[0]?.name;

  return (
    <section className="theme-section-primary relative overflow-hidden px-5 py-20 md:px-8 md:py-28">
      <div className="absolute inset-x-0 top-0 h-1 bg-bayes-ink" />
      <div className="texture-lines absolute inset-0 opacity-35" />

      <div className="relative mx-auto max-w-7xl">
        <SectionIntro eyebrow="Ekip" title="B A Y E S">
          BayesSoft ismi ekibin baş harflerinden gelir: Batuhan, Ahmet Buğrahan, Yavuz,
          Enes ve Sefa. Kartlar aynı satırda, her üye kendi harfiyle temsil edilir.
        </SectionIntro>

        <div className="mb-8 grid grid-cols-5 border border-bayes-ink bg-bayes-ink">
          {teamMembers.map((member) => {
            const active = activeMemberName === member.name;

            return (
              <button
                key={member.name}
                type="button"
                onMouseEnter={() => setHoveredMember(member.name)}
                onMouseLeave={() => setHoveredMember(null)}
                onFocus={() => setHoveredMember(member.name)}
                onBlur={() => setHoveredMember(null)}
                onClick={() => setSelectedMember(member.name)}
                className={`min-h-14 border-r border-bayes-ink font-display text-3xl leading-none transition duration-100 last:border-r-0 md:min-h-20 md:text-6xl ${
                  active ? "bg-bayes-ink text-bayes-paper" : "bg-bayes-paper text-bayes-ink hover:bg-bayes-mint"
                }`}
                aria-label={`${member.name} profilini seç`}
              >
                {member.letter}
              </button>
            );
          })}
        </div>

        <div className="grid gap-px border border-bayes-ink bg-bayes-ink md:grid-cols-2 lg:grid-cols-5">
          {teamMembers.map((member, index) => {
            const active = activeMemberName === member.name;

            return (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.28, delay: index * 0.03 }}
                onMouseEnter={() => setHoveredMember(member.name)}
                onMouseLeave={() => setHoveredMember(null)}
                onFocus={() => setHoveredMember(member.name)}
                onBlur={() => setHoveredMember(null)}
                onClick={() => setSelectedMember(member.name)}
                tabIndex={0}
                role="button"
                aria-pressed={active}
                className={`group flex min-h-[520px] cursor-pointer flex-col bg-bayes-paper transition duration-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bayes-ink lg:min-h-[560px] ${
                  active ? "text-bayes-ink" : "text-bayes-ink hover:bg-bayes-aqua"
                }`}
              >
                <div className="relative aspect-[4/5] min-h-[220px] overflow-hidden border-b border-bayes-ink lg:min-h-[250px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 768px) 50vw, 100vw"
                    className={`object-cover object-center transition duration-300 ${
                      active ? "grayscale-0 saturate-110" : "grayscale contrast-125 group-hover:grayscale-0"
                    }`}
                    priority={index < 2}
                  />
                  <div className="absolute left-3 top-3 flex size-11 items-center justify-center border border-bayes-ink bg-bayes-paper">
                    <span className="font-display text-3xl leading-none">{member.letter}</span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-4">
                  <h3 className="font-display text-2xl leading-tight lg:text-[1.65rem]">{member.name}</h3>
                  <p className="font-label mt-3 text-[10px] font-semibold uppercase leading-5 tracking-[0.1em] text-bayes-blue">
                    {member.role}
                  </p>
                  <p className="mt-4 line-clamp-4 text-sm leading-7 text-bayes-silver">{member.bio}</p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {member.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="border border-bayes-ink px-2 py-1 font-label text-[9px] uppercase tracking-[0.08em]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-6">
                    <div className="flex gap-1.5">
                      {member.socials.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          aria-label={`${member.name} ${social.label}`}
                          onClick={(event) => event.stopPropagation()}
                          className="flex size-9 items-center justify-center border border-bayes-ink bg-bayes-paper text-bayes-ink transition duration-100 hover:bg-bayes-ink hover:text-bayes-paper"
                        >
                          <SocialIcon icon={social.icon} className="size-4" />
                        </a>
                      ))}
                    </div>
                    <ArrowUpRight
                      className={`size-5 transition duration-100 ${
                        active ? "translate-x-0.5 -translate-y-0.5" : ""
                      }`}
                      strokeWidth={1.5}
                    />
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
