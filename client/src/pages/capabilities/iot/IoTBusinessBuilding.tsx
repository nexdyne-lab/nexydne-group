// TODO: confirm IoT Business Building refactor content with IoT practice lead before publish.
// TODO: confirm hero copy with content lead.
// TODO: confirm Experience & Impact stats with practice lead before publish.
// TODO: confirm outcomes list with practice lead before publish.
// TODO: confirm CTA lead name + role + photo placeholder before publish.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function IoTBusinessBuilding() {
  return (
    <ServiceDetailTemplate
      hubName="Internet of Things"
      hubSlug="internet-of-things"
      hubHref="/capabilities/internet-of-things"
      serviceName="IoT Business Building"
      serviceSlug="iot-business-building"
      heroSubtitle="Leverage IoT to launch entirely new businesses. We help you identify market gaps, validate concepts, and scale new ventures that disrupt industries and drive sustainable growth."
      heroImage="https://images.unsplash.com/photo-1488229297570-58520851e868?q=80&w=2669&auto=format&fit=crop"
      experienceStats={[
        // TODO: confirm with practice lead before publish
        { number: "12+", label: "IoT ventures launched alongside enterprise clients" },
        // TODO: confirm with practice lead before publish
        { number: "9 mo", label: "Median time from concept to first revenue" },
        // TODO: confirm with practice lead before publish
        { number: "5x", label: "Faster than the typical internal innovation track" },
        // TODO: confirm with practice lead before publish
        { number: "70%", label: "Of ventures still operating after year two" },
      ]}
      challenge="Most enterprises know they need new growth engines, but the muscle for launching ventures lives outside the core operating model. The familiar playbooks reward optimization of the existing P&L and quietly punish the speed, ambiguity, and learning curves that new IoT-enabled businesses require."
      opportunity="IoT is not just about efficiency — it is a catalyst for entirely new business models, from product-as-a-service to data monetization to platform plays. Our business-building approach pairs the speed of a startup with the assets, distribution, and customer relationships of a market leader, so new ventures can be launched with measured risk and a credible path to scale."
      approachPillars={[
        // TODO: confirm pillar copy with practice lead before publish
        {
          step: "01",
          title: "Identify the right venture",
          body: "We map adjacent markets, customer pain, and the data and assets you already own to find venture concepts where you have a structural edge — not just an interesting slide.",
        },
        // TODO: confirm pillar copy with practice lead before publish
        {
          step: "02",
          title: "Validate fast, kill faster",
          body: "We run hard-edged customer, technical, and unit economic experiments in weeks — and use the results to either kill the concept early or sharpen it before any large investment.",
        },
        // TODO: confirm pillar copy with practice lead before publish
        {
          step: "03",
          title: "Build, launch, and scale",
          body: "We stand up the venture as an operating company — product, GTM, finance, governance — with the people and structure required to grow at startup speed inside the parent company shell.",
        },
      ]}
      outcomes={[
        // TODO: confirm outcomes with practice lead before publish
        "A short list of validated IoT venture concepts where the parent company has a defensible structural edge, scored on size, fit, and feasibility.",
        // TODO: confirm outcomes with practice lead before publish
        "A first venture in market within nine to twelve months, with paying customers and a working unit economic model.",
        // TODO: confirm outcomes with practice lead before publish
        "A clear separation between core-business reporting and venture metrics, so the new business is not strangled by legacy KPIs.",
        // TODO: confirm outcomes with practice lead before publish
        "A working operating model — governance, talent, capital allocation — that lets the venture move at startup pace without endangering the core.",
        // TODO: confirm outcomes with practice lead before publish
        "Reusable patterns, playbooks, and capabilities that make the second and third venture cheaper, faster, and lower-risk than the first.",
        // TODO: confirm outcomes with practice lead before publish
        "Internal venture-building muscle that outlives any single advisor relationship.",
      ]}
      featuredCases={[]}
      relatedServices={[
        { slug: "connected-products", name: "Connected Products", href: "/capabilities/internet-of-things/connected-products" },
        { slug: "next-gen-operations", name: "Next-Gen Operations", href: "/capabilities/internet-of-things/next-gen-operations" },
        { slug: "digital-twins", name: "Digital Twins", href: "/capabilities/artificial-intelligence/digital-twins" },
      ]}
      // TODO: confirm CTA lead name + title + photo before publish
      ctaLeadName="Talk to our Internet of Things lead"
    />
  );
}
