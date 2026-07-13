
import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function RiskResilience() {
  return (
    <CapabilityHubTemplate
      hubName="Risk & Resilience"
      slug="risk-resilience"
      heroSubtitle="Build organizational resilience with AI-powered risk management. Identify, assess, and mitigate risks before they impact your business — and design operations that bend, not break, when conditions shift."
      heroImage="/images/capabilities/cap-strategy-spheres.jpg"
      heroFocal="55% 50%"
      experienceStats={[
        { number: "100+", label: "Risk programs delivered across regulated industries" },
        { number: "50%", label: "Average reduction in undetected risk events" },
        { number: "30%", label: "Faster regulatory reporting cycle times" },
        { number: "70%", label: "average reduction in fraud and risk losses" },
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
          href: "/capabilities/artificial-intelligence/risk-resilience/risk-assessment-strategy",
        },
        {
          title: "Predictive Risk Analytics",
          description:
            "Deploy machine learning models that continuously monitor for emerging risks. Detect anomalies, predict potential incidents, and enable proactive intervention.",
          href: "/capabilities/artificial-intelligence/risk-resilience/predictive-risk-analytics",
        },
        {
          title: "Cyber Risk Management",
          description:
            "Protect your digital assets with AI-powered threat detection and response. Implement zero-trust architectures and continuous security monitoring.",
          href: "/capabilities/artificial-intelligence/risk-resilience/cyber-risk-management",
        },
        {
          title: "Supply Chain Resilience",
          description:
            "Build visibility across your supply network. Identify concentration risks, model disruption scenarios, and develop contingency strategies.",
          href: "/capabilities/artificial-intelligence/risk-resilience/supply-chain-resilience",
        },
        {
          title: "Business Continuity Planning",
          description:
            "Design and test recovery plans for critical business functions. Ensure your organization can maintain operations through any disruption.",
          href: "/capabilities/artificial-intelligence/risk-resilience/business-continuity",
        },
        {
          title: "Regulatory Compliance",
          description:
            "Navigate complex regulatory requirements with AI-assisted compliance monitoring. Automate reporting and ensure continuous adherence to evolving standards.",
          href: "/capabilities/artificial-intelligence/risk-resilience/regulatory-compliance",
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
        { slug: "financial-fraud-detection", title: "Catching card fraud before the money moves", industry: "Financial Services", metric: "73%", image: "/images/industries/fin-monitors.jpg" },
        { slug: "insurance-claims-automation", title: "Settling straightforward claims in hours, not weeks", industry: "Insurance", metric: "60%", image: "/case-insurance-claims.399e5d4b.jpg" },
        { slug: "insurance-ai-underwriting", title: "Quoting commercial business in a day, not a week", industry: "Insurance", metric: "40%", image: "/images/industries/fin-handshake-city.jpg" },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/artificial-intelligence/predictive-analytics", name: "Predictive Analytics" },
        { href: "/capabilities/artificial-intelligence/process-automation", name: "Process Automation" },
        { href: "/capabilities/data-transformation", name: "Data Transformation" },
      ]}
      ctaLeadName="Talk to our Risk & Resilience lead"
    />
  );
}

