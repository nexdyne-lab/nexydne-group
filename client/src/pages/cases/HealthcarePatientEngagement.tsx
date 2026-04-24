import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export function HealthcarePatientEngagement() {
  return (
    <CaseStudyTemplate
      client="Regional Healthcare System"
      industry="Healthcare · Conversational AI"
      title="Healthcare System Automates 52% of Patient Inquiries with AI Assistant"
      subtitle="HIPAA-compliant conversational AI handles appointment scheduling, prescription refills, and basic health queries 24/7, improving patient satisfaction while reducing administrative burden on clinical staff."
      heroImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80"
      challenge={`A regional healthcare system serving 380,000 patients across 14 hospitals and 67 clinics faced escalating administrative costs and declining patient satisfaction scores. The organization's patient services call center handled 142,000 monthly inquiries—appointment scheduling, prescription refills, billing questions, test results, and general health information. Average wait times exceeded 12 minutes during peak hours, and 28% of callers abandoned before reaching staff. Administrative staff spent 65% of their time on routine, repetitive tasks that didn't require clinical expertise, creating bottlenecks that prevented them from focusing on complex care coordination.

The fragmented patient experience created care continuity gaps. Patients called multiple departments for related issues, repeating their information at each touchpoint. The lack of 24/7 support meant patients with urgent questions outside business hours resorted to emergency departments for non-emergency issues, driving up costs by $3.2M+ annually. The healthcare system had implemented a basic phone tree IVR, but patients actively avoided it, preferring to wait for human assistance—making intelligent automation the only viable path to improve patient access while controlling costs.`}
      solution={`NEXDYNE designed and implemented a HIPAA-compliant conversational AI platform that provided 24/7 patient support across phone (voice AI), web portal, mobile app, and SMS. The solution centered on an intelligent virtual health assistant that understood natural language, maintained context across interactions, and integrated securely with the healthcare system's EHR, scheduling, pharmacy, and billing systems to provide personalized, accurate support.

We implemented appointment scheduling and rescheduling, prescription refill request automation, test result notifications and plain-language explanations, and intelligent escalation to clinical staff for complex needs. The platform was built with HIPAA compliance as a foundational requirement, with end-to-end encryption and role-based access to patient data. Phased rollout across patient touchpoints allowed the team to validate accuracy and patient satisfaction before full deployment.`}
      impact={`The AI assistant automated 52% of patient inquiries, freeing administrative staff for complex care coordination. Average wait times dropped from 12 minutes to under 2 minutes with 24/7 AI support. 68% of appointments were booked via AI assistant without staff involvement; no-show rates decreased by 23% through automated reminders.

Operational savings reached $3.2M annually through reduced call center staffing and emergency department diversion. Staff satisfaction improved 31% as work shifted from repetitive tasks to meaningful patient interactions leveraging clinical expertise.`}
      metrics={[
        { value: "52%", label: "Inquiry automation rate" },
        { value: "89%", label: "Patient satisfaction score" },
        { value: "$3.2M", label: "Annual cost savings" }
      ]}
      tags={["AI", "Healthcare", "Conversational AI", "Patient Engagement"]}
      relatedCapability={{
        title: "AI & Machine Learning",
        link: "/capabilities/ai"
      }}
    />
  );
}

export default HealthcarePatientEngagement;
