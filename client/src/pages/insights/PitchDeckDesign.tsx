import InsightArticleV2 from "@/components/InsightArticleV2";

export default function PitchDeckDesign() {
  const sections = [
    { id: "narrative-arc", label: "The narrative arc" },
    { id: "visual-design", label: "Visual design" },
    { id: "problem-slide", label: "The problem slide" },
    { id: "traction-slide", label: "The traction slide" },
    { id: "market-slide", label: "The market slide" },
    { id: "competition-slide", label: "The competition slide" },
    { id: "team-slide", label: "The team slide" },
    { id: "financials-slide", label: "The financials slide" },
    { id: "ask-slide", label: "The ask slide" },
    { id: "common-mistakes", label: "Common mistakes" },
    { id: "how-we-help", label: "How we help" },
  ];

  const relatedInsights = [
    { title: "The Series A Fundraising Guide", category: "Capital Raising", link: "/insights/series-a-fundraising-guide", image: "/images/capital-raising-abstract.jpg" },
    { title: "Investor-Ready Board Decks", category: "Strategy & Finance", link: "/insights/investor-ready-board-decks", image: "/images/business-strategy-abstract.jpg" },
    { title: "The Valuation Mistakes Founders Make", category: "Strategy & Finance", link: "/insights/valuation-mistakes", image: "/images/cfo-services-abstract.jpg" },
  ];

  return (
    <InsightArticleV2
      category="Capital Raising"
      title="How to Design Pitch Decks That Close Institutional Rounds"
      subtitle="The difference between pitch decks that generate term sheets and those that generate polite passes often comes down to narrative structure, visual clarity, and strategic emphasis rather than the underlying business quality."
      heroImage="/images/abstract-growth.jpg"
      publishDate="December 16, 2025"
      readTime="11 min"
      sections={sections}
      keyTakeaways={[
        "The decks that break through follow a tension-and-resolution narrative arc, moving in a deliberate sequence from problem to ask.",
        "Visual design should prioritize clarity over creativity—one message per slide, consistent formatting, and charts that tell stories at a glance.",
        "The problem and traction slides carry the most weight: quantify the pain, then prove real customers want what you're building.",
        "Size the market bottoms-up, demonstrate differentiation honestly, and make the ask specific with clear use of funds and milestones.",
      ]}
      relatedInsights={relatedInsights}
    >
      <p>
        Institutional investors review hundreds of pitch decks annually. Most receive less than three minutes of
        attention before being discarded. The decks that break through this filter share common characteristics: they
        tell compelling stories, present information with visual clarity, and demonstrate deep understanding of what
        investors care about. Building these decks requires both art and science.
      </p>

      <h2 id="narrative-arc">The Narrative Arc That Resonates</h2>

      <p>
        The most effective pitch decks follow a narrative structure that builds tension and resolution. Start by
        establishing a significant problem that's costing customers real money or preventing them from achieving
        critical objectives. Make the problem visceral and urgent—investors should feel the pain your customers
        experience. Then introduce your solution as the inevitable answer, not just one option among many.
      </p>

      <p>
        The narrative should flow naturally: Problem → Solution → Market Opportunity → Product → Traction → Business
        Model → Competition → Team → Financials → Ask. Each slide should build on the previous one, creating momentum
        toward your funding request. Avoid the common mistake of jumping between topics or presenting information in
        random order.
      </p>

      <h3>The Essential Slide Sequence</h3>
      <ul>
        <li><strong>Slide 1 — Cover:</strong> Company name, tagline, contact info.</li>
        <li><strong>Slide 2 — Problem:</strong> The urgent pain you're solving.</li>
        <li><strong>Slide 3 — Solution:</strong> Your unique approach.</li>
        <li><strong>Slide 4 — Market:</strong> TAM/SAM/SOM with bottoms-up validation.</li>
        <li><strong>Slide 5 — Product:</strong> How it works, key features.</li>
        <li><strong>Slide 6 — Traction:</strong> Growth metrics, customer logos.</li>
        <li><strong>Slide 7 — Business Model:</strong> How you make money.</li>
        <li><strong>Slide 8 — Competition:</strong> Why you win.</li>
        <li><strong>Slide 9 — Team:</strong> Why you're uniquely qualified.</li>
        <li><strong>Slide 10 — Financials:</strong> Revenue, growth, unit economics.</li>
        <li><strong>Slide 11 — Ask:</strong> How much, use of funds, milestones.</li>
      </ul>

      <h2 id="visual-design">Visual Design Principles That Work</h2>

      <p>
        Visual design either amplifies or undermines your message. The goal is clarity, not creativity. Use consistent
        fonts, colors, and layouts throughout the deck. Limit each slide to one key message supported by minimal text
        and strong visuals. If a slide requires more than 30 seconds to understand, it's too complex.
      </p>

      <p>
        Charts and graphs should tell stories at a glance. Use color strategically to highlight key data points. Avoid
        3D charts, excessive gradients, and decorative elements that distract from your message. Every visual element
        should serve a purpose—if it doesn't support your narrative, remove it.
      </p>

      <h2 id="problem-slide">The Problem Slide: Making Pain Tangible</h2>

      <p>
        Your problem slide is the foundation of your entire pitch. Weak problem slides lead to weak pitches. Avoid
        generic statements like "businesses struggle with inefficiency." Instead, quantify the problem with specific
        data: "Growing logistics companies lose $2.3M annually to manual shipment coordination errors, affecting 23% of
        all orders."
      </p>

      <p>
        Use customer quotes to bring the problem to life. Show the current broken process with a simple workflow
        diagram. Make investors feel the urgency that drives your customers to seek solutions. The stronger your problem
        slide, the more inevitable your solution appears.
      </p>

      <h2 id="traction-slide">The Traction Slide: Proving Product-Market Fit</h2>

      <p>
        Traction is the most important slide in your deck after the problem. This is where you prove that customers
        actually want what you're building. Show growth metrics that demonstrate momentum: revenue growth, customer
        acquisition, usage metrics, or retention rates. Use a simple line chart showing upward trajectory over time.
      </p>

      <p>
        Include recognizable customer logos if you have them, but only if they're truly impressive. Ten unknown
        companies don't build credibility. Three well-known brands do. Add a brief customer quote that captures the
        value you deliver. Quantify the impact: "Reduced processing time by 73%" or "Generated $1.2M in additional
        revenue."
      </p>

      <h3>Traction Metrics That Matter</h3>
      <p>Choose metrics that demonstrate sustainable growth:</p>
      <ul>
        <li><strong>Revenue growth:</strong> MRR/ARR trajectory with month-over-month rates.</li>
        <li><strong>Customer acquisition:</strong> Number of customers, growth rate, quality indicators.</li>
        <li><strong>Retention metrics:</strong> Churn rate, net revenue retention, cohort analysis.</li>
        <li><strong>Usage metrics:</strong> DAU/MAU, engagement rates, feature adoption.</li>
        <li><strong>Unit economics:</strong> CAC, LTV, payback period, gross margins.</li>
      </ul>

      <h2 id="market-slide">The Market Slide: Sizing Opportunity Credibly</h2>

      <p>
        Market sizing is where most decks lose credibility. Avoid the temptation to claim massive TAMs based on analyst
        reports. Investors have seen too many "$500B market opportunity" slides to take them seriously. Instead, build
        your market size bottoms-up from your actual customer data.
      </p>

      <p>
        Start with your serviceable addressable market (SAM): the specific segment you can realistically reach with your
        current product and go-to-market approach. Show how you calculated it: number of target companies × average
        contract value × penetration rate. Then show your serviceable obtainable market (SOM): what you can capture in
        3-5 years given realistic growth assumptions.
      </p>

      <h2 id="competition-slide">The Competition Slide: Demonstrating Differentiation</h2>

      <p>
        Never claim you have no competition. This signals either naivety or dishonesty. Every problem has existing
        solutions, even if they're manual processes or indirect competitors. The question is why your approach is
        superior for your target customers.
      </p>

      <p>
        Use a positioning matrix that shows competitors along two key dimensions where you have clear advantages. Avoid
        generic axes like "quality" and "price." Instead, use specific differentiators: "Implementation time" vs
        "Feature depth" or "Ease of use" vs "Enterprise capabilities." Place yourself in the ideal quadrant and explain
        why that positioning matters to customers.
      </p>

      <h2 id="team-slide">The Team Slide: Building Credibility</h2>

      <p>
        Investors back teams, not just ideas. Your team slide should demonstrate that you have the specific experience
        and capabilities required to execute this particular business. Highlight relevant domain expertise, previous
        company-building experience, and technical capabilities that give you unfair advantages.
      </p>

      <p>
        Include headshots, names, titles, and 1-2 bullet points of relevant experience for each key team member. Focus
        on accomplishments that relate directly to your business: "Built and scaled operations at [relevant company]" or
        "PhD in [relevant field] from [prestigious institution]." Avoid generic credentials that don't support your
        specific narrative.
      </p>

      <h2 id="financials-slide">The Financials Slide: Showing the Path to Scale</h2>

      <p>
        Financial projections should tell a story of efficient growth. Show 3-5 years of revenue projections with key
        assumptions clearly stated. Include gross margin progression and path to profitability if relevant. Avoid
        showing detailed P&amp;L statements—they're too complex for a pitch deck.
      </p>

      <p>
        Focus on the metrics investors care about: revenue growth rate, gross margins, sales efficiency (CAC payback),
        and burn rate. Show that you understand your unit economics and have a plan to reach profitability or the next
        major milestone. Conservative projections build more credibility than hockey stick forecasts.
      </p>

      <h3>Financial Slide Best Practices</h3>
      <ul>
        <li><strong>Show historical performance:</strong> Build credibility with actual results.</li>
        <li><strong>Use reasonable growth rates:</strong> 3-4x year-over-year is aggressive but believable.</li>
        <li><strong>Highlight key milestones:</strong> When you reach profitability, break-even, or next funding.</li>
        <li><strong>Include unit economics:</strong> CAC, LTV, gross margin by cohort.</li>
        <li><strong>State assumptions clearly:</strong> Average deal size, sales cycle, retention rate.</li>
      </ul>

      <h2 id="ask-slide">The Ask Slide: Making Your Request Clear</h2>

      <p>
        Your final slide should clearly state how much you're raising, what you'll use it for, and what milestones
        you'll achieve. Break down the use of funds into 3-5 major categories: product development, sales and marketing,
        operations, team expansion. Show that you've thought carefully about capital allocation.
      </p>

      <p>
        Include the milestones you'll reach with this capital: revenue targets, customer acquisition goals, product
        launches, or market expansion plans. This demonstrates that you understand what success looks like and have a
        clear plan to achieve it. End with a strong call to action that invites further conversation.
      </p>

      <h2 id="common-mistakes">Common Pitch Deck Mistakes to Avoid</h2>

      <p>
        Even experienced founders make critical pitch deck errors. The most common include too many slides (keep it to
        11-15), too much text (use bullet points sparingly), weak problem definition (the foundation of your entire
        pitch), generic market sizing (build bottoms-up from real data), and burying key metrics (put your best numbers
        front and center).
      </p>

      <p>
        Remember that your pitch deck is a storytelling tool, not a comprehensive business plan. Its job is to generate
        interest and secure a follow-up meeting, not to answer every possible question. Keep it focused, visual, and
        compelling.
      </p>

      <h2 id="how-we-help">How NexDyne Helps Build Winning Pitch Decks</h2>

      <p>
        At NexDyne, we work with founders to craft pitch decks that resonate with institutional investors. Our approach
        combines strategic narrative development, data-driven storytelling, and visual design excellence. We help
        companies articulate their value proposition clearly, present traction compellingly, and structure their ask
        strategically.
      </p>

      <p>
        Our clients consistently generate higher investor interest and close rounds faster because their decks cut
        through the noise. We understand what institutional investors look for and how to present your story in the most
        compelling light.
      </p>
    </InsightArticleV2>
  );
}
