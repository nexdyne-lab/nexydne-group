import { useEffect } from "react";
import { useLocation, Link } from "wouter";
import { motion } from "framer-motion";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, CheckCircle2, ArrowRight, Zap, BarChart3, Shield, Download } from "lucide-react";
import { CaseStudyPDFButton } from "@/components/CaseStudyPDFButton";
import { Button } from "@/components/ui/button";
import CaseStudyContactForm from "@/components/CaseStudyContactForm";
import Breadcrumb from '@/components/Breadcrumb';
import { BackToTop } from '@/components/BackToTop';
import { SEO } from "@/components/SEO";

export default function CaseStudyFintechPayment() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-base text-white font-sans selection:bg-primary selection:text-white">
      <SEO 
        title="Fintech Payment Automation Case Study" 
        description="How we scaled payment operations 10x without headcount growth, achieving 85% auto-resolution and 99.9% accuracy."
        canonical="/cases/fintech-payment-automation"
      />
      <Navbar />
      
      {/* Breadcrumb */}
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Case Studies', href: '/cases' },
        { label: 'Fintech Payment Processing' }
      ]} />

      {/* DZ10 Hero Section */}
      <section className="relative min-h-[55vh] sm:min-h-[65vh] md:min-h-[55vh] sm:min-h-[65vh] md:min-h-[70vh] flex items-center pt-16 sm:pt-16 sm:pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80" 
            alt="Fintech Payment Automation" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-base via-base/80 to-base/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-base via-transparent to-transparent" />
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
            
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
              Fintech • Automation
            </span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-white leading-[1.05] mb-5 sm:mb-3 md:mb-4">
              Scaling Payment Operations <span className="text-primary">10x Without Headcount Growth</span>
            </h1>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:p-6 md:p-8 border-t border-white/10 pt-8 mt-8">
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-primary mb-1">10x</div>
                <div className="text-sm text-white/60 uppercase tracking-wider">Volume Growth</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-primary mb-1">85%</div>
                <div className="text-sm text-white/60 uppercase tracking-wider">Auto-Resolution</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-primary mb-1">99.9%</div>
                <div className="text-sm text-white/60 uppercase tracking-wider">Accuracy</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-primary mb-1">18min</div>
                <div className="text-sm text-white/60 uppercase tracking-wider">Resolution Time</div>
              </div>
            </div>
            
            {/* PDF Download Button */}
            <div className="mt-10">
              <CaseStudyPDFButton
                title="Scaling Payment Operations 10x Without Headcount Growth"
                industry="Fintech"
                capability="Automation"
                summary="How we scaled payment operations 10x without headcount growth, achieving 85% auto-resolution and 99.9% accuracy."
                challenge="A fast-growing B2B fintech platform was struggling to keep up with transaction volume. Their operations team was manually handling exceptions, fraud alerts, and reconciliation issues."
                solution="Implemented an intelligent automation system that could handle complex decision-making processes while maintaining strict compliance and accuracy standards."
                results={[
                  "10x volume growth handled",
                  "85% auto-resolution rate",
                  "99.9% accuracy achieved",
                  "18 minute average resolution time"
                ]}
                metrics={[
                  { value: "10x", label: "Volume Growth" },
                  { value: "85%", label: "Auto-Resolution" },
                  { value: "99.9%", label: "Accuracy" },
                  { value: "18min", label: "Resolution Time" }
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
              <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block">
                The Challenge
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-charcoal mb-6">
                Manual operations bottleneck
              </h2>
              <div className="space-y-6 text-lg text-charcoal/70 leading-relaxed">
                <p>
                  A fast-growing B2B fintech platform was struggling to keep up with transaction volume. Their operations team was manually handling exceptions, fraud alerts, and reconciliation issues, creating a bottleneck that threatened to stall growth.
                </p>
                <p>
                  Hiring more staff wasn't a sustainable solution due to training time and cost. They needed an intelligent system that could automate complex decision-making processes while maintaining strict compliance and accuracy standards.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block">
                Our Approach
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-charcoal mb-6">
                AI-driven operations platform
              </h2>
              <div className="space-y-6 text-lg text-charcoal/70 leading-relaxed">
                <p>
                  We developed an AI-driven operations platform that automates exception handling and reconciliation. The system uses machine learning to classify issues and execute resolution workflows, only escalating the most complex cases to human operators.
                </p>
                <ul className="space-y-4 mt-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span>Built an intelligent rules engine for automated exception handling.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span>Implemented real-time fraud detection algorithms.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span>Created a unified dashboard for operations teams to manage escalated cases.</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DZ10 Impact Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-base">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
              Results
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white">
              Business Impact
            </h2>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-6 md:p-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                metric: "10x",
                title: "Volume Capacity",
                description: "The platform now handles ten times the transaction volume with the same team size, significantly improving unit economics."
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                metric: "85%",
                title: "Auto-Resolution",
                description: "The vast majority of exceptions are now resolved instantly by the system without human intervention."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                metric: "99.9%",
                title: "Accuracy",
                description: "Automated checks and balances have virtually eliminated manual errors in reconciliation and payment processing."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300"
              >
                <div className="mb-6 p-3 bg-primary/10 w-fit rounded-lg text-primary">
                  {item.icon}
                </div>
                <div className="text-4xl font-serif font-bold text-white mb-2">{item.metric}</div>
                <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
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
            <blockquote className="text-2xl md:text-3xl font-serif text-charcoal leading-relaxed mb-5 sm:mb-6 md:mb-8">
              "We've moved from firefighting mode to strategic growth. The automation platform has given us the confidence to scale aggressively."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-14 h-14 bg-base/10 rounded-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" alt="COO" className="w-full h-full object-cover" />
              </div>
              <div className="text-left">
                <div className="text-charcoal font-bold">Rachel Chen</div>
                <div className="text-primary text-sm font-medium">VP of Operations</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DZ10 Contact Form */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-base">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <CaseStudyContactForm caseStudyTitle="Fintech Payment Automation" />
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
              <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block">
                Related Work
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-charcoal">
                More Success Stories
              </h2>
            </motion.div>
            <Link href="/cases">
              <Button variant="outline" className="border-base/20 text-charcoal hover:bg-base/5 transition-all duration-300">
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
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop",
                category: "Healthcare",
                title: "Interoperable EHR Platform",
                description: "Unifying patient data across 12 locations for real-time access.",
                link: "/cases/healthcare-ehr-modernization"
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
                  <div className="relative overflow-hidden rounded-lg sm:rounded-xl aspect-[4/3] mb-6">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <div className="text-primary text-xs font-bold uppercase tracking-[0.15em] mb-3">{study.category}</div>
                  <h3 className="text-xl font-serif font-bold text-charcoal mb-2 group-hover:text-primary transition-colors leading-tight">
                    {study.title}
                  </h3>
                  <p className="text-charcoal/60 text-sm mb-4">{study.description}</p>
                  <div className="flex items-center text-primary text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Read case study <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Capabilities Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-base">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
              Explore Further
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
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
                title: "Artificial Intelligence",
                subtitle: "Intelligent Automation",
                description: "Deploy AI solutions that automate complex processes and unlock new operational efficiencies.",
                link: "/capabilities/artificial-intelligence"
              },
              {
                title: "Risk & Resilience",
                subtitle: "Fraud Detection",
                description: "Implement real-time fraud detection and risk management systems powered by machine learning.",
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
                  <div className="h-full p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:bg-white/10">
                    <div className="text-primary text-xs font-bold uppercase tracking-[0.15em] mb-2">{capability.title}</div>
                    <h3 className="text-xl font-serif font-bold text-white mb-4 group-hover:text-primary transition-colors">
                      {capability.subtitle}
                    </h3>
                    <p className="text-white/60 leading-relaxed text-sm mb-6">
                      {capability.description}
                    </p>
                    <div className="flex items-center text-primary text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      Explore capability <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
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
