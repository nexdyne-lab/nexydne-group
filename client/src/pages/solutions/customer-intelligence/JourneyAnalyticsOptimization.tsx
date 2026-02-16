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

export default function JourneyAnalyticsOptimization() {
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
      title: "Personalization Strategy",
      description: "Develop and implement strategies to deliver personalized experiences that drive engagement and loyalty.",
      link: "/solutions/customer-intelligence/personalization-strategy"
    },
    {
      title: "Voice of the Customer (VoC)",
      description: "Capture, analyze, and act on customer feedback to improve products, services, and experiences.",
      link: "/solutions/customer-intelligence/voice-of-customer"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#051C2C] selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Journey Analytics & Optimization" 
        description="Map, measure, and optimize every customer touchpoint to reduce friction, increase satisfaction, and drive conversion at every stage."
        canonical="/solutions/customer-intelligence/journey-analytics-optimization"
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
              Journey Analytics & Optimization
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-2xl mb-6 sm:mb-10">
              Map, measure, and optimize every customer touchpoint to reduce friction, increase satisfaction, and drive conversion at every stage.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link href="/contact">
                <Button className="bg-white hover:bg-gray-200 text-black px-8 py-6 text-base font-semibold transition-all">
                  Request a Journey Analysis
                </Button>
              </Link>
              <Link href="/cases">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold transition-all bg-transparent">
                  Explore Our Impact
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
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/fEyGmnNQhtQvgrrQ.jpg" 
              alt="Journey Analytics & Optimization Visualization" 
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
              { metric: "60%", label: "Reduction in customer journey friction points" },
              { metric: "2.5x", label: "Improvement in conversion rates" },
              { metric: "40%", label: "Increase in customer satisfaction scores" }
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
              Understanding the customer journey is no longer a linear exercise. In today's fragmented digital landscape, customers interact with your brand across a multitude of touchpoints, creating complex, non-linear paths. Journey analytics provides the lens to bring these paths into focus, transforming disparate data points into a cohesive narrative of the customer experience.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-[#051C2C]/80 leading-relaxed"
            >
              By mapping and measuring every interaction, we identify moments of friction and opportunities for delight. This data-driven approach allows us to move beyond assumptions and pinpoint exactly where and why customers struggle or disengage. The goal is to systematically dismantle barriers, streamline experiences, and create seamless pathways that guide customers toward their goals—and yours.
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
              Our Journey Optimization Capabilities
            </h2>
            <p className="text-xl text-[#051C2C]/60 max-w-2xl">
              From data integration to predictive modeling, we offer a full spectrum of journey optimization services.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: "Cross-Channel Journey Mapping",
                description: "Visualize the end-to-end customer journey across all digital and physical touchpoints to understand the complete customer experience."
              },
              {
                title: "Friction Point Identification",
                description: "Utilize advanced analytics to pinpoint specific barriers, drop-off points, and areas of frustration within the customer journey."
              },
              {
                title: "Behavioral Segmentation",
                description: "Group customers into meaningful segments based on their behavior and interactions to enable targeted optimization strategies."
              },
              {
                title: "Conversion Path Optimization",
                description: "Analyze and refine the critical paths to conversion, removing obstacles and streamlining the process to increase key metrics."
              },
              {
                title: "Predictive Journey Modeling",
                description: "Leverage AI to forecast customer behavior, predict future journey paths, and proactively address potential issues before they arise."
              },
              {
                title: "Omnichannel Experience Design",
                description: "Design and implement consistent, seamless, and personalized experiences across all customer interaction channels."
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

      {/* Section 5: Related Capabilities (F100) */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50 border-t border-gray-200">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl eb-garamond font-bold text-[#051C2C] mb-4">Explore Related Capabilities</h2>
            <p className="text-lg text-[#051C2C]/60 max-w-2xl">Deepen your customer intelligence by exploring these connected services.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {relatedCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300 group"
              >
                <h3 className="text-xl font-bold text-[#051C2C] mb-3">{capability.title}</h3>
                <p className="text-[#051C2C]/70 mb-6 flex-grow">{capability.description}</p>
                <Link href={capability.link}>
                  <span className="font-semibold text-[#0077B5] group-hover:text-[#CC0000] transition-colors duration-300 flex items-center">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: CTA (F100) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container px-4 sm:px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C] mb-6">
              Ready to Optimize Your Customer Journey?
            </h2>
            <p className="text-lg sm:text-xl text-[#051C2C]/70 max-w-3xl mx-auto mb-10">
              Let's work together to uncover insights, remove friction, and create exceptional experiences that drive growth. Contact us today for a complimentary journey mapping session.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-[#0077B5] hover:bg-[#005F8C] text-white px-10 py-7 text-lg font-semibold transition-all">
                Get Started
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
