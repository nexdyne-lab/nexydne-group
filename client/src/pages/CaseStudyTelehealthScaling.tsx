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

export default function CaseStudyTelehealthScaling() {
  return (
    <div className="min-h-screen bg-base text-white selection:bg-primary selection:text-white">
      <SEO 
        title="Telehealth Scaling | Case Study | NexDyne Technologies" 
        description="How intelligent automation enabled 5x patient volume growth with only 2x staff increase while maintaining quality and compliance."
        canonical="/cases/telehealth-scaling"
      />
      <Navigation />
      
      {/* DZ10 Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/case-telehealth.7a9b3c82.jpg')] bg-cover bg-center opacity-30"></div>
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
              Case Study · Healthcare
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-bold tracking-tight leading-[1.05] mb-5 sm:mb-3 md:mb-4">
              Scaling telehealth <span className="text-primary">5x</span> while maintaining quality
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-3xl mb-5 sm:mb-6 md:mb-8">
              A 110-employee telehealth provider automated clinical workflows and scheduling, enabling 5x patient volume growth with only 2x staff increase.
            </p>
            
            {/* PDF Download Button */}
            <CaseStudyPDFButton
              title="Scaling telehealth 5x while maintaining quality"
              industry="Healthcare"
              summary="A 110-employee telehealth provider automated clinical workflows and scheduling, enabling 5x patient volume growth with only 2x staff increase."
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
              { metric: "5x", label: "patient volume", sublabel: "growth in 20 months" },
              { metric: "78%", label: "reduction", sublabel: "in administrative time per visit" },
              { metric: "94%", label: "patient satisfaction", sublabel: "with scheduling and access" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-2 border-primary/50 pl-8"
              >
                <div className="text-6xl font-serif font-bold text-primary mb-2">{stat.metric}</div>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white max-w-4xl leading-tight">
              Meeting explosive demand without sacrificing quality or burning out staff
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-16 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-charcoal/80 mb-6">
              A Denver-based telehealth platform specializing in mental health and chronic disease management experienced 400% patient growth during an 18-month period, driven by increased consumer acceptance of virtual care and expanded insurance coverage. With 110 employees serving 45,000 active patients, the organization was struggling to scale operations to meet demand.
            </p>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              Clinical and administrative staff spent 60-70% of their time on scheduling, documentation, insurance verification, and care coordination rather than direct patient care. Providers managed scheduling conflicts manually, often requiring multiple phone calls and emails to confirm appointments. Clinical documentation consumed 25-30 minutes per visit, reducing the number of patients each provider could see daily. Insurance verification and prior authorization processes created delays that frustrated patients and providers alike.
            </p>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              The organization faced a critical decision. Meeting projected demand would require hiring 180 additional staff over the next two years, significantly increasing costs and straining management capacity. Staff burnout was already a concern, with providers citing administrative burden as a primary source of dissatisfaction. Patient wait times for appointments had increased from 3 days to 12 days, threatening the organization's competitive positioning and mission of providing accessible care.
            </p>
            <p className="text-base leading-relaxed text-charcoal/70">
              Leadership recognized that traditional scaling approaches were unsustainable. The organization needed intelligent automation that could handle routine administrative tasks while preserving the personalized care that differentiated their service. The solution had to integrate with existing EHR systems, maintain HIPAA compliance, support multiple insurance payers, and enhance rather than complicate the patient and provider experience.
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
            <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-primary leading-tight mb-5 sm:mb-6 md:mb-8">
              "Our providers became healthcare professionals to help patients, not to fight with scheduling systems and insurance forms. We were losing the battle against administrative complexity."
            </blockquote>
            <div className="text-base text-white">
              <div className="font-semibold">— Dr. Sarah Martinez</div>
              <div className="text-white/60">Chief Medical Officer</div>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white max-w-4xl leading-tight">
              Intelligent automation that handles complexity while preserving the human touch
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-16 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-charcoal/80 mb-6">
              We partnered with the telehealth provider to design and implement an intelligent operations platform that automated administrative workflows while maintaining clinical quality and patient satisfaction. The $78,000 investment focused on creating seamless integration with existing systems and ensuring compliance with healthcare regulations.
            </p>

            <h3 className="text-2xl font-serif font-bold text-charcoal mt-12 mb-6">Intelligent scheduling and capacity management</h3>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              The platform implemented AI-powered scheduling that optimized provider capacity while respecting patient preferences and clinical requirements. Machine learning algorithms predicted no-show probability and automatically overbooked appropriately to maximize utilization. The system handled rescheduling requests automatically, finding alternative slots that met patient constraints without provider intervention. Patients received automated reminders via their preferred communication channel, with the system adapting reminder timing based on individual response patterns. Real-time capacity monitoring identified bottlenecks and suggested schedule adjustments to reduce wait times.
            </p>

            <h3 className="text-2xl font-serif font-bold text-charcoal mt-12 mb-6">Automated insurance verification and prior authorization</h3>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              The platform integrated with insurance payer systems to verify coverage and benefits in real-time during scheduling. For services requiring prior authorization, the system automatically submitted requests with supporting clinical documentation, tracked approval status, and escalated delays to staff attention. Patients received upfront cost estimates based on their specific insurance coverage, reducing billing surprises and improving collections. The automation reduced insurance-related delays from an average of 5.2 days to 8 hours, significantly improving patient access.
            </p>

            <h3 className="text-2xl font-serif font-bold text-charcoal mt-12 mb-6">Clinical documentation assistance</h3>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              Natural language processing technology transcribed provider-patient conversations in real-time, generating structured clinical notes that providers could review and approve. The system extracted relevant information including symptoms, diagnoses, treatment plans, and follow-up requirements, populating EHR templates automatically. Providers spent 5-7 minutes reviewing and finalizing notes rather than 25-30 minutes creating them from scratch. The platform learned from provider edits, continuously improving note quality and reducing review time.
            </p>

            <h3 className="text-2xl font-serif font-bold text-charcoal mt-12 mb-6">Care coordination and follow-up automation</h3>
            <p className="text-base leading-relaxed text-charcoal/70">
              The system automated routine care coordination tasks including prescription refill requests, lab order follow-up, and specialist referrals. Patients received automated check-ins between visits based on their care plan, with responses analyzed for concerning patterns that triggered provider review. The platform identified patients overdue for follow-up appointments and automatically reached out with scheduling options. Care team members received prioritized task lists highlighting patients requiring attention, enabling proactive rather than reactive care management.
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
            <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-primary leading-tight mb-5 sm:mb-6 md:mb-8">
              "The platform handles all the administrative friction that was preventing us from scaling. Our providers now spend 80% of their time on patient care instead of 40%."
            </blockquote>
            <div className="text-base text-white">
              <div className="font-semibold">— Michael Chen</div>
              <div className="text-white/60">VP of Operations</div>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white max-w-4xl leading-tight">
              Achieving sustainable growth while improving patient and provider experience
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-16 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-charcoal/80 mb-6">
              Within 20 months of deployment, the operations automation platform enabled the organization to scale patient volume 5x while maintaining clinical quality and improving both patient and provider satisfaction.
            </p>

            <h3 className="text-2xl font-serif font-bold text-charcoal mt-12 mb-6">Operational scalability and efficiency</h3>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              Active patient population grew from 45,000 to 225,000 while staff increased from 110 to 220—a 5x volume increase supported by 2x headcount growth. Provider productivity increased by 140%, with each clinician handling an average of 28 patient encounters daily versus 12 previously. Administrative time per visit decreased by 78%, from 42 minutes to 9 minutes. The organization eliminated the need for 85 administrative positions that would have been required under the previous operating model, generating annual savings of $4.8 million.
            </p>

            <h3 className="text-2xl font-serif font-bold text-charcoal mt-12 mb-6">Patient access and satisfaction</h3>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              Average wait time for appointments decreased from 12 days to 2.5 days despite 5x volume growth. No-show rates dropped by 62% through intelligent reminder systems and easier rescheduling. Patient satisfaction scores increased by 31 points, with scheduling convenience and provider availability cited as primary improvements. The organization's Net Promoter Score improved from 48 to 76, placing it in the top decile for telehealth providers. Patient retention rates increased by 24 percentage points, driven by improved access and care coordination.
            </p>

            <h3 className="text-2xl font-serif font-bold text-charcoal mt-12 mb-6">Provider satisfaction and retention</h3>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              Provider satisfaction scores improved by 38 points, with administrative burden reduction cited as the primary driver. Clinician turnover decreased from 28% annually to 11%, significantly below industry averages. Providers reported spending 80% of their time on direct patient care versus 40% previously, improving job satisfaction and clinical outcomes. The organization became an employer of choice in the telehealth market, with provider applications increasing 3x and enabling selective hiring of top talent.
            </p>

            <h3 className="text-2xl font-serif font-bold text-charcoal mt-12 mb-6">Financial performance and strategic positioning</h3>
            <p className="text-base leading-relaxed text-charcoal/70">
              The $78,000 investment generated annual benefits of $5.3 million through avoided hiring costs ($4.8 million) and improved collections ($500,000), representing a 290% ROI over 18 months. More strategically, the platform enabled the organization to achieve profitable unit economics at scale, with cost per visit decreasing by 58% despite wage increases. The organization secured $25 million in Series B funding, with investors specifically citing operational excellence and scalability as key factors. Management projects the platform will support growth to 500,000 active patients without proportional increases in administrative staff, positioning the organization as a category leader in accessible, affordable telehealth services.
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white">Our experts</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
            {[
              {
                name: "Dr. Sarah Martinez",
                location: "Denver",
                description: "Leads healthcare automation practice with focus on telehealth platforms, clinical workflow optimization, and patient engagement systems.",
                image: "/author-female-2.55e29921.jpg"
              },
              {
                name: "Michael Chen",
                location: "Seattle",
                description: "Specializes in healthcare operations automation, EHR integration, and HIPAA-compliant AI applications for clinical and administrative workflows.",
                image: "/author-female-2.55e29921.jpg"
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
                    <h3 className="text-2xl font-serif font-bold mb-2">{expert.name}</h3>
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

      {/* DZ10 Contact Form Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <CaseStudyContactForm caseStudyTitle="Telehealth Scaling" />
        </div>
      </section>

      {/* DZ10 Related Cases Section */}
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
              Related Case Studies
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white">More success stories</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Improving patient engagement for a healthcare provider",
                industry: "Healthcare",
                metric: "40%",
                metricLabel: "Higher satisfaction",
                image: "/case-patient-engagement.7a9b3c82.jpg",
                link: "/cases/healthcare-patient-engagement"
              },
              {
                title: "Optimizing clinical workflows for a hospital system",
                industry: "Healthcare",
                metric: "68%",
                metricLabel: "Less documentation time",
                image: "/case-hospital-workflow.8b2c4d91.jpg",
                link: "/cases/hospital-workflow-automation"
              },
              {
                title: "Building data analytics for population health management",
                industry: "Healthcare",
                metric: "34%",
                metricLabel: "Fewer readmissions",
                image: "/case-healthcare-analytics.5d4e2f73.jpg",
                link: "/cases/healthcare-analytics"
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
                  <div className="aspect-[4/3] overflow-hidden mb-6 rounded-lg sm:rounded-xl relative bg-white/5">
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
                  <h3 className="text-xl font-serif font-bold text-white mt-2 group-hover:text-primary transition-colors">
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
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-base font-semibold transition-all bg-transparent">
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
