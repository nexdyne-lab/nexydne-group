import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, Download } from 'lucide-react';
import { CaseStudyPDFButton } from "@/components/CaseStudyPDFButton";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BackToTop } from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

export default function CaseStudyAccountingAudit() {
  return (
    <div className="min-h-screen bg-background text-charcoal selection:bg-primary selection:text-white">
      <SEO
        title="Accounting Audit Automation | Case Study | NexDyne Technologies"
        description="How audit automation helped an accounting firm scale 2x without hiring, reducing audit time by 62% while improving quality."
        canonical="/cases/accounting-audit-automation"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative w-full bg-background overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(70% 60% at 82% 14%, rgba(224,76,44,0.05) 0%, transparent 55%), radial-gradient(55% 55% at 6% 95%, rgba(111,68,163,0.045) 0%, transparent 55%)" }} />
        <div className="relative mx-auto max-w-[1400px] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <Breadcrumbs />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center min-h-[50vh] py-24 lg:py-28"
          >
            <div className="max-w-[920px]">
              <div className="flex items-center gap-3 mb-6">
                <span className="block h-[3px] w-9 bg-primary" />
                <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Case Study · Professional Services</span>
              </div>
              <h1 className="text-charcoal font-bold tracking-[-0.035em] leading-[1.05] text-[clamp(2.2rem,4.8vw,3.8rem)]">
                Transforming audit quality through AI-powered automation
              </h1>
              <p className="mt-7 text-[1.1rem] md:text-[1.2rem] leading-[1.55] text-muted-foreground max-w-[62ch]">
                A 280-employee accounting firm deployed intelligent audit automation, reducing audit time by 62% while improving quality and expanding service capacity by 85%.
              </p>

              {/* PDF Download Button */}
            <CaseStudyPDFButton
              title="Transforming audit quality through AI-powered automation"
              industry="Professional Services"
              summary="A 280-employee accounting firm deployed intelligent audit automation, reducing audit time by 62% while improving quality and expanding service capacity by 85%."
              challenge="A mid-sized public accounting firm with 240 professionals across four offices was hitting a capacity ceiling in its audit practice. Audit engagements were growing in complexity as clients adopted new ERP systems, distributed operations, and revenue recognition standards under ASC 606 — and the firm's testing procedures were still largely manual, relying on sampling, spreadsheet recalculation, and binder-based documentation. Senior associates and managers were working unsustainable hours during busy season, peer reviews flagged inconsistencies in workpaper documentation, and the firm was turning down new audit clients because partners couldn't supervise additional engagements. Leadership had set a goal of doubling audit revenue over three years, but the talent market made it impossible to hire to that goal — meaning the firm needed to dramatically increase capacity per professional while simultaneously improving quality and PCAOB-style documentation standards."
              solution="NexDyne deployed a comprehensive audit automation and analytics platform designed for mid-market public accounting practice. We started with a process diagnostic across the firm's four largest industry verticals — manufacturing, healthcare services, construction, and professional services — identifying the procedures most amenable to automation. The platform automates journal entry testing on full populations rather than samples, performs analytical procedures with anomaly detection on financial statement line items, automates confirmation generation and tracking, and produces structured workpaper documentation that meets the firm's review standards. Direct API connections to common ERP and accounting systems eliminate the data-extraction step that used to consume the first weeks of every engagement, and a dashboard gives engagement managers real-time visibility into procedure status across all in-flight audits. We trained the firm's professionals through a hands-on certification program and paired them with our consultants on the first ten engagements to ensure quality and adoption."
              results={[
                "62% faster audit completion time across automated procedures",
                "85% increase in audit capacity, enabling the firm to take on twice as many clients",
                "98% accuracy in automated testing procedures, with reduced peer-review findings",
                "Significant reduction in busy-season overtime and corresponding improvement in retention"
              ]}
              variant="hero"
            />
            </div>
          </motion.div>
        </div>
      </section>

      {/* DZ10 Stats Section */}
      <section className="py-10 sm:py-12 lg:py-16 bg-charcoal text-white border-t-2 border-primary">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {[
              { metric: "62%", label: "faster", sublabel: "audit completion time" },
              { metric: "85%", label: "increase", sublabel: "in audit capacity" },
              { metric: "98%", label: "accuracy", sublabel: "in automated testing procedures" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-2 border-primary/50 pl-8"
              >
                <div className="text-6xl font-bold text-white mb-2">{stat.metric}</div>
                <div className="text-lg text-white">{stat.label}</div>
                <div className="text-sm text-white/70">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DZ10 Sticky Navigation */}
      <nav className="sticky top-20 bg-background text-charcoal z-40 border-y border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="flex items-center gap-1">
            <a href="#opportunity" className="px-4 sm:px-5 md:px-6 py-3 sm:py-4 text-sm font-medium hover:bg-charcoal/5 transition-colors hover:text-primary">
              THE OPPORTUNITY
            </a>
            <a href="#solution" className="px-4 sm:px-5 md:px-6 py-3 sm:py-4 text-sm font-medium hover:bg-charcoal/5 transition-colors hover:text-primary">
              THE SOLUTION
            </a>
            <a href="#impact" className="px-4 sm:px-5 md:px-6 py-3 sm:py-4 text-sm font-medium hover:bg-charcoal/5 transition-colors hover:text-primary">
              THE IMPACT
            </a>
          </div>
        </div>
      </nav>

      {/* DZ10 Opportunity Section */}
      <section id="opportunity" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-charcoal text-white border-t-2 border-primary">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-amber mb-4 sm:mb-6 block">
              The Opportunity
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white max-w-4xl leading-tight">
              Competing against Big Four automation while maintaining boutique service quality
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-16 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-charcoal/80 mb-6">
              A Minneapolis-based accounting firm with 280 employees and $85 million in annual revenue specialized in audits for mid-market companies and private equity portfolio companies. While the firm's technical expertise and client service were excellent, audit economics were under pressure from Big Four competitors deploying sophisticated automation technologies.
            </p>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              Audit staff spent 60-70% of their time on routine testing procedures including transaction sampling, account reconciliation verification, and compliance testing. Senior auditors and partners devoted significant time to reviewing work papers and ensuring consistent application of audit procedures across engagements. The manual processes limited the firm's capacity to accept new audit clients without proportional staff increases, constraining growth and profitability.
            </p>
            <p className="text-base leading-relaxed text-charcoal/70">
              Leadership recognized that audit automation was becoming table stakes for competitive positioning. Clients increasingly expected audit efficiency that translated to lower fees, while regulatory standards demanded more comprehensive testing. The firm needed intelligent automation that could handle routine audit procedures while preserving the professional judgment and client relationships that differentiated their service from larger competitors.
            </p>
          </div>
        </div>
      </section>

      {/* DZ10 Quote Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 sm:px-6 md:px-12 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-charcoal leading-tight mb-5 sm:mb-6 md:mb-8">
              "Our auditors were spending most of their time on procedures that technology could handle better, faster, and more consistently than humans. We needed to free them to focus on judgment and client insight."
            </blockquote>
            <div className="text-base text-charcoal">
              <div className="font-semibold">— Patricia Williams</div>
              <div className="text-muted-foreground">Managing Partner, Audit Practice</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DZ10 Solution Section */}
      <section id="solution" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-charcoal text-white border-t-2 border-primary">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-amber mb-4 sm:mb-6 block">
              The Solution
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white max-w-4xl leading-tight">
              Intelligent audit automation that augments professional judgment
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-16 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-charcoal/80 mb-6">
              We partnered with the accounting firm to design and implement a comprehensive audit automation platform that handled routine testing procedures while preserving auditor oversight and professional judgment. The $185,000 investment focused on creating sophisticated automation capabilities while ensuring compliance with PCAOB and AICPA standards.
            </p>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              The platform automated data extraction from client accounting systems, performing comprehensive population testing rather than statistical sampling. Machine learning algorithms identified anomalies, unusual transactions, and potential misstatements for auditor review. The system generated standardized work papers with complete documentation of testing procedures and results, significantly reducing review time. Continuous auditing capabilities enabled real-time monitoring of client financial data throughout the year rather than point-in-time annual testing.
            </p>
            <p className="text-base leading-relaxed text-charcoal/70">
              Integration with audit methodology ensured consistent application of firm standards across all engagements. The platform learned from auditor decisions, continuously improving its ability to identify items requiring professional judgment versus routine confirmations. Comprehensive audit trails provided complete documentation for regulatory inspections and peer reviews.
            </p>
          </div>
        </div>
      </section>

      {/* DZ10 Impact Section */}
      <section id="impact" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-charcoal text-white border-t-2 border-primary">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-amber mb-4 sm:mb-6 block">
              The Impact
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white max-w-4xl leading-tight">
              From capacity constraints to competitive advantage
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-16 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-charcoal/80 mb-6">
              Within 30 months, the audit automation platform transformed the firm's service delivery and competitive positioning, delivering a 62% reduction in audit completion time and 85% increase in capacity. The $185,000 investment generated annual benefits of $4.8 million through increased audit capacity ($3.2M in additional revenue), efficiency improvements ($1.4M in time savings), and improved quality ($200K in avoided review costs), representing a 225% ROI over 30 months. The firm won 18 competitive audit engagements against Big Four competitors, with clients specifically citing audit efficiency and value as decision factors.
            </p>
          </div>
        </div>
      </section>

      {/* DZ10 Contact Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-muted-foreground mb-4 sm:mb-6 block">
              Get In Touch
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-charcoal">Our experts</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
            {[
              {
                name: "Patricia Williams",
                location: "Minneapolis",
                description: "Leads audit technology practice with focus on intelligent automation, continuous auditing, and PCAOB compliance for accounting firms.",
                image: "/author-female-2.55e29921.jpg"
              },
              {
                name: "James Chen",
                location: "Chicago",
                description: "Specializes in audit data analytics, anomaly detection algorithms, and integration with accounting system APIs.",
                image: "/author-male-2.afcf176d.jpg"
              }
            ].map((expert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white text-charcoal p-4 sm:p-6 md:p-8 rounded-md"
              >
                <div className="flex items-start gap-4">
                  <img className="w-20 h-20 rounded-full object-cover flex-shrink-0" src={expert.image} alt={expert.name} />
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{expert.name}</h3>
                    <p className="text-sm text-primary mb-4">{expert.location}</p>
                    <p className="text-base leading-relaxed text-charcoal/70">
                      {expert.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
                title: "How contract automation transformed a leading law firm's operations",
                industry: "Professional Services",
                metric: "65%",
                metricLabel: "Faster turnaround",
                image: "/case-law-firm-meeting.401c96db.jpg",
                link: "/cases/law-firm-contract-automation"
              },
              {
                title: "Transforming knowledge management for a global consulting firm",
                industry: "Professional Services",
                metric: "3x",
                metricLabel: "Faster insights",
                image: "/case-strategy-consulting.dfdd1294.jpg",
                link: "/cases/consulting-knowledge-management"
              },
              {
                title: "How RPA eliminated 10,000+ hours of manual work at a major bank",
                industry: "Financial Services",
                metric: "10K+",
                metricLabel: "Hours saved",
                image: "/case-banker-meeting.c53f3999.jpg",
                link: "/cases/bank-process-automation"
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
                    <div className="absolute top-4 left-4 bg-charcoal/90 px-3 py-1 rounded-full">
                      <span className="text-xs font-semibold text-amber">{item.metric}</span>
                      <span className="text-xs text-white/70 ml-1">{item.metricLabel}</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">{item.industry}</span>
                  <h3 className="text-xl font-semibold text-charcoal mt-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-primary text-sm font-semibold flex items-center gap-1 mt-4 group-hover:gap-2 transition-[gap]">
                    Read case study <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/cases">
              <Button variant="outline" className="border-border text-charcoal hover:bg-charcoal/5 px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-base font-semibold transition">
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
