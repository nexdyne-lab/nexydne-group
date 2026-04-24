import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export function EcommerceFulfillment() {
  return (
    <CaseStudyTemplate
      client="E-commerce Home Goods Company"
      industry="E-commerce · Operations"
      title="Process Automation Transforms Order Fulfillment"
      subtitle="How an e-commerce company automated their fulfillment operations to triple capacity while reducing labor costs."
      heroImage="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1600&q=80"
      challenge={`Rapid growth had pushed the fulfillment operation to its limits. Order volume had doubled in 18 months, but the largely manual processes couldn't scale. Peak season required hiring 50+ temporary workers, training was inconsistent, and error rates spiked during high-volume periods. The company needed to triple capacity without proportionally increasing headcount.

A 175-employee e-commerce company with $65M in annual revenue specializing in home goods and décor operates a single 200,000 square foot fulfillment center. The diagnostic revealed a fulfillment operation held together by heroic effort rather than systematic processes: picking via paper lists with workers walking an average of 8 miles per shift, packing stations with no standardization (each worker using their own approach), inconsistent visual quality checks, and a warehouse management system 12 years old and incapable of supporting modern automation.`}
      solution={`NEXDYNE developed a phased automation roadmap balancing investment with returns. Phase 1 implemented a modern WMS, redesigned pick paths, and standardized packing stations. Phase 2 introduced goods-to-person automation for high-velocity SKUs. Phase 3 added automated sorting and packing for standard orders. Each phase was designed to deliver positive ROI within 12 months.

The new WMS implemented wave planning reducing pick path travel time by 40%, zone picking enabling parallel processing of large orders, mobile devices providing real-time guidance and eliminating paper, and integration with the e-commerce platform for seamless order flow. For the 20% of SKUs representing 80% of picks, automated storage and retrieval systems brought products to stationary pick stations with pick-to-light guidance achieving 99.9% accuracy and conveyor systems moving completed picks to packing stations—a 5x productivity improvement for high-velocity items.

Standard work procedures were developed for every fulfillment task, a training program reduced new hire ramp-up from 4 weeks to 1 week, real-time performance dashboards made productivity visible, and a frontline-driven continuous improvement program was established.`}
      impact={`Order capacity tripled without proportional headcount increase, enabling the company to handle projected growth for the next three years within the existing facility. Labor cost per order reduced 60% as automation absorbed the volume growth that would previously have required proportional hiring. Order accuracy reached 99.2%, eliminating the error-rate spikes that had damaged customer satisfaction during peak seasons.

Average ship time dropped to 4 hours as the wave planning system and automation eliminated the batching delays inherent in the previous manual processes. The peak season challenge was fundamentally solved: instead of training 50+ temporary workers to navigate inconsistent processes, the company now onboards a smaller temporary workforce into standardized roles supported by automation that makes new workers productive within days.`}
      metrics={[
        { value: "3x", label: "Order capacity" },
        { value: "60%", label: "Labor cost reduction" },
        { value: "99.2%", label: "Order accuracy" },
        { value: "4 hrs", label: "Avg ship time" }
      ]}
      tags={["E-commerce", "Fulfillment", "Operations", "Automation"]}
      relatedCapability={{
        title: "Operations",
        link: "/capabilities/operations"
      }}
    />
  );
}

export default EcommerceFulfillment;
