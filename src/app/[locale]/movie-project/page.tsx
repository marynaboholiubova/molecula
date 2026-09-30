import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import { CallToAction } from "@/components/marketing/call-to-action";
import { Container } from "@/components/marketing/container";
import {
  ContinuityVisual,
  type ContinuityRow,
} from "@/components/marketing/continuity-visual";
import { FeatureRow } from "@/components/marketing/feature-row";
import { PageHero } from "@/components/marketing/page-hero";
import { ProductionFlow } from "@/components/marketing/production-flow";
import { Section } from "@/components/marketing/section";
import { SectionHeading } from "@/components/marketing/section-heading";
import {
  TimelineVisual,
  type TimelineTrack,
} from "@/components/marketing/timeline-visual";
import { ROUTES } from "@/config/routes";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/movie-project">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "movieProject" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

interface WorkflowItem {
  title: string;
  description: string;
}

// Two workflow rows get a supporting visual — 0-indexed positions of
// "Continuity AI" and "Auto Edit" in `movieProject.workflow.items`.
const CONTINUITY_INDEX = 5;
const AUTO_EDIT_INDEX = 8;

export default function MovieProjectPage() {
  const t = useTranslations("movieProject");
  const tCommon = useTranslations("common");
  const flowSteps = t.raw("flow.steps") as string[];
  const workflowItems = t.raw("workflow.items") as WorkflowItem[];
  const continuityRows = t.raw("continuityRows") as ContinuityRow[];
  const timelineTracks = t.raw("timelineTracks") as TimelineTrack[];

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        heading={t("hero.heading")}
        description={t("hero.description")}
      />

      <Section>
        <Container size="wide">
          <SectionHeading
            eyebrow={t("flow.eyebrow")}
            heading={t("flow.heading")}
          />
          <ProductionFlow steps={flowSteps} className="mt-12" />
        </Container>
      </Section>

      <Section>
        <Container size="default">
          <SectionHeading
            eyebrow={t("workflow.eyebrow")}
            heading={t("workflow.heading")}
          />

          <div className="mt-4">
            {workflowItems.map((item, index) => (
              <div key={item.title}>
                <FeatureRow
                  label={String(index + 1).padStart(2, "0")}
                  title={item.title}
                  description={item.description}
                />
                {index === CONTINUITY_INDEX && (
                  <div className="mb-10 sm:pl-[calc(10rem+2rem)]">
                    <ContinuityVisual rows={continuityRows} />
                  </div>
                )}
                {index === AUTO_EDIT_INDEX && (
                  <div className="mb-10 sm:pl-[calc(10rem+2rem)]">
                    <TimelineVisual tracks={timelineTracks} />
                  </div>
                )}
              </div>
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
