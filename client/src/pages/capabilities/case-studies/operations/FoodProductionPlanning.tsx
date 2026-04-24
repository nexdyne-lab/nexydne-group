import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function FoodProductionPlanning() {
  return (
    <CaseStudyTemplate
      client="Specialty Food Manufacturer"
      industry="Food & Beverage · Operations"
      title="Production Planning Reduces Inventory by 35%"
      subtitle="How a food manufacturer transformed their planning processes to reduce inventory while improving customer service."
      heroImage="https://images.unsplash.com/photo-1566467021492-99e0d5f4bd04?w=1600&q=80"
      challenge={`The company was caught in a vicious cycle: high inventory tied up working capital, but stockouts still occurred regularly. Production planning was reactive, driven by urgent customer requests rather than systematic forecasting. Changeover times were long, forcing large batch sizes that contributed to excess inventory.

A 160-employee food manufacturer with $72M in annual revenue produces specialty sauces and condiments for foodservice and retail channels across two production facilities with 200+ SKUs. The planning process created its own problems: demand forecasts updated quarterly that quickly became obsolete, production schedules changing daily based on the loudest customer complaint, changeover times of 4+ hours making small batches uneconomical, and safety stock levels set arbitrarily and unreviewed for years.`}
      solution={`NEXDYNE transformed the planning process from reactive to proactive. Weekly demand sensing incorporated customer POS data and order patterns, statistical forecasting models calibrated to each product's demand characteristics, a formal S&OP process aligned sales, operations, and finance, and exception-based planning focused attention on meaningful deviations.

Changeover time reduction was tackled through SMED (Single Minute Exchange of Die) events on critical production lines, standardized changeover procedures with visual work instructions, and investment in quick-change tooling for high-frequency changeovers—achieving a 50% reduction in average changeover time that enabled smaller, more responsive production batches.

Inventory policies were right-sized using ABC-XYZ classification segmenting SKUs by value and variability, optimal safety stock levels calculated from demand variability and service targets, inventory review processes preventing creep, and slow-moving inventory disposition procedures. Planning software automated routine calculations and KPIs balanced service, inventory, and cost objectives.`}
      impact={`Inventory decreased 35%, freeing $2.8 million in working capital while simultaneously improving service levels—breaking the vicious cycle of excess inventory coexisting with stockouts. On-time delivery reached 98% as proactive planning replaced reactive firefighting. Changeover time reduction of 50% enabled the smaller batch sizes that made this inventory reduction possible without sacrificing responsiveness.

The S&OP process created organizational alignment that had been missing: sales no longer promised lead times that operations couldn't deliver, and operations no longer over-produced to buffer against unpredictable demand signals. The planning center of excellence established to drive continuous improvement has continued to find additional inventory optimization opportunities beyond the initial 35% reduction.`}
      metrics={[
        { value: "35%", label: "Inventory reduction" },
        { value: "98%", label: "On-time delivery" },
        { value: "$2.8M", label: "Working capital freed" },
        { value: "50%", label: "Changeover reduction" }
      ]}
      tags={["Food & Beverage", "Production Planning", "Operations", "Inventory"]}
      relatedCapability={{
        title: "Operations",
        link: "/capabilities/operations"
      }}
    />
  );
}
