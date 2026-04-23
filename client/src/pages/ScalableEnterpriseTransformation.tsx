import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useState } from "react";
import BainHoverCard from "@/components/BainHoverCard";

export default function ScalableEnterpriseTransformation() {
  // Tab state for client results
  const [activeResultTab, setActiveResultTab] = useState(0);
  
  const clientResults = [
    {
      id: 0,
      tab: "Cloud migration",
      industry: "Healthcare Technology",
      title: "Healthcare SaaS Achieves 99.99% Uptime After Cloud Migration",
      description: "A healthcare technology company migrated from on-premise infrastructure to AWS, reducing costs by 65% while improving reliability and enabling HIPAA-compliant scaling.",
      image: "/images/solution-enterprise-tech.a945b529.webp"
    },
    {
      id: 1,
      tab: "Legacy modernization",
      industry: "Financial Services",
      title: "Regional Bank Modernizes Core Systems in 18 Months",
      description: "A $3B regional bank replaced 30-year-old core banking systems with cloud-native architecture, enabling real-time transactions and mobile banking capabilities.",
      image: "/images/solution-enterprise-tech.a945b529.webp"
    },
    {
      id: 2,
      tab: "Platform engineering",
      industry: "Manufacturing",
      title: "Manufacturer Cuts Deployment Time from Weeks to Hours",
      description: "A mid-market manufacturer implemented internal developer platforms and CI/CD pipelines, reducing deployment cycles from 3 weeks to under 4 hours.",
      image: "/images/solution-enterprise-tech.a945b529.webp"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-charcoal">
      <SEO 
        title="Scalable Enterprise Transformation" 
        description="Modernize your core technology stack. Build cloud-native infrastructure that scales with your ambition."
        canonical="/solutions/scalable-enterprise-transformation"
      />
      <Navigation />
      
      {/* Hero Section - Black Background */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] bg-charcoal pt-20">
        <div className="container px-4 sm:px-6 md:px-12 h-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 items-center min-h-[60vh] md:min-h-[70vh]">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-xl py-12 lg:py-0 lg:pr-12"
            >
              {/* Breadcrumb */}
              <nav className="flex items-center space-x-2 text-sm text-white/50 mb-8">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight className="w-3 h-3" />
                <Link href="/capabilities" className="hover:text-white transition-colors">Solutions</Link>
                <ChevronRight className="w-3 h-3" />
                <span className="text-white/70">Enterprise Transformation</span>
              </nav>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-3">
                Scalable Enterprise Transformation
              </h1>
              
              <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                We help organizations modernize their core technology stack, building cloud-native infrastructure that scales with ambition.
              </p>
            </motion.div>
            
            {/* Right Column - Hero Image */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative h-[300px] sm:h-[400px] lg:h-full lg:absolute lg:right-0 lg:top-0 lg:w-1/2"
            >
              <img 
                src="/images/solution-enterprise-tech.a945b529.webp" 
                alt="Enterprise Cloud Infrastructure" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent lg:block hidden" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Experience & Impact - Bain Style Statistics */}
      <section className="py-16 md:py-12 sm:py-16 lg:py-20 bg-white border-b border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-lg font-semibold text-charcoal mb-12">
              Our Experience & Impact
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {[
                { stat: "120+", label: "enterprise transformation programs delivered across industries" },
                { stat: "~$850M", label: "in technology cost savings generated for clients over five years" },
                { stat: "35+", label: "strategic partnerships with leading cloud and infrastructure providers" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`py-8 ${i < 2 ? 'md:border-r border-border' : ''} ${i > 0 ? 'md:pl-12' : ''} ${i < 2 ? 'md:pr-12' : ''}`}
                >
                  <div className="text-4xl md:text-5xl font-normal text-charcoal mb-3">
                    {item.stat}
                  </div>
                  <div className="text-sm text-muted-foreground leading-relaxed">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Narrative Description Section - Unique NexDyne Copy */}
      <section className="py-16 md:py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-lg sm:text-xl md:text-2xl text-charcoal leading-relaxed ">
                Most mid-market companies are running on technology that was never designed for where they're headed. Systems built for 50 employees struggle under 200. Infrastructure that worked five years ago now costs more to maintain than to replace. We've spent the last decade helping companies break free from this trap.
              </p>
              
              <p className="text-lg text-charcoal/80 leading-relaxed">
                The challenge isn't just technical—it's strategic. Legacy systems create invisible constraints that limit what your business can become. Modern architecture removes those constraints. But the path from here to there requires more than technology expertise. It requires understanding your business well enough to know what to modernize first, what to migrate, and what to rebuild entirely.
              </p>
              
              <div className="space-y-6 pt-4">
                <div>
                  <p className="text-lg text-charcoal leading-relaxed">
                    <span className="font-bold">Your competitors have already started:</span> Companies that modernized their infrastructure 3-5 years ago now deploy new features in days, not months. They scale without hiring armies of IT staff. They're winning deals you're losing because they can move faster.
                  </p>
                </div>
                
                <div>
                  <p className="text-lg text-charcoal leading-relaxed">
                    <span className="font-bold">The cost of waiting compounds:</span> Every year you delay modernization, technical debt accumulates. Integration becomes harder. The gap between your capabilities and market expectations widens. The transformation that costs $2M today will cost $5M in three years.
                  </p>
                </div>
                
                <div>
                  <p className="text-lg text-charcoal leading-relaxed">
                    <span className="font-bold">Cloud-native isn't optional anymore:</span> It's the baseline. Companies that can't scale elastically, deploy continuously, and recover instantly aren't competing—they're surviving. The question isn't whether to transform, but how fast you can get there.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Your Transformation Ambition - Bain Hover Cards */}
      <section className="py-16 md:py-12 sm:py-16 lg:py-24 bg-white border-t border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl text-charcoal mb-4">
              What's your transformation ambition?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We've helped companies at every stage of the transformation journey—from those just starting to assess their technical debt to those ready to rebuild their entire platform. Where are you?
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <BainHoverCard
              title="Migrate to the cloud without disrupting operations"
              description="Design and execute migration strategies that minimize risk while capturing the full benefits of cloud infrastructure—cost savings, scalability, and resilience."
              link="/solutions/enterprise-transformation/cloud-migration-architecture"
            />
            <BainHoverCard
              title="Replace legacy systems that constrain growth"
              description="Modernize monolithic applications with microservices architecture, enabling faster development cycles, independent scaling, and reduced maintenance burden."
              link="/solutions/enterprise-transformation/infrastructure-modernization"
            />
            <BainHoverCard
              title="Build platforms that accelerate delivery"
              description="Establish internal developer platforms, CI/CD pipelines, and infrastructure-as-code practices that turn weeks of deployment work into hours."
              link="/solutions/enterprise-transformation/platform-engineering"
            />
            <BainHoverCard
              title="Secure your infrastructure without slowing down"
              description="Implement zero-trust security frameworks and automated compliance monitoring that protect your environment while maintaining developer velocity."
              link="/solutions/enterprise-transformation/security-and-compliance"
            />
            <BainHoverCard
              title="Unify data across fragmented systems"
              description="Build modern data platforms that consolidate disparate sources, enable real-time analytics, and create a single source of truth for decision-making."
              link="/solutions/enterprise-transformation/data-platform-engineering"
            />
            <BainHoverCard
              title="Optimize cloud costs that have spiraled"
              description="Right-size your cloud infrastructure, implement FinOps practices, and establish governance that keeps costs predictable as you scale."
              link="/solutions/enterprise-transformation/cloud-cost-optimization"
            />
          </div>
        </div>
      </section>

      {/* AI in Enterprise Technology Section */}
      <section className="py-16 md:py-12 sm:py-16 lg:py-24 bg-charcoal">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl text-white mb-6">
                AI in Enterprise Technology
              </h2>
              
              <p className="text-muted-foreground/70 mb-8 leading-relaxed">
                AI is fundamentally changing how enterprise technology teams operate. From code generation to infrastructure optimization, the companies that figure out how to embed AI into their technology function will outpace those that don't. We help you move beyond pilots to production-scale AI that transforms how your team builds and operates:
              </p>
              
              <ul className="space-y-4 text-muted-foreground/50">
                <li className="flex items-start">
                  <span className="text-destructive mr-3">•</span>
                  <span><strong className="text-white">AI-assisted development.</strong> Accelerate coding with intelligent assistants that understand your codebase, suggest improvements, and catch errors before they reach production.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-destructive mr-3">•</span>
                  <span><strong className="text-white">Intelligent infrastructure.</strong> Deploy AI-powered monitoring that predicts failures, optimizes resource allocation, and automates routine maintenance tasks.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-destructive mr-3">•</span>
                  <span><strong className="text-white">Automated testing.</strong> Generate comprehensive test suites, identify edge cases, and reduce QA cycles from weeks to days.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-destructive mr-3">•</span>
                  <span><strong className="text-white">Security automation.</strong> Detect vulnerabilities, respond to threats, and maintain compliance with AI systems that learn from your environment.</span>
                </li>
              </ul>
              
              <Link href="/insights/ai-enterprise-technology" className="inline-flex items-center text-destructive font-semibold mt-8 hover:text-red-400 transition-colors">
                How AI is transforming enterprise technology <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
            
            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <img 
                src="/images/solution-enterprise-tech.a945b529.webp" 
                alt="AI in Enterprise Technology" 
                className="w-full h-full object-cover"
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
              <p className="text-muted-foreground/70 mb-6 leading-relaxed">
                We've helped technology teams across healthcare, financial services, manufacturing, and professional services implement AI that delivers measurable productivity gains—from 40% faster development cycles to 60% reduction in infrastructure incidents.
              </p>
              <Link href="/case-studies" className="inline-flex items-center text-white hover:text-muted-foreground/50 transition-colors">
                See how we're helping companies transform with AI <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">How We Help</h3>
              <p className="text-muted-foreground/70 mb-6 leading-relaxed">
                We help enterprise technology teams identify high-impact AI use cases, build the infrastructure to support them, and develop the skills to maintain them. Our approach focuses on production-ready implementations that deliver ROI within months, not years.
              </p>
              <Link href="/capabilities/ai" className="inline-flex items-center text-white hover:text-muted-foreground/50 transition-colors">
                Learn more about our AI approach <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Can Help - Bain Hover Cards */}
      <section className="py-16 md:py-12 sm:py-16 lg:py-24 bg-white border-t border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl text-charcoal mb-4">
              How We Can Help
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <BainHoverCard
              title="Cloud Migration & Architecture"
              description="Design and execute cloud migration strategies that minimize risk while maximizing the benefits of modern infrastructure—from lift-and-shift to cloud-native rebuilds."
              link="/solutions/enterprise-transformation/cloud-migration-architecture"
            />
            <BainHoverCard
              title="Infrastructure Modernization"
              description="Replace monolithic systems with microservices architecture, containerization, and modern deployment practices that enable faster, safer releases."
              link="/solutions/enterprise-transformation/infrastructure-modernization"
            />
            <BainHoverCard
              title="Platform Engineering"
              description="Build internal developer platforms that abstract infrastructure complexity, standardize tooling, and accelerate delivery across your engineering organization."
              link="/solutions/enterprise-transformation/platform-engineering"
            />
            <BainHoverCard
              title="DevOps & CI/CD"
              description="Establish automated pipelines, infrastructure-as-code, and deployment practices that turn weeks of release work into hours of automated flow."
              link="/solutions/enterprise-transformation/devops-cicd"
            />
            <BainHoverCard
              title="Security & Compliance"
              description="Implement zero-trust architectures, automated compliance monitoring, and security practices that protect without slowing down development."
              link="/solutions/enterprise-transformation/security-and-compliance"
            />
            <BainHoverCard
              title="Data Platform Engineering"
              description="Build modern data infrastructure that unifies sources, enables real-time analytics, and creates the foundation for AI and machine learning."
              link="/solutions/enterprise-transformation/data-platform-engineering"
            />
            <BainHoverCard
              title="Cloud Cost Optimization"
              description="Right-size infrastructure, implement FinOps practices, and establish governance that keeps cloud costs predictable as you scale."
              link="/solutions/enterprise-transformation/cloud-cost-optimization"
            />
            <BainHoverCard
              title="Technology Due Diligence"
              description="Assess technology assets, identify risks, and develop integration roadmaps for M&A transactions and strategic investments."
              link="/solutions/enterprise-transformation/technology-due-diligence"
            />
          </div>
        </div>
      </section>

      {/* A Closer Look - Two Column Insight Cards */}
      <section className="py-16 md:py-12 sm:py-16 lg:py-24 bg-subtle border-t border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl text-charcoal">
              A Closer Look
            </h2>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                title: "The Real Cost of Technical Debt: A Framework for Prioritization",
                description: "Most companies underestimate technical debt because they only count maintenance hours. We developed a framework that captures the full cost—including opportunity cost, risk exposure, and talent retention impact.",
                link: "/insights/technical-debt-framework"
              },
              {
                title: "Cloud Migration Playbook: Lessons from 100+ Transformations",
                description: "After helping over 100 companies migrate to the cloud, we've identified the patterns that separate successful transformations from costly failures. The difference isn't technical—it's strategic.",
                link: "/insights/cloud-migration-playbook"
              }
            ].map((insight, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={insight.link}>
                  <div className="bg-white border border-border p-8 h-full hover:border-gray-400 transition-colors group cursor-pointer">
                    <h3 className="text-xl font-bold text-charcoal mb-4 leading-tight group-hover:text-primary transition-colors">
                      {insight.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {insight.description}
                    </p>
                    <span className="inline-flex items-center text-charcoal font-semibold">
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Client Results - Tabbed Section */}
      <section className="py-16 md:py-12 sm:py-16 lg:py-24 bg-white border-t border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl text-charcoal">
              Our Client Results in Enterprise Transformation
            </h2>
          </motion.div>
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {clientResults.map((result, i) => (
              <button
                key={i}
                onClick={() => setActiveResultTab(i)}
                className={`px-6 py-3 text-sm font-semibold transition-colors ${
                  activeResultTab === i 
                    ? 'bg-charcoal text-white' 
                    : 'bg-subtle text-muted-foreground hover:bg-muted'
                }`}
              >
                {result.tab}
              </button>
            ))}
          </div>
          
          {/* Active Result */}
          <motion.div
            key={activeResultTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={clientResults[activeResultTab].image} 
                alt={clientResults[activeResultTab].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-destructive text-sm font-bold uppercase tracking-wider mb-3 block">
                {clientResults[activeResultTab].industry}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-4 leading-tight">
                {clientResults[activeResultTab].title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {clientResults[activeResultTab].description}
              </p>
              <Link href="/case-studies" className="inline-flex items-center text-destructive font-semibold hover:text-red-700 transition-colors">
                Read the full story <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </motion.div>
          
          {/* See More Button */}
          <div className="text-center mt-12">
            <Link href="/case-studies">
              <Button variant="outline" className="border-primary text-destructive hover:bg-primary hover:text-white px-8 py-3">
                SEE MORE
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Insights Section */}
      <section className="py-16 md:py-12 sm:py-16 lg:py-24 bg-subtle border-t border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl text-charcoal">
              Our Enterprise Transformation Insights
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                category: "Technology",
                title: "How Businesses Can Prepare for Post-Quantum Security",
                description: "Quantum computing will break current encryption. Companies that start preparing now will have a significant advantage.",
                link: "/insights/post-quantum-security"
              },
              {
                category: "Cloud Strategy",
                title: "Multi-Cloud vs. Single Cloud: Making the Right Choice",
                description: "A framework for evaluating cloud strategies based on your organization's specific needs and growth trajectory.",
                link: "/insights/multi-cloud-strategy"
              },
              {
                category: "DevOps",
                title: "Platform Engineering: The Next Evolution",
                description: "How leading organizations are building internal developer platforms to accelerate delivery.",
                link: "/insights/platform-engineering"
              },
              {
                category: "Security",
                title: "Zero Trust Architecture for the Modern Enterprise",
                description: "Implementing zero trust in cloud-native environments without sacrificing developer velocity.",
                link: "/insights/zero-trust-architecture"
              }
            ].map((insight, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={insight.link}>
                  <div className="group cursor-pointer h-full">
                    <div className="aspect-[4/3] bg-gradient-to-br from-base to-primary mb-4 overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-white/20 text-4xl ">{i + 1}</span>
                      </div>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.15em] text-destructive mb-2 block">
                      {insight.category}
                    </span>
                    <h3 className="text-lg font-bold text-charcoal mb-2 group-hover:text-primary transition-colors leading-tight">
                      {insight.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {insight.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* See More Button */}
          <div className="text-center mt-12">
            <Link href="/insights">
              <Button variant="outline" className="border-primary text-destructive hover:bg-primary hover:text-white px-8 py-3">
                SEE MORE
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Consulting Services Link List */}
      <section className="py-16 md:py-12 sm:py-16 lg:py-20 bg-white border-t border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl text-charcoal">
              Consulting Services
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-x-8 gap-y-4 max-w-4xl mx-auto">
            {[
              { name: "Customer Intelligence", link: "/solutions/data-driven-customer-intelligence" },
              { name: "Process Optimization", link: "/solutions/intelligent-process-optimization" },
              { name: "Business Growth", link: "/solutions/accelerating-business-growth" },
              { name: "AI & Analytics", link: "/capabilities/ai" },
              { name: "Data Transformation", link: "/capabilities/data-transformation" },
              { name: "Technology Strategy", link: "/capabilities/technology" }
            ].map((service, i) => (
              <Link key={i} href={service.link}>
                <div className="flex items-center justify-between py-4 border-b border-border hover:border-gray-400 transition-colors group cursor-pointer">
                  <span className="text-charcoal font-medium group-hover:text-primary transition-colors">
                    {service.name}
                  </span>
                  <ArrowRight className="w-4 h-4 text-destructive" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Talk CTA Section - Bain Style Two Column */}
      <section className="py-16 md:py-12 sm:py-16 lg:py-24 bg-subtle border-t border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
                Ready to talk?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We work with technology leaders who want to build infrastructure that enables growth, not constrains it. Together, we can design a transformation roadmap that delivers measurable results.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <p className="text-muted-foreground">
                Tell us about your transformation challenges and we'll connect you with the right experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-red-700 text-white px-8 py-4 text-base font-semibold">
                    Schedule a Consultation
                  </Button>
                </Link>
                <Link href="/case-studies">
                  <Button variant="outline" className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white px-8 py-4 text-base font-semibold">
                    View Our Work
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
