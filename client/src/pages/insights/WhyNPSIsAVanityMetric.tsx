import InsightArticleV2 from "@/components/InsightArticleV2";

export default function WhyNPSIsAVanityMetric() {
  const sections = [
    { id: "lagging-indicator", label: "The lagging indicator problem" },
    { id: "behavioral-health-scoring", label: "Behavioral health scoring" },
    { id: "predictive-model", label: "Building a predictive model" },
    { id: "conclusion", label: "Conclusion" },
  ];

  const relatedInsights = [
    { title: "The Churn Prediction Playbook", category: "Technical Guide", link: "/insights/churn-prediction-playbook", image: "/images/case-data-retail.jpg" },
    { title: "The Economics of Loyalty", category: "Unit Economics", link: "/insights/economics-of-loyalty", image: "/images/business-strategy-abstract.jpg" },
    { title: "Customer Intelligence at Scale", category: "Data Science", link: "/insights/customer-intelligence", image: "/images/data-abstract.jpg" },
  ];

  return (
    <InsightArticleV2
      category="Data Science"
      categoryHref="/insights"
      title="Why NPS is a Vanity Metric (And What to Track Instead)"
      subtitle="Net Promoter Score tells you how customers felt yesterday. It doesn't tell you who will leave tomorrow. Here is the engineering approach to health scoring."
      heroImage="/images/capabilities/cap-retail-data.jpg"
      publishDate="February 28, 2025"
      readTime="6 min"
      sections={sections}
      keyTakeaways={[
        "Across 50-plus subscription companies, high NPS showed little correlation with retention—30% of 'Promoters' who scored 9 or 10 churned within 90 days.",
        "NPS is a lagging indicator that captures sentiment after the fact, and it misses the 65% of churning customers who never respond to a survey.",
        "A behavioral health score built on usage frequency, feature breadth, support velocity, and payment hygiene measures what customers do, not what they say.",
        "A weighted, real-time model can flag at-risk accounts and alert Customer Success automatically—no surveys required.",
      ]}
      relatedInsights={relatedInsights}
    >
      <p>
        Boardrooms love Net Promoter Score (NPS). It's simple, it's standardized, and it usually goes up
        and to the right if you survey the right people. But as a predictive metric for churn, it is
        statistically insignificant.
      </p>

      <p>
        We analyzed data from over 50 subscription-based companies and found a startling lack of
        correlation between high NPS scores and retention rates. In fact, in 30% of cases, customers who
        gave a "Promoter" score (9 or 10) churned within 90 days. Why? Because sentiment is fleeting, but
        behavior is truth.
      </p>

      <h2 id="lagging-indicator">The Lagging Indicator Problem</h2>

      <p>
        NPS is a lagging indicator. It measures sentiment <em>after</em> an interaction has occurred. By
        the time a customer tells you they are unhappy (a Detractor score), they have likely already made
        the decision to leave. Relying on NPS to prevent churn is like driving a car by looking
        exclusively in the rearview mirror.
      </p>

      <h3>The "Silent Churn" Phenomenon</h3>
      <p>
        Our research shows that 65% of customers who churn never respond to a survey. They simply stop
        logging in, stop using key features, and then cancel. NPS completely misses this "silent
        majority."
      </p>

      <h2 id="behavioral-health-scoring">Behavioral Health Scoring: The Engineering Alternative</h2>

      <p>
        Instead of asking customers how they feel, we should measure what they <em>do</em>. A robust
        Customer Health Score is built on behavioral telemetry, not survey responses. It is a composite
        metric that tracks:
      </p>

      <ul>
        <li><strong>Usage Frequency:</strong> Are logins trending up or down?</li>
        <li><strong>Feature Breadth:</strong> Are they using sticky features or just the basics?</li>
        <li><strong>Support Velocity:</strong> Are tickets being resolved quickly, or are they languishing?</li>
        <li><strong>Payment Hygiene:</strong> Are invoices paid on time, or are there frequent failures?</li>
      </ul>

      <h2 id="predictive-model">Building a Predictive Model</h2>

      <p>
        To move from vanity metrics to predictive power, we engineer a health score using a weighted
        regression model. We identify the behavioral signals that historically precede churn and assign
        them negative weights. Conversely, behaviors associated with renewal (like adding new users or
        integrating with third-party tools) get positive weights.
      </p>

      <p>
        This model runs in real-time. If a key account's health score drops below a threshold, it triggers
        an automated alert in the CRM for the Customer Success Manager. No surveys required.
      </p>

      <h2 id="conclusion">Conclusion: Kill the Survey, Watch the Data</h2>

      <p>
        NPS has its place as a measure of brand sentiment, but it should not be the primary KPI for
        retention teams. To reduce churn, you need to stop asking for opinions and start analyzing
        behavior. The data is already there; you just need to listen to it.
      </p>
    </InsightArticleV2>
  );
}
