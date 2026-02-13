import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileCheck, Clock, Users } from "lucide-react";

export function PharmaceuticalComplianceSystem() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="container py-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link href="/intelligent-process-optimization" className="hover:text-foreground">Intelligent Process Optimization</Link>
          <span>/</span>
          <Link href="/solutions/app-development" className="hover:text-foreground">App Development</Link>
          <span>/</span>
          <Link href="/solutions/custom-software" className="hover:text-foreground">Custom Software</Link>
          <span>/</span>
          <span className="text-foreground">Pharma Manufacturer Automates FDA Compliance Tracking</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container max-w-4xl">
          <h1 className="text-5xl font-bold mb-3">Pharma Manufacturer Automates FDA Compliance Tracking Across 12 Facilities</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Custom compliance management system reduced audit prep time by 78% and eliminated manual spreadsheet tracking for 200+ users.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <FileCheck className="h-5 w-5 text-green-600" />
              <span className="font-semibold">78% faster audit prep</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-600" />
              <span className="font-semibold">Real-time compliance tracking</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-600" />
              <span className="font-semibold">200+ users across 12 facilities</span>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              A pharmaceutical manufacturer with 12 production facilities across the US was managing FDA compliance documentation through a patchwork of Excel spreadsheets, shared drives, and email chains. Quality assurance teams spent weeks preparing for audits, manually compiling records from disparate sources and verifying data accuracy.
            </p>
            <p>
              The decentralized approach created significant risk. Version control was non-existent—teams couldn't tell which documents were current. Audit trails were incomplete, making it difficult to demonstrate compliance during FDA inspections. Critical deadlines were missed because no centralized system tracked upcoming renewals, certifications, or training requirements.
            </p>
            <p>
              They needed a unified compliance management platform that could track documentation across all facilities, automate workflow approvals, maintain complete audit trails, and provide real-time visibility into compliance status. Off-the-shelf QMS platforms were either too generic or prohibitively expensive for their mid-sized operation.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Solution</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              NEXDYNE built a custom compliance management system using React for the web interface and Node.js for the backend, with PostgreSQL for structured data storage and AWS S3 for document management. The platform centralizes all compliance documentation, automates approval workflows, and provides role-based access control for 200+ users across 12 facilities.
            </p>
            <p>
              Key features include automated deadline tracking with email notifications, digital signature workflows for document approvals, complete audit trails showing who accessed or modified each record, and customizable dashboards that give facility managers real-time visibility into compliance status. Integration with their existing ERP system ensures employee training records stay synchronized.
            </p>
            <p>
              We implemented a phased rollout, starting with two pilot facilities to refine workflows before expanding company-wide. NEXDYNE provided on-site training at each facility and built comprehensive documentation to support ongoing adoption.
            </p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Results</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#8B2635] mb-2">78%</div>
              <div className="text-muted-foreground">Reduction in audit prep time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#8B2635] mb-2">100%</div>
              <div className="text-muted-foreground">Audit trail completeness</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#8B2635] mb-2">92%</div>
              <div className="text-muted-foreground">User adoption rate</div>
            </div>
          </div>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              The custom compliance platform transformed how the manufacturer manages regulatory requirements. Audit preparation time dropped from 6 weeks to less than 10 days—quality teams now generate comprehensive compliance reports with a few clicks instead of manually compiling spreadsheets.
            </p>
            <p>
              Automated deadline tracking eliminated missed renewals and certifications. The system sends proactive alerts 90, 60, and 30 days before deadlines, ensuring teams have time to complete required actions. In the first year, they achieved 100% on-time completion of compliance milestones—up from 73% under the old manual process.
            </p>
            <p>
              During their most recent FDA inspection, auditors praised the system's comprehensive audit trails and real-time documentation access. The manufacturer passed the inspection with zero compliance findings—a significant improvement from previous audits that identified documentation gaps.
            </p>
            <p>
              The platform now manages over 15,000 compliance documents, processes 300+ approval workflows monthly, and supports 200+ users across all facilities. The manufacturer estimates they've saved $320,000 annually in reduced audit prep costs and avoided compliance risks.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#2D5BFF] via-[#4169FF] to-[#5B7FFF] text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Need custom software for compliance or regulatory management?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how bespoke development can automate your compliance workflows and reduce audit risk.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <a href="mailto:martijn@nexdyne.com">Schedule a consultation</a>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#8B2635]">
              <Link href="/solutions/custom-software">Learn more about custom software</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
