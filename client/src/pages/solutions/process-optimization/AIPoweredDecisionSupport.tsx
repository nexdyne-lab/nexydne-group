import React, { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SolutionHero from "@/components/SolutionHero";
import BainHoverCard from "@/components/BainHoverCard";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function AIPoweredDecisionSupport() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const relatedCapabilities = [
    {
      title: "Process Discovery & Mining",
      description:
        "Identify and visualize process inefficiencies to target high-impact automation opportunities.",
      link: "/solutions/process-optimization/process-discovery-mining",
    },
    {
      title: "Intelligent Automation Design",
      description:
        "Design and implement robust automation solutions that integrate with your existing systems.",
      link: "/solutions/process-optimization/intelligent-automation-design",
    },
    {
      title: "Workflow Optimization",
      description:
        "Streamline and re-engineer workflows to maximize efficiency and reduce operational costs.",
      link: "/solutions/process-optimization/workflow-optimization",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-charcoal selection:bg-primary selection:text-white">
      <SEO
        title="AI-Powered Decision Support"
        description="Deploy machine learning models that augment human decision-making with predictive insights and recommendations."
        canonical="/solutions/process-optimization/ai-powered-decision-support"
      />
      <Navigation />

      <SolutionHero
        eyebrow="INTELLIGENT PROCESS OPTIMIZATION · AI-POWERED DECISION SUPPORT"
        title="AI-Powered Decision Support"
        subtitle="Deploy machine learning models that augment human decision-making with predictive insights and recommendations."
        backgroundImage="https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/AkoLwKvIWfMzjgnS.jpg"
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
              Better decisions, faster, backed by the numbers.
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              { metric: "40%", label: "Increase in forecast accuracy" },
              { metric: "25%", label: "Reduction in decision-making time" },
              { metric: "15%", label: "Improvement in operational efficiency" },
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
              In today&rsquo;s complex business environment, making the right
              decision at the right time is paramount. AI-powered decision
              support systems provide the critical insights needed to navigate
              uncertainty and capitalize on opportunities.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base md:text-lg text-charcoal/80 leading-[1.65] mb-6"
            >
              These systems go beyond simple analytics. They provide predictive
              and prescriptive recommendations, enabling your teams to
              anticipate market shifts, optimize resource allocation, and
              mitigate risks before they escalate. It&rsquo;s about augmenting
              human intelligence, not replacing it.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-charcoal/80 leading-[1.65]"
            >
              The key to effective decision support is a deep understanding of
              your business context. We work closely with your domain experts
              to build models that are not only accurate but also interpretable
              and aligned with your strategic goals.
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
              Our AI-Powered Decision Support Capabilities
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Predictive Analytics & Forecasting",
                description:
                  "Develop models that forecast demand, predict customer churn, and identify potential operational failures before they occur.",
              },
              {
                title: "Prescriptive Recommendation Engines",
                description:
                  "Build systems that recommend the next best action for sales, marketing, and operational decisions, tailored to individual contexts.",
              },
              {
                title: "Dynamic Pricing & Revenue Management",
                description:
                  "Implement AI-driven pricing strategies that respond to market dynamics, competitor actions, and customer behavior in real-time.",
              },
              {
                title: "Supply Chain & Inventory Optimization",
                description:
                  "Use machine learning to optimize inventory levels, predict supply chain disruptions, and improve logistics planning.",
              },
              {
                title: "Risk Modeling & Fraud Detection",
                description:
                  "Deploy advanced models to identify and mitigate financial, operational, and cybersecurity risks in real-time.",
              },
              {
                title: "Personalized Customer Experience",
                description:
                  "Leverage AI to deliver personalized product recommendations, content, and support to enhance customer engagement and loyalty.",
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
              From data, to model, to decision.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 md:gap-12">
            {[
              {
                step: "01",
                title: "Identify Critical Decision Points",
                description:
                  "We map your key business processes to identify the most critical decision points where AI can deliver the highest value and impact.",
              },
              {
                step: "02",
                title: "Develop & Validate Models",
                description:
                  "We build, train, and rigorously validate machine learning models using your data, ensuring they are accurate, robust, and aligned with your business objectives.",
              },
              {
                step: "03",
                title: "Integrate & Empower Teams",
                description:
                  "We seamlessly integrate the models into your existing workflows and provide your teams with the training and tools to leverage these new capabilities effectively.",
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
              AI decision support, in production.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Dynamic Pricing for a Global Retailer",
                category: "Retail",
                description:
                  "Implemented a real-time pricing engine that increased gross margins by 8% while maintaining price competitiveness.",
                image:
                  "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f",
                link: "/cases/retail-dynamic-pricing",
              },
              {
                title: "Predictive Maintenance for a Manufacturing Firm",
                category: "Manufacturing",
                description:
                  "Deployed a predictive maintenance solution that reduced equipment downtime by 30% and maintenance costs by 15%.",
                image:
                  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
                link: "/cases/manufacturing-predictive-maintenance",
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
              Ready to enhance your decision-making with AI?
            </h2>
            <p className="text-base md:text-lg text-white/80 leading-[1.65] mb-10">
              Let&rsquo;s discuss how our AI-powered decision support solutions
              can drive growth and efficiency for your business.
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
