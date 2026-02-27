import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, CheckCircle2, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { RelatedContent } from "@/components/RelatedContent";

export default function EcommerceRepeatPurchase() {
  return (
    <div className="min-h-screen bg-base font-sans text-white selection:bg-primary selection:text-white">
      <SEO 
        title="E-commerce Repeat Purchase Case Study | Customer Intelligence" 
        description="How a specialty retailer increased repeat purchase rate by 42% using predictive analytics and personalized recommendations."
        canonical="/solutions/data-driven-customer-intelligence/case-studies/ecommerce-repeat-purchase"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=2000&q=80" 
            alt="E-commerce Analytics" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-base via-base/90 to-base/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-base via-transparent to-transparent" />
        </div>
        
        <div className="container px-4 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/solutions/data-driven-customer-intelligence/case-studies" className="inline-flex items-center text-white/60 hover:text-primary mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Link>
            
            <div className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-6">
              E-commerce • Case Study
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl eb-garamond font-bold tracking-tight text-white leading-[1.1] mb-4 max-w-4xl">
              Specialty retailer increases repeat purchase rate by 42%
            </h1>
            
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl mb-10">
              How a 150-employee online retailer deployed predictive analytics to identify high-value customers and personalize product recommendations.
            </p>

            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-4xl font-serif font-bold text-primary">42%</div>
                <div className="text-white/60 text-sm">Repeat purchase increase</div>
              </div>
              <div>
                <div className="text-4xl font-serif font-bold text-primary">$1.2M</div>
                <div className="text-white/60 text-sm">Annual revenue lift</div>
              </div>
              <div>
                <div className="text-4xl font-serif font-bold text-primary">3.2x</div>
                <div className="text-white/60 text-sm">Campaign ROI</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white text-charcoal">
        <div className="container px-4 md:px-12">
          <div className="grid md:grid-cols-3 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
                The Challenge
              </span>
              <h2 className="text-3xl md:text-4xl eb-garamond font-bold mb-8">
                Drowning in customer data, starving for actionable insights
              </h2>
              <div className="prose prose-lg max-w-none text-charcoal/70">
                <p>
                  A specialty e-commerce retailer with 150 employees and $45M in annual revenue was struggling to turn their customer data into growth. Despite collecting extensive transaction histories, browsing behavior, and customer feedback, their marketing team relied on generic batch-and-blast campaigns that treated all customers the same.
                </p>
                <p>
                  The company's repeat purchase rate had stagnated at 18%—well below the industry benchmark of 27%. Customer acquisition costs were rising, but lifetime value wasn't keeping pace. The marketing team knew they were sitting on valuable data but lacked the tools and expertise to activate it.
                </p>
                <p>
                  Key challenges included:
                </p>
                <ul>
                  <li>Customer data siloed across e-commerce platform, email system, and customer service tools</li>
                  <li>No visibility into customer lifetime value or purchase propensity</li>
                  <li>Generic product recommendations that didn't reflect individual preferences</li>
                  <li>Marketing campaigns with declining engagement and conversion rates</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-subtle p-8 rounded-xl">
                <h3 className="font-serif font-bold text-xl mb-6">Project Overview</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-charcoal/50 text-sm mb-1">Industry</div>
                    <div className="font-semibold">E-commerce / Retail</div>
                  </div>
                  <div>
                    <div className="text-charcoal/50 text-sm mb-1">Company Size</div>
                    <div className="font-semibold">150 employees</div>
                  </div>
                  <div>
                    <div className="text-charcoal/50 text-sm mb-1">Revenue</div>
                    <div className="font-semibold">$45M annually</div>
                  </div>
                  <div>
                    <div className="text-charcoal/50 text-sm mb-1">Timeline</div>
                    <div className="font-semibold">16 weeks</div>
                  </div>
                  <div>
                    <div className="text-charcoal/50 text-sm mb-1">Services</div>
                    <div className="font-semibold">Customer Data Platform, Predictive Analytics, Personalization</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-base">
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
              Building a customer intelligence engine
            </h2>
            <p className="text-xl text-white/60 max-w-3xl">
              We implemented a comprehensive customer intelligence solution in four phases, transforming fragmented data into personalized experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                phase: "Phase 1",
                title: "Data Unification",
                description: "Built a customer data platform that unified data from Shopify, Klaviyo, Zendesk, and Google Analytics into a single customer view.",
                outcomes: ["360° customer profiles", "Identity resolution across channels", "Real-time data synchronization"]
              },
              {
                phase: "Phase 2",
                title: "Predictive Modeling",
                description: "Developed machine learning models to predict customer lifetime value, purchase propensity, and optimal engagement timing.",
                outcomes: ["LTV prediction with 85% accuracy", "Next-purchase timing models", "Product affinity scoring"]
              },
              {
                phase: "Phase 3",
                title: "Segmentation & Personalization",
                description: "Created dynamic customer segments and implemented personalized product recommendations across email and website.",
                outcomes: ["12 behavioral segments", "Real-time recommendation engine", "Personalized email content"]
              },
              {
                phase: "Phase 4",
                title: "Campaign Automation",
                description: "Built automated customer journeys triggered by behavioral signals, optimized through continuous A/B testing.",
                outcomes: ["15 automated journeys", "Dynamic send-time optimization", "Continuous optimization framework"]
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
                <div className="text-primary text-sm font-bold mb-4">{item.phase}</div>
                <h3 className="text-xl font-serif font-bold text-white mb-4">{item.title}</h3>
                <p className="text-white/60 leading-relaxed mb-6">{item.description}</p>
                <ul className="space-y-3">
                  {item.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-center text-white/70 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
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
      <section className="py-24 bg-white text-charcoal">
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
            <h2 className="text-3xl md:text-4xl eb-garamond font-bold mb-6">
              Measurable impact on business outcomes
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              { value: "42%", label: "Repeat purchase rate increase", detail: "From 18% to 25.6%" },
              { value: "$1.2M", label: "Annual revenue lift", detail: "Incremental revenue" },
              { value: "3.2x", label: "Campaign ROI improvement", detail: "vs. previous campaigns" },
              { value: "28%", label: "Email engagement increase", detail: "Open and click rates" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-serif font-bold text-primary mb-2">{stat.value}</div>
                <div className="font-semibold mb-1">{stat.label}</div>
                <div className="text-charcoal/50 text-sm">{stat.detail}</div>
              </motion.div>
            ))}
          </div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-subtle p-12 rounded-2xl max-w-4xl mx-auto"
          >
            <Quote className="w-12 h-12 text-primary/30 mb-6" />
            <blockquote className="text-2xl font-serif italic text-charcoal/80 leading-relaxed mb-8">
              "We were drowning in customer data but had no way to act on it. NEXDYNE built our CDP, unified our customer view, and deployed ML models that increased repeat purchases by 42%. The ROI was immediate and measurable."
            </blockquote>
            <div>
              <div className="font-bold text-lg">Lisa Martinez</div>
              <div className="text-charcoal/60">VP of Marketing</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="py-24 bg-subtle text-charcoal">
        <div className="container px-4 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
                Key Learnings
              </span>
              <h2 className="text-3xl md:text-4xl eb-garamond font-bold mb-8">
                What made this transformation successful
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Start with data quality",
                    description: "Investing in identity resolution and data cleansing upfront paid dividends in model accuracy and personalization effectiveness."
                  },
                  {
                    title: "Focus on high-impact use cases",
                    description: "Rather than boiling the ocean, we prioritized the repeat purchase journey—the highest-leverage opportunity for this business."
                  },
                  {
                    title: "Build for iteration",
                    description: "The recommendation engine improves continuously through A/B testing and feedback loops, ensuring sustained performance gains."
                  },
                  {
                    title: "Enable the team",
                    description: "Training the marketing team to interpret insights and optimize campaigns ensured the solution delivered value long after implementation."
                  }
                ].map((learning, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">{learning.title}</h3>
                      <p className="text-charcoal/60 leading-relaxed">{learning.description}</p>
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
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
                alt="Analytics Dashboard" 
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
            title: "B2B software company reduces churn by 38%",
            category: "Case Study",
            link: "/solutions/data-driven-customer-intelligence/case-studies/saas-churn-reduction",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
          },
          {
            title: "Hyper-Personalization at Scale: A Practical Guide",
            category: "Insight",
            link: "/solutions/data-driven-customer-intelligence/insights/hyper-personalization",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
          },
          {
            title: "The Churn Prediction Playbook for Mid-Market SaaS",
            category: "Insight",
            link: "/solutions/data-driven-customer-intelligence/insights/churn-prediction-playbook",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
          }
        ]}
      />

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container px-4 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-white mb-6">
                Ready to transform your customer intelligence?
              </h2>
              <p className="text-xl text-white/80 leading-relaxed mb-10">
                Let's discuss how we can help you unlock similar results for your business.
              </p>
              <Link href="/contact">
                <Button className="bg-white text-primary hover:bg-white/90 px-10 py-6 text-base font-semibold transition-colors duration-200 ease-in-out">
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
