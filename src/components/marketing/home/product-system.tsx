import { useTranslations } from "next-intl";

import { Container } from "@/components/marketing/container";
import {
  ProjectDnaVisual,
  type DnaTier,
} from "@/components/marketing/project-dna-visual";
import { Section } from "@/components/marketing/section";
import { SectionHeading } from "@/components/marketing/section-heading";

export function ProductSystem() {
  const t = useTranslations("home.productSystem");
  const tiers = t.raw("tiers") as DnaTier[];

  return (
    <Section>
      <Container size="wide">
        <SectionHeading
          eyebrow={t("eyebrow")}
          heading={t("heading")}
          description={t("description")}
        />
        <div className="mt-16 overflow-x-auto">
          <ProjectDnaVisual tiers={tiers} />
        </div>
      </Container>
    </Section>
  );
}
