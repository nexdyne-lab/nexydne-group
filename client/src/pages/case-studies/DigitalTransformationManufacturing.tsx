import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, Building2, Users, TrendingUp, CheckCircle2, Target, Zap, Download } from 'lucide-react';
import { CaseStudyPDFButton } from "@/components/CaseStudyPDFButton";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import CaseStudyContactForm from "@/components/CaseStudyContactForm";
import { BackToTop } from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

export default function DigitalTransformationManufacturing() {
  return (
    <div className="min-h-screen bg-[#051C2C] text-white selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Digital Transformation in Precision Manufacturing | Case Study | NexDyne Technologies" 
        description="How a mid-market precision components manufacturer transformed operations through digital modernization, achieving 35% efficiency gains and positioning for sustainable growth."
        canonical="/case-studies/digital-transformation-manufacturing"
      />
      <Navigation />
      
      {/* DZ10 Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30"></div>
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
              Case Study · Business Transformation
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight leading-[1.05] mb-4">
              Digital Transformation in <span className="text-[#0077B5]">Precision Manufacturing</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mb-8">
              How a mid-market precision components manufacturer transformed operations through digital modernization, achieving 35% efficiency gains and positioning for sustainable growth.
            </p>
            
            {/* PDF Download Button */}
            <CaseStudyPDFButton
              title="Digital Transformation in Precision Manufacturing"
              industry="Business Transformation"
              summary="How a mid-market precision components manufacturer transformed operations through digital modernization, achieving 35% efficiency gains and positioning for sustainable growth."
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
              { metric: "35%", label: "Efficiency Improvement" },
              { metric: "$2.8M", label: "Annual Cost Savings" },
              { metric: "18 mo", label: "Transformation Timeline" },
              { metric: "98%", label: "On-Time Delivery" }
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
                Our client, a precision components manufacturer serving aerospace and medical device industries, had built a strong reputation for quality over 30 years of operation. However, the company faced increasing competitive pressure from larger manufacturers with more modern operations and lower cost structures.
              </p>
              <p className="text-[#051C2C]/70 leading-relaxed">
                With 180 employees across two manufacturing facilities, the organization relied heavily on legacy systems and manual processes. Production planning was spreadsheet-based, quality tracking involved paper forms, and inventory management lacked real-time visibility. These operational constraints limited the company's ability to scale efficiently and respond to customer demands for shorter lead times and greater flexibility.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12 p-8 bg-[#051C2C]/5 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0077B5]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-[#0077B5]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#0077B5] mb-1">Industry</div>
                  <div className="text-[#051C2C] font-medium">Precision Manufacturing</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0077B5]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-[#0077B5]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#0077B5] mb-1">Company Size</div>
                  <div className="text-[#051C2C] font-medium">180 employees</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0077B5]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-[#0077B5]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#0077B5] mb-1">Annual Revenue</div>
                  <div className="text-[#051C2C] font-medium">$45M</div>
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
              Legacy Systems Limiting Growth Potential
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
                Disparate systems that didn't communicate with each other created data silos and required extensive manual data entry. The ERP system was 15 years old and lacked modern capabilities for production planning, inventory optimization, and real-time reporting.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4">Operational Inefficiencies</h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Manual processes throughout the operation created bottlenecks and quality risks. Production scheduling required days of effort each week, inventory accuracy was below 85%, and quality data collection was inconsistent across facilities.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4">Limited Visibility and Control</h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Management lacked real-time visibility into operations. Production status required physical walkthroughs, inventory levels were known only after physical counts, and financial reporting lagged by weeks, limiting the ability to make timely decisions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4">Change Management Complexity</h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                The workforce included many long-tenured employees comfortable with existing processes. Implementing significant operational changes while maintaining production continuity and employee engagement represented a substantial organizational challenge.
              </p>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mt-8 rounded-r-xl">
              <p className="text-[#051C2C] font-semibold mb-2">Critical Business Impact</p>
              <p className="text-[#051C2C]/70">
                These challenges were affecting the bottom line: on-time delivery performance had declined to 82%, customer complaints about lead times were increasing, and operating costs were 15-20% higher than industry benchmarks. Without transformation, the company risked losing key accounts to more responsive competitors.
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
              "We knew incremental improvements wouldn't be enough. We needed a comprehensive transformation to modernize operations and position the business for sustainable growth."
            </blockquote>
            <div className="text-base text-white">
              <div className="font-semibold">— Chief Operating Officer</div>
              <div className="text-white/60">Precision Components Manufacturer</div>
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
              Comprehensive Digital Transformation Program
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-[#051C2C]">
        <div className="container px-4 md:px-12 max-w-4xl">
          <p className="text-xl text-[#051C2C]/80 leading-relaxed mb-12">
            We partnered with the client to design and execute a comprehensive digital transformation program that balanced ambition with pragmatism. The approach focused on modernizing core systems while building organizational capabilities to sustain improvements over time.
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
                  We began with a comprehensive diagnostic to understand current state operations, identify improvement opportunities, and assess organizational readiness for change. This involved process mapping, system analysis, stakeholder interviews, and benchmarking against industry best practices.
                </p>
                <ul className="space-y-2 text-[#051C2C]/70">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" />
                    <span>Documented end-to-end processes across planning, production, quality, and inventory management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" />
                    <span>Quantified improvement opportunities totaling $3.5M in annual value</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" />
                    <span>Developed 18-month transformation roadmap with phased implementation approach</span>
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
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-2">Technology Platform Modernization</h3>
                <p className="text-sm text-[#0077B5] mb-4">Months 4-10</p>
                <p className="text-[#051C2C]/70 leading-relaxed mb-4">
                  We led the selection and implementation of a modern cloud-based ERP system designed for mid-market manufacturers. The implementation followed an agile methodology with iterative releases, allowing the organization to realize value progressively while managing change effectively.
                </p>
                <ul className="space-y-2 text-[#051C2C]/70">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" />
                    <span>Implemented integrated ERP covering production planning, inventory, quality, and financials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" />
                    <span>Deployed shop floor data collection system with real-time production tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" />
                    <span>Built executive dashboards providing real-time visibility into key operational metrics</span>
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
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-2">Process Optimization and Capability Building</h3>
                <p className="text-sm text-[#0077B5] mb-4">Months 8-15</p>
                <p className="text-[#051C2C]/70 leading-relaxed mb-4">
                  Technology implementation was paired with comprehensive process redesign and capability building. We worked alongside client teams to redesign workflows, eliminate waste, and develop new standard operating procedures that leveraged system capabilities.
                </p>
                <ul className="space-y-2 text-[#051C2C]/70">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" />
                    <span>Redesigned production planning process, reducing planning time from 16 hours to 3 hours weekly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" />
                    <span>Implemented demand-driven inventory management, reducing inventory levels by 28%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" />
                    <span>Trained 140+ employees on new systems and processes through hands-on workshops</span>
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
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-2">Stabilization and Knowledge Transfer</h3>
                <p className="text-sm text-[#0077B5] mb-4">Months 15-18</p>
                <p className="text-[#051C2C]/70 leading-relaxed mb-4">
                  The final phase focused on stabilizing new processes, addressing remaining issues, and ensuring the organization could sustain improvements independently. We established performance management mechanisms and transferred knowledge to internal teams.
                </p>
                <ul className="space-y-2 text-[#051C2C]/70">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" />
                    <span>Implemented weekly performance reviews tracking key operational and financial metrics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" />
                    <span>Documented standard operating procedures and created training materials for ongoing use</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" />
                    <span>Established internal system administrator and process owner roles</span>
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
              Transformational Results Across All Dimensions
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-[#051C2C]">
        <div className="container px-4 md:px-12 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 flex items-center gap-3">
                <Target className="w-6 h-6 text-[#0077B5]" />
                Operational Excellence
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-[#051C2C]/5 rounded-xl">
                  <div className="text-2xl font-serif font-bold text-[#051C2C] mb-1">35%</div>
                  <div className="text-sm text-[#051C2C]/60">Overall operational efficiency improvement</div>
                </div>
                <div className="p-4 bg-[#051C2C]/5 rounded-xl">
                  <div className="text-2xl font-serif font-bold text-[#051C2C] mb-1">98%</div>
                  <div className="text-sm text-[#051C2C]/60">On-time delivery (up from 82%)</div>
                </div>
                <div className="p-4 bg-[#051C2C]/5 rounded-xl">
                  <div className="text-2xl font-serif font-bold text-[#051C2C] mb-1">99.2%</div>
                  <div className="text-sm text-[#051C2C]/60">Inventory accuracy</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-[#0077B5]" />
                Financial Performance
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-[#051C2C]/5 rounded-xl">
                  <div className="text-2xl font-serif font-bold text-[#051C2C] mb-1">$2.8M</div>
                  <div className="text-sm text-[#051C2C]/60">Annual cost savings</div>
                </div>
                <div className="p-4 bg-[#051C2C]/5 rounded-xl">
                  <div className="text-2xl font-serif font-bold text-[#051C2C] mb-1">28%</div>
                  <div className="text-sm text-[#051C2C]/60">Inventory carrying cost reduction</div>
                </div>
                <div className="p-4 bg-[#051C2C]/5 rounded-xl">
                  <div className="text-2xl font-serif font-bold text-[#051C2C] mb-1">14 mo</div>
                  <div className="text-sm text-[#051C2C]/60">Payback on transformation investment</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#0077B5]" />
                Quality and Compliance
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-[#051C2C]/5 rounded-xl">
                  <div className="text-2xl font-serif font-bold text-[#051C2C] mb-1">42%</div>
                  <div className="text-sm text-[#051C2C]/60">Reduction in quality incidents</div>
                </div>
                <div className="p-4 bg-[#051C2C]/5 rounded-xl">
                  <div className="text-2xl font-serif font-bold text-[#051C2C] mb-1">100%</div>
                  <div className="text-sm text-[#051C2C]/60">Regulatory audit compliance</div>
                </div>
                <div className="p-4 bg-[#051C2C]/5 rounded-xl">
                  <div className="text-2xl font-serif font-bold text-[#051C2C] mb-1">65%</div>
                  <div className="text-sm text-[#051C2C]/60">Faster quality data collection</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 flex items-center gap-3">
                <Zap className="w-6 h-6 text-[#0077B5]" />
                Strategic Positioning
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-[#051C2C]/5 rounded-xl">
                  <div className="text-2xl font-serif font-bold text-[#051C2C] mb-1">3</div>
                  <div className="text-sm text-[#051C2C]/60">Major new customer accounts won</div>
                </div>
                <div className="p-4 bg-[#051C2C]/5 rounded-xl">
                  <div className="text-2xl font-serif font-bold text-[#051C2C] mb-1">50%</div>
                  <div className="text-sm text-[#051C2C]/60">Production capacity increase</div>
                </div>
                <div className="p-4 bg-[#051C2C]/5 rounded-xl">
                  <div className="text-2xl font-serif font-bold text-[#051C2C] mb-1">92%</div>
                  <div className="text-sm text-[#051C2C]/60">Employee engagement satisfaction</div>
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
              "This transformation fundamentally changed how we operate. We're not just more efficient—we're more agile, more responsive to customers, and better positioned for growth. The NexDyne team didn't just implement technology; they helped us build the capabilities to continuously improve and adapt."
            </blockquote>
            <div className="text-base text-white">
              <div className="font-semibold">— Chief Operating Officer</div>
              <div className="text-white/60">Precision Components Manufacturer</div>
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
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-3">Executive Commitment</h3>
              <p className="text-[#051C2C]/70">
                Strong CEO and COO sponsorship ensured resources were allocated, obstacles were removed, and the organization maintained focus throughout the 18-month journey.
              </p>
            </div>

            <div className="border-l-4 border-[#0077B5] pl-6">
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-3">Phased Implementation</h3>
              <p className="text-[#051C2C]/70">
                Breaking the transformation into manageable phases with defined deliverables enabled progressive value realization while managing organizational change capacity.
              </p>
            </div>

            <div className="border-l-4 border-[#0077B5] pl-6">
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-3">Change Management Focus</h3>
              <p className="text-[#051C2C]/70">
                Investing heavily in communication, training, and stakeholder engagement ensured high adoption rates and minimized disruption.
              </p>
            </div>

            <div className="border-l-4 border-[#0077B5] pl-6">
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-3">Process Before Technology</h3>
              <p className="text-[#051C2C]/70">
                Redesigning processes before implementing technology ensured systems enabled improved workflows rather than automating existing inefficiencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DZ10 Contact Form Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container px-4 md:px-12">
          <CaseStudyContactForm caseStudyTitle="Digital Transformation in Manufacturing" />
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
                title: "Operational Excellence in Healthcare",
                industry: "Healthcare",
                description: "How a regional healthcare system achieved operational excellence",
                image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80",
                link: "/case-studies/operational-excellence-healthcare"
              },
              {
                title: "Strategic Repositioning in Technology",
                industry: "Technology",
                description: "How a technology company repositioned for market leadership",
                image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
                link: "/case-studies/strategic-repositioning-technology"
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
