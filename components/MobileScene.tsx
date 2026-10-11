import { Bell, CheckSquare2, FolderKanban, LayoutDashboard, Users } from "lucide-react";
import type { Locale } from "@/data/i18n";
import styles from "./MobileScene.module.css";

const copy = {
  tr: { sample: "Örnek uygulama", notification: "Yeni görev atandı", source: "Web çalışma alanından", task: "Yeni talep akışını gözden geçir", project: "Kurumsal web platformu", detail: "Görev detayı", status: "Devam ediyor", owner: "Sorumlu", due: "Teslim", today: "Bugün", checklist: ["Gereksinimler hazır", "Ekip değerlendirmesi", "Yayın kontrolü"], nav: ["Ana sayfa", "Görevler", "Ekip"] },
  en: { sample: "Sample app", notification: "New task assigned", source: "From the web workspace", task: "Review the new request flow", project: "Corporate web platform", detail: "Task detail", status: "In progress", owner: "Owner", due: "Due", today: "Today", checklist: ["Requirements ready", "Team review", "Release check"], nav: ["Home", "Tasks", "Team"] },
  de: { sample: "Beispiel-App", notification: "Neue Aufgabe zugewiesen", source: "Aus dem Web-Arbeitsbereich", task: "Neuen Anfrageprozess prüfen", project: "Unternehmensplattform", detail: "Aufgabendetails", status: "In Arbeit", owner: "Verantwortlich", due: "Termin", today: "Heute", checklist: ["Anforderungen bereit", "Teamprüfung", "Freigabe prüfen"], nav: ["Start", "Aufgaben", "Team"] },
};

export function MobileScene({ locale }: { locale: Locale }) {
  const text = copy[locale];
  return (
    <div className={styles.phone} aria-hidden="true">
      <div className={styles.screen}>
        <span className={styles.island} />
        <div className={styles.app}>
          <div className={styles.brand}><span>B</span><strong>BayesSoft</strong><Bell /></div>
          <p className={styles.sample}>{text.sample}</p>
          <div className={styles.notification}><Bell /><div><strong>{text.notification}</strong><span>{text.source}</span></div></div>
          <p className={styles.heading}>{text.detail}</p>
          <div className={styles.card}>
            <p className={styles.project}><FolderKanban />{text.project}</p>
            <p className={styles.task}>{text.task}</p>
            <span className={styles.status}>{text.status}</span>
            <div className={styles.meta}><span>{text.owner}</span><strong>Deniz A.</strong><span>{text.due}</span><strong>{text.today}</strong></div>
            {text.checklist.map((item, index) => <div className={styles.check} key={item}><span>{index === 0 ? "✓" : ""}</span>{item}</div>)}
          </div>
          <div className={styles.nav}>{[LayoutDashboard, CheckSquare2, Users].map((Icon, index) => <div key={text.nav[index]}><Icon /><span>{text.nav[index]}</span></div>)}</div>
        </div>
        <span className={styles.homeIndicator} />
      </div>
    </div>
  );
}
