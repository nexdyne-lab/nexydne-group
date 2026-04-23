import { Link } from 'wouter';
import Navigation from '../components/Navigation';
import Footer from "@/components/Footer";
import { ArrowLeft, TrendingUp, Clock, DollarSign, CheckCircle2, Package, ShoppingCart } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

export default function RetailCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Breadcrumb */}
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Retail Inventory Optimization' }
      ]} />
      
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-5 sm:mb-6 md:mb-8">
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
            Back to Case Studies
          </Link>
          
          <div className="max-w-4xl">
            <p className="text-blue-400 font-semibold mb-4 uppercase tracking-wide">Retail & Consumer Goods</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
              47% reduction in inventory carrying costs
            </h1>
            <p className="text-xl text-white/80">
              Multi-location specialty retailer with 28 stores implements AI-driven inventory optimization, reducing stockouts by 68% while cutting excess inventory by $2.1M annually.
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
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-charcoal mb-2">47%</div>
              <div className="text-muted-foreground">Carrying cost reduction</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Package className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-charcoal mb-2">68%</div>
              <div className="text-muted-foreground">Fewer stockouts</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                <DollarSign className="w-8 h-8 text-secondary" />
              </div>
              <div className="text-4xl font-bold text-charcoal mb-2">$2.1M</div>
              <div className="text-muted-foreground">Annual savings</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <ShoppingCart className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-4xl font-bold text-charcoal mb-2">28</div>
              <div className="text-muted-foreground">Store locations</div>
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
                A specialty home goods retailer operating 28 stores across the Midwest and Eastern United States. With 320 employees and over 15,000 SKUs across seasonal and evergreen product lines, the company serves both walk-in customers and a growing e-commerce channel that accounts for 35% of revenue.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Rapid expansion from 12 to 28 stores over four years created inventory management challenges that legacy systems couldn't handle. The company struggled with simultaneous problems: excess inventory in some locations while experiencing stockouts in others, leading to lost sales and markdown pressure.
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
                <h3 className="text-xl font-semibold text-charcoal mb-3">Fragmented inventory visibility</h3>
                <p className="text-muted-foreground">
                  Each store operated with semi-independent inventory systems that didn't communicate in real-time. Corporate buyers made purchasing decisions based on weekly aggregated reports, missing critical demand signals and creating a 5-7 day lag between actual sales and replenishment decisions.
                </p>
              </div>
              
              <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold text-charcoal mb-3">Seasonal demand unpredictability</h3>
                <p className="text-muted-foreground">
                  With 40% of revenue concentrated in seasonal products, the company consistently over-ordered for some seasons while under-ordering for others. End-of-season markdowns averaged 28% of seasonal inventory, eroding margins significantly.
                </p>
              </div>
              
              <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold text-charcoal mb-3">Manual allocation decisions</h3>
                <p className="text-muted-foreground">
                  Store managers requested inventory transfers via email, with regional managers manually approving and coordinating logistics. This process took 3-5 days on average, by which time demand patterns had often shifted.
                </p>
              </div>
              
              <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold text-charcoal mb-3">E-commerce integration gaps</h3>
                <p className="text-muted-foreground">
                  Online orders drew from a separate warehouse inventory, leading to situations where products showed "in stock" online but were actually allocated to stores. This caused 12% of online orders to be canceled or delayed, damaging customer trust.
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
              NEXDYNE implemented a unified inventory intelligence platform that provides real-time visibility across all channels, AI-powered demand forecasting, and automated allocation optimization.
            </p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-charcoal mb-3">Unified inventory platform</h3>
                <p className="text-muted-foreground">
                  Real-time integration across all 28 stores, the central warehouse, and e-commerce platform. Every sale, return, and transfer updates inventory counts within seconds, providing buyers and store managers with accurate, actionable data.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-charcoal mb-3">AI demand forecasting</h3>
                <p className="text-muted-foreground">
                  Machine learning models analyze historical sales, local events, weather patterns, and economic indicators to forecast demand at the store-SKU level. The system generates 90-day rolling forecasts updated daily, with accuracy rates exceeding 87%.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-charcoal mb-3">Automated allocation engine</h3>
                <p className="text-muted-foreground">
                  When inventory imbalances are detected, the system automatically generates transfer recommendations, calculates optimal routing, and initiates logistics coordination. Store managers receive pre-approved transfer requests that require only one-click confirmation.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-charcoal mb-3">Omnichannel inventory pool</h3>
                <p className="text-muted-foreground">
                  A single inventory pool serves both in-store and online channels, with intelligent allocation rules that balance channel demand. Ship-from-store capabilities enable online orders to be fulfilled from the nearest location with available stock.
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
                <div className="text-5xl font-bold text-primary mb-2">47%</div>
                <div className="text-lg font-semibold text-charcoal mb-2">Carrying cost reduction</div>
                <p className="text-muted-foreground">
                  Optimized inventory levels reduced average carrying costs from $4.2M to $2.2M annually through better demand matching and faster turnover.
                </p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg border border-slate-200">
                <div className="text-5xl font-bold text-primary mb-2">68%</div>
                <div className="text-lg font-semibold text-charcoal mb-2">Stockout reduction</div>
                <p className="text-muted-foreground">
                  Proactive replenishment and intelligent allocation reduced stockout incidents from 340 per month to 108, capturing previously lost sales.
                </p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg border border-slate-200">
                <div className="text-5xl font-bold text-secondary mb-2">$2.1M</div>
                <div className="text-lg font-semibold text-charcoal mb-2">Annual savings</div>
                <p className="text-muted-foreground">
                  Combined savings from reduced carrying costs, fewer markdowns, and captured sales that would have been lost to stockouts.
                </p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg border border-slate-200">
                <div className="text-5xl font-bold text-purple-600 mb-2">94%</div>
                <div className="text-lg font-semibold text-charcoal mb-2">Online order fulfillment</div>
                <p className="text-muted-foreground">
                  E-commerce fulfillment rate improved from 88% to 94%, with ship-from-store enabling faster delivery for 40% of online orders.
                </p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 sm:p-6 md:p-8 rounded-lg border border-blue-200">
              <h3 className="text-2xl font-bold text-charcoal mb-4">Business Impact</h3>
              <ul className="space-y-3 text-charcoal/80">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Seasonal markdown rate reduced from 28% to 11%, protecting gross margins</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Inventory turnover improved from 4.2x to 6.1x annually</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Store manager time spent on inventory tasks reduced by 15 hours per week</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Customer satisfaction scores increased 18 points due to improved product availability</span>
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
              <svg className="w-12 h-12 text-primary mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl text-charcoal/80 leading-relaxed mb-6">
                "The transformation has been remarkable. We went from constantly firefighting inventory issues to having predictive insights that let us stay ahead of demand. Our buyers now spend their time on strategic decisions instead of chasing data."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-slate-300 rounded-full flex items-center justify-center text-muted-foreground font-bold text-lg">
                  MR
                </div>
                <div>
                  <div className="font-semibold text-charcoal">Michael Rodriguez</div>
                  <div className="text-muted-foreground">VP of Operations, HomeStyle Goods</div>
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
              Ready to optimize your retail operations?
            </h2>
            <p className="text-xl text-white/80 mb-5 sm:mb-6 md:mb-8">
              Discover how NEXDYNE can help you reduce inventory costs, eliminate stockouts, and improve customer satisfaction across all channels.
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
