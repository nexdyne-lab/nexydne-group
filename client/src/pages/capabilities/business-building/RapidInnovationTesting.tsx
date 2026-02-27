import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { SEO } from '@/components/SEO';

export default function RapidInnovationTesting() {
  return (
    <div className="min-h-screen bg-white text-charcoal font-sans">
      <SEO 
        title="Rapid Innovation & Testing" 
        description="Test and validate new growth initiatives with minimal risk using structured rapid prototyping, customer discovery programs, and pilot frameworks."
        canonical="/capabilities/business-building/rapid-innovation-testing"
      />
      <Navigation />
      
      {/* Breadcrumb */}
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Capabilities', href: '/capabilities' },
        { label: 'Business Building', href: '/capabilities/business-building' },
        { label: 'Rapid Innovation & Testing' }
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
                Rapid Innovation &<br />Testing
              </h1>
              
              <p className="text-xl text-white leading-relaxed max-w-xl">
                Test and validate new growth initiatives with minimal risk using structured rapid prototyping, customer discovery programs, and pilot frameworks.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden lg:flex items-center justify-center"
            >
              <img 
                src="/images/rapid-innovation-abstract.jpg" 
                alt="Rapid Innovation Visualization" 
                className="max-w-md"
              />
            </motion.div>
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
              "Innovation without validation is speculation. We help companies test bold ideas with the rigor of scientific experimentation—fast, focused, and evidence-based."
            </h2>
            <p className="text-lg text-charcoal/60 max-w-2xl mx-auto">
              Transforming uncertainty into actionable insights through disciplined experimentation.
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
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-charcoal mb-6">The Innovation Paradox</h3>
                <p className="text-lg text-charcoal/70 leading-relaxed mb-5 sm:mb-6 md:mb-8">
                  Mid-market companies face constant pressure to innovate—new products, new markets, new business models—but lack the resources to absorb innovation failures. Large enterprises can afford to fund dozens of experiments knowing most will fail. Mid-market companies need higher success rates with lower investment.
                </p>
                <p className="text-lg text-charcoal/70 leading-relaxed mb-5 sm:mb-6 md:mb-8">
                  Traditional innovation approaches either move too slowly (extensive planning before testing) or too recklessly (building without validation). The result is either missed opportunities or expensive failures. What's needed is a disciplined framework that validates assumptions quickly while minimizing capital exposure.
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
                  NexDyne's <strong>Innovation Lab Framework</strong> applies venture capital due diligence methods to corporate innovation. We don't just help you build—we help you test whether you should build at all.
                </p>
                <p className="text-lg leading-relaxed text-charcoal/70">
                  Our rapid innovation methodology combines lean startup principles, design thinking, and agile development into a structured testing framework. We validate market demand, technical feasibility, and business model viability before committing significant capital. This disciplined approach dramatically improves innovation success rates while reducing time-to-market and development costs.
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
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif font-bold text-charcoal mb-4 group-hover:text-primary transition-colors">Rapid Prototyping Frameworks</h3>
                    <p className="text-charcoal/70 leading-relaxed">
                      We build minimum viable products (MVPs) designed specifically for learning, not scaling. Our prototyping methodology focuses on testing critical assumptions with real users in weeks, not months. We use no-code and low-code platforms, API integrations, and design tools to simulate product experiences before writing production code. This approach validates concepts at a fraction of traditional development costs.
                    </p>
                  </div>

                  <div className="group">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif font-bold text-charcoal mb-4 group-hover:text-primary transition-colors">Customer Discovery Programs</h3>
                    <p className="text-charcoal/70 leading-relaxed">
                      Our customer discovery methodology systematically tests market demand before product development. We design and execute structured interview programs, survey campaigns, and behavioral experiments that reveal true customer needs—not just stated preferences. We analyze competitive alternatives, willingness to pay, and adoption barriers to determine whether sufficient demand exists to justify investment.
                    </p>
                  </div>

                  <div className="group">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif font-bold text-charcoal mb-4 group-hover:text-primary transition-colors">Pilot Program Design</h3>
                    <p className="text-charcoal/70 leading-relaxed">
                      We structure pilot programs that generate statistically valid evidence about product-market fit, operational feasibility, and unit economics. Our pilots include clear success metrics, control groups where appropriate, and structured feedback mechanisms. We design experiments that answer specific questions about scalability, pricing, customer acquisition, and retention—providing the evidence needed for confident go/no-go decisions.
                    </p>
                  </div>

                  <div className="group">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif font-bold text-charcoal mb-4 group-hover:text-primary transition-colors">Innovation Governance Frameworks</h3>
                    <p className="text-charcoal/70 leading-relaxed">
                      We establish stage-gate processes that balance entrepreneurial speed with corporate governance. Our frameworks define clear decision criteria for each innovation stage, specify required evidence for progression, and establish kill criteria that prevent throwing good money after bad. This disciplined approach ensures innovation resources flow to the highest-potential opportunities while maintaining financial discipline.
                    </p>
                  </div>
                </div>
              </motion.div>

              <div className="h-px bg-border" />

              {/* Implementation Framework */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-12"
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal eb-garamond">Implementation Framework</h2>
                
                <div className="space-y-10">
                  <div className="border-l-4 border-primary pl-8">
                    <h3 className="text-xl font-semibold text-charcoal mb-4">Phase 1: Hypothesis Development (Weeks 1-2)</h3>
                    <p className="text-charcoal/70 leading-relaxed mb-4">
                      We work with your team to articulate clear hypotheses about customer needs, solution viability, and business model sustainability. This phase identifies the riskiest assumptions that must be tested first and defines success criteria for each experiment.
                    </p>
                    <ul className="space-y-2 text-charcoal/70">
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Problem-solution fit hypothesis articulation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Critical assumption identification and prioritization</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Success metrics definition and validation thresholds</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary pl-8">
                    <h3 className="text-xl font-semibold text-charcoal mb-4">Phase 2: Rapid Prototyping (Weeks 3-6)</h3>
                    <p className="text-charcoal/70 leading-relaxed mb-4">
                      We build and deploy minimum viable products designed to test specific hypotheses. Prototypes range from landing pages and mockups to functional applications, depending on what's required to generate valid learning.
                    </p>
                    <ul className="space-y-2 text-charcoal/70">
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>MVP design and rapid development</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>User testing infrastructure setup</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Analytics and feedback collection mechanisms</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary pl-8">
                    <h3 className="text-xl font-semibold text-charcoal mb-4">Phase 3: Market Validation (Weeks 7-10)</h3>
                    <p className="text-charcoal/70 leading-relaxed mb-4">
                      We execute structured customer discovery and pilot programs that test prototypes with real users in real contexts. This phase generates quantitative and qualitative evidence about demand, usability, and willingness to pay.
                    </p>
                    <ul className="space-y-2 text-charcoal/70">
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Customer interview programs and survey deployment</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Pilot program execution with target customers</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Usage analytics and behavioral data collection</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary pl-8">
                    <h3 className="text-xl font-semibold text-charcoal mb-4">Phase 4: Decision Framework (Week 11-12)</h3>
                    <p className="text-charcoal/70 leading-relaxed mb-4">
                      We synthesize learning into clear recommendations about whether to proceed, pivot, or terminate. This includes financial modeling, risk assessment, and roadmap development for validated opportunities.
                    </p>
                    <ul className="space-y-2 text-charcoal/70">
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Evidence synthesis and hypothesis validation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Financial modeling and business case development</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Scale-up roadmap and investment requirements</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Expected Outcomes - DZ10: Subtle gray bg */}
      <section className="dz-section bg-subtle">
        <div className="container px-4 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-6 sm:mb-8 md:mb-12 eb-garamond">Expected Outcomes</h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-6 md:p-8">
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">80%</div>
                <div className="text-lg font-semibold text-charcoal mb-2">Reduction in Wasted Investment</div>
                <p className="text-charcoal/70">
                  By killing bad ideas early and doubling down on validated opportunities
                </p>
              </div>

              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">10-12 weeks</div>
                <div className="text-lg font-semibold text-charcoal mb-2">Validation to Decision</div>
                <p className="text-charcoal/70">
                  From initial concept to evidence-based go/no-go decision
                </p>
              </div>

              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">3-5x</div>
                <div className="text-lg font-semibold text-charcoal mb-2">Innovation Success Rate</div>
                <p className="text-charcoal/70">
                  Compared to traditional product development approaches
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Innovation Toolkit - DZ10: White bg */}
      <section className="dz-section bg-white">
        <div className="container px-4 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-6 sm:mb-8 md:mb-12 eb-garamond">Innovation Toolkit</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="group">
                <h3 className="text-xl font-semibold text-charcoal mb-6 group-hover:text-primary transition-colors">Prototyping Platforms</h3>
                <div className="space-y-3 text-charcoal/70">
                  <p>• Figma, Framer for design prototypes</p>
                  <p>• Bubble, Webflow for functional MVPs</p>
                  <p>• Zapier, Make for workflow automation</p>
                  <p>• Airtable, Notion for data management</p>
                </div>
              </div>

              <div className="group">
                <h3 className="text-xl font-semibold text-charcoal mb-6 group-hover:text-primary transition-colors">Research & Testing</h3>
                <div className="space-y-3 text-charcoal/70">
                  <p>• UserTesting, Maze for usability studies</p>
                  <p>• Typeform, SurveyMonkey for surveys</p>
                  <p>• Hotjar, FullStory for behavioral analytics</p>
                  <p>• Dovetail for research synthesis</p>
                </div>
              </div>

              <div className="group">
                <h3 className="text-xl font-semibold text-charcoal mb-6 group-hover:text-primary transition-colors">Analytics & Measurement</h3>
                <div className="space-y-3 text-charcoal/70">
                  <p>• Google Analytics, Mixpanel</p>
                  <p>• Amplitude for product analytics</p>
                  <p>• Segment for data integration</p>
                  <p>• Looker Studio for dashboards</p>
                </div>
              </div>

              <div className="group">
                <h3 className="text-xl font-semibold text-charcoal mb-6 group-hover:text-primary transition-colors">Collaboration Tools</h3>
                <div className="space-y-3 text-charcoal/70">
                  <p>• Miro, Mural for workshops</p>
                  <p>• Notion, Coda for documentation</p>
                  <p>• Loom for async communication</p>
                  <p>• Slack, Teams for coordination</p>
                </div>
              </div>
            </div>
          </motion.div>
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
              Ready to Test Your Next Big Idea?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/70 mb-5 sm:mb-6 md:mb-8 leading-relaxed">
              Schedule a consultation to discuss how our Rapid Innovation & Testing framework can validate your growth initiatives with minimal risk and maximum learning velocity.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <button className="dz-btn-primary bg-primary hover:bg-primary/90 group">
                  Schedule Consultation
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/capabilities/business-building">
                <button className="px-7 py-3.5 border border-white/20 rounded text-white font-semibold hover:bg-white/10 transition-all">
                  View All Capabilities
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
