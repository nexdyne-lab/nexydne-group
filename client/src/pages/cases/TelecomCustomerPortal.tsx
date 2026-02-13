import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export function TelecomCustomerPortal() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="container py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href="/intelligent-process-optimization" className="hover:text-blue-600">Intelligent Process Optimization</Link>
            <span>/</span>
            <Link href="/solutions/app-development" className="hover:text-blue-600">App Development</Link>
            <span>/</span>
            <Link href="/solutions/customer-portal" className="hover:text-blue-600">Customer Portal</Link>
            <span>/</span>
            <span className="text-gray-900">Telecom Provider Launches Self-Service Portal for 2M Customers</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container max-w-4xl">
          <Link href="/solutions/customer-portal" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Customer Portal
          </Link>
          <h1 className="text-5xl font-bold mb-3">Telecom Provider Launches Self-Service Portal for 2M Customers</h1>
          <p className="text-2xl text-gray-700 leading-relaxed">
            Salesforce Experience Cloud portal reduces support calls by 58% while driving $4.2M in annual self-service upgrades.
          </p>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              A regional telecommunications provider serving 2 million residential and business customers faced mounting pressure from escalating call center costs and declining customer satisfaction scores. Their legacy customer portal—built in 2012—offered only basic account viewing functionality, forcing customers to call for routine tasks like plan changes, device upgrades, and billing inquiries.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The company's call center handled over 180,000 monthly contacts, with 62% classified as "low-complexity" transactions that could theoretically be automated. Average handle time for these routine calls was 8.5 minutes, costing the company approximately $12 per interaction. Customer satisfaction (CSAT) scores hovered at 68%—well below industry benchmarks—with long wait times and repetitive authentication processes cited as primary pain points.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Leadership recognized that digital self-service wasn't just a cost-reduction opportunity—it was a competitive imperative. Competitors were launching mobile-first experiences that made account management effortless, while this provider's outdated portal was actively driving customer churn. The company needed a modern, intuitive self-service platform that would delight customers while dramatically reducing operational costs.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Solution</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              NEXDYNE partnered with the telecom provider to design and build a comprehensive self-service portal on Salesforce Experience Cloud. The platform integrated with the company's existing billing, provisioning, and CRM systems to deliver a unified customer experience across web and mobile channels.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The portal enabled customers to view real-time usage data, compare and upgrade service plans, manage connected devices, pay bills, schedule technician appointments, and troubleshoot common issues through an intelligent knowledge base. A personalized dashboard surfaced relevant offers based on usage patterns and account history, creating natural upsell opportunities without aggressive sales tactics.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              NEXDYNE's design team conducted extensive user research with both residential and business customers to ensure the interface felt intuitive for diverse user groups. The development team built custom Lightning Web Components to handle complex workflows like multi-line account management for business customers and family plan configuration for residential users.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The portal launched in phases over 14 weeks, starting with a pilot group of 50,000 customers before rolling out to the full customer base. NEXDYNE provided comprehensive training for the company's support team and monitored usage analytics closely during the first 90 days to identify and resolve friction points.
            </p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Results</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">58%</div>
              <div className="text-gray-700">Reduction in support calls</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">$4.2M</div>
              <div className="text-gray-700">Annual self-service revenue</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">84%</div>
              <div className="text-gray-700">Customer portal adoption</div>
            </div>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Within six months of launch, the self-service portal reduced call center volume by 58%, saving the company approximately $6.8 million annually in operational costs. Customer satisfaction scores jumped from 68% to 86%, with portal users reporting significantly higher satisfaction than those who continued to rely on phone support.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The portal's personalized offer engine drove $4.2 million in incremental annual revenue through self-service plan upgrades and add-on purchases. Customers appreciated the transparency of comparing plans side-by-side and making changes instantly without sales pressure. Average order value for self-service upgrades exceeded phone-based sales by 18%, as customers took time to research options and select plans that truly fit their needs.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Portal adoption reached 84% within the first year, with mobile app usage accounting for 62% of all portal sessions. The company's Net Promoter Score (NPS) improved by 22 points, and customer churn decreased by 14% among active portal users compared to non-users. The portal became a strategic asset that differentiated the provider in a commoditized market.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-100 to-blue-50">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your customer experience?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Let's build a self-service portal that delights customers and drives business results.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
              Get in touch
            </button>
            <Link href="/solutions/customer-portal" className="px-8 py-3 border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors inline-block">
              Learn more about Customer Portals
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
