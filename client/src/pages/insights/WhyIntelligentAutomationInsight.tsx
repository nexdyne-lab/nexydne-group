import { ArrowRight, ArrowLeft, Clock, Calendar, User, Share2, Linkedin, Twitter, BookOpen } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";

export default function WhyIntelligentAutomationInsight() {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Why Intelligent Automation Isn't Optional Anymore | NexDyne Technologies"
        description="Explore why intelligent automation has become a strategic imperative for organizations seeking to remain competitive in an increasingly digital economy."
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
                Strategy
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-3 text-charcoal ">
                Why Intelligent Automation Isn't Optional Anymore
              </h1>
              <p className="text-xl text-charcoal/70 leading-relaxed mb-8">
                The competitive landscape has fundamentally shifted. Organizations that fail to embrace intelligent automation aren't just missing an opportunity—they're actively falling behind.
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>December 15, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>5 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>NexDyne Strategy Team</span>
                </div>
              </div>
            </motion.div>
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
              <p className="text-xl text-charcoal leading-relaxed mb-8 not-prose">
                Five years ago, intelligent automation was a competitive advantage. Today, it's table stakes. The organizations that recognized this shift early are now operating at a fundamentally different level of efficiency and agility than their peers.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6 ">The New Competitive Reality</h2>
              
              <p className="text-charcoal/80 leading-relaxed mb-6">
                The data is unambiguous. According to recent research from McKinsey, organizations that have successfully scaled automation are seeing 20-30% improvements in operational efficiency. More importantly, they're using these gains not just to cut costs, but to reinvest in growth, innovation, and customer experience.
              </p>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                Meanwhile, organizations still relying on manual processes are finding themselves unable to compete on speed, cost, or quality. The gap is widening, and it's becoming increasingly difficult to close.
              </p>

              {/* Pull Quote */}
              <blockquote className="border-l-4 border-primary pl-6 my-10 not-prose">
                <p className="text-2xl text-charcoal leading-relaxed">
                  "The question is no longer whether to automate, but how quickly you can scale automation across your organization."
                </p>
              </blockquote>

              <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6 ">Three Forces Driving the Imperative</h2>

              <h3 className="text-xl font-bold text-charcoal mt-8 mb-4">1. Labor Market Dynamics</h3>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                The talent shortage isn't temporary—it's structural. Organizations are competing for a shrinking pool of skilled workers, and wage inflation is eroding margins. Intelligent automation doesn't replace workers; it amplifies their capabilities, allowing organizations to do more with the talent they have.
              </p>

              <h3 className="text-xl font-bold text-charcoal mt-8 mb-4">2. Customer Expectations</h3>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Consumers and business buyers alike now expect instant, personalized, 24/7 service. Manual processes simply cannot deliver at the speed and scale that modern customers demand. Organizations that can't meet these expectations are losing market share to those that can.
              </p>

              <h3 className="text-xl font-bold text-charcoal mt-8 mb-4">3. Data Complexity</h3>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                The volume, velocity, and variety of data that organizations must process has grown exponentially. Human-only approaches to data processing, analysis, and decision-making are no longer viable. Intelligent automation is the only way to extract value from data at the scale required.
              </p>

              {/* Statistics Box */}
              <div className="bg-subtle p-8 rounded-lg my-10 not-prose">
                <h4 className="text-lg font-bold text-charcoal mb-6">The Automation Imperative: By the Numbers</h4>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { stat: "73%", desc: "of organizations plan to increase automation investment in 2026" },
                    { stat: "4.5x", desc: "ROI achieved by automation leaders vs. laggards" },
                    { stat: "60%", desc: "of routine tasks can be automated with current technology" },
                    { stat: "35%", desc: "average cost reduction from scaled automation programs" }
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="text-3xl font-bold text-primary">{item.stat}</div>
                      <div className="text-sm text-charcoal/70 mt-1">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6 ">What Separates Leaders from Laggards</h2>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                Our research into automation success patterns reveals clear differentiators between organizations that achieve transformational results and those that struggle to scale beyond pilots.
              </p>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                <strong>Leaders start with strategy, not technology.</strong> They identify the highest-value processes for automation based on business impact, not technical feasibility. They build business cases that account for both efficiency gains and strategic value creation.
              </p>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                <strong>Leaders invest in change management.</strong> Technology is often the easy part. The harder work is preparing the organization—its people, processes, and culture—to embrace and sustain automation at scale.
              </p>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                <strong>Leaders think in platforms, not projects.</strong> Rather than implementing automation one process at a time, leaders build reusable platforms and capabilities that accelerate subsequent automation initiatives.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6 ">The Path Forward</h2>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                For organizations that haven't yet begun their automation journey, the time to start is now. The good news is that the technology has matured significantly, implementation approaches have been refined, and the path to value is clearer than ever.
              </p>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                For organizations with automation initiatives underway, the focus should be on scaling. Moving from pilots to enterprise-wide deployment requires different capabilities, governance, and operating models than initial experiments.
              </p>

              <p className="text-charcoal/80 leading-relaxed mb-8">
                In either case, the imperative is clear: intelligent automation is no longer optional. It's a fundamental requirement for competing in the modern economy.
              </p>

              {/* Author Box */}
              <div className="border-t border-border pt-8 mt-12 not-prose">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-base rounded-full flex items-center justify-center text-white font-bold text-xl">
                    NS
                  </div>
                  <div>
                    <div className="font-bold text-charcoal">NexDyne Strategy Team</div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Our strategy team combines deep industry expertise with cutting-edge technology knowledge to help organizations navigate digital transformation.
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
                  Share this article
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

              {/* Related Articles */}
              <div className="bg-subtle p-6 rounded-lg">
                <h4 className="font-bold text-charcoal mb-4 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Related Insights
                </h4>
                <div className="space-y-4">
                  {[
                    {
                      title: "How AI Agents Transform Enterprise Operations",
                      link: "/insights/how-ai-agents-transform-enterprise-operations"
                    },
                    {
                      title: "The Complete Guide to Process Mining",
                      link: "/insights/complete-guide-process-mining"
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
                <h4 className="font-bold mb-3">Ready to start your automation journey?</h4>
                <p className="text-sm text-white/70 mb-4">
                  Let's discuss how intelligent automation can transform your operations.
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
            <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-8 ">More Insights</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  category: "Technology",
                  title: "How AI Agents Transform Enterprise Operations",
                  readTime: "7 min read",
                  link: "/insights/how-ai-agents-transform-enterprise-operations"
                },
                {
                  category: "Operations",
                  title: "The Complete Guide to Process Mining",
                  readTime: "10 min read",
                  link: "/insights/complete-guide-process-mining"
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
                    <h3 className="text-lg font-bold text-charcoal mb-4 group-hover:text-primary transition-colors leading-snug">
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
