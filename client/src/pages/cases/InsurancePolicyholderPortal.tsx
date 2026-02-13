import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export function InsurancePolicyholderPortal() {
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
            <span className="text-gray-900">Insurance Carrier Launches Digital Policyholder Portal for 1.2M Members</span>
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
          <h1 className="text-5xl font-bold mb-3">Insurance Carrier Launches Digital Policyholder Portal for 1.2M Members</h1>
          <p className="text-2xl text-gray-700 leading-relaxed">
            Guidewire Digital Portal enables self-service policy management, reducing agent workload by 52% and improving retention by 18%.
          </p>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              A regional property and casualty insurance carrier with 1.2 million policyholders faced mounting pressure to modernize its customer experience. Policyholders relied heavily on agents and call centers for routine tasks like viewing policy documents, requesting ID cards, updating contact information, and making payments—creating operational inefficiencies and frustrating customers accustomed to digital self-service in other industries.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The carrier's agent network handled over 95,000 monthly service requests, with 58% classified as "low-value" transactions that consumed agent time without generating new business. Younger policyholders (ages 25-40) expressed particular dissatisfaction with the lack of digital options, contributing to a 22% annual retention gap between this demographic and older policyholders.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Leadership recognized that digital self-service wasn't just about cost reduction—it was essential for competing with direct-to-consumer insurers offering seamless mobile experiences. The carrier needed a modern policyholder portal that would free agents to focus on sales and complex service issues while meeting customer expectations for 24/7 digital access.
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
              NEXDYNE partnered with the insurance carrier to implement a comprehensive policyholder portal on Guidewire Digital Portals, integrated with the company's existing Guidewire PolicyCenter and BillingCenter systems. The portal provided a unified view of all policies (auto, home, umbrella) with intuitive navigation and mobile-first design.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Policyholders gained the ability to view policy details and documents, download ID cards instantly, update contact and vehicle information, add or remove drivers and vehicles, request policy changes, make payments and set up autopay, view claims status, and request roadside assistance. A personalized dashboard surfaced upcoming renewals, policy changes, and relevant coverage recommendations.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              NEXDYNE's design team conducted extensive user research with policyholders across age groups and technical proficiency levels to ensure the portal felt intuitive for everyone. The development team built custom workflows for common scenarios like adding a teen driver or updating a home address, guiding users through multi-step processes with clear explanations and real-time premium impact calculations.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The portal launched in phases over 12 weeks, starting with a pilot group of 100,000 policyholders before expanding to the full customer base. NEXDYNE provided comprehensive training for the carrier's agent network and call center staff, ensuring they could support customers during the transition and leverage the portal's agent-facing features for faster service delivery.
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
              <div className="text-4xl font-bold text-blue-600 mb-2">52%</div>
              <div className="text-gray-700">Reduction in agent service requests</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">18%</div>
              <div className="text-gray-700">Improvement in retention (ages 25-40)</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">81%</div>
              <div className="text-gray-700">Customer portal adoption</div>
            </div>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Within eight months of launch, the portal reduced agent service requests by 52%, allowing the carrier's agent network to focus on sales and complex customer needs. Agent productivity increased by 28%, as measured by new policies written per agent. Customer satisfaction scores improved from 74% to 89%, with portal users reporting significantly higher satisfaction than non-users.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Retention among younger policyholders (ages 25-40) improved by 18 percentage points, closing the gap with older demographics and reversing a multi-year trend of attrition in this segment. The carrier saved approximately $5.3 million annually in reduced call center and agent service costs while improving the customer experience.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Portal adoption reached 81% within the first year, with mobile app usage accounting for 58% of all portal sessions. The instant ID card feature proved particularly popular, with 420,000 digital ID cards downloaded in the first six months. The carrier's Net Promoter Score (NPS) increased by 26 points, and the portal became a key differentiator in agent recruitment and retention.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-100 to-blue-50">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your policyholder experience?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Let's build a self-service portal that drives retention and operational efficiency.
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
