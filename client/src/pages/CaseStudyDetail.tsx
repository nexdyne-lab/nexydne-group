import { useEffect } from "react";
import { useRoute, useLocation, Link } from "wouter";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import CaseStudyContactForm from "@/components/CaseStudyContactForm";
import { BackToTop } from '@/components/BackToTop';
import { caseStudies } from "@/data/caseStudies";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Layers, 
  BarChart3, 
  Target,
  Lightbulb,
  ArrowRight,
  Download
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { CaseStudyPDFButton } from "@/components/CaseStudyPDFButton";

export default function CaseStudyDetail() {
  const [match, params] = useRoute("/case-studies/:id");
  const [location, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params?.id]);

  if (!match || !params) {
    return null;
  }

  const study = caseStudies.find(s => s.id === params.id);

  if (!study) {
    return (
      <div className="min-h-screen bg-[#051C2C] text-white flex items-center justify-center">
        <Navigation />
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Case Study Not Found</h1>
          <Button onClick={() => setLocation("/cases")} variant="outline" className="text-white border-white/20 bg-transparent">
            Return to Case Studies
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#051C2C] text-white selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title={`${study.title} | Case Study | NexDyne Technologies`}
        description={study.summary}
        canonical={`/case-studies/${params.id}`}
      />
      <Navigation />
      
      {/* DZ10 Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#051C2C] via-[#051C2C]/60 to-[#051C2C]"></div>
        
        <div className="container relative z-10 px-4 md:px-12">
          <Breadcrumbs />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#0077B5]">
                {study.capability}
              </span>
              <span className="text-white/30">|</span>
              <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60">
                {study.clientIndustry}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-bold tracking-tight leading-[1.05] mb-5 sm:mb-3 md:mb-4">
              {study.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-3xl mb-5 sm:mb-6 md:mb-8">
              {study.summary}
            </p>
            
            {/* PDF Download Button */}
            <CaseStudyPDFButton
              title={study.title}
              industry={study.clientIndustry}
              capability={study.capability}
              summary={study.summary}
              challenge={study.challenge}
              solution={study.solution}
              results={study.results}
              techStack={study.techStack}
              variant="hero"
            />
          </motion.div>
        </div>
      </section>

      {/* DZ10 Sticky Navigation */}
      <nav className="sticky top-20 bg-[#051C2C] text-white z-40 border-y border-white/10">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="flex items-center gap-1">
            <a href="#challenge" className="px-4 sm:px-5 md:px-6 py-3 sm:py-4 text-sm font-medium hover:bg-white/5 transition-colors hover:text-[#0077B5]">
              THE CHALLENGE
            </a>
            <a href="#solution" className="px-4 sm:px-5 md:px-6 py-3 sm:py-4 text-sm font-medium hover:bg-white/5 transition-colors hover:text-[#0077B5]">
              THE SOLUTION
            </a>
            <a href="#results" className="px-4 sm:px-5 md:px-6 py-3 sm:py-4 text-sm font-medium hover:bg-white/5 transition-colors hover:text-[#0077B5]">
              THE RESULTS
            </a>
          </div>
        </div>
      </nav>

      {/* DZ10 Challenge Section */}
      <section id="challenge" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-[#0077B5]">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/80 mb-4 sm:mb-6 block">
              The Challenge
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white max-w-4xl leading-tight">
              Understanding the problem
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-16 bg-white text-[#051C2C]">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-[#0077B5]/10 border border-[#0077B5]/20">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-[#0077B5]" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#051C2C]">The Challenge</h3>
            </div>
            <p className="text-lg text-[#051C2C]/70 leading-relaxed">
              {study.challenge}
            </p>
          </motion.div>
        </div>
      </section>

      {/* DZ10 Solution Section */}
      <section id="solution" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-[#0077B5]">
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white max-w-4xl leading-tight">
              Our approach
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-16 bg-white text-[#051C2C]">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-[#0077B5]/10 border border-[#0077B5]/20">
                <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-[#0077B5]" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#051C2C]">Our Solution</h3>
            </div>
            <p className="text-lg text-[#051C2C]/70 leading-relaxed mb-6 sm:mb-8 md:mb-12">
              {study.solution}
            </p>

            {/* Technology Stack */}
            <div className="p-4 sm:p-6 md:p-8 bg-[#051C2C]/5 rounded-lg sm:rounded-xl">
              <h4 className="text-lg font-semibold text-[#051C2C] mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-[#0077B5]" />
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {study.techStack.map((tech, index) => (
                  <span key={index} className="px-4 py-2 rounded-full bg-[#0077B5]/10 border border-[#0077B5]/20 text-sm text-[#051C2C] font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DZ10 Results Section */}
      <section id="results" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-[#0077B5]">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/80 mb-4 sm:mb-6 block">
              The Results
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white max-w-4xl leading-tight">
              Key outcomes
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-16 bg-white text-[#051C2C]">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-5 sm:mb-6 md:mb-8">
              <div className="p-2 rounded-lg bg-[#0077B5]/10 border border-[#0077B5]/20">
                <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-[#0077B5]" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#051C2C]">Key Results</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 sm:p-5 md:p-6">
              {study.results.map((result, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl bg-[#051C2C]/5 border border-[#051C2C]/10 hover:bg-[#051C2C]/10 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#0077B5] shrink-0 mt-1" />
                    <p className="text-[#051C2C]/80 font-medium">{result}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* DZ10 Contact Form Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <CaseStudyContactForm caseStudyTitle={study.title} />
        </div>
      </section>

      {/* DZ10 Back to Cases */}
      <section className="py-10 sm:py-12 lg:py-16 bg-[#051C2C]">
        <div className="container px-4 sm:px-6 md:px-12 text-center">
          <Link href="/cases">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-base font-semibold transition-all bg-transparent">
              <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Back to all case studies
            </Button>
          </Link>
        </div>
      </section>

      <BackToTop />
      <Footer />
    </div>
  );
}
