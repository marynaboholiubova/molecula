import { cn } from "@/lib/utils";

export interface TimelineTrack {
  label: string;
  /** Relative widths (0–1) of each abstract segment on this track. */
  segments: readonly number[];
}

interface TimelineVisualProps {
  tracks: readonly TimelineTrack[];
}

/** An abstract, schematic multi-track timeline (video/voice/music/...) —
 * illustrating the concept of a synchronized edit, not a real project. */
export function TimelineVisual({ tracks }: TimelineVisualProps) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-6">
      {tracks.map((track) => (
        <div key={track.label} className="flex items-center gap-4">
          <span className="w-20 shrink-0 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            {track.label}
          </span>
          <div aria-hidden className="flex flex-1 gap-1.5">
            {track.segments.map((width, index) => (
              <span
                key={index}
                style={{ flexGrow: width }}
                className={cn(
                  "h-3 rounded-sm",
                  index % 2 === 0 ? "bg-border-strong" : "bg-accent/30",
                )}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
