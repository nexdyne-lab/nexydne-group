import InsightArticleV2 from "@/components/InsightArticleV2";

export default function FromMVPToScale() {
  const sections = [
    { id: "technical-rewrite", label: "The technical rewrite" },
    { id: "operationalizing", label: "Operationalizing chaos" },
    { id: "unit-economics", label: "Unit economics check" },
  ];

  const relatedInsights = [
    { title: "The Corporate Venture Advantage", category: "Article", link: "/insights/corporate-venture-advantage", image: "/images/capabilities/cap-lightbulb-idea.jpg" },
    { title: "Hiring for Builders", category: "Talent", link: "/insights/hiring-for-builders", image: "/images/capabilities/cap-venturing.jpg" },
    { title: "The CEO's Guide to Data Modernization", category: "Strategy", link: "/insights/ceo-guide-data-modernization", image: "/images/capabilities/cap-telescope.jpg" },
  ];

  return (
    <InsightArticleV2
      category="Guide"
      title="From MVP to scale: navigating the 'Valley of Death'"
      subtitle="Building a Minimum Viable Product is easy. Turning it into a scalable, revenue-generating business is where 90% of corporate ventures fail. Here is the operational playbook for crossing the chasm."
      heroImage="/images/industries/team-strategy-board.jpg"
      publishDate="November 28, 2024"
      readTime="10 min"
      sections={sections}
      keyTakeaways={[
        "The transition from experiment to enterprise is the 'Valley of Death'—where technical debt accumulates, operational processes break, and unit economics are put to the test.",
        "MVPs are built for speed, not stability; a dedicated feature-freeze sprint to harden infrastructure, CI/CD, and automated testing is the only way to speed up later.",
        "Scaling means replacing heroics with playbooks across customer success, sales operations, and data governance.",
        "Prove the model before pouring on marketing spend: obsess over CAC and LTV, aiming for a clear path from a 1:1 ratio to 3:1.",
      ]}
      relatedInsights={relatedInsights}
    >
      <p>
        You've launched an MVP. Early users love it. The board is excited. Now comes the hard part. The transition from
        "experiment" to "enterprise" is fraught with peril, often called the "Valley of Death." This is where technical
        debt accumulates, operational processes break, and unit economics are put to the test.
      </p>

      <h2 id="technical-rewrite">Phase 1: The technical rewrite</h2>
      <p>
        Your MVP was likely built for speed, not stability. That's fine—that was the goal. But you cannot scale on
        spaghetti code.
      </p>
      <p>
        <strong>The trap:</strong> Trying to add new features while simultaneously refactoring the core platform.
      </p>
      <p>
        <strong>The solution:</strong> Implement a "feature freeze" sprint. Dedicate 4&ndash;6 weeks solely to hardening
        the infrastructure, implementing proper CI/CD pipelines, and establishing automated testing. It feels like
        slowing down, but it's the only way to speed up later.
      </p>

      <h2 id="operationalizing">Phase 2: Operationalizing the chaos</h2>
      <p>
        In the MVP phase, your team probably did things manually that didn't scale—onboarding customers via email,
        fixing database errors by hand, handling support calls on personal cell phones.
      </p>
      <p>To scale, you must replace "heroics" with "playbooks."</p>
      <ul>
        <li>
          <strong>Customer success:</strong> Move from "high touch" to "tech touch." Implement self-service onboarding
          and automated nurture sequences.
        </li>
        <li>
          <strong>Sales operations:</strong> Define a repeatable sales motion. If your founder is the only one who can
          sell the product, you don't have a scalable business yet.
        </li>
        <li>
          <strong>Data governance:</strong> Stop using spreadsheets. Implement a proper CRM and data warehouse
          (Snowflake/BigQuery) to track KPIs accurately.
        </li>
      </ul>

      <h2 id="unit-economics">Phase 3: The unit economics reality check</h2>
      <p>
        It's easy to grow if you're selling dollar bills for 90 cents. As you scale, you must prove that the business
        model holds water.
      </p>
      <p>
        We advise our clients to obsess over <strong>CAC (Customer Acquisition Cost)</strong> and{" "}
        <strong>LTV (Lifetime Value)</strong> ratios. In the MVP phase, a 1:1 ratio is acceptable. To scale, you need a
        clear path to 3:1. If the math doesn't work, stop scaling and fix the product or the pricing.
      </p>

      <blockquote>
        The golden rule of scaling: premature scaling is the root of all evil. Do not pour gasoline (marketing spend) on
        a leaky engine (product/operations). Fix the engine first.
      </blockquote>
    </InsightArticleV2>
  );
}
