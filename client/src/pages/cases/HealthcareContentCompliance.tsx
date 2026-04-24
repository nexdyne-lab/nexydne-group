import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function HealthcareContentCompliance() {
  return (
    <CaseStudyTemplate
      client="Large Healthcare System"
      industry="Healthcare · Content Management"
      title="Healthcare System Ensures Compliance with Content Workflows"
      subtitle="Automated approval workflows for patient education materials across 18 languages and 25 facilities, reducing compliance review time from 3 weeks to 4 days while maintaining 100% regulatory adherence."
      heroImage="https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=1600&q=80"
      challenge={`A large healthcare system with 25 facilities serving diverse patient populations struggled with patient education content management. They produced materials in 18 languages covering hundreds of conditions, procedures, and wellness topics. Content lived in Word documents scattered across departmental shared drives, and version control was nonexistent—clinicians printed outdated materials regularly because they couldn't find the latest approved versions.

Regulatory compliance was a constant concern. Patient education materials must meet HIPAA requirements, ADA accessibility standards, and health literacy guidelines (6th-grade reading level). Medical claims require legal review, translations need clinical validation to ensure accuracy, and all content must be reviewed annually for medical accuracy. The manual review process took 3 weeks per document, involving 5 stakeholders (clinical SME, legal, compliance, accessibility specialist, translation validator) with no visibility into approval status.

The system had distributed 3 pieces of outdated content in the past year—one with incorrect medication dosages, one with expired clinical guidelines, and one with translation errors that confused patients. While no harm occurred, the Joint Commission cited them during accreditation review, and the compliance team spent 400 hours investigating and remediating the incidents.`}
      solution={`NEXDYNE deployed Adobe Experience Manager as the centralized content management system for all patient education materials. We built structured content templates that enforce compliance requirements: required fields for medical review date, legal approval, accessibility certification, and translation validation. Content cannot be published without all required approvals, and the system automatically flags materials approaching their annual review deadline.

Automated workflows route content through required reviewers based on content type and language. New diabetes education materials trigger clinical review by endocrinologists, legal review for medical claims, accessibility checks for ADA compliance (alt text, color contrast, screen reader compatibility), and translation validation for all 18 languages. Each reviewer receives notifications with context-specific instructions and can approve, reject with comments, or request revisions. The system tracks approval status in real-time, showing content creators exactly where each document sits in the pipeline.

We implemented automated compliance checks that catch common errors before human review: readability analysis flags content above 6th-grade reading level, accessibility scanners detect missing alt text or insufficient color contrast, and terminology validators ensure consistent use of medical terms across languages. Content that fails automated checks returns to the creator with specific error messages, reducing reviewer burden and accelerating approval cycles.`}
      impact={`Compliance review time dropped from 3 weeks to 4 days. Automated workflows route content to the right reviewers instantly, eliminating delays from manual handoffs and email chains. Parallel review—legal and accessibility happening simultaneously instead of sequentially—cuts approval cycles dramatically. Content creators know exactly where each document sits in the pipeline and can proactively address bottlenecks.

Regulatory adherence reached 100%. The system prevents outdated content from being distributed—materials approaching their annual review deadline are automatically flagged 60 days in advance, and expired content is removed from circulation until re-approved. Zero compliance incidents occurred in the first year, and the Joint Commission praised the system during the next accreditation review, citing it as a best practice example.

Patient outcomes improved measurably. Consistent, accurate, and accessible education materials led to better patient understanding of their conditions and treatment plans. Patient satisfaction scores for "understanding my care plan" increased 18 points, hospital readmission rates for chronic conditions dropped 12%, and patient portal engagement increased 35% as patients accessed education materials proactively.`}
      metrics={[
        { value: "4 days", label: "Compliance review time (from 3 weeks)" },
        { value: "18", label: "Languages supported" },
        { value: "100%", label: "Regulatory adherence" },
        { value: "25", label: "Facilities covered" }
      ]}
      tags={["Healthcare", "Content Management", "Compliance", "Operations"]}
      relatedCapability={{
        title: "Operations",
        link: "/capabilities/operations"
      }}
    />
  );
}
