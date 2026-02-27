import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

interface CarouselItem {
  id: string;
  type: "article" | "case-study" | "insight";
  category: string;
  date: string;
  title: string;
  description?: string;
  image: string;
  link: string;
  orientation: "portrait" | "landscape" | "square"; // BCG-style varied heights
}

const carouselItems: CarouselItem[] = [
  {
    id: "1",
    type: "insight",
    category: "ARTIFICIAL INTELLIGENCE",
    date: "January 2026",
    title: "How AI Agents Are Reshaping Enterprise Operations",
    description: "Discover how autonomous AI agents are transforming business workflows and decision-making.",
    image: "/images/capability-ai.png",
    link: "/insights/ai-agents-enterprise-operations",
    orientation: "portrait"
  },
  {
    id: "2",
    type: "case-study",
    category: "RETAIL",
    date: "December 2025",
    title: "40% Revenue Increase Through AI Personalization",
    description: "How a global retailer transformed their e-commerce experience with intelligent recommendations.",
    image: "/images/solution-growth.png",
    link: "/case-studies/retail-ai-personalization",
    orientation: "landscape"
  },
  {
    id: "3",
    type: "article",
    category: "LEADERSHIP",
    date: "December 2025",
    title: "Building a Data-Driven Culture",
    description: "Learn the key steps to embed data literacy across your organization.",
    image: "/images/hero-team-2.webp",
    link: "/insights/data-driven-culture",
    orientation: "portrait"
  },
  {
    id: "4",
    type: "case-study",
    category: "FINANCIAL SERVICES",
    date: "November 2025",
    title: "90% Automation in Loan Processing",
    description: "Transforming manual workflows into intelligent automated systems.",
    image: "/images/industry-finance.jpg",
    link: "/case-studies/financial-automation",
    orientation: "square"
  },
  {
    id: "5",
    type: "insight",
    category: "TECHNOLOGY",
    date: "November 2025",
    title: "The Complete Guide to Process Mining",
    description: "Uncover hidden inefficiencies and optimize operations with process intelligence.",
    image: "/images/solution-process.png",
    link: "/insights/process-mining-guide",
    orientation: "landscape"
  },
  {
    id: "6",
    type: "case-study",
    category: "HEALTHCARE",
    date: "October 2025",
    title: "35% Reduction in Patient Wait Times",
    description: "How predictive analytics transformed patient flow management.",
    image: "/images/industry-healthcare.jpg",
    link: "/case-studies/healthcare-wait-times",
    orientation: "portrait"
  },
  {
    id: "7",
    type: "article",
    category: "STRATEGY",
    date: "October 2025",
    title: "Digital Transformation Roadmap for SMBs",
    description: "A practical guide to modernizing your business operations.",
    image: "/images/solution-enterprise-tech.png",
    link: "/insights/digital-transformation-roadmap",
    orientation: "landscape"
  }
];

export function InsightsCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  const [centerIndex, setCenterIndex] = useState(3); // Start with middle item as center
  const totalItems = carouselItems.length;

  // Auto-advance when not paused
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % totalItems);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, totalItems]);

  const goToPrev = () => {
    setCenterIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const goToNext = () => {
    setCenterIndex((prev) => (prev + 1) % totalItems);
  };

  // Get visible items (5 items centered around centerIndex)
  const getVisibleItems = () => {
    const items = [];
    for (let i = -2; i <= 2; i++) {
      const index = (centerIndex + i + totalItems) % totalItems;
      items.push({
        ...carouselItems[index],
        position: i, // -2, -1, 0, 1, 2 (0 is center)
        uniqueKey: `${index}-${i}`,
      });
    }
    return items;
  };

  const visibleItems = getVisibleItems();

  // Card dimensions based on position AND orientation (BCG-style)
  const getCardStyle = (position: number, orientation: string) => {
    const isCenter = position === 0;
    const isAdjacent = Math.abs(position) === 1;
    
    if (isCenter) {
      // Center card is always the largest with content overlay
      return {
        width: "220px",
        height: "320px",
        opacity: 1,
        scale: 1,
        zIndex: 10,
      };
    } else if (isAdjacent) {
      // Adjacent cards - vary height based on orientation
      switch (orientation) {
        case "portrait":
          return {
            width: "140px",
            height: "220px",
            opacity: 0.9,
            scale: 1,
            zIndex: 5,
          };
        case "landscape":
          return {
            width: "140px",
            height: "160px",
            opacity: 0.9,
            scale: 1,
            zIndex: 5,
          };
        case "square":
        default:
          return {
            width: "140px",
            height: "180px",
            opacity: 0.9,
            scale: 1,
            zIndex: 5,
          };
      }
    } else {
      // Edge cards - smaller, vary height based on orientation
      switch (orientation) {
        case "portrait":
          return {
            width: "130px",
            height: "200px",
            opacity: 0.75,
            scale: 1,
            zIndex: 1,
          };
        case "landscape":
          return {
            width: "130px",
            height: "140px",
            opacity: 0.75,
            scale: 1,
            zIndex: 1,
          };
        case "square":
        default:
          return {
            width: "130px",
            height: "160px",
            opacity: 0.75,
            scale: 1,
            zIndex: 1,
          };
      }
    }
  };

  return (
    <section className="py-16 sm:py-20 md:py-12 sm:py-16 lg:py-24 bg-white overflow-hidden">
      {/* Use container class to match navbar margins */}
      <div className="container">

        {/* Carousel Container */}
        <div className="relative">
          {/* Carousel Items - align to bottom */}
          <div className="flex items-end justify-center gap-4 md:gap-6" style={{ minHeight: "340px" }}>
            <AnimatePresence mode="popLayout">
              {visibleItems.map((item) => {
                const style = getCardStyle(item.position, item.orientation);
                const isCenter = item.position === 0;
                
                return (
                  <motion.div
                    key={item.uniqueKey}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: style.opacity,
                      scale: style.scale,
                      zIndex: style.zIndex,
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.4, 0, 0.2, 1],
                      layout: { duration: 0.5 }
                    }}
                    className="flex-shrink-0"
                    style={{
                      width: style.width,
                      zIndex: style.zIndex,
                    }}
                  >
                    <Link href={item.link}>
                      <motion.div 
                        className="group relative overflow-hidden cursor-pointer rounded-sm"
                        style={{ height: style.height }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Background Image */}
                        <div 
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                          style={{ backgroundImage: `url(${item.image})` }}
                        />
                        
                        {/* Gradient Overlay - Only visible on center card */}
                        {isCenter && (
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        )}
                        
                        {/* Category Badge - Only on center card */}
                        {isCenter && (
                          <motion.div 
                            className="absolute top-4 left-4"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            <span className="inline-block px-3 py-1.5 bg-base/90 text-white text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase rounded-sm">
                              {item.category}
                            </span>
                          </motion.div>
                        )}
                        
                        {/* Content at Bottom - Only on center card */}
                        {isCenter && (
                          <motion.div 
                            className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                          >
                            {/* Type & Date */}
                            <div className="flex items-center gap-2 mb-1.5 text-muted-foreground text-[10px] sm:text-[11px]">
                              <span className="uppercase font-medium">
                                {item.type === "case-study" ? "Case Study" : item.type === "article" ? "Article" : "Insight"}
                              </span>
                              <span>•</span>
                              <span>{item.date.toUpperCase()}</span>
                            </div>
                            
                            {/* Title */}
                            <h3 
                              className="text-charcoal text-sm sm:text-base font-medium leading-snug line-clamp-2"
                              style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}
                            >
                              {item.title}
                            </h3>
                          </motion.div>
                        )}
                      </motion.div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Navigation Controls - Aligned with container */}
          <div className="flex items-center justify-start gap-2 mt-8">
            {/* Pause/Play Button */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="w-9 h-9 flex items-center justify-center border border-border hover:border-gray-500 transition-colors rounded-sm"
              aria-label={isPaused ? "Play carousel" : "Pause carousel"}
            >
              {isPaused ? (
                <Play className="w-3.5 h-3.5 text-muted-foreground" />
              ) : (
                <Pause className="w-3.5 h-3.5 text-muted-foreground" />
              )}
            </button>
            
            {/* Previous Button */}
            <button
              onClick={goToPrev}
              className="w-9 h-9 flex items-center justify-center border border-border hover:border-gray-500 text-muted-foreground transition-colors rounded-sm"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            {/* Next Button */}
            <button
              onClick={goToNext}
              className="w-9 h-9 flex items-center justify-center border border-border hover:border-gray-500 text-muted-foreground transition-colors rounded-sm"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
