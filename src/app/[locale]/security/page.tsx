import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import { CallToAction } from "@/components/marketing/call-to-action";
import { Container } from "@/components/marketing/container";
import { FeatureRow } from "@/components/marketing/feature-row";
import { PageHero } from "@/components/marketing/page-hero";
import { Section } from "@/components/marketing/section";
import { SectionHeading } from "@/components/marketing/section-heading";
import { ROUTES } from "@/config/routes";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/security">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "security" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

interface SecurityItem {
  title: string;
  description: string;
}

export default function SecurityPage() {
  const t = useTranslations("security");
  const tCommon = useTranslations("common");
  const foundationItems = t.raw("foundation.items") as SecurityItem[];
  const plannedItems = t.raw("planned.items") as SecurityItem[];

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        heading={t("hero.heading")}
        description={t("hero.description")}
        variant="center-flow"
      />

      <Section>
        <Container size="default">
          <SectionHeading
            eyebrow={t("foundation.eyebrow")}
            heading={t("foundation.heading")}
          />
          <div className="mt-4">
            {foundationItems.map((item) => (
              <FeatureRow
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="default">
          <SectionHeading
            eyebrow={t("planned.eyebrow")}
            heading={t("planned.heading")}
          />
          <div className="mt-4">
            {plannedItems.map((item) => (
              <FeatureRow
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </Container>
      </Section>

      <CallToAction
        heading={t("finalCta.heading")}
        description={t("finalCta.description")}
        primary={{ label: tCommon("cta.platform"), href: ROUTES.features }}
        secondary={{ label: tCommon("cta.pricing"), href: ROUTES.pricing }}
      />
    </>
  );
}
