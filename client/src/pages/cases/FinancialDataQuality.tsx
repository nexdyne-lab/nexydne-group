import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function FinancialDataQuality() {
  return (
    <CaseStudyTemplate
      client="Regional Bank"
      industry="Banking · Data Governance"
      title="Bank Reduces Data Quality Issues 78% with Automated Validation"
      subtitle="Real-time data quality monitoring across 200+ source systems feeding regulatory reports, eliminating manual reconciliation and reducing reporting errors."
      heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80"
      challenge={`A regional bank with $45B in assets struggled with data quality problems that cascaded through their regulatory reporting process. They submitted monthly Call Reports (FFIEC 031) to the FDIC, quarterly stress test data to the Fed, and annual CCAR submissions—all requiring data from 200+ source systems spanning core banking, loan origination, treasury, and risk management platforms.

Quality issues surfaced late in the reporting cycle: mismatched totals between systems, missing required fields, invalid date formats, duplicate records, and referential integrity violations. The data governance team spent 3 weeks each quarter manually reconciling discrepancies, often discovering errors hours before submission deadlines. They'd resubmitted 4 regulatory reports in the past year due to data errors, drawing scrutiny from examiners.

The root cause was lack of upstream validation. Source systems accepted bad data—loan systems allowed negative interest rates, customer records had mismatched SSNs, transaction timestamps violated logical constraints. They needed quality checks at ingestion, automated validation rules that caught errors before they propagated.`}
      solution={`NEXDYNE deployed Monte Carlo Data for automated data quality monitoring across their entire data pipeline. We instrumented quality checks at three layers: ingestion validation (reject malformed records before they enter the warehouse), transformation testing (verify business logic during ETL), and reconciliation checks (compare record counts and totals across systems).

We defined 450+ validation rules based on regulatory requirements and business logic. Rules run automatically after each data load, and violations trigger alerts to data owners with specific record IDs and failure reasons. Quality dashboards show metrics by source system, data domain, and severity—completeness, accuracy, consistency, and timeliness. Executives see high-level trends, data owners see actionable violations, and the governance team tracks quality improvement initiatives over time.`}
      impact={`Data quality issues dropped 78% in the first year. The bank hasn't resubmitted a regulatory report since implementing automated validation—every submission passes first-time quality checks. Manual reconciliation time fell from 3 weeks to 2 days per reporting cycle, freeing the governance team to focus on strategic initiatives instead of firefighting data errors.

The system caught 2,400 quality violations in the first quarter—most were upstream data entry errors that would have propagated into regulatory reports. Operational savings totaled $4.2M annually: reduced manual reconciliation labor ($2.1M), avoided regulatory fines from report resubmissions ($1.5M), and improved decision-making from trustworthy data ($600K in better credit risk assessments).`}
      metrics={[
        { value: "78%", label: "Data quality issue reduction" },
        { value: "$4.2M", label: "Annual operational savings" },
        { value: "2 days", label: "Reconciliation time (from 3 weeks)" }
      ]}
      tags={["Data Governance", "Banking", "Regulatory Compliance", "Data Quality"]}
      relatedCapability={{
        title: "Data Transformation",
        link: "/capabilities/data-transformation"
      }}
    />
  );
}
