import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { TrendingDown, Dices, Scale, LineChart, SlidersHorizontal, ShieldCheck, Users, DollarSign } from "lucide-react";

export function DistributionPricing() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Pricing Optimization That Improved Margins 8 Points | Distribution Case Study"
      seoDescription="A $125M distributor's margins eroded from 28% to 22% amid ad-hoc discounting. Systematic, value-based pricing recovered 8 margin points and $10M in profit — while lifting retention 3%."
      canonical="/capabilities/growth-marketing-sales/case-studies/distribution-pricing"
      industry="Transportation & Logistics"
      industryLink="/industries/transportation-logistics"
      title="How a Distributor Improved Margins 8 Points With Pricing Optimization"
      subtitle="An industrial distributor transformed ad-hoc pricing into a systematic, value-based discipline — recovering 8 margin points and $10M in annual profit while improving customer retention 3%."
      heroImage="/images/capabilities/cap-chess.jpg"
      metrics={[
        { value: "8 pts", label: "Margin Improvement" },
        { value: "3%", label: "Retention Gain" },
        { value: "$10M", label: "Profit Impact" },
        { value: "30%", label: "Pricing Consistency Gain" }
      ]}
      clientContextTitle="Value Leaking Away"
      clientContextIntro="A 160-employee distribution company with $125M in revenue serves industrial customers with MRO supplies. Gross margins had eroded from 28% to 22% over five years as reps discounted to win deals, with pricing set ad hoc and no systematic approach."
      clientContextBody="The company had grown through acquisition, leaving pricing inconsistent across the combined customer base. Analysis found value leaking on every dimension: list prices hadn't been updated in years, similar customers received vastly different discounts, freight and handling were regularly waived without justification, and rebates had accumulated without review. Some accounts were actually losing money while competitors priced on data."
      clientProfile={{
        industry: "Industrial Distributor",
        companySize: "$125M Revenue",
        projectDuration: "18-Month Program",
        additionalInfo: "Pricing Governance",
        additionalLabel: "Structure"
      }}
      challengeTitle="Why Margins Eroded"
      challenges={[
        {
          icon: TrendingDown,
          title: "Margins from 28% to 22%",
          description: "Five years of reps discounting to win deals steadily eroded gross margin."
        },
        {
          icon: Dices,
          title: "Ad-hoc pricing",
          description: "No systematic approach meant similar customers received vastly different prices."
        },
        {
          icon: Scale,
          title: "Money-losing accounts",
          description: "Customer profitability varied wildly, with some accounts actually unprofitable."
        },
        {
          icon: LineChart,
          title: "Outdated list prices",
          description: "Prices hadn't been updated in years while rebates and waivers accumulated unchecked."
        }
      ]}
      approachTitle="Systematic, Value-Based Pricing"
      approachIntro="NEXDYNE built the infrastructure for systematic pricing — software, governance, analytics, and a dedicated team — then enabled the sales force to have value-based pricing conversations."
      steps={[
        {
          step: "01",
          title: "Set data-driven list prices",
          description: "Competitive positioning and price-elasticity analysis by category drove market-based prices with a regular review cadence."
        },
        {
          step: "02",
          title: "Govern discounts",
          description: "Value-based guidelines, approval workflows requiring justification, deal-desk support, and outlier reporting replaced arbitrary discounting."
        },
        {
          step: "03",
          title: "Enable the sales team",
          description: "Training, profitability and pricing-history tools, margin-based incentives, and coaching built pricing discipline."
        },
        {
          step: "04",
          title: "Make it stick",
          description: "A dedicated pricing team and dashboards tracked performance and surfaced ongoing opportunities."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: DollarSign,
          value: "8 pts",
          label: "Margin improvement",
          detail: "$10M in annual profit on a $125M revenue base"
        },
        {
          icon: Users,
          value: "3%",
          label: "Better retention",
          detail: "Value-based conversations strengthened relationships"
        },
        {
          icon: ShieldCheck,
          value: "30%",
          label: "More pricing consistency",
          detail: "Eliminating the variation that hid unprofitable accounts"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Improving Sales Win Rate With Process Optimization",
          metric: "45%",
          label: "higher win rate",
          link: "/capabilities/growth-marketing-sales/case-studies/software-sales-optimization",
          image: "/images/industries/meeting-topview.jpg"
        },
        {
          title: "AI Demand Forecasting That Cut Inventory 35%",
          metric: "35%",
          label: "less inventory",
          link: "/capabilities/artificial-intelligence/case-studies/distributor-demand-forecasting",
          image: "/images/industries/retail-warehouse.jpg"
        }
      ]}
      ctaTitle="Ready to stop leaking margin?"
      ctaDescription="Let's talk about what systematic pricing could do for your profitability."
    />
  );
}

export default DistributionPricing;
