import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Boxes, Clock, MapPinned, ShieldAlert, Database, GitBranch, ShieldCheck, Search } from "lucide-react";

export function RetailGDPRCompliance() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Cutting GDPR Request Fulfillment From 28 Days to 4 Hours | Retail Case Study"
      seoDescription="A 15M-customer EU e-commerce retailer scattered data across 40+ systems and had missed 3 GDPR deadlines. A data catalog and automated workflows cut fulfillment to 4 hours."
      canonical="/cases/retail-gdpr-compliance"
      industry="Retail"
      industryLink="/industries/retail"
      title="How an E-Commerce Retailer Cut GDPR Fulfillment From 28 Days to 4 Hours"
      subtitle="A data catalog, consent management, and right-to-be-forgotten workflows across 12 EU markets cut GDPR request fulfillment from 28 days to 4 hours — at 100% on-time compliance."
      heroImage="/images/capabilities/cap-retail-apparel.jpg"
      metrics={[
        { value: "4 hrs", label: "Fulfillment (from 28 days)" },
        { value: "15M", label: "Customer Records Cataloged" },
        { value: "100%", label: "GDPR Compliance Rate" },
        { value: "12", label: "EU Markets Covered" }
      ]}
      clientContextTitle="Compliance on a Knife's Edge"
      clientContextIntro="A mid-sized e-commerce retailer with 15M customers across 12 EU countries faced GDPR challenges that threatened its ability to operate in Europe. Customer data lived in 40+ systems, so fulfilling access or deletion requests required manual coordination across IT, legal, and business teams."
      clientContextBody="The legal maximum is 30 days, but average fulfillment ran 28 days — no margin for error. The retailer had missed three deadlines in a year, exposing it to fines up to 4% of global revenue (€18M on €450M). Worse, it couldn't prove data residency: some customer data was processed in US cloud services without proper safeguards, violating Schrems II. It needed a catalog mapping every data element to its location, consent management across channels, automated request workflows, and enforced EU data residency."
      clientProfile={{
        industry: "E-Commerce Retailer",
        companySize: "15M Customers",
        projectDuration: "40+ Systems Mapped",
        additionalInfo: "Collibra",
        additionalLabel: "Data Catalog"
      }}
      challengeTitle="Why GDPR Was Unmanageable"
      challenges={[
        {
          icon: Boxes,
          title: "Data across 40+ systems",
          description: "Customer data scattered across e-commerce, CRM, marketing, loyalty, and analytics made every request a manual hunt."
        },
        {
          icon: Clock,
          title: "28-day average fulfillment",
          description: "Against a 30-day legal maximum, three missed deadlines left the retailer exposed to €18M in fines."
        },
        {
          icon: MapPinned,
          title: "Unprovable data residency",
          description: "Some EU customer data was processed in US clouds without safeguards, violating Schrems II."
        },
        {
          icon: ShieldAlert,
          title: "No unified consent record",
          description: "Marketing permissions lived per-channel, with no way to track or enforce consent consistently."
        }
      ]}
      approachTitle="A Central Catalog With Automated Workflows"
      approachIntro="NEXDYNE deployed Collibra Data Intelligence Cloud as the central catalog — automatically discovering and classifying personal data across all 40+ systems by sensitivity, legal basis, and residency requirement."
      steps={[
        {
          step: "01",
          title: "Discover and classify everything",
          description: "The catalog tagged every element as PII, sensitive, or pseudonymized, with its legal basis and residency rule."
        },
        {
          step: "02",
          title: "Automate access requests",
          description: "A request queries all registered sources via API and compiles a complete, human-readable report of what data exists and how it's used."
        },
        {
          step: "03",
          title: "Verify deletion, don't just flag it",
          description: "Right-to-be-forgotten requests trigger deletion across systems with verification checks and audit trails proving the data is gone."
        },
        {
          step: "04",
          title: "Enforce residency automatically",
          description: "EU customer data stays in AWS eu-west-1, and any cross-border transfer requires an explicit approval workflow."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: GitBranch,
          value: "4 hrs",
          label: "GDPR request fulfillment",
          detail: "Down from 28 days, fully automated"
        },
        {
          icon: ShieldCheck,
          value: "1,200",
          label: "Requests handled in year one",
          detail: "At 100% on-time completion with zero complaints"
        },
        {
          icon: Search,
          value: "Seconds",
          label: "To answer \"where is this data?\"",
          detail: "Down from weeks, accelerating due diligence and M&A"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Automating HIPAA Audit Trails, Cutting Violations 92%",
          metric: "92%",
          label: "fewer violations",
          link: "/cases/healthcare-hipaa-compliance",
          image: "/case-medical-collaboration.9602cc8c.jpg"
        },
        {
          title: "Scaling E-Commerce Revenue 40% With AI Personalization",
          metric: "40%",
          label: "revenue growth",
          link: "/cases/global-retailer-ecommerce",
          image: "/images/capabilities/cap-retail-apparel.jpg"
        }
      ]}
      ctaTitle="Ready to make compliance provable?"
      ctaDescription="Let's talk about what a governed data catalog could do for your privacy posture."
    />
  );
}

export default RetailGDPRCompliance;
