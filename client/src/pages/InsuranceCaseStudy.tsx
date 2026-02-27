import { Link } from 'wouter';
import Navigation from '../components/Navigation';
import Footer from "@/components/Footer";
import { ArrowLeft, TrendingDown, Clock, DollarSign, CheckCircle2, FileText, Shield } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

export default function InsuranceCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Breadcrumb */}
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Insurance Claims Automation' }
      ]} />
      
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-5 sm:mb-6 md:mb-8">
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
            Back to Case Studies
          </Link>
          
          <div className="max-w-4xl">
            <p className="text-blue-400 font-semibold mb-4 uppercase tracking-wide">Insurance & Financial Services</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
              73% faster claims processing cycle
            </h1>
            <p className="text-xl text-white/80">
              Regional property & casualty insurer automates claims intake and adjudication, reducing average processing time from 14 days to 3.8 days while improving accuracy and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-charcoal mb-2">73%</div>
              <div className="text-muted-foreground">Faster processing</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-charcoal mb-2">85%</div>
              <div className="text-muted-foreground">Auto-adjudication rate</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                <DollarSign className="w-8 h-8 text-secondary" />
              </div>
              <div className="text-4xl font-bold text-charcoal mb-2">$1.8M</div>
              <div className="text-muted-foreground">Annual savings</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-4xl font-bold text-charcoal mb-2">45K+</div>
              <div className="text-muted-foreground">Claims per year</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-charcoal mb-6">Company Overview</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                A regional property and casualty insurance company serving homeowners, small businesses, and commercial clients across six Southeastern states. With 280 employees and $340M in annual premiums, the company processes approximately 45,000 claims annually across auto, property, and liability lines.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                As the company expanded into new markets and product lines, claims volume grew 60% over three years while staffing increased only 15%. The resulting backlog led to longer processing times, increased customer complaints, and regulatory scrutiny over claims handling practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-charcoal mb-6">The Challenge</h2>
            <div className="space-y-6">
              <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold text-charcoal mb-3">Manual document processing</h3>
                <p className="text-muted-foreground">
                  Claims arrived through multiple channels—email, fax, mail, and agent portals—requiring staff to manually extract data from PDFs, images, and handwritten forms. Each claim required 45-60 minutes of data entry before adjudication could begin.
                </p>
              </div>
              
              <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold text-charcoal mb-3">Inconsistent adjudication decisions</h3>
                <p className="text-muted-foreground">
                  With 18 adjusters handling claims across different lines, decision-making varied significantly. Similar claims received different outcomes depending on which adjuster reviewed them, creating compliance risks and customer fairness concerns.
                </p>
              </div>
              
              <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold text-charcoal mb-3">Fraud detection gaps</h3>
                <p className="text-muted-foreground">
                  Manual review processes caught obvious fraud indicators but missed sophisticated patterns. The company estimated 3-4% of claims involved some level of fraud, but detection rates were below 40%, resulting in significant leakage.
                </p>
              </div>
              
              <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold text-charcoal mb-3">Customer communication delays</h3>
                <p className="text-muted-foreground">
                  Claimants received status updates only when they called in, creating high call volumes and frustration. Average time to first meaningful contact was 4.2 days, well below industry benchmarks for customer service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-charcoal mb-6">The Solution</h2>
            <p className="text-lg text-muted-foreground mb-5 sm:mb-6 md:mb-8">
              NEXDYNE implemented an intelligent claims automation platform that combines document AI, rules-based adjudication, and machine learning fraud detection to streamline the entire claims lifecycle.
            </p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-charcoal mb-3">Intelligent document processing</h3>
                <p className="text-muted-foreground">
                  AI-powered document extraction automatically processes claims from any channel, extracting key data fields with 96% accuracy. The system handles photos, PDFs, handwritten notes, and structured forms, reducing intake time from 45 minutes to under 3 minutes per claim.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-charcoal mb-3">Automated adjudication engine</h3>
                <p className="text-muted-foreground">
                  Rules-based decision engine applies consistent adjudication criteria across all claims. Straightforward claims (85% of volume) are auto-approved or auto-denied based on policy terms, coverage limits, and claim characteristics, with complex cases routed to human adjusters.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-charcoal mb-3">ML-powered fraud detection</h3>
                <p className="text-muted-foreground">
                  Machine learning models analyze claim patterns, claimant history, provider networks, and external data sources to flag potentially fraudulent claims. The system generates risk scores and supporting evidence, enabling investigators to focus on high-probability cases.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-charcoal mb-3">Proactive customer communication</h3>
                <p className="text-muted-foreground">
                  Automated notifications keep claimants informed at every stage via email, SMS, and portal updates. Self-service tools allow customers to upload documents, check status, and schedule inspections without calling in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Results */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-charcoal mb-6">The Results</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6 sm:mb-8 md:mb-12">
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg border border-slate-200">
                <div className="text-5xl font-bold text-blue-600 mb-2">73%</div>
                <div className="text-lg font-semibold text-charcoal mb-2">Faster processing</div>
                <p className="text-muted-foreground">
                  Average claims cycle time reduced from 14 days to 3.8 days, with simple claims resolved in under 24 hours.
                </p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg border border-slate-200">
                <div className="text-5xl font-bold text-blue-600 mb-2">85%</div>
                <div className="text-lg font-semibold text-charcoal mb-2">Auto-adjudication rate</div>
                <p className="text-muted-foreground">
                  85% of claims now processed without human intervention, freeing adjusters to focus on complex cases requiring expertise.
                </p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg border border-slate-200">
                <div className="text-5xl font-bold text-secondary mb-2">$1.8M</div>
                <div className="text-lg font-semibold text-charcoal mb-2">Annual savings</div>
                <p className="text-muted-foreground">
                  Combined savings from reduced processing costs, improved fraud detection, and lower customer service expenses.
                </p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg border border-slate-200">
                <div className="text-5xl font-bold text-purple-600 mb-2">2.3x</div>
                <div className="text-lg font-semibold text-charcoal mb-2">Fraud detection improvement</div>
                <p className="text-muted-foreground">
                  Fraud detection rate improved from 38% to 87%, recovering an estimated $420K annually in previously undetected fraudulent claims.
                </p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 sm:p-6 md:p-8 rounded-lg border border-blue-200">
              <h3 className="text-2xl font-bold text-charcoal mb-4">Business Impact</h3>
              <ul className="space-y-3 text-charcoal/80">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Customer satisfaction scores improved from 72 to 89 NPS</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Call center volume reduced 54% through self-service and proactive communication</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Regulatory compliance improved with consistent, auditable decision trails</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Adjuster capacity increased 3x, enabling growth without proportional hiring</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-50 p-6 sm:p-8 md:p-12 rounded-xl sm:rounded-2xl border border-slate-200">
              <svg className="w-12 h-12 text-blue-600 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl text-charcoal/80 leading-relaxed mb-6">
                "We were drowning in claims volume and our customers were suffering. NEXDYNE didn't just automate our processes—they transformed how we think about claims handling. Our adjusters now focus on the cases that truly need human judgment, while routine claims flow through automatically."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-slate-300 rounded-full flex items-center justify-center text-muted-foreground font-bold text-lg">
                  SK
                </div>
                <div>
                  <div className="font-semibold text-charcoal">Sarah Kim</div>
                  <div className="text-muted-foreground">Chief Claims Officer, Southeastern Mutual Insurance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
              Ready to transform your claims operations?
            </h2>
            <p className="text-xl text-white/80 mb-5 sm:mb-6 md:mb-8">
              Discover how NEXDYNE can help you accelerate claims processing, improve fraud detection, and deliver exceptional customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                Schedule consultation
              </button>
              <Link href="/case-studies" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors inline-block">
                View more case studies
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
