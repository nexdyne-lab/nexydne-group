import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Users, DollarSign, Code2, Clock, Boxes, GraduationCap, Gauge } from "lucide-react";

export default function FinancialServicesSQLBootcamp() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Upskilling 50 Analysts with a SQL & Python Bootcamp | Financial Services Case Study"
      seoDescription="An $8B investment firm's analysts waited weeks on IT for every data request. An 8-week bootcamp made them self-sufficient, cutting the IT backlog 60% and saving $400K a year."
      canonical="/cases/financial-services-sql-bootcamp"
      industry="Financial Services"
      industryLink="/industries/financial-services"
      title="How an Investment Firm Upskilled 50 Analysts with a SQL & Python Bootcamp"
      subtitle="An 8-week intensive turned business analysts into self-sufficient data practitioners — cutting the IT backlog 60% and accelerating insight delivery from weeks to hours."
      heroImage="/images/cases/financial-services-sql-bootcamp-hero.jpg"
      metrics={[
        { value: "60%", label: "Smaller IT Backlog" },
        { value: "85%", label: "Analysts Writing SQL" },
        { value: "$400K", label: "Annual Savings" }
      ]}
      clientContextTitle="Domain Experts, Blocked by IT"
      clientContextIntro="A growing investment firm with $8B AUM faced a critical bottleneck: business analysts relied entirely on IT for data extraction and analysis. Simple requests — portfolio performance by sector, client segmentation, risk exposure — required tickets that took 2–3 weeks to fulfill."
      clientContextBody="IT carried a backlog of 200+ data requests, prioritizing infrastructure and compliance over ad-hoc analytics, while analysts hand-copied data from PDFs and Excel, introducing errors and missing time-sensitive opportunities. Analysts had the domain expertise but not the technical skills to reach data directly — and hiring more engineers wasn't the answer. The firm needed to upskill the people it already had."
      clientProfile={{
        industry: "Growing Investment Firm",
        companySize: "$8B AUM",
        projectDuration: "8-Week Bootcamp",
        additionalInfo: "Cohorts of 10",
        additionalLabel: "Format"
      }}
      challengeTitle="Why Insight Took Weeks"
      challenges={[
        {
          icon: Clock,
          title: "2–3 week data requests",
          description: "Every analytical question went through an IT ticket that took weeks to fulfill."
        },
        {
          icon: Boxes,
          title: "A 200+ request backlog",
          description: "IT prioritized infrastructure and compliance, so ad-hoc analytics languished in a growing queue."
        },
        {
          icon: Code2,
          title: "Manual, error-prone workarounds",
          description: "Analysts hand-copied data from PDFs and Excel, introducing errors and losing time-sensitive opportunities."
        },
        {
          icon: Users,
          title: "A skills gap, not a talent gap",
          description: "Analysts had deep domain expertise but lacked the technical skills to access data themselves."
        }
      ]}
      approachTitle="Training Built Around Their Own Data"
      approachIntro="NEXDYNE designed an 8-week SQL and Python bootcamp tailored to the firm's actual data environment — real schema, real portfolio datasets, and the analytical workflows analysts used every day."
      steps={[
        {
          step: "01",
          title: "SQL on real business questions",
          description: "Weeks 1–2 taught SQL fundamentals using the firm's own client and transaction tables to answer genuine business questions."
        },
        {
          step: "02",
          title: "Advanced analysis techniques",
          description: "Weeks 3–4 moved to window functions, CTEs, and subqueries for risk analysis and attribution modeling."
        },
        {
          step: "03",
          title: "Python for data",
          description: "Weeks 5–6 introduced Pandas, NumPy, and data manipulation for hands-on analysis."
        },
        {
          step: "04",
          title: "Visualization and automation",
          description: "Weeks 7–8 covered Matplotlib and Jupyter, culminating in automated weekly portfolio-performance reports — reinforced by live instruction, exercises on real data, and office hours."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Gauge,
          value: "60%",
          label: "Smaller IT data backlog",
          detail: "Within three months of training"
        },
        {
          icon: GraduationCap,
          value: "120+",
          label: "Automated reports built",
          detail: "By analysts in the six months after"
        },
        {
          icon: DollarSign,
          value: "$400K",
          label: "Annual savings",
          detail: "From reduced manual data processing"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Cutting Data-Quality Issues 78% for Regulatory Reporting",
          metric: "78%",
          label: "fewer data-quality issues",
          link: "/cases/financial-data-quality",
          image: "/images/industries/fin-monitors.jpg"
        },
        {
          title: "Migrating a Retailer to Snowflake",
          metric: "85%",
          label: "faster queries",
          link: "/cases/ecommerce-data-warehouse",
          image: "/images/cases/ecommerce-data-warehouse-hero.jpg"
        }
      ]}
      ctaTitle="Ready to make your analysts self-sufficient?"
      ctaDescription="Let's talk about what upskilling your team could do for your speed to insight."
    />
  );
}
