// TODO: David — confirm Technology, Media & Telecommunications-specific Experience & Impact numbers with practice lead before publish.
//   Placeholders below are plausible-but-unverified directional figures inferred from the existing prose context;
//   do NOT publish until practice-lead confirms.
// TODO: David — confirm practice-lead name + title for the POV pull quote attribution before publish.

import IndustryDetailTemplate from "@/components/IndustryDetailTemplate";

export default function TechnologyMediaTelecomIndustry() {
  return (
    <IndustryDetailTemplate
      industry="Technology, Media & Telecommunications"
      slug="technology-media-telecom"
      heroSubtitle="We help technology, media, and telecom leaders win the convergence — accelerating product velocity, modernizing networks, and building the data and AI capabilities needed to compete at the pace the next cycle is going to demand."
      heroImage="/hero-ai-brain.738a6c59.png"
      povParagraphs={[
        "Technology, media, and telecom are converging in ways that create both opportunity and threat. Streaming has reshaped entertainment. 5G is enabling new use cases. AI is rewriting product economics across every category. Companies that harness these forces will define the next decade; those that do not will see margin and relevance compress.",
        "We partner with TMT companies to build the capabilities required to win in this environment. For tech companies, we help accelerate product velocity, scale go-to-market, and build operational excellence at growth-stage pace. For media companies, we help navigate the shift to digital, build direct audience relationships, and operate at the unit economics streaming actually allows.",
        "Our teams bring deep industry experience combined with cutting-edge technical capabilities. We understand the realities — rapid technology cycles, complex partner ecosystems, regulated network operations — and we bring the engineering and operating skills required to translate strategy into shipped product."
      ]}
      challenges={[
        {
          title: "Product velocity vs. operating maturity",
          body: "Hyper-growth companies eventually hit the wall where engineering velocity, sales operations, and finance need to mature without killing the culture that got them there. The transition is rarely managed gracefully without help."
        },
        {
          title: "Network modernization economics",
          body: "5G, fiber, and edge investments need to translate into commercial models — enterprise services, fixed-wireless access, and bundled experiences — that justify the capital. Most operators are still searching for that model."
        },
        {
          title: "Audience and ad-tech rewiring",
          body: "Privacy regulation, signal loss, and identity fragmentation are forcing media companies to rebuild audience and ad-tech infrastructure. First-party data, clean rooms, and modern measurement are the new core."
        },
        {
          title: "AI as a product, not a feature",
          body: "Generative AI is rewriting product roadmaps across TMT. The leaders are treating AI as a product line in its own right — with its own talent, infrastructure, and economics — not as a marketing checkbox."
        }
      ]}
      capabilities={[
        {
          name: "Strategy & Growth",
          href: "/capabilities/strategy-growth",
          blurb: "Develop product, pricing, and go-to-market strategies that turn TMT convergence into commercial advantage."
        },
        {
          name: "Data Transformation",
          href: "/capabilities/data-transformation",
          blurb: "Unify product, customer, and network data into a single platform that supports modern AI use cases across the TMT stack."
        },
        {
          name: "Customer Intelligence",
          href: "/capabilities/customer-intelligence",
          blurb: "Engineer the audience, subscriber, and enterprise-customer experience with the personalization and journey analytics modern TMT economics require."
        },
        {
          name: "Operations Excellence",
          href: "/capabilities/operations-excellence",
          blurb: "Modernize network, content, and back-office operations with AI-powered automation that protects margin while accelerating product velocity."
        }
      ]}
      experienceStats={[
        // TODO: confirm with practice lead before publish.
        {number: "Top 5", label: "US carriers served"},
        {number: "80+", label: "TMT engagements delivered"},
        {number: "$12B+", label: "In TMT revenue impacted across engagements"},
        {number: "12 mo", label: "Average TMT engagement length"}
      ]}
      povQuote={{
        // TODO: confirm practice-lead name + title before publish.
        text: "TMT leaders who win the AI cycle are the ones who treat AI as a product line — with its own roadmap, its own infrastructure, and its own P&L — not as a feature to be added to whatever ships next.",
        author: "Daniel Pham",
        role: "Partner, Technology, Media & Telecommunications Practice"
      }}
      featuredCases={[
        {
          slug: "consulting-knowledge-management",
          title: "Transforming knowledge management for a global consulting firm",
          industry: "Professional Services",
          metric: "3x",
          image: "/case-strategy-consulting.dfdd1294.jpg"
        },
        {
          slug: "fintech-payment-automation",
          title: "Building a scalable payment processing system for a fintech startup",
          industry: "Financial Services",
          metric: "100K+",
          image: "/case-financial-advisor.7bb94f0c.jpg"
        },
        {
          slug: "legal-document-intelligence",
          title: "Transforming legal research with AI-powered document intelligence",
          industry: "Professional Services",
          metric: "70%",
          image: "/case-legal-team.2f84fc95.jpg"
        }
      ]}
    />
  );
}
