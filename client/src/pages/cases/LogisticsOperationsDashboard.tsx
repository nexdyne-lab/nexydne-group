import { ArrowLeft, Check } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function LogisticsOperationsDashboard() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-900 via-primary to-base text-white py-20">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm mb-8 text-red-200">
            <Link href="/" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <Link href="/solutions/data-visualization" className="hover:text-white transition-colors">Data visualization</Link>
            <span>/</span>
            <span className="text-white">Logistics Operations Dashboard</span>
          </nav>

          <h1 className="text-5xl md:text-6xl font-bold mb-3 max-w-4xl">
            Logistics Company Reduces Delivery Delays 40% with Real-Time Operations Dashboard
          </h1>
          <p className="text-xl text-red-100 max-w-3xl">
            Custom dashboard surfaced capacity bottlenecks and route inefficiencies, enabling proactive intervention before delays occurred.
          </p>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-6">The Challenge</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-charcoal/80 mb-6">
              A regional logistics company managing 200 trucks and 50 distribution centers struggled with delivery delays that damaged customer relationships and increased operational costs. On-time delivery rate hovered at 78%—below the industry standard of 90%+. Delays cascaded through the network: a late pickup at one location caused missed delivery windows at three downstream stops.
            </p>
            <p className="text-lg text-charcoal/80 mb-6">
              The operations team lacked visibility into real-time performance. Dispatchers discovered delays only when customers called to complain. By then, the opportunity to reroute shipments or reallocate capacity had passed. Post-mortem analysis happened days later through Excel reports—too late to prevent recurring issues.
            </p>
            <p className="text-lg text-charcoal/80">
              The COO needed a real-time operations dashboard that surfaced bottlenecks as they emerged, enabling proactive intervention before delays impacted customers. The dashboard had to integrate data from TMS (transportation management system), GPS tracking, and customer delivery schedules to provide a unified view of network performance.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-6">The Solution</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-charcoal/80 mb-8">
              NEXDYNE built a custom real-time operations dashboard using React and D3.js, pulling data from the TMS via API integration and GPS tracking systems. The dashboard refreshed every 60 seconds, surfacing critical metrics and alerting dispatchers to emerging issues before they cascaded into customer-facing delays.
            </p>

            <h3 className="text-2xl font-bold text-charcoal mb-4">Dashboard Components</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-charcoal">Network health map.</strong> Geographic visualization showing all active deliveries, color-coded by status (on-time: green, at-risk: yellow, delayed: red). Dispatchers clicked on at-risk shipments to see root cause—traffic delays, equipment failures, or capacity constraints.
                </div>
              </li>
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-charcoal">Capacity utilization heatmap.</strong> Distribution center capacity displayed hour-by-hour for the next 48 hours. Red zones indicated overloaded facilities where incoming shipments exceeded processing capacity. Dispatchers rerouted shipments to underutilized centers before delays occurred.
                </div>
              </li>
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-charcoal">Route efficiency metrics.</strong> Average delivery time per route compared to historical baseline. Routes performing 20%+ slower than baseline triggered alerts. Operations team investigated root causes—construction detours, driver performance issues, or suboptimal routing algorithms.
                </div>
              </li>
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-charcoal">Customer impact forecast.</strong> Predictive model estimated how many customers would experience delayed deliveries based on current network status. Dispatchers prioritized interventions on shipments affecting high-value customers or time-sensitive orders.
                </div>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-charcoal mb-4">Implementation Approach</h3>
            <p className="text-lg text-charcoal/80 mb-4">
              Built working prototype in 3 weeks using sample data. Validated dashboard design with 5 dispatchers who provided feedback on layout, alert thresholds, and drill-down workflows. Iterated based on user input before connecting to production TMS and GPS systems.
            </p>
            <p className="text-lg text-charcoal/80">
              Deployed dashboard to operations center on large wall-mounted displays. Dispatchers monitored network health continuously, intervening when at-risk shipments appeared. Automated alerts sent SMS notifications to dispatchers when critical thresholds breached (e.g., more than 10 shipments at risk of missing delivery windows).
            </p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-12">The Results</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">40%</div>
              <div className="text-muted-foreground">Reduction in delivery delays</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">92%</div>
              <div className="text-muted-foreground">On-time delivery rate achieved</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">$1.8M</div>
              <div className="text-muted-foreground">Annual savings from reduced delays</div>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-12">
            <p className="text-lg text-charcoal/80 italic mb-4">
              "Before the dashboard, we discovered delays when customers called to complain—too late to fix the problem. Now we see at-risk shipments 2-3 hours in advance and intervene before they miss delivery windows. On-time delivery improved from 78% to 92%. Customer satisfaction scores increased 25%. The dashboard paid for itself in 4 months through reduced expedited shipping costs and penalty fees."
            </p>
            <p className="text-charcoal font-semibold">
              Sarah Mitchell, Chief Operations Officer
            </p>
          </div>

          <h3 className="text-2xl font-bold text-charcoal mb-6">Business Impact</h3>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div className="text-lg text-charcoal/80">
                <strong>Operational efficiency:</strong> Delivery delays decreased 40% (from 22% to 13% of shipments). On-time delivery rate improved from 78% to 92%, exceeding industry benchmark. Dispatchers intervened proactively on 150+ at-risk shipments per week, preventing customer-facing delays.
              </div>
            </li>
            <li className="flex gap-3">
              <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div className="text-lg text-charcoal/80">
                <strong>Cost savings:</strong> Reduced expedited shipping costs $1.2M annually by rerouting shipments before delays occurred. Avoided $600K in customer penalty fees for missed delivery windows. Dashboard ROI achieved in 4 months.
              </div>
            </li>
            <li className="flex gap-3">
              <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div className="text-lg text-charcoal/80">
                <strong>Customer satisfaction:</strong> Customer satisfaction scores increased 25% due to improved on-time delivery. Customer complaints decreased 60%. Renewal rates for annual contracts improved 12%.
              </div>
            </li>
            <li className="flex gap-3">
              <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div className="text-lg text-charcoal/80">
                <strong>Capacity optimization:</strong> Capacity utilization heatmap identified 3 underutilized distribution centers. Rerouted shipments to balance network load, increasing overall capacity 18% without adding facilities.
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-6">Technology Stack</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-charcoal mb-3">Frontend</h3>
              <ul className="space-y-2 text-charcoal/80">
                <li>• React for interactive UI components</li>
                <li>• D3.js for geographic visualizations</li>
                <li>• WebSocket for real-time data updates</li>
                <li>• Tailwind CSS for responsive design</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-charcoal mb-3">Backend & Data</h3>
              <ul className="space-y-2 text-charcoal/80">
                <li>• TMS API integration for shipment data</li>
                <li>• GPS tracking system integration</li>
                <li>• PostgreSQL for historical analytics</li>
                <li>• Redis for real-time caching</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-secondary text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to build dashboards that drive action?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Let's surface the insights your operations team needs to prevent problems before they impact customers.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-destructive rounded-full hover:bg-red-50 transition-colors font-semibold">
              Contact us
            </button>
            <Link href="/solutions/data-visualization">
              <button className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-destructive transition-colors font-semibold">
                View all cases
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
