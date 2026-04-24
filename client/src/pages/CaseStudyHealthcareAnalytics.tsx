import { Link } from "wouter";
import { motion } from "framer-motion";
import { CaseStudyPDFButton } from "@/components/CaseStudyPDFButton";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BackToTop } from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

export default function CaseStudyHealthcareAnalytics() {
  return (
    <div className="min-h-screen bg-white text-white selection:bg-primary selection:text-white">
      <SEO
        title="Healthcare Analytics | Case Study | NexDyne Technologies"
        description="How predictive analytics reduced hospital readmissions by 34% through population health management."
        canonical="/cases/healthcare-analytics"
      />
      <Navigation />

      {/* DZ10 Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/case-healthcare-team.3a8b9c12.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0"></div>

        <div className="container relative z-10 px-4 md:px-12">
          <Breadcrumbs />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block">
              Case Study · Healthcare
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl tracking-tight leading-[1.05] mb-5 sm:mb-3 md:mb-4">
              Reducing hospital readmissions by <span className="text-primary">34%</span> through predictive analytics
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-3xl mb-5 sm:mb-6 md:mb-8">
              A 210-employee accountable care organization deployed advanced analytics to identify high-risk patients, reducing readmissions by 34% and improving quality scores.
            </p>

            {/* PDF Download Button */}
            <CaseStudyPDFButton
              title="Reducing hospital readmissions by 34% through predictive analytics"
              industry="Healthcare"
              summary="A 210-employee accountable care organization deployed advanced analytics to identify high-risk patients, reducing readmissions by 34% and improving quality scores."
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
      <section className="py-10 sm:py-12 lg:py-16 bg-white border-t border-white/10">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {[
              { metric: "34%", label: "reduction", sublabel: "in 30-day readmissions" },
              { metric: "$3.2M", label: "annual savings", sublabel: "from avoided penalties and improved outcomes" },
              { metric: "92%", label: "accuracy", sublabel: "in high-risk patient identification" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-2 border-primary/50 pl-8"
              >
                <div className="text-6xl text-primary mb-2">{stat.metric}</div>
                <div className="text-lg text-white">{stat.label}</div>
                <div className="text-sm text-white/60">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DZ10 Sticky Navigation */}
      <nav className="sticky top-20 bg-white text-white z-40 border-y border-white/10">
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
            <span className="text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/80 mb-4 sm:mb-6 block">
              The Opportunity
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white max-w-4xl leading-tight">
              Managing population health risk in a value-based care environment
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-16 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-charcoal/80 mb-6">
              A Philadelphia-based accountable care organization serving 85,000 Medicare and commercial lives across 210 employees faced significant financial penalties from readmission rates that exceeded CMS benchmarks. Under value-based payment contracts, the organization bore financial risk for patient outcomes, making readmission reduction critical to financial sustainability.
            </p>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              Care managers struggled to identify which patients required intensive intervention. Traditional risk stratification relied on basic demographic and diagnosis data, missing nuanced patterns that predicted readmission. The organization lacked real-time visibility into patient status across care settings, discovering readmissions only through claims data weeks after they occurred. Care teams spent time on low-risk patients while high-risk individuals fell through the cracks.
            </p>
            <p className="text-base leading-relaxed text-charcoal/70">
              Leadership recognized that intuition-based care management was insufficient for value-based success. The organization needed predictive analytics that could identify high-risk patients before adverse events occurred, enabling proactive intervention. The solution had to integrate data from multiple sources including EHRs, claims, labs, and social determinants, while providing actionable insights that care teams could use in daily workflows.
            </p>
          </div>
        </div>
      </section>

      {/* DZ10 Quote Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 sm:px-6 md:px-12 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary leading-tight mb-5 sm:mb-6 md:mb-8">
              "We were managing population health with rear-view mirror data. By the time we knew patients were struggling, they were already back in the hospital."
            </blockquote>
            <div className="text-base text-white">
              <div className="font-semibold">— Dr. Robert Martinez</div>
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
            <span className="text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/80 mb-4 sm:mb-6 block">
              The Solution
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white max-w-4xl leading-tight">
              Predictive analytics that enables proactive, data-driven care management
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-16 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-charcoal/80 mb-6">
              We designed and implemented a comprehensive population health analytics platform that integrated data from multiple sources and provided predictive insights to care teams. The $115,000 investment focused on creating sophisticated risk models while ensuring HIPAA compliance and seamless integration with clinical workflows.
            </p>
            <p className="text-base leading-relaxed text-charcoal/70 mb-6">
              The platform aggregated data from EHRs, claims systems, lab results, pharmacy records, and social services databases into a unified patient view. Machine learning models analyzed patterns across demographics, diagnoses, medications, utilization history, and social determinants to predict readmission risk with 92% accuracy. Care managers received daily prioritized lists of high-risk patients with specific intervention recommendations based on identified risk factors.
            </p>
            <p className="text-base leading-relaxed text-charcoal/70">
              Real-time alerts notified care teams when patients exhibited concerning patterns such as missed appointments, medication non-adherence, or emergency department visits. The platform automated outreach for routine follow-up while escalating complex cases to care managers. Comprehensive dashboards provided leadership with visibility into population health metrics, intervention effectiveness, and financial performance under value-based contracts.
            </p>
          </div>
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
            <span className="text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/80 mb-4 sm:mb-6 block">
              The Impact
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white max-w-4xl leading-tight">
              From financial risk to value-based care success
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-16 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-charcoal/80 mb-6">
              Within 24 months, the analytics platform transformed the organization's population health capabilities, delivering a 34% reduction in 30-day readmissions and $3.2 million in annual savings. The $115,000 investment generated a 270% ROI over 24 months through avoided CMS penalties ($1.8M), shared savings from payer contracts ($1.1M), and care management efficiency ($300K). The organization achieved top-decile performance in CMS quality metrics, positioning it for expanded value-based contracts representing $45 million in additional revenue opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* DZ10 Contact Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
              Get In Touch
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">Our experts</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
            {[
              {
                name: "Dr. Robert Martinez",
                location: "Philadelphia",
                description: "Leads healthcare analytics practice with focus on population health management, predictive modeling, and value-based care optimization.",
                image: "/author-female-2.55e29921.jpg"
              },
              {
                name: "Lisa Thompson",
                location: "Boston",
                description: "Specializes in healthcare data integration, machine learning for clinical applications, and HIPAA-compliant analytics platforms.",
                image: "/author-female-2.55e29921.jpg"
              }
            ].map((expert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white text-charcoal p-4 sm:p-6 md:p-8 rounded-lg sm:"
              >
                <div className="flex items-start gap-4">
                  <img className="w-20 h-20 object-cover flex-shrink-0" src={expert.image} alt={expert.name} />
                  <div>
                    <h3 className="text-2xl mb-2">{expert.name}</h3>
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
            <span className="text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block">
              Related Case Studies
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-charcoal">More success stories</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Streamlining hospital workflows with intelligent automation",
                industry: "Healthcare",
                metric: "45%",
                metricLabel: "Efficiency gain",
                image: "/case-hospital-workflow.8b2c4d91.jpg",
                link: "/cases/hospital-workflow-automation"
              },
              {
                title: "Transforming patient engagement through digital health",
                industry: "Healthcare",
                metric: "60%",
                metricLabel: "Better engagement",
                image: "/case-patient-engagement.7a9b3c82.jpg",
                link: "/cases/healthcare-patient-engagement"
              },
              {
                title: "Scaling telehealth services for a regional health system",
                industry: "Healthcare",
                metric: "10x",
                metricLabel: "Volume increase",
                image: "/case-telehealth.5d4e2f73.jpg",
                link: "/cases/telehealth-scaling"
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
                  <div className="aspect-[4/3] overflow-hidden mb-6 rounded-lg sm: relative bg-white/10">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 px-3 py-1">
                      <span className="text-xs text-primary">{item.metric}</span>
                      <span className="text-xs text-white/70 ml-1">{item.metricLabel}</span>
                    </div>
                  </div>
                  <span className="text-xs text-primary uppercase tracking-wider">{item.industry}</span>
                  <h3 className="text-xl text-charcoal mt-2 group-hover:text-primary transition-colors">
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
              <Button variant="outline" className="border-base/20 text-charcoal hover:bg-white/10 px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-base font-semibold transition-all">

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
