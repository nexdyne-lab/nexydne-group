import CaseStudyArticle from "@/components/CaseStudyArticle";

export default function SaaSCustomerServiceAI() {
  return (
    <CaseStudyArticle
      industry="Artificial Intelligence"
      industryHref="/capabilities/artificial-intelligence"
      title="Customer Service AI Scales Support for Growing SaaS Company"
      subtitle="How a B2B SaaS company implemented AI to handle 60% of support tickets automatically while improving customer satisfaction"
      client="A B2B SaaS company with 120 employees serving 2,000+ business customers. The company provides project management software to mid-size businesses and was experiencing rapid growth that strained their support team."
      challenge="Support ticket volume had tripled in 18 months while the team only grew by 50%. Average response time had increased from 2 hours to 8 hours. Customer satisfaction scores were declining. The company needed to scale support without proportionally scaling headcount."
      metrics={[
        { value: "60%", label: "Ticket Deflection" },
        { value: "4.5x", label: "Support Capacity" },
        { value: "92%", label: "CSAT Score" },
        { value: "15 min", label: "Avg Response Time" },
      ]}
      relatedCaseStudies={[
        {
          title: "AI-Powered Document Processing Transforms Regional Insurance Firm",
          href: "/capabilities/artificial-intelligence/case-studies/insurance-document-ai",
          industry: "Insurance"
        },
        {
          title: "Predictive Maintenance Reduces Downtime for Manufacturing SMB",
          href: "/capabilities/artificial-intelligence/case-studies/manufacturing-predictive-maintenance",
          industry: "Manufacturing"
        },
        {
          title: "Demand Forecasting AI Optimizes Inventory for Regional Distributor",
          href: "/capabilities/artificial-intelligence/case-studies/distributor-demand-forecasting",
          industry: "Distribution"
        }
      ]}
    >
      <h2>Analyzing Support Patterns</h2>
      <p>
        Our analysis of 50,000 historical tickets revealed that 70% of inquiries fell into predictable categories. Password resets and account access issues represented 25% of volume. Feature usage questions comprised another 30%. Billing inquiries made up 15%. The remaining 30% required human judgment for complex technical issues or escalations.
      </p>

      <h2>Designing the AI Solution</h2>
      <p>
        We designed a multi-layered AI support system. The first layer was an intelligent chatbot that could handle common questions using natural language understanding. The second layer was an AI-powered knowledge base that surfaced relevant articles based on query intent. The third layer was intelligent routing that directed complex issues to the right specialist. We also implemented sentiment analysis to identify frustrated customers for priority handling.
      </p>

      <h2>Training the AI Models</h2>
      <p>
        We trained the AI using the company's historical support data. We created intent classification models using thousands of labeled ticket examples. We built response generation capabilities that matched the company's voice and tone. We developed escalation triggers that recognized when human intervention was needed. We also implemented continuous learning to improve accuracy over time.
      </p>

      <h2>Integrating with Existing Systems</h2>
      <p>
        The AI solution integrated seamlessly with existing support infrastructure. We connected to the CRM to access customer context and history. We integrated with the product database to provide accurate feature information. We linked to the billing system to handle account-related queries. We also built dashboards that gave support managers visibility into AI performance.
      </p>

      <h2>Measuring and Optimizing</h2>
      <p>
        We established comprehensive metrics to track AI effectiveness. We measured deflection rate, resolution accuracy, and customer satisfaction. We analyzed escalation patterns to identify training opportunities. We tracked cost per ticket across AI and human-handled inquiries. We also monitored customer feedback to ensure quality remained high.
      </p>

      <h2>Key Lessons</h2>
      <ul>
        <li>Historical ticket analysis reveals automation opportunities</li>
        <li>Multi-layered AI handles varying complexity levels</li>
        <li>Integration with existing systems provides essential context</li>
        <li>Continuous learning improves AI performance over time</li>
      </ul>
    </CaseStudyArticle>
  );
}
