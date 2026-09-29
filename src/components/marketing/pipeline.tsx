import { useTranslations } from "next-intl";

export function Pipeline() {
  const t = useTranslations("pipeline");
  const steps = t.raw("steps") as string[];

  return (
    <section className="border-t border-border/60 px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-2xl font-display text-3xl leading-tight font-semibold text-balance sm:text-4xl">
          {t("heading")}
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground">
          {t("description")}
        </p>

        <ol className="mt-14 flex flex-wrap gap-x-2 gap-y-6">
          {steps.map((step, index) => (
            <li key={step} className="flex items-center">
              <span className="flex items-center gap-3 rounded-full border border-border px-4 py-2 text-sm">
                <span className="font-display text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{step}</span>
              </span>
              {index < steps.length - 1 && (
                <span
                  aria-hidden
                  className="mx-2 hidden h-px w-6 bg-border-strong sm:block"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
