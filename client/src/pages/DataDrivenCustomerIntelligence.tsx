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

export default function DataDrivenCustomerIntelligence() {
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [email, setEmail] = useState("");

  // ── Data arrays preserved verbatim from prior source ─────────────────────────
  const services = [
    {
      title: "Customer Data Platform Selection & Implementation",
      description:
        "Navigate the crowded CDP market and implement the right solution for your scale, budget, and technical capabilities.",
      link: "/solutions/customer-intelligence/customer-data-platform",
    },
    {
      title: "Predictive Analytics & Modeling",
      description:
        "Build churn prediction, lifetime value forecasting, and next-best-action models that work with your actual data—not theoretical perfect data.",
      link: "/solutions/customer-intelligence/predictive-analytics-modeling",
    },
    {
      title: "Behavioral Segmentation",
      description:
        "Move beyond demographics to segments based on actual behavior, preferences, and intent. Create audiences that respond to targeted messaging.",
      link: "/solutions/customer-intelligence/behavioral-segmentation",
    },
    {
      title: "Journey Analytics & Optimization",
      description:
        "Map the complete customer journey, identify friction points, and prioritize improvements based on revenue impact.",
      link: "/solutions/customer-intelligence/journey-analytics-optimization",
    },
    {
      title: "Personalization Strategy & Execution",
      description:
        "Design and deploy personalization that scales—from simple rule-based systems to AI-powered recommendation engines.",
      link: "/solutions/customer-intelligence/personalization-strategy",
    },
    {
      title: "Voice of Customer Programs",
      description:
        "Build feedback systems that capture actionable insights, not just satisfaction scores. Close the loop with customers who take the time to respond.",
      link: "/solutions/customer-intelligence/voice-of-customer",
    },
  ];

  const outcomes = [
    {
      stat: "85+",
      label: "customer intelligence programs delivered for growing companies",
    },
    {
      stat: "47%",
      label: "average increase in customer lifetime value across our engagements",
    },
    {
      stat: "3.2x",
      label: "typical ROI on customer intelligence investments within 18 months",
    },
  ];

  const approach = [
    {
      title: "Unify Your Data Foundation",
      description:
        "Break down silos between CRM, marketing, support, and sales — one source of truth every team can trust.",
      image: "/images/cloud-data-abstract.jpg",
      link: "/solutions/customer-intelligence/customer-data-platform",
    },
    {
      title: "Build Predictive Capabilities",
      description:
        "Move from backward-looking reports to forward-looking predictions — who will churn, buy, or expand.",
      image: "/images/ai-neural-network.jpg",
      link: "/solutions/customer-intelligence/predictive-analytics-modeling",
    },
    {
      title: "Activate Across Channels",
      description:
        "Turn insight into action with personalized experiences across email, web, mobile, and in-person.",
      image: "/images/ai-team-collaboration.jpg",
      link: "/solutions/customer-intelligence/personalization-strategy",
    },
    {
      title: "Measure and Optimize",
      description:
        "Close the loop with rigorous measurement — understand what works, and continuously improve.",
      image: "/images/business-strategy-abstract.jpg",
      link: "/solutions/customer-intelligence/journey-analytics-optimization",
    },
    {
      title: "Embed Customer-Centric Operations",
      description:
        "Align team incentives with customer-outcome metrics and dashboards that surface insight, not noise.",
      image: "/images/data-driven-culture.png",
      link: "/solutions/customer-intelligence/voice-of-customer",
    },
  ];

  const cases = [
    {
      industry: "Financial Services",
      title: "Regional Bank Unlocks Cross-Sell Potential",
      description:
        "Unified 15+ data sources into a single customer view, achieved 4x conversion rate on targeted offers, and grew active product holdings per customer by 23%.",
      image: "/images/ai-powered-finance-abstract.jpg",
      link: "/solutions/data-driven-customer-intelligence/case-studies/bank-cross-sell",
    },
    {
      industry: "Retail & E-commerce",
      title: "E-commerce Retailer Stops the Bleeding",
      description:
        "Identified at-risk customers 45 days before typical churn, reduced monthly churn rate from 8% to 5%, and protected the revenue those customers represented.",
      image: "/images/abstract-growth.jpg",
      link: "/solutions/data-driven-customer-intelligence/case-studies/ecommerce-repeat-purchase",
    },
    {
      industry: "Healthcare",
      title: "Healthcare Network Personalizes Patient Outreach",
      description:
        "Created 8 distinct patient segments based on behavior, reduced no-show rates from 22% to 14%, and recovered a third of previously lost appointment revenue.",
      image: "/images/ai-team-collaboration.jpg",
      link: "/solutions/data-driven-customer-intelligence/case-studies/saas-churn-reduction",
    },
  ];

  const relatedOfferings = [
    {
      title: "Digital Strategy",
      link: "/capabilities/business-building/digital-transformation-accelerator",
    },
    {
      title: "Marketing Analytics",
      link: "/capabilities/growth-marketing-sales",
    },
    {
      title: "AI & Machine Learning",
      link: "/capabilities/artificial-intelligence",
    },
    {
      title: "Process Automation",
      link: "/solutions/intelligent-process-optimization",
    },
    {
      title: "Growth Strategy",
      link: "/solutions/accelerating-business-growth",
    },
    {
      title: "Customer Intelligence Insights",
      link: "/solutions/data-driven-customer-intelligence/insights",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FEFEFE] font-sans text-black selection:bg-primary selection:text-white">
      <SEO
        title="Data-Driven Customer Intelligence"
        description="Unlock deep customer insights through advanced analytics. Predict behavior and drive loyalty at scale."
        canonical="/solutions/data-driven-customer-intelligence"
      />
      <Navigation />

      {/* SLOT 1 — Hero with real image */}
      <SolutionHero
        eyebrow="SOLUTION · DATA-DRIVEN CUSTOMER INTELLIGENCE"
        title="Data-Driven Customer Intelligence"
        subtitle="Know your customers. Predict their needs. Drive loyalty at scale through unified data, predictive models, and personalized experiences."
        heroImage="/images/ai-team-consulting.jpg"
        heroFocal="70% 40%"
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
              <h2 className="nx-h2 text-black mb-8 max-w-[22ch]">
                Most growing companies sit on a goldmine of customer data they
                can't access. We change that.
              </h2>
              <div className="space-y-6 max-w-[60ch]">
                <p className="text-[1.05rem] md:text-[1.15rem] text-black/80 leading-[1.7]">
                  The value is already yours — it's just scattered. CRM in one
                  system, marketing automation in another, support tickets
                  somewhere else. Teams decide on instinct instead of evidence,
                  and customers get generic experiences that ignore everything
                  you already know about them.
                </p>
                <p className="text-[1.05rem] md:text-[1.15rem] text-black/80 leading-[1.7]">
                  We've spent years turning that scattered data into strategic
                  advantage. The technology has matured, the costs have dropped,
                  and the competitive pressure has not. Our{" "}
                  <Link
                    href="/solutions/data-driven-customer-intelligence/insights/beyond-segmentation"
                    className="text-primary hover:text-primary-hover underline underline-offset-4 transition-colors"
                  >
                    customer intelligence consultants
                  </Link>{" "}
                  build platforms that keep learning — and deliver measurable
                  ROI, not another dashboard nobody opens.
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
                  src="/images/insight-data-culture.jpg"
                  alt="A team reviewing customer data together"
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
              Six ways we turn data into customer outcomes.
            </h2>
            <p className="text-[1.05rem] md:text-[1.1rem] leading-[1.7] text-black/75 max-w-[62ch]">
              We combine technical expertise with business acumen to deliver
              customer intelligence solutions that actually get used — and
              actually drive results.
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

      {/* SLOT 5 — Framework: image cards, one row */}
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
            <h2 className="nx-h2 text-black mb-6">
              The NexDyne Customer Intelligence Framework
            </h2>
            <p className="text-[1.05rem] md:text-[1.1rem] leading-[1.7] text-black/75 max-w-[62ch]">
              Five integrated pillars that transform scattered data into
              competitive advantage.
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
              Real loyalty, faster. NexDyne clients have lifted lifetime value by
              47% and identified at-risk customers 45 days before they would have
              churned.
            </h2>
            <p className="text-[1.05rem] md:text-[1.12rem] text-white/85 leading-[1.7] max-w-[62ch] mb-9">
              We've worked with banks, retailers, and healthcare networks to
              deploy AI-powered prediction and personalization — then move it
              from pilot to enterprise standard.
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
            <h2 className="nx-h2 text-black">
              Customer intelligence, proved in outcomes.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {cases.map((result, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: (i % 3) * 0.06 }}
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
            <Link href="/solutions/data-driven-customer-intelligence/case-studies">
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
              Adjacent capabilities for a complete customer program.
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
                  Stop guessing about your customers. Start knowing.
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
                    <SelectItem value="financial-services">
                      Financial Services
                    </SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="retail">Retail &amp; E-commerce</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="professional-services">
                      Professional Services
                    </SelectItem>
                    <SelectItem value="technology">Technology</SelectItem>
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
                  We work with growth-stage leaders ready to stop guessing about
                  their customers and start knowing — through unified data,
                  predictive models, and personalization at scale.
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
