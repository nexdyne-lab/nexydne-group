import { motion } from "framer-motion";
import { ArrowRight, Award, TrendingUp, Users, FileCheck, BarChart, Shield, CheckCircle2, Target, Layers } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { RelatedContent } from "@/components/RelatedContent";

export default function QualityManagement() {
  return (
    <div className="min-h-screen bg-[#051C2C] font-sans text-white selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Quality Management Systems" 
        description="Build a culture of quality that exceeds customer expectations. Implement systematic quality controls and continuous improvement methodologies."
        canonical="/capabilities/operations/quality-management"
      />
      <Navbar />
      
      {/* DZ10 Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-[60vh] sm:min-h-[55vh] sm:min-h-[65vh] md:min-h-[55vh] sm:min-h-[65vh] md:min-h-[70vh] md:min-h-[60vh] sm:min-h-[55vh] sm:min-h-[65vh] md:min-h-[70vh] md:min-h-[75vh] md:min-h-[70vh] sm:min-h-[60vh] sm:min-h-[55vh] sm:min-h-[65vh] md:min-h-[70vh] md:min-h-[75vh] md:min-h-[85vh] flex items-center pt-16 sm:pt-16 sm:pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80"
            alt="Quality Management Systems" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#051C2C] via-[#051C2C]/80 to-[#051C2C]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051C2C] via-transparent to-transparent" />
        </div>
        
        <div className="container px-4 sm:px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
              Operations / Quality
            </span>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold tracking-tight text-white leading-[1.05] mb-5 sm:mb-3 md:mb-4">
              Quality Management <br />
              <span className="text-[#0077B5]">Systems</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-2xl mb-10">
              Build a culture of quality that exceeds customer expectations. We implement systematic quality controls, compliance frameworks, and continuous improvement methodologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/contact">
                <Button className="bg-[#0077B5] hover:bg-[#005a8c] text-white px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-base font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#0077B5]/20">
                  Discuss Quality Excellence
                </Button>
              </Link>
              <Link href="/cases">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-base font-semibold transition-all duration-300 bg-transparent hover:scale-[1.02]">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DZ10 Philosophy Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white text-[#051C2C]">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-8 sm:gap-6 sm:p-6 sm:p-8 md:p-12 lg:gap-8 sm:gap-6 sm:p-8 md:p-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#0077B5] mb-4 sm:mb-6 block">
                The Challenge
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight mb-5 sm:mb-6 md:mb-8">
                Build excellence into <br />
                <span className="text-[#0077B5]">every process.</span>
              </h2>
              
              <div className="space-y-6 text-lg text-[#051C2C]/70 leading-relaxed">
                <p>
                  Quality isn't just about catching defects—it's about building systems that prevent them. Organizations that embed quality into their DNA consistently outperform competitors in customer satisfaction, cost efficiency, and market reputation.
                </p>
                <p>
                  NexDyne brings <strong className="text-[#051C2C] font-semibold">systematic quality management expertise</strong> that transforms how organizations design, deliver, and improve their products and services. From ISO certification to Six Sigma implementation, we build frameworks that drive excellence.
                </p>
              </div>

              <div className="pt-8 grid grid-cols-2 gap-4 sm:p-5 md:p-6">
                <div className="p-4 sm:p-5 md:p-6 bg-[#051C2C]/5 rounded-lg sm:rounded-xl">
                  <div className="text-4xl font-serif font-bold text-[#0077B5] mb-2">25-40%</div>
                  <p className="text-sm text-[#051C2C]/60 uppercase tracking-wider">Customer Satisfaction Improvement</p>
                </div>
                <div className="p-4 sm:p-5 md:p-6 bg-[#051C2C]/5 rounded-lg sm:rounded-xl">
                  <div className="text-4xl font-serif font-bold text-[#0077B5] mb-2">30-50%</div>
                  <p className="text-sm text-[#051C2C]/60 uppercase tracking-wider">Quality Cost Reduction</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="p-4 sm:p-6 md:p-8 bg-[#051C2C]/5 rounded-lg sm:rounded-xl">
                <div className="text-4xl font-serif font-bold text-[#0077B5] mb-2">60-80%</div>
                <div className="text-sm text-[#051C2C]/60">Defect reduction</div>
              </div>
              <div className="p-4 sm:p-6 md:p-8 bg-[#051C2C]/5 rounded-lg sm:rounded-xl">
                <div className="text-4xl font-serif font-bold text-[#0077B5] mb-2">100%</div>
                <div className="text-sm text-[#051C2C]/60">Compliance achievement</div>
              </div>
              <div className="col-span-2 relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-xl sm:shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80" 
                  alt="Quality Excellence" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051C2C] via-transparent to-transparent opacity-60" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DZ10 Offerings Grid */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-[#051C2C]">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
              Our Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              Comprehensive quality solutions
            </h2>
            <p className="text-xl text-white/60 max-w-2xl">
              End-to-end quality management capabilities to embed excellence across your organization.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 sm:p-6 md:p-8 lg:gap-5 sm:p-7 md:p-5 sm:p-7 md:p-10">
            {[
              {
                icon: <FileCheck className="w-7 h-7" />,
                title: "Quality System Design",
                description: "Build comprehensive QMS frameworks including procedures, work instructions, and documentation that meet ISO 9001 and industry standards."
              },
              {
                icon: <BarChart className="w-7 h-7" />,
                title: "Statistical Process Control",
                description: "Implement SPC, control charts, and capability analysis to monitor process performance and detect variations before they become defects."
              },
              {
                icon: <Users className="w-7 h-7" />,
                title: "Continuous Improvement Culture",
                description: "Deploy Lean Six Sigma methodologies, root cause analysis, and corrective action systems that engage teams in ongoing quality improvement."
              },
              {
                icon: <Shield className="w-7 h-7" />,
                title: "Compliance & Certification",
                description: "Achieve and maintain ISO, industry, and regulatory compliance with systematic documentation and audit-ready processes."
              },
              {
                icon: <Target className="w-7 h-7" />,
                title: "Supplier Quality Management",
                description: "Establish supplier qualification, monitoring, and development programs that ensure quality throughout your supply chain."
              },
              {
                icon: <Award className="w-7 h-7" />,
                title: "Quality Training & Culture",
                description: "Build quality awareness and capability across your organization through targeted training and cultural transformation programs."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full flex flex-col">
                  <div className="mb-6 p-3 bg-white/5 w-fit rounded-lg text-[#0077B5] group-hover:bg-[#0077B5] group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  
                  <h3 className="text-xl font-serif font-bold text-white mb-4 group-hover:text-[#0077B5] transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-white/60 leading-relaxed text-sm flex-grow">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DZ10 Methodology Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white text-[#051C2C]">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 sm:gap-6 sm:p-6 sm:p-8 md:p-12 lg:gap-8 sm:gap-6 sm:p-8 md:p-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#0077B5] mb-4 sm:mb-6 block">
                Our Approach
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
                The NexDyne <span className="text-[#0077B5]">Methodology</span>
              </h2>
              <p className="text-lg text-[#051C2C]/70 leading-relaxed mb-5 sm:mb-6 md:mb-8">
                We design quality management systems that embed excellence into your operations. From ISO certification to Six Sigma implementation, we build frameworks that prevent defects, ensure compliance, and drive continuous improvement.
              </p>
              
              <div className="space-y-6">
                {[
                  { num: "01", title: "Assess", desc: "Evaluate current quality practices, identify gaps, and benchmark against industry standards." },
                  { num: "02", title: "Design", desc: "Develop tailored QMS frameworks, procedures, and metrics aligned with your business objectives." },
                  { num: "03", title: "Implement", desc: "Deploy quality systems with training, change management, and technology enablement." },
                  { num: "04", title: "Sustain", desc: "Establish governance, auditing, and continuous improvement processes for lasting excellence." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="text-2xl font-serif font-bold text-[#0077B5]">{item.num}</div>
                    <div>
                      <h3 className="text-lg font-bold text-[#051C2C] mb-1">{item.title}</h3>
                      <p className="text-[#051C2C]/60 text-sm">{item.desc}</p>
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
              className="relative"
            >
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-xl sm:shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80" 
                  alt="Quality Methodology" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051C2C] via-transparent to-transparent opacity-60" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DZ10 Case Studies Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-[#051C2C]">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 md:mb-16 gap-4 sm:p-5 md:p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
                Our Impact
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white">
                Quality transformations
              </h2>
            </motion.div>
            <Link href="/cases">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent transition-all duration-300 hover:scale-[1.02]">
                View all case studies
              </Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 sm:p-6 md:p-8 lg:gap-5 sm:p-7 md:p-5 sm:p-7 md:p-10">
            {[
              {
                title: "Manufacturer achieves ISO 9001 certification in 6 months",
                category: "Certification",
                image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80"
              },
              {
                title: "Six Sigma program reduces defects by 75%",
                category: "Process Improvement",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
              },
              {
                title: "Healthcare provider improves patient satisfaction by 35%",
                category: "Service Quality",
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&q=80"
              }
            ].map((study, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg sm:rounded-xl aspect-[4/3] mb-6">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="text-[#0077B5] text-xs font-bold uppercase tracking-[0.15em] mb-3">{study.category}</div>
                <h3 className="text-xl font-serif font-bold text-white mb-4 group-hover:text-[#0077B5] transition-colors leading-tight">
                  {study.title}
                </h3>
                <div className="flex items-center text-white text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Read case study <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DZ10 Why NexDyne Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white text-[#051C2C]">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#0077B5] mb-4 sm:mb-6 block">
              Why NexDyne
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#051C2C] mb-6">
              The quality partner <br />you've been looking for
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:p-6 md:p-8">
            {[
              { metric: "100+", label: "QMS Implementations" },
              { metric: "95%", label: "First-Time Certification Rate" },
              { metric: "40%", label: "Average Defect Reduction" },
              { metric: "20+", label: "Industries Served" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-4 sm:p-6 md:p-8 bg-[#051C2C]/5 rounded-lg sm:rounded-xl"
              >
                <div className="text-5xl font-serif font-bold text-[#0077B5] mb-2">{item.metric}</div>
                <p className="text-sm text-[#051C2C]/60 uppercase tracking-wider">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <RelatedContent 
        items={[
          {
            title: "The Complete Guide to Process Mining",
            category: "Operations",
            link: "/insights/complete-guide-process-mining",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
          },
          {
            title: "Building a Culture of Continuous Improvement",
            category: "Quality",
            link: "/insights/continuous-improvement-culture",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
          },
          {
            title: "ISO Certification: A Strategic Advantage",
            category: "Compliance",
            link: "/insights/iso-certification-advantage",
            image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80"
          }
        ]}
      />

      <Footer />
    </div>
  );
}
