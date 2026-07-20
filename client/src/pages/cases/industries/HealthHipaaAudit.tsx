import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Shield, Target, Users, AlertTriangle, CheckCircle } from "lucide-react";

export default function HealthHipaaAudit() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Health System Passes HIPAA Audit With Zero Findings | Data Governance Case Study"
      seoDescription="A health system faced a HIPAA audit with fragmented governance. A framework rebuilt around lineage, access controls, and steward-led remediation cleared the audit window with zero findings."
      canonical="/cases/health-hipaa-audit"
      industry="Healthcare"
      industryLink="/industries/healthcare"
      title="How a Health System Passed Its HIPAA Audit With Zero Findings"
      subtitle="A HIPAA audit was looming and governance was scattered across systems no one fully controlled. Rebuilding it around lineage, access, and accountable stewards cleared the audit clean."
      heroImage="/images/cases/health-hipaa-audit-hero.jpg"
      metrics={[
        { value: "Zero", label: "Audit Findings" },
        { value: "Full", label: "Regulator Approval" },
        { value: "Lineage", label: "End to End" },
        { value: "Steward", label: "Led Remediation" }
      ]}
      clientContextTitle="An Audit Looming Over Scattered Governance"
      clientContextIntro="A health system was heading into a HIPAA audit with data governance that had grown up piecemeal. Protected health information flowed through systems with inconsistent access controls, no reliable record of where data came from or went, and no one clearly accountable for fixing gaps."
      clientContextBody="An auditor asks two questions the health system could not confidently answer: who can access this data, and where did it come from. Access controls varied by system, lineage was undocumented, and remediation, when it happened, was ad hoc with no owner. Failing the audit carried regulatory and reputational consequences the organization could not accept. It needed governance rebuilt around the things an auditor actually checks — provable lineage, enforced access controls, and named stewards accountable for remediation — before the audit window opened."
      clientProfile={{
        industry: "Regional Health System",
        companySize: "~$680M Annual Revenue",
        projectDuration: "6 Months",
        additionalInfo: "HIPAA-Regulated Data Estate",
        additionalLabel: "Compliance Environment"
      }}
      challengeTitle="Why the Audit Was at Risk"
      challenges={[
        { icon: Shield, title: "Inconsistent Access Controls", description: "Access to protected data varied by system, with no uniform, provable control the auditor could verify." },
        { icon: Target, title: "No Reliable Lineage", description: "There was no dependable record of where data came from or where it flowed, a question auditors always ask." },
        { icon: Users, title: "No Accountable Stewards", description: "Remediation was ad hoc with no owner, so gaps recurred and nothing was demonstrably fixed." },
        { icon: AlertTriangle, title: "High-Stakes Exposure", description: "A failed HIPAA audit carried regulatory and reputational consequences the system could not accept." }
      ]}
      approachTitle="Rebuild Governance Around What Auditors Check"
      approachIntro="We rebuilt the governance framework around end-to-end lineage, enforced access controls, and steward-led remediation, so the health system could answer every auditor question with evidence — and cleared the window with zero findings."
      steps={[
        { step: "01", title: "Establishing End-to-End Lineage", description: "We documented where protected data originated and how it flowed, so the system could prove provenance for any dataset on demand." },
        { step: "02", title: "Enforcing Uniform Access Controls", description: "We standardized and enforced access controls across systems, replacing the patchwork with a provable, consistent model." },
        { step: "03", title: "Assigning Data Stewards", description: "We named stewards accountable for each domain, so remediation had owners and gaps were closed and stayed closed." },
        { step: "04", title: "Preparing for the Auditor", description: "We assembled the evidence the framework produced so every auditor question had a documented, defensible answer." }
      ]}
      resultsTitle="An Audit Cleared Clean"
      results={[
        { icon: CheckCircle, value: "Zero", label: "Findings", detail: "On the HIPAA audit" },
        { icon: Shield, value: "Full", label: "Approval", detail: "From the regulator" },
        { icon: Target, value: "Provable", label: "Lineage", detail: "Answers on demand" },
        { icon: Users, value: "Owned", label: "Remediation", detail: "Stewards accountable per domain" }
      ]}
      quote="An auditor asks who can touch this data and where it came from, and we could not answer either with confidence. Rebuilding governance around real lineage, controls we could prove, and stewards who actually owned remediation meant we walked into the audit with evidence for everything. Zero findings."
      quoteAuthor="Chief Information Security Officer"
      quoteRole="Regional health system"
      relatedStudies={[
        { title: "How a Regional Bank Cut Data Subject Request Turnaround by 79%", metric: "79%", label: "faster subject-rights turnaround", link: "/cases/bank-subject-rights", image: "/images/industries/fin-trader.jpg" },
        { title: "How a National Retailer Cut Time-to-Insight by 70% With a Lakehouse", metric: "70%", label: "faster time-to-insight", link: "/cases/retailer-databricks-lakehouse", image: "/images/industries/retail-shelves.jpg" }
      ]}
      ctaTitle="Is a compliance audit exposing governance gaps?"
      ctaDescription="Let's rebuild governance around lineage, access, and accountable stewards — and clear the audit."
    />
  );
}
