import { motion } from "framer-motion";
import { ArrowRight, Code, Smartphone, Globe, Layers, Zap, Shield } from "lucide-react";
import BainHoverCard from "@/components/BainHoverCard";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function AppDevelopment() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#051C2C] selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Application Development" 
        description="Build custom web and mobile applications that solve real business problems. From concept to production with no compromises on quality or user experience."
        canonical="/solutions/enterprise-transformation/app-development"
      />
      <Navigation />
      
      {/* Hero Section - Dark Background */}
      <section className="relative min-h-[70vh] flex items-center pt-20 bg-black">
        <div className="container px-4 md:px-12 grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/solutions/enterprise-transformation" className="inline-flex items-center text-white/60 hover:text-white mb-6 text-sm transition-colors">
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Technology
            </Link>
            
            <h1 className="text-5xl md:text-7xl  font-bold tracking-tight text-white leading-[0.95] mb-3 sm:mb-4 eb-garamond">
              Application<br />
              <span className="text-[#0077B5]">Development</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl mb-10">
              Build web and mobile applications that fit your operations like a custom suit. We design, develop, and deploy software that solves real business problems.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button className="bg-white hover:bg-gray-200 text-black px-8 py-6 text-base font-semibold transition-all">
                  Start Your Project
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold transition-all bg-transparent">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80" 
              alt="Application Development" 
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Our Experience & Impact - Bain Style with Border-Left Accent */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="container px-4 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl eb-garamond font-bold text-[#051C2C] mb-12"
          >
            Our Experience & Impact
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: "200+", label: "custom applications delivered across web and mobile platforms" },
              { metric: "40%", label: "average reduction in development time through modern practices" },
              { metric: "99.9%", label: "uptime achieved for mission-critical applications" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${index > 0 ? 'border-l border-gray-200 pl-8' : ''}`}
              >
                <div>
                  <div className="text-5xl md:text-6xl font-bold text-[#051C2C] mb-4">{item.metric}</div>
                  <p className="text-lg text-[#051C2C]/60">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Thought Leadership - 2-Column Layout */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C] leading-tight">
                Custom software is your competitive moat—or your Achilles heel.
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6 text-lg text-[#051C2C]/80 leading-relaxed"
            >
              <p>
                Off-the-shelf software forces you to adapt your business to its limitations. Custom applications adapt to your business—automating unique workflows, integrating with existing systems, and delivering experiences that differentiate you from competitors.
              </p>
              <p>
                But custom development is risky. Projects run over budget, miss deadlines, and deliver products nobody wants to use. The difference between success and failure lies in the approach: user-centered design, iterative delivery, and relentless focus on business outcomes.
              </p>
              <p>
                We've built applications for startups and Fortune 500 companies. We know how to balance speed with quality, innovation with reliability, and ambition with pragmatism.
              </p>
              <ul className="space-y-3 mt-6">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#06b6d4] mt-2 flex-shrink-0"></span>
                  <span>User-centered design that drives adoption and satisfaction</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#06b6d4] mt-2 flex-shrink-0"></span>
                  <span>Modern architectures that scale with your business</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#06b6d4] mt-2 flex-shrink-0"></span>
                  <span>Agile delivery that reduces risk and accelerates time-to-value</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach Section - 4-Step Numbered Format */}
      <section className="py-24 bg-[#0a1628] text-white">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
              Our Approach
            </span>
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold">
              We build software that solves real problems, not just checks boxes.
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {[
              { num: "01", title: "Discover", desc: "Understand your users, workflows, and pain points through research, interviews, and process mapping." },
              { num: "02", title: "Design", desc: "Prototype and validate solutions before writing code. Design sprints compress months of uncertainty into weeks." },
              { num: "03", title: "Build", desc: "Deliver working software every two weeks. Each sprint produces something real that users can test." },
              { num: "04", title: "Evolve", desc: "Launch is the beginning. We establish monitoring and CI/CD pipelines for rapid iteration based on usage." }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-7xl font-serif text-white/10 mb-4">{step.num}</div>
                <h3 className="text-xl font-serif font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/contact">
              <Button className="bg-[#0077B5] hover:bg-[#005a8c] text-white px-8 py-6 text-base font-semibold transition-all">
                Start Your Project
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How We Can Help - H100 Capability Cards */}
      <section className="py-24 bg-[#f8f8f7]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
              How We Can Help
            </span>
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C] mb-6">
              Our Application Development Capabilities
            </h2>
            <p className="text-xl text-[#051C2C]/60 max-w-2xl">
              Full-stack development services from concept to production.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Web Applications",
                description: "Modern web apps built with React, Vue, or Angular. Progressive web apps that work offline. Server-side rendering for performance and SEO."
              },
              {
                title: "Mobile Applications",
                description: "Native iOS and Android apps, or cross-platform with React Native and Flutter. We choose the right approach based on your requirements and budget."
              },
              {
                title: "Custom Software",
                description: "Enterprise applications, internal tools, and workflow automation. We build software that fits your processes, not the other way around."
              },
              {
                title: "API Development",
                description: "RESTful and GraphQL APIs that power your digital ecosystem. Microservices architectures that scale independently and deploy continuously."
              },
              {
                title: "Low-Code Platforms",
                description: "Accelerate development with platforms like OutSystems, Mendix, and Power Apps. Right-sized solutions for rapid prototyping and citizen development."
              },
              {
                title: "Legacy Modernization",
                description: "Migrate aging applications to modern architectures. Strangler fig patterns that reduce risk while preserving business continuity."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <BainHoverCard title={item.title} description={item.description} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Results Section */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
              Client Results
            </span>
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C]">
              Applications that transform businesses
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                category: "HEALTHCARE",
                title: "Patient portal reduces call center volume by 45%",
                description: "A regional health system launched a mobile-first patient portal that enables self-service scheduling, prescription refills, and secure messaging. Patient satisfaction increased while operational costs decreased.",
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
              },
              {
                category: "LOGISTICS",
                title: "Real-time tracking app improves delivery accuracy to 99.5%",
                description: "A logistics company replaced paper-based processes with a mobile app for drivers and a web dashboard for dispatchers. Real-time visibility transformed customer service and operational efficiency.",
                image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80"
              }
            ].map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href="/case-studies" className="block">
                  <div className="relative overflow-hidden rounded-xl aspect-[16/10] mb-6">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#0077B5] text-white text-xs font-bold uppercase tracking-wider rounded">
                        {study.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 group-hover:text-[#0077B5] transition-colors leading-tight">
                    {study.title}
                  </h3>
                  <p className="text-[#051C2C]/60 text-sm leading-relaxed mb-4">
                    {study.description}
                  </p>
                  <div className="flex items-center text-[#0077B5] text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Read case study <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights Section */}
      <section className="py-24 bg-[#f8f8f7]">
        <div className="container px-4 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
                Insights
              </span>
              <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C]">
                Latest Insights
              </h2>
              <p className="text-xl text-[#051C2C]/60 mt-4">
                Expert perspectives on application development.
              </p>
            </motion.div>
            <Link href="/insights">
              <Button variant="outline" className="border-[#051C2C]/20 text-[#051C2C] hover:bg-[#051C2C]/5 bg-transparent transition-all duration-300">
                View all insights
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "Development",
                readTime: "7 min read",
                title: "The Build vs. Buy Decision Framework",
                description: "When custom development makes sense and when off-the-shelf solutions are the smarter choice.",
                link: "/insights/build-vs-buy"
              },
              {
                category: "Architecture",
                readTime: "8 min read",
                title: "Microservices: Right-Sizing Your Architecture",
                description: "How to avoid the complexity trap while gaining the benefits of distributed systems.",
                link: "/insights/microservices-rightsizing"
              },
              {
                category: "Mobile",
                readTime: "6 min read",
                title: "Native vs. Cross-Platform: The 2024 Calculus",
                description: "How React Native and Flutter have changed the mobile development equation.",
                link: "/insights/native-vs-crossplatform"
              }
            ].map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={insight.link} className="group block h-full">
                  <div className="h-full p-8 rounded-xl bg-white border border-gray-200 hover:border-[#0077B5]/50 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[#0077B5] text-xs font-bold uppercase tracking-wider">{insight.category}</span>
                      <span className="text-[#051C2C]/40">•</span>
                      <span className="text-[#051C2C]/60 text-sm">{insight.readTime}</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 group-hover:text-[#0077B5] transition-colors leading-tight">
                      {insight.title}
                    </h3>
                    <p className="text-[#051C2C]/60 text-sm leading-relaxed mb-6">
                      {insight.description}
                    </p>
                    <div className="flex items-center text-[#0077B5] text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      Read article <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Capabilities Section */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
              Related Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C] mb-6">
              Explore related capabilities
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Integration & APIs",
                description: "Connect your applications to the systems and data they need. Modern API platforms that enable seamless data flow across your enterprise.",
                link: "/solutions/enterprise-transformation/api-integration"
              },
              {
                title: "Cloud Infrastructure",
                description: "Scalable, secure foundations for your applications. Build on AWS, Azure, or GCP with architectures that grow with your business.",
                link: "/solutions/enterprise-transformation/cloud-infrastructure"
              },
              {
                title: "AI & Automation",
                description: "Embed intelligence into your applications. From chatbots to predictive analytics, we help you build smarter software.",
                link: "/solutions/enterprise-transformation/ai-automation"
              }
            ].map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <BainHoverCard title={capability.title} description={capability.description} link={capability.link} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Blue Background */}
      <section className="py-24 bg-[#0077B5]">
        <div className="container px-4 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-white mb-6">
              Ready to build your next application?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Let's discuss how custom software can solve your unique business challenges and create competitive advantage.
            </p>
            <Link href="/contact">
              <Button className="bg-white hover:bg-gray-100 text-[#051C2C] px-10 py-6 text-lg font-semibold transition-all">
                Start Your Project
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
