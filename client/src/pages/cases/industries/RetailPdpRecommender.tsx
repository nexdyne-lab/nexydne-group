import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, TrendingDown, Clock, BarChart3, TrendingUp, Zap, CheckCircle } from "lucide-react";

export default function RetailPdpRecommender() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Two-Tower Retrieval Lifts PDP Revenue per Session 23% | Retail Case Study"
      seoDescription="A specialty retailer's product-detail page was running a category-best-seller rule that ignored the shopper. A two-tower retrieval model reranked by a contextual bandit lifted revenue per session 23%."
      canonical="/cases/retail-pdp-recommender"
      industry="Specialty Retail"
      industryLink="/industries/retail"
      title="How a Specialty Retailer Lifted Product-Page Revenue per Session by 23%"
      subtitle="The product detail page was recommending category best-sellers to everyone, ignoring what each shopper had actually looked at. A retrieval model that reads the session changed what the page could earn."
      heroImage="/images/cases/retail-pdp-recommender-hero.jpg"
      metrics={[
        { value: "23%", label: "More Revenue per Session" },
        { value: "2x", label: "Long-Tail Catalog Coverage" },
        { value: "<100ms", label: "Recommendation Latency" },
        { value: "1 Qtr", label: "To First Measurable Lift" }
      ]}
      clientContextTitle="Recommending the Same Best-Sellers to Everyone"
      clientContextIntro="A multi-category specialty retailer with several hundred million dollars in online sales was leaning on its product detail page to do the heavy lifting of discovery. But the recommendations on that page came from a single rule — show the category's best-sellers — that treated a first-time visitor and a loyal repeat buyer exactly the same."
      clientContextBody="The rule was easy to reason about and easy to ignore. It never looked past the item currently on screen, so a shopper who had spent ten minutes browsing a specific style was shown the same generic block as everyone else. Merchandising suspected the page was leaving revenue on the table, but they had no way to prove it and no infrastructure to serve anything smarter without slowing the page down. The catalog's long tail — thousands of products that rarely surfaced — sat unseen while the same few best-sellers cycled endlessly."
      clientProfile={{
        industry: "Multi-Category Specialty Retailer",
        companySize: "~$480M Annual Revenue",
        projectDuration: "5 Months",
        additionalInfo: "12M+ Sessions / Month",
        additionalLabel: "Digital Traffic"
      }}
      challengeTitle="Why the Best-Seller Rule Was Holding the Page Back"
      challenges={[
        { icon: Target, title: "A Rule That Ignored the Shopper", description: "Recommendations were driven only by the current item's category, so nothing a shopper had browsed earlier in the session ever influenced what they saw next." },
        { icon: TrendingDown, title: "A Buried Long Tail", description: "The same handful of best-sellers recycled on every page, leaving thousands of relevant products with almost no chance of being discovered." },
        { icon: Clock, title: "A Hard Latency Ceiling", description: "Any replacement had to render in well under a tenth of a second, which ruled out the heavyweight models the team had been asked to consider." },
        { icon: BarChart3, title: "No Way to Prove the Upside", description: "Merchandising believed the page underperformed but had no experimentation harness to measure what a better recommender would actually earn." }
      ]}
      approachTitle="A Retrieval Model That Reads the Session"
      approachIntro="Working with the retailer's merchandising and engineering teams, we replaced the static rule with a two-tower retrieval model reranked by a contextual bandit — fast enough to serve inside the page's latency budget and smart enough to respond to what each shopper was actually doing."
      steps={[
        { step: "01", title: "Framing It as Retrieval, Not Rules", description: "We modeled the problem as retrieving the most relevant items for this shopper in this session, rather than encoding another set of hand-written merchandising rules that would drift out of date." },
        { step: "02", title: "Building the Two-Tower Model", description: "We trained a two-tower model that learns shopper and product representations from behavior, so items a customer had browsed earlier in the session shaped what the page surfaced next." },
        { step: "03", title: "Reranking With a Contextual Bandit", description: "A bandit layer reranked the retrieved set in real time, balancing proven best-sellers against long-tail products the model believed this shopper would respond to." },
        { step: "04", title: "Proving It Under Live Traffic", description: "We stood up an experimentation harness and ran the model against the incumbent rule on live sessions, holding it to the sub-100ms budget before rolling it out fully." }
      ]}
      resultsTitle="A Page That Earns More From the Same Traffic"
      results={[
        { icon: TrendingUp, value: "23%", label: "More revenue per session", detail: "On the product detail page, against the best-seller baseline" },
        { icon: BarChart3, value: "2x", label: "Long-tail coverage", detail: "Products surfacing to shoppers in the first quarter" },
        { icon: Zap, value: "<100ms", label: "Served in budget", detail: "No measurable impact on page load" },
        { icon: CheckCircle, value: "1 Qtr", label: "To first lift", detail: "From kickoff to a measured revenue gain" }
      ]}
      quote="We had assumed the recommendation block was fine because it showed our best products. What we learned is that best-sellers are not the same as relevant. Once the page started responding to what each shopper was actually doing, the same traffic simply bought more."
      quoteAuthor="VP of Digital Merchandising"
      quoteRole="Specialty retailer"
      relatedStudies={[
        { title: "How a Streaming Operator Gave New Releases a Fair Shot at Their Audience", metric: "17%", label: "higher week-one engagement", link: "/cases/streaming-hybrid-recommender", image: "/images/industries/tech-datacenter.jpg" },
        { title: "How a Specialty Retailer Grew Email Revenue per Send by 42%", metric: "42%", label: "more email revenue per send", link: "/cases/retail-behavioral-email-revenue", image: "/images/capabilities/cap-retail-data.jpg" }
      ]}
      ctaTitle="Is your product page recommending to a category instead of a customer?"
      ctaDescription="Let's talk about what a session-aware retrieval model could earn from the traffic you already have."
    />
  );
}
