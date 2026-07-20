import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Users, Clock, AlertTriangle, Target, TrendingUp, CheckCircle, Zap } from "lucide-react";

export default function HospitalWorkflowAutomation() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Hospital Cuts Clinical Workflow Effort With Automation | Healthcare Case Study"
      seoDescription="A hospital's clinical staff lost time to manual administrative workflows. Automating the routine clinical workflows delivered a 45% efficiency gain and returned time to patient care."
      canonical="/cases/hospital-workflow-automation"
      industry="Healthcare"
      industryLink="/industries/healthcare"
      title="How a Hospital Gained 45% Clinical Efficiency by Automating Its Workflows"
      subtitle="Clinical staff spent too much of their day on manual administrative steps instead of patients. Automating the routine clinical workflows gave that time back."
      heroImage="/images/cases/hospital-workflow-automation-hero.jpg"
      metrics={[
        { value: "45%", label: "Efficiency Gain" },
        { value: "Automated", label: "Clinical Workflows" },
        { value: "Returned", label: "Time to Care" },
        { value: "Fewer", label: "Manual Steps" }
      ]}
      clientContextTitle="Clinicians Doing Administrative Work"
      clientContextIntro="A hospital's clinical staff were spending a large share of their day on manual administrative workflows — documentation routing, order coordination, status updates — rather than on direct patient care. The administrative burden was drawing skilled clinicians away from the work only they can do."
      clientContextBody="Much of the administrative work wrapped around clinical care is routine and rules-based, yet it was being performed manually by the very people whose time is most valuable and most needed at the bedside. The manual steps were slow, prone to error, and demoralizing, and they capped how much patient-facing time the staff could offer. The hospital needed to automate the routine clinical workflows so the administrative burden lifted, returning clinician time to care and improving the efficiency of the whole operation."
      clientProfile={{
        industry: "Hospital",
        companySize: "~$680M Annual Revenue",
        projectDuration: "6 Months",
        additionalInfo: "Clinical Workflow Automation",
        additionalLabel: "Care Operations"
      }}
      challengeTitle="Why Clinicians Were Bogged Down"
      challenges={[
        { icon: Users, title: "Administrative Burden", description: "Clinicians spent much of their day on documentation, coordination, and status updates." },
        { icon: Clock, title: "Time Away From Patients", description: "The manual work drew skilled staff away from direct care." },
        { icon: AlertTriangle, title: "Slow and Error-Prone", description: "Manual steps were slow and introduced errors into clinical workflows." },
        { icon: Target, title: "Capped Patient-Facing Time", description: "The burden limited how much care time staff could offer." }
      ]}
      approachTitle="Automate the Routine Clinical Workflows"
      approachIntro="We automated the hospital's routine clinical workflows — documentation routing, order coordination, status updates — delivering a 45 percent efficiency gain and returning time to patient care."
      steps={[
        { step: "01", title: "Mapping the Clinical Workflows", description: "We mapped the routine administrative workflows wrapped around clinical care to find what could be automated." },
        { step: "02", title: "Automating the Routine Steps", description: "We automated the rules-based documentation, coordination, and status work that had consumed clinician time." },
        { step: "03", title: "Reducing Errors", description: "We built accuracy into the automated flows, cutting the errors manual handling introduced." },
        { step: "04", title: "Returning Time to Care", description: "We lifted the administrative burden, gaining 45 percent efficiency and returning time to patients." }
      ]}
      resultsTitle="Time Given Back to Care"
      results={[
        { icon: TrendingUp, value: "45%", label: "Efficiency gain", detail: "On clinical workflows" },
        { icon: Users, value: "Returned", label: "Time to care", detail: "Clinicians back with patients" },
        { icon: CheckCircle, value: "Automated", label: "Routine work", detail: "Documentation and coordination" },
        { icon: Zap, value: "Fewer", label: "Errors", detail: "Accuracy built in" }
      ]}
      quote="Our clinicians were spending too much of their day on documentation and coordination instead of with patients. Automating those routine workflows gave us a forty-five percent efficiency gain and, more importantly, handed our staff back the time that should have been going to care all along. That is the number that actually matters to us."
      quoteAuthor="Chief Nursing Officer"
      quoteRole="Hospital"
      relatedStudies={[
        { title: "How a Logistics Company Scaled 10x in 18 Months", metric: "10x", label: "growth in 18 months", link: "/cases/logistics-scale", image: "/images/capabilities/cap-coder.jpg" },
        { title: "How a Retailer Built a 360° Customer View Across 50+ Touchpoints", metric: "360°", label: "customer view", link: "/cases/retail-omnichannel", image: "/images/cases/retail-omnichannel-hero.jpg" }
      ]}
      ctaTitle="Is administrative work pulling clinicians from care?"
      ctaDescription="Let's automate the routine clinical workflows and return time to patients."
    />
  );
}
