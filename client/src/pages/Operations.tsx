import MarketingMasterTemplate from "@/components/MarketingMasterTemplate";

export default function Operations() {
  return (
    <MarketingMasterTemplate
      capabilityName="Operations"
      capabilitySlug="operations"
      // PRESERVED VERBATIM from source hero subtitle
      heroSubtitle="Transform your operational infrastructure to reduce waste, improve quality, and deliver results faster. Build efficient, scalable operations that drive competitive advantage."
      heroImage="https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/CACWfSXoulDIJAgw.jpg"
      // PRESERVED CTA labels from source (Start Your Transformation + View Case Studies)
      heroPrimaryCTA={{
        label: "Start Your Transformation",
        href: "/contact",
      }}
      heroSecondaryCTA={{
        label: "View Case Studies",
        href: "/cases?capability=operations",
      }}
      // PRESERVED 3 source stats verbatim; 4th is AUTHORED with TODO marker
      experienceStats={[
        {
          number: "200+",
          label: "operations transformation engagements over the past decade",
        },
        {
          number: "25-40%",
          label: "typical improvement in operational efficiency",
        },
        {
          number: "15-30%",
          label: "average cost reduction achieved",
        },
        // TODO: confirm with practice lead before publish
        {
          number: "60%",
          label:
            "average reduction in supply-chain disruption impact across resilience programs",
        },
      ]}
      // AUTHORED — featured uses source insight #1 title + AUTHORED summary; secondary uses source insights #2, #3
      // TODO: confirm with practice lead before publish (featured summary + image paths)
      thoughtLeadership={{
        featured: {
          tag: "Operations Strategy",
          title: "The Future of Operations: AI-Powered Excellence",
          summary:
            // TODO: confirm with practice lead before publish
            "Operational excellence has shifted from incremental improvement to building adaptive systems that learn, optimize, and evolve. We outline how leading mid-market operators are deploying AI across the value chain — from predictive maintenance to autonomous decisioning — to turn operations from a cost center into a competitive weapon.",
          image: "/images/insight-ai-powered-operations.jpg",
          href: "/insights/ai-powered-operations",
        },
        secondary: [
          {
            tag: "Supply Chain",
            title: "Building Resilient Supply Chains in an Uncertain World",
            href: "/insights/resilient-supply-chains",
          },
          {
            tag: "Lean Operations",
            title: "Lean at Scale: Beyond the Factory Floor",
            href: "/insights/lean-at-scale",
          },
        ],
      }}
      // PRESERVED 3 approach pillars verbatim from source ("Diagnose / Design / Deploy")
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the system",
          body: "We audit your operations across people, process, and technology — mapping value streams, identifying bottlenecks, and benchmarking against best-in-class performers to quantify the improvement opportunity.",
        },
        {
          step: "02",
          title: "Design the architecture",
          body: "We develop a target operating model that balances efficiency, quality, and resilience. We prioritize initiatives by impact and feasibility, creating a roadmap that delivers quick wins while building toward transformational change.",
        },
        {
          step: "03",
          title: "Deploy and iterate",
          body: "We implement changes in agile sprints, measuring impact at each stage and iterating based on real-world results. We build internal capabilities alongside external improvements — ensuring your transformation is sustainable.",
        },
      ]}
      // 6 ambitions mapped to 6 of the 9 level-2 hubs (locked spec).
      // Titles use the spec-suggested phrasing; descriptions DISTILLED from each hub's source description.
      // TODO: confirm with practice lead before publish (ambition descriptions)
      ambitions={[
        {
          title: "Streamline end-to-end supply chains",
          description:
            "Build resilient, cost-effective supply chains that adapt to disruption. Optimize inventory management, supplier relationships, and logistics networks so the network keeps running when conditions change.",
          href: "/capabilities/operations/supply-chain",
        },
        {
          title: "Build a quality-first culture",
          description:
            "Build a culture of quality that exceeds customer expectations. Implement systematic quality controls and continuous improvement methodologies that make quality everyone's responsibility — not a downstream inspection step.",
          href: "/capabilities/operations/quality-management",
        },
        {
          title: "Maximize production throughput and uptime",
          description:
            "Maximize throughput and equipment effectiveness. Deploy predictive maintenance, production scheduling, and lean manufacturing principles so assets and lines run closer to their theoretical capacity.",
          href: "/capabilities/operations/production-optimization",
        },
        {
          title: "Optimize workforce productivity at scale",
          description:
            "Empower your team with the right skills and tools. Design workforce strategies, training programs, and performance management systems that turn frontline talent into a durable productivity advantage.",
          href: "/capabilities/operations/workforce-optimization",
        },
        {
          title: "Automate routine work end-to-end",
          description:
            "Eliminate manual bottlenecks with intelligent automation. From order processing to quality control, accelerate workflows and reduce errors by digitizing the operational backbone — not just the front office.",
          href: "/capabilities/operations/process-automation",
        },
        {
          title: "Develop products customers love",
          description:
            "Accelerate innovation and time-to-market. Transform your product development process to deliver winning products faster and more efficiently — with disciplined prioritization and tighter feedback loops.",
          href: "/capabilities/operations/product-development",
        },
      ]}
      // PRESERVED in-practice intro (distilled from source 4-paragraph thought-leadership block)
      // realOutcomes / howWeHelp DISTILLED from source case studies + approach copy
      // TODO: confirm with practice lead before publish (image path + realOutcomes / howWeHelp framing)
      inPractice={{
        image:
          "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80",
        intro:
          "In the era of algorithmic supply chains and intelligent automation, operational excellence is no longer about incremental improvement — it is about building adaptive systems that learn, optimize, and evolve. The most successful operations organizations have moved beyond siloed optimization to integrated systems where data flows seamlessly from demand signal to delivery, with real-time visibility, predictive decision-making, and autonomous execution. We don't just implement tools; we refactor the entire operational stack — from production scheduling algorithms to resilient supply networks — so your operations engine runs with the precision of a well-tuned system.",
        realOutcomes: [
          "Industrial manufacturer cut operating cost 28%, lifted quality 40%, and halved cycle time through a comprehensive lean transformation",
          "National distributor reduced supply-chain disruption impact by 60% and inventory carrying costs by 25% via multi-sourcing and a real-time control tower",
          "Mid-market operators consistently achieve 25-40% improvement in operational efficiency on transformation programs",
          "Average cost reduction of 15-30% delivered across 200+ operations engagements over the past decade",
        ],
        howWeHelp: [
          "Map value streams, benchmark against best-in-class, and quantify the improvement opportunity before committing capital",
          "Design a target operating model that balances efficiency, quality, and resilience across people, process, and technology",
          "Implement in agile sprints with measurable impact at every stage rather than a single big-bang go-live",
          "Build internal capability alongside external improvements so the transformation sticks after we leave",
        ],
      }}
      // PRESERVED all 9 service cards verbatim from source `capabilities[]` array (titles + descriptions)
      // Hrefs match the locked /capabilities/operations/<hub> nesting
      howWeCanHelp={[
        {
          title: "Supply Chain Optimization",
          description:
            "Build resilient, cost-effective supply chains that adapt to disruption. Optimize inventory management, supplier relationships, and logistics networks.",
          href: "/capabilities/operations/supply-chain",
        },
        {
          title: "Quality Management Systems",
          description:
            "Build a culture of quality that exceeds customer expectations. Implement systematic quality controls and continuous improvement methodologies.",
          href: "/capabilities/operations/quality-management",
        },
        {
          title: "Production & Asset Optimization",
          description:
            "Maximize throughput and equipment effectiveness. Deploy predictive maintenance, production scheduling, and lean manufacturing principles.",
          href: "/capabilities/operations/production-optimization",
        },
        {
          title: "Workforce Optimization",
          description:
            "Empower your team with the right skills and tools. Design workforce strategies, training programs, and performance management systems.",
          href: "/capabilities/operations/workforce-optimization",
        },
        {
          title: "Performance Analytics",
          description:
            "Make data-driven decisions with real-time operational intelligence. Build dashboards, KPI frameworks, and predictive analytics capabilities.",
          href: "/capabilities/operations/performance-analytics",
        },
        {
          title: "Process Automation & Digitization",
          description:
            "Eliminate manual bottlenecks with intelligent automation. From order processing to quality control, accelerate workflows and reduce errors.",
          href: "/capabilities/operations/process-automation",
        },
        {
          title: "Strategic Procurement",
          description:
            "Optimize your sourcing strategy and supplier relationships. Reduce costs, manage risk, and build a resilient procurement function.",
          href: "/capabilities/operations/strategic-procurement",
        },
        {
          title: "Service Operations",
          description:
            "Optimize service delivery and customer experience. Transform your service operations to drive efficiency, quality, and customer satisfaction.",
          href: "/capabilities/operations/service-operations",
        },
        {
          title: "Product Development",
          description:
            "Accelerate innovation and time-to-market. Transform your product development process to deliver winning products faster and more efficiently.",
          href: "/capabilities/operations/product-development",
        },
      ]}
      // AUTHORED case-tab metrics distilled from Cat 11a 12-case pool, grouped into 3 industry tabs.
      // Same pattern as AI / BB master refactors. All 12 case slugs verified live in App.tsx under /cases/<slug>.
      // TODO: confirm with practice lead before publish (per-card metric blurbs + image paths)
      clientResults={[
        {
          industry: "Financial Services",
          cases: [
            {
              slug: "bank-process-automation",
              title:
                "Bank automates KYC and onboarding with intelligent document processing",
              metric: "70% faster onboarding cycle",
              image: "/images/case-bank-process-automation.jpg",
            },
            {
              slug: "fintech-payment-automation",
              title:
                "Fintech eliminates payment reconciliation backlog with workflow automation",
              metric: "$3M annual operating savings",
              image: "/images/case-fintech-payment-automation.jpg",
            },
            {
              slug: "wealth-management-automation",
              title:
                "Wealth manager streamlines client onboarding end-to-end",
              metric: "5x faster intake throughput",
              image: "/images/case-wealth-management-automation.jpg",
            },
            {
              slug: "insurance-claims-processing",
              title:
                "Insurer automates claims triage to lift straight-through processing",
              metric: "60% straight-through processing",
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
                "Provider unifies clinical operations analytics across 20 facilities",
              metric: "40% better outcomes reporting",
              image: "/images/case-healthcare-data-analytics.jpg",
            },
            {
              slug: "hospital-clinical-workflow",
              title:
                "Hospital cuts nurse documentation time with workflow redesign",
              metric: "2 hours saved per shift",
              image: "/images/case-hospital-clinical-workflow.jpg",
            },
            {
              slug: "telehealth-platform",
              title:
                "Telehealth provider scales service operations to millions of patients",
              metric: "10x scale, 50% cost-to-serve",
              image: "/images/case-telehealth-platform.jpg",
            },
            {
              slug: "healthcare-patient-engagement",
              title:
                "Health system tightens patient outreach with predictive analytics",
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
                "Law firm automates contract review with structured workflow",
              metric: "75% faster turnaround",
              image: "/images/case-law-firm-contract-automation.jpg",
            },
            {
              slug: "consulting-knowledge-management",
              title:
                "Consultancy unlocks 20 years of project knowledge with operations redesign",
              metric: "60% time saved on research",
              image: "/images/case-consulting-knowledge-management.jpg",
            },
            {
              slug: "legal-document-intelligence",
              title:
                "Legal team extracts insights from 10K+ documents with automated review",
              metric: "90% manual review eliminated",
              image: "/images/case-legal-document-intelligence.jpg",
            },
            {
              slug: "accounting-audit-automation",
              title:
                "Accounting firm automates audit sampling and testing operations",
              metric: "45% audit cycle reduction",
              image: "/images/case-accounting-audit-automation.jpg",
            },
          ],
        },
      ]}
      // SOURCE has no partner / ecosystem section — pass empty array (template hides section)
      ecosystemLogos={[]}
      // SOURCE has no named NexDyne practice leaders for Operations.
      // Per content authoring rule, do not invent staff identities. Pass empty array; section renders conditionally.
      // TODO: confirm with practice lead before publish (replace with real practice leadership headshots + LinkedIn URLs)
      leaders={[]}
      // PRESERVED 3 insight cards verbatim from source (titles + categories + readTime + hrefs)
      // TODO: confirm with practice lead before publish (image paths)
      insights={[
        {
          tag: "Operations Strategy",
          title: "The Future of Operations: AI-Powered Excellence",
          readTime: "6 min read",
          image: "/images/insight-ai-powered-operations.jpg",
          href: "/insights/ai-powered-operations",
        },
        {
          tag: "Supply Chain",
          title: "Building Resilient Supply Chains in an Uncertain World",
          readTime: "5 min read",
          image: "/images/insight-resilient-supply-chains.jpg",
          href: "/insights/resilient-supply-chains",
        },
        {
          tag: "Lean Operations",
          title: "Lean at Scale: Beyond the Factory Floor",
          readTime: "7 min read",
          image: "/images/insight-lean-at-scale.jpg",
          href: "/insights/lean-at-scale",
        },
      ]}
      // AUTHORED — source closing CTA was generic "Ready to transform your operations?" copy with no named lead
      // TODO: confirm with practice lead before publish (real lead name + photo + email + LinkedIn)
      closingCTA={{
        leadName: "Our Operations Practice Lead",
        leadTitle: "Head of Operations, NexDyne Consulting Group",
        leadPhoto:
          "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/BIZXaFVVaVqquVZA.png",
        leadEmail: "operations@nexdyne.tech",
        leadLinkedinUrl: "https://www.linkedin.com/company/nexdyne",
      }}
    />
  );
}
