import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Unlock, ShieldAlert, ScrollText, UserX, KeyRound, ScanEye, ShieldCheck, Search } from "lucide-react";

export function HealthcareHIPAACompliance() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Cutting HIPAA Violations 92% With Automated Audit Trails | Healthcare Case Study"
      seoDescription="An 8-facility hospital system gave 12,000 employees broad EHR access and was cited by OCR after a breach. Automated access controls and audit logging cut violations 92%."
      canonical="/cases/healthcare-hipaa-compliance"
      industry="Healthcare"
      industryLink="/industries/healthcare"
      title="How a Hospital Cut HIPAA Violations 92% With Automated Audit Trails"
      subtitle="Automated, role-based access controls and comprehensive audit logging for 12,000 employees across 8 facilities cut compliance violations 92% — and turned breach investigations from weeks into hours."
      heroImage="/case-medical-collaboration.9602cc8c.jpg"
      metrics={[
        { value: "92%", label: "Fewer Violations" },
        { value: "12,000", label: "Employees Governed" },
        { value: "100%", label: "Audit-Trail Coverage" },
        { value: "8", label: "Facilities Secured" }
      ]}
      clientContextTitle="Broad Access, Mounting Risk"
      clientContextIntro="A regional hospital system with 8 facilities and 12,000 employees faced mounting HIPAA risk. Its legacy EHR granted broad permissions — nurses could view records for patients they'd never treated, billing staff saw clinical notes, and IT admins had unrestricted access to everything."
      clientContextBody="Audit logs existed but were scattered across systems, making investigations take weeks. The Office for Civil Rights had cited the system after a breach revealed a terminated employee's credentials stayed active for six weeks, exposing 2,400 patient records — a potential $1.5M fine plus reputational damage. The system needed governance that enforced role-based access automatically, logged every access event immutably, detected anomalies in real time, and produced audit reports non-technical officers could read — all without disrupting clinical workflows in Epic."
      clientProfile={{
        industry: "Regional Hospital System",
        companySize: "12,000 Employees",
        projectDuration: "Epic + AD Integration",
        additionalInfo: "Immuta Governance",
        additionalLabel: "Platform"
      }}
      challengeTitle="Why Access Was Out of Control"
      challenges={[
        {
          icon: Unlock,
          title: "Everyone could see everything",
          description: "Broad EHR permissions let staff view records with no clinical justification, violating the minimum-necessary standard."
        },
        {
          icon: UserX,
          title: "A six-week credential gap",
          description: "A terminated employee's access stayed live for six weeks, exposing 2,400 patient records."
        },
        {
          icon: ScrollText,
          title: "Weeks-long investigations",
          description: "Audit logs scattered across systems made every compliance inquiry a multi-week effort."
        },
        {
          icon: ShieldAlert,
          title: "An OCR citation and fine exposure",
          description: "Insufficient access controls drew a regulatory citation and up to $1.5M in potential fines."
        }
      ]}
      approachTitle="A Governance Layer Between Users and the EHR"
      approachIntro="NEXDYNE implemented a governance layer that sits between users and the EHR — deploying Immuta for automated, context-aware access control and audit logging, integrated with Active Directory and the SIEM."
      steps={[
        {
          step: "01",
          title: "Enforce minimum-necessary access",
          description: "Role-based, context-aware policies mean care-team nurses see full records while others see only demographics, and clinical notes stay masked from billing."
        },
        {
          step: "02",
          title: "Lock down privileged access",
          description: "IT admins get no patient data by default — they must request logged, manager-approved break-glass access for every action."
        },
        {
          step: "03",
          title: "Detect anomalies in real time",
          description: "Rules flag VIP-record access without justification, bulk downloads, unusual after-hours access, and terminated-employee activity synced from HR."
        },
        {
          step: "04",
          title: "Make audits self-service",
          description: "Immutable, unified logs let compliance officers query access directly instead of waiting on IT reports."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: ShieldCheck,
          value: "92%",
          label: "Fewer HIPAA violations",
          detail: "With the next OCR audit passed at zero findings"
        },
        {
          icon: Search,
          value: "2 hrs",
          label: "Breach investigation time",
          detail: "Down from three weeks via self-service audit logs"
        },
        {
          icon: ScanEye,
          value: "14",
          label: "Policy violations caught",
          detail: "In six months — all resolved before causing harm"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Cutting Content Compliance Review From 3 Weeks to 4 Days",
          metric: "100%",
          label: "regulatory adherence",
          link: "/cases/healthcare-content-compliance",
          image: "/case-medical-collaboration.9602cc8c.jpg"
        },
        {
          title: "Reaching 99.99% Uptime After Migrating to AWS",
          metric: "99.99%",
          label: "uptime",
          link: "/cases/healthcare-cloud-migration",
          image: "/images/cases/healthcare-cloud-migration-hero.jpg"
        }
      ]}
      ctaTitle="Ready to prove compliance on demand?"
      ctaDescription="Let's talk about what automated data governance could do for your audit posture."
    />
  );
}

export default HealthcareHIPAACompliance;
