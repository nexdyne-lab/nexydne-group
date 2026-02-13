import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, Building2, Users, TrendingUp, CheckCircle2, Target, Cloud, Rocket, Download } from 'lucide-react';
import { CaseStudyPDFButton } from "@/components/CaseStudyPDFButton";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import CaseStudyContactForm from "@/components/CaseStudyContactForm";
import { BackToTop } from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

export default function StrategicRepositioningTechnology() {
  return (
    <div className="min-h-screen bg-[#051C2C] text-white selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Strategic Pivot in Enterprise Software | Case Study | NexDyne Technologies" 
        description="How an established enterprise software company successfully repositioned from declining on-premise products to high-growth cloud-native solutions, achieving 3x revenue growth in 24 months."
        canonical="/case-studies/strategic-repositioning-technology"
      />
      <Navigation />
      
      {/* DZ10 Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#051C2C] via-[#051C2C]/60 to-[#051C2C]"></div>
        
        <div className="container relative z-10 px-4 md:px-12">
          <Breadcrumbs />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
              Case Study · Strategic Repositioning
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight leading-[1.05] mb-4">
              Strategic Pivot in <span className="text-[#0077B5]">Enterprise Software</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mb-8">
              How an established enterprise software company successfully repositioned from declining on-premise products to high-growth cloud-native solutions, achieving 3x revenue growth in 24 months.
            </p>
            
            {/* PDF Download Button */}
            <CaseStudyPDFButton
              title="Strategic Pivot in Enterprise Software"
              industry="Strategic Repositioning"
              summary="How an established enterprise software company successfully repositioned from declining on-premise products to high-growth cloud-native solutions, achieving 3x revenue growth in 24 months."
              challenge="See full case study for detailed challenge description."
              solution="See full case study for detailed solution description."
              results={[
                "Significant business impact achieved",
                "Measurable improvements delivered",
                "Client objectives exceeded"
              ]}
              variant="hero"
            />
          </motion.div>
        </div>
      </section>

      {/* DZ10 Stats Section */}
      <section className="py-16 bg-[#051C2C] border-t border-white/10">
        <div className="container px-4 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { metric: "3x", label: "Revenue Growth" },
              { metric: "$28M", label: "ARR Achieved" },
              { metric: "24 mo", label: "Transformation Timeline" },
              { metric: "92%", label: "Customer Retention" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-2 border-[#0077B5]/50 pl-8"
              >
                <div className="text-4xl md:text-5xl font-serif font-bold text-[#0077B5] mb-2">{stat.metric}</div>
                <div className="text-base text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DZ10 Sticky Navigation */}
      <nav className="sticky top-20 bg-[#051C2C] text-white z-40 border-y border-white/10">
        <div className="container px-4 md:px-12">
          <div className="flex items-center gap-1">
            <a href="#challenge" className="px-6 py-4 text-sm font-medium hover:bg-white/5 transition-colors hover:text-[#0077B5]">
              THE CHALLENGE
            </a>
            <a href="#solution" className="px-6 py-4 text-sm font-medium hover:bg-white/5 transition-colors hover:text-[#0077B5]">
              THE SOLUTION
            </a>
            <a href="#impact" className="px-6 py-4 text-sm font-medium hover:bg-white/5 transition-colors hover:text-[#0077B5]">
              THE IMPACT
            </a>
          </div>
        </div>
      </nav>

      {/* Company Overview */}
      <section className="py-16 bg-white text-[#051C2C]">
        <div className="container px-4 md:px-12 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif font-bold text-[#051C2C] mb-6">Company Background</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-[#051C2C]/80 leading-relaxed mb-4">
                Our client had built a successful business over 18 years providing on-premise enterprise resource planning software to mid-market manufacturing companies. With 220 employees and approximately 300 enterprise customers, the company generated $9M in annual recurring revenue primarily from maintenance contracts and professional services.
              </p>
              <p className="text-[#051C2C]/70 leading-relaxed">
                However, the company faced an existential challenge: the market was rapidly shifting to cloud-based SaaS solutions, and the company's on-premise architecture was increasingly viewed as outdated. New customer acquisition had declined 40% over three years, and existing customers were beginning to evaluate cloud alternatives. Without fundamental strategic repositioning, the company risked becoming irrelevant in a market it had once dominated.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12 p-8 bg-[#051C2C]/5 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0077B5]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-[#0077B5]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#0077B5] mb-1">Industry</div>
                  <div className="text-[#051C2C] font-medium">Enterprise Software</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0077B5]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-[#0077B5]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#0077B5] mb-1">Company Size</div>
                  <div className="text-[#051C2C] font-medium">220 employees</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0077B5]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-[#0077B5]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#0077B5] mb-1">Starting Revenue</div>
                  <div className="text-[#051C2C] font-medium">$9M ARR</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DZ10 Challenge Section */}
      <section id="challenge" className="py-24 md:py-32 bg-[#0077B5]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 mb-6 block">
              The Challenge
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white max-w-4xl leading-tight">
              Navigating the Innovator's Dilemma
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-[#051C2C]">
        <div className="container px-4 md:px-12 max-w-4xl">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4">Legacy Technology Constraints</h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                The existing product architecture was fundamentally incompatible with cloud deployment. The codebase was monolithic, tightly coupled, and built on aging technology stacks. Simply "lifting and shifting" to the cloud would not deliver the scalability, multi-tenancy, or modern user experience that market demanded.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4">Capability and Talent Gaps</h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                The engineering team's expertise centered on traditional on-premise development. Building cloud-native SaaS products required different architectural patterns, development practices, and operational capabilities. The company needed to rapidly build new capabilities while retaining institutional knowledge of the business domain.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4">Business Model Transformation</h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Shifting from perpetual licenses and professional services to subscription-based SaaS required fundamental changes to pricing, sales processes, customer success functions, and financial planning. The transition would create a revenue valley before new recurring revenue scaled.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4">Competitive Pressure</h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Well-funded cloud-native competitors were aggressively targeting the company's customer base. The company needed to move quickly to retain existing customers and recapture market momentum, but rushing the transformation risked product quality and customer satisfaction.
              </p>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mt-8 rounded-r-xl">
              <p className="text-[#051C2C] font-semibold mb-2">Strategic Imperative</p>
              <p className="text-[#051C2C]/70">
                The company faced a classic innovator's dilemma: the existing business remained profitable but was clearly in decline, while the path to future growth required significant investment and risk. Leadership needed a clear strategy for managing the transition while maintaining financial stability and customer relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DZ10 Quote Section */}
      <section className="py-24 md:py-32 bg-[#051C2C]">
        <div className="container px-4 md:px-12 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <blockquote className="text-3xl md:text-4xl font-serif text-[#0077B5] leading-tight mb-8">
              "We knew we had to transform, but the path forward was unclear. Our existing business was still profitable, but we could see the cliff approaching. We needed a partner who could help us navigate this transition without destroying what we had built."
            </blockquote>
            <div className="text-base text-white">
              <div className="font-semibold">— Chief Executive Officer</div>
              <div className="text-white/60">Enterprise Software Company</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DZ10 Solution Section */}
      <section id="solution" className="py-24 md:py-32 bg-[#0077B5]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 mb-6 block">
              The Solution
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white max-w-4xl leading-tight">
              Comprehensive Strategic Repositioning
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-[#051C2C]">
        <div className="container px-4 md:px-12 max-w-4xl">
          <p className="text-xl text-[#051C2C]/80 leading-relaxed mb-12">
            We partnered with the client to design and execute a comprehensive strategic repositioning that balanced bold transformation with pragmatic risk management, ultimately positioning the company for sustainable high-growth.
          </p>

          <div className="space-y-12">
            {/* Phase 1 */}
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#0077B5] text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-2">Strategic Assessment and Roadmap Development</h3>
                <p className="text-sm text-[#0077B5] mb-4">Months 1-3</p>
                <p className="text-[#051C2C]/70 leading-relaxed mb-4">
                  We conducted comprehensive strategic analysis to understand market dynamics, competitive positioning, customer needs, and internal capabilities.
                </p>
                <ul className="space-y-2 text-[#051C2C]/70">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" />
                    <span>Analyzed market trends and competitive landscape to validate cloud opportunity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" />
                    <span>Interviewed 40+ customers to understand requirements and migration willingness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" />
                    <span>Developed 24-month transformation roadmap with phased market entry strategy</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#0077B5] text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-2">Cloud-Native Product Development</h3>
                <p className="text-sm text-[#0077B5] mb-4">Months 4-15</p>
                <p className="text-[#051C2C]/70 leading-relaxed mb-4">
                  We led the design and development of a modern cloud-native platform, building on microservices architecture with contemporary technology stack.
                </p>
                <ul className="space-y-2 text-[#051C2C]/70">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" />
                    <span>Designed modern architecture leveraging microservices and containerization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" />
                    <span>Launched MVP with 5 design partner customers after 8 months</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" />
                    <span>Iterated based on customer feedback to achieve product-market fit</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#0077B5] text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-2">Business Model and Go-to-Market Transformation</h3>
                <p className="text-sm text-[#0077B5] mb-4">Months 10-18</p>
                <p className="text-[#051C2C]/70 leading-relaxed mb-4">
                  Parallel to product development, we redesigned the business model, sales processes, and customer success functions to support SaaS operations.
                </p>
                <ul className="space-y-2 text-[#051C2C]/70">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" />
                    <span>Developed tiered subscription pricing model based on customer segmentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" />
                    <span>Established customer success function to drive adoption and retention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" />
                    <span>Created customer migration program with incentives for cloud transition</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#0077B5] text-white rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-2">Market Launch and Scale</h3>
                <p className="text-sm text-[#0077B5] mb-4">Months 16-24</p>
                <p className="text-[#051C2C]/70 leading-relaxed mb-4">
                  With product-market fit validated, we executed an aggressive growth strategy focused on customer acquisition and market positioning.
                </p>
                <ul className="space-y-2 text-[#051C2C]/70">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" />
                    <span>Launched integrated marketing campaign as cloud-native leader</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" />
                    <span>Successfully migrated 65% of existing customer base to cloud platform</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" />
                    <span>Accelerated new customer acquisition through digital marketing and partners</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DZ10 Impact Section */}
      <section id="impact" className="py-24 md:py-32 bg-[#0077B5]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 mb-6 block">
              The Impact
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white max-w-4xl leading-tight">
              From Decline to High-Growth Leadership
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-[#051C2C]">
        <div className="container px-4 md:px-12 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-[#0077B5]" />
                Revenue Growth
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-[#051C2C]/5 rounded-xl">
                  <div className="text-2xl font-serif font-bold text-[#051C2C] mb-1">$28M ARR</div>
                  <div className="text-sm text-[#051C2C]/60">Up from $9M at transformation start</div>
                </div>
                <div className="p-4 bg-[#051C2C]/5 rounded-xl">
                  <div className="text-2xl font-serif font-bold text-[#051C2C] mb-1">3x</div>
                  <div className="text-sm text-[#051C2C]/60">Revenue growth in 24 months</div>
                </div>
                <div className="p-4 bg-[#051C2C]/5 rounded-xl">
                  <div className="text-2xl font-serif font-bold text-[#051C2C] mb-1">85%</div>
                  <div className="text-sm text-[#051C2C]/60">Revenue from subscriptions</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 flex items-center gap-3">
                <Target className="w-6 h-6 text-[#0077B5]" />
                Customer Success
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-[#051C2C]/5 rounded-xl">
                  <div className="text-2xl font-serif font-bold text-[#051C2C] mb-1">420</div>
                  <div className="text-sm text-[#051C2C]/60">Total customers (up from 300)</div>
                </div>
                <div className="p-4 bg-[#051C2C]/5 rounded-xl">
                  <div className="text-2xl font-serif font-bold text-[#051C2C] mb-1">92%</div>
                  <div className="text-sm text-[#051C2C]/60">Net revenue retention</div>
                </div>
                <div className="p-4 bg-[#051C2C]/5 rounded-xl">
                  <div className="text-2xl font-serif font-bold text-[#051C2C] mb-1">65%</div>
                  <div className="text-sm text-[#051C2C]/60">Existing customers migrated</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 flex items-center gap-3">
                <Cloud className="w-6 h-6 text-[#0077B5]" />
                Market Position
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-[#051C2C]/5 rounded-xl">
                  <div className="text-2xl font-serif font-bold text-[#051C2C] mb-1">#2</div>
                  <div className="text-sm text-[#051C2C]/60">Market position in cloud ERP</div>
                </div>
                <div className="p-4 bg-[#051C2C]/5 rounded-xl">
                  <div className="text-2xl font-serif font-bold text-[#051C2C] mb-1">4.7/5</div>
                  <div className="text-sm text-[#051C2C]/60">Customer satisfaction rating</div>
                </div>
                <div className="p-4 bg-[#051C2C]/5 rounded-xl">
                  <div className="text-2xl font-serif font-bold text-[#051C2C] mb-1">3</div>
                  <div className="text-sm text-[#051C2C]/60">Industry awards for innovation</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 flex items-center gap-3">
                <Rocket className="w-6 h-6 text-[#0077B5]" />
                Organizational Growth
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-[#051C2C]/5 rounded-xl">
                  <div className="text-2xl font-serif font-bold text-[#051C2C] mb-1">320</div>
                  <div className="text-sm text-[#051C2C]/60">Employees (up from 220)</div>
                </div>
                <div className="p-4 bg-[#051C2C]/5 rounded-xl">
                  <div className="text-2xl font-serif font-bold text-[#051C2C] mb-1">88%</div>
                  <div className="text-sm text-[#051C2C]/60">Employee engagement score</div>
                </div>
                <div className="p-4 bg-[#051C2C]/5 rounded-xl">
                  <div className="text-2xl font-serif font-bold text-[#051C2C] mb-1">$15M</div>
                  <div className="text-sm text-[#051C2C]/60">Growth capital raised</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DZ10 Quote Section 2 */}
      <section className="py-24 md:py-32 bg-[#051C2C]">
        <div className="container px-4 md:px-12 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <blockquote className="text-3xl md:text-4xl font-serif text-[#0077B5] leading-tight mb-8">
              "This transformation saved our company. We went from watching our market share erode to becoming a growth leader in our space. The NexDyne team helped us navigate incredibly complex strategic, technical, and organizational challenges."
            </blockquote>
            <div className="text-base text-white">
              <div className="font-semibold">— Chief Executive Officer</div>
              <div className="text-white/60">Enterprise Software Company</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Success Factors */}
      <section className="py-16 bg-white text-[#051C2C]">
        <div className="container px-4 md:px-12 max-w-4xl">
          <h2 className="text-3xl font-serif font-bold text-[#051C2C] mb-8">Key Success Factors</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-[#0077B5] pl-6">
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-3">Customer-Centric Development</h3>
              <p className="text-[#051C2C]/70">
                Involving design partner customers early in product development ensured the cloud platform addressed real needs and achieved product-market fit.
              </p>
            </div>

            <div className="border-l-4 border-[#0077B5] pl-6">
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-3">Balanced Transformation Approach</h3>
              <p className="text-[#051C2C]/70">
                Maintaining the existing business while building new capabilities required careful resource allocation and leadership focus.
              </p>
            </div>

            <div className="border-l-4 border-[#0077B5] pl-6">
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-3">Talent and Capability Building</h3>
              <p className="text-[#051C2C]/70">
                Strategic hiring of cloud-native talent combined with upskilling existing team members created the capabilities needed for success.
              </p>
            </div>

            <div className="border-l-4 border-[#0077B5] pl-6">
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-3">Decisive Leadership</h3>
              <p className="text-[#051C2C]/70">
                Executive commitment to transformation, even when facing short-term challenges, enabled the organization to stay focused on long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DZ10 Contact Form Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container px-4 md:px-12">
          <CaseStudyContactForm caseStudyTitle="Strategic Repositioning in Technology" />
        </div>
      </section>

      {/* DZ10 Related Cases Section */}
      <section className="py-24 md:py-32 bg-[#051C2C]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-6 block">
              Related Case Studies
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">More success stories</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            {[
              {
                title: "Digital Transformation in Manufacturing",
                industry: "Manufacturing",
                description: "How a precision manufacturer achieved 35% efficiency gains",
                image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80",
                link: "/case-studies/digital-transformation-manufacturing"
              },
              {
                title: "Operational Excellence in Healthcare",
                industry: "Healthcare",
                description: "How a regional healthcare system achieved operational excellence",
                image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80",
                link: "/case-studies/operational-excellence-healthcare"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={item.link} className="group block h-full">
                  <div className="aspect-[16/9] overflow-hidden mb-6 rounded-xl relative bg-white/5">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <span className="text-xs font-bold text-[#0077B5] uppercase tracking-wider">{item.industry}</span>
                  <h3 className="text-xl font-serif font-bold text-white mt-2 group-hover:text-[#0077B5] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/60 mt-2">{item.description}</p>
                  <span className="text-[#0077B5] text-sm font-semibold flex items-center gap-1 mt-4 group-hover:gap-2 transition-all">
                    Read case study <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/cases">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold transition-all bg-transparent">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to all case studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <BackToTop />
      <Footer />
    </div>
  );
}
