import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function HealthcareHIPAACompliance() {
  return (
    <CaseStudyTemplate
      client="Regional Hospital System"
      industry="Healthcare · Data Governance"
      title="Hospital Achieves HIPAA Compliance with Automated Audit Trails"
      subtitle="Automated access controls and comprehensive audit logging for 12,000 employees accessing patient records across 8 facilities, reducing compliance violations 92%."
      heroImage="https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=1600&q=80"
      challenge={`A regional hospital system with 8 facilities and 12,000 employees faced mounting HIPAA compliance risks. Their legacy EHR system granted broad access permissions—nurses could view records for patients they'd never treated, billing staff saw clinical notes they didn't need, and IT administrators had unrestricted access to everything. Audit logs existed but were scattered across systems, making compliance investigations take weeks.

The Office for Civil Rights had cited them for insufficient access controls after a breach investigation revealed that a terminated employee's credentials remained active for 6 weeks, allowing unauthorized access to 2,400 patient records. The potential fine was $1.5M, and the reputational damage was worse—local media covered the breach extensively, and patient trust eroded.

They needed a governance system that enforced role-based access automatically, logged every data access event with immutable timestamps, detected anomalous access patterns in real-time, and generated audit reports that compliance officers could understand without technical expertise. The solution had to integrate with their existing EHR (Epic), identity provider (Active Directory), and SIEM system without disrupting clinical workflows.`}
      solution={`NEXDYNE implemented a comprehensive data governance layer that sits between users and the EHR system. We deployed Immuta for automated access control and audit logging, integrated with their Active Directory for identity management, and built custom policies that enforce HIPAA's minimum necessary standard—users only see data required for their specific job function.

Access policies are role-based but context-aware: nurses assigned to a patient's care team see full clinical records, but nurses on different floors see only basic demographics. Physicians access records for their own patients plus emergency override capability (logged and reviewed). Billing staff see diagnosis codes and procedure details but clinical notes are masked. IT administrators have no patient data access by default—they must request break-glass access with manager approval, and every action is logged.

We built anomaly detection rules that flag suspicious patterns: accessing records of VIP patients without clinical justification, bulk record downloads, after-hours access from unusual locations, and access by terminated employees (synced from HR systems). Alerts route to the compliance team via Slack and email with enough context to investigate immediately.`}
      impact={`HIPAA compliance violations dropped 92% in the first year. The hospital passed its next OCR audit with zero findings—auditors praised the comprehensive audit trail and automated access controls. Average time to investigate potential breaches fell from 3 weeks to 2 hours, as compliance officers could query audit logs directly instead of requesting reports from IT.

Clinical staff initially worried that tighter access controls would slow them down, but the opposite happened. Nurses no longer waste time scrolling through irrelevant patient lists—they see only their assigned patients. The system caught 14 policy violations in the first 6 months: 8 were innocent mistakes, 4 were curiosity-driven snooping, and 2 were potential fraud cases. All were investigated and resolved before causing harm.`}
      metrics={[
        { value: "92%", label: "Compliance violation reduction" },
        { value: "12,000", label: "Employees with controlled access" },
        { value: "100%", label: "Audit trail coverage" },
        { value: "8", label: "Facilities secured" }
      ]}
      tags={["Healthcare", "HIPAA", "Data Governance", "Compliance"]}
      relatedCapability={{
        title: "Risk & Resilience",
        link: "/capabilities/risk-resilience"
      }}
    />
  );
}
