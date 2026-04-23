import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Layers, Zap, TrendingUp, Users, Database, Cloud, Shield, Settings, ChevronRight, Building2, Rocket, Target, BarChart3, Cpu, Globe, LineChart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function EnterpriseTransformationHub() {
  const transformationPillars = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Intelligent Process Optimization",
      description: "Eliminate inefficiencies with AI-powered automation that transforms manual workflows into intelligent, self-optimizing systems.",
      href: "/solutions/intelligent-process-optimization",
      stats: { value: "65%", label: "Process Efficiency Gain" },
      color: "from-[#0077B5] to-secondary"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Data-Driven Customer Intelligence",
      description: "Unlock deep customer insights through unified data platforms that enable personalized experiences at scale.",
      href: "/solutions/data-driven-customer-intelligence",
      stats: { value: "3.2x", label: "Customer LTV Increase" },
      color: "from-secondary to-[#0077B5]"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Accelerating Business Growth",
      description: "Drive revenue with conversion-optimized platforms, intelligent engagement systems, and data-driven experiences.",
      href: "/solutions/accelerating-business-growth",
      stats: { value: "47%", label: "Revenue Growth" },
      color: "from-[#0077B5] to-base"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Scalable Enterprise Transformation",
      description: "Modernize your core technology stack with cloud-native infrastructure built for scale, security, and speed.",
      href: "/solutions/scalable-enterprise-transformation",
      stats: { value: "10x", label: "Faster Deployment" },
      color: "from-base to-[#0077B5]"
    }
  ];

  const caseStudies = [
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      category: "Financial Services",
      title: "Global Bank Achieves 99.9% Uptime with Cloud Migration",
      description: "Migrated legacy core banking systems to cloud-native architecture, reducing operational costs by 45% while improving reliability.",
      stats: [
        { value: "99.9%", label: "Uptime" },
        { value: "45%", label: "Cost Reduction" }
      ],
      href: "/cases/bank-core-modernization"
    },
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      category: "Manufacturing",
      title: "Manufacturer Reduces Downtime 78% with Predictive Maintenance",
      description: "Implemented IoT-powered predictive maintenance system that transformed reactive operations into proactive optimization.",
      stats: [
        { value: "78%", label: "Downtime Reduction" },
        { value: "$4.2M", label: "Annual Savings" }
      ],
      href: "/cases/manufacturing-predictive-maintenance"
    },
    {
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      category: "Retail",
      title: "Fashion Retailer Boosts Revenue 47% with Headless Commerce",
      description: "Built headless commerce platform with AI-powered recommendations that transformed the customer experience.",
      stats: [
        { value: "47%", label: "Revenue Growth" },
        { value: "2.8x", label: "Conversion Rate" }
      ],
      href: "/cases/ecommerce-conversion-growth"
    },
    {
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
      category: "Healthcare",
      title: "Healthcare Network Transforms Patient Experience",
      description: "Unified patient data across 12 facilities, enabling personalized care pathways and reducing administrative burden.",
      stats: [
        { value: "35%", label: "Admin Time Saved" },
        { value: "92%", label: "Patient Satisfaction" }
      ],
      href: "/cases/healthcare-patient-engagement"
    },
    {
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80",
      category: "Insurance",
      title: "Insurance Provider Automates 68% of Customer Inquiries",
      description: "Deployed AI chatbot that handles complex policy questions, reducing support costs while improving satisfaction.",
      stats: [
        { value: "68%", label: "Automated" },
        { value: "$2.1M", label: "Cost Savings" }
      ],
      href: "/cases/insurance-chatbot-automation"
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      category: "SaaS",
      title: "SaaS Company Triples Trial-to-Paid Conversion",
      description: "Systematic CRO program with behavioral analytics transformed the onboarding experience and revenue model.",
      stats: [
        { value: "3x", label: "Conversion" },
        { value: "24%", label: "Trial-to-Paid" }
      ],
      href: "/cases/saas-conversion-optimization"
    }
  ];

  const insights = [
    {
      category: "Research",
      title: "The CEO's Guide to Data Modernization",
      description: "How forward-thinking leaders are building data-driven organizations that outperform competitors.",
      href: "/insights/ceo-guide-data-modernization",
      readTime: "12 min read"
    },
    {
      category: "Whitepaper",
      title: "Enterprise AI: From Pilot to Production",
      description: "Lessons from 50+ AI implementations on scaling from proof-of-concept to enterprise-wide deployment.",
      href: "/insights/enterprise-transformation-ai",
      readTime: "18 min read"
    },
    {
      category: "Framework",
      title: "The Performance Improvement Framework",
      description: "Our proven methodology for identifying, prioritizing, and capturing operational improvements.",
      href: "/insights/performance-improvement-framework",
      readTime: "15 min read"
    },
    {
      category: "Guide",
      title: "Building a Data Culture",
      description: "Practical steps for creating an organization where data-driven decision making is the norm.",
      href: "/insights/building-data-culture",
      readTime: "10 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-base font-sans text-white selection:bg-primary selection:text-white">
      <SEO 
        title="Enterprise Transformation" 
        description="Transform your organization with intelligent process optimization, customer intelligence, growth acceleration, and scalable infrastructure. NEXDYNE delivers measurable outcomes."
        canonical="/solutions/enterprise-transformation"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80" 
            alt="Enterprise Transformation" 
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-base via-base/90 to-base/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-base via-transparent to-transparent" />
        </div>
        
        <div className="container px-4 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
              Enterprise Transformation
            </span>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl eb-garamond tracking-tight text-white leading-[1.05] mb-4">
              Transform Your <br />
              <span className="text-primary">Enterprise</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mb-10">
              We help mid-market and growth-stage companies modernize operations, unlock customer insights, accelerate revenue, and build scalable infrastructure—delivering measurable outcomes that compound over time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base font-semibold transition-all">
                  Start Your Transformation
                </Button>
              </Link>
              <Link href="#pillars">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold transition-all bg-transparent">
                  Explore Solutions
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Transformation Pillars */}
      <section id="pillars" className="py-24 md:py-32 bg-white text-charcoal">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
              Our Solutions
            </span>
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold mb-6">
              Four pillars of enterprise transformation
            </h2>
            <p className="text-xl text-charcoal/60 max-w-3xl mx-auto">
              Each pillar addresses a critical dimension of organizational performance. Together, they create a comprehensive transformation that drives sustainable competitive advantage.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {transformationPillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={pillar.href}>
                  <div className="group h-full bg-subtle p-8 rounded-xl hover:shadow-xl transition-all duration-300 cursor-pointer border border-transparent hover:border-primary/20">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-xl flex items-center justify-center text-white`}>
                        {pillar.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-primary">{pillar.stats.value}</div>
                        <div className="text-sm text-charcoal/50">{pillar.stats.label}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {pillar.title}
                    </h3>
                    
                    <p className="text-charcoal/60 leading-relaxed mb-6">
                      {pillar.description}
                    </p>
                    
                    <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                      Explore solution <ChevronRight className="w-5 h-5 ml-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Journey */}
      <section className="py-24 md:py-32 bg-base">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-6 block">
              Our Approach
            </span>
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-white mb-6">
              The transformation journey
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Every transformation follows a proven path from assessment to sustained value creation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Assess",
                description: "Deep-dive analysis of current state, pain points, and opportunities across operations, technology, and customer experience.",
                icon: <Target className="w-6 h-6" />
              },
              {
                step: "02",
                title: "Design",
                description: "Collaborative solution design that balances quick wins with long-term strategic objectives and change management.",
                icon: <Layers className="w-6 h-6" />
              },
              {
                step: "03",
                title: "Build",
                description: "Agile implementation with continuous feedback loops, ensuring solutions meet real-world requirements as they evolve.",
                icon: <Settings className="w-6 h-6" />
              },
              {
                step: "04",
                title: "Scale",
                description: "Systematic expansion of successful pilots, with knowledge transfer and capability building for sustained impact.",
                icon: <Rocket className="w-6 h-6" />
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white/5 p-8 rounded-xl h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                      {phase.icon}
                    </div>
                    <span className="text-4xl font-bold text-white/20">{phase.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{phase.title}</h3>
                  <p className="text-white/60 leading-relaxed text-sm">{phase.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-white/20 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 md:py-32 bg-white text-charcoal">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
                Case Studies
              </span>
              <h2 className="text-4xl md:text-5xl eb-garamond font-bold mb-4">
                Transformation in action
              </h2>
              <p className="text-xl text-charcoal/60 max-w-2xl">
                Real results from organizations that partnered with NEXDYNE to transform their operations, technology, and customer experience.
              </p>
            </div>
            <Link href="/cases">
              <Button className="bg-base text-white hover:bg-base/90 px-8 py-4 text-base font-semibold transition-all mt-6 md:mt-0">
                View All Cases
              </Button>
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={study.href}>
                  <div className="group bg-subtle rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2 block">
                        {study.category}
                      </span>
                      <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {study.title}
                      </h3>
                      <p className="text-charcoal/60 text-sm mb-4 line-clamp-2">
                        {study.description}
                      </p>
                      <div className="flex gap-6">
                        {study.stats.map((stat, statIndex) => (
                          <div key={statIndex}>
                            <div className="text-xl font-bold text-primary">{stat.value}</div>
                            <div className="text-charcoal/40 text-xs">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 md:py-32 bg-primary">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-white mb-6">
              Measurable impact across industries
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "250+", label: "Transformation Projects Delivered" },
              { value: "$2.8B", label: "Client Value Created" },
              { value: "94%", label: "Client Satisfaction Score" },
              { value: "12", label: "Industries Served" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-24 md:py-32 bg-subtle text-charcoal">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
                Insights
              </span>
              <h2 className="text-4xl md:text-5xl eb-garamond font-bold mb-4">
                Transformation intelligence
              </h2>
              <p className="text-xl text-charcoal/60 max-w-2xl">
                Research, frameworks, and practical guides from our transformation practice.
              </p>
            </div>
            <Link href="/insights">
              <Button variant="outline" className="border-base/20 text-charcoal hover:bg-base/5 px-8 py-4 text-base font-semibold transition-all mt-6 md:mt-0">
                View All Insights
              </Button>
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {insights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={insight.href}>
                  <div className="group bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary mb-3 block">
                      {insight.category}
                    </span>
                    <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                      {insight.title}
                    </h3>
                    <p className="text-charcoal/60 text-sm mb-4 line-clamp-2">
                      {insight.description}
                    </p>
                    <div className="text-charcoal/40 text-sm">{insight.readTime}</div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-base">
        <div className="container px-4 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl eb-garamond font-bold text-white mb-8">
                Ready to transform your enterprise?
              </h2>
              <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
                Let's discuss how NEXDYNE can help you modernize operations, unlock customer insights, and accelerate growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg font-semibold transition-all">
                    Schedule a Consultation
                  </Button>
                </Link>
                <Link href="/cases">
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-10 py-6 text-lg font-semibold transition-all bg-transparent">
                    Explore Case Studies
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
