import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function InsuranceClaimsPortal() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="container py-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link href="/intelligent-process-optimization" className="hover:text-foreground transition-colors">Intelligent Process Optimization</Link>
          <span>/</span>
          <Link href="/solutions/app-development" className="hover:text-foreground transition-colors">App Development</Link>
          <span>/</span>
          <Link href="/solutions/lowcode-development" className="hover:text-foreground transition-colors">Low-code Development</Link>
          <span>/</span>
          <span className="text-foreground">Insurance Company Launches Digital Claims Portal in 8 Weeks</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container max-w-4xl">
          <h1 className="text-5xl font-bold mb-3">Insurance Company Launches Digital Claims Portal in 8 Weeks</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Regional insurer replaces paper-based claims processing with Mendix low-code portal—reducing processing time from 14 days to 2 hours and improving customer satisfaction scores by 42 points
          </p>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              A 75-year-old regional property and casualty insurer serving 8 states faced mounting pressure from digital-native competitors offering instant claims processing. Their legacy claims system, built in the 1990s, required policyholders to submit paper forms via mail or fax, with claims taking an average of 14 days to process. Customer satisfaction scores had declined 28 points over three years, and the company was losing 12% of policyholders annually to competitors with mobile-first experiences.
            </p>
            <p>
              The insurer's IT team had attempted to modernize the system twice over the past decade, but both projects stalled due to complexity, cost overruns, and integration challenges with their core policy administration system. The business needed a solution that could launch quickly, integrate with existing systems, and provide a modern user experience without requiring a complete technology overhaul. With regulatory pressure to improve claims transparency and customer expectations rising, the company set an aggressive 8-week timeline to launch a digital claims portal.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-subtle">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Solution</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              NEXDYNE partnered with the insurer's claims and IT teams to design and develop a comprehensive digital claims portal using Mendix low-code platform. We conducted rapid discovery workshops with claims adjusters, customer service representatives, and policyholders to map the end-to-end claims journey and identify pain points. The portal featured photo upload for damage documentation, real-time claims status tracking, secure messaging with adjusters, automated document generation, and integration with third-party estimating tools.
            </p>
            <p>
              Our development team leveraged Mendix's visual modeling capabilities to build the portal in 6 weeks, with 2 weeks reserved for user acceptance testing and deployment. We implemented REST APIs to integrate with the insurer's legacy policy administration system, enabling real-time policy verification and claims validation. The portal's workflow engine automated routine claims processing steps—eligibility checks, deductible calculations, and payment approvals—reducing manual touchpoints by 70%. Mobile-responsive design ensured policyholders could file claims from any device, with photo upload optimized for smartphone cameras.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">Key Technical Implementations</h3>
            <ul className="space-y-2">
              <li>Mendix low-code platform with responsive web design and progressive web app capabilities for mobile access</li>
              <li>REST API integration with legacy policy administration system for real-time policy verification and claims validation</li>
              <li>Automated workflow engine for claims routing, approval workflows, and payment processing with configurable business rules</li>
              <li>Document management system with OCR for damage estimates, repair invoices, and supporting documentation</li>
              <li>Real-time notifications via email and SMS for claims status updates, adjuster assignments, and payment confirmations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-12">The Results</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">86%</div>
              <div className="text-lg text-muted-foreground">Digital claims adoption</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">2 hours</div>
              <div className="text-lg text-muted-foreground">Average processing time</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">42 pts</div>
              <div className="text-lg text-muted-foreground">NPS improvement</div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              The digital claims portal launched on schedule after 8 weeks of development and testing. Within 3 months of launch, 86% of new claims were submitted through the portal, far exceeding the initial 60% adoption target. Average claims processing time dropped from 14 days to 2 hours for straightforward claims, with complex claims processing in under 48 hours. Customer satisfaction scores increased 42 points, with policyholders praising the convenience of mobile claims filing and real-time status updates.
            </p>
            <p>
              The insurer reduced claims processing costs by $2.8 million annually through automation and reduced manual data entry. Claims adjuster productivity increased 35% as they spent less time on administrative tasks and more time on complex claim investigations. The portal's success reversed the policyholder churn trend, with retention improving from 88% to 94% within 6 months. The company now uses the Mendix platform for additional digital initiatives, including agent portals and underwriting workflows, establishing a foundation for ongoing digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-peach-50">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to accelerate your digital transformation?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how NEXDYNE can help you launch applications in weeks, not quarters.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-charcoal hover:bg-gray-800">Get in touch</Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/cases">View all cases</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
