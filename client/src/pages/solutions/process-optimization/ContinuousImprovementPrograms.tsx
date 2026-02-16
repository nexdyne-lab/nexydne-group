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

export default function ContinuousImprovementPrograms() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Related capabilities data
  const relatedCapabilities = [
    {
      title: "Process Discovery & Mining",
      description: "Identify and visualize process inefficiencies to target high-impact improvement areas.",
      link: "/solutions/process-optimization/process-discovery-mining"
    },
    {
      title: "Workflow Optimization",
      description: "Redesign workflows for maximum efficiency, agility, and resilience.",
      link: "/solutions/process-optimization/workflow-optimization"
    },
    {
      title: "Change Management & Training",
      description: "Ensure successful adoption of new processes and a culture that embraces change.",
      link: "/solutions/process-optimization/change-management-training"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#051C2C] selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Continuous Improvement Programs" 
        description="Establish frameworks for ongoing optimization, measurement, and iteration to sustain and extend initial gains."
        canonical="/solutions/process-optimization/continuous-improvement-programs"
      />
      <Navigation />

      {/* Section 1: Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center pt-16 sm:pt-20 bg-black">
        <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{backgroundImage: "url('https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/QXONPeQjlAtSsozi.jpg')"}}></div>
        <div className="absolute inset-0 w-full h-full bg-black/60"></div>
        <div className="relative container px-4 sm:px-6 md:px-12 grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Breadcrumbs variant="light" />
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl eb-garamond font-bold tracking-tight text-white leading-[1.05] mb-3 sm:mb-4">
              Continuous Improvement Programs
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-2xl mb-6 sm:mb-10">
              Establish frameworks for ongoing optimization, measurement, and iteration to sustain and extend initial gains.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link href="/contact">
                <Button className="bg-white hover:bg-gray-200 text-black px-8 py-6 text-base font-semibold transition-all">
                  Request a Consultation
                </Button>
              </Link>
              <Link href="/cases">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold transition-all bg-transparent">
                  Explore Our Impact
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Our Experience & Impact */}
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
              { metric: "30%", label: "Average year-over-year efficiency gain" },
              { metric: "50%", label: "Reduction in process variance" },
              { metric: "95%", label: "Adoption of new best practices" }
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

      {/* Section 3: Thought Leadership Paragraphs */}
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
              Initial transformation efforts deliver impressive results, but the true challenge lies in sustaining momentum. Continuous Improvement is not a project with an end date; it is a cultural shift that embeds excellence into the organizational DNA, ensuring that performance gains are not only preserved but compounded over time.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-[#051C2C]/80 leading-relaxed"
            >
              A successful program requires a robust framework of measurement, governance, and feedback. By establishing clear KPIs and performance dashboards, organizations can track progress against benchmarks, identify deviations, and empower teams to solve problems at the source. This data-driven approach transforms improvement from an abstract goal into a manageable, everyday practice.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-[#051C2C]/80 leading-relaxed"
            >
              Ultimately, sustainable improvement is about people. It involves fostering a mindset of curiosity, empowering employees with the skills to identify and act on opportunities, and celebrating the pursuit of excellence. We help clients build these self-sustaining systems where every team member is an agent of positive change.
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
              Our Continuous Improvement Capabilities
            </h2>
            <p className="text-xl text-[#051C2C]/60 max-w-2xl">
              From targeted interventions to enterprise-wide cultural transformation, we provide the framework for sustained excellence.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: "Performance Measurement & KPI Design",
                description: "Develop meaningful KPIs and balanced scorecards that align with strategic objectives and provide a clear view of operational health."
              },
              {
                title: "Root Cause Analysis & Problem Solving",
                description: "Equip teams with structured problem-solving methodologies (like 5 Whys and Fishbone Diagrams) to address the source of issues, not just the symptoms."
              },
              {
                title: "Lean & Six Sigma Integration",
                description: "Deploy proven methodologies to eliminate waste, reduce process variation, and enhance value delivery across the enterprise."
              },
              {
                title: "Governance & Program Management",
                description: "Establish a central improvement office (CIO) or governance body to prioritize initiatives, allocate resources, and ensure accountability."
              },
              {
                title: "Change Adoption & Cultural Integration",
                description: "Implement communication strategies, training programs, and incentive systems that foster a culture where continuous improvement is everyone’s responsibility."
              },
              {
                title: "Technology-Enabled Improvement",
                description: "Leverage digital tools for process monitoring, idea management, and performance analytics to accelerate the improvement cycle."
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
      <section className="py-20 bg-[#051C2C]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00d4ff] mb-4 block">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-5xl eb-garamond font-light text-white">
              Embedding Improvement into Your Operations
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "1. Baseline & Benchmark",
                description: "We begin by establishing a clear performance baseline and benchmarking against industry best practices to identify the most significant improvement opportunities and set ambitious but achievable targets."
              },
              {
                title: "2. Implement & Measure",
                description: "We co-develop and pilot improvement initiatives, implementing robust tracking mechanisms to measure impact in real-time. This data-driven feedback loop allows for rapid iteration and course correction."
              },
              {
                title: "3. Sustain & Scale",
                description: "We focus on building internal capabilities through training and mentorship, establishing governance structures, and embedding new ways of working to ensure the improvement culture persists and scales across the organization."
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
                <p className="text-gray-300 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 bg-transparent">
                Discuss Your Program
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: Case Studies */}
      <section className="py-24 bg-[#051C2C]">
        <div className="container px-4 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-4 block">
                Client Results
              </span>
              <h2 className="text-3xl md:text-4xl eb-garamond font-bold text-white">
                See how we build sustainable results.
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
                title: "Sustaining Lean Transformation in Manufacturing",
                category: "Industrial Goods",
                description: "Established a Kaizen program for a leading automotive supplier, empowering shop-floor teams to drive a 15% annual productivity increase for three consecutive years.",
                image: "https://images.unsplash.com/photo-1600180730518-3f1854a43493?q=80&w=2070&auto=format&fit=crop",
                link: "/cases/manufacturing-lean-transformation"
              },
              {
                title: "Building a Culture of Continuous Improvement in Financial Services",
                category: "Financial Services",
                description: "Designed and implemented a firm-wide improvement framework for a retail bank, reducing customer onboarding time by 40% and improving employee engagement scores by 25%.",
                image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=2070&auto=format&fit=crop",
                link: "/cases/financial-services-improvement-culture"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-[#051C2C] via-[#051C2C]/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8">
                      <span className="text-xs font-bold text-[#0077B5] mb-3 uppercase tracking-wider block">{study.category}</span>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#0077B5] transition-colors">
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

      {/* Section 7: Related Capabilities */}
      <section className="py-24 bg-[#f8f8f7]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-4 block">
              Related Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl eb-garamond font-bold text-[#051C2C]
">
              Explore our Process Optimization services
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

      {/* Section 8: CTA Section */}
      <section className="py-24 bg-[#0077B5]">
        <div className="container px-4 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl eb-garamond font-bold text-white mb-6">
              Ready to build a culture of continuous improvement?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Let's discuss how a structured improvement program can create lasting value for your organization.
            </p>
            <Link href="/contact">
              <Button className="bg-white hover:bg-gray-100 text-[#0077B5] px-10 py-6 text-lg font-semibold">
                Start the Conversation <ArrowRight className="ml-2 w-5 h-5 inline" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
