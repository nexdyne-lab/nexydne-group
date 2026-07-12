import SolutionCat6Template from "@/components/SolutionCat6Template";

export default function AIPoweredRecommendations() {
  return (
    <SolutionCat6Template
      eyebrow="SOLUTION · CUSTOMER INTELLIGENCE · AI-POWERED RECOMMENDATIONS"
      title="AI-Powered Recommendations"
      subtitle="Recommendations are the highest-leverage personalization surface in your business — and the easiest one to ship a mediocre version of. We build the production-grade recommender systems, the deployment architecture, and the optimization discipline that turn product, content, and next-best-offer recs into compounding revenue."
      heroImage="/images/ai-in-enterprises.jpg"
      heroFocal="60% 50%"
      seoTitle="AI-Powered Recommendations"
      seoDescription="Build recommendation engines that drive revenue across product, content, and next-best-offer surfaces — with the deployment, A/B framework, and monitoring that keeps them earning."
      canonical="/solutions/customer-intelligence/ai-powered-recommendations"
      perspective={{
        heading:
          "The recommender is not the model. It is the system around the model.",
        image: "/images/data-abstract.jpg",
        paragraphs: [
          "Recommendation is the most-attempted and most-disappointing AI use case in the enterprise. A team picks an algorithm, ships a carousel, watches click-through rise on a popular item, and declares victory — meanwhile the long tail of the catalog goes dark, cold-start users see noise, and the lift evaporates inside a quarter. The win is rarely about the algorithm. It is about the surface, the latency, the fallback, the experimentation discipline, and the governance that says when to retire a model.",
          "We build recommender programs that compound. Collaborative filtering, content-based, two-tower retrieval, contextual bandits, hybrid stacks — chosen deliberately per surface and benchmarked on the metrics that protect the catalog, not just the click. The serving architecture, the A/B framework, the cold-start strategy, and the merchandising override layer are designed in from the start, because the difference between a recommender that earns a quarter and one that earns a decade is the system around the score.",
        ],
      }}
      deliverHeading="A five-phase approach from use-case to live recommender."
      deliverIntro="Each phase is timeboxed and produces a tangible artifact. Most engagements run twelve to twenty weeks from prioritization to a live recommender with monitoring and an A/B framework in place."
      phases={[
        {
          name: "Use-case prioritization",
          description:
            "Recommendations only earn their cost when they touch a high-frequency, high-margin decision. We triage the candidate surfaces — product detail page, search, cart, post-purchase email, app home, contact-center next-best-offer — by addressable revenue, decision cadence, and feasibility against the data already in flight. The output is a sequenced surface roadmap, not a generic 'add a recommender' wishlist.",
        },
        {
          name: "Algorithm selection",
          description:
            "Different surfaces want different algorithms. We pick deliberately across collaborative filtering, content-based similarity, matrix factorization, two-tower neural retrieval, sequence models, contextual bandits, and hybrid stacks — matched to catalog depth, cold-start exposure, latency budget, and explainability needs. Where a simpler model wins on lift, we ship the simpler model.",
        },
        {
          name: "Model training and validation",
          description:
            "Every recommender we ship is benchmarked on precision and recall at k, hit-rate, NDCG, and the diversity and serendipity metrics that keep the catalog from collapsing onto its head items. Validation runs on held-out user sessions and against the current rule or merchandising baseline — a model that wins offline but degrades the long tail does not move to production.",
        },
        {
          name: "Channel deployment",
          description:
            "Predictions are worthless until they reach the surface. We design the serving architecture — real-time inference, candidate generation plus reranking, feature store, edge cache — and wire recommendations into web, mobile, email, app, and contact-center experiences with consistent personalization keys. Cold-start fallbacks, content rules, and merchandising overrides are engineered, not improvised.",
        },
        {
          name: "Ongoing optimization",
          description:
            "Recommenders decay faster than most models because the catalog and user base shift continuously. We stand up the A/B framework, the bandit exploration cadence, the drift monitoring on input features and ranking distributions, and the retraining schedule that keeps lift compounding. Champion-challenger contests are a feature of the program, not an afterthought.",
        },
      ]}
      getHeading="Six concrete artifacts every engagement leaves behind."
      deliverables={[
        {
          name: "Recommendation use-case roadmap",
          description:
            "Sequenced map of the surfaces and decisions where recommendations earn their keep — scored on revenue impact, decision cadence, and feasibility against the existing data spine.",
        },
        {
          name: "Algorithm and model specification",
          description:
            "Documented model architecture per surface — collaborative filtering, content-based, two-tower retrieval, contextual bandits, hybrid stacks — with the rationale for each algorithm choice traceable to the surface it serves.",
        },
        {
          name: "Accuracy benchmarks",
          description:
            "Validated production models with documented precision and recall at k, hit-rate, NDCG, diversity, and serendipity metrics — benchmarked against the current rule or merchandising baseline.",
        },
        {
          name: "Channel deployment architecture",
          description:
            "Reference architecture covering real-time inference, candidate generation plus reranking, feature store, edge cache, and the integration into web, mobile, email, app, and contact-center surfaces.",
        },
        {
          name: "A/B test framework",
          description:
            "Production experimentation surface with bandit exploration, holdout discipline, guardrail metrics, and the governance to stop a losing variant before it costs the quarter.",
        },
        {
          name: "Recommendation performance dashboard",
          description:
            "Live operating dashboard tracking revenue per impression, lift over baseline, coverage of the long tail, and drift on input and ranking distributions — with alert thresholds wired to the model owners.",
        },
      ]}
      outcome={{
        heading:
          "Programs that move from rule-based to ML-based recommendations on the highest-leverage surfaces typically lift attributable revenue by 10 to 25 percent within twelve months — and the A/B framework is what compounds the gain.",
        body: "The economics work because the recommender reaches the surface where the decision happens — at the right latency, with the right fallback, inside the right experiment. We do not ship a notebook and walk away. We engineer the system around the model that turns predictions into compounding revenue.",
      }}
      casesHeading="When the system around the model is engineered, the lift compounds."
      cases={[
        {
          industry: "Specialty Retail",
          title:
            "Two-tower retrieval lifts product-detail page revenue per session by 23 percent",
          description:
            "A multi-category specialty retailer was running a category-best-seller rule on the product detail page that ignored user history beyond the current session. We replaced it with a two-tower retrieval model reranked by a contextual bandit, served at sub-100ms latency. Revenue per session on the PDP rose 23 percent, with long-tail catalog coverage doubling in the first quarter.",
          link: "/cases/retail-pdp-recommender",
        },
        {
          industry: "Subscription Streaming",
          title:
            "Hybrid recommender drives a 17 percent lift in week-one engagement on new titles",
          description:
            "A streaming operator's content recommender was top-heavy on tenured catalog and starved new releases of attention. We built a hybrid model blending collaborative filtering with content-affinity features and recency boosts, then wired it into the home rail and the post-watch carousel. Week-one engagement on new titles rose 17 percent without erosion on the back catalog.",
          link: "/cases/streaming-hybrid-recommender",
        },
      ]}
      siblingsHeading="Sibling offerings inside this cluster."
      siblings={[
        {
          title: "Predictive Analytics & Modeling",
          link: "/solutions/customer-intelligence/predictive-analytics-modeling",
        },
        {
          title: "Personalization",
          link: "/solutions/customer-intelligence/personalization",
        },
        {
          title: "Personalization Strategy",
          link: "/solutions/customer-intelligence/personalization-strategy",
        },
        {
          title: "Customer Data Platform",
          link: "/solutions/customer-intelligence/customer-data-platform",
        },
        {
          title: "Behavioral Segmentation",
          link: "/solutions/customer-intelligence/behavioral-segmentation",
        },
      ]}
      cta={{
        heading:
          "Bring our recommender team into your next revenue-surface conversation.",
        body: "We work with leaders who want their highest-leverage personalization surfaces engineered to compound. Recommendations are how that conversation begins.",
        industries: [
          { value: "manufacturing", label: "Manufacturing" },
          { value: "professional-services", label: "Professional Services" },
          { value: "technology", label: "Technology" },
          { value: "healthcare", label: "Healthcare" },
          { value: "financial-services", label: "Financial Services" },
          { value: "retail", label: "Retail & Consumer" },
          { value: "other", label: "Other" },
        ],
      }}
    />
  );
}
