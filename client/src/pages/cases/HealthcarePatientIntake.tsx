import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';

export default function HealthcarePatientIntake() {
  return (
    <CaseStudyTemplate
      client="National Healthcare Provider"
      industry="Healthcare"
      title="Redesigning the Patient Intake Experience"
      subtitle="How a seamless blend of digital pre-check and physical workflow optimization reduced wait times by 35%."
      heroImage="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2653&auto=format&fit=crop"
      challenge={`The client, a national healthcare provider with over 200 clinics, was facing a critical bottleneck: patient intake. The process was paper-heavy, redundant, and frustrating for both patients and staff.
      
      Patients spent an average of 20 minutes filling out forms in the waiting room, often repeating information they had already provided. This administrative burden delayed appointments, reduced clinician utilization, and resulted in a Net Promoter Score (NPS) that was lagging behind industry benchmarks. The challenge was to modernize the intake process without alienating older patient demographics who were less comfortable with technology.`}
      solution={`NexDyne approached this challenge through the lens of Service Design, looking at the entire ecosystem of people, processes, and technology.
      
      We designed a mobile-first "Pre-Visit Pass" that allowed patients to complete all necessary documentation from home. This digital layer was integrated directly with the clinic's EMR system, eliminating manual data entry for staff.
      
      Crucially, we also redesigned the physical arrival experience. We introduced "Express Kiosks" for patients who had completed pre-check, and "Concierge Stations" for those who needed assistance, ensuring that technology enhanced rather than replaced human care. We retrained front-desk staff to shift from data entry clerks to patient experience ambassadors.`}
      impact={`The results were transformative. By moving the administrative work upstream, we unlocked significant capacity within the clinics.
      
      Wait times dropped by 35% within the first three months. Clinician capacity increased by 15% as appointments started on time more consistently. Most importantly, patient satisfaction scores for the "arrival experience" jumped by 40 points, proving that efficiency and empathy can go hand in hand.`}
      metrics={[
        { value: "35%", label: "Reduction in average patient wait time" },
        { value: "15%", label: "Increase in daily clinician capacity" },
        { value: "+40", label: "Increase in NPS for arrival experience" }
      ]}
      tags={["Service Design", "Healthcare", "Digital Transformation", "UX/UI"]}
      relatedCapability={{
        title: "Service Design",
        link: "/capabilities/growth-marketing-sales/service-design"
      }}
    />
  );
}
