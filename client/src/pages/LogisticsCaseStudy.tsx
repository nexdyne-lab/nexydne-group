import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export function LogisticsCaseStudy() {
  return (
    <CaseStudyTemplate
      client="Regional Logistics Provider"
      industry="Logistics & Supply Chain · Operations"
      title="92% Reduction in Shipment Processing Errors"
      subtitle="Regional logistics provider with 15 distribution centers automates freight coordination, processing 5,000+ monthly shipments with 120 staff hours saved weekly."
      heroImage="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600&q=80"
      challenge={`Staff manually entered shipment data from 12+ carrier systems into the company's internal tracking platform. Each shipment required 15-20 minutes of data entry, creating a backlog during peak periods and frequent transcription errors that caused delivery delays. Matching carrier invoices to completed shipments consumed 120+ staff hours weekly, with discrepancies leading to payment delays and strained vendor relationships.

A regional logistics company managing freight across 15 distribution centers throughout the Southeast United States with 180-220 employees processed over 5,000 shipments monthly for mid-market manufacturing and retail clients. As the company expanded from 8 to 15 distribution centers over three years, manual processes that worked at smaller scale became critical bottlenecks. Customer service teams manually checked carrier websites for tracking updates, responding to inquiries hours after delivery issues occurred—increasing support ticket volume 40% year-over-year. The company had no early warning system for potential delivery delays; problems were discovered only when customers called to complain.`}
      solution={`NEXDYNE implemented an intelligent logistics automation platform integrating with carrier APIs, automating data synchronization, and providing predictive analytics for proactive issue resolution.

Automated API connections to 12+ carrier systems pulled shipment data in real-time, eliminating manual data entry and automatically mapping carrier-specific data formats to the company's internal schema. An AI-powered invoice matching engine compared carrier invoices to shipment records, automatically approving 94% of invoices without human review and reducing reconciliation time from 120 hours to 8 hours weekly.

Automated tracking updates pushed to customers across email, SMS, and web portal simultaneously without manual intervention. Machine learning models analyzed historical delivery patterns, weather data, and carrier performance to forecast potential delays 24-48 hours in advance, providing operations teams with automated alerts and recommended alternative routing options.`}
      impact={`Shipment processing errors dropped from 8.3% to 0.7%—a 92% reduction that virtually eliminated delivery delays caused by data entry mistakes. 120 staff hours per week were freed from manual data entry and invoice reconciliation and redirected to customer service and strategic initiatives. Annual savings of $340,000 came from combined labor cost reductions, fewer delivery errors, and improved invoice accuracy.

Customer satisfaction scores increased from 3.2 to 4.6 out of 5. Support ticket volume decreased 62% despite a 40% increase in shipment volume. On-time delivery rate improved from 87% to 96%. Invoice payment cycle reduced from 45 days to 12 days, improving cash flow. Processing capacity was maintained while scaling from 8 to 15 distribution centers without proportional staff increases.`}
      metrics={[
        { value: "92%", label: "Error reduction" },
        { value: "120hrs", label: "Saved per week" },
        { value: "$340K", label: "Annual savings" },
        { value: "5,000+", label: "Monthly shipments" }
      ]}
      tags={["Logistics", "Operations", "Automation", "Supply Chain"]}
      relatedCapability={{
        title: "Operations",
        link: "/capabilities/operations"
      }}
    />
  );
}

export default LogisticsCaseStudy;
