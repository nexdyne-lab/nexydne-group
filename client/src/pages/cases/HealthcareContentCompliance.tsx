import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function HealthcareContentCompliance() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Breadcrumb */}
      <nav className="bg-slate-50 py-4">
        <div className="container">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/">
              <a className="hover:text-primary">Home</a>
            </Link>
            <span>/</span>
            <Link href="/solutions/data-solutions">
              <a className="hover:text-primary">Data Solutions</a>
            </Link>
            <span>/</span>
            <Link href="/solutions/content-service-platform">
              <a className="hover:text-primary">Content Service Platform</a>
            </Link>
            <span>/</span>
            <span className="text-charcoal">Healthcare System Ensures Compliance with Content Workflows</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-600 to-slate-700 text-white py-20">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-3">
              Healthcare System Ensures Compliance with Content Workflows
            </h1>
            <p className="text-xl mb-8">
              Automated approval workflows for patient education materials across 18 languages and 25 facilities, reducing compliance review time from 3 weeks to 4 days while maintaining 100% regulatory adherence.
            </p>
            <div className="flex flex-wrap gap-6 text-lg">
              <div>
                <div className="text-3xl font-bold">4 days</div>
                <div className="text-cyan-100">Compliance Review Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold">18</div>
                <div className="text-cyan-100">Languages Supported</div>
              </div>
              <div>
                <div className="text-3xl font-bold">100%</div>
                <div className="text-cyan-100">Regulatory Adherence</div>
              </div>
              <div>
                <div className="text-3xl font-bold">25</div>
                <div className="text-cyan-100">Facilities Covered</div>
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
              A large healthcare system with 25 facilities serving diverse patient populations struggled with patient education content management. They produced materials in 18 languages covering hundreds of conditions, procedures, and wellness topics. Content lived in Word documents scattered across departmental shared drives, and version control was nonexistent—clinicians printed outdated materials regularly because they couldn't find the latest approved versions.
            </p>
            <p className="text-lg text-charcoal/80 mb-4">
              Regulatory compliance was a constant concern. Patient education materials must meet HIPAA requirements, ADA accessibility standards, and health literacy guidelines (6th-grade reading level). Medical claims require legal review, translations need clinical validation to ensure accuracy, and all content must be reviewed annually for medical accuracy. The manual review process took 3 weeks per document, involving 5 stakeholders (clinical SME, legal, compliance, accessibility specialist, translation validator) with no visibility into approval status.
            </p>
            <p className="text-lg text-charcoal/80 mb-4">
              The system had distributed 3 pieces of outdated content in the past year—one with incorrect medication dosages, one with expired clinical guidelines, and one with translation errors that confused patients. While no harm occurred, the Joint Commission cited them during accreditation review, and the compliance team spent 400 hours investigating and remediating the incidents.
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
              NEXDYNE deployed Adobe Experience Manager as the centralized content management system for all patient education materials. We built structured content templates that enforce compliance requirements: required fields for medical review date, legal approval, accessibility certification, and translation validation. Content cannot be published without all required approvals, and the system automatically flags materials approaching their annual review deadline.
            </p>
            <p className="text-lg text-charcoal/80 mb-4">
              Automated workflows route content through required reviewers based on content type and language. New diabetes education materials trigger clinical review by endocrinologists, legal review for medical claims, accessibility checks for ADA compliance (alt text, color contrast, screen reader compatibility), and translation validation for all 18 languages. Each reviewer receives notifications with context-specific instructions and can approve, reject with comments, or request revisions. The system tracks approval status in real-time, showing content creators exactly where each document sits in the pipeline.
            </p>
            <p className="text-lg text-charcoal/80 mb-4">
              We implemented automated compliance checks that catch common errors before human review: readability analysis flags content above 6th-grade reading level, accessibility scanners detect missing alt text or insufficient color contrast, and terminology validators ensure consistent use of medical terms across languages. Content that fails automated checks returns to the creator with specific error messages, reducing reviewer burden and accelerating approval cycles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-charcoal mb-4">Technical Approach</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Adobe Experience Manager for content management</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Automated compliance workflows with approval gates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Readability and accessibility automated checks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Annual review reminders and expiration tracking</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-charcoal mb-4">Integration Points</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Epic EHR for patient portal integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Smartling for translation management</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Siteimprove for accessibility compliance scanning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Slack for workflow notifications and approvals</span>
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
              Compliance review time dropped from 3 weeks to 4 days. Automated workflows route content to the right reviewers instantly, eliminating delays from manual handoffs and email chains. Reviewers see exactly what needs their attention in a dashboard, and parallel review (legal and accessibility happening simultaneously instead of sequentially) cuts approval cycles dramatically. Content creators know exactly where each document sits in the pipeline and can proactively address bottlenecks.
            </p>
            <p className="text-lg text-charcoal/80 mb-4">
              Regulatory adherence reached 100%. The system prevents outdated content from being distributed—materials approaching their annual review deadline are automatically flagged 60 days in advance, and expired content is removed from circulation until re-approved. Zero compliance incidents occurred in the first year, and the Joint Commission praised the system during the next accreditation review, citing it as a best practice example.
            </p>
            <p className="text-lg text-charcoal/80 mb-4">
              Patient outcomes improved measurably. Consistent, accurate, and accessible education materials led to better patient understanding of their conditions and treatment plans. Patient satisfaction scores for "understanding my care plan" increased 18 points, hospital readmission rates for chronic conditions dropped 12%, and patient portal engagement increased 35% as patients accessed education materials proactively. The compliance team redirected 400 hours per year from incident investigation to proactive content quality improvements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-600">
              <div className="text-3xl font-bold text-cyan-900 mb-2">Zero</div>
              <div className="text-charcoal/80">Compliance Incidents in Year 1</div>
            </div>
            <div className="bg-secondary/10 p-6 rounded-lg border-l-4 border-green-600">
              <div className="text-3xl font-bold text-charcoal mb-2">18 pts</div>
              <div className="text-charcoal/80">Patient Satisfaction Increase</div>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
              <div className="text-3xl font-bold text-purple-900 mb-2">12%</div>
              <div className="text-charcoal/80">Reduction in Readmissions</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 to-slate-700 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to ensure content compliance with automated workflows?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's build content management systems with approval workflows, automated compliance checks, and multi-language support that maintain regulatory adherence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-cyan-900 hover:bg-slate-100">
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
