import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Repeat2, Clock, PackageX, LineChart, Radar, Timer, Layers, DollarSign } from "lucide-react";

export function FoodProductionPlanning() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Production Planning That Cut Inventory 35% | Food Manufacturing Case Study"
      seoDescription="A $72M specialty-food maker was caught between high inventory and regular stockouts, with 4-hour changeovers forcing big batches. New planning cut inventory 35% and freed $2.8M."
      canonical="/capabilities/operations/case-studies/food-production-planning"
      industry="Consumer Products"
      industryLink="/industries/consumer-products"
      title="How a Food Manufacturer Cut Inventory 35% With Better Planning"
      subtitle="A specialty-food manufacturer moved from reactive to proactive planning — demand sensing, S&OP, and 50% faster changeovers — cutting inventory 35%, freeing $2.8M, and reaching 98% on-time delivery."
      heroImage="/images/capabilities/cap-agriculture.jpg"
      metrics={[
        { value: "35%", label: "Inventory Reduction" },
        { value: "98%", label: "On-Time Delivery" },
        { value: "$2.8M", label: "Working Capital Freed" },
        { value: "50%", label: "Changeover Reduction" }
      ]}
      clientContextTitle="A Vicious Cycle"
      clientContextIntro="A 160-employee food manufacturer with $72M in revenue produces specialty sauces and condiments for foodservice and retail across two facilities and 200+ SKUs. It was caught in a vicious cycle: high inventory tied up working capital, yet stockouts still occurred regularly."
      clientContextBody="Planning was reactive — driven by urgent customer requests rather than systematic forecasting — and long changeover times forced large batches that fed excess inventory. Demand forecasts updated only quarterly and quickly became obsolete, production schedules changed daily based on the loudest complaint, changeovers ran 4+ hours making small batches uneconomical, and safety-stock levels were set arbitrarily and unreviewed for years."
      clientProfile={{
        industry: "Specialty Food Manufacturer",
        companySize: "$72M Revenue",
        projectDuration: "2 Facilities",
        additionalInfo: "SMED + S&OP",
        additionalLabel: "Method"
      }}
      challengeTitle="Why Planning Backfired"
      challenges={[
        {
          icon: Repeat2,
          title: "Excess stock and stockouts",
          description: "High inventory tied up capital yet failed to prevent regular stockouts."
        },
        {
          icon: Clock,
          title: "Obsolete quarterly forecasts",
          description: "Forecasts updated only quarterly became stale almost immediately."
        },
        {
          icon: Timer,
          title: "4-hour changeovers",
          description: "Long changeovers forced large, uneconomical batches that fed excess inventory."
        },
        {
          icon: PackageX,
          title: "Arbitrary safety stock",
          description: "Safety-stock levels were set by feel and left unreviewed for years."
        }
      ]}
      approachTitle="Proactive Planning, Faster Changeovers"
      approachIntro="NEXDYNE transformed planning from reactive to proactive and attacked changeover time with SMED — enabling the smaller batches that made inventory reduction possible without losing responsiveness."
      steps={[
        {
          step: "01",
          title: "Sense demand weekly",
          description: "Customer POS data and order patterns fed statistical models calibrated to each product's demand characteristics."
        },
        {
          step: "02",
          title: "Align through S&OP",
          description: "A formal S&OP process aligned sales, operations, and finance, with exception-based planning focusing on real deviations."
        },
        {
          step: "03",
          title: "Cut changeover time",
          description: "SMED events, standardized procedures, and quick-change tooling halved average changeover time."
        },
        {
          step: "04",
          title: "Right-size inventory",
          description: "ABC-XYZ classification and demand-based safety stock, with review processes preventing creep."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: DollarSign,
          value: "35%",
          label: "Less inventory",
          detail: "Freeing $2.8M in working capital while improving service"
        },
        {
          icon: LineChart,
          value: "98%",
          label: "On-time delivery",
          detail: "As proactive planning replaced reactive firefighting"
        },
        {
          icon: Layers,
          value: "50%",
          label: "Faster changeovers",
          detail: "Enabling smaller, more responsive production batches"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Cutting Supply-Chain Costs 25% for a Consumer-Goods Maker",
          metric: "25%",
          label: "cost reduction",
          link: "/capabilities/operations/case-studies/consumer-goods-supply-chain",
          image: "/images/industries/retail-warehouse.jpg"
        },
        {
          title: "Computer Vision Quality Inspection That Lifted Yield 18%",
          metric: "18%",
          label: "higher yield",
          link: "/capabilities/artificial-intelligence/case-studies/food-quality-ai",
          image: "/images/capabilities/cap-food.jpg"
        }
      ]}
      ctaTitle="Ready to break the inventory cycle?"
      ctaDescription="Let's talk about what proactive planning could do for your inventory and service."
    />
  );
}

export default FoodProductionPlanning;
