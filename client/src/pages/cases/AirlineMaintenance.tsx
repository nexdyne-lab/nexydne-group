import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function AirlineMaintenance() {
  return (
    <CaseStudyTemplate
      client="Global Airline"
      industry="Aviation · Predictive Maintenance"
      title="Global Airline Improves Maintenance Planning with Digital Twins"
      subtitle="Unified data platform and digital twin simulation optimized spare parts allocation and maintenance intervals, increasing fleet availability."
      heroImage="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80"
      challenge={`A global airline struggled with optimizing its aircraft maintenance schedules. Balancing safety requirements, flight schedules, and hangar availability was a complex logistical puzzle. Often, aircraft were grounded longer than necessary due to unavailable spare parts or inefficient labor allocation.

The airline needed a way to predict maintenance needs more accurately and simulate the impact of different scheduling strategies on fleet availability and operational costs.`}
      solution={`NEXDYNE developed a comprehensive digital maintenance history platform and a fleet digital twin.

We integrated data from flight logs, sensor telemetry, and maintenance records into a single source of truth for every aircraft in the fleet. A simulation model allowed planners to test "what-if" scenarios—for example, "What happens to fleet availability if we extend the interval for Check C by 50 flight hours?" or "How does stocking more spare engines at Hub A vs. Hub B affect downtime?"

ML algorithms predicted the demand for specific spare parts at different hubs based on flight routes and aircraft age, ensuring parts were available when needed.`}
      impact={`The impact on fleet operations was immediate. By reducing the complexity of maintenance planning and providing actionable simulations, the client saw dramatic improvements in efficiency.

Maintenance costs dropped 15% as spare parts allocation became precise rather than reactive. Aircraft availability increased 20%, and AOG (Aircraft on Ground) time was reduced by 30%, protecting revenue and improving schedule reliability.`}
      metrics={[
        { value: "15%", label: "Reduction in maintenance costs" },
        { value: "20%", label: "Increase in aircraft availability" },
        { value: "30%", label: "Reduction in AOG time" }
      ]}
      quote={{
        text: "The digital twin allows us to run experiments without risking operations. We've optimized our spare parts inventory and maintenance intervals in ways we never thought possible, saving millions while keeping our fleet in the air.",
        author: "VP of Engineering & Maintenance",
        role: "Global Airline"
      }}
      tags={["Digital Twins", "Predictive Maintenance", "Aviation", "IoT"]}
      relatedCapability={{
        title: "Digital Twins",
        link: "/capabilities/digital-twins"
      }}
    />
  );
}
