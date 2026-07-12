import React from "react";
import { Link } from "wouter";
import { BrandMesh } from "@/components/BrandMesh";
import { motion } from "framer-motion";

export interface SolutionHeroCta {
  label: string;
  href: string;
}

export interface SolutionHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  /** Retained for API compatibility; the plain hero no longer renders a full-bleed image. */
  backgroundImage?: string;
  /** Real photo rendered full-bleed with a left-directional light scrim (opt-in). */
  heroImage?: string;
  /** CSS background-position for heroImage (e.g. "70% 50%"). */
  heroFocal?: string;
  primaryCta?: SolutionHeroCta;
  secondaryCta?: SolutionHeroCta;
  /** Optional override for the hero H1 className. Default is the neutral statement scale. */
  h1ClassName?: string;
  /** Optional override for the hero outer sizing (min-height). */
  containerClassName?: string;
}

const ease = [0.22, 1, 0.36, 1] as const;
const container = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } } };
const rise = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } };

/**
 * NexDyne interior hero — plain BCG-style statement (Brand v2, neutral-first).
 * Off-white canvas, charcoal type, one orange-red signal CTA. No full-bleed image,
 * no dark overlay — typography carries it, matching the homepage hero.
 */
export default function SolutionHero({
  eyebrow,
  title,
  subtitle,
  heroImage,
  heroFocal,
  primaryCta,
  secondaryCta,
  h1ClassName = "text-charcoal font-bold tracking-[-0.035em] leading-[1.0] text-[clamp(2.4rem,5.4vw,4.2rem)]",
  containerClassName = "min-h-[56vh]",
}: SolutionHeroProps) {
  return (
    <section className="relative w-full bg-background overflow-hidden">
      {heroImage ? (
        <>
          {/* Real photo, full-bleed, with a left-directional light scrim so the
              charcoal statement stays legible on the left column (EY style). */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: `url(${heroImage})`,
              backgroundSize: "cover",
              backgroundPosition: heroFocal ?? "70% 50%",
            }}
          />
          {/* Solid behind the text, then a clean fall-off so the right half of
              the photo shows true — the scrim stops at the copy. */}
          <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(90deg, #FEFEFE 0%, #FEFEFE 40%, rgba(254,254,254,0.7) 50%, rgba(254,254,254,0) 62%)" }} />
        </>
      ) : (
        <>
          {/* Soft neutral atmosphere — a whisper of the signal warmth */}
          <BrandMesh variant="light" />
          <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(90deg, #F7F9FC 0%, rgba(247,249,252,0.6) 30%, rgba(247,249,252,0.05) 55%, transparent 70%)" }} />
        </>
      )}

      <div className="relative mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14">
        <div className={`flex flex-col justify-center ${containerClassName} pt-36 pb-24 lg:pt-44 lg:pb-28`}>
          <motion.div variants={container} initial="hidden" animate="show" className="max-w-[920px]">
            {eyebrow && (
              <motion.div variants={rise} className="flex items-center gap-3 mb-7">
                <span className="block h-[3px] w-9 bg-primary" />
                <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {eyebrow}
                </span>
              </motion.div>
            )}

            <motion.h1 variants={rise} className={h1ClassName}>
              {title}
            </motion.h1>

            {subtitle && (
              <motion.p
                variants={rise}
                className="mt-7 text-[1.1rem] md:text-[1.2rem] leading-[1.55] text-muted-foreground max-w-[60ch]"
              >
                {subtitle}
              </motion.p>
            )}

            {(primaryCta || secondaryCta) && (
              <motion.div variants={rise} className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
                {primaryCta && (
                  <Link href={primaryCta.href}>
                    <span className="group inline-flex items-center gap-2.5 bg-primary text-primary-foreground text-[13px] font-semibold uppercase tracking-[0.1em] px-7 py-4 hover:bg-primary-hover transition-colors cursor-pointer">
                      {primaryCta.label}
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </span>
                  </Link>
                )}
                {secondaryCta && (
                  <Link href={secondaryCta.href}>
                    <span className="inline-flex items-center text-[13px] font-semibold uppercase tracking-[0.1em] text-charcoal border-b-2 border-charcoal/25 pb-1 hover:border-primary transition-colors cursor-pointer">
                      {secondaryCta.label}
                    </span>
                  </Link>
                )}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
