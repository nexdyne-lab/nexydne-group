import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SolutionHero from "@/components/SolutionHero";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

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

export default function ProcessDiscoveryMining() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const metrics = [
    { metric: "40%", label: "Increase in process efficiency" },
    { metric: "95%", label: "Accuracy in identifying process deviations" },
    { metric: "6 months", label: "Average time to ROI" },
  ];

  const services = [
    {
      title: "Automated Process Discovery",
      description:
        "Utilize advanced algorithms to automatically construct detailed process models from your raw system data, revealing the true state of your operations.",
    },
    {
      title: "Conformance Checking",
      description:
        "Compare your actual process execution against ideal-state models to pinpoint compliance issues, policy violations, and costly deviations.",
    },
    {
      title: "Root Cause Analysis",
      description:
        "Drill down into process inefficiencies to identify the underlying causes of bottlenecks, delays, and rework using data-driven techniques.",
    },
    {
      title: "Performance & KPI Monitoring",
      description:
        "Establish real-time dashboards to track key process indicators, monitor performance against benchmarks, and detect emerging issues proactively.",
    },
    {
      title: "Predictive Process Analytics",
      description:
        "Leverage machine learning to forecast future process outcomes, predict potential bottlenecks, and anticipate SLA breaches before they occur.",
    },
    {
      title: "Digital Twin of an Organization (DTO)",
      description:
        "Create a dynamic virtual model of your business processes to simulate the impact of changes, test optimization scenarios, and drive continuous improvement.",
    },
  ];

  const approach = [
    {
      title: "Data Scoping & Extraction",
      description:
        "We work with your teams to identify the most critical processes for analysis and establish a secure, robust pipeline for extracting event data from source systems.",
    },
    {
      title: "Analysis & Insight Generation",
      description:
        "Our experts apply advanced mining algorithms to model your processes, quantify inefficiencies, and identify the highest-impact opportunities for improvement.",
    },
    {
      title: "Action & Value Realization",
      description:
        "We translate insights into a concrete action plan — automation, workflow redesign, or training — and help you implement and measure the results.",
    },
  ];

  const cases = [
    {
      category: "Manufacturing",
      title: "Reducing Production Cycle Time by 22%",
      image: "/images/capabilities/cap-robot-factory.jpg",
      link: "/cases/manufacturing-optimization",
    },
    {
      category: "Financial Services",
      title: "Eliminating 98% of Compliance Deviations",
      image: "/images/capabilities/cap-warehouse-robot.jpg",
      link: "/cases/financial-services-compliance",
    },
  ];

  const relatedCapabilities = [
    {
      title: "Intelligent Automation Design",
      description:
        "Design and implement robust automation solutions based on data-driven process insights.",
      link: "/solutions/process-optimization/intelligent-automation-design",
    },
    {
      title: "Workflow Optimization",
      description:
        "Redesign and streamline workflows to eliminate bottlenecks and improve operational efficiency.",
      link: "/solutions/process-optimization/workflow-optimization",
    },
    {
      title: "AI-Powered Decision Support",
      description:
        "Leverage AI to provide real-time insights and recommendations for better decision-making.",
      link: "/solutions/process-optimization/ai-powered-decision-support",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FEFEFE] font-sans text-black selection:bg-primary selection:text-white">
      <SEO
        title="Process Discovery & Mining"
        description="Uncover hidden inefficiencies and bottlenecks through advanced process mining, creating a data-driven foundation for transformation."
        canonical="/solutions/process-optimization/process-discovery-mining"
      />
      <Navigation />

      {/* Hero with real image */}
      <SolutionHero
        eyebrow="INTELLIGENT PROCESS OPTIMIZATION · PROCESS DISCOVERY & MINING"
        title="Process Discovery & Mining"
        subtitle="Uncover hidden inefficiencies and bottlenecks through advanced process mining, creating a data-driven foundation for transformation."
        heroImage="/images/insight-process-mining.jpg"
        heroFocal="70% 50%"
        containerClassName="min-h-[58vh]"
        primaryCta={{ label: "Request a Process Analysis", href: "/contact" }}
        secondaryCta={{ label: "Explore Our Impact", href: "/cases" }}
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
              <p className="text-[1.4rem] md:text-[1.6rem] font-medium text-black leading-[1.35] tracking-[-0.015em] mb-8 max-w-[34ch]">
                Your business processes are the engines of value creation — but
                are they running at peak performance?
              </p>
              <div className="space-y-6 max-w-[60ch]">
                <p className="text-[1.05rem] md:text-[1.1rem] text-black/80 leading-[1.7]">
                  Many organizations operate with an incomplete understanding of
                  their own workflows — relying on anecdotal evidence and
                  outdated process maps. Process discovery and mining offers a
                  data-driven alternative, transforming digital footprints from
                  your existing IT systems into a dynamic, objective view of how
                  work actually gets done.
                </p>
                <p className="text-[1.05rem] md:text-[1.1rem] text-black/80 leading-[1.7]">
                  By analyzing event logs from systems like your ERP, CRM, and
                  custom applications, we create a living model of your
                  end-to-end processes — revealing not just the "happy path,"
                  but every variation, bottleneck, and compliance deviation.
                  It's the essential first step toward meaningful, sustainable
                  process improvement.
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
                  src="/images/insight-ai-powered-operations.jpg"
                  alt="An operator monitoring live process data"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience & Impact — 3 centered metrics */}
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
            {metrics.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease, delay: index * 0.06 }}
                className="border-t border-black/15 pt-7 text-center"
              >
                <div className="text-[2.7rem] md:text-[3.6rem] text-black font-bold tracking-[-0.025em] leading-[1] [overflow-wrap:anywhere]">
                  {item.metric}
                </div>
                <div className="text-[0.95rem] text-black/65 mt-4 leading-[1.5] max-w-[30ch] mx-auto">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Can Help — EY flat hairline cards (informational) */}
      <section className="bg-[#FEFEFE]">
        <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14 py-12 md:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-12 md:mb-14 max-w-4xl"
          >
            <Eyebrow>How We Can Help</Eyebrow>
            <h2 className="nx-h2 text-black mb-6">Our Process Mining Capabilities</h2>
            <p className="text-[1.05rem] md:text-[1.1rem] leading-[1.7] text-black/75 max-w-[62ch]">
              From data extraction to actionable insights, we provide a
              comprehensive suite of services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: (index % 3) * 0.06 }}
                className="bg-white p-8 lg:p-9 ring-1 ring-black/10 h-full"
              >
                <h3 className="nx-h3 text-black mb-3 leading-[1.25]">
                  {item.title}
                </h3>
                <p className="text-base text-black/75 leading-[1.6]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach — borderless pillars, numbers removed */}
      <section className="bg-[#FEFEFE]">
        <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14 py-12 md:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-12 md:mb-14 max-w-4xl"
          >
            <Eyebrow>Our Approach</Eyebrow>
            <h2 className="nx-h2 text-black mb-6">From data, to insight, to action.</h2>
            <p className="text-[1.05rem] md:text-[1.1rem] leading-[1.7] text-black/75 max-w-[62ch]">
              We follow a structured methodology to ensure that process mining
              delivers tangible business value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 lg:gap-x-16 gap-y-12">
            {approach.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: index * 0.06 }}
                className="border-t-2 border-black pt-7"
              >
                <h3 className="text-[1.35rem] font-semibold text-black mb-4 leading-[1.25] tracking-[-0.015em]">
                  {item.title}
                </h3>
                <p className="text-base text-black/70 leading-[1.65]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Results — EY open cards */}
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
            <h2 className="nx-h2 text-black">Success stories in process mining.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {cases.map((cs, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: i * 0.08 }}
              >
                <Link href={cs.link} className="group block cursor-pointer">
                  <div className="aspect-[16/9] overflow-hidden mb-6">
                    <img
                      src={cs.image}
                      alt={cs.title}
                      className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <p className="text-[11px] uppercase tracking-[0.1em] text-black/60 mb-3">
                    {cs.category}
                  </p>
                  <h3 className="text-[1.35rem] font-semibold text-black tracking-[-0.015em] leading-[1.3] mb-3 group-hover:text-primary transition-colors">
                    {cs.title}
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

      {/* Related Capabilities — hairline cards */}
      <section className="bg-[#FEFEFE]">
        <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14 py-12 md:py-16 lg:py-20 border-t border-black/10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-12 md:mb-14 max-w-4xl"
          >
            <Eyebrow>Related Capabilities</Eyebrow>
            <h2 className="nx-h2 text-black">Continue your transformation journey.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {relatedCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: (index % 3) * 0.06 }}
              >
                <Link
                  href={capability.link}
                  className="group block bg-white p-8 lg:p-9 ring-1 ring-black/10 hover:ring-black/30 transition-shadow cursor-pointer h-full"
                >
                  <h3 className="nx-h3 text-black mb-3 leading-[1.25] group-hover:text-primary transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-base text-black/75 leading-[1.6] mb-6">
                    {capability.description}
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

      {/* CTA — dark closing band */}
      <section className="bg-black text-white">
        <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14 py-16 md:py-20 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="max-w-3xl"
          >
            <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-6">
              Ready to Talk?
            </span>
            <h2 className="nx-h2 text-white mb-8 leading-[1.12]">
              Ready to uncover your hidden factory?
            </h2>
            <p className="text-[1.05rem] md:text-[1.12rem] text-white/80 leading-[1.7] mb-10 max-w-[58ch]">
              Let's talk about how Process Discovery and Mining can illuminate
              the path to operational excellence for your business. Schedule a
              complimentary consultation with our experts today.
            </p>
            <Link href="/contact">
              <span className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors hover:bg-primary-hover cursor-pointer">
                Contact Us
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
