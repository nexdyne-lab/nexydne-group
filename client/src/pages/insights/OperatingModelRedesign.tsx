import InsightArticleV2 from "@/components/InsightArticleV2";

export default function OperatingModelRedesign() {
  const sections = [
    { id: "structure-follows-strategy", label: "Structure follows strategy" },
    { id: "operating-model-canvas", label: "Operating model canvas" },
    { id: "archetypes", label: "Model archetypes" },
    { id: "redesign-principles", label: "Redesign principles" },
    { id: "implementation", label: "Implementation approach" },
    { id: "bottom-line", label: "The bottom line" },
  ];

  const relatedInsights = [
    { title: "Why Strategic Plans Fail", category: "Business Strategy", link: "/insights/strategic-plans-success", image: "/images/insights/strategic-plans-success-hero.jpg" },
    { title: "Portfolio Management Excellence", category: "Business Strategy", link: "/insights/portfolio-management", image: "/images/insights/portfolio-management-hero.jpg" },
    { title: "Business Transformation Strategy", category: "Business Strategy", link: "/insights/business-transformation-strategy", image: "/images/insights/business-transformation-strategy-hero.jpg" },
  ];

  return (
    <InsightArticleV2
      category="Business Strategy"
      title="Operating Model Redesign"
      subtitle="How to redesign your operating model to enable strategy execution. Aligning structure, processes, and capabilities with strategic intent."
      heroImage="/images/insights/operating-model-redesign-hero.jpg"
      publishDate="December 2024"
      readTime="10 min"
      sections={sections}
      keyTakeaways={[
        "Structure follows strategy: many organizations try to execute new strategies through old operating models and wonder why results don't follow.",
        "An operating model spans six dimensions—structure, processes, technology, governance, people, and metrics—and all of them must align when strategy changes.",
        "Centralized, decentralized, and federated archetypes each trade control against local responsiveness; the right choice depends on strategic requirements.",
        "Redesign holistically and phase it—design, pilot, rollout, stabilize—planning for a 12-18 month stabilization period, because changing structure without processes and governance rarely lasts.",
      ]}
      relatedInsights={relatedInsights}
    >
      <h2 id="structure-follows-strategy">Structure follows strategy</h2>
      <p>
        Alfred Chandler's famous dictum—"structure follows strategy"—remains as relevant today as when he
        wrote it in 1962. Yet many organizations try to execute new strategies through old operating
        models, wondering why results don't follow.
      </p>
      <p>
        An operating model defines how an organization creates and delivers value. It encompasses
        structure, processes, technology, and governance. When strategy changes, the operating model must
        evolve to enable it.
      </p>

      <h2 id="operating-model-canvas">The operating model canvas</h2>
      <h3>Six dimensions of the operating model</h3>
      <ul>
        <li><strong>Structure:</strong> How the organization is organized and how work is divided.</li>
        <li><strong>Processes:</strong> How work flows through the organization.</li>
        <li><strong>Technology:</strong> Systems and tools that enable operations.</li>
        <li><strong>Governance:</strong> How decisions are made and performance managed.</li>
        <li><strong>People:</strong> Capabilities, culture, and talent management.</li>
        <li><strong>Metrics:</strong> How performance is measured and rewarded.</li>
      </ul>

      <h2 id="archetypes">Common operating model archetypes</h2>
      <h3>Centralized model</h3>
      <p>
        Decision-making concentrated at the center. Best for organizations requiring tight control,
        consistency, and efficiency. Trade-off: slower response to local conditions.
      </p>
      <h3>Decentralized model</h3>
      <p>
        Decision-making pushed to business units or regions. Best for diverse businesses requiring local
        responsiveness. Trade-off: potential duplication and inconsistency.
      </p>
      <h3>Federated model</h3>
      <p>
        Hybrid approach with some functions centralized and others decentralized. Best for balancing
        efficiency with responsiveness. Trade-off: complexity in defining boundaries.
      </p>

      <h2 id="redesign-principles">Redesign principles</h2>
      <ul>
        <li><strong>Start with strategy:</strong> The operating model should enable strategic priorities. Define what the organization needs to do well, then design the model to deliver it.</li>
        <li><strong>Design for the future:</strong> Don't just fix today's problems—design for where the business is going. Build in flexibility for evolution.</li>
        <li><strong>Simplify ruthlessly:</strong> Complexity is the enemy of execution. Remove unnecessary layers, streamline processes, and clarify decision rights.</li>
        <li><strong>Align all dimensions:</strong> Structure alone isn't enough. Processes, technology, governance, and metrics must all align with the new model.</li>
      </ul>

      <h2 id="implementation">Implementation approach</h2>
      <h3>Phase 1: Design</h3>
      <p>
        Define the target operating model based on strategic requirements. Engage stakeholders to build
        buy-in and identify implementation challenges.
      </p>
      <h3>Phase 2: Pilot</h3>
      <p>
        Test the new model in a limited scope to identify issues and refine the design before full rollout.
      </p>
      <h3>Phase 3: Rollout</h3>
      <p>
        Implement the new model across the organization with clear communication, training, and change
        management support.
      </p>
      <h3>Phase 4: Stabilize</h3>
      <p>
        Monitor performance, address issues, and make adjustments. Operating model changes take time to
        embed—plan for a 12-18 month stabilization period.
      </p>

      <h2 id="bottom-line">The bottom line</h2>
      <p>
        Operating model redesign is one of the most powerful levers for improving organizational
        performance. By aligning structure, processes, and capabilities with strategic intent,
        organizations can unlock significant value. The key is to approach it holistically—changing
        structure without changing processes and governance rarely delivers lasting results.
      </p>
    </InsightArticleV2>
  );
}
