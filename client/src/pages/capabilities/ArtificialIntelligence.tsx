import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useState } from "react";
import BainHoverCard from "@/components/BainHoverCard";

export default function ArtificialIntelligence() {
  const [activeTab, setActiveTab] = useState(0);

  // What's Your AI Ambition cards
  const ambitionCards = [
    {
      title: "Automate repetitive workflows",
      description: "Free your team from manual data entry, document processing, and routine tasks. We help you identify the highest-impact automation opportunities and implement AI solutions that deliver ROI within months.",
      link: "/capabilities/artificial-intelligence/automate-workflows"
    },
    {
      title: "Build intelligent customer experiences",
      description: "Deploy AI-powered chatbots, personalization engines, and recommendation systems that understand your customers and respond in real-time—without enterprise-scale budgets.",
      link: "/capabilities/artificial-intelligence/customer-experiences"
    },
    {
      title: "Unlock insights from your data",
      description: "Turn scattered spreadsheets and siloed databases into actionable intelligence. Our data transformation approach helps mid-market companies compete with data-driven insights.",
      link: "/capabilities/artificial-intelligence/data-insights"
    },
    {
      title: "Deploy generative AI responsibly",
      description: "Move beyond ChatGPT experiments to production-ready generative AI. We help you select the right models, implement guardrails, and scale safely across your organization.",
      link: "/capabilities/artificial-intelligence/responsible-ai"
    },
    {
      title: "Modernize legacy systems with AI",
      description: "Breathe new life into aging software by adding AI capabilities. Extract data from legacy systems, automate manual workarounds, and create modern interfaces without full replacement.",
      link: "/capabilities/artificial-intelligence/modernize-legacy"
    },
    {
      title: "Scale AI across the organization",
      description: "Move from isolated pilots to enterprise-wide AI adoption. We help you build the governance, infrastructure, and change management capabilities for sustainable AI at scale.",
      link: "/capabilities/artificial-intelligence/scale-ai"
    }
  ];

  // How We Can Help cards
  const serviceCards = [
    {
      title: "Generative AI Implementation",
      description: "Deploy intelligent agents that handle complex inquiries, draft documentation, and assist employees—freeing your team for high-value strategic work.",
      link: "/capabilities/artificial-intelligence/generative-ai"
    },
    {
      title: "Agentic AI",
      description: "Build autonomous AI agents that can reason, plan, and execute multi-step tasks independently. Move beyond simple chatbots to AI that takes action on your behalf.",
      link: "/capabilities/artificial-intelligence/agentic-ai"
    },
    {
      title: "Data Transformation",
      description: "Unlock the true value of your data. We build performance by making lasting improvements in technology, processes, and capabilities.",
      link: "/capabilities/artificial-intelligence/data-transformation"
    },
    {
      title: "Predictive Analytics",
      description: "Build models that forecast demand, predict churn, and identify opportunities before your competitors. Practical ML that works with real-world data.",
      link: "/capabilities/artificial-intelligence/predictive-analytics"
    },
    {
      title: "Process Automation",
      description: "Combine RPA, AI, and workflow orchestration to automate end-to-end processes. Reduce costs and errors while improving speed and consistency.",
      link: "/capabilities/artificial-intelligence/process-automation"
    },
    {
      title: "AI Strategy & Roadmap",
      description: "Define your AI vision, prioritize use cases, and build a practical roadmap. We help you make smart bets on AI that align with your business goals.",
      link: "/capabilities/artificial-intelligence/ai-strategy-roadmap"
    },
    {
      title: "Custom Model Development",
      description: "Fine-tune open-source models on your proprietary data. Own your intelligence and maintain competitive advantage with models trained on your unique insights.",
      link: "/capabilities/artificial-intelligence/custom-model-development"
    },
    {
      title: "Internet of Things",
      description: "Turn IoT into real business value with improved operations, connected products and services, and entirely new business models.",
      link: "/capabilities/artificial-intelligence/internet-of-things"
    },
    {
      title: "Digital Twins",
      description: "Build virtual replicas of assets, processes, and people by simulating real situations, allowing for better decision-making and risk mitigation.",
      link: "/capabilities/artificial-intelligence/digital-twins"
    },
    {
      title: "Risk & Resilience",
      description: "Protect your organization with AI models that detect anomalies in transactions and user behavior in real-time, ensuring operational continuity.",
      link: "/capabilities/artificial-intelligence/risk-resilience"
    }
  ];

  // Client Results tabs
  const clientResults = [
    {
      tab: "Workflow Automation",
      title: "Regional logistics company automates 80% of invoice processing",
      challenge: "A 200-person logistics company was drowning in manual invoice processing, with staff spending 30+ hours weekly on data entry and reconciliation.",
      solution: "We implemented an AI-powered document processing system that extracts data from invoices, validates against purchase orders, and routes exceptions for human review.",
      results: [
        "80% reduction in manual processing time",
        "99.2% accuracy rate on automated extractions",
        "3-month payback period on implementation",
        "Staff redeployed to customer service roles"
      ],
      image: "/images/case-logistics-automation.jpg"
    },
    {
      tab: "Customer Intelligence",
      title: "E-commerce retailer increases repeat purchases by 35% with AI personalization",
      challenge: "A mid-market e-commerce company struggled to compete with Amazon's personalization, losing customers to more relevant recommendations elsewhere.",
      solution: "We deployed a recommendation engine that analyzes browsing behavior, purchase history, and customer segments to deliver personalized product suggestions.",
      results: [
        "35% increase in repeat purchase rate",
        "22% higher average order value",
        "4x improvement in email click-through rates",
        "ROI achieved within 6 months"
      ],
      image: "/images/case-ecommerce-personalization.jpg"
    },
    {
      tab: "Predictive Operations",
      title: "Manufacturing firm reduces equipment downtime by 45% with predictive maintenance",
      challenge: "Unexpected equipment failures were costing a 150-person manufacturer $2M annually in lost production and emergency repairs.",
      solution: "We implemented IoT sensors and ML models that predict equipment failures 2-3 weeks in advance, enabling proactive maintenance scheduling.",
      results: [
        "45% reduction in unplanned downtime",
        "$1.2M annual savings in maintenance costs",
        "Equipment lifespan extended by 20%",
        "Maintenance team productivity up 30%"
      ],
      image: "/images/case-manufacturing-predictive.jpg"
    }
  ];

  // Insights for A Closer Look section
  const insights = [
    {
      title: "The Mid-Market AI Playbook: Where to Start and How to Scale",
      category: "Strategy",
      link: "/insights/mid-market-ai-playbook",
      image: "/images/insight-ai-playbook.jpg"
    },
    {
      title: "Generative AI for Operations: Beyond the Hype",
      category: "Technology",
      link: "/insights/generative-ai-operations",
      image: "/images/insight-genai-operations.jpg"
    },
    {
      title: "Building Your First AI Use Case: A Practical Framework",
      category: "Implementation",
      link: "/insights/first-ai-use-case",
      image: "/images/insight-first-ai-usecase.jpg"
    }
  ];

  const partners = ['OpenAI', 'Anthropic', 'AWS', 'Google Cloud', 'Microsoft Azure', 'Databricks'];

  const consultingServices = [
    { title: "AI Strategy Development", link: "/services/ai-strategy" },
    { title: "Machine Learning Implementation", link: "/services/ml-implementation" },
    { title: "Data Infrastructure Modernization", link: "/services/data-infrastructure" },
    { title: "AI Governance & Ethics", link: "/services/ai-governance" },
    { title: "Change Management for AI", link: "/services/ai-change-management" },
    { title: "AI Training & Enablement", link: "/services/ai-training" }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-charcoal">
      <SEO 
        title="Artificial Intelligence" 
        description="Harness the power of AI to transform your mid-market business. We help companies with 50-500 employees implement practical AI solutions that deliver measurable ROI."
        canonical="/capabilities/artificial-intelligence"
      />
      <Navbar />
      
      {/* Hero Section - Dark Background (F100) */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center pt-16 sm:pt-20 bg-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/capabilities" className="inline-flex items-center text-white/60 hover:text-white mb-6 text-sm transition-colors">
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Capabilities
            </Link>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-3 sm:mb-4 eb-garamond">
              Artificial<br />
              Intelligence
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-2xl mb-6 sm:mb-10"  >
              Practical AI solutions for mid-market companies. We help organizations harness AI to automate operations, unlock insights, and compete with larger rivals.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link href="/contact">
                <Button className="bg-white hover:bg-muted text-charcoal px-8 py-6 text-base font-semibold transition-all">
                  Start Your AI Journey
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
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80" 
              alt="AI & Automation" 
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Our Experience & Impact - Bain Style with Border-Left Accent */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-charcoal mb-12 eb-garamond"
          >
            Our Experience & Impact
          </motion.h2>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { metric: "120+", label: "AI implementations delivered for mid-market companies" },
              { metric: "3.2x", label: "average ROI on AI investments within 18 months" },
              { metric: "85%", label: "of our AI projects reach production (vs. 15% industry average)" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${index > 0 ? 'md:border-l border-border md:pl-8' : ''}`}
              >
                <div>
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-charcoal mb-3 sm:mb-4">{item.metric}</div>
                  <p className="text-lg text-charcoal/60">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Thought Leadership - 2-Column Layout */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight eb-garamond">
                AI isn't just for Fortune 500 companies anymore.
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6 text-lg text-charcoal/80 leading-relaxed"
            >
              <p>
                The same technologies powering enterprise transformation are now accessible, affordable, and practical for mid-market organizations. But most AI vendors sell solutions designed for unlimited budgets and dedicated data science teams.
              </p>
              <p>
                Mid-market companies need a different approach—one that delivers results with the resources they actually have. We specialize in practical AI implementations that generate ROI within months, not years.
              </p>
              <p>
                The gap between AI adopters and laggards is widening. Companies that implement AI now will have compounding advantages in efficiency, customer experience, and decision-making.
              </p>
              <ul className="space-y-3 mt-6">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></span>
                  <span>You don't need a data science team to start</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></span>
                  <span>Modern AI tools enable meaningful results without hiring PhDs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></span>
                  <span>Mid-market agility means faster implementation than larger competitors</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach Section (3-Column Consulting Format) */}
      <section className="py-20 bg-base">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4 block">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-5xl font-light text-white eb-garamond">
              AI that solves real problems, not science projects
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Start with the business problem",
                description: "We don't lead with technology. We start by understanding the operational bottlenecks, decision gaps, and customer pain points that AI can actually solve—then work backward to the right approach."
              },
              {
                title: "Build for production, not demos",
                description: "Proof-of-concepts that never ship help no one. We design AI solutions with data pipelines, monitoring, and governance built in from day one—so they work in the real world."
              },
              {
                title: "Transfer knowledge, not dependency",
                description: "Our goal is to make your team self-sufficient. We document everything, train your people, and build systems they can maintain and improve without us."
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
                <p className="text-white leading-relaxed">{pillar.description}</p>
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

      {/* What's Your AI Ambition Section - Bain hover cards */}
      <section className="py-20 bg-subtle">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 eb-garamond">
              What's your AI ambition?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              We've helped companies at every stage of the AI journey—from those running their first pilot to those scaling AI across the enterprise. Where are you?
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 lg:grid-cols-4 gap-6">
            {ambitionCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <BainHoverCard
                  title={card.title}
                  description={card.description}
                  link={card.link}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gen AI in Practice Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left column - Image and intro */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/3] bg-subtle rounded-lg overflow-hidden mb-8">
                <img 
                  src="/images/ai-team-collaboration.jpg" 
                  alt="AI implementation team" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6 eb-garamond">
                Generative AI in practice
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The hype around generative AI is real—but so is the confusion. Most mid-market companies are stuck between "we should do something" and "we don't know where to start."
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                We cut through the noise with a practical approach: identify high-impact use cases, start with quick wins, and build toward enterprise-scale deployment. No science projects. No endless pilots. Just AI that works.
              </p>
            </motion.div>

            {/* Right column - Real Outcomes and How We Help */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              {/* Real Outcomes */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-charcoal mb-6">
                  Real Outcomes
                </h3>
                <ul className="space-y-4">
                  {[
                    "Customer service teams handling 3x more inquiries with AI-assisted responses",
                    "Sales teams closing deals 40% faster with AI-generated proposals and follow-ups",
                    "Operations teams reducing document processing time by 80%",
                    "Marketing teams producing 5x more content with consistent brand voice"
                  ].map((outcome, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-charcoal rounded-full mt-2 flex-shrink-0" />
                      <span className="text-charcoal/80">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* How We Help */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-charcoal mb-6">
                  How We Help
                </h3>
                <ul className="space-y-4">
                  {[
                    "Use case identification and prioritization based on business impact",
                    "Model selection and evaluation (OpenAI, Anthropic, open-source options)",
                    "Prompt engineering and fine-tuning for your specific needs",
                    "Integration with existing systems and workflows",
                    "Governance frameworks and responsible AI guidelines",
                    "Training and change management for sustainable adoption"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-charcoal rounded-full mt-2 flex-shrink-0" />
                      <span className="text-charcoal/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Can Help Section - Bain hover cards */}
      <section className="py-12 sm:py-16 lg:py-20 bg-subtle">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 eb-garamond">
              How we can help
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              We combine technical expertise with business acumen to deliver AI solutions that actually get used—and actually drive results.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
            {serviceCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <BainHoverCard
                  title={card.title}
                  description={card.description}
                  link={card.link}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Results - Tabbed Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 eb-garamond">
              Our client results
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Real outcomes from real mid-market companies. No theoretical case studies—just practical AI implementations that delivered measurable ROI.
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-1 sm:gap-2 mb-6 sm:mb-10 border-b border-border overflow-x-auto">
            {clientResults.map((result, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium transition-all relative whitespace-nowrap ${
                  activeTab === index 
                    ? 'text-destructive' 
                    : 'text-muted-foreground hover:text-charcoal/80'
                }`}
              >
                {result.tab}
                {activeTab === index && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-destructive" />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
            <div>
              <div className="aspect-[16/10] bg-subtle rounded-lg overflow-hidden mb-6">
                <img 
                  src={clientResults[activeTab].image}
                  alt={clientResults[activeTab].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-serif font-bold text-charcoal mb-6">
                {clientResults[activeTab].title}
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-2">The Challenge</h4>
                  <p className="text-charcoal/80">{clientResults[activeTab].challenge}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-2">Our Solution</h4>
                  <p className="text-charcoal/80">{clientResults[activeTab].solution}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">Results</h4>
                  <ul className="space-y-2">
                    {clientResults[activeTab].results.map((result, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                        <span className="text-charcoal/80">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Ecosystem Section */}
      <section className="py-16 bg-subtle">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-charcoal mb-3 eb-garamond">
              Our AI ecosystem
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We partner with leading AI providers to deliver the best solutions for your specific needs.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 items-center">
            {partners.map((partner, index) => (
              <motion.div 
                key={partner}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-8 py-4 bg-white border border-border rounded-lg"
              >
                <span className="text-muted-foreground font-medium text-sm">{partner}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Leaders in AI Section */}
      <section className="py-20 bg-white border-t border-border/50">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-16 bg-gray-300" />
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal eb-garamond">
                Our Leaders in AI
              </h2>
              <div className="h-px w-16 bg-gray-300" />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Marcus Thompson",
                title: "Chief Technology Officer",
                company: "Meridian Financial Group",
                industry: "Financial Services",
                quote: "AI has fundamentally changed how we approach risk assessment. What used to take weeks now happens in hours, with greater accuracy.",
                image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/BIZXaFVVaVqquVZA.png"
              },
              {
                name: "Sarah Mitchell",
                title: "VP of Operations",
                company: "Apex Manufacturing",
                industry: "Manufacturing",
                quote: "Predictive maintenance powered by AI reduced our downtime by 45%. The ROI was clear within the first quarter.",
                image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/fIuwCuZofgdEviDw.png"
              },
              {
                name: "David Chen",
                title: "Chief Digital Officer",
                company: "Pacific Healthcare Systems",
                industry: "Healthcare",
                quote: "Implementing AI responsibly in healthcare requires the right partner. NexDyne helped us balance innovation with patient safety.",
                image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/OqTDFTZNrEJKIuYV.png"
              },
              {
                name: "Fatima Al-Hassan",
                title: "CEO",
                company: "Velocity Logistics",
                industry: "Logistics & Supply Chain",
                quote: "Scaling AI across our organization seemed daunting. The practical roadmap we developed made enterprise-wide adoption achievable.",
                image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/MdEbiFUutMxyhzAc.png"
              }
            ].map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="aspect-[4/3] bg-subtle overflow-hidden mb-4">
                  <img 
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-destructive mb-2">
                  {leader.industry}
                </div>
                <h3 className="text-lg font-semibold text-charcoal leading-tight mb-1">
                  {leader.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {leader.title}, {leader.company}
                </p>
                <p className="text-sm text-muted-foreground italic leading-relaxed">
                  "{leader.quote}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* A Closer Look - Insights Section */}
      <section className="py-20 bg-subtle">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-end mb-12"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 eb-garamond">
                A closer look
              </h2>
              <p className="text-lg text-muted-foreground">
                Deep dives into AI strategy, implementation, and outcomes.
              </p>
            </div>
            <Link href="/insights?topic=ai">
              <span className="hidden md:flex items-center text-destructive font-medium hover:underline">
                View all insights <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={insight.link}>
                  <div className="group cursor-pointer">
                    <div className="aspect-[16/10] bg-subtle rounded-lg overflow-hidden mb-4">
                      <img 
                        src={insight.image}
                        alt={insight.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="text-xs font-bold uppercase tracking-wider text-destructive mb-2">
                      {insight.category}
                    </div>
                    <h3 className="text-lg font-semibold text-charcoal group-hover:text-destructive transition-colors leading-tight">
                      {insight.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Services Links */}
      <section className="py-16 bg-subtle border-t border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <h3 className="text-lg font-bold text-charcoal mb-6">Consulting services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {consultingServices.map((service, index) => (
              <Link key={index} href={service.link}>
                <span className="flex items-center text-destructive hover:underline">
                  {service.title} <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Talk CTA - Bain two-column style */}
      <section className="py-20 bg-charcoal">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 eb-garamond">
                Ready to explore AI for your business?
              </h2>
              <p className="text-lg text-white/70 leading-relaxed">
                Let's discuss how AI can help you automate operations, unlock insights, and compete more effectively. No pressure, no jargon—just a practical conversation about your opportunities.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link href="/contact">
                <Button className="bg-white text-charcoal hover:bg-subtle px-8 py-6 text-base font-semibold">
                  Start a Conversation <ArrowRight className="ml-2 w-5 h-5 inline" />
                </Button>
              </Link>
              <Link href="/insights/mid-market-ai-guide">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent px-8 py-6 text-base font-semibold">
                  Download AI Guide
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
