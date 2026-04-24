import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function TelecomCustomerPortal() {
  return (
    <CaseStudyTemplate
      client="Regional Telecommunications Provider"
      industry="Telecommunications · Customer Portal"
      title="Telecom Provider Launches Self-Service Portal for 2M Customers"
      subtitle="Salesforce Experience Cloud portal reduces support calls by 58% while driving $4.2M in annual self-service upgrades."
      heroImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=80"
      challenge={`A regional telecommunications provider serving 2 million residential and business customers faced mounting pressure from escalating call center costs and declining customer satisfaction scores. Their legacy customer portal—built in 2012—offered only basic account viewing functionality, forcing customers to call for routine tasks like plan changes, device upgrades, and billing inquiries.

The company's call center handled over 180,000 monthly contacts, with 62% classified as "low-complexity" transactions that could theoretically be automated. Average handle time for these routine calls was 8.5 minutes, costing the company approximately $12 per interaction. Customer satisfaction (CSAT) scores hovered at 68%—well below industry benchmarks—with long wait times and repetitive authentication processes cited as primary pain points.

Competitors were launching mobile-first experiences that made account management effortless, while this provider's outdated portal was actively driving customer churn.`}
      solution={`NEXDYNE partnered with the telecom provider to design and build a comprehensive self-service portal on Salesforce Experience Cloud. The platform integrated with the company's existing billing, provisioning, and CRM systems to deliver a unified customer experience across web and mobile channels.

The portal enabled customers to view real-time usage data, compare and upgrade service plans, manage connected devices, pay bills, schedule technician appointments, and troubleshoot common issues through an intelligent knowledge base. A personalized dashboard surfaced relevant offers based on usage patterns and account history, creating natural upsell opportunities without aggressive sales tactics.

NEXDYNE's design team conducted extensive user research with residential and business customers to ensure intuitive interfaces for diverse user groups, including custom Lightning Web Components for complex workflows like multi-line business account management. The portal launched in phases over 14 weeks, starting with a pilot group of 50,000 customers before rolling out to the full customer base.`}
      impact={`Within six months of launch, the self-service portal reduced call center volume by 58%, saving approximately $6.8 million annually in operational costs. Customer satisfaction scores jumped from 68% to 86%, with portal users reporting significantly higher satisfaction than those who continued to rely on phone support.

The portal's personalized offer engine drove $4.2 million in incremental annual revenue through self-service plan upgrades and add-on purchases. Average order value for self-service upgrades exceeded phone-based sales by 18%, as customers took time to research options. Portal adoption reached 84% within the first year, with mobile app usage accounting for 62% of all portal sessions. NPS improved by 22 points, and customer churn decreased by 14% among active portal users.`}
      metrics={[
        { value: "58%", label: "Reduction in support calls" },
        { value: "$4.2M", label: "Annual self-service revenue" },
        { value: "84%", label: "Customer portal adoption" }
      ]}
      tags={["Telecommunications", "Customer Portal", "Technology", "Operations"]}
      relatedCapability={{
        title: "Technology",
        link: "/capabilities/technology"
      }}
    />
  );
}
