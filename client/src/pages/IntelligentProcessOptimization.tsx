import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ChevronRight, Play, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useState } from "react";

export default function IntelligentProcessOptimization() {
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-white font-sans text-charcoal">
      <SEO 
        title="Intelligent Process Optimization" 
        description="Transform manual operations into autonomous systems. Eliminate bottlenecks and accelerate execution with intelligent automation."
        canonical="/solutions/intelligent-process-optimization"
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
                <span className="text-white/70">Process Optimization</span>
              </nav>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl eb-garamond  tracking-tight text-white leading-[1.1] mb-3">
                Intelligent Process Optimization
              </h1>
              
              <p className="text-lg md:text-xl text-white/70 leading-relaxed italic">
                Automate complexity. Accelerate execution.
              </p>
            </motion.div>
            
            {/* Right Column - Hero Image with Abstract Shapes */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative h-[300px] sm:h-[400px] lg:h-full lg:absolute lg:right-0 lg:top-0 lg:w-1/2"
            >
              <img 
                src="/images/solution-process.a945b529.webp" 
                alt="Intelligent Process Optimization - Problem Solving" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent lg:block hidden" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Experience & Impact Section - Bain Style Statistics */}
      <section className="py-16 md:py-20 bg-white border-b border-border/50">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-charcoal mb-12">
              Our Experience & Impact
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
              {[
                { stat: "150+", label: "process optimization programs delivered in the last 5 years" },
                { stat: "4.2x", label: "faster end-to-end cycle times for our clients" },
                { stat: "1.5-3x", label: "ROI achieved within the first 12 months" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`${i > 0 ? 'md:border-l md:border-border md:pl-8' : ''}`}
                >
                  <div className="text-5xl md:text-6xl font-serif font-bold text-charcoal mb-3">
                    {item.stat}
                  </div>
                  <div className="text-base text-muted-foreground leading-relaxed max-w-xs">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Narrative Description Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-xl md:text-2xl text-charcoal leading-relaxed">
                The operational reality for mid-market companies is stark: growth creates complexity, and complexity creates friction. What worked at $10M in revenue becomes a bottleneck at $50M. We've spent years helping companies break through these operational ceilings.
              </p>
              
              <p className="text-lg text-charcoal/80 leading-relaxed">
                While the promise of automation has existed for decades, the ability to deliver intelligent, adaptive systems has only recently become practical for mid-market budgets. The convergence of AI, low-code platforms, and cloud infrastructure has fundamentally changed what's possible. Our <Link href="/insights/process-mining-guide" className="text-secondary underline hover:no-underline">process optimization consultants</Link> collaborate with you to consider every growth opportunity and customize a personalized program based on your strategic and organizational context.
              </p>
              
              <p className="text-lg text-charcoal/80 leading-relaxed">
                Working with us will feel different—we team with you to define your goals, change your organization, and deliver more than you thought possible.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Think About Process Optimization - Bain-Style Sub-Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-charcoal">
              How We Think About Process Optimization
            </h2>
          </motion.div>
          
          {/* Bain-Style Grid with Banner Header */}
          <div className="space-y-0">
            {/* Banner Header Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-secondary p-6 md:p-8"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-2">
                Full Potential Optimization
              </h3>
              <p className="text-white/80 text-center flex items-center justify-center gap-2">
                Alter your organization's trajectory in pursuit of extraordinary results
                <ArrowRight className="w-4 h-4" />
              </p>
            </motion.div>
            
            {/* Sub-Service Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 border border-border border-t-0">
              {[
                {
                  title: "Accelerated Performance Transformation",
                  description: "Expedite firm-wide performance with a focus on capability building, sustainable change, and value delivery within 12-18 months",
                  link: "/solutions/intelligent-process-optimization"
                },
                {
                  title: "Digital Process Transformation",
                  description: "Amplify the cutting-edge technical capabilities you need to compete in a rapidly evolving market",
                  link: "/capabilities/digital-transformation"
                },
                {
                  title: "People and Organization",
                  description: "Accelerate your organization's results through your people and teams",
                  link: "/about/team"
                },
                {
                  title: "Earned Growth Optimization",
                  description: "Spur profitable growth by delivering a customer-centric strategy",
                  link: "/solutions/customer-intelligence"
                },
                {
                  title: "Sustainability Integration",
                  description: "Connect sustainability with your purpose and your strategy",
                  link: "/solutions/enterprise-transformation"
                }
              ].map((service, i) => (
                <motion.a
                  key={i}
                  href={service.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`bg-charcoal p-6 md:p-8 group hover:bg-charcoal transition-colors ${i < 4 ? 'border-r border-gray-700' : ''} ${i < 5 ? 'md:border-b-0' : ''}`}
                >
                  <h4 className="text-lg font-bold text-white mb-4 group-hover:text-secondary transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-muted-foreground/70 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="text-white/60 group-hover:text-white flex items-center text-sm">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Help Clients Section - Services Grid */}
      <section className="py-16 md:py-24 bg-subtle">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-4">
              How we help clients
            </h2>
            <p className="text-2xl md:text-3xl font-serif text-charcoal max-w-3xl leading-relaxed">
              We combine deep operational expertise with cutting-edge technology to transform how you work—eliminating friction, accelerating execution, and building sustainable competitive advantage.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Process Discovery & Mining",
                description: "Uncover hidden inefficiencies and bottlenecks through advanced process mining, creating a data-driven foundation for transformation.",
                link: "/solutions/process-optimization/process-discovery-mining"
              },
              {
                title: "Intelligent Automation Design",
                description: "Design and implement automation solutions that combine RPA, AI, and workflow orchestration for maximum impact.",
                link: "/solutions/process-optimization/intelligent-automation-design"
              },
              {
                title: "Workflow Optimization",
                description: "Streamline end-to-end workflows to eliminate handoffs, reduce cycle times, and improve quality at every step.",
                link: "/solutions/process-optimization/workflow-optimization"
              },
              {
                title: "AI-Powered Decision Support",
                description: "Deploy machine learning models that augment human decision-making with predictive insights and recommendations.",
                link: "/solutions/process-optimization/ai-powered-decision-support"
              },
              {
                title: "Change Management & Training",
                description: "Ensure successful adoption through comprehensive change management, training programs, and ongoing support.",
                link: "/solutions/process-optimization/change-management-training"
              },
              {
                title: "Continuous Improvement Programs",
                description: "Establish frameworks for ongoing optimization, measurement, and iteration to sustain and extend initial gains.",
                link: "/solutions/process-optimization/continuous-improvement-programs"
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={service.link} className="block h-full group">
                  <div className="h-full bg-white p-6 md:p-8 border border-border/50 hover:border-secondary/30 hover:shadow-lg transition-all duration-300 flex flex-col">
                    <h3 className="text-lg font-bold text-charcoal mb-3 group-hover:text-secondary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                      {service.description}
                    </p>
                    <div className="flex items-center text-secondary text-sm font-semibold mt-4 pt-4 border-t border-border/50">
                      Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Transformations That Work - Bain-Style Feature Card */}
      <section className="py-0 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="border border-border">
            <div className="grid lg:grid-cols-2">
              {/* Left Column - Text */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-8 md:p-12 lg:p-16 flex flex-col justify-center"
              >
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-charcoal mb-6 leading-tight">
                  Process Transformations That Work
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Process transformations are about continuously reshaping an organization. When they work, they enhance performance, increase efficiency, and create a competitive advantage.
                </p>
                <Link href="/insights/automation-imperative">
                  <Button className="bg-destructive hover:bg-destructive text-white px-6 py-3 w-fit">
                    LEARN MORE
                  </Button>
                </Link>
              </motion.div>
              
              {/* Right Column - Abstract Graphic */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-destructive relative min-h-[300px] lg:min-h-[400px] overflow-hidden"
              >
                {/* Abstract Lines Pattern */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
                  {/* Horizontal lines pattern */}
                  {[...Array(20)].map((_, i) => (
                    <line
                      key={i}
                      x1={50 + Math.random() * 100}
                      y1={20 + i * 14}
                      x2={250 + Math.random() * 100}
                      y2={20 + i * 14}
                      stroke="white"
                      strokeWidth="2"
                      opacity={0.6 + Math.random() * 0.4}
                    />
                  ))}
                </svg>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation with AI Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-6">
                Transformation with AI
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                AI-driven transformation presents a dual challenge: It requires companies to apply time-tested change principles <em>and</em> wrestle with unfamiliar questions about trust, experimentation, and scaling. We can help you:
              </p>
              <ul className="space-y-4 text-charcoal/80">
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">•</span>
                  <span>Ensure your leadership team is fluent enough in AI to serve as credible sponsors of transformation and aligned on both the vision and the behaviors needed to achieve it</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">•</span>
                  <span>Understand the specific friction points and fears of each function and business unit, and deploy the appropriate training and tools, in the proper sequence, for each group</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">•</span>
                  <span>Create safe spaces for experimentation to build trust and ownership, and balance innovation with risk management and ethical use</span>
                </li>
              </ul>
              <Link href="/insights/ai-agents-transform-operations" className="text-destructive font-semibold flex items-center gap-2 mt-8 hover:underline">
                Leading change in the AI era <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            
            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="/images/hero-ai-enterprise.jpg" 
                alt="AI Transformation" 
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
          
          {/* Real Outcomes & How We Help - Two Column */}
          <div className="grid md:grid-cols-2 gap-8 mt-16 pt-16 border-t border-border">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-charcoal mb-4">Real Outcomes</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We've worked with leading retailers, manufacturers, professional services firms, and even yacht racers to effectively test and scale AI. Our clients have achieved double-digit improvements in customer retention, productivity, time to market, and many other critical performance metrics.
              </p>
              <Link href="/cases" className="text-charcoal font-semibold flex items-center gap-2 hover:text-secondary transition-colors">
                See how we're helping industry leaders win with AI <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold text-charcoal mb-4">How We Help</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Employees are 3.5 times more likely to perceive transformation programs positively when leaders demonstrate alignment and support for the change. We work closely with senior leaders to address the many technical and cultural issues involved in AI-driven transformation.
              </p>
              <Link href="/capabilities/generative-ai" className="text-charcoal font-semibold flex items-center gap-2 hover:text-secondary transition-colors">
                Learn more about our AI approach <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Results Section - Bain Style */}
      <section className="py-16 md:py-24 bg-white border-t border-border/50">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px bg-gray-300 w-16"></div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-charcoal">
                Client Results
              </h2>
              <div className="h-px bg-gray-300 w-16"></div>
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                industry: "Manufacturing & Services",
                title: "Regional Manufacturer Cuts Order Processing Time by 78%",
                description: "CEO discusses how a multifaceted transformation culminated in a stunning operational turnaround.",
                image: "/images/case-logistics.jpg",
                link: "/cases/logistics-shipment-automation"
              },
              {
                industry: "Professional Services",
                title: "A Bold New Strategy Restores a Firm to a Leadership Position",
                description: "Its holistic approach to simplification, execution discipline, and digitalization has proved transformational.",
                image: "/images/case-saas.jpg",
                link: "/cases/saas-customer-onboarding"
              }
            ].map((result, i) => (
              <motion.a
                key={i}
                href={result.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group block"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={result.image}
                      alt={result.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-[0.15em] text-destructive mb-3 block">
                        {result.industry}
                      </span>
                      <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:underline leading-tight">
                        {result.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {result.description}
                      </p>
                    </div>
                    <div className="flex justify-end mt-4">
                      <Bookmark className="w-5 h-5 text-muted-foreground/70 hover:text-charcoal transition-colors" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/cases">
              <Button variant="outline" className="border-destructive text-destructive hover:bg-destructive/5 px-8 py-3">
                SEE MORE
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Process Optimization Insights - Bain Style */}
      <section className="py-16 md:py-24 bg-white border-t border-border/50">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px bg-gray-300 w-16"></div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-charcoal">
                Our Process Optimization Insights
              </h2>
              <div className="h-px bg-gray-300 w-16"></div>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                category: "Operations",
                title: "Rethinking Transformation: Leading Change at Mid-Market Companies",
                description: "Frankie Leung speaks with Lawrence Lam, CEO of a regional manufacturer, about organizational transformation and sustaining change through a people-led approach.",
                type: "video",
                source: "Executives on Transformations",
                image: "/images/insight-process-1.jpg"
              },
              {
                category: "Technology",
                title: "Shift to Vertical: David Haines, Group CEO, Flora Food Group",
                description: "What does it take to stay connected to your customers when scale and complexity threaten to pull you away?",
                type: "podcast",
                source: "Founder's Mentality: The CEO Sessions",
                image: "/images/insight-process-2.jpg"
              },
              {
                category: "Strategy",
                title: "Get Off the Transformation Treadmill",
                description: "Too much change can traumatize your organization. The remedy is to minimize the need.",
                type: "external",
                source: "Harvard Business Review",
                image: "/images/hero-ai-economy.jpg"
              },
              {
                category: "Manufacturing",
                title: "Automotive Profitability: How OEM and Supplier Margins Are Faring",
                description: "The post-pandemic profit surge has reversed, as OEM margins have fallen more than 50% since 2023.",
                type: "interactive",
                source: "Interactive",
                image: "/images/insight-process-3.jpg"
              }
            ].map((insight, i) => (
              <motion.a
                key={i}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group block"
              >
                {/* Image with type icon */}
                <div className="aspect-[4/3] overflow-hidden mb-4 relative">
                  <img 
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Type Icon */}
                  <div className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                    {insight.type === 'video' && <Play className="w-4 h-4 text-charcoal fill-current" />}
                    {insight.type === 'podcast' && (
                      <svg className="w-4 h-4 text-charcoal" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                        <line x1="12" y1="19" x2="12" y2="23"/>
                        <line x1="8" y1="23" x2="16" y2="23"/>
                      </svg>
                    )}
                    {insight.type === 'external' && (
                      <svg className="w-4 h-4 text-charcoal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                    )}
                    {insight.type === 'interactive' && (
                      <svg className="w-4 h-4 text-charcoal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="20" x2="18" y2="10"/>
                        <line x1="12" y1="20" x2="12" y2="4"/>
                        <line x1="6" y1="20" x2="6" y2="14"/>
                      </svg>
                    )}
                  </div>
                </div>
                
                {/* Content */}
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-destructive mb-2 block">
                  {insight.category}
                </span>
                <h3 className="text-base font-bold text-charcoal mb-2 group-hover:underline leading-tight">
                  {insight.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-2">
                  {insight.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{insight.source}</span>
                  <Bookmark className="w-4 h-4 text-muted-foreground/70 hover:text-charcoal transition-colors" />
                </div>
              </motion.a>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/insights">
              <Button variant="outline" className="border-destructive text-destructive hover:bg-destructive/5 px-8 py-3">
                SEE MORE
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Offerings Section - Bain Style */}
      <section className="py-16 md:py-24 bg-subtle">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px bg-gray-300 w-16"></div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-charcoal">
                Related Offerings
              </h2>
              <div className="h-px bg-gray-300 w-16"></div>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: "Change Management and Implementation",
                link: "/solutions/enterprise-transformation"
              },
              {
                title: "Chief Transformation Officer Advisory",
                link: "/services/fractional-cfo"
              },
              {
                title: "NexDyne Accelerator",
                link: "/capabilities/generative-ai"
              },
              {
                title: "NexDyne Academy",
                link: "/about/team"
              },
              {
                title: "Accelerated Performance Transformation",
                link: "/solutions/intelligent-process-optimization"
              }
            ].map((offering, i) => (
              <motion.a
                key={i}
                href={offering.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 border border-border hover:shadow-lg transition-shadow group"
              >
                <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-6 sm:mb-8 leading-tight sm:min-h-[56px]">
                  {offering.title}
                </h3>
                <span className="text-destructive font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Talk? Section - Bain Style Contact CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left Column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-8">
                  Ready to talk?
                </h2>
                <p className="text-muted-foreground mb-8">
                  I want to talk to your experts in:
                </p>
                <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                  <SelectTrigger className="w-full border-0 border-b-2 border-charcoal rounded-none text-lg py-6 focus:ring-0">
                    <SelectValue placeholder="Select an industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="professional-services">Professional Services</SelectItem>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="financial-services">Financial Services</SelectItem>
                    <SelectItem value="retail">Retail & Consumer</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>
              
              {/* Right Column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <p className="text-muted-foreground mb-8">
                  We work with ambitious leaders who want to define the future, not hide from it. Together, we achieve extraordinary outcomes.
                </p>
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-border rounded px-4 py-4 text-lg focus:outline-none focus:border-charcoal"
                  />
                  <Button className="bg-destructive hover:bg-destructive text-white px-8 py-4 text-lg w-full md:w-auto">
                    CONTACT US
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
