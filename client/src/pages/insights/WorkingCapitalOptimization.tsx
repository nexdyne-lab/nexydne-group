import InsightArticleV2 from "@/components/InsightArticleV2";

export default function WorkingCapitalOptimization() {
  const sections = [
    { id: "hidden-source-of-cash", label: "The hidden source of cash" },
    { id: "three-levers", label: "The three levers" },
    { id: "inventory-strategies", label: "Inventory strategies" },
    { id: "receivables-strategies", label: "Receivables strategies" },
    { id: "implementation", label: "Implementation" },
    { id: "bottom-line", label: "The bottom line" },
  ];

  const relatedInsights = [
    { title: "Smart Cost Reduction", category: "Performance Improvement", link: "/insights/smart-cost-reduction", image: "/images/insights/smart-cost-reduction-hero.jpg" },
    { title: "Lean Operations at Scale", category: "Performance Improvement", link: "/insights/lean-operations-scale", image: "/images/insights/lean-operations-scale-hero.jpg" },
    { title: "The CFO's Cash Flow Guide", category: "Strategy & Finance", link: "/insights/cfo-cash-flow-guide", image: "/images/insights/cfo-cash-flow-guide-hero.jpg" },
  ];

  return (
    <InsightArticleV2
      category="Performance Improvement"
      categoryHref="/insights"
      title="Working Capital Optimization"
      subtitle="How to unlock cash trapped in your balance sheet through strategic working capital management and process improvement."
      heroImage="/images/insights/working-capital-optimization-hero.jpg"
      publishDate="December 2024"
      readTime="9 min"
      sections={sections}
      keyTakeaways={[
        "Working capital tied up in inventory, receivables, and payables often equals 15-25% of revenue—cash that could fund growth, reduce debt, or return value to shareholders.",
        "Three levers drive it: inventory (DIO), receivables (DSO), and payables (DPO), combined in the Cash Conversion Cycle, CCC = DIO + DSO - DPO.",
        "Improvement comes from eliminating inefficiency—SKU segmentation, right-sized safety stock, better collections, and disciplined payment timing—not from squeezing suppliers or customers.",
        "Sustaining gains requires clear baselines and targets, cross-functional alignment, and building working capital management into ongoing processes.",
      ]}
      relatedInsights={relatedInsights}
    >
      <h2 id="hidden-source-of-cash">The Hidden Source of Cash</h2>

      <p>
        Many organizations overlook one of the largest sources of internal cash: working capital. The cash
        tied up in inventory, receivables, and payables often represents 15-25% of revenue—a significant
        amount that could be funding growth, reducing debt, or returning value to shareholders.
      </p>

      <p>
        Working capital optimization isn't about squeezing suppliers or neglecting customers. It's about
        eliminating inefficiency and aligning working capital levels with actual business needs. Done
        right, it releases cash while improving operations.
      </p>

      <h2 id="three-levers">The Three Levers of Working Capital</h2>

      <h3>Inventory (Days Inventory Outstanding)</h3>
      <p>
        Inventory is often the largest working capital component and the one with the most opportunity.
        Excess inventory ties up cash, increases carrying costs, and creates obsolescence risk.
      </p>

      <h3>Receivables (Days Sales Outstanding)</h3>
      <p>
        Every day of DSO represents cash that could be in your bank account. Improving collections and
        credit management accelerates cash flow without impacting customer relationships.
      </p>

      <h3>Payables (Days Payables Outstanding)</h3>
      <p>
        Optimizing payment timing—not stretching suppliers unfairly—can improve cash position. The goal is
        to pay on time, not early, and to capture early payment discounts when economically attractive.
      </p>

      <h3>The Cash Conversion Cycle</h3>
      <p>
        The Cash Conversion Cycle (CCC) measures how long cash is tied up in working capital:
      </p>
      <p>
        <strong>CCC = DIO + DSO - DPO</strong>
      </p>
      <p>
        A lower CCC means faster cash conversion and less working capital required to operate the
        business.
      </p>

      <h2 id="inventory-strategies">Inventory Optimization Strategies</h2>
      <ul>
        <li><strong>SKU segmentation:</strong> Not all inventory is equal. Segment by velocity, variability, and value to set appropriate stocking levels.</li>
        <li><strong>Safety stock optimization:</strong> Right-size safety stock based on actual demand variability and service level requirements.</li>
        <li><strong>Demand planning:</strong> Improve forecast accuracy to reduce the need for buffer stock.</li>
        <li><strong>Lead time reduction:</strong> Work with suppliers to reduce lead times, enabling leaner inventory.</li>
      </ul>

      <h2 id="receivables-strategies">Receivables Improvement Strategies</h2>
      <ul>
        <li><strong>Credit policy optimization:</strong> Set appropriate credit terms based on customer risk and relationship value.</li>
        <li><strong>Invoice accuracy:</strong> Reduce disputes by ensuring invoices are accurate and complete.</li>
        <li><strong>Collections process:</strong> Implement systematic dunning and escalation processes.</li>
        <li><strong>Electronic payments:</strong> Encourage customers to pay electronically to accelerate receipt.</li>
      </ul>

      <h2 id="implementation">Implementation Considerations</h2>

      <h3>Baseline and Target Setting</h3>
      <p>
        Establish clear baselines and targets for each working capital component. Benchmark against
        industry peers to identify opportunity.
      </p>

      <h3>Cross-Functional Alignment</h3>
      <p>
        Working capital spans finance, operations, sales, and procurement. Success requires alignment
        across functions with shared metrics and incentives.
      </p>

      <h3>Sustainability</h3>
      <p>
        One-time improvements are easy; sustaining them is hard. Build working capital management into
        ongoing processes and performance management.
      </p>

      <h2 id="bottom-line">The Bottom Line</h2>
      <p>
        Working capital optimization is one of the highest-ROI initiatives available to most
        organizations. It releases cash without requiring revenue growth or cost cutting, and the
        improvements are often sustainable with proper process and governance. For organizations looking
        to fund growth, reduce debt, or improve returns, working capital should be a priority.
      </p>
    </InsightArticleV2>
  );
}
