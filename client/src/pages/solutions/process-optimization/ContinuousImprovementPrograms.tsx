import React, { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SolutionHero from "@/components/SolutionHero";
import BainHoverCard from "@/components/BainHoverCard";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ContinuousImprovementPrograms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const relatedCapabilities = [
    {
      title: "Process Discovery & Mining",
      description:
        "Identify and visualize process inefficiencies to target high-impact improvement areas.",
      link: "/solutions/process-optimization/process-discovery-mining",
    },
    {
      title: "Workflow Optimization",
      description:
        "Redesign workflows for maximum efficiency, agility, and resilience.",
      link: "/solutions/process-optimization/workflow-optimization",
    },
    {
      title: "Change Management & Training",
      description:
        "Ensure successful adoption of new processes and a culture that embraces change.",
      link: "/solutions/process-optimization/change-management-training",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-charcoal selection:bg-primary selection:text-white">
      <SEO
        title="Continuous Improvement Programs"
        description="Establish frameworks for ongoing optimization, measurement, and iteration to sustain and extend initial gains."
        canonical="/solutions/process-optimization/continuous-improvement-programs"
      />
      <Navigation />

      <SolutionHero
        eyebrow="INTELLIGENT PROCESS OPTIMIZATION · CONTINUOUS IMPROVEMENT PROGRAMS"
        title="Continuous Improvement Programs"
        subtitle="Establish frameworks for ongoing optimization, measurement, and iteration to sustain and extend initial gains."
        backgroundImage="https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/QXONPeQjlAtSsozi.jpg"
        primaryCta={{ label: "Request a Consultation", href: "/contact" }}
        secondaryCta={{ label: "Explore Our Impact", href: "/cases" }}
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
              Compounding gains, year over year.
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              { metric: "30%", label: "Average year-over-year efficiency gain" },
              { metric: "50%", label: "Reduction in process variance" },
              { metric: "95%", label: "Adoption of new best practices" },
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
              Initial transformation efforts deliver impressive results, but
              the true challenge lies in sustaining momentum. Continuous
              improvement isn&rsquo;t a project with an end date&mdash;it&rsquo;s
              a cultural shift that embeds excellence into the organizational
              DNA.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base md:text-lg text-charcoal/80 leading-[1.65] mb-6"
            >
              A successful program requires a robust framework of measurement,
              governance, and feedback. By establishing clear KPIs and
              performance dashboards, organizations can track progress against
              benchmarks, identify deviations, and empower teams to solve
              problems at the source.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-charcoal/80 leading-[1.65]"
            >
              Ultimately, sustainable improvement is about people. It involves
              fostering a mindset of curiosity, empowering employees with the
              skills to identify and act on opportunities, and celebrating the
              pursuit of excellence. We help clients build self-sustaining
              systems where every team member is an agent of positive change.
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
              Our Continuous Improvement Capabilities
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Performance Measurement & KPI Design",
                description:
                  "Develop meaningful KPIs and balanced scorecards that align with strategic objectives and provide a clear view of operational health.",
              },
              {
                title: "Root Cause Analysis & Problem Solving",
                description:
                  "Equip teams with structured problem-solving methodologies (5 Whys, Fishbone Diagrams) to address the source of issues, not just symptoms.",
              },
              {
                title: "Lean & Six Sigma Integration",
                description:
                  "Deploy proven methodologies to eliminate waste, reduce process variation, and enhance value delivery across the enterprise.",
              },
              {
                title: "Governance & Program Management",
                description:
                  "Establish a central improvement office or governance body to prioritize initiatives, allocate resources, and ensure accountability.",
              },
              {
                title: "Change Adoption & Cultural Integration",
                description:
                  "Implement communication strategies, training programs, and incentive systems that foster a culture where continuous improvement is everyone&rsquo;s responsibility.",
              },
              {
                title: "Technology-Enabled Improvement",
                description:
                  "Leverage digital tools for process monitoring, idea management, and performance analytics to accelerate the improvement cycle.",
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
              Baseline, implement, sustain.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 md:gap-12">
            {[
              {
                step: "01",
                title: "Baseline & Benchmark",
                description:
                  "We establish a clear performance baseline and benchmark against industry best practices to identify the most significant improvement opportunities and set ambitious targets.",
              },
              {
                step: "02",
                title: "Implement & Measure",
                description:
                  "We co-develop and pilot improvement initiatives, implementing robust tracking mechanisms to measure impact in real-time for rapid iteration and course correction.",
              },
              {
                step: "03",
                title: "Sustain & Scale",
                description:
                  "We focus on building internal capabilities through training, establishing governance structures, and embedding new ways of working to ensure improvement culture persists.",
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
              Improvement, sustained.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Sustaining Lean Transformation in Manufacturing",
                category: "Industrial Goods",
                description:
                  "Established a Kaizen program for an automotive supplier, empowering shop-floor teams to drive 15% annual productivity gains for three consecutive years.",
                image:
                  "https://images.unsplash.com/photo-1600180730518-3f1854a43493?q=80&w=2070&auto=format&fit=crop",
                link: "/cases/manufacturing-lean-transformation",
              },
              {
                title:
                  "Building a Culture of Continuous Improvement in Financial Services",
                category: "Financial Services",
                description:
                  "Designed a firm-wide improvement framework for a retail bank, reducing onboarding time by 40% and improving employee engagement scores by 25%.",
                image:
                  "https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=2070&auto=format&fit=crop",
                link: "/cases/financial-services-improvement-culture",
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
              Explore our process optimization services.
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
              Ready to build a culture of lasting improvement?
            </h2>
            <p className="text-base md:text-lg text-white/80 leading-[1.65] mb-10">
              Let&rsquo;s discuss how a structured improvement program can
              create lasting value for your organization.
            </p>
            <Link href="/contact">
              <span className="inline-block px-6 py-3 bg-primary text-primary-foreground text-[13px] uppercase tracking-[0.1em] font-semibold hover:bg-primary-hover transition-colors cursor-pointer">
                Start the Conversation
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
