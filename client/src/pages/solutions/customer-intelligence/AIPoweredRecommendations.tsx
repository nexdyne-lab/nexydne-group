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

export default function AIPoweredRecommendations() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const relatedCapabilities = [
    {
      title: "Predictive Analytics & Modeling",
      description: "Anticipate customer behavior and future trends by leveraging advanced predictive models.",
      link: "/solutions/customer-intelligence/predictive-analytics-modeling"
    },
    {
      title: "Behavioral Segmentation",
      description: "Group customers into meaningful segments based on their actions, preferences, and lifecycle stage.",
      link: "/solutions/customer-intelligence/behavioral-segmentation"
    },
    {
      title: "Voice of Customer Programs",
      description: "Capture, analyze, and act on customer feedback from all channels to drive experience improvements.",
      link: "/solutions/customer-intelligence/voice-of-customer"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#051C2C] selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="AI-Powered Recommendations" 
        description="Implement intelligent recommendation engines that deliver the right product, content, or action to each customer at the right moment."
        canonical="/solutions/customer-intelligence/ai-powered-recommendations"
      />
      <Navigation />

      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center pt-16 sm:pt-20 bg-black">
        <div className="container px-4 sm:px-6 md:px-12 grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Breadcrumbs variant="light" />
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl eb-garamond font-bold tracking-tight text-white leading-[1.05] mb-3 sm:mb-4">
              AI-Powered Recommendations
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-2xl mb-6 sm:mb-10">
              Implement intelligent recommendation engines that deliver the right product, content, or action to each customer at the right moment.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link href="/contact">
                <Button className="bg-white hover:bg-gray-200 text-black px-8 py-6 text-base font-semibold transition-all">
                  Request a Demo
                </Button>
              </Link>
              <Link href="/cases">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold transition-all bg-transparent">
                  See Our Results
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
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/xLjPiHYkOtTAdvbW.jpg" 
              alt="AI-Powered Recommendations Visualization" 
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-gray-200">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-[#051C2C]">Our Experience & Impact</h2>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { metric: "35%", label: "Of e-commerce revenue from recommendations" },
              { metric: "5x", label: "Higher engagement with recommended content" },
              { metric: "150M+", label: "Personalized recommendations served monthly" }
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
              In today's hyper-competitive digital landscape, personalization is no longer a luxury—it's an expectation. Customers are inundated with choices, and their attention is finite. AI-powered recommendation engines cut through the noise, acting as intelligent personal shoppers that anticipate needs and surface relevant products, content, and offers in real-time. This creates a more engaging, valuable, and frictionless customer experience.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-[#051C2C]/80 leading-relaxed"
            >
              Moving beyond simple "customers who bought this also bought" logic, modern recommendation systems leverage sophisticated machine learning models. By analyzing vast datasets of behavioral, transactional, and contextual information, we can uncover deep patterns and predict user intent with remarkable accuracy. The result is a dynamic, self-learning system that continuously adapts to individual preferences, driving higher conversion rates, increased basket sizes, and lasting customer loyalty.
            </motion.p>
          </div>
        </div>
      </section>

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
              Our Recommendation Engine Capabilities
            </h2>
            <p className="text-xl text-[#051C2C]/60 max-w-2xl">
              We deliver end-to-end solutions for designing, building, and optimizing high-impact recommendation systems.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: "Recommendation Strategy & Roadmap",
                description: "Define the optimal recommendation strategies for your business goals, from product discovery to content engagement, and create a phased implementation plan."
              },
              {
                title: "Algorithm & Model Development",
                description: "Design and train custom machine learning models (Collaborative Filtering, Content-Based, Hybrid) tailored to your specific data and use cases."
              },
              {
                title: "Real-Time Personalization Infrastructure",
                description: "Build scalable, low-latency systems to process user interactions and serve personalized recommendations in real-time across all touchpoints."
              },
              {
                title: "A/B Testing & Performance Optimization",
                description: "Implement rigorous testing frameworks to continuously evaluate and refine recommendation algorithms, user interfaces, and business logic for maximum impact."
              },
              {
                title: "Cross-Channel Recommendation Delivery",
                description: "Integrate recommendation services across your entire ecosystem, including web, mobile apps, email marketing, and in-store digital experiences."
              },
              {
                title: "Explainable AI (XAI) for Recommendations",
                description: "Provide transparency into why specific recommendations are made, building user trust and providing valuable insights for business teams."
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

      <section className="py-12 sm:py-16 lg:py-24 bg-[#051C2C] text-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00d4ff] mb-6 block">
              Our Approach
            </span>
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold mb-6">
              Delivering Recommendation Excellence
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Our methodology ensures your recommendation engine delivers measurable business value from day one.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 sm:gap-12 text-center md:text-left">
            {[
              {
                step: "01",
                title: "Data Foundation & Strategy",
                description: "We begin by auditing your data ecosystem and defining a clear strategy that aligns recommendation use cases with your core business objectives."
              },
              {
                step: "02",
                title: "Iterative Modeling & Deployment",
                description: "We develop and test multiple recommendation models in parallel, deploying the most promising candidates for live A/B testing to validate performance."
              },
              {
                step: "03",
                title: "Continuous Optimization & Scaling",
                description: "We establish a framework for ongoing monitoring and optimization, ensuring your engine adapts to new data and evolving customer behaviors."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-7xl font-serif font-bold text-[#0077B5] mb-4">{item.step}</div>
                <h3 className="text-2xl font-serif font-bold mb-4">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24 bg-[#051C2C] text-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00d4ff] mb-6 block">
              Case Studies
            </span>
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold mb-6">
              Proven Impact Through Personalization
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            {[
              {
                industry: "E-COMMERCE & RETAIL",
                headline: "Boosting Average Order Value by 25% for a Global Fashion Retailer"
              },
              {
                industry: "MEDIA & ENTERTAINMENT",
                headline: "Increasing Viewer Engagement by 80% for a Major Streaming Platform"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black/20 p-8 rounded-lg"
              >
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00d4ff] mb-4 block">{item.industry}</span>
                <h3 className="text-2xl font-serif font-bold leading-tight">{item.headline}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50 border-t border-gray-200">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl eb-garamond font-bold text-[#051C2C] mb-4">Related Capabilities</h2>
            <p className="text-lg text-[#051C2C]/60 max-w-2xl">Explore how our other Customer Intelligence services create a holistic view of your customers.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {relatedCapabilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={item.link}>
                  <a className="block p-8 bg-white border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                    <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-3">{item.title}</h3>
                    <p className="text-[#051C2C]/70 mb-4">{item.description}</p>
                    <span className="font-semibold text-[#0077B5] flex items-center">Explore <ArrowRight className="ml-2 w-4 h-4" /></span>
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-[#0077B5] text-white">
        <div className="container px-4 sm:px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl eb-garamond font-bold mb-6">Ready to Unlock Personalization at Scale?</h2>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10">
              Let's discuss how our AI-powered recommendation engines can help you create more relevant customer experiences and drive significant revenue growth. 
            </p>
            <Link href="/contact">
              <Button className="bg-white hover:bg-gray-200 text-black px-10 py-7 text-lg font-semibold transition-all">
                Contact Our Experts
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
