import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export function EnergyGridSecurity() {
  return (
    <CaseStudyTemplate
      client="Major Energy Utility"
      industry="Energy · Grid Resilience"
      title="Energy Grid Prevents Blackouts with Predictive Maintenance"
      subtitle="AI-driven monitoring system identified 95% of potential ignition sources before they caused fires, protecting communities and infrastructure."
      heroImage="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1600&q=80"
      challenge={`A major energy utility faced increasing challenges from aging infrastructure and extreme weather events. Wildfires caused by equipment failure were a massive liability and safety risk. Traditional inspection methods—manual patrols and helicopter surveys—were slow, expensive, and often missed subtle signs of degradation until it was too late.

The utility needed a way to monitor thousands of miles of transmission lines in real-time, identifying potential failure points like vegetation encroachment, conductor damage, and insulator flashovers before they led to catastrophic events.`}
      solution={`NEXDYNE deployed a comprehensive grid security and predictive maintenance platform. We integrated data from smart meters, SCADA systems, weather stations, and satellite imagery into a unified data lake.

Computer vision models analyzed drone and satellite imagery to detect vegetation growth within right-of-way zones and identify damaged hardware with 98% accuracy. Machine learning algorithms monitored electrical waveforms to detect "high impedance" faults—often precursors to fires—that traditional protection systems missed. A digital twin of the grid simulated stress under various weather conditions, allowing operators to preemptively de-energize high-risk lines during storms while maintaining service elsewhere.`}
      impact={`The system has fundamentally changed how the utility operates—moving from reactive outage response to proactive risk prevention. By identifying potential fire risks weeks in advance, the platform has undoubtedly saved lives and property.

95% of potential ignition sources are now identified before they cause fires. Grid outage duration decreased 40% as maintenance teams can prioritize interventions based on AI risk scores. Annual maintenance savings of $12M were achieved by optimizing inspection schedules and deploying crews to the highest-risk locations first.`}
      metrics={[
        { value: "95%", label: "Ignition sources identified" },
        { value: "40%", label: "Reduction in outage duration" },
        { value: "$12M", label: "Annual maintenance savings" }
      ]}
      quote={{
        text: "This system has fundamentally changed how we operate. We're no longer reacting to outages; we're preventing them. The ability to see potential fire risks weeks in advance has undoubtedly saved lives and property.",
        author: "Director of Grid Operations",
        role: "Major Energy Utility"
      }}
      tags={["IoT", "Predictive Maintenance", "Energy", "Risk & Resilience"]}
      relatedCapability={{
        title: "Risk & Resilience",
        link: "/capabilities/risk-and-resilience"
      }}
    />
  );
}

export default EnergyGridSecurity;
