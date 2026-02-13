import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function GlobalRetailer() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-900 via-red-700 to-[#5B7FFF] text-white py-20">
        <div className="container">
          <Link href="/cases">
            <Button variant="ghost" className="text-white hover:bg-white/10 mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Cases
            </Button>
          </Link>
          
          <div className="max-w-4xl">
            <p className="text-sm font-semibold mb-4 tracking-wide uppercase text-blue-200">
              Case Study
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-3">
              Global Retailer: Supply Chain Automation
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Deployed RPA bots to automate order processing and inventory management across 200+ retail locations, eliminating manual data entry and reducing processing time by 45%.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">The Challenge</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            A multinational retail chain with 200+ locations was drowning in manual order processing. Their procurement team spent 40+ hours weekly transferring data between their legacy ERP system, supplier portals, and inventory management platform. Each order required manual entry across three systems, creating bottlenecks that delayed restocking and frustrated store managers.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            The manual process introduced errors that cascaded through the supply chain—incorrect quantities, wrong SKUs, duplicate orders. These mistakes cost the company $2M+ annually in expedited shipping fees, stockouts, and excess inventory. Traditional integration wasn't viable because their ERP system was scheduled for replacement within 18 months, making API development economically unjustifiable.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">The Solution</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            NEXDYNE deployed UiPath RPA bots that automated the entire order-to-inventory workflow. The bots logged into each system, extracted order data, validated quantities against inventory levels, and submitted purchase orders to suppliers—executing in minutes what previously took hours of manual work.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div className="bg-white p-8 rounded-lg border border-slate-200">
              <h3 className="text-2xl font-bold mb-4">Implementation Approach</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Process discovery workshops with procurement team</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Bot development and testing in 6-week sprint</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Phased rollout across 50 locations per week</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Exception handling dashboard for edge cases</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg border border-slate-200">
              <h3 className="text-2xl font-bold mb-4">Technical Details</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span>UiPath Studio for bot development</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Orchestrator for centralized bot management</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span>OCR for invoice data extraction</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Email notifications for exception handling</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">The Results</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-500 mb-2">45%</div>
              <div className="text-lg text-slate-600">Reduction in processing time</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-500 mb-2">60%</div>
              <div className="text-lg text-slate-600">Decrease in order errors</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-500 mb-2">$1.8M</div>
              <div className="text-lg text-slate-600">Annual cost savings</div>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Business Impact</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                <span><strong>Procurement team productivity:</strong> Freed 40 hours weekly for strategic supplier negotiations and vendor relationship management</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                <span><strong>Inventory accuracy:</strong> Reduced stockouts by 35%, improving customer satisfaction and sales conversion</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                <span><strong>Scalability:</strong> Bot infrastructure ready to support 500+ locations without additional headcount</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                <span><strong>ROI timeline:</strong> Full investment recovered in 7 months through labor savings and error reduction</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#2D5BFF] via-[#4169FF] to-[#5B7FFF] text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to transform your operations?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how RPA can eliminate manual work and accelerate execution in your organization.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
              Get in touch
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              View more cases <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
