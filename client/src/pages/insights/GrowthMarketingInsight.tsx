import InsightArticle from "@/components/InsightArticle";

const Cite = ({ n }: { n: number }) => (
  <sup>
    <a href={`#ref-${n}`} className="text-primary no-underline hover:underline">{n}</a>
  </sup>
);

export default function GrowthMarketingInsight() {
  const references = [
    { label: "McKinsey & Company — “The economic potential of generative AI: The next productivity frontier.”", url: "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier" },
    { label: "Adobe — “2026 Digital Trends” (global survey of CX executives and practitioners).", url: "https://business.adobe.com/resources/digital-trends-report.html" },
    { label: "HubSpot — “2026 State of Marketing Report.”", url: "https://www.hubspot.com/state-of-marketing" },
    { label: "Statista — “Artificial intelligence (AI) use in marketing — statistics & facts.”", url: "https://www.statista.com/topics/5017/ai-use-in-marketing/" },
    { label: "McKinsey & Company — “The state of AI.”", url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai" },
    { label: "U.S. Census Bureau data, via industry analysis — AI use in production environments.", url: "https://www.gminsights.com/industry-analysis/ai-in-sales-market" },
  ];

  const relatedInsights = [
    { title: "AI in the CFO's Office", category: "Strategy & Finance", link: "/insights/strategy-finance", image: "/images/ai-powered-finance-abstract.jpg" },
    { title: "From Automation to Agentic Operations", category: "Operations", link: "/insights/operations", image: "/images/ai-acceleration-abstract.jpg" },
    { title: "The Pragmatic CEO's Guide to AI", category: "AI Executive Guide", link: "/insights/ceo-guide-data-modernization", image: "/images/hero-ceo-ai-guide.jpg" },
  ];

  return (
    <InsightArticle
      category="Growth & Marketing"
      categoryHref="/insights"
      title="Growth in the Age of Generative AI: Real Value, Shallow Adoption, and the Trust Problem"
      subtitle="Marketers call this the biggest disruption in a generation—and the numbers back them up. Yet most organisations are stuck in shallow pilots, held back not by creativity but by data, brand risk, and governance."
      heroImage="/images/abstract-growth.jpg"
      publishDate="July 1, 2026"
      readTime="9 min"
      keyTakeaways={[
        "61% of marketers say AI is driving marketing's biggest disruption in 20 years, and AI-in-marketing spend is set to more than double to over US$107B by 2028.",
        "The value is concentrated and large: McKinsey puts marketing and sales among generative AI's biggest value pools, worth hundreds of billions annually.",
        "Most organisations remain in shallow pilots—what stalls them is data fragmentation, brand risk, and weak governance, not a shortage of ideas.",
        "HIG™ reframes the problem: govern the customer decision and the brand and data system first, then scale generative AI where it compounds.",
      ]}
      references={references}
      relatedInsights={relatedInsights}
    >
      <p>
        Few functions feel the pull of AI as acutely as marketing. In HubSpot's 2026 research, 61% of marketers say
        the field is undergoing its biggest disruption in 20 years<Cite n={3} />, and the money is following the
        conviction: global revenue from AI in marketing is expected to reach US$47 billion in 2025 and exceed US$107
        billion by 2028<Cite n={4} />.
      </p>

      <p>
        The enthusiasm is warranted—but it is also where teams get into trouble. Growth is the area where AI can most
        visibly move the numbers, and also where an ungoverned experiment can most quickly damage a brand. This piece
        is about capturing the first outcome without the second.
      </p>

      <h2>The value is real—and unusually large</h2>

      <p>
        This is not hype looking for a use case. McKinsey estimates generative AI could add US$2.6–4.4 trillion in
        annual value across the economy, with marketing and sales among the very largest value pools; marketing
        productivity gains alone could be worth 5–15% of total marketing spend<Cite n={1} />.
      </p>

      <p>
        Practitioners are already seeing it. In Adobe's 2026 survey, 70% of organisations report that personalisation
        performance improved over the past year, 64% report gains in lead generation, and 59% in customer
        retention<Cite n={2} />. The mechanism is consistent: AI lets teams move from broad segments to genuinely
        individualised experiences, at a scale humans cannot manage by hand.
      </p>

      <blockquote>
        Generative AI doesn't just make marketing faster. It changes the unit of work—from the campaign to the
        individual customer decision. That is a bigger shift than most org charts are ready for.
      </blockquote>

      <h2>So why is most of it still shallow?</h2>

      <p>
        Because adoption is a mile wide and an inch deep. Across content, support, personalisation, and back-office
        CX, only roughly a quarter to a third of organisations are running even limited generative-AI
        pilots<Cite n={2} />. And genuinely operational use remains small: just 5.5% of U.S. businesses reported
        using AI in production environments in 2025, up from 3.7% in 2023<Cite n={6} />—rising fast, but from a low
        base.
      </p>

      <p>
        Adobe is blunt about why efforts stall: data fragmentation, uneven alignment between executives and
        practitioners, and the rarity of enterprise-wide deployment. Most brands, it finds, lack the governance and
        data foundations to scale AI beyond pilots<Cite n={2} />. This mirrors the broader market, where adoption has
        outrun the ability to capture value<Cite n={5} />.
      </p>

      <h2>The trust problem no dashboard shows</h2>

      <p>
        Marketing carries a risk finance and operations don't: every output is public. A hallucinated claim, an
        off-brand tone, or a personalisation model trained on data the customer never consented to share isn't an
        internal error—it's a brand event. As generative and agentic systems take on more of the customer
        relationship, the governance of <em>what the machine is allowed to say and do</em> becomes a growth question,
        not a compliance footnote.
      </p>

      <h2>The NexDyne view: govern the customer decision first</h2>

      <p>
        Our discipline is Human Intelligence Governance—HIG™—and in growth it means the same thing it means
        everywhere: <strong>we implement technology only after we design the human system it operates within.</strong>
        Before scaling generative AI across the funnel, we make three things explicit:
      </p>

      <p>
        <strong>The customer decision.</strong> Which decision are we improving—acquisition, activation, retention,
        expansion—and what does a good outcome look like for the customer, not just the campaign?
      </p>

      <p>
        <strong>The brand and data guardrails.</strong> What can the model say, in what voice, trained on what data,
        with what consent? These guardrails are what make it safe to scale, not slower to.
      </p>

      <p>
        <strong>The measure.</strong> How do we tie AI activity to revenue, retention, and efficiency—so wins are
        real and repeatable, not anecdotal? The organisations that can't connect AI to value<Cite n={2} /> almost
        always skipped this.
      </p>

      <h2>A practical path for growth leaders</h2>

      <h3>1. Start with one decision, not one tool</h3>
      <p>
        Pick a single high-value customer decision and redesign it end to end. Tool-first adoption is exactly what
        produces impressive demos and shallow results<Cite n={2} />.
      </p>

      <h3>2. Fix the customer data you'll actually act on</h3>
      <p>
        Personalisation is only as good as the data behind it. Consolidate and clean the specific signals your target
        decision needs—data fragmentation is the most cited reason growth AI stalls<Cite n={2} />.
      </p>

      <h3>3. Put brand and consent guardrails around the model</h3>
      <p>
        Define voice, claims, and data-use rules before you scale. Governance is what lets you hand more of the
        customer relationship to AI without handing over your reputation.
      </p>

      <h3>4. Measure to revenue, then scale</h3>
      <p>
        Connect every AI-assisted play to acquisition, retention, or margin. Given how large the marketing value pool
        is<Cite n={1} />, disciplined measurement is how you claim your share of it.
      </p>

      <h2>The bottom line</h2>

      <p>
        Generative AI in growth is one of the clearest value opportunities in business today<Cite n={1} /><Cite n={3} />—
        and one of the easiest to squander. The winners won't be the teams that generate the most content. They'll be
        the ones that govern the customer decision, protect the brand, and measure to revenue. For mid-market
        companies, that discipline is the great equaliser: it lets a focused team out-execute far larger competitors.
        That is precisely the work NexDyne was built to do.
      </p>
    </InsightArticle>
  );
}
