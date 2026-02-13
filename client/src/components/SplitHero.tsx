import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface InsightCard {
  category: string;
  date: string;
  title: string;
  description: string;
  link: string;
}

const featuredInsights: InsightCard[] = [
  {
    category: "ARTIFICIAL INTELLIGENCE",
    date: "January 2026",
    title: "How AI Agents Are Reshaping Enterprise Operations",
    description: "Discover how autonomous AI agents are transforming business workflows and decision-making.",
    link: "/insights/ai-agents-enterprise-operations"
  },
  {
    category: "STRATEGY",
    date: "December 2025",
    title: "Building a Data-Driven Culture",
    description: "Learn the key steps to embed data literacy across your organization.",
    link: "/insights/data-driven-culture"
  },
  {
    category: "TECHNOLOGY",
    date: "November 2025",
    title: "The Complete Guide to Process Mining",
    description: "Uncover hidden inefficiencies and optimize operations with process intelligence.",
    link: "/insights/process-mining-guide"
  }
];

// Hero carousel images
const heroImages = [
  "/images/hero-carousel-1.jpg",
  "/images/hero-carousel-2.png",
  "/images/hero-carousel-3.jpg"
];

export function SplitHero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-advance carousel with very slow, seamless transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Split Layout Container */}
      <div className="flex flex-col lg:flex-row w-full">
        
        {/* Left Side - White Background with Black Text (45%) */}
        <div className="relative w-full lg:w-[45%] min-h-[50vh] lg:min-h-[70vh] bg-white">
          {/* Content */}
          <div className="relative z-10 h-full flex items-center px-8 sm:px-12 md:px-16 lg:px-12 xl:px-16 py-20 lg:py-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full"
            >
              {/* Welcome badge */}
              <span className="inline-block text-gray-500 text-[11px] font-medium tracking-[0.3em] uppercase mb-6">
                NexDyne Consulting Group
              </span>
              
              {/* Main Tagline - Serif Font like Solutions Section */}
              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] font-serif text-black leading-[1.15] tracking-tight mb-6">
                Redefining what's possible with Artificial Intelligence
              </h1>
              
              {/* Subtext - Black */}
              <p className="text-base sm:text-lg font-serif text-gray-700 leading-relaxed mb-10 max-w-lg">
                We partner with forward-thinking organizations to unlock the power of AI and data—transforming complexity into competitive advantage.
              </p>
              
              {/* CTA Buttons - BCG Style */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* First Button: White with black border */}
                <Link href="/capabilities">
                  <button className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black border-2 border-black rounded-full font-semibold text-sm uppercase tracking-wider hover:bg-[#7ef473] hover:border-[#7ef473] transition-all duration-300">
                    Explore Capabilities
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </Link>
                {/* Second Button: Green background */}
                <Link href="/case-studies">
                  <button className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#7ef473] text-black border-2 border-[#7ef473] rounded-full font-semibold text-sm uppercase tracking-wider hover:bg-white hover:border-black transition-all duration-300">
                    View Case Studies
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Right Side - Image + Insight Cards (55%) */}
        <div className="relative w-full lg:w-[55%] flex flex-col">
          {/* Image Carousel Area */}
          <div className="relative w-full h-[40vh] lg:h-[50vh] bg-gray-100">
            <AnimatePresence mode="sync">
              {heroImages.map((image, index) => (
                <motion.div
                  key={image}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: index === currentImageIndex ? 1 : 0,
                    scale: index === currentImageIndex ? 1 : 1.02
                  }}
                  transition={{ 
                    opacity: { duration: 2, ease: "easeInOut" },
                    scale: { duration: 8, ease: "easeOut" }
                  }}
                >
                  <img 
                    src={image}
                    alt={`AI Technology Visualization ${index + 1}`}
                    className="w-full h-full object-contain object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {/* Featured Insights Cards - Below Image */}
          <div className="bg-[#F8F9FA] py-6 px-4 lg:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {featuredInsights.map((insight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={insight.link}>
                    <div className="group bg-white p-4 h-full border border-gray-200 hover:border-[#3DCD58] hover:shadow-md transition-all duration-300 cursor-pointer">
                      {/* Category & Date */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[10px] font-bold tracking-wider text-[#3DCD58] uppercase">
                          {insight.category}
                        </span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-sm font-semibold text-[#1A1A1A] leading-snug mb-2 group-hover:text-[#3DCD58] transition-colors line-clamp-2">
                        {insight.title}
                      </h3>
                      
                      {/* Read More Link */}
                      <div className="flex items-center gap-1 text-xs font-medium text-gray-500 group-hover:text-[#3DCD58] transition-colors">
                        <span>Read more</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
