/**
 * BrandMesh — the living NexDyne gradient field (BCG-style animated mesh).
 * Soft blurred orange-red / amber / orange blobs that slowly drift, scale and
 * rotate. `variant="light"` for off-white surfaces, `variant="dark"` for charcoal.
 * Animates transform only (keyframes meshDrift1-4 in index.css); honors reduced-motion.
 */

interface BrandMeshProps {
  variant?: "light" | "dark";
  className?: string;
}

const LIGHT = [
  { c: "rgba(224,76,44,0.30)", cls: "-right-[8%] -top-[30%] w-[60%] h-[120%]", a: "meshDrift1 26s" },
  { c: "rgba(255,180,29,0.36)", cls: "right-[2%] top-[4%] w-[52%] h-[112%]", a: "meshDrift2 33s" },
  { c: "rgba(255,122,47,0.24)", cls: "right-[16%] -bottom-[35%] w-[44%] h-[110%]", a: "meshDrift3 22s" },
  { c: "rgba(111,68,163,0.10)", cls: "-left-[12%] bottom-0 w-[40%] h-[90%]", a: "meshDrift4 38s" },
];

const DARK = [
  { c: "rgba(224,76,44,0.45)", cls: "-right-[6%] -top-[40%] w-[58%] h-[150%]", a: "meshDrift1 24s" },
  { c: "rgba(255,180,29,0.34)", cls: "right-[10%] -top-[10%] w-[48%] h-[140%]", a: "meshDrift2 31s" },
  { c: "rgba(255,122,47,0.30)", cls: "left-[8%] -bottom-[50%] w-[46%] h-[150%]", a: "meshDrift3 27s" },
  { c: "rgba(111,68,163,0.22)", cls: "-left-[10%] -top-[30%] w-[40%] h-[130%]", a: "meshDrift4 35s" },
];

export function BrandMesh({ variant = "light", className = "" }: BrandMeshProps) {
  const blobs = variant === "dark" ? DARK : LIGHT;
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {blobs.map((b, i) => (
        <div
          key={i}
          className={`mesh-blob absolute rounded-full blur-[90px] ${b.cls}`}
          style={{
            background: `radial-gradient(circle at center, ${b.c} 0%, transparent 70%)`,
            animation: `${b.a} ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
}
