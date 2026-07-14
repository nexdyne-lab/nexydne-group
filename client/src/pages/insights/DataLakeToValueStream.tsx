import InsightArticleV2 from "@/components/InsightArticleV2";

export default function DataLakeToValueStream() {
  const sections = [
    { id: "data-mesh", label: "The data mesh shift" },
    { id: "technology-stack", label: "The technology stack" },
    { id: "real-time-value", label: "Real-time value" },
  ];

  const relatedInsights = [
    { title: "The CEO's Guide to Data Modernization", category: "Strategy", link: "/insights/ceo-guide-data-modernization", image: "/images/capabilities/cap-data-bars.jpg" },
    { title: "Building a Data-First Culture", category: "Culture", link: "/insights/building-data-culture", image: "/images/capabilities/cap-data-presentation.jpg" },
    { title: "The Corporate Venture Advantage", category: "Strategy", link: "/insights/corporate-venture-advantage", image: "/images/industries/team-strategy-board.jpg" },
  ];

  return (
    <InsightArticleV2
      category="Technology"
      title="From Data Lake to Value Stream: A Technical Deep Dive"
      subtitle="Your data lake is full. Now what? A technical exploration of modern data mesh architectures and how to turn raw data into actionable business value."
      heroImage="/images/capabilities/cap-hands-data.jpg"
      publishDate="September 20, 2024"
      readTime="8 min"
      sections={sections}
      authors={[{ name: "David Seyaker", role: "Co-Founder & Chief Executive, NexDyne Consulting Group" }]}
      keyTakeaways={[
        "Centralized data lakes often become 'data swamps'—vast repositories of poorly documented data that nobody trusts or uses.",
        "The data mesh treats data as a product owned by domain teams, backed by a self-serve platform and federated governance.",
        "A modern composable stack—object storage with Delta or Iceberg, decoupled compute, orchestration, catalogs, and policy-as-code—makes the mesh work.",
        "Don't replace your lake; layer a mesh on top of it, starting with one high-value domain and expanding incrementally.",
      ]}
      relatedInsights={relatedInsights}
    >
      <p>
        The promise of the data lake was simple: dump all your data in one place, and insights will magically emerge.
        The reality has been far messier. Many organizations now find themselves with massive, expensive "data
        swamps"—vast repositories of poorly documented, inconsistently formatted data that nobody trusts or uses.
      </p>

      <h2 id="data-mesh">The data mesh paradigm shift</h2>

      <p>
        The data mesh approach, pioneered by Zhamak Dehghani, offers a compelling alternative. Instead of a centralized
        lake, it treats data as a product, owned and served by domain teams. Think of it as microservices for data.
      </p>

      <p>The key principles are:</p>

      <ul>
        <li>
          <strong>Domain ownership:</strong> the team that creates the data is responsible for its quality and
          discoverability.
        </li>
        <li>
          <strong>Data as a product:</strong> each data domain publishes its data with clear SLAs, documentation, and
          versioning, just like an API.
        </li>
        <li>
          <strong>Self-serve platform:</strong> a central platform team provides the infrastructure (storage, compute,
          governance tools), but domain teams have autonomy over their data products.
        </li>
        <li>
          <strong>Federated governance:</strong> global standards for interoperability, but local execution.
        </li>
      </ul>

      <h2 id="technology-stack">The technology stack</h2>

      <p>
        Implementing a data mesh requires a modern, composable stack. Here's a reference architecture we've deployed
        successfully:
      </p>

      <ul>
        <li>
          <strong>Storage:</strong> cloud-native object storage (S3, GCS, ADLS) with Delta Lake or Iceberg for ACID
          transactions and schema evolution.
        </li>
        <li>
          <strong>Compute:</strong> decoupled compute engines like Spark, Trino, or Databricks for flexible processing.
        </li>
        <li>
          <strong>Orchestration:</strong> Airflow or Dagster for workflow management, with dbt for transformation logic.
        </li>
        <li>
          <strong>Catalog and discovery:</strong> a metadata layer like DataHub, Atlan, or Alation to make data
          products discoverable and trustworthy.
        </li>
        <li>
          <strong>Governance:</strong> policy-as-code tools like Open Policy Agent (OPA) for access control and
          compliance.
        </li>
      </ul>

      <h2 id="real-time-value">From lake to stream: real-time value</h2>

      <p>
        The next evolution is moving from batch processing to real-time streams. Technologies like Apache Kafka and
        Flink allow you to process data as it arrives, enabling use cases like real-time fraud detection, dynamic
        pricing, and instant personalization.
      </p>

      <p>
        The key is to build a "Kappa architecture" where the stream is the source of truth, and batch views are derived
        from it, rather than the other way around.
      </p>

      <blockquote>
        The goal is not to replace your lake, but to layer a mesh on top of it. Start with one high-value domain, prove
        the model, and expand incrementally.
      </blockquote>
    </InsightArticleV2>
  );
}
