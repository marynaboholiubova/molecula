import { useTranslations } from "next-intl";

import { Container } from "@/components/marketing/container";
import { Section } from "@/components/marketing/section";
import { SectionHeading } from "@/components/marketing/section-heading";

interface StudioExample {
  studio: string;
  example: string;
}

export function ConnectedStudios() {
  const t = useTranslations("home.connectedStudios");
  const examples = t.raw("examples") as StudioExample[];

  return (
    <Section>
      <Container size="wide">
        <SectionHeading
          eyebrow={t("eyebrow")}
          heading={t("heading")}
          description={t("description")}
        />

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {examples.map((item) => (
            <div key={item.studio} className="bg-surface p-6">
              <h3 className="font-display text-lg font-semibold">
                {item.studio}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.example}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
