import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { TrendingDown, MapPinned, PackageX, Compass, Filter, ClipboardCheck, Handshake, Trophy } from "lucide-react";

export function ManufacturingAcquisition() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="A Strategic Acquisition That Doubled Market Presence | Manufacturing Case Study"
      seoDescription="A mid-size aerospace manufacturer was losing share to larger rivals but had no M&A experience. A screened, well-integrated acquisition doubled market share at 95% customer retention."
      canonical="/capabilities/strategy-corporate-finance/case-studies/manufacturing-acquisition"
      industry="Manufacturing"
      industryLink="/industries/manufacturing"
      title="How a Manufacturer Doubled Market Presence Through Acquisition"
      subtitle="A precision manufacturer identified, acquired, and integrated a competitor to reach market leadership — doubling market share at 95% customer retention and expanding EBITDA margin to 18%."
      heroImage="/images/industries/mfg-robot-arm-team.jpg"
      metrics={[
        { value: "2x", label: "Market Share" },
        { value: "100", label: "Days to Integrate" },
        { value: "95%", label: "Customer Retention" },
        { value: "18%", label: "EBITDA Margin" }
      ]}
      clientContextTitle="Organic Growth Hit Its Ceiling"
      clientContextIntro="A 180-employee precision manufacturer serving aerospace and defense had grown organically for 25 years — but was losing share to larger competitors with broader capabilities. The founder wanted to accelerate through acquisition but had no M&A experience."
      clientContextBody="The company needed expanded CNC machining capabilities, West Coast presence to cut shipping costs for key customers, and capacity to handle larger orders it was currently declining. The strategic rationale was clear; the execution pathway was not — from finding the right target to structuring and integrating the deal."
      clientProfile={{
        industry: "Precision Manufacturer",
        companySize: "180 Employees",
        projectDuration: "100-Day Integration",
        additionalInfo: "Aerospace & Defense",
        additionalLabel: "Sector"
      }}
      challengeTitle="Why Going It Alone Fell Short"
      challenges={[
        {
          icon: TrendingDown,
          title: "Losing share to scale",
          description: "Larger competitors with broader capabilities were taking market share."
        },
        {
          icon: MapPinned,
          title: "No West Coast presence",
          description: "Shipping costs for key customers were high without a western footprint."
        },
        {
          icon: PackageX,
          title: "Declining large orders",
          description: "Capacity constraints forced the company to turn away bigger programs."
        },
        {
          icon: Compass,
          title: "No M&A experience",
          description: "The strategic case was clear, but the founder had never executed an acquisition."
        }
      ]}
      approachTitle="Screen, Diligence, Integrate"
      approachIntro="NEXDYNE ran systematic target screening, comprehensive due diligence, and a detailed 100-day integration plan — turning a clear strategy into a well-executed deal."
      steps={[
        {
          step: "01",
          title: "Screen the market",
          description: "200+ companies were evaluated on capability fit, geography, financial health, and cultural alignment, narrowing to 12 serious candidates."
        },
        {
          step: "02",
          title: "Diligence the target",
          description: "For the chosen target — a competitor roughly half its size — diligence covered quality of earnings, customer concentration, equipment, retention risk, and compliance."
        },
        {
          step: "03",
          title: "Structure for safety",
          description: "Cash plus seller financing, retention-based earnouts, key employment agreements, and reps-and-warranties insurance limited post-closing risk."
        },
        {
          step: "04",
          title: "Integrate in 100 days",
          description: "A plan built before close covered customer retention, cultural onboarding, systems harmonization, and synergy tracking."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Trophy,
          value: "2x",
          label: "Market share",
          detail: "From a combined capability neither company had alone"
        },
        {
          icon: Handshake,
          value: "95%",
          label: "Customer retention",
          detail: "Proactive communication made the deal nearly invisible to accounts"
        },
        {
          icon: ClipboardCheck,
          value: "2",
          label: "New Tier 1 customers",
          detail: "Within 12 months, on expanded capabilities and capacity"
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
          title: "Achieving ISO 9001 and AS9100 to Keep At-Risk Contracts",
          metric: "100%",
          label: "contracts retained",
          link: "/capabilities/operations/case-studies/aerospace-quality",
          image: "/images/industries/aero-rocket.jpg"
        }
      ]}
      ctaTitle="Ready to grow through acquisition?"
      ctaDescription="Let's talk about what a disciplined M&A process could do for your market position."
    />
  );
}

export default ManufacturingAcquisition;
