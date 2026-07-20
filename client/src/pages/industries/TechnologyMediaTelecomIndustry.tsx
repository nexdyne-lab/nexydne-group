//   Placeholders below are plausible-but-unverified directional figures inferred from the existing prose context;
//   do NOT publish until practice-lead confirms.

import IndustryDetailTemplate from "@/components/IndustryDetailTemplate";

export default function TechnologyMediaTelecomIndustry() {
  return (
    <IndustryDetailTemplate
      industry="Technology, Media & Telecommunications"
      slug="technology-media-telecom"
      heroSubtitle="We help technology, media, and telecom leaders win the convergence — accelerating product velocity, modernizing networks, and building the data and AI capabilities needed to compete at the pace the next cycle is going to demand."
      heroImage="/images/industries2/technology-media-telecom-hero.jpg"
      perspectiveImage="/images/industries2/technology-media-telecom-pov.jpg"
      quoteImage="/images/industries/tech-glasses.jpg"
      heroFocal="62% 45%"
      povParagraphs={[
        "Technology, media, and telecom are converging in ways that create both opportunity and threat. Streaming has reshaped entertainment. 5G is enabling new use cases. AI is rewriting product economics across every category. Companies that harness these forces will define the next decade; those that do not will see margin and relevance compress.",
        "We partner with TMT companies to build the capabilities required to win in this environment. For tech companies, we help accelerate product velocity, scale go-to-market, and build operational excellence at growth-stage pace. For media companies, we help navigate the shift to digital, build direct audience relationships, and operate at the unit economics streaming actually allows.",
        "Our teams bring deep industry experience combined with cutting-edge technical capabilities. We understand the realities — rapid technology cycles, complex partner ecosystems, regulated network operations — and we bring the engineering and operating skills required to translate strategy into shipped product."
      ]}
      challenges={[
        {
          title: "Product velocity vs. operating maturity",
          body: "Hyper-growth companies hit a wall where engineering, sales ops, and finance must mature without killing the culture that built them."
        },
        {
          title: "Network modernization economics",
          body: "5G, fiber, and edge investment must translate into commercial models that justify the capital — most operators are still searching."
        },
        {
          title: "Audience and ad-tech rewiring",
          body: "Privacy rules and signal loss are forcing media to rebuild ad-tech; first-party data, clean rooms, and modern measurement are the new core."
        },
        {
          title: "AI as a product, not a feature",
          body: "Generative AI is rewriting TMT roadmaps; leaders treat AI as a product line with its own talent and economics, not a checkbox."
        }
      ]}
      capabilities={[
        {
          name: "Strategy & Growth",
          href: "/industries/technology-media-telecom/strategy-growth",
          blurb: "Product, pricing, and go-to-market strategies that turn TMT convergence into commercial advantage."
        },
        {
          name: "Data Transformation",
          href: "/industries/technology-media-telecom/data-transformation",
          blurb: "Unify product, customer, and network data into one platform for modern AI across the TMT stack."
        },
        {
          name: "Customer Intelligence",
          href: "/industries/technology-media-telecom/customer-intelligence",
          blurb: "Engineer audience, subscriber, and enterprise-customer experiences with the personalization TMT economics require."
        },
        {
          name: "Operations Excellence",
          href: "/industries/technology-media-telecom/operations-excellence",
          blurb: "Modernize network, content, and back-office operations with AI automation that protects margin and speeds product velocity."
        }
      ]}
      experienceStats={[
        {number: "Top 5", label: "US carriers served"},
        {number: "80+", label: "TMT engagements delivered"},
        {number: "40%", label: "Average churn reduction on retention programs"},
        {number: "12 mo", label: "Average TMT engagement length"}
      ]}
      povQuote={{
        text: "TMT leaders who win the AI cycle are the ones who treat AI as a product line — with its own roadmap, its own infrastructure, and its own P&L — not as a feature to be added to whatever ships next.",
        author: "Technology, Media & Telecommunications Practice",
        role: "NexDyne Consulting Group"
      }}
      featuredCases={[
        {
          slug: "media-streaming-launch",
          title: "Launching a streaming service that won 750K subscribers",
          industry: "Technology, Media & Telecom",
          metric: "750K",
          image: "/images/industries/tech-datacenter.jpg"
        },
        {
          slug: "tech-engineering-transformation",
          title: "Tripling a software company's release speed",
          industry: "Technology, Media & Telecom",
          metric: "3x",
          image: "/images/capabilities/cap-conference-data.jpg"
        },
        {
          slug: "telecom-customer-experience",
          title: "Cutting a regional carrier's churn by 40%",
          industry: "Technology, Media & Telecom",
          metric: "40%",
          image: "/images/cases/telecom-customer-experience-hero.jpg"
        }
      ]}
    />
  );
}
