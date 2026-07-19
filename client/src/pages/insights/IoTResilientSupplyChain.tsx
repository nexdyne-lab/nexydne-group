import InsightArticleV2 from "@/components/InsightArticleV2";

export default function IoTResilientSupplyChain() {
  const sections = [
    { id: "three-layers", label: "Three layers of visibility" },
    { id: "case-study", label: "Case study" },
    { id: "implementing", label: "Implementing IoT" },
  ];

  const relatedInsights = [
    { title: "Digital Twins in Manufacturing: From Hype to ROI", category: "Operations", link: "/insights/digital-twin-manufacturing", image: "/images/industries/retail-warehouse.jpg" },
    { title: "The Generative Supply Chain: Scaling Creative with AI", category: "Operations", link: "/insights/generative-supply-chain", image: "/images/capabilities/cap-warehouse-robot.jpg" },
    { title: "Building Supply Chain Resilience", category: "Operations", link: "/insights/iot-resilient-supply-chain", image: "/images/capabilities/cap-iot-network.jpg" },
  ];

  return (
    <InsightArticleV2
      category="IoT & Supply Chain"
      title="IoT and the Resilient Supply Chain: Visibility is Victory"
      subtitle="In an era of global disruption, knowing where your goods are isn't enough. You need to know their condition, their context, and their risk profile in real-time."
      heroImage="/images/industries/retail-warehouse.jpg"
      publishDate="January 15, 2026"
      readTime="6 min"
      sections={sections}
      keyTakeaways={[
        "Supply chains are now judged on resilience, not just cost and speed—and the companies that thrive are the ones with the best real-time visibility.",
        "IoT delivers visibility in three layers: location and status, condition monitoring, and contextual intelligence that predicts delays before they happen.",
        "A global electronics distributor cut lost cargo by 90%, established damage accountability, and reduced safety stock by 15% after deploying comprehensive IoT tracking.",
        "The barrier to entry has fallen sharply—longer sensor battery life, cheaper connectivity, and unified platforms make resilience a matter of turning on the lights.",
      ]}
      relatedInsights={relatedInsights}
    >
      <p>
        Supply chains used to be judged on cost and speed. Today, the primary metric is resilience. From
        pandemics to geopolitical tensions to climate events, the disruptions are constant. The companies that
        thrive aren't the ones with the leanest inventory; they're the ones with the best eyes.
      </p>

      <p>
        Internet of Things (IoT) technology has graduated from "nice-to-have" pilot projects to the backbone of
        modern logistics. It provides the granular, real-time data layer that allows supply chain managers to move
        from reactive firefighting to proactive orchestration.
      </p>

      <h2 id="three-layers">The Three Layers of IoT Visibility</h2>

      <h3>1. Location &amp; Status</h3>
      <p>
        Basic GPS tracking is table stakes. Modern IoT tags (using cellular, LoRaWAN, or satellite) provide
        continuous updates on location, even in remote areas or deep within a warehouse. But knowing <em>where</em>
        {" "}a container is doesn't help if you don't know <em>what</em> state it's in.
      </p>

      <h3>2. Condition Monitoring</h3>
      <p>
        For sensitive goods—pharmaceuticals, food, electronics—condition is everything. Sensors now track
        temperature, humidity, shock, tilt, and light exposure.
      </p>
      <p>
        <strong>Example:</strong> A cold-chain logistics provider uses IoT sensors to monitor vaccine shipments. If a
        freezer unit's temperature trends upward (even if still within safe limits), an alert triggers a maintenance
        check at the next stop, preventing spoilage before it happens.
      </p>

      <h3>3. Contextual Intelligence</h3>
      <p>
        This is where AI meets IoT. By combining sensor data with external data sources (weather, traffic, port
        congestion), systems can predict delays and recommend alternatives.
      </p>

      <h2 id="case-study">Case Study: Global Electronics Distributor</h2>
      <p>
        A major distributor of high-value components was losing millions annually to "shrinkage" and damage during
        transit. They implemented a comprehensive IoT tracking solution.
      </p>
      <p>
        <strong>The results:</strong>
      </p>
      <ul>
        <li>
          <strong>90% reduction in lost cargo:</strong> Real-time alerts allowed security teams to intervene during
          theft attempts.
        </li>
        <li>
          <strong>Damage accountability:</strong> Shock sensors pinpointed exactly when and where damage occurred,
          allowing the company to hold specific carriers accountable.
        </li>
        <li>
          <strong>Inventory optimization:</strong> With precise arrival times, they reduced safety stock levels by
          15%, freeing up significant working capital.
        </li>
      </ul>

      <h2 id="implementing">Implementing IoT Without the Headache</h2>
      <p>
        The barrier to entry has never been lower. Battery life for sensors has extended to years, connectivity costs
        have plummeted, and platforms like NexDyne's can ingest data from any device type into a single dashboard.
      </p>
      <p>
        Resilience isn't about building higher walls; it's about turning on the lights. IoT gives you the visibility
        to see the disruption coming and the agility to steer around it.
      </p>
    </InsightArticleV2>
  );
}
