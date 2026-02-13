import React, { useEffect } from "react";
import { useLocation, Link } from "wouter";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function PersonalizationStrategy() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Related capabilities data
  const relatedCapabilities = [
    {
      title: "Behavioral Segmentation",
      description: "Group customers into meaningful segments based on their behaviors and preferences.",
      link: "/solutions/customer-intelligence/behavioral-segmentation"
    },
    {
      title: "AI-Powered Recommendations",
      description: "Deliver relevant product and content recommendations to every customer.",
      link: "/solutions/customer-intelligence/ai-powered-recommendations"
    },
    {
      title: "Journey Analytics & Optimization",
      description: "Analyze and optimize the entire customer journey across all touchpoints.",
      link: "/solutions/customer-intelligence/journey-analytics-optimization"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#051C2C] selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Personalization Strategy & Execution" 
        description="Design and execute hyper-personalized customer experiences across channels using AI-driven content, offers, and interaction strategies."
        canonical="/solutions/customer-intelligence/personalization-strategy"
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
              Personalization Strategy & Execution
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-2xl mb-6 sm:mb-10">
              Design and execute hyper-personalized customer experiences across channels using AI-driven content, offers, and interaction strategies.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link href="/contact">
                <Button className="bg-white hover:bg-gray-200 text-black px-8 py-6 text-base font-semibold transition-all">
                  Request a Personalization Audit
                </Button>
              </Link>
              <Link href="/cases">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold transition-all bg-transparent">
                  See Personalization in Action
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
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/lGTepMCKcSnUtMbo.jpg" 
              alt="Personalization Strategy & Execution Visualization" 
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
              { metric: "3x", label: "Revenue lift from personalized experiences" },
              { metric: "70%", label: "Of customers expect personalization" },
              { metric: "25%", label: "Increase in average order value" }
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
              In today's crowded market, one-size-fits-all messaging falls flat. Customers expect brands to understand their individual needs and preferences. Personalization is no longer a luxury; it's a fundamental driver of customer loyalty and revenue growth. We help you move beyond basic segmentation to deliver truly individualized experiences at scale.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-[#051C2C]/80 leading-relaxed"
            >
              Effective personalization requires a synthesis of data, technology, and strategy. By harnessing the power of AI and machine learning, we analyze customer data in real-time to predict intent and deliver the most relevant content, offers, and interactions. This data-driven approach ensures that every touchpoint is an opportunity to build a stronger, more profitable customer relationship.
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
              Our Personalization Capabilities
            </h2>
            <p className="text-xl text-[#051C2C]/60 max-w-2xl">
              From strategy to execution, we offer a complete suite of personalization services.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: "Personalization Roadmap",
                description: "Develop a strategic roadmap for implementing and scaling personalization initiatives across your organization."
              },
              {
                title: "AI-Driven Content & Offer Targeting",
                description: "Use machine learning to automatically match the right content and offers to the right customer at the right time."
              },
              {
                title: "Omnichannel Experience Orchestration",
                description: "Create seamless, consistent, and personalized customer journeys across all channels, from web and mobile to email and in-store."
              },
              {
                title: "Dynamic Creative Optimization",
                description: "Automatically test and optimize creative elements in real-time to maximize engagement and conversion."
              },
              {
                title: "Personalization Technology Stack",
                description: "Select, implement, and integrate the right technology stack to power your personalization efforts."
              },
              {
                title: "Measurement & Attribution",
                description: "Establish a robust measurement framework to track the ROI of your personalization initiatives and continuously optimize performance."
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

      {/* Section 5: Related Capabilities (F100) */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50 border-t border-gray-200">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl sm:text-4xl eb-garamond font-bold text-[#051C2C] mb-4">Explore Related Capabilities</h2>
            <p className="text-lg text-[#051C2C]/60 max-w-2xl mx-auto">Deepen your customer intelligence with our complementary services.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                <p className="text-[#051C2C]/70 mb-6">{capability.description}</p>
                <Link href={capability.link}>
                  <span className="text-[#0077B5] font-semibold flex items-center group-hover:underline">
                    Learn More <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C] mb-6 leading-tight max-w-3xl mx-auto">
              Ready to Unlock the Power of Personalization?
            </h2>
            <p className="text-lg sm:text-xl text-[#051C2C]/70 mb-10 max-w-2xl mx-auto">
              Let's discuss how our personalization strategies can drive growth for your business. Schedule a complimentary consultation with our experts today.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-[#0077B5] hover:bg-[#005F8C] text-white px-10 py-7 text-lg font-semibold transition-all">
                Schedule Your Free Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
