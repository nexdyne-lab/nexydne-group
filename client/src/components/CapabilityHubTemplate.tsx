import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BackToTop } from "@/components/BackToTop";
import { SEO } from "@/components/SEO";
import {
  capabilityPerspectives,
  type PerspectiveTopic,
} from "@/data/capabilityPerspectives";

export interface CapabilityHubTemplateProps {
  hubName: string;
  slug: string;
  heroSubtitle: string;
  heroImage: string;
  heroFocal?: string;
  experienceStats: { number: string; label: string }[];
  ambitions?: { title: string; description: string }[];
  ambitionsCTAText?: string;
  howWeCanHelp?: { title: string; description: string; href: string }[];
  thoughtLeadership: {
    slug: string;
    title: string;
    readTime: string;
    image: string;
    tag: string;
  }[];
  approachPillars: { step: string; title: string; body: string }[];
  featuredCases: {
    slug: string;
    title: string;
    industry: string;
    metric: string;
    image: string;
  }[];
  relatedCapabilities: { slug?: string; href?: string; name: string }[];
  ctaLeadName?: string;
  /** Which curated perspective set to show when thoughtLeadership is empty. */
  insightsTopic?: PerspectiveTopic;
}

const ease = [0.22, 1, 0.36, 1] as const;

/** Red-rule eyebrow for light surfaces */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="block h-[3px] w-9 bg-primary" />
      <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {children}
      </span>
    </div>
  );
}

export default function CapabilityHubTemplate(
  props: CapabilityHubTemplateProps
) {
  const {
    hubName,
    slug,
    heroSubtitle,
    experienceStats,
    ambitions = [],
    ambitionsCTAText,
    howWeCanHelp = [],
    thoughtLeadership,
    approachPillars,
    featuredCases,
    relatedCapabilities,
    ctaLeadName,
    insightsTopic,
  } = props;

  // "Latest perspectives" — use the page's own thoughtLeadership when present,
  // otherwise fall back to a curated set of real, topic-relevant insights.
  const perspectives = thoughtLeadership.length
    ? thoughtLeadership.map((t) => ({
        title: t.title,
        description: "",
        category: t.tag,
        readTime: t.readTime,
        image: t.image,
        link: `/insights/${t.slug}`,
      }))
    : capabilityPerspectives[insightsTopic ?? "ai"];

  // Related capabilities tile grid
  const relatedColCount = Math.min(Math.max(relatedCapabilities.length, 1), 3);
  const relatedGridCls =
    relatedColCount >= 3
      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      : "grid grid-cols-1 sm:grid-cols-2 gap-4";

  const ctaHeading = ctaLeadName || `Talk to our ${hubName} lead`;
  const ambitionsCTA =
    ambitionsCTAText || `Talk to us about your ${hubName} ambition →`;

  return (
    <div className="min-h-screen bg-[#FEFEFE] font-sans text-black selection:bg-primary selection:text-white">
      <SEO
        title={hubName}
        description={heroSubtitle.slice(0, 160)}
        canonical={`/capabilities/${slug}`}
      />
      <Navigation />

      {/* 1. Typographic intro — EY-style black statement band (no photo) */}
      <section className="bg-black text-white pt-32 md:pt-40 pb-14 md:pb-20">
        <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14">
          <Breadcrumbs variant="light" />
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease }}
          >
            <h1 className="mt-8 font-bold tracking-[-0.035em] leading-[1.02] text-[clamp(2.6rem,5vw,4.2rem)] text-white">
              {hubName}
            </h1>
            <p className="mt-10 flex items-stretch gap-4 max-w-[68ch] text-[1.2rem] md:text-[1.35rem] leading-[1.5] font-medium text-white/95">
              <span
                className="w-[3px] shrink-0 self-stretch bg-primary"
                aria-hidden
              />
              <span>{heroSubtitle}</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Experience & Impact — editorial mega-stats on light */}
      <section className="bg-[#FEFEFE]">
        <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14 py-12 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <Eyebrow>Experience and Impact</Eyebrow>
          </motion.div>
          <div
            className={`mt-10 grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-12 ${
              experienceStats.length > 3 ? "lg:grid-cols-4" : ""
            }`}
          >
            {experienceStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease, delay: index * 0.06 }}
                className="border-t border-black/15 pt-7 text-center"
              >
                <div className="text-[2.4rem] md:text-[3.4rem] text-black font-bold tracking-[-0.025em] leading-[1] [overflow-wrap:anywhere]">
                  {stat.number.replace(/-/g, "‑")}
                </div>
                <div className="text-[0.95rem] text-black/65 mt-4 leading-[1.5] max-w-[30ch] mx-auto">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Ambitions — EY topic blocks (borderless), single CTA */}
      {ambitions.length > 0 && (
        <section className="bg-[#FEFEFE]">
          <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14 py-10 md:py-12 lg:py-14">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="mb-12 md:mb-14 max-w-4xl"
            >
              <Eyebrow>Where to start</Eyebrow>
              <h2 className="nx-h2 text-black">
                What's your {hubName} ambition?
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 lg:gap-x-16 gap-y-12 mb-14">
              {ambitions.map((ambition, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease, delay: (index % 3) * 0.06 }}
                >
                  <h3 className="text-[1.35rem] md:text-[1.5rem] font-semibold text-black tracking-[-0.015em] leading-[1.25] mb-3">
                    {ambition.title}
                  </h3>
                  <p className="text-[0.98rem] text-black/75 leading-[1.65]">
                    {ambition.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <Link href="/contact">
                <span className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-black cursor-pointer">
                  {ambitionsCTA}
                </span>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* 4. How we can help — flat hairline service cards */}
      {howWeCanHelp.length > 0 && (
        <section id="how-we-can-help" className="bg-[#FEFEFE] scroll-mt-24">
          <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14 py-10 md:py-12 lg:py-14">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="mb-12 md:mb-14 max-w-4xl"
            >
              <Eyebrow>How we can help</Eyebrow>
              <h2 className="nx-h2 text-black">Our {hubName} services</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {howWeCanHelp.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease, delay: (index % 3) * 0.06 }}
                >
                  <Link
                    href={service.href}
                    className="group block bg-white p-8 lg:p-9 ring-1 ring-black/10 hover:ring-black/30 transition-shadow cursor-pointer h-full"
                  >
                    <h3 className="nx-h3 text-black mb-3 leading-[1.25]">
                      {service.title}
                    </h3>
                    <p className="text-base text-black/75 leading-[1.6] mb-6">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.1em] text-black">
                      Learn more
                      <ArrowRight className="w-3.5 h-3.5 text-primary transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Thought Leadership — EY open cards */}
      <section className="bg-[#FEFEFE]">
        <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14 py-10 md:py-12 lg:py-14">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-12 md:mb-14 max-w-4xl"
          >
            <Eyebrow>Our Thinking</Eyebrow>
            <h2 className="nx-h2 text-black">
              Latest perspectives on {hubName}
            </h2>
          </motion.div>

          {/* Large EY-style cards — flush image, category, title, dek, meta */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
            {perspectives.map((insight, index) => (
              <motion.div
                key={insight.link}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: index * 0.06 }}
              >
                <Link href={insight.link} className="group block cursor-pointer">
                  <div className="aspect-[3/2] overflow-hidden mb-6">
                    <img
                      src={insight.image}
                      alt={insight.title}
                      className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-primary mb-3">
                    {insight.category}
                  </p>
                  <h3 className="text-[1.35rem] md:text-[1.5rem] font-semibold text-black tracking-[-0.015em] leading-[1.3] mb-3 group-hover:text-primary transition-colors">
                    {insight.title}
                  </h3>
                  {insight.description && (
                    <p className="text-[0.98rem] text-black/70 leading-[1.6] mb-4">
                      {insight.description}
                    </p>
                  )}
                  <p className="text-[0.85rem] text-black/50">
                    {insight.readTime}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Approach — borderless pillars on light */}
      <section className="bg-[#FEFEFE]">
        <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14 py-10 md:py-12 lg:py-14">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-12 md:mb-14 max-w-4xl"
          >
            <Eyebrow>Our Approach</Eyebrow>
            <h2 className="nx-h2 text-black">How we deliver {hubName}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 lg:gap-x-16 gap-y-12">
            {approachPillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: index * 0.06 }}
                className="border-t-2 border-black pt-7"
              >
                <h3 className="text-[1.35rem] md:text-[1.5rem] font-semibold text-black mb-4 leading-[1.25] tracking-[-0.015em]">
                  {pillar.title}
                </h3>
                <p className="text-base text-black/70 leading-[1.65]">
                  {pillar.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Featured Case Studies — EY open cards */}
      <section className="bg-[#FEFEFE]">
        <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14 py-10 md:py-12 lg:py-14">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-12 md:mb-14 max-w-4xl"
          >
            <Eyebrow>Related Case Studies</Eyebrow>
            <h2 className="nx-h2 text-black">
              How clients deploy {hubName}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featuredCases.map((c, index) => (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: index * 0.06 }}
              >
                {/* EY open card — flush image, text directly on the canvas */}
                <Link
                  href={`/cases/${c.slug}`}
                  className="group block cursor-pointer"
                >
                  <div className="aspect-[16/9] overflow-hidden mb-6">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <p className="text-[11px] uppercase tracking-[0.1em] text-black/60 mb-3">
                    {c.industry} · {c.metric}
                  </p>
                  <h3 className="text-[1.35rem] md:text-[1.5rem] font-semibold text-black tracking-[-0.01em] leading-[1.35] mb-3 group-hover:text-primary transition-colors">
                    {c.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.1em] text-black">
                    Read the case
                    <ArrowRight className="w-3.5 h-3.5 text-primary transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Related Capabilities + Closing CTA — light canvas */}
      <section className="bg-[#FEFEFE]">
        <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14 py-10 md:py-12 lg:py-14">
          {relatedCapabilities.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="mb-16"
            >
              <Eyebrow>Explore More</Eyebrow>
              <div className={`${relatedGridCls} mt-8`}>
                {relatedCapabilities.map((cap, index) => (
                  <Link
                    key={cap.href ?? cap.slug ?? index}
                    href={cap.href ?? `/capabilities/${cap.slug}`}
                    className="group flex items-center justify-between gap-3 ring-1 ring-black/10 hover:ring-black/40 px-6 py-5 transition-shadow cursor-pointer"
                  >
                    <span className="text-base font-semibold text-black tracking-tight group-hover:text-primary transition-colors">
                      {cap.name}
                    </span>
                    <ArrowRight className="w-4 h-4 text-primary transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="max-w-3xl"
          >
            <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-6">
              Ready to Talk
            </span>
            <h2 className="nx-h2 text-black mb-8">{ctaHeading}</h2>
            <p className="text-[1.05rem] md:text-[1.12rem] leading-[1.7] text-black/75 max-w-[58ch] mb-10">
              Tell us what's breaking, what's stuck, or what you're trying to
              build. Our {hubName} practice will read your note and respond
              within two business days with a concrete next step — not a sales
              pitch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <span className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-black cursor-pointer">
                  Start a conversation
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link href={`/cases?capability=${slug}`}>
                <span className="group inline-flex items-center justify-center gap-2 border border-black/40 px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-black transition-colors hover:border-black hover:bg-black hover:text-white cursor-pointer">
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  See all {hubName} work
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <BackToTop />
      <Footer />
    </div>
  );
}
