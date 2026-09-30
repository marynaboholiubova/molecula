import { cn } from "@/lib/utils";

export interface DnaTier {
  items: readonly string[];
  emphasis?: "accent" | "primary";
}

interface ProjectDnaVisualProps {
  tiers: readonly DnaTier[];
}

/**
 * A responsive, tier-based production architecture diagram: single nodes
 * for the origin/destination of the flow, wrapping rows for branching
 * tiers. Built from plain DOM (flex rows + connector rules) rather than
 * absolutely-positioned lines, so it reflows correctly at every breakpoint
 * instead of breaking like a fixed flowchart would.
 */
export function ProjectDnaVisual({ tiers }: ProjectDnaVisualProps) {
  return (
    <div aria-hidden={false} className="flex flex-col items-center">
      {tiers.map((tier, index) => (
        <div key={tier.items.join("-")} className="flex flex-col items-center">
          {index > 0 && (
            <span aria-hidden className="h-8 w-px bg-border-strong" />
          )}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {tier.items.map((item) => (
              <span
                key={item}
                className={cn(
                  "rounded-full border px-5 py-2.5 text-sm font-medium",
                  tier.emphasis === "accent" &&
                    "border-accent/60 bg-accent/10 text-foreground",
                  tier.emphasis === "primary" &&
                    "border-primary bg-primary text-primary-foreground",
                  !tier.emphasis && "border-border text-foreground",
                )}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
