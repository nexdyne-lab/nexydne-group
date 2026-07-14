import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Linkedin } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BackToTop } from "@/components/BackToTop";
import { SEO } from "@/components/SEO";

/**
 * Capability-hub master template — Design System v3 (see DESIGN_SYSTEM.md).
 * Dark-authority photo hero (scrim, all-white headline, signal-bar sub),
 * mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14 alignment throughout, surface rotation white/mist/black/stone,
 * flat hairline cards (no orange glow shadows), BCG hover cards for case
 * results, one black journey band ("ambition"), black closing CTA.
 */

export interface MarketingMasterTemplateProps {
  capabilityName: string;
  capabilitySlug: string;
  heroSubtitle: string;
  heroImage: string;
  heroFocal?: string;
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

const ease = [0.22, 1, 0.36, 1] as const;

/** Red-rule eyebrow for light surfaces (red leads as the primary; amber is for dark surfaces) */
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

export default function MarketingMasterTemplate(
  props: MarketingMasterTemplateProps
) {
  const {
    capabilityName,
    capabilitySlug,
    heroSubtitle,
    heroImage,
    heroFocal,
    heroPrimaryCTA,
    heroSecondaryCTA,
    experienceStats,
    thoughtLeadership,

    ambitions,
    inPractice,
    howWeCanHelp,
    clientResults,

    leaders = [],
    insights,
    closingCTA,
  } = props;

  const [activeIndustryTab, setActiveIndustryTab] = useState(0);

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
    <div className="min-h-screen bg-[#FEFEFE] font-sans text-black selection:bg-primary selection:text-white">
      <SEO
        title={capabilityName}
        description={heroSubtitle.slice(0, 160)}
        canonical={`/capabilities/${capabilitySlug}`}
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
              {capabilityName}
            </h1>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <p className="lg:col-span-6 flex items-stretch gap-4 text-[1.2rem] md:text-[1.35rem] leading-[1.5] font-medium text-white/95">
                <span
                  className="w-[3px] shrink-0 self-stretch bg-primary"
                  aria-hidden
                />
                <span>{heroSubtitle}</span>
              </p>
              <p className="lg:col-span-6 text-[1rem] md:text-[1.05rem] leading-[1.75] text-white/70">
                {inPractice.intro}
              </p>
            </div>
            <div className="mt-11 flex flex-col sm:flex-row sm:items-center gap-5">
              <Link href={primaryCTA.href}>
                <span className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-white cursor-pointer">
                  {primaryCTA.label}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link href={secondaryCTA.href}>
                <span className="inline-flex items-center justify-center text-white px-1 py-2 text-[13px] font-semibold uppercase tracking-[0.1em] border-b-2 border-white/40 hover:border-white transition-colors cursor-pointer">
                  {secondaryCTA.label}
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Featured thinking — full-bleed photo moment, EY-style */}
      <Link href={thoughtLeadership.featured.href}>
        <section className="group relative overflow-hidden text-white cursor-pointer bg-black">
          {/* clean photo, EY-style — no scrim; text relies on the image's own
              dark zones + drop shadow */}
          <div
            aria-hidden
            className="absolute inset-0 transition-transform duration-[1400ms] ease-out group-hover:scale-[1.02]"
            style={{
              backgroundImage: `url(${heroImage})`,
              backgroundSize: "cover",
              backgroundPosition: heroFocal ?? "60% 45%",
            }}
          />
          {/* text bottom-RIGHT, EY-style — over the photo's dark zone */}
          <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14 relative z-10 flex min-h-[58vh] flex-col items-end justify-end pb-12 pt-44 text-right md:min-h-[64vh]">
            <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-amber mb-5 drop-shadow-[0_1px_10px_rgba(0,0,0,0.55)]">
              Featured thinking · {thoughtLeadership.featured.tag}
            </span>
            <h2 className="nx-h2 max-w-[26ch] text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
              {thoughtLeadership.featured.title}
            </h2>
            <p className="mt-4 hidden sm:block max-w-[54ch] text-[1.02rem] leading-[1.6] text-white/90 drop-shadow-[0_1px_12px_rgba(0,0,0,0.55)]">
              {thoughtLeadership.featured.summary}
            </p>
            <span className="mt-7 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.1em] text-white drop-shadow-[0_1px_10px_rgba(0,0,0,0.55)]">
              Read more
              <ArrowRight className="w-4 h-4 text-amber transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </section>
      </Link>

      {/* 2b. More perspectives — Bain-style editorial serif prose + quiet
          unboxed article links left; photo with overlaid statement right */}
      <section className="bg-[#FEFEFE]">
        <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            <div className="lg:col-span-7">
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease }}
                className="font-serif text-[1.25rem] md:text-[1.4rem] leading-[1.75] text-black/90 max-w-[62ch]"
              >
                {`${capabilityName} isn't a technology decision — it's an operating
                decision. The perspectives below come straight from live
                engagements: the sequencing that worked, the governance that held,
                and the traps we now help clients step around.`}
              </motion.p>

              <div className="mt-10">
                {thoughtLeadership.secondary.map((article, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease, delay: index * 0.07 }}
                  >
                    <Link
                      href={article.href}
                      className="group flex items-baseline justify-between gap-6 border-t border-black/12 py-6 cursor-pointer"
                    >
                      <span>
                        <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-primary mb-2">
                          {article.tag}
                        </span>
                        <span className="block text-[1.35rem] md:text-[1.5rem] font-semibold text-black tracking-[-0.015em] leading-[1.3] group-hover:text-primary transition-colors">
                          {article.title}
                        </span>
                      </span>
                      <ArrowRight
                        className="w-5 h-5 shrink-0 self-center text-primary transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Photo with overlaid statement */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: 0.1 }}
              className="lg:col-span-5 relative overflow-hidden min-h-[380px] lg:min-h-0"
            >
              <img
                src={inPractice.image}
                alt=""
                aria-hidden
                className="absolute inset-0 h-full w-full object-cover"
              />
              {/* text directly on the photo, EY-style — no scrim, no panel; sits over the photo's dark top zone */}
              <div className="absolute top-0 left-0 p-7 lg:p-8">
                <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-amber mb-3 drop-shadow-[0_1px_10px_rgba(0,0,0,0.55)]">
                  Our perspective
                </span>
                <p className="text-[1.4rem] lg:text-[1.6rem] font-semibold text-white tracking-[-0.02em] leading-[1.25] max-w-[18ch] drop-shadow-[0_1px_14px_rgba(0,0,0,0.6)]">
                  Technology performs.
                  <br />
                  Humans govern.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Ambition — EY topic blocks on black, outlined buttons */}
      <section className="bg-[#FEFEFE]">
        <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14 py-10 md:py-12 lg:py-14">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-12 md:mb-16 max-w-4xl"
          >
            <Eyebrow>Where to start</Eyebrow>
            <h2 className="nx-h2 text-black mb-6">
              {`What is your ${capabilityName} ambition?`}
            </h2>
            <p className="text-[1.05rem] md:text-[1.15rem] leading-[1.65] text-black/75 max-w-[62ch]">
              {`We have helped organizations at every stage of the ${capabilityName} journey — from running the first pilot to scaling across the enterprise. Choose the ambition that matches where you are.`}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 lg:gap-x-16 gap-y-12">
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
                <p className="text-[0.98rem] text-black/75 leading-[1.65] mb-6">
                  {ambition.description}
                </p>
                <Link href={ambition.href}>
                  <span
                    className="inline-block border border-black/40 px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-black transition-colors hover:border-black hover:bg-black hover:text-white focus-visible:outline-2 focus-visible:outline-primary cursor-pointer"
                    aria-label={`Explore: ${ambition.title}`}
                  >
                    Explore
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Experience and Impact — editorial mega-stats on white */}
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
                <div className="text-[2.7rem] md:text-[3.6rem] text-black font-bold tracking-[-0.025em] leading-[1]">
                  {stat.number}
                </div>
                <div className="text-[0.95rem] text-black/65 mt-4 leading-[1.5] max-w-[30ch] mx-auto">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. How We Can Help — flat hairline cards on mist */}
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
            <h2 className="nx-h2 text-black mb-6">
              Our {capabilityName} services
            </h2>
            <p className="text-[1.05rem] md:text-[1.1rem] leading-[1.7] text-black/75 max-w-[62ch]">
              We combine technical depth with business judgment to deliver{" "}
              {capabilityName} solutions that get used and that drive
              measurable results.
            </p>
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

      {/* 8. Client Results — quiet tabs + BCG hover cards */}
      <section className="bg-[#FEFEFE]">
        <div className="py-10 md:py-12 lg:py-14 mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-10 md:mb-12 max-w-4xl"
          >
            <Eyebrow>Client Results</Eyebrow>
            <h2 className="nx-h2 text-black mb-6">
              How clients deploy {capabilityName}
            </h2>
            <p className="text-[1.05rem] md:text-[1.1rem] leading-[1.7] text-black/75 max-w-[62ch]">
              Outcomes from real engagements. Select an industry to see
              relevant case studies.
            </p>
          </motion.div>

          {clientResults.length > 0 && (
            <>
              <div
                role="tablist"
                aria-label="Client results by industry"
                className="flex gap-x-8 lg:gap-x-12 overflow-x-auto border-b border-black/12 mb-10"
              >
                {clientResults.map((tab, index) => (
                  <button
                    key={tab.industry}
                    type="button"
                    role="tab"
                    aria-selected={activeIndustryTab === index}
                    onClick={() => setActiveIndustryTab(index)}
                    className={`relative shrink-0 pb-4 text-[13.5px] md:text-[15px] font-semibold tracking-[-0.01em] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-primary ${
                      activeIndustryTab === index
                        ? "text-black"
                        : "text-black/50 hover:text-black/85"
                    }`}
                  >
                    {tab.industry}
                    {activeIndustryTab === index && (
                      <span className="absolute left-0 right-0 -bottom-px h-[3px] bg-black" />
                    )}
                  </button>
                ))}
              </div>

              {activeIndustry && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {activeIndustry.cases.map((c, index) => (
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
                            alt=""
                            aria-hidden
                            className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                          />
                        </div>
                        <h3 className="text-[1.35rem] md:text-[1.5rem] font-semibold text-black tracking-[-0.015em] leading-[1.3] mb-3 group-hover:text-primary transition-colors">
                          {c.title}
                        </h3>
                        <p className="text-[0.95rem] text-black/60 leading-[1.5]">
                          {activeIndustry.industry} · {c.metric}
                        </p>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* 10. Our Leaders (conditional) */}
      {leaders.length > 0 && (
        <section className="bg-[#FEFEFE]">
          <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14 py-10 md:py-12 lg:py-14">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="mb-12 md:mb-14 max-w-4xl"
            >
              <Eyebrow>Our People</Eyebrow>
              <h2 className="nx-h2 text-black">
                Our leaders in {capabilityName}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
              {leaders.map((leader, index) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease, delay: index * 0.06 }}
                  className="group"
                >
                  <div className="aspect-[4/5] overflow-hidden mb-5 ring-1 ring-black/10 bg-off-white">
                    <img
                      src={leader.photo}
                      alt={leader.name}
                      className="w-full h-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <h3 className="text-lg text-black font-semibold leading-[1.25] mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-sm text-black/65 leading-[1.5] mb-3">
                    {leader.role}
                  </p>
                  {leader.linkedinUrl && (
                    <a
                      href={leader.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-black/60 hover:text-primary transition-colors"
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

      {/* 11. A Closer Look — insights rail on mist */}
      <section className="bg-[#FEFEFE]">
        <div className="py-10 md:py-12 lg:py-14 mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12 md:mb-14"
          >
            <div className="max-w-2xl">
              <Eyebrow>A Closer Look</Eyebrow>
              <h2 className="nx-h2 text-black">Insights and perspectives</h2>
            </div>
            <Link href={`/insights?topic=${capabilitySlug}`}>
              <span className="group inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.1em] text-black border-b border-black/40 hover:border-primary hover:text-primary transition-colors cursor-pointer pb-1 whitespace-nowrap">
                View all insights
                <span className="text-primary transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {insights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: index * 0.06 }}
              >
                {/* EY open card — flush image, text directly on the canvas */}
                <Link
                  href={insight.href}
                  className="group block cursor-pointer"
                >
                  <div className="aspect-[16/9] overflow-hidden mb-6">
                    <img
                      src={insight.image}
                      alt={insight.title}
                      className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <h3 className="text-[1.35rem] md:text-[1.5rem] font-semibold text-black tracking-[-0.015em] leading-[1.3] mb-3 group-hover:text-primary transition-colors">
                    {insight.title}
                  </h3>
                  <p className="text-[0.95rem] text-black/60 leading-[1.5]">
                    {insight.tag} · {insight.readTime}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Closing CTA — light canvas */}
      <section className="bg-[#FEFEFE]">
        <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14 py-10 md:py-12 lg:py-14">
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
            <h2 className="nx-h2 text-black mb-8">
              {`Let us discuss your ${capabilityName} ambition`}
            </h2>
            <p className="text-[1.05rem] md:text-[1.12rem] leading-[1.7] text-black/75 max-w-[58ch] mb-10">
              {`Tell us what is stuck, what is slow, or what you are trying to build. Our ${capabilityName} practice will read your note and respond within two business days with a concrete next step, not a sales pitch.`}
            </p>
            <Link href="/contact">
              <span className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-black cursor-pointer">
                Get in touch
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      <BackToTop />
      <Footer />
    </div>
  );
}
