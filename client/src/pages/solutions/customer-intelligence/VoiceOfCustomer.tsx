import React, { useEffect } from "react";
import { useLocation, Link } from "wouter";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/Breadcrumbs";
import BainHoverCard from "@/components/BainHoverCard";

export default function VoiceOfCustomer() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Related capabilities data
  const relatedCapabilities = [
    {
      title: "Customer Data Platform",
      description: "Unify customer data from all sources to create a single, coherent, 360-degree view of each customer.",
      link: "/solutions/customer-intelligence/customer-data-platform"
    },
    {
      title: "Predictive Analytics & Modeling",
      description: "Leverage historical data to forecast future customer behaviors, trends, and outcomes.",
      link: "/solutions/customer-intelligence/predictive-analytics-modeling"
    },
    {
      title: "Personalization Strategy & Execution",
      description: "Design and deliver tailored experiences that resonate with individual customer needs and preferences.",
      link: "/solutions/customer-intelligence/personalization-strategy"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#051C2C] selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Voice of Customer Programs" 
        description="Capture, analyze, and act on customer feedback across every channel to drive product innovation and service excellence."
        canonical="/solutions/customer-intelligence/voice-of-customer"
      />
      <Navigation />

      {/* Section 1: Hero Section - Dark Background (F100) */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center pt-16 sm:pt-20 bg-black">
        <div className="container px-4 sm:px-6 md:px-12 grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Breadcrumbs variant="light" />
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl eb-garamond font-bold tracking-tight text-white leading-[1.05] mb-3 sm:mb-4">
              Voice of Customer Programs
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-2xl mb-6 sm:mb-10">
              Capture, analyze, and act on customer feedback across every channel to drive product innovation and service excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link href="/contact">
                <Button className="bg-white hover:bg-gray-200 text-black px-8 py-6 text-base font-semibold transition-all">
                  Request a Consultation
                </Button>
              </Link>
              <Link href="/cases">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold transition-all bg-transparent">
                  See Our Success Stories
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
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/hCcOCNDBoxywXWOk.jpg" 
              alt="Voice of Customer Programs Visualization" 
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Section 2: Our Experience & Impact (F100) */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-gray-200">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl eb-garamond font-bold text-[#051C2C]">Our Experience & Impact</h2>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { metric: "95%", label: "Of customer feedback captured and analyzed" },
              { metric: "40%", label: "Faster response to emerging customer needs" },
              { metric: "30%", label: "Improvement in Net Promoter Score" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#051C2C] mb-2 sm:mb-3">{item.metric}</div>
                <p className="text-lg text-[#051C2C]/60">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Thought Leadership Paragraphs (F100) */}
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
              In today's competitive landscape, understanding your customer is no longer a luxury—it's the core driver of sustainable growth. A Voice of the Customer (VoC) program is your strategic framework for systematically gathering, analyzing, and acting upon customer feedback. It moves beyond passive listening to create a proactive, organization-wide dialogue that informs everything from product development to service delivery.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-[#051C2C]/80 leading-relaxed"
            >
              By integrating feedback from every touchpoint—surveys, reviews, social media, call center interactions, and more—you gain an unparalleled, real-time understanding of customer sentiment and expectations. This holistic view enables you to identify unmet needs, anticipate market shifts, and resolve issues before they escalate. A successful VoC program transforms customer feedback from raw data into your most valuable strategic asset.
            </motion.p>
          </div>
        </div>
      </section>

      {/* How We Can Help Section */}
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
              Our Voice of Customer Capabilities
            </h2>
            <p className="text-xl text-[#051C2C]/60 max-w-2xl">
              We help you build and optimize a world-class VoC program that delivers measurable results.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: "Omnichannel Feedback Collection",
                description: "Design and implement a cohesive strategy to capture customer feedback across all channels, including surveys, social media, and direct interactions."
              },
              {
                title: "Sentiment & Text Analytics",
                description: "Apply advanced AI and natural language processing (NLP) to unstructured feedback to identify key themes, sentiment drivers, and emerging trends."
              },
              {
                title: "Closed-Loop Feedback Systems",
                description: "Establish automated workflows to ensure customer issues are routed to the right teams and resolved promptly, closing the loop with the customer."
              },
              {
                title: "Root Cause Analysis",
                description: "Go beyond symptoms to identify the fundamental drivers of customer dissatisfaction and churn, enabling targeted, high-impact improvements."
              },
              {
                title: "Customer Journey Integration",
                description: "Map VoC insights directly to specific stages of the customer journey to pinpoint moments of friction and opportunities for delight."
              },
              {
                title: "VoC-to-Innovation Pipeline",
                description: "Create a structured process for channeling customer insights directly into your product development and service innovation lifecycle."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <BainHoverCard title={item.title} description={item.description} />
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
              Our Approach to <span className="text-[#00d4ff]">Customer-Centricity</span>
            </h2>
            <p className="text-lg text-white/60 max-w-3xl mx-auto">
              Our methodology ensures your VoC program is not just a listening post, but a powerful engine for business transformation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
            {[
              {
                title: "1. Strategic Design & Scoping",
                description: "We align your VoC program with key business objectives, defining the critical customer segments, journeys, and touchpoints for analysis."
              },
              {
                title: "2. Insight Generation & Synthesis",
                description: "Our team deploys advanced analytics to transform raw feedback into a clear, unified view of customer needs, pain points, and sentiment."
              },
              {
                title: "3. Action & Value Realization",
                description: "We help you embed insights into operational workflows, drive cross-functional action, and measure the impact on customer loyalty and business KPIs."
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
            Success Stories in Customer Listening
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative"
            >
              <Link href="/cases/retail-nps-improvement">
                <div className="relative overflow-hidden rounded-lg">
                  <img src="https://images.unsplash.com/photo-placeholder" alt="Retail NPS Improvement" className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/80">Retail</span>
                  <h3 className="text-2xl font-serif font-bold text-white mt-2">Boosting Net Promoter Score by 45 Points</h3>
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
              <Link href="/cases/saas-churn-reduction">
                <div className="relative overflow-hidden rounded-lg">
                  <img src="https://images.unsplash.com/photo-placeholder" alt="SaaS Churn Reduction" className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/80">Technology (SaaS)</span>
                  <h3 className="text-2xl font-serif font-bold text-white mt-2">Reducing Customer Churn by 25% Through Proactive Support</h3>
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
            Expand Your Customer Intelligence
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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
            Ready to Listen to Your Customers?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-8"
          >
            Let's build a Voice of the Customer program that turns feedback into your most powerful asset for growth. Contact us for a complimentary strategy session.
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
