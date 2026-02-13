import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function HealthcareProvider() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-green-700 to-teal-600 text-white py-20">
        <div className="container">
          <Link href="/cases">
            <Button variant="ghost" className="text-white hover:bg-white/10 mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Cases
            </Button>
          </Link>
          
          <div className="max-w-4xl">
            <p className="text-sm font-semibold mb-4 tracking-wide uppercase text-teal-200">
              Case Study
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-3">
              Healthcare Provider: Patient Data Management
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Deployed intelligent automation to streamline patient record management and insurance claims processing, reducing administrative overhead by 40% while improving data accuracy to 95%.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">The Challenge</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            A multi-location healthcare network serving 50,000+ patients annually was overwhelmed by administrative burden. Their staff spent 300+ hours weekly manually transferring patient data between their EHR system, insurance portals, and billing platform. Each patient visit required data entry across four different systems, creating bottlenecks that delayed care and frustrated both staff and patients.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Manual data entry introduced errors that cascaded through the revenue cycle—incorrect insurance information, missing authorizations, duplicate claims. These mistakes cost the network $3M+ annually in claim denials, delayed reimbursements, and administrative appeals. Staff burnout from repetitive data entry was driving turnover rates above 40%, creating additional recruitment and training costs.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">The Solution</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            NEXDYNE deployed an end-to-end automation solution that integrated patient registration, insurance verification, and claims processing. RPA bots extracted patient information from intake forms, verified insurance eligibility in real-time, updated EHR records, and submitted claims automatically—transforming hours of manual work into minutes of automated execution.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div className="bg-white p-8 rounded-lg border border-slate-200">
              <h3 className="text-2xl font-bold mb-4">Implementation Approach</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Patient journey mapping with clinical and admin staff</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span>HIPAA compliance review and security hardening</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Pilot deployment at single location for validation</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Phased rollout across 12 locations over 8 weeks</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg border border-slate-200">
              <h3 className="text-2xl font-bold mb-4">Technical Details</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span>UiPath with HIPAA-compliant credential management</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span>OCR for insurance card and form data extraction</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Real-time insurance eligibility verification API</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Automated claims submission with error handling</span>
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
              <div className="text-5xl font-bold text-blue-500 mb-2">40%</div>
              <div className="text-lg text-slate-600">Reduction in admin overhead</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-500 mb-2">50%</div>
              <div className="text-lg text-slate-600">Faster claim processing</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-500 mb-2">95%</div>
              <div className="text-lg text-slate-600">Data accuracy rate</div>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Business Impact</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                <span><strong>Administrative efficiency:</strong> Freed 240 hours weekly, allowing staff to focus on patient care and complex case management</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                <span><strong>Revenue cycle improvement:</strong> Reduced claim denial rate by 35%, accelerating cash flow and improving financial health</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                <span><strong>Staff satisfaction:</strong> Decreased turnover from 40% to 18% by eliminating repetitive data entry tasks</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                <span><strong>Patient experience:</strong> Reduced registration time from 15 minutes to 5 minutes, improving satisfaction scores</span>
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
            Let's discuss how automation can reduce administrative burden and improve patient care delivery.
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
