import React, { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SolutionHero from "@/components/SolutionHero";
import BainHoverCard from "@/components/BainHoverCard";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ProcessDiscoveryMining() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <div className="min-h-screen bg-white font-sans text-charcoal selection:bg-primary selection:text-white">
      <SEO
        title="Process Discovery & Mining"
        description="Uncover hidden inefficiencies and bottlenecks through advanced process mining, creating a data-driven foundation for transformation."
        canonical="/solutions/process-optimization/process-discovery-mining"
      />
      <Navigation />

      <SolutionHero
        eyebrow="INTELLIGENT PROCESS OPTIMIZATION · PROCESS DISCOVERY & MINING"
        title="Process Discovery & Mining"
        subtitle="Uncover hidden inefficiencies and bottlenecks through advanced process mining, creating a data-driven foundation for transformation."
        backgroundImage="https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/ahRLBXyxjnIStHiI.jpg"
        primaryCta={{ label: "Request a Process Analysis", href: "/contact" }}
        secondaryCta={{ label: "Explore Our Impact", href: "/cases" }}
      />

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-charcoal/10">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16 py-5">
          <Breadcrumbs variant="dark" />
        </div>
      </div>

      {/* Experience & Impact */}
      <section className="py-20 md:py-24 bg-white border-b border-charcoal/10">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="text-[11px] uppercase tracking-[0.2em] text-charcoal/60 mb-4 block">
              Our Experience & Impact
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-charcoal max-w-[32ch]"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              The numbers behind our process mining work.
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              { metric: "40%", label: "Increase in process efficiency" },
              {
                metric: "95%",
                label: "Accuracy in identifying process deviations",
              },
              { metric: "6 months", label: "Average time to ROI" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className="text-5xl md:text-6xl text-charcoal mb-3"
                  style={{ fontWeight: 500, letterSpacing: "-0.03em" }}
                >
                  {item.metric}
                </div>
                <p className="text-base text-charcoal/70 leading-[1.65]">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Thought Leadership */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-[72ch]">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl text-charcoal leading-[1.3] mb-8"
              style={{ fontWeight: 500, letterSpacing: "-0.015em" }}
            >
              Your business processes are the engines of value creation, but
              are they running at peak performance? Many organizations operate
              with an incomplete understanding of their own workflows—
              relying on anecdotal evidence and outdated process maps.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base md:text-lg text-charcoal/80 leading-[1.65] mb-6"
            >
              Process discovery and mining offers a data-driven alternative,
              transforming digital footprints from your existing IT systems
              into a dynamic, objective view of how work actually gets done. By
              analyzing event logs from systems like your ERP, CRM, and custom
              applications, we create a living model of your end-to-end
              processes.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-charcoal/80 leading-[1.65]"
            >
              This reveals not just the "happy path," but every
              variation, bottleneck, and compliance deviation. It's the
              difference between looking at a static blueprint and watching a
              live MRI of your organization in action—the essential first
              step toward meaningful, sustainable process improvement.
            </motion.p>
          </div>
        </div>
      </section>

      {/* How We Can Help */}
      <section className="py-20 md:py-28 bg-off-white border-t border-charcoal/10">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 max-w-[60ch]"
          >
            <span className="text-[11px] uppercase tracking-[0.2em] text-charcoal/60 mb-4 block">
              How We Can Help
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-charcoal"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              Our Process Mining Capabilities
            </h2>
            <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] mt-6">
              From data extraction to actionable insights, we provide a
              comprehensive suite of services.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
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
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <BainHoverCard
                  title={item.title}
                  description={item.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 md:py-28 bg-charcoal text-white">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 max-w-[60ch]"
          >
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/60 mb-4 block">
              Our Approach
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-white"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              From data, to insight, to action.
            </h2>
            <p className="text-base md:text-lg text-white/70 leading-[1.65] mt-6">
              We follow a structured methodology to ensure that process mining
              delivers tangible business value.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 md:gap-12">
            {[
              {
                step: "01",
                title: "Data Scoping & Extraction",
                description:
                  "We work with your teams to identify the most critical processes for analysis and establish a secure, robust pipeline for extracting event data from source systems.",
              },
              {
                step: "02",
                title: "Analysis & Insight Generation",
                description:
                  "Our experts apply advanced mining algorithms to model your processes, quantify inefficiencies, and identify the highest-impact opportunities for improvement.",
              },
              {
                step: "03",
                title: "Action & Value Realization",
                description:
                  "We translate insights into a concrete action plan—automation, workflow redesign, or training—and help you implement and measure the results.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="text-[11px] uppercase tracking-[0.2em] text-primary mb-4 block">
                  {item.step}
                </span>
                <h3
                  className="text-xl text-white mb-4 leading-[1.25]"
                  style={{ fontWeight: 500, letterSpacing: "-0.01em" }}
                >
                  {item.title}
                </h3>
                <p className="text-white/70 text-base leading-[1.65]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-28 bg-charcoal text-white border-t border-white/10">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 max-w-[60ch]"
          >
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/60 mb-4 block">
              Client Results
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-white"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              Success stories in process mining.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                category: "Manufacturing",
                title: "Reducing Production Cycle Time by 22%",
                image: "https://images.unsplash.com/photo-placeholder",
                link: "/cases/manufacturing-optimization",
              },
              {
                category: "Financial Services",
                title: "Eliminating 98% of Compliance Deviations",
                image: "https://images.unsplash.com/photo-placeholder",
                link: "/cases/financial-services-compliance",
              },
            ].map((cs, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={cs.link} className="group block">
                  <div className="relative overflow-hidden aspect-[4/3] border border-white/10">
                    <img
                      src={cs.image}
                      alt={cs.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="pt-6">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-white/60 mb-3 block">
                      {cs.category}
                    </span>
                    <h3
                      className="text-xl md:text-2xl text-white leading-[1.2] group-hover:text-primary transition-colors"
                      style={{ fontWeight: 500, letterSpacing: "-0.01em" }}
                    >
                      {cs.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Capabilities */}
      <section className="py-20 md:py-28 bg-off-white">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 max-w-[60ch]"
          >
            <span className="text-[11px] uppercase tracking-[0.2em] text-charcoal/60 mb-4 block">
              Related Capabilities
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-charcoal"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              Continue your transformation journey.
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <BainHoverCard
                  title={capability.title}
                  description={capability.description}
                  link={capability.link}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-charcoal text-white">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-[60ch]">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-white mb-8"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              Ready to uncover your hidden factory?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base md:text-lg text-white/80 leading-[1.65] mb-10 max-w-[60ch]"
            >
              Let's talk about how Process Discovery and Mining can
              illuminate the path to operational excellence for your business.
              Schedule a complimentary consultation with our experts today.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link href="/contact">
                <span className="inline-block px-6 py-3 bg-primary text-primary-foreground text-[13px] uppercase tracking-[0.1em] font-semibold hover:bg-primary-hover transition-colors cursor-pointer">
                  Contact Us
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
