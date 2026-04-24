import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export function FinancialServicesSQLBootcamp() {
  return (
    <CaseStudyTemplate
      client="Mid-Market Investment Firm"
      industry="Financial Services · Data Training"
      title="Financial Services Firm Upskills 50 Analysts with SQL & Python Bootcamp"
      subtitle="8-week intensive training transformed business analysts into self-sufficient data practitioners, reducing IT backlog 60% and accelerating insight delivery from weeks to hours."
      heroImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80"
      challenge={`A mid-market investment firm with $8B AUM faced a critical bottleneck: business analysts relied entirely on IT for data extraction and analysis. Simple requests—portfolio performance by sector, client segmentation, risk exposure calculations—required submitting tickets that took 2-3 weeks to fulfill.

The IT team maintained a backlog of 200+ data requests, prioritizing infrastructure and compliance work over ad-hoc analytics. Analysts spent hours manually copying data from PDFs and Excel files, introducing errors and missing time-sensitive opportunities.

Leadership recognized the problem: analysts had domain expertise but lacked technical skills to access data directly. Hiring more data engineers wasn't the answer—the firm needed to upskill existing analysts to become self-sufficient.`}
      solution={`NEXDYNE designed an 8-week SQL and Python bootcamp tailored to the firm's data environment and business problems. Rather than generic training, we built curriculum around their actual data warehouse schema, real portfolio datasets, and common analytical workflows.

Weeks 1-2 covered SQL Fundamentals using the firm's client and transaction tables, answering real business questions. Weeks 3-4 advanced to window functions, CTEs, and subqueries for risk analysis and attribution modeling. Weeks 5-6 introduced Python for Data Analysis with Pandas, NumPy, and data manipulation. Weeks 7-8 covered visualization and automation with Matplotlib and Jupyter notebooks—culminating in automated weekly portfolio performance reports.

Training delivered 2 hours/week live instruction, 4 hours/week hands-on exercises using real firm data, and 1 hour/week office hours. Participants worked in cohorts of 10, fostering peer learning and collaboration.`}
      impact={`Six months post-training, analysts had built 120+ automated reports and dashboards that previously required manual Excel work. The IT team shifted focus from ad-hoc data requests to strategic infrastructure projects. The IT data request backlog fell 60% within 3 months.

Advisors now receive daily portfolio updates instead of monthly reports. The compliance team automated 15 regulatory reports that previously took 40 hours/month to compile manually. Annual savings from reduced manual data processing reached $400K.`}
      metrics={[
        { value: "60%", label: "Reduction in IT data request backlog" },
        { value: "85%", label: "Analysts writing SQL independently" },
        { value: "$400K", label: "Annual savings from automation" }
      ]}
      tags={["Data Training", "Analytics", "Financial Services", "Upskilling"]}
      relatedCapability={{
        title: "Data Transformation",
        link: "/capabilities/data-transformation"
      }}
    />
  );
}

export default FinancialServicesSQLBootcamp;
