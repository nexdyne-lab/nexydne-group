import { Link } from 'wouter';
import Navigation from '../components/Navigation';
import Footer from "@/components/Footer";
import { ArrowLeft, TrendingDown, Clock, DollarSign, CheckCircle2 } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

export default function LogisticsCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Breadcrumb */}
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Logistics Shipment Automation' }
      ]} />
      
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-5 sm:mb-6 md:mb-8">
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
            Back to Case Studies
          </Link>
          
          <div className="max-w-4xl">
            <p className="text-blue-400 font-semibold mb-4 uppercase tracking-wide">Logistics & Supply Chain</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
              92% reduction in shipment processing errors
            </h1>
            <p className="text-xl text-white/80">
              Regional logistics provider with 15 distribution centers automates freight coordination, processing 5,000+ monthly shipments with 120 staff hours saved weekly.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:p-6 md:p-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <TrendingDown className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">92%</div>
              <div className="text-slate-600">Error reduction</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">120hrs</div>
              <div className="text-slate-600">Saved per week</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">$340K</div>
              <div className="text-slate-600">Annual savings</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <CheckCircle2 className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">5,000+</div>
              <div className="text-slate-600">Monthly shipments</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Company Overview</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed">
                A regional logistics company managing freight across 15 distribution centers throughout the Southeast United States. With a team of 180-220 employees, the company processes over 5,000 shipments monthly for mid-market manufacturing and retail clients. Their operations span last-mile delivery, warehousing, and freight coordination across multiple carrier networks.
              </p>
              <p className="text-slate-600 leading-relaxed mt-4">
                As the company expanded from 8 to 15 distribution centers over three years, manual processes that worked at smaller scale became critical bottlenecks. The operations team struggled to maintain service quality while scaling volume, leading to increased errors, customer complaints, and operational costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Challenge</h2>
            <div className="space-y-6">
              <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Manual data entry across multiple systems</h3>
                <p className="text-slate-600">
                  Staff manually entered shipment data from 12+ carrier systems into the company's internal tracking platform. Each shipment required 15-20 minutes of data entry, creating a backlog during peak periods and frequent transcription errors that caused delivery delays.
                </p>
              </div>
              
              <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Invoice reconciliation bottlenecks</h3>
                <p className="text-slate-600">
                  Matching carrier invoices to completed shipments consumed 120+ staff hours weekly. Discrepancies between carrier billing and internal records led to payment delays, strained vendor relationships, and cash flow complications.
                </p>
              </div>
              
              <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Reactive customer communication</h3>
                <p className="text-slate-600">
                  Customer service teams manually checked carrier websites for tracking updates, responding to inquiries hours after delivery issues occurred. This reactive approach damaged customer satisfaction scores and increased support ticket volume by 40% year-over-year.
                </p>
              </div>
              
              <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">No predictive visibility</h3>
                <p className="text-slate-600">
                  The company had no early warning system for potential delivery delays. Problems were discovered only when customers called to complain, leaving no time for proactive intervention or alternative routing.
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
            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Solution</h2>
            <p className="text-lg text-slate-600 mb-5 sm:mb-6 md:mb-8">
              NEXDYNE implemented an intelligent logistics automation platform that integrates with carrier APIs, automates data synchronization, and provides predictive analytics for proactive issue resolution.
            </p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Multi-carrier integration</h3>
                <p className="text-slate-600">
                  Automated API connections to 12+ carrier systems pull shipment data in real-time, eliminating manual data entry. The system automatically maps carrier-specific data formats to the company's internal schema, ensuring consistency across all distribution centers.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Automated invoice reconciliation</h3>
                <p className="text-slate-600">
                  AI-powered matching engine compares carrier invoices to shipment records, automatically approving 94% of invoices without human review. Discrepancies are flagged with suggested resolutions, reducing reconciliation time from 120 hours to 8 hours weekly.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Real-time tracking orchestration</h3>
                <p className="text-slate-600">
                  Automated tracking updates push to customers across email, SMS, and web portal simultaneously. The system monitors all shipments in real-time, updating customers proactively without manual intervention from support staff.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Predictive delay detection</h3>
                <p className="text-slate-600">
                  Machine learning models analyze historical delivery patterns, weather data, and carrier performance to forecast potential delays 24-48 hours in advance. Operations teams receive automated alerts with recommended alternative routing options.
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
            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Results</h2>
            <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8 mb-6 sm:mb-8 md:mb-12">
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg border border-slate-200">
                <div className="text-5xl font-bold text-blue-600 mb-2">92%</div>
                <div className="text-lg font-semibold text-slate-900 mb-2">Error reduction</div>
                <p className="text-slate-600">
                  Shipment processing errors dropped from 8.3% to 0.7%, virtually eliminating delivery delays caused by data entry mistakes.
                </p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg border border-slate-200">
                <div className="text-5xl font-bold text-blue-600 mb-2">120hrs</div>
                <div className="text-lg font-semibold text-slate-900 mb-2">Saved per week</div>
                <p className="text-slate-600">
                  Staff time freed from manual data entry and invoice reconciliation, redirected to customer service and strategic initiatives.
                </p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg border border-slate-200">
                <div className="text-5xl font-bold text-green-600 mb-2">$340K</div>
                <div className="text-lg font-semibold text-slate-900 mb-2">Annual savings</div>
                <p className="text-slate-600">
                  Combined savings from reduced labor costs, fewer delivery errors, and improved invoice accuracy.
                </p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg border border-slate-200">
                <div className="text-5xl font-bold text-purple-600 mb-2">5,000+</div>
                <div className="text-lg font-semibold text-slate-900 mb-2">Monthly shipments</div>
                <p className="text-slate-600">
                  Processing capacity maintained while scaling from 8 to 15 distribution centers without proportional staff increases.
                </p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 sm:p-6 md:p-8 rounded-lg border border-blue-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Business Impact</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Customer satisfaction scores increased from 3.2 to 4.6 out of 5</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Support ticket volume decreased 62% despite 40% increase in shipment volume</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>On-time delivery rate improved from 87% to 96%</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Invoice payment cycle reduced from 45 days to 12 days, improving cash flow</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
              Ready to transform your logistics operations?
            </h2>
            <p className="text-xl text-white/80 mb-5 sm:mb-6 md:mb-8">
              Discover how NEXDYNE can help you eliminate errors, accelerate processing, and scale operations without proportional cost increases.
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
