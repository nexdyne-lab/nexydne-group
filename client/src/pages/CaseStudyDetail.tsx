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
      <div className="min-h-screen bg-background text-charcoal flex items-center justify-center">
        <Navigation />
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <Button onClick={() => setLocation("/cases")} variant="outline" className="text-charcoal border-charcoal/25 bg-transparent hover:border-primary">
            Return to Case Studies
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-charcoal selection:bg-primary selection:text-white">
      <SEO 
        title={`${study.title} | Case Study | NexDyne Technologies`}
        description={study.summary}
        canonical={`/case-studies/${params.id}`}
      />
      <Navigation />
      
      {/* Neutral Hero Section */}
      <section className="relative w-full bg-background overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(70% 60% at 82% 14%, rgba(224,76,44,0.05) 0%, transparent 55%), radial-gradient(55% 55% at 6% 95%, rgba(111,68,163,0.045) 0%, transparent 55%)" }} />
        <div className="relative mx-auto max-w-[1400px] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="pt-28">
            <Breadcrumbs />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center min-h-[50vh] py-16 lg:py-20"
          >
            <div className="max-w-[920px]">
              <div className="flex items-center gap-3 mb-6">
                <span className="block h-[3px] w-9 bg-primary" />
                <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {study.capability} · {study.clientIndustry}
                </span>
              </div>
              <h1 className="text-charcoal font-bold tracking-[-0.035em] leading-[1.05] text-[clamp(2.2rem,4.8vw,3.8rem)]">
                {study.title}
              </h1>
              <p className="mt-7 text-[1.1rem] md:text-[1.2rem] leading-[1.55] text-muted-foreground max-w-[62ch]">
                {study.summary}
              </p>

              {/* PDF Download Button */}
              <div className="mt-8">
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
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DZ10 Sticky Navigation */}
      <nav className="sticky top-20 bg-background text-charcoal z-40 border-y border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="flex items-center gap-1">
            <a href="#challenge" className="px-4 sm:px-5 md:px-6 py-3 sm:py-4 text-sm font-medium hover:bg-charcoal/5 transition-colors hover:text-primary">
              THE CHALLENGE
            </a>
            <a href="#solution" className="px-4 sm:px-5 md:px-6 py-3 sm:py-4 text-sm font-medium hover:bg-charcoal/5 transition-colors hover:text-primary">
              THE SOLUTION
            </a>
            <a href="#results" className="px-4 sm:px-5 md:px-6 py-3 sm:py-4 text-sm font-medium hover:bg-charcoal/5 transition-colors hover:text-primary">
              THE RESULTS
            </a>
          </div>
        </div>
      </nav>

      {/* DZ10 Challenge Section */}
      <section id="challenge" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-charcoal text-white border-t-2 border-primary">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-amber mb-4 sm:mb-6 block">
              The Challenge
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-tight">
              Understanding the problem
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-16 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-charcoal">The Challenge</h3>
            </div>
            <p className="text-lg text-charcoal/70 leading-relaxed">
              {study.challenge}
            </p>
          </motion.div>
        </div>
      </section>

      {/* DZ10 Solution Section */}
      <section id="solution" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-charcoal text-white border-t-2 border-primary">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-amber mb-4 sm:mb-6 block">
              The Solution
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-tight">
              Our approach
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-16 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-charcoal">Our Solution</h3>
            </div>
            <p className="text-lg text-charcoal/70 leading-relaxed mb-6 sm:mb-8 md:mb-12">
              {study.solution}
            </p>

            {/* Technology Stack */}
            <div className="p-4 sm:p-6 md:p-8 bg-charcoal/5 rounded-lg sm:rounded-xl">
              <h4 className="text-lg font-semibold text-charcoal mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {study.techStack.map((tech, index) => (
                  <span key={index} className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-charcoal font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DZ10 Results Section */}
      <section id="results" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-charcoal text-white border-t-2 border-primary">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-amber mb-4 sm:mb-6 block">
              The Results
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-tight">
              Key outcomes
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-16 bg-white text-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-5 sm:mb-6 md:mb-8">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-charcoal">Key Results</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 sm:p-5 md:p-6">
              {study.results.map((result, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl bg-charcoal/5 border border-border hover:bg-charcoal/10 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary shrink-0 mt-1" />
                    <p className="text-charcoal/80 font-medium">{result}</p>
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
      <section className="py-10 sm:py-12 lg:py-16 bg-background">
        <div className="container px-4 sm:px-6 md:px-12 text-center">
          <Link href="/cases">
            <Button variant="outline" className="border-charcoal/25 text-charcoal hover:border-primary hover:bg-charcoal/5 px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-base font-semibold transition-all bg-transparent">
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
