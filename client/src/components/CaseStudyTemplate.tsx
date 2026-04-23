// CaseStudyTemplate.tsx — PR 2 rewrite
// Changes: removed lucide-react, shadcn Button, font-serif, gradient overlays,
// bg-blue-* colors, rounded pills/cards. Light editorial layout with
// split-grid hero (image left, text right) matching Home.tsx Careers section.
// Metric grid replaces icon+text layout. Pullquote is typography-only.

import React from "react";
import { Link } from "wouter";
import { Separator } from "@/components/ui/separator";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface Metric {
  value: string;
  label: string;
}

interface CaseStudyTemplateProps {
  client: string;
  industry: string;
  title: string;
  subtitle: string;
  heroImage: string;
  challenge: string;
  solution: string;
  impact: string;
  metrics: Metric[];
  quote?: {
    text: string;
    author: string;
    role: string;
  };
  tags: string[];
  relatedCapability: {
    title: string;
    link: string;
  };
}

export default function CaseStudyTemplate({
  client,
  industry,
  title,
  subtitle,
  heroImage,
  challenge,
  solution,
  impact,
  metrics,
  quote,
  tags,
  relatedCapability
}: CaseStudyTemplateProps) {
  return (
    <div className="min-h-screen bg-white text-charcoal">
      <Navigation />

      {/* Hero — split-grid, image left / text right. No gradient overlay. */}
      <section className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">
          {/* Left — full image, flat overlay for legibility if needed */}
          <div className="relative min-h-[340px] lg:min-h-0 overflow-hidden">
            <img
              src={heroImage}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Flat single-color overlay — only when image is dark enough to warrant it */}
            <div className="absolute inset-0 bg-charcoal/10" />
          </div>

          {/* Right — text column */}
          <div className="bg-white flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-20 md:py-24">
            {/* Industry + client eyebrow */}
            <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
              {industry} · {client}
            </span>
            <h1
              className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem] text-charcoal leading-[1.1] mb-6"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              {title}
            </h1>
            <p className="text-base sm:text-lg text-charcoal/80 leading-[1.7] mb-10 max-w-xl">
              {subtitle}
            </p>

            {/* Capability link */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
              <Link href={relatedCapability.link}>
                <span className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold text-[13px] tracking-[0.1em] uppercase hover:bg-primary-hover transition-colors cursor-pointer">
                  Explore {relatedCapability.title}
                </span>
              </Link>
              <Link href="/case-studies">
                <span className="text-[13px] font-semibold uppercase tracking-[0.1em] text-charcoal border-b border-charcoal/40 hover:border-primary hover:text-primary transition-colors cursor-pointer pb-1">
                  All Case Studies
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics — typography grid, no icons, no dark card */}
      <section className="py-20 md:py-24 bg-subtle">
        <div className="px-6 sm:px-8 md:px-12 lg:px-16">
          <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
            Key Results
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12">
            {metrics.map((metric, index) => (
              <div key={index}>
                <p
                  className="text-3xl sm:text-4xl md:text-5xl text-primary mb-2"
                  style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
                >
                  {metric.value}
                </p>
                <p className="text-[13px] text-charcoal/60 leading-[1.6]">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative — two-column layout */}
      <section className="py-20 md:py-24 bg-white">
        <div className="px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Left sidebar — tags + related capability */}
            <div className="lg:col-span-4 order-2 lg:order-1 space-y-12">
              {/* Capabilities tags — square pills */}
              <div>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
                  Capabilities
                </span>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-subtle text-charcoal/70 text-[12px] font-medium tracking-[0.05em]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Related capability CTA */}
              <div className="border-t border-charcoal/10 pt-8">
                <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-4">
                  Ready for Similar Results?
                </span>
                <p className="text-[14px] text-charcoal/70 leading-[1.65] mb-6">
                  See how our {relatedCapability.title} practice can help your organization.
                </p>
                <Link href={relatedCapability.link}>
                  <span className="text-[13px] font-semibold uppercase tracking-[0.1em] text-charcoal border-b border-charcoal/40 hover:border-primary hover:text-primary transition-colors cursor-pointer pb-1">
                    Explore Capability
                  </span>
                </Link>
              </div>
            </div>

            {/* Right column — narrative prose */}
            <div className="lg:col-span-8 order-1 lg:order-2 space-y-14">

              {/* The Challenge */}
              <div>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
                  The Challenge
                </span>
                <div className="space-y-4 text-base text-charcoal/80 leading-[1.7]">
                  {challenge.split("\n").map((paragraph, i) => (
                    paragraph.trim() ? <p key={i}>{paragraph}</p> : null
                  ))}
                </div>
              </div>

              {/* The Solution */}
              <div>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
                  The Solution
                </span>
                <div className="space-y-4 text-base text-charcoal/80 leading-[1.7]">
                  {solution.split("\n").map((paragraph, i) => (
                    paragraph.trim() ? <p key={i}>{paragraph}</p> : null
                  ))}
                </div>
              </div>

              {/* Pullquote — no icon, typography-only */}
              {quote && (
                <blockquote className="border-l-4 border-primary pl-8 py-4">
                  <p
                    className="text-xl sm:text-2xl text-charcoal leading-[1.4] mb-6"
                    style={{ fontWeight: 400, letterSpacing: "-0.01em" }}
                  >
                    "{quote.text}"
                  </p>
                  <footer>
                    <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-charcoal">
                      {quote.author}
                    </p>
                    <p className="text-[13px] text-charcoal/60 mt-1">
                      {quote.role}
                    </p>
                  </footer>
                </blockquote>
              )}

              {/* The Impact */}
              <div>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
                  The Impact
                </span>
                <div className="space-y-4 text-base text-charcoal/80 leading-[1.7]">
                  {impact.split("\n").map((paragraph, i) => (
                    paragraph.trim() ? <p key={i}>{paragraph}</p> : null
                  ))}
                </div>
              </div>

              <Separator className="my-4" />

              {/* Bottom nav — text-link CTAs, no icon arrows */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <Link href="/case-studies">
                  <span className="text-[13px] font-semibold uppercase tracking-[0.1em] text-charcoal border-b border-charcoal/40 hover:border-primary hover:text-primary transition-colors cursor-pointer pb-1">
                    Back to All Case Studies
                  </span>
                </Link>
                <Link href="/contact">
                  <span className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold text-[13px] tracking-[0.1em] uppercase hover:bg-primary-hover transition-colors cursor-pointer">
                    Start Your Project
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
