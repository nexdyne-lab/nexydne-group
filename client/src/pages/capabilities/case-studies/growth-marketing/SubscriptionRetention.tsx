import CaseStudyArticle from "@/components/CaseStudyArticle";

export default function SubscriptionRetention() {
  return (
    <CaseStudyArticle
      industry="Growth, Marketing & Sales"
      industryHref="/capabilities/growth-marketing-sales"
      title="Customer Retention Program Reduces Churn by 40%"
      subtitle="How a subscription business transformed their retention approach to dramatically reduce churn and increase customer lifetime value"
      client="A 120-employee subscription business with $38M in annual recurring revenue, providing digital content and tools to creative professionals. The company had grown rapidly through acquisition but retention was becoming a critical issue."
      challenge="Monthly churn had crept up to 4.5%, threatening the company's growth trajectory. Customer success was reactive, only engaging when customers complained or cancelled. There was no systematic approach to identifying at-risk customers. Onboarding was inconsistent, and many customers never fully adopted the product."
      metrics={[
        { value: "40%", label: "Churn Reduction" },
        { value: "$2.4M", label: "Retained Revenue" },
        { value: "2.7%", label: "New Churn Rate" },
        { value: "18 mo", label: "Avg Customer Life" },
      ]}
      relatedCaseStudies={[
        {
          title: "Digital Marketing Transformation Doubles Lead Generation",
          href: "/capabilities/growth-marketing-sales/case-studies/b2b-digital-marketing",
          industry: "Professional Services"
        },
        {
          title: "Sales Process Optimization Increases Win Rate",
          href: "/capabilities/growth-marketing-sales/case-studies/software-sales-optimization",
          industry: "Technology"
        },
        {
          title: "E-commerce Launch Drives $5M New Revenue",
          href: "/capabilities/growth-marketing-sales/case-studies/manufacturer-ecommerce",
          industry: "Manufacturing"
        }
      ]}
    >
      <h2>Understanding Churn Drivers</h2>
      <p>
        Our analysis revealed that churn was predictable—and preventable. Exit surveys and behavioral data showed that most churned customers had disengaged weeks before cancelling. Low product usage was the strongest predictor of churn. Customers who didn't complete onboarding churned at 3x the rate of those who did. Price was rarely the primary reason for cancellation.
      </p>

      <h2>Building a Health Score Model</h2>
      <p>
        We developed a customer health score that identified at-risk accounts before they churned. The model incorporated product usage patterns, support ticket sentiment, and engagement metrics. We established thresholds that triggered proactive outreach. We created dashboards that gave customer success visibility into portfolio health. We also built automated alerts for sudden changes in customer behavior.
      </p>

      <h2>Transforming Onboarding</h2>
      <p>
        We redesigned onboarding to drive early adoption and engagement. We created a structured onboarding journey with clear milestones and success metrics. We implemented in-app guidance that helped users discover key features. We established check-in cadences during the critical first 30 days. We also developed onboarding content tailored to different user personas.
      </p>

      <h2>Implementing Proactive Success</h2>
      <p>
        Customer success shifted from reactive support to proactive engagement. We created playbooks for different customer health scenarios. We implemented regular business reviews for high-value accounts. We developed intervention strategies for at-risk customers. We also established expansion motions that grew accounts while improving retention.
      </p>

      <h2>Closing the Feedback Loop</h2>
      <p>
        We built systems to learn from every customer interaction. We implemented NPS surveys at key journey moments. We analyzed cancellation reasons to identify product and service gaps. We created a voice-of-customer program that informed product development. We also established win-back campaigns for recently churned customers.
      </p>

      <h2>Key Lessons</h2>
      <ul>
        <li>Churn is predictable—behavioral signals appear weeks before cancellation</li>
        <li>Onboarding is the highest-leverage retention investment</li>
        <li>Proactive engagement prevents churn; reactive support just manages it</li>
        <li>Customer health scores enable prioritization at scale</li>
      </ul>
    </CaseStudyArticle>
  );
}
