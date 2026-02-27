import { motion } from "framer-motion";

/**
 * Skeleton loading state for initiative cards
 * Provides visual feedback while content is loading
 * Updated to match BCG-style cards with image top, blue text area below
 */
export function InitiativeCardSkeleton() {
  return (
    <div className="relative rounded-lg overflow-hidden bg-white shadow-lg h-full flex flex-col">
      {/* Image Section Skeleton - Top - Reduced height like BCG */}
      <div className="relative h-[200px] md:h-[220px] lg:h-[240px] bg-slate-200 overflow-hidden">
        {/* Shimmer sweep effect for image area */}
        <motion.div
          className="absolute inset-0 w-[200%]"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 0.5,
          }}
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 25%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.4) 75%, transparent 100%)",
          }}
        />
      </div>
      
      {/* Text Section Skeleton - Bottom with Blue Background - Tighter spacing */}
      <div className="bg-primary p-5 md:p-4 sm:p-5 md:p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
        {/* Category tag skeleton */}
        <motion.div 
          className="h-2.5 w-36 bg-white/20 rounded mb-2"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        
        {/* Title skeleton - two lines */}
        <div className="space-y-2 mb-3">
          <motion.div 
            className="h-5 w-full bg-white/20 rounded"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }}
          />
          <motion.div 
            className="h-5 w-4/5 bg-white/20 rounded"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          />
        </div>
        
        {/* Description skeleton - three lines */}
        <div className="space-y-2 mb-5 sm:mb-6 md:mb-5 sm:mb-6 md:mb-8 flex-grow">
          <motion.div 
            className="h-3 w-full bg-white/15 rounded"
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
          />
          <motion.div 
            className="h-3 w-full bg-white/15 rounded"
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
          />
          <motion.div 
            className="h-3 w-2/3 bg-white/15 rounded"
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
          />
        </div>
        
        {/* CTA button skeleton */}
        <motion.div 
          className="h-10 w-32 bg-white/20 rounded mt-auto"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
        />
      </div>
    </div>
  );
}

/**
 * Grid of skeleton cards for the initiatives section
 */
export function InitiativesSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-4 sm:p-5 md:p-4 sm:p-5 md:p-6">
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <InitiativeCardSkeleton />
        </motion.div>
      ))}
    </div>
  );
}
