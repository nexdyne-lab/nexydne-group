import React from "react";
import { Link } from "wouter";

export interface InsightsFeaturedHeroProps {
  featuredArticle: {
    slug: string;
    title: string;
    dek: string;
    heroImage: string;
    topic: string;
    readTime: string;
    date: string;
  };
}

export default function InsightsFeaturedHero({
  featuredArticle,
}: InsightsFeaturedHeroProps) {
  return (
    <section className="relative w-full h-[70vh] min-h-[520px] md:min-h-[600px] lg:min-h-[680px] overflow-hidden bg-charcoal -mt-20 pt-20">
      {/* Full-bleed editorial photo */}
      <img
        src={featuredArticle.heroImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Solid charcoal/65 overlay for legibility — no gradient */}
      <div className="absolute inset-0 bg-charcoal/65" />

      {/* Content — left-aligned, centered vertically */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24">
        <div className="max-w-3xl">
          <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 mb-6">
            INSIGHTS · FEATURED
          </span>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] mb-6"
            style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
          >
            {featuredArticle.title}
          </h1>
          <p className="text-base md:text-lg text-white/85 leading-[1.65] max-w-[60ch] mb-8">
            {featuredArticle.dek}
          </p>
          <div className="text-[13px] uppercase tracking-[0.1em] text-white/70 mb-10">
            {featuredArticle.topic} · {featuredArticle.readTime} · {featuredArticle.date}
          </div>
          <Link href={`/insights/${featuredArticle.slug}`}>
            <span className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold text-[13px] tracking-[0.1em] uppercase hover:bg-primary-hover transition-colors cursor-pointer">
              Read article →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
