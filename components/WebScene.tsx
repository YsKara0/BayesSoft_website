import { CheckSquare2, FolderKanban, LayoutDashboard, Users } from "lucide-react";
import type { Locale } from "@/data/i18n";
import styles from "./WebScene.module.css";

const copy = {
  tr: { sample: "Örnek platform", title: "Çalışma alanı", subtitle: "Projeler, görevler ve ekip tek bir yerde.", nav: ["Genel bakış", "Projeler", "Görevler", "Ekip"], projects: "Projeler", names: ["Kurumsal web platformu", "Müşteri portalı", "Operasyon paneli"], status: ["Devam ediyor", "İncelemede", "Planlandı"], detail: "Seçili görev", task: "Yeni talep akışını gözden geçir", owner: "Sorumlu", due: "Teslim", date: "Bugün", checklist: ["Gereksinimler hazır", "Ekip değerlendirmesi", "Yayın kontrolü"] },
  en: { sample: "Sample platform", title: "Workspace", subtitle: "Projects, tasks and people in one place.", nav: ["Overview", "Projects", "Tasks", "Team"], projects: "Projects", names: ["Corporate web platform", "Customer portal", "Operations panel"], status: ["In progress", "In review", "Planned"], detail: "Selected task", task: "Review the new request flow", owner: "Owner", due: "Due", date: "Today", checklist: ["Requirements ready", "Team review", "Release check"] },
  de: { sample: "Beispielplattform", title: "Arbeitsbereich", subtitle: "Projekte, Aufgaben und Team an einem Ort.", nav: ["Übersicht", "Projekte", "Aufgaben", "Team"], projects: "Projekte", names: ["Unternehmensplattform", "Kundenportal", "Verwaltungsoberfläche"], status: ["In Arbeit", "In Prüfung", "Geplant"], detail: "Ausgewählte Aufgabe", task: "Neuen Anfrageprozess prüfen", owner: "Verantwortlich", due: "Termin", date: "Heute", checklist: ["Anforderungen bereit", "Teamprüfung", "Freigabe prüfen"] },
};

/** Static illustrative platform; no product or interactive controls are implied. */
export function WebScene({ locale }: { locale: Locale }) {
  const text = copy[locale];
  return (
    <div className={styles.platform} aria-hidden="true">
      <aside className={styles.sidebar}>
        <div className={styles.brand}><span>B</span>BayesSoft</div>
        {[LayoutDashboard, FolderKanban, CheckSquare2, Users].map((Icon, index) => <div key={text.nav[index]} className={index === 1 ? styles.active : styles.nav}><Icon />{text.nav[index]}</div>)}
        <div className={styles.team}><span>DA</span><span>EY</span><span>MK</span></div>
      </aside>
      <div className={styles.main}>
        <header className={styles.header}><span>BayesSoft Studio</span><span className={styles.badge}>{text.sample}</span></header>
        <div className={styles.content}>
          <p className={styles.title}>{text.title}</p><p className={styles.subtitle}>{text.subtitle}</p>
          <div className={styles.columns}>
            <div className={styles.projects}>
              <p className={styles.label}>{text.projects}<span>03</span></p>
              {text.names.map((name, index) => <div key={name} className={index === 0 ? styles.selected : styles.row}><FolderKanban /><div><strong>{name}</strong><span>{text.status[index]}</span></div><span>↗</span></div>)}
            </div>
            <div className={styles.detail}>
              <p className={styles.label}>{text.detail}</p><p className={styles.task}>{text.task}</p>
              <div className={styles.metadata}><span>{text.owner}</span><strong>Deniz A.</strong><span>{text.due}</span><strong>{text.date}</strong></div>
              {text.checklist.map((item, index) => <div className={styles.check} key={item}><span>{index === 0 ? "✓" : ""}</span>{item}</div>)}
              <div className={styles.progress}><span /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
