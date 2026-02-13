import { motion } from "framer-motion";
import { ArrowRight, Users, TrendingUp, GraduationCap, BarChart3, Target, Calendar, UserCheck, Briefcase, Award } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { RelatedContent } from "@/components/RelatedContent";

export default function WorkforceOptimization() {
  return (
    <div className="min-h-screen bg-[#051C2C] font-sans text-white selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Workforce Optimization" 
        description="Empower your team with the right skills and tools. Design workforce strategies, training programs, and performance management systems."
        canonical="/capabilities/operations/workforce-optimization"
      />
      <Navbar />
      
      {/* DZ10 Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-[60vh] sm:min-h-[55vh] sm:min-h-[65vh] md:min-h-[55vh] sm:min-h-[65vh] md:min-h-[70vh] md:min-h-[60vh] sm:min-h-[55vh] sm:min-h-[65vh] md:min-h-[70vh] md:min-h-[75vh] md:min-h-[70vh] sm:min-h-[60vh] sm:min-h-[55vh] sm:min-h-[65vh] md:min-h-[70vh] md:min-h-[75vh] md:min-h-[85vh] flex items-center pt-16 sm:pt-16 sm:pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
            alt="Workforce Optimization" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#051C2C] via-[#051C2C]/80 to-[#051C2C]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051C2C] via-transparent to-transparent" />
        </div>
        
        <div className="container px-4 sm:px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
              Operations / Workforce
            </span>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold tracking-tight text-white leading-[1.05] mb-5 sm:mb-3 md:mb-4">
              Workforce <br />
              <span className="text-[#0077B5]">Optimization</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-2xl mb-10">
              Empower your team with the right skills and tools. Design workforce strategies, training programs, and performance management systems that drive productivity and engagement.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/contact">
                <Button className="bg-[#0077B5] hover:bg-[#005a8c] text-white px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-base font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#0077B5]/20">
                  Optimize Your Workforce
                </Button>
              </Link>
              <Link href="/cases">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-base font-semibold transition-all duration-300 bg-transparent hover:scale-[1.02]">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DZ10 Philosophy Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white text-[#051C2C]">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-8 sm:gap-6 sm:p-6 sm:p-8 md:p-12 lg:gap-8 sm:gap-6 sm:p-8 md:p-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#0077B5] mb-4 sm:mb-6 block">
                The Challenge
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight mb-5 sm:mb-6 md:mb-8">
                Your people are your <br />
                <span className="text-[#0077B5]">greatest asset.</span>
              </h2>
              
              <div className="space-y-6 text-lg text-[#051C2C]/70 leading-relaxed">
                <p>
                  In an era of talent scarcity and rapid change, workforce optimization is critical to operational success. Organizations struggle with skills gaps, low engagement, high turnover, and the challenge of doing more with less.
                </p>
                <p>
                  NexDyne brings <strong className="text-[#051C2C] font-semibold">strategic workforce expertise</strong> that transforms how organizations attract, develop, and retain talent. We design workforce strategies that align people capabilities with business objectives.
                </p>
              </div>

              <div className="pt-8 grid grid-cols-2 gap-4 sm:p-5 md:p-6">
                <div className="p-4 sm:p-5 md:p-6 bg-[#051C2C]/5 rounded-lg sm:rounded-xl">
                  <div className="text-4xl font-serif font-bold text-[#0077B5] mb-2">20-35%</div>
                  <p className="text-sm text-[#051C2C]/60 uppercase tracking-wider">Productivity Improvement</p>
                </div>
                <div className="p-4 sm:p-5 md:p-6 bg-[#051C2C]/5 rounded-lg sm:rounded-xl">
                  <div className="text-4xl font-serif font-bold text-[#0077B5] mb-2">30-50%</div>
                  <p className="text-sm text-[#051C2C]/60 uppercase tracking-wider">Turnover Reduction</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="p-4 sm:p-6 md:p-8 bg-[#051C2C]/5 rounded-lg sm:rounded-xl">
                <div className="text-4xl font-serif font-bold text-[#0077B5] mb-2">25-40%</div>
                <div className="text-sm text-[#051C2C]/60">Engagement increase</div>
              </div>
              <div className="p-4 sm:p-6 md:p-8 bg-[#051C2C]/5 rounded-lg sm:rounded-xl">
                <div className="text-4xl font-serif font-bold text-[#0077B5] mb-2">15-25%</div>
                <div className="text-sm text-[#051C2C]/60">Labor cost optimization</div>
              </div>
              <div className="col-span-2 relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-xl sm:shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" 
                  alt="Workforce Excellence" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051C2C] via-transparent to-transparent opacity-60" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DZ10 Offerings Grid */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-[#051C2C]">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
              Our Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              Comprehensive workforce solutions
            </h2>
            <p className="text-xl text-white/60 max-w-2xl">
              End-to-end capabilities to optimize your workforce and build a high-performance organization.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 sm:p-6 md:p-8 lg:gap-5 sm:p-7 md:p-5 sm:p-7 md:p-10">
            {[
              {
                icon: <Target className="w-7 h-7" />,
                title: "Workforce Planning",
                description: "Align workforce capacity with business demand through strategic planning, skills forecasting, and scenario modeling."
              },
              {
                icon: <GraduationCap className="w-7 h-7" />,
                title: "Learning & Development",
                description: "Build capabilities through targeted training programs, competency frameworks, and career development pathways."
              },
              {
                icon: <BarChart3 className="w-7 h-7" />,
                title: "Performance Management",
                description: "Design performance systems that drive accountability, recognize achievement, and enable continuous improvement."
              },
              {
                icon: <Calendar className="w-7 h-7" />,
                title: "Scheduling & Deployment",
                description: "Optimize workforce scheduling to match demand patterns, reduce overtime, and improve work-life balance."
              },
              {
                icon: <UserCheck className="w-7 h-7" />,
                title: "Employee Engagement",
                description: "Build a culture of engagement through communication, recognition, and meaningful work design."
              },
              {
                icon: <Award className="w-7 h-7" />,
                title: "Compensation & Rewards",
                description: "Design competitive compensation structures and incentive programs that attract and retain top talent."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full flex flex-col">
                  <div className="mb-6 p-3 bg-white/5 w-fit rounded-lg text-[#0077B5] group-hover:bg-[#0077B5] group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  
                  <h3 className="text-xl font-serif font-bold text-white mb-4 group-hover:text-[#0077B5] transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-white/60 leading-relaxed text-sm flex-grow">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DZ10 Methodology Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white text-[#051C2C]">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 sm:gap-6 sm:p-6 sm:p-8 md:p-12 lg:gap-8 sm:gap-6 sm:p-8 md:p-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#0077B5] mb-4 sm:mb-6 block">
                Our Approach
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
                The NexDyne <span className="text-[#0077B5]">Methodology</span>
              </h2>
              <p className="text-lg text-[#051C2C]/70 leading-relaxed mb-5 sm:mb-6 md:mb-8">
                We take a holistic approach to workforce optimization, combining data analytics with deep HR expertise to design solutions that improve productivity, engagement, and retention.
              </p>
              
              <div className="space-y-6">
                {[
                  { num: "01", title: "Assess", desc: "Analyze workforce data, conduct surveys, and benchmark against best practices to identify opportunities." },
                  { num: "02", title: "Design", desc: "Develop tailored workforce strategies, programs, and systems aligned with business objectives." },
                  { num: "03", title: "Implement", desc: "Execute with change management support, training, and technology enablement." },
                  { num: "04", title: "Sustain", desc: "Build capabilities and governance to maintain gains and drive continuous improvement." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="text-2xl font-serif font-bold text-[#0077B5]">{item.num}</div>
                    <div>
                      <h3 className="text-lg font-bold text-[#051C2C] mb-1">{item.title}</h3>
                      <p className="text-[#051C2C]/60 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-xl sm:shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
                  alt="Workforce Methodology" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051C2C] via-transparent to-transparent opacity-60" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DZ10 Case Studies Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-[#051C2C]">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 md:mb-16 gap-4 sm:p-5 md:p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
                Our Impact
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white">
                Workforce transformations
              </h2>
            </motion.div>
            <Link href="/cases">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent transition-all duration-300 hover:scale-[1.02]">
                View all case studies
              </Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 sm:p-6 md:p-8 lg:gap-5 sm:p-7 md:p-5 sm:p-7 md:p-10">
            {[
              {
                title: "Retail chain reduces turnover by 40% with engagement program",
                category: "Employee Engagement",
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
              },
              {
                title: "Manufacturer builds skills academy for digital transformation",
                category: "Learning & Development",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
              },
              {
                title: "Healthcare provider optimizes scheduling to reduce overtime 30%",
                category: "Workforce Planning",
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&q=80"
              }
            ].map((study, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg sm:rounded-xl aspect-[4/3] mb-6">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="text-[#0077B5] text-xs font-bold uppercase tracking-[0.15em] mb-3">{study.category}</div>
                <h3 className="text-xl font-serif font-bold text-white mb-4 group-hover:text-[#0077B5] transition-colors leading-tight">
                  {study.title}
                </h3>
                <div className="flex items-center text-white text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Read case study <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DZ10 Why NexDyne Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white text-[#051C2C]">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#0077B5] mb-4 sm:mb-6 block">
              Why NexDyne
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#051C2C] mb-6">
              The workforce partner <br />you've been looking for
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:p-6 md:p-8">
            {[
              { metric: "60+", label: "Workforce Projects" },
              { metric: "30%", label: "Average Productivity Gain" },
              { metric: "40%", label: "Turnover Reduction" },
              { metric: "20+", label: "Industries Served" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-4 sm:p-6 md:p-8 bg-[#051C2C]/5 rounded-lg sm:rounded-xl"
              >
                <div className="text-5xl font-serif font-bold text-[#0077B5] mb-2">{item.metric}</div>
                <p className="text-sm text-[#051C2C]/60 uppercase tracking-wider">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <RelatedContent 
        items={[
          {
            title: "Building a High-Performance Culture",
            category: "Leadership",
            link: "/insights/high-performance-culture",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
          },
          {
            title: "The Future of Work: Trends and Strategies",
            category: "Workforce",
            link: "/insights/future-of-work",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
          },
          {
            title: "Employee Engagement Best Practices",
            category: "HR",
            link: "/insights/employee-engagement-best-practices",
            image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
          }
        ]}
      />

      <Footer />
    </div>
  );
}
