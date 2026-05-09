import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Check, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BackToTop } from "@/components/BackToTop";
import { SEO } from "@/components/SEO";

export interface MarketingMasterTemplateProps {
  capabilityName: string;
  capabilitySlug: string;
  heroSubtitle: string;
  heroImage: string;
  heroPrimaryCTA?: { label: string; href: string };
  heroSecondaryCTA?: { label: string; href: string };
  experienceStats: { number: string; label: string }[];
  thoughtLeadership: {
    featured: {
      tag: string;
      title: string;
      summary: string;
      image: string;
      href: string;
    };
    secondary: { tag: string; title: string; href: string }[];
  };
  approachPillars: { step: string; title: string; body: string }[];
  ambitions: { title: string; description: string; href: string }[];
  inPractice: {
    image: string;
    intro: string;
    realOutcomes: string[];
    howWeHelp: string[];
  };
  howWeCanHelp: { title: string; description: string; href: string }[];
  clientResults: {
    industry: string;
    cases: { slug: string; title: string; metric: string; image: string }[];
  }[];
  ecosystemLogos?: { name: string; logo: string }[];
  leaders?: {
    name: string;
    role: string;
    photo: string;
    linkedinUrl?: string;
  }[];
  insights: {
    tag: string;
    title: string;
    readTime: string;
    image: string;
    href: string;
  }[];
  closingCTA: {
    leadName: string;
    leadTitle: string;
    leadPhoto: string;
    leadEmail?: string;
    leadLinkedinUrl?: string;
  };
}

export default function MarketingMasterTemplate(
  props: MarketingMasterTemplateProps
) {
  const {
    capabilityName,
    capabilitySlug,
    heroSubtitle,
    heroImage,
    heroPrimaryCTA,
    heroSecondaryCTA,
    experienceStats,
    thoughtLeadership,
    approachPillars,
    ambitions,
    inPractice,
    howWeCanHelp,
    clientResults,
    ecosystemLogos = [],
    leaders = [],
    insights,
    closingCTA,
  } = props;

  const [activeIndustryTab, setActiveIndustryTab] = useState(0);

  // Stat grid: 3 or 4 columns based on item count (spec: exactly 4)
  const statColCount = Math.min(Math.max(experienceStats.length, 1), 4);
  const statGridCls =
    statColCount >= 4
      ? "grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8"
      : statColCount === 3
      ? "grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8"
      : "grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8";

  const primaryCTA = heroPrimaryCTA ?? {
    label: `Talk to our ${capabilityName} lead`,
    href: "/contact",
  };
  const secondaryCTA = heroSecondaryCTA ?? {
    label: "Explore our services",
    href: `/capabilities/${capabilitySlug}#how-we-can-help`,
  };

  const activeIndustry = clientResults[activeIndustryTab];

  return (
    <div className="min-h-screen bg-white font-sans text-charcoal selection:bg-primary selection:text-white">
      <SEO
        title={capabilityName}
        description={heroSubtitle.slice(0, 160)}
        canonical={`/capabilities/${capabilitySlug}`}
      />
      <Navigation />

      {/* 1. Hero charcoal vignette */}
      <section className="relative bg-charcoal text-white overflow-hidden min-h-[85vh] min-h-[600px] sm:min-h-[680px] lg:min-h-[760px] flex items-center pt-32 pb-20 md:pt-40 md:pb-28">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('${heroImage}')` }}
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/60 to-charcoal"
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
              Capabilities
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-medium tracking-tight leading-[1.05] mb-6">
              {capabilityName}
            </h1>
            <p className="text-base md:text-lg text-white/80 leading-[1.65] max-w-[60ch] mb-10">
              {heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={primaryCTA.href}>
                <span className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 text-base font-semibold tracking-tight transition-colors hover:bg-primary/90 cursor-pointer">
                  {primaryCTA.label}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </span>
              </Link>
              <Link href={secondaryCTA.href}>
                <span className="inline-flex items-center justify-center text-white/85 px-8 py-4 text-base font-semibold tracking-tight transition-colors hover:text-white cursor-pointer border border-white/20">
                  {secondaryCTA.label}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Experience and Impact (Orange-Red signal section) */}
      <section className="bg-primary text-primary-foreground">
        <div className="container px-4 md:px-12 py-20 md:py-28">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[14px] font-semibold uppercase tracking-[0.2em] text-white/70 mb-12 text-center"
          >
            Experience and Impact
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

      {/* 3. Thought Leadership featured + 2 secondary */}
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
              Our Thinking
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1] font-medium tracking-[-0.02em]">
              Latest perspectives on {capabilityName}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Featured perspective (left) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href={thoughtLeadership.featured.href}
                className="group block cursor-pointer"
              >
                <div className="aspect-[16/10] overflow-hidden mb-6 rounded-md">
                  <img
                    src={thoughtLeadership.featured.image}
                    alt={thoughtLeadership.featured.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <p className="text-[11px] uppercase tracking-[0.1em] text-charcoal/60 mb-3">
                  {thoughtLeadership.featured.tag}
                </p>
                <h3 className="text-2xl md:text-3xl text-charcoal font-medium leading-[1.2] mb-4 group-hover:text-primary transition-colors">
                  {thoughtLeadership.featured.title}
                </h3>
                <p className="text-base text-charcoal/75 leading-[1.6] mb-5">
                  {thoughtLeadership.featured.summary}
                </p>
                <span className="inline-flex items-center text-[13px] font-semibold uppercase tracking-[0.1em] text-primary group-hover:gap-2 gap-1 transition-all">
                  Read more <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            </motion.div>

            {/* Secondary articles (right, stacked) */}
            <div className="flex flex-col gap-px bg-charcoal/10 border border-charcoal/10">
              {thoughtLeadership.secondary.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                  className="bg-white"
                >
                  <Link
                    href={article.href}
                    className="group block bg-white p-8 lg:p-10 cursor-pointer"
                  >
                    <p className="text-[11px] uppercase tracking-[0.1em] text-charcoal/60 mb-3">
                      {article.tag}
                    </p>
                    <h4 className="text-xl text-charcoal font-semibold leading-[1.25] mb-4 group-hover:text-primary transition-colors">
                      {article.title}
                    </h4>
                    <span className="inline-flex items-center text-[13px] font-semibold uppercase tracking-[0.1em] text-primary group-hover:gap-2 gap-1 transition-all">
                      Read more <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Approach 3 pillars */}
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
              Our Approach
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1] font-medium tracking-[-0.02em]">
              How we deliver {capabilityName}
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
                className="bg-white p-8 lg:p-10"
              >
                <p className="text-xs text-primary font-semibold mb-3 tracking-[0.1em]">
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

      {/* 5. Whats Your Capability Ambition 6 hover cards */}
      <section className="bg-subtle">
        <div className="container px-4 md:px-12 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16 max-w-4xl"
          >
            <span className="text-[14px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5 block">
              Where to start
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1] font-medium tracking-[-0.02em] mb-6">
              {`What is your ${capabilityName} ambition?`}
            </h2>
            <p className="text-base md:text-lg text-charcoal/75 leading-[1.65] max-w-[65ch]">
              {`We have helped organizations at every stage of the ${capabilityName} journey from running the first pilot to scaling across the enterprise. Choose the ambition that matches where you are.`}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal/10 border border-charcoal/10">
            {ambitions.map((ambition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white"
              >
                <Link
                  href={ambition.href}
                  className="group block bg-white p-8 lg:p-10 cursor-pointer h-full transition-all duration-200 hover:shadow-md"
                >
                  <h3 className="text-xl text-charcoal font-semibold mb-3 leading-[1.25] group-hover:text-primary transition-colors">
                    {ambition.title}
                  </h3>
                  <p className="text-base text-charcoal/75 leading-[1.55] mb-5">
                    {ambition.description}
                  </p>
                  <span className="inline-flex items-center text-[13px] font-semibold uppercase tracking-[0.1em] text-primary opacity-0 group-hover:opacity-100 group-hover:gap-2 gap-1 transition-all duration-200">
                    Explore <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Capability in Practice 2-column split */}
      <section className="bg-white">
        <div className="container px-4 md:px-12 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-[4/3] bg-subtle overflow-hidden mb-8 rounded-md">
                <img
                  src={inPractice.image}
                  alt={`${capabilityName} in practice`}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[14px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
                In Practice
              </p>
              <h2 className="text-3xl md:text-4xl text-charcoal leading-[1.1] font-medium tracking-[-0.02em] mb-6">
                {capabilityName} in practice
              </h2>
              <p className="text-base md:text-lg text-charcoal/75 leading-[1.65]">
                {inPractice.intro}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <div>
                <h3 className="text-[14px] font-semibold uppercase tracking-[0.2em] text-charcoal mb-6">
                  Real Outcomes
                </h3>
                <ul className="space-y-4">
                  {inPractice.realOutcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base text-charcoal/85 leading-[1.55]">
                        {outcome}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-[14px] font-semibold uppercase tracking-[0.2em] text-charcoal mb-6">
                  How We Help
                </h3>
                <ul className="space-y-4">
                  {inPractice.howWeHelp.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-base text-charcoal/85 leading-[1.55]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. How We Can Help N hover cards */}
      <section
        id="how-we-can-help"
        className="bg-subtle scroll-mt-24"
      >
        <div className="container px-4 md:px-12 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16 max-w-4xl"
          >
            <span className="text-[14px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5 block">
              How we can help
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1] font-medium tracking-[-0.02em] mb-6">
              Our {capabilityName} services
            </h2>
            <p className="text-base md:text-lg text-charcoal/75 leading-[1.65] max-w-[65ch]">
              We combine technical depth with business judgment to deliver {capabilityName} solutions that get used and that drive measurable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal/10 border border-charcoal/10">
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
                  className="group block bg-white p-8 lg:p-10 cursor-pointer h-full transition-all duration-200 hover:shadow-md"
                >
                  <h3 className="text-xl text-charcoal font-semibold mb-3 leading-[1.25] group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-base text-charcoal/75 leading-[1.55] mb-5">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-[13px] font-semibold uppercase tracking-[0.1em] text-primary opacity-0 group-hover:opacity-100 group-hover:gap-2 gap-1 transition-all duration-200">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Client Results tabbed by industry */}
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
              Client Results
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1] font-medium tracking-[-0.02em] mb-6">
              How clients deploy {capabilityName}
            </h2>
            <p className="text-base md:text-lg text-charcoal/75 leading-[1.65] max-w-[65ch]">
              Outcomes from real engagements. Select an industry to see relevant case studies.
            </p>
          </motion.div>

          {clientResults.length > 0 && (
            <>
              <div className="flex flex-wrap gap-1 sm:gap-2 mb-10 border-b border-charcoal/10 overflow-x-auto">
                {clientResults.map((tab, index) => (
                  <button
                    key={tab.industry}
                    type="button"
                    onClick={() => setActiveIndustryTab(index)}
                    className={`px-4 sm:px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors relative whitespace-nowrap ${
                      activeIndustryTab === index
                        ? "text-primary"
                        : "text-charcoal/60 hover:text-charcoal"
                    }`}
                  >
                    {tab.industry}
                    {activeIndustryTab === index && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                    )}
                  </button>
                ))}
              </div>

              {activeIndustry && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal/10 border border-charcoal/10">
                  {activeIndustry.cases.map((c, index) => (
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
                        className="group block bg-white p-8 lg:p-10 cursor-pointer h-full transition-all duration-200 hover:shadow-md"
                      >
                        <div className="aspect-[16/9] overflow-hidden mb-6 rounded-md">
                          <img
                            src={c.image}
                            alt={c.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                          />
                        </div>
                        <p className="text-[11px] uppercase tracking-[0.1em] text-charcoal/60 mb-3">
                          {activeIndustry.industry} {`·`} {c.metric}
                        </p>
                        <h3 className="text-xl text-charcoal font-semibold leading-[1.25] mb-3 group-hover:text-primary transition-colors">
                          {c.title}
                        </h3>
                        <span className="inline-flex items-center text-[13px] font-semibold uppercase tracking-[0.1em] text-charcoal group-hover:text-primary group-hover:gap-2 gap-1 transition-all">
                          Read the case <ArrowRight className="w-3 h-3" />
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* 9. Ecosystem partner / tool logos (conditional) */}
      {ecosystemLogos.length > 0 && (
        <section className="bg-subtle">
          <div className="container px-4 md:px-12 py-20 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10 md:mb-12"
            >
              <p className="text-[14px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-4">
                Our Ecosystem
              </p>
              <h2 className="text-2xl md:text-3xl text-charcoal font-medium tracking-[-0.02em]">
                {capabilityName} partners and platforms we work with
              </h2>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6 items-center">
              {ecosystemLogos.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  className="px-6 md:px-8 py-3 md:py-4 bg-white border border-charcoal/10 rounded"
                >
                  {partner.logo ? (
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-8 w-auto object-contain"
                    />
                  ) : (
                    <span className="text-charcoal/70 font-semibold text-sm tracking-tight">
                      {partner.name}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 10. Our Leaders in Capability (conditional) */}
      {leaders.length > 0 && (
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
                Our People
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1] font-medium tracking-[-0.02em]">
                Our leaders in {capabilityName}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
              {leaders.map((leader, index) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group"
                >
                  <div className="aspect-[4/5] overflow-hidden mb-5 rounded-md bg-subtle">
                    <img
                      src={leader.photo}
                      alt={leader.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <h3 className="text-lg text-charcoal font-semibold leading-[1.25] mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-sm text-charcoal/65 leading-[1.5] mb-3">
                    {leader.role}
                  </p>
                  {leader.linkedinUrl && (
                    <a
                      href={leader.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-charcoal/60 hover:text-primary transition-colors"
                      aria-label={`${leader.name} on LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 11. A Closer Look 3 latest insights */}
      <section className="bg-subtle">
        <div className="container px-4 md:px-12 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12 md:mb-16"
          >
            <div className="max-w-2xl">
              <p className="text-[14px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
                A Closer Look
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1] font-medium tracking-[-0.02em]">
                Insights and perspectives
              </h2>
            </div>
            <Link href={`/insights?topic=${capabilitySlug}`}>
              <span className="inline-flex items-center text-[13px] font-semibold uppercase tracking-[0.1em] text-primary hover:gap-2 gap-1 transition-all cursor-pointer">
                View all insights <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-charcoal/10 border border-charcoal/10">
            {insights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white"
              >
                <Link
                  href={insight.href}
                  className="group block bg-white p-8 lg:p-10 cursor-pointer h-full"
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
                  <h3 className="text-xl text-charcoal font-semibold leading-[1.25] mb-3 group-hover:text-primary transition-colors">
                    {insight.title}
                  </h3>
                  <p className="text-sm text-charcoal/60">{insight.readTime}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Closing CTA bg-charcoal 2-column with lead photo */}
      <section className="bg-charcoal text-white">
        <div className="container px-4 md:px-12 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[14px] font-semibold uppercase tracking-[0.2em] text-white/70 mb-6">
                Ready to Talk
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-medium tracking-[-0.02em] leading-[1.05] mb-8">
                {`Let us discuss your ${capabilityName} ambition`}
              </h2>
              <p className="text-base md:text-lg text-white/80 leading-[1.65] max-w-[60ch] mb-10">
                {`Tell us what is stuck, what is slow, or what you are trying to build. ${closingCTA.leadName} and the ${capabilityName} practice will read your note and respond within two business days with a concrete next step, not a sales pitch.`}
              </p>
              <Link href="/contact">
                <span className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 text-base font-semibold tracking-tight transition-colors hover:bg-primary/90 cursor-pointer">
                  Get in touch
                  <ArrowRight className="w-4 h-4 ml-2" />
                </span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row lg:flex-col gap-6 items-start"
            >
              <div className="aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-md bg-white/5 flex-shrink-0">
                <img
                  src={closingCTA.leadPhoto}
                  alt={closingCTA.leadName}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl text-white font-semibold leading-[1.25] mb-1">
                  {closingCTA.leadName}
                </h3>
                <p className="text-sm text-white/70 leading-[1.5] mb-5">
                  {closingCTA.leadTitle}
                </p>
                <div className="flex items-center gap-4">
                  {closingCTA.leadEmail && (
                    <a
                      href={`mailto:${closingCTA.leadEmail}`}
                      className="inline-flex items-center text-white/70 hover:text-primary transition-colors"
                      aria-label={`Email ${closingCTA.leadName}`}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      <span className="text-sm">Email</span>
                    </a>
                  )}
                  {closingCTA.leadLinkedinUrl && (
                    <a
                      href={closingCTA.leadLinkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-white/70 hover:text-primary transition-colors"
                      aria-label={`${closingCTA.leadName} on LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      <span className="text-sm">LinkedIn</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <BackToTop />
      <Footer />
    </div>
  );
}
