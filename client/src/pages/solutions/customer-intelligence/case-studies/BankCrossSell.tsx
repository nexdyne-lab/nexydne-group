import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, CheckCircle2, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { RelatedContent } from "@/components/RelatedContent";

export default function BankCrossSell() {
  return (
    <div className="min-h-screen bg-[#051C2C] font-sans text-white selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Bank Cross-Sell Case Study | Customer Intelligence" 
        description="How a regional bank doubled cross-sell conversion using next-best-action models to personalize product recommendations."
        canonical="/solutions/data-driven-customer-intelligence/case-studies/bank-cross-sell"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=2000&q=80" 
            alt="Financial Services" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#051C2C] via-[#051C2C]/90 to-[#051C2C]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051C2C] via-transparent to-transparent" />
        </div>
        
        <div className="container px-4 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/solutions/data-driven-customer-intelligence/case-studies" className="inline-flex items-center text-white/60 hover:text-[#0077B5] mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Link>
            
            <div className="text-[#0077B5] text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Financial Services • Case Study
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl eb-garamond font-bold tracking-tight text-white leading-[1.1] mb-4 max-w-4xl">
              Regional bank doubles cross-sell conversion
            </h1>
            
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl mb-10">
              How a 120-employee community bank implemented next-best-action models to personalize product recommendations for existing customers.
            </p>

            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-4xl font-serif font-bold text-[#0077B5]">2.1x</div>
                <div className="text-white/60 text-sm">Cross-sell conversion</div>
              </div>
              <div>
                <div className="text-4xl font-serif font-bold text-[#0077B5]">$640K</div>
                <div className="text-white/60 text-sm">New revenue generated</div>
              </div>
              <div>
                <div className="text-4xl font-serif font-bold text-[#0077B5]">45%</div>
                <div className="text-white/60 text-sm">Customer engagement increase</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white text-[#051C2C]">
        <div className="container px-4 md:px-12">
          <div className="grid md:grid-cols-3 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
                The Challenge
              </span>
              <h2 className="text-3xl md:text-4xl eb-garamond font-bold mb-8">
                Generic product pitches falling flat
              </h2>
              <div className="prose prose-lg max-w-none text-[#051C2C]/70">
                <p>
                  A regional community bank with 120 employees and $1.2B in assets was struggling to deepen relationships with existing customers. Despite having a loyal customer base with an average tenure of 8+ years, the bank's cross-sell ratio of 2.1 products per customer lagged significantly behind the industry benchmark of 3.5.
                </p>
                <p>
                  The bank's approach to cross-selling was fundamentally broken. Branch staff made generic product recommendations based on intuition rather than data. Marketing campaigns promoted the same products to everyone, regardless of individual needs or financial situations. Customers felt marketed to rather than understood.
                </p>
                <p>
                  Key challenges included:
                </p>
                <ul>
                  <li>No visibility into which products each customer was most likely to need</li>
                  <li>Branch staff overwhelmed with product options and no guidance on prioritization</li>
                  <li>Marketing campaigns with sub-1% response rates</li>
                  <li>Customer data siloed across core banking, CRM, and digital channels</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-[#F8F9FA] p-8 rounded-xl">
                <h3 className="font-serif font-bold text-xl mb-6">Project Overview</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-[#051C2C]/50 text-sm mb-1">Industry</div>
                    <div className="font-semibold">Community Banking</div>
                  </div>
                  <div>
                    <div className="text-[#051C2C]/50 text-sm mb-1">Company Size</div>
                    <div className="font-semibold">120 employees</div>
                  </div>
                  <div>
                    <div className="text-[#051C2C]/50 text-sm mb-1">Assets</div>
                    <div className="font-semibold">$1.2B</div>
                  </div>
                  <div>
                    <div className="text-[#051C2C]/50 text-sm mb-1">Timeline</div>
                    <div className="font-semibold">18 weeks</div>
                  </div>
                  <div>
                    <div className="text-[#051C2C]/50 text-sm mb-1">Services</div>
                    <div className="font-semibold">Next-Best-Action, Propensity Modeling, Sales Enablement</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-[#051C2C]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-6 block">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl eb-garamond font-bold text-white mb-6">
              Building a next-best-action engine
            </h2>
            <p className="text-xl text-white/60 max-w-3xl">
              We implemented a comprehensive recommendation system that put the right product in front of the right customer at the right time—through the right channel.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                phase: "Phase 1",
                title: "Customer Data Unification",
                description: "Integrated data from core banking, CRM, digital banking, and external sources to create comprehensive customer profiles.",
                outcomes: ["360° customer financial profiles", "Life event detection signals", "Channel preference mapping"]
              },
              {
                phase: "Phase 2",
                title: "Propensity Model Development",
                description: "Built machine learning models to predict likelihood of purchase for each product category based on customer attributes and behaviors.",
                outcomes: ["12 product propensity models", "Life stage segmentation", "Timing optimization signals"]
              },
              {
                phase: "Phase 3",
                title: "Next-Best-Action Engine",
                description: "Created a recommendation engine that ranked products by propensity, profitability, and customer value to surface the optimal offer.",
                outcomes: ["Real-time recommendations", "Channel-specific messaging", "Offer prioritization logic"]
              },
              {
                phase: "Phase 4",
                title: "Sales Enablement & Activation",
                description: "Deployed recommendations to branch staff, call center, digital banking, and marketing automation systems with training and playbooks.",
                outcomes: ["Branch dashboard integration", "Marketing campaign automation", "Performance tracking dashboards"]
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
                <div className="text-[#0077B5] text-sm font-bold mb-4">{item.phase}</div>
                <h3 className="text-xl font-serif font-bold text-white mb-4">{item.title}</h3>
                <p className="text-white/60 leading-relaxed mb-6">{item.description}</p>
                <ul className="space-y-3">
                  {item.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-center text-white/70 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#0077B5] mr-3 flex-shrink-0" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-white text-[#051C2C]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
              Results
            </span>
            <h2 className="text-3xl md:text-4xl eb-garamond font-bold mb-6">
              From generic pitches to personalized recommendations
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              { value: "2.1x", label: "Cross-sell conversion", detail: "vs. previous approach" },
              { value: "$640K", label: "New revenue", detail: "First year impact" },
              { value: "45%", label: "Engagement increase", detail: "Recommendation acceptance" },
              { value: "2.8", label: "Products per customer", detail: "Up from 2.1" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-serif font-bold text-[#0077B5] mb-2">{stat.value}</div>
                <div className="font-semibold mb-1">{stat.label}</div>
                <div className="text-[#051C2C]/50 text-sm">{stat.detail}</div>
              </motion.div>
            ))}
          </div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#F8F9FA] p-12 rounded-2xl max-w-4xl mx-auto"
          >
            <Quote className="w-12 h-12 text-[#0077B5]/30 mb-6" />
            <blockquote className="text-2xl font-serif italic text-[#051C2C]/80 leading-relaxed mb-8">
              "The next-best-action engine NEXDYNE built transformed our cross-sell strategy. We went from generic product pitches to personalized recommendations that doubled our conversion rate. Our customers feel understood, not marketed to."
            </blockquote>
            <div>
              <div className="font-bold text-lg">Robert Thompson</div>
              <div className="text-[#051C2C]/60">Chief Digital Officer</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="py-24 bg-[#F8F9FA] text-[#051C2C]">
        <div className="container px-4 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
                Key Learnings
              </span>
              <h2 className="text-3xl md:text-4xl eb-garamond font-bold mb-8">
                Success factors for next-best-action
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Context beats propensity alone",
                    description: "High propensity + wrong timing = failed pitch. Life event signals (new home, new job) dramatically improved conversion."
                  },
                  {
                    title: "Empower the frontline",
                    description: "Branch staff adoption was critical. Simple, actionable recommendations with talking points drove 3x higher usage than complex dashboards."
                  },
                  {
                    title: "Omnichannel consistency matters",
                    description: "Customers who received consistent recommendations across branch, digital, and call center had 2x higher conversion."
                  },
                  {
                    title: "Measure what matters",
                    description: "Tracking recommendation-to-conversion attribution enabled continuous model improvement and proved ROI to leadership."
                  }
                ].map((learning, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-8 h-8 bg-[#0077B5] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">{learning.title}</h3>
                      <p className="text-[#051C2C]/60 leading-relaxed">{learning.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80" 
                alt="Banking Dashboard" 
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <RelatedContent 
        items={[
          {
            title: "Specialty retailer increases repeat purchase rate by 42%",
            category: "Case Study",
            link: "/solutions/data-driven-customer-intelligence/case-studies/ecommerce-repeat-purchase",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
          },
          {
            title: "B2B software company reduces churn by 38%",
            category: "Case Study",
            link: "/solutions/data-driven-customer-intelligence/case-studies/saas-churn-reduction",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
          },
          {
            title: "Beyond Segmentation: The Future of Customer Intelligence",
            category: "Insight",
            link: "/solutions/data-driven-customer-intelligence/insights/beyond-segmentation",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
          }
        ]}
      />

      {/* CTA Section */}
      <section className="py-24 bg-[#0077B5]">
        <div className="container px-4 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-white mb-6">
                Ready to transform your cross-sell strategy?
              </h2>
              <p className="text-xl text-white/80 leading-relaxed mb-10">
                Let's discuss how next-best-action can deepen your customer relationships.
              </p>
              <Link href="/contact">
                <Button className="bg-white text-[#0077B5] hover:bg-white/90 px-10 py-6 text-base font-semibold">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
