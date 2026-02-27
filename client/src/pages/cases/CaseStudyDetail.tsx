import { useEffect } from "react";
import { useRoute } from "wouter";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Calendar, TrendingUp, CheckCircle2, Quote, ArrowLeft, Download } from "lucide-react";
import { CaseStudyPDFButton } from "@/components/CaseStudyPDFButton";
import { Link } from "wouter";

// This would typically come from a CMS or API
const CASE_STUDIES = {
  "freight-connect": {
    title: "FreightConnect",
    subtitle: "Disrupting Regional Logistics",
    industry: "Logistics & Supply Chain",
    challenge: "A regional logistics carrier was losing market share to digital-first competitors. Their manual brokerage process resulted in high overhead, slow quotes, and 40% empty miles for their fleet.",
    solution: "A proprietary digital freight marketplace was developed to connect shippers directly with drivers. The platform features an algorithmic pricing engine, real-time route optimization, and automated document handling, effectively removing the middleman.",
    impact: [
      { value: "$12M", label: "GMV in Year 1" },
      { value: "40%", label: "Reduction in Empty Miles" },
      { value: "2hrs", label: "Avg. Quote Time (down from 2 days)" }
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80",
    quote: "This wasn't just an app build; it was a complete business model reconstruction. We are now operating at the speed of a tech startup.",
    author: "COO, Regional Logistics Leader",
    timeline: "4 Months"
  },
  "smart-stock": {
    title: "SmartStock",
    subtitle: "IoT-Driven Retail Intelligence",
    industry: "Retail & IoT",
    challenge: "A mid-market retail chain struggled with stockouts and overstocking due to delayed inventory data. Manual counts were inaccurate and costly.",
    solution: "A custom IoT sensor network was deployed across 50 stores, feeding real-time shelf data into a cloud-based inventory management system. This infrastructure now predicts demand and automates replenishment orders with high precision.",
    impact: [
      { value: "35%", label: "Reduction in Waste" },
      { value: "99.8%", label: "Inventory Accuracy" },
      { value: "15%", label: "Increase in Sales" }
    ],
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80",
    quote: "The visibility we now have is unprecedented. We know exactly what's on every shelf in every store, in real-time.",
    author: "VP of Operations, Retail Chain",
    timeline: "5 Months"
  },
  "quick-lend": {
    title: "QuickLend",
    subtitle: "Automated Micro-Lending Engine",
    industry: "FinTech",
    challenge: "A challenger bank wanted to offer micro-loans to underserved customers but couldn't process applications fast enough to be profitable with traditional underwriting.",
    solution: "An automated loan origination platform was engineered using alternative data scoring (utility payments, mobile usage) to assess risk. The system now handles KYC, scoring, and funding in under 10 minutes.",
    impact: [
      { value: "50k+", label: "Loans Processed" },
      { value: "<10m", label: "Approval Time" },
      { value: "0.5%", label: "Default Rate (vs 2.0% avg)" }
    ],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80",
    quote: "Speed has become our competitive advantage. We can now serve thousands of customers who were previously invisible to the banking system.",
    author: "Founder, Challenger Bank",
    timeline: "6 Months"
  }
};

export default function CaseStudyDetail() {
  const [match, params] = useRoute("/cases/:slug");
  const slug = params?.slug;
  const study = slug ? CASE_STUDIES[slug as keyof typeof CASE_STUDIES] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!study) {
    return (
      <div className="min-h-screen bg-base text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <Link href="/venture-portfolio">
            <button className="text-secondary hover:underline flex items-center gap-2 mx-auto">
              <ArrowLeft className="w-4 h-4" /> Back to Portfolio
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base text-white font-sans selection:bg-secondary selection:text-base">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={study.image} 
            alt={study.title} 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-base via-base/90 to-base" />
        </div>

        <div className="container px-4 md:px-12 relative z-10">
          <Link href="/venture-portfolio">
            <button className="text-muted-foreground/70 hover:text-white flex items-center gap-2 mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Portfolio
            </button>
          </Link>
          
          <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider rounded-full mb-6">
            {study.industry}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {study.title}
          </h1>
          <p className="text-2xl text-muted-foreground/50 mb-8 font-light">
            {study.subtitle}
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground/70 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-secondary" />
              <span>Timeline: <span className="text-white font-bold">{study.timeline}</span></span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-secondary" />
              <span>Outcome: <span className="text-white font-bold">Market Leader</span></span>
            </div>
          </div>
          
          {/* PDF Download Button */}
          <CaseStudyPDFButton
            title={study.title}
            industry={study.industry}
            summary={study.subtitle}
            challenge={study.challenge}
            solution={study.solution}
            results={study.impact.map(i => `${i.value} ${i.label}`)}
            metrics={study.impact.map(i => ({ value: i.value, label: i.label }))}
            testimonial={{
              quote: study.quote,
              author: study.author,
              role: study.industry
            }}
            variant="hero"
          />
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-base">
        <div className="container px-4 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Main Content */}
            <div className="lg:col-span-7 space-y-16">
              <div>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-8 h-1 bg-secondary" />
                  The Challenge
                </h2>
                <p className="text-xl text-muted-foreground/50 leading-relaxed">
                  {study.challenge}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-8 h-1 bg-secondary" />
                  The Solution
                </h2>
                <p className="text-xl text-muted-foreground/50 leading-relaxed mb-8">
                  {study.solution}
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-1" />
                    <span className="text-muted-foreground/50">Rapid prototyping and user testing with real stakeholders.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-1" />
                    <span className="text-muted-foreground/50">Cloud-native architecture designed for infinite scalability.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-1" />
                    <span className="text-muted-foreground/50">Seamless integration with legacy enterprise systems.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar / Impact */}
            <div className="lg:col-span-5">
              <div className="bg-base border border-white/10 rounded-2xl p-8 sticky top-32">
                <h3 className="text-2xl font-bold mb-8">Impact Delivered</h3>
                
                <div className="space-y-8 mb-12">
                  {study.impact.map((item, index) => (
                    <div key={index}>
                      <div className="text-4xl font-bold text-secondary mb-1">{item.value}</div>
                      <div className="text-sm text-muted-foreground/70 uppercase tracking-wider">{item.label}</div>
                    </div>
                  ))}
                </div>

                <div className="relative p-6 bg-white/5 rounded-xl border border-white/5">
                  <Quote className="w-8 h-8 text-secondary/30 absolute top-4 left-4" />
                  <p className="text-muted-foreground/50 italic relative z-10 mb-4 pl-4">
                    "{study.quote}"
                  </p>
                  <div className="text-sm font-bold text-white pl-4">— {study.author}</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-base border-t border-white/5">
        <div className="container px-4 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to write your success story?</h2>
          <Link href="/contact">
            <button className="px-10 py-4 bg-secondary text-base font-bold rounded-full hover:bg-white transition-all">
              Start a Conversation
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
