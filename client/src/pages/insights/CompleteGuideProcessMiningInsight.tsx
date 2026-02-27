import { ArrowRight, ArrowLeft, Clock, Calendar, User, Share2, Linkedin, Twitter, BookOpen, Search, GitBranch, BarChart3, Target, Lightbulb, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";

export default function CompleteGuideProcessMiningInsight() {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="The Complete Guide to Process Mining | NexDyne Technologies"
        description="A comprehensive guide to process mining: understand how to discover, analyze, and optimize your business processes using event log data and advanced analytics."
      />
      <Navigation />

      {/* Hero Section - Editorial Style */}
      <section className="relative bg-white pt-32 pb-16 border-b border-border/50">
        <div className="container px-4 md:px-8 lg:px-12">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href="/insights" className="inline-flex items-center text-muted-foreground hover:text-primary text-sm transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Insights
            </Link>
          </div>

          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
                Operations
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-3 text-charcoal font-serif">
                The Complete Guide to Process Mining
              </h1>
              <p className="text-xl text-charcoal/70 leading-relaxed mb-8">
                Process mining bridges the gap between traditional process analysis and data science, providing unprecedented visibility into how your processes actually work—not how you think they work.
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>December 5, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>10 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>NexDyne Operations Team</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8 bg-subtle border-b border-border">
        <div className="container px-4 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <span className="font-semibold text-charcoal">In this guide:</span>
              {[
                "What is Process Mining",
                "How It Works",
                "Key Use Cases",
                "Implementation Guide",
                "Best Practices"
              ].map((item, i) => (
                <span key={i} className="text-primary hover:underline cursor-pointer">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 md:py-20">
        <div className="container px-4 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12 max-w-6xl mx-auto">
            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              {/* Lead Paragraph */}
              <p className="text-xl text-charcoal leading-relaxed font-serif mb-8 not-prose">
                Every organization has processes—sequences of activities that transform inputs into outputs. But few organizations truly understand how their processes actually execute. Process mining changes that by using data to reveal the reality of process execution.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6 font-serif">What is Process Mining?</h2>
              
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Process mining is a family of techniques that extract knowledge from event logs recorded by information systems. By analyzing these digital footprints, process mining can automatically discover process models, check conformance to expected behavior, and identify opportunities for improvement.
              </p>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                Unlike traditional process analysis methods that rely on interviews, workshops, and manual documentation, process mining provides an objective, data-driven view of how processes actually work. This often reveals significant gaps between the "official" process and reality.
              </p>

              {/* Three Types of Process Mining */}
              <div className="grid md:grid-cols-3 gap-6 my-10 not-prose">
                {[
                  { 
                    icon: Search, 
                    title: "Process Discovery", 
                    desc: "Automatically create process models from event log data, revealing the actual flow of activities" 
                  },
                  { 
                    icon: GitBranch, 
                    title: "Conformance Checking", 
                    desc: "Compare actual process execution against expected models to identify deviations" 
                  },
                  { 
                    icon: BarChart3, 
                    title: "Process Enhancement", 
                    desc: "Enrich process models with performance data to identify bottlenecks and optimization opportunities" 
                  }
                ].map((type, i) => (
                  <div key={i} className="bg-subtle p-6 rounded-lg">
                    <type.icon className="w-8 h-8 text-primary mb-4" />
                    <h4 className="font-bold text-charcoal mb-2">{type.title}</h4>
                    <p className="text-sm text-charcoal/70">{type.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6 font-serif">How Process Mining Works</h2>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                Process mining relies on event logs—records of activities that occur within information systems. Every time someone creates an order, approves a request, or completes a task, the system records an event with a timestamp, activity name, and case identifier.
              </p>

              {/* Process Steps */}
              <div className="my-10 not-prose">
                <div className="space-y-4">
                  {[
                    {
                      step: "1",
                      title: "Data Extraction",
                      desc: "Extract event logs from source systems (ERP, CRM, workflow tools). Each event includes: Case ID, Activity, Timestamp, and optional attributes like resource, cost, or department."
                    },
                    {
                      step: "2",
                      title: "Data Preparation",
                      desc: "Clean and transform the data to ensure consistency. Handle missing values, standardize activity names, and link events across systems."
                    },
                    {
                      step: "3",
                      title: "Process Discovery",
                      desc: "Apply algorithms to automatically generate process models from the event data. The result is a visual representation of how work actually flows."
                    },
                    {
                      step: "4",
                      title: "Analysis & Insights",
                      desc: "Analyze the discovered process for bottlenecks, deviations, rework loops, and optimization opportunities. Quantify the impact of process issues."
                    },
                    {
                      step: "5",
                      title: "Continuous Monitoring",
                      desc: "Implement ongoing process monitoring to track KPIs, detect anomalies, and measure the impact of process improvements over time."
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 bg-subtle p-5 rounded-lg">
                      <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-charcoal mb-1">{item.title}</h4>
                        <p className="text-sm text-charcoal/70">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pull Quote */}
              <blockquote className="border-l-4 border-primary pl-6 my-10 not-prose">
                <p className="text-2xl text-charcoal font-serif italic leading-relaxed">
                  "Process mining reveals the truth about your operations—often showing that processes are 3-5x more complex than documented."
                </p>
              </blockquote>

              <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6 font-serif">Key Use Cases</h2>

              <h3 className="text-xl font-bold text-charcoal mt-8 mb-4">Order-to-Cash Optimization</h3>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Process mining can analyze the entire order-to-cash cycle—from order creation through delivery and payment. Organizations typically discover significant variation in how orders are processed, with some taking 10x longer than others. By identifying the root causes of delays, companies can reduce cycle times and improve cash flow.
              </p>

              <h3 className="text-xl font-bold text-charcoal mt-8 mb-4">Procure-to-Pay Analysis</h3>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                In procurement, process mining reveals maverick buying, approval bottlenecks, and invoice processing inefficiencies. Organizations often find that 20-30% of purchases bypass standard procurement processes, leading to missed discounts and compliance risks.
              </p>

              <h3 className="text-xl font-bold text-charcoal mt-8 mb-4">Customer Service Improvement</h3>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                By mining customer service processes, organizations can understand the true customer journey—including escalations, transfers, and repeat contacts. This reveals opportunities to improve first-contact resolution and reduce customer effort.
              </p>

              <h3 className="text-xl font-bold text-charcoal mt-8 mb-4">Compliance and Audit</h3>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Process mining provides objective evidence of process compliance. Rather than sampling transactions, auditors can analyze 100% of cases to identify control violations, segregation of duties issues, and policy exceptions.
              </p>

              {/* Benefits Box */}
              <div className="bg-base text-white p-8 rounded-lg my-10 not-prose">
                <h4 className="text-xl font-bold mb-6">Typical Process Mining Benefits</h4>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { stat: "30-50%", desc: "Reduction in process cycle time" },
                    { stat: "20-40%", desc: "Decrease in process costs" },
                    { stat: "80%+", desc: "Visibility into process variants" },
                    { stat: "15-25%", desc: "Improvement in compliance rates" }
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="text-3xl font-bold text-secondary">{item.stat}</div>
                      <div className="text-sm text-white/70 mt-1">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6 font-serif">Implementation Guide</h2>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                Successfully implementing process mining requires attention to both technical and organizational factors. Here's a structured approach:
              </p>

              <h3 className="text-xl font-bold text-charcoal mt-8 mb-4">Phase 1: Define Scope and Objectives</h3>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Start by identifying the processes you want to analyze and the business questions you want to answer. Focus on processes with clear pain points, significant business impact, and available event data. Define success metrics upfront.
              </p>

              <h3 className="text-xl font-bold text-charcoal mt-8 mb-4">Phase 2: Assess Data Availability</h3>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Evaluate the quality and completeness of event data in your source systems. Key requirements include: unique case identifiers, activity names, timestamps, and ideally additional attributes like resources, costs, and outcomes. Identify gaps and plan for data integration.
              </p>

              <h3 className="text-xl font-bold text-charcoal mt-8 mb-4">Phase 3: Build the Event Log</h3>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Extract and transform data from source systems into a standardized event log format. This often requires joining data from multiple systems and establishing consistent naming conventions. Data quality at this stage directly impacts analysis quality.
              </p>

              <h3 className="text-xl font-bold text-charcoal mt-8 mb-4">Phase 4: Analyze and Discover</h3>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Apply process mining algorithms to discover process models and analyze performance. Start with high-level analysis, then drill down into specific variants, bottlenecks, and root causes. Engage process owners to validate findings.
              </p>

              <h3 className="text-xl font-bold text-charcoal mt-8 mb-4">Phase 5: Act on Insights</h3>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Translate insights into action. This might include process redesign, automation opportunities, policy changes, or training needs. Prioritize improvements based on impact and feasibility. Measure results and iterate.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6 font-serif">Best Practices</h2>

              <div className="space-y-4 my-8 not-prose">
                {[
                  "Start with a focused pilot before scaling enterprise-wide",
                  "Invest in data quality—garbage in, garbage out applies here",
                  "Engage process owners early to ensure buy-in and domain expertise",
                  "Balance automated discovery with human interpretation",
                  "Connect process insights to business outcomes and KPIs",
                  "Plan for continuous monitoring, not just one-time analysis",
                  "Build internal capabilities while leveraging external expertise"
                ].map((practice, i) => (
                  <div key={i} className="flex items-start gap-3 bg-subtle p-4 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal/80">{practice}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6 font-serif">Getting Started</h2>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                Process mining has matured from an academic concept to a proven enterprise capability. Leading organizations across industries are using it to drive operational excellence, improve customer experience, and accelerate digital transformation.
              </p>

              <p className="text-charcoal/80 leading-relaxed mb-8">
                The key is to start. Identify a process with clear pain points, assemble a cross-functional team, and run a focused pilot. The insights you gain will build momentum for broader adoption and demonstrate the value of data-driven process improvement.
              </p>

              {/* Author Box */}
              <div className="border-t border-border pt-8 mt-12 not-prose">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-base rounded-full flex items-center justify-center text-white font-bold text-xl">
                    NO
                  </div>
                  <div>
                    <div className="font-bold text-charcoal">NexDyne Operations Team</div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Our operations team helps organizations discover, analyze, and optimize their business processes using advanced analytics and automation.
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Share */}
              <div className="bg-subtle p-6 rounded-lg">
                <h4 className="font-bold text-charcoal mb-4 flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Share this guide
                </h4>
                <div className="flex gap-3">
                  <button className="w-10 h-10 bg-primary text-white rounded flex items-center justify-center hover:bg-base transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-[#1DA1F2] text-white rounded flex items-center justify-center hover:bg-base transition-colors">
                    <Twitter className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Key Takeaways */}
              <div className="bg-subtle p-6 rounded-lg">
                <h4 className="font-bold text-charcoal mb-4 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  Key Takeaways
                </h4>
                <ul className="space-y-3 text-sm text-charcoal/70">
                  <li className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    Process mining reveals actual vs. expected process behavior
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    Data quality is critical for meaningful insights
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    Start focused, then scale based on proven value
                  </li>
                </ul>
              </div>

              {/* Related Articles */}
              <div className="bg-subtle p-6 rounded-lg">
                <h4 className="font-bold text-charcoal mb-4 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Related Insights
                </h4>
                <div className="space-y-4">
                  {[
                    {
                      title: "Why Intelligent Automation Isn't Optional Anymore",
                      link: "/insights/why-intelligent-automation-isnt-optional-anymore"
                    },
                    {
                      title: "How AI Agents Transform Enterprise Operations",
                      link: "/insights/how-ai-agents-transform-enterprise-operations"
                    }
                  ].map((article, i) => (
                    <Link key={i} href={article.link}>
                      <div className="group cursor-pointer">
                        <h5 className="text-sm font-medium text-charcoal group-hover:text-primary transition-colors leading-snug">
                          {article.title}
                        </h5>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-base p-6 rounded-lg text-white">
                <h4 className="font-bold mb-3">Ready to mine your processes?</h4>
                <p className="text-sm text-white/70 mb-4">
                  Let's discuss how process mining can optimize your operations.
                </p>
                <Link href="/contact">
                  <button className="w-full py-3 bg-secondary text-white rounded font-semibold text-sm hover:bg-primary transition-colors">
                    Contact Us
                  </button>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* More Insights */}
      <section className="py-16 md:py-20 bg-subtle">
        <div className="container px-4 md:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-8 font-serif">More Insights</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  category: "Strategy",
                  title: "Why Intelligent Automation Isn't Optional Anymore",
                  readTime: "5 min read",
                  link: "/insights/why-intelligent-automation-isnt-optional-anymore"
                },
                {
                  category: "Technology",
                  title: "How AI Agents Transform Enterprise Operations",
                  readTime: "7 min read",
                  link: "/insights/how-ai-agents-transform-enterprise-operations"
                },
                {
                  category: "Data",
                  title: "Building a Data-Driven Culture",
                  readTime: "6 min read",
                  link: "/insights/building-data-culture"
                }
              ].map((insight, i) => (
                <Link key={i} href={insight.link}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-6 rounded-lg group cursor-pointer hover:shadow-lg transition-shadow h-full"
                  >
                    <div className="flex items-center justify-between text-xs mb-3">
                      <span className="text-primary font-semibold uppercase tracking-wider">{insight.category}</span>
                      <span className="text-muted-foreground">{insight.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-charcoal mb-4 group-hover:text-primary transition-colors font-serif leading-snug">
                      {insight.title}
                    </h3>
                    <span className="inline-flex items-center text-primary text-sm font-medium">
                      Read article <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
