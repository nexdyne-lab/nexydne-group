import React, { useEffect } from "react";
import { useLocation, Link } from "wouter";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function BehavioralSegmentation() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const relatedCapabilities = [
    {
      title: "Predictive Analytics & Modeling",
      description: "Anticipate customer needs and actions by leveraging historical data and machine learning.",
      link: "/solutions/customer-intelligence/predictive-analytics-modeling"
    },
    {
      title: "Personalization Strategy & Execution",
      description: "Craft and deliver tailored experiences that resonate with individual customer preferences and behaviors.",
      link: "/solutions/customer-intelligence/personalization-strategy"
    },
    {
      title: "Journey Analytics & Optimization",
      description: "Map and analyze customer journeys to identify friction points and opportunities for enhancement.",
      link: "/solutions/customer-intelligence/journey-analytics-optimization"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#051C2C] selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Behavioral Segmentation" 
        description="Move beyond demographics to segment customers by actual behavior, preferences, and engagement patterns for precision targeting."
        canonical="/solutions/customer-intelligence/behavioral-segmentation"
      />
      <Navigation />

      {/* Section 1: Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center pt-16 sm:pt-20 bg-black">
        <div className="container px-4 sm:px-6 md:px-12 grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Breadcrumbs variant="light" />
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl eb-garamond font-bold tracking-tight text-white leading-[1.05] mb-3 sm:mb-4">
              Behavioral Segmentation
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-2xl mb-6 sm:mb-10">
              Move beyond demographics to segment customers by actual behavior, preferences, and engagement patterns for precision targeting.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link href="/contact">
                <Button className="bg-white hover:bg-gray-200 text-black px-8 py-6 text-base font-semibold transition-all">
                  Request a Consultation
                </Button>
              </Link>
              <Link href="/cases">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold transition-all bg-transparent">
                  See Our Work
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
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/WDvWcRAPdhdSnnCO.jpg" 
              alt="Behavioral Segmentation Visualization" 
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Section 2: Stats */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-gray-200">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl eb-garamond font-bold text-[#051C2C]">The Impact of Behavioral Insights</h2>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { metric: "8x", label: "More precise than demographic segmentation" },
              { metric: "45%", label: "Improvement in campaign conversion rates" },
              { metric: "200+", label: "Behavioral attributes analyzed" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-4 border-[#0077B5] pl-6"
              >
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#051C2C] mb-2 sm:mb-3">{item.metric}</div>
                <p className="text-lg text-[#051C2C]/60">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Thought Leadership */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl text-[#051C2C]/80 leading-relaxed"
            >
              Knowing *who* your customers are is only half the story. True competitive advantage lies in understanding *how* they behave. Traditional demographic segmentation provides a static, one-dimensional view that often fails to capture the nuances of modern consumer behavior. To build meaningful relationships and drive growth, you must move beyond age and location to segment based on actions, preferences, and intent.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-[#051C2C]/80 leading-relaxed"
            >
              Behavioral segmentation unlocks this deeper understanding. By analyzing transactional data, digital engagement, and service interactions, we help you identify distinct customer groups with unique needs and motivations. This allows for hyper-targeted marketing campaigns, personalized product recommendations, and proactive customer service—transforming generic outreach into relevant, valuable conversations that foster loyalty and increase lifetime value.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Section 4: How We Can Help */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
              How We Can Help
            </span>
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C] mb-6">
              Our Behavioral Segmentation Capabilities
            </h2>
            <p className="text-xl text-[#051C2C]/60 max-w-2xl">
              We provide end-to-end services to turn behavioral data into a strategic asset.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: "Transactional Analysis",
                description: "Analyze purchase history, frequency, and value to identify your most valuable customer segments."
              },
              {
                title: "Engagement Pattern Recognition",
                description: "Map digital and offline interactions to understand how customers engage with your brand across channels."
              },
              {
                title: "Lifecycle Stage Segmentation",
                description: "Group customers based on their journey stage, from new prospects to loyal advocates, to tailor outreach."
              },
              {
                title: "Preference & Intent Modeling",
                description: "Use browsing data and interactions to model customer preferences and predict future intent."
              },
              {
                title: "Cross-Channel Behavior Mapping",
                description: "Create a unified view of customer behavior across web, mobile, email, and in-store channels."
              },
              {
                title: "Real-Time Segmentation APIs",
                description: "Develop APIs that provide real-time segment data to power dynamic personalization engines."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <div className="h-full min-h-[200px] p-8 bg-white border-l-4 border-l-transparent group-hover:border-l-[#CC0000] border border-gray-200 transition-all duration-300 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif font-bold text-[#051C2C] leading-tight origin-top-left transition-all duration-300 group-hover:text-base group-hover:mb-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-[#051C2C]/70 leading-relaxed text-sm max-h-0 overflow-hidden opacity-0 group-hover:max-h-[120px] group-hover:opacity-100 group-hover:mt-3 transition-all duration-300 ease-in-out">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[#CC0000] font-semibold text-sm flex items-center">
                      Learn More <ArrowRight className="ml-1 w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Our Approach */}
      <section className="py-12 sm:py-16 lg:py-24 bg-[#051C2C] text-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl eb-garamond font-bold mb-4">
              Our Approach to <span className="text-[#00d4ff]">Actionable Segmentation</span>
            </h2>
            <p className="text-lg text-white/60 max-w-3xl mx-auto">
              We employ a rigorous, data-driven methodology to move from raw data to impactful business strategies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
            {[
              {
                title: "1. Data Aggregation & Enrichment",
                description: "We consolidate behavioral data from all relevant sources—CRM, analytics, marketing platforms—and enrich it with third-party data for a complete picture."
              },
              {
                title: "2. Unsupervised & Supervised Modeling",
                description: "Our data scientists apply a mix of clustering algorithms and predictive models to uncover natural behavioral groupings and validate their business value."
              },
              {
                title: "3. Activation & Measurement",
                description: "We help you activate these segments across your marketing and sales platforms and establish a framework for measuring the uplift in engagement and conversion."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-white/60">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Case Studies */}
      <section className="py-12 sm:py-16 lg:py-24 bg-[#051C2C] text-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-serif font-bold text-center mb-12"
          >
            Success Stories in Behavioral Segmentation
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative"
            >
              <Link href="/cases/retail-segmentation">
                <div className="relative overflow-hidden rounded-lg">
                  <img src="https://images.unsplash.com/photo-placeholder" alt="Retail Segmentation" className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/80">Retail</span>
                  <h3 className="text-2xl font-serif font-bold text-white mt-2">Boosting Customer Lifetime Value by 60%</h3>
                </div>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative"
            >
              <Link href="/cases/media-churn-reduction">
                <div className="relative overflow-hidden rounded-lg">
                  <img src="https://images.unsplash.com/photo-placeholder" alt="Media Churn Reduction" className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/80">Media & Entertainment</span>
                  <h3 className="text-2xl font-serif font-bold text-white mt-2">Reducing Churn by 25% Through Proactive Engagement</h3>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 7: Related Capabilities */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#f8f8f7]">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-serif font-bold text-center mb-12 text-[#051C2C]"
          >
            Enhance Your Customer Intelligence
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {relatedCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <Link href={capability.link}>
                  <h3 className="text-xl font-bold text-[#051C2C] mb-3">{capability.title}</h3>
                  <p className="text-[#051C2C]/60 mb-4">{capability.description}</p>
                  <span className="text-[#0077B5] font-semibold flex items-center">Explore <ArrowRight className="ml-2 w-4 h-4" /></span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#0077B5] text-white">
        <div className="container px-4 sm:px-6 md:px-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-serif font-bold mb-6"
          >
            Ready to Understand Your Customers Better?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-8"
          >
            Discover how behavioral segmentation can unlock new growth opportunities for your business. Contact us for a personalized consultation and see how we can help you turn customer actions into actionable insights.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/contact">
              <Button className="bg-white hover:bg-gray-200 text-black px-10 py-7 text-lg font-semibold transition-all">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
