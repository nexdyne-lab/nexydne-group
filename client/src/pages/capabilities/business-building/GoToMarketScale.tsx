import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import BainHoverCard from '@/components/BainHoverCard';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { SEO } from '@/components/SEO';

export default function GoToMarketScale() {
  return (
    <div className="min-h-screen bg-white text-charcoal font-sans">
      <SEO 
        title="Go-To-Market at Scale" 
        description="Accelerate market entry and expansion with curated partnership ecosystems, distribution channel optimization, and systematic go-to-market frameworks."
        canonical="/capabilities/business-building/go-to-market-scale"
      />
      <Navigation />
      
      {/* Breadcrumb */}
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Capabilities', href: '/capabilities' },
        { label: 'Business Building', href: '/capabilities/business-building' },
        { label: 'Go-To-Market at Scale' }
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
                Go-To-Market<br />at Scale
              </h1>
              
              <p className="text-xl text-white leading-relaxed max-w-xl">
                Accelerate market entry and expansion with curated partnership ecosystems, distribution channel optimization, and systematic go-to-market frameworks.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden lg:flex items-center justify-center"
            >
              <img 
                src="/images/go-to-market-abstract.jpg" 
                alt="Go-To-Market Visualization" 
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
              { metric: "85+", label: "go-to-market programs launched across technology, healthcare, and professional services" },
              { metric: "55%", label: "average reduction in customer acquisition cost through channel optimization" },
              { metric: "3x", label: "faster time-to-market using our proven GTM frameworks and partner networks" }
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
              "Building a great product is only half the battle. Winning requires distribution—the ability to reach customers efficiently, convert them systematically, and scale acquisition without proportional cost increases."
            </h2>
            <p className="text-lg text-charcoal/60 max-w-2xl mx-auto">
              Transforming market entry from bottleneck to competitive advantage.
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
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-charcoal mb-6">The Distribution Gap</h3>
                <p className="text-lg text-charcoal/70 leading-relaxed mb-5 sm:mb-6 md:mb-8">
                  Mid-market companies often build compelling products but struggle to reach customers at scale. They lack the distribution partnerships, channel relationships, and go-to-market infrastructure that enable rapid market penetration. Customer acquisition costs remain high, sales cycles drag on, and growth stalls despite strong product-market fit.
                </p>
                <p className="text-lg text-charcoal/70 leading-relaxed mb-5 sm:mb-6 md:mb-8">
                  This distribution gap separates companies that scale from those that plateau. Winning requires systematic go-to-market frameworks, curated partnership networks, and channel optimization capabilities that most mid-market companies lack the resources to build independently.
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
                  NexDyne provides <strong>comprehensive go-to-market infrastructure</strong> that accelerates customer acquisition and market expansion. We don't just advise on strategy—we provide access to curated partnership ecosystems, proven distribution frameworks, and systematic sales enablement that compresses time to scale.
                </p>
                <p className="text-lg leading-relaxed text-charcoal/70">
                  Our go-to-market platform combines strategic partnership development, channel optimization, demand generation frameworks, and sales acceleration methodologies. Whether you're launching a new product, entering new markets, or scaling existing operations, we provide the distribution capabilities that transform growth potential into revenue reality.
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
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif font-bold text-charcoal mb-4 group-hover:text-primary transition-colors">Partnership Ecosystem Development</h3>
                    <p className="text-charcoal/70 leading-relaxed">
                      We provide access to curated networks of distribution partners, technology integrators, and channel resellers across key industries. Our partnership team identifies high-value partners, facilitates introductions, and structures partnership agreements that align incentives. Rather than building partner networks from scratch, you leverage our established relationships to accelerate market access and expand distribution reach.
                    </p>
                  </div>

                  <div className="group">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif font-bold text-charcoal mb-4 group-hover:text-primary transition-colors">Channel Optimization Frameworks</h3>
                    <p className="text-charcoal/70 leading-relaxed">
                      We implement systematic channel optimization frameworks that maximize revenue per channel while minimizing acquisition costs. Through channel performance analysis, partner enablement programs, and incentive structure design, we ensure each distribution channel operates at peak efficiency. Our frameworks identify underperforming channels early and reallocate resources to highest-ROI opportunities.
                    </p>
                  </div>

                  <div className="group">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif font-bold text-charcoal mb-4 group-hover:text-primary transition-colors">Demand Generation Systems</h3>
                    <p className="text-charcoal/70 leading-relaxed">
                      We build integrated demand generation systems that create predictable pipeline across multiple channels. Our approach combines content marketing, digital advertising, account-based marketing, and event strategies into cohesive campaigns that generate qualified leads at scale. Marketing automation and lead scoring ensure sales teams focus on highest-probability opportunities while nurturing programs convert longer-cycle prospects.
                    </p>
                  </div>

                  <div className="group">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif font-bold text-charcoal mb-4 group-hover:text-primary transition-colors">Sales Acceleration Methodologies</h3>
                    <p className="text-charcoal/70 leading-relaxed">
                      We deploy proven sales methodologies that compress sales cycles and improve win rates. Through sales process optimization, enablement program development, and performance analytics, we transform sales from art to science. Our frameworks provide repeatable playbooks for discovery, qualification, and closing while identifying and eliminating friction points that slow deals.
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
                    <h3 className="text-xl font-semibold text-charcoal mb-4">Phase 1: Market & Channel Assessment (Weeks 1-2)</h3>
                    <p className="text-charcoal/70 leading-relaxed mb-4">
                      We analyze your target markets, assess potential distribution channels, and identify partnership opportunities. This diagnostic phase ensures we design go-to-market strategies optimized for your specific product, customer profile, and competitive landscape.
                    </p>
                    <ul className="space-y-2 text-charcoal/70">
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Target market segmentation and prioritization</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Channel economics modeling and selection</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Partnership opportunity identification</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary pl-8">
                    <h3 className="text-xl font-semibold text-charcoal mb-4">Phase 2: Partnership & Channel Development (Weeks 3-8)</h3>
                    <p className="text-charcoal/70 leading-relaxed mb-4">
                      We facilitate partner introductions, negotiate partnership agreements, and establish channel programs. Simultaneously, we build demand generation systems and sales enablement infrastructure to support channel activation.
                    </p>
                    <ul className="space-y-2 text-charcoal/70">
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Partner recruitment and agreement structuring</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Channel program design and enablement</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Demand generation system deployment</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary pl-8">
                    <h3 className="text-xl font-semibold text-charcoal mb-4">Phase 3: Optimization & Scale (Weeks 9-12)</h3>
                    <p className="text-charcoal/70 leading-relaxed mb-4">
                      We optimize channel performance, refine demand generation campaigns, and scale successful programs. Your team operates go-to-market systems independently with established processes for continuous improvement and expansion.
                    </p>
                    <ul className="space-y-2 text-charcoal/70">
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Channel performance analysis and optimization</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Campaign refinement and budget reallocation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Scale playbook documentation and transfer</span>
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
              How Strategic Partnerships Accelerated Market Penetration
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
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-2">8 Weeks</div>
                <p className="text-sm text-charcoal/50 uppercase tracking-wider font-medium">Partner Network Activation</p>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-2">65%</div>
                <p className="text-sm text-charcoal/50 uppercase tracking-wider font-medium">Reduction in CAC</p>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-2">$4.8M</div>
                <p className="text-sm text-charcoal/50 uppercase tracking-wider font-medium">Partner-Sourced Revenue (Year 1)</p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-semibold text-charcoal mb-4">The Challenge</h4>
                <p className="text-charcoal/70 leading-relaxed">
                  A B2B SaaS company had achieved strong product-market fit but struggled to scale customer acquisition beyond direct sales. Customer acquisition costs exceeded $12,000 per customer, sales cycles averaged nine months, and the sales team couldn't scale fast enough to meet growth targets. Leadership recognized they needed distribution partners to reach customers more efficiently but lacked the relationships and frameworks to build a partner ecosystem.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-charcoal mb-4">The Solution</h4>
                <p className="text-charcoal/70 leading-relaxed">
                  We deployed our partnership ecosystem development framework, leveraging our network to identify 15 high-potential technology integrators and consulting firms that already served the company's target customers. Our team facilitated partner introductions, structured referral and reseller agreements, and built a comprehensive partner enablement program including sales training, co-marketing resources, and deal registration systems. We established channel performance metrics and implemented monthly partner business reviews to optimize program effectiveness.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-charcoal mb-4">The Results</h4>
                <p className="text-charcoal/70 leading-relaxed mb-6">
                  Within eight weeks, seven partners were actively referring opportunities. Partner-sourced deals closed 45% faster than direct sales opportunities and at 65% lower customer acquisition cost. In the first year, partners generated $4.8M in revenue—representing 35% of total new business. The partner channel became the company's primary growth engine, enabling them to scale revenue without proportionally increasing sales headcount. Partner relationships also provided valuable market intelligence and product feedback that informed roadmap priorities.
                </p>
                <div className="bg-subtle p-4 sm:p-5 md:p-6 rounded-lg border-l-4 border-primary">
                  <p className="text-charcoal/80 italic">
                    "The partner ecosystem transformed our go-to-market model. Instead of hunting for every deal, we now have trusted partners bringing us qualified opportunities. It's changed our unit economics and given us a scalable path to our growth targets."
                  </p>
                  <p className="text-sm text-charcoal/50 mt-4 font-semibold">— Chief Revenue Officer, B2B SaaS Company</p>
                </div>
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
              Our GTM Services
            </h2>
            <p className="text-xl text-charcoal/60 max-w-2xl">
              Comprehensive go-to-market capabilities to accelerate your market expansion.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Partner Network Access", description: "Leverage our curated network of 500+ distribution partners, technology integrators, and channel resellers across key industries." },
              { title: "Channel Strategy Design", description: "We design multi-channel go-to-market strategies optimized for your product, customer profile, and competitive landscape." },
              { title: "Partner Enablement", description: "We build comprehensive partner programs including training, co-marketing resources, and deal registration systems." },
              { title: "Demand Generation", description: "Integrated campaigns combining content marketing, digital advertising, ABM, and events to generate qualified pipeline at scale." },
              { title: "Sales Process Optimization", description: "We deploy proven methodologies that compress sales cycles and improve win rates through systematic process improvement." },
              { title: "Market Expansion", description: "We help you enter new geographic markets and customer segments with localized GTM strategies and partner networks." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <BainHoverCard
                  title={item.title}
                  description={item.description}
                  link="#"
                />
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
              { title: "Digital Venture Launch", description: "Launch new digital products and services with our proven venture methodology.", link: "/capabilities/business-building/digital-venture-launch" },
              { title: "Growth & Scaling", description: "Scale your operations systematically with our growth frameworks and playbooks.", link: "/capabilities/business-building/growth-scaling" },
              { title: "Product Strategy & Design", description: "Design products that win in the market with customer-centric development approaches.", link: "/capabilities/business-building/product-strategy-design" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
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
              Ready to scale your go-to-market?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/70 mb-5 sm:mb-6 md:mb-8 leading-relaxed">
              Schedule a consultation to discuss how our partnership ecosystems and go-to-market frameworks can accelerate your market expansion and customer acquisition.
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
