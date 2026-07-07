import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * NexDyne homepage hero — EY-style "sleek control" composition on the
 * charcoal Dark-Authority canvas (Brand v3).
 *
 * Composition rules (adapted from EY's hero, mapped to our brand):
 * - ONE short all-white headline, low in the frame (no eyebrow, no accent
 *   colour in the headline — hero rule).
 * - One-sentence sub-line with a vertical orange signal bar at its left.
 * - Quiet inline slide tabs bottom-left: short amber progress tick above the
 *   active label only — no full-width progress tracks.
 * - Edge chevron arrows for manual control (desktop).
 * - Whole slide content links to the slide's destination; no fat CTA.
 * - Photography: cinematic night-operations set (already dark) — NO scrims,
 *   glows, or gradient overlays of any kind; the images carry their own
 *   contrast.
 */

const SLIDE_MS = 6500;
const ease = [0.22, 1, 0.36, 1] as const;

const CHARCOAL = "#242424";
const SIGNAL = "#E04C2C"; // Orange-Red — the signal colour
const AMBER = "#FFB41D";

interface Slide {
  /** short label shown in the bottom navigator row */
  label: string;
  /** short all-white headline (manual breaks via \n) */
  headline: string;
  /** one-sentence sub-line beside the orange signal bar */
  sub: string;
  href: string;
  /** full-bleed background photo (public path) */
  image: string;
  /** transform-origin for the zoom — anchored left so the subject sits clear
   *  of the headline (e.g. "22% 40%") */
  focal?: string;
  /** zoom scale for the photo (default 1.16); larger crops harder toward the
   *  focal side, pushing a central subject further right */
  zoom?: number;
  /** background-position for phones — portrait cover shows only a ~30%-wide
   *  strip of these landscape photos, so aim it at the subject */
  mobileFocal?: string;
}

/* ------------------------------------------------------------------ */
/*  Charcoal Dark-Authority canvas — one controlled accent glow.        */
/* ------------------------------------------------------------------ */

function CharcoalCanvas({
  image,
  focal,
  zoom,
  mobileFocal,
}: {
  image: string;
  focal?: string;
  zoom?: number;
  mobileFocal?: string;
}) {
  return (
    <div className="absolute inset-0" style={{ backgroundColor: CHARCOAL }}>
      {/* full-bleed photo, shown true — the night-operations set is already
          dark enough to hold white type without any overlay.
          Desktop: a gentle zoom anchored via `focal` (transform-origin) frames
          the subject clear of the headline. Phones: portrait cover shows only
          a narrow strip of these landscape photos, so skip the zoom and aim
          the strip at the subject via `mobileFocal` instead. */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: mobileFocal ?? "50% 50%",
        }}
      />
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `scale(${zoom ?? 1})`,
          transformOrigin: focal ?? "50% 50%",
        }}
      />
    </div>
  );
}

const slides: Slide[] = [
  {
    // Shuttle clearing the smoke — controlled power under governance; the
    // starfield left half is the headline's natural stage.
    label: "Win with HIG™",
    headline: "Human intelligence.\nGoverned. Scaled.",
    sub: "HIG™ — the operating discipline for leaders who scale judgment, not just software.",
    href: "/about",
    image: "/images/hero/hero-shuttle.jpg",
    focal: "100% 45%",
    zoom: 1.04,
    mobileFocal: "76% 42%",
  },
  {
    // Highway light trails — the market in motion; orange streaks echo the
    // brand signal.
    label: "AI Adoption 2026",
    headline: "AI Adoption Outlook 2026",
    sub: "A winner's paradox — the firms moving fastest are the ones governing hardest.",
    href: "/capabilities/artificial-intelligence",
    image: "/images/hero/hero-highway.jpg",
    focal: "50% 50%",
    zoom: 1.0,
    mobileFocal: "52% 50%",
  },
  {
    // Tanker docked at a lit terminal, from above — a precision night
    // operation: governed execution, literally.
    label: "Operational Excellence",
    headline: "From chaos to governed execution",
    sub: "Operational excellence that scales with ambition — bottlenecks out, oversight in.",
    href: "/solutions/intelligent-process-optimization",
    image: "/images/hero/hero-terminal.jpg",
    focal: "100% 25%",
    zoom: 1.22,
    mobileFocal: "58% 40%",
  },
  {
    // Satellite in orbit — infrastructure above the clouds; the near-black
    // lower half is the headline's stage. (The runway/airplane shot stays on
    // the bench: its white fuselage crosses the text zone at every crop.)
    label: "NexDyne x Cloud",
    headline: "Accelerating AI in the cloud",
    sub: "Partnerships that move adoption from pilot to production — safely, and at speed.",
    href: "/capabilities/technology",
    image: "/images/hero/hero-satellite.jpg",
    focal: "50% 0%",
    zoom: 1.06,
    mobileFocal: "42% 26%",
  },
];

/* ------------------------------------------------------------------ */

export function BainHeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback((i: number) => {
    setActive(((i % slides.length) + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    timer.current = setTimeout(() => goTo(active + 1), SLIDE_MS);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [active, paused, goTo]);

  const slide = slides[active];

  return (
    <section
      className="relative w-full overflow-hidden text-white"
      style={{ height: "86vh", minHeight: 560, backgroundColor: CHARCOAL }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* --- Backgrounds (cross-fade) --- */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[1200ms] ease-out"
          style={{ opacity: i === active ? 1 : 0 }}
          aria-hidden={i !== active}
        >
          <CharcoalCanvas
            image={s.image}
            focal={s.focal}
            zoom={s.zoom}
            mobileFocal={s.mobileFocal}
          />
        </div>
      ))}

      {/* grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* --- Edge arrows (desktop) --- */}
      <button
        onClick={() => goTo(active - 1)}
        aria-label="Previous slide"
        className="absolute left-0 top-1/2 z-20 hidden h-14 w-12 -translate-y-1/2 items-center justify-center bg-black/35 text-white transition-colors hover:bg-black/60 focus-visible:outline-2 focus-visible:outline-white md:flex"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={() => goTo(active + 1)}
        aria-label="Next slide"
        className="absolute right-0 top-1/2 z-20 hidden h-14 w-12 -translate-y-1/2 items-center justify-center bg-black/35 text-white transition-colors hover:bg-black/60 focus-visible:outline-2 focus-visible:outline-white md:flex"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* --- Foreground content — sits LOW in the frame, EY-style --- */}
      {/* container geometry mirrors Navigation's bar (max-w + px) so the
          headline's left edge aligns with the nav logo block */}
      <div className="nx-band relative z-10 flex h-full flex-col justify-end">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.65, ease }}
            className="max-w-[1040px]"
          >
            <Link href={slide.href}>
              <span className="group block cursor-pointer" aria-label={`${slide.headline} — read more`}>
                <h1 className="whitespace-pre-line font-bold tracking-[-0.035em] leading-[1.02] text-[clamp(2.3rem,4.8vw,4.4rem)] text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.35)]">
                  {slide.headline}
                </h1>
                <p className="mt-6 flex max-w-[62ch] items-stretch gap-4 text-[1.05rem] md:text-[1.25rem] leading-[1.5] font-medium text-white/90 [text-shadow:0_1px_14px_rgba(0,0,0,0.6)]">
                  <span
                    className="w-[3px] shrink-0 self-stretch"
                    style={{ backgroundColor: SIGNAL }}
                    aria-hidden
                  />
                  <span>
                    {slide.sub}
                    <span
                      aria-hidden
                      className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-1"
                      style={{ color: SIGNAL }}
                    >
                      →
                    </span>
                  </span>
                </p>
              </span>
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* --- Bottom slide navigator — quiet inline tabs, EY-style --- */}
        <div className="relative z-10 mt-12 pb-8 md:mt-16 md:pb-10">
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 sm:flex sm:items-start sm:gap-12 lg:gap-16">
            {slides.map((s, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="group relative pt-3 text-left"
                aria-current={i === active}
              >
                {/* short progress tick — active tab only */}
                <span className="absolute left-0 top-0 h-[3px] w-12 overflow-hidden">
                  {i === active && (
                    <span
                      key={active}
                      className="block h-full"
                      style={{
                        backgroundColor: AMBER,
                        animation: paused
                          ? "none"
                          : `heroFill ${SLIDE_MS}ms linear forwards`,
                        width: paused ? "35%" : undefined,
                      }}
                    />
                  )}
                </span>
                <span
                  className={`block text-[13px] md:text-[15px] font-semibold tracking-[-0.01em] transition-colors [text-shadow:0_1px_14px_rgba(0,0,0,0.7)] ${
                    i === active
                      ? "text-white"
                      : "text-white/55 group-hover:text-white/85"
                  }`}
                >
                  {s.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heroFill { from { width: 0%; } to { width: 100%; } }
      `}</style>
    </section>
  );
}

export default BainHeroCarousel;
