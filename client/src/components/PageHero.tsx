// PageHero.tsx — PR 3 Phase 1
// Single source of truth for all top-IA hero sections (Capabilities, Industries,
// About, Solutions + their sub-pages). Pattern mirrors CaseStudyTemplate.tsx:
// split-grid, image left / text right, flat white background, Instrument Sans,
// no icons, no gradient overlays, no dark panels.
//
// Usage:
//   <PageHero
//     eyebrow="CAPABILITY"
//     title="Technology"
//     subtitle="Modernize your stack without ripping out what works."
//     heroImage="https://images.unsplash.com/photo-xxxx?w=1600&q=80"
//     primaryCta={{ label: "Explore capabilities", href: "/capabilities" }}
//     secondaryCta={{ label: "Contact us", href: "/contact" }}
//   />

import React from "react";
import { Link } from "wouter";

export interface PageHeroCta {
  label: string;
  href: string;
}

export interface PageHeroProps {
  /** Small uppercase label above the title (e.g., "CAPABILITY", "INDUSTRY"). Optional. */
  eyebrow?: string;
  /** Main headline — the H1 of the page. Required. */
  title: string;
  /** One-line supporting copy below the headline. Optional. */
  subtitle?: string;
  /** Hero image URL — full-bleed on the left side on lg+, top on mobile. Required. */
  heroImage: string;
  /** Primary call-to-action button (filled, brand-colored). Optional. */
  primaryCta?: PageHeroCta;
  /** Secondary call-to-action (underlined text link). Optional. */
  secondaryCta?: PageHeroCta;
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  heroImage,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">
        {/* Left — image panel */}
        <div className="relative min-h-[340px] lg:min-h-0 overflow-hidden">
          <img
            src={heroImage}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Flat single-color overlay for legibility — no gradient */}
          <div className="absolute inset-0 bg-charcoal/10" />
        </div>

        {/* Right — text column */}
        <div className="bg-white flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-20 md:py-24">
          {eyebrow && (
            <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
              {eyebrow}
            </span>
          )}

          <h1
            className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem] text-charcoal leading-[1.1] mb-6"
            style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
          >
            {title}
          </h1>

          {subtitle && (
            <p className="text-base sm:text-lg text-charcoal/80 leading-[1.7] mb-10 max-w-xl">
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
                  <span className="text-[13px] font-semibold uppercase tracking-[0.1em] text-charcoal border-b border-charcoal/40 hover:border-primary hover:text-primary transition-colors cursor-pointer pb-1">
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
