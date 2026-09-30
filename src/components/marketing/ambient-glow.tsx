/**
 * The restrained atmospheric background treatment used behind editorial
 * moments (hero, final CTA): a soft accent-tinted glow plus a faint grid,
 * both masked to fade outward. Pure CSS, no JS — safe to use in any
 * Server Component. Always `aria-hidden`; purely decorative.
 */
export function AmbientGlow() {
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
    </>
  );
}
