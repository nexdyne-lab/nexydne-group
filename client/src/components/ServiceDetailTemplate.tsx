import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BackToTop } from "@/components/BackToTop";
import { SEO } from "@/components/SEO";

export interface ServiceDetailTemplateProps {
  hubName: string;
  hubSlug: string;
  hubHref: string;
  serviceName: string;
  serviceSlug: string;
  heroSubtitle: string;
  heroImage: string;
  experienceStats: { number: string; label: string }[];
  challenge: string;
  opportunity: string;
  approachPillars: { step: string; title: string; body: string }[];
  outcomes: string[];
  featuredCases?: {
    slug: string;
    title: string;
    industry: string;
    metric: string;
    image: string;
  }[];
  relatedServices: { slug: string; name: string; href: string }[];
  ctaLeadName?: string;
}

export default function ServiceDetailTemplate(
  props: ServiceDetailTemplateProps
) {
  const {
    hubName,
    hubSlug,
    hubHref,
    serviceName,
    serviceSlug,
    heroSubtitle,
    heroImage,
    experienceStats,
    challenge,
    opportunity,
    approachPillars,
    outcomes,
    featuredCases = [],
    relatedServices,
    ctaLeadName,
  } = props;

  const statColCount = Math.min(Math.max(experienceStats.length, 1), 4);
  const statGridCls =
    statColCount >= 4
      ? "grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8"
      : statColCount === 3
      ? "grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8"
      : "grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8";

  const caseColCount = Math.min(Math.max(featuredCases.length, 1), 3);
  const caseGridCls =
    caseColCount >= 3
      ? "grid grid-cols-1 md:grid-cols-3 gap-px bg-charcoal/10 border border-charcoal/10"
      : caseColCount === 2
      ? "grid grid-cols-1 md:grid-cols-2 gap-px bg-charcoal/10 border border-charcoal/10"
      : "grid grid-cols-1 gap-px bg-charcoal/10 border border-charcoal/10";

  const ctaHeading = ctaLeadName || `Talk to our ${hubName} lead`;

  return (
    <div className="min-h-screen bg-white font-sans text-charcoal selection:bg-primary selection:text-white">
      <SEO
        title={serviceName}
        description={heroSubtitle.slice(0, 160)}
        canonical={`${hubHref}/${serviceSlug}`}
      />
      <Navigation />

      {/* Hero — charcoal vignette */}
      <section className="relative bg-base text-white overflow-hidden min-h-[75vh] min-h-[560px] sm:min-h-[620px] lg:min-h-[700px] flex items-center pt-32 pb-20 md:pt-40 md:pb-28">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('${heroImage}')` }}
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-base via-base/60 to-base"
          aria-hidden
        />

        <div className="container relative z-10 px-4 md:px-12">
          <Breadcrumbs />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70 mb-6">
              {hubName}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-medium tracking-tight leading-[1.05] mb-6">
              {serviceName}
            </h1>
            <p className="text-base md:text-lg text-white/80 leading-[1.65] max-w-[60ch] mb-10">
              {heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <span className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 text-base font-semibold tracking-tight transition-colors hover:bg-primary/90 cursor-pointer">
                  Talk to our lead
                  <ArrowRight className="w-4 h-4 ml-2" />
                </span>
              </Link>
              <Link href={hubHref}>
                <span className="inline-flex items-center justify-center text-white/85 px-8 py-4 text-base font-semibold tracking-tight transition-colors hover:text-white cursor-pointer border border-white/20">
                  Explore {hubName}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience & Impact — bg-primary signal */}
      <section className="bg-primary text-primary-foreground">
        <div className="container px-4 md:px-12 py-20 md:py-28">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[14px] font-semibold uppercase tracking-[0.2em] text-white/70 mb-12 text-center"
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
                <div className="text-5xl md:text-6xl lg:text-7xl text-white font-medium tracking-[-0.02em] leading-[1]">
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

      {/* Challenge & Opportunity — two-column white */}
      <section className="bg-white">
        <div className="container px-4 md:px-12 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[14px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5 block">
                The Challenge
              </span>
              <p className="text-lg md:text-xl text-charcoal leading-[1.55]">
                {challenge}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-[14px] font-semibold uppercase tracking-[0.2em] text-primary mb-5 block">
                The Opportunity
              </span>
              <p className="text-lg md:text-xl text-charcoal leading-[1.55]">
                {opportunity}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach — 3 pillars */}
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
              Our Approach
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1] font-medium tracking-[-0.02em]">
              How we deliver {serviceName}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-charcoal/10 border border-charcoal/10">
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
                <h3 className="text-xl text-charcoal font-semibold mb-3 leading-[1.25]">
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

      {/* Outcomes — bullet list */}
      <section className="bg-white">
        <div className="container px-4 md:px-12 py-24 md:py-32 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16 max-w-4xl"
          >
            <p className="text-[14px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
              Outcomes
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1] font-medium tracking-[-0.02em]">
              What clients can expect
            </h2>
          </motion.div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {outcomes.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-start gap-3"
              >
                <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-base md:text-lg text-charcoal leading-[1.55]">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Featured Case Studies (conditional) */}
      {featuredCases.length > 0 && (
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
                Featured Cases
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1] font-medium tracking-[-0.02em]">
                How clients deploy {serviceName}
              </h2>
            </motion.div>

            <div className={caseGridCls}>
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
                    className="group block bg-white p-8 lg:p-10 cursor-pointer h-full"
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
      )}

      {/* Related Services — 3 sibling services */}
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
              Related Services
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1] font-medium tracking-[-0.02em]">
              Other {hubName} services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-charcoal/10 border border-charcoal/10">
            {relatedServices.map((svc, index) => (
              <motion.div
                key={svc.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white"
              >
                <Link
                  href={svc.href}
                  className="group block bg-white p-8 lg:p-10 cursor-pointer h-full"
                >
                  <h3 className="text-xl text-charcoal font-semibold mb-3 leading-[1.25] group-hover:text-primary transition-colors">
                    {svc.name}
                  </h3>
                  <span className="text-[13px] uppercase tracking-[0.1em] text-primary font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read more <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA — bg-charcoal */}
      <section className="bg-charcoal text-white">
        <div className="container px-4 md:px-12 py-24 md:py-32 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[14px] font-semibold uppercase tracking-[0.2em] text-white/70 mb-6">
              Get in touch
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-medium tracking-[-0.02em] leading-[1.05] mb-8">
              {ctaHeading}
            </h2>
            <p className="text-base md:text-lg text-white/80 leading-[1.65] max-w-[60ch] mb-10">
              Tell us what you are trying to build, where you are stuck, or what you want to learn. Our {hubName} practice will read your note and respond within two business days with a concrete next step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <span className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 text-base font-semibold tracking-tight transition-colors hover:bg-primary/90 cursor-pointer">
                  Start a conversation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </span>
              </Link>
              <Link href={hubHref}>
                <span className="inline-flex items-center justify-center text-white/85 px-8 py-4 text-base font-semibold tracking-tight transition-colors hover:text-white cursor-pointer border border-white/20">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to {hubName}
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
