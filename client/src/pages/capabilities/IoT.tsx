
import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function IoT() {
  return (
    <CapabilityHubTemplate
      hubName="Internet of Things"
      slug="internet-of-things"
      heroSubtitle="Connect, monitor, and optimize your physical assets with intelligent IoT solutions — driving operational excellence, unlocking new business models, and turning sensor data into a daily decision input across the enterprise."
      heroImage="/images/capabilities/cap-iot-network.jpg"
      heroFocal="50% 50%"
      experienceStats={[
        { number: "150+", label: "IoT deployments delivered" },
        { number: "10M+", label: "Connected devices under management" },
        { number: "45%", label: "Average unplanned downtime reduction" },
        { number: "9-month", label: "Average time to first connected outcome" },
      ]}
      ambitions={[
        {
          title: "Connect physical assets at scale",
          description:
            "Bring sensors, equipment, and edge devices online securely — across factories, fleets, buildings, and field assets — without ripping and replacing what already works.",
        },
        {
          title: "Move from reactive to predictive operations",
          description:
            "Use real-time signals to anticipate failures, quality issues, and bottlenecks before they hit your P&L, instead of reacting after the fact.",
        },
        {
          title: "Launch new connected product lines",
          description:
            "Embed intelligence into products to open recurring-revenue services, deepen customer relationships, and capture data that improves every release.",
        },
        {
          title: "Build resilient, real-time supply chains",
          description:
            "Track conditions, location, and performance end-to-end so you can re-route, re-prioritize, and re-plan as conditions change — not after the next review cycle.",
        },
        {
          title: "Turn sensor data into business decisions",
          description:
            "Wire IoT telemetry into the dashboards, workflows, and AI models your operators and leaders already use, so insight reaches the point of decision.",
        },
        {
          title: "Secure and govern your connected estate",
          description:
            "Stand up the device management, identity, and security operating model that keeps a growing fleet of connected things trustworthy as you scale.",
        },
      ]}
      ambitionsCTAText="Talk to us about your Internet of Things ambition →"
      howWeCanHelp={[
        {
          title: "Connected Products",
          description:
            "Transform standalone devices into intelligent, connected ecosystems. We design, build, and launch smart products that deliver continuous value and shift you from sell-and-forget to ongoing engagement.",
          href: "/capabilities/internet-of-things/connected-products",
        },
        {
          title: "Next-Gen Operations",
          description:
            "Digitize operations to achieve step-change improvements in quality, productivity, and safety. We help you build intelligent supply chains and manufacturing systems that adapt in real time.",
          href: "/capabilities/internet-of-things/next-gen-operations",
        },
        {
          title: "IoT Business Building",
          description:
            "Leverage IoT to launch entirely new businesses. We help you identify market gaps, validate concepts, and scale ventures that disrupt industries with the speed of a startup and the resources of a market leader.",
          href: "/capabilities/internet-of-things/iot-business-building",
        },
      ]}
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Start with outcomes",
          body: "We focus on business value, not technology for its own sake. Every IoT initiative is tied to measurable outcomes — reducing downtime, improving quality, or enabling new services — before the first sensor is provisioned.",
        },
        {
          step: "02",
          title: "Build for scale",
          body: "We design IoT architectures that grow with your business. Our solutions handle thousands to millions of devices while maintaining the performance, security, and manageability your operations team can sustain.",
        },
        {
          step: "03",
          title: "Enable continuous improvement",
          body: "IoT generates continuous streams of data. We build the feedback loops that turn that data into ongoing optimization, so connected operations get smarter every quarter rather than stagnating after launch.",
        },
      ]}
      featuredCases={[
        { slug: "industrial-connected-products", title: "Building a $30M services business on installed machines", industry: "Manufacturing", metric: "$30M", image: "/images/capabilities/cap-battery-factory.jpg" },
        { slug: "automotive-connected-vehicle", title: "Turning connected-vehicle data into fewer warranty claims", industry: "Automotive", metric: "30%", image: "/images/cases/automotive-connected-vehicle-hero.jpg" },
        { slug: "digital-twin-predictive-operations", title: "Cutting unplanned downtime with a digital twin", industry: "Manufacturing", metric: "45%", image: "/images/industries/mfg-robot-arm.jpg" },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/artificial-intelligence/digital-twins", name: "Digital Twins" },
        { href: "/capabilities/artificial-intelligence/predictive-analytics", name: "Predictive Analytics" },
        { href: "/capabilities/artificial-intelligence/process-automation", name: "Process Automation" },
      ]}
      ctaLeadName="Talk to our Internet of Things lead"
    />
  );
}

