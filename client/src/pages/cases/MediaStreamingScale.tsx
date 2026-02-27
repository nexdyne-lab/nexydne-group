import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, Globe, Zap, Shield, CheckCircle2, Server, Clock, TrendingUp, Play, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function MediaStreamingScale() {
  return (
    <div className="min-h-screen bg-base font-sans text-white selection:bg-primary selection:text-white">
      <SEO 
        title="Media Streaming Scale Case Study" 
        description="How a 160-employee streaming platform handled 10x traffic spike during launch with zero downtime."
        canonical="/cases/media-streaming-scale"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0077B5] to-base opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-base via-base/50 to-transparent" />
        </div>
        
        <div className="container px-4 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Link href="/solutions/scalable-enterprise-transformation">
              <span className="inline-flex items-center text-sm text-white/60 hover:text-white mb-8 cursor-pointer transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Enterprise Transformation
              </span>
            </Link>
            
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
              Case Study · Media & Entertainment
            </span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-white leading-[1.1] mb-4">
              Streaming platform handles 10x traffic spike during launch
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl">
              A 160-employee media company implemented elastic infrastructure and CDN optimization for content delivery at scale—with zero downtime during their biggest launch event.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: "10x", label: "Traffic Handled", icon: <TrendingUp className="w-6 h-6" /> },
              { value: "Zero", label: "Downtime", icon: <Shield className="w-6 h-6" /> },
              { value: "6 weeks", label: "Implementation", icon: <Clock className="w-6 h-6" /> },
              { value: "160", label: "Employees", icon: <Server className="w-6 h-6" /> }
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  {metric.icon}
                </div>
                <div className="text-4xl font-serif font-bold text-primary mb-2">{metric.value}</div>
                <div className="text-sm text-charcoal/60">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-24 md:py-32 bg-subtle text-charcoal">
        <div className="container px-4 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
                The Challenge
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight mb-8">
                High-stakes launch with unpredictable demand
              </h2>
              
              <div className="space-y-6 text-lg text-charcoal/70 leading-relaxed">
                <p>
                  StreamVault, a premium streaming platform, was preparing to launch an exclusive documentary series that had generated massive pre-launch buzz. Their marketing team projected 500,000 concurrent viewers at launch—but acknowledged the number could be significantly higher based on social media engagement.
                </p>
                <p>
                  Their existing infrastructure, designed for steady-state traffic of 50,000 concurrent users, had never been tested at this scale. Previous high-traffic events had caused buffering issues and service degradation. A failed launch would damage their brand and give competitors an opening.
                </p>
                <p>
                  With only 8 weeks until launch, StreamVault needed to transform their infrastructure to handle unpredictable demand spikes while maintaining broadcast-quality streaming experience—all without disrupting their existing service.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-serif font-bold mb-6">Key Challenges</h3>
                <ul className="space-y-4">
                  {[
                    "Infrastructure designed for 50K users, expecting 500K+",
                    "8-week timeline with no room for failure",
                    "Previous launches experienced buffering and degradation",
                    "Unpredictable demand patterns from viral content",
                    "Global audience requiring low-latency delivery",
                    "Brand reputation at stake with high-profile launch"
                  ].map((challenge, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-charcoal/70">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 md:py-32 bg-base">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 max-w-3xl"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-6 block">
              Our Solution
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Elastic streaming infrastructure
            </h2>
            <p className="text-xl text-white/60">
              We designed and implemented a globally distributed, auto-scaling infrastructure that could handle 10x normal traffic with sub-second response times—delivered in just 6 weeks.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Multi-CDN Strategy",
                description: "Implemented intelligent traffic routing across CloudFront, Fastly, and Akamai to maximize cache hit rates and provide failover redundancy.",
                icon: <Globe className="w-6 h-6" />
              },
              {
                title: "Predictive Auto-Scaling",
                description: "Built ML-powered scaling that anticipates demand based on real-time social media signals and pre-launch engagement metrics.",
                icon: <Zap className="w-6 h-6" />
              },
              {
                title: "Edge Computing",
                description: "Deployed Lambda@Edge functions for personalization and authentication at the edge, reducing origin load by 80%.",
                icon: <Wifi className="w-6 h-6" />
              },
              {
                title: "Adaptive Bitrate Optimization",
                description: "Implemented intelligent ABR algorithms that maintain quality while adapting to network conditions in real-time.",
                icon: <Play className="w-6 h-6" />
              },
              {
                title: "Real-Time Monitoring",
                description: "Built comprehensive observability with custom dashboards tracking concurrent users, buffer rates, and CDN performance by region.",
                icon: <CheckCircle2 className="w-6 h-6" />
              },
              {
                title: "Chaos Engineering",
                description: "Conducted extensive failure injection testing to validate resilience under various failure scenarios before launch.",
                icon: <Shield className="w-6 h-6" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 p-8 rounded-xl"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6 text-primary">
                  {item.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-4">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-24 md:py-32 bg-white text-charcoal">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
              Implementation
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              6-week sprint to launch readiness
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                phase: "Week 1-2",
                title: "Architecture & CDN Setup",
                description: "Designed multi-CDN architecture and established contracts with additional CDN providers. Configured intelligent traffic routing and failover policies."
              },
              {
                phase: "Week 3-4",
                title: "Auto-Scaling & Edge Deployment",
                description: "Implemented predictive auto-scaling with ML models trained on historical traffic patterns. Deployed edge computing functions for authentication and personalization."
              },
              {
                phase: "Week 5",
                title: "Load Testing & Chaos Engineering",
                description: "Conducted load tests simulating 1M concurrent users. Performed chaos engineering exercises including CDN failover, origin failures, and network partitions."
              },
              {
                phase: "Week 6",
                title: "Launch Support & Optimization",
                description: "Provided 24/7 war room support during launch. Made real-time optimizations based on actual traffic patterns. Achieved zero downtime during 10x traffic spike."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-8 mb-12 last:mb-0"
              >
                <div className="flex-shrink-0 w-24">
                  <span className="text-sm font-bold text-primary">{item.phase}</span>
                </div>
                <div className="flex-grow pb-12 border-l-2 border-primary/20 pl-8 relative">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full" />
                  <h3 className="text-xl font-serif font-bold mb-3">{item.title}</h3>
                  <p className="text-charcoal/60 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 md:py-32 bg-subtle text-charcoal">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
              Results
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              Flawless launch, exceptional experience
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <h3 className="text-xl font-serif font-bold mb-6">Launch Performance</h3>
              <ul className="space-y-4">
                {[
                  "Peak concurrent users: 520,000 (10x normal)",
                  "Zero buffering incidents during peak",
                  "99.99% stream availability maintained",
                  "Average start time: 1.2 seconds globally"
                ].map((result, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal/70">{result}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <h3 className="text-xl font-serif font-bold mb-6">Business Impact</h3>
              <ul className="space-y-4">
                {[
                  "45% increase in subscriber conversions",
                  "Social sentiment: 94% positive mentions",
                  "CDN costs reduced 35% through optimization",
                  "Infrastructure now handles 15x baseline capacity"
                ].map((result, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal/70">{result}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 md:py-32 bg-base">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-2xl md:text-3xl font-serif text-white leading-relaxed mb-8 italic">
              "We had one shot to get this launch right. NEXDYNE delivered infrastructure that handled 10x our normal traffic without a single hiccup. Our viewers had a flawless experience, and the positive buzz drove a 45% increase in conversions. They turned what could have been a disaster into our biggest success."
            </p>
            <div>
              <p className="text-white font-serif font-bold text-lg">Sarah Chen</p>
              <p className="text-white/60">Chief Technology Officer, StreamVault</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-24 md:py-32 bg-white text-charcoal">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
              Related Case Studies
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              More transformation stories
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                category: "Healthcare Tech",
                title: "Health tech platform achieves 99.99% uptime",
                link: "/cases/healthcare-cloud-migration",
                color: "from-[#0077B5] to-secondary"
              },
              {
                category: "Fintech",
                title: "Payment processor scales to 50M transactions/day",
                link: "/cases/fintech-microservices",
                color: "from-secondary to-[#0077B5]"
              }
            ].map((caseStudy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={caseStudy.link}>
                  <div className="bg-subtle rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group">
                    <div className={`h-32 bg-gradient-to-br ${caseStudy.color}`} />
                    <div className="p-6">
                      <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2 block">
                        {caseStudy.category}
                      </span>
                      <h3 className="text-xl font-serif font-bold group-hover:text-primary transition-colors">
                        {caseStudy.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-base">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Preparing for your next big moment?
            </h2>
            <p className="text-xl text-white/70 leading-relaxed mb-10">
              Let's build infrastructure that scales with your ambition.
            </p>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg font-semibold transition-all">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
