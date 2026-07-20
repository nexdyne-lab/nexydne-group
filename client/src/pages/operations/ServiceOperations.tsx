
import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function ServiceOperations() {
  return (
    <CapabilityHubTemplate
      hubName="Service Operations"
      slug="operations/service-operations"
      heroSubtitle="Optimize service delivery and customer experience. Transform your service operations to drive efficiency, quality, and lasting customer relationships."
      heroImage="/images/capabilities/cap-data-bars.jpg"
      experienceStats={[
        { number: "100+", label: "Service operations transformations across industries" },
        { number: "25-40%", label: "Typical improvement in service delivery efficiency" },
        { number: "30-50%", label: "Increase in customer satisfaction scores" },
        { number: "Omnichannel", label: "Field, contact center, and digital service models" },
      ]}
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
        { slug: "insurance-claims-automation", title: "Settling straightforward claims in hours, not weeks", industry: "Insurance", metric: "60%", image: "/images/cases/insurance-claims-automation-hero.jpg" },
        { slug: "healthcare-revenue-cycle", title: "Recovering revenue the system had already earned", industry: "Healthcare", metric: "45% fewer rejected claims", image: "/case-healthcare-team.5797392b.jpg" },
        { slug: "agentic-ai-service-resolution", title: "Resolving service requests end to end with AI agents", industry: "Financial Services", metric: "60%", image: "/images/cases/agentic-ai-service-resolution-hero.jpg" },
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
