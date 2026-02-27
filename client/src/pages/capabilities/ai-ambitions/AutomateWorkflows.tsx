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
    company: "Regional Credit Union",
    title: "Automating Loan Processing to Cut Approval Time by 70%",
    description: "A mid-sized credit union transformed their manual loan approval process with intelligent document processing and automated decisioning, reducing approval times from days to hours.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop"
  },
  {
    id: 2,
    industry: "Healthcare",
    company: "Regional Health Network",
    title: "Streamlining Patient Intake with AI-Powered Forms",
    description: "A healthcare network automated their patient intake process, reducing administrative burden by 60% while improving data accuracy and patient satisfaction.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    hasVideo: true
  },
  {
    id: 3,
    industry: "Manufacturing",
    company: "Precision Parts Co.",
    title: "Intelligent Quality Control Reduces Defects by 45%",
    description: "A precision manufacturing company implemented AI-driven visual inspection, automating quality checks that previously required manual review of every component.",
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&h=600&fit=crop"
  },
  {
    id: 4,
    industry: "Professional Services",
    company: "Legal Associates LLP",
    title: "Document Review Automation Saves 2,000+ Hours Annually",
    description: "A law firm deployed intelligent document analysis to automate contract review, freeing attorneys to focus on high-value advisory work.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
    hasVideo: true
  }
];

const insights = [
  {
    category: "AI, Insights, and Solutions",
    title: "Five Ways to Identify Automation Opportunities in Your Business",
    description: "A practical framework for finding high-impact processes ripe for intelligent automation.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
  },
  {
    category: "Digital",
    title: "The ROI of Workflow Automation: What Leaders Need to Know",
    description: "Understanding the true cost savings and productivity gains from process automation initiatives.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
  },
  {
    category: "AI, Insights, and Solutions",
    title: "Beyond RPA: The Next Generation of Intelligent Automation",
    description: "How AI is transforming traditional robotic process automation into truly intelligent systems.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop"
  }
];

export default function AutomateWorkflows() {
  return (
    <div className="min-h-screen bg-white text-charcoal font-sans">
      <SEO 
        title="Automate Repetitive Workflows | AI Solutions" 
        description="See how leading companies are using AI to automate repetitive workflows, reduce manual effort, and accelerate business processes."
        canonical="/capabilities/artificial-intelligence/automate-workflows"
      />
      <Navigation />

      {/* Hero Banner - Bain Style Red Gradient */}
      <section className="relative w-full pt-20">
        <div className="relative h-[350px] md:h-[400px] overflow-hidden">
          {/* Background with gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-destructive via-destructive to-base">
            {/* Abstract pattern overlay */}
            <div className="absolute inset-0 opacity-30">
              <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                {/* Abstract curved lines */}
                <path d="M0,200 Q300,100 600,200 T1200,200" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2"/>
                <path d="M0,250 Q300,150 600,250 T1200,250" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2"/>
                <path d="M0,300 Q300,200 600,300 T1200,300" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2"/>
              </svg>
            </div>
          </div>

          {/* Content */}
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
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Automate repetitive workflows
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-white/90 mt-4 max-w-2xl"
            >
              See how leading companies are winning with intelligent automation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid - Bain Style */}
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
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden mb-5">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Video play button overlay */}
                  {study.hasVideo && (
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                      <Play className="w-5 h-5 text-destructive fill-current ml-1" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div>
                  <span className="text-destructive text-sm font-medium">{study.industry}</span>
                  <h3 className="text-xl md:text-2xl font-bold text-charcoal mt-2 mb-3 leading-tight group-hover:text-destructive transition-colors" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
                    {study.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {study.description}
                  </p>
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
          {/* Abstract pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1200 300" preserveAspectRatio="xMidYMid slice">
              <path d="M0,150 Q300,50 600,150 T1200,150" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2"/>
              <path d="M0,180 Q300,80 600,180 T1200,180" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2"/>
            </svg>
          </div>
        </div>
        <div className="relative z-10 container px-6 md:px-12">
          <Link href="/capabilities/artificial-intelligence">
            <span className="inline-flex items-center text-white text-xl md:text-2xl font-medium cursor-pointer group" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
              Our AI Consulting Services
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
            </span>
          </Link>
        </div>
      </section>

      {/* Our Latest AI Insights */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-6 md:px-12">
          {/* Section Header with decorative lines */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex-1 h-px bg-muted"></div>
            <h2 className="px-8 text-2xl md:text-3xl font-bold text-charcoal" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
              Our Latest AI Insights
            </h2>
            <div className="flex-1 h-px bg-muted"></div>
          </div>

          {/* Insights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden mb-4">
                  <img 
                    src={insight.image} 
                    alt={insight.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <span className="text-destructive text-sm font-medium">{insight.category}</span>
                <h3 className="text-lg font-bold text-charcoal mt-2 mb-2 leading-tight group-hover:text-destructive transition-colors" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
                  {insight.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {insight.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-subtle">
        <div className="container px-6 md:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
            Ready to automate your workflows?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how intelligent automation can transform your operations and free your team for higher-value work.
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
