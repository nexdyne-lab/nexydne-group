import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ChevronRight, Play, Mic, ExternalLink, BarChart2, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useState } from "react";
import BainHoverCard from "@/components/BainHoverCard";

export default function DataDrivenCustomerIntelligence() {
  const [activeTab, setActiveTab] = useState(0);

  // Ambition items for the first card section
  const ambitionItems = [
    {
      title: "Unify fragmented customer data into actionable insights",
      description: "Consolidate data silos across CRM, marketing, and sales platforms. Build a single customer view that updates in real-time and enables cross-functional teams with shared customer intelligence.",
      link: "/capabilities/data-analytics"
    },
    {
      title: "Predict customer behavior before it happens",
      description: "Deploy churn prediction models with 85%+ accuracy. Identify high-value customers early in their journey and forecast lifetime value to prioritize acquisition spend.",
      link: "/capabilities/ai"
    },
    {
      title: "Personalize every touchpoint at scale",
      description: "Implement dynamic content engines across channels. Build recommendation systems that learn and adapt, creating segment-of-one marketing without enterprise budgets.",
      link: "/capabilities/marketing-analytics"
    },
    {
      title: "Turn feedback into competitive advantage",
      description: "Deploy Voice of Customer programs that drive action. Build sentiment analysis into product development cycles and close the feedback loop with automated follow-up.",
      link: "/capabilities/customer-experience"
    },
    {
      title: "Embed customer-centricity into your operations",
      description: "Align team incentives with customer outcome metrics. Build dashboards that surface insights, not just data, and create playbooks for common customer scenarios.",
      link: "/capabilities/operations"
    },
    {
      title: "Measure what matters for sustainable growth",
      description: "Move beyond vanity metrics to leading indicators. Build attribution models that prove marketing ROI and connect customer satisfaction to revenue outcomes.",
      link: "/capabilities/growth-strategy"
    }
  ];

  // Services items for the "How we help clients" section
  const servicesItems = [
    {
      title: "Customer Data Platform Selection & Implementation",
      description: "Navigate the crowded CDP market and implement the right solution for your scale, budget, and technical capabilities.",
      link: "/solutions/customer-intelligence/customer-data-platform"
    },
    {
      title: "Predictive Analytics & Modeling",
      description: "Build churn prediction, lifetime value forecasting, and next-best-action models that work with your actual data—not theoretical perfect data.",
      link: "/solutions/customer-intelligence/predictive-analytics-modeling"
    },
    {
      title: "Behavioral Segmentation",
      description: "Move beyond demographics to segments based on actual behavior, preferences, and intent. Create audiences that respond to targeted messaging.",
      link: "/solutions/customer-intelligence/behavioral-segmentation"
    },
    {
      title: "Journey Analytics & Optimization",
      description: "Map the complete customer journey, identify friction points, and prioritize improvements based on revenue impact.",
      link: "/solutions/customer-intelligence/journey-analytics-optimization"
    },
    {
      title: "Personalization Strategy & Execution",
      description: "Design and deploy personalization that scales—from simple rule-based systems to AI-powered recommendation engines.",
      link: "/solutions/customer-intelligence/personalization-strategy"
    },
    {
      title: "Voice of Customer Programs",
      description: "Build feedback systems that capture actionable insights, not just satisfaction scores. Close the loop with customers who take the time to respond.",
      link: "/solutions/customer-intelligence/voice-of-customer"
    },
    {
      title: "AI-Powered Recommendations",
      description: "Deploy machine learning models that suggest the right product, content, or action at the right moment—driving conversion and engagement.",
      link: "/solutions/customer-intelligence/ai-powered-recommendations"
    }
  ];

  const clientResultsTabs = [
    {
      label: "Unified customer view",
      title: "Regional Bank Unlocks Cross-Sell Potential",
      description: "A $2B regional bank struggled with customer data scattered across 12 legacy systems, making personalized outreach impossible. We built a unified customer data platform that consolidated transaction history, service interactions, and digital behavior into a single view. Using this foundation, we deployed a Next Best Action engine that identified cross-sell opportunities based on life events and financial patterns—not just product eligibility.",
      results: [
        "Unified 15+ data sources into a single customer view",
        "Achieved 4x conversion rate on targeted offers vs. mass campaigns",
        "Grew active product holdings per customer by 23%"
      ],
      image: "/images/case-studies/bank-cross-sell.jpg"
    },
    {
      label: "Churn prevention",
      title: "E-commerce Retailer Stops the Bleeding",
      description: "A mid-market e-commerce company was losing 8% of customers monthly without understanding why. We built a predictive churn model that identified at-risk customers 45 days before they typically churned, then deployed automated intervention campaigns with personalized offers and re-engagement content. The system learned from each interaction, continuously improving its predictions and recommendations.",
      results: [
        "Identified at-risk customers 45 days before typical churn",
        "Reduced monthly churn rate from 8% to 5%",
        "Generated $2.4M in retained revenue in the first year"
      ],
      image: "/images/case-studies/ecommerce-churn.jpg"
    },
    {
      label: "Behavioral segmentation",
      title: "Healthcare Network Personalizes Patient Outreach",
      description: "A regional healthcare network was sending the same appointment reminders to all patients—and seeing 22% no-show rates. We developed a behavioral segmentation model that grouped patients by communication preferences, schedule flexibility, and engagement history. Each segment received tailored outreach: some got text reminders, others phone calls, and high-risk patients received personal coordinator follow-up.",
      results: [
        "Created 8 distinct patient segments based on behavior",
        "Reduced no-show rates from 22% to 14%",
        "Saved $1.8M annually in lost appointment revenue"
      ],
      image: "/images/case-studies/healthcare-engagement.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#1A1A1A]">
      <SEO 
        title="Data-Driven Customer Intelligence" 
        description="Unlock deep customer insights through advanced analytics. Predict behavior and drive loyalty at scale."
        canonical="/solutions/data-driven-customer-intelligence"
      />
      <Navigation />
      
      {/* Hero Section - Black Background */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] bg-black pt-20 overflow-hidden">
        
        <div className="container px-4 sm:px-6 md:px-12 relative z-10">
          <div className="max-w-4xl py-16 md:py-24">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm text-white/50 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/capabilities" className="hover:text-white transition-colors">Solutions</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white/70">Customer Intelligence</span>
            </nav>
            
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-3xl sm:text-4xl md:text-5xl lg:text-7xl eb-garamond  tracking-tight text-white leading-[1.05] mb-6"
              >
                Data-Driven<br />
                <span className="text-white">
                  Customer Intelligence
                </span>
              </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl italic"
            >
              Know your customers. Predict their needs. Drive loyalty at scale.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Statistics Section - Bain Style Clean Layout */}
      <section className="py-16 md:py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#7c3aed] mb-8">
            Our Experience & Impact
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {[
              { value: "85+", label: "customer intelligence programs delivered for mid-market companies" },
              { value: "47%", label: "average increase in customer lifetime value across our engagements" },
              { value: "3.2x", label: "typical ROI on customer intelligence investments within 18 months" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`py-8 ${i !== 2 ? 'md:border-r border-gray-200' : ''} ${i !== 0 ? 'md:pl-8' : ''} ${i !== 2 ? 'md:pr-8' : ''}`}
              >
                <div className="text-5xl md:text-6xl font-serif text-[#1A1A1A] mb-3">
                  {stat.value}
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-16 md:py-12 sm:py-16 lg:py-20 bg-white border-t border-gray-100">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl font-serif text-[#1A1A1A] leading-relaxed mb-8"
            >
              Most mid-market companies are sitting on a goldmine of customer data they can't access. Information lives in disconnected systems—CRM here, marketing automation there, support tickets somewhere else. The result? Teams make decisions based on gut instinct instead of evidence, and customers receive generic experiences that don't reflect their actual needs or history with your company.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-600 leading-relaxed mb-8"
            >
              We've spent years helping companies like yours transform scattered data into strategic advantage. The technology has matured, the costs have dropped, and the competitive pressure has intensified. Here's what we're seeing:
            </motion.p>
            
            <div className="space-y-6">
              {[
                {
                  bold: "Your competitors are already doing this:",
                  text: "While you're debating whether to invest in customer analytics, your competitors are using predictive models to identify and retain their best customers. The gap widens every quarter you wait."
                },
                {
                  bold: "Customers expect you to know them:",
                  text: "73% of customers expect personalized experiences, but only 22% of mid-market companies can deliver them. The disconnect is costing you revenue and loyalty."
                },
                {
                  bold: "The tools have caught up to the vision:",
                  text: "What required a data science team and six-figure budgets five years ago can now be implemented in weeks with modern platforms. The barrier isn't technology—it's knowing where to start."
                }
              ].map((item, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="text-gray-700 leading-relaxed"
                >
                  <strong className="text-[#1A1A1A]">{item.bold}</strong> {item.text}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Your CX Ambition? - Bain-Style Hover Cards */}
      <section className="py-16 md:py-12 sm:py-16 lg:py-24 bg-white border-t border-gray-100">
        <div className="container px-4 sm:px-6 md:px-12">
          {/* Section Header with Horizontal Lines */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-gray-300 flex-1" />
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] text-center">
              What's your customer intelligence ambition?
            </h2>
            <div className="h-px bg-gray-300 flex-1" />
          </div>
          
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            We've helped companies at every stage of the customer intelligence journey—from those just starting to unify their data to those ready to deploy advanced AI. Where are you?
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {ambitionItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <BainHoverCard 
                  title={item.title}
                  description={item.description}
                  link={item.link}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI in Customer Intelligence Section */}
      <section className="py-16 md:py-12 sm:py-16 lg:py-24 bg-[#0a0a0a]">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
                AI in Customer Intelligence
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                The hype around AI is real, but so is the confusion. We cut through the noise to help you identify which AI applications will actually move the needle for your business—and which are just expensive distractions. Our focus:
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Identify high-impact AI use cases specific to your customer journey",
                  "Build predictive models that work with your existing data (not perfect data)",
                  "Deploy recommendation engines that learn from every interaction",
                  "Implement AI-powered personalization without creeping out your customers"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <span className="text-gray-500">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              
              <Link href="/insights/ai-customer-experience" className="text-[#cc0000] hover:text-red-400 font-medium inline-flex items-center transition-colors">
                How we're using AI to predict customer behavior <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
            
            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="/images/ai-customer-experience.jpg" 
                alt="AI in Customer Intelligence"
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </div>
          
          {/* Real Outcomes / How We Help */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mt-16 pt-16 border-t border-gray-800">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">Real Outcomes</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                We've deployed AI across customer-facing applications for companies in financial services, e-commerce, healthcare, and professional services. The common thread: measurable impact within 90 days, not years.
              </p>
              <div className="space-y-2">
                <Link href="/cases/industries/BankCrossSell" className="text-gray-300 hover:text-white transition-colors block">
                  How a regional bank increased cross-sell by 47% <ArrowRight className="inline w-4 h-4 ml-1" />
                </Link>
                <Link href="/case-studies" className="text-gray-300 hover:text-white transition-colors block">
                  See more client results <ArrowRight className="inline w-4 h-4 ml-1" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">How We Help</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                We start with your business objectives, not the technology. Then we identify the quickest path to value—whether that's a simple scoring model or a full-scale personalization engine.
              </p>
              <Link href="/capabilities/ai" className="text-gray-300 hover:text-white transition-colors">
                Learn more about our AI approach <ArrowRight className="inline w-4 h-4 ml-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Results Section - Tabbed (Bain Style) */}
      <section className="py-16 md:py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          {/* Section Header with Horizontal Lines */}
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-gray-300 flex-1" />
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] text-center">
              Client Results
            </h2>
            <div className="h-px bg-gray-300 flex-1" />
          </div>
          
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
            {clientResultsTabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-6 py-3 font-medium transition-all relative ${
                  activeTab === i 
                    ? 'text-[#1A1A1A]' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
                {activeTab === i && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#cc0000]"
                  />
                )}
              </button>
            ))}
          </div>
          
          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-8 items-start"
          >
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src={clientResultsTabs[activeTab].image} 
                alt={clientResultsTabs[activeTab].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                {clientResultsTabs[activeTab].title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {clientResultsTabs[activeTab].description}
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-[#1A1A1A] mb-3">Results:</h4>
                <ul className="space-y-2">
                  {clientResultsTabs[activeTab].results.map((result, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="text-gray-400">•</span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach Section - Bain-style Banner Header with Dark Cards Grid */}
      <section className="py-16 md:py-12 sm:py-16 lg:py-24 bg-[#faf9fb]">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              How We Think About Customer Intelligence
            </h2>
          </motion.div>
          
          {/* Banner Header Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-r from-[#7c3aed] to-[#5b21b6] rounded-t-lg p-8 text-center cursor-pointer hover:from-[#6d28d9] hover:to-[#4c1d95] transition-all duration-300"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              The NexDyne Customer Intelligence Framework
            </h3>
            <p className="text-white/80 flex items-center justify-center gap-2">
              Four pillars that transform scattered data into competitive advantage
              <ArrowRight className="w-5 h-5" />
            </p>
          </motion.div>
          
          {/* Dark Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-800">
            {[
              {
                title: "Unify Your Data Foundation",
                description: "Break down silos between CRM, marketing, support, and sales. Create a single source of truth that every team can access and trust."
              },
              {
                title: "Build Predictive Capabilities",
                description: "Move from backward-looking reports to forward-looking predictions. Know which customers will churn, buy, or expand—before they do."
              },
              {
                title: "Activate Across Channels",
                description: "Turn insights into action. Deploy personalized experiences across email, web, mobile, and in-person touchpoints automatically."
              },
              {
                title: "Measure and Optimize",
                description: "Close the loop with rigorous measurement. Understand what's working, what's not, and continuously improve your customer intelligence."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="bg-[#1a1a2e] p-6 md:p-8 flex flex-col min-h-[280px] group cursor-pointer hover:bg-[#252540] transition-colors duration-300"
              >
                <h4 className="text-lg md:text-xl font-bold text-white mb-4 leading-tight">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                  {item.description}
                </p>
                <div className="mt-6 pt-4">
                  <ArrowRight className="w-5 h-5 text-[#7c3aed] group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help Section - Bain-Style Hover Cards */}
      <section className="py-16 md:py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          {/* Section Header with Horizontal Lines */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-gray-300 flex-1" />
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] text-center">
              How We Can Help
            </h2>
            <div className="h-px bg-gray-300 flex-1" />
          </div>
          
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            We combine technical expertise with business acumen to deliver customer intelligence solutions that actually get used—and actually drive results.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {servicesItems.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <BainHoverCard 
                  title={service.title}
                  description={service.description}
                  link={service.link}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CX Ecosystem Section - Partner Logos */}
      <section className="py-16 md:py-12 sm:py-16 lg:py-20 bg-[#faf9fb] border-t border-gray-100">
        <div className="container px-4 sm:px-6 md:px-12">
          {/* Section Header with Horizontal Lines */}
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-gray-300 flex-1" />
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] text-center">
              Our Technology Partners
            </h2>
            <div className="h-px bg-gray-300 flex-1" />
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16"
          >
            {[
              { name: "Qualtrics", logo: "/images/partners/qualtrics.png" },
              { name: "OpenAI", logo: "/images/partners/openai.png" },
              { name: "AWS", logo: "/images/partners/aws.png" },
              { name: "HubSpot", logo: "/images/partners/hubspot.png" },
              { name: "Zendesk", logo: "/images/partners/zendesk.png" },
              { name: "Segment", logo: "/images/partners/segment.png" },
              { name: "Snowflake", logo: "/images/partners/snowflake.png" },
              { name: "Tableau", logo: "/images/partners/tableau.png" },
            ].map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Customer Intelligence Insights - 4 Column Grid with Media Icons */}
      <section className="py-16 md:py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          {/* Section Header with Horizontal Lines */}
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-gray-300 flex-1" />
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] text-center">
              Customer Intelligence Insights
            </h2>
            <div className="h-px bg-gray-300 flex-1" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: "CUSTOMER ANALYTICS",
                title: "The Churn Prediction Playbook for Mid-Market Companies",
                description: "A practical guide to building and deploying churn prediction models that actually drive retention outcomes.",
                image: "/images/insights/churn-prediction.jpg",
                link: "/insights/churn-prediction-playbook",
                type: "article",
                source: "NexDyne Research"
              },
              {
                category: "PERSONALIZATION",
                title: "Hyper-Personalization at Scale: What It Takes",
                description: "How to deliver individualized experiences without enterprise-level budgets.",
                image: "/images/insights/personalization.jpg",
                link: "/insights/hyper-personalization-at-scale",
                type: "video",
                source: "Webinar Recording"
              },
              {
                category: "DATA STRATEGY",
                title: "Building a Customer Data Platform: Buy vs. Build",
                description: "A framework for deciding whether to purchase a CDP solution or build custom capabilities.",
                image: "/images/insights/cdp-strategy.jpg",
                link: "/insights/cdp-buy-vs-build",
                type: "podcast",
                source: "The CX Podcast"
              },
              {
                category: "AI & ANALYTICS",
                title: "Beyond Segmentation: The Future of Customer Intelligence",
                description: "How leading companies are using AI to anticipate customer needs before they arise.",
                image: "/images/insights/beyond-segmentation.jpg",
                link: "/insights/beyond-segmentation",
                type: "interactive",
                source: "Interactive Report"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={item.link}>
                  <div className="group cursor-pointer h-full">
                    <div className="relative overflow-hidden mb-4 aspect-[4/3]">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Media Type Icon */}
                      <div className="absolute bottom-3 right-3 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-md">
                        {item.type === 'video' && <Play className="w-5 h-5 text-[#7c3aed] fill-current" />}
                        {item.type === 'podcast' && <Mic className="w-5 h-5 text-[#7c3aed]" />}
                        {item.type === 'article' && <ExternalLink className="w-5 h-5 text-[#7c3aed]" />}
                        {item.type === 'interactive' && <BarChart2 className="w-5 h-5 text-[#7c3aed]" />}
                      </div>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#7c3aed] mb-2 block">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold text-[#1A1A1A] mb-2 group-hover:text-[#7c3aed] transition-colors leading-tight line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{item.source}</span>
                      <Bookmark className="w-4 h-4 text-gray-400 hover:text-[#7c3aed] transition-colors" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link href="/insights">
              <Button variant="outline" className="border-[#cc0000] text-[#cc0000] hover:bg-[#cc0000] hover:text-white px-8 py-3">
                SEE MORE
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Capabilities - Simple White Cards */}
      <section className="py-16 md:py-12 sm:py-16 lg:py-24 bg-[#faf9fb]">
        <div className="container px-4 sm:px-6 md:px-12">
          {/* Section Header with Horizontal Lines */}
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-gray-300 flex-1" />
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] text-center">
              Related Capabilities
            </h2>
            <div className="h-px bg-gray-300 flex-1" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Digital Strategy", link: "/capabilities/digital" },
              { title: "Marketing Analytics", link: "/capabilities/marketing-analytics" },
              { title: "Sales Optimization", link: "/capabilities/sales-optimization" },
              { title: "Data & Analytics", link: "/capabilities/data-analytics" },
              { title: "AI & Machine Learning", link: "/capabilities/ai" },
              { title: "Process Automation", link: "/solutions/intelligent-process-optimization" },
              { title: "Growth Strategy", link: "/solutions/accelerating-business-growth" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Link href={item.link}>
                  <div className="bg-white border border-gray-200 p-6 h-full min-h-[140px] flex flex-col justify-between hover:border-gray-300 hover:shadow-sm transition-all duration-300 group">
                    <h3 className="text-lg font-bold text-[#1A1A1A] leading-tight">
                      {item.title}
                    </h3>
                    <span className="text-[#cc0000] font-medium text-sm flex items-center mt-4">
                      Read More <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Solutions - Horizontal Cards */}
      <section className="py-16 md:py-12 sm:py-16 lg:py-24 bg-white border-t border-gray-100">
        <div className="container px-4 sm:px-6 md:px-12">
          {/* Section Header with Horizontal Lines */}
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-gray-300 flex-1" />
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] text-center">
              Our Solutions
            </h2>
            <div className="h-px bg-gray-300 flex-1" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-x-8 gap-y-4 max-w-4xl mx-auto">
            {[
              { title: "Customer Intelligence", link: "/solutions/data-driven-customer-intelligence" },
              { title: "Process Optimization", link: "/solutions/intelligent-process-optimization" },
              { title: "Enterprise Transformation", link: "/solutions/scalable-enterprise-transformation" },
              { title: "Business Growth", link: "/solutions/accelerating-business-growth" },
              { title: "Digital Strategy", link: "/capabilities/digital" },
              { title: "AI & Analytics", link: "/capabilities/ai" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
              >
                <Link href={item.link}>
                  <div className="py-3 border-b border-gray-200 flex items-center justify-between group hover:border-gray-400 transition-colors">
                    <span className="text-[#1A1A1A] font-medium group-hover:text-[#cc0000] transition-colors">
                      {item.title}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#cc0000]" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Talk CTA - Bain Style Two-Column Layout */}
      <section className="py-16 md:py-12 sm:py-16 lg:py-20 bg-[#f5f3f7]">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              {/* Left - Form */}
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
                  Ready to talk?
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-base text-gray-700 mb-3">
                      I want to talk to your experts in:
                    </label>
                    <select className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-[#cc0000] bg-transparent text-gray-700 outline-none transition-colors">
                      <option value="">Select an industry</option>
                      <option value="financial-services">Financial Services</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="retail">Retail & E-commerce</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="professional-services">Professional Services</option>
                      <option value="technology">Technology</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
              
              {/* Right - Description & Email */}
              <div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We work with mid-market leaders who are ready to stop guessing about their customers and start knowing. Let's talk about what customer intelligence could do for your business.
                </p>
                
                <div className="space-y-4">
                  <input 
                    type="email" 
                    placeholder="Your email"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#cc0000] focus:border-[#cc0000] outline-none transition-all"
                  />
                  
                  <Button className="bg-[#cc0000] hover:bg-[#aa0000] text-white px-8 py-3 font-semibold">
                    CONTACT US
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-[#1a0a2e]">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-lg md:text-xl text-white italic">
              Stay ahead in a rapidly changing world.<br className="hidden md:block" />
              Subscribe to NexDyne Insights, our monthly look at the critical issues facing mid-market businesses.
            </p>
            <div className="flex gap-3 w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Your email address"
                className="flex-1 md:w-80 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              />
              <Button className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-6 py-3 font-semibold">
                SUBSCRIBE
              </Button>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <input type="checkbox" id="privacy" className="rounded border-white/30" />
            <label htmlFor="privacy" className="text-sm text-white/60">
              *I have read and understand <Link href="/privacy" className="underline hover:text-white">NexDyne's Privacy Notice</Link>
            </label>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
