import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

// Capabilities data
const capabilities = [
  {
    id: "artificial-intelligence",
    title: "Artificial Intelligence",
    description: "We help clients unlock the power of AI at scale, modernize technology delivery, and build new businesses to fuel growth. Our AI solutions transform operations and create competitive advantage.",
    link: "/capabilities/artificial-intelligence",
    image: "/images/capability-ai.png"
  },
  {
    id: "business-building",
    title: "Business and Organizational Purpose",
    description: "We partner with organizations to define and activate their purpose, aligning strategy with values to drive sustainable growth and meaningful impact across all stakeholders.",
    link: "/capabilities/business-building",
    image: "/images/capability-business.jpg"
  },
  {
    id: "business-transformation",
    title: "Business Transformation",
    description: "We guide enterprises through comprehensive transformation journeys, reimagining operating models and capabilities to thrive in rapidly evolving markets.",
    link: "/capabilities/business-transformation",
    image: "/images/capability-technology.jpg"
  },
  {
    id: "digital-technology",
    title: "Digital, Technology & Data",
    description: "We architect modern digital foundations, leveraging cloud, data platforms, and emerging technologies to enable agility and innovation at enterprise scale.",
    link: "/capabilities/digital-technology",
    image: "/images/solution-enterprise-tech.png"
  },
  {
    id: "marketing-sales",
    title: "Marketing, Sales & Pricing",
    description: "We optimize go-to-market strategies through data-driven insights, precision targeting, and dynamic pricing to maximize revenue and customer lifetime value.",
    link: "/capabilities/growth-marketing-sales",
    image: "/images/solution-growth.png"
  },
  {
    id: "operations",
    title: "Operations",
    description: "We streamline end-to-end operations, implementing lean methodologies and intelligent automation to reduce costs while improving quality and speed.",
    link: "/capabilities/operations",
    image: "/images/solution-process.png"
  },
  {
    id: "strategy",
    title: "Strategy",
    description: "We develop winning strategies grounded in deep market analysis, competitive intelligence, and scenario planning to position organizations for long-term success.",
    link: "/capabilities/strategy-corporate-finance",
    image: "/images/financial-analysis.jpg"
  },
  {
    id: "sustainability",
    title: "Climate Change and Sustainability",
    description: "We help organizations navigate the transition to sustainable business models, reducing environmental impact while capturing new growth opportunities.",
    link: "/capabilities/sustainability",
    image: "/images/industry-healthcare.jpg"
  }
];

// Industries data
const industries = [
  {
    id: "aerospace-defense",
    title: "Aerospace and Defense",
    description: "We support aerospace and defense organizations in navigating complex regulatory environments, optimizing supply chains, and accelerating innovation programs.",
    link: "/industries/aerospace-defense",
    image: "/images/industry-finance.jpg"
  },
  {
    id: "automotive",
    title: "Automotive Industry",
    description: "We help automotive companies navigate electrification, autonomous driving, and mobility-as-a-service transformations while optimizing traditional operations.",
    link: "/industries/automotive",
    image: "/images/capability-technology.jpg"
  },
  {
    id: "consumer-products",
    title: "Consumer Products Industry",
    description: "Brands around the world must master digital to survive. We have the expertise and capabilities to power consumer-centric innovation grounded in data, analytics, and AI.",
    link: "/industries/consumer-products",
    image: "/images/solution-customer.png"
  },
  {
    id: "education",
    title: "Education",
    description: "We partner with educational institutions to modernize learning delivery, optimize operations, and leverage technology to improve student outcomes.",
    link: "/industries/education",
    image: "/images/capability-business.jpg"
  },
  {
    id: "energy",
    title: "Energy",
    description: "We guide energy companies through the transition to sustainable operations, optimizing assets and building new capabilities for a decarbonized future.",
    link: "/industries/energy",
    image: "/images/solution-enterprise-tech.png"
  },
  {
    id: "financial-institutions",
    title: "Financial Institutions",
    description: "We help financial services firms modernize legacy systems, enhance customer experiences, and navigate regulatory complexity while driving digital transformation.",
    link: "/industries/financial-services",
    image: "/images/industry-finance.jpg"
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description: "We support healthcare organizations in improving patient outcomes, optimizing operations, and leveraging data to deliver more personalized, efficient care.",
    link: "/industries/healthcare",
    image: "/images/industry-healthcare.jpg"
  },
  {
    id: "technology",
    title: "Technology, Media & Telecommunications",
    description: "We help TMT companies accelerate innovation, optimize go-to-market strategies, and build scalable platforms for the digital economy.",
    link: "/industries/technology",
    image: "/images/capability-ai.png"
  }
];

type SelectionType = 'capabilities' | 'industries';

export function CapabilitiesExplorer() {
  const [activeDropdown, setActiveDropdown] = useState<SelectionType | null>(null);
  const [selectedCapability, setSelectedCapability] = useState<typeof capabilities[0] | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<typeof industries[0] | null>(null);

  const handleCapabilitySelect = (capability: typeof capabilities[0]) => {
    setSelectedCapability(capability);
    setSelectedIndustry(null);
    setActiveDropdown(null);
  };

  const handleIndustrySelect = (industry: typeof industries[0]) => {
    setSelectedIndustry(industry);
    setSelectedCapability(null);
    setActiveDropdown(null);
  };

  const toggleDropdown = (type: SelectionType) => {
    setActiveDropdown(activeDropdown === type ? null : type);
  };

  const currentSelection = selectedCapability || selectedIndustry;
  const currentSelectionType = selectedCapability ? 'capability' : selectedIndustry ? 'industry' : null;

  return (
    <section className="min-h-[600px] lg:min-h-[700px] relative overflow-visible z-20">
      {/* Split Layout Container */}
      <div className="flex flex-col lg:flex-row min-h-[600px] lg:min-h-[700px]">
        {/* Left Side - Solid light cyan background with content */}
        <div className="w-full lg:w-1/2 relative px-6 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 lg:py-20 flex flex-col justify-center z-30" style={{ backgroundColor: 'var(--color-subtle)' }}>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl relative z-10"
          >
            {/* Headline */}
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-charcoal leading-[1.1] mb-4 sm:mb-6 eb-garamond"
            >
              How can we assist you today?
            </h2>
            
            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-charcoal/80 leading-relaxed mb-8 sm:mb-10">
              Learn more about our core areas of expertise by selecting your topic of interest.
            </p>

            {/* Dropdown Selectors */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Capabilities Dropdown */}
              <div className="relative flex-1">
                <button
                  onClick={() => toggleDropdown('capabilities')}
                  className={`w-full flex items-center justify-between px-5 py-4 rounded-lg border-2 transition-all duration-300 ${
                    activeDropdown === 'capabilities' || selectedCapability
                      ? 'bg-base text-white border-base'
                      : 'bg-white text-charcoal border-border hover:border-base'
                  }`}
                >
                  <span className="font-medium text-sm sm:text-base truncate pr-2">
                    {selectedCapability ? selectedCapability.title : 'Capabilities'}
                  </span>
                  {activeDropdown === 'capabilities' ? (
                    <ChevronUp className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 flex-shrink-0" />
                  )}
                </button>

                {/* Capabilities Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === 'capabilities' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-border/50 z-50 max-h-[300px] overflow-y-auto"
                    >
                      {capabilities.map((capability) => (
                        <button
                          key={capability.id}
                          onClick={() => handleCapabilitySelect(capability)}
                          className="w-full text-left px-5 py-3 text-sm sm:text-base text-charcoal hover:bg-subtle transition-colors border-b border-gray-50 last:border-b-0"
                        >
                          {capability.title}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Industries Dropdown */}
              <div className="relative flex-1">
                <button
                  onClick={() => toggleDropdown('industries')}
                  className={`w-full flex items-center justify-between px-5 py-4 rounded-lg border-2 transition-all duration-300 ${
                    activeDropdown === 'industries' || selectedIndustry
                      ? 'bg-base text-white border-base'
                      : 'bg-white text-charcoal border-border hover:border-base'
                  }`}
                >
                  <span className="font-medium text-sm sm:text-base truncate pr-2">
                    {selectedIndustry ? selectedIndustry.title : 'Industries'}
                  </span>
                  {activeDropdown === 'industries' ? (
                    <ChevronUp className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 flex-shrink-0" />
                  )}
                </button>

                {/* Industries Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === 'industries' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-border/50 z-50 max-h-[300px] overflow-y-auto"
                    >
                      {industries.map((industry) => (
                        <button
                          key={industry.id}
                          onClick={() => handleIndustrySelect(industry)}
                          className="w-full text-left px-5 py-3 text-sm sm:text-base text-charcoal hover:bg-subtle transition-colors border-b border-gray-50 last:border-b-0"
                        >
                          {industry.title}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Dynamic Image with CTA Card */}
        <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full">
          {/* Background Image - Changes based on selection */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSelection?.id || 'default'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${currentSelection?.image || '/images/tablet-hands-default.jpg'})` 
                }}
              />
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-charcoal/30" />
            </motion.div>
          </AnimatePresence>

          {/* CTA Card - Appears when selection is made */}
          <AnimatePresence>
            {currentSelection && (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-x-6 sm:inset-x-8 lg:inset-x-12 bottom-8 sm:bottom-12 lg:bottom-16 lg:top-auto lg:right-12 lg:left-auto lg:w-[calc(100%-6rem)] max-w-lg"
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-2xl">
                  {/* Category Label */}
                  <span className="text-xs font-bold tracking-[0.15em] text-base uppercase mb-3 block">
                    {currentSelectionType === 'capability' ? 'Capability' : 'Industry'}
                  </span>
                  
                  {/* Title */}
                  <h3 
                    className="text-xl sm:text-2xl md:text-3xl text-charcoal leading-tight mb-4"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                  >
                    {currentSelection.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed mb-6">
                    {currentSelection.description}
                  </p>
                  
                  {/* CTA Button */}
                  <Link href={currentSelection.link}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-base text-white rounded-full font-semibold text-sm sm:text-base hover:bg-secondary transition-colors"
                    >
                      EXPLORE
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>


        </div>
      </div>
    </section>
  );
}
