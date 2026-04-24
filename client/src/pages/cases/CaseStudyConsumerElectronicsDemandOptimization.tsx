import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function CaseStudyConsumerElectronicsDemandOptimization() {
  return (
    <CaseStudyTemplate
      client="Consumer Electronics & Furniture Retailer"
      industry="Retail · Demand Forecasting"
      title="Localized Demand Forecasting Drives $2.4M Sales Increase"
      subtitle="A consumer electronics and furniture retailer partnered with NexDyne to create a localized demand forecaster that optimized assortment across more than 120 stores."
      heroImage="https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=1600&q=80"
      challenge={`The retailer's traditional approach to assortment planning treated all stores similarly, with minor adjustments based on store size and format. This approach was creating significant inefficiencies: urban stores were overstocked on entry-level products while suburban locations couldn't keep premium items in stock.

High markdown rates eroded margins—products that didn't sell in certain locations required deep discounts to clear, with markdown rates varying by 15-25% across stores with similar footprints. Store managers had intuitions about local preferences but lacked data to support their recommendations, and e-commerce competitors were using sophisticated personalization while the retailer's stores offered the same experience everywhere.`}
      solution={`NexDyne developed a machine learning solution that combined traditional sales data with rich geolocational and demographic datasets to create hyper-local demand forecasts. The approach went beyond simple clustering to understand the unique demand drivers at each store location.

We integrated multiple external data sources including census demographics, household income data, competitor locations, traffic patterns, and local economic indicators. Using unsupervised learning, we identified 12 distinct demand archetypes that transcended traditional store clustering. A hierarchical forecasting model generated SKU-level predictions for each store, incorporating local demand drivers, seasonality, promotional response, and cross-category effects. The forecasting model fed into an optimization engine that recommended store-specific assortments within space and budget constraints.`}
      impact={`Localized assortments drove significant sales lift, particularly in stores that had been underperforming due to mismatched inventory. Better inventory allocation reduced markdowns and improved sell-through rates across all product categories.

Stores now carry the right products for their local market, dramatically reducing lost sales from out-of-stock situations. The $2.4M annual sales increase and 15% cash margin improvement validated the power of geolocational intelligence—store managers report higher satisfaction, customers find what they want, and margins have improved significantly.`}
      metrics={[
        { value: "$2.4M", label: "Annual sales increase" },
        { value: "15%", label: "Cash margin improvement" },
        { value: "22%", label: "Reduction in stockouts" },
        { value: "18%", label: "Inventory turns improvement" }
      ]}
      quote={{
        text: "For years, we knew our stores were different, but we didn't have the tools to act on that knowledge. NexDyne gave us the ability to treat each store as a unique market while maintaining operational efficiency. The results speak for themselves—our store managers are happier, our customers are finding what they want, and our margins have improved significantly.",
        author: "Chief Merchandising Officer",
        role: "Consumer Electronics & Furniture Retailer"
      }}
      tags={["Demand Forecasting", "Retail Analytics", "Machine Learning", "Assortment Optimization"]}
      relatedCapability={{
        title: "Artificial Intelligence",
        link: "/capabilities/artificial-intelligence"
      }}
    />
  );
}
