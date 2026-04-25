import React, { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SolutionHero from "@/components/SolutionHero";
import BainHoverCard from "@/components/BainHoverCard";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ChangeManagementTraining() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const relatedCapabilities = [
    {
      title: "Process Discovery & Mining",
      description:
        "Identify and visualize your current processes to uncover optimization opportunities.",
      link: "/solutions/process-optimization/process-discovery-mining",
    },
    {
      title: "Intelligent Automation Design",
      description:
        "Design and implement intelligent automation solutions to streamline your operations.",
      link: "/solutions/process-optimization/intelligent-automation-design",
    },
    {
      title: "Workflow Optimization",
      description:
        "Analyze and redesign your workflows to improve efficiency and reduce costs.",
      link: "/solutions/process-optimization/workflow-optimization",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-charcoal selection:bg-primary selection:text-white">
      <SEO
        title="Change Management & Training"
        description="Ensure successful adoption through comprehensive change management, training programs, and ongoing support."
        canonical="/solutions/process-optimization/change-management-training"
      />
      <Navigation />

      <SolutionHero
        eyebrow="INTELLIGENT PROCESS OPTIMIZATION · CHANGE MANAGEMENT & TRAINING"
        title="Change Management & Training"
        subtitle="Ensure successful adoption through comprehensive change management, training programs, and ongoing support."
        backgroundImage="https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/bcpULeqXtmRTmvdi.jpg"
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
              Adoption you can measure, not just hope for.
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              { metric: ">95%", label: "User adoption rate on new systems" },
              {
                metric: "50%",
                label: "Reduction in post-launch support tickets",
              },
              {
                metric: "2,500+",
                label: "Employees trained across global enterprises",
              },
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
              The most sophisticated technology and optimized processes are
              only valuable when people use them effectively. In any
              transformation, the human element is the critical factor for
              success.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base md:text-lg text-charcoal/80 leading-[1.65] mb-6"
            >
              Resistance to change is natural, but it can be managed. Our
              approach is built on empathy and strategic communication. We work
              to understand the perspectives of your employees, address their
              concerns proactively, and articulate a compelling vision for the
              future.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-charcoal/80 leading-[1.65]"
            >
              Effective change management is a holistic discipline. It requires
              a combination of leadership alignment, clear and consistent
              communication, and targeted training that empowers employees. We
              partner with you to create a comprehensive change management
              strategy integrated into your project from day one.
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
              Our Change Management & Training Capabilities
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Change Strategy & Leadership Alignment",
                description:
                  "Develop a clear change vision and align leadership to champion the transformation, ensuring consistent messaging and visible support.",
              },
              {
                title: "Stakeholder Analysis & Communication",
                description:
                  "Identify key stakeholders and develop targeted communication plans to build awareness, manage expectations, and foster buy-in across the organization.",
              },
              {
                title: "Customized Training Program Development",
                description:
                  "Design and deliver engaging, role-based training programs—from e-learning modules to hands-on workshops—that equip employees for success.",
              },
              {
                title: "Adoption Measurement & Analytics",
                description:
                  "Implement metrics and dashboards to track user adoption rates, proficiency levels, and sentiment, allowing for data-driven interventions.",
              },
              {
                title: "Resistance Management & Mitigation",
                description:
                  "Proactively identify potential sources of resistance and develop targeted strategies to address concerns and convert skeptics into advocates.",
              },
              {
                title: "Post-Launch Support & Reinforcement",
                description:
                  "Provide ongoing support, coaching, and reinforcement mechanisms to sustain change, prevent regression, and drive continuous improvement.",
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
              From alignment, to adoption, to reinforcement.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 md:gap-12">
            {[
              {
                step: "01",
                title: "Assess & Align",
                description:
                  "We begin by assessing organizational readiness, identifying potential challenges, and aligning leadership around a unified change strategy and vision.",
              },
              {
                step: "02",
                title: "Engage & Equip",
                description:
                  "We execute a multi-channel communication plan and deliver tailored training programs to equip employees with the skills and motivation to adopt new ways of working.",
              },
              {
                step: "03",
                title: "Measure & Sustain",
                description:
                  "We continuously measure adoption, gather feedback, and implement reinforcement mechanisms to ensure the change is sustained and delivers long-term value.",
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
              Adoption stories, across industries.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title:
                  "Driving Digital Transformation in a Mid-Sized Manufacturing Firm",
                category: "Manufacturing",
                description:
                  "Managed the people side of a major ERP implementation, achieving 98% user adoption within 3 months and minimizing operational disruption.",
                image:
                  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
                link: "/cases/erp-adoption-manufacturing",
              },
              {
                title: "Enabling a Shift to Agile in a Financial Services Company",
                category: "Financial Services",
                description:
                  "Led change management for a company-wide agile transformation, resulting in a 40% improvement in project delivery speed and team morale.",
                image:
                  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
                link: "/cases/agile-transformation-finance",
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
              Ready to ensure your transformation succeeds?
            </h2>
            <p className="text-base md:text-lg text-white/80 leading-[1.65] mb-10">
              Let&rsquo;s discuss how our change management and training
              expertise can maximize the ROI of your process optimization
              initiatives.
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
