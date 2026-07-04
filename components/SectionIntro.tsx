import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  children: ReactNode;
};

export function SectionIntro({ eyebrow, title, align = "center", children }: SectionIntroProps) {
  const alignment = align === "left" ? "text-left" : "mx-auto text-center";

  return (
    <Reveal className={`mb-12 max-w-3xl md:mb-16 ${alignment}`}>
      <p className="font-label mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-bayes-blue">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl leading-[1.05] text-bayes-ink md:text-6xl">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-bayes-silver">{children}</p>
    </Reveal>
  );
}
