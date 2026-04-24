import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export function LogisticsProductAccess() {
  return (
    <CaseStudyTemplate
      client="National Industrial Supply Distributor"
      industry="Logistics & Distribution · E-commerce Personalization"
      title="Logistics Company Enables 3.2x Faster Product Access with Personalized Search and Merchandising"
      subtitle="Industrial supply distributor implemented Tweakwise search and personalization to help B2B customers find the right products faster—driving 68% higher conversion and $12M in incremental revenue."
      heroImage="https://images.unsplash.com/photo-1553413077-190dd305871c?w=1600&q=80"
      challenge={`A national industrial supply distributor with 180,000+ SKUs serving construction, manufacturing, and facilities management customers faced a critical e-commerce challenge: their vast product catalog overwhelmed customers and made it difficult to find the right products quickly. Generic keyword search returned hundreds of irrelevant results, forcing customers to manually filter through pages of products or call sales representatives for guidance.

The company's B2B customers—procurement managers, maintenance supervisors, and contractors—needed to find specific products fast during time-sensitive projects. Poor search relevance and lack of personalized recommendations meant customers either abandoned searches in frustration or spent excessive time navigating the catalog, reducing productivity and increasing the likelihood they'd purchase from competitors. 42% of orders required sales representative assistance because customers couldn't find products through self-service.`}
      solution={`NEXDYNE implemented Tweakwise's AI-powered search, merchandising, and personalization platform across four phases.

Phase 1: Intelligent search using semantic algorithms that understood natural language queries, synonyms, and industry-specific terminology. The system learned from customer behavior—tracking clicks, add-to-carts, and purchases for each search term—continuously improving relevance rankings.

Phase 2: Behavioral personalization adapted search results and product listings based on customer characteristics. Purchase history influenced search rankings, and role-based personalization ensured procurement managers saw bulk pricing while maintenance supervisors saw technical specifications.

Phase 3: Intelligent product recommendations across product pages, cart, and checkout. "Frequently bought together" surfaces complementary products based on actual purchase patterns. Cart recommendations identified missing items for complete solutions.

Phase 4: Merchandising automation with configurable business rules that promoted high-margin products, cleared excess inventory, and featured new arrivals while maintaining relevance. Seasonal rules automatically adjusted product visibility, and A/B testing continuously optimized strategies.`}
      impact={`Average time from search to add-to-cart decreased from 8.4 minutes to 2.6 minutes—3.2x faster product discovery. Zero-result searches dropped from 18% to 2%. Customers who used search converted at 24% (vs. 14% previously), growing search-driven revenue from 31% to 52% of total e-commerce sales.

Average order value increased 41% from $342 to $482 as customers discovered complementary products. Recommendation click-through rates reached 34%, with 62% of customers adding at least one recommended item to their cart. Self-service orders increased from 58% to 87% of total orders, reducing sales support costs by $1.8M annually. Total incremental revenue reached $12M in the first year. Customer satisfaction improved from 3.2/5 to 4.6/5.`}
      metrics={[
        { value: "3.2x", label: "Faster product discovery" },
        { value: "68%", label: "Search conversion increase" },
        { value: "41%", label: "Average order value lift" },
        { value: "$12M", label: "Incremental annual revenue" }
      ]}
      tags={["Logistics", "E-commerce", "Personalization", "B2B"]}
      relatedCapability={{
        title: "Growth Marketing & Sales",
        link: "/capabilities/growth-marketing-sales"
      }}
    />
  );
}

export default LogisticsProductAccess;
