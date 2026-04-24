import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export function CustomerProfitability() {
  return (
    <CaseStudyTemplate
      client="Regional Bank"
      industry="Banking · Customer Analytics"
      title="AI Customer Lifetime Value Modeling"
      subtitle="How a regional bank used deep learning to segment customers and tailor product offerings, increasing profitability by 30% while improving retention."
      heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
      challenge={`A regional bank was facing declining margins in its retail banking division. While they had a large customer base, many were on legacy fee-free checking accounts that were costly to maintain. The bank wanted to migrate customers to value-added accounts but feared a mass exodus if they simply imposed new charges.

They lacked deep insight into which customers were truly profitable and what features they valued. Without this understanding, their product design was based on assumptions, and their sales teams struggled to articulate the value of premium accounts to the right people.

The bank needed a data-driven approach to identify high-potential customers and design personalized offers that would maximize lifetime value without sacrificing retention.`}
      solution={`NexDyne employed a deep learning approach to model Customer Lifetime Value (CLV). We analyzed millions of transaction records to identify behavioral patterns and segment customers based on their potential profitability and feature preferences.

We built a CLV model to predict future profitability of each customer, identified micro-segments with high willingness to pay for premium features, and simulated the impact of pricing changes on retention rates. We then developed targeted migration offers for each customer segment, implemented a "best fit" recommendation engine for branch staff, and automated digital onboarding flows for premium accounts.`}
      impact={`The personalized migration approach transformed the bank's retail banking economics. A 30% increase in profitability was achieved while keeping customer attrition below 2%—far better than expected for a pricing change initiative.

Primary bank status among migrated customers increased 15%, creating deeper relationships and higher lifetime value. Surprisingly, satisfaction scores increased as customers felt they were getting more value from the new feature-rich accounts. Bankers became more confident in selling, moving from an apologetic stance on fees to a value-driven conversation.`}
      metrics={[
        { value: "30%", label: "Increase in profitability" },
        { value: "<2%", label: "Customer attrition rate" },
        { value: "15%", label: "Increase in primary bank status" }
      ]}
      tags={["Customer Lifetime Value", "Banking", "Personalization", "Data Analytics"]}
      relatedCapability={{
        title: "Growth, Marketing & Sales",
        link: "/capabilities/growth-marketing-sales"
      }}
    />
  );
}

export default CustomerProfitability;
