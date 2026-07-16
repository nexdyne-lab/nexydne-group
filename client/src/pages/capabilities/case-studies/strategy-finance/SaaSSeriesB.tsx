import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { LineChart, Users, ClipboardList, Scale, Calculator, BookOpen, Handshake, TrendingUp } from "lucide-react";

export function SaaSSeriesB() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="A Series B Raise of $35M at an 8x Revenue Multiple | SaaS Case Study"
      seoDescription="A $15M ARR B2B SaaS company had product-market fit but no institutional fundraising experience. A structured process closed $35M at an 8x multiple with three competing term sheets."
      canonical="/capabilities/strategy-corporate-finance/case-studies/saas-series-b"
      industry="Technology, Media & Telecom"
      industryLink="/industries/technology-media-telecom"
      title="How a SaaS Company Raised $35M at an 8x Revenue Multiple"
      subtitle="A B2B SaaS company prepared for and executed a Series B growth raise — closing $35M at an 8x revenue multiple in 12 weeks, with three competing term sheets and founder-friendly governance."
      heroImage="/images/capabilities/cap-celebrate.jpg"
      metrics={[
        { value: "$35M", label: "Capital Raised" },
        { value: "8x", label: "Revenue Multiple" },
        { value: "12 wks", label: "Process Duration" },
        { value: "3", label: "Competing Term Sheets" }
      ]}
      clientContextTitle="Ready to Scale, New to Raising"
      clientContextIntro="A 120-employee B2B SaaS company providing workflow automation to mid-size professional-services firms had $15M ARR and strong unit economics. It had achieved product-market fit and was ready to accelerate — but the founders had never raised institutional capital."
      clientContextBody="The readiness assessment revealed several areas requiring attention before approaching investors: financial reporting that didn't clearly show SaaS metrics, incomplete customer cohort data, a sales pipeline not systematically tracked, and legal housekeeping including option grants and IP assignments."
      clientProfile={{
        industry: "B2B SaaS Company",
        companySize: "$15M ARR",
        projectDuration: "12-Week Raise",
        additionalInfo: "Series B",
        additionalLabel: "Round"
      }}
      challengeTitle="Why the Company Wasn't Raise-Ready"
      challenges={[
        {
          icon: LineChart,
          title: "Metrics not investor-ready",
          description: "Financial reporting didn't clearly show ARR, churn, or LTV/CAC."
        },
        {
          icon: Users,
          title: "Incomplete cohort data",
          description: "Customer cohort analysis wasn't complete enough for investor scrutiny."
        },
        {
          icon: ClipboardList,
          title: "Untracked pipeline",
          description: "The sales pipeline wasn't systematically tracked to support a forecast."
        },
        {
          icon: Scale,
          title: "Legal housekeeping",
          description: "Option grants and IP assignments needed cleanup before diligence."
        }
      ]}
      approachTitle="Prepare, Position, and Run a Process"
      approachIntro="NEXDYNE built the financial model and narrative, then ran a structured, competitive fundraising process designed to create tension while minimizing management distraction."
      steps={[
        {
          step: "01",
          title: "Build the model",
          description: "Historical SaaS metrics, a bottoms-up forecast tied to sales capacity, expense projections, and scenario analysis told the growth story."
        },
        {
          step: "02",
          title: "Craft the narrative",
          description: "A large market, a differentiated product with strong retention, a proven GTM motion, and an experienced team anchored the pitch."
        },
        {
          step: "03",
          title: "Prepare the materials",
          description: "Pitch deck, executive summary, and a complete data room with proactive diligence materials reduced friction."
        },
        {
          step: "04",
          title: "Run a competitive process",
          description: "50+ investors were prioritized and worked, founders prepped, diligence coordinated, and term-sheet provisions negotiated."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: TrendingUp,
          value: "$35M",
          label: "Raised at 8x revenue",
          detail: "Closed within 12 weeks of launching the process"
        },
        {
          icon: Handshake,
          value: "3",
          label: "Competing term sheets",
          detail: "Giving founders real leverage on governance terms"
        },
        {
          icon: BookOpen,
          value: "Faster",
          label: "Diligence",
          detail: "Clean metrics and proactive materials cut investor friction"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Maximizing Founder Value Through Exit Preparation",
          metric: "40%",
          label: "valuation premium",
          link: "/capabilities/strategy-corporate-finance/case-studies/services-exit",
          image: "/images/industries/meeting-topview.jpg"
        },
        {
          title: "Turning a Consulting Methodology Into a $3.2M ARR Product",
          metric: "$3.2M",
          label: "ARR",
          link: "/capabilities/business-building/case-studies/consulting-saas",
          image: "/images/capabilities/cap-team-screens.jpg"
        }
      ]}
      ctaTitle="Preparing to raise?"
      ctaDescription="Let's talk about what a well-run process could do for your valuation and terms."
    />
  );
}

export default SaaSSeriesB;
