// TODO: David — confirm Internet of Things experience & impact numbers with practice lead before publish.
// TODO: David — populate 2-3 thought-leadership insights for the IoT hub.

import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function IoT() {
  return (
    <CapabilityHubTemplate
      hubName="Internet of Things"
      slug="internet-of-things"
      heroSubtitle="Connect, monitor, and optimize your physical assets with intelligent IoT solutions — driving operational excellence, unlocking new business models, and turning sensor data into a daily decision input across the enterprise."
      // TODO: confirm hero image asset matches Internet of Things theme
      heroImage="/images/capabilities/cap-iot-network.jpg"
      heroFocal="50% 50%"
      experienceStats={[
        // TODO: confirm with practice lead before publish
        { number: "150+", label: "IoT deployments delivered" },
        // TODO: confirm with practice lead before publish
        { number: "10M+", label: "Connected devices under management" },
        // TODO: confirm with practice lead before publish
        { number: "45%", label: "Average unplanned downtime reduction" },
        // TODO: confirm with practice lead before publish
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
        {
          slug: "bank-process-automation",
          title: "How RPA eliminated 10,000+ hours of manual work at a major bank",
          industry: "Financial Services",
          metric: "10K+",
          image: "/case-banker-meeting.c53f3999.jpg",
        },
        {
          slug: "healthcare-data-analytics",
          title: "Unlocking healthcare insights with real-time data analytics",
          industry: "Healthcare",
          metric: "25%",
          image: "/case-healthcare-team.5797392b.jpg",
        },
        {
          slug: "hospital-clinical-workflow",
          title: "Optimizing clinical workflows to save 15 hours per physician weekly",
          industry: "Healthcare",
          metric: "15hrs",
          image: "/case-medical-collaboration.9602cc8c.jpg",
        },
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

