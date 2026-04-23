import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, ArrowUpRight, Sparkles, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";

const capabilities = [
  {
    id: "01",
    title: "Artificial Intelligence",
    description: "Harness the power of generative AI and machine learning to automate complex workflows and create competitive advantages for your organization.",
    link: "/capabilities/artificial-intelligence",
    image: "/images/capability-ai.png"
  },
  {
    id: "02",
    title: "Business Building",
    description: "Launch new digital ventures and revenue streams with our proven playbook for rapid scaling and market validation.",
    link: "/capabilities/business-building",
    image: "/images/capability-business.jpg"
  },
  {
    id: "03",
    title: "Technology",
    description: "Modernize your legacy systems with cloud-native architectures that ensure security, scalability, and operational resilience.",
    link: "/solutions/enterprise-transformation",
    image: "/images/capability-technology.jpg"
  },
  {
    id: "04",
    title: "Growth, Marketing & Sales",
    description: "Drive customer acquisition and retention through data-driven marketing strategies and precision sales enablement tools.",
    link: "/capabilities/growth-marketing-sales",
    image: "/images/solution-growth.png"
  },
  {
    id: "05",
    title: "Strategy & Corporate Finance",
    description: "Align your financial resources with strategic goals to maximize ROI and secure sustainable long-term growth.",
    link: "/capabilities/strategy-corporate-finance",
    image: "/images/financial-analysis.jpg"
  },
  {
    id: "06",
    title: "Operations",
    description: "Streamline end-to-end operations to reduce waste, improve quality, and accelerate delivery times across your organization.",
    link: "/capabilities/operations",
    image: "/images/solution-process.png"
  }
];

// Capability card with hover effect - image disappears, description appears
function CapabilityCard({ capability, index }: { capability: typeof capabilities[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <Link href={capability.link}>
        <div className="cursor-pointer bg-white border border-border overflow-hidden hover:shadow-lg transition-all duration-500 h-full">
          {/* Card content container with fixed height */}
          <div className="relative aspect-[4/3] overflow-hidden">
            {/* Image - visible by default, hidden on hover */}
            <div className="absolute inset-0 transition-opacity duration-500 ease-in-out group-hover:opacity-0">
              <img 
                src={capability.image}
                alt={capability.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Description overlay - hidden by default, visible on hover */}
            <div className="absolute inset-0 bg-white p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">
                  {capability.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {capability.description}
                </p>
              </div>
              
              {/* Learn More button */}
              <div className="mt-4">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded hover:bg-[var(--color-primary-hover)] transition-all duration-200 ease-in-out focus-visible:outline focus-visible:ring-2 focus-visible:ring-secondary">
                  LEARN MORE
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
          
          {/* Title Container - always visible below */}
          <div className="p-4 bg-white border-t border-border/50 group-hover:bg-subtle transition-colors duration-300">
            <h3 className="text-base font-medium text-charcoal">
              {capability.title}
            </h3>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Capabilities() {
  return (
    <div className="min-h-screen bg-white text-charcoal font-sans">
      <SEO 
        title="Capabilities" 
        description="Transformative solutions that bridge strategy and execution, powered by cutting-edge technology and deep industry expertise."
        canonical="/capabilities"
      />
      <Navigation />
      
      {/* Hero Section - All Black Background */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] bg-charcoal pt-20">
        <div className="container px-4 sm:px-6 md:px-12 h-full">
          <div className="flex items-center min-h-[40vh] md:min-h-[50vh]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl py-12"
            >
              {/* Breadcrumb */}
              <nav className="flex items-center space-x-2 text-sm text-white/50 mb-8">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight className="w-3 h-3" />
                <span className="text-white/70">Capabilities</span>
              </nav>
              
              <span className="inline-block text-xs md:text-sm font-bold tracking-[0.2em] text-white/70 uppercase mb-4">
                What We Do
              </span>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-3">
                Capabilities
              </h1>
              
              <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-xl">
                Transformative solutions that bridge strategy and execution, 
                powered by cutting-edge technology and deep industry expertise.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid with solutions-style cards */}
      <section className="py-16 md:py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16 max-w-3xl"
          >
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-primary uppercase">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-charcoal mt-4 leading-tight">
              Six pillars of transformation that drive measurable business outcomes
            </h2>
            <p className="text-base md:text-lg text-charcoal/70 mt-6 leading-relaxed">
              We combine deep expertise across six core disciplines to deliver measurable business outcomes. From intelligent automation to strategic growth, our integrated approach ensures every capability works in concert.
            </p>
          </motion.div>
          
          {/* Solutions-style card grid - 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {capabilities.map((cap, index) => (
              <CapabilityCard key={cap.id} capability={cap} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Capability Section */}
      <section className="py-16 md:py-12 sm:py-16 lg:py-24 bg-subtle overflow-hidden">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            {/* Image with layered depth */}
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative">
                {/* Background accent shape */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl transform -rotate-3" />
                
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src="/images/capability-ai.png" 
                    alt="AI and Technology Consulting" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* Floating badge */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-border/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground font-medium">Powered by</div>
                      <div className="text-sm font-bold text-charcoal">Advanced AI</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Content */}
            <motion.div 
              className="w-full lg:w-1/2 mt-6 lg:mt-0"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4 block">
                Capabilities Overview
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-charcoal leading-tight">
                AI and Technology{" "}
                <span className="relative">
                  <span className="relative z-10 text-primary">Consulting</span>
                  <span className="absolute bottom-2 left-0 right-0 h-3 bg-primary/10 -z-0" />
                </span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                Learn how our AI and Technology consulting is helping clients to outcompete and deliver value at scale through the latest trends in tech.
              </p>
              
              {/* Enhanced CTA button */}
              <Link href="/capabilities/ai-technology-consulting">
                <motion.span 
                  className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold text-base rounded-xl cursor-pointer group overflow-hidden relative transition-all duration-200 ease-in-out hover:bg-[var(--color-primary-hover)] focus-visible:outline focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative">Explore our AI solutions</span>
                  <ArrowUpRight className="relative w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200 ease-in-out" />
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Keep Exploring Section */}
      <section className="py-16 md:py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-base via-charcoal to-base text-on-dark relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        
        <div className="container px-4 sm:px-6 md:px-12 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl mb-12"
          >
            Keep exploring
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-white/20 pt-8">
            {[
              { title: "History of our firm", link: "/about" },
              { title: "Client service policies", link: "/about" },
            ].map((item, index) => (
              <Link href={item.link} key={index}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer flex items-center justify-between py-6 border-b border-white/10 hover:border-white/30 transition-colors duration-300"
                >
                  <h3 className="text-xl md:text-2xl font-medium group-hover:translate-x-4 transition-transform duration-300">
                    {item.title}
                  </h3>
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300 flex-shrink-0 ml-4">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-16 md:py-12 sm:py-16 lg:py-24 bg-subtle">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4">Connect</h2>
              <p className="text-muted-foreground text-base md:text-lg">Ready to transform your business?</p>
            </div>
            <Link href="/contact">
              <motion.button 
                className="px-10 py-4 bg-primary text-primary-foreground font-bold text-base hover:bg-[var(--color-primary-hover)] transition-all duration-200 ease-in-out shadow-lg hover:shadow-xl rounded-xl w-full md:w-auto focus-visible:outline focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
          
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-charcoal">
              {["LinkedIn", "Twitter", "Facebook"].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="text-sm font-medium hover:text-primary transition-colors duration-200 ease-in-out"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
