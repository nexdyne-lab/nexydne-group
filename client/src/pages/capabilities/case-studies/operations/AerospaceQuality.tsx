import CaseStudyArticle from "@/components/CaseStudyArticle";

export default function AerospaceQuality() {
  return (
    <CaseStudyArticle
      industry="Operations"
      industryHref="/capabilities/operations"
      title="Quality System Implementation Achieves ISO Certification"
      subtitle="How an aerospace supplier built a world-class quality management system to meet customer requirements and reduce defects"
      client="A 150-employee aerospace supplier with $55M in annual revenue, manufacturing precision-machined components for commercial and defense aircraft. The company serves Tier 1 suppliers to major OEMs."
      challenge="A major customer audit revealed significant gaps in the quality management system, putting $15M in annual contracts at risk. The company had 90 days to demonstrate substantial progress toward ISO 9001 and AS9100 certification or face disqualification from the approved supplier list."
      metrics={[
        { value: "ISO 9001", label: "Certification Achieved" },
        { value: "45%", label: "Defect Reduction" },
        { value: "$15M", label: "Contracts Retained" },
        { value: "AS9100", label: "Certification Achieved" },
      ]}
      relatedCaseStudies={[
        {
          title: "Supply Chain Optimization Reduces Costs by 25%",
          href: "/capabilities/operations/case-studies/consumer-goods-supply-chain",
          industry: "Manufacturing"
        },
        {
          title: "Production Planning Reduces Inventory by 35%",
          href: "/capabilities/operations/case-studies/food-production-planning",
          industry: "Food & Beverage"
        },
        {
          title: "Workforce Optimization Improves Productivity by 28%",
          href: "/capabilities/operations/case-studies/healthcare-workforce",
          industry: "Healthcare"
        }
      ]}
    >
      <h2>Assessing the Quality Gap</h2>
      <p>
        Our rapid assessment revealed a quality system that existed on paper but wasn't consistently followed in practice. Documentation was outdated and didn't reflect actual processes. Inspection records were incomplete, making traceability impossible. Corrective action requests piled up without systematic resolution. Training records couldn't demonstrate competency for critical operations.
      </p>

      <h2>Building the Quality Foundation</h2>
      <p>
        We implemented a comprehensive quality management system aligned with AS9100 requirements. We rewrote all quality procedures to reflect actual best practices. We implemented a document control system that ensured current versions were always available. We established a calibration program for all measurement equipment. We also created a training matrix that linked job functions to required competencies.
      </p>

      <h2>Implementing Process Controls</h2>
      <p>
        Beyond documentation, we focused on building quality into production processes. We implemented statistical process control for critical dimensions. We established first article inspection procedures for all new parts. We created in-process inspection checkpoints at key operations. We also deployed visual management systems that made quality status visible on the shop floor.
      </p>

      <h2>Driving Continuous Improvement</h2>
      <p>
        The quality system included robust mechanisms for continuous improvement. We implemented a corrective action process with root cause analysis requirements. We established a supplier quality program that extended standards to the supply base. We created a management review process that tracked quality metrics monthly. We also launched a quality awareness program that engaged all employees.
      </p>

      <h2>Achieving Certification</h2>
      <p>
        The certification journey required sustained focus and executive commitment. We conducted internal audits to identify and close gaps before external review. We engaged a registrar early to align expectations and timeline. We prepared staff for audit interviews through mock assessments. The company achieved ISO 9001 certification in 6 months and AS9100 certification 3 months later.
      </p>

      <h2>Key Lessons</h2>
      <ul>
        <li>Quality systems must reflect actual practice, not aspirational procedures</li>
        <li>Process controls prevent defects; inspection only detects them</li>
        <li>Management commitment is essential for successful certification</li>
        <li>Continuous improvement sustains quality performance over time</li>
      </ul>
    </CaseStudyArticle>
  );
}
