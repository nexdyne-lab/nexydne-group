import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function HealthcareProvider() {
  return (
    <CaseStudyTemplate
      client="Healthcare Provider Network"
      industry="Healthcare · Process Automation"
      title="Healthcare Provider: Patient Data Management"
      subtitle="Deployed intelligent automation to streamline patient record management and insurance claims processing, reducing administrative overhead by 40% while improving data accuracy to 95%."
      heroImage="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600&q=80"
      challenge={`A multi-location healthcare network serving 50,000+ patients annually was overwhelmed by administrative burden. Their staff spent 300+ hours weekly manually transferring patient data between their EHR system, insurance portals, and billing platform. Each patient visit required data entry across four different systems, creating bottlenecks that delayed care and frustrated both staff and patients.

Manual data entry introduced errors that cascaded through the revenue cycle—incorrect insurance information, missing authorizations, duplicate claims. These mistakes cost the network $3M+ annually in claim denials, delayed reimbursements, and administrative appeals. Staff burnout from repetitive data entry was driving turnover rates above 40%, creating additional recruitment and training costs.`}
      solution={`NEXDYNE deployed an end-to-end automation solution that integrated patient registration, insurance verification, and claims processing. RPA bots extracted patient information from intake forms, verified insurance eligibility in real-time, updated EHR records, and submitted claims automatically—transforming hours of manual work into minutes of automated execution.

The implementation began with patient journey mapping workshops with clinical and admin staff to document all edge cases, followed by a HIPAA compliance review and security hardening. UiPath bots with HIPAA-compliant credential management handled OCR extraction from insurance cards and intake forms, real-time insurance eligibility verification, and automated claims submission with error handling. A pilot deployment at a single location validated the approach before phased rollout across all 12 locations over 8 weeks.`}
      impact={`Administrative overhead dropped 40%, freeing 240 hours weekly for staff to focus on patient care and complex case management. Claims processing accelerated by 50%, directly improving cash flow. Data accuracy reached 95%, reducing the $3M+ annual cost of claim denials, reimbursement delays, and administrative appeals.

Staff satisfaction improved dramatically: turnover declined from 40% to 18% by eliminating repetitive data entry tasks. Patient experience also improved—registration time dropped from 15 minutes to 5 minutes. The claim denial rate fell 35%, accelerating cash flow and improving the organization's financial health.`}
      metrics={[
        { value: "40%", label: "Reduction in admin overhead" },
        { value: "50%", label: "Faster claim processing" },
        { value: "95%", label: "Data accuracy rate" }
      ]}
      tags={["Healthcare", "RPA", "Process Automation", "Operations"]}
      relatedCapability={{
        title: "Operations",
        link: "/capabilities/operations"
      }}
    />
  );
}
