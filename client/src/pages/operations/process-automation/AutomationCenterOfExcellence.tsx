// TODO: confirm with practice lead before publish — experience stats, approach pillars, outcomes, and CTA lead name for Automation Center of Excellence.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function OperationsProcessAutomationAutomationCenterOfExcellence() {
  return (
    <ServiceDetailTemplate
      hubName="Process Automation"
      hubSlug="operations/process-automation"
      hubHref="/capabilities/operations/process-automation"
      serviceName="Automation Center of Excellence"
      serviceSlug="automation-center-of-excellence"
      heroSubtitle="Build sustainable automation capabilities. Governance frameworks, training programs, and operating models that scale."
      heroImage="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2400"
      experienceStats={[
        { number: "100+", label: "Process Automation engagements delivered globally" },
        { number: "20-40%", label: "Typical performance improvement captured" },
        { number: "8-16 wks", label: "Time to first measurable impact" },
        { number: "Embedded", label: "Capability transfer at every engagement" },
      ]}
      challenge="Operations leaders know automation center of excellence can unlock material value, yet the gap between intent and execution is wide. Legacy processes, fragmented data, and unclear ownership keep performance well below potential — and small fixes rarely move the needle on their own."
      opportunity="A focused automation center of excellence program — grounded in process automation fundamentals and powered by modern analytics — can compress cycle times, lift quality, and free working capital. The teams that win treat this as a multi-year capability build, not a one-off project."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the current state",
          body:
            "We assess your existing automation center of excellence approach — mapping flows, capabilities, and gaps. We benchmark against best-in-class performers and quantify the opportunity ahead.",
        },
        {
          step: "02",
          title: "Design the target state",
          body:
            "We co-design a target operating model for automation center of excellence — balancing speed, cost, quality, and risk. The blueprint is grounded in your context and built to scale.",
        },
        {
          step: "03",
          title: "Deliver and embed",
          body:
            "We deploy in agile sprints, measuring impact at each step. We build internal capability alongside process change so the new way of working sticks long after we leave.",
        },
      ]}
      outcomes={[
        "Clear, executive-ready strategy for automation center of excellence aligned to enterprise priorities",
        "Measurable performance gains across cost, quality, speed, and customer experience",
        "Stronger frontline ownership and cross-functional governance to sustain results",
        "Internal Process Automation capability uplift that compounds value beyond the engagement",
      ]}
      featuredCases={[
        {
          slug: "accounting-audit-automation",
          title: "Big Four Firm Modernizes Audit with End-to-End Automation",
          industry: "Professional Services · Operations",
          metric: "40%",
          image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&q=80",
        },
        {
          slug: "law-firm-contract-automation",
          title: "AmLaw 200 Firm Automates Contract Review Across 12 Practice Areas",
          industry: "Professional Services · Operations",
          metric: "85%",
          image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&q=80",
        },
      ]}
      relatedServices={[
        { slug: "process-assessment-prioritization", name: "Process Assessment & Prioritization", href: "/capabilities/operations/process-automation/process-assessment-prioritization" },
        { slug: "workflow-automation", name: "Workflow Automation", href: "/capabilities/operations/process-automation/workflow-automation" },
        { slug: "robotic-process-automation", name: "Robotic Process Automation", href: "/capabilities/operations/process-automation/robotic-process-automation" },
      ]}
      ctaLeadName="Talk to our Automation Center of Excellence lead"
    />
  );
}
