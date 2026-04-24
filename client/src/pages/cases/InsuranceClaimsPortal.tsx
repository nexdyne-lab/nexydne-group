import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function InsuranceClaimsPortal() {
  return (
    <CaseStudyTemplate
      client="Regional Property & Casualty Insurer"
      industry="Insurance · Low-Code Development"
      title="Insurance Company Launches Digital Claims Portal in 8 Weeks"
      subtitle="Regional insurer replaces paper-based claims processing with Mendix low-code portal—reducing processing time from 14 days to 2 hours and improving customer satisfaction scores by 42 points."
      heroImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80"
      challenge={`A 75-year-old regional property and casualty insurer serving 8 states faced mounting pressure from digital-native competitors offering instant claims processing. Their legacy claims system, built in the 1990s, required policyholders to submit paper forms via mail or fax, with claims taking an average of 14 days to process. Customer satisfaction scores had declined 28 points over three years, and the company was losing 12% of policyholders annually to competitors with mobile-first experiences.

The insurer's IT team had attempted to modernize the system twice over the past decade, but both projects stalled due to complexity, cost overruns, and integration challenges with their core policy administration system. The business needed a solution that could launch quickly, integrate with existing systems, and provide a modern user experience without requiring a complete technology overhaul. With regulatory pressure to improve claims transparency and customer expectations rising, the company set an aggressive 8-week timeline to launch a digital claims portal.`}
      solution={`NEXDYNE partnered with the insurer's claims and IT teams to design and develop a comprehensive digital claims portal using Mendix low-code platform. We conducted rapid discovery workshops with claims adjusters, customer service representatives, and policyholders to map the end-to-end claims journey and identify pain points. The portal featured photo upload for damage documentation, real-time claims status tracking, secure messaging with adjusters, automated document generation, and integration with third-party estimating tools.

Our development team leveraged Mendix's visual modeling capabilities to build the portal in 6 weeks, with 2 weeks reserved for user acceptance testing and deployment. We implemented REST APIs to integrate with the insurer's legacy policy administration system, enabling real-time policy verification and claims validation. The portal's workflow engine automated routine claims processing steps—eligibility checks, deductible calculations, and payment approvals—reducing manual touchpoints by 70%. Mobile-responsive design ensured policyholders could file claims from any device, with photo upload optimized for smartphone cameras.`}
      impact={`The digital claims portal launched on schedule after 8 weeks of development and testing. Within 3 months of launch, 86% of new claims were submitted through the portal, far exceeding the initial 60% adoption target. Average claims processing time dropped from 14 days to 2 hours for straightforward claims, with complex claims processing in under 48 hours. Customer satisfaction scores increased 42 points, with policyholders praising the convenience of mobile claims filing and real-time status updates.

The insurer reduced claims processing costs by $2.8 million annually through automation and reduced manual data entry. Claims adjuster productivity increased 35% as they spent less time on administrative tasks. Policyholder churn reversed, with retention improving from 88% to 94% within 6 months.`}
      metrics={[
        { value: "86%", label: "Digital claims adoption" },
        { value: "2 hours", label: "Average processing time (from 14 days)" },
        { value: "42 pts", label: "NPS improvement" }
      ]}
      tags={["Insurance", "Low-Code", "Digital Transformation", "Technology"]}
      relatedCapability={{
        title: "Technology",
        link: "/capabilities/technology"
      }}
    />
  );
}
