import { ArrowRight, ArrowLeft, Clock, Heart, Activity, Users } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";

export default function HealthcareProviderAI() {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Healthcare Provider AI Case Study | NexDyne Technologies"
        description="How NexDyne helped a healthcare provider reduce patient wait times by 35% through predictive analytics and intelligent scheduling optimization."
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
                Healthcare Provider • Healthcare & Life Sciences
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-3 font-serif">
                Reducing patient wait times by 35% with predictive analytics
              </h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-3xl">
                A regional healthcare system transformed their patient flow management through AI-powered scheduling and predictive analytics, dramatically improving patient satisfaction while optimizing resource utilization.
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
              { value: "35%", label: "Wait Time Reduction", icon: Clock },
              { value: "28%", label: "Throughput Increase", icon: Activity },
              { value: "92%", label: "Patient Satisfaction", icon: Heart },
              { value: "18%", label: "Staff Efficiency Gain", icon: Users }
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
                A regional healthcare system with 12 hospitals and 200+ outpatient facilities was facing declining patient satisfaction scores due to long wait times. NexDyne implemented a predictive analytics platform that optimized scheduling, resource allocation, and patient flow—reducing average wait times by 35% while increasing throughput by 28%.
              </p>
              <p className="text-lg text-charcoal/70 leading-relaxed">
                The transformation demonstrated how data-driven operations can simultaneously improve patient experience and financial performance, creating a sustainable competitive advantage in an increasingly consumer-driven healthcare market.
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
                The healthcare system served over 2 million patients annually across their network. Despite significant investments in facilities and staff, patient satisfaction scores had declined for three consecutive years, with wait times cited as the primary concern. Average emergency department wait times exceeded 4 hours during peak periods, and outpatient appointment no-show rates had climbed to 22%.
              </p>
              
              <p className="text-lg text-charcoal/80 leading-relaxed mb-8">
                The underlying issues were systemic. Room and equipment utilization hovered at just 65%, indicating significant inefficiency in resource allocation. Staff scheduling was based on historical averages rather than predicted demand, resulting in chronic understaffing during peaks and overstaffing during valleys. Data remained siloed across departments, preventing the kind of system-wide optimization that modern healthcare demands.
              </p>

              <blockquote className="border-l-4 border-destructive pl-8 my-12">
                <p className="text-2xl md:text-3xl text-charcoal font-serif italic leading-relaxed mb-4">
                  "Our patients were voting with their feet. We were losing market share to competitors who could offer shorter wait times and more convenient scheduling. We needed to fundamentally rethink how we manage patient flow."
                </p>
                <cite className="text-sm text-charcoal/60 not-italic">— Chief Operating Officer</cite>
              </blockquote>
              
              <p className="text-lg text-charcoal/80 leading-relaxed">
                With healthcare consumerism on the rise and patients increasingly choosing providers based on convenience, the leadership team recognized that improving patient flow was essential to maintaining market position and financial sustainability. They needed a solution that could optimize operations across their entire network while respecting the complexity and unpredictability inherent in healthcare delivery.
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
                NexDyne deployed a comprehensive patient flow optimization platform that combined predictive analytics, real-time monitoring, and intelligent scheduling to transform operations across the healthcare network. The approach balanced the need for efficiency with the reality that healthcare is inherently variable and patient-centered.
              </p>

              {/* Phase 1 */}
              <div className="mb-16">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-semibold text-primary tracking-wider">PHASE 1</span>
                  <span className="text-sm text-charcoal/40">Weeks 1-8</span>
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-6 font-serif">Predictive Demand Modeling</h3>
                <p className="text-lg text-charcoal/80 leading-relaxed">
                  We built machine learning models that predict patient volumes by hour, day, and season—accounting for factors like weather, local events, flu seasons, and historical patterns to enable proactive resource planning. The models integrated over 50 data sources and achieved 94% accuracy in 72-hour demand forecasting, giving operations teams unprecedented visibility into future patient flow. Department-specific prediction models were created to account for the unique patterns of emergency, surgical, and outpatient services.
                </p>
              </div>

              {/* Phase 2 */}
              <div className="mb-16">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-semibold text-primary tracking-wider">PHASE 2</span>
                  <span className="text-sm text-charcoal/40">Weeks 9-16</span>
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-6 font-serif">Intelligent Scheduling System</h3>
                <p className="text-lg text-charcoal/80 leading-relaxed">
                  Our team implemented an AI-powered scheduling engine that optimizes appointment slots, predicts no-shows, and automatically overbooks strategically to maximize utilization while minimizing wait times. The system reduced no-show impact through predictive overbooking calibrated to each provider's historical patterns. Appointment durations were optimized by visit type based on actual data, and an automated reminder and rescheduling system was implemented that reduced no-shows by 40%.
                </p>
              </div>

              {/* Phase 3 */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-semibold text-primary tracking-wider">PHASE 3</span>
                  <span className="text-sm text-charcoal/40">Weeks 17-24</span>
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-6 font-serif">Real-Time Flow Optimization</h3>
                <p className="text-lg text-charcoal/80 leading-relaxed">
                  We deployed a real-time command center that monitors patient flow across all facilities, identifies bottlenecks, and provides staff with actionable recommendations to optimize throughput. The network-wide patient flow visibility dashboard gives administrators a complete picture of operations at any moment. An automated bed management system optimizes patient placement, while a staff reallocation recommendations engine helps managers respond dynamically to changing conditions.
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
                Within 12 months of full deployment, the healthcare system achieved transformational improvements across all key metrics. Patient satisfaction scores increased from the 45th percentile to the 82nd percentile nationally, driven primarily by the dramatic reduction in wait times.
              </p>

              <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 mb-12">
                <div className="border-l-2 border-secondary pl-6">
                  <div className="text-4xl font-bold text-secondary mb-3">35%</div>
                  <p className="text-white/70 leading-relaxed">
                    Reduction in average patient wait times across all service lines, with emergency department wait times dropping from 4+ hours to under 2.5 hours during peak periods.
                  </p>
                </div>
                <div className="border-l-2 border-secondary pl-6">
                  <div className="text-4xl font-bold text-secondary mb-3">28%</div>
                  <p className="text-white/70 leading-relaxed">
                    Increase in patient throughput without adding staff or facilities, achieved through better utilization of existing resources and elimination of bottlenecks.
                  </p>
                </div>
                <div className="border-l-2 border-secondary pl-6">
                  <div className="text-4xl font-bold text-secondary mb-3">92%</div>
                  <p className="text-white/70 leading-relaxed">
                    Patient satisfaction score, up from 78%, representing a move from the 45th to the 82nd percentile in national healthcare satisfaction benchmarks.
                  </p>
                </div>
                <div className="border-l-2 border-secondary pl-6">
                  <div className="text-4xl font-bold text-secondary mb-3">$24M</div>
                  <p className="text-white/70 leading-relaxed">
                    Annual value created through improved throughput, reduced overtime, and decreased patient leakage to competitors, representing a 6x return on investment.
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
                The predictive analytics platform has transformed how we think about operations. We've moved from reactive firefighting to proactive management. Our staff are happier, our patients are happier, and our financial performance has never been stronger.
              </blockquote>
              <div>
                <div className="font-semibold text-charcoal text-lg">Dr. Jennifer Walsh</div>
                <div className="text-charcoal/60">Chief Medical Officer</div>
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
                  client: "GLOBAL RETAILER",
                  title: "Scaling e-commerce revenue by 40% with AI personalization",
                  link: "/cases/global-retailer-ecommerce"
                },
                {
                  client: "FINANCIAL INSTITUTION",
                  title: "Automating 90% of loan processing workflows",
                  link: "/cases/financial-institution-automation"
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
              Ready to optimize your operations?
            </h2>
            <p className="text-lg text-white/60 mb-10">
              Let's discuss how predictive analytics can transform your patient experience.
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
