import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function LogisticsTrackingApp() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="container py-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link href="/intelligent-process-optimization" className="hover:text-foreground transition-colors">Intelligent Process Optimization</Link>
          <span>/</span>
          <Link href="/solutions/app-development" className="hover:text-foreground transition-colors">App Development</Link>
          <span>/</span>
          <Link href="/solutions/lowcode-development" className="hover:text-foreground transition-colors">Low-code Development</Link>
          <span>/</span>
          <span className="text-foreground">Logistics Firm Builds Real-Time Tracking App for 500 Drivers</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container max-w-4xl">
          <h1 className="text-5xl font-bold mb-3">Logistics Firm Builds Real-Time Tracking App for 500 Drivers</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            3PL provider deploys OutSystems mobile app for package tracking and route optimization—improving on-time delivery from 82% to 96% and reducing fuel costs by $850K annually
          </p>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              A third-party logistics (3PL) provider operating 500 delivery vehicles across the Southeast faced mounting pressure from e-commerce clients demanding Amazon-level delivery visibility. Their drivers relied on paper manifests and manual check-ins via phone calls, making real-time package tracking impossible. Dispatchers spent 40% of their time answering "Where is my package?" calls from customers, while drivers wasted hours on inefficient routes due to lack of dynamic routing capabilities.
            </p>
            <p>
              On-time delivery performance had declined to 82%, well below the industry standard of 95%, leading to service level agreement (SLA) penalties and client churn. The company's legacy transportation management system (TMS) lacked mobile capabilities and couldn't provide real-time GPS tracking or proof-of-delivery capture. With major e-commerce clients threatening to switch providers, the 3PL needed a mobile-first solution that could launch quickly, integrate with their TMS, and provide real-time visibility without disrupting daily operations. The company set a 10-week timeline to develop and deploy a driver mobile app across their entire fleet.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-subtle">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Solution</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              NEXDYNE partnered with the 3PL's operations and IT teams to design and develop a comprehensive driver mobile app using OutSystems low-code platform. We conducted ride-alongs with 25 drivers across different routes to understand their workflows, pain points, and device preferences. The app featured digital manifests with barcode scanning, GPS-based route optimization, photo capture for proof-of-delivery, customer signature collection, and real-time status updates synced to the TMS.
            </p>
            <p>
              Our development team built the iOS and Android apps in 8 weeks using OutSystems' mobile development capabilities, with 2 weeks reserved for pilot testing with 50 drivers. We implemented REST APIs to integrate with the legacy TMS, enabling real-time package status updates and route assignments. The app's offline mode allowed drivers to continue working in areas with poor cellular coverage, with data syncing automatically when connectivity resumed. GPS tracking provided dispatchers with real-time vehicle locations, enabling dynamic route adjustments based on traffic, weather, and last-minute pickup requests.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">Key Technical Implementations</h3>
            <ul className="space-y-2">
              <li>OutSystems mobile app for iOS and Android with offline mode for areas with poor cellular coverage</li>
              <li>Barcode scanning for package verification and proof-of-delivery capture with photo and signature collection</li>
              <li>GPS-based route optimization with real-time traffic integration and dynamic route adjustments</li>
              <li>REST API integration with legacy TMS for real-time package status updates and route assignments</li>
              <li>Real-time dispatcher dashboard for fleet visibility, route monitoring, and customer service inquiries</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-12">The Results</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">96%</div>
              <div className="text-lg text-muted-foreground">On-time delivery rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">$850K</div>
              <div className="text-lg text-muted-foreground">Annual fuel savings</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">78%</div>
              <div className="text-lg text-muted-foreground">Reduction in customer calls</div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              The driver mobile app launched on schedule after 10 weeks of development and pilot testing. Within 4 months of full deployment across 500 vehicles, on-time delivery performance improved from 82% to 96%, exceeding client SLA requirements and eliminating penalties. Route optimization reduced daily miles driven by 18%, saving $850,000 annually in fuel costs and vehicle maintenance. Customer service calls decreased 78% as clients gained real-time package tracking visibility through the 3PL's customer portal.
            </p>
            <p>
              Driver productivity increased 22% as they eliminated manual paperwork and phone check-ins, completing an average of 15 additional deliveries per day. Proof-of-delivery disputes dropped 92% due to photo and signature capture, reducing claims processing time and costs. The 3PL retained all major e-commerce clients and won three new contracts worth $12 million annually, citing the real-time tracking capabilities as a key differentiator. The company now uses OutSystems for additional operational apps, including warehouse management and customer self-service portals, establishing a foundation for ongoing digital innovation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-peach-50">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to optimize your operations with mobile apps?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how NEXDYNE can help you build mobile solutions that drive measurable results.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-charcoal hover:bg-gray-800">Get in touch</Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/cases">View all cases</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
