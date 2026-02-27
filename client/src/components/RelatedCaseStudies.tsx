import React from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface CaseStudy {
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

interface RelatedCaseStudiesProps {
  cases: CaseStudy[];
  title?: string;
  subtitle?: string;
}

export default function RelatedCaseStudies({ 
  cases, 
  title = "More Success Stories", 
  subtitle = "Explore how we help other organizations transform." 
}: RelatedCaseStudiesProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-base border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-6 sm:mb-8 md:mb-6 sm:mb-8 md:mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
            <p className="text-white/70">{subtitle}</p>
          </div>
          <Link href="/cases" className="hidden md:flex items-center text-secondary hover:text-white transition-colors font-medium">
            View all cases <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
          </Link>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-6 md:p-4 sm:p-6 md:p-8">
          {cases.map((study, index) => (
            <Link key={index} href={study.link} className="group block bg-base border border-white/10 rounded-xl sm:rounded-xl sm:rounded-2xl overflow-hidden hover:border-secondary/50 transition-all">
              <div className="h-48 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.category} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-4 sm:p-5 md:p-4 sm:p-5 md:p-6">
                <div className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">{study.category}</div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-secondary transition-colors">{study.title}</h3>
                <p className="text-white/70 text-sm">{study.description}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-8 md:hidden">
          <Link href="/cases" className="flex items-center text-secondary hover:text-white transition-colors font-medium">
            View all cases <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
