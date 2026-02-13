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
    industry: "Retail",
    company: "Regional Retailer",
    title: "AI-Powered Personalization Drives 35% Increase in Customer Lifetime Value",
    description: "A regional retail chain implemented intelligent recommendation engines and personalized marketing, transforming one-time buyers into loyal repeat customers.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
  },
  {
    id: 2,
    industry: "Financial Services",
    company: "Community Bank",
    title: "Conversational AI Transforms Customer Service Experience",
    description: "A community bank deployed intelligent virtual assistants that handle 60% of customer inquiries, improving response times while maintaining the personal touch customers expect.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
    hasVideo: true
  },
  {
    id: 3,
    industry: "Healthcare",
    company: "Patient Care Network",
    title: "Predictive Outreach Improves Patient Engagement by 50%",
    description: "A healthcare network uses AI to identify patients at risk of disengagement and proactively reaches out with personalized care reminders and support.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop"
  },
  {
    id: 4,
    industry: "Insurance",
    company: "Regional Insurance Group",
    title: "Smart Claims Processing Delivers 24-Hour Resolution",
    description: "An insurance company reimagined their claims experience with AI-powered assessment and automated processing, turning a pain point into a competitive advantage.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
    hasVideo: true
  }
];

const insights = [
  {
    category: "Customer Strategy",
    title: "The New Rules of Customer Experience in the AI Era",
    description: "How intelligent systems are redefining what customers expect from every interaction.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
  },
  {
    category: "Digital",
    title: "Building Trust Through AI-Powered Personalization",
    description: "Balancing personalization with privacy to create experiences customers love.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop"
  },
  {
    category: "AI, Insights, and Solutions",
    title: "From Chatbots to Intelligent Assistants: The Evolution of Customer Service AI",
    description: "Moving beyond scripted responses to truly intelligent customer interactions.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=300&fit=crop"
  }
];

export default function CustomerExperiences() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-sans">
      <SEO 
        title="Build Intelligent Customer Experiences | AI Solutions" 
        description="See how leading companies are using AI to create personalized, intelligent customer experiences that drive loyalty and growth."
        canonical="/capabilities/artificial-intelligence/customer-experiences"
      />
      <Navigation />

      {/* Hero Banner - Bain Style Red Gradient */}
      <section className="relative w-full pt-20">
        <div className="relative h-[350px] md:h-[400px] overflow-hidden">
          {/* Background with gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#CC0000] via-[#990000] to-[#660033]">
            {/* Abstract pattern overlay */}
            <div className="absolute inset-0 opacity-30">
              <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                <path d="M0,200 Q300,100 600,200 T1200,200" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2"/>
                <path d="M0,250 Q300,150 600,250 T1200,250" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2"/>
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
              Build intelligent customer experiences
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-white/90 mt-4 max-w-2xl"
            >
              See how leading companies are winning with AI-powered personalization.
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
                  {study.hasVideo && (
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                      <Play className="w-5 h-5 text-[#CC0000] fill-current ml-1" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div>
                  <span className="text-[#CC0000] text-sm font-medium">{study.industry}</span>
                  <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mt-2 mb-3 leading-tight group-hover:text-[#CC0000] transition-colors" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
                    {study.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {study.description}
                  </p>
                  <span className="text-sm text-gray-500">{study.company}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Our AI Consulting Services Banner */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
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
          <div className="flex items-center justify-center mb-12">
            <div className="flex-1 h-px bg-gray-200"></div>
            <h2 className="px-8 text-2xl md:text-3xl font-bold text-[#1A1A1A]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
              Our Latest AI Insights
            </h2>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

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
                <span className="text-[#CC0000] text-sm font-medium">{insight.category}</span>
                <h3 className="text-lg font-bold text-[#1A1A1A] mt-2 mb-2 leading-tight group-hover:text-[#CC0000] transition-colors" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
                  {insight.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {insight.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#f5f5f5]">
        <div className="container px-6 md:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
            Ready to transform your customer experience?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how AI can help you create personalized experiences that drive loyalty and growth.
          </p>
          <Link href="/contact">
            <span className="inline-flex items-center px-8 py-4 bg-[#CC0000] text-white font-semibold rounded hover:bg-[#aa0000] transition-colors cursor-pointer">
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
