/**
 * MOLECULA — Language Catalog
 *
 * This is the full catalog of base languages Molecula intends to support for
 * the *user interface*. It is intentionally decoupled from next-intl routing:
 * only locales with `status: "active"` have real translation files and are
 * wired into `src/i18n/routing.ts`. Every other entry is `"planned"` — no
 * translation file exists for it yet, and none should be fabricated.
 *
 * UI language (this catalog) is a separate concern from generated-content
 * language (the language of AI-produced scripts, voiceovers, subtitles,
 * etc.), which will get its own locale/dialect/voice-style architecture in a
 * future task. See docs/I18N.md.
 */

export type LanguageStatus = "active" | "planned";
export type TextDirection = "ltr" | "rtl";

export interface LanguageCatalogEntry {
  /** BCP-47 base language code (no region). */
  code: string;
  /** English name of the language, for internal tooling/UI. */
  englishName: string;
  /** Base text direction for this language. */
  direction: TextDirection;
  /** Whether a real translation catalog exists and routing is enabled. */
  status: LanguageStatus;
}

/** Language codes that read right-to-left. */
const RTL_CODES = new Set(["ar", "fa", "he", "ur"]);

/** Only locales that ship a real, human-reviewed translation catalog. */
const ACTIVE_CODES = new Set(["en"]);

const BASE_LANGUAGES: Array<
  Pick<LanguageCatalogEntry, "code" | "englishName">
> = [
  { code: "en", englishName: "English" },
  { code: "uk", englishName: "Ukrainian" },
  { code: "nl", englishName: "Dutch" },
  { code: "fr", englishName: "French" },
  { code: "de", englishName: "German" },
  { code: "es", englishName: "Spanish" },
  { code: "it", englishName: "Italian" },
  { code: "pt", englishName: "Portuguese" },
  { code: "ru", englishName: "Russian" },
  { code: "pl", englishName: "Polish" },
  { code: "cs", englishName: "Czech" },
  { code: "sk", englishName: "Slovak" },
  { code: "ro", englishName: "Romanian" },
  { code: "hu", englishName: "Hungarian" },
  { code: "el", englishName: "Greek" },
  { code: "tr", englishName: "Turkish" },
  { code: "ar", englishName: "Arabic" },
  { code: "fa", englishName: "Persian" },
  { code: "hi", englishName: "Hindi" },
  { code: "zh-CN", englishName: "Chinese Simplified" },
  { code: "zh-TW", englishName: "Chinese Traditional" },
  { code: "ja", englishName: "Japanese" },
  { code: "ko", englishName: "Korean" },
  { code: "sv", englishName: "Swedish" },
  { code: "no", englishName: "Norwegian" },
  { code: "da", englishName: "Danish" },
  { code: "fi", englishName: "Finnish" },
  { code: "is", englishName: "Icelandic" },
  { code: "et", englishName: "Estonian" },
  { code: "lv", englishName: "Latvian" },
  { code: "lt", englishName: "Lithuanian" },
  { code: "bg", englishName: "Bulgarian" },
  { code: "hr", englishName: "Croatian" },
  { code: "sr", englishName: "Serbian" },
  { code: "sl", englishName: "Slovenian" },
  { code: "bs", englishName: "Bosnian" },
  { code: "sq", englishName: "Albanian" },
  { code: "mk", englishName: "Macedonian" },
  { code: "he", englishName: "Hebrew" },
  { code: "id", englishName: "Indonesian" },
  { code: "ms", englishName: "Malay" },
  { code: "vi", englishName: "Vietnamese" },
  { code: "th", englishName: "Thai" },
  { code: "bn", englishName: "Bengali" },
  { code: "ur", englishName: "Urdu" },
  { code: "ta", englishName: "Tamil" },
  { code: "fil", englishName: "Filipino" },
  { code: "sw", englishName: "Swahili" },
  { code: "ca", englishName: "Catalan" },
  { code: "ka", englishName: "Georgian" },
];

/** The complete planned base-language catalog (50 languages). */
export const LANGUAGE_CATALOG: readonly LanguageCatalogEntry[] =
  BASE_LANGUAGES.map((language) => ({
    ...language,
    direction: RTL_CODES.has(language.code) ? "rtl" : "ltr",
    status: ACTIVE_CODES.has(language.code) ? "active" : "planned",
  }));

/** Locale codes with a real translation catalog — the only ones routed. */
export const ACTIVE_LOCALES = LANGUAGE_CATALOG.filter(
  (language) => language.status === "active",
).map((language) => language.code);

export function getLanguage(code: string): LanguageCatalogEntry | undefined {
  return LANGUAGE_CATALOG.find((language) => language.code === code);
}
