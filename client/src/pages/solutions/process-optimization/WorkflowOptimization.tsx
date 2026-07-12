import SolutionCat6Template from "@/components/SolutionCat6Template";

export default function WorkflowOptimization() {
  return (
    <SolutionCat6Template
      eyebrow="SOLUTION · PROCESS OPTIMIZATION · WORKFLOW OPTIMIZATION"
      title="Workflow Optimization"
      subtitle="Most workflows in operation today were designed for a volume, a system landscape, and a labor model that have all changed. We apply BPMN modeling, value-stream mapping, and lean methods to redesign them for the cycle time, quality, and capacity the business actually needs."
      heroImage="/images/insight-genai-operations.jpg"
      heroFocal="70% 50%"
      seoTitle="Workflow Optimization"
      seoDescription="Optimize existing workflows for cycle time, quality, and capacity using BPMN modeling, value-stream mapping, and lean methods."
      canonical="/solutions/process-optimization/workflow-optimization"
      perspective={{
        heading:
          "Most workflows are not broken. They were designed for a business that no longer exists.",
        image: "/images/devops-automation-hub-abstract.jpg",
        paragraphs: [
          "When we walk into a workflow optimization engagement, the workflow itself is rarely the problem. The problem is that the workflow was designed for a volume, a regulatory regime, a system landscape, and a labor model that have all moved on — and the operators have absorbed the gap with a layer of workarounds that look like the process but cost the business cycle time, quality, and capacity every day.",
          "Our redesign work uses BPMN modeling and value-stream mapping not as deliverable formats but as diagnostic instruments. We quantify the waste, run the redesign workshops with the operators who own the work, validate the to-be model against historical demand patterns, and deploy with a KPI dashboard wired in. The output is a workflow that holds — and an owner who can defend it.",
        ],
      }}
      deliverHeading="A five-phase approach from as-is capture to measured deployment."
      deliverIntro="Each phase is timeboxed and produces a tangible artifact. Most engagements run ten to fourteen weeks end-to-end, with the KPI dashboard live the day the redesigned workflow goes into production."
      phases={[
        {
          name: "As-is workflow capture",
          description:
            "We document the workflow as it actually executes — not the version in the SOP binder. BPMN modeling sessions with operators, supplemented by system telemetry where it exists, capture every hand-off, queue, approval, and rework loop. The product is a high-fidelity as-is model the team agrees represents reality, not a sanitized version that survives the steering committee.",
        },
        {
          name: "Bottleneck and waste analysis",
          description:
            "Using value-stream mapping and lean diagnostics, we quantify cycle time, queue time, defect rates, rework loops, and capacity utilization across each step. The seven wastes are not a poster on the wall — they are line items in a quantified diagnosis, ranked by annualized impact and addressability.",
        },
        {
          name: "Redesign workshops",
          description:
            "Workflow redesign is done with the operators, not to them. Structured workshops generate the to-be design — what the workflow looks like when the wastes are removed, the hand-offs simplified, the SLAs designed in rather than retrofitted. Each redesign decision carries a cost, complexity, and benefit estimate so trade-offs are explicit.",
        },
        {
          name: "Redesigned workflow validation",
          description:
            "Before deployment, the to-be workflow is validated end-to-end: simulation against historical volumes, table-top walkthroughs against exception scenarios, and a controlled pilot on a contained slice of the work. We do not deploy redesigns that have not been stress-tested against the real pattern of demand.",
        },
        {
          name: "Deployment and measurement",
          description:
            "Go-live is the start, not the end. We deploy with the KPI dashboard already wired — cycle time, first-pass yield, capacity utilization, SLA conformance — so the team sees the gain in real time and the business case is defended on data, not anecdote. The dashboard becomes the operating cadence for the workflow's owner.",
        },
      ]}
      getHeading="Six concrete artifacts every engagement leaves behind."
      deliverables={[
        {
          name: "As-is process maps in BPMN",
          description:
            "High-fidelity BPMN models of the current-state workflow, validated by operators and reflecting how the work actually executes — including every exception path.",
        },
        {
          name: "Value-stream analysis report",
          description:
            "End-to-end value-stream map with cycle, queue, and rework time quantified per step — and the seven wastes called out with annualized impact estimates.",
        },
        {
          name: "Bottleneck quantification report",
          description:
            "Ranked list of capacity-constrained steps with throughput math, cost-of-delay estimates, and the operating decisions each bottleneck is forcing today.",
        },
        {
          name: "Redesigned workflow specifications",
          description:
            "To-be BPMN models, role definitions, decision rules, and integration touch-points — at the fidelity needed to brief IT, training, and operations on day one.",
        },
        {
          name: "Change management plan",
          description:
            "Stakeholder-mapped change plan covering communications, training, role transitions, and the reinforcement cadence needed to make the redesign stick.",
        },
        {
          name: "KPI baseline and tracking dashboard",
          description:
            "Production-grade dashboard the workflow owner uses for daily and weekly cadence — cycle time, first-pass yield, SLA conformance, capacity utilization.",
        },
      ]}
      outcome={{
        heading:
          "Workflow redesigns delivered through this approach typically take 25 to 45 percent out of cycle time and lift first-pass yield by ten to twenty points within the first quarter of go-live.",
        body: "The number is not the point. The point is that the gain is measured on a dashboard the operator owns, the dashboard was wired in before go-live, and the redesign therefore survives the first quarterly business review. That is what makes a workflow optimization stick.",
      }}
      casesHeading="When the redesign holds, the gain compounds quarter on quarter."
      cases={[
        {
          industry: "Specialty Distribution",
          title:
            "Order-fulfillment redesign cuts average cycle time by 41 percent in 14 weeks",
          description:
            "A specialty distributor's order-to-ship workflow had drifted to 9.2-day average cycle time across multiple distribution centers. Value-stream mapping surfaced 11 hand-offs with no SLA, three duplicate approval gates, and a credit-check loop that ran in series with picking. The redesign collapsed the workflow to 5.4 days end-to-end without adding headcount, with a published path to under four days at the second wave.",
          link: "/cases/distribution-order-fulfillment-redesign",
        },
        {
          industry: "Hospital System",
          title:
            "Discharge workflow redesign frees 28 percent of bed-day capacity",
          description:
            "A regional hospital system's discharge workflow had length-of-stay drift driven by serialized approvals across pharmacy, transport, and case management. The redesigned workflow parallelized clearance steps and front-loaded the pharmacy review the prior afternoon, freeing 28 percent of bed-day capacity on the unit during the pilot — and the redesign was rolled out across the system over the following six months.",
          link: "/cases/hospital-discharge-workflow-redesign",
        },
      ]}
      siblingsHeading="Sibling offerings inside this cluster."
      siblings={[
        {
          title: "Process Discovery & Mining",
          link: "/solutions/process-optimization/process-discovery-mining",
        },
        {
          title: "Intelligent Automation Design",
          link: "/solutions/process-optimization/intelligent-automation-design",
        },
        {
          title: "AI-Powered Decision Support",
          link: "/solutions/process-optimization/ai-powered-decision-support",
        },
        {
          title: "Change Management & Training",
          link: "/solutions/process-optimization/change-management-training",
        },
        {
          title: "Continuous Improvement Programs",
          link: "/solutions/process-optimization/continuous-improvement-programs",
        },
      ]}
      cta={{
        heading:
          "Bring our workflow redesign team into your next operating-cadence conversation.",
        body: "We work with operating leaders who want their workflow gains measured on a dashboard, not a slide. The conversation starts with the value stream you would change first.",
        industries: [
          { value: "manufacturing", label: "Manufacturing" },
          { value: "professional-services", label: "Professional Services" },
          { value: "technology", label: "Technology" },
          { value: "healthcare", label: "Healthcare" },
          { value: "financial-services", label: "Financial Services" },
          { value: "retail", label: "Retail & Consumer" },
          { value: "other", label: "Other" },
        ],
      }}
    />
  );
}
