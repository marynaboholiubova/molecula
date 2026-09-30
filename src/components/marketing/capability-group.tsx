import { cn } from "@/lib/utils";

export interface CapabilityItem {
  name: string;
  description?: string;
}

interface CapabilityGroupProps {
  index: string;
  title: string;
  description: string;
  items: readonly CapabilityItem[];
  layout?: "list" | "grid";
}

/** One capability group (CREATE / DIRECT / PRODUCE / SYSTEM on the Features
 * page) — alternating list/grid layouts give each group a distinct rhythm
 * instead of twenty identical cards. */
export function CapabilityGroup({
  index,
  title,
  description,
  items,
  layout = "list",
}: CapabilityGroupProps) {
  return (
    <div className="grid gap-8 border-t border-border/60 py-14 first:border-t-0 first:pt-0 lg:grid-cols-[minmax(0,1fr)_2fr] lg:gap-16">
      <div>
        <span className="font-display text-sm text-accent">{index}</span>
        <h2 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
          {title}
        </h2>
        <p className="mt-3 max-w-sm text-muted-foreground">{description}</p>
      </div>

      <div
        className={cn(
          layout === "grid"
            ? "grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-3"
            : "flex flex-col divide-y divide-border/60",
        )}
      >
        {items.map((item) =>
          layout === "grid" ? (
            <div key={item.name} className="text-base font-medium">
              {item.name}
            </div>
          ) : (
            <div
              key={item.name}
              className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
            >
              <span className="font-medium">{item.name}</span>
              {item.description && (
                <span className="text-sm text-muted-foreground sm:text-right">
                  {item.description}
                </span>
              )}
            </div>
          ),
        )}
      </div>
    </div>
  );
}
