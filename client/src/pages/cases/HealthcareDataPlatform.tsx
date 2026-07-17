import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Split, FileStack, UserX, Boxes, Database, ShieldCheck, ScanEye, HeartPulse } from "lucide-react";

export function HealthcareDataPlatform() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Unifying 15+ Systems Into a 360° Patient Record | Healthcare Case Study"
      seoDescription="A hospital network grown by acquisition had patient data fragmented across 15+ incompatible EMRs. A FHIR-based data lakehouse created a 360° patient view and cut readmissions 20%."
      canonical="/cases/healthcare-data-platform"
      industry="Healthcare"
      industryLink="/industries/healthcare"
      title="How a Hospital Network Unified Patient Records for Better Outcomes"
      subtitle="A regional hospital network integrated 15+ legacy systems into a secure, HIPAA-compliant data lakehouse — creating a 360-degree patient view and driving a 20% reduction in readmissions."
      heroImage="/case-medical-collaboration.9602cc8c.jpg"
      metrics={[
        { value: "15+", label: "Legacy Systems Integrated" },
        { value: "360°", label: "Patient View (< 1 sec)" },
        { value: "20%", label: "Readmission Reduction" }
      ]}
      clientContextTitle="Fragmented by Acquisition"
      clientContextIntro="A regional hospital network had grown through acquisitions, leaving patient data fragmented across incompatible EMR systems. Clinicians had to log into multiple portals to assemble a complete history, producing incomplete records at the point of care and a heavy administrative burden."
      clientContextBody="Each acquired facility ran its own EHR, lab, and billing platform with no interoperability. Critical clinical decisions were made without complete patient information, and the organization couldn't identify high-risk patients across the network for proactive intervention — or perform population health analytics at all."
      clientProfile={{
        industry: "Regional Hospital Network",
        companySize: "15+ Systems",
        projectDuration: "Azure Lakehouse",
        additionalInfo: "FHIR Standards",
        additionalLabel: "Integration"
      }}
      challengeTitle="Why Care Lacked the Full Picture"
      challenges={[
        {
          icon: Split,
          title: "Incompatible EMRs",
          description: "Each acquired facility ran its own EHR, lab, and billing platform with no interoperability."
        },
        {
          icon: FileStack,
          title: "Incomplete records at the point of care",
          description: "Clinicians toggled between portals and still made decisions without full history."
        },
        {
          icon: UserX,
          title: "No cross-network risk view",
          description: "The network couldn't identify high-risk patients for proactive intervention."
        },
        {
          icon: Boxes,
          title: "Heavy reconciliation burden",
          description: "Manual cross-system lookups consumed administrative time and introduced errors."
        }
      ]}
      approachTitle="A FHIR-Based Data Lakehouse"
      approachIntro="NEXDYNE implemented a modern data-lakehouse architecture on Azure, using FHIR standards to ingest and normalize data from every legacy EMR into a single longitudinal patient record."
      steps={[
        {
          step: "01",
          title: "Normalize with FHIR",
          description: "FHIR standards ingested and normalized data from all legacy EMRs into one longitudinal record."
        },
        {
          step: "02",
          title: "Unify structured and unstructured",
          description: "A centralized lake stored both clinical data and unstructured notes and images together."
        },
        {
          step: "03",
          title: "Govern for HIPAA",
          description: "Role-based access controls and audit logs ensured full HIPAA compliance across the platform."
        },
        {
          step: "04",
          title: "Surface history instantly",
          description: "The architecture integrated 15+ systems and surfaced a complete patient history in under one second."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: ScanEye,
          value: "360°",
          label: "Patient view",
          detail: "Complete history in under a second, no portal toggling"
        },
        {
          icon: HeartPulse,
          value: "20%",
          label: "Fewer readmissions",
          detail: "From predictive risk modeling on the full longitudinal record"
        },
        {
          icon: Database,
          value: "1",
          label: "Source of truth",
          detail: "Eliminating manual cross-system reconciliation"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Reaching Level 3 Data Maturity in 18 Months",
          metric: "75%",
          label: "fewer IT requests",
          link: "/cases/healthcare-data-maturity",
          image: "/case-medical-collaboration.9602cc8c.jpg"
        },
        {
          title: "Reaching 99.99% Uptime After Migrating to AWS",
          metric: "99.99%",
          label: "uptime",
          link: "/cases/healthcare-cloud-migration",
          image: "/case-medical-collaboration.9602cc8c.jpg"
        }
      ]}
      ctaTitle="Ready to unify your patient data?"
      ctaDescription="Let's talk about what a 360-degree patient record could do for your outcomes."
    />
  );
}

export default HealthcareDataPlatform;
