import InsightArticleV2 from "@/components/InsightArticleV2";

const Cite = ({ n }: { n: number }) => (
  <sup>
    <a href={`#ref-${n}`} className="text-primary no-underline hover:underline">{n}</a>
  </sup>
);

export default function EUAIActMidMarket() {
  const references = [
    { label: "EUR-Lex — Regulation (EU) 2024/1689 (the EU Artificial Intelligence Act), full text.", url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj" },
    { label: "European Commission — AI Act: application timeline and guidance.", url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai" },
    { label: "NIST — AI Risk Management Framework.", url: "https://www.nist.gov/itl/ai-risk-management-framework" },
  ];

  const relatedInsights = [
    { title: "The AI Adoption Outlook 2026", category: "Featured Insight", link: "/insights/ai-adoption-outlook-2026", image: "/images/agentic-ai-abstract.jpg" },
    { title: "The Pragmatic CEO's Guide to AI", category: "AI Executive Guide", link: "/insights/ceo-guide-data-modernization", image: "/images/hero-ceo-ai-guide.jpg" },
    { title: "Shadow AI Is Already Inside Your Firm", category: "Security & Risk", link: "/insights/shadow-ai-inside-your-firm", image: "/images/insights/shadow-ai-inside-your-firm-hero.jpg" },
  ];

  const sections = [
    { id: "the-misconception", label: "The misconception" },
    { id: "august-2026", label: "What lands in 2026" },
    { id: "90-day-posture", label: "A 90-day posture" },
    { id: "compliance-by-product", label: "Compliance as by-product" },
  ];

  return (
    <InsightArticleV2
      category="Regulation & Governance"
      categoryHref="/insights"
      title="The EU AI Act Is Enforcing in Stages — and August 2026 Is the Big One"
      subtitle="Prohibited practices and AI-literacy duties have applied since February 2025; obligations for general-purpose AI since August 2025. The high-risk regime lands in August 2026 — and it reaches far more growing firms than most of them assume."
      heroImage="/images/business-strategy-abstract.jpg"
      publishDate="July 6, 2026"
      readTime="9 min"
      sections={sections}
      keyTakeaways={[
        "The AI Act entered into force in August 2024 and applies in stages: prohibitions and AI-literacy duties from February 2025, general-purpose AI obligations from August 2025, and most high-risk requirements from August 2026.",
        "You don't have to build AI to be covered. Deployers — firms that merely use AI systems in areas like hiring, credit, or worker management — carry their own obligations.",
        "Penalties scale to the seriousness of the breach, reaching up to €35 million or 7% of global turnover for prohibited practices.",
        "The pragmatic response is an AI inventory, role classification (provider vs. deployer), and a governance file per system — the same discipline HIG™ prescribes regardless of regulation.",
      ]}
      references={references}
      relatedInsights={relatedInsights}
    >
      <p>
        The most consequential technology regulation of the decade is no longer pending. <strong>The EU AI Act is
        in force and applying in stages</strong><Cite n={1} />: bans on prohibited practices and baseline
        AI-literacy duties have applied since February 2025, transparency and governance obligations for
        general-purpose AI models since August 2025 — and in August 2026, the heart of the regulation arrives: the
        compliance regime for high-risk AI systems<Cite n={2} />.
      </p>

      <p>
        Large enterprises have compliance programs standing. The exposed population is growing companies — firms
        that don't think of themselves as "AI companies" but are, in the Act's terms, <em>deployers</em> of AI
        systems: screening CVs with an AI tool, scoring credit applications, monitoring worker productivity,
        routing insurance claims. Deployment alone creates obligations.
      </p>

      <h2 id="the-misconception">The misconception that creates the exposure</h2>

      <p>
        The recurring assumption we hear — "we just use vendor tools, so compliance is the vendor's problem" — is
        wrong in a specific, expensive way. The Act assigns duties by role: <em>providers</em> (who build or brand
        AI systems) carry the heaviest load, but <em>deployers</em> of high-risk systems have their own — using
        systems per instructions, ensuring human oversight, monitoring operation, keeping logs, and informing
        affected people where required<Cite n={1} />. A firm can also become a provider without noticing, for
        example by substantially modifying a system or marketing it under its own name.
      </p>

      <blockquote>
        "We just use the tools" is not a compliance position. Under the AI Act, using the tools is precisely what
        creates the obligations.
      </blockquote>

      <h2 id="august-2026">What actually lands in August 2026</h2>

      <p>
        The high-risk regime covers AI used in domains listed in the Act — among them employment and worker
        management, education, essential services, credit scoring, and insurance pricing. For those systems the
        rules require risk management, data governance, technical documentation, logging, human oversight, and
        post-market monitoring<Cite n={1} />. None of it is exotic; all of it assumes you can produce evidence on
        request. Evidence is exactly what the AI usage of most growing companies lacks today.
      </p>

      <p>
        The penalty structure gets attention — up to €35 million or 7% of worldwide turnover for prohibited
        practices, with lower tiers for other violations<Cite n={1} /> — but the operational risk arrives earlier
        and quieter: enterprise customers are already pushing AI-compliance clauses into procurement. The first
        place growing firms feel the Act is not a regulator's letter. It is a lost RFP.
      </p>

      <h2 id="90-day-posture">A 90-day posture that doesn't require a compliance department</h2>

      <h3>Days 1–30: Inventory</h3>
      <p>
        List every AI system in use — bought, built, or embedded in SaaS you already license. For each: what it
        does, whose data it touches, who owns it internally. (This exercise reliably surfaces the shadow-AI
        population too, which is its own risk story.)
      </p>

      <h3>Days 31–60: Classify</h3>
      <p>
        For each system, answer two questions: are we provider or deployer, and does the use case touch a
        high-risk domain? Most inventories sort into a small high-risk set that needs real work and a long tail
        that needs only transparency hygiene.
      </p>

      <h3>Days 61–90: File</h3>
      <p>
        Open a governance file per high-risk system: purpose, oversight owner, logging locations, vendor
        documentation, incident path. Align the structure to a recognized framework such as the NIST AI RMF
        <Cite n={3} /> so the same file serves EU compliance, customer due-diligence, and board reporting at once.
      </p>

      <h2 id="compliance-by-product">Compliance as a by-product, not a project</h2>

      <p>
        Firms that treat the AI Act as a standalone compliance project will do the work twice — once for the
        regulator, once for the business. Firms that stand up genuine AI governance — inventory, ownership,
        oversight, evidence — get compliance as a by-product and, more importantly, get an AI estate they can
        actually steer. That is the entire argument of Human Intelligence Governance: govern first, and the
        regulatory question answers itself.
      </p>
    </InsightArticleV2>
  );
}
