import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export function RetailCaseStudy() {
  return (
    <CaseStudyTemplate
      client="Specialty Home Goods Retailer"
      industry="Retail & Consumer Goods · Operations"
      title="47% Reduction in Inventory Carrying Costs"
      subtitle="Multi-location specialty retailer with 28 stores implements AI-driven inventory optimization, reducing stockouts by 68% while cutting excess inventory by $2.1M annually."
      heroImage="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80"
      challenge={`Each store operated with semi-independent inventory systems that didn't communicate in real-time. Corporate buyers made purchasing decisions based on weekly aggregated reports, missing critical demand signals and creating a 5-7 day lag between actual sales and replenishment decisions. With 40% of revenue concentrated in seasonal products, the company consistently over-ordered for some seasons while under-ordering for others—end-of-season markdowns averaged 28% of seasonal inventory.

A specialty home goods retailer operating 28 stores across the Midwest and Eastern United States with 320 employees and over 15,000 SKUs struggled with simultaneous inventory problems: excess inventory in some locations while experiencing stockouts in others. Rapid expansion from 12 to 28 stores over four years created inventory management challenges legacy systems couldn't handle. Online orders drew from a separate warehouse inventory, causing 12% of online orders to be canceled or delayed when products showed "in stock" online but were actually allocated to stores.`}
      solution={`NEXDYNE implemented a unified inventory intelligence platform providing real-time visibility across all channels, AI-powered demand forecasting, and automated allocation optimization.

Real-time integration across all 28 stores, the central warehouse, and e-commerce platform updated every sale, return, and transfer within seconds. Machine learning models analyzed historical sales, local events, weather patterns, and economic indicators to forecast demand at the store-SKU level, generating 90-day rolling forecasts updated daily with accuracy rates exceeding 87%.

When inventory imbalances were detected, the system automatically generated transfer recommendations, calculated optimal routing, and initiated logistics coordination—with store managers receiving pre-approved transfer requests requiring only one-click confirmation. A single inventory pool served both in-store and online channels, with intelligent allocation rules balancing channel demand. Ship-from-store capabilities enabled online orders to be fulfilled from the nearest location with available stock.`}
      impact={`Inventory carrying costs reduced 47%—from $4.2 million to $2.2 million annually—through better demand matching and faster turnover. Stockout incidents dropped 68%, from 340 per month to 108, capturing previously lost sales. Annual savings of $2.1 million came from combined reductions in carrying costs, fewer markdowns, and captured sales that would have been lost to stockouts.

Seasonal markdown rate reduced from 28% to 11%, protecting gross margins significantly. Inventory turnover improved from 4.2x to 6.1x annually. Store manager time spent on inventory tasks reduced 15 hours per week. E-commerce fulfillment rate improved from 88% to 94%, with ship-from-store enabling faster delivery for 40% of online orders. Customer satisfaction scores increased 18 points due to improved product availability.`}
      metrics={[
        { value: "47%", label: "Carrying cost reduction" },
        { value: "68%", label: "Fewer stockouts" },
        { value: "$2.1M", label: "Annual savings" },
        { value: "28", label: "Store locations" }
      ]}
      quote={{
        text: "The transformation has been remarkable. We went from constantly firefighting inventory issues to having predictive insights that let us stay ahead of demand. Our buyers now spend their time on strategic decisions instead of chasing data.",
        author: "Michael Rodriguez",
        role: "VP of Operations, HomeStyle Goods"
      }}
      tags={["Retail", "Inventory", "AI", "Operations"]}
      relatedCapability={{
        title: "Operations",
        link: "/capabilities/operations"
      }}
    />
  );
}

export default RetailCaseStudy;
