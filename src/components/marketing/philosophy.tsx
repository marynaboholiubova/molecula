import { useTranslations } from "next-intl";

export function Philosophy() {
  const t = useTranslations("philosophy");

  return (
    <section
      id="philosophy"
      className="border-t border-border/60 px-6 py-24 sm:px-8 sm:py-32 lg:px-12"
    >
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <p className="text-sm font-medium tracking-[0.28em] text-muted-foreground uppercase">
          {t("eyebrow")}
        </p>

        <div className="max-w-3xl">
          <h2 className="font-display text-3xl leading-tight font-semibold text-balance sm:text-4xl lg:text-5xl">
            {t("heading")}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-pretty text-muted-foreground">
            {t("body")}
          </p>
        </div>
      </div>
    </section>
  );
}
