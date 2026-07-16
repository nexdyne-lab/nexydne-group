import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { TrendingDown, Landmark, Boxes, Store, Wallet, Scissors, Sparkles, Percent } from "lucide-react";

export function RetailTurnaround() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="A Turnaround That Restored Profitability in 6 Months | Retail Case Study"
      seoDescription="A 12-store specialty retailer lost 25% of revenue to a new competitor as EBITDA turned negative and the bank threatened its loan. A turnaround restored profitability and cut $8M in costs."
      canonical="/capabilities/strategy-corporate-finance/case-studies/retail-turnaround"
      industry="Retail"
      industryLink="/industries/retail"
      title="How a Specialty Retailer Restored Profitability in 6 Months"
      subtitle="A specialty retailer recovered from market disruption through stabilization, footprint restructuring, and revenue revitalization — restoring a 15% EBITDA margin, capturing $8M in savings, and fully restructuring its debt."
      heroImage="/images/industries/retail-shelves.jpg"
      metrics={[
        { value: "15%", label: "EBITDA Margin Restored" },
        { value: "$8M", label: "Annual Cost Reduction" },
        { value: "6 mo", label: "To Profitability" },
        { value: "100%", label: "Debt Restructured" }
      ]}
      clientContextTitle="A Business in Crisis"
      clientContextIntro="A 175-employee specialty retailer with 12 Southeast locations lost 25% of revenue over two years as a new competitor opened nearby. EBITDA had turned negative, cash was running low, and the bank was threatening to call the loan."
      clientContextBody="The cost structure hadn't been adjusted as revenue fell. Analysis revealed that not all locations were equally affected — some remained profitable while others were deeply underwater. Inventory was bloated with slow-moving SKUs tying up cash, and pricing hadn't been reviewed in years despite rising costs. The founding family needed to act fast to save the business."
      clientProfile={{
        industry: "Specialty Retailer",
        companySize: "12 Locations",
        projectDuration: "6-Month Turnaround",
        additionalInfo: "8 Stores Kept",
        additionalLabel: "Restructured Footprint"
      }}
      challengeTitle="Why the Business Was Failing"
      challenges={[
        {
          icon: TrendingDown,
          title: "25% revenue lost",
          description: "A new competitor triggered rapid decline the cost structure never adjusted to."
        },
        {
          icon: Landmark,
          title: "The bank circling",
          description: "Negative EBITDA and low cash had the lender threatening to call the loan."
        },
        {
          icon: Store,
          title: "Uneven store economics",
          description: "Some locations stayed profitable while others were deeply underwater."
        },
        {
          icon: Boxes,
          title: "Bloated inventory",
          description: "Slow-moving SKUs tied up cash, and pricing hadn't been reviewed in years."
        }
      ]}
      approachTitle="Stabilize, Restructure, Revitalize"
      approachIntro="NEXDYNE first stabilized liquidity, then restructured the footprint on location-level profitability, took out cost, and revitalized revenue — all at once."
      steps={[
        {
          step: "01",
          title: "Stabilize cash",
          description: "A 13-week cash forecast, extended vendor terms, immediate spending cuts, and bank restructuring talks bought time."
        },
        {
          step: "02",
          title: "Restructure the footprint",
          description: "Four underperforming stores closed while investment focused on the 8 strongest, with inventory and staff redeployed."
        },
        {
          step: "03",
          title: "Take out cost",
          description: "$8M in annual savings came from renegotiated vendor contracts, 30% lower corporate overhead, and lease renegotiation."
        },
        {
          step: "04",
          title: "Revitalize revenue",
          description: "A refreshed assortment, loyalty program, upgraded e-commerce, and consultative-selling training differentiated from the new competitor."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Percent,
          value: "15%",
          label: "EBITDA margin restored",
          detail: "On the leaner, restructured footprint within 6 months"
        },
        {
          icon: Scissors,
          value: "$8M",
          label: "Annual cost reduction",
          detail: "From closures, vendor renegotiations, and overhead cuts"
        },
        {
          icon: Wallet,
          value: "100%",
          label: "Debt restructured",
          detail: "On terms sustainable for the stronger business"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Maximizing Founder Value Through Exit Preparation",
          metric: "40%",
          label: "valuation premium",
          link: "/capabilities/strategy-corporate-finance/case-studies/services-exit",
          image: "/images/industries/meeting-topview.jpg"
        },
        {
          title: "Pricing Optimization That Improved Margins 8 Points",
          metric: "8 pts",
          label: "margin improvement",
          link: "/capabilities/growth-marketing-sales/case-studies/distribution-pricing",
          image: "/images/capabilities/cap-chess.jpg"
        }
      ]}
      ctaTitle="Facing a turnaround?"
      ctaDescription="Let's talk about how to stabilize, restructure, and restore profitability fast."
    />
  );
}

export default RetailTurnaround;
