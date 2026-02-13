import React, { useEffect } from "react";
import { useLocation, Link } from "wouter";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function PredictiveAnalyticsModeling() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const relatedCapabilities = [
    {
      title: "Customer Data Platform Selection & Implementation",
      description: "Unify customer data from all sources into a single, coherent, real-time view.",
      link: "/solutions/customer-intelligence/customer-data-platform"
    },
    {
      title: "Behavioral Segmentation",
      description: "Group customers based on their actions and behaviors to tailor marketing and product strategies.",
      link: "/solutions/customer-intelligence/behavioral-segmentation"
    },
    {
      title: "AI-Powered Recommendations",
      description: "Deliver personalized product and content recommendations that drive engagement and sales.",
      link: "/solutions/customer-intelligence/ai-powered-recommendations"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#051C2C] selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Predictive Analytics & Modeling" 
        description="Deploy advanced predictive models that forecast customer behavior, identify churn risk, and uncover growth opportunities before they emerge."
        canonical="/solutions/customer-intelligence/predictive-analytics-modeling"
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
              Predictive Analytics & Modeling
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-2xl mb-6 sm:mb-10">
              Deploy advanced predictive models that forecast customer behavior, identify churn risk, and uncover growth opportunities before they emerge.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link href="/contact">
                <Button className="bg-white hover:bg-gray-200 text-black px-8 py-6 text-base font-semibold transition-all">
                  Request a Consultation
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
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/BhXmAnqAVEBkUAEb.jpg" 
              alt="Predictive Analytics & Modeling Visualization" 
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
            <h2 className="text-2xl eb-garamond font-bold text-[#051C2C]">Our Experience & Impact</h2>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { metric: "92%", label: "Model accuracy in churn prediction" },
              { metric: "35%", label: "Increase in customer lifetime value" },
              { metric: "50+", label: "Predictive models deployed across industries" }
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
              In today's competitive landscape, reacting to customer behavior is no longer enough. The ability to anticipate future actions, needs, and risks is the new frontier of competitive advantage. Predictive analytics and modeling transforms your historical customer data into a powerful tool for foresight, enabling you to move from a reactive to a proactive engagement strategy.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-[#051C2C]/80 leading-relaxed"
            >
              We leverage sophisticated machine learning algorithms to build custom models that address your most critical business questions. By analyzing patterns in your data, we can forecast which customers are likely to churn, identify high-potential leads, predict lifetime value, and recommend the next best action. This isn't about gazing into a crystal ball; it's about applying rigorous data science to unlock the predictive power hidden within your own data assets.
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
              Our Predictive Modeling Capabilities
            </h2>
            <p className="text-xl text-[#051C2C]/60 max-w-2xl">
              From model development to deployment and monitoring, we offer end-to-end predictive solutions.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: "Churn Prediction Modeling",
                description: "Identify customers at high risk of churning and develop proactive retention strategies to keep them engaged and loyal."
              },
              {
                title: "Customer Lifetime Value (CLV) Forecasting",
                description: "Predict the total revenue a customer will generate over their entire relationship with your brand, enabling smarter acquisition and retention investments."
              },
              {
                title: "Lead Scoring & Conversion Propensity",
                description: "Score and prioritize leads based on their likelihood to convert, allowing your sales team to focus their efforts on the most promising opportunities."
              },
              {
                title: "Next Best Action/Offer Recommendation",
                description: "Determine the optimal action or offer for each individual customer at any given moment to maximize engagement and conversion rates."
              },
              {
                title: "Demand Forecasting",
                description: "Anticipate future product demand and sales trends with high accuracy, optimizing inventory, staffing, and resource allocation."
              },
              {
                title: "Model Deployment & MLOps",
                description: "Integrate predictive models seamlessly into your existing business processes and systems, ensuring they deliver continuous, automated value."
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
                      Explore Capability <ArrowRight className="ml-1 w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-[#051C2C] text-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold mb-4">Our Approach to Predictive Success</h2>
            <p className="text-lg text-white/60 max-w-3xl mx-auto">We follow a rigorous, three-step methodology to ensure our predictive models are not only accurate but also actionable and aligned with your business goals.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
            {[
              {
                step: "01",
                title: "Business Understanding & Data Exploration",
                description: "We begin by defining the business problem and success criteria. Then, we dive deep into your data to assess its quality, identify relevant features, and formulate initial hypotheses."
              },
              {
                step: "02",
                title: "Model Development & Validation",
                description: "Using the prepared data, we train, test, and validate multiple machine learning models. We select the best-performing model based on accuracy, interpretability, and business relevance."
              },
              {
                step: "03",
                title: "Deployment & Performance Monitoring",
                description: "The validated model is deployed into your production environment. We establish automated monitoring to track its performance and ensure it continues to deliver value as data evolves."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="text-center"
              >
                <div className="text-6xl font-serif font-bold text-[#00d4ff] mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/60">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-[#051C2C] text-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold">Case Studies</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            {[
              {
                industry: "E-commerce",
                headline: "Reducing Customer Churn by 25% for an Online Retailer"
              },
              {
                industry: "Financial Services",
                headline: "Increasing Loan Application Conversion by 40% with Propensity Modeling"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-[#0F2A3F] p-8 rounded-lg"
              >
                <div className="text-sm font-bold uppercase tracking-widest text-[#00d4ff] mb-4">{item.industry}</div>
                <h3 className="text-2xl font-bold leading-snug">{item.headline}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 border-t border-gray-200">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl eb-garamond font-bold text-center">Explore Related Capabilities</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {relatedCapabilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={item.link}>
                  <a className="block h-full p-8 bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <h3 className="text-xl font-bold text-[#051C2C] mb-3">{item.title}</h3>
                    <p className="text-[#051C2C]/60 mb-4">{item.description}</p>
                    <span className="font-semibold text-[#0077B5] flex items-center">Learn More <ArrowRight className="ml-2 w-4 h-4" /></span>
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
            <h2 className="text-3xl sm:text-4xl eb-garamond font-bold mb-4">Ready to Predict Your Future Success?</h2>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Let's discuss how our predictive analytics and modeling services can help you anticipate customer needs, mitigate risks, and seize growth opportunities. 
            </p>
            <Link href="/contact">
              <Button className="bg-white hover:bg-gray-200 text-[#051C2C] px-10 py-7 text-lg font-semibold transition-all">
                Schedule a Free Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
