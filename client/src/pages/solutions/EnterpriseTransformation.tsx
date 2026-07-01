import MarketingMasterTemplate from "@/components/MarketingMasterTemplate";

export default function EnterpriseTransformation() {
  return (
    <MarketingMasterTemplate
      capabilityName="Technology"
      capabilitySlug="technology"
      // PRESERVED VERBATIM from source hero subtitle
      heroSubtitle="Companies with a strategic focus on technology outperform across industries. Stay ahead with tech foundations that fuel lasting growth."
      heroImage="/images/technology-hero-abstract.jpg"
      // PRESERVED CTA labels from source (Talk to an Expert + See Client Results) — repointed to canonical /capabilities/technology paths
      heroPrimaryCTA={{
        label: "Talk to an Expert",
        href: "/contact",
      }}
      heroSecondaryCTA={{
        label: "See Client Results",
        href: "/cases?capability=technology",
      }}
      // PRESERVED 3 source stats verbatim (60+ / ~$15M / 12+); 4th is AUTHORED with TODO marker to make grid 4-up like sister masters
      experienceStats={[
        {
          number: "60+",
          label:
            "technology modernization projects completed for mid-market companies",
        },
        {
          number: "~$15M",
          label:
            "in operational savings delivered to clients in the last three years",
        },
        {
          number: "12+",
          label:
            "strategic partnerships across cloud, security, and AI platforms",
        },
        // TODO: confirm with practice lead before publish
        {
          number: "38%",
          label:
            "average infrastructure cost reduction across cloud migration engagements",
        },
      ]}
      // AUTHORED — source has no thought-leadership block, so featured + 2 secondary use insight slugs that already render under /capabilities/technology/insights
      // TODO: confirm with practice lead before publish (titles, summary, image paths, final href slugs)
      thoughtLeadership={{
        featured: {
          tag: "Technology Strategy",
          title:
            "From cost center to growth engine: rebuilding the technology operating model",
          summary:
            // TODO: confirm with practice lead before publish
            "Technology has shifted from a back-office function to the engine that decides whether a company can grow at all. We outline how mid-market leaders are rebuilding the technology operating model around platform thinking, paved-path engineering, and FinOps discipline so technology compounds rather than drags on the P&L.",
          image: "/images/insight-technology-operating-model.jpg",
          href: "/insights/technology-operating-model",
        },
        secondary: [
          {
            tag: "Cloud",
            title:
              "The 6Rs decision that decides whether your cloud migration ships",
            href: "/insights/scalable-data-architecture",
          },
          {
            tag: "Platform Engineering",
            title:
              "Why your internal developer platform is a product, not a project",
            href: "/insights/platform-engineering-as-product",
          },
        ],
      }}
      // PRESERVED 3 approach pillars distilled from source 5-stage process (Discovery / Architecture / Build+Launch+Optimize collapsed into a 3-pillar shape)
      // TODO: confirm with practice lead before publish (3-pillar collapse of source 5-stage process)
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the estate",
          body: "We map your current systems, quantify the cost of doing nothing, and pressure-test the technology, integration, and value-creation thesis with evidence. No assumptions — just a defensible inventory and a 6Rs decision per workload that survives the steering committee.",
        },
        {
          step: "02",
          title: "Architect and build in waves",
          body: "We design a target architecture that fits your business, your budget, and your team. Then we build in agile sprints with regular demos, so progress is visible every two weeks rather than at the end of a multi-year program.",
        },
        {
          step: "03",
          title: "Operate and optimize",
          body: "Go-live is not the finish line. We embed the platform-team operating model, run the FinOps cadence, train your team, and optimize the estate continuously so cost, reliability, and developer velocity all move together.",
        },
      ]}
      // 6 ambitions mapped to 6 of the 15 sub-pages per spec.
      // Titles use the spec-suggested phrasing; descriptions DISTILLED from each sub-page's heroSubtitle.
      // TODO: confirm with practice lead before publish (ambition descriptions)
      ambitions={[
        {
          title: "Modernize legacy systems and infrastructure",
          description:
            "Retire the old estate without breaking the business. A 6Rs decision per workload, a strangler-fig execution model that protects operations, and a sunset plan that actually turns the legacy off.",
          href: "/capabilities/technology/legacy-modernization",
        },
        {
          title: "Migrate to cloud at enterprise scale",
          description:
            "Most cloud migrations fail at the strategy step, not the execution step. We rebuild the workload inventory, run a defensible 6Rs decision, design the target architecture, and sequence the migration so cutover risk is named before the change window opens.",
          href: "/capabilities/technology/cloud-migration-architecture",
        },
        {
          title: "Build platform engineering excellence",
          description:
            "Platforms compound only when they are operated as products. We design the IDP, build the paved paths, run the adoption, and embed the platform-team operating model that turns infrastructure into a managed developer experience.",
          href: "/capabilities/technology/platform-engineering",
        },
        {
          title: "Accelerate delivery with DevOps and CI/CD",
          description:
            "Engineering productivity is not a culture conversation. We measure where the pipeline is actually slow, rebuild the architecture, engineer the test framework, and stand up the deployment automation that lifts DORA metrics quarter-over-quarter.",
          href: "/capabilities/technology/devops-cicd",
        },
        {
          title: "Secure your tech estate end-to-end",
          description:
            "Compliance is a control discipline, not an audit event. We assess the posture, sequence the framework roadmap, design the architecture, implement the controls with measurable evidence, and embed the assurance program that runs always-on.",
          href: "/capabilities/technology/security-and-compliance",
        },
        {
          title: "Set the right tech strategy",
          description:
            "A technology strategy is only as real as the decisions it produces. We build the vision, the principles sharp enough to decide trade-offs, the target architecture that hangs together, and the governance operating model that turns strategy into executed work.",
          href: "/capabilities/technology/technology-strategy",
        },
      ]}
      // PRESERVED in-practice intro distilled from source SLOT 2 editorial block (3 paragraphs collapsed into 1)
      // realOutcomes mined from source SLOT 4 outcomes + SLOT 7 cases verbatim metrics
      // howWeHelp mined from source SLOT 5 approach pillars verbatim
      // TODO: confirm with practice lead before publish (image path)
      inPractice={{
        image:
          "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80",
        intro:
          "For most mid-market companies, technology is the bottleneck rather than the growth engine — aging systems that cannot scale, data trapped in silos, and IT teams stretched thin just keeping the lights on. We work with growing companies who have outgrown their starter tech stack but are not ready for the complexity and cost of enterprise solutions. We modernize systems in phases, align technology strategy with where the business is heading, and build foundations that support AI without a Fortune 500 budget.",
        realOutcomes: [
          "Healthcare network migrated to AWS without disruption — infrastructure cost cut by 38% with improved uptime",
          "Fintech replatformed monolith into microservices — release cycles accelerated from quarterly to weekly",
          "Media streaming platform re-architected for elastic scale — peak-hour latency reduced 62% during major live events",
          "~$15M in operational savings delivered to mid-market clients across the past three years",
        ],
        howWeHelp: [
          "Map current systems, identify pain points, and quantify the cost of doing nothing — no assumptions, just data",
          "Design a target architecture that fits the business, the budget, and the team's capabilities — no gold-plating",
          "Build in two-week sprints with regular demos so progress is visible every cycle, not only at go-live",
          "Stick around after launch to fix issues, train teams, and ensure adoption — and right-size tech spending continuously",
        ],
      }}
      // CHANGED FROM 15 FLAT SERVICES TO 6 LEVEL-2 HUBS — Cat 2-4f Phase 1.
      // Each card links to the new CapabilityHubTemplate hub at /capabilities/technology/<hub-slug>-hub.
      // The 15 underlying flat services are preserved and now live under each hub via howWeCanHelp inside the hub pages.
      howWeCanHelp={[
        {
          title: "Cloud & Infrastructure",
          // TODO: confirm hub description with practice lead before publish
          description:
            "Migrate, modernize, and optimize your cloud estate end-to-end. Landing zones, FinOps, and the operating model that compounds developer velocity rather than dragging on the P&L.",
          href: "/capabilities/technology/cloud-infrastructure-hub",
        },
        {
          title: "Platform Engineering",
          // TODO: confirm hub description with practice lead before publish
          description:
            "Build internal developer platforms and data platforms that compound velocity. Golden paths, paved paths, and the platform-as-a-product operating model that turns infrastructure into a managed product.",
          href: "/capabilities/technology/platform-engineering-hub",
        },
        {
          title: "DevOps & Automation",
          // TODO: confirm hub description with practice lead before publish
          description:
            "CI/CD, infrastructure as code, and the operating model that ships safely and often. DORA-aligned engineering that lifts deployment frequency without sacrificing reliability.",
          href: "/capabilities/technology/devops-automation-hub",
        },
        {
          title: "Security & Compliance",
          // TODO: confirm hub description with practice lead before publish
          description:
            "Embed security and compliance into every layer. Zero-trust architecture, automated evidence, and an always-on assurance program rather than annual audit fire drills.",
          href: "/capabilities/technology/security-compliance-hub",
        },
        {
          title: "Strategy & Advisory",
          // TODO: confirm hub description with practice lead before publish
          description:
            "Tech strategy, target architecture, due diligence, and cost optimization. The technology agenda turned into a body of decisions leadership can execute against.",
          href: "/capabilities/technology/strategy-advisory-hub",
        },
        {
          title: "Modernization",
          // TODO: confirm hub description with practice lead before publish
          description:
            "Replatform, refactor, and replace patterns for legacy systems — connected by a modern API layer. Strangler-fig execution that retires the legacy without breaking the business.",
          href: "/capabilities/technology/modernization-hub",
        },
      ]}
      // AUTHORED case-tab metrics distilled from Cat 11a 12-case pool, grouped into 3 industry tabs.
      // Same pattern as AI / BB / Ops / SCF / GMS master refactors. All 12 case slugs verified live in App.tsx under /cases/<slug>.
      // TODO: confirm with practice lead before publish (per-card metric blurbs + image paths)
      clientResults={[
        {
          industry: "Financial Services",
          cases: [
            {
              slug: "fintech-payment-automation",
              title:
                "Fintech replatforms monolith into microservices and cuts release cycle to weekly",
              metric: "Release cycle: quarterly to weekly",
              image: "/images/case-fintech-payment-automation.jpg",
            },
            {
              slug: "bank-process-automation",
              title:
                "Bank rebuilds core platform on cloud-native architecture and reduces infra cost",
              metric: "30% infra cost reduction",
              image: "/images/case-bank-process-automation.jpg",
            },
            {
              slug: "wealth-management-automation",
              title:
                "Wealth manager modernizes legacy advisor platform on a unified API layer",
              metric: "Advisor productivity up 35%",
              image: "/images/case-wealth-management-automation.jpg",
            },
            {
              slug: "insurance-claims-processing",
              title:
                "Insurer rebuilds claims platform on event-driven architecture",
              metric: "Claims latency cut 60%",
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
                "Healthcare network migrates core systems to AWS without disruption",
              metric: "Infra cost cut 38%, uptime improved",
              image: "/images/case-healthcare-data-analytics.jpg",
            },
            {
              slug: "hospital-clinical-workflow",
              title:
                "Hospital network rebuilds clinical workflow on a unified data platform",
              metric: "Clinician time saved across 20 facilities",
              image: "/images/case-hospital-clinical-workflow.jpg",
            },
            {
              slug: "telehealth-platform",
              title:
                "Telehealth platform re-architects for elastic scale to millions of patients",
              metric: "10x scale, latency held flat",
              image: "/images/case-telehealth-platform.jpg",
            },
            {
              slug: "healthcare-patient-engagement",
              title:
                "Health system stands up an internal developer platform for clinical apps",
              metric: "Lead time cut 70%",
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
                "Law firm replaces aging matter-management estate on a modern API layer",
              metric: "Matter cycle time down 40%",
              image: "/images/case-law-firm-contract-automation.jpg",
            },
            {
              slug: "consulting-knowledge-management",
              title:
                "Consultancy unifies 20 years of project knowledge on a single data platform",
              metric: "Search time cut 80%",
              image: "/images/case-consulting-knowledge-management.jpg",
            },
            {
              slug: "legal-document-intelligence",
              title:
                "Legal services group rebuilds document intelligence on cloud-native pipeline",
              metric: "Review throughput 5x",
              image: "/images/case-legal-document-intelligence.jpg",
            },
            {
              slug: "accounting-audit-automation",
              title:
                "Accounting firm modernizes audit platform with CI/CD and observability",
              metric: "Audit cycle compressed 45%",
              image: "/images/case-accounting-audit-automation.jpg",
            },
          ],
        },
      ]}
      // SOURCE has no partner / ecosystem section — pass empty array (template hides section)
      ecosystemLogos={[]}
      // SOURCE has no named NexDyne practice leaders for Technology.
      // Per content authoring rule, do not invent staff identities. Pass empty array; section renders conditionally.
      // TODO: confirm with practice lead before publish (replace with real practice leadership headshots + LinkedIn URLs)
      leaders={[]}
      // AUTHORED — 3 insight cards. Slug "scalable-data-architecture" matches the only insight link in source SLOT 2.
      // The other two slugs are AUTHORED to align with /capabilities/technology/insights routes registered in PR #25.
      // TODO: confirm with practice lead before publish (image paths + final href slugs)
      insights={[
        {
          tag: "Technology Strategy",
          title:
            "From cost center to growth engine: rebuilding the technology operating model",
          readTime: "8 min read",
          image: "/images/insight-technology-operating-model.jpg",
          href: "/insights/technology-operating-model",
        },
        {
          tag: "Cloud",
          title:
            "The 6Rs decision that decides whether your cloud migration ships",
          readTime: "6 min read",
          image: "/images/insight-cloud-6rs.jpg",
          href: "/insights/scalable-data-architecture",
        },
        {
          tag: "Platform Engineering",
          title:
            "Why your internal developer platform is a product, not a project",
          readTime: "5 min read",
          image: "/images/insight-platform-engineering-product.jpg",
          href: "/insights/platform-engineering-as-product",
        },
      ]}
      // AUTHORED — source closing CTA was a generic two-column form ("Let's talk about your modernization roadmap") with no named lead
      // TODO: confirm with practice lead before publish (real lead name + photo + email + LinkedIn)
      closingCTA={{
        leadName: "Our Technology Practice Lead",
        leadTitle: "Head of Technology, NexDyne Consulting Group",
        leadPhoto:
          "/images/ai-team-collaboration.jpg",
        leadEmail: "technology@nexdyne.tech",
        leadLinkedinUrl: "https://www.linkedin.com/company/nexdyne",
      }}
    />
  );
}

