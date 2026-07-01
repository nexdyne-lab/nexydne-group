import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

/**
 * NexDyne homepage hero — BOLD variant (Site B).
 *
 * A full-bleed rotating slide hero modelled on the Bain & Company homepage:
 * giant statement headline + eyebrow + READ MORE over full-screen flowing colour,
 * a slide-label row with a filling progress bar along the bottom, and a Scroll cue.
 *
 * Full-bleed colour is intentional here — Site B is the colour-forward variant.
 * (Site A keeps the neutral, Brand v2 statement hero.)
 */

const SLIDE_MS = 6500;
const ease = [0.22, 1, 0.36, 1] as const;

interface Slide {
  /** short label shown in the bottom navigator row */
  label: string;
  /** small bold line above the headline */
  eyebrow: string;
  /** headline, with manual line breaks via \n */
  headline: string;
  cta: { text: string; href: string };
  /** full-bleed background layers */
  background: React.ReactNode;
}

/* ------------------------------------------------------------------ */
/*  Flowing full-bleed background fields (layered gradients + SVG)      */
/* ------------------------------------------------------------------ */

/** Warm silk field — orange-red flowing into light on the right. */
function WarmFlow() {
  return (
    <div className="absolute inset-0">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(140% 130% at 8% 20%, #E04C2C 0%, #cf3f22 38%, #b8351b 62%, #f0eef0 100%)",
        }}
      />
      {/* silk sweep */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <filter id="warmBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="42" />
          </filter>
          <linearGradient id="warmSweep" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffb094" stopOpacity="0.85" />
            <stop offset="55%" stopColor="#7a2412" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#3a0f07" stopOpacity="0.95" />
          </linearGradient>
        </defs>
        <path
          d="M-100,760 C420,600 760,540 1040,300 C1240,130 1360,60 1560,-40 L1600,340 C1360,470 1180,520 980,660 C740,830 520,900 -100,980 Z"
          fill="url(#warmSweep)"
          filter="url(#warmBlur)"
          opacity="0.9"
        />
        <path
          d="M760,900 C980,760 1120,700 1440,560 L1560,900 Z"
          fill="#ffd9c7"
          filter="url(#warmBlur)"
          opacity="0.5"
        />
      </svg>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(50% 60% at 80% 78%, rgba(255,180,29,0.28) 0%, transparent 60%)",
        }}
      />
    </div>
  );
}

/** Amber/ember aurora on near-black — colour fills the right two-thirds. */
function AmberFlow() {
  return (
    <div className="absolute inset-0 bg-[#140f0d]">
      {/* stacked soft glows build a flowing aurora */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: [
            "radial-gradient(46% 64% at 90% 28%, rgba(255,150,46,0.75) 0%, transparent 62%)",
            "radial-gradient(58% 78% at 74% 46%, rgba(255,180,29,0.9) 0%, transparent 60%)",
            "radial-gradient(52% 72% at 58% 66%, rgba(224,76,44,0.92) 0%, transparent 60%)",
            "radial-gradient(40% 58% at 88% 74%, rgba(176,58,143,0.55) 0%, transparent 60%)",
          ].join(","),
        }}
      />
      {/* silk striations for depth */}
      <div
        className="absolute inset-0 opacity-[0.10] mix-blend-soft-light"
        style={{
          backgroundImage:
            "repeating-linear-gradient(118deg, rgba(255,255,255,0.9) 0px, rgba(255,255,255,0) 3px 22px)",
        }}
      />
      {/* keep the left column dark for headline legibility */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(96deg, #140f0d 0%, rgba(20,15,13,0.85) 20%, rgba(20,15,13,0.35) 42%, transparent 60%)",
        }}
      />
    </div>
  );
}

/** Bright amber-red gradient field for the operations slide. */
function EmberFlow() {
  return (
    <div className="absolute inset-0">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(115deg, #b8351b 0%, #E04C2C 34%, #f0813c 70%, #FFB41D 100%)",
        }}
      />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <filter id="emberBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="48" />
          </filter>
        </defs>
        <path
          d="M-100,300 C360,420 620,180 980,300 C1220,380 1360,300 1620,360 L1620,-80 L-100,-80 Z"
          fill="#7a2412"
          filter="url(#emberBlur)"
          opacity="0.55"
        />
        <path
          d="M-100,980 C420,840 700,900 1040,760 C1300,650 1420,720 1620,660"
          fill="none"
          stroke="#5a1a0c"
          strokeWidth="180"
          filter="url(#emberBlur)"
          opacity="0.4"
        />
      </svg>
    </div>
  );
}

/** Purple/magenta/orange aurora on near-black — partnership slide (Bain x Cloud vibe). */
function AuroraFlow() {
  return (
    <div className="absolute inset-0 bg-[#100b17]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: [
            "radial-gradient(50% 66% at 86% 24%, rgba(255,138,61,0.66) 0%, transparent 62%)",
            "radial-gradient(56% 74% at 72% 44%, rgba(199,58,140,0.9) 0%, transparent 60%)",
            "radial-gradient(60% 80% at 54% 60%, rgba(111,68,163,0.92) 0%, transparent 62%)",
            "radial-gradient(44% 60% at 90% 72%, rgba(224,76,44,0.6) 0%, transparent 60%)",
            "radial-gradient(40% 56% at 40% 88%, rgba(138,91,208,0.5) 0%, transparent 60%)",
          ].join(","),
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.10] mix-blend-soft-light"
        style={{
          backgroundImage:
            "repeating-linear-gradient(122deg, rgba(255,255,255,0.9) 0px, rgba(255,255,255,0) 3px 24px)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(96deg, #100b17 0%, rgba(16,11,23,0.85) 20%, rgba(16,11,23,0.32) 44%, transparent 62%)",
        }}
      />
    </div>
  );
}

const slides: Slide[] = [
  {
    label: "Win with HIG™",
    eyebrow: "Human Intelligence Governance",
    headline: "Human intelligence.\nGoverned. Scaled.",
    cta: { text: "Read More", href: "/about" },
    background: <WarmFlow />,
  },
  {
    label: "AI Adoption 2026",
    eyebrow: "AI Adoption Outlook",
    headline: "AI Adoption Outlook\n2026: A Winner's\nParadox",
    cta: { text: "Read More", href: "/capabilities/artificial-intelligence" },
    background: <AmberFlow />,
  },
  {
    label: "Operational Excellence",
    eyebrow: "Operations",
    headline: "Turn operational chaos\ninto governed, scalable\nexecution",
    cta: { text: "Read More", href: "/solutions/intelligent-process-optimization" },
    background: <EmberFlow />,
  },
  {
    label: "NexDyne x Cloud",
    eyebrow: "NexDyne x Cloud",
    headline: "Helping clients\naccelerate the\nadoption of AI solutions",
    cta: { text: "Learn about our partnerships", href: "/capabilities/technology" },
    background: <AuroraFlow />,
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
      style={{ height: "100vh", minHeight: 640 }}
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
          {s.background}
        </div>
      ))}

      {/* readability scrims: darken top-left (nav + headline) and bottom (navigator) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.34) 0%, rgba(0,0,0,0.06) 26%, transparent 48%, rgba(0,0,0,0.08) 78%, rgba(0,0,0,0.42) 100%)",
        }}
      />
      {/* grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
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
              <p className="mb-6 text-[1rem] md:text-[1.15rem] font-semibold tracking-[-0.01em] text-white/90 drop-shadow-sm">
                {slide.eyebrow}
              </p>
              <h1 className="whitespace-pre-line font-bold tracking-[-0.035em] leading-[0.99] text-[clamp(2.4rem,5.4vw,5rem)] drop-shadow-[0_2px_20px_rgba(0,0,0,0.25)]">
                {slide.headline}
              </h1>
              <Link href={slide.cta.href}>
                <span className="group mt-11 inline-flex items-center gap-4 text-[13px] font-bold uppercase tracking-[0.16em] text-white cursor-pointer">
                  {slide.cta.text}
                  <span className="relative block h-[2px] w-14 bg-white transition-all duration-300 group-hover:w-20">
                    <span className="absolute -right-[1px] -top-[4px] h-[10px] w-[10px] rotate-45 border-r-2 border-t-2 border-white" />
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
                        className="block h-full bg-[#FFB41D]"
                        style={{
                          animation: paused
                            ? "none"
                            : `heroFill ${SLIDE_MS}ms linear forwards`,
                          width: paused ? "35%" : undefined,
                        }}
                      />
                    )}
                    {i < active && <span className="block h-full w-full bg-white/50" />}
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
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/45">
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
