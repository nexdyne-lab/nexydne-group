import InsightArticle from "@/components/InsightArticle";

export default function AutomationROI() {
  return (
    <InsightArticle
      title="The Automation ROI Calculator: Where to Invest First"
      subtitle="A practical framework for prioritizing automation investments based on impact and feasibility."
      date="December 2025"
      readTime="8 min"
      category="Operations"
      categoryHref="/capabilities/operations"
      authors={[
        { name: "Rachel Torres", role: "Director, Process Automation" },
      ]}
      relatedContent={[
        {
          title: "Lean Operations for Mid-Size Companies: Beyond the Basics",
          href: "/capabilities/operations/insights/lean-operations",
          category: "Lean",
        },
        {
          title: "Quality Management Systems That Scale",
          href: "/capabilities/operations/insights/quality-systems",
          category: "Quality",
        },
      ]}
    >
      <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
        Automation investments can deliver significant returns, but choosing where to start is challenging. This framework helps mid-size companies prioritize automation opportunities based on impact, feasibility, and strategic alignment.
      </p>

      <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6 eb-garamond">
        The Automation Opportunity
      </h2>
      <p className="text-charcoal/80 mb-6 leading-relaxed">
        Advances in technology have made automation accessible to mid-size companies. From robotic process automation to intelligent document processing, the options are expanding rapidly.
      </p>

      <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6 eb-garamond">
        Key Takeaways
      </h2>
      <ul className="list-disc pl-6 text-charcoal/80 space-y-3 mb-8">
        <li>Automation is now accessible to mid-size companies</li>
        <li>Prioritization should balance impact and feasibility</li>
        <li>Start with high-volume, rule-based processes</li>
        <li>Build internal capability alongside external implementation</li>
      </ul>
    </InsightArticle>
  );
}
