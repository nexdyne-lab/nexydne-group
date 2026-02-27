import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function RetailGDPRCompliance() {
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
            <span className="text-charcoal">Retailer Implements GDPR-Compliant Data Catalog for 15M Customers</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 to-slate-700 text-white py-20">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-3">
              Retailer Implements GDPR-Compliant Data Catalog for 15M Customers
            </h1>
            <p className="text-xl mb-8">
              Consent management, right-to-be-forgotten workflows, and data residency controls across EU markets, reducing GDPR request fulfillment time from 28 days to 4 hours.
            </p>
            <div className="flex flex-wrap gap-6 text-lg">
              <div>
                <div className="text-3xl font-bold">4 hours</div>
                <div className="text-purple-100">GDPR Request Fulfillment Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold">15M</div>
                <div className="text-purple-100">Customer Records Cataloged</div>
              </div>
              <div>
                <div className="text-3xl font-bold">100%</div>
                <div className="text-purple-100">GDPR Compliance Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold">12</div>
                <div className="text-purple-100">EU Markets Covered</div>
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
              A mid-sized e-commerce retailer with 15M customers across 12 EU countries faced GDPR compliance challenges that threatened their ability to operate in Europe. Customer data was scattered across 40+ systems—e-commerce platform, CRM, email marketing, customer service, loyalty program, payment processor, and analytics tools. When customers exercised their right to access or delete their data, fulfilling requests required manual coordination across IT, legal, and business teams.
            </p>
            <p className="text-lg text-charcoal/80 mb-4">
              The legal maximum for GDPR requests is 30 days, but their average fulfillment time was 28 days—leaving no margin for error. They'd missed 3 deadlines in the past year, exposing them to potential fines up to 4% of global revenue (€18M based on their €450M annual revenue). Worse, they couldn't prove data residency compliance—some customer data was processed in US-based cloud services without proper safeguards, violating Schrems II requirements.
            </p>
            <p className="text-lg text-charcoal/80 mb-4">
              They needed a data catalog that mapped every customer data element to its storage location, a consent management system that tracked marketing permissions across channels, automated workflows for right-to-access and right-to-be-forgotten requests, and data residency controls that ensured EU customer data stayed within EU borders. The solution had to work across their heterogeneous tech stack without requiring a complete platform rebuild.
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
              NEXDYNE deployed Collibra Data Intelligence Cloud as the central data catalog, automatically discovering and classifying personal data across all 40+ systems. We tagged data elements by sensitivity (PII, sensitive PII, pseudonymized), legal basis for processing (consent, contract, legitimate interest), and data residency requirements (EU-only, US-allowed with safeguards, unrestricted).
            </p>
            <p className="text-lg text-charcoal/80 mb-4">
              We built automated workflows for GDPR requests: when a customer submits a data access request, the system queries all registered data sources via API, compiles a complete report of what data exists and how it's used, and delivers it in human-readable format. Right-to-be-forgotten requests trigger deletion workflows across systems with verification checks—the system confirms data was actually deleted, not just flagged, and generates audit trails for legal compliance.
            </p>
            <p className="text-lg text-charcoal/80 mb-4">
              Consent management integrates with their e-commerce platform and email marketing tools. When customers update preferences (opt out of marketing emails, revoke analytics tracking), changes propagate to all systems within 15 minutes. The catalog tracks consent history with timestamps, so they can prove compliance if challenged. Data residency controls enforce geographic boundaries—EU customer data is stored in AWS eu-west-1, and cross-border transfers require explicit approval workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-charcoal mb-4">Technical Approach</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Collibra for data catalog and lineage tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Automated PII discovery and classification</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Workflow automation for GDPR requests</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Data residency enforcement via policy engine</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-charcoal mb-4">Integration Points</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Shopify e-commerce platform</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Salesforce CRM and Marketing Cloud</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">Zendesk customer service platform</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">AWS for data residency controls</span>
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
              GDPR request fulfillment time dropped from 28 days to 4 hours. The retailer now processes data access requests automatically—customers receive comprehensive reports showing what data exists, how it's used, and who it's shared with, all without manual intervention. Right-to-be-forgotten requests complete within 24 hours with full audit trails proving deletion across all systems.
            </p>
            <p className="text-lg text-charcoal/80 mb-4">
              They've processed 1,200 GDPR requests in the first year with 100% on-time completion and zero regulatory complaints. Data residency compliance is now provable—every customer record is tagged with storage location, and automated checks prevent EU data from leaving approved regions. When UK customers requested data transfers post-Brexit, the system handled geographic reclassification automatically.
            </p>
            <p className="text-lg text-charcoal/80 mb-4">
              The data catalog delivered unexpected business value beyond compliance. Marketing teams discovered they were storing duplicate customer records across 6 systems, wasting ad spend on duplicate targeting. Product teams used lineage tracking to understand which customer attributes drive personalization algorithms. Legal counsel can now answer "where do we store customer phone numbers?" in seconds instead of weeks, accelerating vendor due diligence and M&A processes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
              <div className="text-3xl font-bold text-purple-900 mb-2">1,200</div>
              <div className="text-charcoal/80">GDPR Requests Processed in Year 1</div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <div className="text-3xl font-bold text-blue-900 mb-2">24 hours</div>
              <div className="text-charcoal/80">Right-to-be-Forgotten Completion Time</div>
            </div>
            <div className="bg-secondary/10 p-6 rounded-lg border-l-4 border-green-600">
              <div className="text-3xl font-bold text-charcoal mb-2">Zero</div>
              <div className="text-charcoal/80">Regulatory Complaints</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-slate-700 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to achieve GDPR compliance with automated data governance?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's build data catalogs, consent management, and automated workflows that make GDPR compliance effortless.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-purple-900 hover:bg-slate-100">
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
