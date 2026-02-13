import { motion } from "framer-motion";
import { ArrowRight, Heart, Shield, Users, Activity, Brain, Stethoscope, ChevronRight, FileText, Clock } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function HealthcareIndustry() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#051C2C] selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Healthcare Industry" 
        description="Digital transformation for healthcare organizations. NexDyne helps health systems, payers, and life sciences companies improve patient outcomes while optimizing operations."
        canonical="/industries/healthcare"
      />
      <Navigation />
      
      {/* Editorial Hero Section */}
      <section className="relative pt-32 pb-20 bg-white">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <Breadcrumbs />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-8 block mt-4">
              Healthcare Industry
            </span>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl eb-garamond font-bold tracking-tight text-[#051C2C] leading-[1.1] mb-5">
              Healthcare Industry
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-[#051C2C]/70 leading-relaxed max-w-4xl">
              Healthcare is at an inflection point. Rising costs, workforce shortages, and evolving patient expectations demand new approaches. NexDyne's healthcare consultants partner with organizations to build the digital capabilities that improve outcomes, reduce costs, and transform the care experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Full-Width Hero Image */}
      <section className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full h-[50vh] md:h-[60vh] relative overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1920&q=80" 
            alt="Healthcare Digital Transformation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </motion.div>
      </section>

      {/* Editorial Introduction */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-lg sm:text-xl md:text-2xl text-[#051C2C]/80 leading-relaxed mb-8 first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#0077B5]">
                We begin our healthcare consulting engagements by understanding the unique challenges your organization faces—whether you're a health system navigating value-based care, a payer optimizing member outcomes, or a life sciences company accelerating drug development. Our approach combines clinical insight with technology expertise to deliver solutions that work in the real world of healthcare delivery.
              </p>
              
              <p className="text-lg text-[#051C2C]/70 leading-relaxed mb-8">
                The healthcare industry is undergoing a fundamental transformation. The shift from volume to value, the rise of consumerism, and the explosion of health data are creating both challenges and opportunities. Organizations that can harness these forces will thrive; those that can't will struggle to survive.
              </p>
              
              <p className="text-lg text-[#051C2C]/70 leading-relaxed">
                Our healthcare practice brings together experts in clinical operations, data science, and digital technology. We help organizations build the capabilities needed to succeed in an increasingly complex and competitive environment—from AI-powered clinical decision support to seamless patient engagement platforms.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Statistics Strip */}
      <section className="py-16 bg-[#051C2C]">
        <div className="container px-4 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: "30%", label: "Reduction in readmission rates" },
              { value: "45%", label: "Improvement in patient satisfaction" },
              { value: "25%", label: "Decrease in administrative costs" },
              { value: "2x", label: "Faster time to treatment decisions" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-serif font-bold text-[#0077B5] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help Healthcare Organizations - Editorial Two-Column */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C] mb-8 leading-tight">
                How We Help Healthcare Organizations Prepare for the Future
              </h2>
              <p className="text-lg text-[#051C2C]/70 leading-relaxed">
                Healthcare organizations face unprecedented pressure to improve outcomes while reducing costs. Success requires new capabilities—from predictive analytics that identify at-risk patients to digital tools that engage consumers throughout their health journey. We help organizations build these capabilities in ways that create sustainable competitive advantage.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Clinical Intelligence */}
              <div className="border-l-4 border-[#0077B5] pl-6">
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-3">
                  Clinical Intelligence & Decision Support
                </h3>
                <p className="text-[#051C2C]/70 leading-relaxed">
                  Deploy AI-powered tools that help clinicians make better decisions faster. From diagnostic support to treatment recommendations, our solutions augment clinical expertise with data-driven insights—improving outcomes while reducing cognitive burden.
                </p>
              </div>

              {/* Patient Engagement */}
              <div className="border-l-4 border-[#0077B5] pl-6">
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-3">
                  Patient Engagement & Experience
                </h3>
                <p className="text-[#051C2C]/70 leading-relaxed">
                  Create seamless digital experiences that meet patients where they are. From appointment scheduling to care plan adherence, our platforms drive engagement across the entire patient journey—improving satisfaction and outcomes.
                </p>
              </div>

              {/* Operational Excellence */}
              <div className="border-l-4 border-[#0077B5] pl-6">
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-3">
                  Operational Excellence & Efficiency
                </h3>
                <p className="text-[#051C2C]/70 leading-relaxed">
                  Optimize operations with intelligent automation and predictive analytics. From staff scheduling to supply chain management, we help organizations reduce waste, improve throughput, and free up resources for patient care.
                </p>
              </div>

              {/* Value-Based Care */}
              <div className="border-l-4 border-[#0077B5] pl-6">
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-3">
                  Value-Based Care Enablement
                </h3>
                <p className="text-[#051C2C]/70 leading-relaxed">
                  Build the infrastructure needed to succeed in value-based arrangements. From population health management to risk stratification, we help organizations take on risk with confidence—aligning incentives with outcomes.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Case Study - Full Width */}
      <section className="py-20 md:py-28 bg-[#f8f9fa]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-4 block">
              Featured Case Study
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80" 
                alt="Healthcare Transformation" 
                className="w-full rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="text-6xl md:text-7xl font-serif font-bold text-[#0077B5] mb-4">
                42%
              </div>
              <div className="text-xl font-medium text-[#051C2C] mb-6">
                reduction in emergency department wait times
              </div>
              <p className="text-lg text-[#051C2C]/70 leading-relaxed mb-6">
                A 12-hospital health system partnered with us to transform their emergency department operations. Using predictive analytics and intelligent workflow automation, we redesigned patient flow from arrival to discharge. The system now predicts patient volume 24 hours in advance, automatically adjusts staffing, and routes patients to the right level of care—dramatically reducing wait times while improving clinical outcomes.
              </p>
              <p className="text-[#051C2C]/70 leading-relaxed mb-8">
                Beyond operational improvements, the transformation created a foundation for ongoing innovation. The data infrastructure we built now powers clinical decision support, population health management, and patient engagement initiatives across the system.
              </p>
              <Link href="/cases/healthcare-transformation" className="inline-flex items-center text-[#0077B5] font-semibold hover:underline">
                Read the full case study <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Healthcare Capabilities - Editorial List */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C] mb-6">
              Our Healthcare Capabilities
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {/* AI & Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 underline decoration-[#0077B5] decoration-2 underline-offset-4">
                AI & Advanced Analytics
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                From predictive models that identify patients at risk of deterioration to natural language processing that extracts insights from clinical notes, we help healthcare organizations harness the power of AI. Our solutions are designed for clinical workflows—augmenting human expertise rather than replacing it.
              </p>
            </motion.div>

            {/* Digital Health */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 underline decoration-[#0077B5] decoration-2 underline-offset-4">
                Digital Health & Telehealth
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Build digital health capabilities that extend care beyond facility walls. From virtual visits to remote patient monitoring, we help organizations create seamless hybrid care models that improve access, reduce costs, and meet patients where they are.
              </p>
            </motion.div>

            {/* EHR Optimization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 underline decoration-[#0077B5] decoration-2 underline-offset-4">
                EHR Optimization & Integration
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Maximize the value of your EHR investment. We help organizations optimize workflows, reduce documentation burden, and integrate clinical systems to create a unified view of patient data. Our approach focuses on clinician experience—reducing clicks, not adding them.
              </p>
            </motion.div>

            {/* Revenue Cycle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 underline decoration-[#0077B5] decoration-2 underline-offset-4">
                Revenue Cycle Transformation
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Optimize revenue cycle performance with intelligent automation and analytics. From prior authorization to claims management, we help organizations reduce denials, accelerate collections, and improve the patient financial experience—all while reducing administrative costs.
              </p>
            </motion.div>

            {/* Population Health */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 underline decoration-[#0077B5] decoration-2 underline-offset-4">
                Population Health Management
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Build capabilities to manage the health of populations, not just episodes of care. Our solutions help organizations identify high-risk patients, coordinate care across settings, and measure outcomes—enabling success in value-based arrangements.
              </p>
            </motion.div>

            {/* Interoperability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 underline decoration-[#0077B5] decoration-2 underline-offset-4">
                Interoperability & Data Exchange
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Enable seamless data exchange across the care continuum. We help organizations implement FHIR-based APIs, connect to health information exchanges, and build the data infrastructure needed for coordinated care—breaking down silos that impede quality.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-20 md:py-28 bg-[#051C2C] text-white">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-white mb-6">
              Our Clients' Success in Healthcare
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Success Story 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 p-8 md:p-10 rounded-lg"
            >
              <div className="text-5xl md:text-6xl font-serif font-bold text-[#0077B5] mb-2">
                35%
              </div>
              <div className="text-lg font-medium text-white mb-6">
                reduction in readmission rates
              </div>
              <p className="text-white/70 leading-relaxed mb-6">
                A regional health system deployed our predictive analytics platform to identify patients at high risk of readmission. Care coordinators now receive real-time alerts and recommended interventions, enabling proactive outreach that keeps patients healthy at home.
              </p>
              <Link href="/cases/healthcare-readmission" className="inline-flex items-center text-[#0077B5] font-semibold hover:underline">
                Read the full case study <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>

            {/* Success Story 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/5 p-8 md:p-10 rounded-lg"
            >
              <div className="text-5xl md:text-6xl font-serif font-bold text-[#0077B5] mb-2">
                $50M
              </div>
              <div className="text-lg font-medium text-white mb-6">
                annual revenue cycle improvement
              </div>
              <p className="text-white/70 leading-relaxed mb-6">
                A multi-state health system transformed their revenue cycle with intelligent automation. AI-powered prior authorization, automated claims scrubbing, and predictive denial management reduced days in A/R by 15 days while improving the patient financial experience.
              </p>
              <Link href="/cases/healthcare-revenue-cycle" className="inline-flex items-center text-[#0077B5] font-semibold hover:underline">
                Read the full case study <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C] mb-6">
              Related Services
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                title: "Health Systems",
                description: "Transform hospital and health system operations with AI-powered clinical decision support, workflow optimization, and patient engagement.",
                link: "/cases/healthcare-transformation",
                image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80"
              },
              {
                title: "Payers & Insurers",
                description: "Optimize member outcomes and operational efficiency with predictive analytics, claims automation, and digital engagement platforms.",
                link: "/industries/insurance",
                image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80"
              },
              {
                title: "Life Sciences",
                description: "Accelerate drug development and commercialization with AI-powered research, real-world evidence, and digital therapeutics.",
                link: "/capabilities/artificial-intelligence/generative-ai",
                image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={service.link} className="group block">
                  <div className="relative overflow-hidden mb-4">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-2 group-hover:text-[#0077B5] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#051C2C]/60 text-sm leading-relaxed mb-3">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-[#0077B5] text-sm font-semibold">
                    Learn more <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Industries */}
      <section className="py-20 md:py-28 bg-[#f8f9fa]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C] mb-6">
              Related Industries
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Insurance",
                link: "/industries/insurance"
              },
              {
                title: "Public Sector",
                link: "/industries/public-sector"
              },
              {
                title: "Education",
                link: "/industries/education"
              }
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={industry.link} className="group block bg-white p-6 hover:bg-[#051C2C] transition-colors duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#0077B5] group-hover:text-white/60 transition-colors">
                        Industry
                      </span>
                      <h3 className="text-lg font-serif font-bold text-[#051C2C] group-hover:text-white transition-colors mt-1">
                        {industry.title}
                      </h3>
                    </div>
                    <ChevronRight className="w-5 h-5 text-[#051C2C]/30 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-[#051C2C]">
        <div className="container px-4 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl eb-garamond font-bold text-white mb-6">
                Ready to transform healthcare delivery?
              </h2>
              <p className="text-lg text-white/70 mb-10">
                Let's discuss how we can help you improve patient outcomes, optimize operations, and build the digital capabilities needed for the future of healthcare.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-[#0077B5] hover:bg-[#005a8c] text-white px-8 py-6 text-base font-semibold">
                    Contact Us
                  </Button>
                </Link>
                <Link href="/cases">
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold bg-transparent">
                    View All Case Studies
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
