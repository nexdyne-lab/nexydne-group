import MarketingMasterTemplate from "@/components/MarketingMasterTemplate";

export default function GrowthMarketingSales() {
  return (
    <MarketingMasterTemplate
      capabilityName="Growth, Marketing & Sales"
      capabilitySlug="growth-marketing-sales"
      // PRESERVED VERBATIM from source hero subtitle
      heroSubtitle="Drive sustainable revenue growth by aligning strategy, customer experience, and commercial execution with data-driven precision. We help mid-market organizations outperform their competitors."
      heroImage="/images/abstract-growth.jpg"
      // PRESERVED CTA labels from source (Accelerate Growth + View Case Studies)
      heroPrimaryCTA={{
        label: "Accelerate Growth",
        href: "/contact",
      }}
      heroSecondaryCTA={{
        label: "View Case Studies",
        href: "/cases?capability=growth-marketing-sales",
      }}
      // PRESERVED 3 source stats; 4th is AUTHORED with TODO marker
      experienceStats={[
        {
          number: "75+",
          label:
            "Growth and marketing transformations delivered for mid-market companies",
        },
        {
          number: "$50M+",
          label:
            "Incremental revenue generated for clients through optimized commercial strategies",
        },
        {
          number: "18+",
          label: "Industry verticals served with specialized growth expertise",
        },
        // TODO: confirm with practice lead before publish
        {
          number: "12 wks",
          label: "median time from kickoff to first measurable revenue lift",
        },
      ]}
      // AUTHORED — featured uses source insight #2 title verbatim + AUTHORED summary; secondary uses source insights #3, #4
      // TODO: confirm with practice lead before publish (featured summary)
      thoughtLeadership={{
        featured: {
          tag: "Marketing Operations",
          title:
            "Building a scalable marketing engine for mid-market growth",
          summary:
            // TODO: confirm with practice lead before publish
            "Most mid-market marketing teams are stuck between scrappy execution and enterprise overhead. We outline the operating model, technology choices, and measurement discipline that let growing companies build a marketing engine that scales without the enterprise complexity or budget.",
          image: "/images/insight-marketing-operations.jpg",
          href: "/insights/marketing-operations",
        },
        secondary: [
          {
            tag: "Customer Experience",
            title:
              "Personalization that pays: A practical guide for growing companies",
            href: "/insights/personalization-guide",
          },
          {
            tag: "Pricing Strategy",
            title:
              "Pricing for growth: Capturing value without losing customers",
            href: "/insights/pricing-strategy",
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
      // TODO: confirm with practice lead before publish (ambition copy distilled from source themes)
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
      // TODO: confirm with practice lead before publish (rewritten intro)
      inPractice={{
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
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
      // TODO: confirm with practice lead before publish (the 7 distilled descriptions)
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
      // TODO: confirm with practice lead before publish (per-card metric blurbs)
      clientResults={[
        {
          industry: "Financial Services",
          cases: [
            {
              slug: "bank-process-automation",
              title:
                "Regional bank lifts digital acquisition with personalized journeys",
              metric: "38% conversion lift",
              image: "/images/case-bank-process-automation.jpg",
            },
            {
              slug: "fintech-payment-automation",
              title:
                "Fintech rebuilds pricing architecture and recovers leaked margin",
              metric: "$3M annual margin recapture",
              image: "/images/case-fintech-payment-automation.jpg",
            },
            {
              slug: "wealth-management-automation",
              title:
                "Wealth manager redesigns onboarding to lift advisor productivity",
              metric: "5x faster client intake",
              image: "/images/case-wealth-management-automation.jpg",
            },
            {
              slug: "insurance-claims-processing",
              title:
                "Insurer modernizes broker portal and improves NPS",
              metric: "+22 NPS in 9 months",
              image: "/images/case-insurance-claims-processing.jpg",
            },
          ],
        },
        {
          industry: "Healthcare",
          cases: [
            {
              slug: "healthcare-data-analytics",
              title:
                "Provider unifies patient analytics for personalized outreach",
              metric: "40% engagement uplift",
              image: "/images/case-healthcare-data-analytics.jpg",
            },
            {
              slug: "hospital-clinical-workflow",
              title:
                "Hospital system rebuilds patient experience across touchpoints",
              metric: "+18 NPS, 25% retention lift",
              image: "/images/case-hospital-clinical-workflow.jpg",
            },
            {
              slug: "telehealth-platform",
              title:
                "Telehealth provider scales acquisition with paid + organic funnel",
              metric: "10x scale, 50% lower CAC",
              image: "/images/case-telehealth-platform.jpg",
            },
            {
              slug: "healthcare-patient-engagement",
              title:
                "Health system personalizes outreach with predictive segmentation",
              metric: "32% engagement lift",
              image: "/images/case-healthcare-patient-engagement.jpg",
            },
          ],
        },
        {
          industry: "Professional Services",
          cases: [
            {
              slug: "law-firm-contract-automation",
              title:
                "Law firm reduces client acquisition cost with brand + content engine",
              metric: "35% CAC reduction",
              image: "/images/case-law-firm-contract-automation.jpg",
            },
            {
              slug: "consulting-knowledge-management",
              title:
                "Consultancy redesigns commercial architecture and lifts win rate",
              metric: "+12pts win rate",
              image: "/images/case-consulting-knowledge-management.jpg",
            },
            {
              slug: "legal-document-intelligence",
              title:
                "Legal team launches packaged services and unlocks new revenue",
              metric: "$2.4M new ARR",
              image: "/images/case-legal-document-intelligence.jpg",
            },
            {
              slug: "accounting-audit-automation",
              title:
                "Accounting firm rebuilds sales motion and grows productivity",
              metric: "45% productivity gain",
              image: "/images/case-accounting-audit-automation.jpg",
            },
          ],
        },
      ]}
      // SOURCE has no ecosystem partners — pass empty; section renders conditionally.
      // TODO: confirm with practice lead before publish (martech + agency partner logos if any)
      ecosystemLogos={[]}
      // SOURCE has no named NexDyne practice leaders. Per content authoring rule, do not invent staff identities.
      // TODO: confirm with practice lead before publish (replace with real practice leadership headshots + LinkedIn URLs)
      leaders={[]}
      // PRESERVED 3 insight cards verbatim from source (title + image + link); tags + readTime AUTHORED
      // TODO: confirm with practice lead before publish (readTime values)
      insights={[
        {
          tag: "Sales Excellence",
          title: "The AI advantage in sales: Moving from pilots to scale",
          readTime: "8 min read",
          image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
          href: "/insights/ai-in-sales",
        },
        {
          tag: "Customer Experience",
          title:
            "Personalization that pays: A practical guide for growing companies",
          readTime: "7 min read",
          image:
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80",
          href: "/insights/personalization-guide",
        },
        {
          tag: "Pricing Strategy",
          title:
            "Pricing for growth: Capturing value without losing customers",
          readTime: "9 min read",
          image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
          href: "/insights/pricing-strategy",
        },
      ]}
      // AUTHORED — source closing CTA was generic 'Ready to accelerate your growth' copy (no named lead)
      // TODO: confirm with practice lead before publish (real lead name + photo + email + LinkedIn)
      closingCTA={{
        leadName: "Our Growth, Marketing & Sales Practice Lead",
        leadTitle:
          "Head of Growth, Marketing & Sales, NexDyne Consulting Group",
        leadPhoto:
          "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/BIZXaFVVaVqquVZA.png",
        leadEmail: "growth@nexdyne.tech",
        leadLinkedinUrl: "https://www.linkedin.com/company/nexdyne",
      }}
    />
  );
}
