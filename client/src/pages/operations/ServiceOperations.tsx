import { motion } from "framer-motion";
import { ArrowRight, Layers, BarChart3, Cog, Users, TrendingUp, HeartPulse } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import BainHoverCard from "@/components/BainHoverCard";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function ServiceOperations() {
  return (
    <div className="min-h-screen bg-white text-charcoal selection:bg-primary selection:text-white">
      <SEO 
        title="Service Operations" 
        description="Optimize service delivery and customer experience. Transform your service operations to drive efficiency, quality, and customer satisfaction."
        canonical="/capabilities/operations/service-operations"
      />
      <Navbar />
      
      {/* Hero Section - Dark Background */}
      <section className="relative min-h-[70vh] flex items-center pt-20 bg-charcoal">
        <div className="container px-4 md:px-12 grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/capabilities/operations" className="inline-flex items-center text-white/60 hover:text-white mb-6 text-sm transition-colors">
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Operations
            </Link>
            
            <h1 className="text-5xl md:text-7xl eb-garamond font-bold tracking-tight text-white leading-[1.05] mb-4">
              Service Operations
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl mb-10">
              Optimize service delivery and customer experience. Transform your service operations to drive efficiency, quality, and lasting customer relationships.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button className="bg-white hover:bg-muted text-charcoal px-8 py-6 text-base font-semibold transition-all">
                  Discuss Your Service Operations
                </Button>
              </Link>
              <Link href="/capabilities/operations/case-studies">
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
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80" 
              alt="Service Operations" 
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Our Experience & Impact - Bain Style */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container px-4 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl eb-garamond font-bold text-charcoal mb-12"
          >
            Our Experience & Impact
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: "100+", label: "service operations transformations across industries" },
              { metric: "25-40%", label: "typical improvement in service delivery efficiency" },
              { metric: "30-50%", label: "increase in customer satisfaction scores" }
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

      {/* Thought Leadership Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-12">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xl md:text-2xl text-charcoal leading-relaxed mb-8">
                For service-based businesses—from professional services to healthcare to hospitality—operational excellence directly impacts customer experience and profitability. Yet many midmarket service companies struggle with inconsistent delivery, capacity constraints, and difficulty scaling quality as they grow.
              </p>
              <p className="text-lg text-charcoal/70 leading-relaxed mb-8">
                We help service organizations design and implement operating models that deliver consistent, high-quality experiences at scale. Our approach balances standardization with the flexibility needed to meet diverse customer needs, enabling you to grow without sacrificing the service quality that built your reputation.
              </p>
              <p className="text-lg text-charcoal/70 leading-relaxed mb-8">
                In an increasingly competitive landscape, service excellence is a differentiator. We help you build the systems, processes, and capabilities that turn every customer interaction into an opportunity to strengthen relationships and drive loyalty.
              </p>
              <p className="text-lg text-charcoal/70 leading-relaxed">
                Our team brings deep experience across service industries, from field service optimization to contact center transformation to professional services delivery. We understand the unique challenges of service operations and design solutions that work in the real world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach Section - Dark Background */}
      <section className="py-24 bg-base">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
              Our Approach
            </span>
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-white mb-6">
              How we transform service operations
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Service Design & Customer Journey Mapping",
                description: "We analyze your customer journeys to identify pain points, moments of truth, and opportunities to exceed expectations—then design service processes that deliver."
              },
              {
                title: "Operating Model & Capacity Optimization",
                description: "We design service delivery models that balance efficiency with quality, optimizing staffing, scheduling, and resource allocation to meet demand patterns."
              },
              {
                title: "Quality Systems & Performance Management",
                description: "We implement quality frameworks, metrics, and feedback loops that drive continuous improvement and ensure consistent service delivery."
              }
            ].map((approach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-t border-white/20 pt-8"
              >
                <h3 className="text-xl font-bold text-white mb-4">{approach.title}</h3>
                <p className="text-white/60 leading-relaxed">{approach.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Can Help Section - H100 Hover Effect */}
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
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-charcoal mb-6">
              Our Service Operations Capabilities
            </h2>
            <p className="text-xl text-charcoal/60 max-w-3xl">
              We help you build service operations that drive customer satisfaction, operational efficiency, and sustainable growth.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Service Delivery Optimization",
                description: "Streamline service processes to reduce cycle times, eliminate waste, and improve first-time resolution rates across all service channels.",
                link: "/contact"
              },
              {
                title: "Customer Experience Design",
                description: "Map customer journeys and design service experiences that exceed expectations, building loyalty and driving referrals.",
                link: "/contact"
              },
              {
                title: "Field Service Excellence",
                description: "Optimize field service operations including scheduling, routing, technician productivity, and mobile enablement.",
                link: "/contact"
              },
              {
                title: "Contact Center Transformation",
                description: "Redesign contact center operations to improve customer satisfaction, reduce costs, and enable omnichannel service delivery.",
                link: "/contact"
              },
              {
                title: "Service Quality Management",
                description: "Implement quality frameworks, measurement systems, and continuous improvement processes that drive service excellence.",
                link: "/contact"
              },
              {
                title: "Capacity & Workforce Planning",
                description: "Develop demand forecasting and workforce planning capabilities that ensure you have the right resources at the right time.",
                link: "/contact"
              }
            ].map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
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
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-charcoal mb-6">
              Service transformations that deliver
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
                category: "Healthcare Services",
                title: "Regional healthcare provider transforms patient experience and operational efficiency",
                description: "A 200-employee healthcare services company engaged us to redesign their patient journey. Through service design, process optimization, and staff training, we improved patient satisfaction scores by 42% while reducing appointment wait times by 35%.",
                link: "/case-studies/healthcare-service-operations"
              },
              {
                image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80",
                category: "Professional Services",
                title: "Professional services firm scales delivery without sacrificing quality",
                description: "A growing consulting firm struggled to maintain service quality as they expanded. We helped them design standardized delivery frameworks, implement quality controls, and build training programs that enabled 50% growth while improving client satisfaction.",
                link: "/case-studies/professional-services-operations"
              }
            ].map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={result.link} className="group block">
                  <div className="relative overflow-hidden aspect-[16/10] mb-6">
                    <img 
                      src={result.image} 
                      alt={result.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <span className="text-primary text-xs font-bold uppercase tracking-wider mb-3 block">{result.category}</span>
                  <h3 className="text-2xl eb-garamond font-bold text-charcoal mb-4 group-hover:text-primary transition-colors leading-tight">
                    {result.title}
                  </h3>
                  <p className="text-charcoal/60 leading-relaxed mb-4">
                    {result.description}
                  </p>
                  <div className="flex items-center text-primary text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Read full case study <ArrowRight className="ml-2 w-4 h-4" />
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
                Latest Insights
              </span>
              <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-charcoal">
                Service operations perspectives
              </h2>
            </div>
            <Link href="/insights" className="group flex items-center text-charcoal font-semibold hover:text-primary transition-colors">
              View all insights <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "Customer Experience",
                readTime: "6 min read",
                title: "Designing Service Experiences That Build Loyalty",
                description: "How midmarket service companies can create memorable customer experiences that drive retention and referrals.",
                link: "/insights/service-experience-design"
              },
              {
                category: "Operational Excellence",
                readTime: "5 min read",
                title: "Scaling Service Quality: Lessons from High-Growth Companies",
                description: "Practical strategies for maintaining service excellence as your organization grows and evolves.",
                link: "/insights/scaling-service-quality"
              },
              {
                category: "Technology",
                readTime: "7 min read",
                title: "Digital Tools for Service Operations: A Practical Guide",
                description: "How to select and implement service management technology that improves efficiency without overwhelming your team.",
                link: "/insights/service-operations-technology"
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
                    <h3 className="text-xl eb-garamond font-bold text-charcoal mb-4 group-hover:text-primary transition-colors leading-tight">
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

      {/* Related Capabilities Section - H100 Hover Effect */}
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
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-charcoal mb-6">
              Explore related capabilities
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Quality Management Systems",
                description: "Build a culture of quality that exceeds customer expectations. Implement systematic quality controls and continuous improvement methodologies.",
                link: "/capabilities/operations/quality-management"
              },
              {
                title: "Workforce Optimization",
                description: "Empower your team with the right skills and tools. Design workforce strategies, training programs, and performance management systems.",
                link: "/capabilities/operations/workforce-optimization"
              },
              {
                title: "Process Automation & Digitization",
                description: "Eliminate manual bottlenecks with intelligent automation. From order processing to quality control, accelerate workflows and reduce errors.",
                link: "/capabilities/operations/process-automation"
              }
            ].map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
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
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-white mb-6">
              Ready to transform your service operations?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Let's discuss how we can help you deliver exceptional service experiences that drive customer loyalty.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button className="bg-white hover:bg-subtle text-primary px-8 py-6 text-base font-semibold transition-all">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/capabilities/operations">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold transition-all bg-transparent">
                  Explore All Operations Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
