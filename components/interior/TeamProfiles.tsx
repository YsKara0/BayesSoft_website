"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { SocialIcon } from "@/components/SocialIcon";
import { teamMembers } from "@/data/site";
import styles from "./interior.module.css";

export function TeamProfiles() {
  const { copy } = useLanguage();
  const [selected, setSelected] = useState<number | null>(null);
  const [active, setActive] = useState<string | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (selected === null || !dialog.current) return;
    const element = dialog.current;
    const trigger = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
      if (trigger?.isConnected) trigger.focus({ preventScroll: true });
    };
  }, [selected]);

  const member = selected === null ? null : teamMembers[selected];
  return <section id="ekip" className={styles.team} aria-labelledby="team-title">
    <div className={styles.sectionHeading}>
      <p className={styles.eyebrow}>{copy.team.eyebrow}</p>
      <div><h2 id="team-title">{copy.team.title}</h2><p>{copy.team.intro}</p></div>
    </div>
    <div className={styles.letters} aria-label="BAYES" onMouseLeave={() => setActive(null)}>
      {teamMembers.map(person => <button key={person.id} type="button"
        aria-label={`${person.name} ${person.letter}`} aria-pressed={active === person.id}
        onFocus={() => setActive(person.id)} onMouseEnter={() => setActive(person.id)}
        onClick={() => setActive(person.id)}>{person.letter}</button>)}
    </div>
    <div className={styles.people} onMouseLeave={() => setActive(null)}>
      {teamMembers.map((person, index) => <article key={person.id} data-active={active === person.id}
        onMouseEnter={() => setActive(person.id)} onFocus={() => setActive(person.id)}>
        <div className={styles.portrait}>
          <Image src={person.image} alt={`${person.name}, ${person.role}`} fill
            sizes="(min-width: 1100px) 19vw, (min-width: 700px) 30vw, 46vw" />
        </div>
        <h3>{person.name}</h3><p>{copy.team.roles[index] ?? person.role}</p>
        <button type="button" className={styles.profileButton} aria-haspopup="dialog"
          aria-label={`${person.name} — ${copy.team.more}`} onClick={() => setSelected(index)}>
          {copy.team.more}<ArrowUpRight size={16} aria-hidden="true" />
        </button>
      </article>)}
    </div>
    {member && selected !== null && <dialog ref={dialog} className={styles.dialog}
      aria-labelledby={`profile-${member.id}`} aria-describedby={`bio-${member.id}`}
      onKeyDown={event => {
        if (event.key !== "Tab") return;
        const controls = event.currentTarget.querySelectorAll<HTMLElement>("button, a[href]");
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault(); last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault(); first?.focus();
        }
      }}
      onCancel={event => { event.preventDefault(); setSelected(null); }}
      onClose={() => setSelected(null)}
      onClick={event => { if (event.target === event.currentTarget) {
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) setSelected(null);
      } }}>
      <button className={styles.close} type="button" aria-label={copy.team.close} onClick={() => setSelected(null)}>
        <X size={22} aria-hidden="true" />
      </button>
      <div className={styles.dialogPortrait}><Image src={member.image} alt={member.name} fill sizes="(min-width: 700px) 300px, 80vw" /></div>
      <div className={styles.bio}>
        <h2 id={`profile-${member.id}`}>{member.name}</h2>
        <p className={styles.role}>{copy.team.roles[selected] ?? member.role}</p>
        <p id={`bio-${member.id}`}>{copy.team.bios[selected] ?? member.bio}</p>
        <div className={styles.socials}>{member.socials.map(social => <a key={social.label} href={social.href}
          target="_blank" rel="noreferrer" aria-label={`${member.name} ${social.label}`}>
          <SocialIcon icon={social.icon} className="size-4" />{social.label}
        </a>)}</div>
      </div>
    </dialog>}
  </section>;
}
