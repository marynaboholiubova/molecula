import { useTranslations } from "next-intl";

import { EditorialStatement } from "@/components/marketing/editorial-statement";
import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";

export function Positioning() {
  const t = useTranslations("home.positioning");

  return (
    <Section>
      <Container size="wide">
        <EditorialStatement
          eyebrow={t("eyebrow")}
          statement={t("statement")}
          body={<p>{t("body")}</p>}
        />
      </Container>
    </Section>
  );
}
