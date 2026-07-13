
import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function DigitalTwins() {
  return (
    <CapabilityHubTemplate
      hubName="Digital Twins"
      slug="digital-twins"
      heroSubtitle="Create virtual replicas of physical assets, processes, and systems — to simulate, predict, and optimize performance in real time, and test scenarios before you commit them to the real world."
      heroImage="/images/capabilities/cap-dome-blue.jpg"
      heroFocal="55% 50%"
      experienceStats={[
        { number: "75+", label: "Digital twin deployments delivered" },
        { number: "30%", label: "Average asset utilization improvement" },
        { number: "40%", label: "Reduction in physical prototyping cycles" },
        { number: "10-month", label: "Typical engagement length to live twin" },
      ]}
      ambitions={[
        {
          title: "Simulate before you build",
          description:
            "Test designs, layouts, and operating decisions in a virtual model before committing capital. Catch the expensive mistakes in software, not on the shop floor.",
        },
        {
          title: "Test scenarios without real-world risk",
          description:
            "Stress test what happens when demand spikes, a supplier fails, or a line goes down — and pre-stage the response, instead of figuring it out under pressure.",
        },
        {
          title: "Mirror live operations in real time",
          description:
            "Stream sensor and system data into a living model so operators see what is happening, what is about to happen, and where to intervene first.",
        },
        {
          title: "Predict failures and quality drift",
          description:
            "Layer machine learning on top of physics-based models to flag the assets, lines, or fleets that are about to underperform — early enough to act.",
        },
        {
          title: "Optimize design and operating choices",
          description:
            "Use the twin as a decision sandbox: tune set-points, sequencing, and resource allocation in simulation, then push the winning configuration to production.",
        },
        {
          title: "Make complex systems legible to leaders",
          description:
            "Give executives, engineers, and front-line teams a shared visual model of the asset — so trade-offs, root causes, and improvement plans are debated against one source of truth.",
        },
      ]}
      ambitionsCTAText="Talk to us about your Digital Twins ambition →"
      howWeCanHelp={[
        {
          title: "Digital Twin Strategy",
          description:
            "Define your digital twin vision and identify high-value use cases. Assess readiness, select technologies, and create a phased implementation roadmap.",
          href: "/capabilities/artificial-intelligence/digital-twins/strategy",
        },
        {
          title: "Model Development",
          description:
            "Build accurate virtual replicas of your physical assets using physics-based modeling, machine learning, and real-time data integration.",
          href: "/capabilities/artificial-intelligence/digital-twins/model-development",
        },
        {
          title: "IoT Integration",
          description:
            "Connect sensors and data sources to feed real-time information into your digital twin. Ensure data quality, reliability, and security.",
          href: "/capabilities/artificial-intelligence/digital-twins/iot-integration",
        },
        {
          title: "Simulation & Analysis",
          description:
            "Run what-if scenarios, stress tests, and optimization algorithms on your digital twin to identify improvements without real-world risk.",
          href: "/capabilities/artificial-intelligence/digital-twins/simulation-analysis",
        },
        {
          title: "Predictive Capabilities",
          description:
            "Apply AI and machine learning to predict equipment failures, quality issues, and performance degradation before they occur.",
          href: "/capabilities/artificial-intelligence/digital-twins/predictive-capabilities",
        },
        {
          title: "Visualization & Dashboards",
          description:
            "Create intuitive 3D visualizations and dashboards that make digital twin insights accessible to operators, engineers, and executives.",
          href: "/capabilities/artificial-intelligence/digital-twins/visualization",
        },
      ]}
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Start with the asset",
          body: "We begin by deeply understanding your physical assets — their behavior, failure modes, and optimization opportunities. That domain knowledge is essential for building digital twins anyone will trust.",
        },
        {
          step: "02",
          title: "Build for fidelity",
          body: "We create digital twins that accurately represent real-world behavior. Our models combine physics-based simulation with machine learning to capture complex dynamics, not just averages.",
        },
        {
          step: "03",
          title: "Enable continuous learning",
          body: "Digital twins improve over time. We design systems that continuously learn from real-world data, refining predictions and recommendations as conditions and equipment change.",
        },
      ]}
      featuredCases={[
        { slug: "digital-twin-predictive-operations", title: "Cutting unplanned downtime with a digital twin", industry: "Manufacturing", metric: "45%", image: "/images/industries/mfg-robot-arm.jpg" },
        { slug: "industrial-connected-products", title: "Building a $30M services business on installed machines", industry: "Manufacturing", metric: "$30M", image: "/images/capabilities/cap-battery-factory.jpg" },
        { slug: "automotive-connected-vehicle", title: "Turning connected-vehicle data into fewer warranty claims", industry: "Automotive", metric: "30%", image: "/images/industries/tech-datacenter.jpg" },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/internet-of-things", name: "Internet of Things" },
        { href: "/capabilities/artificial-intelligence/predictive-analytics", name: "Predictive Analytics" },
        { href: "/capabilities/data-transformation", name: "Data Transformation" },
      ]}
      ctaLeadName="Talk to our Digital Twins lead"
    />
  );
}

