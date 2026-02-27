import React from 'react';
import { Link } from 'wouter';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, BarChart3, Quote } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface Metric {
  value: string;
  label: string;
}

interface CaseStudyTemplateProps {
  client: string;
  industry: string;
  title: string;
  subtitle: string;
  heroImage: string;
  challenge: string;
  solution: string;
  impact: string;
  metrics: Metric[];
  quote?: {
    text: string;
    author: string;
    role: string;
  };
  tags: string[];
  relatedCapability: {
    title: string;
    link: string;
  };
}

export default function CaseStudyTemplate({
  client,
  industry,
  title,
  subtitle,
  heroImage,
  challenge,
  solution,
  impact,
  metrics,
  quote,
  tags,
  relatedCapability
}: CaseStudyTemplateProps) {
  return (
    <div className="min-h-screen bg-white text-charcoal font-sans selection:bg-blue-100">
      <Navigation />

      {/* Hero Section */}
      <header className="pt-32 pb-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 text-sm font-bold text-blue-700 uppercase tracking-wider mb-6">
              <span>{industry}</span>
              <span className="text-muted-foreground/50">•</span>
              <span>{client}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-charcoal mb-5 sm:mb-6 md:mb-5 sm:mb-6 md:mb-8 leading-[1.1]">
              {title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl font-light font-serif">
              {subtitle}
            </p>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="w-full h-[60vh] overflow-hidden relative">
        <img 
          src={heroImage} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-60"></div>
      </div>

      <main className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 sm:gap-12 lg:gap-16">
          
          {/* Left Column: Key Metrics & Tags */}
          <div className="lg:col-span-4 space-y-12 order-2 lg:order-1">
            <div className="bg-slate-900 text-white p-4 sm:p-6 md:p-4 sm:p-6 md:p-8 rounded-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider mb-5 sm:mb-6 md:mb-5 sm:mb-6 md:mb-8 border-b border-slate-700 pb-4">Key Results</h3>
              <div className="space-y-8">
                {metrics.map((metric, index) => (
                  <div key={index}>
                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-blue-400 mb-2">{metric.value}</div>
                    <div className="text-muted-foreground/50 text-sm leading-relaxed">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-charcoal uppercase tracking-wider mb-6">Capabilities</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-slate-100 text-muted-foreground text-sm font-medium rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 sm:p-5 md:p-4 sm:p-5 md:p-6 bg-blue-50 border border-blue-100 rounded-sm">
              <h4 className="font-bold text-blue-900 mb-2">Ready to achieve similar results?</h4>
              <p className="text-sm text-blue-800 mb-4">See how our {relatedCapability.title} practice can help.</p>
              <Link href={relatedCapability.link}>
                <Button variant="link" className="p-0 h-auto text-blue-700 font-bold hover:text-blue-900">
                  Explore Capability <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-8 space-y-16 order-1 lg:order-2">
            
            <section>
              <h2 className="text-3xl font-serif font-bold text-charcoal mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-blue-600 block"></span>
                The Challenge
              </h2>
              <div className="prose prose-lg prose-slate text-muted-foreground leading-relaxed">
                {challenge.split('\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold text-charcoal mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-blue-600 block"></span>
                The Solution
              </h2>
              <div className="prose prose-lg prose-slate text-muted-foreground leading-relaxed">
                {solution.split('\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </section>

            {quote && (
              <blockquote className="border-l-4 border-blue-600 pl-8 py-2 my-12 bg-slate-50 p-4 sm:p-6 md:p-4 sm:p-6 md:p-8 rounded-r-sm">
                <Quote className="w-8 h-8 text-blue-200 mb-4" />
                <p className="text-2xl font-serif italic text-charcoal mb-6 leading-relaxed">
                  "{quote.text}"
                </p>
                <footer>
                  <div className="font-bold text-charcoal">{quote.author}</div>
                  <div className="text-muted-foreground text-sm">{quote.role}</div>
                </footer>
              </blockquote>
            )}

            <section>
              <h2 className="text-3xl font-serif font-bold text-charcoal mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-blue-600 block"></span>
                The Impact
              </h2>
              <div className="prose prose-lg prose-slate text-muted-foreground leading-relaxed">
                {impact.split('\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </section>

            <Separator className="my-12" />

            <div className="flex justify-between items-center">
              <Link href="/cases">
                <Button variant="outline" className="gap-2">
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 rotate-180" /> Back to all cases
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="gap-2 bg-blue-700 hover:bg-blue-800 text-white">
                  Start your project <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
