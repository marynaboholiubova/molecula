import { useTranslations } from "next-intl";

import { Container } from "@/components/marketing/container";
import { Section } from "@/components/marketing/section";
import { SectionHeading } from "@/components/marketing/section-heading";
import { cn } from "@/lib/utils";

interface ProjectType {
  name: string;
  description: string;
}

// Structural sizing only (content stays in messages) — an editorial size
// pattern instead of eight identical cards.
const SIZE_PATTERN = ["lg", "md", "sm", "sm", "md", "sm", "sm", "md"] as const;

const SIZE_CLASSES: Record<(typeof SIZE_PATTERN)[number], string> = {
  lg: "sm:col-span-2 sm:row-span-2 justify-end",
  md: "sm:col-span-2",
  sm: "",
};

export function ProjectTypes() {
  const t = useTranslations("home.projectTypes");
  const items = t.raw("items") as ProjectType[];

  return (
    <Section>
      <Container size="wide">
        <SectionHeading eyebrow={t("eyebrow")} heading={t("heading")} />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-4">
          {items.map((item, index) => (
            <div
              key={item.name}
              className={cn(
                "flex flex-col rounded-2xl border border-border bg-surface p-6",
                SIZE_CLASSES[SIZE_PATTERN[index] ?? "sm"],
              )}
            >
              <h3
                className={cn(
                  "font-display font-semibold text-balance",
                  SIZE_PATTERN[index] === "lg" ? "text-3xl" : "text-xl",
                )}
              >
                {item.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
