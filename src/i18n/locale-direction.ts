import { getLanguage, type TextDirection } from "@/config/languages";

/**
 * Resolves the text direction for a UI locale code.
 *
 * Defaults to "ltr" for any locale not present in the language catalog,
 * since an unknown locale should never accidentally flip the whole layout
 * to right-to-left.
 */
export function getLocaleDirection(locale: string): TextDirection {
  return getLanguage(locale)?.direction ?? "ltr";
}

export function isRtlLocale(locale: string): boolean {
  return getLocaleDirection(locale) === "rtl";
}
