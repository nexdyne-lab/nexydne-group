import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import { InitiativesSkeleton } from "./InitiativeCardSkeleton";

export function BusinessBuildingInitiatives() {
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({});

  const initiatives: Array<{
    headline: string;
    title: string;
    description: string;
    delay: number;
    link: string;
    image: string;
  }> = [
    {
      headline: "Mid-Market AI Access Program",
      title: "Expanding Access to Enterprise-Grade AI for America's Mid-Market",
      description: "NexDyne is leading a national effort to make advanced AI, analytics, and automation accessible to mid-market companies traditionally excluded from enterprise technology.",
      delay: 0.1,
      link: "/initiatives/mid-market-ai",
      image: "/mid-market-ai-developers.png",
    },
    {
      headline: "NexDyne Consulting Group Commons",
      title: "Democratizing Business Intelligence for Growing Companies",
      description: "A free-to-start AI-powered intelligence platform designed to give mid-market leaders access to market signals, competitive benchmarking, and growth scenario modeling.",
      delay: 0.2,
      link: "/initiatives/intelligence-commons",
      image: "/hero-intelligence.png",
    },
    {
      headline: "Regional Business Intelligence Partnerships",
      title: "Partnering With Local Chambers to Build Data-Driven Growth Ecosystems",
      description: "NexDyne collaborates with chambers of commerce, economic development organizations, and industry associations to deliver structured intelligence and analytics.",
      delay: 0.3,
      link: "/initiatives/regional-partnerships",
      image: "/partnership-handshake.png",
    },
  ];

  // Simulate initial load and preload images
  useEffect(() => {
    const imagePromises = initiatives.map((initiative, index) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = initiative.image;
        img.onload = () => {
          setImagesLoaded(prev => ({ ...prev, [index]: true }));
          resolve();
        };
        img.onerror = () => {
          setImagesLoaded(prev => ({ ...prev, [index]: true }));
          resolve();
        };
      });
    });

    Promise.all(imagePromises).then(() => {
      // Add a small delay for smoother transition
      setTimeout(() => setIsLoading(false), 300);
    });
  }, []);

  return (
    <section id="initiatives" className="py-12 sm:py-16 md:py-28 lg:py-32 bg-white relative overflow-hidden">
      {/* Use same container and padding as CapabilitiesExplorer */}
      <div className="container px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        {/* Section Header - Centered Above Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.1em] sm:tracking-[0.15em] text-muted-foreground mb-4 sm:mb-6 block">
            NexDyne Initiatives
          </span>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight leading-[1.2] sm:leading-[1.15] text-charcoal mb-4 sm:mb-6 font-serif max-w-4xl mx-auto px-2 sm:px-0">
            Building intelligent, competitive, and resilient mid-market businesses across the United States
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Programs that advance entrepreneurship, operational excellence, and regional economic competitiveness
          </p>
        </motion.div>

        {/* Three Cards - Same grid and gap as CapabilitiesExplorer */}
        {isLoading ? (
          <InitiativesSkeleton count={3} />
        ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: initiative.delay }}
              className="group"
            >
              <Link href={initiative.link}>
                <div className="relative overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white h-full flex flex-col rounded-lg">
                  {/* Image Section - Top - Larger aspect ratio (60% of card) */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={initiative.image} 
                      alt={initiative.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Subtle gradient overlay for image polish */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  {/* Text Section - Bottom with Deep McKinsey Blue Background */}
                  <div className="bg-base p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
                    <span className="text-secondary text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.1em] sm:tracking-[0.15em] mb-1.5 sm:mb-2 block">
                      {initiative.headline}
                    </span>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white leading-tight font-serif mb-2 sm:mb-3">
                      {initiative.title}
                    </h3>
                    <p className="text-white/75 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 flex-grow">
                      {initiative.description}
                    </p>
                    <div className="mt-auto">
                      <span className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-white text-base rounded font-semibold text-xs sm:text-sm hover:bg-white/90 transition-colors">
                        Learn more
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        )}

        {/* Explore All Initiatives CTA - Centered like CapabilitiesExplorer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/initiatives">
            <button className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-base text-white rounded font-semibold text-sm sm:text-base hover:bg-base transition-colors">
              Explore All Initiatives
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
