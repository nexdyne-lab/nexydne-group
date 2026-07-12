import SolutionCat6Template from "@/components/SolutionCat6Template";

export default function PredictiveAnalyticsModeling() {
  return (
    <SolutionCat6Template
      eyebrow="SOLUTION · CUSTOMER INTELLIGENCE · PREDICTIVE ANALYTICS & MODELING"
      title="Predictive Analytics & Modeling"
      subtitle="Most customer analytics functions are still reporting on what happened. The leaders are predicting what will. We build the production-grade ML models — churn, lifetime value, propensity, next-best-action — and the MLOps surface that keeps them earning past the launch deck."
      heroImage="/images/ai-neural-network.jpg"
      heroFocal="55% 50%"
      seoTitle="Predictive Analytics & Modeling"
      seoDescription="Build predictive ML models for churn, lifetime value, propensity, and next-best-action — with the MLOps and governance that keep them earning."
      canonical="/solutions/customer-intelligence/predictive-analytics-modeling"
      perspective={{
        heading:
          "Stop reporting the past. Start operating on the next decision.",
        image: "/images/insights-predictive-retention.jpg",
        paragraphs: [
          "Most enterprise analytics functions are still in the reporting business. Dashboards describe what happened, the team meets to discuss it, and the operational decision still gets made on instinct. The leaders we work with have moved one step further: every customer-facing decision — who to retain, who to acquire, what to recommend, what offer to extend — is informed by a model that scores the customer in advance.",
          "We build the models, but the harder problem is the surrounding system. A predictive program earns its keep when the score reaches the operator who acts on it, when the feature pipeline survives a schema change, when drift is caught before the quarterly review. We design the use-case portfolio, the data spine, the model itself, the integration into the systems of action, and the MLOps discipline that keeps the program compounding instead of decaying.",
        ],
      }}
      deliverHeading="A five-phase approach from use-case to production model."
      deliverIntro="Each phase is timeboxed and produces a tangible artifact. Most engagements run twelve to twenty weeks from prioritization to a production-grade model with monitoring in place."
      phases={[
        {
          name: "Model use-case prioritization",
          description:
            "Most enterprises start with a list of fifty model ideas and finish with three abandoned notebooks. We start the other way: triage candidate use-cases — churn, lifetime value, propensity, next-best-action, fraud, demand — by addressable value, decision cadence, and data readiness, and pick the two or three that earn a production line. The output is a defensible roadmap, not a science project list.",
        },
        {
          name: "Data and feature engineering",
          description:
            "Every model lives or dies on the feature pipeline. We map the data spine across the CDP, warehouse, event streams, and operational systems, then engineer the customer-level features — recency, frequency, monetary, behavioral signals, content affinity, network effects — that actually move the model. The pipeline is built once, owned by the data team, and reused across models.",
        },
        {
          name: "Model training and validation",
          description:
            "We train candidate models — gradient boosting, deep learning, survival models, uplift models depending on the use-case — and validate them where the business will actually use them: lift over the current rule, calibration on the segments that matter, fairness on protected classes, stability across time. A model that wins on AUC but breaks on the top decile does not ship.",
        },
        {
          name: "Deployment and integration",
          description:
            "Predictions are worthless until they reach the system that decides. We design the integration architecture — batch scoring into the CDP, real-time inference behind an API, feature store, model registry — and wire predictions into the marketing automation, CRM, and contact-center platforms that will act on them. The handoff is engineered, not improvised.",
        },
        {
          name: "MLOps and continuous learning",
          description:
            "Every model decays. We stand up the MLOps surface that catches drift before it costs revenue: monitoring on input distributions, prediction distributions, and downstream business KPIs; automated retraining cadence; champion-challenger framework; and a model governance committee with the authority to retire a model that has stopped earning its keep.",
        },
      ]}
      getHeading="Six concrete artifacts every engagement leaves behind."
      deliverables={[
        {
          name: "Model use-case roadmap",
          description:
            "Triaged portfolio of predictive use-cases scored on value, decision cadence, and data readiness — with the top two or three sequenced for production delivery.",
        },
        {
          name: "Feature engineering pipeline",
          description:
            "Production-grade feature pipeline owned by the data team — versioned, tested, reusable across models, and documented to the column.",
        },
        {
          name: "Trained models with accuracy benchmarks",
          description:
            "Validated production models with documented lift, calibration, fairness, and stability metrics — benchmarked against the rule or heuristic they replace.",
        },
        {
          name: "Integration architecture",
          description:
            "Reference architecture covering batch scoring, real-time inference, feature store, model registry, and the integration into CRM, CDP, and marketing automation.",
        },
        {
          name: "Model governance framework",
          description:
            "End-to-end controls covering model risk, fairness, explainability, change management, and the committee charter that owns retirement decisions.",
        },
        {
          name: "MLOps and monitoring infrastructure",
          description:
            "Live monitoring on input drift, prediction drift, and business KPIs — with the automated retraining cadence and champion-challenger framework that keeps models earning.",
        },
      ]}
      outcome={{
        heading:
          "Programs that move from rules to models on the top three customer decisions typically lift contribution margin by 8 to 14 percent within twelve months — and MLOps is what keeps the gain.",
        body: "The economics work because the predictions reach the systems of action. We do not hand off a notebook and walk away — we engineer the surface that lets the operator act on the score, and the monitoring that catches the drift before the quarterly review does.",
      }}
      casesHeading="When the model reaches the operator, the program compounds."
      cases={[
        {
          industry: "Subscription Media",
          title:
            "Churn model lifts retention save-rate by 31 percent on the at-risk decile",
          description:
            "A streaming-media operator was running a tenure-based churn rule that flagged the wrong customers. We replaced it with an uplift model trained on engagement, billing, and content-affinity features, scored weekly into the marketing automation platform. The retention team's save-rate on the top-decile at-risk segment lifted from 14 percent to 18.4 percent, while contact volume on low-risk customers fell by half.",
          link: "/cases/media-churn-uplift-model",
        },
        {
          industry: "Retail Banking",
          title:
            "Lifetime-value model reroutes acquisition spend toward the top three deciles",
          description:
            "A regional bank's marketing team was optimizing acquisition cost per account, not value per account. We built a customer-lifetime-value model on first-party transaction signals and operational tenure data, then wired the score into bid-management and channel-allocation decisions. Twelve months in, the share of acquisition spend reaching the top three value deciles rose from 38 percent to 71 percent on flat budget.",
          link: "/cases/banking-clv-acquisition-routing",
        },
      ]}
      siblingsHeading="Sibling offerings inside this cluster."
      siblings={[
        {
          title: "Behavioral Segmentation",
          link: "/solutions/customer-intelligence/behavioral-segmentation",
        },
        {
          title: "AI-Powered Recommendations",
          link: "/solutions/customer-intelligence/ai-powered-recommendations",
        },
        {
          title: "Customer Data Platform",
          link: "/solutions/customer-intelligence/customer-data-platform",
        },
        {
          title: "Personalization Strategy",
          link: "/solutions/customer-intelligence/personalization-strategy",
        },
        {
          title: "Customer Insights",
          link: "/solutions/customer-intelligence/customer-insights",
        },
      ]}
      cta={{
        heading:
          "Bring our predictive analytics team into your next customer-decision conversation.",
        body: "We work with leaders who want their customer decisions made on evidence, not anecdote. Predictive modeling is how that conversation begins.",
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
