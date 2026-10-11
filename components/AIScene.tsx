import { ArrowRight, CheckSquare2, Inbox, Sparkles, UserCheck } from "lucide-react";
import { heroFont } from "@/components/heroFont";
import type { Locale } from "@/data/i18n";
import styles from "./AIScene.module.css";

const copy = {
  tr: { example: "Örnek AI iş akışı", titles: ["Gelen talep", "AI önerisi", "İnsan onayı"], request: "Talep formuna bir öncelik alanı ekleyebilir miyiz?", source: "Müşteri talebi", summary: "Talep formu güncellemesi", category: "Ürün geliştirme", suggested: "Özet ve kategori önerisi", approval: "Ekibiniz inceler ve onaylar", task: "Form güncellemesini planla", result: "Onay sonrası görev oluşturulur", owner: "Sorumlu: Deniz A." },
  en: { example: "Sample AI workflow", titles: ["Incoming request", "AI suggestion", "Human approval"], request: "Could we add a priority field to the request form?", source: "Customer request", summary: "Request form update", category: "Product development", suggested: "Suggested summary and category", approval: "Your team reviews and approves", task: "Plan the form update", result: "A task is created after approval", owner: "Owner: Deniz A." },
  de: { example: "Beispiel eines KI-Ablaufs", titles: ["Eingehende Anfrage", "KI-Vorschlag", "Menschliche Freigabe"], request: "Können wir ein Prioritätsfeld im Anfrageformular ergänzen?", source: "Kundenanfrage", summary: "Anfrageformular aktualisieren", category: "Produktentwicklung", suggested: "Vorschlag für Zusammenfassung und Kategorie", approval: "Ihr Team prüft und bestätigt", task: "Formularänderung planen", result: "Aufgabe nach Freigabe erstellen", owner: "Verantwortlich: Deniz A." },
};

export function AIScene({ locale }: { locale: Locale }) {
  const text = copy[locale];
  return (
    <div className={`${styles.workflow} ${heroFont.variable}`}>
      <p className={styles.example}>{text.example}</p>
      <div className={styles.steps}>
        <div className={styles.card}>
          <div className={styles.heading}><Inbox /><span>01</span><p>{text.titles[0]}</p></div>
          <p className={styles.kicker}>{text.source}</p><p className={styles.request}>{text.request}</p>
          <ArrowRight className={styles.connector} aria-hidden="true" />
        </div>
        <div className={`${styles.card} ${styles.aiCard}`}>
          <div className={styles.heading}><Sparkles /><span>02</span><p>{text.titles[1]}</p></div>
          <p className={styles.kicker}>{text.suggested}</p><p className={styles.summary}>{text.summary}</p><span className={styles.category}>{text.category}</span>
          <ArrowRight className={styles.connector} aria-hidden="true" />
        </div>
        <div className={styles.card}>
          <div className={styles.heading}><UserCheck /><span>03</span><p>{text.titles[2]}</p></div>
          <p className={styles.kicker}>{text.approval}</p><div className={styles.task}><CheckSquare2 /><div><strong>{text.task}</strong><span>{text.owner}</span></div></div><p className={styles.result}>{text.result}</p>
        </div>
      </div>
    </div>
  );
}
