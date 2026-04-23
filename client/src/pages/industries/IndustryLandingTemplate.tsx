import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { ArrowRight, CheckCircle2, FileText, BookOpen, TrendingUp, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface CaseStudyLink {
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  href: string;
}

export interface ResourceLink {
  type: "whitepaper" | "article" | "guide";
  title: string;
  description: string;
  href: string;
}

export interface IndustryChallenge {
  title: string;
  description: string;
}

export interface IndustrySolution {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface IndustryLandingProps {
  industry: string;
  tagline: string;
  heroDescription: string;
  heroImage: string;
  challenges: IndustryChallenge[];
  solutions: IndustrySolution[];
  caseStudies: CaseStudyLink[];
  resources: ResourceLink[];
  stats: {
    value: string;
    label: string;
  }[];
  whitepaper?: {
    title: string;
    description: string;
    slug: string;
  };
}

export default function IndustryLandingTemplate({
  industry,
  tagline,
  heroDescription,
  heroImage,
  challenges,
  solutions,
  caseStudies,
  resources,
  stats,
  whitepaper,
}: IndustryLandingProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-base via-base to-base text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={heroImage}
            alt={industry}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-base via-base/90 to-transparent" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <Breadcrumbs />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl eb-garamond font-bold mb-2 sm:mb-3">
              {industry}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-200 mb-3 sm:mb-4 ">
              {tagline}
            </p>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-6 sm:mb-8">
              {heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              >
                Talk to an Expert
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#case-studies"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 sm:py-12 bg-slate-50 border-b">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl eb-garamond font-bold text-charcoal mb-4">
              Industry Challenges We Address
            </h2>
            <p className="text-lg text-muted-foreground">
              We understand the unique pressures facing {industry.toLowerCase()} organizations today.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-slate-200 hover:border-primary hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-charcoal mb-3">
                  {challenge.title}
                </h3>
                <p className="text-muted-foreground">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl eb-garamond font-bold text-charcoal mb-4">
              Our Solutions for {industry}
            </h2>
            <p className="text-lg text-muted-foreground">
              Tailored approaches that deliver measurable results for your organization.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-base rounded-lg mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground">{solution.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-12 sm:py-16 lg:py-20">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl eb-garamond font-bold text-charcoal mb-4">
                {industry} Success Stories
              </h2>
              <p className="text-lg text-muted-foreground">
                See how we've helped organizations like yours achieve transformational results.
              </p>
            </div>
            <Link
              href="/case-studies"
              className="hidden md:inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              View All Case Studies
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {caseStudies.map((study, index) => (
              <Link
                key={index}
                href={study.href}
                className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="p-6">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-primary">
                      {study.metric}
                    </span>
                    <span className="text-sm text-muted-foreground">{study.metricLabel}</span>
                  </div>
                  <h3 className="text-lg font-bold text-charcoal group-hover:text-primary transition-colors mb-2">
                    {study.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{study.description}</p>
                </div>
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Read Case Study
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 md:hidden text-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-primary font-semibold"
            >
              View All Case Studies
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_400px] gap-8 lg:gap-12">
            {/* Resources List */}
            <div>
              <h2 className="text-3xl md:text-4xl eb-garamond font-bold text-charcoal mb-4">
                {industry} Resources
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Insights, guides, and best practices for {industry.toLowerCase()} leaders.
              </p>
              <div className="space-y-4">
                {resources.map((resource, index) => {
                  const TypeIcon = resource.type === "whitepaper" 
                    ? FileText 
                    : resource.type === "guide" 
                    ? BookOpen 
                    : TrendingUp;
                  return (
                    <Link
                      key={index}
                      href={resource.href}
                      className="group flex items-start gap-4 bg-white p-6 rounded-xl border border-slate-200 hover:border-primary hover:shadow-md transition-all"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <TypeIcon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <div className="flex-1">
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">
                          {resource.type}
                        </span>
                        <h3 className="text-lg font-bold text-charcoal group-hover:text-primary transition-colors">
                          {resource.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mt-1">
                          {resource.description}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground/70 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Whitepaper Download Form */}
            {whitepaper && (
              <div className="lg:sticky lg:top-8 lg:self-start">
                <LeadCaptureForm
                  whitepaperTitle={whitepaper.title}
                  whitepaperDescription={whitepaper.description}
                  downloadUrl={`/resources/whitepapers/${whitepaper.slug}`}
                  variant="default"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-base text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl eb-garamond font-bold mb-6">
              Ready to Transform Your {industry} Operations?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Let's discuss how we can help you overcome your specific challenges and achieve measurable results.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              >
                Schedule a Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              >
                Explore More Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
