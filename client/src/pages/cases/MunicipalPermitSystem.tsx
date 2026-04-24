import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export function MunicipalPermitSystem() {
  return (
    <CaseStudyTemplate
      client="Mid-Sized City Government"
      industry="Public Sector · Low-Code Development"
      title="City Government Modernizes Permit System Serving 250K Residents"
      subtitle="Municipal government replaces 30-year-old legacy system with Microsoft Power Platform solution—reducing permit approval time from 45 days to 7 days and improving citizen satisfaction by 58 points."
      heroImage="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600&q=80"
      challenge={`A mid-sized city government serving 250,000 residents struggled with a 30-year-old permit management system that required citizens to submit paper applications in person and wait weeks for approval. The system handled building permits, business licenses, special event permits, and zoning variances across 12 different departments, each with their own manual review processes. Citizens complained about long wait times, lack of status visibility, and the inconvenience of taking time off work to visit city hall during business hours.

The city's IT department had attempted to modernize the system twice over the past decade, but both projects failed due to budget constraints, vendor lock-in concerns, and resistance from department staff accustomed to paper-based workflows. Average permit approval time had increased to 45 days, well above the state average of 21 days, causing frustration among residents and local businesses. With a new mayor committed to digital government and a federal grant available for technology modernization, the city set a 12-week timeline to launch a digital permit system that could serve all departments while maintaining compliance with state regulations.`}
      solution={`NEXDYNE partnered with the city's IT and department leaders to design and develop a comprehensive permit management system using Microsoft Power Platform. We conducted workshops with staff from all 12 departments to map existing workflows, identify bottlenecks, and design streamlined approval processes. The system featured online permit applications with document upload, automated routing to appropriate departments, electronic review and approval workflows, payment processing, and real-time status tracking for citizens.

Our development team leveraged Power Apps for the citizen-facing portal and staff review interfaces, Power Automate for workflow automation and email notifications, and Power BI for department dashboards and compliance reporting. We integrated with the city's existing financial system for payment processing and document management system for permit record retention. The solution included self-service kiosks in city hall for residents without internet access, ensuring equitable access to digital services. Role-based access controls ensured staff could only view and approve permits within their department's jurisdiction.`}
      impact={`The digital permit system launched on schedule after 12 weeks of development and staff training. Within 6 months of launch, 82% of permit applications were submitted online, far exceeding the initial 60% adoption target. Average permit approval time dropped from 45 days to 7 days, with simple permits approved within 24 hours. Citizen satisfaction scores increased 58 points, with residents praising the convenience of 24/7 online access and real-time status tracking.

The city reduced permit processing costs by $420,000 annually through automation and eliminated the need for three temporary staff positions previously required to manage paper applications. Department staff productivity increased 40% as they spent less time on data entry and more time on complex permit reviews requiring professional judgment. The system's audit trail and compliance reporting capabilities simplified state inspections and reduced regulatory findings by 85%. The city now uses Power Platform for additional citizen services, including code enforcement reporting, park reservations, and public records requests.`}
      metrics={[
        { value: "7 days", label: "Average approval time (from 45 days)" },
        { value: "82%", label: "Online submission rate" },
        { value: "58 pts", label: "Citizen satisfaction improvement" }
      ]}
      tags={["Public Sector", "Low-Code", "Government", "Operations"]}
      relatedCapability={{
        title: "Technology",
        link: "/capabilities/technology"
      }}
    />
  );
}

export default MunicipalPermitSystem;
