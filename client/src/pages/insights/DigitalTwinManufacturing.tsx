import InsightArticleV2 from "@/components/InsightArticleV2";

export default function DigitalTwinManufacturing() {
  const sections = [
    { id: "moving-beyond-visualization", label: "Beyond visualization" },
    { id: "case-study", label: "Case study" },
    { id: "three-steps", label: "Three steps to start" },
  ];

  const relatedInsights = [
    { title: "IoT and the Resilient Supply Chain", category: "Operations", link: "/insights/iot-resilient-supply-chain", image: "/images/insights/iot-resilient-supply-chain-hero.jpg" },
    { title: "The Executive's Guide to Process Mining", category: "Operations", link: "/insights/process-mining-guide", image: "/images/insights/process-mining-guide-hero.jpg" },
    { title: "Lean Operations at Scale", category: "Operations", link: "/insights/lean-operations-scale", image: "/images/insights/lean-operations-scale-hero.jpg" },
  ];

  return (
    <InsightArticleV2
      category="Digital Twins"
      title="Digital Twins in Manufacturing: From Hype to ROI"
      subtitle="How leading manufacturers are using digital twins to simulate production lines, predict failures, and optimize throughput before a single machine is turned on."
      heroImage="/images/insights/digital-twin-manufacturing-hero.jpg"
      publishDate="January 28, 2026"
      readTime="8 min"
      sections={sections}
      keyTakeaways={[
        "A true digital twin is dynamic and connected to the physical world through IoT sensors—not a static 3D CAD model. The value comes from moving descriptive twins to predictive and prescriptive ones.",
        "For a Tier 1 automotive supplier, a physics-based twin traced assembly micro-stoppages to a robotic arm's path planning that misaligned only when ambient temperature rose above 28°C.",
        "The engagement lifted OEE 15%, materially cut scrap and unplanned-downtime costs, and cut new-product ramp-up time 40% through virtual commissioning.",
        "Start small: pick your biggest bottleneck asset, connect reliable operational data, and focus on a single outcome first.",
      ]}
      relatedInsights={relatedInsights}
    >
      <p>
        The concept of a "Digital Twin"—a virtual replica of a physical asset, process, or system—has been around
        for decades. But for years, it was the domain of aerospace giants and billion-dollar R&D labs. Today, thanks
        to cheaper sensors, cloud computing, and advanced AI, digital twins are democratizing manufacturing efficiency.
      </p>

      <p>
        For manufacturers, the promise is simple but transformative: What if you could test a new production line
        configuration, predict a machine failure, or train a new operator without risking downtime, safety, or capital?
      </p>

      <h2 id="moving-beyond-visualization">Moving beyond visualization</h2>

      <p>
        Many organizations mistake a 3D CAD model for a digital twin. A true digital twin is dynamic. It breathes data.
        It is connected to the physical world via IoT sensors and updates in real-time (or near real-time) to reflect
        the current state of its physical counterpart.
      </p>

      <p>
        The real value unlocks when you move from <strong>descriptive</strong> twins (visualizing what is happening) to{" "}
        <strong>predictive</strong> and <strong>prescriptive</strong> twins (simulating what <em>will</em> happen and
        determining what <em>should</em> happen).
      </p>

      <h2 id="case-study">Case study: automotive component manufacturer</h2>

      <p>
        We worked with a Tier 1 automotive supplier struggling with a new assembly line for EV components. The line was
        plagued by micro-stoppages and quality rejection rates that were double the target.
      </p>

      <h3>The implementation</h3>
      <ul>
        <li><strong>Data integration:</strong> We connected PLCs, vision systems, and environmental sensors to a unified data platform.</li>
        <li><strong>Virtual replica:</strong> Built a physics-based simulation of the critical robotic assembly stations.</li>
        <li><strong>Scenario testing:</strong> Ran thousands of virtual production cycles to identify the root cause of the bottlenecks.</li>
      </ul>

      <h3>The discovery</h3>
      <p>
        The digital twin revealed that a specific robotic arm's path planning was suboptimal only when the ambient
        temperature in the factory rose above 28°C, causing thermal expansion in a joint that slightly misaligned the
        gripper. This subtle interaction was invisible to standard monitoring but obvious in the physics simulation.
      </p>

      <h3>The impact</h3>
      <ul>
        <li><strong>15% increase in OEE:</strong> By optimizing the robot's path and adding cooling, throughput stabilized.</li>
        <li><strong>Lower cost of quality:</strong> Reduced scrap rates and avoided unscheduled downtime.</li>
        <li><strong>Virtual commissioning:</strong> The company now tests all line changes in the twin before deploying to the floor, reducing ramp-up time for new products by 40%.</li>
      </ul>

      <h2 id="three-steps">Three steps to start</h2>

      <p>
        You don't need to model your entire factory at once. The most successful digital twin initiatives start small
        and scale fast.
      </p>

      <ol>
        <li><strong>Identify the critical asset:</strong> Pick the one machine or process that is your biggest bottleneck or cost center.</li>
        <li><strong>Connect the data:</strong> Ensure you can reliably extract operational data from that asset. A twin without data is just a drawing.</li>
        <li><strong>Define the use case:</strong> Are you trying to predict maintenance? Optimize energy? Improve quality? Focus on one outcome first.</li>
      </ol>

      <p>
        Digital twins are no longer science fiction. They are a practical, proven tool for manufacturers who want to win
        on efficiency and agility. The question isn't if you'll use them, but how soon.
      </p>
    </InsightArticleV2>
  );
}
