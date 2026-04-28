import React, { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SolutionHero from "@/components/SolutionHero";
import BainHoverCard from "@/components/BainHoverCard";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function IntelligentAutomationDesign() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const relatedCapabilities = [
    {
      title: "Process Discovery & Mining",
      description:
        "Identify and analyze processes to uncover automation and optimization opportunities.",
      link: "/solutions/process-optimization/process-discovery-mining",
    },
    {
      title: "Workflow Optimization",
      description:
        "Streamline and re-engineer workflows for maximum efficiency and effectiveness.",
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
        title="Intelligent Automation Design"
        description="Design and implement automation solutions that combine RPA, AI, and workflow orchestration for maximum impact."
        canonical="/solutions/process-optimization/intelligent-automation-design"
      />
      <Navigation />

      <SolutionHero
        eyebrow="INTELLIGENT PROCESS OPTIMIZATION · INTELLIGENT AUTOMATION DESIGN"
        title="Intelligent Automation Design"
        subtitle="Design and implement automation solutions that combine RPA, AI, and workflow orchestration for maximum impact."
        backgroundImage="https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/zFEfRqDSqmgmErAt.jpg"
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
              Our Experience & Impact
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-charcoal max-w-[32ch]"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              Intelligent automation, measured in outcomes.
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              { metric: "60%", label: "Increase in process efficiency" },
              { metric: "40%", label: "Reduction in operational costs" },
              { metric: "99.9%", label: "Automation accuracy rate" },
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
              The evolution of automation has moved beyond simple task
              execution. Intelligent automation marks a pivotal shift—
              integrating AI and machine learning to create systems that not
              only perform tasks but learn, adapt, and decide.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base md:text-lg text-charcoal/80 leading-[1.65] mb-6"
            >
              A successful intelligent automation strategy requires a holistic
              design approach. It's not just about deploying a single
              technology but orchestrating a symphony of tools—Robotic
              Process Automation (RPA) for structured tasks, AI for cognitive
              capabilities, and workflow management to tie everything together.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-charcoal/80 leading-[1.65]"
            >
              At the heart of our design philosophy is a human-centric focus.
              We believe that automation should augment human capabilities, not
              replace them—which means designing intuitive interfaces,
              establishing clear governance, and implementing robust change
              management programs.
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
              Our Intelligent Automation Capabilities
            </h2>
            <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] mt-6">
              From strategy to execution, we provide end-to-end services to
              design and implement intelligent automation solutions.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Automation Strategy & Roadmap",
                description:
                  "We help you define a clear vision and a strategic roadmap for your intelligent automation journey, ensuring alignment with your business goals.",
              },
              {
                title: "Process Re-engineering & Design",
                description:
                  "Our experts analyze and redesign your business processes to unlock their full automation potential, driving efficiency and innovation.",
              },
              {
                title: "RPA & AI Solution Development",
                description:
                  "We build and deploy custom RPA and AI solutions tailored to your specific needs, from simple task automation to complex cognitive agents.",
              },
              {
                title: "Workflow Orchestration & Integration",
                description:
                  "We seamlessly integrate your automation solutions with your existing IT landscape, creating a unified and orchestrated digital workforce.",
              },
              {
                title: "Intelligent Document Processing",
                description:
                  "Leverage AI to automatically extract, interpret, and process data from unstructured documents, such as invoices, contracts, and emails.",
              },
              {
                title: "Automation Governance & CoE",
                description:
                  "We help you establish a robust governance framework and a Center of Excellence (CoE) to manage, scale, and sustain your automation initiatives.",
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
              A disciplined methodology for impactful automation.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 md:gap-12">
            {[
              {
                step: "01",
                title: "Discover & Assess",
                description:
                  "We begin by identifying and prioritizing high-impact automation opportunities through a comprehensive assessment of your processes, systems, and data.",
              },
              {
                step: "02",
                title: "Design & Build",
                description:
                  "Our team designs and develops robust, scalable, and secure intelligent automation solutions, leveraging our deep expertise in RPA, AI, and workflow orchestration.",
              },
              {
                step: "03",
                title: "Deploy & Scale",
                description:
                  "We manage the end-to-end deployment of your automation solutions and provide ongoing support to ensure they deliver sustained value and can scale across the enterprise.",
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
              Real-world examples of intelligent automation.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title:
                  "Streamlining Financial Close for a Mid-Sized Manufacturer",
                category: "Manufacturing",
                description:
                  "Automated 80% of the financial close process, reducing closing time by 5 days.",
                image:
                  "https://images.unsplash.com/photo-1605106702734-205df2244aa7",
                link: "/cases/financial-close-automation",
              },
              {
                title: "Automating Patient Onboarding for a Healthcare Provider",
                category: "Healthcare",
                description:
                  "An AI-powered solution that reduced onboarding time by 70% and improved data accuracy.",
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
              Ready to unlock the power of intelligent automation?
            </h2>
            <p className="text-base md:text-lg text-white/80 leading-[1.65] mb-10">
              Let's discuss how our intelligent automation design
              services can transform your business.
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
