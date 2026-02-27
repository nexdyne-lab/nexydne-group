import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import BainHoverCard from "@/components/BainHoverCard";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function AIPoweredFinance() {
  // Capabilities data for How We Can Help section
  const capabilities = [
    {
      title: "Automated Financial Reporting",
      description: "Eliminate manual report generation with AI-powered automation. Real-time dashboards and scheduled reports that update themselves, freeing your team for higher-value analysis."
    },
    {
      title: "Predictive Cash Flow Modeling",
      description: "Move from reactive to proactive cash management. Machine learning models that forecast cash positions with greater accuracy, identifying risks and opportunities weeks in advance."
    },
    {
      title: "AI-Assisted Budgeting",
      description: "Build smarter budgets faster. AI analyzes historical patterns, market trends, and operational drivers to generate baseline forecasts that your team can refine and validate."
    },
    {
      title: "Intelligent Variance Analysis",
      description: "Stop chasing data and start finding insights. AI automatically identifies significant variances, surfaces root causes, and suggests corrective actions."
    },
    {
      title: "Document Processing & Extraction",
      description: "Transform unstructured financial documents into structured data. Invoices, contracts, and statements processed automatically with high accuracy."
    },
    {
      title: "Financial Anomaly Detection",
      description: "Catch issues before they become problems. AI monitors transactions and patterns to flag unusual activity, potential fraud, or data quality issues in real-time."
    }
  ];

  // Related capabilities data
  const relatedCapabilities = [
    {
      title: "Financial Planning & Analysis",
      description: "Turn data into decisions. Robust budgeting, forecasting, and variance analysis processes that give you clear visibility into performance.",
      link: "/capabilities/strategy-corporate-finance/fpa"
    },
    {
      title: "Fractional CFO Services",
      description: "Access high-level financial leadership without the full-time cost. Strategic financial planning and board-level reporting.",
      link: "/capabilities/strategy-corporate-finance/cfo-services"
    },
    {
      title: "Performance Improvement",
      description: "Unlock hidden value in your operations. Cost-saving opportunities, working capital optimization, and process streamlining.",
      link: "/capabilities/strategy-corporate-finance/performance-improvement"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-charcoal selection:bg-primary selection:text-white">
      <SEO 
        title="AI-Powered Finance" 
        description="Harness artificial intelligence to transform your finance function. Automated reporting, predictive cash flow modeling, and AI-assisted budgeting for midmarket companies."
        canonical="/capabilities/strategy-corporate-finance/ai-powered-finance"
      />
      <Navbar />
      
      {/* Hero Section - Dark Background (F100) */}
      <section className="relative min-h-[70vh] flex items-center pt-20 bg-charcoal">
        <div className="container px-4 md:px-12 grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/capabilities/strategy-corporate-finance" className="inline-flex items-center text-white/60 hover:text-white mb-6 text-sm transition-colors">
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Strategy & Corporate Finance
            </Link>
            
            <h1 className="text-5xl md:text-7xl font-['EB_Garamond'] font-bold tracking-tight text-white leading-[1.05] mb-4">
              AI-Powered Finance
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl mb-10">
              Harness artificial intelligence to transform your finance function. Enterprise-grade insights at midmarket scale—without the enterprise price tag.
            </p>
            
            <div className="flex flex-wrap gap-4">
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
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80" 
              alt="AI-Powered Finance" 
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Our Experience & Impact (F100) */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container px-4 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-['EB_Garamond'] font-bold text-charcoal mb-12"
          >
            Our Experience & Impact
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: "70%", label: "reduction in manual reporting time for clients implementing AI-powered automation" },
              { metric: "3x", label: "improvement in forecast accuracy using machine learning models vs. traditional methods" },
              { metric: "45+", label: "AI finance implementations delivered across diverse industries and company sizes" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${index > 0 ? 'border-l border-border pl-8' : ''}`}
              >
                <div className="text-5xl md:text-6xl font-bold text-charcoal mb-4">{item.metric}</div>
                <p className="text-lg text-charcoal/60">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Thought Leadership Paragraphs (F100) */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-12">
          <div className="max-w-4xl mx-auto space-y-8 text-xl text-charcoal/80 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              The finance function is undergoing its most significant transformation in decades. Artificial intelligence is no longer a futuristic concept—it's a practical tool that leading companies are using today to automate routine tasks, generate deeper insights, and make faster, better decisions.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Yet many mid-market companies feel left behind. They see enterprise giants deploying sophisticated AI solutions while their own teams remain trapped in spreadsheet purgatory—manually consolidating data, chasing down variances, and producing reports that are outdated before they're finished.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We believe AI-powered finance shouldn't require enterprise budgets. Our approach focuses on practical, high-impact applications that deliver measurable ROI within months—not years. We help you identify the right use cases, select appropriate tools, and implement solutions that your team can actually use and maintain.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              The goal isn't AI for its own sake—it's freeing your finance team from low-value tasks so they can focus on what matters: providing the insights and analysis that drive strategic decisions and create competitive advantage.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Approach Section - 3 Column Layout (F100) */}
      <section className="py-24 bg-base text-white">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">
              Our Approach
            </span>
            <h2 className="text-4xl md:text-5xl font-['EB_Garamond'] font-bold">
              Practical AI implementation
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Identify high-impact use cases",
                description: "We assess your current processes to find the automation opportunities with the highest ROI—focusing on repetitive, time-consuming tasks that don't require human judgment."
              },
              {
                title: "Build and validate",
                description: "We implement solutions using proven tools and frameworks, testing rigorously with your data to ensure accuracy and reliability before going live."
              },
              {
                title: "Deploy and scale",
                description: "We train your team, establish governance protocols, and create a roadmap for expanding AI capabilities as your organization matures."
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
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/contact">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 bg-transparent">
                Get in touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How We Can Help - Capability Cards with H100 */}
      <section className="py-24 bg-subtle">
        <div className="container px-4 md:px-12">
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
            <h2 className="text-4xl md:text-5xl font-['EB_Garamond'] font-bold text-charcoal mb-6">
              Our AI Finance Capabilities
            </h2>
            <p className="text-xl text-charcoal/60 max-w-2xl">
              Practical AI applications that transform your finance function without requiring a data science team.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="h-full"
              >
                <BainHoverCard title={item.title} description={item.description} link="#" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Results Section (F100) */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
              Client Results
            </span>
            <h2 className="text-4xl md:text-5xl font-['EB_Garamond'] font-bold text-charcoal">
              AI finance in action
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                category: "MANUFACTURING",
                title: "Predictive cash flow modeling prevents liquidity crisis",
                description: "A mid-market manufacturer struggled with cash flow visibility across multiple business units. We implemented ML-based forecasting that predicted cash positions 8 weeks out with 92% accuracy. Result: Avoided $2M emergency credit line and reduced working capital by 15%.",
                image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80"
              },
              {
                category: "PROFESSIONAL SERVICES",
                title: "Automated reporting saves 40 hours per month",
                description: "A consulting firm's finance team spent days each month manually preparing partner reports. We deployed automated data pipelines and AI-generated narratives. Result: 40 hours saved monthly, reports delivered 3 days faster, and improved accuracy.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
              }
            ].map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href="/capabilities/strategy-corporate-finance/case-studies" className="block">
                  <div className="relative overflow-hidden rounded-xl aspect-[16/10] mb-6">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded">
                        {study.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-['EB_Garamond'] font-bold text-charcoal mb-4 group-hover:text-primary transition-colors leading-tight">
                    {study.title}
                  </h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed mb-4">
                    {study.description}
                  </p>
                  <div className="flex items-center text-primary text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Read case study <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights Section (F100) */}
      <section className="py-24 bg-subtle">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
                Insights
              </span>
              <h2 className="text-4xl md:text-5xl font-['EB_Garamond'] font-bold text-charcoal">
                Latest Insights
              </h2>
            </div>
            <Link href="/insights">
              <Button variant="outline" className="mt-6 md:mt-0 border-base/20 text-charcoal hover:bg-base/5">
                View all insights
              </Button>
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "AI FINANCE",
                readTime: "6 min read",
                title: "Getting started with AI in finance: A practical roadmap for CFOs",
                description: "A step-by-step guide to identifying, prioritizing, and implementing AI use cases in your finance function."
              },
              {
                category: "AUTOMATION",
                readTime: "4 min read",
                title: "Beyond RPA: How generative AI is changing financial reporting",
                description: "Why traditional automation falls short and how LLMs are enabling a new generation of intelligent finance tools."
              },
              {
                category: "FORECASTING",
                readTime: "5 min read",
                title: "Machine learning for cash flow: What works and what doesn't",
                description: "Lessons learned from implementing predictive cash flow models across different industries and company sizes."
              }
            ].map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href="/insights" className="block">
                  <div className="bg-white p-8 rounded-xl h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">{insight.category}</span>
                      <span className="text-xs text-charcoal/40">•</span>
                      <span className="text-xs text-charcoal/40">{insight.readTime}</span>
                    </div>
                    <h3 className="text-xl font-['EB_Garamond'] font-bold text-charcoal mb-4 group-hover:text-primary transition-colors leading-tight">
                      {insight.title}
                    </h3>
                    <p className="text-charcoal/60 text-sm leading-relaxed mb-6">
                      {insight.description}
                    </p>
                    <div className="flex items-center text-primary text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      Read article <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Capabilities Section with H100 */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-12">
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
            <h2 className="text-4xl md:text-5xl font-['EB_Garamond'] font-bold text-charcoal mb-6">
              Explore related capabilities
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {relatedCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <BainHoverCard title={capability.title} description={capability.description} link={capability.link} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Blue Background (F100) */}
      <section className="py-24 bg-primary">
        <div className="container px-4 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-['EB_Garamond'] font-bold text-white mb-6">
              Ready to bring AI to your finance function?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Let's discuss how AI-powered finance can help you automate routine tasks, improve accuracy, and free your team for strategic work.
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
