import InsightArticleV2 from "@/components/InsightArticleV2";

export default function DigitalGrowthPlaybook() {
  const sections = [
    { id: "growth-stage-advantage", label: "Growth-stage advantage" },
    { id: "digital-channel-strategy", label: "Channel strategy" },
    { id: "growth-framework", label: "The growth framework" },
    { id: "technology-choices", label: "Technology choices" },
    { id: "measuring-success", label: "Measuring success" },
    { id: "real-world-examples", label: "Real-world examples" },
    { id: "getting-started", label: "Getting started" },
  ];

  const relatedInsights = [
    { title: "E-commerce Economics: Building Profitable D2C Channels", category: "Article", link: "/insights/ecommerce-economics", image: "/images/insights/ecommerce-economics-hero.jpg" },
    { title: "The Marketplace Playbook: Building Network Effects", category: "Whitepaper", link: "/insights/marketplace-playbook", image: "/images/insights/marketplace-playbook-hero.jpg" },
    { title: "From MVP to Scale: The Startup Growth Journey", category: "Article", link: "/insights/from-mvp-to-scale", image: "/images/insights/from-mvp-to-scale-hero.jpg" },
  ];

  return (
    <InsightArticleV2
      category="Growth"
      title="The digital growth playbook for growing companies"
      subtitle="How leading growing companies are building digital channels that compete with well-funded startups and enterprise incumbents."
      heroImage="/images/insights/digital-growth-playbook-hero.jpg"
      publishDate="December 15, 2025"
      readTime="8 min"
      sections={sections}
      authors={[{ name: "NexDyne Growth Strategy Team", role: "Growth & Marketing Practice" }]}
      keyTakeaways={[
        "Growing companies occupy a sweet spot: established relationships and proven products, plus the speed to out-maneuver larger competitors.",
        "Match digital channel investment—D2C e-commerce, B2B ordering, marketplaces, subscriptions—to customer behavior and competitive dynamics.",
        "The SCALE framework sequences digital growth: strategy, capabilities, acquisition, loyalty, expansion.",
        "Start with a focused pilot, prove the model, and measure business outcomes rather than vanity metrics.",
      ]}
      relatedInsights={relatedInsights}
    >
      <p>
        Growing companies face a unique challenge: they're too large to ignore digital transformation, but often lack
        the resources of enterprise competitors or the agility of startups. Yet this position can be an advantage—if you
        know how to leverage it.
      </p>

      <h2 id="growth-stage-advantage">The growth-stage advantage</h2>

      <p>
        Companies with 100-500 employees occupy a strategic sweet spot. Unlike startups, you have established customer
        relationships, proven products, and operational infrastructure. Unlike enterprises, you can make decisions
        quickly, implement changes without bureaucratic overhead, and pivot when market conditions demand it.
      </p>

      <p>
        The most successful growth-stage digital transformations leverage this position by combining startup-like speed
        with enterprise-grade execution. They don't try to out-spend larger competitors—they out-maneuver them. The
        signals are clear:
      </p>

      <ul>
        <li><strong>67%</strong> of growing companies plan to increase digital investment.</li>
        <li><strong>3.2x</strong> faster growth for digitally mature growing firms.</li>
        <li><strong>42%</strong> report digital channels as their primary growth driver.</li>
      </ul>

      <h2 id="digital-channel-strategy">Digital channel strategy</h2>

      <p>
        The first step in any digital growth initiative is choosing the right channels. Not every business needs a
        mobile app, and not every product sells well through e-commerce. The key is matching channel investment to
        customer behavior and competitive dynamics.
      </p>

      <ul>
        <li>
          <strong>Direct-to-consumer e-commerce:</strong> ideal for product companies with strong brands and repeat
          purchase potential. Requires investment in logistics, customer service, and digital marketing.
        </li>
        <li>
          <strong>B2B digital ordering:</strong> perfect for distributors and manufacturers with existing customer
          relationships. Focus on self-service, integration with customer systems, and personalized pricing.
        </li>
        <li>
          <strong>Marketplace participation:</strong> lower barrier to entry for companies testing digital channels.
          Amazon, industry-specific marketplaces, or building your own platform.
        </li>
        <li>
          <strong>Subscription/recurring revenue:</strong> transform one-time transactions into ongoing relationships.
          Works for services, consumables, and software-enabled products.
        </li>
      </ul>

      <h2 id="growth-framework">The growth framework</h2>

      <p>
        Successful digital growth follows a predictable pattern. We've codified this into a framework that guides
        investment decisions and resource allocation—the SCALE framework:
      </p>

      <ol>
        <li><strong>Strategy:</strong> define your digital value proposition and competitive positioning.</li>
        <li><strong>Capabilities:</strong> build or acquire the technology, talent, and processes needed.</li>
        <li><strong>Acquisition:</strong> drive traffic and convert visitors into customers.</li>
        <li><strong>Loyalty:</strong> retain customers and maximize lifetime value.</li>
        <li><strong>Expansion:</strong> scale what works and enter new markets or channels.</li>
      </ol>

      <h2 id="technology-choices">Technology choices that matter</h2>

      <p>
        The technology landscape for digital commerce has never been more complex—or more powerful. Growing companies
        need to make strategic choices about platforms, architecture, and build-vs-buy decisions.
      </p>

      <p>
        Our recommendation: start with composable, API-first platforms that allow you to add capabilities
        incrementally. Avoid monolithic suites that lock you into a single vendor's roadmap. The goal is flexibility—the
        ability to swap out components as your needs evolve.
      </p>

      <h3>Quick wins (0-6 months)</h3>
      <ul>
        <li>Launch basic e-commerce on Shopify or BigCommerce.</li>
        <li>Implement marketing automation.</li>
        <li>Set up analytics and tracking.</li>
        <li>Create a customer self-service portal.</li>
      </ul>

      <h3>Strategic investments (6-18 months)</h3>
      <ul>
        <li>Migrate to headless commerce architecture.</li>
        <li>Build custom integrations with ERP and CRM.</li>
        <li>Implement a personalization engine.</li>
        <li>Develop a mobile app or PWA.</li>
      </ul>

      <h2 id="measuring-success">Measuring success</h2>

      <p>
        Digital growth initiatives fail when companies focus on vanity metrics instead of business outcomes. We
        recommend tracking a balanced scorecard of leading and lagging indicators across four categories:
      </p>

      <ul>
        <li>
          <strong>Acquisition:</strong> leading indicators are traffic, CAC, and conversion rate; the lagging indicator
          is new customer revenue.
        </li>
        <li>
          <strong>Engagement:</strong> leading indicators are session duration and pages per visit; the lagging
          indicator is repeat purchase rate.
        </li>
        <li>
          <strong>Retention:</strong> leading indicators are NPS and support tickets; the lagging indicator is customer
          lifetime value.
        </li>
        <li>
          <strong>Profitability:</strong> leading indicators are gross margin and AOV; the lagging indicator is digital
          channel contribution.
        </li>
      </ul>

      <h2 id="real-world-examples">Real-world examples</h2>

      <p>
        The principles in this playbook aren't theoretical—they're drawn from dozens of growth-stage digital
        transformations we've led. Here are three examples that illustrate different paths to digital growth.
      </p>

      <h3>Specialty retail: 180% online revenue growth</h3>
      <p>
        A 135-employee outdoor gear retailer launched e-commerce in 10 weeks and grew online revenue 180% within
        18 months. Key success factors: omnichannel inventory, personalized recommendations, and
        buy-online-pickup-in-store.
      </p>

      <h3>B2B distribution: 58% of orders now self-serve</h3>
      <p>
        A 220-employee industrial supplier built a B2B ordering platform with customer-specific pricing and real-time
        inventory. 58% of orders now come through self-service, freeing sales reps to focus on new business.
      </p>

      <h3>Professional services: from one-time workshops to recurring revenue</h3>
      <p>
        A training company transformed from one-time workshops to a subscription model with 2,400 active members. The
        platform now generates predictable recurring revenue and has tripled company valuation.
      </p>

      <h2 id="getting-started">Getting started</h2>

      <p>
        Digital growth doesn't require a massive upfront investment. The most successful growing companies start with a
        focused pilot, prove the model, and then scale. Here's how to begin:
      </p>

      <ol>
        <li>
          <strong>Audit your current state:</strong> where are customers already trying to engage digitally? What are
          competitors doing?
        </li>
        <li>
          <strong>Identify your wedge:</strong> what's the smallest viable digital initiative that could prove the
          business case?
        </li>
        <li>
          <strong>Build the team:</strong> you need a product owner, technical lead, and executive sponsor at minimum.
        </li>
        <li>
          <strong>Set 90-day goals:</strong> define success metrics and commit to a rapid learning cycle.
        </li>
        <li>
          <strong>Launch and iterate:</strong> get something live quickly, then improve based on real customer feedback.
        </li>
      </ol>
    </InsightArticleV2>
  );
}
