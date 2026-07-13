import SolutionCat6Template from "@/components/SolutionCat6Template";

export default function AIPoweredDecisionSupport() {
  return (
    <SolutionCat6Template
      eyebrow="SOLUTION · PROCESS OPTIMIZATION · AI-POWERED DECISION SUPPORT"
      title="AI-Powered Decision Support"
      subtitle="The decisions inside operational workflows are where ML earns its keep — recommendations, prioritization, anomaly detection, and augmentation that makes the median operator faster and more consistent. We design the model, the integration, and the governance behind it."
      heroImage="/images/ai-neural-network.jpg"
      heroFocal="60% 50%"
      seoTitle="AI-Powered Decision Support"
      seoDescription="Embed ML and decision-AI into operational workflows with the governance, explanation, and override path enterprise operations require."
      canonical="/solutions/process-optimization/ai-powered-decision-support"
      perspective={{
        heading:
          "The hardest part of decision-AI is not the model. It is the integration into a workflow a real operator runs on a real Tuesday.",
        image: "/images/ai-abstract-visualization.jpg",
        paragraphs: [
          "Most decision-AI projects we have rescued shared the same shape: a credible model, a poorly designed integration, and an operator population that worked around the recommendation rather than with it. The model built in the lab cleared the accuracy bar; the deployment cleared no bar at all. The leaders who get value out of decision-AI design the integration as carefully as the model — explanation, confidence, override, audit — and treat governance as a first-class workstream.",
          "We work the decision inventory, the model design, the integration surface, and the MLOps cadence as a single program. The result is not a model behind an API — it is a decision the operator makes faster and more consistently, with an audit trail risk and audit will sign.",
        ],
      }}
      deliverHeading="A five-phase approach from decision inventory to continuous learning."
      deliverIntro="Each phase is timeboxed and produces a tangible artifact. Most engagements run twelve to twenty weeks end-to-end depending on data readiness, with the model performance dashboard live the day the model goes into production."
      phases={[
        {
          name: "Decision-point inventory",
          description:
            "We start by inventorying the decisions inside the workflow — not the screens, the decisions. Each one is profiled by frequency, latency budget, error cost, regulatory exposure, and the data the operator currently uses to make it. The output is a ranked map of where ML augmentation would change the economics, where it would not, and where the work belongs to a human regardless.",
        },
        {
          name: "Model design and training",
          description:
            "For the prioritized decisions we design the model — not always deep learning, often gradient-boosted trees or calibrated classifiers when the data and the use case call for them. Training, validation, and test splits respect the temporal structure of the work. Class imbalance, leakage, and concept drift are addressed in design, not patched in production.",
        },
        {
          name: "Decision-quality validation",
          description:
            "Accuracy is one metric of many. We validate decision quality on the dimensions the business actually pays for — calibration, false-positive cost, false-negative cost, fairness across protected segments, and behavior under the drift patterns the data exhibits. The model only progresses when it earns its keep against the human baseline on the metrics that matter.",
        },
        {
          name: "Human-in-the-loop integration",
          description:
            "ML models inside operational workflows succeed or fail on integration design. We embed the recommendation, prioritization, or anomaly flag where the operator already works — with the explanation, the confidence band, and the override path the role requires. The interaction is designed for the median operator on a Tuesday, not the analyst at the demo.",
        },
        {
          name: "Continuous learning operations",
          description:
            "Decision-AI in production needs an operating model: drift monitoring, retraining cadence, override review, performance regression checks, and the governance forum where model changes are approved. We stand up the MLOps surface and the governance forum so the model continues to earn its keep after the consultants have gone.",
        },
      ]}
      getHeading="Six concrete artifacts every engagement leaves behind."
      deliverables={[
        {
          name: "Decision inventory map",
          description:
            "Ranked inventory of decision points across the in-scope workflow — frequency, latency budget, error cost, regulatory exposure, and current human baseline.",
        },
        {
          name: "Prioritized model roadmap",
          description:
            "Sequenced backlog of decision points where ML augmentation is justified, with model-class recommendation, data requirement, and expected lift per item.",
        },
        {
          name: "Trained models with accuracy benchmarks",
          description:
            "Production-ready models with documented accuracy, calibration, fairness, and robustness benchmarks against the human baseline and against drift scenarios.",
        },
        {
          name: "Integration architecture",
          description:
            "End-to-end architecture for embedding the model in the operator's workflow — APIs, latency budget, explanation surface, override path, and audit logging.",
        },
        {
          name: "Model governance framework",
          description:
            "Model risk controls covering approval gates, change management, fairness review, drift monitoring thresholds, and the governance forum that owns them.",
        },
        {
          name: "Model performance dashboard",
          description:
            "Live dashboard tracking model accuracy, calibration, drift, override rate, and the operating metric the business cares about — owned by model operations.",
        },
      ]}
      outcome={{
        heading:
          "Decision-AI deployed inside an operator workflow with explanation, override, and governance designed in typically lifts decision consistency by 25 to 40 percent — and is the version that survives audit.",
        body: "The bar is not whether the model is accurate in a notebook. It is whether the operator's decision is faster and more consistent on a Tuesday, and whether risk and audit can defend the program at the next regulatory review. We design for both at the same time.",
      }}
      casesHeading="When the integration is right, the model earns its keep on real Tuesdays."
      cases={[
        {
          industry: "Commercial Lending",
          title:
            "Underwriting decision support lifts approval-quality consistency by 32 percent",
          description:
            "A growing commercial lender embedded a calibrated classifier into the underwriter workflow as a recommendation plus explanation, not an automated decision. Decision consistency across underwriters improved 32 percent, time-per-deal dropped 18 percent, and the regulator-facing override review surface gave model risk a path to sign-off that pure-automation approaches did not.",
          link: "/cases/commercial-lending-decision-support",
        },
        {
          industry: "Industrial IoT",
          title:
            "Anomaly detection on plant telemetry halves unplanned-downtime hours",
          description:
            "A heavy-industry manufacturer added anomaly detection on equipment telemetry feeding a maintenance-planner workflow with confidence bands and override notes. Unplanned downtime hours fell 51 percent across the pilot lines in twelve months, and the override audit trail let the engineering team retrain the model on the failure modes the operators flagged.",
          link: "/cases/industrial-iot-anomaly-detection",
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
          title: "Workflow Optimization",
          link: "/solutions/process-optimization/workflow-optimization",
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
          "Bring our decision-AI team into your next operating-model conversation.",
        body: "We work with leaders who want decision-AI that survives the operator's Tuesday and the regulator's review. The conversation starts with the decisions you would augment first.",
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
