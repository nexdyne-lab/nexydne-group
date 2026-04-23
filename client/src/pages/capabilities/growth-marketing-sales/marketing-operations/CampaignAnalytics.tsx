import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, LineChart, Target, Layers, TrendingUp, Database, Settings, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { RelatedContent } from "@/components/RelatedContent";
import { SEO } from "@/components/SEO";

export default function CampaignAnalytics() {
  return (
    <div className="min-h-screen bg-base text-white selection:bg-primary selection:text-white">
      <SEO 
        title="Campaign Performance Analytics | NexDyne Technologies" 
        description="Build comprehensive reporting frameworks that connect campaign activities to business outcomes. Move beyond vanity metrics to true revenue attribution."
        canonical="/capabilities/growth-marketing-sales/marketing-operations/campaign-analytics"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-base via-base/60 to-base"></div>
        
        <div className="container relative z-10 px-4 md:px-12">
          <Breadcrumbs />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Link href="/capabilities/growth-marketing-sales/marketing-operations">
              <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block hover:text-white transition-colors cursor-pointer">
                Marketing Operations
              </span>
            </Link>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-2 sm:mb-3 md:mb-4 eb-garamond">
              Campaign Performance <br />
              <span className="text-primary">Analytics</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-2xl mb-10">
              Build comprehensive reporting frameworks that connect campaign activities to business outcomes across the full customer journey. Move beyond vanity metrics to true revenue attribution.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-white px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-base font-semibold transition-all">
                  Build Your Analytics Framework
                </Button>
              </Link>
              <Link href="/cases">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-base font-semibold transition-all bg-transparent">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Experience Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-8 sm:mb-12 eb-garamond">Our Experience</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
              <div className="border-l-2 border-primary pl-6">
                <div className="text-4xl sm:text-5xl font-bold text-charcoal mb-2">85+</div>
                <div className="text-sm sm:text-base text-charcoal/60">analytics frameworks deployed</div>
              </div>
              <div className="border-l-2 border-primary pl-6">
                <div className="text-4xl sm:text-5xl font-bold text-charcoal mb-2">3x</div>
                <div className="text-sm sm:text-base text-charcoal/60">average improvement in attribution accuracy</div>
              </div>
              <div className="border-l-2 border-primary pl-6">
                <div className="text-4xl sm:text-5xl font-bold text-charcoal mb-2">20-40%</div>
                <div className="text-sm sm:text-base text-charcoal/60">typical improvement in marketing ROI</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Thought Leadership Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="space-y-8 text-lg sm:text-xl text-charcoal/80 leading-relaxed ">
              <p>
                Marketing teams drown in data but starve for insight. Dashboards overflow with metrics—impressions, clicks, opens, downloads—yet the fundamental question remains unanswered: which activities actually drive revenue? The gap between campaign execution and business outcomes is where most analytics programs fail.
              </p>
              <p>
                True campaign analytics requires connecting dots across the entire customer journey, not just measuring individual touchpoints in isolation. A prospect might see a LinkedIn ad, attend a webinar, download a whitepaper, and then convert after a sales call. Attributing that deal to a single touchpoint misses the point entirely—and leads to systematically wrong investment decisions.
              </p>
              <p>
                The challenge isn't technical; it's conceptual. Before building dashboards, you need a clear framework for what success looks like at each stage of the funnel, how different activities contribute to progression, and what leading indicators predict downstream outcomes. We help clients develop these frameworks before touching a single data visualization tool.
              </p>
              <p>
                Analytics should drive action, not just reporting. The best frameworks we've built don't just tell teams what happened—they surface specific opportunities to improve. When a campaign underperforms, the data should point to why and suggest what to test next. That requires designing analytics with decision-making in mind from the start, not bolting on insights as an afterthought.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-base">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
              What We Do
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 eb-garamond">Our analytics capabilities</h2>
            <p className="text-base sm:text-lg md:text-xl text-white/60 leading-relaxed">
              We build analytics systems that turn marketing data into actionable intelligence:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-4 sm:p-6 md:p-8 lg:gap-10">
            {[
              {
                icon: <Target className="w-7 h-7" />,
                title: "Attribution Modeling",
                description: "We implement multi-touch attribution models that accurately credit each touchpoint's contribution to conversion. Move beyond last-click to understand the true drivers of revenue."
              },
              {
                icon: <LineChart className="w-7 h-7" />,
                title: "Full-Funnel Reporting",
                description: "We build reporting frameworks that track performance from first touch to closed deal, connecting marketing activities to pipeline and revenue outcomes."
              },
              {
                icon: <Layers className="w-7 h-7" />,
                title: "Campaign Optimization Dashboards",
                description: "We create real-time dashboards that surface optimization opportunities—not just what's happening, but what to do about it. Designed for decision-making, not just reporting."
              },
              {
                icon: <TrendingUp className="w-7 h-7" />,
                title: "Predictive Analytics",
                description: "We develop models that predict campaign outcomes and identify high-potential opportunities before they convert. Shift from reactive reporting to proactive optimization."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:bg-white/10">
                  <div className="mb-6 p-3 bg-primary/10 w-fit rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block">
              Examples of Our Work
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6 eb-garamond">Examples of our work</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 sm:p-6 md:p-8 lg:gap-10">
            {[
              {
                title: "B2B SaaS Attribution Overhaul",
                description: "Implemented multi-touch attribution for a B2B SaaS company with a 6-month sales cycle. Revealed that content marketing drove 3x more pipeline than previously attributed, leading to budget reallocation.",
                metric: "3x",
                metricLabel: "Attribution accuracy improvement"
              },
              {
                title: "E-commerce Campaign Optimization",
                description: "Built real-time campaign dashboards for an e-commerce company running 50+ campaigns monthly. Automated optimization recommendations reduced wasted spend by 35%.",
                metric: "35%",
                metricLabel: "Reduction in wasted spend"
              },
              {
                title: "Enterprise Demand Gen Analytics",
                description: "Developed full-funnel reporting for an enterprise software company. Connected marketing activities to $12M in influenced pipeline and enabled precise ROI measurement by channel.",
                metric: "$12M",
                metricLabel: "Pipeline attributed"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl bg-base/5 hover:bg-base transition-all duration-500 hover:scale-[1.02]">
                  <div className="text-4xl font-bold text-primary mb-2 group-hover:text-white transition-colors">
                    {item.metric}
                  </div>
                  <div className="text-sm text-charcoal/60 mb-6 group-hover:text-white/60 transition-colors">
                    {item.metricLabel}
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-4 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-charcoal/70 leading-relaxed group-hover:text-white/70 transition-colors">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Capabilities Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-base">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
              Featured Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 eb-garamond">Related capabilities</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 sm:p-6 md:p-8 lg:gap-10">
            {[
              {
                icon: <BarChart3 className="w-7 h-7" />,
                title: "Marketing ROI",
                description: "Implement advanced attribution models and financial frameworks to prove the true value of every marketing dollar.",
                link: "/capabilities/growth-marketing-sales/marketing-operations/marketing-roi"
              },
              {
                icon: <Database className="w-7 h-7" />,
                title: "Data Integration & Dashboards",
                description: "Connect your tech stack and build real-time dashboards to visualize performance across all channels.",
                link: "/capabilities/growth-marketing-sales/marketing-operations/data-integration-dashboards"
              },
              {
                icon: <Settings className="w-7 h-7" />,
                title: "MarTech Stack Assessment",
                description: "Audit your marketing technology ecosystem to identify gaps, redundancies, and optimization opportunities.",
                link: "/capabilities/growth-marketing-sales/marketing-operations/martech-assessment"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={item.link} className="group block h-full">
                  <div className="h-full p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:bg-white/10">
                    <div className="mb-6 p-3 bg-primary/10 w-fit rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <div className="flex items-center text-primary text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      Learn more <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 md:mb-16 gap-4 sm:p-5 md:p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block">
                Insights
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal eb-garamond">
                The Latest on Marketing Analytics
              </h2>
            </motion.div>
            <Link href="/insights">
              <Button variant="outline" className="border-base/20 text-charcoal hover:bg-base/10 transition-all duration-300 hover:scale-[1.02]">
                View all insights
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-4 gap-4 sm:p-6 md:p-8">
            {[
              {
                title: "Beyond Last-Click: Modern Attribution Models",
                description: "Why single-touch attribution fails and how multi-touch models reveal the true drivers of conversion.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
                link: "/insights/modern-attribution"
              },
              {
                title: "The Metrics That Matter",
                description: "Cutting through vanity metrics to identify the KPIs that actually predict business outcomes.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2670&auto=format&fit=crop",
                link: "/insights/metrics-that-matter"
              },
              {
                title: "Building a Data-Driven Marketing Culture",
                description: "How to move from gut-feel decision making to evidence-based optimization.",
                image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2670&auto=format&fit=crop",
                link: "/insights/data-driven-culture"
              },
              {
                title: "Privacy-First Analytics in 2026",
                description: "Adapting your measurement strategy for a cookieless world without losing insight.",
                image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2670&auto=format&fit=crop",
                link: "/insights/privacy-first-analytics"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={item.link} className="group block h-full">
                  <div className="aspect-[4/3] overflow-hidden mb-6 rounded-lg sm:rounded-xl">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <span className="text-xs font-bold text-primary uppercase tracking-wider mb-3 block">Article</span>
                  <h3 className="text-lg font-bold text-charcoal mb-3 group-hover:text-primary transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read more <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-base">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 eb-garamond">
              Ready to measure what matters?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/60 mb-10">
              Let's build an analytics framework that connects your marketing activities to real business outcomes.
            </p>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg font-semibold transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20">
                Build Your Analytics Framework
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <RelatedContent 
        items={[
          {
            title: "Marketing Operations",
            category: "Capability",
            link: "/capabilities/growth-marketing-sales/marketing-operations",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
          },
          {
            title: "Marketing ROI",
            category: "Capability",
            link: "/capabilities/growth-marketing-sales/marketing-operations/marketing-roi",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
          },
          {
            title: "Data Integration & Dashboards",
            category: "Capability",
            link: "/capabilities/growth-marketing-sales/marketing-operations/data-integration-dashboards",
            image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80"
          }
        ]}
      />

      <Footer />
    </div>
  );
}
