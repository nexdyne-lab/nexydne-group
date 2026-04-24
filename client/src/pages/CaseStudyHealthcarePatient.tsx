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

export default function CaseStudyHealthcarePatient() {
  return (
    <div className="min-h-screen bg-base text-white selection:bg-primary selection:text-white">
      <SEO 
        title="Healthcare Patient Engagement | Case Study | NexDyne Technologies" 
        description="How an AI-powered patient engagement platform improved satisfaction scores by 38% and reduced wait times by 45%."
        canonical="/cases/healthcare-patient-engagement"
      />
      <Navigation />
      
      {/* DZ10 Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/case-patient-engagement.7a9b3c82.jpg')] bg-cover bg-center opacity-30"></div>
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-5 sm:mb-3 md:mb-4">
              Building an AI-powered <span className="text-primary">patient engagement</span> platform
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-3xl mb-5 sm:mb-6 md:mb-8">
              A 4-clinic healthcare provider with 120 employees deployed intelligent automation to streamline patient communications, improving satisfaction scores by 38% and reducing wait times by 45%.
            </p>
            
            {/* PDF Download Button */}
            <CaseStudyPDFButton
              title="Building an AI-powered patient engagement platform"
              industry="Healthcare"
              summary="A 4-clinic healthcare provider with 120 employees deployed intelligent automation to streamline patient communications, improving satisfaction scores by 38% and reducing wait times by 45%."
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
              { metric: "38%", label: "increase in", sublabel: "patient satisfaction scores" },
              { metric: "45%", label: "reduction in", sublabel: "average wait times for appointments" },
              { metric: "85%", label: "appointment adherence", sublabel: "up from 62% with automated reminders" }
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
              Addressing patient communication gaps in a growing healthcare network
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-16 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-charcoal/80 mb-6">
              A regional healthcare provider operating 12 clinics across the Midwest was struggling with patient engagement and communication. Despite offering quality care, the organization faced persistent challenges with appointment no-shows, delayed test result notifications, and difficulty reaching patients for follow-up care.
            </p>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              The existing patient communication system relied heavily on manual phone calls from administrative staff. Appointment reminders were inconsistent, test results often took days to reach patients, and follow-up care instructions were frequently missed. With over 15,000 patient visits monthly across Illinois, Indiana, and Ohio, the administrative team was overwhelmed, leading to burnout and high staff turnover.
            </p>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              Patient satisfaction surveys revealed frustration with communication delays and difficulty accessing information. No-show rates averaged 38%, creating scheduling inefficiencies and revenue loss. Patients reported feeling disconnected from their care teams, particularly between visits when they had questions or concerns.
            </p>
            <p className="text-base leading-relaxed text-charcoal/70">
              The Chief Medical Officer recognized that improving patient engagement was critical not only for operational efficiency but also for health outcomes. Better communication could improve medication adherence, ensure timely follow-ups, and help patients feel more connected to their care—ultimately leading to better health results and higher satisfaction.
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
              "Our patients deserve better. They shouldn't have to wait days for test results or wonder if their appointment is still scheduled. Modern healthcare requires modern communication."
            </blockquote>
            <div className="text-base text-white">
              <div className="font-semibold">— Dr. Emily Rodriguez</div>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-tight">
              Deploying an intelligent patient engagement platform
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-16 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-charcoal/80 mb-6">
              We partnered with the healthcare provider to design and implement a comprehensive patient engagement platform that automated communications while maintaining the personal touch patients expect from their healthcare providers.
            </p>
            
            <h3 className="text-2xl font-bold text-charcoal mt-12 mb-6">Understanding patient needs</h3>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              The project began with extensive patient and staff research. We conducted focus groups with patients across different demographics in Chicago, Indianapolis, and Columbus, interviewed clinical and administrative staff, and analyzed communication patterns from the existing system. This research revealed that patients wanted timely, clear information delivered through their preferred channels—SMS for appointment reminders, secure messaging for test results, and phone calls for complex care instructions.
            </p>

            <h3 className="text-2xl font-bold text-charcoal mt-12 mb-6">Platform architecture</h3>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              We built a multi-channel engagement platform integrated with the provider's electronic health record system. The platform automatically sends appointment reminders via SMS 48 hours and 24 hours before scheduled visits, with patients able to confirm or reschedule through simple text responses. Test results are securely delivered through a patient portal with SMS notifications, and the system automatically flags urgent results for immediate staff follow-up.
            </p>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              The platform includes intelligent routing that escalates complex cases to human staff while handling routine communications automatically, with full HIPAA compliance and encrypted messaging. Natural language processing enables patients to ask common questions and receive immediate responses, with the system seamlessly transferring to staff when needed. All communications are logged in the EHR, ensuring care teams have complete visibility into patient interactions.
            </p>

            <h3 className="text-2xl font-bold text-charcoal mt-12 mb-6">Phased implementation</h3>
            <p className="text-base leading-relaxed text-charcoal/70">
              Rather than deploying across all clinics simultaneously, We recommended starting with two pilot locations. This allowed the team to refine messaging, test technical integrations, and train staff before scaling. Patient feedback was continuously incorporated, leading to improvements in message timing, language clarity, and response options. After three months of successful pilot operation, the platform was rolled out to all 12 clinics over a six-week period.
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
              "The platform doesn't replace our staff—it empowers them to focus on what matters most: providing compassionate, high-quality care to our patients."
            </blockquote>
            <div className="text-base text-white">
              <div className="font-semibold">— Maria Chen</div>
              <div className="text-white/60">Director of Patient Services</div>
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
              Transforming patient experience and operational efficiency
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-16 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-charcoal/80 mb-6">
              Within nine months of full deployment, the patient engagement platform delivered measurable improvements across patient satisfaction, operational efficiency, and health outcomes.
            </p>

            <h3 className="text-2xl font-bold text-charcoal mt-12 mb-6">Patient satisfaction and engagement</h3>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              Patient satisfaction scores increased by 38%, with communication quality cited as the primary driver. No-show rates dropped from 32% to 12%, significantly improving clinic efficiency and revenue. Appointment adherence for chronic disease management improved from 62% to 85%, leading to better health outcomes for patients with diabetes, hypertension, and other ongoing conditions.
            </p>

            <h3 className="text-2xl font-bold text-charcoal mt-12 mb-6">Operational efficiency</h3>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              Administrative staff time spent on routine communications decreased by 70%, allowing redeployment to higher-value activities like care coordination and patient education. Test result delivery time improved from an average of 4.5 days to same-day notification for 95% of results. The platform handled over 8,500 automated interactions monthly, freeing staff to focus on complex patient needs.
            </p>

            <h3 className="text-2xl font-bold text-charcoal mt-12 mb-6">Clinical outcomes</h3>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              Improved communication led to measurable health improvements. Medication adherence rates increased by 28% among chronic disease patients. Emergency department visits for preventable complications decreased by 22%, as patients received timely follow-up care and early intervention. Physicians reported that patients arrived at appointments better prepared and more engaged in their care plans.
            </p>

            <h3 className="text-2xl font-bold text-charcoal mt-12 mb-6">Financial performance</h3>
            <p className="text-base leading-relaxed text-charcoal/70">
              The reduction in no-shows generated an additional $280,000 in annual revenue by improving clinic utilization. Administrative cost savings from automation totaled $165,000 annually. The $72,000 investment in the platform achieved a 320% ROI over 18 months, with ongoing benefits continuing to compound. The provider is now exploring expansion to additional communication use cases, including chronic disease management programs and wellness initiatives.
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
                name: "Dr. James Patterson",
                location: "Chicago",
                description: "Leads our healthcare practice, specializing in patient engagement platforms, clinical workflow automation, and HIPAA-compliant healthcare data analytics.",
                image: "/author-female-2.55e29921.jpg"
              },
              {
                name: "Rachel Thompson",
                location: "Boston",
                description: "Specializes in healthcare technology integration, with expertise in Epic and Cerner EHR systems, patient communication platforms, and HIPAA compliance.",
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

      {/* DZ10 Contact Form Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <CaseStudyContactForm caseStudyTitle="Healthcare Patient Engagement" />
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">More success stories</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Optimizing clinical workflows to save 15 hours per physician weekly",
                industry: "Healthcare",
                metric: "60%",
                metricLabel: "Less admin work",
                image: "/case-medical-collaboration.9602cc8c.jpg",
                link: "/cases/hospital-workflow-automation"
              },
              {
                title: "Scaling telehealth services to reach 50,000+ patients monthly",
                industry: "Healthcare",
                metric: "50K+",
                metricLabel: "Monthly patients",
                image: "/case-doctor-consultation.799c1562.jpg",
                link: "/cases/telehealth-scaling"
              },
              {
                title: "Unlocking healthcare insights with real-time data analytics",
                industry: "Healthcare",
                metric: "34%",
                metricLabel: "Fewer readmissions",
                image: "/case-healthcare-team.5797392b.jpg",
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
                  <h3 className="text-xl font-bold text-white mt-2 group-hover:text-primary transition-colors">
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
