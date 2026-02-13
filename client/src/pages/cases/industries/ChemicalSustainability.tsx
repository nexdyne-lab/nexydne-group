import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Leaf, Factory, DollarSign, Target, TrendingDown, Globe, Shield, Zap } from "lucide-react";

export default function ChemicalSustainability() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Sustainability Transformation | Chemicals Case Study"
      seoDescription="How a chemical company reduced emissions by 25% through process optimization, energy efficiency, and circular economy initiatives."
      canonical="/cases/chemical-sustainability"
      industry="Chemicals"
      industryLink="/industries/chemicals"
      title="Chemical Company Reduces Emissions 25% Through Sustainability Transformation"
      subtitle="How process optimization, renewable energy, and circular economy initiatives achieved environmental goals while improving economics."
      heroImage="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80"
      metrics={[
        { value: "25%", label: "Emissions Reduction" },
        { value: "30%", label: "Energy Savings" },
        { value: "$60M", label: "Annual Benefit" },
        { value: "40%", label: "Waste Reduction" }
      ]}
      clientContextTitle="A Chemical Company Facing Sustainability Pressure"
      clientContextIntro="A major chemical company faced mounting pressure on sustainability: customers demanding lower-carbon products, investors requiring ESG performance, and regulators tightening emissions limits. The company had committed to 30% emissions reduction by 2030 but had no clear path to achieve it."
      clientContextBody="Operations were energy-intensive with significant emissions. Waste streams were disposed, not recycled. Products were designed for performance, not sustainability. The company needed a comprehensive transformation that achieved environmental goals while maintaining—or improving—economic performance."
      clientProfile={{
        industry: "Commodity Chemicals",
        companySize: "$5B Revenue",
        projectDuration: "36 Months",
        additionalInfo: "2M Tons CO2/Year",
        additionalLabel: "Starting Emissions"
      }}
      challengeTitle="Sustainability Without Sacrifice"
      challenges={[
        {
          icon: Leaf,
          title: "Emissions Targets",
          description: "30% reduction commitment by 2030—no clear path to achieve it."
        },
        {
          icon: Factory,
          title: "Energy Intensity",
          description: "Energy-intensive processes—major source of emissions and costs."
        },
        {
          icon: Target,
          title: "Customer Demands",
          description: "Customers requiring lower-carbon products—competitive necessity."
        },
        {
          icon: DollarSign,
          title: "Economic Viability",
          description: "Must achieve sustainability without sacrificing profitability."
        }
      ]}
      approachTitle="Sustainable Operations"
      approachIntro="NexDyne led a comprehensive sustainability transformation: process optimization, energy transition, circular economy, and product innovation that achieved environmental goals while improving economics."
      steps={[
        {
          step: "01",
          title: "Energy Optimization",
          description: "Implemented AI-powered energy optimization across operations. Identified and eliminated waste, optimized equipment operation, and recovered waste heat. Achieved 30% energy reduction with 18-month payback."
        },
        {
          step: "02",
          title: "Renewable Transition",
          description: "Transitioned to renewable energy through PPAs and on-site generation. Electrified processes where possible. Achieved 50% renewable energy, eliminating associated emissions."
        },
        {
          step: "03",
          title: "Circular Economy",
          description: "Redesigned waste streams as feedstocks. Implemented recycling and recovery processes. Partnered with customers on product take-back. Reduced waste to landfill by 40%."
        },
        {
          step: "04",
          title: "Sustainable Products",
          description: "Developed lower-carbon product alternatives using bio-based feedstocks and recycled content. Created premium sustainability positioning with customers willing to pay for performance."
        }
      ]}
      resultsTitle="Sustainability Achieved"
      results={[
        {
          icon: Leaf,
          value: "25%",
          label: "Emissions reduction",
          detail: "On track for 2030 target"
        },
        {
          icon: TrendingDown,
          value: "30%",
          label: "Energy savings",
          detail: "From optimization and efficiency"
        },
        {
          icon: DollarSign,
          value: "$60M",
          label: "Annual benefit",
          detail: "Sustainability improving economics"
        },
        {
          icon: Globe,
          value: "40%",
          label: "Waste reduction",
          detail: "Circular economy in action"
        }
      ]}
      quote="We proved that sustainability and profitability go together. Our emissions are down, our energy costs are down, and our customers are paying premiums for sustainable products. We're not just meeting targets—we're building competitive advantage."
      quoteAuthor="Dr. Sarah Martinez"
      quoteRole="Chief Sustainability Officer"
      relatedStudies={[
        {
          title: "Plant Optimization",
          metric: "12%",
          label: "yield improvement",
          link: "/cases/chemical-plant-optimization",
          image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=600&q=80"
        },
        {
          title: "Supply Chain Resilience",
          metric: "30%",
          label: "reduction in disruptions",
          link: "/cases/chemical-supply-chain",
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80"
        }
      ]}
      ctaTitle="Ready for Sustainability Transformation?"
      ctaDescription="Let's discuss how to achieve your environmental goals."
    />
  );
}
