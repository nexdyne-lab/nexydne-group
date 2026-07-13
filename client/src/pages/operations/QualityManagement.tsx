// TODO: David — confirm Quality Management Systems experience & impact numbers with practice lead before publish.
// TODO: David — populate 2-3 thought-leadership insights for the Quality Management hub.
// TODO: confirm hero image asset — using fallback Unsplash URL until /images/quality-management-abstract.jpg lands.

import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function QualityManagement() {
  return (
    <CapabilityHubTemplate
      hubName="Quality Management Systems"
      slug="operations/quality-management"
      heroSubtitle="Build a culture of quality that exceeds customer expectations. Implement systematic quality controls and continuous improvement methodologies."
      heroImage="/images/industries/mfg-robotics.jpg"
      experienceStats={[
        { number: "75+", label: "Quality transformation programs across manufacturing and services" },
        { number: "50-85%", label: "Typical reduction in defect rates and quality costs" },
        { number: "6σ", label: "Process capability achieved for critical processes" },
        // TODO: confirm with practice lead before publish
        { number: "Audit-ready", label: "ISO and industry-specific compliance posture" },
      ]}
      // TODO: confirm ambition copy with practice lead before publish
      ambitions={[
        {
          title: "Mature your Six Sigma program",
          description:
            "Move beyond green-belt training to a measurable Six Sigma operating system — projects tied to P&L impact, leaders who coach, and savings that compound year over year.",
        },
        {
          title: "Prevent defects, not just catch them",
          description:
            "Shift quality upstream with design-for-quality, statistical process control, and predictive analytics so defects never reach customers — or your scrap pile.",
        },
        {
          title: "Lift supplier quality",
          description:
            "Hold suppliers to the standard your customers expect. Joint quality plans, audits, and shared dashboards that make supplier quality a partnership, not a battle.",
        },
        {
          title: "Make compliance routine",
          description:
            "Embed regulatory and audit readiness into daily operations — FDA, ISO, automotive, food safety — so audits become non-events instead of fire drills.",
        },
        {
          title: "Connect quality to customer experience",
          description:
            "Treat customer-perceived quality as a first-class metric. Close the loop from VOC and warranty data back into design, manufacturing, and service.",
        },
        {
          title: "Build a continuous-improvement culture",
          description:
            "Equip every operator and frontline leader with the tools and authority to solve problems — kaizen that survives leadership changes and outlasts the consultants.",
        },
      ]}
      howWeCanHelp={[
        {
          title: "Quality Strategy & Governance",
          description:
            "Define your quality vision and management system. Establish governance structures, metrics, and accountability frameworks that drive results.",
          href: "/capabilities/operations/quality-management/quality-strategy-governance",
        },
        {
          title: "Process Quality Improvement",
          description:
            "Apply Six Sigma and lean methodologies to reduce variation and eliminate defects. Build statistical process control capabilities.",
          href: "/capabilities/operations/quality-management/process-quality-improvement",
        },
        {
          title: "Supplier Quality Management",
          description:
            "Extend quality standards to your supply base. Develop supplier qualification, monitoring, and development programs.",
          href: "/capabilities/operations/quality-management/supplier-quality-management",
        },
        {
          title: "Quality Culture Development",
          description:
            "Build a culture where quality is everyone's responsibility. Training, recognition, and engagement programs that drive behavior change.",
          href: "/capabilities/operations/quality-management/quality-culture-development",
        },
        {
          title: "Regulatory Compliance",
          description:
            "Navigate complex regulatory requirements. ISO certification, industry-specific standards, and audit readiness programs.",
          href: "/capabilities/operations/quality-management/regulatory-compliance",
        },
        {
          title: "Quality Analytics & Technology",
          description:
            "Deploy technology to enable quality excellence. Quality management systems, analytics platforms, and automation solutions.",
          href: "/capabilities/operations/quality-management/quality-analytics-technology",
        },
      ]}
      ambitionsCTAText="Talk to us about your Quality Management ambition →"
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Assess the system",
          body: "We evaluate your current quality management system — processes, metrics, culture, and technology. We benchmark against best practices and quantify the cost of quality to build a compelling case for change.",
        },
        {
          step: "02",
          title: "Design the framework",
          body: "We develop a comprehensive quality management system tailored to your industry and operations. We define governance structures, metrics, and improvement methodologies that drive sustainable results.",
        },
        {
          step: "03",
          title: "Build the culture",
          body: "We implement quality improvements while building internal capabilities. We train teams, establish recognition programs, and create feedback loops that embed quality into your organizational DNA.",
        },
      ]}
      featuredCases={[
        { slug: "insurance-claims-automation", title: "Settling straightforward claims in hours, not weeks", industry: "Insurance", metric: "60%", image: "/case-insurance-claims.399e5d4b.jpg" },
        { slug: "pe-industrial-transformation", title: "Adding $18M in EBITDA at an industrial manufacturer", industry: "Private Equity", metric: "$18M", image: "/images/industries/transport-traffic.jpg" },
        { slug: "healthcare-readmission", title: "Cutting avoidable readmissions with better prediction", industry: "Healthcare", metric: "42%", image: "/case-doctor-consultation.799c1562.jpg" },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/strategy-corporate-finance", name: "Strategy & Corporate Finance" },
        { href: "/capabilities/business-building", name: "Business Building" },
        { href: "/capabilities/ai-technology-consulting", name: "AI Technology Consulting" },
      ]}
      ctaLeadName="Talk to our Quality Management lead"
    />
  );
}
