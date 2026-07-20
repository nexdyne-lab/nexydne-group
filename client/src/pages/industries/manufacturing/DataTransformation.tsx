import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  { slug: "automotive-smart-factory", title: "Lifting plant productivity by 40% at a vehicle maker", industry: "Manufacturing", metric: "40%", image: "/images/industries/mfg-robotics.jpg" },
  { slug: "semiconductor-quality-prediction", title: "Catching chip defects weeks before they appear", industry: "Manufacturing", metric: "92%", image: "/images/cases/semiconductor-quality-prediction-hero.jpg" },
  { slug: "industrial-connected-products", title: "Building a Recurring Services Business on Machines Already Sold", industry: "Manufacturing", metric: "2,700 machines on connected services", image: "/images/capabilities/cap-battery-factory.jpg" },
];

const related = [
  { name: "Operations Excellence", href: "/industries/manufacturing/operations-excellence" },
  { name: "Strategy & Growth", href: "/industries/manufacturing/strategy-growth" },
  { name: "Risk & Resilience", href: "/industries/manufacturing/risk-resilience" },
];

export default function ManufacturingDataTransformation() {
  return (
    <IndustryCapabilityTemplate
      industry="Manufacturing"
      industrySlug="manufacturing"
      capability="Data Transformation"
      capabilitySlug="data-transformation"
      heroSubtitle="Manufacturing data is split between the plant floor and the enterprise — OT and IT, MES and ERP, quality and supply chain — and the two rarely meet. We help manufacturers unify them into one governed data foundation: the base every AI use case, from predictive maintenance to digital twin, depends on."
      heroImage="/images/industries/tech-datacenter.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "OT and IT still don't talk. That's where the AI stalls.",
        image: "/images/data-abstract.jpg",
        paragraphs: [
          "Every manufacturing AI ambition — predictive maintenance, quality analytics, digital twin, autonomous planning — assumes a connected, governed data foundation that spans the plant and the enterprise. Almost no one has it. Machine data lives in the MES and historian, orders in the ERP, quality in a third system, and none of them share a definition of a part, a line, or a defect.",
          "We build the fabric that bridges OT and IT: a modern data platform, engineering and identity across machine and enterprise data, governance that holds up to audit, and the visualization that turns it into floor and plant decisions. Done once, it becomes the base every downstream use case draws on.",
        ],
      }}
      offeringsHeading="How we build the manufacturing data foundation."
      offeringsIntro="From strategy to a governed platform, each capability moves you toward one trusted view across OT and IT."
      offerings={[
        { title: "Data Strategy", description: "Define the data ambition, use-case roadmap, and operating model that tie the platform to real plant value.", href: "/solutions/data-strategy" },
        { title: "Data Platform", description: "Stand up the modern platform that unifies machine, quality, ERP, and supply-chain data at scale.", href: "/solutions/data-platform" },
        { title: "Data Engineering", description: "Build the pipelines and identity that turn OT and IT signals into one query-ready fabric.", href: "/solutions/data-engineering" },
        { title: "Data Governance", description: "Put the controls, lineage, and privacy in place so plant and enterprise data is trusted and audit-ready.", href: "/solutions/data-governance" },
        { title: "Data Visualization", description: "Turn the fabric into decisions with dashboards and self-serve analytics the floor and plant actually use.", href: "/solutions/data-visualization" },
        { title: "Data Solutions", description: "Deploy the accelerators and reusable components that get the first plant AI use cases live in months.", href: "/solutions/data-solutions" },
      ]}
      stats={[
        { number: "30%", label: "of transformations succeed — we build for that 30%" },
        { number: "1 fabric", label: "spanning OT and IT, plant and enterprise" },
        { number: "Months", label: "not years, to your first plant AI use case" },
      ]}
      casesHeading="Data transformation, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Manufacturing leaders."
      related={related}
      generalPractice={{ label: "Explore our firm-wide Data Transformation practice", href: "/capabilities/data-transformation" }}
      cta={{ heading: "Bridge OT and IT — then scale the AI.", body: "Tell us which use case keeps stalling on data — predictive maintenance, quality, digital twin. Our Manufacturing data team will read your note and come back within two business days with a concrete first move, not a sales pitch." }}
    />
  );
}
