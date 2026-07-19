import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { Check } from "lucide-react";

/**
 * /resources — hub listing the free lead-magnet tools. Each card links to the
 * magnet's landing page (config-driven /resources/:slug). Add new magnets to
 * the TOOLS array as they ship.
 */

const TOOLS = [
  {
    slug: "ai-readiness-guide",
    eyebrow: "Diagnostic · 10 questions · ~15 minutes",
    title: "The SMB AI Readiness Guide",
    desc: "Is your business actually ready for AI? Evaluate your processes, data, workforce, and governance — and know whether AI will pay off before you spend a dollar.",
    cover: "/images/ai-readiness-guide-cover.png",
    points: [
      "10 self-scored readiness questions",
      "Warning signs + one action per question",
      "A clear readiness band and next step",
    ],
  },
  {
    slug: "operations-readiness-checklist",
    eyebrow: "Checklist · 15 points · ~10 minutes",
    title: "The Operations Readiness Checklist",
    desc: "Is your business ready to scale? A 15-point check across the systems that break first when you grow — process, ownership, data, handoffs, and risk.",
    cover: "/images/operations-readiness-checklist-cover.png",
    points: [
      "15 checks across five operating areas",
      "A “ready when” line for every item",
      "A clear read: scale now, or shore up first",
    ],
  },
];

export default function ResourcesIndex() {
  return (
    <div className="min-h-screen bg-white text-charcoal font-sans">
      <SEO
        title="Free Resources — Readiness Tools for Growing Companies"
        description="Free, practical diagnostics from NexDyne: evaluate your AI readiness and operational readiness before you invest. Built for leaders of growing companies."
        canonical="/resources"
      />
      <Navigation />

      {/* Hero — dark authority band */}
      <section className="bg-charcoal pt-32 md:pt-40">
        <div className="max-w-6xl mx-auto px-6 pb-14 md:pb-20">
          <div className="flex items-center gap-3 mb-5">
            <span className="block h-[3px] w-9 bg-primary" />
            <span className="nx-eyebrow text-white/70">Free Resources</span>
          </div>
          <h1 className="nx-h1 text-white max-w-3xl">
            Practical tools for leaders who check readiness before they invest.
          </h1>
          <p className="nx-lead text-white/60 mt-6 max-w-2xl">
            Free, self-scored diagnostics built from our client work. No theory —
            score yourself honestly, find your gaps, and know your next move.
          </p>
        </div>
      </section>

      {/* Tool cards */}
      <section className="bg-off-white border-b border-border">
        <div className="max-w-6xl mx-auto px-6 nx-section">
          <div className="grid md:grid-cols-2 gap-8">
            {TOOLS.map((t) => (
              <div
                key={t.slug}
                className="group bg-white border border-border hover:border-primary/50 transition-colors duration-300 flex flex-col"
              >
                {/* Cover strip — brand red so the charcoal booklet reads clearly */}
                <div className="bg-primary flex items-center justify-center py-10 px-8 overflow-hidden">
                  <img
                    src={t.cover}
                    alt={`${t.title} — cover`}
                    className="w-40 border border-white/20 shadow-[0_24px_50px_-16px_rgba(0,0,0,0.55)] -rotate-2 group-hover:rotate-0 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <span className="nx-eyebrow text-charcoal/55">{t.eyebrow}</span>
                  <h2 className="nx-h3 text-charcoal mt-3">{t.title}</h2>
                  <p className="text-[15px] text-charcoal/70 leading-relaxed mt-3">{t.desc}</p>
                  <ul className="mt-5 space-y-2.5">
                    {t.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-[14px] text-charcoal/75 leading-snug">
                        <Check className="mt-0.5 w-4 h-4 text-primary flex-none" strokeWidth={3} />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-6 border-t border-border flex items-center justify-between gap-4">
                    <Link
                      href={`/resources/${t.slug}`}
                      className="inline-block whitespace-nowrap bg-primary px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-white hover:bg-primary-hover transition-colors cursor-pointer"
                    >
                      Get the free guide
                    </Link>
                    <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-charcoal/40">
                      Free · PDF
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-sm text-charcoal/55 text-center">
            More tools are on the way. Want one applied to your business?{" "}
            <Link href="/contact" className="text-primary font-semibold hover:underline">
              Talk to us
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Close — assessment ladder */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 nx-section text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span className="nx-eyebrow text-charcoal/60">The next step</span>
            <span className="h-px w-8 bg-primary" />
          </div>
          <h2 className="nx-h2 text-charcoal mt-6">
            Scored yourself? We'll pressure-test it with you.
          </h2>
          <p className="nx-lead text-charcoal/65 mt-5 max-w-xl mx-auto">
            Our readiness assessments apply these frameworks to your actual
            business — and hand you a prioritized, honest plan.
          </p>
          <Link
            href="/contact"
            className="mt-9 inline-block whitespace-nowrap bg-charcoal px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-white hover:bg-primary transition-colors cursor-pointer"
          >
            Request an assessment
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
