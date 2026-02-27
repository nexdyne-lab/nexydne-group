import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

interface FeaturedSlide {
  id: number;
  category: string;
  title: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
  tabLabel: string;
}

const featuredSlides: FeaturedSlide[] = [
  {
    id: 1,
    category: "AI in Enterprise",
    title: "How AI Agents Are Reshaping Enterprise Operations",
    ctaText: "READ MORE",
    ctaLink: "/insights/ai-agents-transform-operations",
    backgroundImage: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/BetaSlTnfndlplcK.jpg",
    tabLabel: "AI in Enterprise"
  },
  {
    id: 2,
    category: "Economic Impact",
    title: "The $15 Trillion Question:\nHow AI Will Reshape\nthe Global Economy",
    ctaText: "READ MORE",
    ctaLink: "/insights/ai-economic-impact",
    backgroundImage: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/UJuexqwGOjkcvBUe.jpeg",
    tabLabel: "AI & Economy"
  },
  {
    id: 3,
    category: "Technology Strategy",
    title: "The Complete Guide to Process Mining",
    ctaText: "READ MORE",
    ctaLink: "/insights/process-mining-guide",
    backgroundImage: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/LWQfelZCPKRPZScm.jpg",
    tabLabel: "Process Mining"
  },
  {
    id: 4,
    category: "AI Executive Guide",
    title: "The Pragmatic CEO's Guide to AI",
    ctaText: "READ MORE",
    ctaLink: "/insights/ceo-guide-data-modernization",
    backgroundImage: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/QzzzaEnNaVKCPJJd.jpg",
    tabLabel: "AI Executive Guide"
  }
];

const SLIDE_DURATION = 8000; // 8 seconds per slide

export function BainHero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<number>(0);
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  // Animate progress bar
  useEffect(() => {
    if (!isAutoPlaying) {
      // Reset progress when not auto-playing
      setProgress(0);
      progressRef.current = 0;
      return;
    }

    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = timestamp;
      }

      const elapsed = timestamp - lastTimeRef.current;
      progressRef.current += (elapsed / SLIDE_DURATION) * 100;

      if (progressRef.current >= 100) {
        // Move to next slide
        setActiveSlide((prev) => (prev + 1) % featuredSlides.length);
        progressRef.current = 0;
        lastTimeRef.current = timestamp;
      }

      setProgress(progressRef.current);
      lastTimeRef.current = timestamp;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isAutoPlaying, activeSlide]);

  // Reset progress when slide changes manually
  useEffect(() => {
    progressRef.current = 0;
    lastTimeRef.current = 0;
    setProgress(0);
  }, [activeSlide]);

  const handleTabClick = (index: number) => {
    setActiveSlide(index);
    setIsAutoPlaying(false);
    progressRef.current = 0;
    setProgress(0);
    // Resume auto-play after 30 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 30000);
  };

  const currentSlide = featuredSlides[activeSlide];

  return (
    <section className="relative w-full h-[110vh] min-h-[700px] sm:min-h-[800px] lg:min-h-[900px] overflow-hidden bg-base -mt-20 pt-20">
      {/* Background Images with Crossfade */}
      <AnimatePresence mode="sync">
        {featuredSlides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === activeSlide ? 1 : 0,
              scale: index === activeSlide ? 1 : 1.05
            }}
            transition={{ 
              opacity: { duration: 1.2, ease: "easeInOut" },
              scale: { duration: 10, ease: "easeOut" }
            }}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.backgroundImage})` }}
            />
            {/* Dark Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-black/15" />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        {/* Main Content Area */}
        <div className="flex-1 flex items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 pt-8 sm:pt-12 md:pt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              {/* Category Label */}
              <span className="inline-block text-white/90 text-xs sm:text-sm font-medium tracking-wide mb-3 sm:mb-4">
                {currentSlide.category}
              </span>
              
              {/* Main Title - Bain Style (Libre Baskerville / Georgia) */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-normal text-white leading-[1.15] sm:leading-[1.1] tracking-tight mb-6 sm:mb-8 whitespace-pre-line" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
                {currentSlide.title}
              </h1>
              
              {/* CTA Link */}
              <Link href={currentSlide.ctaLink}>
                <span className="group inline-flex items-center gap-3 text-white text-sm font-medium tracking-wider uppercase hover:opacity-80 transition-opacity cursor-pointer">
                  {currentSlide.ctaText}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Navigation Tabs */}
        <div className="relative z-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 pb-4 sm:pb-6 md:pb-8">
          <div className="flex items-end justify-between gap-2 sm:gap-4 border-t border-white/20 pt-4 sm:pt-6">
            {/* Tab Items */}
            <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
              {featuredSlides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => handleTabClick(index)}
                  className="relative text-left group"
                >
                  {/* Progress Indicator - Animated for active slide */}
                  <div className="absolute -top-4 sm:-top-6 left-0 h-0.5 sm:h-1 w-full sm:w-24 bg-white/10 overflow-hidden">
                    <div 
                      className="h-full bg-primary transition-none"
                      style={{ 
                        width: index === activeSlide 
                          ? `${isAutoPlaying ? progress : 100}%` 
                          : index < activeSlide || (!isAutoPlaying && index === activeSlide) 
                            ? '100%' 
                            : '0%',
                        transition: index === activeSlide && isAutoPlaying ? 'none' : 'width 0.3s ease'
                      }}
                    />
                  </div>
                  
                  {/* Tab Label */}
                  <span 
                    className={`block text-xs sm:text-sm font-medium transition-colors duration-300 line-clamp-1 ${
                      index === activeSlide 
                        ? 'text-white' 
                        : 'text-white/50 group-hover:text-white/80'
                    }`}
                  >
                    {slide.tabLabel}
                  </span>
                </button>
              ))}
            </div>

            {/* Scroll Indicator */}
            <button 
              className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:text-white hover:border-white/60 transition-colors"
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              aria-label="Scroll down"
            >
              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
