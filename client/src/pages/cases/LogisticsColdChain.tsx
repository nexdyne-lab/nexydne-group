import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Snowflake, ShieldCheck, DollarSign, Thermometer, BellRing, FileCheck, Radio } from "lucide-react";

export default function LogisticsColdChain() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Ensuring Vaccine Safety with an IoT Cold Chain | Transportation & Logistics Case Study"
      seoDescription="A pharma logistics firm only learned a shipment had spoiled after it arrived. Real-time IoT monitoring and predictive alerts cut spoilage 90% and saved $5M a year."
      canonical="/case-studies/logistics-cold-chain"
      industry="Transportation & Logistics"
      industryLink="/industries/transportation-logistics"
      title="How a Pharma Logistics Firm Ensures Product Safety with an IoT Cold Chain"
      subtitle="Real-time temperature monitoring and predictive alerts reduced spoilage 90% for sensitive vaccine shipments — turning 'hoping it arrives safely' into knowing it's safe every second of the journey."
      heroImage="/images/industries/retail-warehouse.jpg"
      metrics={[
        { value: "90%", label: "Less Product Spoilage" },
        { value: "100%", label: "Compliance Visibility" },
        { value: "$5M", label: "Annual Insurance Savings" }
      ]}
      clientContextTitle="Finding Out Too Late"
      clientContextIntro="A global logistics provider specializing in pharmaceuticals faced strict regulatory requirements for transporting temperature-sensitive vaccines and biologics. Even a minor temperature excursion could ruin an entire shipment — costing millions and endangering public health."
      clientContextBody="Their existing data loggers only provided retrospective data, telling them a shipment had spoiled only after it arrived. They needed real-time monitoring that could alert drivers and dispatchers to deviations immediately, allowing corrective action before spoilage occurred rather than a post-mortem once the damage was done."
      clientProfile={{
        industry: "Pharma Logistics Provider",
        companySize: "Global Cold-Chain Network",
        projectDuration: "End-to-End Rollout",
        additionalInfo: "5G / LTE-M Sensors",
        additionalLabel: "Connectivity"
      }}
      challengeTitle="Why Shipments Were at Risk"
      challenges={[
        {
          icon: Thermometer,
          title: "Retrospective data only",
          description: "Loggers revealed a temperature excursion after arrival — far too late to save the shipment."
        },
        {
          icon: Snowflake,
          title: "Zero tolerance for excursions",
          description: "A single deviation could ruin an entire load of vaccines or biologics, costing millions and risking public health."
        },
        {
          icon: BellRing,
          title: "No way to intervene in transit",
          description: "Drivers and dispatchers had no live signal to act on, so problems went unaddressed until it was already over."
        },
        {
          icon: FileCheck,
          title: "Manual compliance paperwork",
          description: "Audit reporting for FDA and EMA was manual and error-prone, adding risk and overhead to every shipment."
        }
      ]}
      approachTitle="A Control Tower for Every Shipment"
      approachIntro="NEXDYNE deployed an end-to-end IoT cold-chain platform with cellular-connected sensors and a centralized control tower — making product integrity a live, provable state instead of a hope."
      steps={[
        {
          step: "01",
          title: "Real-time telemetry",
          description: "Smart sensors tracked temperature, humidity, light exposure, and shock in real time, transmitting over 5G and LTE-M networks."
        },
        {
          step: "02",
          title: "Predict breaches before they happen",
          description: "ML models analyzed trends to forecast temperature breaches in advance — 'Container A will exceed 8°C in 30 minutes' — with time to act."
        },
        {
          step: "03",
          title: "Alert the right people instantly",
          description: "Drivers and dispatchers received advance warnings through the control tower, with enough lead time to intervene and protect the load."
        },
        {
          step: "04",
          title: "Automate the compliance trail",
          description: "The system generated audit-ready FDA and EMA reports automatically, eliminating manual paperwork and data-entry errors."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Snowflake,
          value: "90%",
          label: "Less product spoilage",
          detail: "Advance warning gave crews time to intervene"
        },
        {
          icon: ShieldCheck,
          value: "100%",
          label: "Compliance visibility",
          detail: "Through automated FDA and EMA audit reports"
        },
        {
          icon: DollarSign,
          value: "$5M",
          label: "Annual insurance savings",
          detail: "As a documented integrity record cut risk premiums"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Improving Fleet Maintenance with Digital Twins",
          metric: "20%",
          label: "higher availability",
          link: "/case-studies/airline-maintenance-analytics",
          image: "/images/industries/aero-rocket.jpg"
        },
        {
          title: "Automating Content Creation with GenAI",
          metric: "70%",
          label: "faster post-production",
          link: "/case-studies/media-content-production",
          image: "/images/industries/tech-datacenter.jpg"
        }
      ]}
      ctaTitle="Ready to know your shipment is safe every second?"
      ctaDescription="Let's talk about what a real-time cold chain could protect across your network."
    />
  );
}
