import React from "react";
import { Link } from "wouter";

export interface SolutionHeroCta {
  label: string;
  href: string;
}

export interface SolutionHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  backgroundImage: string;
  primaryCta?: SolutionHeroCta;
  secondaryCta?: SolutionHeroCta;
}

export default function SolutionHero({
  eyebrow,
  title,
  subtitle,
  backgroundImage,
  primaryCta,
  secondaryCta,
}: SolutionHeroProps) {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] sm:min-h-[680px] lg:min-h-[760px] overflow-hidden bg-charcoal -mt-20 pt-20">
      {/* Background image, full-bleed */}
      <img
        src={backgroundImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Solid charcoal overlay for legibility — no gradient */}
      <div className="absolute inset-0 bg-charcoal/55" />

      {/* Content — left-aligned, centered vertically */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24">
        <div className="max-w-[900px]">
          {eyebrow && (
            <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 mb-6">
              {eyebrow}
            </span>
          )}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] mb-6"
            style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="text-base md:text-lg text-white/80 leading-[1.65] max-w-[60ch] mb-10">
              {subtitle}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
              {primaryCta && (
                <Link href={primaryCta.href}>
                  <span className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold text-[13px] tracking-[0.1em] uppercase hover:bg-primary-hover transition-colors cursor-pointer">
                    {primaryCta.label}
                  </span>
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.href}>
                  <span className="text-[13px] font-semibold uppercase tracking-[0.1em] text-white border-b border-white/40 hover:border-primary hover:text-primary transition-colors cursor-pointer pb-1">
                    {secondaryCta.label}
                  </span>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
