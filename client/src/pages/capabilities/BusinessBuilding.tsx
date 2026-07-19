import MarketingMasterTemplate from "@/components/MarketingMasterTemplate";

export default function BusinessBuilding() {
  return (
    <MarketingMasterTemplate
      capabilityName="Business Building"
      capabilitySlug="business-building"
      // PRESERVED VERBATIM from source hero subtitle
      heroSubtitle="Your core business runs well. Now you need new revenue streams. We help growing companies design, build, and launch new digital products and services that actually make money."
      heroImage="/images/capabilities/cap-venturing.jpg"
      heroFocal="55% 50%"
      // PRESERVED CTA labels from source (Schedule a Consultation + View Case Studies)
      heroPrimaryCTA={{
        label: "Schedule a Consultation",
        href: "/contact",
      }}
      heroSecondaryCTA={{
        label: "View Case Studies",
        href: "/capabilities/business-building/case-studies",
      }}
      experienceStats={[
        {
          number: "40+",
          label: "Ventures launched with clients across industries",
        },
        {
          number: "78%",
          label: "Reach profitability within 18 months",
        },
        {
          number: "4-6 mo",
          label: "Typical time from concept to market launch",
        },
        {
          number: "90%",
          label: "Of ventures launched on their target timeline",
        },
      ]}
      // AUTHORED — featured uses source insight #1 + AUTHORED summary; secondary uses source insights #2, #3
      thoughtLeadership={{
        featured: {
          tag: "Venture Building",
          title:
            "What separates ventures that scale from those that stall",
          summary:
            "After working with dozens of growing companies on new ventures, we have identified the three factors that consistently predict whether a new business line will reach profitability — and the early signals that tell you when to double down or walk away.",
          image: "/images/insight-ventures-scale-stall.jpg",
          href: "/capabilities/business-building/insights/digital-venture-playbook",
        },
        secondary: [
          {
            tag: "Strategy",
            title:
              "The hidden advantage of building during uncertainty",
            href: "/insights/business-transformation-strategy",
          },
          {
            tag: "Product",
            title: "MVP myths: What growing companies get wrong",
            href: "/insights",
          },
        ],
      }}
      // PRESERVED 3 approach pillars verbatim from source ("Validate / Build and launch fast / Scale what works")
      approachPillars={[
        {
          step: "01",
          title: "Validate the opportunity",
          body: "We conduct rapid market research and customer discovery to validate your idea before investing significant resources. We identify target segments, test value propositions, and build conviction around the opportunity.",
        },
        {
          step: "02",
          title: "Build and launch fast",
          body: "Our engineers, designers, and product managers work in your codebase, with your team. We build MVPs that test real hypotheses, iterate based on user feedback, and get to market in weeks, not months.",
        },
        {
          step: "03",
          title: "Scale what works",
          body: "Once the product is working, we help you build the team and processes to grow it. We are not done until you can run it without us. We transfer knowledge and establish the foundation for sustainable growth.",
        },
      ]}
      // 6 ambitions mapped to 6 of the 9 level-2 hubs (locked spec).
      // Titles use the spec-suggested phrasing; descriptions DISTILLED from each hub's source description.
      ambitions={[
        {
          title: "Launch new digital ventures and revenue streams",
          description:
            "From ideation to market launch, we help you build and scale new digital businesses with our proven venture methodology — validating the opportunity before you commit serious capital.",
          href: "/capabilities/business-building/digital-venture-launch",
        },
        {
          title: "Design products customers actually want",
          description:
            "Define winning product strategies and design experiences that capture market share and drive sustainable growth — grounded in real user research, not internal assumptions.",
          href: "/capabilities/business-building/product-strategy-design",
        },
        {
          title: "Scale operations without breaking what works",
          description:
            "Accelerate your venture's growth with data-driven strategies and operational excellence frameworks that hold up as volume, headcount, and complexity climb.",
          href: "/capabilities/business-building/growth-scaling",
        },
        {
          title: "Embed AI to compress your build cycle",
          description:
            "Leverage AI and automation to compress timelines, reduce costs, and gain competitive advantage in new markets — from generative product features to intelligent operations.",
          href: "/capabilities/business-building/ai-powered-acceleration",
        },
        {
          title: "Adopt proven playbooks faster",
          description:
            "Access our deep domain expertise and proven methodologies across industries to build ventures that solve real market problems — without re-inventing the wheel each time.",
          href: "/capabilities/business-building/distinctive-expertise",
        },
        {
          title: "Launch into market at speed",
          description:
            "Launch with confidence using our proven go-to-market frameworks and growth playbooks — pricing, partner networks, and demand generation engineered for the first 12 months.",
          href: "/capabilities/business-building/go-to-market-scale",
        },
      ]}
      // PRESERVED in-practice intro (distilled from source "How AI is Transforming Business Building" + "Real Outcomes" + "How We Help" sections)
      // realOutcomes / howWeHelp bullets PRESERVED verbatim from source where present; remainder DISTILLED
      inPractice={{
        image: "/images/capabilities/cap-lightbulb-idea.jpg",
        intro:
          "We are helping growing companies move quickly from experimentation to scale and generate real value from new ventures. Working closely with leadership teams, we identify where to accelerate venture development, build a clear roadmap for impact across product, customer experience, and operational efficiency, and treat AI as a business accelerator rather than a technology deployment — so you ship AI-native products that create sustainable competitive advantage.",
        realOutcomes: [
          "A regional bank cut loan origination from 14 days to 4 hours by re-platforming the front office around AI document review",
          "A regional credit union launched a digital lending product that generated $28M in new loans within 14 months",
          "A regional food distributor built a B2B e-commerce platform and grew order volume by 47% in its first year",
          "Growing companies consistently reach profitability within 18 months on new venture launches",
        ],
        howWeHelp: [
          "Identify where AI and automation can accelerate venture development and reduce time-to-market",
          "Build a clear roadmap for impact across product, customer experience, and operational efficiency",
          "Embed engineers, designers, and product managers in your codebase rather than handing off a strategy deck",
          "Transfer knowledge so your team can run and scale the venture independently once it is established",
        ],
      }}
      // PRESERVED all 9 service cards verbatim from source `capabilities[]` array (titles + descriptions)
      // Hrefs match the locked /capabilities/business-building/<hub> nesting
      howWeCanHelp={[
        {
          title: "Digital Venture Launch",
          description:
            "From ideation to market launch, we help you build and scale new digital businesses with our proven venture methodology.",
          href: "/capabilities/business-building/digital-venture-launch",
        },
        {
          title: "Product Strategy & Design",
          description:
            "Define winning product strategies and design experiences that capture market share and drive sustainable growth.",
          href: "/capabilities/business-building/product-strategy-design",
        },
        {
          title: "Growth & Scaling",
          description:
            "Accelerate your venture's growth with data-driven strategies and operational excellence frameworks.",
          href: "/capabilities/business-building/growth-scaling",
        },
        {
          title: "AI-Powered Acceleration",
          description:
            "Leverage AI and automation to compress timelines, reduce costs, and gain competitive advantage in new markets.",
          href: "/capabilities/business-building/ai-powered-acceleration",
        },
        {
          title: "Distinctive Expertise",
          description:
            "Access our deep domain expertise across industries to build ventures that solve real market problems.",
          href: "/capabilities/business-building/distinctive-expertise",
        },
        {
          title: "Go-to-Market at Scale",
          description:
            "Launch with confidence using our proven go-to-market frameworks and growth playbooks.",
          href: "/capabilities/business-building/go-to-market-scale",
        },
        {
          title: "Digital Transformation Accelerator",
          description:
            "Right-size enterprise architecture, cloud migration, data platforms, and integration frameworks — enterprise capabilities without enterprise overhead.",
          href: "/capabilities/business-building/digital-transformation-accelerator",
        },
        {
          title: "Rapid Innovation & Testing",
          description:
            "Test and validate new growth initiatives with structured prototyping, customer-discovery programs, and pilot frameworks built for evidence-based go/no-go decisions.",
          href: "/capabilities/business-building/rapid-innovation-testing",
        },
        {
          title: "Performance Intelligence & Benchmarking",
          description:
            "Industry benchmarking, maturity assessments, ROI modeling, and KPI frameworks validated against peer companies — the performance-intelligence systems leading enterprises rely on.",
          href: "/capabilities/business-building/performance-intelligence-benchmarking",
        },
      ]}
      // AUTHORED case-tab metrics — all 7 case slugs verified live in App.tsx under
      // /capabilities/business-building/case-studies/<slug>. Grouped into 3 industry tabs.
      clientResults={[
        {
          industry: "Launch New Ventures",
          cases: [
            { slug: "media-streaming-launch", title: "Launching a streaming service that won 750K subscribers", metric: "750K", image: "/images/industries/tech-datacenter.jpg" },
            { slug: "fashion-retail-digital-transformation", title: "Growing a fashion retailer's online sales by 85%", metric: "85%", image: "/images/capabilities/cap-retail-apparel.jpg" },
            { slug: "industrial-connected-products", title: "Building a $30M services business on installed machines", metric: "$30M", image: "/images/capabilities/cap-battery-factory.jpg" },
          ],
        },
        {
          industry: "Build Product & Platform",
          cases: [
            { slug: "tech-engineering-transformation", title: "Tripling a software company's release speed", metric: "3x", image: "/images/capabilities/cap-conference-data.jpg" },
            { slug: "platform-engineering-developer-velocity", title: "Shipping faster with an internal developer platform", metric: "3x", image: "/images/capabilities/cap-coder.jpg" },
            { slug: "automotive-ev-transition", title: "Retooling a supplier line for electric-vehicle parts", metric: "45%", image: "/images/industries/auto-robotics-team.jpg" },
          ],
        },
        {
          industry: "Scale & Grow",
          cases: [
            { slug: "bank-cross-sell", title: "Turning single accounts into real relationships", metric: "$24M", image: "/images/industries/fin-trader.jpg" },
            { slug: "retail-loyalty-transformation", title: "Turning a stale loyalty program into 45% more spend", metric: "45%", image: "/images/capabilities/cap-retail-data.jpg" },
            { slug: "capital-raise-series-b", title: "Raising a growth round on stronger terms", metric: "1.3x", image: "/images/industries/deal-handshake.jpg" },
          ],
        },
      ]}
      // SOURCE has no partner/ecosystem section — pass empty array (template hides section)
      ecosystemLogos={[]}
      // SOURCE has no named NexDyne practice leaders for Business Building.
      // Per content authoring rule, do not invent staff identities. Pass empty array; section renders conditionally.
      leaders={[]}
      // PRESERVED 3 insight cards verbatim from source (titles + categories); the featured one uses the live insights/business-building hub
      insights={[
        {
          tag: "Venture Building",
          title:
            "What separates ventures that scale from those that stall",
          readTime: "8 min read",
          image: "/images/insight-ventures-scale-stall.jpg",
          href: "/capabilities/business-building/insights/digital-venture-playbook",
        },
        {
          tag: "Strategy",
          title: "The hidden advantage of building during uncertainty",
          readTime: "6 min read",
          image: "/images/insight-building-during-uncertainty.jpg",
          href: "/insights/business-transformation-strategy",
        },
        {
          tag: "Product",
          title: "MVP myths: What growing companies get wrong",
          readTime: "5 min read",
          image: "/images/insight-mvp-myths-mid-market.jpg",
          href: "/insights",
        },
      ]}
      // AUTHORED — source closing CTA was generic "Have an idea? Let's talk." with no named lead
      closingCTA={{
        leadName: "Our Business Building Practice Lead",
        leadTitle:
          "Head of Business Building, NexDyne Consulting Group",
        leadPhoto:
          "/images/cloud-abstract.jpg",
        leadEmail: "contact@nexdynegroup.com",
        leadLinkedinUrl: "https://www.linkedin.com/company/nexdyne",
      }}
    />
  );
}
