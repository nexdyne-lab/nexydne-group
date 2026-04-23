import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Play } from "lucide-react";

interface CaseStudy {
  id: number;
  industry: string;
  company: string;
  title: string;
  description: string;
  image: string;
  hasVideo?: boolean;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    industry: "Financial Services",
    company: "Regional Bank",
    title: "AI-Powered Migration Modernizes 30-Year-Old Core Banking System",
    description: "A regional bank used AI to analyze and migrate millions of lines of legacy COBOL code, reducing modernization time by 60% while maintaining business continuity.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=600&fit=crop"
  },
  {
    id: 2,
    industry: "Manufacturing",
    company: "Industrial Manufacturer",
    title: "Intelligent Integration Connects Legacy ERP to Modern Analytics",
    description: "A manufacturer deployed AI-powered middleware to extract insights from legacy systems without costly replacements, enabling real-time visibility across operations.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    hasVideo: true
  },
  {
    id: 3,
    industry: "Healthcare",
    company: "Hospital Network",
    title: "Legacy EMR Enhancement Improves Clinical Workflows",
    description: "A hospital network layered AI capabilities on top of their existing EMR system, adding intelligent search and clinical decision support without system replacement.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop"
  },
  {
    id: 4,
    industry: "Insurance",
    company: "Insurance Company",
    title: "Automated Documentation Accelerates Legacy System Understanding",
    description: "An insurance company used AI to reverse-engineer undocumented legacy systems, creating comprehensive documentation that enabled faster modernization decisions.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
    hasVideo: true
  }
];

const insights = [
  {
    category: "Technology",
    title: "The CIO's Playbook for Legacy Modernization",
    description: "Strategic approaches to modernizing legacy systems without disrupting business operations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
  },
  {
    category: "AI, Insights, and Solutions",
    title: "How AI Is Transforming Legacy Code Migration",
    description: "New tools and techniques that make modernization faster, safer, and more cost-effective.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop"
  },
  {
    category: "Digital",
    title: "Wrap, Extend, or Replace: Choosing Your Modernization Path",
    description: "A framework for deciding the right approach for each legacy system in your portfolio.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
  }
];

export default function ModernizeLegacy() {
  return (
    <div className="min-h-screen bg-white text-charcoal font-sans">
      <SEO 
        title="Modernize Legacy Systems with AI | AI Solutions" 
        description="See how leading companies are using AI to modernize legacy systems, enabling digital transformation without costly replacements."
        canonical="/capabilities/artificial-intelligence/modernize-legacy"
      />
      <Navigation />

      {/* Hero Banner */}
      <section className="relative w-full pt-20">
        <div className="relative h-[350px] md:h-[400px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-destructive via-destructive to-base">
            <div className="absolute inset-0 opacity-30">
              <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                <path d="M0,200 Q300,100 600,200 T1200,200" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2"/>
              </svg>
            </div>
          </div>

          <div className="relative z-10 container h-full flex flex-col justify-center px-6 md:px-12">
            <Link href="/capabilities/artificial-intelligence">
              <span className="inline-flex items-center text-white/80 hover:text-white text-sm mb-6 cursor-pointer transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Artificial Intelligence
              </span>
            </Link>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight"
            >
              Modernize legacy systems with AI
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-white/90 mt-4 max-w-2xl"
            >
              See how leading companies are transforming technical debt into competitive advantage.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[16/10] overflow-hidden mb-5">
                  <img src={study.image} alt={study.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  {study.hasVideo && (
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                      <Play className="w-5 h-5 text-destructive fill-current ml-1" />
                    </div>
                  )}
                </div>
                <div>
                  <span className="text-destructive text-sm font-medium">{study.industry}</span>
                  <h3 className="text-xl md:text-2xl font-bold text-charcoal mt-2 mb-3 leading-tight group-hover:text-destructive transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{study.description}</p>
                  <span className="text-sm text-muted-foreground">{study.company}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Our AI Consulting Services Banner */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-base via-base to-base">
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1200 300" preserveAspectRatio="xMidYMid slice">
              <path d="M0,150 Q300,50 600,150 T1200,150" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2"/>
            </svg>
          </div>
        </div>
        <div className="relative z-10 container px-6 md:px-12">
          <Link href="/capabilities/artificial-intelligence">
            <span className="inline-flex items-center text-white text-xl md:text-2xl font-medium cursor-pointer group">
              Our AI Consulting Services
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
            </span>
          </Link>
        </div>
      </section>

      {/* Our Latest AI Insights */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-6 md:px-12">
          <div className="flex items-center justify-center mb-12">
            <div className="flex-1 h-px bg-muted"></div>
            <h2 className="px-8 text-2xl md:text-3xl font-bold text-charcoal">
              Our Latest AI Insights
            </h2>
            <div className="flex-1 h-px bg-muted"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <motion.article key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden mb-4">
                  <img src={insight.image} alt={insight.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <span className="text-destructive text-sm font-medium">{insight.category}</span>
                <h3 className="text-lg font-bold text-charcoal mt-2 mb-2 leading-tight group-hover:text-destructive transition-colors">{insight.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{insight.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-subtle">
        <div className="container px-6 md:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
            Ready to modernize your legacy systems?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how AI can help you unlock value from existing systems while preparing for the future.
          </p>
          <Link href="/contact">
            <span className="inline-flex items-center px-8 py-4 bg-destructive text-white font-semibold rounded hover:bg-destructive transition-colors cursor-pointer">
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
