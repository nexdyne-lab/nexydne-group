import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function LogisticsColdChain() {
  return (
    <CaseStudyTemplate
      client="Pharma Logistics Firm"
      industry="Logistics · IoT"
      title="Pharma Logistics Firm Ensures Product Safety with IoT Cold Chain"
      subtitle="Real-time temperature monitoring and predictive alerts reduced spoilage by 90% for sensitive vaccine shipments, saving $5M annually in insurance costs."
      heroImage="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=1600&q=80"
      challenge={`A global logistics provider specializing in pharmaceuticals faced strict regulatory requirements for transporting temperature-sensitive vaccines and biologics. Even minor temperature excursions could ruin an entire shipment, costing millions and endangering public health. Their existing data loggers only provided retrospective data—telling them a shipment was spoiled only after it arrived.

They needed a real-time monitoring solution that could alert drivers and dispatchers to temperature deviations immediately, allowing for corrective action before spoilage occurred.`}
      solution={`NEXDYNE deployed an end-to-end IoT cold chain platform with cellular-connected sensors and a centralized control tower.

Real-time telemetry: Smart sensors tracked temperature, humidity, light exposure, and shock in real-time, transmitting data via 5G/LTE-M networks. Predictive alerts: ML algorithms analyzed trends to predict temperature breaches before they happened (e.g., "Container A will exceed 8°C in 30 minutes based on current ambient temperature"). Automated compliance: The system automatically generated audit-ready reports for FDA and EMA compliance, eliminating manual paperwork and data entry errors.`}
      impact={`The cold chain platform transformed product safety from a reactive to a proactive process. Spoilage dropped 90% as drivers and dispatchers received advance warning of temperature deviations with enough time to intervene. Regulatory compliance visibility reached 100% through automated FDA and EMA audit reports.

Annual insurance savings reached $5M as the documented track record of product integrity reduced risk premiums. The client moved from "hoping it arrives safely" to "knowing it's safe every second of the journey," enabling them to win contracts for the most critical life-saving product shipments.`}
      metrics={[
        { value: "90%", label: "Reduction in product spoilage" },
        { value: "100%", label: "Regulatory compliance visibility" },
        { value: "$5M", label: "Annual insurance savings" }
      ]}
      tags={["Logistics", "IoT", "Pharmaceutical", "Risk & Resilience"]}
      relatedCapability={{
        title: "Risk & Resilience",
        link: "/capabilities/risk-resilience"
      }}
    />
  );
}
