import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function HealthcarePatientEngagement() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-base via-primary to-primary text-white py-20">
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
              Healthcare System Automates 52% of Patient Inquiries with AI Assistant
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              HIPAA-compliant conversational AI handles appointment scheduling, prescription refills, and basic health queries 24/7, improving patient satisfaction while reducing administrative burden on clinical staff.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">The Challenge</h2>
          <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
            A regional healthcare system serving 380,000 patients across 14 hospitals and 67 clinics faced escalating administrative costs and declining patient satisfaction scores. The organization's patient services call center handled 142,000 monthly inquiries—appointment scheduling, prescription refills, billing questions, test results, and general health information. Average wait times exceeded 12 minutes during peak hours, and 28% of callers abandoned before reaching staff. Administrative staff spent 65% of their time on routine, repetitive tasks that didn't require clinical expertise, creating bottlenecks that prevented them from focusing on complex care coordination.
          </p>
          <p className="text-lg text-charcoal/80 leading-relaxed">
            The fragmented patient experience created care continuity gaps. Patients called multiple departments for related issues, repeating their information at each touchpoint. The lack of 24/7 support meant patients with urgent questions outside business hours resorted to emergency departments for non-emergency issues, driving up costs by $3.2M+ annually. The healthcare system had implemented a basic phone tree IVR, but patients actively avoided it, preferring to wait for human assistance—making intelligent automation the only viable path to improve patient access while controlling costs.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">The Solution</h2>
          <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
            NEXDYNE designed and implemented a HIPAA-compliant conversational AI platform that provided 24/7 patient support across phone (voice AI), web portal, mobile app, and SMS. The solution centered on an intelligent virtual health assistant that understood natural language, maintained context across interactions, and integrated securely with the healthcare system's EHR, scheduling, pharmacy, and billing systems to provide personalized, accurate support.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div className="bg-white p-8 rounded-lg border border-slate-200">
              <h3 className="text-2xl font-bold mb-4">Implementation Approach</h3>
              <ul className="space-y-3 text-charcoal/80">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span>HIPAA compliance and security architecture design</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span>EHR and pharmacy system integration</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Natural language processing model training</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Phased rollout across patient touchpoints</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg border border-slate-200">
              <h3 className="text-2xl font-bold mb-4">Key Features</h3>
              <ul className="space-y-3 text-charcoal/80">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Appointment scheduling and rescheduling</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Prescription refill request automation</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Test result notifications and explanations</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Intelligent escalation to clinical staff</span>
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
              <div className="text-5xl font-bold text-blue-500 mb-2">52%</div>
              <div className="text-lg text-muted-foreground">Inquiry automation rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-500 mb-2">89%</div>
              <div className="text-lg text-muted-foreground">Patient satisfaction score</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-500 mb-2">$3.2M</div>
              <div className="text-lg text-muted-foreground">Annual cost savings</div>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Business Impact</h3>
            <ul className="space-y-3 text-charcoal/80">
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                <span><strong>Patient access improvement:</strong> Average wait times dropped from 12 minutes to under 2 minutes with 24/7 AI support, eliminating business-hours-only frustration</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                <span><strong>Appointment efficiency:</strong> 68% of appointments booked via AI assistant without staff involvement; no-show rates decreased by 23% through automated reminders</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                <span><strong>Operational savings:</strong> Freed 240 hours weekly for complex care coordination; $3.2M annual savings through reduced call center staffing and emergency department diversion</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                <span><strong>Staff satisfaction:</strong> 31% improvement as work shifted from repetitive tasks to meaningful patient interactions leveraging clinical expertise</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to transform patient engagement with AI?</h2>
          <p className="text-xl text-muted-foreground/50 mb-8 max-w-2xl mx-auto">
            Let's discuss how conversational AI can improve patient access and outcomes in your healthcare organization.
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
