import React, { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SolutionHero from "@/components/SolutionHero";
import BainHoverCard from "@/components/BainHoverCard";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function WorkflowOptimization() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const relatedCapabilities = [
    {
      title: "Process Discovery & Mining",
      description:
        "Uncover hidden inefficiencies and opportunities for optimization in your processes.",
      link: "/solutions/process-optimization/process-discovery-mining",
    },
    {
      title: "Intelligent Automation Design",
      description:
        "Design and implement intelligent automation solutions to streamline your operations.",
      link: "/solutions/process-optimization/intelligent-automation-design",
    },
    {
      title: "AI-Powered Decision Support",
      description:
        "Leverage AI to make faster, more informed decisions and drive better business outcomes.",
      link: "/solutions/process-optimization/ai-powered-decision-support",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-charcoal selection:bg-primary selection:text-white">
      <SEO
        title="Workflow Optimization"
        description="Streamline end-to-end workflows to eliminate handoffs, reduce cycle times, and improve quality at every step."
        canonical="/solutions/process-optimization/workflow-optimization"
      />
      <Navigation />

      <SolutionHero
        eyebrow="INTELLIGENT PROCESS OPTIMIZATION · WORKFLOW OPTIMIZATION"
        title="Workflow Optimization"
        subtitle="Streamline end-to-end workflows to eliminate handoffs, reduce cycle times, and improve quality at every step."
        backgroundImage="https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/FcEhnCRNKFPnlDCJ.jpg"
        primaryCta={{ label: "Schedule a Consultation", href: "/contact" }}
        secondaryCta={{ label: "View Case Studies", href: "/cases" }}
      />

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
              Our Experience &amp; Impact
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-charcoal max-w-[32ch]"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              Better flow, measured everywhere it counts.
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              { metric: "50%", label: "Reduction in average cycle times" },
              { metric: "35%", label: "Improvement in operational throughput" },
              { metric: "20%", label: "Increase in employee productivity" },
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
              In today&rsquo;s competitive landscape, operational efficiency
              isn&rsquo;t just a goal&mdash;it&rsquo;s a prerequisite for
              survival. Workflow optimization is the systematic approach to
              eliminating waste, automating repetition, and enhancing
              collaboration across teams.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base md:text-lg text-charcoal/80 leading-[1.65] mb-6"
            >
              Effective workflow optimization goes beyond simple process
              mapping. It requires a deep understanding of how work flows
              through an organization, the interdependencies between tasks,
              and the impact of technology on human performance. By taking a
              holistic view, we uncover opportunities for transformative change.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-charcoal/80 leading-[1.65]"
            >
              The result is a more agile, resilient, and competitive
              organization. Optimized workflows empower employees to focus on
              high-value activities, reduce operational friction, and deliver a
              superior customer experience.
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
              Our Workflow Optimization Services
            </h2>
            <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] mt-6">
              From analysis to implementation, we provide end-to-end support
              for your workflow optimization initiatives.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Workflow Analysis and Mapping",
                description:
                  "We analyze and map your existing workflows to identify inefficiencies, bottlenecks, and opportunities for improvement.",
              },
              {
                title: "Bottleneck Identification and Resolution",
                description:
                  "We pinpoint the root causes of delays and develop targeted solutions to resolve bottlenecks and improve flow.",
              },
              {
                title: "Cross-Functional Collaboration Improvement",
                description:
                  "We facilitate better communication and collaboration between teams to ensure seamless handoffs and reduce friction.",
              },
              {
                title: "Technology and Toolchain Integration",
                description:
                  "We help you select and integrate the right technologies to automate tasks, improve data flow, and enhance visibility.",
              },
              {
                title: "Custom Workflow Automation",
                description:
                  "We design and build custom automation solutions to handle repetitive tasks and free up your team for more strategic work.",
              },
              {
                title: "Performance Monitoring & Continuous Improvement",
                description:
                  "We establish KPIs and implement monitoring systems to track progress and drive continuous improvement.",
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
            className="mb-16 max-w-[60ch]"
          >
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/60 mb-4 block">
              Our Approach
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-white"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              A structured approach to workflow transformation.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 md:gap-12">
            {[
              {
                step: "01",
                title: "Diagnostic & Value Stream Mapping",
                description:
                  "We begin by conducting a comprehensive diagnostic of your current state, mapping your value streams to identify waste and opportunity.",
              },
              {
                step: "02",
                title: "Redesign & Implementation",
                description:
                  "Based on our findings, we co-design a future-state workflow with your team and develop a detailed implementation roadmap to guide the transformation.",
              },
              {
                step: "03",
                title: "Sustainment & Optimization",
                description:
                  "We help you establish the governance, metrics, and capabilities needed to sustain gains and foster a culture of continuous optimization.",
              },
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="text-[11px] uppercase tracking-[0.2em] text-primary mb-4 block">
                  {pillar.step}
                </span>
                <h3
                  className="text-xl text-white mb-4 leading-[1.25]"
                  style={{ fontWeight: 500, letterSpacing: "-0.01em" }}
                >
                  {pillar.title}
                </h3>
                <p className="text-white/70 leading-[1.65]">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-14">
            <Link href="/contact">
              <span className="inline-block text-[13px] uppercase tracking-[0.1em] font-semibold text-white border-b border-white/40 hover:border-primary hover:text-primary transition-colors cursor-pointer pb-1">
                Get in Touch
              </span>
            </Link>
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
            className="mb-14 max-w-[60ch]"
          >
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/60 mb-4 block">
              Client Results
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-white"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              See how workflow optimization drives results.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title:
                  "Streamlining Order-to-Cash for a Manufacturing Firm",
                category: "Manufacturing",
                description:
                  "Redesigned the order-to-cash process, integrating CRM and ERP to reduce manual touchpoints and accelerate revenue recognition.",
                image:
                  "https://images.unsplash.com/photo-1616401784845-180882ba9ba8",
                link: "/cases/order-to-cash-optimization",
              },
              {
                title: "Optimizing Patient Onboarding in Healthcare",
                category: "Healthcare",
                description:
                  "Automated patient data collection and verification, reducing onboarding time by 50% and improving data accuracy for better care.",
                image:
                  "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
                link: "/cases/patient-onboarding-automation",
              },
            ].map((study, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={study.link} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden border border-white/10">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="pt-6">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-white/60 mb-3 block">
                      {study.category}
                    </span>
                    <h3
                      className="text-xl md:text-2xl text-white mb-3 leading-[1.2] group-hover:text-primary transition-colors"
                      style={{ fontWeight: 500, letterSpacing: "-0.01em" }}
                    >
                      {study.title}
                    </h3>
                    <p className="text-white/70 text-base leading-[1.65]">
                      {study.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <Link href="/cases">
              <span className="inline-block text-[13px] uppercase tracking-[0.1em] font-semibold text-white border-b border-white/40 hover:border-primary hover:text-primary transition-colors cursor-pointer pb-1">
                View All Case Studies
              </span>
            </Link>
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
            className="mb-14 max-w-[60ch]"
          >
            <span className="text-[11px] uppercase tracking-[0.2em] text-charcoal/60 mb-4 block">
              Related Capabilities
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-charcoal"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              Explore more Process Optimization capabilities.
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedCapabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <BainHoverCard
                  title={cap.title}
                  description={cap.description}
                  link={cap.link}
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
            <h2
              className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-white mb-8"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              Ready to optimize your workflows?
            </h2>
            <p className="text-base md:text-lg text-white/80 leading-[1.65] mb-10">
              Let&rsquo;s discuss how our workflow optimization services can
              drive efficiency and growth for your business.
            </p>
            <Link href="/contact">
              <span className="inline-block px-6 py-3 bg-primary text-primary-foreground text-[13px] uppercase tracking-[0.1em] font-semibold hover:bg-primary-hover transition-colors cursor-pointer">
                Start a Conversation
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
