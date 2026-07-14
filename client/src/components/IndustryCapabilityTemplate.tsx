import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BackToTop } from "@/components/BackToTop";
import { SEO } from "@/components/SEO";

const ease = [0.22, 1, 0.36, 1] as const;

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

export interface IndustryCapabilityTemplateProps {
  industry: string;
  industrySlug: string;
  capability: string;
  capabilitySlug: string;
  heroSubtitle: string;
  heroImage: string;
  heroFocal?: string;
  perspective: { heading: string; paragraphs: string[]; image: string };
  offeringsHeading: string;
  offeringsIntro?: string;
  offerings: { title: string; description: string; href: string }[];
  stats: { number: string; label: string }[];
  casesHeading: string;
  cases: {
    slug: string;
    title: string;
    industry: string;
    metric: string;
    image: string;
  }[];
  relatedHeading: string;
  related: { name: string; href: string }[];
  /** Link to the firm-wide practice this industry page draws from. */
  generalPractice: { label: string; href: string };
  cta: { heading: string; body: string };
}

export default function IndustryCapabilityTemplate(
  props: IndustryCapabilityTemplateProps
) {
  const {
    industry,
    industrySlug,
    capability,
    capabilitySlug,
    heroSubtitle,
    heroImage,
    heroFocal,
    perspective,
    offeringsHeading,
    offeringsIntro,
    offerings,
    stats,
    casesHeading,
    cases,
    relatedHeading,
    related,
    generalPractice,
    cta,
  } = props;

  const container = "mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14";
  const sectionPad = "py-12 md:py-16 lg:py-20";

  return (
    <div className="min-h-screen bg-[#FEFEFE] font-sans text-black selection:bg-primary selection:text-white">
      <SEO
        title={`${capability} for ${industry}`}
        description={heroSubtitle.slice(0, 160)}
        canonical={`/industries/${industrySlug}/${capabilitySlug}`}
      />
      <Navigation />

      {/* Hero — real photo, EY left scrim that stops at the copy */}
      <section className="relative bg-[#FEFEFE] overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: heroFocal ?? "70% 50%",
          }}
        />
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(90deg, #FEFEFE 0%, #FEFEFE 40%, rgba(254,254,254,0.7) 50%, rgba(254,254,254,0) 62%)" }} />
        <div className={`relative z-10 ${container}`}>
          <div className="flex flex-col justify-center min-h-[56vh] pt-36 pb-20 lg:pt-44 lg:pb-24">
            <Breadcrumbs variant="dark" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease }}
              className="mt-6 max-w-[920px]"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="block h-[3px] w-9 bg-primary" />
                <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {industry}
                </span>
              </div>
              <h1 className="font-bold tracking-[-0.035em] leading-[1.02] text-[clamp(2.4rem,5vw,4.2rem)] text-black mb-6">
                {capability}
              </h1>
              <p className="text-[1.1rem] md:text-[1.2rem] leading-[1.55] text-black/70 max-w-[62ch]">
                {heroSubtitle}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Perspective — editorial split (image right) */}
      <section className="bg-[#FEFEFE]">
        <div className={`${container} ${sectionPad}`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="lg:col-span-7"
            >
              <Eyebrow>Our Perspective</Eyebrow>
              <h2 className="nx-h2 text-black mb-8 max-w-[24ch]">
                {perspective.heading}
              </h2>
              <div className="space-y-6 max-w-[62ch]">
                {perspective.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-[1.05rem] md:text-[1.1rem] text-black/80 leading-[1.7]"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="h-64 sm:h-80 lg:h-full min-h-[340px] overflow-hidden ring-1 ring-black/10">
                <img
                  src={perspective.image}
                  alt=""
                  aria-hidden
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What we do — offerings cards (link to depth) */}
      <section className="bg-[#FEFEFE]">
        <div className={`${container} ${sectionPad}`}>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-12 md:mb-14 max-w-4xl"
          >
            <Eyebrow>How We Help</Eyebrow>
            <h2 className="nx-h2 text-black mb-6">{offeringsHeading}</h2>
            {offeringsIntro && (
              <p className="text-[1.05rem] md:text-[1.1rem] leading-[1.7] text-black/75 max-w-[62ch]">
                {offeringsIntro}
              </p>
            )}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {offerings.map((o, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: (i % 3) * 0.06 }}
              >
                <Link
                  href={o.href}
                  className="group block bg-white p-8 lg:p-9 ring-1 ring-black/10 hover:ring-black/30 transition-shadow cursor-pointer h-full"
                >
                  <h3 className="nx-h3 text-black mb-3 leading-[1.25]">
                    {o.title}
                  </h3>
                  <p className="text-base text-black/75 leading-[1.6] mb-6">
                    {o.description}
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

      {/* Impact — 3 centered metrics */}
      <section className="bg-[#FEFEFE]">
        <div className={`${container} py-12 lg:py-16`}>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <Eyebrow>Experience &amp; Impact</Eyebrow>
          </motion.div>
          <div
            className={`mt-10 grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-12 ${
              stats.length > 3 ? "lg:grid-cols-4" : ""
            }`}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease, delay: i * 0.06 }}
                className="border-t border-black/15 pt-7 text-center"
              >
                <div className="text-[2.7rem] md:text-[3.6rem] text-black font-bold tracking-[-0.025em] leading-[1] [overflow-wrap:anywhere]">
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

      {/* Featured work — EY open cards */}
      {cases.length > 0 && (
        <section className="bg-[#FEFEFE]">
          <div className={`${container} ${sectionPad}`}>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="mb-12 md:mb-14 max-w-4xl"
            >
              <Eyebrow>Featured Work</Eyebrow>
              <h2 className="nx-h2 text-black">{casesHeading}</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
              {cases.map((c, i) => (
                <motion.div
                  key={c.slug}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease, delay: (i % 3) * 0.06 }}
                >
                  <Link href={`/cases/${c.slug}`} className="group block cursor-pointer">
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
      )}

      {/* Related + firm-wide practice */}
      <section className="bg-[#FEFEFE]">
        <div className={`${container} ${sectionPad} border-t border-black/10`}>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-10 md:mb-12 max-w-4xl"
          >
            <Eyebrow>Explore More</Eyebrow>
            <h2 className="nx-h2 text-black mb-6">{relatedHeading}</h2>
            <Link href={generalPractice.href}>
              <span className="group inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.1em] text-black border-b border-black/40 hover:border-primary hover:text-primary transition-colors cursor-pointer pb-1">
                {generalPractice.label}
                <ArrowRight className="w-3.5 h-3.5 text-primary transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {related.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: (i % 3) * 0.06 }}
              >
                <Link
                  href={r.href}
                  className="group flex items-center justify-between gap-3 ring-1 ring-black/10 hover:ring-black/40 px-6 py-6 min-h-[104px] transition-shadow cursor-pointer h-full"
                >
                  <span className="text-[1.2rem] md:text-[1.35rem] font-semibold text-black leading-[1.3] tracking-[-0.01em] group-hover:text-primary transition-colors">
                    {r.name}
                  </span>
                  <ArrowRight className="w-4 h-4 text-primary shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — dark band */}
      <section className="bg-black text-white">
        <div className={`${container} py-16 md:py-20 lg:py-24`}>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="max-w-3xl"
          >
            <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-amber mb-6">
              Work With Us
            </span>
            <h2 className="nx-h2 text-white mb-8 leading-[1.12]">{cta.heading}</h2>
            <p className="text-[1.05rem] md:text-[1.12rem] text-white/80 leading-[1.7] max-w-[60ch] mb-10">
              {cta.body}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <span className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors hover:bg-primary-hover cursor-pointer">
                  Start a conversation
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link href={`/industries/${industrySlug}`}>
                <span className="group inline-flex items-center justify-center gap-2 border border-white/40 px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-white hover:text-black cursor-pointer">
                  Back to {industry}
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
