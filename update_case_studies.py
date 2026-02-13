import os
import re

# DZ10 design system template for case study pages
DZ10_TEMPLATE = '''import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BackToTop } from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

export default function {component_name}() {{
  return (
    <div className="min-h-screen bg-[#051C2C] text-white selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="{seo_title} | Case Study | NexDyne Technologies" 
        description="{seo_description}"
        canonical="/cases/{case_slug}"
      />
      <Navigation />
      
      {{/* DZ10 Hero Section */}}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('{hero_image}')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#051C2C] via-[#051C2C]/60 to-[#051C2C]"></div>
        
        <div className="container relative z-10 px-4 md:px-12">
          <Breadcrumbs />
          <motion.div
            initial={{{{ opacity: 0, y: 30 }}}}
            animate={{{{ opacity: 1, y: 0 }}}}
            transition={{{{ duration: 0.8 }}}}
            className="max-w-4xl"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-6 block">
              Case Study · {industry}
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight leading-[1.05] mb-8">
              {hero_title}
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl">
              {hero_description}
            </p>
          </motion.div>
        </div>
      </section>

      {{/* DZ10 Stats Section */}}
      <section className="py-16 bg-[#051C2C] border-t border-white/10">
        <div className="container px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats_jsx}
          </div>
        </div>
      </section>

      {{/* DZ10 Sticky Navigation */}}
      <nav className="sticky top-20 bg-[#051C2C] text-white z-40 border-y border-white/10">
        <div className="container px-4 md:px-12">
          <div className="flex items-center gap-1">
            <a href="#opportunity" className="px-6 py-4 text-sm font-medium hover:bg-white/5 transition-colors hover:text-[#0077B5]">
              THE OPPORTUNITY
            </a>
            <a href="#solution" className="px-6 py-4 text-sm font-medium hover:bg-white/5 transition-colors hover:text-[#0077B5]">
              THE SOLUTION
            </a>
            <a href="#impact" className="px-6 py-4 text-sm font-medium hover:bg-white/5 transition-colors hover:text-[#0077B5]">
              THE IMPACT
            </a>
          </div>
        </div>
      </nav>

      {content_sections}

      <BackToTop />
      <Footer />
    </div>
  );
}}
'''

# List remaining case study files to update
case_study_files = [
    "CaseStudyConsultingKnowledge.tsx",
    "CaseStudyFintechPayment.tsx",
    "CaseStudyHealthcareAnalytics.tsx",
    "CaseStudyHealthcarePatient.tsx",
    "CaseStudyHospitalWorkflow.tsx",
    "CaseStudyInsuranceClaims.tsx",
    "CaseStudyLegalDocIntel.tsx",
    "CaseStudyTelehealthScaling.tsx",
    "CaseStudyWealthOnboarding.tsx",
    "CaseStudyBankCoreModernization.tsx",
    "CaseStudyHealthcareEHRModernization.tsx",
    "CaseStudyExecutiveDashboards.tsx",
    "CaseStudyPredictiveRevenue.tsx",
    "CaseStudyVarianceAnalysis.tsx",
]

print("Remaining case study files to update:")
for f in case_study_files:
    print(f"  - {f}")
print(f"\nTotal: {len(case_study_files)} files")
