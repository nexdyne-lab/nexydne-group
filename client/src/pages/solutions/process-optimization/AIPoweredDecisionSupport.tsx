import React, { useEffect } from "react";
import { useLocation, Link } from "wouter";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import BainHoverCard from "@/components/BainHoverCard";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function AIPoweredDecisionSupport() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Related capabilities data
  const relatedCapabilities = [
    {
      title: "Process Discovery & Mining",
      description: "Identify and visualize process inefficiencies to target high-impact automation opportunities.",
      link: "/solutions/process-optimization/process-discovery-mining"
    },
    {
      title: "Intelligent Automation Design",
      description: "Design and implement robust automation solutions that integrate with your existing systems.",
      link: "/solutions/process-optimization/intelligent-automation-design"
    },
    {
      title: "Workflow Optimization",
      description: "Streamline and re-engineer workflows to maximize efficiency and reduce operational costs.",
      link: "/solutions/process-optimization/workflow-optimization"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-charcoal selection:bg-primary selection:text-white">
      <SEO 
        title="AI-Powered Decision Support" 
        description="Deploy machine learning models that augment human decision-making with predictive insights and recommendations."
        canonical="/solutions/process-optimization/ai-powered-decision-support"
      />
      <Navigation />

      {/* Section 1: Hero Section - Dark Background (F100) */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center pt-16 sm:pt-20 bg-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Breadcrumbs variant="light" />
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl eb-garamond font-bold tracking-tight text-white leading-[1.05] mb-3 sm:mb-4">
              AI-Powered Decision Support
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-2xl mb-6 sm:mb-10">
              Deploy machine learning models that augment human decision-making with predictive insights and recommendations.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base font-semibold transition-colors duration-200 ease-in-out">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/cases">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold transition-colors duration-200 ease-in-out bg-transparent">
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
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/AkoLwKvIWfMzjgnS.jpg" 
              alt="AI-Powered Decision Support Visualization" 
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Section 2: Our Experience & Impact (F100) */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl eb-garamond font-bold text-charcoal">Our Experience & Impact</h2>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { metric: "40%", label: "Increase in forecast accuracy" },
              { metric: "25%", label: "Reduction in decision-making time" },
              { metric: "15%", label: "Improvement in operational efficiency" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-charcoal mb-2 sm:mb-3">{item.metric}</div>
                <p className="text-lg text-charcoal/60">{item.label}</p>
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
              className="text-xl text-charcoal/80 leading-relaxed"
            >
              In today's complex business environment, making the right decision at the right time is paramount. AI-powered decision support systems provide the critical insights needed to navigate uncertainty and capitalize on opportunities. By leveraging machine learning, we help you turn data into a strategic asset.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-charcoal/80 leading-relaxed"
            >
              These systems go beyond simple analytics. They provide predictive and prescriptive recommendations, enabling your teams to anticipate market shifts, optimize resource allocation, and mitigate risks before they escalate. It's about augmenting human intelligence, not replacing it.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-charcoal/80 leading-relaxed"
            >
              The key to effective decision support is a deep understanding of your business context. We work closely with your domain experts to build models that are not only accurate but also interpretable and aligned with your strategic goals. This ensures that the insights generated are both trusted and actionable.
            </motion.p>
          </div>
        </div>
      </section>

      {/* How We Can Help Section - AI-Powered Decision Support Capabilities */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
              How We Can Help
            </span>
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-charcoal mb-6">
              Our AI-Powered Decision Support Capabilities
            </h2>
            <p className="text-xl text-charcoal/60 max-w-2xl">
              From predictive modeling to real-time recommendation engines, we provide end-to-end support.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: "Predictive Analytics & Forecasting",
                description: "Develop models that forecast demand, predict customer churn, and identify potential operational failures before they occur."
              },
              {
                title: "Prescriptive Recommendation Engines",
                description: "Build systems that recommend the next best action for sales, marketing, and operational decisions, tailored to individual contexts."
              },
              {
                title: "Dynamic Pricing & Revenue Management",
                description: "Implement AI-driven pricing strategies that respond to market dynamics, competitor actions, and customer behavior in real-time."
              },
              {
                title: "Supply Chain & Inventory Optimization",
                description: "Use machine learning to optimize inventory levels, predict supply chain disruptions, and improve logistics planning."
              },
              {
                title: "Risk Modeling & Fraud Detection",
                description: "Deploy advanced models to identify and mitigate financial, operational, and cybersecurity risks in real-time."
              },
              {
                title: "Personalized Customer Experience",
                description: "Leverage AI to deliver personalized product recommendations, content, and support to enhance customer engagement and loyalty."
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

      {/* Section 4: Our Approach (3-Column Consulting Format) */}
      <section className="py-20 bg-base">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4 block">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-5xl eb-garamond font-light text-white">
              Integrating intelligence into your core processes
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Identify Critical Decision Points",
                description: "We map your key business processes to identify the most critical decision points where AI can deliver the highest value and impact."
              },
              {
                title: "Develop & Validate Models",
                description: "We build, train, and rigorously validate machine learning models using your data, ensuring they are accurate, robust, and aligned with your business objectives."
              },
              {
                title: "Integrate & Empower Teams",
                description: "We seamlessly integrate the models into your existing workflows and provide your teams with the training and tools to leverage these new capabilities effectively."
              }
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-xl font-bold text-white mb-4">{pillar.title}</h3>
                <p className="text-muted-foreground/50 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 bg-transparent">
                Get in touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5: Case Studies (F100) */}
      <section className="py-24 bg-base">
        <div className="container px-4 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">
                Client Results
              </span>
              <h2 className="text-3xl md:text-4xl eb-garamond font-bold text-white">
                See how AI-powered decision support drives growth.
              </h2>
            </motion.div>
            <Link href="/cases">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent">
                View all case studies
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Dynamic Pricing for a Global Retailer",
                category: "Retail",
                description: "Implemented a real-time pricing engine that increased gross margins by 8% while maintaining price competitiveness.",
                image: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f",
                link: "/cases/retail-dynamic-pricing"
              },
              {
                title: "Predictive Maintenance for a Manufacturing Firm",
                category: "Manufacturing",
                description: "Deployed a predictive maintenance solution that reduced equipment downtime by 30% and maintenance costs by 15%.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
                link: "/cases/manufacturing-predictive-maintenance"
              }
            ].map((study, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={study.link} className="group block">
                  <div className="relative h-[350px] rounded-lg overflow-hidden">
                    <img 
                      src={study.image}
                      alt={study.title} 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-base via-base/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8">
                      <span className="text-xs font-bold text-primary mb-3 uppercase tracking-wider block">{study.category}</span>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-white/70 line-clamp-2">{study.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Related Capabilities - H100 Hover */}
      <section className="py-24 bg-subtle">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">
              Related Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl eb-garamond font-bold text-charcoal">
              Explore more Intelligent Process Optimization solutions
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {relatedCapabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <BainHoverCard title={cap.title} description={cap.description} link={cap.link} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: CTA Section (F100 - Blue Background) */}
      <section className="py-24 bg-primary">
        <div className="container px-4 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl eb-garamond font-bold text-white mb-6">
              Ready to enhance your decision-making with AI?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Let's discuss how our AI-powered decision support solutions can drive growth and efficiency for your business.
            </p>
            <Link href="/contact">
              <Button className="bg-white hover:bg-white/90 text-primary px-10 py-6 text-lg font-semibold transition-colors duration-200 ease-in-out">
                Start a Conversation <ArrowRight className="ml-2 w-5 h-5 inline" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
