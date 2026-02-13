import CaseStudyArticle from "@/components/CaseStudyArticle";

export default function DistributorDemandForecasting() {
  return (
    <CaseStudyArticle
      industry="Artificial Intelligence"
      industryHref="/capabilities/artificial-intelligence"
      title="Demand Forecasting AI Optimizes Inventory for Regional Distributor"
      subtitle="How a wholesale distributor implemented AI-powered demand forecasting to reduce inventory costs while improving service levels"
      client="A wholesale distribution company with 180 employees and $75M annual revenue. The company distributes industrial supplies to 3,000+ customers across the Midwest from 5 distribution centers."
      challenge="Inventory carrying costs were consuming 18% of gross margin. Stockouts were occurring on 8% of orders, causing customer dissatisfaction. Manual forecasting couldn't keep up with 15,000+ SKUs across multiple locations. Seasonal patterns and customer-specific demand were difficult to predict."
      metrics={[
        { value: "35%", label: "Inventory Reduction" },
        { value: "92%", label: "Forecast Accuracy" },
        { value: "2.1%", label: "Stockout Rate" },
        { value: "$2.8M", label: "Working Capital Freed" },
      ]}
      relatedCaseStudies={[
        {
          title: "AI-Powered Document Processing Transforms Regional Insurance Firm",
          href: "/capabilities/artificial-intelligence/case-studies/insurance-document-ai",
          industry: "Insurance"
        },
        {
          title: "Customer Service AI Scales Support for Growing SaaS Company",
          href: "/capabilities/artificial-intelligence/case-studies/saas-customer-service-ai",
          industry: "Technology"
        },
        {
          title: "Quality Inspection AI Improves Yield for Food Processor",
          href: "/capabilities/artificial-intelligence/case-studies/food-quality-ai",
          industry: "Food & Beverage"
        }
      ]}
    >
      <h2>Understanding Demand Patterns</h2>
      <p>
        Our analysis revealed complex demand patterns that manual forecasting couldn't capture. Customer ordering behavior varied by industry segment and company size. Seasonal patterns differed by product category and geography. Economic indicators correlated with demand for certain product types. Lead times from suppliers varied significantly, requiring different safety stock strategies.
      </p>

      <h2>Building the Forecasting Model</h2>
      <p>
        We developed a machine learning forecasting system tailored to distribution. The model incorporated historical sales data, customer attributes, and external factors. We implemented hierarchical forecasting that worked at SKU, category, and location levels. We built in seasonality detection that automatically identified patterns. We also created anomaly detection to flag unusual demand signals.
      </p>

      <h2>Integrating External Data</h2>
      <p>
        We enriched forecasts with external data sources. We incorporated economic indicators relevant to customer industries. We added weather data that affected demand for certain products. We integrated customer financial health signals from credit monitoring. We also connected to supplier lead time data for dynamic safety stock calculation.
      </p>

      <h2>Optimizing Inventory Policies</h2>
      <p>
        The AI system went beyond forecasting to optimize inventory decisions. We implemented dynamic reorder points based on forecast confidence. We created automated replenishment recommendations for buyers. We developed multi-echelon optimization across distribution centers. We also built simulation capabilities to test policy changes before implementation.
      </p>

      <h2>Enabling the Buying Team</h2>
      <p>
        We equipped buyers with tools to leverage AI insights effectively. We created dashboards showing forecast accuracy and inventory health. We built exception-based workflows that highlighted items needing attention. We developed training programs on interpreting AI recommendations. We also established feedback loops where buyer expertise improved model accuracy.
      </p>

      <h2>Key Lessons</h2>
      <ul>
        <li>Distribution forecasting requires multi-level hierarchical models</li>
        <li>External data significantly improves forecast accuracy</li>
        <li>AI should augment buyer expertise, not replace it</li>
        <li>Dynamic policies outperform static rules-based approaches</li>
      </ul>
    </CaseStudyArticle>
  );
}
