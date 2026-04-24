import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function DistributionPricing() {
  return (
    <CaseStudyTemplate
      client="Industrial Distribution Company"
      industry="Distribution · Growth Marketing"
      title="Pricing Optimization Improves Margins by 8 Points"
      subtitle="How a distribution company transformed their pricing approach to capture value while maintaining customer relationships."
      heroImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80"
      challenge={`Gross margins had eroded from 28% to 22% over five years as sales reps discounted to win deals. Pricing was ad hoc, with no systematic approach to setting or managing prices. Customer profitability varied wildly, with some accounts actually losing money. Competitors were using data-driven pricing while the company relied on gut feel.

A 160-employee distribution company with $125M in annual revenue serves industrial customers with MRO supplies and equipment. The company had grown through acquisition but pricing was inconsistent across the combined customer base. Analysis revealed significant value leakage across multiple dimensions: list prices hadn't been updated in years, discounting was inconsistent with similar customers receiving vastly different prices, freight and handling charges were regularly waived without justification, and rebates and allowances had accumulated without systematic review.`}
      solution={`NEXDYNE established the infrastructure for systematic pricing management, implementing pricing software for visibility and control, creating a pricing governance structure with clear roles and approval authorities, building pricing analytics to track performance and identify opportunities, and forming a dedicated pricing team.

A data-driven approach to list prices analyzed competitive positioning and price elasticity by product category, implementing market-based pricing reflecting value and competition with a regular review cadence. Discount management was transformed through guidelines based on customer value and competitive situation, approval workflows requiring justification for exceptions, deal desk support for complex situations, and reporting tracking discount trends and outliers.

The sales team was enabled for value-based pricing conversations through training on pricing strategy and negotiation, tools showing customer profitability and pricing history, incentives rewarding margin rather than just revenue, and coaching programs reinforcing pricing discipline.`}
      impact={`Gross margins improved 8 percentage points over 18 months, generating $10 million in annual profit impact on a $125 million revenue base. Importantly, customer retention improved 3% during the transition—demonstrating that the pricing changes were defensible and that value-based conversations strengthened rather than damaged customer relationships.

Pricing consistency improved 30% as the new governance structure eliminated the arbitrary variation that had made customer profitability so unpredictable. Sales reps who initially resisted the changes became advocates as they found that pricing discipline gave them more confidence and credibility in customer negotiations, not less flexibility.`}
      metrics={[
        { value: "8pts", label: "Margin improvement" },
        { value: "3%", label: "Customer retention gain" },
        { value: "$10M", label: "Profit impact" },
        { value: "30%", label: "Pricing consistency improvement" }
      ]}
      tags={["Distribution", "Pricing", "Margin Improvement", "Growth"]}
      relatedCapability={{
        title: "Growth Marketing & Sales",
        link: "/capabilities/growth-marketing-sales"
      }}
    />
  );
}
