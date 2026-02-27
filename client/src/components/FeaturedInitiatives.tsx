import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function FeaturedInitiatives() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-16 sm:py-20 md:py-24 lg:py-32 bg-white text-foreground relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12 md:mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-charcoal">
            Our <span className="text-secondary">Initiatives</span>
          </h2>
        </motion.div>

        {/* Hero Image Section with Overarching Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          {/* Large Hero Image */}
          <div className="relative h-[500px] rounded-3xl overflow-hidden mb-6 sm:mb-8 md:mb-6 sm:mb-8 md:mb-12 shadow-xl sm:shadow-xl sm:shadow-2xl">
            <img 
              src="/initiatives-hero-entrepreneurship.8cc91785.png" 
              alt="The next generation of entrepreneurialism - Business leaders collaborating on digital transformation" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base/95 via-base/60 to-transparent" />
            
            {/* Hero Text Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-12 md:p-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Shaping the Future of
                <br />
                Enterprise Intelligence
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl leading-relaxed"
              >
                The next generation of operational excellence is being built today. Through strategic research, open collaboration, and hands-on learning, we're equipping mid-market companies with the intelligence and tools they need to compete at enterprise scale.
              </motion.p>
            </div>
          </div>


        </motion.div>

        {/* Individual Initiative Cards - Three-Column Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-6 md:p-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
          
          {/* Initiative 1: Automation Readiness Index */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group cursor-pointer bg-white p-4 sm:p-6 md:p-4 sm:p-6 md:p-8 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-base mb-2">
              Automation Readiness Index™
            </h3>
            <p className="text-sm text-secondary font-semibold uppercase tracking-wider mb-4">
              Annual Research Study
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              Our annual benchmark study measures operational efficiency across industries, providing data-driven insights on where intelligent automation delivers the highest ROI.
            </p>
            <div className="flex items-center text-secondary font-semibold group-hover:gap-3 gap-2 transition-all">
              <span>Learn more</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" />
            </div>
          </motion.div>

          {/* Initiative 2: Connected Systems Framework */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group cursor-pointer bg-white p-4 sm:p-6 md:p-4 sm:p-6 md:p-8 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-base mb-2">
              Connected Systems Framework
            </h3>
            <p className="text-sm text-secondary font-semibold uppercase tracking-wider mb-4">
              Open-Source Methodology
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              An open-source toolkit for evaluating integration architecture. Technical leaders use our framework to assess tech stacks, identify gaps, and eliminate data silos.
            </p>
            <div className="flex items-center text-secondary font-semibold group-hover:gap-3 gap-2 transition-all">
              <span>Learn more</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" />
            </div>
          </motion.div>

          {/* Initiative 3: AI Implementation Lab */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group cursor-pointer bg-white p-4 sm:p-6 md:p-4 sm:p-6 md:p-8 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-base mb-2">
              AI Implementation Lab
            </h3>
            <p className="text-sm text-secondary font-semibold uppercase tracking-wider mb-4">
              Executive Workshop Series
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              Hands-on workshops where operations leaders explore practical AI applications through real-world scenarios—from intelligent document processing to predictive analytics.
            </p>
            <div className="flex items-center text-secondary font-semibold group-hover:gap-3 gap-2 transition-all">
              <span>Learn more</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
