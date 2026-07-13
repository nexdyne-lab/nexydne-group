
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function OperationsProcessAutomationProcessAssessmentPrioritization() {
  return (
    <ServiceDetailTemplate
      hubName="Process Automation"
      hubSlug="operations/process-automation"
      hubHref="/capabilities/operations/process-automation"
      serviceName="Process Assessment & Prioritization"
      serviceSlug="process-assessment-prioritization"
      heroSubtitle="Identify automation opportunities across your operations. Prioritize by impact, feasibility, and strategic value to build a compelling business case."
      heroImage="/images/capabilities/cap-robot-factory.jpg"
      experienceStats={[
        { number: "100+", label: "Process Automation engagements delivered globally" },
        { number: "20-40%", label: "Typical performance improvement captured" },
        { number: "8-16 wks", label: "Time to first measurable impact" },
        { number: "Embedded", label: "Capability transfer at every engagement" },
      ]}
      challenge="Operations leaders know process assessment & prioritization can unlock material value, yet the gap between intent and execution is wide. Legacy processes, fragmented data, and unclear ownership keep performance well below potential — and small fixes rarely move the needle on their own."
      opportunity="A focused process assessment & prioritization program — grounded in process automation fundamentals and powered by modern analytics — can compress cycle times, lift quality, and free working capital. The teams that win treat this as a multi-year capability build, not a one-off project."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the current state",
          body:
            "We assess your existing process assessment & prioritization approach — mapping flows, capabilities, and gaps. We benchmark against best-in-class performers and quantify the opportunity ahead.",
        },
        {
          step: "02",
          title: "Design the target state",
          body:
            "We co-design a target operating model for process assessment & prioritization — balancing speed, cost, quality, and risk. The blueprint is grounded in your context and built to scale.",
        },
        {
          step: "03",
          title: "Deliver and embed",
          body:
            "We deploy in agile sprints, measuring impact at each step. We build internal capability alongside process change so the new way of working sticks long after we leave.",
        },
      ]}
      outcomes={[
        "Clear, executive-ready strategy for process assessment & prioritization aligned to enterprise priorities",
        "Measurable performance gains across cost, quality, speed, and customer experience",
        "Stronger frontline ownership and cross-functional governance to sustain results",
        "Internal Process Automation capability uplift that compounds value beyond the engagement",
      ]}
            featuredCases={[
        { slug: "healthcare-revenue-cycle", title: "Recovering revenue the system had already earned", industry: "Healthcare", metric: "$32M", image: "/case-healthcare-team.5797392b.jpg" },
        { slug: "insurance-claims-automation", title: "Settling straightforward claims in hours, not weeks", industry: "Insurance", metric: "60%", image: "/case-insurance-claims.399e5d4b.jpg" },
        { slug: "agentic-ai-service-resolution", title: "Resolving service requests end to end with AI agents", industry: "Financial Services", metric: "60%", image: "/images/industries/fin-trader.jpg" },
      ]}
      relatedServices={[
        { slug: "workflow-automation", name: "Workflow Automation", href: "/capabilities/operations/process-automation/workflow-automation" },
        { slug: "robotic-process-automation", name: "Robotic Process Automation", href: "/capabilities/operations/process-automation/robotic-process-automation" },
        { slug: "intelligent-document-processing", name: "Intelligent Document Processing", href: "/capabilities/operations/process-automation/intelligent-document-processing" },
      ]}
      ctaLeadName="Talk to our Process Assessment & Prioritization lead"
    />
  );
}
