import { ArrowRight, ArrowLeft, TrendingUp, Target, Users, Clock } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";

export default function GlobalRetailerEcommerce() {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Global Retailer E-commerce Case Study | NexDyne Technologies"
        description="How NexDyne helped a global retailer scale e-commerce revenue by 40% through AI-powered personalization and intelligent automation."
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-base text-white pt-32 pb-20">
        <div className="container px-4 md:px-8 lg:px-12">
          <div className="mb-8">
            <Link href="/cases" className="inline-flex items-center text-white/60 hover:text-white text-sm transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Link>
          </div>

          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-secondary text-sm font-semibold tracking-wider uppercase mb-4 block">
                Global Retailer • Retail & E-commerce
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-3 font-serif">
                Scaling e-commerce revenue by 40% with AI personalization
              </h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-3xl">
                A leading global retailer transformed their digital commerce strategy through intelligent personalization, achieving unprecedented growth in online revenue and customer engagement.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Metrics Bar */}
      <section className="bg-base py-12">
        <div className="container px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "40%", label: "Revenue Growth", icon: TrendingUp },
              { value: "3.2x", label: "Conversion Rate Lift", icon: Target },
              { value: "65%", label: "Customer Retention", icon: Users },
              { value: "8 weeks", label: "Time to Value", icon: Clock }
            ].map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <metric.icon className="w-6 h-6 text-secondary mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{metric.value}</div>
                <div className="text-sm text-muted-foreground/70">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-20 md:py-24">
        <div className="container px-4 md:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-semibold text-destructive tracking-wider uppercase mb-6">Executive Summary</h2>
              <p className="text-xl md:text-2xl text-charcoal leading-relaxed font-serif mb-8">
                A Fortune 500 retailer with over 2,000 stores worldwide faced declining foot traffic and needed to accelerate their digital transformation. NexDyne partnered with their leadership team to implement an AI-powered personalization engine that revolutionized their e-commerce experience, resulting in 40% revenue growth within 12 months.
              </p>
              <p className="text-lg text-charcoal/70 leading-relaxed">
                The engagement demonstrated how strategic application of machine learning, combined with deep retail expertise, can deliver transformational results in compressed timeframes. What began as a technology initiative evolved into a fundamental reimagining of how the organization connects with its customers across every touchpoint.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 md:py-24 bg-subtle">
        <div className="container px-4 md:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-10 font-serif">The Challenge</h2>
              
              <p className="text-lg text-charcoal/80 leading-relaxed mb-8">
                The client, a global retailer with annual revenues exceeding $15 billion, was experiencing a fundamental shift in consumer behavior. While their physical stores remained profitable, e-commerce growth had plateaued at 12% year-over-year—significantly below industry benchmarks of 25-30%.
              </p>
              
              <p className="text-lg text-charcoal/80 leading-relaxed mb-8">
                Generic product recommendations were failing to engage customers, resulting in cart abandonment rates averaging 78%. The leadership team identified limited visibility into customer journey touchpoints and siloed data across marketing, sales, and operations as critical barriers to growth. With millions of SKUs across their catalog, the inability to personalize at scale had become an existential threat as digital-native competitors continued to capture market share.
              </p>

              <blockquote className="border-l-4 border-destructive pl-8 my-12">
                <p className="text-2xl md:text-3xl text-charcoal font-serif italic leading-relaxed mb-4">
                  "We were drowning in data but starving for insight. Every customer interaction generated information, but we couldn't translate that into meaningful personalization."
                </p>
                <cite className="text-sm text-charcoal/60 not-italic">— Chief Digital Officer</cite>
              </blockquote>
              
              <p className="text-lg text-charcoal/80 leading-relaxed">
                The board had set an ambitious target: achieve 35% e-commerce revenue growth within 18 months while maintaining profitability. Traditional approaches had failed to move the needle, and the organization needed a transformative solution that could deliver results at unprecedented speed.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 md:py-24">
        <div className="container px-4 md:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-10 font-serif">Our Approach</h2>
              
              <p className="text-lg text-charcoal/80 leading-relaxed mb-12">
                NexDyne deployed a three-phase transformation program, combining advanced AI capabilities with deep retail expertise to deliver measurable results at each stage. The approach prioritized quick wins while building toward sustainable competitive advantage.
              </p>

              {/* Phase 1 */}
              <div className="mb-16">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-semibold text-primary tracking-wider">PHASE 1</span>
                  <span className="text-sm text-charcoal/40">Weeks 1-4</span>
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-6 font-serif">Data Foundation & Customer Intelligence</h3>
                <p className="text-lg text-charcoal/80 leading-relaxed">
                  We unified customer data from 12 disparate sources into a real-time customer data platform, creating 360-degree customer profiles for over 45 million active customers. The platform consolidated behavioral, transactional, and contextual signals into unified profiles with over 200 attributes, establishing real-time data pipelines with sub-100ms latency to enable instant personalization decisions.
                </p>
              </div>

              {/* Phase 2 */}
              <div className="mb-16">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-semibold text-primary tracking-wider">PHASE 2</span>
                  <span className="text-sm text-charcoal/40">Weeks 5-10</span>
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-6 font-serif">AI Personalization Engine</h3>
                <p className="text-lg text-charcoal/80 leading-relaxed">
                  Our team implemented a proprietary machine learning engine that analyzes browsing behavior, purchase history, and contextual signals to deliver hyper-personalized recommendations. The system deployed recommendation models across more than 2 million SKUs and implemented a real-time A/B testing framework, achieving 94% model accuracy in purchase prediction—enabling the retailer to anticipate customer needs before they were explicitly expressed.
                </p>
              </div>

              {/* Phase 3 */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-semibold text-primary tracking-wider">PHASE 3</span>
                  <span className="text-sm text-charcoal/40">Weeks 11-16</span>
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-6 font-serif">Omnichannel Activation</h3>
                <p className="text-lg text-charcoal/80 leading-relaxed">
                  We extended personalization across all customer touchpoints—web, mobile app, email, and in-store digital displays—creating a seamless, consistent experience. The integration spanned five channels, with dynamic email campaigns achieving 45% open rates. Most importantly, we connected online behavior to in-store experience, enabling store associates to access customer preferences and history in real-time.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Results */}
      <section className="py-20 md:py-24 bg-base text-white">
        <div className="container px-4 md:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-10 font-serif">The Results</h2>
              
              <p className="text-xl text-white/80 leading-relaxed mb-12">
                Within 12 months of full deployment, the transformation delivered results that exceeded initial targets across all key performance indicators. The 40% increase in e-commerce revenue surpassed the 35% target, while conversion rates from personalized recommendations improved by 3.2x compared to generic alternatives.
              </p>

              <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 mb-12">
                <div className="border-l-2 border-secondary pl-6">
                  <div className="text-4xl font-bold text-secondary mb-3">65%</div>
                  <p className="text-white/70 leading-relaxed">
                    Increase in customer retention through targeted engagement programs that anticipated customer needs and delivered relevant offers at optimal moments.
                  </p>
                </div>
                <div className="border-l-2 border-secondary pl-6">
                  <div className="text-4xl font-bold text-secondary mb-3">52%</div>
                  <p className="text-white/70 leading-relaxed">
                    Reduction in cart abandonment through smart interventions that addressed friction points and provided personalized incentives to complete purchases.
                  </p>
                </div>
                <div className="border-l-2 border-secondary pl-6">
                  <div className="text-4xl font-bold text-secondary mb-3">$180M</div>
                  <p className="text-white/70 leading-relaxed">
                    Additional annual revenue attributed to personalization, representing a significant contribution to the company's bottom line.
                  </p>
                </div>
                <div className="border-l-2 border-secondary pl-6">
                  <div className="text-4xl font-bold text-secondary mb-3">4.2x</div>
                  <p className="text-white/70 leading-relaxed">
                    Return on investment within the first year, as the AI models continue to learn and optimize performance over time.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-20 md:py-24 bg-subtle">
        <div className="container px-4 md:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-7xl text-destructive mb-8 font-serif leading-none">"</div>
              <blockquote className="text-2xl md:text-3xl text-charcoal font-serif italic leading-relaxed mb-10">
                NexDyne didn't just implement technology—they transformed how we think about customer relationships. The AI personalization engine has become a core competitive advantage that continues to drive growth quarter after quarter.
              </blockquote>
              <div>
                <div className="font-semibold text-charcoal text-lg">Sarah Chen</div>
                <div className="text-charcoal/60">Chief Digital Officer</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-20 md:py-24">
        <div className="container px-4 md:px-8 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-12 font-serif">Related Case Studies</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  client: "FINANCIAL INSTITUTION",
                  title: "Automating 90% of loan processing workflows",
                  link: "/cases/financial-institution-automation"
                },
                {
                  client: "HEALTHCARE PROVIDER",
                  title: "Reducing patient wait times by 35% with predictive analytics",
                  link: "/cases/healthcare-provider-ai"
                }
              ].map((study, i) => (
                <Link key={i} href={study.link}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group p-8 bg-subtle hover:bg-subtle transition-all duration-300 cursor-pointer"
                  >
                    <span className="text-xs font-semibold tracking-widest text-charcoal/50 uppercase mb-4 block">
                      {study.client}
                    </span>
                    <h3 className="text-xl font-bold text-charcoal mb-6 group-hover:text-primary transition-colors font-serif">
                      {study.title}
                    </h3>
                    <span className="inline-flex items-center text-primary font-medium text-sm">
                      Read case study <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-charcoal">
        <div className="container px-4 md:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">
              Ready to transform your business?
            </h2>
            <p className="text-lg text-white/60 mb-10">
              Let's discuss how AI-powered personalization can drive growth for your organization.
            </p>
            <Link href="/contact">
              <button className="px-8 py-4 bg-secondary text-white font-semibold hover:bg-secondary transition-colors">
                Start a Conversation
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
