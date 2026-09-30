import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import { CallToAction } from "@/components/marketing/call-to-action";
import { Container } from "@/components/marketing/container";
import { PageHero } from "@/components/marketing/page-hero";
import { Section } from "@/components/marketing/section";
import { SectionHeading } from "@/components/marketing/section-heading";
import { UseCaseRow } from "@/components/marketing/use-case-row";
import { ROUTES } from "@/config/routes";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/use-cases">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "useCases" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

interface UseCase {
  name: string;
  goal: string;
  workflow: string;
  studios: string;
  deliverables: string;
}

export default function UseCasesPage() {
  const t = useTranslations("useCases");
  const tCommon = useTranslations("common");
  const useCases = t.raw("items") as UseCase[];
  const labels = t.raw("labels") as {
    goal: string;
    workflow: string;
    studios: string;
    deliverables: string;
  };

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
            {useCases.map((useCase, index) => (
              <UseCaseRow
                key={useCase.name}
                index={String(index + 1).padStart(2, "0")}
                name={useCase.name}
                goal={useCase.goal}
                workflow={useCase.workflow}
                studios={useCase.studios}
                deliverables={useCase.deliverables}
                labels={labels}
              />
            ))}
          </div>
        </Container>
      </Section>

      <CallToAction
        heading={t("finalCta.heading")}
        description={t("finalCta.description")}
        primary={{ label: tCommon("cta.platform"), href: ROUTES.features }}
        secondary={{
          label: tCommon("cta.movieProject"),
          href: ROUTES.movieProject,
        }}
      />
    </>
  );
}
