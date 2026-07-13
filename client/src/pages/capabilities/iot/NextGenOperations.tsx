
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function NextGenOperations() {
  return (
    <ServiceDetailTemplate
      hubName="Internet of Things"
      hubSlug="internet-of-things"
      hubHref="/capabilities/internet-of-things"
      serviceName="Next-Gen Operations"
      serviceSlug="next-gen-operations"
      heroSubtitle="Digitize your operations to achieve step-change improvements in quality, productivity, and safety. We help you build intelligent supply chains and manufacturing systems that adapt in real-time."
      heroImage="/images/capabilities/cap-iot-network.jpg"
      heroFocal="55% 50%"
      experienceStats={[
        { number: "30%", label: "Reduction in unplanned downtime" },
        { number: "25%", label: "Lift in overall equipment effectiveness" },
        { number: "20%", label: "Cut in operating cost across the line" },
        { number: "Real-time", label: "Visibility from sensor to scorecard" },
      ]}
      challenge="Traditional operations are often reactive, relying on historical data and manual checks. That model leads to unplanned downtime, quality issues, inefficient resource allocation, and a leadership team flying with instruments that are always slightly behind the actual state of the line."
      opportunity="Next-Gen Operations leverages IoT sensors, edge computing, and AI to provide real-time visibility into every aspect of your production line. That visibility unlocks predictive maintenance, automated quality control, and dynamic scheduling — turning your factory and supply chain into a learning system that adapts faster than anyone in your category."
      approachPillars={[
        {
          step: "01",
          title: "Instrument what matters",
          body: "We start by mapping the operational decisions that move the P&L — and instrument exactly the data needed to make those decisions in real time, not the data that is easiest to collect.",
        },
        {
          step: "02",
          title: "Move intelligence to the edge",
          body: "We push compute and models to where the decisions happen — on the line, in the truck, in the warehouse — so latency, bandwidth, and resilience constraints stop holding the system back.",
        },
        {
          step: "03",
          title: "Close the loop",
          body: "We connect the new signal back to the people and systems that act on it — schedulers, planners, maintenance, frontline operators — and lock in the operating routines that keep the gains compounding.",
        },
      ]}
      outcomes={[
        "Real-time visibility into the operations that matter most — yield, throughput, downtime, energy, safety — for plant leaders, operators, and the C-suite alike.",
        "Materially lower unplanned downtime through predictive maintenance models tied to actual sensor signal and failure history.",
        "Step-change quality improvements through automated, in-line inspection and tighter feedback to upstream process control.",
        "Dynamic scheduling and resource allocation that reacts to demand, supply, and constraints as they shift — not days or weeks later.",
        "Operating routines, dashboards, and KPIs adopted by frontline teams — not a tool that lives only on a corporate slide.",
        "Internal capability to run, extend, and govern the connected operations stack without permanent vendor dependency.",
      ]}
      featuredCases={[]}
      relatedServices={[
        { slug: "connected-products", name: "Connected Products", href: "/capabilities/internet-of-things/connected-products" },
        { slug: "iot-business-building", name: "IoT Business Building", href: "/capabilities/internet-of-things/iot-business-building" },
        { slug: "predictive-maintenance", name: "Predictive Maintenance", href: "/capabilities/artificial-intelligence/predictive-analytics/predictive-maintenance" },
      ]}
      ctaLeadName="Talk to our Internet of Things lead"
    />
  );
}
