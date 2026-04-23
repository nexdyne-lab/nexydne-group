import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, DollarSign, Zap, Users, Cloud, Shield, Database, Server, Code, Cpu, Lock, RefreshCw } from "lucide-react";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { RelatedContent } from "@/components/RelatedContent";
import InteractiveTechStack from "@/components/InteractiveTechStack";
import ReadinessAssessment from "@/components/ReadinessAssessment";

export default function ITModernization() {
  const techCategories = [
    {
      title: "Cloud Infrastructure",
      description: "Scalable, secure, and resilient cloud foundations.",
      items: [
        { name: "AWS", category: "Cloud Provider", icon: <Cloud className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "Azure", category: "Cloud Provider", icon: <Cloud className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "Google Cloud", category: "Cloud Provider", icon: <Cloud className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "Kubernetes", category: "Container Orchestration", icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" /> }
      ]
    },
    {
      title: "Integration & API",
      description: "Connecting systems for seamless data flow.",
      items: [
        { name: "MuleSoft", category: "Integration Platform", icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "Kafka", category: "Event Streaming", icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "GraphQL", category: "API Query Language", icon: <Code className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "Apigee", category: "API Management", icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" /> }
      ]
    },
    {
      title: "Modern Databases",
      description: "High-performance data storage and retrieval.",
      items: [
        { name: "PostgreSQL", category: "Relational DB", icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "MongoDB", category: "NoSQL DB", icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "Snowflake", category: "Data Warehouse", icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: "Redis", category: "In-Memory Store", icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" /> }
      ]
    }
  ];

  const assessmentQuestions = [
    {
      id: "q1",
      text: "How would you describe your current IT infrastructure?",
      options: [
        { value: 1, label: "Mostly on-premise legacy servers" },
        { value: 2, label: "Hybrid mix of on-premise and cloud" },
        { value: 3, label: "Cloud-native and scalable" }
      ]
    },
    {
      id: "q2",
      text: "How frequently do you release software updates?",
      options: [
        { value: 1, label: "Quarterly or less frequently" },
        { value: 2, label: "Monthly or bi-weekly" },
        { value: 3, label: "Daily or on-demand" }
      ]
    },
    {
      id: "q3",
      text: "How integrated are your core business systems?",
      options: [
        { value: 1, label: "Siloed with manual data transfer" },
        { value: 2, label: "Partially integrated with batch processing" },
        { value: 3, label: "Real-time API-driven integration" }
      ]
    },
    {
      id: "q4",
      text: "What is your approach to security and compliance?",
      options: [
        { value: 1, label: "Reactive patching and manual audits" },
        { value: 2, label: "Regular scans and some automation" },
        { value: 3, label: "DevSecOps with automated compliance" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-base font-sans text-white selection:bg-primary selection:text-white">
      <SEO 
        title="IT Modernization" 
        description="Upgrade your IT infrastructure and accelerate your organization with modern, cloud-native architectures."
        canonical="/capabilities/technology/it-modernization"
      />
      <Navbar />
      
      {/* DZ10 Hero Section */}
      <section className="relative min-h-[440px] md:min-h-[560px] flex items-center pt-16 sm:pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80"
            alt="IT Modernization" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-base via-base/80 to-base/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-base via-transparent to-transparent" />
        </div>
        
        <div className="container px-4 sm:px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
              Technology
            </span>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-[1.05] mb-5 sm:mb-3 md:mb-4">
              IT <br />
              <span className="text-primary">Modernization</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-2xl mb-10">
              Upgrade your IT infrastructure and accelerate your organization. Eliminate sluggish legacy systems and move full speed ahead with modern, cloud-native architectures.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-white px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-base font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20">
                  Start Modernization
                </Button>
              </Link>
              <Link href="/cases">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-base font-semibold transition-all duration-300 bg-transparent hover:scale-[1.02]">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DZ10 Benefits Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block">
              Why Modernize
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              Transform your technology landscape
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-4 sm:p-6 md:p-8 lg:gap-5 sm:p-7 md:p-5 sm:p-7 md:p-10">
            {[
              {
                icon: <Rocket className="w-7 h-7" />,
                title: "Turbocharge Innovation",
                description: "Let modern IT supercharge your business. Innovation has never been this fast when systems enable rather than constrain."
              },
              {
                icon: <DollarSign className="w-7 h-7" />,
                title: "Lower IT Costs",
                description: "Say goodbye to endless maintenance and expensive updates. Futureproof systems drive down IT costs dramatically."
              },
              {
                icon: <Users className="w-7 h-7" />,
                title: "Energize Teams",
                description: "A smooth system energizes your business. Relieve frustration and let teams focus on achieving impact."
              },
              {
                icon: <Zap className="w-7 h-7" />,
                title: "Better Customer Service",
                description: "Give customers exactly what they want—faster, smarter, and fully in tune with their needs."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="p-4 sm:p-6 md:p-8 bg-base/5 rounded-lg sm:rounded-xl hover:bg-base transition-all duration-500 hover:scale-[1.02] hover:shadow-xl h-full">
                  <div className="mb-6 p-3 bg-primary/10 w-fit rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-charcoal mb-4 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-charcoal/60 leading-relaxed text-sm group-hover:text-white/70 transition-colors">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DZ10 Legacy Trap Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-base">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-8 sm:gap-6 sm:p-6 sm:p-8 md:p-12 lg:gap-8 sm:gap-6 sm:p-8 md:p-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
                Understanding IT Modernization
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 sm:mb-6 md:mb-8">
                The <span className="text-primary">legacy trap</span>
              </h2>
              
              <div className="space-y-6 text-lg text-white/70 leading-relaxed">
                <p>
                  Legacy software keeps your business trapped in the past—it holds back innovation, drives up costs, and makes your organization rigid when the market demands agility.
                </p>
                <p>
                  The symptoms are unmistakable: developers spend more time maintaining old code than building new features. Simple changes take weeks. Integration with modern tools is impossible. Security vulnerabilities multiply.
                </p>
                <p>
                  <strong className="text-white font-semibold">IT modernization</strong> transforms your technology landscape into a strategic asset rather than a liability.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="p-4 sm:p-6 md:p-8 bg-white/5 rounded-xl sm:rounded-2xl border border-white/10">
                <p className="text-xl text-white/80 italic mb-6 leading-relaxed">
                  "Our 15-year-old ERP system was costing us $200K annually in maintenance and preventing us from launching new products. Modernization cut our IT costs in half and reduced our product launch cycle from 9 months to 6 weeks."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    CTO
                  </div>
                  <div>
                    <div className="text-white font-semibold">Chief Technology Officer</div>
                    <div className="text-white/60 text-sm">Manufacturing Company</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DZ10 Offerings Grid */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block">
              Our Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              Modernization services
            </h2>
            <p className="text-xl text-charcoal/60 max-w-2xl">
              Comprehensive IT transformation capabilities to future-proof your technology landscape.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 sm:p-6 md:p-8 lg:gap-5 sm:p-7 md:p-5 sm:p-7 md:p-10">
            {[
              {
                icon: <Cloud className="w-7 h-7" />,
                title: "Cloud Migration",
                description: "Seamlessly migrate workloads to AWS, Azure, or Google Cloud with minimal disruption and maximum performance gains.",
                link: "/solutions/cloud-infrastructure"
              },
              {
                icon: <RefreshCw className="w-7 h-7" />,
                title: "Legacy System Replacement",
                description: "Replace outdated systems with modern, scalable architectures that enable rapid innovation and reduce maintenance burden.",
                link: "/solutions/legacy-modernization"
              },
              {
                icon: <Cpu className="w-7 h-7" />,
                title: "API-First Architecture",
                description: "Build flexible, integration-ready systems with modern API design that enables seamless connectivity across your ecosystem.",
                link: "/solutions/api-integration"
              },
              {
                icon: <Database className="w-7 h-7" />,
                title: "Data Platform Modernization",
                description: "Transform your data infrastructure with modern databases, data lakes, and analytics platforms for real-time insights.",
                link: "/solutions/data-platform"
              },
              {
                icon: <Lock className="w-7 h-7" />,
                title: "Security & Compliance",
                description: "Implement DevSecOps practices and automated compliance to protect your modernized infrastructure.",
                link: "/solutions/devops-automation"
              },
              {
                icon: <Server className="w-7 h-7" />,
                title: "Infrastructure as Code",
                description: "Automate infrastructure provisioning and management with modern IaC practices for consistency and scalability.",
                link: "/solutions/cloud-infrastructure"
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
                  <div className="h-full flex flex-col p-4 sm:p-6 md:p-8 bg-base/5 rounded-lg sm:rounded-xl hover:bg-base transition-all duration-500 hover:scale-[1.02] hover:shadow-xl">
                    <div className="mb-6 p-3 bg-primary/10 w-fit rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-charcoal mb-4 group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-charcoal/60 leading-relaxed text-sm flex-grow group-hover:text-white/70 transition-colors">
                      {item.description}
                    </p>
                    
                    <div className="mt-6 flex items-center text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      Learn more <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DZ10 Case Studies Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-base">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 md:mb-16 gap-4 sm:p-5 md:p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
                Our Impact
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Modernization success stories
              </h2>
            </motion.div>
            <Link href="/cases">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent transition-all duration-300 hover:scale-[1.02]">
                View all case studies
              </Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 sm:p-6 md:p-8 lg:gap-5 sm:p-7 md:p-5 sm:p-7 md:p-10">
            {[
              {
                title: "Legacy Core Banking Migration",
                category: "Banking",
                description: "Migrating 2M+ customers to cloud microservices with zero downtime.",
                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2670&auto=format&fit=crop",
                link: "/cases/bank-core-modernization"
              },
              {
                title: "Interoperable EHR Platform",
                category: "Healthcare",
                description: "Unifying patient data across 12 locations for real-time access.",
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop",
                link: "/cases/healthcare-ehr-modernization"
              },
              {
                title: "Payment Processing Automation",
                category: "Fintech",
                description: "Scaling transaction volume by 10x with automated reconciliation.",
                image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80",
                link: "/cases/fintech-payment-automation"
              }
            ].map((study, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={study.link} className="group cursor-pointer block">
                  <div className="relative overflow-hidden rounded-lg sm:rounded-xl aspect-[4/3] mb-6">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <div className="text-primary text-xs font-bold uppercase tracking-[0.15em] mb-3">{study.category}</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors leading-tight">
                    {study.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-4">{study.description}</p>
                  <div className="flex items-center text-white text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Read case study <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block">
              Technology Partners
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              Modernization technology stack
            </h2>
          </motion.div>
          
          <InteractiveTechStack 
            title="" 
            categories={techCategories} 
          />
        </div>
      </section>

      {/* Readiness Assessment */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-base">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-8 md:mb-12"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
              Self-Assessment
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Is your IT ready for modernization?
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Take our quick assessment to understand your current IT maturity and identify modernization opportunities.
            </p>
          </motion.div>
          
          <ReadinessAssessment 
            title="IT Modernization Readiness"
            description="Answer these questions to assess your organization's readiness for IT modernization."
            questions={assessmentQuestions} 
          />
        </div>
      </section>

      {/* Related Capabilities Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-base">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
              Explore Further
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Related Capabilities
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Discover how our integrated capabilities can drive comprehensive transformation for your organization.
            </p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-6 md:p-8">
            {[
              {
                title: "Data Transformation",
                subtitle: "Data Platform",
                description: "Build modern data infrastructure that enables real-time analytics and AI-powered decision making.",
                link: "/capabilities/data-transformation"
              },
              {
                title: "Artificial Intelligence",
                subtitle: "Intelligent Automation",
                description: "Deploy AI solutions that automate complex processes and unlock new operational efficiencies.",
                link: "/capabilities/artificial-intelligence"
              },
              {
                title: "Risk & Resilience",
                subtitle: "Security & Compliance",
                description: "Implement robust security frameworks and compliance automation for enterprise protection.",
                link: "/capabilities/risk-and-resilience"
              }
            ].map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={capability.link} className="group block h-full">
                  <div className="h-full p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:bg-white/10">
                    <div className="text-primary text-xs font-bold uppercase tracking-[0.15em] mb-2">{capability.title}</div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                      {capability.subtitle}
                    </h3>
                    <p className="text-white/60 leading-relaxed text-sm mb-6">
                      {capability.description}
                    </p>
                    <div className="flex items-center text-primary text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      Explore capability <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <RelatedContent 
        items={[
          {
            title: "CEO Guide to Data Modernization",
            category: "Technology",
            link: "/insights/ceo-guide-data-modernization",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80"
          },
          {
            title: "Composable Architecture Guide",
            category: "Architecture",
            link: "/insights/composable-architecture",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          },
          {
            title: "Integration Playbook",
            category: "Integration",
            link: "/insights/integration-playbook",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80"
          }
        ]}
      />

      <Footer />
    </div>
  );
}
