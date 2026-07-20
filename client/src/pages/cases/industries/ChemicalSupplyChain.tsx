import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Package, Shield, Clock, Target, TrendingUp, Globe, Zap } from "lucide-react";

export default function ChemicalSupplyChain() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Supply Chain Resilience | Chemicals Case Study"
      seoDescription="How a chemical company reduced supply disruptions by 30% through supply chain visibility, risk management, and alternative sourcing."
      canonical="/cases/chemical-supply-chain"
      industry="Chemicals"
      industryLink="/industries/manufacturing"
      title="Chemical Company Reduces Supply Disruptions 30% with Resilience Program"
      subtitle="How end-to-end visibility, predictive risk management, and strategic sourcing transformed supply chain resilience."
      heroImage="/images/industries/retail-warehouse.jpg"
      metrics={[
        { value: "30%", label: "Fewer Disruptions" },
        { value: "99%", label: "Customer OTIF" },
        { value: "40%→15%", label: "Single-Source Spend" },
        { value: "15 Days", label: "Earlier Warning" }
      ]}
      clientContextTitle="A Chemical Company Vulnerable to Disruptions"
      clientContextIntro="A global chemical company sourced raw materials from 500+ suppliers across 40 countries. Supply disruptions were becoming more frequent—natural disasters, geopolitical events, and supplier failures. Each major disruption brought heavy expediting costs, lost sales, and customer penalties. The company needed to build resilience."
      clientContextBody="The supply chain was optimized for cost, not resilience. Single-source suppliers, long lead times, and minimal inventory left no buffer for disruptions. When problems occurred, the company scrambled reactively. There was no visibility into supplier risks or early warning of emerging issues."
      clientProfile={{
        industry: "Specialty Chemicals",
        companySize: "Sourcing in 40 Countries",
        projectDuration: "18 Months",
        additionalInfo: "500+ Suppliers",
        additionalLabel: "Supply Base"
      }}
      challengeTitle="Fragile Supply Chain"
      challenges={[
        {
          icon: Shield,
          title: "Frequent Disruptions",
          description: "10+ major disruptions annually—each one costly to expedite and recover from."
        },
        {
          icon: Target,
          title: "Single Sources",
          description: "40% of spend with single-source suppliers—no alternatives when problems occur."
        },
        {
          icon: Clock,
          title: "No Early Warning",
          description: "Disruptions discovered when shipments don't arrive—too late to respond."
        },
        {
          icon: Globe,
          title: "No Visibility",
          description: "Can't see beyond tier-1 suppliers—hidden risks in extended network."
        }
      ]}
      approachTitle="Building Supply Chain Resilience"
      approachIntro="NexDyne implemented a comprehensive resilience program: supply chain visibility, predictive risk management, strategic inventory, and alternative sourcing that transformed the company's ability to withstand disruptions."
      steps={[
        {
          step: "01",
          title: "Supply Chain Mapping",
          description: "Mapped the extended supply network including tier-2 and tier-3 suppliers. Identified concentration risks, geographic exposures, and critical dependencies that weren't visible before."
        },
        {
          step: "02",
          title: "Risk Monitoring",
          description: "Implemented continuous monitoring of supplier and geographic risks: financial health, weather events, geopolitical developments, and operational indicators. Early warning of emerging issues."
        },
        {
          step: "03",
          title: "Alternative Sourcing",
          description: "Qualified alternative suppliers for critical materials. Reduced single-source exposure from 40% to 15% of spend. Built relationships before they were needed in crisis."
        },
        {
          step: "04",
          title: "Strategic Inventory",
          description: "Optimized inventory positioning based on risk and criticality. Strategic buffers for high-risk materials. Dynamic safety stock that adjusted to risk levels."
        }
      ]}
      resultsTitle="Resilience Achieved"
      results={[
        {
          icon: Shield,
          value: "30%",
          label: "Fewer disruptions",
          detail: "From early warning and prevention"
        },
        {
          icon: Target,
          value: "99%",
          label: "Customer OTIF",
          detail: "Even during supply challenges"
        },
        {
          icon: TrendingUp,
          value: "40%→15%",
          label: "Single-source spend",
          detail: "Alternative suppliers qualified for critical materials"
        },
        {
          icon: Clock,
          value: "15 Days",
          label: "Earlier warning",
          detail: "Time to respond before impact"
        }
      ]}
      quote="We transformed from reactive to proactive. We used to find out about problems when shipments didn't arrive. Now we see risks emerging weeks in advance and take action before they impact us. Our customers trust us to deliver even when the world is chaotic."
      quoteAuthor="Jennifer Park"
      quoteRole="Chief Supply Chain Officer"
      relatedStudies={[
        {
          title: "Plant Optimization",
          metric: "12%",
          label: "yield improvement",
          link: "/cases/chemical-plant-optimization",
          image: "/images/capabilities/cap-warehouse-robot.jpg"
        },
        {
          title: "Sustainability Transformation",
          metric: "25%",
          label: "emissions reduction",
          link: "/cases/chemical-sustainability",
          image: "/images/industries/transport-bridge.jpg"
        }
      ]}
      ctaTitle="Ready to Build Resilience?"
      ctaDescription="Let's discuss how to strengthen your supply chain."
    />
  );
}
