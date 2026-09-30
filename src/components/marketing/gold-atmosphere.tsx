import { cn } from "@/lib/utils";

/**
 * The four intensity tiers of the site-wide gold atmosphere, richest to
 * quietest. See the "OPTIONAL ATMOSPHERE" block in globals.css.
 */
export type GoldTier = "hero" | "featured" | "standard" | "quiet";

/**
 * Which way the gold wave sits. `"wave-bottom"` (the default) is a gentle
 * S-curve concentrated in the lower half of the box; the others reuse that
 * exact same shape via `transform`, so pages relate to each other without
 * ever looking cloned.
 */
export type GoldVariant =
  "wave-bottom" | "wave-diagonal" | "corner-right" | "reverse" | "center-flow";

const TIER_CLASS: Record<GoldTier, string> = {
  hero: "gold-wave--hero",
  featured: "gold-wave--featured",
  standard: "gold-wave--standard",
  quiet: "gold-wave--quiet",
};

const VARIANT_CLASS: Record<GoldVariant, string | undefined> = {
  "wave-bottom": undefined,
  "wave-diagonal": "gold-variant-wave-diagonal",
  "corner-right": "gold-variant-corner-right",
  reverse: "gold-variant-reverse",
  "center-flow": "gold-variant-center-flow",
};

interface GoldAtmosphereProps {
  tier: GoldTier;
  variant?: GoldVariant;
}

/**
 * The one place the site's warm-gold wave atmosphere is rendered.
 * `AmbientGlow` (hero-style moments) and `Section` (ordinary content) both
 * compose this — nothing else should reference the `.gold-wave-*` classes
 * directly, so the whole treatment stays reversible from these two call
 * sites plus its CSS block in globals.css. Always `aria-hidden`, always
 * behind content (`-z-10`), pure CSS — safe in any Server Component.
 */
export function GoldAtmosphere({
  tier,
  variant = "wave-bottom",
}: GoldAtmosphereProps) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div
        className={cn("gold-wave", TIER_CLASS[tier], VARIANT_CLASS[variant])}
      />
    </div>
  );
}
