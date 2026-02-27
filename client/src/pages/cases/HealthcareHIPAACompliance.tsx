import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function HealthcareHIPAACompliance() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Breadcrumb */}
      <nav className="bg-slate-50 py-4">
        <div className="container">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/">
              <a className="hover:text-blue-600">Home</a>
            </Link>
            <span>/</span>
            <Link href="/solutions/data-solutions">
              <a className="hover:text-blue-600">Data Solutions</a>
            </Link>
            <span>/</span>
            <Link href="/solutions/data-governance">
              <a className="hover:text-blue-600">Data Governance</a>
            </Link>
            <span>/</span>
            <span className="text-charcoal">Hospital Achieves HIPAA Compliance with Automated Audit Trails</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-slate-700 text-white py-20">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-3">
              Hospital Achieves HIPAA Compliance with Automated Audit Trails
            </h1>
            <p className="text-xl mb-8">
              Automated access controls and comprehensive audit logging for 12,000 employees accessing patient records across 8 facilities, reducing compliance violations 92%.
            </p>
            <div className="flex flex-wrap gap-6 text-lg">
              <div>
                <div className="text-3xl font-bold">92%</div>
                <div className="text-blue-100">Compliance Violation Reduction</div>
              </div>
              <div>
                <div className="text-3xl font-bold">12,000</div>
                <div className="text-blue-100">Employees with Controlled Access</div>
              </div>
              <div>
                <div className="text-3xl font-bold">100%</div>
                <div className="text-blue-100">Audit Trail Coverage</div>
              </div>
              <div>
                <div className="text-3xl font-bold">8</div>
                <div className="text-blue-100">Facilities Secured</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-6">The Challenge</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-charcoal/80 mb-4">
              A regional hospital system with 8 facilities and 12,000 employees faced mounting HIPAA compliance risks. Their legacy EHR system granted broad access permissions—nurses could view records for patients they'd never treated, billing staff saw clinical notes they didn't need, and IT administrators had unrestricted access to everything. Audit logs existed but were scattered across systems, making compliance investigations take weeks.
            </p>
            <p className="text-lg text-charcoal/80 mb-4">
              The Office for Civil Rights had cited them for insufficient access controls after a breach investigation revealed that a terminated employee's credentials remained active for 6 weeks, allowing unauthorized access to 2,400 patient records. The potential fine was $1.5M, and the reputational damage was worse—local media covered the breach extensively, and patient trust eroded.
            </p>
            <p className="text-lg text-charcoal/80 mb-4">
              They needed a governance system that enforced role-based access automatically, logged every data access event with immutable timestamps, detected anomalous access patterns in real-time, and generated audit reports that compliance officers could understand without technical expertise. The solution had to integrate with their existing EHR (Epic), identity provider (Active Directory), and SIEM system without disrupting clinical workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-6">The Solution</h2>
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-lg text-charcoal/80 mb-4">
              NEXDYNE implemented a comprehensive data governance layer that sits between users and the EHR system. We deployed Immuta for automated access control and audit logging, integrated with their Active Directory for identity management, and built custom policies that enforce HIPAA's minimum necessary standard—users only see data required for their specific job function.
            </p>
            <p className="text-lg text-charcoal/80 mb-4">
              Access policies are role-based but context-aware: nurses assigned to a patient's care team see full clinical records, but nurses on different floors see only basic demographics. Physicians access records for their own patients plus emergency override capability (logged and reviewed). Billing staff see diagnosis codes and procedure details but clinical notes are masked. IT administrators have no patient data access by default—they must request break-glass access with manager approval, and every action is logged.
            </p>
            <p className="text-lg text-charcoal/80 mb-4">
              We built anomaly detection rules that flag suspicious patterns: accessing records of VIP patients without clinical justification, bulk record downloads, after-hours access from unusual locations, and access by terminated employees (synced from HR systems). Alerts route to the compliance team via Slack and email with enough context to investigate immediately—who accessed what, when, from where, and whether it violated policy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-charcoal mb-4">Technical Approach</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Immuta for policy enforcement and audit logging</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Active Directory integration for identity sync</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Role-based + attribute-based access controls</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Real-time anomaly detection and alerting</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-charcoal mb-4">Integration Points</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Epic EHR system via FHIR API</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Splunk SIEM for security event correlation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Workday HR for employee lifecycle sync</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Tableau dashboard for compliance reporting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-6">The Results</h2>
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-lg text-charcoal/80 mb-4">
              HIPAA compliance violations dropped 92% in the first year. The hospital passed its next OCR audit with zero findings—auditors praised the comprehensive audit trail and automated access controls. Average time to investigate potential breaches fell from 3 weeks to 2 hours, as compliance officers could query audit logs directly instead of requesting reports from IT.
            </p>
            <p className="text-lg text-charcoal/80 mb-4">
              Clinical staff initially worried that tighter access controls would slow them down, but the opposite happened. Nurses no longer waste time scrolling through irrelevant patient lists—they see only their assigned patients. Physicians appreciate that emergency override access works instantly when needed, without waiting for IT approvals. Break-glass access is used appropriately and reviewed monthly, with zero abuse cases detected.
            </p>
            <p className="text-lg text-charcoal/80 mb-4">
              The system caught 14 policy violations in the first 6 months: 8 were innocent mistakes (staff accessing wrong patient with similar name), 4 were curiosity-driven snooping (employees viewing celebrity patient records), and 2 were potential fraud cases (billing staff accessing records without legitimate business need). All were investigated and resolved before causing harm, and staff training improved based on violation patterns.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <div className="text-3xl font-bold text-blue-900 mb-2">2 hours</div>
              <div className="text-charcoal/80">Breach Investigation Time (down from 3 weeks)</div>
            </div>
            <div className="bg-secondary/10 p-6 rounded-lg border-l-4 border-green-600">
              <div className="text-3xl font-bold text-charcoal mb-2">Zero</div>
              <div className="text-charcoal/80">OCR Audit Findings</div>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
              <div className="text-3xl font-bold text-purple-900 mb-2">14</div>
              <div className="text-charcoal/80">Policy Violations Caught & Resolved</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-slate-700 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to achieve HIPAA compliance with automated governance?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's build access controls and audit systems that protect patient privacy while enabling clinical workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-900 hover:bg-slate-100">
              Get in touch
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Schedule a meeting
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
          <Footer />

    </div>
  );
}
