import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export function InsurancePolicyholderPortal() {
  return (
    <CaseStudyTemplate
      client="Regional Insurance Carrier"
      industry="Insurance · Customer Portal"
      title="Insurance Carrier Launches Digital Policyholder Portal for 1.2M Members"
      subtitle="Guidewire Digital Portal enables self-service policy management, reducing agent workload by 52% and improving retention by 18% among policyholders aged 25-40."
      heroImage="https://images.unsplash.com/photo-1560472355-536de3962603?w=1600&q=80"
      challenge={`A regional property and casualty insurance carrier with 1.2 million policyholders faced mounting pressure to modernize its customer experience. Policyholders relied heavily on agents and call centers for routine tasks like viewing policy documents, requesting ID cards, updating contact information, and making payments—creating operational inefficiencies and frustrating customers accustomed to digital self-service in other industries.

The carrier's agent network handled over 95,000 monthly service requests, with 58% classified as "low-value" transactions that consumed agent time without generating new business. Younger policyholders (ages 25-40) expressed particular dissatisfaction with the lack of digital options, contributing to a 22% annual retention gap between this demographic and older policyholders.

Leadership recognized that digital self-service wasn't just about cost reduction—it was essential for competing with direct-to-consumer insurers offering seamless mobile experiences. The carrier needed a modern policyholder portal that would free agents to focus on sales and complex service issues while meeting customer expectations for 24/7 digital access.`}
      solution={`NEXDYNE partnered with the insurance carrier to implement a comprehensive policyholder portal on Guidewire Digital Portals, integrated with the company's existing Guidewire PolicyCenter and BillingCenter systems. The portal provided a unified view of all policies (auto, home, umbrella) with intuitive navigation and mobile-first design.

Policyholders gained the ability to view policy details and documents, download ID cards instantly, update contact and vehicle information, add or remove drivers and vehicles, make payments and set up autopay, view claims status, and request roadside assistance. NEXDYNE's design team conducted extensive user research with policyholders across age groups and technical proficiency levels to ensure the portal felt intuitive for everyone. Custom workflows guided users through multi-step processes with clear explanations and real-time premium impact calculations.

The portal launched in phases over 12 weeks, starting with a pilot group of 100,000 policyholders before expanding to the full customer base. NEXDYNE provided comprehensive training for the carrier's agent network and call center staff, ensuring they could support customers during the transition and leverage the portal's agent-facing features for faster service delivery.`}
      impact={`Within eight months of launch, the portal reduced agent service requests by 52%, allowing the carrier's agent network to focus on sales and complex customer needs. Agent productivity increased by 28%, as measured by new policies written per agent. Customer satisfaction scores improved from 74% to 89%, with portal users reporting significantly higher satisfaction than non-users.

Retention among younger policyholders (ages 25-40) improved by 18 percentage points, closing the gap with older demographics. The carrier saved approximately $5.3 million annually in reduced call center and agent service costs. Portal adoption reached 81% within the first year, with mobile app usage accounting for 58% of all portal sessions. The carrier's Net Promoter Score (NPS) increased by 26 points.`}
      metrics={[
        { value: "52%", label: "Reduction in agent service requests" },
        { value: "18%", label: "Improvement in retention (ages 25-40)" },
        { value: "81%", label: "Customer portal adoption" }
      ]}
      tags={["Insurance", "Customer Portal", "Digital Transformation", "Technology"]}
      relatedCapability={{
        title: "Technology",
        link: "/capabilities/technology"
      }}
    />
  );
}

export default InsurancePolicyholderPortal;
