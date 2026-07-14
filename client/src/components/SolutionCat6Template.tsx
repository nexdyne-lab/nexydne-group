import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SolutionHero from "@/components/SolutionHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SEO } from "@/components/SEO";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ease = [0.22, 1, 0.36, 1] as const;

function Eyebrow({
  children,
  onDark = false,
}: {
  children: React.ReactNode;
  onDark?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className={`block h-[3px] w-9 ${onDark ? "bg-amber" : "bg-primary"}`} />
      <span
        className={`text-[12px] font-semibold uppercase tracking-[0.18em] ${
          onDark ? "text-white/70" : "text-muted-foreground"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

export interface SolutionCat6TemplateProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  heroImage: string;
  heroFocal?: string;
  seoTitle: string;
  seoDescription: string;
  canonical: string;
  perspective: { heading: string; paragraphs: string[]; image: string };
  deliverHeading: string;
  deliverIntro?: string;
  phases: { name: string; description: string }[];
  getHeading: string;
  getIntro?: string;
  deliverables: { name: string; description: string }[];
  outcome: { heading: string; body: string };
  casesHeading: string;
  cases: { industry: string; title: string; description: string; link: string }[];
  siblingsHeading: string;
  siblingsIntro?: string;
  siblings: { title: string; link: string }[];
  cta: {
    heading: string;
    body: string;
    industries: { value: string; label: string }[];
  };
}

export default function SolutionCat6Template(props: SolutionCat6TemplateProps) {
  const {
    eyebrow,
    title,
    subtitle,
    heroImage,
    heroFocal,
    seoTitle,
    seoDescription,
    canonical,
    perspective,
    deliverHeading,
    deliverIntro,
    phases,
    getHeading,
    getIntro,
    deliverables,
    outcome,
    casesHeading,
    cases,
    siblingsHeading,
    siblingsIntro,
    siblings,
    cta,
  } = props;

  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-[#FEFEFE] font-sans text-black selection:bg-primary selection:text-white">
      <SEO title={seoTitle} description={seoDescription} canonical={canonical} />
      <Navigation />

      {/* Hero with real image */}
      <SolutionHero
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        heroImage={heroImage}
        heroFocal={heroFocal}
        containerClassName="min-h-[58vh]"
        primaryCta={{ label: "Talk to an Expert", href: "/contact" }}
        secondaryCta={{ label: "See Client Results", href: "/cases" }}
      />

      {/* Breadcrumbs */}
      <div className="bg-[#FEFEFE] border-b border-black/10">
        <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14 py-5">
          <Breadcrumbs variant="dark" />
        </div>
      </div>

      {/* Our Perspective — editorial split + image right */}
      <section className="bg-[#FEFEFE]">
        <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14 py-12 md:py-16 lg:py-20">
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

      {/* How We Deliver — phase cards (EY flat hairline) */}
      <section className="bg-[#FEFEFE]">
        <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14 py-12 md:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-12 md:mb-14 max-w-4xl"
          >
            <Eyebrow>How We Deliver</Eyebrow>
            <h2 className="nx-h2 text-black mb-6">{deliverHeading}</h2>
            {deliverIntro && (
              <p className="text-[1.05rem] md:text-[1.1rem] leading-[1.7] text-black/75 max-w-[62ch]">
                {deliverIntro}
              </p>
            )}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {phases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: (i % 3) * 0.06 }}
                className="bg-white p-8 lg:p-9 ring-1 ring-black/10 h-full"
              >
                <h3 className="nx-h3 text-black mb-3 leading-[1.25]">
                  {phase.name}
                </h3>
                <p className="text-base text-black/75 leading-[1.6]">
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get — deliverables hairline list */}
      <section className="bg-[#FEFEFE]">
        <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14 py-12 md:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-10 md:mb-12 max-w-4xl"
          >
            <Eyebrow>What You Get</Eyebrow>
            <h2 className="nx-h2 text-black">{getHeading}</h2>
            {getIntro && (
              <p className="text-[1.05rem] md:text-[1.1rem] leading-[1.7] text-black/75 max-w-[62ch] mt-6">
                {getIntro}
              </p>
            )}
          </motion.div>

          <div className="border-t border-black/15">
            {deliverables.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease, delay: (i % 3) * 0.05 }}
                className="border-b border-black/15 py-7 lg:py-8 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10 items-baseline"
              >
                <div className="lg:col-span-4">
                  <h3 className="text-[1.35rem] md:text-[1.5rem] font-semibold text-black leading-[1.3] tracking-[-0.01em]">
                    {item.name}
                  </h3>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-base text-black/70 leading-[1.65]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Outcome — the one dark payoff band */}
      <section className="bg-black text-white">
        <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14 py-16 md:py-20 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="max-w-4xl"
          >
            <Eyebrow onDark>The Outcome</Eyebrow>
            <h2 className="nx-h2 text-white mb-8 leading-[1.15]">
              {outcome.heading}
            </h2>
            <p className="text-[1.05rem] md:text-[1.12rem] text-white/85 leading-[1.7] max-w-[62ch] mb-9">
              {outcome.body}
            </p>
            <Link href="/cases">
              <span className="group inline-flex items-center gap-2 bg-primary text-primary-foreground text-[13px] font-semibold uppercase tracking-[0.1em] px-7 py-4 hover:bg-primary-hover transition-colors cursor-pointer">
                See How We Help Leaders Win
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Client Results — text-only EY cards */}
      <section className="bg-[#FEFEFE]">
        <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14 py-12 md:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-12 md:mb-14 max-w-4xl"
          >
            <Eyebrow>Client Results</Eyebrow>
            <h2 className="nx-h2 text-black">{casesHeading}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {cases.map((result, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: i * 0.08 }}
              >
                <Link
                  href={result.link}
                  className="group block bg-white p-8 lg:p-10 ring-1 ring-black/10 hover:ring-black/30 transition-shadow cursor-pointer h-full"
                >
                  <p className="text-[11px] uppercase tracking-[0.1em] text-black/60 mb-4">
                    {result.industry}
                  </p>
                  <h3 className="text-[1.35rem] md:text-[1.5rem] font-semibold text-black tracking-[-0.015em] leading-[1.3] mb-4 group-hover:text-primary transition-colors">
                    {result.title}
                  </h3>
                  <p className="text-base text-black/70 leading-[1.65] mb-6">
                    {result.description}
                  </p>
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

      {/* Sibling offerings — hairline tiles */}
      <section className="bg-[#FEFEFE]">
        <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14 py-12 md:py-16 lg:py-20 border-t border-black/10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-12 md:mb-14 max-w-4xl"
          >
            <Eyebrow>Explore More</Eyebrow>
            <h2 className="nx-h2 text-black">{siblingsHeading}</h2>
            {siblingsIntro && (
              <p className="text-[1.05rem] md:text-[1.1rem] leading-[1.7] text-black/75 max-w-[62ch] mt-6">
                {siblingsIntro}
              </p>
            )}
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {siblings.map((offering, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: (i % 3) * 0.06 }}
              >
                <Link
                  href={offering.link}
                  className="group flex items-center justify-between gap-3 ring-1 ring-black/10 hover:ring-black/40 px-6 py-6 min-h-[104px] transition-shadow cursor-pointer h-full"
                >
                  <span className="text-[1.2rem] md:text-[1.35rem] font-semibold text-black leading-[1.3] tracking-[-0.01em] group-hover:text-primary transition-colors">
                    {offering.title}
                  </span>
                  <ArrowRight className="w-4 h-4 text-primary shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA — dark, full-width even */}
      <section className="bg-black text-white">
        <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14 py-16 md:py-20 lg:py-24">
          <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease }}
              >
                <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-amber mb-6">
                  Ready to Talk?
                </span>
                <h2 className="nx-h2 text-white mb-10 leading-[1.12]">
                  {cta.heading}
                </h2>
                <p className="text-[1.05rem] md:text-[1.12rem] text-white/80 leading-[1.7] mb-6 max-w-[52ch]">
                  I want to talk to your experts in:
                </p>
                <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                  <SelectTrigger className="w-full bg-transparent border-0 border-b border-white/40 rounded-none text-base text-white py-6 focus:ring-0 focus:border-white">
                    <SelectValue placeholder="Select an industry" />
                  </SelectTrigger>
                  <SelectContent>
                    {cta.industries.map((ind) => (
                      <SelectItem key={ind.value} value={ind.value}>
                        {ind.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease, delay: 0.1 }}
              >
                <p className="text-[1.05rem] md:text-[1.12rem] text-white/80 leading-[1.7] mb-8 max-w-[52ch]">
                  {cta.body}
                </p>
                <div className="space-y-5">
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent border border-white/30 px-4 py-4 text-base text-white placeholder:text-white/50 focus:outline-none focus:border-white transition-colors"
                  />
                  <Link href="/contact">
                    <span className="group inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary-hover transition-colors text-[13px] uppercase tracking-[0.1em] font-semibold px-7 py-4 cursor-pointer">
                      Contact us
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
