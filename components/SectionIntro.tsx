import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export function SectionIntro({ eyebrow, title, children }: SectionIntroProps) {
  return (
    <Reveal className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
      <p className="mb-4 text-sm font-medium uppercase text-bayes-teal">{eyebrow}</p>
      <h2 className="text-3xl font-semibold text-bayes-frost md:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-bayes-silver/68 md:text-lg">{children}</p>
    </Reveal>
  );
}
