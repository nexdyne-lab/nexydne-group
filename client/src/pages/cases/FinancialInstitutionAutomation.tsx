import { ArrowRight, ArrowLeft, Zap, Clock, Shield, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";

export default function FinancialInstitutionAutomation() {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Financial Institution Automation Case Study | NexDyne Technologies"
        description="How NexDyne helped a regional bank automate 90% of loan processing workflows through intelligent document processing and workflow automation."
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-base text-white pt-32 pb-20">
        <div className="container px-4 md:px-8 lg:px-12">
          <div className="mb-8">
            <Link href="/cases" className="inline-flex items-center text-white/60 hover:text-white text-sm transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Link>
          </div>

          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-secondary text-sm font-semibold tracking-wider uppercase mb-4 block">
                Financial Institution • Banking & Financial Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-3 ">
                Automating 90% of loan processing workflows
              </h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-3xl">
                A leading regional bank transformed their lending operations through intelligent document processing and workflow automation, dramatically reducing processing time while improving accuracy and compliance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Metrics Bar */}
      <section className="bg-base py-12">
        <div className="container px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "90%", label: "Process Automation", icon: Zap },
              { value: "85%", label: "Time Reduction", icon: Clock },
              { value: "99.2%", label: "Accuracy Rate", icon: Shield },
              { value: "$12M", label: "Annual Savings", icon: TrendingUp }
            ].map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <metric.icon className="w-6 h-6 text-secondary mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{metric.value}</div>
                <div className="text-sm text-muted-foreground/70">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-20 md:py-24">
        <div className="container px-4 md:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-semibold text-destructive tracking-wider uppercase mb-6">Executive Summary</h2>
              <p className="text-xl md:text-2xl text-charcoal leading-relaxed mb-8">
                A regional bank with $45 billion in assets was struggling with manual loan processing that took an average of 5-7 business days. NexDyne implemented an intelligent automation solution combining AI document processing, workflow orchestration, and decision engines—reducing processing time to under 4 hours while achieving 99.2% accuracy.
              </p>
              <p className="text-lg text-charcoal/70 leading-relaxed">
                The transformation not only delivered immediate operational benefits but also positioned the bank to compete more effectively in an increasingly digital marketplace, where speed and customer experience have become key differentiators.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 md:py-24 bg-subtle">
        <div className="container px-4 md:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-10 ">The Challenge</h2>
              
              <p className="text-lg text-charcoal/80 leading-relaxed mb-8">
                The bank's loan processing operation had become a significant bottleneck. With over 50,000 loan applications processed annually across consumer, commercial, and mortgage products, the manual review process was consuming substantial resources while creating customer dissatisfaction. Average processing time of 5-7 business days put the bank at a competitive disadvantage against digital-first lenders offering same-day decisions.
              </p>
              
              <p className="text-lg text-charcoal/80 leading-relaxed mb-8">
                The existing process required loan officers to manually review dozens of documents per application, cross-reference information across multiple systems, and navigate complex compliance requirements. This manual approach resulted in inconsistent decisions, with error rates approaching 15% and significant variation in processing times depending on individual workloads. More than 200 full-time employees were dedicated solely to document processing tasks.
              </p>

              <blockquote className="border-l-4 border-destructive pl-8 my-12">
                <p className="text-2xl md:text-3xl text-charcoal leading-relaxed mb-4">
                  "Our loan officers were spending 70% of their time on document review and data entry—tasks that added no value to the customer relationship. We needed to free them to focus on what they do best: advising customers."
                </p>
                <cite className="text-sm text-charcoal/60 not-italic">— Chief Operating Officer</cite>
              </blockquote>
              
              <p className="text-lg text-charcoal/80 leading-relaxed">
                Regulatory pressure added another layer of complexity. Recent examinations had identified inconsistencies in documentation and decision-making that required remediation. The bank needed a solution that would not only improve efficiency but also strengthen compliance and create a complete audit trail for every decision. The leadership recognized that digital-native lenders were capturing market share with same-day approvals, and they needed to fundamentally reimagine their lending operations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 md:py-24">
        <div className="container px-4 md:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-10 ">Our Approach</h2>
              
              <p className="text-lg text-charcoal/80 leading-relaxed mb-12">
                NexDyne designed and implemented an end-to-end intelligent automation platform that combined multiple AI technologies with human-in-the-loop oversight for complex cases. The approach addressed the full loan processing lifecycle while maintaining the risk management standards essential to banking operations.
              </p>

              {/* Phase 1 */}
              <div className="mb-16">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-semibold text-primary tracking-wider">PHASE 1</span>
                  <span className="text-sm text-charcoal/40">Weeks 1-6</span>
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-6 ">Intelligent Document Processing</h3>
                <p className="text-lg text-charcoal/80 leading-relaxed">
                  We deployed advanced OCR and NLP models trained specifically on financial documents to automatically extract, classify, and validate data from over 40 document types including loan applications, tax returns, pay stubs, and bank statements. The system achieved 99.2% extraction accuracy while automatically flagging anomalies and inconsistencies for human review. This eliminated the need for manual data entry while ensuring data quality exceeded previous standards, processing over 200 data fields per application with built-in confidence scoring for intelligent routing.
                </p>
              </div>

              {/* Phase 2 */}
              <div className="mb-16">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-semibold text-primary tracking-wider">PHASE 2</span>
                  <span className="text-sm text-charcoal/40">Weeks 7-12</span>
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-6 ">Workflow Orchestration Engine</h3>
                <p className="text-lg text-charcoal/80 leading-relaxed">
                  Our team implemented a flexible workflow engine that routes applications through automated and manual steps based on risk profiles, product types, and regulatory requirements. We created 15 automated workflow templates by product type, integrated with core banking and credit systems, and built real-time status tracking with proactive notifications. The system automatically prioritizes applications, balances workloads across the team, and provides complete visibility into processing status at every stage.
                </p>
              </div>

              {/* Phase 3 */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-semibold text-primary tracking-wider">PHASE 3</span>
                  <span className="text-sm text-charcoal/40">Weeks 13-18</span>
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-6 ">Decision Engine & Compliance</h3>
                <p className="text-lg text-charcoal/80 leading-relaxed">
                  We implemented AI-powered decision support that pre-qualifies applications, flags compliance issues, and provides underwriters with risk assessments and recommendations. The credit risk models achieved 94% prediction accuracy while automating 85% of compliance checks. Every decision is documented with complete rationale, creating comprehensive audit trails that satisfy regulatory requirements and enable continuous improvement of the underwriting process.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Results */}
      <section className="py-20 md:py-24 bg-base text-white">
        <div className="container px-4 md:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-10 ">The Results</h2>
              
              <p className="text-xl text-white/80 leading-relaxed mb-12">
                The transformation delivered immediate and measurable impact across every dimension of the lending operation. Processing time dropped from 5-7 days to under 4 hours for standard applications, while accuracy improved and costs decreased significantly. The bank is now positioned as a leader in digital lending within their market.
              </p>

              <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 mb-12">
                <div className="border-l-2 border-secondary pl-6">
                  <div className="text-4xl font-bold text-secondary mb-3">90%</div>
                  <p className="text-white/70 leading-relaxed">
                    Of loan applications now processed without manual intervention, freeing loan officers to focus on complex cases and building customer relationships.
                  </p>
                </div>
                <div className="border-l-2 border-secondary pl-6">
                  <div className="text-4xl font-bold text-secondary mb-3">85%</div>
                  <p className="text-white/70 leading-relaxed">
                    Reduction in average processing time, from 5-7 business days to under 4 hours for straightforward applications, matching digital-first competitors.
                  </p>
                </div>
                <div className="border-l-2 border-secondary pl-6">
                  <div className="text-4xl font-bold text-secondary mb-3">99.2%</div>
                  <p className="text-white/70 leading-relaxed">
                    Document extraction accuracy, far exceeding the previous 85% manual accuracy rate while providing complete audit trails for regulatory compliance.
                  </p>
                </div>
                <div className="border-l-2 border-secondary pl-6">
                  <div className="text-4xl font-bold text-secondary mb-3">$12M</div>
                  <p className="text-white/70 leading-relaxed">
                    Annual cost savings through reduced manual processing, improved accuracy, and increased loan officer productivity across the organization.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-20 md:py-24 bg-subtle">
        <div className="container px-4 md:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-7xl text-destructive mb-8 leading-none">"</div>
              <blockquote className="text-2xl md:text-3xl text-charcoal leading-relaxed mb-10">
                The automation platform has fundamentally changed how we operate. Our loan officers now spend their time building relationships and solving complex problems, not shuffling paper. Customer satisfaction has never been higher.
              </blockquote>
              <div>
                <div className="font-semibold text-charcoal text-lg">Michael Torres</div>
                <div className="text-charcoal/60">Chief Operating Officer</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-20 md:py-24">
        <div className="container px-4 md:px-8 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-12 ">Related Case Studies</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  client: "GLOBAL RETAILER",
                  title: "Scaling e-commerce revenue by 40% with AI personalization",
                  link: "/cases/global-retailer-ecommerce"
                },
                {
                  client: "HEALTHCARE PROVIDER",
                  title: "Reducing patient wait times by 35% with predictive analytics",
                  link: "/cases/healthcare-provider-ai"
                }
              ].map((study, i) => (
                <Link key={i} href={study.link}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group p-8 bg-subtle hover:bg-subtle transition-all duration-300 cursor-pointer"
                  >
                    <span className="text-xs font-semibold tracking-widest text-charcoal/50 uppercase mb-4 block">
                      {study.client}
                    </span>
                    <h3 className="text-xl font-bold text-charcoal mb-6 group-hover:text-primary transition-colors ">
                      {study.title}
                    </h3>
                    <span className="inline-flex items-center text-primary font-medium text-sm">
                      Read case study <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-charcoal">
        <div className="container px-4 md:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 ">
              Ready to automate your operations?
            </h2>
            <p className="text-lg text-white/60 mb-10">
              Let's discuss how intelligent automation can transform your workflows.
            </p>
            <Link href="/contact">
              <button className="px-8 py-4 bg-secondary text-white font-semibold hover:bg-secondary transition-colors">
                Start a Conversation
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
