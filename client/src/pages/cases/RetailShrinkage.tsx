import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function RetailShrinkage() {
  return (
    <CaseStudyTemplate
      client="National Retail Chain"
      industry="Retail · Risk & Resilience"
      title="National Retailer Reduces Shrinkage by 25% with AI"
      subtitle="Computer vision and POS anomaly detection combined to identify theft and operational errors in real-time."
      heroImage="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80"
      challenge={`A national retail chain was losing millions annually to shrinkage—a combination of shoplifting, employee theft, and administrative errors. Traditional security measures like EAS tags and security guards were expensive and often ineffective against sophisticated theft or internal collusion.

The retailer needed a scalable, automated solution to detect suspicious behavior at self-checkout kiosks and throughout the store without adding friction to the customer experience.`}
      solution={`NEXDYNE implemented an integrated loss prevention platform powered by computer vision and transaction analytics.

Self-Checkout Monitoring used overhead cameras to analyze items placed in the bagging area. If a customer scanned a cheap item but bagged an expensive one (ticket switching) or failed to scan an item (miss-scan), the system alerted the attendant instantly. POS Anomaly Detection used ML models to analyze transaction logs and flag suspicious patterns, such as excessive voids, refunds to the same credit card, or transactions occurring outside business hours, helping identify internal theft. Shelf Sweep Detection used computer vision to identify rapid, large-volume removal of high-value items from shelves, triggering real-time alerts to security personnel.`}
      impact={`Overall shrinkage decreased 25% within the first year, delivering 3x ROI as the system identified theft patterns that previously went undetected. False positive alerts decreased 60% compared to the retailer's previous rules-based system, meaning security staff spent their time on genuine incidents rather than chasing false alarms.

The system paid for itself in six months. Catching previously invisible theft enabled the retailer to reduce losses while maintaining a frictionless customer experience—no additional checkout friction or customer-facing security changes were required.`}
      metrics={[
        { value: "25%", label: "Reduction in overall shrinkage" },
        { value: "3x", label: "ROI within first year" },
        { value: "60%", label: "Decrease in false positive alerts" }
      ]}
      quote={{
        text: "The system paid for itself in six months. We're catching theft we didn't even know was happening, and our honest customers appreciate that we can keep prices lower by reducing losses.",
        author: "Chief Operations Officer",
        role: "National Retail Chain"
      }}
      tags={["Retail", "AI", "Loss Prevention", "Risk & Resilience"]}
      relatedCapability={{
        title: "Risk & Resilience",
        link: "/capabilities/risk-resilience"
      }}
    />
  );
}
