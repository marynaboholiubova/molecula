import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import { CallToAction } from "@/components/marketing/call-to-action";
import {
  CapabilityGroup,
  type CapabilityItem,
} from "@/components/marketing/capability-group";
import { Container } from "@/components/marketing/container";
import { PageHero } from "@/components/marketing/page-hero";
import { Section } from "@/components/marketing/section";
import { ROUTES } from "@/config/routes";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/features">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "features" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

const GROUP_LAYOUTS = ["grid", "list", "grid", "list"] as const;
const GROUP_KEYS = ["create", "direct", "produce", "system"] as const;

export default function FeaturesPage() {
  const t = useTranslations("features");
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
          {GROUP_KEYS.map((key, index) => (
            <CapabilityGroup
              key={key}
              index={String(index + 1).padStart(2, "0")}
              title={t(`groups.${key}.title`)}
              description={t(`groups.${key}.description`)}
              items={t.raw(`groups.${key}.items`) as CapabilityItem[]}
              layout={GROUP_LAYOUTS[index]}
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
        secondary={{ label: tCommon("cta.pricing"), href: ROUTES.pricing }}
      />
    </>
  );
}
