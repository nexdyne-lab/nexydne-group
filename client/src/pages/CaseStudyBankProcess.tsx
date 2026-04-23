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

export default function CaseStudyBankProcess() {
  return (
    <div className="min-h-screen bg-base text-white selection:bg-primary selection:text-white">
      <SEO 
        title="Bank Process Automation | Case Study | NexDyne Technologies" 
        description="How RPA eliminated 10,000+ hours of manual work at a major bank, achieving 75% reduction in manual compliance work."
        canonical="/cases/bank-process-automation"
      />
      <Navigation />
      
      {/* DZ10 Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/case-banker-meeting.c53f3999.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-base via-base/60 to-base"></div>
        
        <div className="container relative z-10 px-4 md:px-12">
          <Breadcrumbs />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block">
              Case Study · Financial Services
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-5 sm:mb-3 md:mb-4">
              Transforming compliance and <span className="text-primary">KYC processing</span> at a major US bank
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-3xl mb-5 sm:mb-6 md:mb-8">
              A 220-employee regional bank automated KYC processing and regulatory reporting, achieving 75% reduction in manual compliance work while improving accuracy to 99.8%.
            </p>
            
            {/* PDF Download Button */}
            <CaseStudyPDFButton
              title="Transforming compliance and KYC processing at a major US bank"
              industry="Financial Services"
              summary="A 220-employee regional bank automated KYC processing and regulatory reporting, achieving 75% reduction in manual compliance work while improving accuracy to 99.8%."
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
      <section className="py-10 sm:py-12 lg:py-16 bg-base border-t border-white/10">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {[
              { metric: "75%", label: "reduction in", sublabel: "manual compliance work" },
              { metric: "5,400", label: "hours saved", sublabel: "annually through automation" },
              { metric: "99.8%", label: "accuracy rate", sublabel: "in regulatory reporting" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-2 border-primary/50 pl-8"
              >
                <div className="text-6xl font-bold text-primary mb-2">{stat.metric}</div>
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
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/80 mb-4 sm:mb-6 block">
              The Opportunity
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-tight">
              Managing regulatory complexity in a rapidly evolving market
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-16 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-charcoal/80 mb-6">
              A 220-employee regional bank headquartered in Charlotte was facing mounting pressure from federal regulators to strengthen Know Your Customer processes and improve the accuracy of regulatory reporting. With 78,000 retail customers and 4,200 commercial accounts, the bank's compliance team was overwhelmed by manual document verification and data entry tasks.
            </p>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              The existing KYC process required compliance officers to manually review identity documents, verify customer information across multiple databases, and complete extensive forms for each new account. Processing a single corporate account could take up to two weeks, creating friction in customer onboarding and putting the bank at a competitive disadvantage.
            </p>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              Regulatory reporting was equally challenging. The bank had to submit dozens of reports to the OCC, Federal Reserve, and FinCEN monthly, each requiring data extraction from multiple systems, manual reconciliation, and quality checks. Errors in reporting had resulted in regulatory fines and reputational damage, making compliance automation a strategic priority for senior leadership.
            </p>
            <p className="text-base leading-relaxed text-charcoal/70">
              The Chief Compliance Officer recognized that the bank needed to fundamentally transform its approach to regulatory compliance—moving from reactive, manual processes to proactive, automated systems that could scale with business growth while maintaining the highest standards of accuracy and regulatory adherence.
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
              "Compliance cannot be a bottleneck to growth. We needed systems that could handle increasing volume while actually improving our risk management capabilities."
            </blockquote>
            <div className="text-base text-white">
              <div className="font-semibold">— Michael Torres</div>
              <div className="text-white/60">Chief Compliance Officer</div>
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
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/80 mb-4 sm:mb-6 block">
              The Solution
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-tight">
              Building an intelligent compliance automation platform
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-16 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-charcoal/80 mb-6">
              We worked with the bank's compliance, technology, and operations teams to design an end-to-end automation platform that transformed KYC processing and regulatory reporting while maintaining rigorous controls and audit trails.
            </p>
            
            <h3 className="text-2xl font-bold text-charcoal mt-12 mb-6">Intelligent document processing</h3>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              The platform uses optical character recognition and machine learning to automatically extract data from identity documents, business registration certificates, and financial statements. The system verifies document authenticity, cross-references information against OFAC, state databases, and credit bureaus, and flags inconsistencies for human review. What previously took compliance officers hours now happens in minutes, with higher accuracy than manual processing.
            </p>

            <h3 className="text-2xl font-bold text-charcoal mt-12 mb-6">Automated risk assessment</h3>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              We implemented a risk scoring engine that analyzes customer profiles against regulatory requirements and the bank's risk appetite. The system automatically assigns risk ratings, determines appropriate due diligence levels, and routes high-risk cases to senior compliance officers. Machine learning models continuously improve risk detection by learning from historical cases and regulatory guidance updates.
            </p>

            <h3 className="text-2xl font-bold text-charcoal mt-12 mb-6">Regulatory reporting automation</h3>
            <p className="text-base leading-relaxed text-charcoal/70">
              The platform automatically generates regulatory reports by extracting data from core banking systems, applying business rules, and performing validation checks. Reports are generated on schedule with complete audit trails showing data lineage and transformation logic. The system alerts compliance teams to potential issues before submission deadlines, eliminating last-minute scrambles and reducing regulatory risk.
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
              "The platform doesn't just save time—it makes us smarter about risk. We catch issues earlier and make better decisions faster."
            </blockquote>
            <div className="text-base text-white">
              <div className="font-semibold">— Lisa Chen</div>
              <div className="text-white/60">Head of Financial Crime Compliance</div>
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
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/80 mb-4 sm:mb-6 block">
              The Impact
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-tight">
              Achieving operational excellence and regulatory confidence
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-16 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-charcoal/80 mb-6">
              Within one year of deployment, the compliance automation platform delivered transformative results across efficiency, accuracy, and risk management.
            </p>

            <h3 className="text-2xl font-bold text-charcoal mt-12 mb-6">Operational efficiency</h3>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              KYC processing time dropped from an average of 12 days to 2 days for retail customers and from 14 days to 3 days for corporate accounts. The compliance team's capacity increased by 180% without adding headcount, enabling the bank to support customer acquisition targets. Over 5,400 hours of manual work were eliminated annually, allowing compliance officers to focus on complex investigations and strategic risk management.
            </p>

            <h3 className="text-2xl font-bold text-charcoal mt-12 mb-6">Accuracy and risk management</h3>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              Regulatory reporting accuracy improved to 99.8%, eliminating the errors that had previously resulted in fines and regulatory scrutiny. The bank has had zero reporting violations since platform deployment. Risk detection improved significantly, with the system identifying 32% more high-risk customers than the previous manual process, enabling proactive risk mitigation.
            </p>

            <h3 className="text-2xl font-bold text-charcoal mt-12 mb-6">Customer experience</h3>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              Faster KYC processing translated directly to improved customer satisfaction. Corporate clients specifically cited onboarding speed as a differentiator in choosing the bank over competitors. The bank's Net Promoter Score among business customers increased by 18 points, with onboarding experience cited as a key driver.
            </p>

            <h3 className="text-2xl font-bold text-charcoal mt-12 mb-6">Strategic positioning</h3>
            <p className="text-base leading-relaxed text-charcoal/70">
              The platform positioned the bank as a compliance leader in the regional banking market. The OCC has cited the bank's systems as best practice examples during examinations, and the bank now advises American Bankers Association working groups on compliance automation standards. The $135,000 investment in the platform generated annual cost savings of $385,000 through reduced manual work and eliminated fines, achieving a 265% ROI over 24 months. The Chief Compliance Officer estimates that the platform has created a sustainable competitive advantage worth significantly more than the direct cost savings.
            </p>
          </div>
        </div>
      </section>

      {/* DZ10 Contact Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-base">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
              Get In Touch
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">Our experts</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
            {[
              {
                name: "Thomas Anderson",
                location: "New York",
                description: "Leads our financial services practice, specializing in regulatory compliance automation, BSA/AML systems, and digital banking transformation for US banks.",
                image: "/author-female-2.55e29921.jpg"
              },
              {
                name: "Patricia Williams",
                location: "Charlotte",
                description: "Specializes in intelligent automation for financial institutions, with deep expertise in OCC/Fed compliance, fraud detection, and process optimization.",
                image: "/author-male-2.afcf176d.jpg"
              }
            ].map((expert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white text-charcoal p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl"
              >
                <div className="flex items-start gap-4">
                  <img className="w-20 h-20 rounded-full object-cover flex-shrink-0" src={expert.image} alt={expert.name} />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{expert.name}</h3>
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
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block">
              Related Case Studies
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal">More success stories</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Accelerating insurance claims processing with intelligent automation",
                industry: "Financial Services",
                metric: "85%",
                metricLabel: "Faster processing",
                image: "/case-insurance-office.f039a4a1.jpg",
                link: "/cases/insurance-claims-processing"
              },
              {
                title: "Building a scalable payment processing system for a fintech startup",
                industry: "Financial Services",
                metric: "100K+",
                metricLabel: "Daily transactions",
                image: "/case-financial-advisor.7bb94f0c.jpg",
                link: "/cases/fintech-payment-automation"
              },
              {
                title: "How contract automation transformed a leading law firm's operations",
                industry: "Professional Services",
                metric: "65%",
                metricLabel: "Faster turnaround",
                image: "/case-law-firm-meeting.401c96db.jpg",
                link: "/cases/law-firm-contract-automation"
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
                  <div className="aspect-[4/3] overflow-hidden mb-6 rounded-lg sm:rounded-xl relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-base/90 px-3 py-1 rounded-full">
                      <span className="text-xs font-bold text-primary">{item.metric}</span>
                      <span className="text-xs text-white/70 ml-1">{item.metricLabel}</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">{item.industry}</span>
                  <h3 className="text-xl font-bold text-charcoal mt-2 group-hover:text-primary transition-colors">
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
