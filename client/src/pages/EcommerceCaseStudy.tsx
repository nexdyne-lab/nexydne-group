import { Link } from 'wouter';
import Navigation from '../components/Navigation';
import Footer from "@/components/Footer";
import { ArrowLeft, TrendingDown, Clock, DollarSign, CheckCircle2 } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

export default function EcommerceCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Breadcrumb */}
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'E-commerce Order Fulfillment' }
      ]} />
      
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-5 sm:mb-6 md:mb-8">
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
            Back to Case Studies
          </Link>
          
          <div className="max-w-4xl">
            <p className="text-blue-400 font-semibold mb-4 uppercase tracking-wide">E-commerce & Retail</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 eb-garamond">
              83% reduction in order fulfillment errors
            </h1>
            <p className="text-xl text-white/80">
              Fast-growing multi-channel retailer with 8 warehouses automates order processing across 4 sales platforms, handling 12,000+ daily orders with near-perfect accuracy.
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
                <TrendingDown className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-charcoal mb-2">83%</div>
              <div className="text-muted-foreground">Error reduction</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-charcoal mb-2">4.2hrs</div>
              <div className="text-muted-foreground">Avg. processing time</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                <DollarSign className="w-8 h-8 text-secondary" />
              </div>
              <div className="text-4xl font-bold text-charcoal mb-2">$580K</div>
              <div className="text-muted-foreground">Annual savings</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <CheckCircle2 className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-4xl font-bold text-charcoal mb-2">12,000+</div>
              <div className="text-muted-foreground">Daily orders</div>
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
                A rapidly growing multi-channel retailer selling home goods and lifestyle products across their own e-commerce site, Amazon, Walmart Marketplace, and eBay. With 95-120 employees and 8 fulfillment warehouses across the United States, the company processes over 12,000 orders daily during peak seasons.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                After expanding from 2 to 8 warehouses in 18 months to support 300% revenue growth, the company's manual order processing workflows collapsed under volume. Fulfillment errors spiked to 6.8%, creating a cascade of customer complaints, returns, and negative reviews that threatened to derail their growth trajectory.
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
                <h3 className="text-xl font-semibold text-charcoal mb-3">Fragmented order management across platforms</h3>
                <p className="text-muted-foreground">
                  Orders from 4 different sales channels arrived in separate systems with inconsistent data formats. Warehouse staff manually consolidated orders into a master spreadsheet, creating a 6-8 hour daily bottleneck and frequent transcription errors that sent wrong products to customers.
                </p>
              </div>
              
              <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold text-charcoal mb-3">Inventory sync delays causing overselling</h3>
                <p className="text-muted-foreground">
                  Inventory updates propagated to sales channels once daily at midnight. During high-volume periods, products sold out on Amazon continued selling on other platforms for hours, resulting in 200+ monthly cancellations and damaged seller ratings.
                </p>
              </div>
              
              <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold text-charcoal mb-3">Manual picking and packing errors</h3>
                <p className="text-muted-foreground">
                  Warehouse staff relied on printed pick lists that didn't account for real-time inventory changes. Wrong items, incorrect quantities, and missed shipments occurred in 6.8% of orders, costing $45K monthly in replacements, returns, and expedited shipping.
                </p>
              </div>
              
              <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold text-charcoal mb-3">No visibility into fulfillment bottlenecks</h3>
                <p className="text-muted-foreground">
                  Management had no real-time insight into which warehouses were overloaded or which product categories were creating picking delays. Resource allocation decisions were made reactively, often days after problems emerged.
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
              NEXDYNE deployed an intelligent order orchestration platform that unifies multi-channel orders, automates inventory synchronization, and provides real-time fulfillment optimization across all warehouse locations.
            </p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-charcoal mb-3">Unified order management hub</h3>
                <p className="text-muted-foreground">
                  Automated API integrations pull orders from all 4 sales channels into a single fulfillment queue. The system normalizes data formats, validates addresses, and routes orders to optimal warehouses based on inventory availability and customer location—all within 90 seconds of order placement.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-charcoal mb-3">Real-time inventory synchronization</h3>
                <p className="text-muted-foreground">
                  Inventory levels update across all sales channels within 2 minutes of any warehouse transaction. Machine learning algorithms reserve inventory for in-progress orders, preventing overselling even during flash sales and high-traffic events.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-charcoal mb-3">Intelligent pick-path optimization</h3>
                <p className="text-muted-foreground">
                  AI-powered routing generates optimal picking sequences for warehouse staff, minimizing travel time and reducing pick errors. Barcode scanning at each step validates correct items and quantities, with instant alerts for discrepancies before packing begins.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-charcoal mb-3">Predictive fulfillment analytics</h3>
                <p className="text-muted-foreground">
                  Real-time dashboards show order volume, processing times, and bottlenecks across all warehouses. Predictive models forecast demand spikes 48-72 hours in advance, enabling proactive staff scheduling and inventory redistribution.
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
            <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8 mb-6 sm:mb-8 md:mb-12">
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg border border-slate-200">
                <div className="text-5xl font-bold text-primary mb-2">83%</div>
                <div className="text-lg font-semibold text-charcoal mb-2">Error reduction</div>
                <p className="text-muted-foreground">
                  Fulfillment errors dropped from 6.8% to 1.2%, virtually eliminating wrong-item shipments and customer complaints.
                </p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg border border-slate-200">
                <div className="text-5xl font-bold text-primary mb-2">4.2hrs</div>
                <div className="text-lg font-semibold text-charcoal mb-2">Avg. processing time</div>
                <p className="text-muted-foreground">
                  Order-to-shipment time reduced from 18 hours to 4.2 hours, enabling same-day fulfillment for orders placed before 2pm.
                </p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg border border-slate-200">
                <div className="text-5xl font-bold text-secondary mb-2">$580K</div>
                <div className="text-lg font-semibold text-charcoal mb-2">Annual savings</div>
                <p className="text-muted-foreground">
                  Combined savings from reduced errors, faster processing, eliminated overselling, and optimized labor allocation.
                </p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg border border-slate-200">
                <div className="text-5xl font-bold text-purple-600 mb-2">12,000+</div>
                <div className="text-lg font-semibold text-charcoal mb-2">Daily orders</div>
                <p className="text-muted-foreground">
                  Processing capacity maintained during peak seasons without proportional warehouse staff increases.
                </p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 sm:p-6 md:p-8 rounded-lg border border-blue-200">
              <h3 className="text-2xl font-bold text-charcoal mb-4">Business Impact</h3>
              <ul className="space-y-3 text-charcoal/80">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Amazon seller rating increased from 3.8 to 4.7 stars</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Return rate decreased from 8.2% to 2.1%</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Order cancellations due to overselling eliminated completely</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Warehouse labor costs per order reduced by 34%</span>
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
              Ready to transform your e-commerce operations?
            </h2>
            <p className="text-xl text-white/80 mb-5 sm:mb-6 md:mb-8">
              Discover how NEXDYNE can help you eliminate fulfillment errors, accelerate order processing, and scale revenue without proportional cost increases.
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
