import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { RelatedContent } from "@/components/RelatedContent";
import { dataRelatedItems } from "@/data/related-content";

export default function DataGovernance() {
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
            <span className="text-charcoal">Data Governance</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-700">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-3 eb-garamond">
                Data Governance
              </h1>
              <p className="text-xl mb-8 text-slate-200">
                Access controls, compliance frameworks, and data quality monitoring. Ensure teams get the data they need while maintaining security, privacy, and regulatory compliance.
              </p>
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
                Ask Martijn Voorveld
              </Button>
            </div>
            <div className="relative">
              <img
                src="/data-governance-hero.3e546fbe.jpg"
                alt="Data Governance"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
              THE BENEFITS
            </p>
            <h2 className="text-4xl font-bold text-charcoal">
              Why Data Governance Matters
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Benefit 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-charcoal mb-3">
                  Compliance you can prove
                </h3>
                <p className="text-lg text-charcoal/80">
                  Audit trails that document who accessed what data, when, and why. Automated compliance reporting for GDPR, HIPAA, SOC 2, and industry-specific regulations. When auditors ask questions, you have answers backed by immutable logs and policy enforcement records.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-charcoal mb-3">
                  Access controls that scale
                </h3>
                <p className="text-lg text-charcoal/80">
                  Role-based permissions that grant data access based on job function, not manual approvals. Attribute-based policies that enforce row-level security automatically. Self-service data access for analysts without exposing sensitive fields or violating compliance rules.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-charcoal mb-3">
                  Data quality you can trust
                </h3>
                <p className="text-lg text-charcoal/80">
                  Automated validation rules that catch bad data before it corrupts downstream systems. Data quality dashboards that track completeness, accuracy, consistency, and timeliness metrics. Alerting that notifies data owners when quality thresholds are breached.
                </p>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-charcoal mb-3">
                  Discoverable and documented
                </h3>
                <p className="text-lg text-charcoal/80">
                  Data catalogs that make datasets searchable by business term, not technical table name. Automated lineage tracking that shows where data comes from and where it's used. Business glossaries that define metrics consistently across teams so "revenue" means the same thing everywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-8">
            From chaos to control
          </h2>
          
          <div className="prose prose-lg max-w-none text-charcoal/80 space-y-6">
            <p>
              Most organizations treat data governance as a compliance checkbox—policies nobody reads, committees that never meet, and tools that collect dust. We build governance systems that people actually use because they make work easier, not harder.
            </p>

            <p>
              Our approach starts with understanding your risk profile and regulatory requirements. Healthcare organizations need HIPAA-compliant audit trails. Financial services need SOC 2 controls and data residency guarantees. Retailers need GDPR consent management and right-to-be-forgotten workflows. We map your obligations to technical controls that enforce compliance automatically.
            </p>

            <p>
              We implement governance in layers: access controls at the data platform level (who can query what tables), row-level security for multi-tenant scenarios (customers only see their own data), field-level masking for sensitive attributes (analysts see anonymized PII), and audit logging that captures every data access event with tamper-proof timestamps.
            </p>

            <blockquote className="border-l-4 border-blue-500 pl-6 italic text-xl text-charcoal">
              "Governance that works is governance that's invisible. Users get the data they need without thinking about policies, and compliance happens automatically."
            </blockquote>
            <p className="text-sm text-muted-foreground">
              — Martijn Voorveld, Commercial Lead - NEXDYNE TECHNOLOGIES
            </p>
          </div>
        </div>
      </section>

      {/* Data Quality Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-8">
            Data quality at scale
          </h2>
          
          <div className="prose prose-lg max-w-none text-charcoal/80 space-y-6">
            <p>
              Bad data costs money—incorrect forecasts, failed campaigns, compliance violations, and lost customer trust. We build data quality systems that prevent problems instead of detecting them after the damage is done.
            </p>

            <p>
              Our quality framework includes validation rules at ingestion (reject malformed records before they enter the warehouse), transformation tests that verify business logic (revenue should always be positive), schema evolution monitoring (alert when upstream systems change field definitions), and reconciliation checks that compare record counts and totals across systems.
            </p>

            <p>
              We instrument quality metrics into dashboards that data owners monitor daily: completeness (what percentage of records have required fields populated), accuracy (how often do values match authoritative sources), consistency (do related fields agree logically), and timeliness (how fresh is the data compared to SLAs). When quality degrades, automated alerts notify responsible teams with enough context to diagnose root causes quickly.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto bg-white rounded-lg p-12 shadow-lg">
            <div className="flex items-center gap-8">
              <div className="w-24 h-24 bg-slate-200 rounded-full"></div>
              <div>
                <h3 className="text-2xl font-bold text-charcoal mb-3">
                  Want to know more?
                </h3>
                <p className="text-muted-foreground mb-4">Martijn Voorveld</p>
                <p className="text-sm text-muted-foreground mb-6">Senior Sales Manager</p>
                <div className="flex gap-4">
                  <Button className="bg-slate-900 hover:bg-slate-800 text-white">
                    Get in touch
                  </Button>
                  <Button variant="ghost" className="text-charcoal">
                    Schedule a meeting
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
              PARTNERS
            </p>
            <h2 className="text-4xl font-bold text-charcoal">
              Governance & Compliance Tools
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border border-slate-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-charcoal mb-3">Collibra</h3>
              <p className="text-muted-foreground">
                Enterprise data catalog and governance platform for policy management and lineage tracking.
              </p>
            </div>

            <div className="border border-slate-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-charcoal mb-3">Alation</h3>
              <p className="text-muted-foreground">
                Data catalog with AI-powered search, automated documentation, and collaborative data stewardship.
              </p>
            </div>

            <div className="border border-slate-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-charcoal mb-3">Monte Carlo</h3>
              <p className="text-muted-foreground">
                Data observability platform for automated quality monitoring, anomaly detection, and incident management.
              </p>
            </div>

            <div className="border border-slate-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-charcoal mb-3">Immuta</h3>
              <p className="text-muted-foreground">
                Automated data access control and privacy enforcement for cloud data platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
              CASES
            </p>
            <h2 className="text-4xl font-bold text-charcoal mb-4">
              Cases we love talking about
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Real governance implementations. Real compliance outcomes. See how we've deployed data governance systems that balance security with accessibility.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Healthcare HIPAA Case */}
            <Link href="/cases/healthcare-hipaa-compliance">
              <div className="bg-white rounded-lg overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow cursor-pointer">
                <img
                  src="/healthcare-hipaa-compliance.14a658d2.jpg"
                  alt="Healthcare HIPAA Compliance"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3">
                    HEALTHCARE
                  </span>
                  <h3 className="text-xl font-bold text-charcoal mb-2">
                    Hospital Achieves HIPAA Compliance with Automated Audit Trails
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Automated access controls and audit logging for 12,000 employees accessing patient records across 8 facilities.
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-primary font-semibold">Read more</span>
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Financial Data Quality Case */}
            <Link href="/cases/financial-data-quality">
              <div className="bg-white rounded-lg overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow cursor-pointer">
                <img
                  src="/financial-data-quality.4282ec32.jpg"
                  alt="Financial Data Quality"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full mb-3">
                    FINANCIAL SERVICES
                  </span>
                  <h3 className="text-xl font-bold text-charcoal mb-2">
                    Bank Reduces Data Quality Issues 78% with Automated Validation
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Real-time data quality monitoring across 200+ source systems feeding regulatory reports.
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-primary font-semibold">Read more</span>
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Retail GDPR Case */}
            <Link href="/cases/retail-gdpr-compliance">
              <div className="bg-white rounded-lg overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow cursor-pointer">
                <img
                  src="/retail-gdpr-compliance.2c43df67.jpg"
                  alt="Retail GDPR Compliance"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full mb-3">
                    RETAIL
                  </span>
                  <h3 className="text-xl font-bold text-charcoal mb-2">
                    Retailer Implements GDPR-Compliant Data Catalog for 15M Customers
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Consent management, right-to-be-forgotten workflows, and data residency controls across EU markets.
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-primary font-semibold">Read more</span>
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-700 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to implement data governance that actually works?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-slate-200">
            Let's build compliance frameworks, access controls, and data quality systems that protect your business while enabling self-service analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
              Get in touch
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Schedule a meeting
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
          <RelatedContent items={dataRelatedItems} />
      <Footer />

    </div>
  );
}
