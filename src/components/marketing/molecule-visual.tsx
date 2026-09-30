interface OrbitPosition {
  x: number;
  y: number;
}

const CENTER = { x: 200, y: 200 };

// Six positions evenly spaced around the center, starting at the top and
// proceeding clockwise — a hexagonal "production constellation" rather
// than a network/crypto diagram. Paired with `nodes` (translated labels)
// by index.
const ORBIT_POSITIONS: OrbitPosition[] = [
  { x: 200, y: 50 },
  { x: 329.9, y: 125 },
  { x: 329.9, y: 275 },
  { x: 200, y: 350 },
  { x: 70.1, y: 275 },
  { x: 70.1, y: 125 },
];

interface MoleculeVisualProps {
  ariaLabel: string;
  center: string;
  /** Exactly six labels, matched by index to `ORBIT_POSITIONS`. */
  nodes: readonly string[];
}

/**
 * The original Molecula hero visual: a "creative molecule" — one IDEA node
 * connected to the disciplines it produces. Pure inline SVG plus a single
 * CSS opacity pulse (see `.animate-molecule-pulse` in globals.css) — no
 * client JS, no canvas, no WebGL.
 */
export function MoleculeVisual({
  ariaLabel,
  center,
  nodes,
}: MoleculeVisualProps) {
  const orbitNodes = ORBIT_POSITIONS.map((position, index) => ({
    ...position,
    label: nodes[index] ?? "",
  }));

  return (
    <svg
      viewBox="0 0 400 400"
      role="img"
      aria-label={ariaLabel}
      focusable="false"
      className="mx-auto h-auto w-full max-w-md"
    >
      <circle
        cx={CENTER.x}
        cy={CENTER.y}
        r={175}
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth={1}
        className="animate-molecule-pulse"
      />

      {orbitNodes.map((node, index) => (
        <line
          key={`line-${index}`}
          x1={CENTER.x}
          y1={CENTER.y}
          x2={node.x}
          y2={node.y}
          stroke="var(--color-border-strong)"
          strokeWidth={1}
        />
      ))}

      {orbitNodes.map((node, index) => (
        <g key={index}>
          <circle
            cx={node.x}
            cy={node.y}
            r={22}
            fill="var(--color-surface-raised)"
            stroke="var(--color-border)"
            strokeWidth={1}
          />
          <text
            x={node.x}
            y={node.y}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="var(--color-foreground)"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            {node.label}
          </text>
        </g>
      ))}

      <circle
        cx={CENTER.x}
        cy={CENTER.y}
        r={38}
        fill="var(--color-primary)"
        stroke="var(--color-accent)"
        strokeWidth={1.5}
      />
      <text
        x={CENTER.x}
        y={CENTER.y}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="var(--color-primary-foreground)"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 15,
          fontWeight: 600,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
        }}
      >
        {center}
      </text>
    </svg>
  );
}
