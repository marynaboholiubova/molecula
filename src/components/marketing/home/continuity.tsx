import { useTranslations } from "next-intl";

import { Container } from "@/components/marketing/container";
import {
  ContinuityVisual,
  type ContinuityRow,
} from "@/components/marketing/continuity-visual";
import { Section } from "@/components/marketing/section";
import { SectionHeading } from "@/components/marketing/section-heading";

export function Continuity() {
  const t = useTranslations("home.continuity");
  const dimensions = t.raw("dimensions") as string[];
  const rows = t.raw("rows") as ContinuityRow[];

  return (
    <Section>
      <Container size="wide">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <SectionHeading
              eyebrow={t("eyebrow")}
              heading={t("heading")}
              description={t("description")}
            />
            <ul className="mt-8 flex flex-wrap gap-2">
              {dimensions.map((dimension) => (
                <li
                  key={dimension}
                  className="rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground"
                >
                  {dimension}
                </li>
              ))}
            </ul>
          </div>

          <ContinuityVisual rows={rows} />
        </div>
      </Container>
    </Section>
  );
}
