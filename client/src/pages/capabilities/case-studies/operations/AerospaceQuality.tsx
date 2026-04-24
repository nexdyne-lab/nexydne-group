import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function AerospaceQuality() {
  return (
    <CaseStudyTemplate
      client="Aerospace Precision Components Supplier"
      industry="Aerospace · Operations"
      title="Quality System Implementation Achieves ISO Certification"
      subtitle="How an aerospace supplier built a world-class quality management system to meet customer requirements and reduce defects."
      heroImage="https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=1600&q=80"
      challenge={`A major customer audit revealed significant gaps in the quality management system, putting $15M in annual contracts at risk. The company had 90 days to demonstrate substantial progress toward ISO 9001 and AS9100 certification or face disqualification from the approved supplier list.

A 150-employee aerospace supplier with $55M in annual revenue manufactures precision-machined components for commercial and defense aircraft, serving Tier 1 suppliers to major OEMs. The rapid assessment revealed a quality system that existed on paper but wasn't consistently followed in practice: outdated documentation not reflecting actual processes, incomplete inspection records making traceability impossible, corrective action requests piling up without systematic resolution, and training records unable to demonstrate competency for critical operations.`}
      solution={`NEXDYNE implemented a comprehensive quality management system aligned with AS9100 requirements. All quality procedures were rewritten to reflect actual best practices, a document control system ensured current versions were always available, a calibration program was established for all measurement equipment, and a training matrix linked job functions to required competencies.

Beyond documentation, process controls were built into production: statistical process control for critical dimensions, first article inspection procedures for all new parts, in-process inspection checkpoints at key operations, and visual management systems making quality status visible on the shop floor. Continuous improvement mechanisms included corrective action processes with root cause analysis requirements, a supplier quality program extending standards to the supply base, monthly management reviews tracking quality metrics, and a quality awareness program engaging all employees.

Internal audits identified and closed gaps before external review, and staff were prepared for audit interviews through mock assessments. The company achieved ISO 9001 certification in 6 months and AS9100 certification 3 months later.`}
      impact={`Both ISO 9001 and AS9100 certifications were achieved within 9 months, securing the $15 million in contracts that had been at risk. Defects dropped 45% as process controls replaced inspection-dependent quality assurance. The quality management system transformed from a compliance exercise into a genuine operational capability.

The certifications opened new commercial opportunities—AS9100 certification is a prerequisite for many aerospace supply relationships, and the company successfully pursued two new Tier 1 customers that had previously been inaccessible. The corrective action system, now functioning properly, drove ongoing improvement that continued to reduce defect rates beyond the initial 45% gain.`}
      metrics={[
        { value: "ISO 9001", label: "Certification achieved" },
        { value: "AS9100", label: "Certification achieved" },
        { value: "45%", label: "Defect reduction" },
        { value: "$15M", label: "Contracts retained" }
      ]}
      tags={["Aerospace", "Quality Management", "ISO Certification", "Operations"]}
      relatedCapability={{
        title: "Operations",
        link: "/capabilities/operations"
      }}
    />
  );
}
