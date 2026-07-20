
import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function AIPoweredFinance() {
  return (
    <CapabilityHubTemplate
      hubName="AI-Powered Finance"
      slug="ai-powered-finance"
      heroSubtitle="Harness artificial intelligence to transform your finance function. Automated reporting, predictive cash flow modeling, and AI-assisted budgeting that free your team to focus on the work that actually moves the business."
      heroImage="/images/capabilities/cap-chess.jpg"
      experienceStats={[
        { number: "70%", label: "Reduction in manual reporting time for clients implementing AI-powered automation" },
        { number: "3x", label: "Improvement in forecast accuracy using machine learning models vs. traditional methods" },
        { number: "45+", label: "AI finance implementations delivered across diverse industries and company sizes" },
        { number: "Production-grade", label: "Solutions hardened for daily finance use, not lab experiments" },
      ]}
      ambitions={[
        {
          title: "Get reporting time back",
          description:
            "Automate the recurring report grind so the controller's team spends Monday on insight and Friday on partnership — not on copy-pasting cells from one workbook to another.",
        },
        {
          title: "Forecast cash like a treasury team",
          description:
            "Move from gut-check forecasts to ML-driven cash predictions that warn you weeks ahead — and let you size credit lines, deploy capital, and sleep better.",
        },
        {
          title: "Build budgets that don't take a quarter",
          description:
            "Use AI baselines and driver-based modeling to compress the budget cycle and free leadership time for the strategic conversations the budget is supposed to enable.",
        },
        {
          title: "Find variance signal in the noise",
          description:
            "AI variance analysis that surfaces the few movements that matter, attributes root cause, and recommends the action — instead of dumping a 40-line PDF on operators.",
        },
        {
          title: "Process documents at machine speed",
          description:
            "Turn invoices, contracts, and statements from a bottleneck into structured data that flows straight into your ERP — accurately, and without the offshore team.",
        },
        {
          title: "Catch problems before they become incidents",
          description:
            "Continuous anomaly detection on transactions and patterns to flag fraud risk, data quality issues, and unusual activity in real time — not in next quarter's audit.",
        },
      ]}
      howWeCanHelp={[
        {
          title: "Automated Financial Reporting",
          description:
            "Eliminate manual report generation with AI-powered automation. Real-time dashboards and scheduled reports that update themselves, freeing your team for higher-value analysis.",
          href: "/capabilities/strategy-corporate-finance/ai-powered-finance/automated-financial-reporting",
        },
        {
          title: "Predictive Cash Flow Modeling",
          description:
            "Move from reactive to proactive cash management. Machine learning models that forecast cash positions with greater accuracy, identifying risks and opportunities weeks in advance.",
          href: "/capabilities/strategy-corporate-finance/ai-powered-finance/predictive-cash-flow-modeling",
        },
        {
          title: "AI-Assisted Budgeting",
          description:
            "Build smarter budgets faster. AI analyzes historical patterns, market trends, and operational drivers to generate baseline forecasts that your team can refine and validate.",
          href: "/capabilities/strategy-corporate-finance/ai-powered-finance/ai-assisted-budgeting",
        },
        {
          title: "Intelligent Variance Analysis",
          description:
            "Stop chasing data and start finding insights. AI automatically identifies significant variances, surfaces root causes, and suggests corrective actions.",
          href: "/capabilities/strategy-corporate-finance/ai-powered-finance/intelligent-variance-analysis",
        },
        {
          title: "Document Processing & Extraction",
          description:
            "Transform unstructured financial documents into structured data. Invoices, contracts, and statements processed automatically with high accuracy.",
          href: "/capabilities/strategy-corporate-finance/ai-powered-finance/document-processing-extraction",
        },
        {
          title: "Financial Anomaly Detection",
          description:
            "Catch issues before they become problems. AI monitors transactions and patterns to flag unusual activity, potential fraud, or data quality issues in real-time.",
          href: "/capabilities/strategy-corporate-finance/ai-powered-finance/financial-anomaly-detection",
        },
      ]}
      ambitionsCTAText="Talk to us about your AI-Powered Finance ambition →"
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Identify high-impact use cases",
          body: "We assess your current processes to find the automation opportunities with the highest ROI — focusing on repetitive, time-consuming tasks that don't require human judgment.",
        },
        {
          step: "02",
          title: "Build and validate",
          body: "We implement solutions using proven tools and frameworks, testing rigorously with your data to ensure accuracy and reliability before going live.",
        },
        {
          step: "03",
          title: "Deploy and scale",
          body: "We train your team, establish governance protocols, and create a roadmap for expanding AI capabilities as your organization matures.",
        },
      ]}
      featuredCases={[
        { slug: "financial-fraud-detection", title: "Catching card fraud before the money moves", industry: "Financial Services", metric: "73%", image: "/images/industries/fin-monitors.jpg" },
        { slug: "fpa-forecasting-transformation", title: "Turning finance into a forecasting engine", industry: "Retail", metric: "Days, not weeks", image: "/images/industries/advisor-charts.jpg" },
        { slug: "healthcare-revenue-cycle", title: "Recovering revenue the system had already earned", industry: "Healthcare", metric: "45% fewer rejected claims", image: "/case-healthcare-team.5797392b.jpg" },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/strategy-corporate-finance/financial-planning-analysis", name: "Financial Planning & Analysis" },
        { href: "/capabilities/strategy-corporate-finance/cfo-services", name: "Fractional CFO Services" },
        { href: "/capabilities/ai-technology-consulting", name: "AI Technology Consulting" },
      ]}
      ctaLeadName="Talk to our AI-Powered Finance lead"
    />
  );
}
