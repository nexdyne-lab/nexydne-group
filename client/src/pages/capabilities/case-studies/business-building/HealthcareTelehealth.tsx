import CaseStudyArticle from "@/components/CaseStudyArticle";

export default function HealthcareTelehealth() {
  return (
    <CaseStudyArticle
      industry="Business Building"
      industryHref="/capabilities/business-building"
      title="Healthcare Provider Launches Telehealth Venture"
      subtitle="How a regional healthcare network built a telehealth platform that expanded patient reach while improving care access and operational efficiency"
      client="A regional healthcare network with 180 employees operating 5 clinics. The network served a mix of urban and rural communities. Patient access was limited by geography and clinic capacity. The organization sought to expand reach without proportional facility investment."
      challenge="Rural patients faced long travel times for routine care. Clinic capacity was maxed during peak hours while underutilized at other times. Younger patients expected digital healthcare options. Competition from national telehealth providers was increasing. The network needed to build telehealth capabilities quickly."
      metrics={[
        { value: "15K", label: "Virtual Visits/Month" },
        { value: "3x", label: "Patient Reach" },
        { value: "40%", label: "No-Show Reduction" },
        { value: "92%", label: "Patient Satisfaction" },
      ]}
      relatedCaseStudies={[
        {
          title: "Professional Services Firm Builds SaaS Product",
          href: "/capabilities/business-building/case-studies/consulting-saas",
          industry: "Professional Services"
        },
        {
          title: "Logistics Company Builds Technology Spin-Off",
          href: "/capabilities/business-building/case-studies/logistics-tech-spinoff",
          industry: "Logistics"
        },
        {
          title: "Financial Services Firm Enters Adjacent Market",
          href: "/capabilities/business-building/case-studies/wealth-adjacent",
          industry: "Financial Services"
        }
      ]}
    >
      <h2>Designing the Telehealth Model</h2>
      <p>
        We designed a telehealth model that complemented in-person care. We identified visit types suitable for virtual delivery. We created care protocols that maintained quality in virtual settings. We designed workflows that integrated virtual and in-person care seamlessly. We also developed triage processes that directed patients to appropriate care modalities.
      </p>

      <h2>Building the Platform</h2>
      <p>
        We built a telehealth platform tailored to the network's needs. The platform included video consultation with integrated clinical tools. We implemented EHR integration for seamless documentation. We built patient scheduling that optimized provider utilization. We also created mobile apps that made access easy for patients.
      </p>

      <h2>Ensuring Compliance and Quality</h2>
      <p>
        We implemented robust compliance and quality frameworks. We ensured HIPAA compliance across all platform components. We created clinical protocols that maintained care standards. We built quality monitoring and outcome tracking. We also developed credentialing processes for telehealth providers.
      </p>

      <h2>Training Providers and Staff</h2>
      <p>
        We developed comprehensive training for telehealth delivery. We trained providers on virtual consultation techniques. We educated staff on scheduling and technical support. We created patient education materials for virtual visits. We also established ongoing support and feedback mechanisms.
      </p>

      <h2>Driving Patient Adoption</h2>
      <p>
        We launched telehealth with targeted patient outreach. We identified patient segments most likely to benefit from virtual care. We created awareness campaigns highlighting convenience and access. We offered incentives for early adopters. We also built feedback loops to continuously improve patient experience.
      </p>

      <h2>Key Lessons</h2>
      <ul>
        <li>Telehealth works best as complement to in-person care</li>
        <li>Provider training is critical for virtual care quality</li>
        <li>EHR integration is essential for care continuity</li>
        <li>Patient education drives adoption and satisfaction</li>
      </ul>
    </CaseStudyArticle>
  );
}
