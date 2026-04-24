import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export function PharmaceuticalComplianceSystem() {
  return (
    <CaseStudyTemplate
      client="Pharmaceutical Manufacturer"
      industry="Life Sciences · Custom Software"
      title="Pharma Manufacturer Automates FDA Compliance Tracking Across 12 Facilities"
      subtitle="Custom compliance management system reduced audit prep time by 78% and eliminated manual spreadsheet tracking for 200+ users."
      heroImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80"
      challenge={`A pharmaceutical manufacturer with 12 production facilities across the US was managing FDA compliance documentation through a patchwork of Excel spreadsheets, shared drives, and email chains. Quality assurance teams spent weeks preparing for audits, manually compiling records from disparate sources and verifying data accuracy.

The decentralized approach created significant risk. Version control was non-existent—teams couldn't tell which documents were current. Audit trails were incomplete, making it difficult to demonstrate compliance during FDA inspections. Critical deadlines were missed because no centralized system tracked upcoming renewals, certifications, or training requirements.

They needed a unified compliance management platform that could track documentation across all facilities, automate workflow approvals, maintain complete audit trails, and provide real-time visibility into compliance status. Off-the-shelf QMS platforms were either too generic or prohibitively expensive for their mid-sized operation.`}
      solution={`NEXDYNE built a custom compliance management system using React for the web interface and Node.js for the backend, with PostgreSQL for structured data storage and AWS S3 for document management. The platform centralizes all compliance documentation, automates approval workflows, and provides role-based access control for 200+ users across 12 facilities.

Key features include automated deadline tracking with email notifications, digital signature workflows for document approvals, complete audit trails showing who accessed or modified each record, and customizable dashboards that give facility managers real-time visibility into compliance status. Integration with their existing ERP system ensures employee training records stay synchronized.

We implemented a phased rollout, starting with two pilot facilities to refine workflows before expanding company-wide. NEXDYNE provided on-site training at each facility and built comprehensive documentation to support ongoing adoption.`}
      impact={`The custom compliance platform transformed how the manufacturer manages regulatory requirements. Audit preparation time dropped from 6 weeks to less than 10 days—quality teams now generate comprehensive compliance reports with a few clicks instead of manually compiling spreadsheets. Automated deadline tracking eliminated missed renewals and certifications, with the system sending proactive alerts 90, 60, and 30 days before deadlines. In the first year, they achieved 100% on-time completion of compliance milestones—up from 73% under the old manual process.

During their most recent FDA inspection, auditors praised the system's comprehensive audit trails and real-time documentation access. The manufacturer passed with zero compliance findings—a significant improvement from previous audits that identified documentation gaps. The platform now manages over 15,000 compliance documents, processes 300+ approval workflows monthly, and the manufacturer estimates $320,000 in annual savings from reduced audit prep costs and avoided compliance risks.`}
      metrics={[
        { value: "78%", label: "Reduction in audit prep time" },
        { value: "100%", label: "Audit trail completeness" },
        { value: "92%", label: "User adoption rate" }
      ]}
      tags={["Life Sciences", "Compliance", "Custom Software", "Technology"]}
      relatedCapability={{
        title: "Risk & Resilience",
        link: "/capabilities/risk-resilience"
      }}
    />
  );
}

export default PharmaceuticalComplianceSystem;
