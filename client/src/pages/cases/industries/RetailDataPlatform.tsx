import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, TrendingDown, BarChart3, Target, Zap, CheckCircle } from "lucide-react";

export default function RetailDataPlatform() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Data Platform Enables Analytics for Retailer | Technology Case Study"
      seoDescription="A 160-employee retail chain lacked real-time visibility into inventory. A new data platform delivered real-time inventory visibility and cut stockouts 25%."
      canonical="/capabilities/technology/case-studies/retail-data-platform"
      industry="Retail"
      industryLink="/industries/retail"
      title="How a Retail Chain Cut Stockouts 25% With Real-Time Inventory Visibility"
      subtitle="Without real-time inventory data, the chain was always reacting to stockouts after they cost a sale. A new data platform made inventory visible as it moved."
      heroImage="/images/capabilities/cap-retail-data.jpg"
      metrics={[
        { value: "25%", label: "Fewer Stockouts" },
        { value: "Real-Time", label: "Inventory Visibility" },
        { value: "One", label: "Data Platform" },
        { value: "Analytics", label: "Enabled" }
      ]}
      clientContextTitle="Flying Blind on Inventory"
      clientContextIntro="A 160-employee retail chain managed its inventory with data that was always out of date. Stock levels were reconciled in batches, so by the time the chain knew a product was running low, it had often already stocked out and lost sales — and there was no platform to support the analytics that could prevent it."
      clientContextBody="The lack of real-time data made inventory management reactive by design. Buyers and store managers worked from yesterday's numbers, so replenishment decisions lagged reality and stockouts on popular items were common. Beyond inventory, the absence of a proper data platform meant the chain could not build the analytics — demand patterns, store performance, forecasting — that would let it get ahead of problems. The retailer needed a data platform delivering real-time inventory visibility and the foundation for broader analytics, so it could prevent stockouts rather than react to them."
      clientProfile={{
        industry: "Retail Chain",
        companySize: "~160 Employees",
        projectDuration: "6 Months",
        additionalInfo: "Data Platform Build",
        additionalLabel: "Analytics Foundation"
      }}
      challengeTitle="Why Stockouts Kept Happening"
      challenges={[
        { icon: Clock, title: "Out-of-Date Inventory Data", description: "Stock was reconciled in batches, so the chain learned of low stock too late." },
        { icon: TrendingDown, title: "Reactive Replenishment", description: "Decisions lagged reality, so popular items stocked out and lost sales." },
        { icon: BarChart3, title: "No Analytics Foundation", description: "Without a data platform, the chain could not build forecasting or demand analytics." },
        { icon: Target, title: "Working From Yesterday's Numbers", description: "Buyers and store managers made decisions on stale data." }
      ]}
      approachTitle="Build the Platform, See Inventory Live"
      approachIntro="We built a data platform that delivered real-time inventory visibility and the foundation for broader analytics — cutting stockouts 25 percent."
      steps={[
        { step: "01", title: "Building the Data Platform", description: "We stood up a data platform to unify inventory and operational data as a foundation for analytics." },
        { step: "02", title: "Delivering Real-Time Visibility", description: "We made inventory visible in real time, so the chain saw stock as it moved rather than in batches." },
        { step: "03", title: "Enabling Proactive Replenishment", description: "We used the live data to make replenishment proactive, getting ahead of stockouts instead of reacting." },
        { step: "04", title: "Opening Up Analytics", description: "We gave the chain the foundation to build demand, forecasting, and store-performance analytics." }
      ]}
      resultsTitle="Ahead of Stockouts, Ready for Analytics"
      results={[
        { icon: TrendingDown, value: "25%", label: "Fewer stockouts", detail: "On the shelves" },
        { icon: Zap, value: "Real-Time", label: "Inventory", detail: "Visible as it moves" },
        { icon: CheckCircle, value: "One", label: "Data platform", detail: "Analytics foundation" },
        { icon: BarChart3, value: "Enabled", label: "Analytics", detail: "Forecasting and demand" }
      ]}
      quote="We were managing inventory on yesterday's numbers, so we found out about stockouts after they had already cost us the sale. A real data platform gave us live inventory visibility and cut our stockouts by a quarter — and it opened the door to the forecasting and demand analytics we never could build before. We stopped reacting and started getting ahead."
      quoteAuthor="VP of Retail Operations"
      quoteRole="Retail chain"
      relatedStudies={[
        { title: "How a Global Retailer Scaled E-Commerce Revenue 40% With AI Personalization", metric: "40%", label: "e-commerce revenue growth", link: "/case-studies/global-retailer-ai-personalization", image: "/images/capabilities/cap-retail-apparel.jpg" },
        { title: "How a Financial Institution Automated 90% of Its Loan Processing", metric: "90%", label: "of loan workflow automated", link: "/case-studies/financial-institution-loan-automation", image: "/images/industries/fin-trader.jpg" }
      ]}
      ctaTitle="Are you managing inventory on stale data?"
      ctaDescription="Let's build a data platform for real-time visibility and the analytics to get ahead of stockouts."
    />
  );
}
