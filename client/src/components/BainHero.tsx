import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

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
    backgroundImage: "https://files.manuscdn.com/user_upload_by_module/session_file/3104196630322124911/BetaSlTnfndlplcK.jpg",
    tabLabel: "AI in Enterprise"
  },
  {
    id: 2,
    category: "Economic Impact",
    title: "The $15 Trillion Question:\nHow AI Will Reshape\nthe Global Economy",
    ctaText: "READ MORE",
    ctaLink: "/insights/ai-economic-impact",
    backgroundImage: "https://files.manuscdn.com/user_upload_by_module/session_file/3104196630322124911/UJuexqwGOjkcvBUe.jpeg",
    tabLabel: "AI & Economy"
  },
  {
    id: 3,
    category: "Technology Strategy",
    title: "The Complete Guide to Process Mining",
    ctaText: "READ MORE",
    ctaLink: "/insights/process-mining-guide",
    backgroundImage: "https://files.manuscdn.com/user_upload_by_module/session_file/3104196630322124911/LWQfelZCPKRPZScm.jpg",
    tabLabel: "Process Mining"
  },
  {
    id: 4,
    category: "AI Executive Guide",
    title: "The Pragmatic CEO's Guide to AI",
    ctaText: "READ MORE",
    ctaLink: "/insights/ceo-guide-data-modernization",
    backgroundImage: "https://files.manuscdn.com/user_upload_by_module/session_file/3104196630322124911/QzzzaEnNaVKCPJJd.jpg",
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
    setTimeout(() => setIsAutoPlaying(true), 30000);
  };

  const currentSlide = featuredSlides[activeSlide];

  return (
    <section className="relative w-full h-[85vh] min-h-[600px] sm:min-h-[680px] lg:min-h-[760px] overflow-hidden bg-base -mt-20 pt-20">
      {/* Background Images with Crossfade (no gradient overlay — solid tint for readability) */}
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
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.backgroundImage})` }}
            />
            {/* Solid dark tint for text readability — no gradient */}
            <div className="absolute inset-0 bg-charcoal/55" />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        {/* Main Content Area */}
        <div className="flex-1 flex items-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 pt-8 sm:pt-12 md:pt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="max-w-[60ch]"
            >
              {/* Eyebrow */}
              <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-white/70 font-semibold mb-5">
                {currentSlide.category}
              </span>

              {/* Main Title */}
              <h1
                className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.08] mb-7 whitespace-pre-line"
                style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
              >
                {currentSlide.title}
              </h1>

              {/* CTA Link */}
              <Link href={currentSlide.ctaLink}>
                <span className="inline-block text-white text-[13px] font-semibold tracking-[0.15em] uppercase border-b border-white/60 pb-1 hover:border-white transition-colors cursor-pointer">
                  {currentSlide.ctaText}
                </span>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Navigation — flat circle dots per spec */}
        <div className="relative z-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 pb-6 sm:pb-8 md:pb-10">
          <div className="flex items-end justify-between gap-4 border-t border-white/20 pt-5 sm:pt-6">
            {/* Tab Items */}
            <div className="flex-1 flex flex-col gap-4">
              {/* Flat nav dots */}
              <div className="flex items-center gap-3">
                {featuredSlides.map((slide, index) => (
                  <button
                    key={`dot-${slide.id}`}
                    onClick={() => handleTabClick(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className="group relative p-1"
                  >
                    <span
                      className={`block h-2 w-2 transition-colors duration-300 ${
                        index === activeSlide ? "bg-primary" : "bg-white/30 group-hover:bg-white/60"
                      }`}
                      style={{ borderRadius: "9999px" }}
                    />
                  </button>
                ))}
              </div>

              {/* Tab labels — preserved but styled flat */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
                {featuredSlides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => handleTabClick(index)}
                    className="relative text-left group"
                  >
                    {/* Progress indicator - thin hairline above label */}
                    <div className="h-px w-full bg-white/15 overflow-hidden mb-3">
                      <div
                        className="h-full bg-primary"
                        style={{
                          width:
                            index === activeSlide
                              ? `${isAutoPlaying ? progress : 100}%`
                              : index < activeSlide
                              ? "100%"
                              : "0%",
                          transition:
                            index === activeSlide && isAutoPlaying ? "none" : "width 0.3s ease"
                        }}
                      />
                    </div>

                    <span
                      className={`block text-[11px] sm:text-xs uppercase tracking-[0.15em] font-semibold transition-colors duration-300 line-clamp-1 ${
                        index === activeSlide
                          ? "text-white"
                          : "text-white/50 group-hover:text-white/80"
                      }`}
                    >
                      {slide.tabLabel}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Scroll Indicator */}
            <button
              className="flex-shrink-0 text-[11px] font-semibold tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors pb-1 border-b border-white/30 hover:border-white/80"
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
              aria-label="Scroll down"
            >
              Scroll
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
