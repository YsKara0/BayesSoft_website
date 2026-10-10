"use client";

import { Bell, CheckSquare2, FolderKanban, LayoutDashboard, Menu, Search, Users } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import styles from "./HeroShowcase.module.css";

const interfaceCopy = {
  tr: {
    demo: "Örnek arayüz",
    overview: "Genel bakış", projects: "Projeler", tasks: "Görevler", team: "Ekip",
    greeting: "Merhaba, Deniz", intro: "Ekibinizin çalışmaları, tek bir yerde.",
    search: "Çalışma alanında ara", active: "Aktif projeler", open: "Açık görevler", members: "Ekip üyeleri",
    projectNames: ["Web sitesi yenileme", "Mobil deneyim", "Servis entegrasyonu"],
    progress: "Devam ediyor", review: "İncelemede", activity: "Son aktiviteler",
    events: ["Ece tasarım dosyasını paylaştı", "Mert yeni bir görev ekledi", "Deniz bir görevi tamamladı"],
    today: "Bugün", myTasks: "Görevlerim", taskNames: ["Tasarım geri bildirimleri", "Mobil ekran kontrolü"],
    completed: "Tamamlanan", time: "Az önce", all: "Tüm projeler", nav: ["Ana sayfa", "Görevler", "Ekip"],
  },
  en: {
    demo: "Sample interface",
    overview: "Overview", projects: "Projects", tasks: "Tasks", team: "Team",
    greeting: "Hello, Deniz", intro: "Your team's work, in one place.",
    search: "Search workspace", active: "Active projects", open: "Open tasks", members: "Team members",
    projectNames: ["Website refresh", "Mobile experience", "Service integration"],
    progress: "In progress", review: "In review", activity: "Recent activity",
    events: ["Ece shared a design file", "Mert added a new task", "Deniz completed a task"],
    today: "Today", myTasks: "My tasks", taskNames: ["Design feedback", "Mobile screen review"],
    completed: "Completed", time: "Just now", all: "All projects", nav: ["Home", "Tasks", "Team"],
  },
  de: {
    demo: "Beispielansicht",
    overview: "Übersicht", projects: "Projekte", tasks: "Aufgaben", team: "Team",
    greeting: "Hallo, Deniz", intro: "Die Arbeit Ihres Teams an einem Ort.",
    search: "Arbeitsbereich durchsuchen", active: "Aktive Projekte", open: "Offene Aufgaben", members: "Teammitglieder",
    projectNames: ["Website-Erneuerung", "Mobiles Erlebnis", "Service-Integration"],
    progress: "In Arbeit", review: "In Prüfung", activity: "Letzte Aktivitäten",
    events: ["Ece hat einen Entwurf geteilt", "Mert hat eine Aufgabe erstellt", "Deniz hat eine Aufgabe erledigt"],
    today: "Heute", myTasks: "Meine Aufgaben", taskNames: ["Design-Feedback", "Mobile Ansichten prüfen"],
    completed: "Abgeschlossen", time: "Gerade eben", all: "Alle Projekte", nav: ["Start", "Aufgaben", "Team"],
  },
};

const projectProgress = [72, 48, 90];

/** Illustrative interfaces, not an interactive or commercially available product. */
export function HeroShowcase() {
  const { locale } = useLanguage();
  const copy = interfaceCopy[locale];
  const navigation = [
    [LayoutDashboard, copy.overview], [FolderKanban, copy.projects],
    [CheckSquare2, copy.tasks], [Users, copy.team],
  ] as const;
  const stats = [
    [FolderKanban, copy.active, "3"],
    [CheckSquare2, copy.open, "8"],
    [Users, copy.members, "6"],
  ] as const;

  return (
    <>
      <div className={styles.showcase} aria-hidden="true">
        <div className={styles.floor} />
        <div className={styles.webPanel}>
          <div className={styles.webScreen}>
              <div className={styles.dashboard}>
                <aside className={styles.sidebar}>
                  <div className={styles.brand}><span className={styles.brandMark}>B</span>BayesSoft</div>
                  <div className={styles.workspace}>BayesSoft Studio</div>
                  <div className={styles.navigation}>
                    {navigation.map(([Icon, label], index) => (
                      <div key={label} className={index === 0 ? styles.navActive : undefined}><Icon />{label}</div>
                    ))}
                  </div>
                  <div className={styles.sidebarTeam}><div className={styles.avatarStack}><span>DA</span><span>EY</span><span>MK</span></div>{copy.team}</div>
                </aside>
                <div className={styles.webMain}>
                  <div className={styles.toolbar}>
                    <span className={styles.search}><Search />{copy.search}</span>
                    <span className={styles.demoBadge}>{copy.demo}</span><Bell /><span className={styles.avatar}>DA</span>
                  </div>
                  <div className={styles.webContent}>
                    <div className={styles.welcome}><div><p className={styles.screenTitle}>{copy.overview}</p><p className={styles.screenMuted}>{copy.intro}</p></div><span className={styles.date}>{copy.today}</span></div>
                    <div className={styles.stats}>
                      {stats.map(([Icon, label, value]) => (
                        <div className={styles.stat} key={label}>
                          <Icon /><span>{label}</span><strong>{value}</strong>
                        </div>
                      ))}
                    </div>
                    <div className={styles.webColumns}>
                      <div className={styles.panel}>
                        <div className={styles.panelHeading}>{copy.projects}<span>{copy.all} ↗</span></div>
                        {copy.projectNames.map((name, index) => <div className={styles.projectRow} key={name}><span className={styles.projectIcon}><FolderKanban /></span><div><strong>{name}</strong><span>{index === 2 ? copy.review : copy.progress}</span><div className={styles.progressTrack}><span style={{ width: `${projectProgress[index]}%` }} /></div></div><span className={styles.screenMuted}>{projectProgress[index]}%</span></div>)}
                      </div>
                      <div className={styles.panel}>
                        <div className={styles.panelHeading}>{copy.activity}</div>
                        {copy.events.map((event, index) => <div className={styles.activityRow} key={event}><span className={styles.avatar}>{["EY", "MK", "DA"][index]}</span><div>{event}<span>{copy.time}</span></div></div>)}
                      </div>
                    </div>
                    <div className={styles.webSummary}><CheckSquare2 />{copy.completed}<strong>12</strong><div className={styles.avatarStack}><span>DA</span><span>EY</span><span>MK</span></div></div>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className={styles.phone}>
          <span className={styles.sideButton} />
          <div className={styles.phoneScreen}>
            <span className={styles.island} />
            <div className={styles.mobileApp}>
              <div className={styles.mobileHeader}><Menu /><strong>BayesSoft</strong><span className={styles.avatar}>DA</span></div>
              <span className={styles.mobileDemo}>{copy.demo}</span>
              <p className={styles.mobileGreeting}>{copy.greeting}</p>
              <p className={styles.mobileTitle}>{copy.overview}</p>
              <div className={styles.mobileStats}><div><FolderKanban /><strong>3</strong><span>{copy.projects}</span></div><div><CheckSquare2 /><strong>8</strong><span>{copy.tasks}</span></div></div>
              <div className={styles.mobileSectionTitle}>{copy.myTasks}<span>{copy.today}</span></div>
              {copy.taskNames.map((task, index) => <div className={styles.mobileTask} key={task}><span className={index === 0 ? styles.taskCheck : styles.taskOpen}>{index === 0 ? "✓" : ""}</span><div>{task}<span>{copy.projectNames[index]}</span></div></div>)}
              <div className={styles.mobileSectionTitle}>{copy.projects}</div>
              <div className={styles.mobileProject}><FolderKanban /><strong>{copy.projectNames[1]}</strong><div className={styles.progressTrack}><span style={{ width: "48%" }} /></div><span>{copy.progress} · 48%</span></div>
              <div className={styles.mobileActivity}><span className={styles.avatar}>EY</span><span>{copy.events[0]}</span></div>
              <div className={styles.mobileNav}>{[LayoutDashboard, CheckSquare2, Users].map((Icon, index) => <div key={copy.nav[index]}><Icon /><span>{copy.nav[index]}</span></div>)}</div>
            </div>
            <span className={styles.homeIndicator} />
          </div>
        </div>
      </div>
    </>
  );
}
