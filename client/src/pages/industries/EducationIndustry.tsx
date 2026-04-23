import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, BookOpen, Users, Lightbulb, Globe, BarChart3, ChevronRight, Laptop, Brain, Award, Mail } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function EducationIndustry() {
  return (
    <div className="min-h-screen bg-white font-sans text-charcoal selection:bg-primary selection:text-white">
      <SEO 
        title="Education Industry" 
        description="Digital transformation for education. NexDyne helps universities, schools, and EdTech companies create personalized learning experiences, improve student outcomes, and build sustainable institutions."
        canonical="/industries/education"
      />
      <Navigation />
      
      {/* Hero Section - Consulting standard: hierarchy, CTA, split with image */}
      <section className="relative min-h-0 flex flex-col lg:flex-row lg:min-h-[68vh] lg:items-center overflow-hidden bg-subtle border-b border-base/10 pt-8">
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[50%] pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80"
              alt="Education"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </div>
        <div className="container relative z-10 px-4 md:px-12 py-14 md:py-20 lg:py-24 flex-shrink-0">
          <div className="max-w-xl lg:max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary" aria-hidden>
                Industries
              </p>
              <h1 className="eb-garamond font-bold text-charcoal text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-6xl tracking-tight leading-[1.12]">
                Education Industry
              </h1>
              <p className="text-base md:text-lg text-charcoal/75 leading-relaxed max-w-lg">
                Deliver exceptional learning outcomes at scale.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="lg:hidden relative w-full aspect-[16/10] min-h-[200px] flex-shrink-0">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80"
            alt="Education"
            className="w-full h-full object-cover object-center"
          />
        </div>
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
              <p className="text-lg sm:text-xl md:text-2xl text-charcoal/80 leading-relaxed mb-8">
                The education sector faces a moment of profound change. Students expect personalized, flexible learning experiences. Institutions must demonstrate outcomes and value. And technology is enabling entirely new models of teaching and learning. Those who embrace this transformation will thrive; those who resist it will struggle to remain relevant.
              </p>
              
              <p className="text-lg text-charcoal/70 leading-relaxed mb-8">
                We partner with educational institutions—from K-12 schools to research universities, from corporate training programs to EdTech startups—to build the digital capabilities that improve learning outcomes. Our approach combines deep understanding of pedagogy with expertise in technology and data analytics, creating solutions that work for educators and learners alike.
              </p>
              
              <p className="text-lg text-charcoal/70 leading-relaxed">
                Beyond technology implementation, we help institutions rethink their operating models. From hybrid learning strategies to new revenue streams, from student success initiatives to operational efficiency, we bring a holistic perspective that addresses the full range of challenges facing education today.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Experience & Impact - Metrics */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="eb-garamond font-bold text-base text-2xl md:text-3xl mb-12 md:mb-16"
          >
            Our Experience & Impact
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {[
              { value: "40+", label: "Ventures launched with clients across industries" },
              { value: "78%", label: "Reach profitability within 18 months" },
              { value: "4-6 Mo", label: "Typical time from concept to market launch" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-left"
              >
                <div className="text-4xl md:text-5xl font-bold text-base mb-2">
                  {stat.value}
                </div>
                <div className="text-base text-muted-foreground leading-snug">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help - Grid style with header and separators */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-4">
              How We Help Clients
            </h2>
            <div className="border-t border-border" aria-hidden />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-12 mt-8">
            {[
              { title: "Personalized Learning at Scale", desc: "Deploy AI-powered adaptive learning systems that personalize content, pacing, and pathways for each student. Our solutions analyze learning patterns in real time to identify struggling students early and recommend interventions that improve outcomes." },
              { title: "Student Success & Retention", desc: "Build predictive models that identify at-risk students before they fall behind. Our student success platforms enable proactive outreach, personalized support, and coordinated interventions that improve retention and completion rates." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-bold text-charcoal mb-2 flex items-center gap-2">
                  {item.title}
                  <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" aria-hidden />
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="border-t border-border my-10 md:my-12" aria-hidden />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-12">
            {[
              { title: "Digital Campus & Hybrid Learning", desc: "Create seamless hybrid learning experiences that combine the best of in-person and online education. Our solutions help institutions design, deliver, and assess learning across modalities—meeting students where they are." },
              { title: "Operational Excellence", desc: "Optimize operations with intelligent automation and analytics. From enrollment management to financial aid processing, we help institutions reduce costs, improve service, and free up resources for their core educational mission." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-bold text-charcoal mb-2 flex items-center gap-2">
                  {item.title}
                  <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" aria-hidden />
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study - Full Width */}
      <section className="py-20 md:py-28 bg-subtle">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">
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
              <div className="text-6xl md:text-7xl font-bold text-primary mb-4">
                32%
              </div>
              <div className="text-xl font-medium text-charcoal mb-6">
                improvement in student retention
              </div>
              <p className="text-lg text-charcoal/70 leading-relaxed mb-6">
                A large public university partnered with us to transform their approach to student success. We built a predictive analytics platform that identifies at-risk students across 50+ dimensions, deployed an early alert system for faculty and advisors, and created personalized intervention workflows. The result: 32% improvement in first-year retention and 25% increase in four-year graduation rates.
              </p>
              <p className="text-charcoal/70 leading-relaxed mb-8">
                Beyond the technology, we helped the university redesign their advising model, train staff on data-informed interventions, and create a culture of student success that permeates the institution.
              </p>
              <Link href="/cases/university-student-success" className="inline-flex items-center text-primary font-semibold hover:underline">
                Read the full case study <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Insights */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold uppercase tracking-[0.2em] text-charcoal mb-10 md:mb-12"
          >
            Featured Insights
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-0 border border-border mb-10 md:mb-12 overflow-hidden"
          >
            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[320px]">
              <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12 bg-white">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">Collection</span>
              <Link href="/insights/education-future" className="group inline-flex items-start gap-2 text-left mb-3">
                <h3 className="text-xl md:text-2xl lg:text-3xl eb-garamond font-bold text-charcoal leading-tight group-hover:text-primary transition-colors">
                  The Next Normal – The future of education: Personalized, accessible, and outcomes-driven
                </h3>
                <span className="text-primary shrink-0 mt-1 group-hover:translate-x-1 transition-transform" aria-hidden>&gt;</span>
              </Link>
              <span className="text-sm text-muted-foreground mb-4">November 3, 2025 —</span>
              <p className="text-charcoal/70 text-base leading-relaxed">
                Education is being reimagined by technology, learner expectations, and workforce needs. This collection explores how institutions can deliver personalized learning, improve outcomes with analytics, and build the digital experiences that support lifelong learning and employability.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              { category: "Article", title: "The case for a clear ROI framework for edtech investments", link: "/insights/edtech-roi", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80", alt: "EdTech" },
              { category: "Article", title: "Finding a route to enrollment stability for higher ed", link: "/insights/enrollment-stability", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80", alt: "Higher education" },
              { category: "Article", title: "The journey toward AI-enabled learning and advising", link: "/insights/ai-learning-advising", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80", alt: "Learning analytics" },
            ].map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <Link href={item.link} className="group block">
                  <div className="overflow-hidden mb-4">
                    <img src={item.image} alt={item.alt} className="w-full aspect-[16/10] object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
                  </div>
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground block mb-2">{item.category}</span>
                  <h3 className="text-lg font-bold text-charcoal leading-snug group-hover:text-primary transition-colors flex items-start gap-2">
                    <span>{item.title}</span>
                    <span className="text-primary shrink-0 group-hover:translate-x-1 transition-transform" aria-hidden>&gt;</span>
                  </h3>
                </Link>
              </motion.div>
            ))}
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
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-charcoal mb-6">
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
              className="border-t-2 border-base/10 pt-8"
            >
              <h3 className="text-xl font-bold text-charcoal mb-4 decoration-primary decoration-2 underline-offset-4">
                Learning Analytics & AI
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                Harness the power of data to improve learning outcomes. Our analytics platforms provide insights into student engagement, learning patterns, and intervention effectiveness—enabling evidence-based decisions that improve teaching and learning.
              </p>
            </motion.div>

            {/* EdTech Strategy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border-t-2 border-base/10 pt-8"
            >
              <h3 className="text-xl font-bold text-charcoal mb-4 decoration-primary decoration-2 underline-offset-4">
                EdTech Strategy & Implementation
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                Navigate the complex EdTech landscape with confidence. We help institutions evaluate, select, and implement learning technologies—from LMS platforms to assessment tools—ensuring alignment with pedagogical goals and institutional strategy.
              </p>
            </motion.div>

            {/* Online Program Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border-t-2 border-base/10 pt-8"
            >
              <h3 className="text-xl font-bold text-charcoal mb-4 decoration-primary decoration-2 underline-offset-4">
                Online Program Development
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                Launch and scale online programs that deliver quality learning experiences. From instructional design to technology infrastructure, we help institutions build online offerings that extend reach while maintaining academic rigor.
              </p>
            </motion.div>

            {/* Enrollment Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="border-t-2 border-base/10 pt-8"
            >
              <h3 className="text-xl font-bold text-charcoal mb-4 decoration-primary decoration-2 underline-offset-4">
                Enrollment Management
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                Optimize enrollment with data-driven strategies. Our solutions help institutions identify prospective students, personalize outreach, and optimize financial aid—improving yield while managing costs.
              </p>
            </motion.div>

            {/* Workforce Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="border-t-2 border-base/10 pt-8"
            >
              <h3 className="text-xl font-bold text-charcoal mb-4 decoration-primary decoration-2 underline-offset-4">
                Workforce Development & Upskilling
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                Build programs that prepare learners for the jobs of today and tomorrow. We help institutions design competency-based programs, create industry partnerships, and develop credentials that employers value.
              </p>
            </motion.div>

            {/* Institutional Effectiveness */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="border-t-2 border-base/10 pt-8"
            >
              <h3 className="text-xl font-bold text-charcoal mb-4 decoration-primary decoration-2 underline-offset-4">
                Institutional Effectiveness
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                Improve institutional performance with data and analytics. Our solutions help institutions track outcomes, demonstrate value, and make evidence-based decisions about resource allocation and strategic priorities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Success Stories - Examples of our work style */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-12 max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-xl md:text-2xl font-semibold uppercase tracking-wide text-charcoal mb-10 md:mb-14"
          >
            Examples of Our Work
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full aspect-[21/9] min-h-[200px] mb-10 md:mb-14 overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80"
              alt=""
              className="w-full h-full object-cover grayscale"
              aria-hidden
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {[
              { title: "Increasing course completion", body: "A community college system deployed our adaptive learning platform across 50 campuses. The system personalizes content and pacing for each student, provides real-time feedback to instructors, and identifies students who need additional support—dramatically improving completion rates in gateway courses." },
              { title: "Growing revenue from online programs", body: "A regional university partnered with us to launch a portfolio of online graduate programs. We helped them design programs aligned with market demand, build the technology infrastructure, and develop marketing strategies—generating significant new revenue within three years." },
              { title: "Unifying student data and experience", body: "We helped a university replace fragmented systems with a unified student information and engagement platform. Students and staff now have a single place for records, advising, and communications—improving retention and satisfaction." },
              { title: "Enabling personalized learning at scale", body: "A K–12 district implemented our learning analytics and curriculum platform. Teachers get actionable insights on student progress; content adapts to pace and style; and leaders can see outcomes across schools to drive improvement." },
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-base md:text-lg font-bold text-charcoal mb-3">
                  {story.title}
                </h3>
                <p className="text-sm md:text-base text-charcoal/80 leading-relaxed">
                  {story.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured experts */}
      <section className="py-20 md:py-28 bg-subtle">
        <div className="container px-4 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="eb-garamond font-bold text-charcoal text-3xl md:text-4xl lg:text-5xl text-center mb-12 md:mb-16"
          >
            Featured experts
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
            {[
              { name: "Alastair Green", title: "Senior Partner, Washington DC", description: "Leads our education practice with expertise in learning analytics, institutional strategy, and digital transformation for universities and schools.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" },
              { name: "Ishaan Nangia", title: "Senior Partner, Melbourne", description: "Specializes in EdTech strategy, student success platforms, and operational excellence for higher education and K-12.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
              { name: "Nicola Sandri", title: "Senior Partner, Milan", description: "Focuses on international education, lifelong learning, and workforce development partnerships for education institutions.", image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=80" }
            ].map((expert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm border border-border p-6 md:p-8 flex flex-col items-center text-center"
              >
                <img src={expert.image} alt={expert.name} className="w-28 h-28 rounded-full object-cover mx-auto mb-4" />
                <h3 className="eb-garamond font-bold text-charcoal text-xl md:text-2xl mb-1">{expert.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{expert.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-4">{expert.description}</p>
                <a href={`mailto:contact@nexdyne.com?subject=Contact ${expert.name}`} className="inline-flex items-center justify-center w-10 h-10 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-all duration-200 ease-in-out" aria-label={`Email ${expert.name}`}>
                  <Mail className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex justify-center mt-12 md:mt-16">
            <Link href="/our-people">
              <button type="button" className="px-6 py-3 bg-white border border-primary text-primary font-semibold rounded-md hover:bg-primary/10 transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary">
                More experts
              </button>
            </Link>
          </motion.div>
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
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-charcoal mb-6">
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
                  <h3 className="text-xl font-bold text-charcoal mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed mb-3">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-primary text-sm font-semibold">
                    Learn more <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Industries */}
      <section className="py-20 md:py-28 bg-subtle">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-charcoal mb-6">
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
                <Link href={industry.link} className="group block bg-white p-6 hover:bg-base transition-colors duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-[0.15em] text-primary group-hover:text-white/60 transition-colors">
                        Industry
                      </span>
                      <h3 className="text-lg font-bold text-charcoal group-hover:text-white transition-colors mt-1">
                        {industry.title}
                      </h3>
                    </div>
                    <ChevronRight className="w-5 h-5 text-charcoal/30 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-base">
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
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary">
                    Contact Us
                  </Button>
                </Link>
                <Link href="/cases">
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold bg-transparent transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary">
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
