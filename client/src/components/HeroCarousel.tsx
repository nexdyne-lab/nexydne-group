import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Link } from "wouter";

interface CarouselCard {
  id: number;
  category: string;
  type: string;
  date: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

const carouselData: CarouselCard[] = [
  {
    id: 1,
    category: "ARTIFICIAL INTELLIGENCE",
    type: "INSIGHT",
    date: "December 2025",
    title: "How AI Agents Transform Enterprise Operations",
    description: "AI agents are revolutionizing how businesses operate. Learn how autonomous systems can handle complex workflows, make decisions, and drive efficiency at scale.",
    image: "/images/insights/ai-agents-network.png",
    link: "/insights/ai-agents-transform-operations"
  },
  {
    id: 2,
    category: "DIGITAL TRANSFORMATION",
    type: "CASE STUDY",
    date: "November 2025",
    title: "Scaling Operations with Intelligent Automation",
    description: "A mid-market logistics company achieved 40% efficiency gains by implementing our intelligent process optimization framework across their supply chain.",
    image: "/images/case-studies/logistics-automation.png",
    link: "/case-studies"
  },
  {
    id: 3,
    category: "DATA & ANALYTICS",
    type: "INSIGHT",
    date: "October 2025",
    title: "Building a Data-Driven Culture",
    description: "Transform your organization's relationship with data. Our guide to establishing data literacy, governance, and analytics capabilities that drive real business value.",
    image: "/data-driven-culture.png",
    link: "/insights/building-data-culture"
  },
  {
    id: 4,
    category: "GROWTH STRATEGY",
    type: "ARTICLE",
    date: "September 2025",
    title: "The CEO's Guide to Digital Growth",
    description: "Navigate the complexities of digital transformation with strategic clarity. A framework for leaders driving sustainable growth in the digital age.",
    image: "/ceo-digital-growth.webp",
    link: "/insights/digital-growth-playbook"
  },
  {
    id: 5,
    category: "TECHNOLOGY",
    type: "WHITEPAPER",
    date: "August 2025",
    title: "Cloud-Native Architecture for Scale",
    description: "Modern enterprises need infrastructure that scales with ambition. Explore the principles of building resilient, scalable cloud-native systems.",
    image: "/cloud-native-architecture.png",
    link: "/insights/cloud-native-architecture"
  }
];

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(2); // Start with middle card (index 2 of 5)
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const getVisibleCards = useCallback(() => {
    // Show 3 cards at a time: prev, current, next
    const total = carouselData.length;
    const prev = (activeIndex - 1 + total) % total;
    const next = (activeIndex + 1) % total;
    return [prev, activeIndex, next];
  }, [activeIndex]);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % carouselData.length);
  }, []);

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  }, []);

  // Handle swipe gestures
  const handleDragEnd = useCallback((_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50; // Minimum swipe distance
    const velocity = 0.3; // Minimum velocity
    
    setIsDragging(false);
    
    if (info.offset.x > threshold || info.velocity.x > velocity) {
      // Swiped right - go to previous
      goToPrev();
    } else if (info.offset.x < -threshold || info.velocity.x < -velocity) {
      // Swiped left - go to next
      goToNext();
    }
  }, [goToNext, goToPrev]);

  const handleDragStart = useCallback(() => {
    setIsDragging(true);
  }, []);

  // Auto-rotation
  useEffect(() => {
    if (!isPlaying || isHovering || isDragging) return;
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, isHovering, isDragging, goToNext]);

  const visibleIndices = getVisibleCards();

  return (
    <div className="relative w-full">
      {/* Carousel Container with touch/swipe support */}
      <motion.div 
        ref={containerRef}
        className="relative flex items-center justify-center gap-2 sm:gap-4 md:gap-5 py-4 px-2 sm:px-0 touch-pan-y"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        {visibleIndices.map((cardIndex, position) => {
          const card = carouselData[cardIndex];
          const isCenter = position === 1;
          
          return (
            <CarouselCardComponent
              key={card.id}
              card={card}
              isCenter={isCenter}
              position={position}
              isDragging={isDragging}
            />
          );
        })}
      </motion.div>

      {/* Swipe indicator for mobile */}
      <div className="flex sm:hidden items-center justify-center gap-2 mt-2 text-charcoal/40 text-xs">
        <ChevronLeft className="w-3 h-3" />
        <span>Swipe to navigate</span>
        <ChevronRight className="w-3 h-3" />
      </div>

      {/* Controls - larger touch targets on mobile */}
      <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-2 mt-4">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-3 sm:p-2 rounded-md border border-charcoal/20 hover:bg-charcoal/5 active:bg-charcoal/10 transition-colors touch-manipulation"
          aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 sm:w-4 sm:h-4 text-charcoal" />
          ) : (
            <Play className="w-5 h-5 sm:w-4 sm:h-4 text-charcoal" />
          )}
        </button>
        <button
          onClick={goToPrev}
          className="p-3 sm:p-2 rounded-md border border-charcoal/20 hover:bg-charcoal/5 active:bg-charcoal/10 transition-colors touch-manipulation"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-4 sm:h-4 text-charcoal" />
        </button>
        <button
          onClick={goToNext}
          className="p-3 sm:p-2 rounded-md border border-charcoal/20 hover:bg-charcoal/5 active:bg-charcoal/10 transition-colors touch-manipulation"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-4 sm:h-4 text-charcoal" />
        </button>
      </div>

      {/* Dot indicators for mobile */}
      <div className="flex sm:hidden items-center justify-center gap-2 mt-3">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 touch-manipulation ${
              index === activeIndex 
                ? 'bg-base w-4' 
                : 'bg-charcoal/20'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

interface CardProps {
  card: CarouselCard;
  isCenter: boolean;
  position: number;
  isDragging: boolean;
}

function CarouselCardComponent({ card, isCenter, position, isDragging }: CardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isTapped, setIsTapped] = useState(false);
  
  // Only center card can be hovered/tapped to show full content
  const showFullContent = isCenter && (isHovered || isTapped) && !isDragging;

  // Handle tap for mobile (toggle content visibility)
  const handleTap = useCallback(() => {
    if (isCenter && !isDragging) {
      setIsTapped(prev => !prev);
    }
  }, [isCenter, isDragging]);

  // Reset tap state when card is no longer center
  useEffect(() => {
    if (!isCenter) {
      setIsTapped(false);
    }
  }, [isCenter]);

  return (
    <motion.div
      layout
      initial={false}
      animate={{
        opacity: isCenter ? 1 : 0.7,
        scale: isCenter ? 1 : 0.85,
        x: position === 0 ? -20 : position === 2 ? 20 : 0,
      }}
      transition={{ 
        duration: 0.5, 
        ease: [0.4, 0, 0.2, 1] // Smooth cubic-bezier easing
      }}
      className={`relative overflow-hidden rounded-lg shadow-lg flex-shrink-0 select-none ${
        isCenter 
          ? "w-full max-w-[320px] sm:w-[260px] md:w-[300px] lg:w-[340px] z-20" 
          : "w-[120px] sm:w-[160px] md:w-[190px] lg:w-[220px] z-10 hidden xs:block"
      }`}
      style={{
        height: isCenter ? (showFullContent ? "420px" : "380px") : "260px",
        transition: "height 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTap={handleTap}
    >
      {/* Background Image with responsive srcset */}
      <div className="absolute inset-0">
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          style={{
            transform: showFullContent ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
          }}
        />
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: showFullContent 
              ? "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 50%, transparent 100%)" 
              : "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
            transition: "background 0.3s ease"
          }}
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-5 md:p-6">
        {/* Top: Category Badge */}
        <div>
          <span className="inline-block px-2.5 sm:px-3 py-1 sm:py-1.5 bg-subtle text-charcoal text-[9px] sm:text-[10px] md:text-xs font-semibold rounded-full tracking-wide">
            {card.category}
          </span>
        </div>

        {/* Bottom: Content */}
        <div className="space-y-2 sm:space-y-3">
          {/* Type & Date */}
          <div className="flex items-center gap-2 text-white/80 text-[9px] sm:text-[10px] md:text-xs font-medium">
            <span>{card.type}</span>
            <span className="w-1 h-1 rounded-full bg-white/60" />
            <span>{card.date}</span>
          </div>

          {/* Title */}
          <h3 className={`font-bold text-white leading-tight transition-all duration-300 ${
            isCenter ? "text-lg sm:text-xl md:text-2xl" : "text-xs sm:text-sm md:text-base"
          }`}>
            {card.title}
          </h3>

          {/* Tap hint for mobile on center card */}
          {isCenter && !showFullContent && (
            <p className="text-white/60 text-xs sm:hidden">Tap for details</p>
          )}

          {/* Description - Only shows on hover/tap for center card */}
          <AnimatePresence>
            {showFullContent && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-white/90 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  {card.description}
                </p>
                
                {/* CTA Button - larger touch target on mobile */}
                <Link href={card.link}>
                  <button className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-2.5 bg-subtle text-charcoal rounded font-semibold text-xs sm:text-sm hover:bg-white active:bg-white/90 transition-colors touch-manipulation min-h-[44px]">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export default HeroCarousel;
