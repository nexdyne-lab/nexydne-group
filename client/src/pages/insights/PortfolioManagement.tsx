import InsightArticleV2 from "@/components/InsightArticleV2";

export default function PortfolioManagement() {
  const sections = [
    { id: "portfolio-challenge", label: "The challenge" },
    { id: "portfolio-framework", label: "The framework" },
    { id: "portfolio-governance", label: "Governance" },
    { id: "common-mistakes", label: "Common mistakes" },
    { id: "bottom-line", label: "The bottom line" },
  ];

  const relatedInsights = [
    { title: "Why Strategic Plans Fail", category: "Business Strategy", link: "/insights/strategic-plans-success", image: "/images/insights/strategic-plans-success-hero.jpg" },
    { title: "Operating Model Redesign", category: "Business Strategy", link: "/insights/operating-model-redesign", image: "/images/insights/operating-model-redesign-hero.jpg" },
    { title: "Navigating Business Transformation", category: "Business Transformation", link: "/insights/business-transformation-strategy", image: "/images/insights/business-transformation-strategy-hero.jpg" },
  ];

  return (
    <InsightArticleV2
      category="Business Strategy"
      title="Portfolio Management Excellence"
      subtitle="How to manage your portfolio of strategic initiatives for maximum impact. A framework for prioritization, resource allocation, and governance."
      heroImage="/images/insights/portfolio-management-hero.jpg"
      publishDate="December 2024"
      readTime="9 min"
      sections={sections}
      keyTakeaways={[
        "Most organizations have more good ideas than resources; portfolio management is the discipline of choosing what to fund and what to stop.",
        "A sound framework weighs strategic alignment, value, resource capacity, and balance across time horizons and risk levels.",
        "Robust governance—a review board, stage-gates, and a live dashboard—keeps the portfolio focused and enables early termination of what isn't working.",
        "Treating the portfolio as a whole, not a collection of independent projects, is how strategy becomes reality.",
      ]}
      relatedInsights={relatedInsights}
    >
      <p>
        Most organizations have more good ideas than resources to pursue them. The challenge isn't generating
        initiatives—it's choosing which ones to fund, ensuring they get the resources they need, and killing those that
        aren't working. This is the essence of portfolio management.
      </p>

      <h2 id="portfolio-challenge">The Portfolio Challenge</h2>

      <p>
        Effective portfolio management ensures that limited resources flow to the highest-value opportunities while
        maintaining balance across time horizons, risk levels, and strategic themes.
      </p>

      <h2 id="portfolio-framework">The Portfolio Management Framework</h2>

      <h3>Strategic Alignment</h3>
      <p>
        Every initiative should connect clearly to strategic priorities. If it doesn't support strategy, why are you
        doing it? Use strategic alignment as the first filter for portfolio decisions.
      </p>

      <h3>Value Assessment</h3>
      <p>
        Quantify the expected value of each initiative—revenue impact, cost savings, risk reduction, or strategic
        positioning. Use consistent methodologies to enable comparison.
      </p>

      <h3>Resource Capacity</h3>
      <p>
        Understand your organization's capacity to execute. The best portfolio is one you can actually deliver. Be
        realistic about constraints—money, people, management attention.
      </p>

      <h3>Portfolio Balance</h3>
      <p>
        Balance the portfolio across dimensions: short-term vs. long-term, high-risk vs. low-risk, growth vs.
        efficiency. Avoid over-concentration in any single area.
      </p>

      <h3>The Three Horizons Model</h3>
      <p>A useful framework for balancing time horizons:</p>
      <ul>
        <li><strong>Horizon 1 (70%):</strong> Core business improvements with near-term payback.</li>
        <li><strong>Horizon 2 (20%):</strong> Emerging opportunities with medium-term potential.</li>
        <li><strong>Horizon 3 (10%):</strong> Transformational bets with long-term upside.</li>
      </ul>

      <h2 id="portfolio-governance">Portfolio Governance</h2>

      <p>
        Effective portfolio management requires robust governance—the processes and forums for making portfolio
        decisions and tracking execution.
      </p>

      <h3>Portfolio Review Board</h3>
      <p>
        Senior leadership forum that meets quarterly to review portfolio performance, make prioritization decisions, and
        allocate resources.
      </p>

      <h3>Stage-Gate Process</h3>
      <p>
        Structured checkpoints where initiatives must demonstrate progress to continue receiving funding. Enables early
        termination of underperforming initiatives.
      </p>

      <h3>Portfolio Dashboard</h3>
      <p>
        Real-time visibility into portfolio health—initiative status, resource utilization, value delivery, and risk
        exposure.
      </p>

      <h2 id="common-mistakes">Common Portfolio Mistakes</h2>

      <ul>
        <li><strong>Too many initiatives:</strong> Spreading resources too thin means nothing gets done well. Focus on fewer, bigger bets.</li>
        <li><strong>Failure to kill:</strong> Continuing to fund underperforming initiatives because of sunk costs or politics. Be willing to cut losses.</li>
        <li><strong>Short-term bias:</strong> Over-investing in quick wins at the expense of longer-term transformation.</li>
        <li><strong>Ignoring interdependencies:</strong> Initiatives often depend on each other. Failing to manage dependencies leads to delays and waste.</li>
      </ul>

      <h2 id="bottom-line">The Bottom Line</h2>

      <p>
        Portfolio management is how strategy becomes reality. By rigorously prioritizing initiatives, allocating
        resources to the highest-value opportunities, and maintaining governance discipline, organizations can
        dramatically improve their return on strategic investment. The key is treating the portfolio as a whole, not
        just a collection of independent projects.
      </p>
    </InsightArticleV2>
  );
}
