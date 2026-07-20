import InsightArticleV2 from "@/components/InsightArticleV2";

export default function CarbonMarkets() {
  const sections = [
    { id: "integrity-turn", label: "The integrity turn" },
    { id: "regulatory-convergence", label: "Regulatory convergence" },
    { id: "strategic-implications", label: "Strategic implications" },
  ];

  const relatedInsights = [
    { title: "The Net-Zero Transition", category: "Sustainability", link: "/insights/net-zero-transition", image: "/images/insights/net-zero-transition-hero.jpg" },
    { title: "Green Materials", category: "Sustainability", link: "/insights/green-materials", image: "/images/insights/green-materials-hero.jpg" },
    { title: "The Green Growth Imperative", category: "Sustainability", link: "/insights/green-growth-imperative", image: "/images/insights/green-growth-imperative-hero.jpg" },
  ];

  return (
    <InsightArticleV2
      category="Sustainability"
      title="Carbon Markets 2025: From Voluntary to Compliance"
      subtitle="As regulatory frameworks tighten, the distinction between voluntary and compliance carbon markets is blurring. Here is what business leaders need to know."
      heroImage="/images/insights/carbon-markets-hero.jpg"
      readTime="6 min"
      sections={sections}
      keyTakeaways={[
        "The voluntary carbon market grew rapidly on the back of corporate net-zero commitments, but concerns about credit quality and a lack of standardization have held it back.",
        "New guidance from the ICVCM and the VCMI is setting a high bar for quality, and buyers increasingly demand removal credits over avoidance credits—paying a premium for them.",
        "Article 6 of the Paris Agreement and jurisdictions like the EU and California are converging voluntary and compliance markets, which will likely drive up prices and liquidity.",
        "Leaders should audit their credit portfolios against the new integrity standards, secure long-term supply of high-quality removal credits, and prepare for stricter regulation.",
      ]}
      relatedInsights={relatedInsights}
    >
      <p>
        The voluntary carbon market (VCM) has grown rapidly in recent years, driven by corporate net-zero
        commitments. However, concerns about credit quality and a lack of standardization have held it back. Now, as
        we approach 2025, a new era is emerging—one defined by convergence with compliance markets and rigorous
        integrity standards.
      </p>

      <h2 id="integrity-turn">The Integrity Turn</h2>
      <p>
        The "wild west" days of carbon offsetting are ending. New guidance from the Integrity Council for the
        Voluntary Carbon Market (ICVCM) and the Voluntary Carbon Markets Integrity Initiative (VCMI) is setting a high
        bar for what counts as a high-quality credit. Buyers are increasingly demanding removal credits over avoidance
        credits, and they are willing to pay a premium for them.
      </p>

      <h2 id="regulatory-convergence">Regulatory Convergence</h2>
      <p>
        Governments are stepping in. Article 6 of the Paris Agreement is creating a framework for international carbon
        trading, and jurisdictions like the EU and California are exploring ways to integrate high-quality voluntary
        credits into their compliance schemes. This convergence will likely drive up prices and liquidity.
      </p>

      <blockquote>
        The future of carbon markets lies in high-integrity, transparent, and regulated trading systems that can
        unlock the trillions needed for climate action.
      </blockquote>

      <h2 id="strategic-implications">Strategic Implications</h2>
      <p>
        For companies, this means that carbon credits can no longer be a "check-the-box" exercise. They must be part
        of a comprehensive decarbonization strategy that prioritizes internal abatement. When credits are used, they
        must be high-quality and verified.
      </p>
      <p>We recommend three actions for business leaders:</p>
      <ol>
        <li>
          <strong>Audit your portfolio:</strong> Review existing carbon credit purchases against the new integrity
          standards.
        </li>
        <li>
          <strong>Secure supply:</strong> Long-term offtake agreements for high-quality removal credits (e.g., direct
          air capture, biochar) are becoming essential as demand outstrips supply.
        </li>
        <li>
          <strong>Prepare for regulation:</strong> Anticipate stricter reporting requirements and potential carbon
          border taxes.
        </li>
      </ol>
    </InsightArticleV2>
  );
}
