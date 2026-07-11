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
  heroFocal?: string;
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

const ease = [0.22, 1, 0.36, 1] as const;

/** Red-rule eyebrow for light surfaces */
function Eyebrow({
  children,
  tone = "muted",
}: {
  children: React.ReactNode;
  tone?: "muted" | "primary";
}) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="block h-[3px] w-9 bg-primary" />
      <span
        className={`text-[12px] font-semibold uppercase tracking-[0.18em] ${
          tone === "primary" ? "text-primary" : "text-muted-foreground"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

export default function ServiceDetailTemplate(
  props: ServiceDetailTemplateProps
) {
  const {
    hubName,
    hubHref,
    serviceName,
    serviceSlug,
    heroSubtitle,
    experienceStats,
    challenge,
    opportunity,
    approachPillars,
    outcomes,
    featuredCases = [],
    relatedServices,
    ctaLeadName,
  } = props;

  const caseColCount = Math.min(Math.max(featuredCases.length, 1), 3);
  const caseGridCls =
    caseColCount >= 3
      ? "grid grid-cols-1 md:grid-cols-3 gap-5"
      : caseColCount === 2
      ? "grid grid-cols-1 md:grid-cols-2 gap-5"
      : "grid grid-cols-1 gap-5";

  const ctaHeading = ctaLeadName || `Talk to our ${hubName} lead`;

  return (
    <div className="min-h-screen bg-[#FEFEFE] font-sans text-black selection:bg-primary selection:text-white">
      <SEO
        title={serviceName}
        description={heroSubtitle.slice(0, 160)}
        canonical={`${hubHref}/${serviceSlug}`}
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
            <h1 className="mt-8 font-bold tracking-[-0.035em] leading-[1.02] text-[clamp(2.3rem,4.6vw,3.8rem)] text-white">
              {serviceName}
            </h1>
            <p className="mt-10 flex items-stretch gap-4 max-w-[68ch] text-[1.15rem] md:text-[1.3rem] leading-[1.5] font-medium text-white/95">
              <span
                className="w-[3px] shrink-0 self-stretch bg-primary"
                aria-hidden
              />
              <span>{heroSubtitle}</span>
            </p>
            <div className="mt-11 flex flex-col sm:flex-row sm:items-center gap-5">
              <Link href="/contact">
                <span className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-white cursor-pointer">
                  Talk to our lead
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link href={hubHref}>
                <span className="inline-flex items-center justify-center text-white px-1 py-2 text-[13px] font-semibold uppercase tracking-[0.1em] border-b-2 border-white/40 hover:border-white transition-colors cursor-pointer">
                  Explore {hubName}
                </span>
              </Link>
            </div>
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

      {/* 3. Challenge & Opportunity — two-column on light */}
      <section className="bg-[#FEFEFE]">
        <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14 py-10 md:py-12 lg:py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <Eyebrow>The Challenge</Eyebrow>
              <p className="text-lg md:text-xl text-black leading-[1.6]">
                {challenge}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: 0.1 }}
            >
              <Eyebrow tone="primary">The Opportunity</Eyebrow>
              <p className="text-lg md:text-xl text-black leading-[1.6]">
                {opportunity}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Our Approach — borderless pillars on light */}
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
            <h2 className="nx-h2 text-black">How we deliver {serviceName}</h2>
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
                <h3 className="text-[1.35rem] font-semibold text-black mb-4 leading-[1.25] tracking-[-0.015em]">
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

      {/* 5. Outcomes — bullet list */}
      <section className="bg-[#FEFEFE]">
        <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14 py-10 md:py-12 lg:py-14">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-12 md:mb-14 max-w-4xl"
          >
            <Eyebrow>Outcomes</Eyebrow>
            <h2 className="nx-h2 text-black">What clients can expect</h2>
          </motion.div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 max-w-5xl">
            {outcomes.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: index * 0.05 }}
                className="flex items-start gap-3"
              >
                <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-base md:text-lg text-black leading-[1.6]">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. Featured Case Studies (conditional) — EY open cards */}
      {featuredCases.length > 0 && (
        <section className="bg-[#FEFEFE]">
          <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14 py-10 md:py-12 lg:py-14">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="mb-12 md:mb-14 max-w-4xl"
            >
              <Eyebrow>Featured Cases</Eyebrow>
              <h2 className="nx-h2 text-black">
                How clients deploy {serviceName}
              </h2>
            </motion.div>

            <div className={caseGridCls}>
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
                    <h3 className="text-[1.2rem] font-semibold text-black tracking-[-0.01em] leading-[1.35] mb-3 group-hover:text-primary transition-colors">
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
      )}

      {/* 7. Related Services — flat hairline cards */}
      <section className="bg-[#FEFEFE]">
        <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14 py-10 md:py-12 lg:py-14">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-12 md:mb-14 max-w-4xl"
          >
            <Eyebrow>Related Services</Eyebrow>
            <h2 className="nx-h2 text-black">Other {hubName} services</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {relatedServices.map((svc, index) => (
              <motion.div
                key={svc.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: (index % 3) * 0.06 }}
              >
                <Link
                  href={svc.href}
                  className="group block bg-white p-8 lg:p-9 ring-1 ring-black/10 hover:ring-black/30 transition-shadow cursor-pointer h-full"
                >
                  <h3 className="nx-h3 text-black mb-6 leading-[1.25] group-hover:text-primary transition-colors">
                    {svc.name}
                  </h3>
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

      {/* 8. Closing CTA — light canvas */}
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
              Get in touch
            </span>
            <h2 className="nx-h2 text-black mb-8">{ctaHeading}</h2>
            <p className="text-[1.05rem] md:text-[1.12rem] leading-[1.7] text-black/75 max-w-[58ch] mb-10">
              Tell us what you are trying to build, where you are stuck, or what
              you want to learn. Our {hubName} practice will read your note and
              respond within two business days with a concrete next step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <span className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-black cursor-pointer">
                  Start a conversation
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link href={hubHref}>
                <span className="group inline-flex items-center justify-center gap-2 border border-black/40 px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-black transition-colors hover:border-black hover:bg-black hover:text-white cursor-pointer">
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
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
