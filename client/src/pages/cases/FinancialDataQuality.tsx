import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { ShieldCheck, DollarSign, Timer, AlertTriangle, Layers, ClipboardCheck, GaugeCircle } from "lucide-react";

export default function FinancialDataQuality() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Cutting Data-Quality Issues 78% for Regulatory Reporting | Banking Case Study"
      seoDescription="A $45B bank spent 3 weeks a quarter reconciling regulatory data and had resubmitted 4 reports in a year. Automated validation cut quality issues 78% and reconciliation to 2 days."
      canonical="/cases/financial-data-quality"
      industry="Financial Services"
      industryLink="/industries/financial-services"
      title="How a Bank Cut Data-Quality Issues 78% with Automated Validation"
      subtitle="Real-time data-quality monitoring across 200+ source systems feeding regulatory reports eliminated manual reconciliation and ended report resubmissions."
      heroImage="/images/industries/fin-monitors.jpg"
      metrics={[
        { value: "78%", label: "Fewer Quality Issues" },
        { value: "$4.2M", label: "Annual Savings" },
        { value: "2 days", label: "Reconciliation (from 3 wks)" }
      ]}
      clientContextTitle="Bad Data, Discovered Too Late"
      clientContextIntro="A regional bank with $45B in assets struggled with data-quality problems that cascaded through its regulatory reporting. Monthly Call Reports, quarterly stress-test data, and annual CCAR submissions all drew from 200+ source systems — and quality issues surfaced late in each cycle, hours before deadlines."
      clientContextBody="The governance team spent three weeks a quarter manually reconciling mismatched totals, missing fields, invalid formats, and duplicate records — and had resubmitted four regulatory reports in the past year, drawing examiner scrutiny. The root cause was a lack of upstream validation: source systems accepted bad data, from negative interest rates to mismatched SSNs, that then propagated everywhere."
      clientProfile={{
        industry: "Regional Bank",
        companySize: "$45B in Assets",
        projectDuration: "First-Year Impact",
        additionalInfo: "200+ Source Systems",
        additionalLabel: "Data Estate"
      }}
      challengeTitle="Why Reporting Was a Quarterly Fire Drill"
      challenges={[
        {
          icon: AlertTriangle,
          title: "Errors surfaced late",
          description: "Mismatched totals, missing fields, and bad formats appeared hours before submission deadlines — the worst possible time."
        },
        {
          icon: Timer,
          title: "Three weeks of manual reconciliation",
          description: "Every quarter, the governance team burned three weeks hand-reconciling discrepancies across systems."
        },
        {
          icon: ClipboardCheck,
          title: "Repeated resubmissions",
          description: "Four regulatory reports had to be resubmitted in a year due to data errors, drawing examiner scrutiny."
        },
        {
          icon: Layers,
          title: "No upstream validation",
          description: "Source systems accepted bad data — negative rates, mismatched SSNs — that then propagated into every report."
        }
      ]}
      approachTitle="Quality Checks at Every Layer"
      approachIntro="NEXDYNE deployed automated data-quality monitoring across the entire pipeline, instrumenting checks at three layers so errors were caught before they could ever reach a regulatory report."
      steps={[
        {
          step: "01",
          title: "Validate at ingestion",
          description: "Malformed records were rejected before they could enter the warehouse — stopping bad data at the door."
        },
        {
          step: "02",
          title: "Test during transformation",
          description: "Business logic was verified during ETL, so errors couldn't slip through the transformation stage."
        },
        {
          step: "03",
          title: "Reconcile across systems",
          description: "Automated checks compared record counts and totals across systems, surfacing discrepancies immediately."
        },
        {
          step: "04",
          title: "450+ rules, role-based dashboards",
          description: "Over 450 validation rules ran after each load; violations alerted data owners with specific record IDs, while executives and governance tracked quality trends."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: ShieldCheck,
          value: "78%",
          label: "Fewer data-quality issues",
          detail: "No regulatory report resubmitted since"
        },
        {
          icon: DollarSign,
          value: "$4.2M",
          label: "Annual operational savings",
          detail: "From less manual work and avoided fines"
        },
        {
          icon: GaugeCircle,
          value: "2 days",
          label: "Reconciliation time",
          detail: "Down from three weeks per cycle"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Automating Regulatory Compliance with Fine-Tuned LLMs",
          metric: "60%",
          label: "fewer false positives",
          link: "/case-studies/financial-compliance-automation",
          image: "/images/industries/fin-monitors.jpg"
        },
        {
          title: "Automating KYC Compliance with RPA",
          metric: "80%",
          label: "less manual compliance work",
          link: "/cases/financial-institution",
          image: "/images/industries/fin-monitors.jpg"
        }
      ]}
      ctaTitle="Ready to trust your data before the deadline?"
      ctaDescription="Let's talk about what automated validation could do for your reporting confidence."
    />
  );
}
