import SolutionCat6Template from "@/components/SolutionCat6Template";

export default function VoiceOfCustomer() {
  return (
    <SolutionCat6Template
      eyebrow="SOLUTION · CUSTOMER INTELLIGENCE · VOICE OF CUSTOMER"
      title="Voice of Customer"
      subtitle="Most VoC programs are NPS scoreboards nobody acts on. We design the system that captures the right signal across every channel, turns it into decision-quality insight, and operates the close-the-loop discipline that makes the program earn its keep."
      heroImage="/images/ai-team-collaboration.jpg"
      heroFocal="60% 45%"
      seoTitle="Voice of Customer"
      seoDescription="Build the VoC program that captures actionable insight, not vanity metrics — across surveys, social, support, behavioral signals, and the close-the-loop discipline that makes it operate."
      canonical="/solutions/customer-intelligence/voice-of-customer"
      perspective={{
        heading:
          "Capture the signal that drives decisions — not the score that decorates the deck.",
        image: "/images/sector-consumer.jpg",
        paragraphs: [
          "Most Voice-of-Customer programs we audit are stuck at the same place: a quarterly NPS score, two surveys with declining response rates, a dashboard the leadership team scans for thirty seconds, and no recurring action loop. The score moves a point, the team debates whether the change is signal, and the next quarter looks the same. The customer never hears back.",
          "A VoC program earns its keep when feedback turns into decisions and decisions turn into responses the customer actually notices. That requires a different design: the right signal across every channel — not just surveys — the analysis layer that separates cause from correlation, the close-the-loop discipline that gives every detractor a named owner, and the operating cadence that survives the next reorganization. We build the system, then hand it to the team that operates it.",
        ],
      }}
      deliverHeading="A five-phase approach from channel inventory to operating program."
      deliverIntro="Each phase is timeboxed and produces a tangible artifact. Most engagements run twelve to eighteen weeks from inventory to a closed-loop operating model with the dashboard live."
      phases={[
        {
          name: "Feedback channel inventory",
          description:
            "Most VoC programs we inherit are NPS scoreboards with two surveys nobody acts on. We start by inventorying every feedback signal already arriving — surveys, NPS, support tickets, app reviews, social mentions, sales-call notes, churn-exit interviews, behavioral signals — and rate each on coverage, fidelity, and decision usefulness. The gaps that matter become the program priorities; the noise gets dropped.",
        },
        {
          name: "Data collection design",
          description:
            "We design the collection layer the program actually needs: question-bank discipline so every survey ladders to a decision, sampling logic that protects representativeness, integration with the operational systems where signals already live, and the privacy and consent posture that lets the program scale across regions without friction.",
        },
        {
          name: "Analysis and insight extraction",
          description:
            "Raw VoC data is mostly noise. We stand up the analysis layer — text and theme classification on unstructured feedback, statistical analysis on structured signals, driver analysis to separate cause from correlation, and the synthesis cadence that turns thousands of data points into a small number of decision-quality insights every quarter.",
        },
        {
          name: "Action loop implementation",
          description:
            "The single biggest reason VoC programs fail is the missing close-the-loop layer. We design the action playbook — which insight goes to which owner, with what SLA, with what visibility — and the closed-loop response model that gets back to the customer, when warranted, with evidence the feedback was heard. Without this layer the program is data exhaust, not insight.",
        },
        {
          name: "Continuous program operation",
          description:
            "VoC is an operating discipline, not a project. We hand off the operating model — executive dashboard, governance forum, refresh cadence, ownership map — that turns the program into a recurring institutional capability instead of a one-off survey. The dashboard is the surface the leadership team meets on; the cadence is what keeps the insights fresh.",
        },
      ]}
      getHeading="Six concrete artifacts every engagement leaves behind."
      deliverables={[
        {
          name: "Feedback channel architecture",
          description:
            "Inventory and target architecture across surveys, NPS, support, social, sales notes, exit interviews, and behavioral signals — with coverage gaps, redundancies, and the rationalized go-forward design.",
        },
        {
          name: "Data collection design and question bank",
          description:
            "Collection design covering survey logic, sampling, integration into operational systems, privacy posture, and a question bank where every item ladders to a known decision.",
        },
        {
          name: "Insight reporting framework",
          description:
            "Analysis layer covering text and theme classification, driver analysis, and the synthesis cadence that produces decision-quality insights — not vanity dashboards.",
        },
        {
          name: "Action loop playbook (close-the-loop)",
          description:
            "End-to-end action playbook covering insight routing, ownership, SLAs, customer-response protocol, and the visibility surface that holds the loop accountable.",
        },
        {
          name: "Executive dashboard",
          description:
            "Live, role-specific dashboard showing the small number of metrics and themes the leadership team meets on — wired to the operational systems, not to a quarterly export.",
        },
        {
          name: "Program operating model",
          description:
            "Operating model covering governance forum, refresh cadence, ownership map, and the funding logic that turns VoC from a project into a recurring institutional capability.",
        },
      ]}
      outcome={{
        heading:
          "Programs that move from NPS scoreboards to closed-loop VoC typically lift retention 5 to 12 points and cut customer-experience escalations by a third in the first twelve months.",
        body: "The economics work because every insight has a named owner and every detractor hears back. We do not deliver another dashboard — we engineer the operating discipline that makes feedback move the business, not just the score.",
      }}
      casesHeading="When the loop closes, the customer notices."
      cases={[
        {
          industry: "Healthcare Services",
          title:
            "Closed-loop VoC redesign cuts patient-experience escalations 34 percent in three quarters",
          description:
            "A regional health system was running a NPS program that produced a quarterly score and no follow-up. We rebuilt the program around closed-loop response — every detractor reached within 72 hours, every theme routed to a named owner, every action tracked to resolution. Patient-experience escalations fell 34 percent over three quarters and patient-reported NPS lifted nine points on the same instrument.",
          link: "/cases/healthcare-closed-loop-voc",
        },
        {
          industry: "B2B SaaS",
          title:
            "VoC-driven roadmap reordering lifts product-led expansion revenue 19 percent",
          description:
            "A B2B SaaS provider's product roadmap was set by sales requests and competitor checklists. We stood up a VoC program combining in-product feedback, support theme analysis, and cohort interviews — and the synthesis surfaced two priorities the existing roadmap had buried at position seven. The roadmap was reordered, the priorities shipped within two quarters, and product-led expansion revenue rose 19 percent against forecast.",
          link: "/cases/saas-voc-roadmap-reorder",
        },
      ]}
      siblingsHeading="Sibling offerings inside this cluster."
      siblings={[
        {
          title: "Customer Insights",
          link: "/solutions/customer-intelligence/customer-insights",
        },
        {
          title: "Journey Analytics & Optimization",
          link: "/solutions/customer-intelligence/journey-analytics-optimization",
        },
        {
          title: "Customer Journey Map",
          link: "/solutions/customer-intelligence/customer-journey-map",
        },
        {
          title: "Behavioral Segmentation",
          link: "/solutions/customer-intelligence/behavioral-segmentation",
        },
        {
          title: "Predictive Analytics & Modeling",
          link: "/solutions/customer-intelligence/predictive-analytics-modeling",
        },
      ]}
      cta={{
        heading:
          "Bring our VoC team into your next customer-experience conversation.",
        body: "We work with leaders who want feedback to move the business, not just the score. Closed-loop VoC is how that conversation begins.",
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
