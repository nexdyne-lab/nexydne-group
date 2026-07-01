import { Link } from "wouter";
import { motion } from "framer-motion";
import { Warp } from "@paper-design/shaders-react";

/**
 * NexDyne homepage hero — BCG-style statement hero (Brand v2, neutral-first) with a
 * warm brand-colour gradient field. Off-white base + a soft orange-red→amber mesh and
 * grain for depth. Giant Instrument Sans statement; one brand word in a warm gradient.
 */

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.06 } },
};
const rise = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

// subtle fractal-noise grain (data URI) for depth on the gradient field
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export function BainHero() {
  return (
    <section className="relative w-full overflow-hidden bg-background">
      {/* Animated Warp shader — brand-colour field (orange-red / amber / purple) */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Warp
          style={{ width: "100%", height: "100%" }}
          proportion={0.45}
          softness={1}
          distortion={0.25}
          swirl={0.85}
          swirlIterations={10}
          shape="checks"
          shapeScale={0.1}
          scale={1}
          rotation={0}
          speed={0.7}
          colors={["#E04C2C", "#FF7A2F", "#FFB41D", "#6F44A3"]}
        />
      </div>
      {/* mute saturation so it reads as a refined brand field, not neon */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-background/25" />
      {/* keep the headline side readable */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, #F7F9FC 0%, rgba(247,249,252,0.90) 34%, rgba(247,249,252,0.45) 58%, rgba(247,249,252,0.12) 80%, transparent 100%)",
        }}
      />
      {/* fine grain for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-multiply"
        style={{ backgroundImage: GRAIN }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="flex items-center min-h-[92vh] py-28">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-[1040px]"
          >
            <motion.div variants={rise} className="flex items-center gap-3 mb-8">
              <span className="block h-[3px] w-12 bg-primary" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-charcoal/70">
                Welcome to NexDyne Consulting Group
              </span>
            </motion.div>

            <motion.h1
              variants={rise}
              className="text-charcoal font-bold tracking-[-0.04em] leading-[0.93] text-[clamp(3rem,7.8vw,6.5rem)]"
            >
              Human intelligence.
              <br />
              Governed.{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(100deg, #E04C2C 0%, #FF7A2F 45%, #FFB41D 100%)" }}
              >
                Scaled.
              </span>
            </motion.h1>

            <motion.p
              variants={rise}
              className="mt-9 text-[1.25rem] md:text-[1.45rem] leading-[1.5] text-charcoal/70 max-w-[58ch]"
            >
              We design the human systems — judgment, accountability, and trust —
              that let intelligent machines scale without losing control.
            </motion.p>

            <motion.div variants={rise} className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link href="/about">
                <span className="group inline-flex items-center gap-2.5 bg-primary text-primary-foreground text-[13px] font-semibold uppercase tracking-[0.1em] px-8 py-4 hover:bg-primary-hover transition-colors cursor-pointer shadow-[0_14px_30px_-12px_rgba(224,76,44,0.6)]">
                  See how we work
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </Link>
              <Link href="/capabilities/artificial-intelligence">
                <span className="inline-flex items-center text-[13px] font-semibold uppercase tracking-[0.1em] text-charcoal border-b-2 border-charcoal/25 pb-1 hover:border-primary transition-colors cursor-pointer">
                  Explore the HIG™ doctrine
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
