import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export function FPACaseStudy() {
  return (
    <CaseStudyTemplate
      client="B2B SaaS Company"
      industry="Technology · Strategy & Finance"
      title="How Scenario Planning Helped a SaaS Company Navigate Market Uncertainty"
      subtitle="A growth-stage B2B SaaS company transformed their financial planning from reactive budgeting to proactive scenario modeling, enabling confident decision-making during unprecedented market volatility."
      heroImage="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&q=80"
      challenge={`The company had built a successful product and achieved strong early traction, but their financial planning infrastructure hadn't evolved with their growth. Static annual budgets built in Excel were disconnected from real-time business drivers and became obsolete within weeks of approval.

A growth-stage B2B SaaS company providing marketing automation software with 85-110 employees and $12M ARR was scaling from product-market fit to market leadership post-Series B. Revenue forecasts lived in the CRM, expense budgets in Excel, and actuals in the accounting system—consolidating data for variance analysis took 5-7 days monthly, leaving little time for strategic analysis. The leadership team couldn't answer critical questions: What happens if churn increases by 2%? How does a 20% sales hiring acceleration impact cash runway? Board meetings focused on explaining historical variances from outdated budgets rather than discussing strategic options.`}
      solution={`NEXDYNE implemented a driver-based revenue model integrating CRM pipeline data with historical conversion metrics, decomposing revenue into underlying drivers—lead volume, conversion rates by stage, average contract value, and expansion/churn dynamics—enabling modeling under different assumptions and revealing which levers had the greatest impact on outcomes.

Automated pipelines connected the CRM, accounting system, and HR platform into a unified analytical layer, reducing close-to-forecast time from 7 days to under 2 days. A three-scenario planning framework (Base Case, Upside, Downside) modeled different market conditions and strategic choices, enabling the leadership team to stress-test decisions before committing resources. Sensitivity analysis tools showed which assumptions had the greatest impact on cash runway and profitability.

The annual budget was replaced with a rolling 18-month forecast updating quarterly, transforming budgeting from a once-a-year exercise into a continuous strategic dialogue. Board reporting was redesigned to focus on scenario comparison dashboards and forward-looking metrics rather than variance explanations.`}
      impact={`Driver-based revenue modeling reduced forecast error from ±18% to ±12%—a 35% accuracy improvement enabling more confident resource allocation. Real-time scenario modeling enabled the leadership team to evaluate strategic options in days rather than weeks, accelerating decision-making by 10 days during critical market shifts.

Scenario analysis directly avoided $2.4 million in unnecessary costs: analysis revealed that a planned sales hiring acceleration would have extended cash runway by only 2 months while increasing burn by $200K per month, leading the company to defer hiring and focus on sales productivity instead. Monthly forecast preparation dropped from 7 days to under 2 days. Board confidence in the financial planning process increased 40%. The scenario planning framework also provided the analytical foundation for a successful Series C raise of $25M.`}
      metrics={[
        { value: "35%", label: "Forecast accuracy improvement" },
        { value: "10 days", label: "Faster strategic response" },
        { value: "$2.4M", label: "Cost avoidance in year 1" }
      ]}
      tags={["Technology", "SaaS", "FP&A", "Strategy"]}
      relatedCapability={{
        title: "Strategy & Finance",
        link: "/capabilities/strategy-finance"
      }}
    />
  );
}

export default FPACaseStudy;
