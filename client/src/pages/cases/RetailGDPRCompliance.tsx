import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export function RetailGDPRCompliance() {
  return (
    <CaseStudyTemplate
      client="Mid-Sized E-Commerce Retailer"
      industry="Retail · Data Governance"
      title="Retailer Implements GDPR-Compliant Data Catalog for 15M Customers"
      subtitle="Consent management, right-to-be-forgotten workflows, and data residency controls across EU markets, reducing GDPR request fulfillment time from 28 days to 4 hours."
      heroImage="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80"
      challenge={`A mid-sized e-commerce retailer with 15M customers across 12 EU countries faced GDPR compliance challenges that threatened their ability to operate in Europe. Customer data was scattered across 40+ systems—e-commerce platform, CRM, email marketing, customer service, loyalty program, payment processor, and analytics tools. When customers exercised their right to access or delete their data, fulfilling requests required manual coordination across IT, legal, and business teams.

The legal maximum for GDPR requests is 30 days, but their average fulfillment time was 28 days—leaving no margin for error. They'd missed 3 deadlines in the past year, exposing them to potential fines up to 4% of global revenue (€18M based on their €450M annual revenue). Worse, they couldn't prove data residency compliance—some customer data was processed in US-based cloud services without proper safeguards, violating Schrems II requirements.

They needed a data catalog that mapped every customer data element to its storage location, a consent management system that tracked marketing permissions across channels, automated workflows for right-to-access and right-to-be-forgotten requests, and data residency controls that ensured EU customer data stayed within EU borders.`}
      solution={`NEXDYNE deployed Collibra Data Intelligence Cloud as the central data catalog, automatically discovering and classifying personal data across all 40+ systems. We tagged data elements by sensitivity (PII, sensitive PII, pseudonymized), legal basis for processing (consent, contract, legitimate interest), and data residency requirements (EU-only, US-allowed with safeguards, unrestricted).

We built automated workflows for GDPR requests: when a customer submits a data access request, the system queries all registered data sources via API, compiles a complete report of what data exists and how it's used, and delivers it in human-readable format. Right-to-be-forgotten requests trigger deletion workflows across systems with verification checks—the system confirms data was actually deleted, not just flagged, and generates audit trails for legal compliance.

Consent management integrates with their e-commerce platform and email marketing tools. When customers update preferences, changes propagate to all systems within 15 minutes. Data residency controls enforce geographic boundaries—EU customer data is stored in AWS eu-west-1, and cross-border transfers require explicit approval workflows.`}
      impact={`GDPR request fulfillment time dropped from 28 days to 4 hours. The retailer now processes data access requests automatically—customers receive comprehensive reports showing what data exists, how it's used, and who it's shared with, all without manual intervention. Right-to-be-forgotten requests complete within 24 hours with full audit trails proving deletion across all systems.

They processed 1,200 GDPR requests in the first year with 100% on-time completion and zero regulatory complaints. Data residency compliance is now provable—every customer record is tagged with storage location, and automated checks prevent EU data from leaving approved regions.

The data catalog also delivered unexpected business value: marketing teams discovered duplicate customer records across 6 systems wasting ad spend on duplicate targeting, and legal counsel can now answer "where do we store customer phone numbers?" in seconds instead of weeks, accelerating vendor due diligence and M&A processes.`}
      metrics={[
        { value: "4 hours", label: "GDPR request fulfillment time (from 28 days)" },
        { value: "15M", label: "Customer records cataloged" },
        { value: "100%", label: "GDPR compliance rate" },
        { value: "12", label: "EU markets covered" }
      ]}
      tags={["Retail", "GDPR", "Data Governance", "Risk & Resilience"]}
      relatedCapability={{
        title: "Risk & Resilience",
        link: "/capabilities/risk-resilience"
      }}
    />
  );
}

export default RetailGDPRCompliance;
