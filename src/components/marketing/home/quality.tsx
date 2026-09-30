import { useTranslations } from "next-intl";

import { Container } from "@/components/marketing/container";
import { Section } from "@/components/marketing/section";
import { SectionHeading } from "@/components/marketing/section-heading";

export function Quality() {
  const t = useTranslations("home.quality");
  const stages = t.raw("stages") as string[];
  const principles = t.raw("principles") as string[];

  return (
    <Section>
      <Container size="wide">
        <SectionHeading
          eyebrow={t("eyebrow")}
          heading={t("heading")}
          description={t("description")}
        />

        <div className="mt-14 flex flex-wrap items-center gap-x-3 gap-y-4 text-lg">
          {stages.map((stage, index) => (
            <span key={stage} className="flex items-center gap-3">
              <span className="font-display font-medium">{stage}</span>
              {index < stages.length - 1 && (
                <span aria-hidden className="text-muted-foreground">
                  →
                </span>
              )}
            </span>
          ))}
        </div>

        <ul className="mt-10 flex flex-wrap gap-2">
          {principles.map((principle) => (
            <li
              key={principle}
              className="rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground"
            >
              {principle}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
