import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { SEO } from '@/components/SEO';

export default function PerformanceIntelligenceBenchmarking() {
  return (
    <div className="min-h-screen bg-white text-charcoal font-sans">
      <SEO 
        title="Performance Intelligence & Benchmarking" 
        description="Make informed decisions with industry benchmarking, maturity assessments, ROI modeling, and KPI frameworks validated against peer companies."
        canonical="/capabilities/business-building/performance-intelligence-benchmarking"
      />
      <Navigation />
      
      {/* Breadcrumb */}
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Capabilities', href: '/capabilities' },
        { label: 'Business Building', href: '/capabilities/business-building' },
        { label: 'Performance Intelligence & Benchmarking' }
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
                Performance Intelligence &<br />Benchmarking
              </h1>
              
              <p className="text-xl text-white leading-relaxed max-w-xl">
                Make informed decisions with industry benchmarking, maturity assessments, ROI modeling, and KPI frameworks validated against peer companies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden lg:flex items-center justify-center"
            >
              <img 
                src="/images/performance-intelligence-abstract.jpg" 
                alt="Performance Intelligence Visualization" 
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
              "You can't improve what you don't measure, and you can't measure effectively without context. We provide the benchmarks and frameworks that turn data into competitive advantage."
            </h2>
            <p className="text-lg text-charcoal/60 max-w-2xl mx-auto">
              Transforming performance measurement from compliance exercise to strategic intelligence.
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
                <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-6">The Measurement Gap</h3>
                <p className="text-lg text-charcoal/70 leading-relaxed mb-5 sm:mb-6 md:mb-8">
                  Most mid-market companies track basic financial metrics but lack the sophisticated performance intelligence systems that guide strategic decisions at leading enterprises. Without industry benchmarks, maturity assessments, and predictive analytics, companies operate with incomplete visibility into their competitive position and improvement opportunities.
                </p>
                <p className="text-lg text-charcoal/70 leading-relaxed mb-5 sm:mb-6 md:mb-8">
                  This measurement gap creates strategic blind spots. Companies invest in initiatives without understanding relative performance, set targets without market context, and miss early warning signals that could prevent competitive displacement. Meanwhile, data-driven competitors use performance intelligence to identify opportunities, optimize resource allocation, and execute with precision.
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
                  NexDyne delivers <strong>enterprise-grade performance intelligence</strong> that provides the context, frameworks, and predictive insights mid-market companies need to compete with data-driven precision.
                </p>
                <p className="text-lg leading-relaxed text-charcoal/70">
                  Our Performance Intelligence platform combines industry benchmarking, capability maturity assessments, ROI modeling, and KPI framework design into a comprehensive decision support system. We don't just help you measure performance—we help you understand what performance means in competitive context and how to systematically improve it.
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
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-charcoal mb-4 group-hover:text-primary transition-colors">Industry Benchmarking</h3>
                    <p className="text-charcoal/70 leading-relaxed">
                      We provide access to proprietary benchmark databases covering operational, financial, and customer metrics across industries and company sizes. Our benchmarking methodology identifies performance gaps, quantifies improvement opportunities, and establishes realistic targets based on peer company performance. This external perspective reveals blind spots and validates strategic priorities with market evidence.
                    </p>
                  </div>

                  <div className="group">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-charcoal mb-4 group-hover:text-primary transition-colors">Maturity Assessments</h3>
                    <p className="text-charcoal/70 leading-relaxed">
                      Our capability maturity frameworks assess organizational readiness across critical business functions—from technology infrastructure and data analytics to sales operations and customer service. We evaluate current state against industry-standard maturity models, identify capability gaps, and develop prioritized roadmaps that sequence improvements for maximum impact. These assessments provide the foundation for multi-year transformation programs.
                    </p>
                  </div>

                  <div className="group">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-charcoal mb-4 group-hover:text-primary transition-colors">ROI Modeling & Business Cases</h3>
                    <p className="text-charcoal/70 leading-relaxed">
                      We build sophisticated financial models that quantify the expected return on strategic investments. Our ROI frameworks incorporate industry benchmarks, risk-adjusted projections, and sensitivity analysis to provide realistic ranges rather than point estimates. We model both direct financial returns and strategic option value, ensuring investment decisions account for both immediate impact and future flexibility.
                    </p>
                  </div>

                  <div className="group">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-charcoal mb-4 group-hover:text-primary transition-colors">KPI Framework Design</h3>
                    <p className="text-charcoal/70 leading-relaxed">
                      We design balanced KPI frameworks that align operational metrics with strategic objectives. Our frameworks cascade from executive-level objectives to departmental and individual metrics, ensuring everyone understands how their work contributes to company goals. We establish leading and lagging indicators, define measurement methodologies, and implement dashboards that provide real-time visibility into performance trends.
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
                    <h3 className="text-xl font-semibold text-charcoal mb-4">Phase 1: Baseline Assessment (Weeks 1-3)</h3>
                    <p className="text-charcoal/70 leading-relaxed mb-4">
                      We establish current state performance across key business dimensions and compare against industry benchmarks. This phase identifies performance gaps, quantifies improvement opportunities, and establishes measurement baselines.
                    </p>
                    <ul className="space-y-2 text-charcoal/70">
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Current state data collection and validation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Industry benchmark analysis and gap identification</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Capability maturity assessment across functions</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary pl-8">
                    <h3 className="text-xl font-semibold text-charcoal mb-4">Phase 2: Framework Development (Weeks 4-6)</h3>
                    <p className="text-charcoal/70 leading-relaxed mb-4">
                      We design comprehensive KPI frameworks, develop ROI models for prioritized initiatives, and establish performance dashboards. This phase creates the measurement infrastructure that will guide ongoing decision-making.
                    </p>
                    <ul className="space-y-2 text-charcoal/70">
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>KPI framework design and metric definition</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>ROI modeling for strategic initiatives</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Dashboard design and data pipeline implementation</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary pl-8">
                    <h3 className="text-xl font-semibold text-charcoal mb-4">Phase 3: Deployment & Training (Weeks 7-9)</h3>
                    <p className="text-charcoal/70 leading-relaxed mb-4">
                      We deploy performance intelligence systems, train teams on interpretation and usage, and establish governance processes for ongoing measurement and reporting.
                    </p>
                    <ul className="space-y-2 text-charcoal/70">
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Dashboard deployment and access provisioning</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Team training on metrics interpretation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Performance review cadence establishment</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary pl-8">
                    <h3 className="text-xl font-semibold text-charcoal mb-4">Phase 4: Continuous Improvement (Ongoing)</h3>
                    <p className="text-charcoal/70 leading-relaxed mb-4">
                      We establish quarterly benchmark updates, annual maturity reassessments, and continuous KPI refinement processes that ensure performance intelligence evolves with your business.
                    </p>
                    <ul className="space-y-2 text-charcoal/70">
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Quarterly benchmark updates and trend analysis</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Annual capability maturity reassessment</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>KPI framework optimization and metric evolution</span>
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
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">25-40%</div>
                <div className="text-lg font-semibold text-charcoal mb-2">Performance Improvement</div>
                <p className="text-charcoal/70">
                  Across benchmarked metrics within 12-18 months of implementation
                </p>
              </div>

              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">60%</div>
                <div className="text-lg font-semibold text-charcoal mb-2">Faster Decision Cycles</div>
                <p className="text-charcoal/70">
                  With real-time performance visibility and predictive analytics
                </p>
              </div>

              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">3-5x</div>
                <div className="text-lg font-semibold text-charcoal mb-2">Investment ROI Accuracy</div>
                <p className="text-charcoal/70">
                  Through benchmark-validated financial modeling and risk assessment
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benchmark Coverage - DZ10: White bg */}
      <section className="dz-section bg-white">
        <div className="container px-4 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-6 sm:mb-8 md:mb-12 eb-garamond">Benchmark Coverage</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="group">
                <h3 className="text-xl font-semibold text-charcoal mb-6 group-hover:text-primary transition-colors">Operational Metrics</h3>
                <div className="space-y-3 text-charcoal/70">
                  <p>• Process cycle times and throughput</p>
                  <p>• Quality metrics and defect rates</p>
                  <p>• Resource utilization and productivity</p>
                  <p>• Supply chain and logistics efficiency</p>
                </div>
              </div>

              <div className="group">
                <h3 className="text-xl font-semibold text-charcoal mb-6 group-hover:text-primary transition-colors">Financial Performance</h3>
                <div className="space-y-3 text-charcoal/70">
                  <p>• Revenue growth and profitability</p>
                  <p>• Working capital efficiency</p>
                  <p>• Cost structure and unit economics</p>
                  <p>• Cash conversion cycles</p>
                </div>
              </div>

              <div className="group">
                <h3 className="text-xl font-semibold text-charcoal mb-6 group-hover:text-primary transition-colors">Customer Metrics</h3>
                <div className="space-y-3 text-charcoal/70">
                  <p>• Acquisition costs and conversion rates</p>
                  <p>• Lifetime value and retention</p>
                  <p>• Net Promoter Score and satisfaction</p>
                  <p>• Service levels and response times</p>
                </div>
              </div>

              <div className="group">
                <h3 className="text-xl font-semibold text-charcoal mb-6 group-hover:text-primary transition-colors">Technology & Innovation</h3>
                <div className="space-y-3 text-charcoal/70">
                  <p>• Digital maturity and automation rates</p>
                  <p>• Technology spending as % of revenue</p>
                  <p>• Innovation pipeline and time-to-market</p>
                  <p>• Technical debt and system reliability</p>
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
              Ready to Gain Performance Intelligence?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/70 mb-5 sm:mb-6 md:mb-8 leading-relaxed">
              Schedule a consultation to discuss how our Performance Intelligence & Benchmarking framework can provide the context and insights you need to make data-driven strategic decisions.
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
