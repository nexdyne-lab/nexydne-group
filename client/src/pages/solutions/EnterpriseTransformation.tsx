import React, { useEffect, useState, useRef } from "react";
import { useLocation, Link } from "wouter";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Server, 
  Cloud, 
  Shield, 
  Code,
  Database, 
  ArrowRight, 
  Cpu, 
  Layers, 
  Zap,
  GitBranch,
  Terminal,
  Lock,
  Network,
  Workflow,
  CheckCircle,
  Users,
  Clock,
  TrendingUp,
  FileText,
  Lightbulb,
  Target,
  BarChart3
} from "lucide-react";
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";
import ConsultationForm from "@/components/ConsultationForm";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";

export default function Technology() {
  const [location, setLocation] = useLocation();
  const [activeSection, setActiveSection] = useState("what-we-do");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sticky nav sections
  const sections = [
    { id: "what-we-do", label: "What We Do" },
    { id: "capabilities", label: "Capabilities" },
    { id: "case-studies", label: "Case Studies" },
    { id: "how-we-work", label: "How We Work" },
    { id: "insights", label: "Insights" }
  ];

  const capabilities = [
    {
      title: "Cloud Infrastructure",
      description: "Move off aging servers without the drama. We handle AWS, Azure, and Google Cloud migrations that actually finish on time and on budget.",
      link: "/solutions/enterprise-transformation/cloud-infrastructure",
      icon: Server
    },
    {
      title: "Data Platform Modernization",
      description: "Your data is scattered across spreadsheets, legacy databases, and SaaS tools. We build unified platforms that make your data actually useful.",
      link: "/solutions/enterprise-transformation/legacy-modernization",
      icon: Database
    },
    {
      title: "Application Development",
      description: "Custom software that fits your business, not the other way around. From internal tools to customer-facing apps, we build what you need.",
      link: "/solutions/app-development",
      icon: Code
    },
    {
      title: "Security & Compliance",
      description: "SOC 2, HIPAA, PCI—whatever your industry requires. We build security in from the start, not as an afterthought.",
      link: "/solutions/enterprise-transformation/devops-automation",
      icon: Shield
    },
    {
      title: "AI & Automation",
      description: "Practical AI that solves real problems. Document processing, customer service, predictive analytics—without the hype.",
      link: "/capabilities/artificial-intelligence",
      icon: Cpu
    },
    {
      title: "Integration & APIs",
      description: "Connect your systems so data flows where it needs to go. No more manual exports or copy-paste between applications.",
      link: "/solutions/enterprise-transformation/api-integration",
      icon: Network
    },
    {
      title: "Technology Strategy",
      description: "Build a technology roadmap that aligns with where your business is heading. We help you prioritize investments and avoid costly detours.",
      link: "/solutions/enterprise-transformation/technology-strategy",
      icon: Lightbulb
    },
    {
      title: "Technology Cost Optimization",
      description: "Right-size your tech spending. We identify waste, renegotiate contracts, and help you get more value from your existing investments.",
      link: "/solutions/enterprise-transformation/cost-optimization",
      icon: TrendingUp
    }
  ];

  const caseStudies = [
    {
      title: "Accounting firm cuts document processing time by 70%",
      category: "PROFESSIONAL SERVICES",
      description: "A 120-employee regional accounting firm was drowning in manual document processing during tax season. We built an automated intake system that extracts data from client documents and populates their practice management software.",
      metric: "70%",
      metricLabel: "reduction in processing time",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
      link: "/case-studies/accounting-document-automation"
    },
    {
      title: "Credit union modernizes member services platform",
      category: "FINANCIAL SERVICES",
      description: "An 85-employee credit union was losing members to digital-first competitors. We rebuilt their member portal with modern UX and integrated it with their core banking system.",
      metric: "3x",
      metricLabel: "increase in digital engagement",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
      link: "/case-studies/credit-union-digital"
    },
    {
      title: "Medical practice network reduces patient wait times",
      category: "HEALTHCARE",
      description: "A network of 12 clinics with 180 staff was struggling with scheduling inefficiencies. We implemented a unified scheduling system with predictive analytics to optimize appointment slots.",
      metric: "40%",
      metricLabel: "reduction in patient wait times",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
      link: "/case-studies/healthcare-scheduling"
    },
    {
      title: "Food distributor launches B2B ordering platform",
      category: "DISTRIBUTION",
      description: "A regional food distributor with 95 employees was taking orders by phone and fax. We built a B2B e-commerce platform that integrates with their ERP and delivery routing system.",
      metric: "$1.2M",
      metricLabel: "annual cost savings",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
      link: "/case-studies/food-distributor-ecommerce"
    }
  ];

  const insights = [
    {
      category: "Technology",
      type: "Guide",
      title: "Cloud migration for mid-market companies: What actually matters",
      description: "Skip the enterprise playbook. Here's how growing companies should approach cloud migration without the complexity.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
      link: "/insights/cloud-migration-guide"
    },
    {
      category: "Digital Transformation",
      type: "Analysis",
      title: "The real cost of legacy systems: A mid-market perspective",
      description: "That old ERP isn't just slow—it's costing you more than you think. We break down the hidden costs.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
      link: "/insights/legacy-system-costs"
    },
    {
      category: "Strategy",
      type: "Perspective",
      title: "Why most digital transformations fail (and how to avoid it)",
      description: "It's not the technology. It's the approach. Here's what we've learned from 60+ modernization projects.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop",
      link: "/insights/digital-transformation-failures"
    },
    {
      category: "Artificial Intelligence",
      type: "Brief",
      title: "Practical AI for mid-market: Where to start",
      description: "Cut through the hype. Here are the AI use cases that actually deliver ROI for companies your size.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
      link: "/insights/practical-ai-guide"
    }
  ];

  const howWeWork = [
    {
      step: "01",
      title: "Discovery",
      description: "We map your current systems, identify pain points, and quantify the cost of doing nothing. No assumptions—just data."
    },
    {
      step: "02",
      title: "Architecture",
      description: "We design a solution that fits your business, your budget, and your team's capabilities. No gold-plating."
    },
    {
      step: "03",
      title: "Build",
      description: "We build in sprints with regular demos. You see progress every two weeks, not just at the end."
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "Go-live isn't the finish line. We stick around to fix issues, train your team, and ensure adoption."
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SEO 
        title="Technology" 
        description="Modernize your legacy systems with cloud-native architectures that ensure security, scalability, and operational resilience."
        canonical="/solutions/enterprise-transformation"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center pt-16 sm:pt-20 overflow-hidden bg-[#051C2C]">
        <div className="container px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 mb-6 sm:mb-8 flex-wrap">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <Link href="/capabilities" className="hover:text-white transition-colors">Capabilities</Link>
                <span>/</span>
                <span className="text-white">Technology</span>
              </nav>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl eb-garamond  tracking-tight text-white leading-[1.05] mb-3 sm:mb-4">
                Technology
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-xl">
                Companies with a strategic focus on technology outperform across industries. Stay ahead with tech foundations that fuel lasting growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden lg:flex items-center justify-center"
            >
              <img 
                src="/images/technology-hero-abstract.jpg" 
                alt="Technology Visualization" 
                className="max-w-md rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience & Impact Section - F100 Style */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl eb-garamond font-bold text-[#051C2C]">Our Experience & Impact</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                value: "60+", 
                description: "technology modernization projects completed for mid-market companies" 
              },
              { 
                value: "~$15M", 
                description: "in operational savings delivered to clients in the last three years" 
              },
              { 
                value: "12+", 
                description: "strategic partnerships across cloud, security, and AI platforms" 
              }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-l-4 border-[#0077B5] pl-6"
              >
                <div className="text-5xl md:text-6xl font-bold text-[#051C2C] mb-3">{stat.value}</div>
                <p className="text-lg text-[#051C2C]/60">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 overflow-x-auto py-4">
              <span className="text-sm text-gray-500 mr-4 whitespace-nowrap">On this page:</span>
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveSection(section.id);
                    document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                    activeSection === section.id
                      ? "text-[#0077B5] border-b-2 border-[#0077B5]"
                      : "text-gray-600 hover:text-[#0077B5]"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
            <Link href="/contact" className="hidden md:block">
              <Button className="bg-[#0077B5] hover:bg-[#005885] text-white">
                Talk to our team
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Thought Leadership Section - F100 Style */}
      <section id="what-we-do" className="py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left Column - Main Thought Leadership */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-2xl md:text-3xl font-serif text-[#051C2C] leading-relaxed mb-8">
                Your technology should be a growth engine, not a bottleneck. But for most mid-market companies, the reality is different: aging systems that cannot scale, data trapped in silos, and IT teams stretched thin just keeping things running.
              </p>
              
              <p className="text-lg text-[#051C2C]/70 leading-relaxed">
                Meanwhile, your competitors are moving faster, serving customers better, and making decisions with data you cannot access.
              </p>
            </motion.div>
            
            {/* Right Column - Supporting Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg text-[#051C2C]/70 leading-relaxed mb-8">
                We work with growing companies who have outgrown their starter tech stack but are not ready for the complexity and cost of enterprise solutions. Our approach is practical: we modernize your systems and architecture in phases, align your technology strategy with where your business is actually heading, and build foundations that support AI and automation without requiring a Fortune 500 budget.
              </p>
              
              {/* Bullet Points */}
              <ul className="space-y-4">
                {[
                  "Replace patchwork systems with unified platforms that your team can actually manage",
                  "Adopt Agile delivery methods that show progress in weeks, not quarters",
                  "Build operating models that let you do more with your current headcount",
                  "Create the data infrastructure you need to leverage AI when you are ready",
                  "Migrate to cloud with a roadmap that fits your budget and risk tolerance"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#0077B5] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-[#051C2C]/70">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Differentiator Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image with accent block */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80" 
                alt="Technology team collaboration" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              {/* Accent block */}
              <div className="absolute bottom-6 right-6 w-24 h-24 bg-[#0077B5] rounded-lg" />
            </motion.div>
            
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl eb-garamond font-bold text-[#051C2C] leading-[1.1] mb-8">
                We've learned what works—and what doesn't.
              </h2>
              
              <p className="text-xl text-[#051C2C]/70 leading-relaxed mb-6">
                The difference isn't luck. It's process. We've refined our approach over 60+ technology projects, learning what works for companies your size. We know how to modernize systems without disrupting operations, migrate to cloud without the drama, and build foundations that actually scale.
              </p>
              
              <p className="text-xl text-[#051C2C]/70 leading-relaxed">
                More importantly, we know when to say no—to shiny new tools that won't deliver ROI, to over-engineered solutions that your team can't maintain, and to timelines that set everyone up for failure.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach Section - McKinsey-inspired */}
      <section className="py-20 bg-[#051C2C]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00d4ff] mb-4 block">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-5xl eb-garamond font-light text-white">
              Build technology that grows with you
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Rethink your technology role",
                description: "We help you move technology from a cost center to a competitive advantage, connecting systems to business outcomes and enabling data-driven decisions."
              },
              {
                title: "Accelerate delivery without chaos",
                description: "We implement agile workflows, modern development practices, and automation that let your team ship faster without sacrificing quality or burning out."
              },
              {
                title: "Modernize without starting over",
                description: "We upgrade core platforms incrementally, reduce technical debt strategically, and build architecture that adapts as your business evolves."
              }
            ].map((pillar, i) => (
              <div key={i}>
                <h3 className="text-xl font-bold text-white mb-4">{pillar.title}</h3>
                <p className="text-gray-300 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#051C2C]">
                Get in touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* AI in Technology Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl eb-garamond font-bold text-[#051C2C] mb-6">
                How AI is Transforming Technology Operations
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                AI is reshaping how growing companies run their technology operations. Smart teams are embedding AI directly into their existing workflows—accelerating development cycles, strengthening security, and giving their people more time to focus on strategic work. Here's where we're seeing the biggest impact:
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  { title: "Development workflows", desc: "Code reviews, testing, and documentation that used to take days now happen in hours" },
                  { title: "Support and helpdesk", desc: "Triage tickets automatically, surface solutions from past issues, resolve common requests without human intervention" },
                  { title: "System monitoring", desc: "Detect anomalies before they become outages, automate routine maintenance tasks" },
                  { title: "Project coordination", desc: "Track progress, flag blockers, and generate status updates without chasing people down" },
                  { title: "Documentation", desc: "Keep your knowledge base current without making it someone's full-time job" },
                  { title: "Security posture", desc: "Spot unusual patterns in access logs and network traffic before breaches happen" },
                  { title: "Data quality", desc: "Catch inconsistencies and duplicates across your systems automatically" }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#051C2C] mt-1">•</span>
                    <div>
                      <span className="font-bold text-[#051C2C]">{item.title}.</span>{" "}
                      <span className="text-gray-600">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
              
              <Link href="/capabilities/artificial-intelligence" className="inline-flex items-center text-[#CC0000] font-semibold hover:underline">
                See how we help companies implement practical AI <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
            
            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop" 
                  alt="AI and technology transformation"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Results & Approach Two-Column Section */}
          <div className="grid md:grid-cols-2 gap-0 mt-16 border-t border-gray-200">
            {/* Left Column - Results We've Delivered */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 md:border-r border-gray-200"
            >
              <h3 className="text-2xl font-bold text-[#051C2C] mb-4">
                Results We've Delivered
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                From professional services firms to healthcare providers, we've helped companies across industries identify and implement AI use cases that align with their specific business goals and operational realities.
              </p>
              <Link href="/case-studies" className="inline-flex items-center text-[#051C2C] font-semibold hover:underline">
                See how we're helping companies win with AI <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>

            {/* Right Column - Our Approach */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 md:p-12"
            >
              <h3 className="text-2xl font-bold text-[#051C2C] mb-4">
                Our Approach
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We help technology teams become AI-ready by strengthening their foundations first—improving data quality, organizing knowledge assets, and ensuring existing systems can work alongside AI tools. Then we move fast to capture value while managing risk.
              </p>
              <Link href="/capabilities/artificial-intelligence" className="inline-flex items-center text-[#051C2C] font-semibold hover:underline">
                Learn more about our AI approach <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Can Help Section - H100 Style */}
      <section id="capabilities" className="py-12 sm:py-16 lg:py-24 bg-[#f8f8f7]">
        <div className="container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
              How We Can Help
            </span>
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C]">
              Our Technology Capabilities
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {capabilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link href={item.link} className="group block h-full">
                  <div className="h-full min-h-[220px] p-8 bg-white border-l-4 border-l-transparent group-hover:border-l-[#CC0000] border border-gray-200 transition-all duration-300 flex flex-col">
                    <div className="flex-1">
                      <h3 className="text-xl font-serif font-bold text-[#051C2C] leading-tight origin-top-left transition-all duration-300 group-hover:text-base group-hover:mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[#051C2C]/70 leading-relaxed text-sm max-h-0 overflow-hidden opacity-0 group-hover:max-h-[120px] group-hover:opacity-100 group-hover:mt-3 transition-all duration-300 ease-in-out">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex items-center text-[#CC0000] text-sm font-semibold mt-auto pt-4">
                      Read More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section - F100 Style */}
      <section id="case-studies" className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-end mb-12"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-4 block">
                Recent Work
              </span>
              <h2 className="text-3xl md:text-4xl eb-garamond font-bold text-[#051C2C]">
                Results from companies like yours.
              </h2>
            </div>
            <Link href="/case-studies" className="hidden md:flex items-center text-[#0077B5] font-semibold hover:underline">
              View all case studies <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={study.link} className="group block">
                  <div className="relative overflow-hidden rounded-lg bg-gray-100">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 text-xs font-bold uppercase tracking-wider text-[#051C2C] rounded">
                        {study.category}
                      </span>
                    </div>
                  </div>
                  <div className="pt-6">
                    <h3 className="text-xl font-bold text-[#051C2C] mb-3 group-hover:text-[#0077B5] transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {study.description}
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="text-3xl font-bold text-[#0077B5]">{study.metric}</span>
                      <span className="text-sm text-gray-500">{study.metricLabel}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section - Clean F100 Style */}
      <section id="how-we-work" className="py-12 sm:py-16 lg:py-24 bg-[#051C2C]">
        <div className="container px-4 sm:px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
              Our Process
            </span>
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-white mb-6">
              How we work with you.
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              No surprises. No scope creep. Just a proven process that delivers results.
            </p>
          </motion.div>

          {/* Process Steps - Clean Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-8">
            {howWeWork.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                {/* Large Step Number */}
                <div className="text-5xl sm:text-6xl lg:text-8xl font-bold text-[#0077B5]/30 group-hover:text-[#0077B5]/50 transition-colors duration-300 mb-4 sm:mb-6">
                  {step.step}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-serif font-bold text-white mb-4">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-white/60 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section - Bain-inspired */}
      <section id="insights" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container px-4 sm:px-6">
          {/* Header with horizontal lines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 mb-16"
          >
            <div className="flex-1 h-px bg-gray-300" />
            <h2 className="text-2xl md:text-3xl eb-garamond font-bold text-[#051C2C] text-center whitespace-nowrap">
              Our Enterprise Technology Insights
            </h2>
            <div className="flex-1 h-px bg-gray-300" />
          </motion.div>

          {/* 4-column grid of insight cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {insights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={insight.link} className="group block h-full">
                  <div className="h-full flex flex-col">
                    {/* Image */}
                    <div className="aspect-[4/3] overflow-hidden mb-4">
                      <img 
                        src={insight.image} 
                        alt={insight.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Category tag */}
                    <span className="text-sm font-semibold text-[#CC0000] mb-2">
                      {insight.category}
                    </span>
                    
                    {/* Title */}
                    <h3 className="text-lg font-bold text-[#051C2C] mb-3 leading-tight group-hover:underline">
                      {insight.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                      {insight.description}
                    </p>
                    
                    {/* Content type and bookmark */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <span className="text-sm text-gray-500">{insight.type}</span>
                      <svg className="w-5 h-5 text-gray-400 hover:text-[#051C2C] cursor-pointer transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* See More button */}
          <div className="text-center mt-12">
            <Link href="/insights">
              <Button variant="outline" className="border-[#051C2C] text-[#051C2C] hover:bg-[#051C2C] hover:text-white px-8">
                SEE MORE
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Capabilities Section with H100 Hover Effect */}
      <section className="py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
              Related Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C]">
              Explore related capabilities
            </h2>
          </motion.div>
          
          {/* H100 Hover Effect Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Strategy & Corporate Finance",
                description: "Align financial resources with strategic vision to unlock sustainable growth and maximize shareholder value.",
                link: "/capabilities/strategy-corporate-finance"
              },
              {
                title: "Business Building",
                description: "Launch new digital ventures and revenue streams with our proven playbook for rapid scaling and market validation.",
                link: "/capabilities/business-building"
              },
              {
                title: "Artificial Intelligence",
                description: "Harness the power of AI to transform operations, enhance decision-making, and create competitive advantage.",
                link: "/capabilities/artificial-intelligence"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={item.link} className="group block h-full">
                  <div className="h-full min-h-[200px] p-8 bg-white border-l-4 border-l-transparent group-hover:border-l-[#CC0000] border border-gray-200 transition-all duration-300 flex flex-col">
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif font-bold text-[#051C2C] leading-tight origin-top-left transition-all duration-300 group-hover:text-base group-hover:mb-2">
                        {item.title}
                      </h3>
                      
                      <p className="text-[#051C2C]/70 leading-relaxed text-sm max-h-0 overflow-hidden opacity-0 group-hover:max-h-[120px] group-hover:opacity-100 group-hover:mt-3 transition-all duration-300 ease-in-out">
                        {item.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center text-[#CC0000] text-sm font-semibold mt-auto pt-4">
                      Read More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0077B5]">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-white mb-6">
              Ready to modernize?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Let's talk about your technology challenges. No sales pitch—just an honest conversation about what's possible.
            </p>
            <Link href="/contact">
              <Button className="bg-white hover:bg-gray-100 text-[#051C2C] px-10 py-6 text-lg font-semibold transition-all">
                Schedule a Conversation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
