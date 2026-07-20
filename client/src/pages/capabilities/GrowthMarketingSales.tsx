import MarketingMasterTemplate from "@/components/MarketingMasterTemplate";

export default function GrowthMarketingSales() {
  return (
    <MarketingMasterTemplate
      capabilityName="Growth, Marketing & Sales"
      capabilitySlug="growth-marketing-sales"
      // PRESERVED VERBATIM from source hero subtitle
      heroSubtitle="Drive sustainable revenue growth by aligning strategy, customer experience, and commercial execution with data-driven precision. We help growing companies outperform their larger competitors."
      heroImage="/images/capabilities/cap2-growth-marketing-hero.jpg"
      heroFocal="50% 50%"
      // PRESERVED CTA labels from source (Accelerate Growth + View Case Studies)
      heroPrimaryCTA={{
        label: "Accelerate Growth",
        href: "/contact",
      }}
      heroSecondaryCTA={{
        label: "View Case Studies",
        href: "/cases?capability=growth-marketing-sales",
      }}
      experienceStats={[
        {
          number: "75+",
          label:
            "Growth and marketing transformations delivered for growing companies",
        },
        {
          number: "30%",
          label:
            "Average revenue growth on optimized commercial programs",
        },
        {
          number: "18+",
          label: "Industry verticals served with specialized growth expertise",
        },
        {
          number: "12 wks",
          label: "median time from kickoff to first measurable revenue lift",
        },
      ]}
      // AUTHORED — featured uses source insight #2 title verbatim + AUTHORED summary; secondary uses source insights #3, #4
      thoughtLeadership={{
        featured: {
          tag: "Marketing Operations",
          title:
            "Building a scalable marketing engine for growing companies",
          summary:
            "Most growing marketing teams are stuck between scrappy execution and enterprise overhead. We outline the operating model, technology choices, and measurement discipline that let growing companies build a marketing engine that scales without the enterprise complexity or budget.",
          image: "/images/insights/future-of-marketing-ops-hero.jpg",
          href: "/insights/future-of-marketing-ops",
        },
        secondary: [
          {
            tag: "Customer Experience",
            title:
              "Personalization that pays: A practical guide for growing companies",
            href: "/insights/hyper-personalization-at-scale",
          },
          {
            tag: "Pricing Strategy",
            title:
              "Pricing for growth: Capturing value without losing customers",
            href: "/insights/psychology-of-value",
          },
        ],
      }}
      // PRESERVED 3 approach pillars verbatim from source (titles + descriptions)
      approachPillars={[
        {
          step: "01",
          title: "Connect insights to action",
          body: "We help you understand your customers deeply—what they value, how they decide, and where they're underserved—then translate those insights into strategies that drive measurable results.",
        },
        {
          step: "02",
          title: "Optimize your go-to-market",
          body: "We streamline marketing operations, align sales and marketing teams, and implement the right technology stack so your commercial engine runs efficiently at every stage of growth.",
        },
        {
          step: "03",
          title: "Scale what works",
          body: "We identify your highest-performing channels, campaigns, and sales motions, then build the systems and processes to replicate success across markets and segments.",
        },
      ]}
      // AUTHORED 6 ambition cards mapped to 6 of the 18 live hubs per locked spec
      ambitions={[
        {
          title: "Build a brand that scales",
          description:
            "Define a distinctive brand position that resonates with your target market, commands premium pricing, and stays consistent as you grow into new segments and channels.",
          href: "/capabilities/growth-marketing-sales/brand-strategy",
        },
        {
          title: "Capture growth across digital channels",
          description:
            "Move beyond fragmented tactics to a connected digital marketing engine that compounds—performance media, owned channels, and analytics attribution that prove what's working.",
          href: "/capabilities/growth-marketing-sales/digital-marketing",
        },
        {
          title: "Win the customer experience battle",
          description:
            "Map the customer journey end-to-end, fix the friction points that cost you deals, and design moments that turn first-time buyers into long-term advocates.",
          href: "/capabilities/growth-marketing-sales/customer-experience",
        },
        {
          title: "Price for value, not for cost",
          description:
            "Capture the full value you create through optimized pricing architecture, packaging strategies, and promotional effectiveness analysis grounded in willingness-to-pay data.",
          href: "/capabilities/growth-marketing-sales/pricing-monetization",
        },
        {
          title: "Activate retention as a growth engine",
          description:
            "Predict churn before it happens, score customer health in real time, and design loyalty programs that lift LTV without giving away margin.",
          href: "/capabilities/growth-marketing-sales/retention-loyalty",
        },
        {
          title: "Build a sales engine that hits quota",
          description:
            "Optimize territories, improve productivity, and build high-performance sales teams with data-driven coaching, pipeline rigor, and the right enablement at every deal stage.",
          href: "/capabilities/growth-marketing-sales/sales-excellence",
        },
      ]}
      // PRESERVED in-practice intro adapted from source 'How AI is Transforming Growth & Marketing' section
      // realOutcomes + howWeHelp distilled from source AI use-case bullets
      inPractice={{
        image:
          "/images/capabilities/cap2-growth-marketing-pov.jpg",
        intro:
          "Growth in today's market requires more than good products and aggressive targets. It demands a clear understanding of where your customers are, what drives their decisions, and how to reach them efficiently across an increasingly fragmented landscape. We connect customer insights, marketing operations, and sales execution into a unified growth system—one that delivers predictable revenue without burning through budget on tactics that don't work.",
        realOutcomes: [
          "Sales teams closing deals 40% faster with AI-generated proposals and follow-ups",
          "Marketing teams allocating budget dynamically based on real-time performance signals",
          "Retention teams identifying at-risk customers early and triggering interventions that save revenue",
          "Pricing teams capturing 15-25% of previously left-on-the-table revenue through elasticity-based optimization",
        ],
        howWeHelp: [
          "Behavior-based customer segmentation that drives targeted campaigns instead of demographic guesswork",
          "Predictive lead scoring so sales prioritizes the prospects most likely to convert and expand",
          "Content personalization that delivers the right message at the right moment across every channel",
          "Marketing mix optimization plus AI-powered sales forecasting for pipeline accuracy",
        ],
      }}
      // PRESERVED all 18 hub titles + descriptions verbatim from source capabilities[] arrays
      // (current source has 11 entries across 2 grids; remaining 7 distilled from each Phase 1 hub's heroSubtitle)
      howWeCanHelp={[
        {
          title: "Brand Strategy",
          description:
            "Build a distinctive brand that resonates with your target market. We help you define your positioning, messaging, and visual identity to stand out from competitors and command premium pricing.",
          href: "/capabilities/growth-marketing-sales/brand-strategy",
        },
        {
          title: "Brand & Storytelling",
          description:
            "Translating complex innovation into clear market authority. Brand architecture, narrative engineering, and digital experience for digital-first leaders.",
          href: "/capabilities/growth-marketing-sales/brand-storytelling",
        },
        {
          title: "Commercial Architecture",
          description:
            "Designing the blueprints for scalable revenue generation. Aligned data, process, and incentive layers across sales, marketing, and customer success.",
          href: "/capabilities/growth-marketing-sales/commercial-architecture",
        },
        {
          title: "Consumer & Shopper Insights",
          description:
            "Decode the customer decision journey through deep behavioral research. We translate insights about beliefs and motivations into actionable business strategies.",
          href: "/capabilities/growth-marketing-sales/consumer-shopper-insights",
        },
        {
          title: "Customer Experience",
          description:
            "Design experiences that convert and retain. We map customer journeys, identify friction points, and create moments that matter across every touchpoint.",
          href: "/capabilities/growth-marketing-sales/customer-experience",
        },
        {
          title: "Digital Marketing",
          description:
            "Performance marketing, brand strategy, and analytics attribution for measurable growth.",
          href: "/capabilities/growth-marketing-sales/digital-marketing",
        },
        {
          title: "E-commerce",
          description:
            "Platform strategy, conversion optimization, and marketplace management.",
          href: "/capabilities/growth-marketing-sales/ecommerce",
        },
        {
          title: "Green Growth",
          description:
            "Sustainable consumer goods, advanced manufacturing, and energy materials.",
          href: "/capabilities/growth-marketing-sales/green-growth",
        },
        {
          title: "Growth Strategy",
          description:
            "Identify and capture new opportunities through market analysis, competitive positioning, and portfolio optimization. We help you define where to play and how to win in your target markets.",
          href: "/capabilities/growth-marketing-sales/growth-strategy",
        },
        {
          title: "Insights & Analytics",
          description:
            "Advanced analytics, attribution modeling, and decision intelligence.",
          href: "/capabilities/growth-marketing-sales/insights-analytics",
        },
        {
          title: "MarTech Stack",
          description:
            "Stack orchestration, middleware strategy, and semantic infrastructure.",
          href: "/capabilities/growth-marketing-sales/martech-stack",
        },
        {
          title: "Marketing Operations",
          description:
            "Build a scalable marketing engine that maximizes ROI. We streamline workflows, establish data governance, and implement performance measurement frameworks.",
          href: "/capabilities/growth-marketing-sales/marketing-operations",
        },
        {
          title: "Personalization at Scale",
          description:
            "AI-driven personalization across channels and touchpoints.",
          href: "/capabilities/growth-marketing-sales/personalization-at-scale",
        },
        {
          title: "Portfolio Optimization",
          description:
            "Product portfolio strategy, SKU rationalization, and assortment planning.",
          href: "/capabilities/growth-marketing-sales/portfolio-optimization",
        },
        {
          title: "Pricing & Monetization",
          description:
            "Capture the full value you create through optimized pricing architecture, packaging strategies, and promotional effectiveness analysis.",
          href: "/capabilities/growth-marketing-sales/pricing-monetization",
        },
        {
          title: "Retention & Loyalty",
          description:
            "Churn prediction, customer health scoring, and loyalty program design.",
          href: "/capabilities/growth-marketing-sales/retention-loyalty",
        },
        {
          title: "Sales Excellence",
          description:
            "Transform your sales organization for peak performance. We optimize territories, improve productivity, and build high-performance teams with data-driven coaching.",
          href: "/capabilities/growth-marketing-sales/sales-excellence",
        },
        {
          title: "Service Design",
          description:
            "Orchestrate the invisible. Align people, infrastructure, and technology to deliver consistent, high-trust service experiences across every touchpoint.",
          href: "/capabilities/growth-marketing-sales/service-design",
        },
      ]}
      // AUTHORED case-tab metrics distilled from Cat 11a 12-case pool grouped into 3 industry tabs
      clientResults={[
        {
          industry: "Customer & Loyalty",
          cases: [
            { slug: "retail-loyalty-transformation", title: "Turning a stale loyalty program into 45% more spend", metric: "45%", image: "/images/capabilities/cap-retail-data.jpg" },
            { slug: "telecom-customer-experience", title: "Cutting a regional carrier's churn by 40%", metric: "40%", image: "/images/capabilities/cap-iot-network.jpg" },
            { slug: "hotel-guest-experience", title: "Restoring personal service across a hotel group", metric: "+25pts", image: "/images/industries/city-night.jpg" },
          ],
        },
        {
          industry: "Pricing & Revenue",
          cases: [
            { slug: "hotel-revenue-transformation", title: "Lifting hotel revenue per room by 18%", metric: "18%", image: "/images/industries/travel-city-twilight.jpg" },
            { slug: "retail-assortment-optimization", title: "Tailoring store assortments to lift a retailer's sales", metric: "12%", image: "/images/industries/retail-shelves.jpg" },
            { slug: "insurance-ai-underwriting", title: "Quoting commercial business in a day, not a week", metric: "40%", image: "/images/industries/fin-handshake-city.jpg" },
          ],
        },
        {
          industry: "Growth & Commerce",
          cases: [
            { slug: "fashion-retail-digital-transformation", title: "Growing a fashion retailer's online sales by 85%", metric: "85%", image: "/images/capabilities/cap-retail-apparel.jpg" },
            { slug: "bank-cross-sell", title: "Turning single accounts into real relationships", metric: "$24M", image: "/images/industries/fin-trader.jpg" },
            { slug: "media-streaming-launch", title: "Launching a streaming service that won 750K subscribers", metric: "750K", image: "/images/industries/tech-datacenter.jpg" },
          ],
        },
      ]}
      // SOURCE has no ecosystem partners — pass empty; section renders conditionally.
      ecosystemLogos={[]}
      // SOURCE has no named NexDyne practice leaders. Per content authoring rule, do not invent staff identities.
      leaders={[]}
      // PRESERVED 3 insight cards verbatim from source (title + image + link); tags + readTime AUTHORED
      insights={[
        {
          tag: "Sales Excellence",
          title: "The AI advantage in sales: Moving from pilots to scale",
          readTime: "8 min read",
          image:
            "/images/insights/ai-sales-forecasting-hero.jpg",
          href: "/insights/ai-sales-forecasting",
        },
        {
          tag: "Customer Experience",
          title:
            "Personalization that pays: A practical guide for growing companies",
          readTime: "7 min read",
          image:
            "/images/insights/hyper-personalization-at-scale-hero.jpg",
          href: "/insights/hyper-personalization-at-scale",
        },
        {
          tag: "Pricing Strategy",
          title:
            "Pricing for growth: Capturing value without losing customers",
          readTime: "9 min read",
          image:
            "/images/insights/psychology-of-value-hero.jpg",
          href: "/insights/psychology-of-value",
        },
      ]}
      // AUTHORED — source closing CTA was generic 'Ready to accelerate your growth' copy (no named lead)
      closingCTA={{
        leadName: "Our Growth, Marketing & Sales Practice Lead",
        leadTitle:
          "Head of Growth, Marketing & Sales, NexDyne Consulting Group",
        leadPhoto:
          "/images/hero-team-2.webp",
        leadEmail: "contact@nexdynegroup.com",
        leadLinkedinUrl: "https://www.linkedin.com/company/nexdyne",
      }}
    />
  );
}
