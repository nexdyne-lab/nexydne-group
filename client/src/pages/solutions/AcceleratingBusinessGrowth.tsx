import { motion } from "framer-motion";
import { Link } from "wouter";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SolutionHero from "@/components/SolutionHero";
import { SEO } from "@/components/SEO";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

export default function AcceleratingBusinessGrowth() {
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [email, setEmail] = useState("");

  // ── Data arrays preserved verbatim from prior source ─────────────────────────
  const services = [
    {
      title: "E-Commerce Strategy & Launch",
      description:
        "Design and launch direct-to-consumer channels that acquire customers efficiently, from platform selection to go-live and beyond.",
      link: "/solutions/business-growth/ecommerce-strategy-launch",
    },
    {
      title: "Digital Product Development",
      description:
        "Build new digital products and services from concept to launch, with the technical architecture and go-to-market strategy to scale.",
      link: "/solutions/business-growth/digital-product-development",
    },
    {
      title: "Growth Marketing & Acquisition",
      description:
        "Deploy data-driven marketing strategies that optimize customer acquisition cost and maximize lifetime value across channels.",
      link: "/solutions/business-growth/growth-marketing-acquisition",
    },
    {
      title: "Pricing & Monetization Strategy",
      description:
        "Transform business models with subscription, usage-based, and hybrid pricing strategies that improve unit economics.",
      link: "/solutions/business-growth/pricing-monetization-strategy",
    },
    {
      title: "Go-to-Market Acceleration",
      description:
        "Compress time-to-market for new products and channels with agile methodologies and rapid experimentation frameworks.",
      link: "/solutions/business-growth/go-to-market-acceleration",
    },
    {
      title: "Revenue Operations & Analytics",
      description:
        "Build the data infrastructure and analytics capabilities to measure, optimize, and scale your growth engine.",
      link: "/solutions/business-growth/revenue-operations-analytics",
    },
  ];

  const outcomes = [
    {
      stat: "90+",
      label: "digital growth programs delivered for growing companies",
    },
    {
      stat: "3.4x",
      label: "average revenue growth achieved within 24 months",
    },
    {
      stat: "47%",
      label: "reduction in customer acquisition cost",
    },
  ];

  const approach = [
    {
      title: "Launch direct-to-consumer channels",
      description:
        "E-commerce capabilities that let you own the customer relationship, capture higher margins, and gather first-party data.",
      image: "/images/abstract-growth.jpg",
      link: "/solutions/business-growth/ecommerce-strategy-launch",
    },
    {
      title: "Productize expertise into software",
      description:
        "Turn your methodology, processes, or IP into digital products that generate recurring revenue and scale independently.",
      image: "/images/ai-abstract-visualization.jpg",
      link: "/solutions/business-growth/digital-product-development",
    },
    {
      title: "Build platform & marketplace models",
      description:
        "Two-sided business models that leverage network effects for exponential growth and defensible moats.",
      image: "/images/data-abstract.jpg",
      link: "/capabilities/business-building",
    },
    {
      title: "Optimize acquisition at scale",
      description:
        "Data-driven growth marketing that reduces CAC, increases conversion, and builds compounding acquisition engines.",
      image: "/images/cloud-data-abstract.jpg",
      link: "/solutions/business-growth/growth-marketing-acquisition",
    },
    {
      title: "Transform pricing & monetization",
      description:
        "Shift from one-time transactions to subscription, usage-based, or hybrid models that improve unit economics.",
      image: "/images/business-strategy-abstract.jpg",
      link: "/solutions/business-growth/pricing-monetization-strategy",
    },
  ];

  const cases = [
    {
      industry: "Retail & Consumer",
      title: "E-commerce launch drives 340% revenue growth",
      description:
        "A traditional B2B distributor launched their first direct-to-consumer channel, capturing market share from digital-native competitors and creating a new revenue engine.",
      image: "/images/case-bb-manufacturer-dtc.jpg",
      link: "/cases/b2b-distributor-dtc-launch",
    },
    {
      industry: "Professional Services",
      title: "SaaS productization creates recurring revenue",
      description:
        "A professional services firm transformed their methodology into a software product, shifting from project-based revenue to predictable recurring streams.",
      image: "/images/case-sales-saas.jpg",
      link: "/cases/services-saas-productization",
    },
  ];

  const relatedOfferings = [
    {
      title: "E-Commerce & Digital Channels",
      link: "/capabilities/growth-marketing-sales/ecommerce",
    },
    {
      title: "Growth Marketing",
      link: "/capabilities/growth-marketing-sales",
    },
    {
      title: "Digital Product Development",
      link: "/solutions/business-growth/digital-product-development",
    },
    {
      title: "Revenue Operations",
      link: "/solutions/business-growth/revenue-operations-analytics",
    },
    {
      title: "Pricing Strategy",
      link: "/solutions/business-growth/pricing-monetization-strategy",
    },
    {
      title: "Go-to-Market Strategy",
      link: "/solutions/business-growth/go-to-market-acceleration",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FEFEFE] font-sans text-black selection:bg-primary selection:text-white">
      <SEO
        title="Accelerating Business Growth"
        description="Launch new digital products and channels. Drive revenue through e-commerce and digital innovation."
        canonical="/solutions/accelerating-business-growth"
      />
      <Navigation />

      {/* SLOT 1 — Hero with real image */}
      <SolutionHero
        eyebrow="SOLUTION · ACCELERATING BUSINESS GROWTH"
        title="Accelerating Business Growth"
        subtitle="Launch new digital products and channels that capture market share and create sustainable competitive advantage."
        heroImage="/images/digital-transformation-abstract.jpg"
        heroFocal="70% 45%"
        containerClassName="min-h-[64vh]"
        primaryCta={{ label: "Talk to an Expert", href: "/contact" }}
        secondaryCta={{ label: "See Client Results", href: "/cases" }}
      />

      {/* SLOT 2 — Our Perspective: editorial intro + image right */}
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
              <h2 className="nx-h2 text-black mb-8 max-w-[20ch]">
                Growth has never been harder — or more urgent. We help you build
                new revenue engines.
              </h2>
              <div className="space-y-6 max-w-[60ch]">
                <p className="text-[1.05rem] md:text-[1.15rem] text-black/80 leading-[1.7]">
                  The playbooks that built your business won't scale it to the
                  next level. We help growing companies break through growth
                  ceilings by launching digital products, channels, and business
                  models that compound over time.
                </p>
                <p className="text-[1.05rem] md:text-[1.15rem] text-black/80 leading-[1.7]">
                  The companies winning today aren't just optimizing what they
                  have — they're building entirely new revenue engines. Our{" "}
                  <Link
                    href="/insights/digital-growth-playbook"
                    className="text-primary hover:text-primary-hover underline underline-offset-4 transition-colors"
                  >
                    digital growth consultants
                  </Link>{" "}
                  work with you to set the ambition, ship the channel, and turn
                  early traction into durable advantage.
                </p>
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
                  src="/images/hero-team.jpg"
                  alt="A growth team planning their next launch"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SLOT 3 — How We Help: EY flat hairline cards */}
      <section className="bg-[#FEFEFE]">
        <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14 py-12 md:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-12 md:mb-14 max-w-4xl"
          >
            <Eyebrow>How We Help Clients</Eyebrow>
            <h2 className="nx-h2 text-black mb-6">
              Six ways we launch and scale growth.
            </h2>
            <p className="text-[1.05rem] md:text-[1.1rem] leading-[1.7] text-black/75 max-w-[62ch]">
              We combine strategy, technology, and execution to launch digital
              growth initiatives that drive measurable revenue — from first
              channel to scaled platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: (i % 3) * 0.06 }}
              >
                <Link
                  href={service.link}
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

      {/* SLOT 4 — Experience & Impact: 3 centered metrics */}
      <section className="bg-[#FEFEFE]">
        <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14 py-12 md:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <Eyebrow>Our Experience &amp; Impact</Eyebrow>
          </motion.div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-12">
            {outcomes.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease, delay: i * 0.06 }}
                className="border-t border-black/15 pt-7 text-center"
              >
                <div className="text-[2.7rem] md:text-[3.6rem] text-black font-bold tracking-[-0.025em] leading-[1]">
                  {item.stat}
                </div>
                <div className="text-[0.95rem] text-black/65 mt-4 leading-[1.5] max-w-[30ch] mx-auto">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SLOT 5 — Growth ambition: image cards, one row */}
      <section className="bg-[#FEFEFE]">
        <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14 py-12 md:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-12 md:mb-14 max-w-4xl"
          >
            <Eyebrow>How We Think About It</Eyebrow>
            <h2 className="nx-h2 text-black mb-6">What's Your Growth Ambition?</h2>
            <p className="text-[1.05rem] md:text-[1.1rem] leading-[1.7] text-black/75 max-w-[62ch]">
              We've helped companies at every stage of the growth journey —
              through five integrated lenses for compounding revenue.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
            {approach.map((lens, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: i * 0.06 }}
              >
                <Link href={lens.link} className="group block cursor-pointer">
                  <div className="aspect-[4/3] overflow-hidden mb-5">
                    <img
                      src={lens.image}
                      alt=""
                      aria-hidden
                      className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <h3 className="text-[1.05rem] font-semibold text-black leading-[1.3] tracking-[-0.01em] mb-2 group-hover:text-primary transition-colors">
                    {lens.title}
                  </h3>
                  <p className="text-[0.9rem] text-black/65 leading-[1.55]">
                    {lens.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SLOT 6 — The Outcome (dark signal band) */}
      <section className="bg-black text-white">
        <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14 py-16 md:py-20 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="max-w-4xl"
          >
            <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 mb-6">
              The Outcome
            </span>
            <h2 className="nx-h2 text-white mb-8 leading-[1.15]">
              New revenue engines, faster. NexDyne clients have launched digital
              channels and platform models that compound 3x year-over-year.
            </h2>
            <p className="text-[1.05rem] md:text-[1.12rem] text-white/85 leading-[1.7] max-w-[62ch] mb-9">
              We've worked with traditional distributors, professional services
              firms, and regional providers to test and scale digital growth —
              then move it from pilot to durable revenue stream.
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

      {/* SLOT 7 — Client Results: EY open cards */}
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
            <h2 className="nx-h2 text-black">Growth, proved in outcomes.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {cases.map((result, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: i * 0.08 }}
              >
                <Link href={result.link} className="group block cursor-pointer">
                  <div className="aspect-[16/9] overflow-hidden mb-6">
                    <img
                      src={result.image}
                      alt={result.title}
                      className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <p className="text-[11px] uppercase tracking-[0.1em] text-black/60 mb-3">
                    {result.industry}
                  </p>
                  <h3 className="text-[1.35rem] font-semibold text-black tracking-[-0.015em] leading-[1.3] mb-3 group-hover:text-primary transition-colors">
                    {result.title}
                  </h3>
                  <p className="text-[0.98rem] text-black/70 leading-[1.6] mb-4 max-w-[52ch]">
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

          <div className="mt-14">
            <Link href="/cases">
              <span className="group inline-flex items-center gap-2 border border-black/40 px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-black transition-colors hover:border-black hover:bg-black hover:text-white cursor-pointer">
                See All Case Studies
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* SLOT 8 — Related Offerings: hairline cards */}
      <section className="bg-[#FEFEFE]">
        <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14 py-12 md:py-16 lg:py-20 border-t border-black/10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-12 md:mb-14 max-w-4xl"
          >
            <Eyebrow>Related Offerings</Eyebrow>
            <h2 className="nx-h2 text-black">
              Adjacent capabilities for a complete growth program.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedOfferings.map((offering, i) => (
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
                  <span className="text-[1.05rem] font-semibold text-black leading-[1.3] tracking-[-0.01em] group-hover:text-primary transition-colors">
                    {offering.title}
                  </span>
                  <ArrowRight className="w-4 h-4 text-primary shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SLOT 9 — Closing CTA (dark) */}
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
                <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-6">
                  Ready to Talk?
                </span>
                <h2 className="nx-h2 text-white mb-10 leading-[1.12]">
                  Let's build your next growth engine together.
                </h2>
                <p className="text-[1.05rem] md:text-[1.12rem] text-white/80 leading-[1.7] mb-6 max-w-[52ch]">
                  I want to talk to your experts in:
                </p>
                <Select
                  value={selectedIndustry}
                  onValueChange={setSelectedIndustry}
                >
                  <SelectTrigger className="w-full bg-transparent border-0 border-b border-white/40 rounded-none text-base text-white py-6 focus:ring-0 focus:border-white">
                    <SelectValue placeholder="Select an industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="retail">Retail &amp; Consumer</SelectItem>
                    <SelectItem value="professional-services">
                      Professional Services
                    </SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="financial-services">
                      Financial Services
                    </SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
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
                  We work with growing companies ready to break through growth
                  ceilings. Whether you're launching your first digital channel
                  or scaling a platform business model, our team is ready.
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
