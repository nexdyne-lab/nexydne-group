// TODO: David — confirm Service Operations experience & impact numbers with practice lead before publish.
// TODO: David — populate 2-3 thought-leadership insights for the Service Operations hub.
// TODO: confirm hero image asset — using fallback Unsplash URL until /images/service-operations-abstract.jpg lands.

import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function ServiceOperations() {
  return (
    <CapabilityHubTemplate
      hubName="Service Operations"
      slug="operations/service-operations"
      heroSubtitle="Optimize service delivery and customer experience. Transform your service operations to drive efficiency, quality, and lasting customer relationships."
      heroImage="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2400"
      experienceStats={[
        { number: "100+", label: "Service operations transformations across industries" },
        { number: "25-40%", label: "Typical improvement in service delivery efficiency" },
        { number: "30-50%", label: "Increase in customer satisfaction scores" },
        // TODO: confirm with practice lead before publish
        { number: "Omnichannel", label: "Field, contact center, and digital service models" },
      ]}
      // TODO: confirm ambition copy with practice lead before publish
      ambitions={[
        {
          title: "Lift first-contact resolution",
          description:
            "Re-design service journeys, agent tooling, and AI assist so customers get to 'done' on the first interaction — driving both satisfaction and lower cost-to-serve.",
        },
        {
          title: "Crush customer effort",
          description:
            "Identify and engineer out the friction points — repeat contacts, transfers, hold times — that destroy loyalty even when the issue is eventually resolved.",
        },
        {
          title: "Orchestrate omnichannel seamlessly",
          description:
            "Make voice, chat, messaging, email, and self-service feel like one conversation — with full context handed off between channels and agents.",
        },
        {
          title: "Deploy AI as a real teammate",
          description:
            "Move past chatbot hype to AI that actually deflects, assists, summarizes, and coaches — measurably lifting agent productivity and customer outcomes.",
        },
        {
          title: "Run field service with precision",
          description:
            "Optimize dispatching, routing, parts, and first-time fix with AI scheduling and connected technician tools — turning field service into a competitive moat.",
        },
        {
          title: "Treat service as a product",
          description:
            "Build a service org with product-management discipline — backlog, releases, metrics — instead of an endless cost-reduction project. The result: service that wins customers.",
        },
      ]}
      howWeCanHelp={[
        {
          title: "Service Delivery Optimization",
          description:
            "Streamline service processes to reduce cycle times, eliminate waste, and improve first-time resolution rates across all service channels.",
          href: "/capabilities/operations/service-operations/service-delivery-optimization",
        },
        {
          title: "Customer Experience Design",
          description:
            "Map customer journeys and design service experiences that exceed expectations, building loyalty and driving referrals.",
          href: "/capabilities/operations/service-operations/customer-experience-design",
        },
        {
          title: "Field Service Excellence",
          description:
            "Optimize field service operations including scheduling, routing, technician productivity, and mobile enablement.",
          href: "/capabilities/operations/service-operations/field-service-excellence",
        },
        {
          title: "Contact Center Transformation",
          description:
            "Redesign contact center operations to improve customer satisfaction, reduce costs, and enable omnichannel service delivery.",
          href: "/capabilities/operations/service-operations/contact-center-transformation",
        },
        {
          title: "Service Quality Management",
          description:
            "Implement quality frameworks, measurement systems, and continuous improvement processes that drive service excellence.",
          href: "/capabilities/operations/service-operations/service-quality-management",
        },
        {
          title: "Capacity & Workforce Planning",
          description:
            "Develop demand forecasting and workforce planning capabilities that ensure you have the right resources at the right time.",
          href: "/capabilities/operations/service-operations/capacity-workforce-planning",
        },
      ]}
      ambitionsCTAText="Talk to us about your Service Operations ambition →"
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Service design & customer journey mapping",
          body: "We analyze your customer journeys to identify pain points, moments of truth, and opportunities to exceed expectations — then design service processes that deliver.",
        },
        {
          step: "02",
          title: "Operating model & capacity optimization",
          body: "We design service delivery models that balance efficiency with quality, optimizing staffing, scheduling, and resource allocation to meet demand patterns.",
        },
        {
          step: "03",
          title: "Quality systems & performance management",
          body: "We implement quality frameworks, metrics, and feedback loops that drive continuous improvement and ensure consistent service delivery.",
        },
      ]}
      featuredCases={[
        {
          slug: "telehealth-platform",
          title: "Health System Launches Telehealth Platform at Scale",
          industry: "Healthcare · Operations",
          metric: "10x",
          image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80",
        },
        {
          slug: "healthcare-patient-engagement",
          title: "Healthcare Network Boosts Patient Engagement Through Digital Tools",
          industry: "Healthcare · Operations",
          metric: "48%",
          image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1600&q=80",
        },
        {
          slug: "insurance-claims-processing",
          title: "Insurer Cuts Claims Cycle Time and Improves Decision Accuracy",
          industry: "Insurance · Operations",
          metric: "60%",
          image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80",
        },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/strategy-corporate-finance", name: "Strategy & Corporate Finance" },
        { href: "/capabilities/business-building", name: "Business Building" },
        { href: "/capabilities/ai-technology-consulting", name: "AI Technology Consulting" },
      ]}
      ctaLeadName="Talk to our Service Operations lead"
    />
  );
}
