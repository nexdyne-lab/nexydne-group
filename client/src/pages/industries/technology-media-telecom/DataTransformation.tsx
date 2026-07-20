import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  {
    slug: "media-streaming-launch",
    title: "Launching a streaming service that won 750K subscribers",
    industry: "Technology, Media & Telecom",
    metric: "750K",
    image: "/images/industries/tech-datacenter.jpg",
  },
  {
    slug: "tech-engineering-transformation",
    title: "Tripling a software company's release speed",
    industry: "Technology, Media & Telecom",
    metric: "3x",
    image: "/images/capabilities/cap-conference-data.jpg",
  },
  {
    slug: "telecom-customer-experience",
    title: "Cutting a regional carrier's churn by 40%",
    industry: "Technology, Media & Telecom",
    metric: "40%",
    image: "/images/cases/telecom-customer-experience-hero.jpg",
  },
];

const related = [
  { name: "Strategy & Growth", href: "/industries/technology-media-telecom/strategy-growth" },
  { name: "Customer Intelligence", href: "/industries/technology-media-telecom/customer-intelligence" },
  { name: "Operations Excellence", href: "/industries/technology-media-telecom/operations-excellence" },
];

export default function TechnologyMediaTelecomDataTransformation() {
  return (
    <IndustryCapabilityTemplate
      industry="Technology, Media & Telecom"
      industrySlug="technology-media-telecom"
      capability="Data Transformation"
      capabilitySlug="data-transformation"
      heroSubtitle="Few industries generate data at the volume and velocity that TMT does — network telemetry, session and usage records, content and viewing events, set-top and app signals. Most of it lands in a warehouse hours late and never becomes a decision. We help carriers, platforms, and media companies build the real-time data foundation that turns that firehose into network intelligence, personalization, and AI."
      heroImage="/images/industries/tech-datacenter.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "You have the most data of anyone. The question is whether it moves at the speed of the network.",
        image: "/images/data-abstract.jpg",
        paragraphs: [
          "A carrier or streaming platform sees billions of events a day — CDR and usage records, RAN and core telemetry, content and playback events, app and set-top signals. But that data is scattered across OSS, BSS, ad-tech, and content stacks that were never designed to talk to each other, and by the time it reaches a report the moment to act on it has passed. The result is a network you cannot optimize in real time, a subscriber you cannot personalize for, and AI initiatives that stall for want of a trustworthy foundation.",
          "We build the platform that fixes the plumbing. We unify network, usage, and content data into one real-time foundation, engineer the streaming pipelines that make it current instead of stale, and put the governance and privacy controls in place that a regulated, consent-bound business requires. That foundation is what makes everything downstream possible — AIOps on the network, recommendation on the content, and models the whole business can actually trust.",
        ],
      }}
      offeringsHeading="How we build data transformation for TMT."
      offeringsIntro="Each capability is a working system, delivered by the team that will help you run it."
      offerings={[
        {
          title: "Data Strategy",
          description:
            "Set the roadmap that connects network, usage, and content data to the decisions — capex, churn, monetization — it is supposed to inform.",
          href: "/solutions/data-strategy",
        },
        {
          title: "Data Platform",
          description:
            "Stand up the real-time platform that unifies OSS, BSS, ad-tech, and content data into one foundation the whole business can build on.",
          href: "/solutions/data-platform",
        },
        {
          title: "Data Engineering",
          description:
            "Engineer the streaming pipelines that keep telemetry, session, and viewing events current — measured in seconds, not overnight batches.",
          href: "/solutions/data-engineering",
        },
        {
          title: "Data Governance",
          description:
            "Put the consent, lineage, and privacy controls in place that subscriber and viewing data demand under GDPR, CCPA, and telecom regulation.",
          href: "/solutions/data-governance",
        },
        {
          title: "Data Visualization",
          description:
            "Give network, product, and content teams live views of usage, quality, and engagement instead of week-old dashboards.",
          href: "/solutions/data-visualization",
        },
        {
          title: "Data Solutions",
          description:
            "Ship the ML foundation and data products — churn signals, network anomaly detection, content propensity — that turn the platform into outcomes.",
          href: "/solutions/data-solutions",
        },
      ]}
      stats={[
        { number: "10x", label: "faster data availability, from overnight batch to near-real-time" },
        { number: "60%+", label: "reduction in engineering time to launch a new data or ML use case" },
        { number: "Billions", label: "of daily network and usage events unified into one platform" },
      ]}
      casesHeading="Data transformation, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Technology, Media & Telecom leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Data Transformation practice",
        href: "/capabilities/data-transformation",
      }}
      cta={{
        heading: "Turn the network firehose into decisions.",
        body: "Tell us where the data breaks down — a stalled AI initiative, telemetry you cannot act on in time, a governance gap. Our TMT data team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
