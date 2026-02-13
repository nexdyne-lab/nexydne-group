import { useEffect } from "react";
import { useLocation, Link } from "wouter";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  RefreshCw, 
  Layers, 
  TrendingUp, 
  Shield, 
  CheckCircle2,
  Database,
  Server,
  Code,
  BarChart3,
  FileSearch,
  ArrowRight,
  ArrowLeft
} from "lucide-react";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";

export default function DataModernization() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Related capabilities data
  const relatedCapabilities = [
    {
      title: "Cloud Infrastructure",
      description: "Scalable, secure foundations on AWS, Azure, and GCP for your modernized data platform.",
      link: "/solutions/enterprise-transformation/cloud-infrastructure"
    },
    {
      title: "API Integration",
      description: "Connect disparate apps, data, and partners into a seamless ecosystem.",
      link: "/solutions/enterprise-transformation/api-integration"
    },
    {
      title: "DevOps & Security",
      description: "Ship faster with automated pipelines that have compliance baked in.",
      link: "/solutions/enterprise-transformation/devops-automation"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#051C2C] selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Data Modernization" 
        description="Unlock your data's potential. Transform legacy silos into intelligent data platforms that drive real-time insights."
        canonical="/solutions/enterprise-transformation/legacy-modernization"
      />
      <Navigation />

      {/* Section 1: Hero Section - Dark Background (F100) */}
      <section className="relative min-h-[70vh] flex items-center pt-20 bg-black">
        <div className="container px-4 md:px-12 grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Breadcrumbs variant="light" />
            
            <h1 className="text-5xl md:text-7xl eb-garamond font-bold tracking-tight text-white leading-[1.05] mb-4">
              Data Modernization
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl mb-10">
              Unlock your data's potential. Transform legacy silos into intelligent data platforms that drive real-time insights and competitive advantage.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button className="bg-white hover:bg-gray-200 text-black px-8 py-6 text-base font-semibold transition-all">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold transition-all bg-transparent">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <img 
              src="/images/data-modernization-abstract.jpg" 
              alt="Data Modernization Visualization" 
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Section 2: Our Experience & Impact (F100) */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="container px-4 md:px-12">
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
              { metric: "10x", label: "Faster query performance achieved" },
              { metric: "60%", label: "Reduction in data silos" },
              { metric: "50+", label: "Data platforms delivered" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-4 border-[#0077B5] pl-6"
              >
                <div className="text-5xl md:text-6xl font-bold text-[#051C2C] mb-3">{item.metric}</div>
                <p className="text-lg text-[#051C2C]/60">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Thought Leadership Paragraphs (F100) */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-12">
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl text-[#051C2C]/80 leading-relaxed"
            >
              In the age of AI, data is your most valuable asset. Yet most organizations are sitting on a goldmine they can't access—trapped in legacy systems, scattered across silos, and plagued by quality issues that undermine every decision.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-[#051C2C]/80 leading-relaxed"
            >
              We've helped organizations across industries transform their data foundations, turning chaos into clarity and enabling the real-time insights that drive competitive advantage. You can't build AI on bad data—machine learning models are only as good as the data they're trained on.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-[#051C2C]/80 leading-relaxed"
            >
              Data silos kill agility. When different departments have conflicting numbers, decision-making grinds to a halt. A single source of truth accelerates everything. Real-time is the new standard—your competitors are making decisions with data that's minutes old, not days.
            </motion.p>
          </div>
        </div>
      </section>

      {/* How We Can Help Section - Data Platform Capabilities */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
              How We Can Help
            </span>
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C] mb-6">
              Our Data Modernization Capabilities
            </h2>
            <p className="text-xl text-[#051C2C]/60 max-w-2xl">
              End-to-end data platform services from assessment to implementation to ongoing optimization.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Data Lake Architecture",
                description: "Design and implement modern data lakes on AWS, Azure, or GCP. Centralize structured and unstructured data for analytics and machine learning."
              },
              {
                title: "ETL & Data Pipelines",
                description: "Build robust data pipelines with tools like Airflow, dbt, and Spark. Automate data ingestion, transformation, and quality checks."
              },
              {
                title: "Data Warehouse Modernization",
                description: "Migrate from legacy warehouses to Snowflake, BigQuery, or Redshift. Optimize for performance, cost, and scalability."
              },
              {
                title: "Real-Time Analytics",
                description: "Implement streaming architectures with Kafka, Kinesis, or Pub/Sub. Enable real-time dashboards and event-driven applications."
              },
              {
                title: "Data Governance & Quality",
                description: "Establish data catalogs, lineage tracking, and quality frameworks. Ensure compliance with GDPR, CCPA, and industry regulations."
              },
              {
                title: "Analytics & BI Platforms",
                description: "Deploy and optimize Tableau, Power BI, or Looker. Create self-service analytics that empower business users."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Differentiator Section */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-12">
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
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" 
                alt="Data analytics dashboard" 
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
                The difference isn't luck. It's process. We've refined our approach over 50+ data platform implementations, learning what works for companies your size. We know how to migrate data safely, build pipelines that scale, and create governance that doesn't slow you down.
              </p>
              
              <p className="text-xl text-[#051C2C]/70 leading-relaxed">
                More importantly, we know when to modernize incrementally versus when to rebuild from scratch—saving you from costly mistakes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: Our Approach (3-Column Consulting Format) */}
      <section className="py-20 bg-[#051C2C]">
        <div className="container px-4 md:px-12">
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
              Turn data into your competitive advantage
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Unify your data landscape",
                description: "We consolidate fragmented data sources into a single source of truth. No more spreadsheet chaos, conflicting reports, or decisions made on gut feel instead of facts."
              },
              {
                title: "Enable self-service analytics",
                description: "We build platforms where business users can find their own answers. Dashboards, ad-hoc queries, and automated reports—without waiting weeks for IT."
              },
              {
                title: "Govern without slowing down",
                description: "We implement data governance that protects sensitive information and ensures compliance while keeping data accessible to those who need it."
              }
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-xl font-bold text-white mb-4">{pillar.title}</h3>
                <p className="text-gray-300 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 bg-transparent">
                Get in touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: Key Benefits - H100 Hover Cards */}
      <section className="py-24 bg-[#f8f8f7]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
              Why Modernize Data
            </span>
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C] mb-6">
              Transform your data from liability to competitive advantage.
            </h2>
          </motion.div>

          {/* H100 Hover Effect Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Unified Truth",
                description: "Eliminate conflicting reports. We create a single source of truth by consolidating data into a scalable, governed data warehouse."
              },
              {
                title: "AI Readiness",
                description: "Clean, structure, and catalog your data assets, creating the high-quality foundation required for machine learning."
              },
              {
                title: "Real-Time Access",
                description: "Move from batch to streaming. Modern pipelines deliver fresh data to dashboards and applications instantly."
              },
              {
                title: "Governance & Compliance",
                description: "Know where your data lives. Automated governance frameworks ensure GDPR/CCPA compliance without slowing access."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="group h-full min-h-[200px] p-8 bg-white border-l-4 border-l-transparent hover:border-l-[#CC0000] border border-gray-200 transition-all duration-300 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif font-bold text-[#051C2C] leading-tight origin-top-left transition-all duration-300 group-hover:text-base group-hover:mb-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-[#051C2C]/70 leading-relaxed text-sm max-h-0 overflow-hidden opacity-0 group-hover:max-h-[120px] group-hover:opacity-100 group-hover:mt-3 transition-all duration-300 ease-in-out">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Tech Stack Section (Preserved Unique Section) */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-4 block">
              Data Platform Stack
            </span>
            <h2 className="text-3xl md:text-4xl eb-garamond font-bold text-[#051C2C] mb-4">
              Modern Data Technologies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We leverage best-in-class tools to build scalable, maintainable data platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { category: "Storage", subtitle: "Data Lakes & Warehouses", tools: ["Snowflake", "Databricks", "BigQuery"] },
              { category: "Pipelines", subtitle: "ETL/ELT Orchestration", tools: ["dbt", "Airflow", "Fivetran"] },
              { category: "Visualization", subtitle: "BI & Analytics", tools: ["Tableau", "Power BI", "Looker"] }
            ].map((stack, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-[#0077B5]/30 transition-all h-full">
                  <div className="text-2xl font-bold text-[#051C2C] mb-2">{stack.category}</div>
                  <p className="text-sm text-gray-500 mb-6">{stack.subtitle}</p>
                  <ul className="space-y-3">
                    {stack.tools.map((tool, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-[#0077B5] shrink-0" />
                        <span>{tool}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Case Studies (F100) */}
      <section className="py-24 bg-[#051C2C]">
        <div className="container px-4 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-4 block">
                Client Results
              </span>
              <h2 className="text-3xl md:text-4xl eb-garamond font-bold text-white">
                See how leading organizations are transforming their data into value.
              </h2>
            </motion.div>
            <Link href="/cases">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent">
                View all case studies
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Predicting Demand with 98% Accuracy",
                category: "Retail",
                description: "How a major retailer reduced inventory waste by 30% using our ML-powered forecasting engine.",
                image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2670&auto=format&fit=crop",
                link: "/cases/retailer-ml-forecasting"
              },
              {
                title: "Unifying Patient Records",
                category: "Healthcare",
                description: "Creating a 360-degree patient view by integrating 15+ legacy systems into a secure data lake.",
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop",
                link: "/cases/healthcare-data-platform"
              }
            ].map((study, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={study.link} className="group block">
                  <div className="relative h-[350px] rounded-lg overflow-hidden">
                    <img 
                      src={study.image}
                      alt={study.title} 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#051C2C] via-[#051C2C]/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8">
                      <span className="text-xs font-bold text-[#0077B5] mb-3 uppercase tracking-wider block">{study.category}</span>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#0077B5] transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-white/70 line-clamp-2">{study.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Featured Insight Banner (Preserved Unique Section) */}
      <section className="py-16 bg-[#0077B5]">
        <div className="container px-4 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 mb-2 block">Featured Insight</span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2">The CEO's Guide to Data Modernization</h3>
              <p className="text-white/80">A comprehensive framework for transforming your data foundation.</p>
            </div>
            <Link href="/insights/ceo-guide-data-modernization">
              <Button className="bg-white text-[#0077B5] hover:bg-gray-100 px-8 py-4 font-semibold whitespace-nowrap">
                Download the Guide <ArrowRight className="ml-2 w-4 h-4 inline" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 10: Related Capabilities - H100 Hover */}
      <section className="py-24 bg-[#f8f8f7]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-4 block">
              Related Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl eb-garamond font-bold text-[#051C2C]">
              Explore more Technology capabilities
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedCapabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={cap.link} className="group block h-full">
                  <div className="h-full min-h-[180px] p-8 bg-white border-l-4 border-l-transparent group-hover:border-l-[#CC0000] border border-gray-200 transition-all duration-300 flex flex-col">
                    <div className="flex-1">
                      <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-2 group-hover:text-[#0077B5] transition-colors">
                        {cap.title}
                      </h3>
                      <p className="text-[#051C2C]/60 text-sm mb-4">{cap.description}</p>
                    </div>
                    <div className="flex items-center text-[#CC0000] text-sm font-semibold mt-auto">
                      Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 11: CTA Section (F100 - Cyan Background) */}
      <section className="py-24 bg-[#0077B5]">
        <div className="container px-4 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl eb-garamond font-bold text-white mb-6">
              Ready to unlock your data's potential?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Let's discuss how our data modernization capabilities can help you build a foundation for AI and analytics.
            </p>
            <Link href="/contact">
              <Button className="bg-white hover:bg-gray-100 text-[#0077B5] px-10 py-6 text-lg font-semibold">
                Start a Conversation <ArrowRight className="ml-2 w-5 h-5 inline" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
