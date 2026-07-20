import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { FileWarning, Languages, ShieldCheck, Clock, Layers, GitPullRequestArrow, ScanSearch, HeartPulse } from "lucide-react";

export function HealthcareContentCompliance() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Cutting Patient-Education Compliance Review From 3 Weeks to 4 Days | Healthcare Case Study"
      seoDescription="A 25-facility healthcare system managed patient-education materials in 18 languages with no version control. Automated approval workflows cut review time to 4 days at 100% adherence."
      canonical="/cases/healthcare-content-compliance"
      industry="Healthcare"
      industryLink="/industries/healthcare"
      title="How a Healthcare System Cut Content Compliance Review From 3 Weeks to 4 Days"
      subtitle="Automated approval workflows for patient-education materials across 18 languages and 25 facilities cut compliance review time from three weeks to four days — while reaching 100% regulatory adherence."
      heroImage="/case-medical-collaboration.9602cc8c.jpg"
      metrics={[
        { value: "4 days", label: "Review Time (from 3 weeks)" },
        { value: "18", label: "Languages Supported" },
        { value: "100%", label: "Regulatory Adherence" },
        { value: "25", label: "Facilities Covered" }
      ]}
      clientContextTitle="Content Chaos, Compliance Risk"
      clientContextIntro="A large healthcare system with 25 facilities produced patient-education materials in 18 languages covering hundreds of conditions and procedures. Content lived in Word documents scattered across departmental drives with no version control — clinicians routinely printed outdated materials."
      clientContextBody="Compliance was a constant concern: materials must meet HIPAA, ADA accessibility, and 6th-grade health-literacy standards, with legal review of medical claims and clinical validation of translations. The manual process took three weeks per document across five stakeholders with no visibility into status. In the prior year the system distributed three outdated pieces — including incorrect medication dosages — drawing a Joint Commission citation and 400 hours of remediation."
      clientProfile={{
        industry: "Large Healthcare System",
        companySize: "25 Facilities",
        projectDuration: "18-Language Rollout",
        additionalInfo: "Adobe Experience Manager",
        additionalLabel: "Platform"
      }}
      challengeTitle="Where Content Governance Broke Down"
      challenges={[
        {
          icon: FileWarning,
          title: "No version control",
          description: "Materials scattered across shared drives meant clinicians regularly printed outdated, non-current content."
        },
        {
          icon: Clock,
          title: "3-week review cycles",
          description: "Sequential manual review across five stakeholders left no visibility into approval status."
        },
        {
          icon: Languages,
          title: "18 languages to validate",
          description: "Every translation needed clinical validation for accuracy on top of legal and accessibility review."
        },
        {
          icon: ShieldCheck,
          title: "A Joint Commission citation",
          description: "Three outdated documents reached patients, triggering a citation and 400 hours of remediation."
        }
      ]}
      approachTitle="Structured Content With Enforced Approvals"
      approachIntro="NEXDYNE deployed Adobe Experience Manager as the single source of truth, with structured templates that make compliance a precondition of publishing rather than an afterthought."
      steps={[
        {
          step: "01",
          title: "Enforce compliance in the template",
          description: "Required fields for medical-review date, legal approval, accessibility certification, and translation validation block publishing until every approval is in place."
        },
        {
          step: "02",
          title: "Route to the right reviewers",
          description: "Automated workflows send content to the correct clinical, legal, accessibility, and translation reviewers based on type and language — in parallel, not sequence."
        },
        {
          step: "03",
          title: "Catch errors before humans",
          description: "Automated checks flag content above 6th-grade reading level, missing alt text, poor contrast, and inconsistent terminology, returning specifics to the creator."
        },
        {
          step: "04",
          title: "Never let content expire",
          description: "Materials nearing their annual review are flagged 60 days ahead and pulled from circulation until re-approved."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: GitPullRequestArrow,
          value: "4 days",
          label: "Compliance review time",
          detail: "Down from three weeks via parallel, automated routing"
        },
        {
          icon: ShieldCheck,
          value: "100%",
          label: "Regulatory adherence",
          detail: "Zero compliance incidents in year one, praised at accreditation"
        },
        {
          icon: HeartPulse,
          value: "+18 pts",
          label: "\"Understanding my care plan\"",
          detail: "With chronic-condition readmissions down 12%"
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
          title: "Automating Patient Data Management, Cutting Admin Work 40%",
          metric: "40%",
          label: "less admin overhead",
          link: "/cases/healthcare-provider",
          image: "/images/cases/healthcare-provider-hero.jpg"
        }
      ]}
      ctaTitle="Ready to make compliance the default?"
      ctaDescription="Let's talk about what structured content governance could do for your review cycles."
    />
  );
}

export default HealthcareContentCompliance;
