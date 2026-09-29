import { defineRouting } from "next-intl/routing";

import { ACTIVE_LOCALES } from "@/config/languages";

export const routing = defineRouting({
  locales: ACTIVE_LOCALES as [string, ...string[]],
  defaultLocale: "en",
  localePrefix: "always",
});
