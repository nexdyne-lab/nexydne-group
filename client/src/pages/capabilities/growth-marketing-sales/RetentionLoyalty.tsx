import { motion } from "framer-motion";
import { ArrowRight, Heart, Users, TrendingUp, Gift, BarChart3, Repeat } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import BainHoverCard from "@/components/BainHoverCard";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function RetentionLoyalty() {
  return (
    <div className="min-h-screen bg-white font-sans text-charcoal selection:bg-primary selection:text-white">
      <SEO 
        title="Retention & Loyalty" 
        description="Customer retention strategy, loyalty program design, and lifecycle marketing. We help you build lasting customer relationships that drive sustainable growth."
        canonical="/capabilities/growth-marketing-sales/retention-loyalty"
      />
      <Navigation />
      
      {/* Hero Section - Dark Background */}
      <section className="relative min-h-[70vh] flex items-center pt-20 bg-charcoal">
        <div className="container px-4 md:px-12 grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/capabilities/growth-marketing-sales" className="inline-flex items-center text-white/60 hover:text-white mb-6 text-sm transition-colors">
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Growth, Marketing & Sales
            </Link>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-4 eb-garamond">
              Retention & Loyalty
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl mb-10">
              Customer retention strategy, loyalty program design, and lifecycle marketing. We help you build lasting customer relationships that drive sustainable growth.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button className="bg-white hover:bg-muted text-charcoal px-8 py-6 text-base font-semibold transition-all">
                  Build Customer Loyalty
                </Button>
              </Link>
              <Link href="/cases">
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
              src="https://images.unsplash.com/photo-1556742049-0cfed4f7a45d?auto=format&fit=crop&q=80" 
              alt="Customer Loyalty" 
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Our Experience & Impact - Bain Style with Border-Left Accent */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container px-4 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-charcoal mb-12 eb-garamond"
          >
            Our Experience & Impact
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: "150+", label: "retention and loyalty programs designed and implemented" },
              { metric: "25%", label: "average increase in customer lifetime value" },
              { metric: "40%", label: "reduction in churn for clients within first year" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${index > 0 ? 'border-l border-border pl-8' : ''}`}
              >
                <div>
                  <div className="text-5xl md:text-6xl font-bold text-charcoal mb-4">{item.metric}</div>
                  <p className="text-lg text-charcoal/60">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Thought Leadership - 2-Column Layout */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight eb-garamond">
                Acquiring a new customer costs 5x more than retaining an existing one. Yet most companies underinvest in retention.
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6 text-lg text-charcoal/80 leading-relaxed"
            >
              <p>
                Customer retention is the foundation of sustainable growth. A 5% increase in retention can drive 25-95% increase in profits. Yet most companies spend the majority of their marketing budget on acquisition, treating retention as an afterthought.
              </p>
              <p>
                The most successful companies have built retention into the core of their business model. They understand their customers deeply, anticipate their needs, and create experiences that build lasting loyalty.
              </p>
              <p>
                We help companies transform their approach to retention—building the strategies, programs, and capabilities that turn customers into advocates.
              </p>
              <ul className="space-y-3 mt-6">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></span>
                  <span>Customer lifecycle strategy and journey mapping</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></span>
                  <span>Loyalty program design and optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></span>
                  <span>Churn prediction and prevention</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach Section - 3 Column Layout */}
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
            <h2 className="text-4xl md:text-5xl font-bold eb-garamond">
              Building customer loyalty that lasts
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Understand and segment",
                description: "We analyze customer behavior, preferences, and value to identify retention opportunities. We segment customers based on lifecycle stage, value, and risk to enable targeted strategies."
              },
              {
                title: "Design and implement",
                description: "We design retention strategies and loyalty programs tailored to your customers and business model. We implement the technology, processes, and content needed to execute at scale."
              },
              {
                title: "Measure and optimize",
                description: "We establish measurement frameworks that track retention metrics and program performance. We continuously test and optimize to improve customer lifetime value."
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

      {/* How We Can Help - H100 Capability Cards */}
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 eb-garamond">
              Our Retention & Loyalty Capabilities
            </h2>
            <p className="text-xl text-charcoal/60 max-w-2xl">
              Comprehensive retention services from strategy to execution.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                title: "Loyalty Program Design",
                description: "Design loyalty programs that drive engagement and value. Create reward structures, tiers, and experiences that resonate with your customers."
              },
              {
                icon: Users,
                title: "Customer Lifecycle Marketing",
                description: "Build lifecycle marketing programs that engage customers at every stage. Design onboarding, engagement, and win-back campaigns."
              },
              {
                icon: TrendingUp,
                title: "Churn Prevention",
                description: "Identify at-risk customers before they leave. Build predictive models and intervention strategies that reduce churn."
              },
              {
                icon: Gift,
                title: "Rewards & Benefits",
                description: "Design reward structures that motivate behavior. Create partnerships, experiences, and benefits that differentiate your program."
              },
              {
                icon: BarChart3,
                title: "Retention Analytics",
                description: "Build analytics capabilities that track retention performance. Measure customer lifetime value, cohort retention, and program ROI."
              },
              {
                icon: Repeat,
                title: "Re-engagement Campaigns",
                description: "Win back lapsed customers with targeted campaigns. Design offers and messaging that reactivate dormant relationships."
              }
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
                  link="#"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Results Section */}
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal eb-garamond">
              Driving customer loyalty
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                category: "RETAIL",
                title: "Loyalty program redesign increases member spend by 35% and reduces churn by 20%",
                description: "A national retailer's loyalty program was underperforming with low engagement and high churn. We redesigned the program with new tier structures, personalized rewards, and experiential benefits. Member spend increased 35% and annual churn dropped from 25% to 20%.",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a45d?auto=format&fit=crop&q=80"
              },
              {
                category: "SUBSCRIPTION",
                title: "Churn prediction model saves $12M annually for streaming service",
                description: "A streaming service was losing subscribers faster than they could acquire them. We built a churn prediction model that identified at-risk subscribers 60 days before cancellation. Targeted interventions reduced churn by 15%, saving $12M in annual revenue.",
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
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
                <Link href="/cases" className="block">
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
                  <h3 className="text-xl font-bold text-charcoal mb-4 group-hover:text-primary transition-colors leading-tight">
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

      {/* Latest Insights Section */}
      <section className="py-24 bg-subtle">
        <div className="container px-4 md:px-12">
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
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal eb-garamond">
                Latest Insights
              </h2>
              <p className="text-xl text-charcoal/60 mt-4">
                Expert perspectives on customer retention and loyalty.
              </p>
            </motion.div>
            <Link href="/insights">
              <Button variant="outline" className="border-base/20 text-charcoal hover:bg-base/5 bg-transparent transition-all duration-300">
                View all insights
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "Loyalty",
                readTime: "6 min read",
                title: "The Death of Points: What's Next for Loyalty Programs",
                description: "Why traditional points-based loyalty programs are losing effectiveness—and what leading brands are doing instead.",
                link: "/insights/loyalty-evolution"
              },
              {
                category: "Retention",
                readTime: "5 min read",
                title: "Predictive Churn: From Reactive to Proactive Retention",
                description: "How machine learning is transforming churn prevention from firefighting to strategic intervention.",
                link: "/insights/predictive-churn"
              },
              {
                category: "Customer Value",
                readTime: "7 min read",
                title: "CLV-Driven Marketing: Beyond Acquisition Metrics",
                description: "Why customer lifetime value should be your north star metric—and how to operationalize it.",
                link: "/insights/clv-marketing"
              }
            ].map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={insight.link} className="group block h-full">
                  <div className="h-full p-8 rounded-xl bg-white border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-primary text-xs font-bold uppercase tracking-wider">{insight.category}</span>
                      <span className="text-charcoal/40">•</span>
                      <span className="text-charcoal/60 text-sm">{insight.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-charcoal mb-4 group-hover:text-primary transition-colors leading-tight">
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

      {/* Related Capabilities Section */}
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 eb-garamond">
              Explore related capabilities
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Customer Experience",
                description: "Design and deliver experiences that drive loyalty and advocacy across all touchpoints.",
                link: "/capabilities/growth-marketing-sales/customer-experience"
              },
              {
                title: "Personalization at Scale",
                description: "Deliver personalized experiences across channels using data, AI, and automation.",
                link: "/capabilities/growth-marketing-sales/personalization-at-scale"
              },
              {
                title: "Consumer & Shopper Insights",
                description: "Understand your customers deeply through research, analytics, and behavioral data.",
                link: "/capabilities/growth-marketing-sales/consumer-shopper-insights"
              }
            ].map((capability, index) => (
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

      {/* CTA Section - Blue Background */}
      <section className="py-24 bg-primary">
        <div className="container px-4 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 eb-garamond">
              Ready to build customer loyalty?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Let's discuss how retention and loyalty strategies can drive sustainable growth for your business.
            </p>
            <Link href="/contact">
              <Button className="bg-white hover:bg-subtle text-charcoal px-10 py-6 text-lg font-semibold transition-all">
                Start Your Loyalty Transformation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
