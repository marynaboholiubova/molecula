import { useTranslations } from "next-intl";

import { Container } from "@/components/marketing/container";
import { Section } from "@/components/marketing/section";
import { SectionHeading } from "@/components/marketing/section-heading";

export function AutoDirector() {
  const t = useTranslations("home.autoDirector");
  const notes = t.raw("notes") as string[];

  return (
    <Section>
      <Container size="wide">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="lg:order-2">
            <SectionHeading
              eyebrow={t("eyebrow")}
              heading={t("heading")}
              description={t("description")}
            />
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-surface lg:order-1">
            {notes.map((note, index) => (
              <div
                key={note}
                className="flex items-baseline gap-4 border-b border-border/60 px-6 py-4 last:border-b-0"
              >
                <span className="font-display text-sm text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-foreground">{note}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
