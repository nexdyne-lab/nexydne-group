import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Search, Layers, GitBranch, Target, Settings, Database, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { RelatedContent } from "@/components/RelatedContent";
import { SEO } from "@/components/SEO";

export default function MartechAssessment() {
  return (
    <div className="min-h-screen bg-[#051C2C] text-white selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="MarTech Stack Assessment | NexDyne Technologies" 
        description="Audit your marketing technology ecosystem to identify gaps, redundancies, and optimization opportunities. Build a roadmap for a unified, high-performing tech stack."
        canonical="/capabilities/growth-marketing-sales/marketing-operations/martech-assessment"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#051C2C] via-[#051C2C]/60 to-[#051C2C]"></div>
        
        <div className="container relative z-10 px-4 md:px-12">
          <Breadcrumbs />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Link href="/capabilities/growth-marketing-sales/marketing-operations">
              <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#0077B5] mb-4 sm:mb-6 block hover:text-white transition-colors cursor-pointer">
                Marketing Operations
              </span>
            </Link>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-5 sm:mb-3 md:mb-4 eb-garamond">
              MarTech Stack <br />
              <span className="text-[#0077B5]">Assessment</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-2xl mb-10">
              Audit your existing marketing technology ecosystem, identify gaps and redundancies, and build a roadmap for optimization. Turn your scattered tools into a unified growth engine.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button className="bg-[#0077B5] hover:bg-[#005a8c] text-white px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-base font-semibold transition-all">
                  Request a Stack Audit
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
      <section className="py-12 sm:py-16 md:py-20 bg-white text-[#051C2C]">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-8 sm:mb-12 eb-garamond">Our Experience</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
              <div className="border-l-2 border-[#0077B5] pl-6">
                <div className="text-4xl sm:text-5xl font-bold text-[#051C2C] mb-2">150+</div>
                <div className="text-sm sm:text-base text-[#051C2C]/60">martech stack assessments completed</div>
              </div>
              <div className="border-l-2 border-[#0077B5] pl-6">
                <div className="text-4xl sm:text-5xl font-bold text-[#051C2C] mb-2">25-40%</div>
                <div className="text-sm sm:text-base text-[#051C2C]/60">typical reduction in tech stack costs</div>
              </div>
              <div className="border-l-2 border-[#0077B5] pl-6">
                <div className="text-4xl sm:text-5xl font-bold text-[#051C2C] mb-2">12</div>
                <div className="text-sm sm:text-base text-[#051C2C]/60">average tools per company assessed</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Thought Leadership Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white text-[#051C2C]">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="space-y-8 text-lg sm:text-xl text-[#051C2C]/80 leading-relaxed font-serif">
              <p>
                The average mid-market company uses 12-15 marketing tools—and most of them barely talk to each other. What starts as solving individual problems quickly becomes a tangled web of overlapping capabilities, data silos, and integration headaches. The result: marketing teams spend more time wrestling with technology than using it to drive growth.
              </p>
              <p>
                A proper martech assessment goes beyond listing what you have. It examines how data flows between systems, where manual workarounds have crept in, and which tools are actually driving value versus just consuming budget. We've seen companies paying for three different tools that essentially do the same thing—and none of them doing it particularly well.
              </p>
              <p>
                The goal isn't necessarily fewer tools—it's the right tools, properly connected. Sometimes that means consolidating onto a single platform. Other times it means keeping specialized best-of-breed solutions but investing in proper integration. The answer depends on your specific workflows, team capabilities, and growth trajectory.
              </p>
              <p>
                Technology decisions made today compound over years. A stack built on solid foundations scales smoothly; one built on quick fixes creates technical debt that eventually demands a painful reckoning. We help you make choices that serve both immediate needs and long-term ambitions, with a clear roadmap for getting from where you are to where you need to be.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-[#051C2C]">
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 eb-garamond">Our assessment approach</h2>
            <p className="text-base sm:text-lg md:text-xl text-white/60 leading-relaxed">
              We conduct comprehensive martech audits that reveal the true state of your technology ecosystem and chart a path forward:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-4 sm:p-6 md:p-8 lg:gap-10">
            {[
              {
                icon: <Search className="w-7 h-7" />,
                title: "Technology Inventory & Audit",
                description: "We catalog every tool in your stack—including the shadow IT that marketing teams have adopted without IT's knowledge. You'll get a complete picture of what you're paying for and what's actually being used."
              },
              {
                icon: <GitBranch className="w-7 h-7" />,
                title: "Data Flow Mapping",
                description: "We trace how customer and campaign data moves through your systems, identifying bottlenecks, data quality issues, and integration gaps that create blind spots in your reporting."
              },
              {
                icon: <Layers className="w-7 h-7" />,
                title: "Capability Gap Analysis",
                description: "We compare your current capabilities against your strategic requirements and industry benchmarks, highlighting where you're over-invested and where critical gaps exist."
              },
              {
                icon: <Target className="w-7 h-7" />,
                title: "Optimization Roadmap",
                description: "We deliver a prioritized action plan with clear recommendations: what to keep, what to consolidate, what to replace, and what to add—with realistic timelines and budget implications."
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
                <div className="h-full p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 hover:border-[#0077B5]/50 transition-all duration-300 hover:bg-white/10">
                  <div className="mb-6 p-3 bg-[#0077B5]/10 w-fit rounded-lg text-[#0077B5] group-hover:bg-[#0077B5] group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white mb-4 group-hover:text-[#0077B5] transition-colors">
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
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white text-[#051C2C]">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#0077B5] mb-4 sm:mb-6 block">
              Examples of Our Work
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#051C2C] mb-6 eb-garamond">Examples of our work</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 sm:p-6 md:p-8 lg:gap-10">
            {[
              {
                title: "SaaS Company Stack Consolidation",
                description: "Audited a 17-tool martech stack for a growing SaaS company. Consolidated to 8 core platforms, eliminated $180K in annual licensing costs, and improved data quality across the board.",
                metric: "$180K",
                metricLabel: "Annual savings achieved"
              },
              {
                title: "E-commerce Integration Overhaul",
                description: "Mapped data flows for an e-commerce company with disconnected systems. Designed integration architecture that unified customer data and enabled true omnichannel attribution.",
                metric: "360°",
                metricLabel: "Customer view achieved"
              },
              {
                title: "Professional Services Modernization",
                description: "Assessed legacy martech stack for a consulting firm. Developed 18-month modernization roadmap that improved marketing efficiency by 45% while maintaining business continuity.",
                metric: "45%",
                metricLabel: "Efficiency improvement"
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
                <div className="h-full p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl bg-[#051C2C]/5 hover:bg-[#051C2C] transition-all duration-500 hover:scale-[1.02]">
                  <div className="text-4xl font-serif font-bold text-[#0077B5] mb-2 group-hover:text-white transition-colors">
                    {item.metric}
                  </div>
                  <div className="text-sm text-[#051C2C]/60 mb-6 group-hover:text-white/60 transition-colors">
                    {item.metricLabel}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#051C2C]/70 leading-relaxed group-hover:text-white/70 transition-colors">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Capabilities Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-[#051C2C]">
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
                icon: <Database className="w-7 h-7" />,
                title: "CRM Implementation",
                description: "Configure and optimize your CRM to be the single source of truth for customer data across your organization.",
                link: "/capabilities/growth-marketing-sales/marketing-operations/crm-implementation"
              },
              {
                icon: <Settings className="w-7 h-7" />,
                title: "Marketing Automation",
                description: "Design and deploy automated workflows that nurture leads and drive conversions at scale.",
                link: "/capabilities/growth-marketing-sales/marketing-operations/marketing-automation"
              },
              {
                icon: <BarChart3 className="w-7 h-7" />,
                title: "Data Integration & Dashboards",
                description: "Connect your tech stack and build real-time dashboards to visualize performance across all channels.",
                link: "/capabilities/growth-marketing-sales/marketing-operations/data-integration-dashboards"
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
                  <div className="h-full p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 hover:border-[#0077B5]/50 transition-all duration-300 hover:bg-white/10">
                    <div className="mb-6 p-3 bg-[#0077B5]/10 w-fit rounded-lg text-[#0077B5] group-hover:bg-[#0077B5] group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-serif font-bold text-white mb-4 group-hover:text-[#0077B5] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <div className="flex items-center text-[#0077B5] text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
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
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white text-[#051C2C]">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 md:mb-16 gap-4 sm:p-5 md:p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#0077B5] mb-4 sm:mb-6 block">
                Insights
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#051C2C] eb-garamond">
                The Latest on MarTech
              </h2>
            </motion.div>
            <Link href="/insights">
              <Button variant="outline" className="border-[#051C2C]/20 text-[#051C2C] hover:bg-[#051C2C]/10 transition-all duration-300 hover:scale-[1.02]">
                View all insights
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-4 gap-4 sm:p-6 md:p-8">
            {[
              {
                title: "The Hidden Cost of MarTech Sprawl",
                description: "Why adding more tools often makes marketing less effective—and how to break the cycle.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
                link: "/insights/martech-sprawl"
              },
              {
                title: "Build vs. Buy: The Integration Decision",
                description: "When to invest in custom integrations versus adopting all-in-one platforms.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2670&auto=format&fit=crop",
                link: "/insights/build-vs-buy"
              },
              {
                title: "Data Quality: The Foundation of MarTech ROI",
                description: "Why the best tools fail without clean data—and how to fix it.",
                image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2670&auto=format&fit=crop",
                link: "/insights/data-quality-martech"
              },
              {
                title: "The 2026 MarTech Landscape",
                description: "Key trends shaping marketing technology and what they mean for your stack.",
                image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2670&auto=format&fit=crop",
                link: "/insights/martech-landscape-2026"
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
                  <span className="text-xs font-bold text-[#0077B5] uppercase tracking-wider mb-3 block">Article</span>
                  <h3 className="text-lg font-serif font-bold text-[#051C2C] mb-3 group-hover:text-[#0077B5] transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[#051C2C]/60 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <span className="text-[#0077B5] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read more <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-[#051C2C]">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 eb-garamond">
              Ready to optimize your martech stack?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/60 mb-10">
              Let's audit your current technology ecosystem and build a roadmap for a unified, high-performing marketing stack.
            </p>
            <Link href="/contact">
              <Button className="bg-[#0077B5] hover:bg-[#005a8c] text-white px-10 py-6 text-lg font-semibold transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-[#0077B5]/20">
                Request a Stack Audit
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
            title: "Data Integration & Dashboards",
            category: "Capability",
            link: "/capabilities/growth-marketing-sales/marketing-operations/data-integration-dashboards",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
          },
          {
            title: "Marketing Automation",
            category: "Capability",
            link: "/capabilities/growth-marketing-sales/marketing-operations/marketing-automation",
            image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80"
          }
        ]}
      />

      <Footer />
    </div>
  );
}
