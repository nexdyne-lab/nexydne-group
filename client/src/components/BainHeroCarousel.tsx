import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

/**
 * NexDyne homepage hero — CHARCOAL "Dark Authority" (Brand v2, Site A).
 *
 * Adopted hero for the neutral site. Neutrals build the system; colour
 * communicates meaning. The canvas is charcoal
 * (#242424) — a controlled, institutional dark surface (the "governance mode").
 * Colour appears only as a signal: Orange-Red on the eyebrow tick, one accented
 * payoff phrase per slide, and the CTA arrow. Amber is reserved for the progress
 * bar (a progress indicator — its defined role). No full-bleed colour fills.
 *
 * Each slide carries a single low-opacity accent glow so the carousel keeps
 * identity while the charcoal foundation stays dominant (70–80% neutral).
 */

const SLIDE_MS = 6500;
const ease = [0.22, 1, 0.36, 1] as const;

const CHARCOAL = "#242424";
const SIGNAL = "#E04C2C"; // Orange-Red — the signal colour
const AMBER = "#FFB41D";
const PURPLE = "#6F44A3";

interface Slide {
  /** short label shown in the bottom navigator row */
  label: string;
  /** small bold line above the headline */
  eyebrow: string;
  /** headline lines rendered in white (manual breaks via \n) */
  headline: string;
  /** payoff phrase rendered in the signal colour beneath the headline */
  accent?: string;
  cta: { text: string; href: string };
  /** rgba glow colour + focal position for this slide's controlled accent */
  glow: { color: string; at: string };
}

/* ------------------------------------------------------------------ */
/*  Charcoal Dark-Authority canvas — one controlled accent glow.        */
/* ------------------------------------------------------------------ */

function CharcoalCanvas({ color, at }: { color: string; at: string }) {
  return (
    <div className="absolute inset-0" style={{ backgroundColor: CHARCOAL }}>
      {/* subtle vertical depth so the flat charcoal isn't dead-flat */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #2a2a2a 0%, #242424 46%, #1d1d1d 100%)",
        }}
      />
      {/* single low-opacity accent glow — controlled depth, not a colour fill */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(48% 62% at ${at}, ${color} 0%, transparent 60%)`,
        }}
      />
      {/* keep the left column clean for headline legibility */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(96deg, #202020 0%, rgba(32,32,32,0.85) 22%, rgba(32,32,32,0.35) 46%, transparent 66%)",
        }}
      />
      {/* faint structural striations for texture */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-soft-light"
        style={{
          backgroundImage:
            "repeating-linear-gradient(118deg, rgba(255,255,255,0.8) 0px, rgba(255,255,255,0) 3px 26px)",
        }}
      />
    </div>
  );
}

const slides: Slide[] = [
  {
    label: "Win with HIG™",
    eyebrow: "Human Intelligence Governance",
    headline: "Human intelligence.",
    accent: "Governed. Scaled.",
    cta: { text: "Read More", href: "/about" },
    glow: { color: "rgba(224,76,44,0.18)", at: "82% 72%" },
  },
  {
    label: "AI Adoption 2026",
    eyebrow: "AI Adoption Outlook",
    headline: "AI Adoption Outlook\n2026:",
    accent: "A Winner's Paradox",
    cta: { text: "Read More", href: "/capabilities/artificial-intelligence" },
    glow: { color: "rgba(255,180,29,0.16)", at: "86% 30%" },
  },
  {
    label: "Operational Excellence",
    eyebrow: "Operations",
    headline: "Turn operational chaos into",
    accent: "governed, scalable execution",
    cta: { text: "Read More", href: "/solutions/intelligent-process-optimization" },
    glow: { color: "rgba(224,76,44,0.16)", at: "80% 78%" },
  },
  {
    label: "NexDyne x Cloud",
    eyebrow: "NexDyne x Cloud",
    headline: "Helping clients accelerate\nthe adoption of",
    accent: "AI solutions",
    cta: { text: "Learn about our partnerships", href: "/capabilities/technology" },
    glow: { color: "rgba(111,68,163,0.20)", at: "84% 40%" },
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

  const scrollDown = () =>
    window.scrollBy({ top: window.innerHeight - 80, behavior: "smooth" });

  return (
    <section
      className="relative w-full overflow-hidden text-white"
      style={{ height: "100vh", minHeight: 640, backgroundColor: CHARCOAL }}
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
          <CharcoalCanvas color={s.glow.color} at={s.glow.at} />
        </div>
      ))}

      {/* subtle top/bottom vignette for nav + navigator legibility */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.32) 0%, transparent 30%, transparent 74%, rgba(0,0,0,0.30) 100%)",
        }}
      />
      {/* grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* --- Foreground content --- */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1500px] flex-col px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="flex flex-1 items-center pt-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.65, ease }}
              className="max-w-[1040px]"
            >
              {/* eyebrow with signal tick */}
              <p className="mb-6 flex items-center gap-3 text-[1rem] md:text-[1.15rem] font-semibold tracking-[-0.01em] text-white/85">
                <span
                  className="inline-block h-[10px] w-[10px] shrink-0"
                  style={{ backgroundColor: SIGNAL }}
                  aria-hidden
                />
                {slide.eyebrow}
              </p>
              <h1 className="whitespace-pre-line font-bold tracking-[-0.035em] leading-[0.99] text-[clamp(2.4rem,5.4vw,5rem)] text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.35)]">
                {slide.headline}
                {slide.accent && (
                  <>
                    {"\n"}
                    <span style={{ color: SIGNAL }}>{slide.accent}</span>
                  </>
                )}
              </h1>
              <Link href={slide.cta.href}>
                <span className="group mt-11 inline-flex items-center gap-4 text-[13px] font-bold uppercase tracking-[0.16em] text-white cursor-pointer">
                  {slide.cta.text}
                  <span
                    className="relative block h-[2px] w-14 transition-all duration-300 group-hover:w-20"
                    style={{ backgroundColor: SIGNAL }}
                  >
                    <span
                      className="absolute -right-[1px] -top-[4px] h-[10px] w-[10px] rotate-45 border-r-2 border-t-2"
                      style={{ borderColor: SIGNAL }}
                    />
                  </span>
                </span>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* --- Bottom slide navigator + scroll cue --- */}
        <div className="relative z-10 pb-8 md:pb-10">
          <div className="flex items-end justify-between gap-6">
            <div className="grid flex-1 grid-cols-2 gap-x-6 gap-y-3 sm:flex sm:items-start sm:gap-0">
              {slides.map((s, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="group relative flex-1 pt-3 text-left"
                  aria-current={i === active}
                >
                  {/* progress track */}
                  <span className="absolute left-0 right-0 top-0 h-[3px] bg-white/25 sm:right-5">
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
                    {i < active && <span className="block h-full w-full bg-white/45" />}
                  </span>
                  <span
                    className={`block text-[13px] md:text-[15px] font-semibold tracking-[-0.01em] transition-colors ${
                      i === active
                        ? "text-white"
                        : "text-white/55 group-hover:text-white/80"
                    }`}
                  >
                    {s.label}
                  </span>
                </button>
              ))}
            </div>

            <button
              onClick={scrollDown}
              className="hidden shrink-0 items-center gap-3 text-white/85 transition-colors hover:text-white md:flex"
              aria-label="Scroll to content"
            >
              <span className="text-[12px] font-semibold uppercase tracking-[0.16em]">
                Scroll
              </span>
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40">
                <motion.span
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ChevronDown className="h-5 w-5" />
                </motion.span>
              </span>
            </button>
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
