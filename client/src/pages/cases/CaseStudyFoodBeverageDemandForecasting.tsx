import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function CaseStudyFoodBeverageDemandForecasting() {
  return (
    <CaseStudyTemplate
      client="Regional Food & Beverage Company"
      industry="Food & Beverage · Supply Chain"
      title="Transforming Demand Planning with Machine Learning"
      subtitle="A regional food and beverage company reduced planning time by 50% and improved forecast accuracy using a machine-learning demand sensing engine."
      heroImage="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=80"
      challenge={`The company's demand planning process relied heavily on spreadsheet-based forecasting and the institutional knowledge of experienced planners. Demand planners spent 60% of their time gathering and reconciling data from multiple sources, leaving little time for strategic analysis. Forecast accuracy varied significantly by product category and region, ranging from 65% to 85% depending on the planner's experience.

The manual process made it nearly impossible to run multiple demand scenarios or quickly respond to market changes. SKU proliferation and new product launches were outpacing the planning team's capacity to maintain accurate forecasts, creating mounting pressure across the organization.`}
      solution={`NexDyne partnered with the client's planning and IT teams to design and implement a machine learning-based demand forecasting solution. Our approach focused on augmenting—not replacing—the expertise of demand planners while dramatically improving accuracy and efficiency.

We began by consolidating data from 12 different sources including ERP systems, POS data, weather data, and promotional calendars. Our data science team developed an ensemble model combining gradient boosting with time series decomposition, achieving 94% accuracy on test data. We designed an intuitive interface that presented ML-generated forecasts alongside historical patterns, allowing planners to adjust based on market knowledge. A phased rollout with comprehensive training ensured 100% adoption across the planning team.`}
      impact={`Demand planners now spend their time on strategic analysis and exception management rather than data gathering—a 50% reduction in planning time. Accuracy improved 4-18% across all product categories, with the largest gains in seasonal and promotional items. Reduced stockouts and overstock situations translated directly to 0.4-0.8% EBIT improvement.

The team can now run multiple demand scenarios in hours instead of weeks—3x their previous scenario planning capacity. The transformation positioned the company to scale data infrastructure to support planned expansion without additional headcount.`}
      metrics={[
        { value: "50%", label: "Reduction in planning time" },
        { value: "4-18%", label: "Forecast accuracy improvement" },
        { value: "0.8%", label: "EBIT improvement" },
        { value: "3x", label: "Scenario planning capacity" }
      ]}
      quote={{
        text: "NexDyne didn't just give us a forecasting tool—they transformed how our planning team works. Our planners are now strategic partners to the business, not just number crunchers. The accuracy improvements have had a direct impact on our bottom line.",
        author: "VP of Supply Chain",
        role: "Regional Food & Beverage Company"
      }}
      tags={["Demand Forecasting", "Machine Learning", "Supply Chain", "Food & Beverage"]}
      relatedCapability={{
        title: "Artificial Intelligence",
        link: "/capabilities/artificial-intelligence"
      }}
    />
  );
}
