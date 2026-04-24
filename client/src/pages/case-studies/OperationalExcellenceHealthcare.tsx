import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, Building2, Users, TrendingUp, CheckCircle2, Target, Heart, Download } from 'lucide-react';
import { CaseStudyPDFButton } from "@/components/CaseStudyPDFButton";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import CaseStudyContactForm from "@/components/CaseStudyContactForm";
import { BackToTop } from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

export default function OperationalExcellenceHealthcare() {
  return (
    <div className="min-h-screen bg-base text-white selection:bg-primary selection:text-white">
      <SEO 
        title="Operational Excellence in Multi-Site Healthcare | Case Study | NexDyne Technologies" 
        description="How a regional healthcare provider transformed operations across 12 facilities, reducing costs by 22% while improving patient satisfaction and clinical outcomes."
        canonical="/case-studies/operational-excellence-healthcare"
      />
      <Navigation />
      
      {/* DZ10 Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-base via-base/60 to-base"></div>
        
        <div className="container relative z-10 px-4 md:px-12">
          <Breadcrumbs />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">
              Case Study · Performance Improvement
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-4">
              Operational Excellence in <span className="text-primary">Multi-Site Healthcare</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mb-8">
              How a regional healthcare provider transformed operations across 12 facilities, reducing costs by 22% while improving patient satisfaction and clinical outcomes.
            </p>
            
            {/* PDF Download Button */}
            <CaseStudyPDFButton
              title="Operational Excellence in Multi-Site Healthcare"
              industry="Performance Improvement"
              summary="How a regional healthcare provider transformed operations across 12 facilities, reducing costs by 22% while improving patient satisfaction and clinical outcomes."
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
      <section className="py-16 bg-base border-t border-white/10">
        <div className="container px-4 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { metric: "22%", label: "Cost Reduction" },
              { metric: "$8.4M", label: "Annual Savings" },
              { metric: "15%", label: "Patient Satisfaction Increase" },
              { metric: "12 mo", label: "Implementation Timeline" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-2 border-primary/50 pl-8"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.metric}</div>
                <div className="text-base text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DZ10 Sticky Navigation */}
      <nav className="sticky top-20 bg-base text-white z-40 border-y border-white/10">
        <div className="container px-4 md:px-12">
          <div className="flex items-center gap-1">
            <a href="#challenge" className="px-6 py-4 text-sm font-medium hover:bg-white/5 transition-colors hover:text-primary">
              THE CHALLENGE
            </a>
            <a href="#solution" className="px-6 py-4 text-sm font-medium hover:bg-white/5 transition-colors hover:text-primary">
              THE SOLUTION
            </a>
            <a href="#impact" className="px-6 py-4 text-sm font-medium hover:bg-white/5 transition-colors hover:text-primary">
              THE IMPACT
            </a>
          </div>
        </div>
      </nav>

      {/* Company Overview */}
      <section className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-charcoal mb-6">Organization Background</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Our client operates a network of 12 outpatient healthcare facilities across a three-state region, providing primary care, specialty services, and diagnostic capabilities. With 850 employees serving approximately 85,000 active patients, the organization had grown through a combination of organic expansion and strategic acquisitions over 15 years.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                However, this growth created operational complexity. Each facility operated with significant autonomy, resulting in inconsistent processes, duplicated efforts, and wide variation in performance metrics. Leadership recognized that achieving operational excellence required systematic standardization and optimization across the network while preserving the patient-centered care that defined their reputation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12 p-8 bg-base/5 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-primary mb-1">Industry</div>
                  <div className="text-charcoal font-medium">Healthcare Services</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-primary mb-1">Organization Size</div>
                  <div className="text-charcoal font-medium">850 employees, 12 facilities</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-primary mb-1">Annual Revenue</div>
                  <div className="text-charcoal font-medium">$120M</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DZ10 Challenge Section */}
      <section id="challenge" className="py-24 md:py-32 bg-primary">
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
            <h2 className="text-4xl md:text-5xl font-bold text-white max-w-4xl leading-tight">
              Mounting Pressure on Margins and Operations
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12 max-w-4xl">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Process Inconsistency</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Each facility had evolved unique workflows for scheduling, patient intake, clinical documentation, and billing. This variation created inefficiencies, complicated staff training when employees moved between sites, and made it difficult to identify and replicate best practices across the network.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Resource Utilization Gaps</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Analysis revealed significant variation in productivity metrics across facilities. Some sites operated at 65% provider utilization while others exceeded 90%. Support staff ratios varied by 40% across comparable facilities, suggesting substantial optimization opportunities.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Revenue Cycle Inefficiencies</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Billing and collections processes were fragmented and inefficient. Days in accounts receivable averaged 52 days, denial rates exceeded industry benchmarks by 30%, and significant revenue was lost due to incomplete documentation and missed charge capture.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Limited Performance Visibility</h3>
              <p className="text-charcoal/70 leading-relaxed">
                The organization lacked standardized metrics and reporting infrastructure. Leadership had limited visibility into facility-level performance, making it difficult to identify issues proactively or hold site managers accountable for operational improvements.
              </p>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mt-8 rounded-r-xl">
              <p className="text-charcoal font-semibold mb-2">Strategic Imperative</p>
              <p className="text-charcoal/70">
                Without significant operational improvement, the organization faced difficult choices: reduce services, close underperforming facilities, or seek acquisition by a larger health system. Leadership was committed to maintaining independence but recognized that achieving this goal required transforming operations to deliver sustainable margins while maintaining quality of care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DZ10 Quote Section */}
      <section className="py-24 md:py-32 bg-base">
        <div className="container px-4 md:px-12 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <blockquote className="text-3xl md:text-4xl text-primary leading-tight mb-8">
              "We needed to achieve significant cost reductions without compromising the quality of care that our patients and communities depend on. It seemed like an impossible balance."
            </blockquote>
            <div className="text-base text-white">
              <div className="font-semibold">— Chief Executive Officer</div>
              <div className="text-white/60">Regional Healthcare Provider</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DZ10 Solution Section */}
      <section id="solution" className="py-24 md:py-32 bg-primary">
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
            <h2 className="text-4xl md:text-5xl font-bold text-white max-w-4xl leading-tight">
              Comprehensive Operational Excellence Program
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12 max-w-4xl">
          <p className="text-xl text-charcoal/80 leading-relaxed mb-12">
            We partnered with the client to design and execute a comprehensive operational excellence program focused on standardizing processes, optimizing resource utilization, and building continuous improvement capabilities.
          </p>

          <div className="space-y-12">
            {/* Phase 1 */}
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-2">Comprehensive Diagnostic and Opportunity Identification</h3>
                <p className="text-sm text-primary mb-4">Months 1-2</p>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  We conducted a rigorous diagnostic across all 12 facilities, analyzing operational data, observing workflows, interviewing staff and providers, and benchmarking performance against industry standards.
                </p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Mapped end-to-end patient journey and supporting operational processes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Identified $10M+ in annual improvement opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Developed implementation roadmap prioritizing high-impact initiatives</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-2">Process Standardization and Optimization</h3>
                <p className="text-sm text-primary mb-4">Months 3-7</p>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  Working with cross-functional teams, we redesigned core processes to eliminate waste, reduce variation, and improve patient experience.
                </p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Redesigned patient scheduling process, reducing no-show rates from 18% to 9%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Standardized clinical documentation workflows, improving charge capture by 12%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Implemented centralized revenue cycle operations</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-2">Performance Management Infrastructure</h3>
                <p className="text-sm text-primary mb-4">Months 6-9</p>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  We established comprehensive performance management infrastructure to provide visibility into operations, enable data-driven decision making, and create accountability for results.
                </p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Defined balanced scorecard with operational, financial, quality, and patient experience metrics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Built executive dashboards providing real-time visibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Implemented performance-based incentive structure</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-2">Continuous Improvement Capability Building</h3>
                <p className="text-sm text-primary mb-4">Months 9-12</p>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  The final phase focused on building internal capabilities to sustain improvements and drive ongoing optimization.
                </p>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Trained 45 staff members in Lean Six Sigma methodology</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Established continuous improvement team with dedicated resources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Created idea management system for capturing improvement suggestions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DZ10 Impact Section */}
      <section id="impact" className="py-24 md:py-32 bg-primary">
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
            <h2 className="text-4xl md:text-5xl font-bold text-white max-w-4xl leading-tight">
              Transformational Results Across All Dimensions
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-primary" />
                Financial Performance
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-base/5 rounded-xl">
                  <div className="text-2xl font-bold text-charcoal mb-1">$8.4M</div>
                  <div className="text-sm text-charcoal/60">Annual cost savings</div>
                </div>
                <div className="p-4 bg-base/5 rounded-xl">
                  <div className="text-2xl font-bold text-charcoal mb-1">22%</div>
                  <div className="text-sm text-charcoal/60">Operating cost reduction per visit</div>
                </div>
                <div className="p-4 bg-base/5 rounded-xl">
                  <div className="text-2xl font-bold text-charcoal mb-1">2.8% → 10%</div>
                  <div className="text-sm text-charcoal/60">Operating margin improvement</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3">
                <Target className="w-6 h-6 text-primary" />
                Operational Efficiency
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-base/5 rounded-xl">
                  <div className="text-2xl font-bold text-charcoal mb-1">18%</div>
                  <div className="text-sm text-charcoal/60">Provider productivity improvement</div>
                </div>
                <div className="p-4 bg-base/5 rounded-xl">
                  <div className="text-2xl font-bold text-charcoal mb-1">50%</div>
                  <div className="text-sm text-charcoal/60">Reduction in patient no-shows</div>
                </div>
                <div className="p-4 bg-base/5 rounded-xl">
                  <div className="text-2xl font-bold text-charcoal mb-1">85%</div>
                  <div className="text-sm text-charcoal/60">Core processes standardized</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                Revenue Cycle Excellence
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-base/5 rounded-xl">
                  <div className="text-2xl font-bold text-charcoal mb-1">52 → 38 days</div>
                  <div className="text-sm text-charcoal/60">Days in accounts receivable</div>
                </div>
                <div className="p-4 bg-base/5 rounded-xl">
                  <div className="text-2xl font-bold text-charcoal mb-1">35%</div>
                  <div className="text-sm text-charcoal/60">Reduction in claim denials</div>
                </div>
                <div className="p-4 bg-base/5 rounded-xl">
                  <div className="text-2xl font-bold text-charcoal mb-1">$1.8M</div>
                  <div className="text-sm text-charcoal/60">Additional revenue recovered</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3">
                <Heart className="w-6 h-6 text-primary" />
                Quality and Patient Experience
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-base/5 rounded-xl">
                  <div className="text-2xl font-bold text-charcoal mb-1">15%</div>
                  <div className="text-sm text-charcoal/60">Patient satisfaction increase</div>
                </div>
                <div className="p-4 bg-base/5 rounded-xl">
                  <div className="text-2xl font-bold text-charcoal mb-1">28%</div>
                  <div className="text-sm text-charcoal/60">Clinical quality improvement</div>
                </div>
                <div className="p-4 bg-base/5 rounded-xl">
                  <div className="text-2xl font-bold text-charcoal mb-1">72% → 89%</div>
                  <div className="text-sm text-charcoal/60">Employee engagement scores</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DZ10 Quote Section 2 */}
      <section className="py-24 md:py-32 bg-base">
        <div className="container px-4 md:px-12 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <blockquote className="text-3xl md:text-4xl text-primary leading-tight mb-8">
              "This program transformed our organization. We achieved cost savings that seemed impossible while actually improving patient care and employee satisfaction. The NexDyne team helped us build capabilities that continue to drive improvements long after the formal engagement ended."
            </blockquote>
            <div className="text-base text-white">
              <div className="font-semibold">— Chief Executive Officer</div>
              <div className="text-white/60">Regional Healthcare Provider</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Success Factors */}
      <section className="py-16 bg-white text-charcoal">
        <div className="container px-4 md:px-12 max-w-4xl">
          <h2 className="text-3xl font-bold text-charcoal mb-8">Key Success Factors</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold text-charcoal mb-3">Balanced Approach</h3>
              <p className="text-charcoal/70">
                Simultaneously pursuing cost reduction and quality improvement ensured sustainable results by focusing on eliminating waste rather than simply cutting resources.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold text-charcoal mb-3">Frontline Engagement</h3>
              <p className="text-charcoal/70">
                Involving providers and staff in process redesign ensured solutions were practical and gained strong adoption.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold text-charcoal mb-3">Data-Driven Decisions</h3>
              <p className="text-charcoal/70">
                Rigorous analysis and measurement discipline ensured efforts focused on high-impact opportunities and enabled objective assessment of progress.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold text-charcoal mb-3">Capability Building</h3>
              <p className="text-charcoal/70">
                Investing in training and establishing continuous improvement infrastructure ensured the organization could sustain gains independently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DZ10 Contact Form Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container px-4 md:px-12">
          <CaseStudyContactForm caseStudyTitle="Operational Excellence in Healthcare" />
        </div>
      </section>

      {/* DZ10 Related Cases Section */}
      <section className="py-24 md:py-32 bg-base">
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
            <h2 className="text-4xl md:text-5xl font-bold text-white">More success stories</h2>
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
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">{item.industry}</span>
                  <h3 className="text-xl font-bold text-white mt-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/60 mt-2">{item.description}</p>
                  <span className="text-primary text-sm font-semibold flex items-center gap-1 mt-4 group-hover:gap-2 transition-all">
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
