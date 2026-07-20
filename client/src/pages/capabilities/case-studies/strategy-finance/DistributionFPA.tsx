import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { CalendarClock, Boxes, EyeOff, Server, Database, LayoutDashboard, Users, Wallet } from "lucide-react";

export function DistributionFPA() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="FP&A Transformation That Cut Monthly Close to 5 Days | Distribution Case Study"
      seoDescription="A 200-employee distributor took 20+ days to close the books, deciding on intuition while finance drowned in data entry. A cloud ERP and analytics cut close to 5 days and tripled finance productivity."
      canonical="/capabilities/strategy-corporate-finance/case-studies/distribution-fpa"
      industry="Transportation & Logistics"
      industryLink="/industries/transportation-logistics"
      title="How a Distributor Cut Monthly Close From 20+ Days to 5"
      subtitle="An industrial distributor modernized its finance function with a cloud ERP and real-time analytics — cutting monthly close to 5 days, freeing 15% of working capital, and tripling finance productivity."
      heroImage="/images/industries/fin-monitors.jpg"
      metrics={[
        { value: "5 days", label: "Monthly Close" },
        { value: "Real-time", label: "Performance Visibility" },
        { value: "15%", label: "Working Capital Freed" },
        { value: "3x", label: "Finance Productivity" }
      ]}
      clientContextTitle="Growing, but Flying Blind"
      clientContextIntro="A 200-employee industrial distribution company operates 8 Midwest warehouses serving manufacturing customers. It was growing rapidly but flying blind — monthly financials took 20+ days to close, making it impossible to respond to market changes."
      clientContextBody="Leadership decided on intuition rather than data, and finance spent all its time on transaction processing. The diagnostic found a function overwhelmed by manual work: 80% of team time on data entry and reconciliation, multiple disconnected systems, no standardized chart of accounts across locations, monthly-only inventory valuation, and unknown customer profitability at the account level."
      clientProfile={{
        industry: "Industrial Distributor",
        companySize: "200 Employees",
        projectDuration: "8 Warehouses",
        additionalInfo: "Cloud ERP",
        additionalLabel: "Platform"
      }}
      challengeTitle="Why Decisions Lagged"
      challenges={[
        {
          icon: CalendarClock,
          title: "20+ day close",
          description: "Monthly financials arrived too late to respond to performance issues."
        },
        {
          icon: Server,
          title: "Disconnected systems",
          description: "Multiple systems required manual data transfer with no standardized chart of accounts."
        },
        {
          icon: EyeOff,
          title: "Unknown customer profitability",
          description: "The company couldn't see profitability at the account level."
        },
        {
          icon: Boxes,
          title: "Monthly-only inventory",
          description: "Inventory valuation updated just once a month, obscuring real position."
        }
      ]}
      approachTitle="Clean Data, Real-Time Analytics"
      approachIntro="NEXDYNE implemented a cloud ERP integrating financials, inventory, and sales — then built analytics on clean data and restructured the finance team from processors into business partners."
      steps={[
        {
          step: "01",
          title: "Unify onto one system",
          description: "A cloud ERP with migrated, cleansed data, a standardized chart of accounts, and automated reconciliations replaced the fragmented stack."
        },
        {
          step: "02",
          title: "See inventory in real time",
          description: "WMS integration delivered real-time inventory visibility across all eight warehouses."
        },
        {
          step: "03",
          title: "Build the analytics",
          description: "Executive dashboards, account-level customer profitability, product-margin analysis, and a rolling 13-week cash forecast served the business."
        },
        {
          step: "04",
          title: "Transform the team",
          description: "Roles separated processing from analysis, with a business-partner model and monthly business reviews driving accountability."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: LayoutDashboard,
          value: "5 days",
          label: "Monthly close",
          detail: "Down from 20+, with real-time dashboards for every location"
        },
        {
          icon: Users,
          value: "3x",
          label: "Finance productivity",
          detail: "As automation freed the team for business partnership"
        },
        {
          icon: Wallet,
          value: "15%",
          label: "Working capital freed",
          detail: "From profitability and inventory insights previously invisible"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Tripling Revenue in 18 Months Post-Acquisition",
          metric: "3x",
          label: "revenue growth",
          link: "/capabilities/strategy-corporate-finance/case-studies/pe-growth-healthcare",
          image: "/case-healthcare-team.5797392b.jpg"
        },
        {
          title: "Upskilling 50 Analysts With a SQL & Python Bootcamp",
          metric: "60%",
          label: "smaller IT backlog",
          link: "/cases/financial-services-sql-bootcamp",
          image: "/images/cases/financial-services-sql-bootcamp-hero.jpg"
        }
      ]}
      ctaTitle="Ready to close faster and see clearly?"
      ctaDescription="Let's talk about what a modern FP&A function could do for your decision speed."
    />
  );
}

export default DistributionFPA;
