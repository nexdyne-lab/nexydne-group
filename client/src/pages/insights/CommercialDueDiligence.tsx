import InsightArticleV2 from "@/components/InsightArticleV2";

export default function CommercialDueDiligence() {
  const sections = [
    { id: "revenue-engine", label: "Stress-testing revenue" },
    { id: "integration-api", label: "The integration API" },
    { id: "buying-the-future", label: "Buying the future" },
  ];

  const relatedInsights = [
    { title: "The Due Diligence Checklist", category: "M&A", link: "/insights/due-diligence-checklist", image: "/images/insights/due-diligence-checklist-hero.jpg" },
    { title: "M&A Failure Analysis", category: "M&A", link: "/insights/ma-failure-analysis", image: "/images/insights/ma-failure-analysis-hero.jpg" },
    { title: "Synergy Capture", category: "M&A", link: "/insights/synergy-capture", image: "/images/insights/synergy-capture-hero.jpg" },
  ];

  return (
    <InsightArticleV2
      category="M&A"
      title="Commercial Due Diligence: Debugging the Business Model"
      subtitle="Moving beyond financial audits to stress-test the underlying commercial code of a target acquisition."
      heroImage="/images/insights/commercial-due-diligence-hero.jpg"
      publishDate="December 15, 2025"
      readTime="5 min"
      sections={sections}
      keyTakeaways={[
        "Traditional due diligence checks the financials but ignores commercial viability—a company with perfect books can still be structurally doomed.",
        "Treat commercial due diligence as a debugging exercise: hunt for the hidden dependencies, race conditions, and scalability bottlenecks that never appear on a balance sheet.",
        "Stress-test the revenue engine on unit economics, structural versus cyclical churn, and whether the addressable market is real or an optimistic hallucination.",
        "The biggest destroyer of value is failed integration; assess technical and cultural debt up front, and sometimes the right move is not to merge the codebases at all.",
      ]}
      relatedInsights={relatedInsights}
    >
      <p>
        Traditional due diligence is like a code review that only checks for syntax errors (financials) but ignores the
        logic errors (commercial viability). You can have a company with perfect books that is structurally doomed
        because its market is shrinking, its customers are churning, or its value proposition is deprecated.
      </p>
      <p>
        We approach Commercial Due Diligence (CDD) as a debugging exercise. We are looking for the bugs in the business
        model—the hidden dependencies, the race conditions, and the scalability bottlenecks that don't show up on a
        balance sheet.
      </p>

      <h2 id="revenue-engine">Stress-Testing the Revenue Engine</h2>
      <p>
        A target's revenue growth is often a lagging indicator. To understand future performance, we need to inspect
        the engine itself.
      </p>
      <h3>The CDD Debugging Checklist</h3>
      <ul>
        <li>
          <strong>Customer Unit Economics:</strong> Is the LTV/CAC ratio sustainable, or is growth being subsidized by
          venture capital?
        </li>
        <li>
          <strong>Churn Analysis:</strong> Is the churn structural (product failure) or cyclical? We look for "silent
          churn"—customers who are paying but not using.
        </li>
        <li>
          <strong>Market Depth:</strong> Is the Total Addressable Market (TAM) real, or is it a hallucination based on
          optimistic assumptions?
        </li>
      </ul>

      <h2 id="integration-api">The Integration API</h2>
      <p>
        The biggest destroyer of value in M&amp;A is failed integration. Two companies might look compatible on paper,
        but their "APIs" are incompatible. Their cultures, sales motions, and technology stacks cannot talk to each
        other.
      </p>
      <p>
        Our diligence process includes an "Integration Compatibility Check." We assess the technical and cultural debt
        of the target to estimate the true cost of integration. Sometimes, the best move is to not merge the codebases
        at all, but to run them as separate microservices.
      </p>

      <h2 id="buying-the-future">Buying the Future, Not the Past</h2>
      <p>
        Ultimately, CDD is about validating the future state. It's about answering the question: "If we inject capital
        and capabilities into this system, will it scale?" By applying rigorous analytical frameworks, we turn M&amp;A
        from a gamble into a calculated engineering decision.
      </p>
    </InsightArticleV2>
  );
}
