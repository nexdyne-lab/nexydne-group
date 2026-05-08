// TODO: David — confirm Risk & Resilience experience & impact numbers with practice lead before publish.
// TODO: David — populate 2-3 thought-leadership insights for the Risk & Resilience hub.

import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function RiskResilience() {
  return (
    <CapabilityHubTemplate
      hubName="Risk & Resilience"
      slug="risk-and-resilience"
      heroSubtitle="Build organizational resilience with AI-powered risk management. Identify, assess, and mitigate risks before they impact your business — and design operations that bend, not break, when conditions shift."
      // TODO: confirm hero image asset matches Risk & Resilience theme
      heroImage="/case-insurance-office.f039a4a1.jpg"
      experienceStats={[
        // TODO: confirm with practice lead before publish
        { number: "100+", label: "Risk programs delivered across regulated industries" },
        // TODO: confirm with practice lead before publish
        { number: "50%", label: "Average reduction in undetected risk events" },
        // TODO: confirm with practice lead before publish
        { number: "30%", label: "Faster regulatory reporting cycle times" },
        // TODO: confirm with practice lead before publish
        { number: "$80M+", label: "Estimated client losses avoided per year" },
      ]}
      ambitions={[
        {
          title: "Detect emerging risks early",
          description:
            "See market, cyber, supply, and operational risks while they’re still small and cheap to fix — instead of finding them in a post-incident review.",
        },
        {
          title: "Build resilience into operations",
          description:
            "Design processes, supplier networks, and IT estates that can absorb shocks and keep delivering — not collapse the next time a single dependency fails.",
        },
        {
          title: "Strengthen cyber and digital trust",
          description:
            "Shift from periodic checks to continuous, AI-assisted monitoring across identities, endpoints, and applications — so threats are caught and contained quickly.",
        },
        {
          title: "Stress-test the supply chain",
          description:
            "Map concentration, geographic, and tier-2 risk exposure end-to-end, model disruption scenarios, and have credible alternatives lined up before you need them.",
        },
        {
          title: "Plan for continuity, not just compliance",
          description:
            "Make business continuity a living capability — tested, measured, and rehearsed — instead of a binder updated once a year for the auditors.",
        },
        {
          title: "Stay ahead of regulators",
          description:
            "Automate evidence, monitoring, and reporting so compliance scales with your business — and new regulations slot in instead of triggering panic projects.",
        },
      ]}
      ambitionsCTAText="Talk to us about your Risk & Resilience ambition →"
      howWeCanHelp={[
        {
          title: "Risk Assessment & Strategy",
          description:
            "Comprehensive evaluation of your risk landscape using AI-powered analysis. Identify vulnerabilities, quantify exposures, and develop prioritized mitigation strategies.",
          href: "/capabilities/risk-and-resilience/risk-assessment-strategy",
        },
        {
          title: "Predictive Risk Analytics",
          description:
            "Deploy machine learning models that continuously monitor for emerging risks. Detect anomalies, predict potential incidents, and enable proactive intervention.",
          href: "/capabilities/risk-and-resilience/predictive-risk-analytics",
        },
        {
          title: "Cyber Risk Management",
          description:
            "Protect your digital assets with AI-powered threat detection and response. Implement zero-trust architectures and continuous security monitoring.",
          href: "/capabilities/risk-and-resilience/cyber-risk-management",
        },
        {
          title: "Supply Chain Resilience",
          description:
            "Build visibility across your supply network. Identify concentration risks, model disruption scenarios, and develop contingency strategies.",
          href: "/capabilities/risk-and-resilience/supply-chain-resilience",
        },
        {
          title: "Business Continuity Planning",
          description:
            "Design and test recovery plans for critical business functions. Ensure your organization can maintain operations through any disruption.",
          href: "/capabilities/risk-and-resilience/business-continuity",
        },
        {
          title: "Regulatory Compliance",
          description:
            "Navigate complex regulatory requirements with AI-assisted compliance monitoring. Automate reporting and ensure continuous adherence to evolving standards.",
          href: "/capabilities/risk-and-resilience/regulatory-compliance",
        },
      ]}
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Anticipate threats",
          body: "We deploy AI systems that continuously scan for emerging risks — from market signals to cyber threats to regulatory changes. Early warning is what makes proactive response possible.",
        },
        {
          step: "02",
          title: "Build adaptive capacity",
          body: "Resilience isn’t just about having a plan — it’s about building organizational capabilities to respond to the unexpected. We help you develop flexible processes and empowered teams.",
        },
        {
          step: "03",
          title: "Learn and improve",
          body: "Every incident is a learning opportunity. We help you build feedback loops that capture lessons learned and continuously strengthen your risk posture, quarter over quarter.",
        },
      ]}
      featuredCases={[
        {
          slug: "insurance-claims-processing",
          title: "Accelerating insurance claims processing with intelligent automation",
          industry: "Financial Services",
          metric: "85%",
          image: "/case-insurance-office.f039a4a1.jpg",
        },
        {
          slug: "bank-process-automation",
          title: "How RPA eliminated 10,000+ hours of manual work at a major bank",
          industry: "Financial Services",
          metric: "10K+",
          image: "/case-banker-meeting.c53f3999.jpg",
        },
        {
          slug: "accounting-audit-automation",
          title: "How audit automation helped an accounting firm scale 2x without hiring",
          industry: "Professional Services",
          metric: "2x",
          image: "/case-accountants-audit.1c87a151.jpg",
        },
      ]}
      relatedCapabilities={[
        { slug: "predictive-analytics", name: "Predictive Analytics" },
        { slug: "process-automation", name: "Process Automation" },
        { slug: "data-transformation", name: "Data Transformation" },
      ]}
      ctaLeadName="Talk to our Risk & Resilience lead"
    />
  );
}
