import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import { CallToAction } from "@/components/marketing/call-to-action";
import { Container } from "@/components/marketing/container";
import { FeatureRow } from "@/components/marketing/feature-row";
import { PageHero } from "@/components/marketing/page-hero";
import { ProductionFlow } from "@/components/marketing/production-flow";
import { Section } from "@/components/marketing/section";
import { SectionHeading } from "@/components/marketing/section-heading";
import { ROUTES } from "@/config/routes";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/templates">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "templates" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

interface Blueprint {
  name: string;
  description: string;
  stages: string[];
}

export default function TemplatesPage() {
  const t = useTranslations("templates");
  const tCommon = useTranslations("common");
  const blueprints = t.raw("items") as Blueprint[];

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        heading={t("hero.heading")}
        description={t("hero.description")}
      />

      <Section>
        <Container size="default">
          <SectionHeading
            eyebrow={t("list.eyebrow")}
            heading={t("list.heading")}
          />

          <div className="mt-4">
            {blueprints.map((blueprint, index) => (
              <FeatureRow
                key={blueprint.name}
                label={String(index + 1).padStart(2, "0")}
                title={blueprint.name}
                description={
                  <div className="space-y-4">
                    <p>{blueprint.description}</p>
                    <ProductionFlow steps={blueprint.stages} />
                  </div>
                }
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
