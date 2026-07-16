import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Timer, AlertTriangle, DollarSign, Boxes, Bot, ScanLine, Package } from "lucide-react";

export default function GlobalRetailer() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Automating Supply-Chain Order Processing with RPA | Retail Case Study"
      seoDescription="A 200-location retailer's procurement team spent 40+ hours a week re-keying orders across three systems. RPA cut processing time 45%, errors 60%, and saved $1.8M a year."
      canonical="/cases/global-retailer"
      industry="Retail"
      industryLink="/industries/retail"
      title="How a Global Retailer Automated Its Supply Chain with RPA"
      subtitle="RPA bots automated order processing and inventory management across 200+ locations — eliminating manual data entry and reducing processing time 45% without waiting on a new ERP."
      heroImage="/images/capabilities/cap-retail-apparel.jpg"
      metrics={[
        { value: "45%", label: "Faster Processing" },
        { value: "60%", label: "Fewer Order Errors" },
        { value: "$1.8M", label: "Annual Savings" }
      ]}
      clientContextTitle="Drowning in Manual Orders"
      clientContextIntro="A multinational retail chain with 200+ locations was drowning in manual order processing. Its procurement team spent 40+ hours a week transferring data between a legacy ERP, supplier portals, and an inventory platform — entering each order across three systems by hand."
      clientContextBody="The manual process introduced errors that cascaded through the supply chain: wrong quantities, wrong SKUs, duplicate orders — costing $2M+ a year in expedited shipping, stockouts, and excess inventory. Traditional integration wasn't viable, because the ERP was slated for replacement within 18 months, making API development hard to justify."
      clientProfile={{
        industry: "Multinational Retail Chain",
        companySize: "200+ Locations",
        projectDuration: "Seven-Month Payback",
        additionalInfo: "UiPath RPA",
        additionalLabel: "Platform"
      }}
      challengeTitle="Where the Supply Chain Broke Down"
      challenges={[
        {
          icon: Timer,
          title: "40+ hours a week re-keying",
          description: "Procurement hand-entered every order across three disconnected systems, creating constant bottlenecks."
        },
        {
          icon: AlertTriangle,
          title: "Cascading errors",
          description: "Manual entry produced wrong quantities, wrong SKUs, and duplicate orders that rippled through the chain."
        },
        {
          icon: DollarSign,
          title: "$2M+ a year in waste",
          description: "Those errors drove expedited shipping fees, stockouts, and excess inventory."
        },
        {
          icon: Boxes,
          title: "Integration wasn't worth it",
          description: "With the ERP slated for replacement in 18 months, building API integrations couldn't be justified."
        }
      ]}
      approachTitle="Bots That Do the Re-Keying"
      approachIntro="NEXDYNE deployed UiPath RPA bots that automated the entire order-to-inventory workflow — doing in minutes what took hours of manual work, without touching the soon-to-be-replaced ERP."
      steps={[
        {
          step: "01",
          title: "Map every edge case first",
          description: "Process-discovery workshops with procurement identified all exception paths and handling needs before a bot was built."
        },
        {
          step: "02",
          title: "Automate the full workflow",
          description: "Bots logged into each system, extracted order data, validated quantities against inventory, and submitted purchase orders to suppliers."
        },
        {
          step: "03",
          title: "Roll out in phases",
          description: "Developed and tested in a six-week sprint, then rolled out at 50 locations a week under centralized UiPath Orchestrator management."
        },
        {
          step: "04",
          title: "Keep humans on exceptions",
          description: "OCR extracted data from supplier invoices, while an exception dashboard routed edge cases to human reviewers."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Bot,
          value: "45%",
          label: "Faster processing",
          detail: "Freeing 40 weekly hours for supplier negotiation"
        },
        {
          icon: ScanLine,
          value: "60%",
          label: "Fewer order errors",
          detail: "Eliminating downstream cost of wrong and duplicate orders"
        },
        {
          icon: Package,
          value: "$1.8M",
          label: "Annual savings",
          detail: "With stockouts down 35% and payback in 7 months"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Automating KYC Compliance with RPA",
          metric: "80%",
          label: "less manual work",
          link: "/cases/financial-institution",
          image: "/images/industries/fin-monitors.jpg"
        },
        {
          title: "Reducing Retail Shrinkage 25% with Computer Vision",
          metric: "25%",
          label: "less shrinkage",
          link: "/case-studies/retail-shrinkage-reduction",
          image: "/images/capabilities/cap-retail-apparel.jpg"
        }
      ]}
      ctaTitle="Ready to take the re-keying off your team?"
      ctaDescription="Let's talk about what RPA could automate across your supply chain."
    />
  );
}
