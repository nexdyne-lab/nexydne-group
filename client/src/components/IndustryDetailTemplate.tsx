import { motion } from "framer-motion";
import { Link } from "wouter";
import { BrandMesh } from "@/components/BrandMesh";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BackToTop } from "@/components/BackToTop";
import { SEO } from "@/components/SEO";

export interface IndustryDetailTemplateProps {
  industry: string;
  slug: string;
  heroSubtitle: string;
  heroImage: string;
  povParagraphs: string[];
  challenges: { title: string; body: string }[];
  capabilities: { name: string; href: string; blurb: string }[];
  experienceStats: { number: string; label: string }[];
  povQuote: { text: string; author: string; role: string };
  featuredCases: {
    slug: string;
    title: string;
    industry: string;
    metric: string;
    image: string;
  }[];
  industryLeadCTAText?: string;
}

export default function IndustryDetailTemplate(props: IndustryDetailTemplateProps) {
  const {
    industry,
    slug,
    heroSubtitle,
    heroImage,
    povParagraphs,
    challenges,
    capabilities,
    experienceStats,
    povQuote,
    featuredCases,
    industryLeadCTAText,
  } = props;

  const challengeColCount = Math.min(Math.max(challenges.length, 1), 4);
  const challengeGridCls =
    challengeColCount >= 4
      ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
      : challengeColCount === 3
      ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      : "grid grid-cols-1 md:grid-cols-2 gap-5";

  const capabilityColCount = Math.min(Math.max(capabilities.length, 1), 4);
  const capabilityGridCls =
    capabilityColCount >= 4
      ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
      : capabilityColCount === 3
      ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      : "grid grid-cols-1 md:grid-cols-2 gap-5";

  const statColCount = Math.min(Math.max(experienceStats.length, 1), 4);
  const statGridCls =
    statColCount >= 4
      ? "grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8"
      : statColCount === 3
      ? "grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8"
      : "grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8";

  const ctaHeading = industryLeadCTAText || `Talk to our ${industry} lead`;

  return (
    <div className="min-h-screen bg-white font-sans text-charcoal selection:bg-primary selection:text-white">
      <SEO
        title={industry}
        description={heroSubtitle.slice(0, 160)}
        canonical={`/industries/${slug}`}
      />
      <Navigation />

      {/* Hero — plain neutral statement (Brand v2) */}
      <section className="relative bg-background overflow-hidden min-h-[58vh] flex items-center pt-32 pb-20 md:pt-40 md:pb-24">
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
              <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Industries
              </span>
            </div>
            <h1 className="text-charcoal font-bold tracking-[-0.035em] leading-[1.0] text-[clamp(2.6rem,5.6vw,4.4rem)] mb-6">
              {industry}
            </h1>
            <p className="text-[1.1rem] md:text-[1.2rem] text-muted-foreground leading-[1.55] max-w-[60ch]">
              {heroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry POV */}
      <section className="bg-white">
        <div className="container px-4 md:px-12 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-[64ch] mx-auto"
          >
            <p className="text-[14px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
              Our Perspective
            </p>
            {povParagraphs.map((para, i) => (
              <p
                key={i}
                className="text-base md:text-lg text-charcoal/85 leading-[1.65] mb-6"
              >
                {para}
              </p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="bg-grey">
        <div className="container px-4 md:px-12 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16 max-w-4xl"
          >
            <p className="text-[14px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
              The Industry Challenge
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-[3.4rem] text-charcoal leading-[1.05] font-bold tracking-[-0.03em]">
              Where {industry} leaders need to act now
            </h2>
          </motion.div>

          <div className={challengeGridCls}>
            {challenges.map((c, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white p-8 border border-border transition-all duration-300 hover:border-primary/40 hover:shadow-[0_22px_44px_-24px_rgba(224,76,44,0.4)] hover:-translate-y-1"
              >
                <h3 className="text-xl text-charcoal font-semibold mb-3 leading-[1.25]">
                  {c.title}
                </h3>
                <p className="text-base text-charcoal/75 leading-[1.55]">
                  {c.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-white">
        <div className="container px-4 md:px-12 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16 max-w-4xl"
          >
            <p className="text-[14px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
              Our Capabilities
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-[3.4rem] text-charcoal leading-[1.05] font-bold tracking-[-0.03em]">
              How NexDyne helps {industry} clients
            </h2>
          </motion.div>

          <div className={capabilityGridCls}>
            {capabilities.map((cap, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white p-8 border border-border transition-all duration-300 hover:border-primary/40 hover:shadow-[0_22px_44px_-24px_rgba(224,76,44,0.4)] hover:-translate-y-1"
              >
                <Link href={cap.href} className="group block">
                  <h3 className="text-xl text-charcoal font-semibold mb-3 leading-[1.25] group-hover:text-primary transition-colors">
                    {cap.name}
                  </h3>
                  <p className="text-base text-charcoal/75 leading-[1.55] mb-5">
                    {cap.blurb}
                  </p>
                  <span className="inline-flex items-center text-[13px] font-semibold uppercase tracking-[0.1em] text-charcoal group-hover:text-primary transition-colors">
                    Learn more
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Impact — charcoal dark-authority band (orange signal accent) */}
      <section className="bg-charcoal text-white border-t-2 border-primary">
        <div className="container px-4 md:px-12 py-20 md:py-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[13px] font-semibold uppercase tracking-[0.2em] text-amber mb-12 text-center"
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
                <div className="text-5xl md:text-6xl lg:text-7xl text-white font-bold tracking-[-0.02em] leading-[1]">
                  {stat.number}
                </div>
                <div className="text-[13px] uppercase tracking-[0.1em] text-white/70 mt-3 leading-[1.4]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* POV Pull Quote */}
      <section className="bg-white">
        <div className="container px-4 md:px-12 py-20 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-[68ch] mx-auto"
          >
            <blockquote className="text-3xl md:text-4xl text-charcoal leading-[1.2] mb-8 font-medium tracking-[-0.02em]">
              {povQuote.text}
            </blockquote>
            <p className="text-[13px] uppercase tracking-[0.1em] text-charcoal/60">
              — {povQuote.author} · {povQuote.role}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="bg-grey">
        <div className="container px-4 md:px-12 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16 max-w-4xl"
          >
            <p className="text-[14px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
              Related Case Studies
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-[3.4rem] text-charcoal leading-[1.05] font-bold tracking-[-0.03em]">
              More work in {industry}
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
                <Link href={`/cases/${c.slug}`} className="group block bg-white p-8 lg:p-10 border border-border transition-all duration-300 hover:border-primary/40 hover:shadow-[0_22px_44px_-24px_rgba(224,76,44,0.4)] hover:-translate-y-1 cursor-pointer h-full">
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
                  <h3 className="text-xl text-charcoal font-semibold leading-[1.25] mb-3 group-hover:text-primary transition-colors">
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

      {/* Closing CTA */}
      <section className="bg-charcoal text-white">
        <div className="container px-4 md:px-12 py-24 md:py-32 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[14px] font-semibold uppercase tracking-[0.2em] text-white/70 mb-6">
              Work With Us
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-medium tracking-[-0.02em] leading-[1.05] mb-8">
              {ctaHeading}
            </h2>
            <p className="text-base md:text-lg text-white/80 leading-[1.65] max-w-[60ch] mb-10">
              Tell us what's breaking, what's stuck, or what you're trying to build. Our {industry} practice will read your note and respond within two business days with a concrete next step — not a sales pitch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <span className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 text-base font-semibold tracking-tight transition-colors hover:bg-primary/90 cursor-pointer">
                  Start a conversation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </span>
              </Link>
              <Link href={`/cases?industry=${slug}`}>
                <span className="inline-flex items-center justify-center text-white/85 px-8 py-4 text-base font-semibold tracking-tight transition-colors hover:text-white cursor-pointer border border-white/20">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  See all {industry} work
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
