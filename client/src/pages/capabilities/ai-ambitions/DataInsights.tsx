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
    company: "Multi-Location Retailer",
    title: "Unified Data Platform Reveals Hidden Revenue Opportunities",
    description: "A regional retailer consolidated fragmented data sources to uncover customer behavior patterns that led to targeted promotions and significant revenue growth.",
    image: "/images/industries/tech-glasses.jpg"
  },
  {
    id: 2,
    industry: "Manufacturing",
    company: "Industrial Equipment Co.",
    title: "Predictive Maintenance Analytics Cuts Downtime by 40%",
    description: "A manufacturing company implemented sensor data analytics to predict equipment failures before they happen, dramatically reducing unplanned downtime and maintenance costs.",
    image: "/images/capabilities/cap-ai-search.jpg",
    hasVideo: true
  },
  {
    id: 3,
    industry: "Healthcare",
    company: "Regional Hospital System",
    title: "Clinical Analytics Improves Patient Outcomes by 25%",
    description: "A hospital system leveraged AI-powered analytics to identify at-risk patients earlier, enabling proactive interventions that significantly improved outcomes.",
    image: "/images/capabilities/cap-hologram.jpg"
  },
  {
    id: 4,
    industry: "Financial Services",
    company: "Investment Advisory Firm",
    title: "Real-Time Market Intelligence Transforms Investment Decisions",
    description: "An investment firm deployed advanced analytics to process market data in real-time, giving advisors actionable insights that improved portfolio performance.",
    image: "/images/capabilities/cap-circuit-green.jpg",
    hasVideo: true
  }
];

const insights = [
  {
    category: "Data & Analytics",
    title: "Building a Data-Driven Culture: Lessons from Leading Organizations",
    description: "How successful companies embed data into every decision, from the boardroom to the front line.",
    image: "/images/industries/tech-datacenter.jpg"
  },
  {
    category: "AI, Insights, and Solutions",
    title: "From Data Lakes to Data Products: The Evolution of Enterprise Analytics",
    description: "Moving beyond data storage to create actionable, self-service analytics capabilities.",
    image: "/images/capabilities/cap-coder.jpg"
  },
  {
    category: "Digital",
    title: "The Hidden Value in Your Data: A Framework for Discovery",
    description: "A practical approach to identifying and extracting value from underutilized data assets.",
    image: "/images/capabilities/cap-conference-data.jpg"
  }
];

export default function DataInsights() {
  return (
    <div className="min-h-screen bg-white text-charcoal font-sans">
      <SEO 
        title="Unlock Insights from Your Data | AI Solutions" 
        description="See how leading companies are using AI and analytics to unlock hidden insights from their data and drive better business decisions."
        canonical="/capabilities/artificial-intelligence/data-insights"
      />
      <Navigation />

      {/* Hero Banner - Bain Style Red Gradient */}
      <section className="relative w-full pt-20">
        <div className="relative h-[350px] md:h-[400px] overflow-hidden">
          <div className="absolute inset-0 bg-background">
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

          <div className="relative z-10 container h-full flex flex-col justify-center px-6 md:px-12">
            <Link href="/capabilities/artificial-intelligence">
              <span className="inline-flex items-center text-muted-foreground hover:text-primary text-sm mb-6 cursor-pointer transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Artificial Intelligence
              </span>
            </Link>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="nx-h1 text-charcoal max-w-4xl"
            >
              Unlock insights from your data
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="nx-lead text-charcoal/80 mt-4 max-w-2xl"
            >
              See how leading companies are turning data into competitive advantage.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="nx-section bg-white">
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
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {study.hasVideo && (
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                      <Play className="w-5 h-5 text-primary fill-current ml-1" />
                    </div>
                  )}
                </div>
                <div>
                  <span className="text-primary text-sm font-medium">{study.industry}</span>
                  <h3 className="nx-h3 text-charcoal mt-2 mb-3 group-hover:text-primary transition-colors">
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
      <section className="relative nx-section overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background to-background">
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1200 300" preserveAspectRatio="xMidYMid slice">
              <path d="M0,150 Q300,50 600,150 T1200,150" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2"/>
            </svg>
          </div>
        </div>
        <div className="relative z-10 container px-6 md:px-12">
          <Link href="/capabilities/artificial-intelligence">
            <span className="inline-flex items-center text-charcoal text-xl md:text-2xl font-medium cursor-pointer group">
              Our AI Consulting Services
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
            </span>
          </Link>
        </div>
      </section>

      {/* Our Latest AI Insights */}
      <section className="nx-section bg-white">
        <div className="container px-6 md:px-12">
          <div className="flex items-center justify-center mb-12">
            <div className="flex-1 h-px bg-muted"></div>
            <h2 className="px-8 nx-h2 text-charcoal">
              Our Latest AI Insights
            </h2>
            <div className="flex-1 h-px bg-muted"></div>
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
                  <img src={insight.image} alt={insight.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <span className="text-primary text-sm font-medium">{insight.category}</span>
                <h3 className="nx-h3 text-charcoal mt-2 mb-2 group-hover:text-primary transition-colors">
                  {insight.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{insight.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="nx-section bg-subtle">
        <div className="container px-6 md:px-12 text-center">
          <h2 className="nx-h2 text-charcoal mb-4">
            Ready to unlock the value in your data?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how advanced analytics and AI can help you make better decisions faster.
          </p>
          <Link href="/contact">
            <span className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded hover:bg-primary-hover transition-colors cursor-pointer">
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
