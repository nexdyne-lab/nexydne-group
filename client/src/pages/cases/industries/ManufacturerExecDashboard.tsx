import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, Target, BarChart3, AlertTriangle, Zap, CheckCircle } from "lucide-react";

export default function ManufacturerExecDashboard() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Manufacturer Rebuilds Executive Dashboard, Cuts Cycle to 6 Hours | Data Visualization Case Study"
      seoDescription="An industrial manufacturer's executive reporting took 6 days of manual work. A semantic layer plus board-grade narrative collapsed close-to-decision time to 6 hours and ended a decade of workarounds."
      canonical="/cases/manufacturer-exec-dashboard"
      industry="Manufacturing"
      industryLink="/industries/manufacturing"
      title="How a Manufacturer Cut Executive Close-to-Decision Time From 6 Days to 6 Hours"
      subtitle="The board pack took six days of manual assembly and still arrived as numbers without a story. A semantic layer and a real narrative made executive reporting fast — and finally decision-ready."
      heroImage="/images/capabilities/cap-robot-factory.jpg"
      metrics={[
        { value: "6d → 6h", label: "Close-to-Decision" },
        { value: "Semantic", label: "Layer Built" },
        { value: "Board-Grade", label: "Narrative" },
        { value: "Ended", label: "A Decade of Workarounds" }
      ]}
      clientContextTitle="A Board Pack That Took Six Days"
      clientContextIntro="An industrial manufacturer's executive dashboard was assembled by hand over six days each cycle, and even then it arrived as a wall of numbers with no narrative to make them decision-ready. For a decade the finance team had layered workaround on workaround to produce it."
      clientContextBody="The manual assembly was slow and error-prone, and because every analyst pulled metrics their own way, the figures in the board pack could not always be reconciled with the figures in operational reports. Executives received data late and had to interpret it themselves, with no consistent story tying the numbers to decisions. A decade of accumulated workarounds made the whole thing fragile. The manufacturer needed a semantic layer to define metrics once and consistently, and a board-grade narrative structure, so executive reporting became fast, trustworthy, and genuinely useful for decisions."
      clientProfile={{
        industry: "Industrial Manufacturer",
        companySize: "~$540M Annual Revenue",
        projectDuration: "4 Months",
        additionalInfo: "Executive Reporting",
        additionalLabel: "Leadership Cadence"
      }}
      challengeTitle="Why the Dashboard Took So Long"
      challenges={[
        { icon: Clock, title: "Six Days of Manual Assembly", description: "The board pack was built by hand each cycle, slow and error-prone." },
        { icon: Target, title: "Inconsistent Metrics", description: "Every analyst pulled figures their own way, so board and operational numbers did not reconcile." },
        { icon: BarChart3, title: "Numbers Without a Story", description: "Executives received raw data late, with no narrative connecting it to decisions." },
        { icon: AlertTriangle, title: "A Decade of Workarounds", description: "Years of layered fixes had made the reporting fragile and hard to trust." }
      ]}
      approachTitle="Define Once, Narrate for the Board"
      approachIntro="We built a semantic layer that defined every metric once and a board-grade narrative structure, collapsing close-to-decision time from six days to six hours and ending a decade of reporting workarounds."
      steps={[
        { step: "01", title: "Building the Semantic Layer", description: "We defined every executive metric once in a semantic layer, so board and operational reports finally drew on the same numbers." },
        { step: "02", title: "Automating the Assembly", description: "We automated the manual six-day assembly, producing the pack in hours with far less risk of error." },
        { step: "03", title: "Adding a Board-Grade Narrative", description: "We structured the dashboard around a narrative that tied the numbers to decisions, not just displayed them." },
        { step: "04", title: "Retiring the Workarounds", description: "We replaced the decade of accumulated fixes with a clean, trustworthy reporting foundation." }
      ]}
      resultsTitle="Reporting That Drives Decisions"
      results={[
        { icon: Zap, value: "6d → 6h", label: "Close-to-decision", detail: "Executive reporting collapsed" },
        { icon: CheckCircle, value: "One", label: "Semantic layer", detail: "Metrics defined once" },
        { icon: BarChart3, value: "Narrative", label: "Board-grade", detail: "Numbers tied to decisions" },
        { icon: Target, value: "Trusted", label: "Figures", detail: "Board and ops reconcile" }
      ]}
      quote="Our board pack took six days to build by hand and still landed as a spreadsheet nobody could act on quickly. Defining our metrics once and wrapping the numbers in a real narrative cut that to six hours and gave our executives something they could actually decide from. We retired ten years of workarounds in the process."
      quoteAuthor="VP of Finance"
      quoteRole="Industrial manufacturer"
      relatedStudies={[
        { title: "How a Health System Lifted Analytics Adoption 4x by Embedding It in the EHR", metric: "4x", label: "higher analytics adoption", link: "/cases/health-embedded-analytics", image: "/images/cases/health-embedded-analytics-hero.jpg" },
        { title: "How a National Retailer Lifted Recommendation Revenue by 31%", metric: "31%", label: "more recommendation revenue", link: "/cases/retail-recommendations", image: "/images/capabilities/cap-retail-apparel.jpg" }
      ]}
      ctaTitle="Does your board pack take days and still not tell a story?"
      ctaDescription="Let's build a semantic layer and a board-grade narrative that make reporting fast and decision-ready."
    />
  );
}
