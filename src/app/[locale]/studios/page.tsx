import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import { CallToAction } from "@/components/marketing/call-to-action";
import {
  CapabilityGroup,
  type CapabilityItem,
} from "@/components/marketing/capability-group";
import { Container } from "@/components/marketing/container";
import { EditorialStatement } from "@/components/marketing/editorial-statement";
import { PageHero } from "@/components/marketing/page-hero";
import { Section } from "@/components/marketing/section";
import { ROUTES } from "@/config/routes";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/studios">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "studios" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

const STUDIO_KEYS = ["image", "video", "music", "voice", "threeD"] as const;

export default function StudiosPage() {
  const t = useTranslations("studios");
  const tCommon = useTranslations("common");

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        heading={t("hero.heading")}
        description={t("hero.description")}
      />

      <Section>
        <Container size="wide">
          <EditorialStatement
            eyebrow={t("positioning.eyebrow")}
            statement={t("positioning.statement")}
            body={<p>{t("positioning.body")}</p>}
          />
        </Container>
      </Section>

      <Section>
        <Container size="wide">
          {STUDIO_KEYS.map((key, index) => (
            <CapabilityGroup
              key={key}
              index={String(index + 1).padStart(2, "0")}
              title={t(`groups.${key}.title`)}
              description={t(`groups.${key}.description`)}
              items={t.raw(`groups.${key}.items`) as CapabilityItem[]}
              layout="grid"
            />
          ))}
        </Container>
      </Section>

      <CallToAction
        heading={t("finalCta.heading")}
        description={t("finalCta.description")}
        primary={{
          label: tCommon("cta.movieProject"),
          href: ROUTES.movieProject,
        }}
        secondary={{ label: tCommon("cta.platform"), href: ROUTES.features }}
      />
    </>
  );
}
