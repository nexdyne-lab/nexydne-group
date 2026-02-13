import { useState, useMemo } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Mail, Linkedin, ArrowRight } from 'lucide-react';

export default function Team() {
  const consultants = [
    {
      id: "sarah-mitchell",
      name: "Sarah Mitchell",
      title: "Principal Consultant",
      location: "New York",
      image: "/author-sarah-mitchell.caabf512.jpg",
      expertise: ["Intelligent Process Automation", "Professional Services", "Financial Services"],
      industries: ["Professional Services", "Financial Services", "Legal"],
      bio: "Sarah leads NexDyne's automation practice, specializing in intelligent process automation for professional services and financial services firms. She has helped over 50 mid-market companies deploy automation solutions that deliver measurable ROI."
    },
    {
      id: "david-richardson",
      name: "David Richardson",
      title: "Senior Consultant",
      location: "New York",
      image: "/author-male-2.afcf176d.jpg",
      expertise: ["Digital Transformation", "Legal Tech", "Document Automation"],
      industries: ["Legal", "Professional Services", "Healthcare"],
      bio: "David specializes in digital transformation for professional services firms, with deep expertise in legal tech, document automation, and AI-powered knowledge management systems."
    },
    {
      id: "jennifer-park",
      name: "Jennifer Park",
      title: "AI & Machine Learning Lead",
      location: "San Francisco",
      image: "/author-female-2.55e29921.jpg",
      expertise: ["Natural Language Processing", "Machine Learning", "Intelligent Automation"],
      industries: ["Technology", "Financial Services", "Healthcare"],
      bio: "Jennifer leads NexDyne's AI and machine learning practice, helping organizations leverage natural language processing and intelligent automation to transform operations."
    },
    {
      id: "michael-torres",
      name: "Michael Torres",
      title: "Digital Strategy Consultant",
      location: "Chicago",
      image: "/author-male-1.f0aef13a.jpg",
      expertise: ["Digital Transformation", "Change Management", "Process Optimization"],
      industries: ["Manufacturing", "Logistics", "Professional Services"],
      bio: "Michael specializes in helping mid-sized businesses navigate digital transformation journeys. With expertise in change management and process optimization, he ensures that technology implementations deliver lasting business value."
    },
    {
      id: "lisa-chen",
      name: "Lisa Chen",
      title: "ROI & Analytics Consultant",
      location: "Boston",
      image: "/author-female-1.d303b65c.jpg",
      expertise: ["ROI Measurement", "Business Analytics", "Performance Optimization"],
      industries: ["Financial Services", "Technology", "Professional Services"],
      bio: "Lisa focuses on measuring and optimizing the return on investment for automation and digital transformation projects. She develops custom analytics frameworks that help clients track performance and demonstrate value."
    },
    {
      id: "james-anderson",
      name: "James Anderson",
      title: "Healthcare Technology Consultant",
      location: "Atlanta",
      image: "/author-male-1.f0aef13a.jpg",
      expertise: ["Healthcare IT", "HIPAA Compliance", "Clinical Workflow Automation"],
      industries: ["Healthcare", "Life Sciences", "Medical Devices"],
      bio: "James specializes in healthcare technology solutions, helping hospitals, clinics, and healthcare organizations automate clinical and administrative workflows while maintaining strict compliance with HIPAA and other regulations."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#333]">
      <SEO 
        title="Leadership Team | NexDyne Consulting Group" 
        description="Meet the leaders and experts who drive transformation for our clients. Our team combines deep technical expertise with practical business experience."
        canonical="/about/team"
      />
      <Navigation />
      
      {/* Hero Section - Clean McKinsey Style */}
      <section className="relative min-h-[50vh] flex items-center pt-16 overflow-hidden bg-[#051c2c]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80" 
            alt="Team collaboration" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#051c2c] via-[#051c2c]/90 to-[#051c2c]/70" />
        </div>
        
        {/* Hero Content */}
        <div className="container px-4 sm:px-6 md:px-12 relative z-10 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-[#0052cc] text-sm font-bold uppercase tracking-widest mb-4">
              Our Team
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] mb-3">
              Our <span className="text-[#0052cc]">People</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl">
              Meet the leaders and experts who drive transformation for our clients
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-6">
                  Built on trust.<br />
                  Driven by results.
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our philosophy is simple: deliver cutting-edge technologies with customer-centric solutions, and back every 
                  partnership with hands-on expertise. We don't oversell or overcomplicate—we build systems that work from day one.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Earning your trust through proven results and transparent communication is our top priority. Every engagement 
                  is an opportunity to demonstrate the transformative power of intelligent automation.
                </p>
                <Link href="/case-studies">
                  <a className="inline-flex items-center gap-2 text-[#0052cc] font-semibold hover:gap-3 transition-all">
                    See Our Work <ArrowRight className="w-4 h-4" />
                  </a>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 md:py-28 bg-[#f5f5f5]">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-6">
              Meet our consultants
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our team combines deep technical expertise with practical business experience to deliver 
              automation solutions that create measurable value.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {consultants.map((consultant, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/team/${consultant.id}`}>
                  <a className="block group bg-white h-full overflow-hidden hover:shadow-xl transition-all duration-300">
                    {/* Image */}
                    <div className="aspect-[4/5] overflow-hidden">
                      <img 
                        src={consultant.image} 
                        alt={consultant.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-[#0052cc] transition-colors">
                        {consultant.name}
                      </h3>
                      <p className="text-sm font-semibold text-[#0052cc] mb-2">
                        {consultant.title}
                      </p>
                      <p className="text-sm text-gray-500 mb-4">
                        {consultant.location}
                      </p>
                      
                      {/* Expertise Tags */}
                      <div className="flex flex-wrap gap-2">
                        {consultant.expertise.slice(0, 2).map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded"
                          >
                            {skill}
                          </span>
                        ))}
                        {consultant.expertise.length > 2 && (
                          <span className="px-3 py-1 text-xs font-medium bg-[#0052cc]/10 text-[#0052cc] rounded">
                            +{consultant.expertise.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-[#051c2c] text-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">
                Ready to transform your business?
              </h2>
              <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                Schedule a complimentary consultation with our team to explore how automation can deliver 
                measurable results for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <a className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#051c2c] font-semibold rounded hover:bg-gray-100 transition-colors">
                    Schedule Consultation
                  </a>
                </Link>
                <Link href="/case-studies">
                  <a className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-semibold rounded hover:bg-white/10 transition-colors">
                    View Case Studies
                  </a>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
