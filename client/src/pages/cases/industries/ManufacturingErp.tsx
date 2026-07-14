import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, Clock, BarChart3, AlertTriangle, TrendingUp, CheckCircle, Zap } from "lucide-react";

export default function ManufacturingErp() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="ERP Modernization Streamlines Manufacturing Operations | Technology Case Study"
      seoDescription="A 220-employee precision manufacturer's legacy systems slowed operations and month-end close. An ERP modernization delivered a 40% process efficiency gain and cut month-end close by eight weeks a year."
      canonical="/capabilities/technology/case-studies/manufacturing-erp"
      industry="Manufacturing"
      industryLink="/industries/manufacturing"
      title="How a Precision Manufacturer Gained 40% Process Efficiency With a Modern ERP"
      subtitle="Legacy systems forced manual workarounds across operations and made month-end close a slog. A modern ERP streamlined the processes and gave the business time back."
      heroImage="/images/industries/mfg-robot-arm.jpg"
      metrics={[
        { value: "40%", label: "Process Efficiency Gain" },
        { value: "8 wks", label: "Close Time Saved / Yr" },
        { value: "Unified", label: "Operations" },
        { value: "Modern", label: "ERP" }
      ]}
      clientContextTitle="Operations Built on Workarounds"
      clientContextIntro="A 220-employee precision manufacturer ran its operations on legacy systems that no longer fit how the business worked. Staff bridged the gaps with manual workarounds and spreadsheets, and month-end close dragged on far longer than it should have."
      clientContextBody="The legacy ERP had aged into an obstacle. Because it did not reflect current processes, every operational task carried manual effort, data was re-keyed between disconnected modules, and reporting required stitching sources together by hand. Month-end close, in particular, consumed enormous effort each cycle. The inefficiency was invisible on any single day but added up to a significant drag on the whole operation. The manufacturer needed a modern ERP that fit its actual processes, unified its operational data, and eliminated the manual workarounds that were quietly costing it efficiency."
      clientProfile={{
        industry: "Precision Manufacturer",
        companySize: "~220 Employees",
        projectDuration: "10 Months",
        additionalInfo: "ERP Modernization",
        additionalLabel: "Operations Platform"
      }}
      challengeTitle="Why Operations Were Inefficient"
      challenges={[
        { icon: Target, title: "Legacy Systems Misfit", description: "The old ERP no longer reflected how the business actually worked." },
        { icon: Clock, title: "Manual Workarounds", description: "Staff bridged system gaps with spreadsheets and re-keying, adding effort to every task." },
        { icon: BarChart3, title: "A Grinding Month-End Close", description: "Close dragged on far longer than it should have, cycle after cycle." },
        { icon: AlertTriangle, title: "Disconnected Modules", description: "Data was re-keyed between modules and reporting had to be stitched by hand." }
      ]}
      approachTitle="Modernize the ERP Around Real Processes"
      approachIntro="We modernized the ERP to fit the manufacturer's actual processes and unify its operational data — delivering a 40 percent process efficiency gain and cutting eight weeks of month-end close effort a year."
      steps={[
        { step: "01", title: "Mapping the Real Processes", description: "We mapped how operations actually ran so the new ERP would fit the business rather than force workarounds." },
        { step: "02", title: "Implementing the Modern ERP", description: "We implemented an ERP aligned to those processes, unifying the disconnected modules into one system." },
        { step: "03", title: "Eliminating Manual Workarounds", description: "We removed the spreadsheets and re-keying that had consumed effort across operations." },
        { step: "04", title: "Streamlining Month-End Close", description: "We automated the close process, saving eight weeks of effort a year and speeding reporting." }
      ]}
      resultsTitle="A Leaner, Faster Operation"
      results={[
        { icon: TrendingUp, value: "40%", label: "Efficiency gain", detail: "Across operational processes" },
        { icon: Clock, value: "8 wks", label: "Close saved", detail: "Per year" },
        { icon: CheckCircle, value: "Unified", label: "Data", detail: "Modules connected" },
        { icon: Zap, value: "Automated", label: "Workarounds gone", detail: "No more spreadsheets" }
      ]}
      quote="Our old ERP had drifted so far from how we actually work that everything ran on spreadsheets and re-keying, and month-end close was a marathon. A modern ERP built around our real processes gave us a forty percent efficiency gain and handed us back eight weeks a year on close alone. The drag we had learned to live with just disappeared."
      quoteAuthor="VP of Operations"
      quoteRole="Precision manufacturer"
      relatedStudies={[
        { title: "How a Logistics Company Cut Partner Onboarding Time by 85% With an API Platform", metric: "85%", label: "faster partner onboarding", link: "/capabilities/technology/case-studies/logistics-api-platform", image: "/images/capabilities/cap-warehouse-robot.jpg" },
        { title: "How a Healthcare Services Company Achieved Zero Incidents and Full HIPAA Compliance", metric: "Zero", label: "security incidents", link: "/capabilities/technology/case-studies/healthcare-security", image: "/case-healthcare-team.5797392b.jpg" }
      ]}
      ctaTitle="Is a legacy ERP forcing manual workarounds?"
      ctaDescription="Let's modernize around your real processes and take the drag out of operations."
    />
  );
}
