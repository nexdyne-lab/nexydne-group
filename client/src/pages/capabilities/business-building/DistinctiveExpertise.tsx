import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import BainHoverCard from '@/components/BainHoverCard';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { SEO } from '@/components/SEO';

export default function DistinctiveExpertise() {
  return (
    <div className="min-h-screen bg-white text-charcoal font-sans">
      <SEO 
        title="Distinctive Expertise & Proven Methodologies" 
        description="Access industry-specific playbooks, growth strategy templates, and best practice repositories refined across hundreds of mid-market transformations."
        canonical="/capabilities/business-building/distinctive-expertise"
      />
      <Navigation />
      
      {/* Breadcrumb */}
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Capabilities', href: '/capabilities' },
        { label: 'Business Building', href: '/capabilities/business-building' },
        { label: 'Distinctive Expertise' }
      ]} />

      {/* Hero Section - Clean minimal design */}
      <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden bg-charcoal">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-4 eb-garamond">
                Distinctive Expertise &<br />Proven Methodologies
              </h1>
              
              <p className="text-xl text-white leading-relaxed max-w-xl">
                Access industry-specific playbooks, growth strategy templates, and best practice repositories refined across hundreds of mid-market transformations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden lg:flex items-center justify-center"
            >
              <img 
                src="/images/distinctive-expertise-abstract.jpg" 
                alt="Distinctive Expertise Visualization" 
                className="max-w-md"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Experience & Impact (F100) */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container px-4 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-charcoal mb-12 eb-garamond"
          >
            Our Experience & Impact
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: "200+", label: "transformation playbooks deployed across 12 core industries" },
              { metric: "65%", label: "faster time-to-value using our proven methodologies vs. custom approaches" },
              { metric: "12", label: "industry-specific frameworks continuously refined from real implementations" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${index > 0 ? 'border-l border-border pl-8' : ''}`}
              >
                <div className="text-5xl md:text-6xl font-bold text-charcoal mb-4">{item.metric}</div>
                <p className="text-lg text-charcoal/60">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Thesis Statement - DZ10: Subtle gray bg */}
      <section className="dz-section bg-subtle">
        <div className="container px-4 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal leading-tight mb-5 sm:mb-6 md:mb-8 eb-garamond">
              "Every mid-market transformation follows predictable patterns. We've codified those patterns into repeatable frameworks that eliminate trial-and-error and accelerate time to value."
            </h2>
            <p className="text-lg text-charcoal/60 max-w-2xl mx-auto">
              Leveraging battle-tested methodologies to de-risk growth initiatives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Grid - DZ10: White bg */}
      <section className="dz-section bg-white">
        <div className="container px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Left Column: Context */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4"
            >
              <div className="lg:sticky lg:top-32">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-charcoal mb-6">The Reinvention Trap</h3>
                <p className="text-lg text-charcoal/70 leading-relaxed mb-5 sm:mb-6 md:mb-8">
                  Most mid-market companies approach growth initiatives as if they're inventing something entirely new. They spend months developing custom frameworks, testing unproven approaches, and learning lessons that others have already learned—often the hard way.
                </p>
                <p className="text-lg text-charcoal/70 leading-relaxed mb-5 sm:mb-6 md:mb-8">
                  This reinvention trap wastes time and capital. While companies experiment with untested methodologies, competitors leverage proven frameworks to move faster, avoid common pitfalls, and achieve predictable outcomes. The difference isn't talent or ambition—it's access to institutional knowledge refined across hundreds of similar transformations.
                </p>
                <div className="h-1 w-20 bg-primary"></div>
              </div>
            </motion.div>

            {/* Right Column: Solution */}
            <div className="lg:col-span-8 space-y-16">
              
              {/* Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-xl leading-relaxed text-charcoal font-medium mb-6">
                  NexDyne provides <strong>industry-specific playbooks and proven methodologies</strong> that eliminate guesswork from business building. We don't start from scratch—we deploy frameworks refined across hundreds of mid-market transformations, adapted to your specific industry context and growth objectives.
                </p>
                <p className="text-lg leading-relaxed text-charcoal/70">
                  Our methodology library spans market entry strategies, product launch frameworks, operational scaling playbooks, and growth marketing templates. Each framework includes decision trees, risk mitigation protocols, and success metrics validated through real-world implementations. You gain the institutional knowledge of a Fortune 500 strategy team without the overhead.
                </p>
              </motion.div>

              <div className="h-px bg-border" />

              {/* Core Capabilities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                id="capabilities"
                className="space-y-12"
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal eb-garamond">Core Capabilities</h2>
                
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
                  <div className="group">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif font-bold text-charcoal mb-4 group-hover:text-primary transition-colors">Industry-Specific Playbooks</h3>
                    <p className="text-charcoal/70 leading-relaxed">
                      We maintain comprehensive playbooks for 12 core industries, each containing market entry strategies, competitive positioning frameworks, and operational best practices. These playbooks codify lessons from successful transformations—documenting what works, what fails, and why. Rather than generic consulting advice, you receive specific guidance tailored to your industry's unique dynamics, regulatory environment, and competitive landscape.
                    </p>
                  </div>

                  <div className="group">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif font-bold text-charcoal mb-4 group-hover:text-primary transition-colors">Growth Strategy Templates</h3>
                    <p className="text-charcoal/70 leading-relaxed">
                      Our growth strategy templates provide structured frameworks for market expansion, product diversification, and partnership development. Each template includes scenario modeling tools, resource allocation guidelines, and risk assessment matrices. We've standardized the strategic planning process, enabling you to develop comprehensive growth strategies in weeks rather than months while maintaining analytical rigor and strategic depth.
                    </p>
                  </div>

                  <div className="group">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif font-bold text-charcoal mb-4 group-hover:text-primary transition-colors">Best Practice Repositories</h3>
                    <p className="text-charcoal/70 leading-relaxed">
                      We provide access to curated repositories of operational best practices spanning sales enablement, customer success, product development, and financial management. These repositories contain process documentation, workflow templates, and performance benchmarks from high-performing mid-market companies. You can implement proven processes immediately rather than developing them through costly trial and error.
                    </p>
                  </div>

                  <div className="group">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif font-bold text-charcoal mb-4 group-hover:text-primary transition-colors">Transformation Roadmaps</h3>
                    <p className="text-charcoal/70 leading-relaxed">
                      Our transformation roadmaps provide phase-by-phase implementation plans for complex initiatives. Each roadmap defines critical milestones, resource requirements, and success criteria while anticipating common obstacles and providing mitigation strategies. These roadmaps compress transformation timelines by eliminating planning delays and providing clear execution pathways that teams can follow with confidence.
                    </p>
                  </div>
                </div>
              </motion.div>

              <div className="h-px bg-border" />

              {/* Methodology Framework */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-12"
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal eb-garamond">Methodology Framework</h2>
                
                <div className="space-y-10">
                  <div className="border-l-4 border-primary pl-8">
                    <h3 className="text-xl font-semibold text-charcoal mb-4">Phase 1: Context Assessment (Week 1)</h3>
                    <p className="text-charcoal/70 leading-relaxed mb-4">
                      We assess your industry context, competitive position, and growth objectives to select the most relevant playbooks and frameworks. This diagnostic phase ensures we deploy methodologies that align with your specific situation rather than forcing generic approaches.
                    </p>
                    <ul className="space-y-2 text-charcoal/70">
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Industry dynamics and competitive landscape analysis</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Capability assessment and gap identification</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Playbook selection and customization planning</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary pl-8">
                    <h3 className="text-xl font-semibold text-charcoal mb-4">Phase 2: Framework Deployment (Weeks 2-4)</h3>
                    <p className="text-charcoal/70 leading-relaxed mb-4">
                      We deploy selected frameworks, adapting templates to your specific context while maintaining their proven structure. Your team receives training on framework application, ensuring they can leverage methodologies independently after our engagement concludes.
                    </p>
                    <ul className="space-y-2 text-charcoal/70">
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Framework customization and documentation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Team training and capability transfer</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Initial implementation and feedback integration</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary pl-8">
                    <h3 className="text-xl font-semibold text-charcoal mb-4">Phase 3: Optimization & Knowledge Transfer (Weeks 5-6)</h3>
                    <p className="text-charcoal/70 leading-relaxed mb-4">
                      We refine frameworks based on initial results, document lessons learned, and establish continuous improvement processes. Your team operates independently with full ownership of methodologies and the ability to adapt them as conditions evolve.
                    </p>
                    <ul className="space-y-2 text-charcoal/70">
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Performance analysis and framework refinement</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Documentation and knowledge repository creation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Continuous improvement process establishment</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section - DZ10: Subtle gray bg */}
      <section className="dz-section bg-subtle">
        <div className="container px-4 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <span className="section-label text-charcoal mb-4 sm:mb-6 block">Success Story</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal eb-garamond">
              How Proven Methodologies Accelerated Market Expansion
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white p-8 md:p-12 rounded-lg"
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-6 md:p-8 mb-6 sm:mb-8 md:mb-12">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-2">3 Weeks</div>
                <p className="text-sm text-charcoal/50 uppercase tracking-wider font-medium">Strategy Development Time</p>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-2">60%</div>
                <p className="text-sm text-charcoal/50 uppercase tracking-wider font-medium">Faster Time to Market</p>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-2">$3.2M</div>
                <p className="text-sm text-charcoal/50 uppercase tracking-wider font-medium">First-Year Revenue</p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-semibold text-charcoal mb-4">The Challenge</h4>
                <p className="text-charcoal/70 leading-relaxed">
                  A regional logistics company planned to expand into three new geographic markets but lacked a structured approach to market entry. Previous expansion attempts had failed due to inadequate market assessment, poor partner selection, and insufficient operational preparation. Leadership wanted a proven framework that would de-risk the expansion and accelerate time to profitability.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-charcoal mb-4">The Solution</h4>
                <p className="text-charcoal/70 leading-relaxed">
                  We deployed our logistics industry market entry playbook—a comprehensive framework refined across 40+ similar expansions. The playbook provided structured processes for market assessment, partner evaluation, operational setup, and go-to-market execution. Rather than developing a custom strategy from scratch, we adapted the proven framework to their specific context, incorporating local market intelligence while maintaining the playbook's core structure. The team received training on framework application, enabling them to execute the expansion independently.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-charcoal mb-4">The Results</h4>
                <p className="text-charcoal/70 leading-relaxed mb-6">
                  The playbook compressed strategy development from six months to three weeks. Structured partner evaluation criteria identified high-quality partners in each market, avoiding the relationship failures that plagued previous expansions. Operational setup checklists ensured consistent service quality from day one. The company entered all three markets within five months—60% faster than previous expansion timelines—and achieved profitability in each market within nine months. First-year revenue reached $3.2M, exceeding projections by 35%. Leadership now uses the same playbook framework to evaluate additional expansion opportunities, having internalized the methodology through the initial implementation.
                </p>
                <div className="bg-subtle p-4 sm:p-5 md:p-6 rounded-lg border-l-4 border-primary">
                  <p className="text-charcoal/80 italic">
                    "The market entry playbook gave us a proven roadmap instead of forcing us to reinvent the wheel. We avoided the mistakes that cost us millions in previous expansions and moved with confidence because we knew the framework had worked dozens of times before."
                  </p>
                  <p className="text-sm text-charcoal/50 mt-4 font-semibold">— CEO, Regional Logistics Company</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Playbook Library - DZ10: White bg */}
      <section className="dz-section bg-white">
        <div className="container px-4 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-6 sm:mb-8 md:mb-12 eb-garamond">Playbook Library</h2>
            
            <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8">
              <div className="bg-subtle p-4 sm:p-6 md:p-8 rounded-lg group hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-charcoal mb-6 group-hover:text-primary transition-colors">Market Entry & Expansion</h3>
                <ul className="space-y-3 text-charcoal/70">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 shrink-0" />
                    <span>Geographic expansion framework</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 shrink-0" />
                    <span>Vertical market entry playbook</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 shrink-0" />
                    <span>Partnership development templates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 shrink-0" />
                    <span>Competitive positioning frameworks</span>
                  </li>
                </ul>
              </div>

              <div className="bg-subtle p-4 sm:p-6 md:p-8 rounded-lg group hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-charcoal mb-6 group-hover:text-primary transition-colors">Product & Service Launch</h3>
                <ul className="space-y-3 text-charcoal/70">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 shrink-0" />
                    <span>Product launch roadmap templates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 shrink-0" />
                    <span>Go-to-market strategy frameworks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 shrink-0" />
                    <span>Pricing strategy playbooks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 shrink-0" />
                    <span>Customer acquisition frameworks</span>
                  </li>
                </ul>
              </div>

              <div className="bg-subtle p-4 sm:p-6 md:p-8 rounded-lg group hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-charcoal mb-6 group-hover:text-primary transition-colors">Operational Scaling</h3>
                <ul className="space-y-3 text-charcoal/70">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 shrink-0" />
                    <span>Process standardization templates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 shrink-0" />
                    <span>Team scaling playbooks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 shrink-0" />
                    <span>Technology infrastructure frameworks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 shrink-0" />
                    <span>Quality assurance methodologies</span>
                  </li>
                </ul>
              </div>

              <div className="bg-subtle p-4 sm:p-6 md:p-8 rounded-lg group hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-charcoal mb-6 group-hover:text-primary transition-colors">Growth Marketing</h3>
                <ul className="space-y-3 text-charcoal/70">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 shrink-0" />
                    <span>Demand generation frameworks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 shrink-0" />
                    <span>Content marketing playbooks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 shrink-0" />
                    <span>Sales enablement templates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 shrink-0" />
                    <span>Customer retention frameworks</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We Can Help - Capability Cards with H100 */}
      <section className="py-24 bg-subtle">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
              How We Can Help
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 eb-garamond">
              Our Methodology Services
            </h2>
            <p className="text-xl text-charcoal/60 max-w-2xl">
              Access proven frameworks and expert guidance to accelerate your transformation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Playbook Selection", description: "We match your business challenge to our library of 200+ proven playbooks, selecting the frameworks most relevant to your industry and growth stage." },
              { title: "Framework Customization", description: "We adapt our standard methodologies to your specific context, competitive landscape, and organizational capabilities." },
              { title: "Implementation Support", description: "Our experts guide your team through playbook execution, providing coaching and troubleshooting at each phase." },
              { title: "Knowledge Transfer", description: "We train your team to use and adapt our methodologies independently, building internal capability for future initiatives." },
              { title: "Benchmark Analysis", description: "We compare your performance against our database of similar transformations, identifying gaps and opportunities." },
              { title: "Continuous Refinement", description: "We update your playbooks based on implementation learnings, ensuring methodologies evolve with your business." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="h-full"
              >
                <BainHoverCard title={item.title} description={item.description} link="#" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Capabilities - H100 Hover Cards */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
              Related Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal eb-garamond">
              Explore more ways we can help
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Digital Venture Launch", description: "Apply our proven playbooks to launch new digital ventures with confidence and speed.", link: "/capabilities/business-building/digital-venture-launch" },
              { title: "AI-Powered Acceleration", description: "Leverage AI to enhance our methodologies with predictive insights and automation.", link: "/capabilities/business-building/ai-powered-acceleration" },
              { title: "Go-to-Market at Scale", description: "Use our GTM frameworks to expand into new markets and customer segments.", link: "/capabilities/business-building/go-to-market-scale" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="h-full"
              >
                <BainHoverCard title={item.title} description={item.description} link={item.link} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - DZ10: Deep Navy bg */}
      <section className="dz-section bg-base">
        <div className="container px-4 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 eb-garamond">
              Ready to leverage proven methodologies?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/70 mb-5 sm:mb-6 md:mb-8 leading-relaxed">
              Schedule a consultation to discuss how our industry-specific playbooks and growth frameworks can accelerate your business building initiatives.
            </p>
            <Link href="/capabilities/business-building#consultation">
              <button className="dz-btn-primary bg-primary hover:bg-primary/90 group">
                Start Building
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
