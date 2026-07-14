import InsightArticleV2 from "@/components/InsightArticleV2";

export default function AutomationROI() {
  const sections = [
    { id: "automation-opportunity", label: "The Automation Opportunity" },
  ];

  return (
    <InsightArticleV2
      title="The Automation ROI Calculator: Where to Invest First"
      subtitle="A practical framework for prioritizing automation investments based on impact and feasibility."
      heroImage="/images/insight-automation.jpg"
      date="December 2025"
      readTime="8 min"
      category="Operations"
      categoryHref="/capabilities/operations"
      sections={sections}
      authors={[
        { name: "Rachel Torres", role: "Director, Process Automation" },
      ]}
      keyTakeaways={[
        "Automation is now accessible to mid-size companies",
        "Prioritization should balance impact and feasibility",
        "Start with high-volume, rule-based processes",
        "Build internal capability alongside external implementation",
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
      <p>
        Automation investments can deliver significant returns, but choosing where to start is challenging. This framework helps mid-size companies prioritize automation opportunities based on impact, feasibility, and strategic alignment.
      </p>

      <h2 id="automation-opportunity">The Automation Opportunity</h2>
      <p>
        Advances in technology have made automation accessible to mid-size companies. From robotic process automation to intelligent document processing, the options are expanding rapidly.
      </p>
    </InsightArticleV2>
  );
}
