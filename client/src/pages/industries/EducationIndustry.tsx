import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, BookOpen, Users, Lightbulb, Globe, BarChart3, ChevronRight, Laptop, Brain, Award } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function EducationIndustry() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#051C2C] selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Education Industry" 
        description="Digital transformation for education. NexDyne helps universities, schools, and EdTech companies create personalized learning experiences, improve student outcomes, and build sustainable institutions."
        canonical="/industries/education"
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
              Education Industry
            </span>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl eb-garamond font-bold tracking-tight text-[#051C2C] leading-[1.1] mb-5">
              Education Industry
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-[#051C2C]/70 leading-relaxed max-w-4xl">
              Education is being reimagined. The convergence of technology, changing learner expectations, and new economic realities is creating both challenges and opportunities for educational institutions. NexDyne helps education leaders navigate this transformation—building the capabilities needed to deliver exceptional learning outcomes at scale.
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
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80" 
            alt="Education Digital Transformation" 
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
                The education sector faces a moment of profound change. Students expect personalized, flexible learning experiences. Institutions must demonstrate outcomes and value. And technology is enabling entirely new models of teaching and learning. Those who embrace this transformation will thrive; those who resist it will struggle to remain relevant.
              </p>
              
              <p className="text-lg text-[#051C2C]/70 leading-relaxed mb-8">
                We partner with educational institutions—from K-12 schools to research universities, from corporate training programs to EdTech startups—to build the digital capabilities that improve learning outcomes. Our approach combines deep understanding of pedagogy with expertise in technology and data analytics, creating solutions that work for educators and learners alike.
              </p>
              
              <p className="text-lg text-[#051C2C]/70 leading-relaxed">
                Beyond technology implementation, we help institutions rethink their operating models. From hybrid learning strategies to new revenue streams, from student success initiatives to operational efficiency, we bring a holistic perspective that addresses the full range of challenges facing education today.
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
              { value: "25%", label: "Improvement in student retention" },
              { value: "40%", label: "Increase in course completion rates" },
              { value: "30%", label: "Reduction in administrative costs" },
              { value: "2x", label: "Faster time to credential" }
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

      {/* How We Help Education - Editorial Two-Column */}
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
                How We Help Education Institutions Prepare for the Future
              </h2>
              <p className="text-lg text-[#051C2C]/70 leading-relaxed">
                Success in education requires excellence across multiple dimensions: learning outcomes, student experience, operational efficiency, and financial sustainability. We help institutions build capabilities in each area—creating integrated solutions that work together to fulfill their educational mission.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Personalized Learning */}
              <div className="border-l-4 border-[#0077B5] pl-6">
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-3">
                  Personalized Learning at Scale
                </h3>
                <p className="text-[#051C2C]/70 leading-relaxed">
                  Deploy AI-powered adaptive learning systems that personalize content, pacing, and pathways for each student. Our solutions analyze learning patterns in real time to identify struggling students early and recommend interventions that improve outcomes.
                </p>
              </div>

              {/* Student Success */}
              <div className="border-l-4 border-[#0077B5] pl-6">
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-3">
                  Student Success & Retention
                </h3>
                <p className="text-[#051C2C]/70 leading-relaxed">
                  Build predictive models that identify at-risk students before they fall behind. Our student success platforms enable proactive outreach, personalized support, and coordinated interventions that improve retention and completion rates.
                </p>
              </div>

              {/* Digital Campus */}
              <div className="border-l-4 border-[#0077B5] pl-6">
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-3">
                  Digital Campus & Hybrid Learning
                </h3>
                <p className="text-[#051C2C]/70 leading-relaxed">
                  Create seamless hybrid learning experiences that combine the best of in-person and online education. Our solutions help institutions design, deliver, and assess learning across modalities—meeting students where they are.
                </p>
              </div>

              {/* Operational Excellence */}
              <div className="border-l-4 border-[#0077B5] pl-6">
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-3">
                  Operational Excellence
                </h3>
                <p className="text-[#051C2C]/70 leading-relaxed">
                  Optimize operations with intelligent automation and analytics. From enrollment management to financial aid processing, we help institutions reduce costs, improve service, and free up resources for their core educational mission.
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
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80" 
                alt="University Digital Transformation" 
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
                32%
              </div>
              <div className="text-xl font-medium text-[#051C2C] mb-6">
                improvement in student retention
              </div>
              <p className="text-lg text-[#051C2C]/70 leading-relaxed mb-6">
                A large public university partnered with us to transform their approach to student success. We built a predictive analytics platform that identifies at-risk students across 50+ dimensions, deployed an early alert system for faculty and advisors, and created personalized intervention workflows. The result: 32% improvement in first-year retention and 25% increase in four-year graduation rates.
              </p>
              <p className="text-[#051C2C]/70 leading-relaxed mb-8">
                Beyond the technology, we helped the university redesign their advising model, train staff on data-informed interventions, and create a culture of student success that permeates the institution.
              </p>
              <Link href="/cases/university-student-success" className="inline-flex items-center text-[#0077B5] font-semibold hover:underline">
                Read the full case study <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Education Capabilities - Editorial Grid */}
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
              Our Education Capabilities
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {/* Learning Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 underline decoration-[#0077B5] decoration-2 underline-offset-4">
                Learning Analytics & AI
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Harness the power of data to improve learning outcomes. Our analytics platforms provide insights into student engagement, learning patterns, and intervention effectiveness—enabling evidence-based decisions that improve teaching and learning.
              </p>
            </motion.div>

            {/* EdTech Strategy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 underline decoration-[#0077B5] decoration-2 underline-offset-4">
                EdTech Strategy & Implementation
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Navigate the complex EdTech landscape with confidence. We help institutions evaluate, select, and implement learning technologies—from LMS platforms to assessment tools—ensuring alignment with pedagogical goals and institutional strategy.
              </p>
            </motion.div>

            {/* Online Program Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 underline decoration-[#0077B5] decoration-2 underline-offset-4">
                Online Program Development
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Launch and scale online programs that deliver quality learning experiences. From instructional design to technology infrastructure, we help institutions build online offerings that extend reach while maintaining academic rigor.
              </p>
            </motion.div>

            {/* Enrollment Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 underline decoration-[#0077B5] decoration-2 underline-offset-4">
                Enrollment Management
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Optimize enrollment with data-driven strategies. Our solutions help institutions identify prospective students, personalize outreach, and optimize financial aid—improving yield while managing costs.
              </p>
            </motion.div>

            {/* Workforce Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 underline decoration-[#0077B5] decoration-2 underline-offset-4">
                Workforce Development & Upskilling
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Build programs that prepare learners for the jobs of today and tomorrow. We help institutions design competency-based programs, create industry partnerships, and develop credentials that employers value.
              </p>
            </motion.div>

            {/* Institutional Effectiveness */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 underline decoration-[#0077B5] decoration-2 underline-offset-4">
                Institutional Effectiveness
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Improve institutional performance with data and analytics. Our solutions help institutions track outcomes, demonstrate value, and make evidence-based decisions about resource allocation and strategic priorities.
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
              Our Clients' Success in Education
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
                45%
              </div>
              <div className="text-lg font-medium text-white mb-6">
                increase in online course completion
              </div>
              <p className="text-white/70 leading-relaxed mb-6">
                A community college system deployed our adaptive learning platform across 50 campuses. The system personalizes content and pacing for each student, provides real-time feedback to instructors, and identifies students who need additional support—dramatically improving completion rates in gateway courses.
              </p>
              <Link href="/cases/community-college-adaptive-learning" className="inline-flex items-center text-[#0077B5] font-semibold hover:underline">
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
                $15M
              </div>
              <div className="text-lg font-medium text-white mb-6">
                new revenue from online programs
              </div>
              <p className="text-white/70 leading-relaxed mb-6">
                A regional university partnered with us to launch a portfolio of online graduate programs. We helped them design programs aligned with market demand, build the technology infrastructure, and develop marketing strategies—generating $15M in new revenue within three years.
              </p>
              <Link href="/cases/university-online-programs" className="inline-flex items-center text-[#0077B5] font-semibold hover:underline">
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
                title: "Higher Education",
                description: "Transform universities and colleges with student success platforms, online learning, and operational excellence.",
                link: "/cases/university-student-success",
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80"
              },
              {
                title: "K-12 Education",
                description: "Build personalized learning experiences for K-12 students with adaptive technology and learning analytics.",
                link: "/cases/k12-adaptive-learning",
                image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80"
              },
              {
                title: "Corporate Learning",
                description: "Create effective workforce development programs with skills-based learning and competency tracking.",
                link: "/capabilities/digital-transformation",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
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
                title: "Public Sector",
                link: "/industries/public-sector"
              },
              {
                title: "Healthcare",
                link: "/industries/healthcare"
              },
              {
                title: "Technology, Media & Telecom",
                link: "/industries/technology-media-telecom"
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
                Ready to transform education?
              </h2>
              <p className="text-lg text-white/70 mb-10">
                Let's discuss how we can help you create personalized learning experiences, improve student outcomes, and build a sustainable institution for the future.
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
