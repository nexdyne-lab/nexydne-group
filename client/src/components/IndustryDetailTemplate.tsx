import { motion } from "framer-motion";
import { Link } from "wouter";
import { BrandMesh } from "@/components/BrandMesh";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BackToTop } from "@/components/BackToTop";
import { SEO } from "@/components/SEO";

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

export interface IndustryDetailTemplateProps {
  industry: string;
  slug: string;
  heroSubtitle: string;
  heroImage: string;
  heroFocal?: string;
  /** Optional photo shown to the right of the Our Perspective copy. */
  perspectiveImage?: string;
  /** Optional photo shown to the right of the pull-quote. */
  quoteImage?: string;
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
    heroFocal,
    perspectiveImage,
    quoteImage,
    povParagraphs,
    challenges,
    capabilities,
    experienceStats,
    povQuote,
    featuredCases,
    industryLeadCTAText,
  } = props;

  const container = "mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14";
  const sectionPad = "py-12 md:py-16 lg:py-20";

  const challengeGridCls =
    challenges.length >= 4
      ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
      : challenges.length === 3
      ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      : "grid grid-cols-1 md:grid-cols-2 gap-5";

  const capabilityGridCls =
    capabilities.length >= 4
      ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
      : capabilities.length === 3
      ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      : "grid grid-cols-1 md:grid-cols-2 gap-5";

  const ctaHeading = industryLeadCTAText || `Talk to our ${industry} lead`;

  return (
    <div className="min-h-screen bg-[#FEFEFE] font-sans text-black selection:bg-primary selection:text-white">
      <SEO
        title={industry}
        description={heroSubtitle.slice(0, 160)}
        canonical={`/industries/${slug}`}
      />
      <Navigation />

      {/* Hero — real photo, EY left scrim that stops at the copy */}
      <section className="relative bg-[#FEFEFE] overflow-hidden">
        {heroImage ? (
          <>
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
          </>
        ) : (
          <>
            <BrandMesh variant="light" />
            <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(90deg, #FEFEFE 0%, rgba(254,254,254,0.6) 30%, rgba(254,254,254,0.05) 55%, transparent 70%)" }} />
          </>
        )}
        <div className={`relative z-10 ${container}`}>
          <div className="flex flex-col justify-center min-h-[60vh] pt-36 pb-20 lg:pt-44 lg:pb-24">
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
                  Industries
                </span>
              </div>
              <h1 className="font-bold tracking-[-0.035em] leading-[1.02] text-[clamp(2.4rem,5vw,4.2rem)] text-black mb-6">
                {industry}
              </h1>
              <p className="text-[1.1rem] md:text-[1.2rem] leading-[1.55] text-black/70 max-w-[60ch]">
                {heroSubtitle}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry POV — editorial split (image right) */}
      <section className="bg-[#FEFEFE]">
        <div className={`${container} ${sectionPad}`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className={perspectiveImage ? "lg:col-span-7" : "lg:col-span-12 max-w-[68ch]"}
            >
              <Eyebrow>Our Perspective</Eyebrow>
              {povParagraphs.map((para, i) => (
                <p
                  key={i}
                  className={`text-black/80 leading-[1.7] max-w-[62ch] ${
                    i === 0
                      ? "text-[1.3rem] md:text-[1.5rem] font-medium text-black tracking-[-0.015em] leading-[1.4] mb-8"
                      : "text-[1.05rem] md:text-[1.1rem] mb-6"
                  }`}
                >
                  {para}
                </p>
              ))}
            </motion.div>

            {perspectiveImage && (
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease, delay: 0.1 }}
                className="lg:col-span-5"
              >
                <div className="h-64 sm:h-80 lg:h-full min-h-[340px] overflow-hidden ring-1 ring-black/10">
                  <img
                    src={perspectiveImage}
                    alt=""
                    aria-hidden
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Industry Challenges — flat hairline cards */}
      <section className="bg-[#FEFEFE]">
        <div className={`${container} ${sectionPad}`}>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-12 md:mb-14 max-w-4xl"
          >
            <Eyebrow>The Industry Challenge</Eyebrow>
            <h2 className="nx-h2 text-black">
              Where {industry} leaders need to act now
            </h2>
          </motion.div>

          <div className={challengeGridCls}>
            {challenges.map((c, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: (index % 4) * 0.06 }}
                className="bg-white p-8 lg:p-9 ring-1 ring-black/10 h-full"
              >
                <h3 className="nx-h3 text-black mb-3 leading-[1.25]">
                  {c.title}
                </h3>
                <p className="text-base text-black/75 leading-[1.6]">
                  {c.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities — flat hairline clickable cards */}
      <section className="bg-[#FEFEFE]">
        <div className={`${container} ${sectionPad}`}>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-12 md:mb-14 max-w-4xl"
          >
            <Eyebrow>Our Capabilities</Eyebrow>
            <h2 className="nx-h2 text-black">
              How NexDyne helps {industry} clients
            </h2>
          </motion.div>

          <div className={capabilityGridCls}>
            {capabilities.map((cap, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: (index % 4) * 0.06 }}
              >
                <Link
                  href={cap.href}
                  className="group block bg-white p-8 lg:p-9 ring-1 ring-black/10 hover:ring-black/30 transition-shadow cursor-pointer h-full"
                >
                  <h3 className="nx-h3 text-black mb-3 leading-[1.25]">
                    {cap.name}
                  </h3>
                  <p className="text-base text-black/75 leading-[1.6] mb-6">
                    {cap.blurb}
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

      {/* Experience & Impact — editorial mega-stats on light */}
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

      {/* POV Pull Quote — editorial split (image right) */}
      <section className="bg-[#FEFEFE]">
        <div className={`${container} ${sectionPad}`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className={`border-t-2 border-black pt-10 ${
                quoteImage ? "lg:col-span-7" : "lg:col-span-12 max-w-[68ch]"
              }`}
            >
              <blockquote className="text-[1.7rem] md:text-[2.1rem] text-black leading-[1.3] mb-8 font-semibold tracking-[-0.02em] max-w-[24ch] lg:max-w-none">
                {povQuote.text}
              </blockquote>
              <p className="text-[13px] uppercase tracking-[0.1em] text-black/60">
                — {povQuote.author} · {povQuote.role}
              </p>
            </motion.div>

            {quoteImage && (
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease, delay: 0.1 }}
                className="lg:col-span-5"
              >
                <div className="h-64 sm:h-80 lg:h-full min-h-[340px] overflow-hidden ring-1 ring-black/10">
                  <img
                    src={quoteImage}
                    alt=""
                    aria-hidden
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Case Studies — EY open cards */}
      <section className="bg-[#FEFEFE]">
        <div className={`${container} ${sectionPad}`}>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-12 md:mb-14 max-w-4xl"
          >
            <Eyebrow>Related Case Studies</Eyebrow>
            <h2 className="nx-h2 text-black">More work in {industry}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
            {featuredCases.map((c, index) => (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: (index % 3) * 0.06 }}
              >
                {/* EY open card — flush image, text directly on the canvas */}
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

      {/* Closing CTA — dark band */}
      <section className="bg-black text-white">
        <div className={`${container} py-16 md:py-20 lg:py-24`}>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="max-w-3xl"
          >
            <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-6">
              Work With Us
            </span>
            <h2 className="nx-h2 text-white mb-8 leading-[1.12]">{ctaHeading}</h2>
            <p className="text-[1.05rem] md:text-[1.12rem] text-white/80 leading-[1.7] max-w-[60ch] mb-10">
              Tell us what's breaking, what's stuck, or what you're trying to
              build. Our {industry} practice will read your note and respond
              within two business days with a concrete next step — not a sales
              pitch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <span className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors hover:bg-primary-hover cursor-pointer">
                  Start a conversation
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link href={`/cases?industry=${slug}`}>
                <span className="group inline-flex items-center justify-center gap-2 border border-white/40 px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-white hover:text-black cursor-pointer">
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
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
