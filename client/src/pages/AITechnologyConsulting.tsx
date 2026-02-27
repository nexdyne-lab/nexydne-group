import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { ArrowRight, Play, ChevronRight, Sparkles, Cpu, Users, Shield, Cloud, BarChart3 } from "lucide-react";
import { useState, useEffect, useRef } from "react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

// On-page navigation items
const navItems = [
  { id: "approach", label: "Our Approach" },
  { id: "accelerators", label: "NexDyne Accelerators" },
  { id: "case-studies", label: "Case Studies" },
  { id: "services", label: "Services" },
  { id: "insights", label: "Insights" }
];

// Our Approach pillars - Based on Strategic Expansion Plan
const approachPillars = [
  {
    title: "Strategy that identifies value",
    description: "We use advanced process mining and AI-driven analysis to map your operations, simulate automation scenarios, and quantify ROI before implementation. No guesswork—just data-driven decisions that serve your biggest opportunities.",
    image: "/images/approach-strategy.jpg",
    icon: BarChart3
  },
  {
    title: "Technology that accelerates",
    description: "Our proprietary NexDyne Accelerators—including ProcessFlow AI—deliver consistent, high-quality results faster. We combine cloud modernization, data architecture, and AI deployment into solutions that scale with your ambition.",
    image: "/images/approach-technology.jpg",
    icon: Cpu
  },
  {
    title: "Adoption that sustains",
    description: "Technology adoption is the greatest risk to any transformation. Our Intelligent Adoption & Change Management service ensures your teams are trained, culturally aligned, and ready to maximize new systems for lasting impact.",
    image: "/images/approach-change.jpg",
    icon: Users
  }
];

// NexDyne Accelerators - Proprietary tools from Strategic Plan
const accelerators = [
  {
    name: "ProcessFlow AI",
    tagline: "Intelligent Process Optimization",
    description: "Our flagship accelerator uses process mining expertise to rapidly map client operations, simulate AI-driven automation scenarios, and quantify ROI before implementation. Delivers consistent results with fewer consultant hours.",
    features: ["Process Mining & Mapping", "AI Automation Simulation", "ROI Quantification", "Rapid Deployment"],
    image: "/images/processflow-ai.jpg",
    link: "/capabilities/ai-technology-consulting/processflow-ai"
  },
  {
    name: "Cloud Modernization Pathways",
    tagline: "Future-Proof Infrastructure",
    description: "Certified modernization frameworks leveraging our AWS and Google Cloud partnerships. Transform legacy systems into cloud-native architectures that ensure security, scalability, and operational resilience.",
    features: ["AWS & Google Cloud Certified", "Legacy System Migration", "Cloud-Native Architecture", "Security-by-Design"],
    image: "/images/cloud-modernization.jpg",
    link: "/capabilities/ai-technology-consulting/cloud-modernization"
  },
  {
    name: "Intelligent Adoption Suite",
    tagline: "Change Management Excellence",
    description: "Comprehensive toolkit for ensuring technology adoption success. Includes upskilling programs, cultural alignment workshops, and performance monitoring to track adoption rates post-launch.",
    features: ["Agentic AI Literacy Training", "Cultural Alignment Workshops", "Performance Monitoring", "Adoption Analytics"],
    image: "/images/adoption-suite.jpg",
    link: "/capabilities/ai-technology-consulting/intelligent-adoption"
  }
];

// Case studies - Relevant to mid-market focus (50-200 employees)
const caseStudies = [
  {
    industry: "Professional Services",
    title: "Regional accounting firm automates document processing, reducing manual work by 70%",
    description: "A 120-employee accounting firm deployed ProcessFlow AI to streamline tax document processing and client onboarding workflows.",
    metrics: "70% reduction in manual processing time",
    image: "/images/case-professional-services.jpg",
    link: "/capabilities/ai-technology-consulting/case-study/accounting-firm"
  },
  {
    industry: "Financial Services",
    title: "Credit union transforms member services with AI-powered analytics",
    description: "A mid-sized credit union with 85 employees implemented our Customer Intelligence Platform to personalize member experiences and predict service needs.",
    metrics: "45% improvement in member satisfaction scores",
    image: "/images/case-financial-services.jpg",
    link: "/capabilities/ai-technology-consulting/case-study/credit-union"
  },
  {
    industry: "Healthcare",
    title: "Medical practice network deploys predictive scheduling to optimize patient flow",
    description: "A network of 12 clinics with 180 staff members used our AI solutions to reduce wait times and improve appointment utilization.",
    metrics: "35% reduction in patient wait times",
    image: "/images/case-healthcare.jpg",
    link: "/capabilities/ai-technology-consulting/case-study/medical-practice"
  }
];

// Foundational Services - From Strategic Plan recommendations
const services = [
  {
    title: "Cloud & Data Architecture Modernization",
    description: "Build the future-proof foundation your AI initiatives require. We modernize legacy infrastructure, implement cloud-native solutions, and establish data architectures that enable intelligent operations.",
    icon: Cloud,
    link: "/capabilities/ai-technology-consulting/services/cloud-architecture"
  },
  {
    title: "Cyber Resilience & Data Privacy",
    description: "Security-by-Design integrated into every transformation. We ensure your systems meet regulatory requirements while protecting against evolving threats—essential for Financial Services and Healthcare clients.",
    icon: Shield,
    link: "/capabilities/ai-technology-consulting/services/cyber-resilience"
  },
  {
    title: "Intelligent Adoption & Change Management",
    description: "The human element determines transformation success. Our dedicated service line ensures your workforce is trained, culturally aligned, and equipped to embrace automation for sustainable results.",
    icon: Users,
    link: "/capabilities/ai-technology-consulting/services/intelligent-adoption"
  },
  {
    title: "Agentic AI & Generative AI",
    description: "Design and deploy autonomous AI systems that redefine business operations. Our specialized AI practice focuses on cutting-edge solutions that deliver measurable competitive advantage.",
    icon: Sparkles,
    link: "/capabilities/ai-technology-consulting/services/agentic-ai"
  }
];

// Insights - NexDyne thought leadership
const insights = [
  {
    type: "Report",
    title: "Mid-Market AI Access: How growing businesses can compete with enterprise technology",
    image: "/images/insight-ai-state.jpg",
    link: "/insights/mid-market-ai-access"
  },
  {
    type: "Article",
    title: "The 85% efficiency improvement: What our clients actually experience",
    image: "/images/insight-automation.jpg",
    link: "/insights/efficiency-improvement-reality"
  },
  {
    type: "Whitepaper",
    title: "Process mining fundamentals: From operational mapping to AI automation",
    image: "/images/insight-process-mining.jpg",
    link: "/insights/process-mining-guide"
  },
  {
    type: "Article",
    title: "Why change management determines AI project success",
    image: "/images/insight-data-culture.jpg",
    link: "/insights/change-management-ai-success"
  }
];

export default function AITechnologyConsulting() {
  const [activeSection, setActiveSection] = useState("approach");
  const [isNavSticky, setIsNavSticky] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Handle scroll for sticky nav and active section
  useEffect(() => {
    const handleScroll = () => {
      // Sticky nav logic
      if (navRef.current) {
        const navTop = navRef.current.getBoundingClientRect().top;
        setIsNavSticky(navTop <= 80);
      }

      // Active section detection
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-charcoal font-sans">
      <SEO 
        title="AI and Technology Consulting" 
        description="NexDyne delivers AI and technology consulting for mid-market organizations. Our proprietary Accelerators, including ProcessFlow AI, help businesses achieve 85% average efficiency improvements through intelligent automation and sustainable transformation."
        canonical="/capabilities/ai-technology-consulting"
      />

      <Navigation />

      {/* Hero Section - Clean minimal design */}
      <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden bg-charcoal">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight text-white leading-[1.05] mb-4 eb-garamond     ">
                AI and Technology Consulting
              </h1>
              
              <p className="text-xl text-white leading-relaxed max-w-xl">
                Transform your operations with intelligent automation and data-driven solutions. We help mid-market organizations achieve sustainable efficiency improvements through our proven methodology and proprietary accelerators.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden lg:flex items-center justify-center"
            >
              <img 
                src="/images/technology-abstract.jpg" 
                alt="Technology Visualization" 
                className="max-w-md"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* On-page Navigation */}
      {/* <div 
        ref={navRef}
        className={`bg-white border-b border-border transition-all duration-300 ${
          isNavSticky ? "sticky top-[72px] z-40 shadow-sm" : ""
        }`}
      >
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-8 py-4 overflow-x-auto">
            <span className="text-sm font-medium text-muted-foreground whitespace-nowrap hidden sm:block">On this page:</span>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium whitespace-nowrap px-3 py-2 rounded-full transition-colors ${
                  activeSection === item.id
                    ? "bg-subtle text-charcoal font-semibold"
                    : "text-muted-foreground hover:text-charcoal"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div> */}

      {/* Our Approach Section */}
      <section id="approach" className="py-20 md:py-32 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          {/* Section Header */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-4xl mx-auto mb-16 md:mb-24"
          >
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-muted-foreground uppercase mb-4 block">
              Our Approach
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
              Strategy, technology, and people—{" "}
              <span className="italic">integrated for impact.</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              We've learned that sustainable transformation requires more than great technology. It demands strategic clarity, proven tools, and teams ready to embrace change.
            </p>
          </motion.div>

          {/* Three Pillars */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          >
            {approachPillars.map((pillar, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="group"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-6 bg-subtle">
                  <img 
                    src={pillar.image} 
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg">
                    <pillar.icon className="w-6 h-6 text-charcoal" />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-serif font-bold mb-4 text-charcoal">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mt-16"
          >
            <Link href="/contact">
              <span className="inline-flex items-center gap-2 px-8 py-4 border-2 border-charcoal text-charcoal font-bold rounded-full cursor-pointer hover:bg-secondary hover:border-secondary hover:text-white transition-colors group">
                Discuss your transformation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* NexDyne Accelerators Section */}
      <section id="accelerators" className="py-20 md:py-32 bg-slate-50">
        <div className="container px-4 sm:px-6 md:px-12">
          {/* Section Header */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-muted-foreground uppercase mb-4 block">
              Proprietary Tools
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight">
              NexDyne Accelerators
            </h2>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Our proprietary frameworks and tools deliver consistent, high-quality results faster—shifting our value proposition from services-only to services plus proven technology.
            </p>
          </motion.div>

          {/* Accelerators */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-12"
          >
            {accelerators.map((accelerator, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative aspect-[16/10] overflow-hidden rounded-xl bg-muted ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}>
                  <img 
                    src={accelerator.image} 
                    alt={accelerator.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="text-xs font-bold tracking-[0.15em] text-muted-foreground uppercase mb-2 block">
                    {accelerator.tagline}
                  </span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-4 text-charcoal">
                    {accelerator.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {accelerator.description}
                  </p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {accelerator.features.map((feature, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-white border border-border rounded-full text-sm text-charcoal/80"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <Link href={accelerator.link}>
                    <span className="inline-flex items-center gap-2 text-charcoal font-medium hover:text-secondary transition-colors group">
                      Learn more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 md:py-32 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          {/* Section Header */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-muted-foreground uppercase mb-4 block">
              Client Success
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight">
              Results that speak for themselves
            </h2>
            <p className="text-lg text-muted-foreground mt-6">
              See how mid-market organizations like yours have transformed operations with NexDyne's AI and technology solutions.
            </p>
          </motion.div>

          {/* Case Studies Grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {caseStudies.map((study, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="group cursor-pointer"
              >
                <Link href={study.link}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-4 bg-subtle">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-xs font-bold tracking-wider text-white/80 uppercase">
                        {study.industry}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-charcoal group-hover:text-secondary transition-colors leading-snug mb-2">
                    {study.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {study.description}
                  </p>
                  <span className="text-sm font-semibold text-charcoal">
                    {study.metrics}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* View All CTA */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mt-12"
          >
            <Link href="/case-studies">
              <span className="inline-flex items-center gap-2 px-8 py-4 border-2 border-charcoal text-charcoal font-bold rounded-full cursor-pointer hover:bg-secondary hover:border-secondary hover:text-white transition-colors group">
                View all case studies
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-slate-50">
        <div className="container px-4 sm:px-6 md:px-12">
          {/* Section Header */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-muted-foreground uppercase mb-4 block">
              Foundational Services
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight">
              The complete value chain
            </h2>
            <p className="text-lg text-muted-foreground mt-6">
              From foundational architecture and security to cutting-edge AI deployment and change management—we control every element of your transformation.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="group"
              >
                <Link href={service.link}>
                  <div className="bg-white rounded-xl p-8 h-full border border-border/50 hover:shadow-lg hover:border-border transition-all cursor-pointer">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                      <service.icon className="w-6 h-6 text-charcoal group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-serif font-bold mb-3 text-charcoal">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-charcoal font-medium text-sm group-hover:text-secondary transition-colors">
                      Learn more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="py-20 md:py-32 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          {/* Section Header */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-muted-foreground uppercase mb-4 block">
              Insights
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight">
              Our latest thinking on AI & technology
            </h2>
          </motion.div>

          {/* Insights Grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {insights.map((insight, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="group cursor-pointer"
              >
                <Link href={insight.link}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-4 bg-subtle">
                    <img 
                      src={insight.image} 
                      alt={insight.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <span className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
                    {insight.type}
                  </span>
                  <h3 className="text-base font-serif font-bold mt-2 text-charcoal group-hover:text-secondary transition-colors leading-snug">
                    {insight.title}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* View All CTA */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mt-12"
          >
            <Link href="/insights">
              <span className="inline-flex items-center gap-2 px-8 py-4 border-2 border-charcoal text-charcoal font-bold rounded-full cursor-pointer hover:bg-secondary hover:border-secondary hover:text-white transition-colors group">
                See all insights
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Dark background instead of green */}
      <section className="py-20 md:py-32 bg-charcoal">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Ready to transform your operations?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join the mid-market organizations achieving 85% average efficiency improvements with NexDyne's AI and technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <Link href="/contact">
                <span className="inline-flex items-center gap-2 px-8 py-4 bg-white text-charcoal font-bold rounded-full cursor-pointer hover:bg-secondary hover:text-white transition-colors group">
                  Start a conversation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link href="/capabilities">
                <span className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-full cursor-pointer hover:bg-white hover:text-charcoal transition-colors">
                  Explore all capabilities
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
