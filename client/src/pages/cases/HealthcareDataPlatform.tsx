import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function HealthcareDataPlatform() {
  return (
    <CaseStudyTemplate
      client="Regional Hospital Network"
      industry="Healthcare · Data Platform"
      title="Unifying Patient Records for Better Care Outcomes"
      subtitle="Creating a 360-degree patient view by integrating 15+ legacy systems into a secure, HIPAA-compliant data lake for a regional hospital network—driving a 20% reduction in readmissions."
      heroImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80"
      challenge={`The hospital network had grown through acquisitions, resulting in fragmented patient data across incompatible EMR systems. Clinicians had to log into multiple portals to get a complete history, leading to incomplete patient history at the point of care, high administrative burden for data reconciliation, and an inability to perform population health analytics.

Each acquired facility ran its own EHR, lab system, and billing platform with no interoperability. Critical clinical decisions were being made without complete patient information, and the organization could not identify high-risk patients across the network for proactive intervention.`}
      solution={`NEXDYNE implemented a modern Data Lakehouse architecture on Azure, using FHIR standards to ingest and normalize data from all legacy EMRs into a single longitudinal patient record.

We built a centralized unified data lake storing both structured (clinical) and unstructured (notes, images) data. Automated governance controls—role-based access controls and audit logs—ensure full HIPAA compliance. The architecture integrates 15+ legacy systems including EMRs, labs, and billing platforms, surfacing a complete patient history in under one second.`}
      impact={`The unified data platform delivered a 360-degree patient view across all facilities, enabling clinicians to access complete patient history instantly without toggling between systems. Population health analytics became possible for the first time, allowing the network to identify high-risk patients and intervene before readmission.

The 20% reduction in readmissions resulted from better predictive risk modeling enabled by the complete longitudinal patient record. Administrative burden for data reconciliation dropped significantly as the single source of truth eliminated manual cross-system lookups.`}
      metrics={[
        { value: "15+", label: "Legacy systems integrated" },
        { value: "360°", label: "Patient view (complete history < 1 second)" },
        { value: "20%", label: "Readmission reduction" }
      ]}
      tags={["Healthcare", "Data Platform", "Cloud", "Data Transformation"]}
      relatedCapability={{
        title: "Data Transformation",
        link: "/capabilities/data-transformation"
      }}
    />
  );
}
