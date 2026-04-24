import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export function RetailTurnaround() {
  return (
    <CaseStudyTemplate
      client="Specialty Retail Company"
      industry="Retail · Strategy & Finance"
      title="Turnaround Strategy Restores Profitability"
      subtitle="How a retail company recovered from market disruption through strategic cost reduction and operational restructuring."
      heroImage="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80"
      challenge={`The company had lost 25% of revenue over two years as a new competitor opened nearby locations. EBITDA had turned negative, cash was running low, and the bank was threatening to call the loan. The founding family needed to act quickly to save the business.

A 175-employee specialty retail company with 12 locations across the Southeast faced a crisis: a major competitor entering the market had triggered rapid revenue decline, and the cost structure had not been adjusted as revenue fell. Analysis revealed that not all locations were equally affected—some remained profitable while others were deeply underwater. Inventory was bloated with slow-moving SKUs tying up cash, and pricing had not been reviewed in years despite rising costs.`}
      solution={`NEXDYNE first stabilized the situation by implementing a 13-week cash flow forecast to manage liquidity, negotiating extended payment terms with key vendors, eliminating non-essential spending immediately, and beginning conversations with the bank about restructuring the credit facility.

Based on location-level profitability analysis, 4 underperforming locations were closed while investment was focused on the 8 strongest stores. Closures were executed carefully to minimize customer disruption, with inventory transferred to remaining locations and employees offered positions where possible.

Cost restructuring identified $8M in annual savings through renegotiated vendor contracts and supplier consolidation, 30% reduction in corporate overhead, staffing model optimization based on traffic patterns, and renegotiated real estate lease for headquarters. Revenue revitalization refreshed merchandise assortment based on customer data, implemented a loyalty program, upgraded the e-commerce platform, and trained staff on consultative selling to differentiate from the new competitor.`}
      impact={`Profitability was restored within 6 months—an outcome that required both the speed of the stabilization actions and the discipline to simultaneously address cost structure and revenue quality. EBITDA margin recovered to 15% on the restructured footprint. $8 million in annual cost savings were captured through the combination of location closures, vendor renegotiations, and overhead reduction. Bank debt was fully restructured on terms sustainable for the leaner, stronger business.

The 8 remaining locations, freed from the drag of underperforming stores and supported by improved economics, performed significantly better than before the restructuring. The loyalty program and e-commerce investment created the digital capabilities the business needed to compete with the new entrant's inevitable online presence.`}
      metrics={[
        { value: "15%", label: "EBITDA margin restored" },
        { value: "$8M", label: "Annual cost reduction" },
        { value: "6 months", label: "To profitability" },
        { value: "100%", label: "Debt restructured" }
      ]}
      tags={["Retail", "Turnaround", "Cost Reduction", "Strategy"]}
      relatedCapability={{
        title: "Strategy & Finance",
        link: "/capabilities/strategy-finance"
      }}
    />
  );
}

export default RetailTurnaround;
