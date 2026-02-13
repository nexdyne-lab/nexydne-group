import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function HealthcarePatientPortal() {
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
            <span className="text-slate-900 font-medium">Hospital Launches Patient Portal</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container max-w-4xl">
          <h1 className="text-5xl font-bold text-slate-900 mb-3 leading-tight">
            Hospital Launches Patient Portal Reducing Administrative Calls 65%
          </h1>
          <p className="text-2xl text-slate-700 leading-relaxed">
            Regional hospital system builds mobile-first patient portal for appointment scheduling, test results, and prescription refills—cutting phone volume and improving satisfaction scores
          </p>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">The Challenge</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            A 450-bed regional hospital system serving 12 counties in the Midwest faced overwhelming administrative burden from patient phone calls. Their call center received 8,500 calls per week, with 65% related to appointment scheduling, test result inquiries, and prescription refill requests. Average hold times exceeded 12 minutes during peak hours, leading to patient frustration and staff burnout. The hospital's legacy patient portal, built on outdated technology, had only 18% adoption among patients and lacked mobile optimization.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            The hospital needed a modern, mobile-first patient portal that would empower patients to manage their healthcare independently while reducing administrative workload. The solution had to integrate with their Epic EHR system, support biometric authentication for security, and provide intuitive navigation for patients of all ages and technical abilities. With patient satisfaction scores declining and staff turnover increasing due to call center stress, the hospital set an aggressive 6-month timeline to design, develop, and launch the new portal.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">The Solution</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            NEXDYNE partnered with the hospital's IT and clinical teams to design and develop a comprehensive patient portal available as both a responsive web application and native iOS/Android mobile apps. We conducted extensive user research with 120 patients across different age groups and technical proficiency levels to inform the UX design. The portal featured appointment scheduling with real-time provider availability, secure messaging with care teams, test result viewing with plain-language explanations, prescription refill requests, and bill payment functionality.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Our development team built the portal using React Native for mobile apps and React for the web application, ensuring code reuse and consistent user experience across platforms. We implemented HL7 FHIR APIs to integrate seamlessly with the hospital's Epic EHR system, enabling real-time data synchronization for appointments, test results, and medical records. Biometric authentication (Face ID, Touch ID, fingerprint) provided secure yet convenient access. Push notifications alerted patients to new test results, upcoming appointments, and prescription refill statuses.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Key Technical Implementations</h3>
          <ul className="space-y-3 text-lg text-slate-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-500 font-bold">•</span>
              <span>React Native mobile apps for iOS and Android with biometric authentication and offline appointment viewing</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 font-bold">•</span>
              <span>HL7 FHIR API integration with Epic EHR for real-time data synchronization and secure medical record access</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 font-bold">•</span>
              <span>Intelligent appointment scheduling with provider availability, specialty filtering, and automated waitlist management</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 font-bold">•</span>
              <span>Secure messaging platform with HIPAA-compliant encryption and automated routing to appropriate care teams</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 font-bold">•</span>
              <span>Test results dashboard with plain-language explanations, trend visualizations, and automated flagging of abnormal values</span>
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
              <div className="text-5xl font-bold text-blue-500 mb-2">65%</div>
              <div className="text-slate-700 font-medium">Reduction in administrative calls</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-500 mb-2">72%</div>
              <div className="text-slate-700 font-medium">Patient portal adoption rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-500 mb-2">4.7★</div>
              <div className="text-slate-700 font-medium">App Store rating</div>
            </div>
          </div>

          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            The patient portal launched on schedule after 5 months of development and 1 month of pilot testing with 500 patients. Within 6 months of full launch, 72% of the hospital's 85,000 active patients had registered for the portal, far exceeding the initial 50% adoption target. Administrative phone calls dropped 65%, reducing average hold times from 12 minutes to under 3 minutes. Patient satisfaction scores increased 18 percentage points, with portal convenience cited as the primary driver.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            The mobile apps achieved 4.7-star ratings on both iOS and Android app stores, with patients praising the intuitive interface and convenience of managing healthcare from their phones. The hospital reduced call center staffing costs by $420,000 annually while improving patient experience. Prescription refill turnaround time decreased from 48 hours to 6 hours due to automated routing and reduced phone tag. The portal's success positioned the hospital as a digital health leader in their region, attracting new patients seeking modern, convenient healthcare experiences.
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
