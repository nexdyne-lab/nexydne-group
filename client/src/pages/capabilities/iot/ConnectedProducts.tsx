
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function ConnectedProducts() {
  return (
    <ServiceDetailTemplate
      hubName="Internet of Things"
      hubSlug="internet-of-things"
      hubHref="/capabilities/internet-of-things"
      serviceName="Connected Products"
      serviceSlug="connected-products"
      heroSubtitle="Transform standalone devices into intelligent, connected ecosystems. We help you design, build, and launch smart products that deliver continuous value and deepen customer relationships."
      heroImage="/images/capabilities/cap-iot-network.jpg"
      heroFocal="55% 50%"
      experienceStats={[
        { number: "30%", label: "Increase in customer lifetime value" },
        { number: "2x", label: "Faster product iteration cycles" },
        { number: "45%", label: "Improvement in NPS scores" },
        { number: "100%", label: "Real-time usage visibility" },
      ]}
      challenge="In the age of IoT, the product is just the beginning. Most product organizations are still optimizing the sell-and-forget transaction model — winning a one-time sale, then losing visibility into how customers actually use what they bought. That model leaves the most valuable signal on the table and caps the lifetime value of every relationship."
      opportunity="The real value lives in the data the product generates and the services it enables. By embedding intelligence into your products, you can predict maintenance needs, personalize user experiences, and unlock entirely new revenue streams through subscription-based services — shifting from a sell-and-forget model to a continuous engagement model that compounds over the life of the customer."
      approachPillars={[
        {
          step: "01",
          title: "Reimagine the product as a platform",
          body: "We start with the use case, not the chipset. Where does the connected product unlock new revenue, deepen the relationship, or remove friction your customers feel today?",
        },
        {
          step: "02",
          title: "Engineer for trust at scale",
          body: "We design the device, edge, cloud, and security layers as one system — so reliability, latency, and data protection are built in, not bolted on.",
        },
        {
          step: "03",
          title: "Operate, learn, evolve",
          body: "We instrument every release, capture real usage data, and run the experiment loop that turns a connected product into a living service portfolio.",
        },
      ]}
      outcomes={[
        "A connected product portfolio strategy with quantified revenue impact and a phased build plan leadership has signed off on.",
        "A first connected product release in market within two to three quarters, with telemetry and a feedback loop running from day one.",
        "Recurring-revenue services attached to the hardware that lift customer lifetime value materially over the legacy transaction baseline.",
        "Real-time visibility into how products are used in the field — a data asset your product, marketing, and service teams all draw on.",
        "A security and privacy posture documented well enough to satisfy enterprise buyers, regulators, and partner ecosystems.",
        "Internal product, firmware, and platform teams capable of running and extending the connected portfolio without permanent vendor dependency.",
      ]}
      featuredCases={[]}
      relatedServices={[
        { slug: "next-gen-operations", name: "Next-Gen Operations", href: "/capabilities/internet-of-things/next-gen-operations" },
        { slug: "iot-business-building", name: "IoT Business Building", href: "/capabilities/internet-of-things/iot-business-building" },
        { slug: "digital-twins", name: "Digital Twins", href: "/capabilities/artificial-intelligence/digital-twins" },
      ]}
      ctaLeadName="Talk to our Internet of Things lead"
    />
  );
}
