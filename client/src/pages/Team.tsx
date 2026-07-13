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
      bio: "Sarah leads NexDyne's automation practice, specializing in intelligent process automation for professional services and financial services firms. She has helped over 50 growing companies deploy automation solutions that deliver measurable ROI."
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
    <div className="min-h-screen bg-white font-sans text-charcoal">
      <SEO 
        title="Leadership Team | NexDyne Consulting Group" 
        description="Meet the leaders and experts who drive transformation for our clients. Our team combines deep technical expertise with practical business experience."
        canonical="/about/team"
      />
      <Navigation />
      
      {/* Hero Section - Neutral-first */}
      <section className="relative w-full bg-background overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(70% 60% at 82% 14%, rgba(224,76,44,0.05) 0%, transparent 55%), radial-gradient(55% 55% at 6% 95%, rgba(111,68,163,0.045) 0%, transparent 55%)" }} />
        <div className="relative mx-auto max-w-[1400px] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="flex flex-col justify-center min-h-[52vh] py-24 lg:py-28">
            <div className="max-w-[920px]">
              <div className="flex items-center gap-3 mb-6"><span className="block h-[3px] w-9 bg-primary" /><span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">OUR TEAM</span></div>
              <h1 className="text-charcoal font-bold tracking-[-0.035em] leading-[1.0] text-[clamp(2.4rem,5.4vw,4.2rem)]">Our People</h1>
              <p className="mt-7 text-[1.1rem] md:text-[1.2rem] leading-[1.55] text-muted-foreground max-w-[60ch]">Meet the leaders and experts who drive transformation for our clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 md:py-28 bg-white border-b border-border/50">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight mb-6">
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
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our philosophy is simple: deliver cutting-edge technologies with customer-centric solutions, and back every 
                  partnership with hands-on expertise. We don't oversell or overcomplicate—we build systems that work from day one.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Earning your trust through proven results and transparent communication is our top priority. Every engagement 
                  is an opportunity to demonstrate the transformative power of intelligent automation.
                </p>
                <Link href="/case-studies">
                  <a className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-[gap]">
                    See Our Work <ArrowRight className="w-4 h-4" />
                  </a>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 md:py-28 bg-subtle">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
              Meet our consultants
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                  <a className="block group bg-white h-full overflow-hidden hover:shadow-xl transition duration-300">
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
                      <h3 className="text-xl font-bold text-charcoal mb-1 group-hover:text-primary-hover transition-colors">
                        {consultant.name}
                      </h3>
                      <p className="text-sm font-semibold text-primary mb-2">
                        {consultant.title}
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">
                        {consultant.location}
                      </p>
                      
                      {/* Expertise Tags */}
                      <div className="flex flex-wrap gap-2">
                        {consultant.expertise.slice(0, 2).map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-3 py-1 text-xs font-medium bg-subtle text-muted-foreground rounded"
                          >
                            {skill}
                          </span>
                        ))}
                        {consultant.expertise.length > 2 && (
                          <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded">
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
      <section className="py-20 md:py-28 bg-charcoal text-white border-t-2 border-primary">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
                Ready to transform your business?
              </h2>
              <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                Schedule a complimentary consultation with our team to explore how automation can deliver 
                measurable results for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <a className="inline-flex items-center justify-center px-8 py-4 bg-white text-base font-semibold rounded hover:bg-subtle transition-colors">
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
