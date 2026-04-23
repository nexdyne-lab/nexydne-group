import React, { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  ArrowRight, 
  ArrowLeft,
  Target,
  Map,
  Compass,
  TrendingUp,
  CheckCircle2,
  Lightbulb,
  BarChart3,
  Users
} from "lucide-react";
import BainHoverCard from "@/components/BainHoverCard";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";

export default function TechnologyStrategy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Related capabilities data
  const relatedCapabilities = [
    {
      title: "Data Modernization",
      description: "Transform legacy silos into intelligent data platforms that drive real-time insights.",
      link: "/solutions/enterprise-transformation/legacy-modernization"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable, secure foundations on AWS, Azure, and GCP.",
      link: "/solutions/enterprise-transformation/cloud-infrastructure"
    },
    {
      title: "DevOps & Security",
      description: "Ship faster with automated pipelines that have compliance baked in.",
      link: "/solutions/enterprise-transformation/devops-automation"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-charcoal selection:bg-primary selection:text-white">
      <SEO 
        title="Technology Strategy" 
        description="Build a technology roadmap that aligns with where your business is heading. We help you prioritize investments and avoid costly detours."
        canonical="/solutions/enterprise-transformation/technology-strategy"
      />
      <Navigation />

      {/* Section 1: Hero Section - Dark Background (F100) */}
      <section className="relative min-h-[70vh] flex items-center pt-20 bg-charcoal">
        <div className="container px-4 md:px-12 grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Breadcrumbs variant="light" />
            
            <h1 className="text-5xl md:text-7xl eb-garamond font-bold tracking-tight text-white leading-[1.05] mb-4">
              Technology<br />
              <span className="text-primary">Strategy</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl mb-10">
              Build a technology roadmap that aligns with where your business is heading. We help you prioritize investments and avoid costly detours.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button className="bg-white hover:bg-muted text-charcoal px-8 py-6 text-base font-semibold transition-all">
                  Schedule a Strategy Session
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold transition-all bg-transparent">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" 
              alt="Technology Strategy Planning" 
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Section 2: Our Experience & Impact (F100) */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-charcoal">Our Experience & Impact</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: "3-5yr", label: "Roadmap horizon for strategic planning" },
              { metric: "40%", label: "Faster technology decision-making" },
              { metric: "60+", label: "Technology strategies delivered" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-5xl md:text-6xl font-bold text-charcoal mb-3">{item.metric}</div>
                <p className="text-lg text-charcoal/60">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Thought Leadership Paragraphs (F100) */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-12">
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl text-charcoal/80 leading-relaxed"
            >
              Technology decisions made today shape your business for years to come. Yet many growing companies invest in tools and systems without a clear view of where they're heading—leading to fragmented systems, wasted budgets, and technical debt that slows everything down.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-charcoal/80 leading-relaxed"
            >
              We help you build a technology strategy that connects your business goals to your technology investments. This isn't about chasing trends or buying the latest tools—it's about making smart choices that compound over time.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-charcoal/80 leading-relaxed"
            >
              Start with business outcomes. Prioritize ruthlessly—you can't do everything at once. Build for flexibility—markets change, and your systems should evolve with your needs.
            </motion.p>
          </div>
        </div>
      </section>

      {/* How We Can Help Section - Technology Strategy Capabilities */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
              How We Can Help
            </span>
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-charcoal mb-6">
              Our Technology Strategy Capabilities
            </h2>
            <p className="text-xl text-charcoal/60 max-w-2xl">
              Strategic advisory services that align technology investments with business outcomes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Technology Roadmap Development",
                description: "Create multi-year technology roadmaps aligned with business strategy. Prioritize investments based on value, risk, and dependencies."
              },
              {
                title: "Architecture Assessment",
                description: "Evaluate your current technology landscape. Identify technical debt, gaps, and opportunities for modernization."
              },
              {
                title: "Vendor Selection & Evaluation",
                description: "Navigate the vendor landscape with structured RFP processes. Make informed decisions based on fit, cost, and long-term viability."
              },
              {
                title: "Digital Transformation Strategy",
                description: "Define your digital transformation vision and execution plan. Align people, process, and technology for successful change."
              },
              {
                title: "IT Operating Model Design",
                description: "Design target operating models for IT organizations. Define governance, sourcing, and delivery frameworks."
              },
              {
                title: "Technology Due Diligence",
                description: "Assess technology assets and risks for M&A transactions. Identify integration challenges and value creation opportunities."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <BainHoverCard title={item.title} description={item.description} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Differentiator Section */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image with accent block */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" 
                alt="Strategy planning session" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              {/* Accent block */}
              <div className="absolute bottom-6 right-6 w-24 h-24 bg-primary rounded-lg" />
            </motion.div>
            
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl eb-garamond font-bold text-charcoal leading-[1.1] mb-8">
                We've learned what works—and what doesn't.
              </h2>
              
              <p className="text-xl text-charcoal/70 leading-relaxed mb-6">
                The difference isn't luck. It's process. We've refined our approach over 60+ technology strategies, learning what works for companies your size. We know how to balance ambition with pragmatism.
              </p>
              
              <p className="text-xl text-charcoal/70 leading-relaxed">
                More importantly, we know when to say no—avoiding the shiny object syndrome that derails most technology roadmaps.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: Our Approach (3-Column Consulting Format) */}
      <section className="py-20 bg-base">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4 block">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-5xl eb-garamond font-light text-white">
              Align technology investments with business outcomes
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Start with the business",
                description: "We don't lead with technology. We start by understanding your growth strategy, competitive pressures, and operational challenges—then work backward to the technology that enables them."
              },
              {
                title: "Prioritize ruthlessly",
                description: "Every technology initiative competes for limited resources. We help you sequence investments based on business impact, technical dependencies, and organizational readiness."
              },
              {
                title: "Build for execution",
                description: "A strategy document gathering dust helps no one. We create roadmaps with clear ownership, measurable milestones, and governance frameworks that keep execution on track."
              }
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-xl font-bold text-white mb-4">{pillar.title}</h3>
                <p className="text-muted-foreground/50 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 bg-transparent">
                Get in touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: Key Benefits - H100 Hover Cards */}
      <section className="py-24 bg-subtle">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
              What You Get
            </span>
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-charcoal mb-6">
              A roadmap that turns technology into competitive advantage.
            </h2>
          </motion.div>

          {/* H100 Hover Effect Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Clear Priorities",
                description: "Know exactly which projects to tackle first and why. No more guessing or chasing shiny objects."
              },
              {
                title: "3-5 Year Roadmap",
                description: "A sequenced plan that shows how each investment builds toward your business goals."
              },
              {
                title: "Investment Framework",
                description: "Criteria for evaluating new technology opportunities so you can make faster, better decisions."
              },
              {
                title: "Stakeholder Alignment",
                description: "Get leadership, IT, and operations on the same page about technology direction."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <BainHoverCard title={item.title} description={item.description} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Common Challenges Section (Preserved Unique Section - Enhanced) */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">
              Sound Familiar?
            </span>
            <h2 className="text-3xl md:text-4xl eb-garamond font-bold text-charcoal mb-6">
              Challenges we help growing companies solve.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                challenge: "We have too many disconnected systems",
                solution: "We map your technology landscape and design an integration strategy that connects your tools without ripping and replacing everything."
              },
              {
                challenge: "We don't know what to invest in next",
                solution: "We create a prioritization framework based on business impact, technical dependencies, and resource constraints."
              },
              {
                challenge: "Our technology decisions are reactive",
                solution: "We build a proactive roadmap that anticipates your needs and gives you time to plan rather than scramble."
              },
              {
                challenge: "Leadership and IT aren't aligned",
                solution: "We facilitate strategic alignment sessions that translate business goals into technology requirements everyone understands."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 border border-border hover:border-primary hover:shadow-lg transition-all"
              >
                <p className="text-lg font-semibold text-charcoal mb-4 group-hover:text-primary transition-colors">"{item.challenge}"</p>
                <p className="text-muted-foreground leading-relaxed">{item.solution}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Related Capabilities - H100 Hover */}
      <section className="py-24 bg-subtle">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">
              Related Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl eb-garamond font-bold text-charcoal">
              Explore more Technology capabilities
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {relatedCapabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <BainHoverCard title={cap.title} description={cap.description} link={cap.link} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: CTA Section (F100 - Cyan Background) */}
      <section className="py-24 bg-primary">
        <div className="container px-4 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl eb-garamond font-bold text-white mb-6">
              Ready to build your technology roadmap?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Let's talk about where your business is heading and how technology can get you there faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white hover:bg-subtle text-primary px-10 py-6 text-lg font-semibold">
                  Schedule a Strategy Session <ArrowRight className="ml-2 w-5 h-5 inline" />
                </Button>
              </Link>
              <Link href="/solutions/enterprise-transformation">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-10 py-6 text-lg font-semibold bg-transparent">
                  Explore All Technology Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
