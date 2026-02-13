import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function RetailInventoryApp() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="container py-4">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/">
              <a className="hover:text-blue-500 transition-colors">Home</a>
            </Link>
            <span>/</span>
            <Link href="/solutions/intelligent-process-optimization">
              <a className="hover:text-blue-500 transition-colors">Intelligent Process Optimization</a>
            </Link>
            <span>/</span>
            <Link href="/solutions/app-development">
              <a className="hover:text-blue-500 transition-colors">App Development</a>
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">Retailer Builds Custom Inventory App</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container max-w-4xl">
          <h1 className="text-5xl font-bold text-slate-900 mb-3 leading-tight">
            Retailer Builds Custom Inventory App Cutting Stockouts 40%
          </h1>
          <p className="text-2xl text-slate-700 leading-relaxed">
            Multi-location retailer deploys mobile inventory management app with real-time sync, barcode scanning, and automated reorder triggers across 85 stores
          </p>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">The Challenge</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            A specialty outdoor gear retailer operating 85 stores across the Western United States struggled with chronic inventory accuracy issues. Their legacy inventory management system required manual data entry via desktop computers in back offices, leading to delayed updates and frequent discrepancies between system records and actual shelf stock. Store associates spent 3-4 hours per day on manual inventory counts, taking them away from customer service. Stockouts occurred on 22% of popular items during peak seasons, resulting in lost sales and customer frustration.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            The retailer needed a mobile-first inventory solution that would enable real-time stock updates from the sales floor, streamline receiving and cycle counting processes, and automatically trigger reorders when inventory fell below safety stock levels. The solution had to integrate with their existing NetSuite ERP system, support offline functionality for stores with unreliable connectivity, and provide intuitive barcode scanning for fast data entry. With peak season approaching in 4 months, the retailer needed rapid development and deployment across all locations.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">The Solution</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            NEXDYNE designed and developed a custom mobile inventory management app for iOS and Android tablets, optimized for rugged devices used on retail sales floors. The app featured barcode scanning for instant product lookup, real-time inventory adjustments synchronized with NetSuite, guided receiving workflows with photo documentation, cycle counting with variance tracking, and automated reorder recommendations based on sales velocity and lead times.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Our team built the app using React Native for cross-platform compatibility and implemented offline-first architecture with intelligent sync queuing to handle intermittent connectivity. We integrated with NetSuite's SuiteScript APIs for real-time inventory updates and developed custom algorithms to calculate optimal reorder points based on historical sales data, seasonality patterns, and supplier lead times. The app included role-based permissions, allowing store managers to approve large adjustments while enabling all associates to perform basic counts and updates.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Key Technical Implementations</h3>
          <ul className="space-y-3 text-lg text-slate-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-500 font-bold">•</span>
              <span>React Native mobile app with offline-first architecture and intelligent sync queue for unreliable connectivity</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 font-bold">•</span>
              <span>Integrated barcode scanning using device cameras and Bluetooth scanners for instant product lookup and data entry</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 font-bold">•</span>
              <span>NetSuite SuiteScript API integration for real-time inventory synchronization and automated purchase order creation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 font-bold">•</span>
              <span>Machine learning algorithms for demand forecasting and dynamic reorder point calculation based on sales velocity</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 font-bold">•</span>
              <span>Photo documentation for receiving discrepancies and damaged goods with automated routing to procurement teams</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">The Results</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-500 mb-2">40%</div>
              <div className="text-slate-700 font-medium">Reduction in stockouts</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-500 mb-2">98.5%</div>
              <div className="text-slate-700 font-medium">Inventory accuracy achieved</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-500 mb-2">$1.2M</div>
              <div className="text-slate-700 font-medium">Annual labor savings</div>
            </div>
          </div>

          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            The mobile inventory app launched across all 85 stores within 3.5 months, meeting the retailer's peak season deadline. Within 6 months of deployment, inventory accuracy improved from 84% to 98.5%, and stockouts on high-demand items decreased 40%. Store associates reduced time spent on inventory tasks from 3-4 hours to 45 minutes per day, freeing them to focus on customer service. The retailer calculated $1.2M in annual labor savings from improved efficiency.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            The automated reorder system prevented 1,850 stockout incidents in the first year by proactively triggering purchase orders when inventory fell below calculated safety stock levels. Sales increased 8% in categories that previously experienced frequent stockouts, as customers found products consistently available. The app's offline functionality proved critical during network outages, with zero data loss across 127 connectivity interruptions. Store managers praised the intuitive interface, with 94% of associates requiring less than 30 minutes of training to become proficient.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-500 to-[#4169FF]">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to build your custom application?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how NEXDYNE can accelerate your digital transformation initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-slate-50">
              Get in touch
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              View all cases
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
