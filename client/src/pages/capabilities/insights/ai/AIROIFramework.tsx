import InsightArticle from "@/components/InsightArticle";

export default function AIROIFramework() {
  return (
    <InsightArticle
      title="The ROI of AI: What Mid-Size Companies Need to Know"
      subtitle="A practical framework for measuring AI investment returns, with benchmarks from 50+ mid-market implementations."
      date="January 15, 2026"
      readTime="8 min"
      category="Artificial Intelligence"
      categoryHref="/capabilities/artificial-intelligence"
      authors={[
        { name: "Michael Chen", role: "Partner, AI Practice" },
        { name: "Sarah Williams", role: "Director, Analytics" },
      ]}
      relatedContent={[
        {
          title: "Building Your First AI Use Case",
          href: "/capabilities/artificial-intelligence/insights/first-ai-use-case",
          category: "Implementation",
        },
        {
          title: "AI Governance for Growing Companies",
          href: "/capabilities/artificial-intelligence/insights/ai-governance",
          category: "Governance",
        },
        {
          title: "Generative AI in Operations",
          href: "/capabilities/artificial-intelligence/insights/generative-ai-operations",
          category: "Operations",
        },
      ]}
    >
      <p className="text-xl text-charcoal/80 leading-relaxed mb-8">
        For mid-size companies considering AI investments, the question isn't
        whether AI can deliver value—it's how to measure that value in terms
        that matter to your business. Based on our work with over 50 mid-market
        organizations, we've developed a practical framework for understanding
        and maximizing AI ROI.
      </p>

      <h2 className="text-2xl font-bold text-charcoal mt-12 mb-4 eb-garamond">
        Why Traditional ROI Models Fall Short for AI
      </h2>
      <p className="text-charcoal/80 leading-relaxed mb-6">
        Most companies approach AI ROI the same way they would any technology
        investment: calculate the cost, estimate the benefits, and divide. But
        AI investments are fundamentally different. They compound over time as
        models improve, they create capabilities that enable future initiatives,
        and they often deliver value in ways that weren't anticipated at the
        outset.
      </p>
      <p className="text-charcoal/80 leading-relaxed mb-6">
        Our research shows that companies using traditional ROI models
        consistently underestimate AI returns by 40-60%. They capture the direct
        labor savings but miss the strategic value: faster decision-making,
        improved customer experience, and competitive differentiation.
      </p>

      <h2 className="text-2xl font-bold text-charcoal mt-12 mb-4 eb-garamond">
        The Three Horizons of AI Value
      </h2>
      <p className="text-charcoal/80 leading-relaxed mb-6">
        We recommend evaluating AI investments across three time horizons, each
        with distinct value drivers and measurement approaches:
      </p>

      <h3 className="text-xl font-semibold text-charcoal mt-8 mb-3">
        Horizon 1: Operational Efficiency (0-12 months)
      </h3>
      <p className="text-charcoal/80 leading-relaxed mb-6">
        The most immediately measurable AI benefits come from automating
        repetitive tasks and accelerating existing processes. For mid-size
        companies, we typically see:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-charcoal/80">
        <li>30-50% reduction in manual data entry and processing time</li>
        <li>20-40% improvement in first-call resolution for customer service</li>
        <li>15-25% reduction in quality inspection time with maintained or improved accuracy</li>
      </ul>
      <p className="text-charcoal/80 leading-relaxed mb-6">
        These benefits are straightforward to measure: compare the time and cost
        of processes before and after AI implementation. The key is to measure
        the full process, not just the automated steps.
      </p>

      <h3 className="text-xl font-semibold text-charcoal mt-8 mb-3">
        Horizon 2: Decision Enhancement (6-24 months)
      </h3>
      <p className="text-charcoal/80 leading-relaxed mb-6">
        As AI systems mature and organizations learn to trust their outputs, the
        value shifts from doing things faster to doing things better. This
        includes:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-charcoal/80">
        <li>Improved demand forecasting accuracy (typically 15-30% improvement)</li>
        <li>Better customer segmentation leading to higher conversion rates</li>
        <li>Earlier detection of quality issues or equipment failures</li>
        <li>More accurate pricing and margin optimization</li>
      </ul>
      <p className="text-charcoal/80 leading-relaxed mb-6">
        Measuring Horizon 2 value requires establishing baselines before
        implementation and tracking decision outcomes over time. The investment
        in measurement infrastructure pays dividends as you scale AI across the
        organization.
      </p>

      <h3 className="text-xl font-semibold text-charcoal mt-8 mb-3">
        Horizon 3: Strategic Transformation (18-36 months)
      </h3>
      <p className="text-charcoal/80 leading-relaxed mb-6">
        The most significant—and hardest to measure—AI value comes from enabling
        entirely new capabilities and business models. For mid-size companies,
        this might include:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-charcoal/80">
        <li>Launching personalized products or services that weren't previously feasible</li>
        <li>Entering new markets with AI-enabled offerings</li>
        <li>Achieving scale without proportional headcount growth</li>
        <li>Building proprietary data assets that create competitive moats</li>
      </ul>

      <h2 className="text-2xl font-bold text-charcoal mt-12 mb-4 eb-garamond">
        Benchmarks from the Field
      </h2>
      <p className="text-charcoal/80 leading-relaxed mb-6">
        Based on our work with mid-market companies (typically 50-500 employees,
        $10M-$500M revenue), here are realistic benchmarks for AI ROI:
      </p>

      <div className="bg-subtle p-6 rounded-lg my-8">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 font-semibold text-charcoal">Use Case Category</th>
              <th className="text-left py-3 font-semibold text-charcoal">Typical Investment</th>
              <th className="text-left py-3 font-semibold text-charcoal">First-Year ROI</th>
              <th className="text-left py-3 font-semibold text-charcoal">Three-Year ROI</th>
            </tr>
          </thead>
          <tbody className="text-charcoal/80">
            <tr className="border-b border-border/50">
              <td className="py-3">Document Processing</td>
              <td className="py-3">$150K-$400K</td>
              <td className="py-3">150-250%</td>
              <td className="py-3">400-600%</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3">Customer Service AI</td>
              <td className="py-3">$200K-$500K</td>
              <td className="py-3">100-200%</td>
              <td className="py-3">350-500%</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3">Predictive Analytics</td>
              <td className="py-3">$250K-$600K</td>
              <td className="py-3">75-150%</td>
              <td className="py-3">300-450%</td>
            </tr>
            <tr>
              <td className="py-3">Quality/Inspection AI</td>
              <td className="py-3">$300K-$700K</td>
              <td className="py-3">100-175%</td>
              <td className="py-3">350-500%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-charcoal/80 leading-relaxed mb-6">
        These figures include implementation costs, ongoing maintenance, and
        internal change management. They assume a well-scoped initial use case
        with clear success metrics—projects without these foundations typically
        see 30-50% lower returns.
      </p>

      <h2 className="text-2xl font-bold text-charcoal mt-12 mb-4 eb-garamond">
        Five Principles for Maximizing AI ROI
      </h2>

      <h3 className="text-xl font-semibold text-charcoal mt-8 mb-3">
        1. Start with the Business Problem, Not the Technology
      </h3>
      <p className="text-charcoal/80 leading-relaxed mb-6">
        The highest-ROI AI projects begin with a clear business problem that has
        measurable impact. "We want to use AI" is not a business problem.
        "We're losing $2M annually to manual invoice processing errors" is.
      </p>

      <h3 className="text-xl font-semibold text-charcoal mt-8 mb-3">
        2. Invest in Data Quality Before AI
      </h3>
      <p className="text-charcoal/80 leading-relaxed mb-6">
        Companies that spend 20-30% of their AI budget on data preparation and
        quality see 2-3x higher returns than those that rush to model
        development. For mid-size companies with limited data infrastructure,
        this investment is even more critical.
      </p>

      <h3 className="text-xl font-semibold text-charcoal mt-8 mb-3">
        3. Plan for Change Management
      </h3>
      <p className="text-charcoal/80 leading-relaxed mb-6">
        AI projects fail more often from adoption issues than technical
        problems. Budget 15-20% of your project cost for training, communication,
        and process redesign. The best AI model delivers zero ROI if no one uses
        it.
      </p>

      <h3 className="text-xl font-semibold text-charcoal mt-8 mb-3">
        4. Build Measurement Into the Project
      </h3>
      <p className="text-charcoal/80 leading-relaxed mb-6">
        Establish baseline metrics before implementation and build ongoing
        measurement into your AI systems. This not only proves ROI but enables
        continuous improvement—AI systems that are measured improve 40% faster
        than those that aren't.
      </p>

      <h3 className="text-xl font-semibold text-charcoal mt-8 mb-3">
        5. Think Platform, Not Project
      </h3>
      <p className="text-charcoal/80 leading-relaxed mb-6">
        The highest-ROI AI investments create capabilities that can be reused
        across multiple use cases. A document processing capability built for
        accounts payable can often be extended to contracts, customer
        correspondence, and compliance documents with minimal additional
        investment.
      </p>

      <h2 className="text-2xl font-bold text-charcoal mt-12 mb-4 eb-garamond">
        Getting Started
      </h2>
      <p className="text-charcoal/80 leading-relaxed mb-6">
        For mid-size companies beginning their AI journey, we recommend starting
        with a focused assessment that identifies your highest-potential use
        cases based on data readiness, business impact, and organizational
        capability. This assessment typically takes 4-6 weeks and provides a
        clear roadmap with realistic ROI projections.
      </p>
      <p className="text-charcoal/80 leading-relaxed">
        The companies seeing the best AI returns aren't necessarily those with
        the biggest budgets or the most sophisticated technology. They're the
        ones that approach AI as a business transformation initiative, with
        clear goals, realistic expectations, and a commitment to measuring and
        improving over time.
      </p>
    </InsightArticle>
  );
}
