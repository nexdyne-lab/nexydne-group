import InsightArticle from "@/components/InsightArticle";

export default function StrategicFinanceGuide() {
  return (
    <InsightArticle
      title="The Mid-Market CFO's Guide to Strategic Finance"
      subtitle="How CFOs at growing companies can shift from financial reporting to strategic business partnership."
      date="January 2026"
      readTime="10 min"
      category="Strategy & Corporate Finance"
      categoryHref="/capabilities/strategy-corporate-finance"
      authors={[
        { name: "Michael Chen", role: "Partner, Strategy & Finance" },
        { name: "Sarah Williams", role: "Senior Manager, CFO Advisory" },
      ]}
      relatedContent={[
        {
          title: "Capital Raising in 2026: What Mid-Size Companies Need to Know",
          href: "/capabilities/strategy-corporate-finance/insights/capital-raising-2026",
          category: "Capital",
        },
        {
          title: "Building a World-Class FP&A Function",
          href: "/capabilities/strategy-corporate-finance/insights/fpa-excellence",
          category: "FP&A",
        },
        {
          title: "Working Capital Optimization: Quick Wins and Long-Term Strategies",
          href: "/capabilities/strategy-corporate-finance/insights/working-capital",
          category: "Cash Flow",
        },
      ]}
    >
      <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
        The role of the CFO has evolved dramatically over the past decade. Today's mid-market CFOs are expected to be strategic partners to the CEO, not just financial stewards. This guide outlines how finance leaders at growing companies can make this transition while maintaining operational excellence.
      </p>

      <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6 eb-garamond">
        The Evolution of the CFO Role
      </h2>
      <p className="text-charcoal/80 mb-6 leading-relaxed">
        Twenty years ago, the CFO's primary responsibilities centered on financial reporting, compliance, and cost control. While these functions remain important, today's business environment demands much more. CEOs increasingly look to their CFOs for strategic insight, market analysis, and growth planning.
      </p>
      <p className="text-charcoal/80 mb-6 leading-relaxed">
        For mid-market companies—typically those with $50M to $500M in revenue—this evolution presents both challenges and opportunities. Unlike their counterparts at large enterprises, mid-market CFOs often lack large teams and sophisticated systems. Yet they face similar strategic demands from boards, investors, and management teams.
      </p>

      <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6 eb-garamond">
        Five Pillars of Strategic Finance
      </h2>
      <p className="text-charcoal/80 mb-6 leading-relaxed">
        Based on our work with hundreds of mid-market companies, we've identified five pillars that distinguish strategic CFOs from traditional finance leaders:
      </p>

      <h3 className="text-xl font-semibold text-charcoal mt-8 mb-4">
        1. Forward-Looking Analysis
      </h3>
      <p className="text-charcoal/80 mb-6 leading-relaxed">
        Strategic CFOs spend more time looking forward than backward. While accurate historical reporting remains essential, the real value lies in forecasting, scenario planning, and predictive analytics. This means investing in planning tools and processes that enable rapid "what-if" analysis.
      </p>

      <h3 className="text-xl font-semibold text-charcoal mt-8 mb-4">
        2. Business Partnership
      </h3>
      <p className="text-charcoal/80 mb-6 leading-relaxed">
        The most effective CFOs position themselves as partners to business unit leaders, not just scorekeepers. This requires deep understanding of operations, customer dynamics, and competitive positioning. Regular engagement with sales, operations, and product teams builds the context necessary for meaningful financial guidance.
      </p>

      <h3 className="text-xl font-semibold text-charcoal mt-8 mb-4">
        3. Capital Strategy
      </h3>
      <p className="text-charcoal/80 mb-6 leading-relaxed">
        Strategic CFOs think proactively about capital structure and funding. Rather than waiting for cash needs to arise, they maintain relationships with lenders and investors, understand market conditions, and plan capital raises well in advance of actual requirements.
      </p>

      <h3 className="text-xl font-semibold text-charcoal mt-8 mb-4">
        4. Technology Enablement
      </h3>
      <p className="text-charcoal/80 mb-6 leading-relaxed">
        Modern finance functions require modern tools. Strategic CFOs invest in systems that automate routine tasks, improve data quality, and enable real-time visibility. This frees the finance team to focus on analysis and insight rather than data gathering and reconciliation.
      </p>

      <h3 className="text-xl font-semibold text-charcoal mt-8 mb-4">
        5. Talent Development
      </h3>
      <p className="text-charcoal/80 mb-6 leading-relaxed">
        Building a strategic finance function requires strategic finance talent. The best CFOs invest heavily in developing their teams, hiring for analytical capability and business acumen rather than just technical accounting skills.
      </p>

      <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6 eb-garamond">
        Making the Transition
      </h2>
      <p className="text-charcoal/80 mb-6 leading-relaxed">
        Shifting from traditional to strategic finance doesn't happen overnight. We recommend a phased approach that maintains operational stability while building new capabilities:
      </p>

      <div className="bg-subtle p-6 rounded-lg my-8">
        <h4 className="font-semibold text-charcoal mb-4">Phase 1: Foundation (Months 1-3)</h4>
        <ul className="list-disc pl-6 text-charcoal/80 space-y-2">
          <li>Assess current state of finance operations and identify quick wins</li>
          <li>Implement basic forecasting and variance analysis processes</li>
          <li>Begin building relationships with business unit leaders</li>
        </ul>
      </div>

      <div className="bg-subtle p-6 rounded-lg my-8">
        <h4 className="font-semibold text-charcoal mb-4">Phase 2: Enhancement (Months 4-9)</h4>
        <ul className="list-disc pl-6 text-charcoal/80 space-y-2">
          <li>Deploy planning and analysis tools that enable scenario modeling</li>
          <li>Establish regular business review cadence with operational leaders</li>
          <li>Develop capital strategy and begin relationship building with capital providers</li>
        </ul>
      </div>

      <div className="bg-subtle p-6 rounded-lg my-8">
        <h4 className="font-semibold text-charcoal mb-4">Phase 3: Optimization (Months 10-18)</h4>
        <ul className="list-disc pl-6 text-charcoal/80 space-y-2">
          <li>Automate routine reporting to free capacity for strategic work</li>
          <li>Build advanced analytics capabilities including predictive modeling</li>
          <li>Develop finance team skills through training and strategic hiring</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6 eb-garamond">
        Measuring Success
      </h2>
      <p className="text-charcoal/80 mb-6 leading-relaxed">
        How do you know if your transition to strategic finance is working? We recommend tracking both quantitative and qualitative indicators:
      </p>

      <div className="overflow-x-auto my-8">
        <table className="min-w-full border border-border">
          <thead className="bg-subtle">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-charcoal border-b">Metric</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-charcoal border-b">Traditional Finance</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-charcoal border-b">Strategic Finance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 text-charcoal/80 border-b">Time spent on reporting vs. analysis</td>
              <td className="px-6 py-4 text-charcoal/80 border-b">70% / 30%</td>
              <td className="px-6 py-4 text-charcoal/80 border-b">30% / 70%</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-charcoal/80 border-b">Forecast accuracy</td>
              <td className="px-6 py-4 text-charcoal/80 border-b">±15%</td>
              <td className="px-6 py-4 text-charcoal/80 border-b">±5%</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-charcoal/80 border-b">Days to close</td>
              <td className="px-6 py-4 text-charcoal/80 border-b">15-20 days</td>
              <td className="px-6 py-4 text-charcoal/80 border-b">5-7 days</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-charcoal/80 border-b">CEO satisfaction with finance partnership</td>
              <td className="px-6 py-4 text-charcoal/80 border-b">Adequate</td>
              <td className="px-6 py-4 text-charcoal/80 border-b">Essential</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6 eb-garamond">
        Key Takeaways
      </h2>
      <ul className="list-disc pl-6 text-charcoal/80 space-y-3 mb-8">
        <li>The CFO role has evolved from financial steward to strategic partner</li>
        <li>Mid-market CFOs face unique challenges due to limited resources</li>
        <li>Five pillars define strategic finance: forward-looking analysis, business partnership, capital strategy, technology enablement, and talent development</li>
        <li>Transition should be phased to maintain operational stability</li>
        <li>Success requires both quantitative metrics and qualitative feedback</li>
      </ul>
    </InsightArticle>
  );
}
