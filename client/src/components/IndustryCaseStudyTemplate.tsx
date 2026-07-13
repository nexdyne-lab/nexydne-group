import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Quote } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { LucideIcon } from "lucide-react";

interface Metric {
  value: string;
  label: string;
}

interface Challenge {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Step {
  step: string;
  title: string;
  description: string;
}

interface Result {
  icon: LucideIcon;
  value: string;
  label: string;
  detail: string;
}

interface RelatedStudy {
  title: string;
  metric: string;
  label: string;
  link: string;
  image: string;
}

interface ClientProfile {
  industry: string;
  companySize: string;
  projectDuration: string;
  additionalInfo?: string;
  additionalLabel?: string;
}

export interface IndustryCaseStudyProps {
  // SEO
  seoTitle: string;
  seoDescription: string;
  canonical: string;
  
  // Hero
  industry: string;
  industryLink: string;
  title: string;
  subtitle: string;
  heroImage: string;
  
  // Metrics Bar
  metrics: Metric[];
  
  // Client Context
  clientContextTitle: string;
  clientContextIntro: string;
  clientContextBody: string;
  clientProfile: ClientProfile;
  
  // Challenge
  challengeTitle: string;
  challenges: Challenge[];
  
  // Approach
  approachTitle: string;
  approachIntro: string;
  steps: Step[];
  
  // Results
  resultsTitle: string;
  results: Result[];
  
  // Quote
  quote: string;
  quoteAuthor: string;
  quoteRole: string;
  
  // Related
  relatedStudies: RelatedStudy[];
  
  // CTA
  ctaTitle: string;
  ctaDescription: string;
}

export default function IndustryCaseStudyTemplate({
  seoTitle,
  seoDescription,
  canonical,
  industry,
  industryLink,
  title,
  subtitle,
  heroImage,
  metrics,
  clientContextTitle,
  clientContextIntro,
  clientContextBody,
  challengeTitle,
  challenges,
  approachTitle,
  approachIntro,
  steps,
  resultsTitle,
  results,
  quote,
  quoteAuthor,
  quoteRole,
  relatedStudies,
  ctaTitle,
  ctaDescription
}: IndustryCaseStudyProps) {
  return (
    <div className="min-h-screen bg-white font-sans text-charcoal selection:bg-primary selection:text-white">
      <SEO 
        title={seoTitle}
        description={seoDescription}
        canonical={canonical}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-charcoal">
        <div className="container px-4 sm:px-6 md:px-12">
          <Link href={industryLink}>
            <motion.button 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-white/60 hover:text-white mb-5 sm:mb-6 md:mb-5 sm:mb-6 md:mb-8 transition-colors"
            >
              <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
              Back to {industry}
            </motion.button>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1.5 bg-amber/20 text-amber text-xs font-bold uppercase tracking-wider rounded-full mb-6">
              {industry}
            </span>
            
            <h1 className="nx-h1 text-white mb-6">
              {title}
            </h1>
            
            <p className="nx-lead text-white/70 max-w-3xl">
              {subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics Bar — charcoal band, amber metric values (data-highlight role) */}
      <section className="bg-charcoal py-8">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:p-6 md:p-4 sm:p-6 md:p-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="nx-h2 text-amber mb-1">{metric.value}</div>
                <div className="text-sm text-white/80">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full h-[40vh] md:h-[50vh] relative overflow-hidden"
        >
          <img 
            src={heroImage}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </motion.div>
      </section>

      {/* Client Context */}
      <section className="nx-section bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <span className="nx-eyebrow text-primary mb-4 block">
              Client Context
            </span>
            <h2 className="nx-h2 text-charcoal mb-6">
              {clientContextTitle}
            </h2>
            <p className="nx-lead text-charcoal/70 mb-6">
              {clientContextIntro}
            </p>
            <p className="nx-lead text-charcoal/70">
              {clientContextBody}
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="nx-section bg-subtle">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="nx-eyebrow text-primary mb-4 block">
                The Challenge
              </span>
              <h2 className="nx-h2 text-charcoal mb-8 md:mb-10">
                {challengeTitle}
              </h2>

              <div className="space-y-6">
                {challenges.map((challenge, index) => (
                  <p
                    key={index}
                    className="text-lg md:text-xl leading-relaxed text-charcoal/70"
                  >
                    <span className="font-semibold text-charcoal">{challenge.title}.</span>{" "}
                    {challenge.description}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="nx-section bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="nx-eyebrow text-primary mb-4 block">
                Our Approach
              </span>
              <h2 className="nx-h2 text-charcoal mb-5 sm:mb-6 md:mb-5 sm:mb-6 md:mb-8">
                {approachTitle}
              </h2>
              
              <p className="nx-lead text-charcoal/70 mb-6 sm:mb-8 md:mb-6 sm:mb-8 md:mb-12">
                {approachIntro}
              </p>

              <div className="border-t border-charcoal/15">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="grid grid-cols-[2.5rem_1fr] md:grid-cols-[4rem_1fr] gap-4 md:gap-8 py-6 md:py-8 border-b border-charcoal/15"
                  >
                    <div className="text-2xl md:text-3xl font-semibold text-primary tabular-nums leading-none pt-1">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="nx-h3 text-charcoal mb-2">{step.title}</h3>
                      <p className="text-charcoal/70 leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="nx-section bg-charcoal text-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="nx-eyebrow text-amber mb-4 block">
                The Results
              </span>
              <h2 className="nx-h2 text-white mb-6 sm:mb-8 md:mb-6 sm:mb-8 md:mb-12">
                {resultsTitle}
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
                {results.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="border-t border-white/20 pt-5"
                  >
                    <div className="text-5xl md:text-6xl font-semibold text-amber tracking-tight leading-none mb-4">
                      {result.value}
                    </div>
                    <div className="text-base font-medium text-white mb-1.5">{result.label}</div>
                    <div className="text-white/55 text-sm leading-relaxed">{result.detail}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Quote */}
      <section className="nx-section bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <Quote className="w-16 h-16 text-primary/20 absolute -top-4 -left-4" />
              <blockquote className="relative z-10 pl-8 border-l-4 border-primary">
                <p className="text-2xl md:text-3xl text-charcoal leading-relaxed mb-6">
                  "{quote}"
                </p>
                <footer>
                  <div className="font-bold text-charcoal">{quoteAuthor}</div>
                  <div className="text-charcoal/60">{quoteRole}</div>
                </footer>
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="nx-section bg-subtle">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 sm:mb-8 md:mb-6 sm:mb-8 md:mb-12"
          >
            <h2 className="nx-h2 text-charcoal">
              Related Case Studies
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-4 sm:p-6 md:p-8">
            {relatedStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={study.link} className="group block">
                  <div className="relative overflow-hidden mb-4">
                    <img 
                      src={study.image}
                      alt={study.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">{study.metric}</div>
                  <div className="text-sm text-charcoal/60 mb-2">{study.label}</div>
                  <h3 className="nx-h3 text-charcoal group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="nx-section bg-charcoal">
        <div className="container px-4 sm:px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="nx-h2 text-white mb-6">
              {ctaTitle}
            </h2>
            <p className="text-xl text-white/70 mb-5 sm:mb-6 md:mb-5 sm:mb-6 md:mb-8 max-w-2xl mx-auto">
              {ctaDescription}
            </p>
            <Link href="/contact">
              <button className="px-8 py-4 bg-primary text-white font-semibold hover:bg-primary/90 transition-colors">
                Start a Conversation <ArrowRight className="inline ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
