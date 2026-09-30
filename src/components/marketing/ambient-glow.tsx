import {
  GoldAtmosphere,
  type GoldTier,
  type GoldVariant,
} from "@/components/marketing/gold-atmosphere";

interface AmbientGlowProps {
  /** Which tier of the site-wide gold atmosphere to show on top of the
   * base glow below. Defaults to the lightest tier. */
  intensity?: GoldTier;
  /** Which gold wave composition to use. Defaults to the lower-edge wave. */
  variant?: GoldVariant;
}

/**
 * The restrained atmospheric background treatment used behind editorial
 * moments (hero, page heroes, final CTA): a soft accent-tinted glow plus a
 * faint grid, both masked to fade outward, topped with one tier of the
 * site's abstract gold atmosphere (see `GoldAtmosphere`). Pure CSS, no JS —
 * safe to use in any Server Component. Always `aria-hidden`; purely
 * decorative.
 */
export function AmbientGlow({
  intensity = "quiet",
  variant = "wave-bottom",
}: AmbientGlowProps) {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(60% 50% at 50% 0%, color-mix(in oklch, var(--color-accent) 14%, transparent), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-border-strong) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border-strong) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(70% 60% at 50% 20%, black, transparent)",
        }}
      />
      <GoldAtmosphere tier={intensity} variant={variant} />
    </>
  );
}
