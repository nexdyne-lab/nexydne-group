import { CaseStudyPDFButton } from "@/components/CaseStudyPDFButton";
import { Button } from "@/components/ui/button";
import CaseStudyContactForm from "@/components/CaseStudyContactForm";
import Breadcrumb from '@/components/Breadcrumb';
import { BackToTop } from '@/components/BackToTop';
import { SEO } from "@/components/SEO";

export default function CaseStudyHealthcareEHRModernization() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-white font-sans selection:bg-primary selection:text-white">
      <SEO
        title="Healthcare EHR Modernization Case Study"
        description="How we unified patient data across 12 hospital locations with a FHIR-based interoperability layer, achieving 100% data accuracy and 30% admin time savings."
        canonical="/cases/healthcare-ehr-modernization"
      />
      <Navbar />

      {/* Breadcrumb */}
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Case Studies', href: '/cases' },
        { label: 'EHR Modernization' }
      ]} />

      {/* DZ10 Hero Section */}
      <section className="relative min-h-[55vh] sm:min-h-[65vh] md:min-h-[55vh] sm:min-h-[65vh] md:min-h-[70vh] flex items-center pt-16 sm:pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop"
            alt="Healthcare EHR System"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0" />
          <div className="absolute inset-0" />
        </div>

        <div className="container px-4 sm:px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Link href="/cases" className="inline-flex items-center text-primary hover:text-white transition-colors mb-5 sm:mb-6 md:mb-8 group text-sm font-semibold">
              <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Case Studies
            </Link>

            <span className="text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
              Healthcare • Data Integration
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tight text-white leading-[1.05] mb-5 sm:mb-3 md:mb-4">
              Unifying Patient Data Across <span className="text-primary">12 Hospital Locations</span>
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:p-6 md:p-8 border-t border-white/10 pt-8 mt-8">
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary mb-1">100%</div>
                <div className="text-sm text-white/60 uppercase tracking-wider">Data Accuracy</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary mb-1">30%</div>
                <div className="text-sm text-white/60 uppercase tracking-wider">Admin Time Saved</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary mb-1">Real-time</div>
                <div className="text-sm text-white/60 uppercase tracking-wider">Patient Insights</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary mb-1">HIPAA</div>
                <div className="text-sm text-white/60 uppercase tracking-wider">Compliant</div>
              </div>
            </div>

            {/* PDF Download Button */}
            <div className="mt-10">
              <CaseStudyPDFButton
                title="Unifying Patient Data Across 12 Hospital Locations"
                industry="Healthcare"
                capability="Data Integration"
                summary="How we unified patient data across 12 hospital locations with a FHIR-based interoperability layer, achieving 100% data accuracy and 30% admin time savings."
                challenge="A rapidly growing healthcare network had acquired multiple regional hospitals, each running different Electronic Health Record systems. This fragmentation led to siloed patient data."
                solution="Implemented a FHIR-based interoperability layer that provides a single pane of glass view of patient health without replacing existing legacy systems."
                results={[
                  "100% data accuracy achieved",
                  "30% reduction in admin time",
                  "Real-time patient insights",
                  "Full HIPAA compliance"
                ]}
                metrics={[
                  { value: "100%", label: "Data Accuracy" },
                  { value: "30%", label: "Admin Time Saved" },
                  { value: "Real-time", label: "Patient Insights" },
                  { value: "HIPAA", label: "Compliant" }
                ]}
                variant="hero"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* DZ10 Challenge & Solution */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-8 sm:gap-6 sm:p-6 sm:p-8 md:p-12 lg:gap-8 sm:gap-6 sm:p-8 md:p-12 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block">
                The Challenge
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-charcoal mb-6">
                Fragmented patient records
              </h2>
              <div className="space-y-6 text-lg text-charcoal/70 leading-relaxed">
                <p>
                  A rapidly growing healthcare network had acquired multiple regional hospitals, each running different Electronic Health Record (EHR) systems. This fragmentation led to siloed patient data, making it impossible for doctors to see a complete medical history if a patient visited different locations.
                </p>
                <p>
                  Administrative staff spent hours manually faxing and reconciling records, leading to delays in care and potential errors. They needed a unified data layer that would provide a "single pane of glass" view of patient health without ripping and replacing the existing legacy systems immediately.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block">
                Our Approach
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-charcoal mb-6">
                FHIR-based interoperability
              </h2>
              <div className="space-y-6 text-lg text-charcoal/70 leading-relaxed">
                <p>
                  We architected a FHIR-based interoperability layer that connects all 12 disparate EHR systems into a centralized data lake. This solution normalizes patient data in real-time, ensuring that clinicians have instant access to accurate medical histories regardless of the source system.
                </p>
                <ul className="space-y-4 mt-6">
                  <li className="flex items-start">

                    <span>Implemented a secure FHIR API gateway for standardized data exchange.</span>
                  </li>
                  <li className="flex items-start">

                    <span>Built a clinician dashboard for unified patient views.</span>
                  </li>
                  <li className="flex items-start">

                    <span>Ensured full HIPAA compliance with end-to-end encryption and audit logging.</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DZ10 Impact Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
              Results
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">
              Business Impact
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-6 md:p-8">
            {[
              {
                icon: null,
                metric: "Unified",
                title: "Patient View",
                description: "Clinicians now have immediate access to complete patient histories, reducing duplicate tests and improving diagnosis accuracy."
              },
              {
                icon: null,
                metric: "30%",
                title: "Efficiency Gain",
                description: "Automated data reconciliation eliminated manual record retrieval, freeing up administrative staff for higher-value tasks."
              },
              {
                icon: null,
                metric: "100%",
                title: "Compliance",
                description: "The new architecture meets all regulatory requirements for data privacy and security, reducing risk for the organization."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 sm:p-6 md:p-8 rounded-lg sm: bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300"
              >
                <div className="mb-6 p-3 bg-primary/10 w-fit rounded-lg text-primary">
                  {item.icon}
                </div>
                <div className="text-4xl text-white mb-2">{item.metric}</div>
                <h3 className="text-xl text-primary mb-4">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DZ10 Quote Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <blockquote className="text-2xl md:text-3xl text-charcoal leading-relaxed mb-5 sm:mb-6 md:mb-8">
              "The ability to see a patient's full story at a glance has been a game-changer for our medical teams. It's not just about data; it's about better care."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-14 h-14 bg-white/10 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop" alt="CMO" className="w-full h-full object-cover" />
              </div>
              <div className="text-left">
                <div className="text-charcoal">Dr. Sarah Jenkins</div>
                <div className="text-primary text-sm font-medium">Chief Medical Officer</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DZ10 Contact Form */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <CaseStudyContactForm caseStudyTitle="Healthcare EHR Modernization" />
        </div>
      </section>

      {/* DZ10 Related Cases */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 md:mb-16 gap-4 sm:p-5 md:p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block">
                Related Work
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-charcoal">
                More Success Stories
              </h2>
            </motion.div>
            <Link href="/cases">
              <Button variant="outline" className="border-base/20 text-charcoal hover:bg-white/5 transition-all duration-300">
                View all case studies
              </Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 sm:p-6 md:p-8 lg:gap-5 sm:p-7 md:p-5 sm:p-7 md:p-10">
            {[
              {
                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2670&auto=format&fit=crop",
                category: "Banking",
                title: "Legacy Core Migration",
                description: "Migrating 2M+ customers to cloud microservices with zero downtime.",
                link: "/cases/bank-core-modernization"
              },
              {
                image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80",
                category: "Fintech",
                title: "Payment Processing Automation",
                description: "Scaling transaction volume by 10x with automated reconciliation.",
                link: "/cases/fintech-payment-automation"
              },
              {
                image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2670&auto=format&fit=crop",
                category: "Insurance",
                title: "Claims Processing AI",
                description: "Reducing claims processing time by 85% with intelligent automation.",
                link: "/cases/insurance-claims-processing"
              }
            ].map((study, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={study.link} className="group cursor-pointer block">
                  <div className="relative overflow-hidden rounded-lg sm: aspect-[4/3] mb-6">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <div className="text-primary text-xs uppercase tracking-[0.15em] mb-3">{study.category}</div>
                  <h3 className="text-xl text-charcoal mb-2 group-hover:text-primary transition-colors leading-tight">
                    {study.title}
                  </h3>
                  <p className="text-charcoal/60 text-sm mb-4">{study.description}</p>
                  <div className="flex items-center text-primary text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Read case study
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Capabilities Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
              Explore Further
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-6">
              Related Capabilities
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Discover how our integrated capabilities can drive similar transformations for your organization.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-6 md:p-8">
            {[
              {
                title: "Technology",
                subtitle: "IT Modernization",
                description: "Modernize legacy systems with cloud-native architectures that ensure security, scalability, and operational resilience.",
                link: "/solutions/intelligent-process-optimization/app-development/it-modernization"
              },
              {
                title: "Data Transformation",
                subtitle: "Data Platform",
                description: "Build modern data infrastructure that enables real-time analytics and AI-powered decision making.",
                link: "/capabilities/data-transformation"
              },
              {
                title: "Risk & Resilience",
                subtitle: "Compliance & Security",
                description: "Implement robust security frameworks and compliance automation for healthcare data protection.",
                link: "/capabilities/risk-and-resilience"
              }
            ].map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={capability.link} className="group block h-full">
                  <div className="h-full p-4 sm:p-6 md:p-8 rounded-lg sm: bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:bg-white/10">
                    <div className="text-primary text-xs uppercase tracking-[0.15em] mb-2">{capability.title}</div>
                    <h3 className="text-xl text-white mb-4 group-hover:text-primary transition-colors">
                      {capability.subtitle}
                    </h3>
                    <p className="text-white/60 leading-relaxed text-sm mb-6">
                      {capability.description}
                    </p>
                    <div className="flex items-center text-primary text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      Explore capability
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
}
