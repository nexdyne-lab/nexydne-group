// TODO: David — confirm Consumer Products-specific Experience & Impact numbers with practice lead before publish.
//   Placeholders below are plausible-but-unverified directional figures inferred from the existing prose context;
//   do NOT publish until practice-lead confirms.
// TODO: David — confirm practice-lead name + title for the POV pull quote attribution before publish.

import IndustryDetailTemplate from "@/components/IndustryDetailTemplate";

export default function ConsumerProductsIndustry() {
  return (
    <IndustryDetailTemplate
      industry="Consumer Products"
      slug="consumer-products"
      heroSubtitle="We help CPG and consumer-products leaders prove how data, AI, and a more direct customer relationship create value — before they are scaled across brand, channel, and supply chain — so growth and margin move in the same direction."
      heroImage="/case-strategy-consulting.dfdd1294.jpg"
      povParagraphs={[
        "We begin our consumer-products engagements by partnering with you to define, test, and prove how data, AI, digital supply chain, and a more direct customer relationship will create value — before embedding those capabilities across the operating model. The point is to compound proof, not pilots.",
        "The consumer-products landscape is being reshaped by shifting consumer behaviors, the rise of direct-to-consumer channels, and the explosion of data from connected products and digital touchpoints. Companies that harness these forces will build lasting advantage; the rest will see margin and share drift to nimbler challengers.",
        "Our practice combines deep industry expertise with cutting-edge technology capabilities. We help brands navigate the complexities of omnichannel commerce, build direct consumer relationships, and create the data infrastructure needed to deliver personalized experiences at scale — without losing the operating discipline that protects gross margin."
      ]}
      challenges={[
        {
          title: "Margin and revenue management",
          body: "Input-cost inflation and retailer pressure are squeezing list-to-net economics. Modern revenue-growth management, dynamic pricing, and trade-spend analytics now sit on the critical path to protecting margin."
        },
        {
          title: "Omnichannel and DTC tension",
          body: "Direct relationships are valuable — but they have to be built without breaking the retailer relationships that still drive most volume. Channel strategy and unified consumer data are how leading brands manage that tension."
        },
        {
          title: "Supply-chain volatility",
          body: "Demand whiplash, freight cost, and SKU proliferation are stressing planning systems built for a more stable era. AI-powered S&OP and integrated business planning are how leaders are restoring forecast confidence."
        },
        {
          title: "Sustainability expectations",
          body: "Consumers, retailers, and regulators are all asking harder questions about sourcing, packaging, and emissions. Brands need auditable data wired into operating decisions — not just commitments on the website."
        }
      ]}
      capabilities={[
        {
          name: "Customer Intelligence",
          href: "/capabilities/customer-intelligence",
          blurb: "Build the consumer-data foundation, journey analytics, and AI-powered personalization that translate audience attention into measurable revenue."
        },
        {
          name: "Pricing & Revenue Management",
          href: "/capabilities/pricing-revenue",
          blurb: "Engineer pricing, promotion, and trade-spend decisions with the data and tooling needed to protect list-to-net in a high-volatility environment."
        },
        {
          name: "Operations Excellence",
          href: "/capabilities/operations-excellence",
          blurb: "Modernize planning, manufacturing, and logistics with AI-driven S&OP, connected-worker tools, and the supply-chain visibility today's volatility demands."
        },
        {
          name: "Data Transformation",
          href: "/capabilities/data-transformation",
          blurb: "Unify consumer, commerce, and supply-chain data into a single fabric that supports the next generation of CPG AI use cases at scale."
        }
      ]}
      experienceStats={[
        // TODO: confirm with practice lead before publish.
        {number: "Top 10", label: "Global CPG companies served"},
        {number: "80+", label: "CPG transformation engagements delivered"},
        {number: "$1.5B", label: "In trade-spend optimized for clients"},
        {number: "18 mo", label: "Average CPG engagement length"}
      ]}
      povQuote={{
        // TODO: confirm practice-lead name + title before publish.
        text: "The CPG winners of the next cycle treat their first-party consumer data as a product portfolio in its own right — owned, measured, and reinvested in — not as a marketing tactic that resets every quarter.",
        author: "Elena Garcia",
        role: "Partner, Consumer Products Practice"
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
          slug: "bank-process-automation",
          title: "How RPA eliminated 10,000+ hours of manual work at a major bank",
          industry: "Financial Services",
          metric: "10K+ hrs",
          image: "/case-banker-meeting.c53f3999.jpg"
        },
        {
          slug: "accounting-audit-automation",
          title: "How audit automation helped an accounting firm scale 2x without hiring",
          industry: "Professional Services",
          metric: "2x",
          image: "/case-accountants-audit.1c87a151.jpg"
        }
      ]}
    />
  );
}
