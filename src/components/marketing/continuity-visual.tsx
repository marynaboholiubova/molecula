import { cn } from "@/lib/utils";

export type ContinuityStatus = "locked" | "match" | "review";

export interface ContinuityRow {
  label: string;
  status: ContinuityStatus;
  statusLabel: string;
}

interface ContinuityVisualProps {
  rows: readonly ContinuityRow[];
}

const STATUS_STYLES: Record<ContinuityStatus, string> = {
  locked: "bg-success/10 text-success",
  match: "bg-success/10 text-success",
  review: "bg-warning/10 text-warning",
};

/** A continuity "diagnostic panel" built from real UI primitives — status
 * rows, not a fabricated screenshot of a generated frame. */
export function ContinuityVisual({ rows }: ContinuityVisualProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface">
      <dl>
        {rows.map((row, index) => (
          <div
            key={row.label}
            className={cn(
              "flex items-center justify-between gap-4 px-6 py-4",
              index > 0 && "border-t border-border/60",
            )}
          >
            <dt className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
              {row.label}
            </dt>
            <dd
              className={cn(
                "rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase",
                STATUS_STYLES[row.status],
              )}
            >
              {row.statusLabel}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
