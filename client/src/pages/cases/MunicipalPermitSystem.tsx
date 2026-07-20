import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { FileText, Clock, XCircle, Building2, LayoutGrid, Workflow, Accessibility, Smile } from "lucide-react";

export function MunicipalPermitSystem() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Modernizing a City Permit System for 250K Residents | Public Sector Case Study"
      seoDescription="A city's 30-year-old permit system took 45 days and paper visits across 12 departments. A Microsoft Power Platform build cut approval to 7 days and lifted citizen satisfaction 58 points."
      canonical="/cases/municipal-permit-system"
      industry="Public Sector"
      industryLink="/industries/public-sector"
      title="How a City Modernized Its Permit System for 250K Residents"
      subtitle="A municipal government replaced a 30-year-old legacy system with a Microsoft Power Platform solution — cutting permit approval time from 45 days to 7 and improving citizen satisfaction by 58 points."
      heroImage="/images/cases/municipal-permit-system-hero.jpg"
      metrics={[
        { value: "7 days", label: "Approval Time (from 45 days)" },
        { value: "82%", label: "Online Submission Rate" },
        { value: "58 pts", label: "Citizen Satisfaction Gain" }
      ]}
      clientContextTitle="Paper Permits Across 12 Departments"
      clientContextIntro="A mid-sized city government serving 250,000 residents struggled with a 30-year-old permit system requiring in-person paper applications and weeks of waiting. It handled building permits, business licenses, event permits, and zoning variances across 12 departments, each with its own manual review."
      clientContextBody="Citizens complained about long waits, no status visibility, and taking time off work to visit city hall during business hours. IT had tried to modernize twice, failing on budget, vendor lock-in, and staff resistance to leaving paper. Average approval had climbed to 45 days — well above the 21-day state average. With a new digital-government mayor and a federal modernization grant, the city set a 12-week timeline to launch a system serving all departments while maintaining state compliance."
      clientProfile={{
        industry: "Municipal Government",
        companySize: "250,000 Residents",
        projectDuration: "12-Week Build",
        additionalInfo: "Microsoft Power Platform",
        additionalLabel: "Platform"
      }}
      challengeTitle="Why Permits Took 45 Days"
      challenges={[
        {
          icon: FileText,
          title: "In-person paper applications",
          description: "Residents filed on paper at city hall during business hours, with no online option."
        },
        {
          icon: Building2,
          title: "12 siloed departments",
          description: "Each department ran its own manual review process, with no shared workflow."
        },
        {
          icon: Clock,
          title: "45-day approvals",
          description: "Processing ran more than double the 21-day state average, frustrating residents and businesses."
        },
        {
          icon: XCircle,
          title: "Two failed modernizations",
          description: "Prior attempts stalled on budget, vendor lock-in, and staff resistance to change."
        }
      ]}
      approachTitle="One Platform for Every Department"
      approachIntro="NEXDYNE built a comprehensive permit-management system on Microsoft Power Platform — mapping all 12 departments' workflows and designing streamlined, automated approval processes with equitable access."
      steps={[
        {
          step: "01",
          title: "Map every department",
          description: "Workshops with all 12 departments identified bottlenecks and designed streamlined approval flows."
        },
        {
          step: "02",
          title: "Build citizen and staff apps",
          description: "Power Apps delivered the citizen portal and staff review interfaces with document upload and payments."
        },
        {
          step: "03",
          title: "Automate the routing",
          description: "Power Automate routed applications, sent notifications, and Power BI gave departments dashboards and compliance reporting."
        },
        {
          step: "04",
          title: "Ensure equitable access",
          description: "Self-service kiosks in city hall served residents without internet, with role-based access controls by jurisdiction."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Workflow,
          value: "7 days",
          label: "Average approval time",
          detail: "Down from 45, with simple permits approved within 24 hours"
        },
        {
          icon: Smile,
          value: "82%",
          label: "Online submission",
          detail: "Beating the 60% target, satisfaction up 58 points"
        },
        {
          icon: Accessibility,
          value: "40%",
          label: "Higher staff productivity",
          detail: "With regulatory findings down 85% and processing costs well below the old system"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Launching a Digital Claims Portal in 8 Weeks",
          metric: "2 hrs",
          label: "processing time",
          link: "/cases/insurance-claims-portal",
          image: "/images/cases/insurance-claims-portal-hero.jpg"
        },
        {
          title: "Building a Real-Time Tracking App for 500 Drivers",
          metric: "96%",
          label: "on-time delivery",
          link: "/cases/logistics-tracking-app",
          image: "/images/industries/retail-warehouse.jpg"
        }
      ]}
      ctaTitle="Ready to modernize citizen services?"
      ctaDescription="Let's talk about what a low-code platform could do for your approval times and satisfaction."
    />
  );
}

export default MunicipalPermitSystem;
