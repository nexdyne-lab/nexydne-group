import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, Download } from 'lucide-react';
import { CaseStudyPDFButton } from "@/components/CaseStudyPDFButton";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import CaseStudyContactForm from "@/components/CaseStudyContactForm";
import { BackToTop } from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

export default function CaseStudyFintechPayment() {
  return (
    <div className="min-h-screen bg-base text-white selection:bg-primary selection:text-white">
      <SEO 
        title="Fintech Payment Automation | Case Study | NexDyne Consulting Group" 
        description="How a fast-growing B2B fintech scaled payment operations 10x without headcount growth, achieving 85% auto-resolution and 99.9% accuracy."
        canonical="/cases/fintech-payment-automation"
      />
      <Navigation />
      
      {/* DZ10 Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/case-financial-advisor.7bb94f0c.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-base via-base/60 to-base"></div>
        
        <div className="container relative z-10 px-4 md:px-12">
          <Breadcrumbs />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block">
              Case Study · Financial Services
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight leading-[1.05] mb-5 sm:mb-3 md:mb-4">
              Scaling payment operations <span className="text-primary">10x without headcount growth</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-3xl mb-5 sm:mb-6 md:mb-8">
              A fast-growing B2B fintech platform partnered with NexDyne to automate exception handling, fraud detection, and reconciliation — processing 100,000+ daily transactions with 99.9% accuracy and 85% auto-resolution.
            </p>
            
            {/* PDF Download Button */}
            <CaseStudyPDFButton
              title="Scaling payment operations 10x without headcount growth"
              industry="Financial Services"
              summary="A fast-growing B2B fintech platform partnered with NexDyne to automate exception handling, fraud detection, and reconciliation — processing 100,000+ daily transactions with 99.9% accuracy and 85% auto-resolution."
              challenge="A fast-growing B2B fintech platform was buckling under its own success. Daily transaction volume had grown from 8,000 to over 100,000 in eighteen months, and the operations team was still manually handling exceptions, fraud alerts, and reconciliation breaks across the platform's payment rails. Operators were spending evenings and weekends working through queues that never emptied, and the median resolution time on a payment exception had crept past four hours — long enough that customer-success was fielding angry calls before operations could even triage. Hiring more operators was not a sustainable answer: training a new operator to the platform's compliance standard took six months, and salary inflation in the New York fintech market was outrunning the company's unit economics. Leadership saw clearly that the next growth curve required a fundamentally different operating model — one in which platform intelligence absorbed routine exceptions and human operators worked only the genuinely complex cases that required judgment."
              solution="NexDyne built an AI-driven payment operations platform that automates exception handling, fraud triage, and reconciliation end-to-end. We started with a six-week diagnostic across the operations floor, mapping the full taxonomy of exception types, the resolution playbook for each, and the points where a human's judgment was actually required versus where the operator was simply executing rules. We then built an intelligent rules engine that classifies every incoming exception against the platform's policy, executes the appropriate resolution workflow automatically, and only escalates the genuine edge cases to human operators with full context attached. A real-time fraud detection layer scores every transaction against the platform's historical fraud patterns, blocks the highest-risk activity inline, and surfaces ambiguous cases to a fraud-analyst review queue. Reconciliation runs continuously rather than as a batch end-of-day job, and a unified operator dashboard gives the team a single pane to manage the cases that do reach them — with full audit trails for compliance review. Rollout was phased by exception type, starting with the highest-volume, lowest-risk categories and expanding outward as confidence built."
              results={[
                "10x volume capacity — 100,000+ daily transactions processed with the same operations headcount",
                "85% auto-resolution rate on payment exceptions, with the rest escalated to human operators",
                "99.9% accuracy across automated reconciliation and payment processing",
                "Median exception resolution time reduced from over four hours to 18 minutes"
              ]}
              variant="hero"
            />
          </motion.div>
        </div>
      </section>

      {/* DZ10 Stats Section */}
      <section className="py-10 sm:py-12 lg:py-16 bg-base border-t border-white/10">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {[
              { metric: "10x", label: "volume capacity", sublabel: "with the same operations headcount" },
              { metric: "85%", label: "auto-resolution", sublabel: "of payment exceptions handled by the platform" },
              { metric: "99.9%", label: "accuracy rate", sublabel: "across reconciliation and payment processing" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-2 border-primary/50 pl-8"
              >
                <div className="text-6xl font-medium text-primary mb-2">{stat.metric}</div>
                <div className="text-lg text-white">{stat.label}</div>
                <div className="text-sm text-white/60">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DZ10 Sticky Navigation */}
      <nav className="sticky top-20 bg-base text-white z-40 border-y border-white/10">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="flex items-center gap-1">
            <a href="#opportunity" className="px-4 sm:px-5 md:px-6 py-3 sm:py-4 text-sm font-medium hover:bg-white/5 transition-colors hover:text-primary">
              THE OPPORTUNITY
            </a>
            <a href="#solution" className="px-4 sm:px-5 md:px-6 py-3 sm:py-4 text-sm font-medium hover:bg-white/5 transition-colors hover:text-primary">
              THE SOLUTION
            </a>
            <a href="#impact" className="px-4 sm:px-5 md:px-6 py-3 sm:py-4 text-sm font-medium hover:bg-white/5 transition-colors hover:text-primary">
              THE IMPACT
            </a>
          </div>
        </div>
      </nav>

      {/* DZ10 Opportunity Section */}
      <section id="opportunity" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-primary">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/80 mb-4 sm:mb-6 block">
              The Opportunity
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white max-w-4xl leading-tight">
              Breaking the manual operations bottleneck without breaking unit economics
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-16 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-charcoal/80 mb-6">
              A fast-growing B2B fintech platform was confronting the operational consequences of its own success. Daily transaction volume had grown from roughly 8,000 to more than 100,000 in eighteen months as enterprise customers onboarded onto the platform's payment APIs, and the operations team was still handling exceptions, fraud alerts, and reconciliation breaks the same way it had at one-tenth the scale.
            </p>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              Operators were spending evenings and weekends working through case queues that never emptied. The median resolution time on a payment exception had crept past four hours — long enough that customer-success was fielding angry calls from enterprise CFOs before operations could even triage. Reconciliation, which had once fit comfortably into a daily batch process, now spilled into the next business day and occasionally into the day after that.
            </p>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              The obvious answer — hire more operators — was not actually viable. Training a new operator to the platform's compliance standard took six months. Salary inflation in the New York fintech market was outrunning the unit economics of the business, and the COO knew that a 10x headcount plan would compress margins below what investors would tolerate. Worse, even a fully staffed team would not solve the underlying problem: the work was repetitive, classification-heavy, and increasingly the kind of work that platform intelligence could absorb.
            </p>
            <p className="text-base leading-relaxed text-charcoal/70">
              Leadership recognized that the next growth curve required a fundamentally different operating model — one in which the platform itself absorbed routine exceptions and human operators worked only the genuinely complex cases that required judgment. The choice was not whether to automate, but how to do so without compromising the platform's compliance posture or the trust of its enterprise customers.
            </p>
          </div>
        </div>
      </section>

      {/* DZ10 Quote Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-base">
        <div className="container px-4 sm:px-6 md:px-12 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary leading-tight mb-5 sm:mb-6 md:mb-8">
              "We've moved from firefighting mode to strategic growth. The automation platform has given us the confidence to scale aggressively without scaling operational risk."
            </blockquote>
            <div className="text-base text-white">
              <div className="font-semibold">— Rachel Chen</div>
              <div className="text-white/60">VP of Operations</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DZ10 Solution Section */}
      <section id="solution" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-primary">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/80 mb-4 sm:mb-6 block">
              The Solution
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white max-w-4xl leading-tight">
              Building an AI-driven payment operations platform
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-16 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-charcoal/80 mb-6">
              We worked with the operations leadership team and the platform engineering organization to design and deploy an AI-driven operations platform that absorbs routine exceptions, surfaces real fraud signals, and reconciles continuously — leaving operators with only the cases that genuinely require human judgment.
            </p>

            <h3 className="text-2xl font-semibold text-charcoal mt-12 mb-6">Discovery and exception taxonomy</h3>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              The engagement opened with a six-week diagnostic across the operations floor in New York. Our team shadowed operators across every shift, instrumented the exception queue to capture inputs and resolution paths, and built a structured taxonomy of every exception type — sixty-three categories in all. For each category we mapped the resolution playbook the team was already using, identified the steps that were genuinely judgment-intensive versus rule-following, and quantified the volume and risk profile. The diagnostic revealed that roughly 85% of exceptions, by volume, fell into a small number of high-frequency categories whose resolution was almost entirely deterministic — exactly the right starting surface for automation.
            </p>

            <h3 className="text-2xl font-semibold text-charcoal mt-12 mb-6">Intelligent rules engine and fraud detection</h3>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              We built an intelligent rules engine that classifies every incoming exception against the platform's policy and executes the appropriate resolution workflow automatically. The engine is policy-driven — operators and compliance can edit the rules without engineering involvement — and every automated decision produces a structured audit record that compliance review can replay end-to-end. A real-time fraud detection layer, trained on the platform's historical fraud patterns and tuned with input from the fraud team, scores every transaction inline. The highest-risk activity is blocked at the gateway with operator notification; ambiguous cases land in a fraud-analyst review queue with the model's feature contributions surfaced so analysts can act quickly.
            </p>

            <h3 className="text-2xl font-semibold text-charcoal mt-12 mb-6">Continuous reconciliation and unified operator workspace</h3>
            <p className="text-base leading-relaxed text-charcoal/70">
              Reconciliation was rebuilt to run continuously rather than as a batch end-of-day job. As transactions clear across the platform's payment rails, the reconciliation engine matches them to ledger entries in near-real-time and surfaces breaks the moment they appear, dramatically shrinking the window between a problem and its detection. A unified operator workspace gives the team a single pane to manage the cases that do reach them — with case context, customer history, and recommended actions assembled in one view. Rollout was phased by exception category, starting with the highest-volume, lowest-risk types so the platform's automated decisions could be validated against operator behavior before expanding to more sensitive categories.
            </p>
          </div>
        </div>
      </section>

      {/* DZ10 Quote Section 2 */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-base">
        <div className="container px-4 sm:px-6 md:px-12 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary leading-tight mb-5 sm:mb-6 md:mb-8">
              "The platform doesn't just automate — it gives our operators a much better job. They spend their time on the cases that need a human, with all the context they need to act."
            </blockquote>
            <div className="text-base text-white">
              <div className="font-semibold">— Daniel Park</div>
              <div className="text-white/60">Director of Payment Operations</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DZ10 Impact Section */}
      <section id="impact" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-primary">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/80 mb-4 sm:mb-6 block">
              The Impact
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white max-w-4xl leading-tight">
              10x growth absorbed without headcount growth, with risk down and operator quality of life up
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-16 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-charcoal/80 mb-6">
              Within twelve months of full rollout, the AI-driven operations platform had absorbed an order-of-magnitude growth in transaction volume while measurably improving accuracy, fraud posture, and operator experience.
            </p>

            <h3 className="text-2xl font-semibold text-charcoal mt-12 mb-6">Volume capacity and unit economics</h3>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              The platform now processes more than 100,000 daily transactions with the same operations headcount that previously handled 8,000 — a 10x increase in capacity. Operations cost per transaction declined sharply, restoring the unit economics the business needed to support its enterprise growth plan. The COO's hiring plan, which had originally projected a tripling of the operations team over twenty-four months, was rebuilt around targeted senior hires in fraud analysis and compliance rather than line operators.
            </p>

            <h3 className="text-2xl font-semibold text-charcoal mt-12 mb-6">Auto-resolution and resolution time</h3>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              Across the highest-volume exception categories, the platform now resolves 85% of cases automatically without operator involvement. The remaining 15% — the cases that genuinely require judgment — reach operators with full context attached, and median resolution time across the entire queue dropped from over four hours to 18 minutes. Customer-success calls about delayed exceptions dried up almost entirely.
            </p>

            <h3 className="text-2xl font-semibold text-charcoal mt-12 mb-6">Accuracy, fraud posture, and compliance</h3>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              Reconciliation accuracy reached 99.9% across automated processing, exceeding the manual baseline by a meaningful margin and removing the long tail of human-introduced errors that compliance had previously needed to investigate. Inline fraud blocking eliminated several high-value loss scenarios within the first quarter of deployment, and the platform's structured audit trail materially shortened both internal compliance review and external regulatory exam preparation.
            </p>

            <h3 className="text-2xl font-semibold text-charcoal mt-12 mb-6">Operator experience and retention</h3>
            <p className="text-base leading-relaxed text-charcoal/70">
              Perhaps the most striking second-order effect was on the operations team itself. With routine work absorbed by the platform, operators spent their time on genuinely interesting cases — fraud investigations, complex multi-party disputes, novel exception types that fed back into the rules engine. Operator engagement scores rose, voluntary attrition fell to its lowest level in three years, and several operators moved into platform-product roles where they shape the next generation of automation.
            </p>
          </div>
        </div>
      </section>

      {/* DZ10 Contact Form Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-base">
        <div className="container px-4 sm:px-6 md:px-12">
          <CaseStudyContactForm caseStudyTitle="Fintech Payment Automation" />
        </div>
      </section>

      {/* DZ10 Related Cases Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block">
              Related Case Studies
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-charcoal">More success stories</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "How RPA eliminated 10,000+ hours of manual work at a major bank",
                industry: "Financial Services",
                metric: "10K+",
                metricLabel: "Hours saved",
                image: "/case-banker-meeting.c53f3999.jpg",
                link: "/cases/bank-process-automation"
              },
              {
                title: "Automating wealth management operations for better client experiences",
                industry: "Financial Services",
                metric: "45%",
                metricLabel: "Cost reduction",
                image: "/case-advisor-client.eb15e04e.jpg",
                link: "/cases/wealth-management-automation"
              },
              {
                title: "Accelerating insurance claims processing with intelligent automation",
                industry: "Financial Services",
                metric: "85%",
                metricLabel: "Faster processing",
                image: "/case-insurance-office.f039a4a1.jpg",
                link: "/cases/insurance-claims-processing"
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
                  <div className="aspect-[4/3] overflow-hidden mb-6 rounded-md relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-base/90 px-3 py-1 rounded-full">
                      <span className="text-xs font-semibold text-primary">{item.metric}</span>
                      <span className="text-xs text-white/70 ml-1">{item.metricLabel}</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">{item.industry}</span>
                  <h3 className="text-xl font-semibold text-charcoal mt-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-primary text-sm font-semibold flex items-center gap-1 mt-4 group-hover:gap-2 transition-all">
                    Read case study <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/cases">
              <Button variant="outline" className="border-base/20 text-charcoal hover:bg-base/10 px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-base font-semibold transition-all">
                <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
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
