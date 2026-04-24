import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export function HealthcareTelehealth() {
  return (
    <CaseStudyTemplate
      client="Regional Healthcare Network"
      industry="Healthcare · Business Building"
      title="Healthcare Provider Launches Telehealth Venture"
      subtitle="How a regional healthcare network built a telehealth platform that expanded patient reach while improving care access and operational efficiency."
      heroImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80"
      challenge={`Rural patients faced long travel times for routine care. Clinic capacity was maxed during peak hours while underutilized at other times. Younger patients expected digital healthcare options. Competition from national telehealth providers was increasing. The network needed to build telehealth capabilities quickly.

A regional healthcare network with 180 employees operating 5 clinics served a mix of urban and rural communities. Patient access was limited by geography and clinic capacity, and the organization sought to expand reach without proportional facility investment. The rise of national telehealth competitors threatened the network's patient relationships, particularly with younger demographics who increasingly expected digital-first healthcare options.`}
      solution={`NEXDYNE designed a telehealth model that complemented in-person care, identifying visit types suitable for virtual delivery and creating care protocols that maintained quality in virtual settings. Workflows were designed to integrate virtual and in-person care seamlessly, with triage processes directing patients to the appropriate care modality.

The telehealth platform included video consultation with integrated clinical tools, EHR integration for seamless documentation, patient scheduling that optimized provider utilization, and mobile apps making access easy for patients. HIPAA compliance was implemented across all platform components alongside clinical protocols, quality monitoring, outcome tracking, and provider credentialing processes for telehealth delivery.

Comprehensive provider training covered virtual consultation techniques and telehealth-specific care standards. Patient adoption was driven through targeted outreach identifying segments most likely to benefit from virtual care, awareness campaigns highlighting convenience and access, and incentives for early adopters.`}
      impact={`The telehealth platform reached 15,000 virtual visits per month, tripling the network's effective patient reach without proportional facility or staffing investment. No-show rates dropped 40% as patients accessed care more conveniently, improving both clinic utilization and patient health outcomes. Patient satisfaction scores reached 92%.

The platform enabled the network to serve rural patients who previously faced significant barriers to routine care, while also capturing younger urban patients who preferred digital access. Clinic capacity constraints eased as virtual visits absorbed demand that would otherwise require in-person appointments, improving efficiency during peak hours and generating revenue during previously underutilized periods.`}
      metrics={[
        { value: "15K", label: "Virtual visits/month" },
        { value: "3x", label: "Patient reach" },
        { value: "40%", label: "No-show reduction" },
        { value: "92%", label: "Patient satisfaction" }
      ]}
      tags={["Healthcare", "Telehealth", "Business Building", "Technology"]}
      relatedCapability={{
        title: "Technology",
        link: "/capabilities/technology"
      }}
    />
  );
}

export default HealthcareTelehealth;
