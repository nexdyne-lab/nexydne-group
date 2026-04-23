import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import BainHoverCard from "@/components/BainHoverCard";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function StrategyCorporateFinance() {
  // Capabilities data - preserved from original
  const capabilities = [
    {
      title: "Fractional CFO Services",
      description: "Access high-level financial leadership without the full-time cost. Strategic financial planning, cash flow management, and board-level reporting tailored for growing SMEs.",
      link: "/capabilities/strategy-corporate-finance/cfo-services"
    },
    {
      title: "Financial Planning & Analysis",
      description: "Turn data into decisions. Robust budgeting, forecasting, and variance analysis processes that give you clear visibility into performance and future scenarios.",
      link: "/capabilities/strategy-corporate-finance/fpa"
    },
    {
      title: "Capital Raising & Investment",
      description: "Prepare for your next funding round with confidence. Valuation, pitch deck creation, financial modeling, and due diligence preparation that positions you for success.",
      link: "/capabilities/strategy-corporate-finance/capital-raising"
    },
    {
      title: "M&A & Strategic Partnerships",
      description: "Navigate complex transactions with expert guidance. From target identification and valuation to negotiation and post-merger integration.",
      link: "/capabilities/strategy-corporate-finance/mergers-acquisitions"
    },
    {
      title: "Business Strategy & Transformation",
      description: "Define your path to victory. Clarify your vision, identify growth engines, and restructure for scalability with strategies grounded in financial reality.",
      link: "/capabilities/strategy-corporate-finance/business-strategy"
    },
    {
      title: "Performance Improvement",
      description: "Unlock hidden value in your operations. Cost-saving opportunities, working capital optimization, and process streamlining that improve margins and cash flow.",
      link: "/capabilities/strategy-corporate-finance/performance-improvement"
    },
    {
      title: "AI-Powered Finance",
      description: "Harness artificial intelligence to transform your finance function. Automated reporting, predictive cash flow modeling, and AI-assisted budgeting that delivers enterprise-grade insights at midmarket scale.",
      link: "/capabilities/strategy-corporate-finance/ai-powered-finance"
    }
  ];

  // Related capabilities data - preserved from original
  const relatedCapabilities = [
    {
      title: "Business Building",
      description: "Launch new revenue streams and digital ventures with our proven playbook for rapid scaling.",
      link: "/capabilities/business-building"
    },
    {
      title: "Operations",
      description: "Transform your operational infrastructure to reduce costs and improve efficiency.",
      link: "/capabilities/operations"
    },
    {
      title: "Growth, Marketing & Sales",
      description: "Drive sustainable revenue growth through data-driven commercial strategies.",
      link: "/capabilities/growth-marketing-sales"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-charcoal selection:bg-primary selection:text-white">
      <SEO 
        title="Strategy & Corporate Finance" 
        description="Align your financial resources with strategic goals to maximize ROI and secure sustainable long-term growth for ambitious SMEs."
        canonical="/capabilities/strategy-corporate-finance"
      />
      <Navbar />
      
      {/* Section 1: Hero Section - Dark Background (F100) */}
      <section className="relative min-h-[70vh] flex items-center pt-20 bg-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/capabilities" className="inline-flex items-center text-white/60 hover:text-white text-sm mb-6 transition-colors">
              ← Capabilities
            </Link>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-4 eb-garamond">
              Strategic Financial Leadership
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl mb-10">
              Align financial resources with strategic vision to unlock sustainable growth. We provide the financial leadership that ambitious SMEs need to compete and win.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link href="/contact">
                <Button className="bg-white hover:bg-muted text-charcoal px-8 py-6 text-base font-semibold transition-all">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/capabilities/strategy-corporate-finance/case-studies">
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
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80" 
              alt="Strategy & Corporate Finance" 
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Section 2: Our Experience & Impact (F100) */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-charcoal">Our Experience & Impact</h2>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              { metric: "$2B+", label: "Capital raised for clients across equity, debt, and hybrid instruments" },
              { metric: "200+", label: "Strategic engagements completed for mid-market organizations" },
              { metric: "40%", label: "Average valuation uplift achieved through our strategic interventions" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="pl-6"
              >
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-charcoal mb-3">{item.metric}</div>
                <p className="text-lg text-charcoal/60">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Thought Leadership Paragraphs (F100) */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl text-charcoal/80 leading-relaxed"
            >
              In today's complex business environment, financial leadership isn't just about managing numbers—it's about aligning resources with strategic vision to unlock sustainable growth. For growing mid-market organizations, access to sophisticated financial expertise can be the difference between stagnation and transformation.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-charcoal/80 leading-relaxed"
            >
              The most successful organizations share a common trait: they've moved beyond reactive financial management to build proactive strategic finance functions. This means investing in capabilities that enable real-time visibility, predictive decision-making, and capital optimization—turning finance from a cost center into a competitive weapon.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-charcoal/80 leading-relaxed"
            >
              Our approach to financial transformation combines deep expertise with practical business acumen. We don't just implement tools; we refactor the entire financial operating model. From optimizing capital structure to designing performance management systems, we help you build a finance function that operates with the precision of a well-tuned engine.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl text-charcoal/80 leading-relaxed"
            >
              The shift from transactional to strategic finance has fundamentally changed what excellence looks like. Modern finance teams need end-to-end visibility, the ability to model scenarios before committing resources, and feedback loops that enable continuous improvement. We work alongside your team to build these capabilities while maintaining the agility to adapt as markets evolve.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Section 4: Our Approach (F100 - Dark Navy Background) */}
      <section className="py-12 sm:py-16 lg:py-24 bg-base text-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
              Our Approach
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Build a finance function that drives growth
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {[
              {
                title: "Diagnose the position",
                description: "We conduct deep-dive analysis of your financial position, market dynamics, and strategic objectives to understand where you are and where you need to go. We map value streams, identify bottlenecks, and benchmark against best-in-class performers."
              },
              {
                title: "Design the architecture",
                description: "We develop a target operating model that balances efficiency, control, and agility. We prioritize initiatives by impact and feasibility, creating a clear roadmap that aligns financial resources with business goals."
              },
              {
                title: "Deploy and iterate",
                description: "We implement changes in agile sprints, measuring impact at each stage and iterating based on real-world results. We build internal capabilities and governance structures to sustain improvement over time."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base font-semibold transition-all">
                Get in touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5: How We Can Help - Capability Cards with H100 Hover Effect */}
      <section className="py-12 sm:py-16 lg:py-24 bg-subtle">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
              How We Can Help
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Our Strategy & Finance Capabilities
            </h2>
            <p className="text-xl text-charcoal/60 max-w-2xl">
              We help you build strategic finance capabilities that drive sustainable growth and maximize shareholder value.
            </p>
          </motion.div>

          {/* BainHoverCard with peach wash */}
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {capabilities.map((item, index) => (
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
                  link={item.link}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Client Results (F100) */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
                Client Results
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal">
                Driving financial transformation
              </h2>
            </motion.div>
            <Link href="/capabilities/strategy-corporate-finance/case-studies">
              <Button variant="outline" className="border-base/20 text-charcoal hover:bg-base/5 bg-transparent transition-all duration-300">
                View all case studies
              </Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                title: "Series B funding secured with 40% above target valuation",
                category: "Capital Raising",
                description: "Helped a fast-growing logistics tech company prepare for and execute a successful Series B round, achieving a valuation 40% above initial targets through rigorous financial modeling and investor positioning.",
                image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80"
              },
              {
                title: "Post-merger integration delivers $12M in synergies",
                category: "M&A Integration",
                description: "Led the financial integration of two regional manufacturing companies, identifying and capturing $12M in synergies within 18 months through cost optimization and operational alignment.",
                image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80"
              }
            ].map((study, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl aspect-[16/10] mb-6">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">
                      {study.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-4 group-hover:text-primary transition-colors leading-tight">
                  {study.title}
                </h3>
                <p className="text-charcoal/60 mb-4 leading-relaxed">
                  {study.description}
                </p>
                <div className="flex items-center text-primary text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Read case study <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Latest Insights (F100) */}
      <section className="py-12 sm:py-16 lg:py-24 bg-subtle">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
                Insights
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal">
                Latest Insights
              </h2>
            </motion.div>
            <Link href="/insights">
              <Button variant="outline" className="border-base/20 text-charcoal hover:bg-base/5 bg-transparent transition-all duration-300">
                View all insights
              </Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                category: "Strategy",
                readTime: "8 min read",
                title: "The CFO's Guide to Strategic Growth in Uncertain Markets",
                description: "How top-performing CFOs are balancing risk management with growth ambition in an era of economic uncertainty."
              },
              {
                category: "Capital Markets",
                readTime: "6 min read",
                title: "Preparing for Your Series B: Lessons from 50+ Funding Rounds",
                description: "Key insights from our experience helping mid-market companies navigate successful growth-stage funding."
              },
              {
                category: "Performance",
                readTime: "5 min read",
                title: "Working Capital Optimization: Quick Wins for Cash Flow",
                description: "Practical strategies for improving cash conversion cycles without disrupting operations."
              }
            ].map((insight, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-primary text-xs font-bold uppercase tracking-wider">{insight.category}</span>
                  <span className="text-charcoal/40">•</span>
                  <span className="text-charcoal/40 text-xs">{insight.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-4 group-hover:text-primary transition-colors leading-tight">
                  {insight.title}
                </h3>
                <p className="text-charcoal/60 text-sm mb-4 leading-relaxed">
                  {insight.description}
                </p>
                <div className="flex items-center text-primary text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Read article <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Related Capabilities with H100 Hover Effect */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
              Related Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal">
              Explore related capabilities
            </h2>
          </motion.div>
          
          {/* BainHoverCard with peach wash */}
          <div className="grid md:grid-cols-4 gap-6">
            {relatedCapabilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <BainHoverCard
                  title={item.title}
                  description={item.description}
                  link={item.link}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: CTA Section (F100 - Cyan Background) */}
      <section className="py-12 sm:py-16 lg:py-24 bg-primary">
        <div className="container px-4 sm:px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to transform your financial strategy?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Let's discuss how strategic financial leadership can accelerate your growth and unlock new opportunities.
            </p>
            <Link href="/contact">
              <Button className="bg-white hover:bg-subtle text-charcoal px-10 py-6 text-lg font-semibold transition-all">
                Schedule a Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
