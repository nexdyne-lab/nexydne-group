
import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function PredictiveAnalytics() {
  return (
    <CapabilityHubTemplate
      hubName="Predictive Analytics"
      slug="predictive-analytics"
      heroSubtitle="Transform historical data into forward-looking insights. Anticipate demand, identify risks, and make proactive decisions — acting on what is going to happen instead of explaining what already did."
      heroImage="/case-data-dashboard.391db27a.jpg"
      heroFocal="60% 45%"
      experienceStats={[
        { number: "180+", label: "Predictive models in production" },
        { number: "30%", label: "Average forecast accuracy improvement" },
        { number: "85%", label: "prediction accuracy sustained in production" },
        { number: "8-week", label: "Median pilot-to-production cycle" },
      ]}
      ambitions={[
        {
          title: "Forecast demand with confidence",
          description:
            "Replace gut-feel forecasts with models that blend internal history and external signals — so planning, inventory, and capacity decisions hold up against reality.",
        },
        {
          title: "Spot churn before it happens",
          description:
            "See attrition risk early enough to do something about it. Score every customer, surface the at-risk segments, and equip retention teams with the next best action.",
        },
        {
          title: "Score risk consistently and explainably",
          description:
            "Apply uniform, defensible risk scoring across credit, fraud, operational, and vendor risk — with the transparency regulators and underwriters expect.",
        },
        {
          title: "Anticipate equipment failures",
          description:
            "Move from calendar-based maintenance to condition-based intervention — predicting failures early enough to avoid downtime, scrap, and emergency repairs.",
        },
        {
          title: "Optimize price and promotion in real time",
          description:
            "Use elasticity and demand models to set prices that protect margin and capture revenue, instead of leaving money on the table with static rate cards.",
        },
        {
          title: "Prioritize sales and marketing investment",
          description:
            "Direct outreach, offers, and incentives to the customers most likely to act — raising conversion without expanding the funnel.",
        },
      ]}
      ambitionsCTAText="Talk to us about your Predictive Analytics ambition →"
      howWeCanHelp={[
        {
          title: "Demand Forecasting",
          description:
            "Predict customer demand with high accuracy using time series analysis, machine learning, and external data signals like weather and economic indicators.",
          href: "/capabilities/artificial-intelligence/predictive-analytics/demand-forecasting",
        },
        {
          title: "Churn Prediction",
          description:
            "Identify at-risk customers before they leave. Our models analyze behavioral patterns to flag churn risk and recommend retention interventions.",
          href: "/capabilities/artificial-intelligence/predictive-analytics/churn-prediction",
        },
        {
          title: "Risk Scoring",
          description:
            "Quantify credit risk, fraud probability, and operational risks. We build models that balance accuracy with regulatory requirements for explainability.",
          href: "/capabilities/artificial-intelligence/predictive-analytics/risk-scoring",
        },
        {
          title: "Predictive Maintenance",
          description:
            "Anticipate equipment failures before they happen. Sensor data analysis and anomaly detection reduce downtime and maintenance costs.",
          href: "/capabilities/artificial-intelligence/predictive-analytics/predictive-maintenance",
        },
        {
          title: "Price Optimization",
          description:
            "Dynamic pricing models that predict demand elasticity and optimize prices in real-time to maximize revenue and margins.",
          href: "/capabilities/artificial-intelligence/predictive-analytics/price-optimization",
        },
        {
          title: "Propensity Modeling",
          description:
            "Predict which customers are most likely to buy, respond to campaigns, or take specific actions. Prioritize outreach for maximum impact.",
          href: "/capabilities/artificial-intelligence/predictive-analytics/propensity-modeling",
        },
      ]}
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Start with the decision",
          body: "We work backwards from the business decision you need to make. What action will you take if the model predicts X? That question keeps every model we build tied to real value, not vanity accuracy.",
        },
        {
          step: "02",
          title: "Build for production",
          body: "We design models for the real world — handling missing data, concept drift, and edge cases. Our MLOps practices ensure models stay accurate as your business and your data evolve.",
        },
        {
          step: "03",
          title: "Embed in workflows",
          body: "Predictions are only valuable when acted upon. We integrate models into the systems and processes your teams already use, making insight actionable at the point of decision.",
        },
      ]}
      featuredCases={[
        { slug: "healthcare-transformation", title: "Unifying scattered patient data to improve outcomes", industry: "Healthcare", metric: "35%", image: "/case-medical-collaboration.9602cc8c.jpg" },
        { slug: "insurance-claims-automation", title: "Settling straightforward claims in hours, not weeks", industry: "Insurance", metric: "60%", image: "/case-insurance-claims.399e5d4b.jpg" },
        { slug: "bank-cross-sell", title: "Turning single accounts into real relationships", industry: "Financial Services", metric: "$24M", image: "/images/industries/fin-trader.jpg" },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/data-transformation", name: "Data Transformation" },
        { href: "/capabilities/artificial-intelligence/custom-model-development", name: "Custom Model Development" },
        { href: "/capabilities/artificial-intelligence/risk-resilience", name: "Risk & Resilience" },
      ]}
      ctaLeadName="Talk to our Predictive Analytics lead"
    />
  );
}

