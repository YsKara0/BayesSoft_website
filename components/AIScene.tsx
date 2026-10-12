import { ArrowUpRight, Check, Inbox, ListChecks } from "lucide-react";
import { heroFont } from "@/components/heroFont";
import type { Locale } from "@/data/i18n";
import styles from "./AIScene.module.css";

const copy = {
  tr: {
    example: "Örnek arayüz", inbox: "Gelen talepler", titles: ["Forma öncelik ekleme", "Bildirim tercihleri", "Ekip erişimleri"],
    people: ["Deniz A.", "Ece K.", "Can Y."], channel: "Müşteri talebi", selected: "Seçili talep", suggestion: "AI taslağı",
    summary: "Talep formuna öncelik alanı eklenmesi isteniyor.", categoryLabel: "Kategori", category: "Ürün geliştirme", priorityLabel: "Öncelik önerisi", priority: "Normal",
    review: "İnsan onayı", pending: "Onay bekliyor", reviewer: "İnceleyen", actions: "Önerilen aksiyonlar", tasks: ["Form güncellemesi için görev aç", "Talep sahibine dönüş yap"],
    approve: "İncele ve onayla", note: "Görev, insan onayından sonra oluşturulur.",
  },
  en: {
    example: "Sample interface", inbox: "Incoming requests", titles: ["Add form priority", "Notification preferences", "Team access"],
    people: ["Deniz A.", "Ece K.", "Can Y."], channel: "Customer request", selected: "Selected request", suggestion: "AI draft",
    summary: "A priority field is requested for the intake form.", categoryLabel: "Category", category: "Product development", priorityLabel: "Suggested priority", priority: "Normal",
    review: "Human approval", pending: "Awaiting review", reviewer: "Reviewer", actions: "Suggested actions", tasks: ["Create a form update task", "Reply to the requester"],
    approve: "Review and approve", note: "Task creation requires human approval.",
  },
  de: {
    example: "Beispieloberfläche", inbox: "Eingehende Anfragen", titles: ["Priorität im Formular", "Benachrichtigungen", "Teamzugriff"],
    people: ["Deniz A.", "Ece K.", "Can Y."], channel: "Kundenanfrage", selected: "Ausgewählte Anfrage", suggestion: "KI-Entwurf",
    summary: "Ein Prioritätsfeld für das Anfrageformular wird gewünscht.", categoryLabel: "Kategorie", category: "Produktentwicklung", priorityLabel: "Prioritätsvorschlag", priority: "Normal",
    review: "Menschliche Freigabe", pending: "Prüfung ausstehend", reviewer: "Prüfung durch", actions: "Vorgeschlagene Aktionen", tasks: ["Aufgabe zur Formularänderung", "Anfragende Person informieren"],
    approve: "Prüfen und freigeben", note: "Aufgaben entstehen erst nach menschlicher Freigabe.",
  },
};

export function AIScene({ locale }: { locale: Locale }) {
  const text = copy[locale];
  return (
    <div className={`${styles.studio} ${heroFont.variable}`}>
      <div className={styles.toolbar}>
        <div className={styles.brand}><ListChecks aria-hidden="true" /><span>AI Workflow Studio</span></div>
        <span className={styles.example}>{text.example}</span>
      </div>
      <div className={styles.workspace}>
        <div className={styles.inbox}>
          <h3 className={styles.sectionTitle}><Inbox aria-hidden="true" />{text.inbox}<span className={styles.count}>3</span></h3>
          <div className={styles.requests}>
            {text.titles.map((title, index) => (
              <div key={title} className={`${styles.request} ${index === 0 ? styles.selected : ""}`}>
                <span className={styles.requestId}>0{index + 1}</span>
                <strong>{title}</strong>
                <span className={styles.sender}>{text.people[index]} · {text.channel}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.analysis}>
          <div className={styles.analysisHeading}><span className={styles.label}>{text.selected} / 01</span><span className={styles.draft}>{text.suggestion}</span></div>
          <h3 className={styles.summaryTitle}>{text.titles[0]}</h3>
          <p className={styles.summary}>{text.summary}</p>
          <dl className={styles.metadata}>
            <div><dt>{text.categoryLabel}</dt><dd>{text.category}</dd></div>
            <div><dt>{text.priorityLabel}</dt><dd><span className={styles.priorityDot} />{text.priority}</dd></div>
          </dl>
        </div>
        <div className={styles.review}>
          <h3 className={styles.sectionTitle}>{text.review}</h3>
          <div className={styles.reviewer}><span className={styles.avatar}>DA</span><div><span className={styles.label}>{text.reviewer}</span><strong>Deniz A.</strong></div><span className={styles.pending}>{text.pending}</span></div>
          <p className={styles.label}>{text.actions}</p>
          <div className={styles.actions}>{text.tasks.map(task => <div key={task}><Check aria-hidden="true" /><span>{task}</span></div>)}</div>
          <span className={styles.approvalPreview}>{text.approve}<ArrowUpRight aria-hidden="true" /></span>
          <p className={styles.note}>{text.note}</p>
        </div>
      </div>
    </div>
  );
}
