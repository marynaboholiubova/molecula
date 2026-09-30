import { useTranslations } from "next-intl";

export function SkipLink() {
  const t = useTranslations("common");

  return (
    <a
      href="#main-content"
      className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:top-4 focus-visible:left-4 focus-visible:z-[100] focus-visible:rounded-full focus-visible:bg-primary focus-visible:px-5 focus-visible:py-2.5 focus-visible:text-sm focus-visible:font-medium focus-visible:text-primary-foreground focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
    >
      {t("skipToContent")}
    </a>
  );
}
