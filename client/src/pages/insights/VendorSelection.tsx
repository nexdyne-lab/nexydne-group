import InsightArticleV2 from "@/components/InsightArticleV2";

export default function VendorSelection() {
  const sections = [
    { id: "must-haves", label: "Must-haves vs. nice-to-haves" },
    { id: "proof-of-concept", label: "The proof of concept" },
    { id: "total-cost-of-ownership", label: "Total cost of ownership" },
    { id: "exit-strategy", label: "The exit strategy" },
  ];

  const relatedInsights = [
    { title: "Composable Architecture for Growing Companies", category: "Technology", link: "/insights/composable-architecture", image: "/images/cloud-abstract.jpg" },
    { title: "The Enterprise Integration Playbook", category: "Integration", link: "/insights/enterprise-integration-playbook", image: "/images/digital-transformation-abstract.jpg" },
    { title: "Measuring Automation ROI", category: "Operations", link: "/insights/measuring-automation-roi", image: "/images/data-abstract.jpg" },
  ];

  return (
    <InsightArticleV2
      category="Strategy"
      categoryHref="/insights"
      title="The Vendor Selection Matrix: How to Choose Tech That Actually Fits"
      subtitle="Stop buying shelfware. A structured approach to evaluating software vendors ensures you buy what you need, not what the salesperson wants to sell."
      heroImage="/images/approach-technology.jpg"
      publishDate="June 18, 2026"
      readTime="6 min"
      sections={sections}
      keyTakeaways={[
        "The average enterprise wastes 30% of its software budget on unused 'shelfware'—a problem that starts with falling in love with a demo before defining requirements.",
        "Before contacting vendors, assemble stakeholders from marketing, sales, IT, and legal and build a weighted scorecard of functional, technical, and usability requirements.",
        "Never sign a multi-year contract off a slide deck—demand a paid proof of concept against a hard use case using your own data.",
        "Evaluate total cost of ownership, not just license fees, and plan your exit—data ownership and exportability—before you sign.",
      ]}
      relatedInsights={relatedInsights}
    >
      <p>
        The average enterprise wastes 30% of its software budget on unused licenses. This "shelfware"
        problem stems from a flawed buying process: falling in love with a demo before defining the
        requirements.
      </p>

      <h2 id="must-haves">Step 1: Define the "Must-Haves" vs. "Nice-to-Haves"</h2>

      <p>
        Before talking to a single vendor, gather stakeholders from marketing, sales, IT, and legal.
        Create a weighted scorecard.
      </p>

      <ul>
        <li><strong>Functional Requirements:</strong> "Must integrate natively with Salesforce." "Must support multi-currency."</li>
        <li><strong>Technical Requirements:</strong> "Must be SOC2 compliant." "Must have an open API with rate limits above 1000/min."</li>
        <li><strong>Usability Requirements:</strong> "Must be intuitive enough for non-technical staff to use with &lt;2 hours of training."</li>
      </ul>

      <h2 id="proof-of-concept">Step 2: The Proof of Concept (POC)</h2>

      <p>
        Never sign a multi-year contract based on a slide deck. Demand a paid POC. Pick a specific,
        difficult use case—one that your current tool failed at—and ask the vendor to prove they can
        handle it with <em>your</em> data.
      </p>

      <p>
        If they hesitate, walk away. A vendor confident in their product will welcome the chance to prove
        it.
      </p>

      <h2 id="total-cost-of-ownership">Step 3: Total Cost of Ownership (TCO)</h2>

      <p>
        The license fee is just the tip of the iceberg. A true TCO analysis includes:
      </p>

      <ul>
        <li><strong>Implementation Costs:</strong> Will you need an external agency to set it up?</li>
        <li><strong>Training Costs:</strong> How much downtime will your team experience while learning the new tool?</li>
        <li><strong>Maintenance Costs:</strong> Does it require a dedicated admin?</li>
      </ul>

      <blockquote>
        The most expensive software is the one that nobody uses.
      </blockquote>

      <h2 id="exit-strategy">The Exit Strategy</h2>

      <p>
        Always plan for the divorce before the marriage. Ensure your contract includes clear terms on
        data ownership and exportability. If you leave, can you take your data with you in a usable
        format?
      </p>

      <p>
        By adding rigor to the selection process, you transform technology from a cost center into a
        strategic enabler.
      </p>
    </InsightArticleV2>
  );
}
