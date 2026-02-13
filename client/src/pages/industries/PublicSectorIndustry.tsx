import { motion } from "framer-motion";
import { ArrowRight, Building, Users, Shield, Globe, BarChart3, ChevronRight, Landmark, FileText, Heart, Scale } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function PublicSectorIndustry() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#051C2C] selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Public Sector" 
        description="Digital transformation for government. NexDyne helps government agencies and public institutions modernize services, improve citizen experience, and build efficient, transparent operations."
        canonical="/industries/public-sector"
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
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-8 block">
              Public Sector
            </span>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl eb-garamond font-bold tracking-tight text-[#051C2C] leading-[1.1] mb-5">
              Public Sector
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-[#051C2C]/70 leading-relaxed max-w-4xl">
              Citizens expect government services that match the convenience and efficiency of the private sector. Meeting these expectations requires fundamental transformation—not just new technology, but new ways of working. NexDyne helps government agencies modernize operations, improve citizen experience, and deliver better outcomes with limited resources.
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
            src="https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=1920&q=80" 
            alt="Public Sector Digital Transformation" 
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
                Government faces unprecedented challenges. Aging infrastructure, workforce constraints, and rising citizen expectations create pressure to do more with less. At the same time, technology offers new possibilities for service delivery, operational efficiency, and data-driven decision making. The agencies that can harness these opportunities will transform how government serves citizens.
              </p>
              
              <p className="text-lg text-[#051C2C]/70 leading-relaxed mb-8">
                We partner with government agencies at all levels—federal, state, and local—to build the digital capabilities that enable this transformation. From citizen-facing digital services to back-office automation, our solutions help agencies improve service delivery while reducing costs and increasing transparency.
              </p>
              
              <p className="text-lg text-[#051C2C]/70 leading-relaxed">
                Beyond technology implementation, we help agencies build the organizational capabilities needed for sustained improvement. Change management, workforce development, and agile delivery practices ensure that transformation initiatives deliver lasting results.
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
              { value: "40%", label: "Reduction in processing time" },
              { value: "60%", label: "Increase in digital service adoption" },
              { value: "25%", label: "Cost savings through automation" },
              { value: "90%", label: "Citizen satisfaction improvement" }
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

      {/* How We Help Government - Editorial Two-Column */}
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
                How We Help Government Agencies Serve Citizens Better
              </h2>
              <p className="text-lg text-[#051C2C]/70 leading-relaxed">
                Effective government requires excellence across multiple dimensions: citizen experience, operational efficiency, and policy outcomes. We help agencies build capabilities in each area—creating integrated solutions that improve service delivery while demonstrating responsible stewardship of public resources.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Digital Services */}
              <div className="border-l-4 border-[#0077B5] pl-6">
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-3">
                  Citizen-Centered Digital Services
                </h3>
                <p className="text-[#051C2C]/70 leading-relaxed">
                  Build digital services that citizens actually want to use. Our human-centered design approach creates intuitive, accessible experiences that improve service delivery while reducing call center volume and processing costs.
                </p>
              </div>

              {/* Process Automation */}
              <div className="border-l-4 border-[#0077B5] pl-6">
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-3">
                  Intelligent Process Automation
                </h3>
                <p className="text-[#051C2C]/70 leading-relaxed">
                  Automate routine processes to free staff for higher-value work. Our solutions combine RPA, AI, and workflow automation to streamline operations—reducing backlogs, improving accuracy, and accelerating service delivery.
                </p>
              </div>

              {/* Data & Analytics */}
              <div className="border-l-4 border-[#0077B5] pl-6">
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-3">
                  Data-Driven Decision Making
                </h3>
                <p className="text-[#051C2C]/70 leading-relaxed">
                  Leverage data to improve policy outcomes and operational performance. Our analytics platforms help agencies measure impact, identify improvement opportunities, and make evidence-based decisions that serve citizens better.
                </p>
              </div>

              {/* Modernization */}
              <div className="border-l-4 border-[#0077B5] pl-6">
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-3">
                  Legacy System Modernization
                </h3>
                <p className="text-[#051C2C]/70 leading-relaxed">
                  Modernize aging systems without disrupting critical services. Our proven approaches reduce risk while enabling agencies to adopt modern technologies that improve agility, security, and cost efficiency.
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
                src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=800&q=80" 
                alt="Government Digital Transformation" 
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
                70%
              </div>
              <div className="text-xl font-medium text-[#051C2C] mb-6">
                reduction in application processing time
              </div>
              <p className="text-lg text-[#051C2C]/70 leading-relaxed mb-6">
                A state government agency partnered with us to transform their benefits enrollment process. We redesigned the citizen experience with a mobile-first application, implemented intelligent document processing, and automated eligibility determination. The result: 70% reduction in processing time, 85% decrease in call center volume, and dramatically improved citizen satisfaction.
              </p>
              <p className="text-[#051C2C]/70 leading-relaxed mb-8">
                The new system also provides real-time analytics that help agency leadership identify bottlenecks, allocate resources, and continuously improve service delivery.
              </p>
              <Link href="/cases/government-benefits-modernization" className="inline-flex items-center text-[#0077B5] font-semibold hover:underline">
                Read the full case study <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Public Sector Capabilities - Editorial Grid */}
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
              Our Public Sector Capabilities
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {/* Digital Government */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 underline decoration-[#0077B5] decoration-2 underline-offset-4">
                Digital Government Services
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Design and build citizen-facing digital services that are intuitive, accessible, and efficient. Our solutions enable online applications, digital payments, and self-service capabilities that improve citizen experience while reducing operational costs.
              </p>
            </motion.div>

            {/* Benefits Administration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 underline decoration-[#0077B5] decoration-2 underline-offset-4">
                Benefits Administration
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Modernize benefits enrollment and administration with intelligent automation. Our platforms streamline eligibility determination, reduce fraud, and improve program integrity—ensuring benefits reach those who need them most.
              </p>
            </motion.div>

            {/* Revenue & Tax */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 underline decoration-[#0077B5] decoration-2 underline-offset-4">
                Revenue & Tax Modernization
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Improve tax administration with modern technology and analytics. Our solutions help agencies improve compliance, reduce fraud, and provide better taxpayer service—increasing revenue while reducing burden on citizens.
              </p>
            </motion.div>

            {/* Public Safety */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 underline decoration-[#0077B5] decoration-2 underline-offset-4">
                Public Safety & Justice
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Support public safety with data-driven solutions. Our platforms help law enforcement, courts, and corrections agencies improve outcomes through better information sharing, analytics, and operational efficiency.
              </p>
            </motion.div>

            {/* Workforce Transformation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 underline decoration-[#0077B5] decoration-2 underline-offset-4">
                Workforce Transformation
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Build the government workforce of the future. Our solutions help agencies attract talent, develop skills, and create modern work environments that enable employees to serve citizens effectively.
              </p>
            </motion.div>

            {/* Cybersecurity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 underline decoration-[#0077B5] decoration-2 underline-offset-4">
                Cybersecurity & Privacy
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Protect citizen data and critical infrastructure. Our cybersecurity solutions help agencies assess risk, implement controls, and respond to threats—maintaining public trust while enabling digital transformation.
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
              Our Clients' Success in Public Sector
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
                $50M
              </div>
              <div className="text-lg font-medium text-white mb-6">
                annual savings through process automation
              </div>
              <p className="text-white/70 leading-relaxed mb-6">
                A federal agency deployed our intelligent automation platform across their administrative functions. The system automates document processing, data entry, and routine approvals—generating $50M in annual savings while improving processing accuracy and speed.
              </p>
              <Link href="/cases/federal-automation" className="inline-flex items-center text-[#0077B5] font-semibold hover:underline">
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
                95%
              </div>
              <div className="text-lg font-medium text-white mb-6">
                citizen satisfaction with new digital services
              </div>
              <p className="text-white/70 leading-relaxed mb-6">
                A city government launched a comprehensive digital services platform with our help. The platform enables citizens to access 50+ services online, from permit applications to utility payments—achieving 95% satisfaction ratings and reducing in-person visits by 60%.
              </p>
              <Link href="/cases/city-digital-services" className="inline-flex items-center text-[#0077B5] font-semibold hover:underline">
                Read the full case study <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
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
              { title: "Healthcare", link: "/industries/healthcare" },
              { title: "Education", link: "/industries/education" },
              { title: "Urban Development", link: "/industries/urban-development" }
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
                Ready to transform government services?
              </h2>
              <p className="text-lg text-white/70 mb-10">
                Let's discuss how we can help you modernize operations, improve citizen experience, and deliver better outcomes for the people you serve.
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
