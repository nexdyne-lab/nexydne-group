// TODO: confirm with practice lead before publish — experience stats, approach pillars, outcomes, and CTA lead name for Workflow Automation.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function OperationsProcessAutomationWorkflowAutomation() {
  return (
    <ServiceDetailTemplate
      hubName="Process Automation"
      hubSlug="operations/process-automation"
      hubHref="/capabilities/operations/process-automation"
      serviceName="Workflow Automation"
      serviceSlug="workflow-automation"
      heroSubtitle="Digitize and automate business workflows. Approvals, notifications, escalations, and handoffs — all orchestrated seamlessly."
      heroImage="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2400"
      experienceStats={[
        { number: "100+", label: "Process Automation engagements delivered globally" },
        { number: "20-40%", label: "Typical performance improvement captured" },
        { number: "8-16 wks", label: "Time to first measurable impact" },
        { number: "Embedded", label: "Capability transfer at every engagement" },
      ]}
      challenge="Operations leaders know workflow automation can unlock material value, yet the gap between intent and execution is wide. Legacy processes, fragmented data, and unclear ownership keep performance well below potential — and small fixes rarely move the needle on their own."
      opportunity="A focused workflow automation program — grounded in process automation fundamentals and powered by modern analytics — can compress cycle times, lift quality, and free working capital. The teams that win treat this as a multi-year capability build, not a one-off project."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the current state",
          body:
            "We assess your existing workflow automation approach — mapping flows, capabilities, and gaps. We benchmark against best-in-class performers and quantify the opportunity ahead.",
        },
        {
          step: "02",
          title: "Design the target state",
          body:
            "We co-design a target operating model for workflow automation — balancing speed, cost, quality, and risk. The blueprint is grounded in your context and built to scale.",
        },
        {
          step: "03",
          title: "Deliver and embed",
          body:
            "We deploy in agile sprints, measuring impact at each step. We build internal capability alongside process change so the new way of working sticks long after we leave.",
        },
      ]}
      outcomes={[
        "Clear, executive-ready strategy for workflow automation aligned to enterprise priorities",
        "Measurable performance gains across cost, quality, speed, and customer experience",
        "Stronger frontline ownership and cross-functional governance to sustain results",
        "Internal Process Automation capability uplift that compounds value beyond the engagement",
      ]}
      featuredCases={[
        {
          slug: "bank-process-automation",
          title: "Regional Bank Automates Loan Origination End-to-End",
          industry: "Financial Services · Operations",
          metric: "70%",
          image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80",
        },
        {
          slug: "hospital-clinical-workflow",
          title: "Academic Medical Center Streamlines Clinical Workflows",
          industry: "Healthcare · Operations",
          metric: "30%",
          image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1600&q=80",
        },
        {
          slug: "wealth-management-automation",
          title: "Wealth Manager Automates Client Onboarding and Portfolio Reporting",
          industry: "Financial Services · Operations",
          metric: "75%",
          image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1600&q=80",
        },
      ]}
      relatedServices={[
        { slug: "process-assessment-prioritization", name: "Process Assessment & Prioritization", href: "/capabilities/operations/process-automation/process-assessment-prioritization" },
        { slug: "robotic-process-automation", name: "Robotic Process Automation", href: "/capabilities/operations/process-automation/robotic-process-automation" },
        { slug: "intelligent-document-processing", name: "Intelligent Document Processing", href: "/capabilities/operations/process-automation/intelligent-document-processing" },
      ]}
      ctaLeadName="Talk to our Workflow Automation lead"
    />
  );
}
