import InsightArticleV2 from "@/components/InsightArticleV2";

export default function ChurnPredictionPlaybook() {
  const sections = [
    { id: "data-pipeline", label: "The data pipeline" },
    { id: "feature-engineering", label: "Feature engineering" },
    { id: "model-selection", label: "Model selection" },
    { id: "last-mile", label: "The last mile" },
    { id: "automation", label: "Automating action" },
    { id: "conclusion", label: "Conclusion" },
  ];

  const relatedInsights = [
    { title: "Why NPS Is a Vanity Metric", category: "Data Science", link: "/insights/why-nps-is-a-vanity-metric", image: "/images/insights/why-nps-is-a-vanity-metric-hero.jpg" },
    { title: "The Economics of Loyalty", category: "Unit Economics", link: "/insights/economics-of-loyalty", image: "/images/insights/economics-of-loyalty-hero.jpg" },
    { title: "Customer Intelligence", category: "Data Science", link: "/insights/customer-intelligence", image: "/images/insights/customer-intelligence-hero.jpg" },
  ];

  return (
    <InsightArticleV2
      category="Technical Guide"
      title="The Churn Prediction Playbook: From Random Forest to Production"
      subtitle="A technical walkthrough of building, training, and deploying a churn prediction model that actually integrates with your CRM."
      heroImage="/images/insights/churn-prediction-playbook-hero.jpg"
      publishDate="March 5, 2025"
      readTime="12 min"
      sections={sections}
      keyTakeaways={[
        "Most churn models fail not because the math is wrong, but because the engineering is disconnected from the business process—a model in a notebook is useless.",
        "A robust pipeline aggregates product analytics, CRM and billing, and interaction data, then engineers dynamic features that capture change rather than static attributes.",
        "For tabular churn data, ensemble methods like Random Forest or XGBoost often beat neural networks and, crucially, provide the feature importance that makes predictions explainable.",
        "The 'last mile' decides success: push probability scores and risk factors back into the CRM with Reverse ETL, then automate interventions off the score.",
      ]}
      relatedInsights={relatedInsights}
    >
      <p>
        Most churn prediction models fail not because the math is wrong, but because the engineering is disconnected
        from the business process. A model that lives in a Jupyter notebook is useless. A model that pushes probability
        scores into Salesforce is a revenue engine.
      </p>
      <p>
        In this guide, we'll walk through the end-to-end architecture of a production-grade churn prediction system.
        We'll cover feature engineering, model selection, and the critical "last mile" of integration.
      </p>

      <h2 id="data-pipeline">1. The Data Pipeline</h2>
      <p>
        Garbage in, garbage out. The foundation of any churn model is a robust ETL pipeline that aggregates data from
        three primary sources:
      </p>
      <ul>
        <li>
          <strong>Product Analytics:</strong> Login frequency, feature usage, session duration (Segment, Mixpanel).
        </li>
        <li>
          <strong>CRM &amp; Billing:</strong> Contract value, tenure, payment history, support tickets (Salesforce,
          Stripe).
        </li>
        <li>
          <strong>Interaction Data:</strong> Email sentiment, call transcripts, meeting frequency (Gong, Outreach).
        </li>
      </ul>

      <h2 id="feature-engineering">2. Feature Engineering</h2>
      <p>
        Raw data is rarely predictive. We need to transform it into features that capture <em>change</em>. Static
        features (like "Industry") are less valuable than dynamic features (like "Change in Weekly Active Users").
      </p>
      <p>Key features we engineer for B2B SaaS:</p>
      <ul>
        <li>
          <strong>Usage Velocity:</strong> (Current Week Logins − Last Week Logins) / Last Week Logins
        </li>
        <li>
          <strong>Ticket Sentiment Score:</strong> NLP analysis of support ticket text
        </li>
        <li>
          <strong>Champion Activity:</strong> Activity level of the primary account admin
        </li>
        <li>
          <strong>Invoice Latency:</strong> Average days to pay invoice (increasing latency is a major red flag)
        </li>
      </ul>

      <h2 id="model-selection">3. Model Selection: Why Random Forest?</h2>
      <p>
        While deep learning gets all the hype, for tabular churn data, ensemble methods like Random Forest or XGBoost
        often outperform neural networks. They handle non-linear relationships well, are robust to outliers, and most
        importantly, provide <strong>feature importance</strong>.
      </p>
      <p>
        Explainability is critical. When a CSM asks "Why is this account at risk?", you need to be able to say
        "Because their usage dropped 40% and they have an open critical ticket," not "Because the neural net said so."
      </p>

      <h2 id="last-mile">4. The "Last Mile": Reverse ETL</h2>
      <p>
        This is where most projects die. A CSV of churn probabilities sent to the VP of Success is not operational. We
        use Reverse ETL tools (like Hightouch or Census) to push the model's output directly into the fields where
        CSMs live.
      </p>
      <p>We create two fields in Salesforce:</p>
      <ul>
        <li>
          <strong>Churn Probability Score:</strong> 0-100%
        </li>
        <li>
          <strong>Risk Factors:</strong> Top 3 features contributing to the score (e.g., "Low Usage", "Late Payment")
        </li>
      </ul>

      <h2 id="automation">5. Automating the Intervention</h2>
      <p>The final step is automation. We set up triggers in the CRM:</p>
      <ul>
        <li>
          <strong>Score &gt; 70%:</strong> Alert CSM Manager, create "At Risk" opportunity.
        </li>
        <li>
          <strong>Score 50-70%:</strong> Trigger automated email sequence from CSM.
        </li>
        <li>
          <strong>Score &lt; 20%:</strong> Trigger upsell campaign.
        </li>
      </ul>

      <h2 id="conclusion">Conclusion</h2>
      <p>
        Building a churn prediction model is an engineering challenge, but deploying it is a product challenge. Success
        comes from treating the internal sales/success team as your users and building a tool that makes their lives
        easier, not just one that generates math.
      </p>
    </InsightArticleV2>
  );
}
