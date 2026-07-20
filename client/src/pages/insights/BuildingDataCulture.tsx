import InsightArticleV2 from "@/components/InsightArticleV2";

export default function BuildingDataCulture() {
  const sections = [
    { id: "transcript-excerpt", label: "Transcript excerpt" },
  ];

  const relatedInsights = [
    { title: "The CEO's Guide to Data Modernization", category: "Strategy", link: "/insights/ceo-guide-data-modernization", image: "/images/insights/ceo-guide-data-modernization-hero.jpg" },
    { title: "From Data Lake to Value Stream", category: "Technology", link: "/insights/data-lake-to-value-stream", image: "/images/insights/data-lake-to-value-stream-hero.jpg" },
    { title: "The Corporate Venture Advantage", category: "Article", link: "/insights/corporate-venture-advantage", image: "/images/insights/corporate-venture-advantage-hero.jpg" },
  ];

  return (
    <InsightArticleV2
      category="Culture"
      title="Building a Data-First Culture"
      subtitle="NexDyne's Chief Data Officer discusses the human side of digital change and why culture eats strategy for breakfast."
      heroImage="/images/insights/building-data-culture-hero.jpg"
      publishDate="November 05, 2025"
      readTime="12 min"
      sections={sections}
      keyTakeaways={[
        "Democratization vs. Governance: how to balance broad access to data with the controls needed to ensure quality and security.",
        "The Role of Leadership: why C-suite visibility and active participation are non-negotiable for cultural transformation.",
        "Upskilling the Workforce: practical strategies for raising the data literacy baseline across all departments, not just IT.",
        "Celebrating Small Wins: how to build momentum by identifying and publicizing early success stories.",
      ]}
      relatedInsights={relatedInsights}
    >
      <p>
        In this fireside chat, Sarah Jenkins, NexDyne's CDO, sits down with industry analyst Mark Roberts to dismantle
        the myths surrounding data culture. They explore why "gut feeling" is still the dominant decision-making mode in
        many boardrooms and how to shift the needle toward evidence-based leadership.
      </p>

      <h2 id="transcript-excerpt">Transcript Excerpt</h2>

      <blockquote>
        We often talk about data as the new oil, but that analogy is flawed. Oil is a finite resource that gets used up.
        Data is an infinite asset that grows in value the more it's used, shared, and combined. But that value can only
        be unlocked if you have a culture that encourages curiosity and experimentation. If your people are afraid to ask
        questions or challenge assumptions with data, your platform investment is wasted.
      </blockquote>
    </InsightArticleV2>
  );
}
