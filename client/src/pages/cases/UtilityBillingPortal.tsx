import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export function UtilityBillingPortal() {
  return (
    <CaseStudyTemplate
      client="Municipal Electric and Water Utility"
      industry="Utilities · Customer Portal"
      title="Utility Company Modernizes Billing Portal for 500K Households"
      subtitle="Liferay DXP portal delivers 24/7 account access, reducing call center volume by 42% and improving payment timeliness by 28%."
      heroImage="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1600&q=80"
      challenge={`A municipal electric and water utility serving 500,000 households across three counties struggled with an outdated billing portal that frustrated customers and burdened staff. The legacy system—built in 2009—required customers to create separate logins for electric and water accounts, offered no mobile optimization, and provided only basic bill viewing functionality.

Customer service representatives fielded over 45,000 monthly calls, with 68% related to routine inquiries: bill amounts, payment due dates, usage history, and service start/stop requests. The utility's call center operated from 8 AM to 6 PM weekdays, leaving customers without support during evenings and weekends when many needed assistance.

Late payment rates hovered at 18%, partly due to customers missing due dates when they couldn't easily access account information. The utility wanted to improve customer convenience, reduce operational costs, and encourage timely payments through a modern self-service portal that worked seamlessly across devices.`}
      solution={`NEXDYNE designed and implemented a unified customer portal on Liferay DXP that consolidated electric and water account management into a single, mobile-responsive interface. The portal integrated with the utility's existing billing, metering, and customer information systems to provide real-time data access.

Customers gained the ability to view current and historical bills, track daily usage patterns through interactive charts, set up autopay and payment plans, report outages and service issues, schedule meter readings, and receive customized energy-saving tips based on their consumption patterns. A smart notification system sent email and SMS alerts for upcoming due dates, unusual usage spikes, and service updates.

NEXDYNE's team conducted usability testing with a diverse group of customers—including seniors, non-native English speakers, and customers with disabilities—to ensure the portal met accessibility standards and felt intuitive for all user groups. The portal launched with a comprehensive customer education campaign including video tutorials, email onboarding sequences, and in-person demonstrations at community centers.`}
      impact={`Within nine months of launch, the portal reduced call center volume by 42%, allowing the utility to reallocate staff to proactive customer outreach and energy efficiency programs. Customer satisfaction scores increased from 72% to 88%, with portal users expressing particular appreciation for 24/7 access and mobile convenience.

Late payment rates dropped from 18% to 13%, driven by automated payment reminders and the ease of setting up autopay. The utility saved approximately $2.1 million annually in reduced call center costs and improved cash flow. Autopay enrollment increased from 32% to 58% of all accounts. Portal adoption reached 76% within the first year, with 64% of active users accessing the portal via mobile devices. Customer effort scores improved by 38%.`}
      metrics={[
        { value: "42%", label: "Reduction in call center volume" },
        { value: "28%", label: "Improvement in payment timeliness" },
        { value: "76%", label: "Customer portal adoption" }
      ]}
      tags={["Utilities", "Customer Portal", "Technology", "Operations"]}
      relatedCapability={{
        title: "Technology",
        link: "/capabilities/technology"
      }}
    />
  );
}

export default UtilityBillingPortal;
