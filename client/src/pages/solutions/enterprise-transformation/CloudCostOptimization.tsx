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

export default function CloudCostOptimization() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const relatedCapabilities = [
    {
      title: "Cloud Migration & Architecture",
      description: "Design and execute seamless, secure, and cost-effective migrations to the cloud.",
      link: "/solutions/enterprise-transformation/cloud-migration-architecture"
    },
    {
      title: "Infrastructure Modernization",
      description: "Modernize your legacy infrastructure to improve agility, performance, and scalability.",
      link: "/solutions/enterprise-transformation/infrastructure-modernization"
    },
    {
      title: "Platform Engineering",
      description: "Build and manage scalable, resilient, and secure platforms to accelerate application delivery.",
      link: "/solutions/enterprise-transformation/platform-engineering"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#051C2C] selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Cloud Cost Optimization" 
        description="Reduce cloud spend by 30-50% through FinOps practices, right-sizing, reserved capacity planning, and automated cost governance."
        canonical="/solutions/enterprise-transformation/cloud-cost-optimization"
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
              Cloud Cost Optimization
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-2xl mb-6 sm:mb-10">
              Reduce cloud spend by 30-50% through FinOps practices, right-sizing, reserved capacity planning, and automated cost governance.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link href="/contact">
                <Button className="bg-white hover:bg-gray-200 text-black px-8 py-6 text-base font-semibold transition-all">
                  Request a Cost Analysis
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
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/CHPfIqjnLJtWCsFF.jpg" 
              alt="Cloud Cost Optimization Visualization" 
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
            <h2 className="text-2xl font-bold text-[#051C2C]">Our Experience & Impact</h2>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { metric: "30-50%", label: "Reduction in cloud spend" },
              { metric: "80%", label: "Improvement in resource utilization" },
              { metric: "12 months", label: "Typical timeframe for full ROI" }
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
              The cloud offers unparalleled agility, but its pay-as-you-go model can lead to spiraling costs if not managed with discipline. Many organizations find their cloud spend growing unpredictably, hampered by oversized resources, idle instances, and a lack of financial governance. Effective Cloud Cost Optimization, or FinOps, is not about cutting back on innovation; it's about instilling a culture of financial accountability and maximizing the economic value of every dollar spent in the cloud.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-[#051C2C]/80 leading-relaxed"
            >
              We approach cloud cost management as a continuous, data-driven cycle. By integrating financial and operational data, we provide clear visibility into where your money is going. This allows us to implement a multi-faceted strategy encompassing right-sizing instances, leveraging reserved capacity and savings plans, automating cost-control policies, and architecting for cost-efficiency from the ground up. The goal is to transform your cloud budget from a reactive operational expense into a predictable, strategic investment.
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
              Our FinOps Capabilities
            </h2>
            <p className="text-xl text-[#051C2C]/60 max-w-2xl">
              From strategic advice to hands-on implementation, we provide a comprehensive suite of services.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: "FinOps Program Development",
                description: "Establish a cross-functional FinOps practice to manage cloud value, integrating teams from finance, engineering, and operations."
              },
              {
                title: "Cloud Spend Visibility & Analysis",
                description: "Implement advanced tooling to provide granular visibility into your cloud consumption and identify key cost drivers."
              },
              {
                title: "Resource Right-Sizing & Modernization",
                description: "Analyze utilization patterns to safely downsize or terminate idle resources and modernize instance families for better price-performance."
              },
              {
                title: "Commitment & Discount Management",
                description: "Optimize the use of Reserved Instances (RIs) and Savings Plans to maximize discounts based on predictable usage patterns."
              },
              {
                title: "Automated Cost Governance",
                description: "Implement automated policies to enforce tagging standards, identify non-compliant resources, and prevent cost overruns in real-time."
              },
              {
                title: "Cost-Aware Architecture",
                description: "Re-architect applications for cost efficiency using serverless, containers, and auto-scaling to align infrastructure spend with actual demand."
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
              Our Approach to <span className="text-[#00d4ff]">Cloud Value</span>
            </h2>
            <p className="text-lg text-white/60 max-w-3xl mx-auto">
              We follow a structured methodology to ensure that cloud cost optimization delivers tangible business value, moving from data to insight to action.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
            {[
              {
                title: "1. Assess & Analyze",
                description: "We perform a deep analysis of your cloud environment, identifying key areas of waste, and establish a baseline for measuring improvement."
              },
              {
                title: "2. Optimize & Automate",
                description: "We implement a combination of right-sizing, commitment optimization, and automated governance policies to capture immediate savings."
              },
              {
                title: "3. Govern & Operate",
                description: "We help you establish a continuous FinOps practice, providing ongoing visibility, control, and a culture of cost accountability."
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
            Success Stories in Cloud FinOps
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative"
            >
              <Link href="/cases/saas-cost-reduction">
                <div className="relative overflow-hidden rounded-lg">
                  <img src="https://images.unsplash.com/photo-placeholder" alt="SaaS Platform Cost Reduction" className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/80">SaaS</span>
                  <h3 className="text-2xl font-serif font-bold text-white mt-2">Reducing Cloud Spend by 45% for a Growth-Stage SaaS Company</h3>
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
              <Link href="/cases/enterprise-finops-governance">
                <div className="relative overflow-hidden rounded-lg">
                  <img src="https://images.unsplash.com/photo-placeholder" alt="Enterprise FinOps Governance" className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/80">Enterprise</span>
                  <h3 className="text-2xl font-serif font-bold text-white mt-2">Establishing Centralized FinOps Governance for a Fortune 500</h3>
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
            Continue Your Transformation Journey
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {relatedCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <BainHoverCard title={capability.title} description={capability.description} link={capability.link} />
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
            Ready to Maximize Your Cloud ROI?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-8"
          >
            Let's talk about how our Cloud Cost Optimization services can drive financial accountability and unlock new value from your cloud investment. Schedule a complimentary consultation with our experts today.
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
