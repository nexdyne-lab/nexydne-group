import InsightArticleV2 from "@/components/InsightArticleV2";

export default function MACommercialDueDiligence() {
  const sections = [
    { id: "market-validation", label: "Market validation" },
    { id: "competitive-positioning", label: "Competitive positioning" },
    { id: "customer-relationships", label: "Customer relationships" },
    { id: "product-market-fit", label: "Product-market fit" },
    { id: "go-to-market", label: "Go-to-market" },
    { id: "growth-projections", label: "Growth projections" },
    { id: "synergy-validation", label: "Synergy validation" },
    { id: "nexdyne-approach", label: "How NexDyne helps" },
  ];

  const relatedInsights = [
    { title: "Why M&A Deals Fail: Lessons from Integration Disasters", category: "M&A Strategy", link: "/insights/ma-failure-analysis", image: "/images/industries/tech-datacenter.jpg" },
    { title: "The Integration Playbook: First 100 Days", category: "M&A Strategy", link: "/insights/integration-playbook", image: "/images/industries/biz-meeting.jpg" },
    { title: "Synergy Capture", category: "M&A Strategy", link: "/insights/synergy-capture", image: "/images/industries/fin-monitors.jpg" },
  ];

  return (
    <InsightArticleV2
      category="M&A Strategy"
      title="Commercial Due Diligence: The Questions That Matter Most"
      subtitle="Financial due diligence tells you what happened. Commercial due diligence tells you what will happen. Understanding market dynamics, competitive positioning, and customer relationships determines whether projected growth is achievable or aspirational."
      heroImage="/images/industries/deal-handshake.jpg"
      publishDate="December 8, 2025"
      readTime="13 min"
      sections={sections}
      keyTakeaways={[
        "Commercial diligence validates whether historical performance can continue and grow, examining market, competition, customers, and growth potential with a skeptical eye.",
        "Independent market sizing, win/loss analysis, and unfiltered customer reference calls reveal the reality behind management's claims.",
        "Strong product-market fit and repeatable, efficient go-to-market processes determine whether growth can scale or requires heroic execution.",
        "Management projections are almost always optimistic, and most synergies take longer to capture than deal models assume—both must be stress-tested against reality.",
      ]}
      relatedInsights={relatedInsights}
    >
      <p>
        Commercial due diligence is where acquisition theses are validated or destroyed. While financial diligence
        confirms historical performance, commercial diligence assesses whether that performance can continue and grow.
        It examines market dynamics, competitive positioning, customer relationships, and growth potential with a
        skeptical eye toward management projections.
      </p>

      <h2 id="market-validation">Market Validation: Is the Opportunity Real?</h2>
      <p>
        Management teams always present attractive market opportunities in their pitch materials. Commercial diligence
        validates whether these opportunities are real, accessible, and as large as claimed. Start by independently
        sizing the market using bottoms-up analysis rather than accepting top-down analyst reports. Identify the
        specific customer segments the target serves and count the addressable universe.
      </p>
      <p>
        Assess market growth drivers and headwinds. Are the trends that drove historical growth sustainable? What
        regulatory, technological, or competitive changes could accelerate or decelerate growth? Talk to industry
        experts, customers, and competitors to triangulate market dynamics. The goal is to develop an independent view
        of market opportunity that either confirms or challenges management's thesis.
      </p>
      <p>
        <strong>Critical market assessment questions:</strong>
      </p>
      <ul>
        <li>
          <strong>Market size:</strong> What's the addressable customer universe? How did you calculate it?
        </li>
        <li>
          <strong>Growth drivers:</strong> What's driving market growth? Are these trends sustainable?
        </li>
        <li>
          <strong>Market maturity:</strong> Is this an emerging, growing, or mature market?
        </li>
        <li>
          <strong>Regulatory environment:</strong> What regulatory changes could impact the market?
        </li>
        <li>
          <strong>Technology disruption:</strong> What technologies could disrupt current solutions?
        </li>
        <li>
          <strong>Customer needs evolution:</strong> How are customer requirements changing?
        </li>
      </ul>

      <h2 id="competitive-positioning">Competitive Positioning: Why Do Customers Choose This Company?</h2>
      <p>
        Understanding competitive positioning requires going beyond the target company's claims to understand how
        customers actually make purchase decisions. Conduct win/loss analysis by talking to customers who chose the
        target and those who chose competitors. What factors drove their decisions? How differentiated is the target's
        offering in reality versus perception?
      </p>
      <p>
        Map the competitive landscape comprehensively. Who are the direct competitors? What about indirect
        alternatives or substitute solutions? How do competitors' capabilities, pricing, and go-to-market approaches
        compare? What competitive moves are likely in the next 2-3 years? The goal is to assess whether the target's
        competitive position is sustainable or vulnerable to erosion.
      </p>

      <h2 id="customer-relationships">Customer Relationship Quality: Will They Stay?</h2>
      <p>
        Revenue quality matters as much as revenue quantity. Assess customer relationships through multiple lenses:
        concentration risk, contract terms, switching costs, and satisfaction levels. High customer concentration
        creates vulnerability—if the top three customers represent 40% of revenue, their departure would be
        catastrophic. Understand what keeps them loyal and what might cause them to leave.
      </p>
      <p>
        Conduct customer reference calls that go beyond scripted testimonials. Ask about the buying process,
        implementation experience, ongoing support quality, and likelihood to renew. Probe for concerns or
        frustrations. Talk to customers who've churned to understand why they left. This unfiltered feedback reveals
        relationship quality that financial metrics can't capture.
      </p>
      <p>
        <strong>Customer relationship assessment framework:</strong>
      </p>
      <ul>
        <li>
          <strong>Concentration analysis:</strong> Revenue distribution across customer base.
        </li>
        <li>
          <strong>Contract terms:</strong> Length, renewal provisions, termination rights.
        </li>
        <li>
          <strong>Switching costs:</strong> How difficult or expensive is it for customers to leave?
        </li>
        <li>
          <strong>Satisfaction metrics:</strong> NPS scores, renewal rates, expansion revenue.
        </li>
        <li>
          <strong>Relationship depth:</strong> Single vs. multiple stakeholder relationships.
        </li>
        <li>
          <strong>Churn analysis:</strong> Why do customers leave? What patterns exist?
        </li>
      </ul>

      <h2 id="product-market-fit">Product-Market Fit: Is This Truly Solving Customer Problems?</h2>
      <p>
        Product-market fit determines whether growth can scale efficiently or requires constant founder-led selling.
        Strong product-market fit manifests in organic growth, high retention, enthusiastic customer advocacy, and
        repeatable sales processes. Weak fit shows up as high customer acquisition costs, long sales cycles, extensive
        customization requirements, and high churn.
      </p>
      <p>
        Assess product-market fit by examining usage metrics, feature adoption, and customer outcomes. Are customers
        using the product extensively or minimally? Which features drive value? Can customers quantify the ROI they're
        achieving? Strong product-market fit means customers can't imagine going back to their previous solution. Weak
        fit means they're using it because they've already paid for it.
      </p>

      <h2 id="go-to-market">Go-to-Market Effectiveness: Can This Scale?</h2>
      <p>
        Scalable growth requires repeatable, efficient go-to-market processes. Analyze customer acquisition by channel
        to understand what's working and what's not. Calculate customer acquisition cost (CAC) by channel and customer
        segment. Assess sales cycle length, win rates, and average deal size. Map the customer journey from awareness
        to purchase to understand conversion dynamics.
      </p>
      <p>
        Evaluate the sales organization's capabilities and capacity. Are they order-takers benefiting from strong
        inbound demand, or skilled sellers creating opportunities? What happens when you add more sales
        capacity—does revenue scale proportionally? Understanding go-to-market scalability determines whether projected
        growth requires heroic execution or systematic process execution.
      </p>
      <p>
        <strong>Go-to-market assessment areas:</strong>
      </p>
      <ul>
        <li>
          <strong>Channel effectiveness:</strong> CAC, conversion rates, and ROI by channel.
        </li>
        <li>
          <strong>Sales process:</strong> Pipeline stages, conversion rates, cycle time.
        </li>
        <li>
          <strong>Sales capacity:</strong> Quota attainment, ramp time, productivity metrics.
        </li>
        <li>
          <strong>Marketing efficiency:</strong> Lead generation cost, lead quality, conversion rates.
        </li>
        <li>
          <strong>Customer acquisition:</strong> Organic vs. paid growth, referral rates.
        </li>
        <li>
          <strong>Expansion motion:</strong> Land-and-expand effectiveness, upsell rates.
        </li>
      </ul>

      <h2 id="growth-projections">Growth Projections: Achievable or Aspirational?</h2>
      <p>
        Management projections are almost always optimistic. Commercial diligence stress-tests these projections
        against market reality, competitive dynamics, and operational capacity. Build your own bottoms-up forecast
        based on current pipeline, historical conversion rates, and planned capacity additions. Compare this to
        management's projections to identify gaps and assess achievability.
      </p>
      <p>
        Pay particular attention to inflection points in the forecast where growth accelerates. What specific
        initiatives or market changes drive these inflections? Are they realistic given competitive dynamics and
        organizational capabilities? Conservative projections that you can defend are far more valuable than aggressive
        projections that collapse under scrutiny.
      </p>

      <h2 id="synergy-validation">Synergy Validation: Can We Actually Capture This Value?</h2>
      <p>
        Projected synergies often justify premium valuations, but most synergies prove harder to capture than
        anticipated. Validate revenue synergies by assessing customer overlap, product complementarity, and
        cross-selling feasibility. Talk to customers about their interest in combined offerings. Understand competitive
        responses that might limit synergy capture.
      </p>
      <p>
        Cost synergies are more predictable but still require careful assessment. Identify specific cost reduction
        opportunities with detailed implementation plans. Understand one-time costs required to achieve synergies.
        Model the timing of synergy realization realistically—most synergies take 12-24 months to fully capture, not
        the 6-12 months often assumed in deal models.
      </p>

      <h2 id="nexdyne-approach">How NexDyne Conducts Commercial Diligence</h2>
      <p>
        At NexDyne, we bring deep industry expertise and rigorous frameworks to commercial due diligence. Our approach
        includes independent market sizing and growth analysis, comprehensive competitive assessment with win/loss
        analysis, extensive customer interviews across diverse segments, go-to-market effectiveness evaluation, and
        realistic synergy validation with implementation planning.
      </p>
      <p>
        Our clients make better acquisition decisions because we provide objective, evidence-based assessment of
        commercial viability. We're not afraid to challenge management projections or recommend walking away from deals
        that don't meet strategic or commercial criteria. Our goal is to help you avoid value-destroying acquisitions
        and maximize returns on deals you do complete.
      </p>
    </InsightArticleV2>
  );
}
