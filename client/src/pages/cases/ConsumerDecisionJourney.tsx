import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function ConsumerDecisionJourney() {
  return (
    <CaseStudyTemplate
      client="Global Consumer Electronics Manufacturer"
      industry="Consumer Electronics · Growth Marketing"
      title="AI-Powered Journey Orchestration"
      subtitle="How a consumer electronics giant used granular data and AI to map the decision journey, optimizing media spend and selling out inventory in record time."
      heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
      challenge={`A global consumer electronics manufacturer was preparing to launch a flagship smart home device. In previous launches, they had spread their marketing budget thinly across TV, print, and broad digital display, resulting in mediocre sales and low brand recall.

They knew the consumer path to purchase had evolved into a complex, non-linear journey, but their marketing mix hadn't kept pace. They lacked visibility into which touchpoints actually influenced decisions and were wasting budget on channels that didn't drive conversion.

They needed a way to identify exactly when and where potential buyers were most influenceable—from initial discovery to final purchase—to allocate their limited launch budget for maximum impact.`}
      solution={`NexDyne mapped the Consumer Decision Journey (CDJ) using advanced attribution modeling and AI-driven sentiment analysis. We discovered that 70% of decisions were made during the "active evaluation" phase, where consumers compared specs and read reviews online—yet the client was spending 80% of their budget on broad awareness.

We shifted 60% of media spend to high-impact digital channels and partnered with key tech influencers and review sites for social proof. We optimized product detail pages for conversion using A/B testing. We established a cross-functional "Launch War Room" for real-time adjustments, implemented real-time sentiment monitoring to address concerns instantly, and deployed AI-generated creative variations to combat ad fatigue.`}
      impact={`The campaign results shattered industry benchmarks. By treating every potential buyer as an individual at a specific moment in their journey, the brand re-established relevance and maximized conversion.

The entire initial inventory sold out in 2 weeks. ROAS increased 3x versus the previous product launch. The successful launch established the brand as a serious contender in the smart home space, and the "Launch War Room" model became standard operating procedure for all future product introductions.`}
      metrics={[
        { value: "Sold Out", label: "Inventory in 2 Weeks" },
        { value: "3x", label: "ROAS vs. Previous Launch" },
        { value: "#1", label: "Category Market Share" }
      ]}
      tags={["Growth Marketing", "Consumer Journey", "Attribution Modeling", "Digital Marketing"]}
      relatedCapability={{
        title: "Growth, Marketing & Sales",
        link: "/capabilities/growth-marketing-sales"
      }}
    />
  );
}
