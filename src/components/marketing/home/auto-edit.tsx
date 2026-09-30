import { useTranslations } from "next-intl";

import { Container } from "@/components/marketing/container";
import { Section } from "@/components/marketing/section";
import { SectionHeading } from "@/components/marketing/section-heading";
import {
  TimelineVisual,
  type TimelineTrack,
} from "@/components/marketing/timeline-visual";

export function AutoEdit() {
  const t = useTranslations("home.autoEdit");
  const tracks = t.raw("tracks") as TimelineTrack[];
  const capabilities = t.raw("capabilities") as string[];

  return (
    <Section>
      <Container size="wide">
        <SectionHeading
          eyebrow={t("eyebrow")}
          heading={t("heading")}
          description={t("description")}
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <TimelineVisual tracks={tracks} />

          <ul className="flex flex-col gap-3">
            {capabilities.map((capability) => (
              <li
                key={capability}
                className="rounded-lg border border-border/60 px-4 py-3 text-sm text-muted-foreground"
              >
                {capability}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
