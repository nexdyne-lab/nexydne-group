import SolutionCat6Template from "@/components/SolutionCat6Template";

export default function DigitalProductDevelopment() {
  return (
    <SolutionCat6Template
      eyebrow="SOLUTION · BUSINESS GROWTH · DIGITAL PRODUCT DEVELOPMENT"
      title="Digital Product Development"
      subtitle="Most digital products fail because nobody pressure-tested the opportunity. We size the bet, write the brief, ship an instrumented MVP, and run the validation cycle that turns a hypothesis into a product team that owns it."
      heroImage="/images/digital-venture-abstract.jpg"
      heroFocal="60% 50%"
      seoTitle="Digital Product Development"
      seoDescription="Build digital products from concept to scale — opportunity validation, product definition, instrumented MVP, validated iteration, and the operating model that owns the product into year two."
      canonical="/solutions/business-growth/digital-product-development"
      perspective={{
        heading:
          "Stop building features. Start validating the product hypothesis under live load.",
        image: "/images/product-strategy-abstract.jpg",
        paragraphs: [
          "We get called in when a digital product has been in market for a year and the team cannot answer the foundational question: is anyone using this for the reason we said they would? Most product programs we recover did not collapse on the build — they collapsed on the brief. The opportunity was sized on optimism, the success metrics were never named, and the MVP shipped without instrumentation, so by month nine nobody could tell whether to invest more or kill the line.",
          "The leaders we work with run product development as a sequence of validated bets. Opportunity, brief, MVP, validation, iteration, scale — each phase has a written exit criterion, and the program does not progress until the prior phase clears it. This is the difference between a product team that compounds and one that ships features into a void.",
        ],
      }}
      deliverHeading="A five-phase approach from opportunity to commercialized product."
      deliverIntro="Each phase is timeboxed and produces a tangible artifact. Most engagements run twenty to thirty weeks from discovery to a validated product running under a permanent operating team."
      phases={[
        {
          name: "Opportunity discovery",
          description:
            "Most digital products fail because nobody pressure-tested the opportunity. We map the customer problem, the current alternatives, the willingness-to-pay, and the unit economics before a single screen is designed. The output is a sized opportunity with named buyers, named jobs-to-be-done, and a written disqualification list — not a pitch deck for the executive committee.",
        },
        {
          name: "Product definition",
          description:
            "From the validated opportunity we write the product brief — target user, primary jobs, success metrics, anti-features. The roadmap is sequenced into a thin first slice plus the validated bets that follow. Engineering, design, and commercial leadership sign on the same brief, so the team stops debating scope in week six.",
        },
        {
          name: "MVP build",
          description:
            "The first slice ships against the brief — narrow, opinionated, instrumented. We design for measurement from line one: every primary job has an event, every assumption has a metric. The MVP exists to test the product hypothesis under live load, not to look like a finished product.",
        },
        {
          name: "Validation and iteration",
          description:
            "We run the validation framework against the live MVP — quantitative usage, qualitative interviews, willingness-to-pay tests, retention curves — and convert the learnings into a written iteration plan. Bets that earn their spot get more investment; the ones that do not get killed in writing, not deferred indefinitely.",
        },
        {
          name: "Scale and commercialization",
          description:
            "Once the product hypothesis is validated, we shift the program into commercialization mode: pricing, packaging, distribution, support, and the operating model that owns the product into year two. The handoff is an operating product team, not a consultant team that dissolves on go-live.",
        },
      ]}
      getHeading="Six concrete artifacts every engagement leaves behind."
      deliverables={[
        {
          name: "Opportunity validation",
          description:
            "Sized opportunity memo covering customer problem, current alternatives, willingness-to-pay, and unit economics — with the disqualification list and the go / no-go recommendation.",
        },
        {
          name: "Product brief and roadmap",
          description:
            "Written product brief — target user, primary jobs, success metrics, anti-features — and the sequenced roadmap from MVP through the next four quarters of validated bets.",
        },
        {
          name: "MVP",
          description:
            "Production-grade first slice of the product — narrow, opinionated, instrumented for measurement — shipped to live users under controlled exposure.",
        },
        {
          name: "Validation framework and learnings",
          description:
            "Documented validation framework covering quantitative usage, qualitative interviews, and willingness-to-pay tests — with the written learnings memo that drives the next investment cycle.",
        },
        {
          name: "Scaling plan",
          description:
            "Commercialization plan covering pricing, packaging, distribution, support, and the metrics review cadence that takes the product from validated MVP to compounding revenue.",
        },
        {
          name: "Product operating model",
          description:
            "Org design, RACI, governance cadence, and the engineering-design-commercial integration model that owns the product into year two and beyond.",
        },
      ]}
      outcome={{
        heading:
          "Programs that ship instrumented MVPs against written exit criteria reach a validated product hypothesis 50 to 70 percent faster — and kill the wrong bets in writing instead of letting them quietly absorb three more quarters.",
        body: "The economics work because every bet has a written exit criterion before it gets investment. We do not extend doomed roadmaps — we structure the program so the data, not the politics, decides which line keeps compounding.",
      }}
      casesHeading="When the brief decides the bet, the product team compounds."
      cases={[
        {
          industry: "B2B SaaS",
          title:
            "New product line clears 1,200 paying accounts inside three quarters of MVP launch",
          description:
            "A vertical SaaS operator wanted to extend into an adjacent workflow but had killed the same idea twice in prior years. We rebuilt the opportunity case, redrew the brief around a narrower job-to-be-done, and shipped an instrumented MVP in fourteen weeks. By the third quarter post-launch the line was carrying 1,200 paying accounts and contributing the largest growth percentage in the portfolio.",
          link: "/cases/saas-adjacent-product-mvp",
        },
        {
          industry: "Financial Services",
          title:
            "Digital advisory product validates retention curve in 90 days, kills two of four planned features",
          description:
            "A wealth manager was preparing to invest heavily in a digital advisory product. We compressed the discovery into eight weeks and shipped the MVP under controlled exposure. Inside ninety days the validation framework had confirmed the retention curve on the core experience and disqualified two of the four planned features — saving roughly nine months of build time the original plan would have spent on them.",
          link: "/cases/wealth-digital-advisory-mvp",
        },
      ]}
      siblingsHeading="Sibling offerings inside this cluster."
      siblings={[
        {
          title: "Native Apps",
          link: "/solutions/business-growth/native-apps",
        },
        {
          title: "Ecommerce Strategy & Launch",
          link: "/solutions/business-growth/ecommerce-strategy-launch",
        },
        {
          title: "Conversion Optimization",
          link: "/solutions/business-growth/conversion-optimization",
        },
        {
          title: "Pricing & Monetization Strategy",
          link: "/solutions/business-growth/pricing-monetization-strategy",
        },
        {
          title: "Go-to-Market Acceleration",
          link: "/solutions/business-growth/go-to-market-acceleration",
        },
      ]}
      cta={{
        heading:
          "Bring our digital product team into your next product-bet conversation.",
        body: "We work with leaders who want their next product bet validated against the data, not the meeting calendar. Digital product development is how that conversation begins.",
        industries: [
          { value: "manufacturing", label: "Manufacturing" },
          { value: "professional-services", label: "Professional Services" },
          { value: "technology", label: "Technology" },
          { value: "healthcare", label: "Healthcare" },
          { value: "financial-services", label: "Financial Services" },
          { value: "retail", label: "Retail & Consumer" },
          { value: "other", label: "Other" },
        ],
      }}
    />
  );
}
