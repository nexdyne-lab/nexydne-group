import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { SEO } from '@/components/SEO';

export default function AIPoweredAcceleration() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-sans">
      <SEO 
        title="AI-Powered Acceleration" 
        description="Leverage enterprise-grade AI for strategic planning, predictive market intelligence, automated financial modeling, and customer intelligence."
        canonical="/capabilities/business-building/ai-powered-acceleration"
      />
      <Navigation />
      
      {/* Breadcrumb */}
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Capabilities', href: '/capabilities' },
        { label: 'Business Building', href: '/capabilities/business-building' },
        { label: 'AI-Powered Acceleration' }
      ]} />

      {/* Hero Section - Clean minimal design */}
      <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden bg-black">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-4 eb-garamond">
                AI-Powered<br />Acceleration
              </h1>
              
              <p className="text-xl text-white leading-relaxed max-w-xl">
                Leverage enterprise-grade AI for strategic planning, predictive market intelligence, automated financial modeling, and customer intelligence—capabilities typically reserved for Fortune 500 companies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden lg:flex items-center justify-center"
            >
              <img 
                src="/images/ai-acceleration-abstract.jpg" 
                alt="AI Acceleration Visualization" 
                className="max-w-md"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Experience & Impact (F100) */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="container px-4 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-[#051C2C] mb-12 eb-garamond"
          >
            Our Experience & Impact
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: "60+", label: "AI implementations delivered across finance, operations, and customer experience" },
              { metric: "45%", label: "average productivity improvement from our AI automation solutions" },
              { metric: "8 Mo", label: "typical time from AI strategy to production deployment" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${index > 0 ? 'border-l border-gray-200 pl-8' : ''}`}
              >
                <div className="text-5xl md:text-6xl font-bold text-[#051C2C] mb-4">{item.metric}</div>
                <p className="text-lg text-[#051C2C]/60">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Thesis Statement - DZ10: Subtle gray bg */}
      <section className="dz-section bg-[#F5F5F5]">
        <div className="container px-4 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A1A1A] leading-tight mb-5 sm:mb-6 md:mb-8 eb-garamond">
              "AI doesn't replace strategic thinking—it amplifies it. We give mid-market companies the same intelligence infrastructure that powers the world's fastest-growing enterprises."
            </h2>
            <p className="text-lg text-[#1A1A1A]/60 max-w-2xl mx-auto">
              Transforming data into competitive advantage through intelligent automation.
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
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1A1A] mb-6">The Intelligence Gap</h3>
                <p className="text-lg text-[#1A1A1A]/70 leading-relaxed mb-5 sm:mb-6 md:mb-8">
                  Large enterprises invest millions in AI infrastructure, data science teams, and predictive analytics platforms. Mid-market companies lack these resources but face the same competitive pressures—making faster decisions, anticipating market shifts, and personalizing customer experiences at scale.
                </p>
                <p className="text-lg text-[#1A1A1A]/70 leading-relaxed mb-5 sm:mb-6 md:mb-8">
                  This intelligence gap compounds over time. Companies without AI capabilities make slower decisions based on incomplete information, while AI-enabled competitors iterate faster, predict customer needs more accurately, and optimize operations in real time.
                </p>
                <div className="h-1 w-20 bg-[#0077B5]"></div>
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
                <p className="text-xl leading-relaxed text-[#1A1A1A] font-medium mb-6">
                  NexDyne delivers <strong>enterprise-grade AI infrastructure</strong> designed specifically for mid-market companies. We don't just implement AI tools—we build complete intelligence systems that transform how you plan, forecast, and execute growth strategies.
                </p>
                <p className="text-lg leading-relaxed text-[#1A1A1A]/70">
                  Our AI acceleration framework integrates strategic planning, market intelligence, financial modeling, and customer analytics into a unified decision-making platform. Whether you're entering new markets, launching products, or optimizing operations, our AI systems provide the predictive insights that separate market leaders from followers.
                </p>
              </motion.div>

              <div className="h-px bg-[#E5E5E5]" />

              {/* Core Capabilities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                id="capabilities"
                className="space-y-12"
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A1A1A] eb-garamond">Core Capabilities</h2>
                
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
                  <div className="group">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif font-bold text-[#1A1A1A] mb-4 group-hover:text-[#0077B5] transition-colors">Strategic Planning Intelligence</h3>
                    <p className="text-[#1A1A1A]/70 leading-relaxed">
                      Our AI-powered strategic planning platform analyzes market trends, competitive movements, and internal performance data to generate scenario-based growth strategies. Machine learning models identify emerging opportunities and risks before they appear in traditional market research, enabling proactive strategic positioning. The system continuously refines recommendations as new data emerges, ensuring your strategy evolves with market conditions.
                    </p>
                  </div>

                  <div className="group">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif font-bold text-[#1A1A1A] mb-4 group-hover:text-[#0077B5] transition-colors">Predictive Market Intelligence</h3>
                    <p className="text-[#1A1A1A]/70 leading-relaxed">
                      We deploy natural language processing systems that monitor thousands of data sources—industry publications, competitor announcements, regulatory filings, and social signals—to detect market shifts weeks before they become obvious. Our predictive models forecast demand patterns, competitive threats, and partnership opportunities, giving you the foresight to move first while competitors react.
                    </p>
                  </div>

                  <div className="group">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif font-bold text-[#1A1A1A] mb-4 group-hover:text-[#0077B5] transition-colors">Automated Financial Modeling</h3>
                    <p className="text-[#1A1A1A]/70 leading-relaxed">
                      Our AI-driven financial modeling platform generates dynamic forecasts that update automatically as business conditions change. Machine learning algorithms analyze historical performance, seasonal patterns, and external factors to produce rolling forecasts with confidence intervals. The system stress-tests scenarios, identifies financial risks, and recommends capital allocation strategies that optimize risk-adjusted returns.
                    </p>
                  </div>

                  <div className="group">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif font-bold text-[#1A1A1A] mb-4 group-hover:text-[#0077B5] transition-colors">Customer Intelligence Platform</h3>
                    <p className="text-[#1A1A1A]/70 leading-relaxed">
                      We build unified customer intelligence systems that aggregate behavioral data, transaction history, and engagement patterns to predict churn risk, lifetime value, and next-best actions. Our recommendation engines personalize customer experiences at scale, while sentiment analysis models monitor satisfaction in real time. This intelligence drives targeted retention programs and identifies high-value expansion opportunities.
                    </p>
                  </div>
                </div>
              </motion.div>

              <div className="h-px bg-[#E5E5E5]" />

              {/* Implementation Framework */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-12"
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A1A1A] eb-garamond">Implementation Framework</h2>
                
                <div className="space-y-10">
                  <div className="border-l-4 border-[#0077B5] pl-8">
                    <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">Phase 1: Intelligence Foundation (Weeks 1-4)</h3>
                    <p className="text-[#1A1A1A]/70 leading-relaxed mb-4">
                      We establish your AI infrastructure by integrating data sources, implementing data pipelines, and deploying core machine learning models. This phase focuses on data quality, model training, and establishing baseline performance metrics.
                    </p>
                    <ul className="space-y-2 text-[#1A1A1A]/70">
                      <li className="flex items-start gap-3">
                        <span className="text-[#0077B5] mt-1">•</span>
                        <span>Data source integration and quality assessment</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#0077B5] mt-1">•</span>
                        <span>ML pipeline deployment and model training</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#0077B5] mt-1">•</span>
                        <span>Dashboard development and KPI definition</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-[#0077B5] pl-8">
                    <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">Phase 2: Predictive Deployment (Weeks 5-8)</h3>
                    <p className="text-[#1A1A1A]/70 leading-relaxed mb-4">
                      We activate predictive capabilities across strategic planning, market intelligence, and financial forecasting. Models begin generating insights, and we train your team to interpret and act on AI-generated recommendations.
                    </p>
                    <ul className="space-y-2 text-[#1A1A1A]/70">
                      <li className="flex items-start gap-3">
                        <span className="text-[#0077B5] mt-1">•</span>
                        <span>Predictive model activation and validation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#0077B5] mt-1">•</span>
                        <span>Strategic planning integration and scenario modeling</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#0077B5] mt-1">•</span>
                        <span>Team training and decision framework development</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-[#0077B5] pl-8">
                    <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">Phase 3: Optimization & Scale (Weeks 9-12)</h3>
                    <p className="text-[#1A1A1A]/70 leading-relaxed mb-4">
                      We refine models based on real-world performance, expand AI capabilities to additional business functions, and establish continuous improvement processes. Your team operates independently with AI-augmented decision-making.
                    </p>
                    <ul className="space-y-2 text-[#1A1A1A]/70">
                      <li className="flex items-start gap-3">
                        <span className="text-[#0077B5] mt-1">•</span>
                        <span>Model performance optimization and retraining</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#0077B5] mt-1">•</span>
                        <span>Capability expansion to new business functions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#0077B5] mt-1">•</span>
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
      <section className="dz-section bg-[#F5F5F5]">
        <div className="container px-4 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <span className="section-label text-[#1A1A1A] mb-4 sm:mb-6 block">Success Story</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A1A1A] eb-garamond">
              How AI Acceleration Transformed Market Entry Strategy
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
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#0077B5] mb-2">6 Weeks</div>
                <p className="text-sm text-[#1A1A1A]/50 uppercase tracking-wider font-medium">Time to Market Intelligence</p>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#0077B5] mb-2">40%</div>
                <p className="text-sm text-[#1A1A1A]/50 uppercase tracking-wider font-medium">Forecast Accuracy Improvement</p>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#0077B5] mb-2">$2.4M</div>
                <p className="text-sm text-[#1A1A1A]/50 uppercase tracking-wider font-medium">First-Year Revenue Impact</p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-semibold text-[#1A1A1A] mb-4">The Challenge</h4>
                <p className="text-[#1A1A1A]/70 leading-relaxed">
                  A mid-market B2B software company planned to enter three new vertical markets but lacked the intelligence infrastructure to assess opportunity size, competitive intensity, and optimal entry timing. Traditional market research provided static snapshots but couldn't predict how markets would evolve or identify the highest-value customer segments within each vertical.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-[#1A1A1A] mb-4">The Solution</h4>
                <p className="text-[#1A1A1A]/70 leading-relaxed">
                  We deployed our AI-powered market intelligence platform to analyze 50,000+ data points across target verticals—competitor announcements, funding activity, regulatory changes, and buyer behavior signals. Machine learning models identified emerging demand patterns and predicted which vertical would reach critical mass first. Our financial modeling system generated dynamic revenue forecasts for each market entry scenario, stress-testing assumptions against historical data from similar expansions.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-[#1A1A1A] mb-4">The Results</h4>
                <p className="text-[#1A1A1A]/70 leading-relaxed mb-6">
                  The AI system identified healthcare as the highest-potential vertical—a finding that contradicted conventional wisdom favoring financial services. Predictive models forecasted 18-month revenue potential with 85% confidence intervals, enabling the company to allocate resources decisively. They entered healthcare first, acquired 12 anchor customers within six months, and generated $2.4M in first-year revenue—40% above initial projections. The AI platform continues to guide expansion into the remaining verticals, providing real-time intelligence on competitive positioning and customer acquisition costs.
                </p>
                <div className="bg-[#F5F5F5] p-4 sm:p-5 md:p-6 rounded-lg border-l-4 border-[#0077B5]">
                  <p className="text-[#1A1A1A]/80 italic">
                    "The AI intelligence platform gave us the confidence to make a $1.5M market entry bet that our board initially questioned. Six months later, healthcare is our fastest-growing vertical, and we're using the same AI framework to guide expansion into two more markets."
                  </p>
                  <p className="text-sm text-[#1A1A1A]/50 mt-4 font-semibold">— VP of Strategy, B2B Software Company</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Infrastructure - DZ10: White bg */}
      <section className="dz-section bg-white">
        <div className="container px-4 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-6 sm:mb-8 md:mb-12 eb-garamond">Technical Infrastructure</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-[#1A1A1A]">AI & Machine Learning Stack</h3>
                <ul className="space-y-3 text-[#1A1A1A]/70">
                  <li className="flex items-start gap-3">
                    <span className="text-[#0077B5] mt-1">•</span>
                    <span>TensorFlow & PyTorch for custom model development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0077B5] mt-1">•</span>
                    <span>OpenAI GPT-4 for natural language processing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0077B5] mt-1">•</span>
                    <span>Scikit-learn for predictive analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0077B5] mt-1">•</span>
                    <span>Apache Spark for distributed data processing</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-[#1A1A1A]">Data & Integration Layer</h3>
                <ul className="space-y-3 text-[#1A1A1A]/70">
                  <li className="flex items-start gap-3">
                    <span className="text-[#0077B5] mt-1">•</span>
                    <span>Snowflake for cloud data warehousing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0077B5] mt-1">•</span>
                    <span>Fivetran for automated data integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0077B5] mt-1">•</span>
                    <span>dbt for data transformation and modeling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0077B5] mt-1">•</span>
                    <span>Tableau & Power BI for visualization</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We Can Help - Capability Cards with H100 */}
      <section className="py-24 bg-[#f8f8f7]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
              How We Can Help
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#051C2C] mb-6 eb-garamond">
              Our AI Capabilities
            </h2>
            <p className="text-xl text-[#051C2C]/60 max-w-2xl">
              End-to-end AI services from strategy through implementation and scaling.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "AI Strategy & Roadmap", description: "Define where AI can create the most value in your business. We identify high-impact use cases and build practical implementation roadmaps." },
              { title: "Generative AI Integration", description: "Harness the power of GPT, Claude, and other foundation models. We build custom AI applications that automate workflows and augment your team." },
              { title: "Intelligent Automation", description: "Automate complex processes that were previously impossible. Document processing, decision support, and workflow automation powered by AI." },
              { title: "AI-Powered Products", description: "Build AI into your product offering. From recommendation engines to conversational interfaces, we help you create AI-native experiences." },
              { title: "Data & ML Infrastructure", description: "Build the foundation for AI success. Data pipelines, model training infrastructure, and MLOps practices that scale with your ambition." },
              { title: "AI Change Management", description: "Ensure your team adopts AI effectively. Training, governance frameworks, and organizational change programs for AI transformation." }
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
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
              Related Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#051C2C] eb-garamond">
              Explore more ways we can help
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Digital Venture Launch", description: "Launch AI-powered digital ventures with our proven methodology for rapid market validation and scaling.", link: "/capabilities/business-building/digital-venture-launch" },
              { title: "Product Strategy & Design", description: "Design AI-native products that users love and that create sustainable competitive advantage.", link: "/capabilities/business-building/product-strategy-design" },
              { title: "Distinctive Expertise", description: "Build proprietary AI capabilities that differentiate your business in the market.", link: "/capabilities/business-building/distinctive-expertise" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <Link href={item.link}>
                  <div className="h-full min-h-[200px] p-8 bg-[#f8f8f7] border-l-4 border-l-transparent group-hover:border-l-[#CC0000] border border-gray-200 transition-all duration-300 flex flex-col">
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
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - DZ10: Deep Navy bg */}
      <section className="dz-section bg-[#051C2C]">
        <div className="container px-4 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 eb-garamond">
              Ready to accelerate your growth with AI?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/70 mb-5 sm:mb-6 md:mb-8 leading-relaxed">
              Schedule a consultation to discuss how AI-powered acceleration can transform your strategic planning, market intelligence, and financial forecasting capabilities.
            </p>
            <Link href="/capabilities/business-building#consultation">
              <button className="dz-btn-primary bg-[#0077B5] hover:bg-[#005a8c] group">
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
