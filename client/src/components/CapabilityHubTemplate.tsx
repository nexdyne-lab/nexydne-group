import { motion } from "framer-motion";
import { Link } from "wouter";
import { BrandMesh } from "@/components/BrandMesh";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BackToTop } from "@/components/BackToTop";
import { SEO } from "@/components/SEO";

export interface CapabilityHubTemplateProps {
  hubName: string;
  slug: string;
  heroSubtitle: string;
  heroImage: string;
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
}

export default function CapabilityHubTemplate(
  props: CapabilityHubTemplateProps
) {
  const {
    hubName,
    slug,
    heroSubtitle,
    heroImage,
    experienceStats,
    ambitions = [],
    ambitionsCTAText,
    howWeCanHelp = [],
    thoughtLeadership,
    approachPillars,
    featuredCases,
    relatedCapabilities,
    ctaLeadName,
  } = props;

  // Stat grid: 3 or 4 columns based on item count
  const statColCount = Math.min(Math.max(experienceStats.length, 1), 4);
  const statGridCls =
    statColCount >= 4
      ? "grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8"
      : statColCount === 3
      ? "grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8"
      : "grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8";

  // Insight grid: 2 or 3 columns based on item count
  const insightColCount = Math.min(Math.max(thoughtLeadership.length, 1), 3);
  const insightGridCls =
    insightColCount >= 3
      ? "grid grid-cols-1 md:grid-cols-3 gap-5"
      : insightColCount === 2
      ? "grid grid-cols-1 md:grid-cols-2 gap-5"
      : "grid grid-cols-1 gap-5";

  // Related capabilities tile grid
  const relatedColCount = Math.min(Math.max(relatedCapabilities.length, 1), 3);
  const relatedGridCls =
    relatedColCount >= 3
      ? "grid grid-cols-2 md:grid-cols-3 gap-4"
      : "grid grid-cols-2 gap-4";

  const ctaHeading = ctaLeadName || `Talk to our ${hubName} lead`;
  const ambitionsCTA =
    ambitionsCTAText || `Talk to us about your ${hubName} ambition →`;

  return (
    <div className="min-h-screen bg-white font-sans text-charcoal selection:bg-primary selection:text-white">
      <SEO
        title={hubName}
        description={heroSubtitle.slice(0, 160)}
        canonical={`/capabilities/${slug}`}
      />
      <Navigation />

      {/* Hero — plain neutral statement (Brand v2) */}
      <section className="relative bg-background overflow-hidden min-h-[62vh] flex items-center pt-32 pb-20 md:pt-40 md:pb-24">
        <BrandMesh variant="light" />
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(90deg, #F7F9FC 0%, rgba(247,249,252,0.6) 30%, rgba(247,249,252,0.05) 55%, transparent 70%)" }} />
        <div className="container relative z-10 px-4 md:px-12">
          <Breadcrumbs />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mt-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="block h-[3px] w-9 bg-primary" />
              <span className="nx-eyebrow text-muted-foreground">
                Capabilities
              </span>
            </div>
            <h1 className="nx-h1 text-charcoal mb-6">
              {hubName}
            </h1>
            <p className="nx-lead text-muted-foreground max-w-[60ch]">
              {heroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience & Impact — charcoal dark-authority band (orange signal accent) */}
      <section className="bg-charcoal text-white border-t-2 border-primary">
        <div className="container px-4 md:px-12 nx-section">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="nx-eyebrow text-amber mb-12 text-center"
          >
            Experience & Impact
          </motion.p>

          <div className={statGridCls}>
            {experienceStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="text-center"
              >
                <div className="text-[2.75rem] md:text-[3.5rem] text-white font-bold tracking-[-0.02em] leading-[1]">
                  {stat.number}
                </div>
                <div className="text-[13px] uppercase tracking-[0.1em] text-white/85 mt-3 leading-[1.4]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambitions — non-clickable starting-point cards */}
      {ambitions.length > 0 && (
        <section className="bg-white">
          <div className="container px-4 md:px-12 nx-section">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <span className="nx-eyebrow text-charcoal/60 mb-5 block">
                Where to start
              </span>
              <h3 className="nx-h2 text-charcoal mb-12">
                What's your {hubName} ambition?
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
              {ambitions.map((ambition, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white p-8 lg:p-10 border border-border transition duration-300 hover:border-primary/40 hover:shadow-[0_22px_44px_-24px_rgba(224,76,44,0.4)] hover:-translate-y-1"
                >
                  <h4 className="nx-h3 text-charcoal mb-3 leading-[1.25]">
                    {ambition.title}
                  </h4>
                  <p className="text-base text-charcoal/75 leading-[1.55]">
                    {ambition.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/contact">
                <span className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold text-[13px] tracking-[0.1em] uppercase hover:bg-primary-hover transition-colors cursor-pointer">
                  {ambitionsCTA}
                </span>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* How we can help — clickable service cards */}
      {howWeCanHelp.length > 0 && (
        <section className="bg-grey">
          <div className="container px-4 md:px-12 nx-section">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <span className="nx-eyebrow text-charcoal/60 mb-5 block">
                How we can help
              </span>
              <h3 className="nx-h2 text-charcoal mb-12">
                Our {hubName} services
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {howWeCanHelp.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white"
                >
                  <Link
                    href={service.href}
                    className="bg-white p-8 lg:p-10 border border-border transition duration-300 hover:border-primary/40 hover:shadow-[0_22px_44px_-24px_rgba(224,76,44,0.4)] hover:-translate-y-1 cursor-pointer h-full group block"
                  >
                    <h4 className="nx-h3 text-charcoal mb-3 leading-[1.25] group-hover:text-primary transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-base text-charcoal/75 leading-[1.55] mb-4">
                      {service.description}
                    </p>
                    <span className="text-[13px] uppercase tracking-[0.1em] text-primary font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition">
                      Read more <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Thought Leadership */}
      <section className="bg-white">
        <div className="container px-4 md:px-12 nx-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16 max-w-4xl"
          >
            <p className="nx-eyebrow text-charcoal/60 mb-5">
              Our Thinking
            </p>
            <h2 className="nx-h2 text-charcoal">
              Latest perspectives on {hubName}
            </h2>
          </motion.div>

          {thoughtLeadership.length > 0 ? (
            <div className={insightGridCls}>
              {thoughtLeadership.map((insight, index) => (
                <motion.div
                  key={insight.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white"
                >
                  <Link
                    href={`/insights/${insight.slug}`}
                    className="group block bg-white p-8 lg:p-10 border border-border transition duration-300 hover:border-primary/40 hover:shadow-[0_22px_44px_-24px_rgba(224,76,44,0.4)] hover:-translate-y-1 cursor-pointer h-full"
                  >
                    <div className="aspect-[16/9] overflow-hidden mb-6 rounded-md">
                      <img
                        src={insight.image}
                        alt={insight.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                    <p className="text-[11px] uppercase tracking-[0.1em] text-charcoal/60 mb-3">
                      {insight.tag}
                    </p>
                    <h3 className="nx-h3 text-charcoal leading-[1.25] mb-3 group-hover:text-primary transition-colors">
                      {insight.title}
                    </h3>
                    <p className="text-sm text-charcoal/60">
                      {insight.readTime}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-base text-charcoal/60 leading-[1.55]">
              Insights coming soon.
            </p>
          )}
        </div>
      </section>

      {/* Approach (3-column pillars) */}
      <section className="bg-grey">
        <div className="container px-4 md:px-12 nx-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16 max-w-4xl"
          >
            <p className="nx-eyebrow text-charcoal/60 mb-5">
              Our Approach
            </p>
            <h2 className="nx-h2 text-charcoal">
              How we deliver {hubName}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {approachPillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white p-8"
              >
                <p className="text-xs text-primary font-semibold mb-3">
                  {pillar.step}
                </p>
                <h3 className="nx-h3 text-charcoal mb-3 leading-[1.25]">
                  {pillar.title}
                </h3>
                <p className="text-base text-charcoal/75 leading-[1.55]">
                  {pillar.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="bg-white">
        <div className="container px-4 md:px-12 nx-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16 max-w-4xl"
          >
            <p className="nx-eyebrow text-charcoal/60 mb-5">
              Related Case Studies
            </p>
            <h2 className="nx-h2 text-charcoal">
              How clients deploy {hubName}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featuredCases.map((c, index) => (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white"
              >
                <Link
                  href={`/cases/${c.slug}`}
                  className="group block bg-white p-8 lg:p-10 border border-border transition duration-300 hover:border-primary/40 hover:shadow-[0_22px_44px_-24px_rgba(224,76,44,0.4)] hover:-translate-y-1 cursor-pointer h-full"
                >
                  <div className="aspect-[16/9] overflow-hidden mb-6 rounded-md">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <p className="text-[11px] uppercase tracking-[0.1em] text-charcoal/60 mb-3">
                    {c.industry} · {c.metric}
                  </p>
                  <h3 className="nx-h3 text-charcoal leading-[1.25] mb-3 group-hover:text-primary transition-colors">
                    {c.title}
                  </h3>
                  <span className="inline-flex items-center text-[13px] font-semibold uppercase tracking-[0.1em] text-charcoal group-hover:text-primary transition-colors">
                    Read the case
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Capabilities + Closing CTA */}
      <section className="bg-charcoal text-white">
        <div className="container px-4 md:px-12 nx-section max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="nx-eyebrow text-white/70 mb-6">
              Explore More
            </p>

            <div className={`${relatedGridCls} mb-16`}>
              {relatedCapabilities.map((cap, index) => (
                <motion.div
                  key={cap.href ?? cap.slug ?? index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Link
                    href={cap.href ?? `/capabilities/${cap.slug}`}
                    className="group block bg-charcoal/40 border border-white/10 p-6 hover:border-primary transition cursor-pointer"
                  >
                    <span className="inline-flex items-center justify-between w-full text-base text-white font-semibold tracking-tight group-hover:text-primary transition-colors">
                      {cap.name}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <h2 className="nx-h2 text-white mb-8">
              {ctaHeading}
            </h2>
            <p className="nx-lead text-white/80 max-w-[60ch] mb-10">
              Tell us what's breaking, what's stuck, or what you're trying to build. Our {hubName} practice will read your note and respond within two business days with a concrete next step — not a sales pitch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <span className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 text-base font-semibold tracking-tight transition-colors hover:bg-primary/90 cursor-pointer">
                  Start a conversation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </span>
              </Link>
              <Link href={`/cases?capability=${slug}`}>
                <span className="inline-flex items-center justify-center text-white/85 px-8 py-4 text-base font-semibold tracking-tight transition-colors hover:text-white cursor-pointer border border-white/20">
                  <ArrowLeft className="w-4 h-4 mr-2" />
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

