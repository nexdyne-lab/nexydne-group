import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { AlertTriangle, Target, DollarSign, Users, TrendingDown, CheckCircle, Zap } from "lucide-react";

export default function LogisticsShipmentAutomationFeature() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Logistics Shipment Processing Automation | Case Study"
      seoDescription="A regional logistics provider's manual shipment processing was error-prone. Automating the process achieved a 92% reduction in shipment errors."
      canonical="/case-studies/logistics-shipment-automation"
      industry="Logistics"
      industryLink="/industries/transportation-logistics"
      title="How a Regional Logistics Provider Cut Shipment Errors by 92%"
      subtitle="Manual shipment processing meant errors that cost money and customer trust. Automating the process nearly eliminated them."
      heroImage="/images/capabilities/cap-robot-factory.jpg"
      metrics={[
        { value: "92%", label: "Fewer Shipment Errors" },
        { value: "Automated", label: "Processing" },
        { value: "Accurate", label: "Every Shipment" },
        { value: "Restored", label: "Customer Trust" }
      ]}
      clientContextTitle="Errors Built Into Manual Processing"
      clientContextIntro="A regional logistics provider processed shipments through a manual workflow, and errors were an accepted cost of doing business — wrong addresses, mislabeled packages, incorrect routing. Each error meant a delayed or misdelivered shipment, a cost to fix, and a dent in customer trust."
      clientContextBody="The errors were a direct consequence of manual handling. People keying and checking shipment details at volume inevitably make mistakes, and without automation there was no systematic guard against them. The errors compounded downstream — a mislabeled package might travel to the wrong hub before anyone noticed — so the cost of each mistake was amplified. Customers experienced the failures directly, and reputation suffered. The provider needed to automate shipment processing so accuracy was built in and errors were caught before they propagated, rather than discovered after they had already cost a delivery."
      clientProfile={{
        industry: "Regional Logistics Provider",
        companySize: "500,000+ Shipments / Year",
        projectDuration: "5 Months",
        additionalInfo: "Shipment Processing Automation",
        additionalLabel: "Fulfillment Operations"
      }}
      challengeTitle="Why Errors Were So Common"
      challenges={[
        { icon: AlertTriangle, title: "Manual Handling at Volume", description: "People keying and checking shipment details at scale inevitably made mistakes." },
        { icon: Target, title: "No Systematic Guard", description: "Without automation, nothing systematically caught errors before they propagated." },
        { icon: DollarSign, title: "Amplified Downstream Cost", description: "A mislabeled package traveled to the wrong hub before anyone noticed, multiplying the cost." },
        { icon: Users, title: "Eroded Customer Trust", description: "Customers experienced delayed and misdelivered shipments directly." }
      ]}
      approachTitle="Build Accuracy Into the Process"
      approachIntro="We automated shipment processing so accuracy was built in and errors were caught before they propagated — achieving a 92 percent reduction in shipment errors."
      steps={[
        { step: "01", title: "Mapping the Error Sources", description: "We identified where in the manual process errors originated and propagated." },
        { step: "02", title: "Automating Shipment Processing", description: "We automated the keying, labeling, and routing steps where manual handling caused mistakes." },
        { step: "03", title: "Catching Errors Early", description: "We built validation into the automated flow so errors were caught before a shipment moved." },
        { step: "04", title: "Reducing Errors 92%", description: "We drove shipment errors down 92 percent, cutting rework cost and restoring customer trust." }
      ]}
      resultsTitle="Accurate Shipments, Restored Trust"
      results={[
        { icon: TrendingDown, value: "92%", label: "Fewer errors", detail: "On shipment processing" },
        { icon: CheckCircle, value: "Automated", label: "Processing", detail: "Accuracy built in" },
        { icon: Zap, value: "Early", label: "Error catching", detail: "Before shipments move" },
        { icon: Users, value: "Restored", label: "Trust", detail: "Reliable deliveries" }
      ]}
      quote="We had come to accept shipment errors as part of the business, but every wrong label or address cost us money and a customer's trust. Automating the processing so accuracy is built in and mistakes get caught before a package moves cut our errors by ninety-two percent. Reliable delivery stopped being a hope and became the default."
      quoteAuthor="VP of Operations"
      quoteRole="Regional logistics provider"
      relatedStudies={[
        { title: "How a Multi-Channel Retailer Scaled to 12,000+ Daily Orders", metric: "12,000+", label: "daily orders handled", link: "/case-studies/ecommerce-order-fulfillment", image: "/images/industries/retail-shelves.jpg" },
        { title: "How NexDyne Built Its Digital Product Arm From Five People to Hundreds", metric: "5 → hundreds", label: "team scaled", link: "/case-studies/saas-customer-onboarding", image: "/images/capabilities/cap-conference-data.jpg" }
      ]}
      ctaTitle="Are manual errors costing you deliveries and trust?"
      ctaDescription="Let's automate processing so accuracy is built in and errors are caught early."
    />
  );
}
