import { useTranslations } from "next-intl";

interface DisciplineItem {
  name: string;
  description: string;
}

export function Disciplines() {
  const t = useTranslations("disciplines");
  const items = t.raw("items") as DisciplineItem[];

  return (
    <section
      id="disciplines"
      className="border-t border-border/60 px-6 py-24 sm:px-8 sm:py-32 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-2xl font-display text-3xl leading-tight font-semibold text-balance sm:text-4xl">
          {t("heading")}
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.name} className="bg-surface p-8">
              <h3 className="font-display text-xl font-semibold">
                {item.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
