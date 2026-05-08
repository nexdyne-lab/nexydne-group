// TODO: confirm Next-Gen Operations refactor content with IoT practice lead before publish.
// TODO: confirm hero copy with content lead.
// TODO: confirm Experience & Impact stats with practice lead before publish.
// TODO: confirm outcomes list with practice lead before publish.
// TODO: confirm CTA lead name + role + photo placeholder before publish.

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
      heroImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop"
      experienceStats={[
        // TODO: confirm with practice lead before publish
        { number: "30%", label: "Reduction in unplanned downtime" },
        // TODO: confirm with practice lead before publish
        { number: "25%", label: "Lift in overall equipment effectiveness" },
        // TODO: confirm with practice lead before publish
        { number: "20%", label: "Cut in operating cost across the line" },
        // TODO: confirm with practice lead before publish
        { number: "Real-time", label: "Visibility from sensor to scorecard" },
      ]}
      challenge="Traditional operations are often reactive, relying on historical data and manual checks. That model leads to unplanned downtime, quality issues, inefficient resource allocation, and a leadership team flying with instruments that are always slightly behind the actual state of the line."
      opportunity="Next-Gen Operations leverages IoT sensors, edge computing, and AI to provide real-time visibility into every aspect of your production line. That visibility unlocks predictive maintenance, automated quality control, and dynamic scheduling — turning your factory and supply chain into a learning system that adapts faster than anyone in your category."
      approachPillars={[
        // TODO: confirm pillar copy with practice lead before publish
        {
          step: "01",
          title: "Instrument what matters",
          body: "We start by mapping the operational decisions that move the P&L — and instrument exactly the data needed to make those decisions in real time, not the data that is easiest to collect.",
        },
        // TODO: confirm pillar copy with practice lead before publish
        {
          step: "02",
          title: "Move intelligence to the edge",
          body: "We push compute and models to where the decisions happen — on the line, in the truck, in the warehouse — so latency, bandwidth, and resilience constraints stop holding the system back.",
        },
        // TODO: confirm pillar copy with practice lead before publish
        {
          step: "03",
          title: "Close the loop",
          body: "We connect the new signal back to the people and systems that act on it — schedulers, planners, maintenance, frontline operators — and lock in the operating routines that keep the gains compounding.",
        },
      ]}
      outcomes={[
        // TODO: confirm outcomes with practice lead before publish
        "Real-time visibility into the operations that matter most — yield, throughput, downtime, energy, safety — for plant leaders, operators, and the C-suite alike.",
        // TODO: confirm outcomes with practice lead before publish
        "Materially lower unplanned downtime through predictive maintenance models tied to actual sensor signal and failure history.",
        // TODO: confirm outcomes with practice lead before publish
        "Step-change quality improvements through automated, in-line inspection and tighter feedback to upstream process control.",
        // TODO: confirm outcomes with practice lead before publish
        "Dynamic scheduling and resource allocation that reacts to demand, supply, and constraints as they shift — not days or weeks later.",
        // TODO: confirm outcomes with practice lead before publish
        "Operating routines, dashboards, and KPIs adopted by frontline teams — not a tool that lives only on a corporate slide.",
        // TODO: confirm outcomes with practice lead before publish
        "Internal capability to run, extend, and govern the connected operations stack without permanent vendor dependency.",
      ]}
      featuredCases={[]}
      relatedServices={[
        { slug: "connected-products", name: "Connected Products", href: "/capabilities/internet-of-things/connected-products" },
        { slug: "iot-business-building", name: "IoT Business Building", href: "/capabilities/internet-of-things/iot-business-building" },
        { slug: "predictive-maintenance", name: "Predictive Maintenance", href: "/capabilities/artificial-intelligence/predictive-analytics/predictive-maintenance" },
      ]}
      // TODO: confirm CTA lead name + title + photo before publish
      ctaLeadName="Talk to our Internet of Things lead"
    />
  );
}
