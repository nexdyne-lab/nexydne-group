import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { FileText, Clock, TrendingDown, XCircle, Smartphone, PlugZap, Workflow, Smile } from "lucide-react";

export function InsuranceClaimsPortal() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Launching a Digital Claims Portal in 8 Weeks | Insurance Case Study"
      seoDescription="A 75-year-old P&C insurer processed paper claims in 14 days and lost 12% of policyholders a year. A Mendix low-code portal cut processing to 2 hours and lifted satisfaction 42 points."
      canonical="/cases/insurance-claims-portal"
      industry="Insurance"
      industryLink="/industries/insurance"
      title="How an Insurer Launched a Digital Claims Portal in 8 Weeks"
      subtitle="A regional insurer replaced paper-based claims with a Mendix low-code portal — cutting processing time from 14 days to 2 hours and improving customer satisfaction by 42 points."
      heroImage="/images/cases/insurance-claims-portal-hero.jpg"
      metrics={[
        { value: "86%", label: "Digital Claims Adoption" },
        { value: "2 hrs", label: "Processing Time (from 14 days)" },
        { value: "42 pts", label: "NPS Improvement" }
      ]}
      clientContextTitle="Paper in a Digital Market"
      clientContextIntro="A 75-year-old regional P&C insurer serving 8 states faced mounting pressure from digital-native competitors offering instant claims. Its 1990s legacy system required policyholders to mail or fax paper forms, with claims averaging 14 days to process."
      clientContextBody="Customer satisfaction had fallen 28 points over three years, and the company was losing 12% of policyholders annually to mobile-first rivals. IT had tried to modernize twice, but both projects stalled on complexity, cost overruns, and integration challenges. The business needed a solution that launched quickly, integrated with existing systems, and delivered a modern experience — targeting an aggressive 8-week timeline."
      clientProfile={{
        industry: "Regional P&C Insurer",
        companySize: "8 States",
        projectDuration: "8-Week Build",
        additionalInfo: "Mendix Low-Code",
        additionalLabel: "Platform"
      }}
      challengeTitle="Why Claims Were Losing Customers"
      challenges={[
        {
          icon: FileText,
          title: "Paper forms by mail and fax",
          description: "A 1990s system forced policyholders through slow, manual submission."
        },
        {
          icon: Clock,
          title: "14-day processing",
          description: "Manual review kept claims slow, well behind instant-processing competitors."
        },
        {
          icon: TrendingDown,
          title: "12% annual churn",
          description: "Satisfaction fell 28 points as customers left for mobile-first insurers."
        },
        {
          icon: XCircle,
          title: "Two failed modernizations",
          description: "Prior attempts stalled on complexity, cost, and legacy integration."
        }
      ]}
      approachTitle="A Low-Code Portal in Weeks"
      approachIntro="NEXDYNE built a comprehensive digital claims portal on Mendix — mapping the end-to-end journey with adjusters and policyholders, then delivering in 6 weeks with 2 weeks for testing."
      steps={[
        {
          step: "01",
          title: "Map the journey fast",
          description: "Rapid discovery with adjusters, service reps, and policyholders identified the real friction points."
        },
        {
          step: "02",
          title: "Build the experience",
          description: "Photo damage upload, real-time status tracking, secure messaging, and automated document generation went into the portal."
        },
        {
          step: "03",
          title: "Integrate with the core",
          description: "REST APIs connected to the legacy policy-administration system for real-time verification and validation."
        },
        {
          step: "04",
          title: "Automate the routine",
          description: "A workflow engine automated eligibility, deductible, and payment approvals, cutting manual touchpoints 70%."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Workflow,
          value: "2 hrs",
          label: "Processing time",
          detail: "Down from 14 days for straightforward claims, 48 hrs for complex"
        },
        {
          icon: Smartphone,
          value: "86%",
          label: "Digital adoption",
          detail: "Within 3 months, beating the 60% target"
        },
        {
          icon: Smile,
          value: "94%",
          label: "Retention",
          detail: "Up from 88%, with claim-processing costs down sharply"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Cutting the Claims Cycle 73% With Intelligent Automation",
          metric: "73%",
          label: "faster processing",
          link: "/case-studies/insurance-claims-automation",
          image: "/case-insurance-office.f039a4a1.jpg"
        },
        {
          title: "Launching a Real-Time Tracking App for 500 Drivers",
          metric: "96%",
          label: "on-time delivery",
          link: "/cases/logistics-tracking-app",
          image: "/images/industries/retail-warehouse.jpg"
        }
      ]}
      ctaTitle="Ready to digitize claims fast?"
      ctaDescription="Let's talk about what a low-code portal could do for your processing times and retention."
    />
  );
}

export default InsuranceClaimsPortal;
