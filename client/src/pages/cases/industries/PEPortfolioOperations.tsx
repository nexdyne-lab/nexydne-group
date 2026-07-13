import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { TrendingUp, DollarSign, Target, BarChart3, Cog, Building2, Zap } from "lucide-react";

export default function PEPortfolioOperations() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Turning Around an Industrial Manufacturer in the Hold | Private Equity Case Study"
      seoDescription="A private equity fund owned a profitable industrial manufacturer that had quietly stopped improving. A disciplined value-creation program lifted margins by seven points and added $18M in EBITDA."
      canonical="/cases/pe-industrial-transformation"
      industry="Private Equity"
      industryLink="/industries/private-equity"
      title="How a Fund Added $18M in EBITDA at an Industrial Manufacturer"
      subtitle="A private equity fund had bought a solid industrial business that had quietly stopped getting better. A focused program of operational improvement changed the trajectory of the hold — and the return."
      heroImage="/images/industries/transport-traffic.jpg"
      metrics={[
        { value: "700bps", label: "Margin Improvement" },
        { value: "$18M", label: "EBITDA Growth" },
        { value: "40%", label: "Faster Value Capture" },
        { value: "3.2x", label: "Projected Return" }
      ]}
      clientContextTitle="A Good Company That Had Stopped Improving"
      clientContextIntro="A private equity fund owned an industrial components manufacturer — a business of around $280 million in revenue, roughly 1,100 people and five plants. It was a genuinely good company: strong products, loyal customers and steady profits. The trouble was that, a year into the fund's ownership, the numbers had barely moved from where they were at purchase."
      clientContextBody="The fund had bought the business on a clear thesis — a solid core with real room to run — but the improvement it had underwritten was not showing up. The operating team knew opportunities existed, yet had no systematic way to find and capture them. Progress happened project by project, driven by whoever pushed hardest, and a good idea proven at one plant was often unknown at the other four. Leadership eventually concluded that this was not a talent problem. It was a method problem: the company simply had no repeatable way of getting better."
      clientProfile={{
        industry: "Industrial Manufacturing (PE-Owned)",
        companySize: "~$280M Portfolio-Company Revenue",
        projectDuration: "18 Months",
        additionalInfo: "5 Manufacturing Plants",
        additionalLabel: "Operational Footprint"
      }}
      challengeTitle="Why Value Creation Was Stalling"
      challenges={[
        {
          icon: TrendingUp,
          title: "Margins Going Sideways",
          description: "Two years of flat margins — the improvement the fund had underwritten at purchase simply was not materialising."
        },
        {
          icon: Cog,
          title: "Improvement Left to Chance",
          description: "There was no repeatable method; gains depended on individual initiative rather than a shared way of working."
        },
        {
          icon: Building2,
          title: "Plants That Didn't Share",
          description: "Five plants meant five ways of working — a fix proven at one was rarely picked up by the others."
        },
        {
          icon: Target,
          title: "Flying Half-Blind",
          description: "Leaders learned about problems only in the monthly close, long after the moment to act had passed."
        }
      ]}
      approachTitle="A Disciplined Program of Improvement"
      approachIntro="We worked alongside the company's leaders and the fund's operating partner to replace scattered effort with a clear, repeatable program — one that found the biggest opportunities first, spread what worked across every plant, and gave leaders a live view of progress."
      steps={[
        {
          step: "01",
          title: "Finding the Money",
          description: "We began with a hard-headed look across pricing, purchasing and plant efficiency to find where real money was being left on the table. Each opportunity was sized honestly and ranked by how much it was worth and how quickly it could be captured, so the team worked on the biggest wins first."
        },
        {
          step: "02",
          title: "One Playbook, Every Plant",
          description: "We turned the practices that already worked best into simple, plain playbooks. A method proven at one plant could then be adopted at the others in weeks rather than reinvented from scratch — turning five separate operations into one that learned from itself."
        },
        {
          step: "03",
          title: "A Live View of the Business",
          description: "We settled on a short list of measures that truly mattered, made them consistent across all five plants, and put them in front of leaders every week. Problems now surfaced in days, while there was still time to do something about them, instead of at month-end."
        },
        {
          step: "04",
          title: "Owned by the Line, Not a Project Team",
          description: "Every improvement had a named owner inside the business, with a target and a date. The point was not a burst of consultant-led activity but a lasting habit — the muscle to keep finding and capturing value after we had gone."
        }
      ]}
      resultsTitle="A Business on a Steeper Curve"
      results={[
        {
          icon: TrendingUp,
          value: "700bps",
          label: "Higher operating margin",
          detail: "Roughly seven points in eighteen months"
        },
        {
          icon: DollarSign,
          value: "$18M",
          label: "Added annual EBITDA",
          detail: "From pricing, purchasing and plant efficiency"
        },
        {
          icon: BarChart3,
          value: "40%",
          label: "Faster value capture",
          detail: "Playbooks sped adoption across the plants"
        },
        {
          icon: Zap,
          value: "3.2x",
          label: "Projected return",
          detail: "On track at exit, up from the entry case"
        }
      ]}
      quote="We bought a good company and, for a year, ran it much as the last owner had. What changed the second year was method — knowing where the value was, proving it at one plant, then spreading it to the rest. The improvements are now simply how the business runs, not a project that ends when the advisers leave."
      quoteAuthor="Operating Partner"
      quoteRole="Private equity fund"
      relatedStudies={[
        {
          title: "Cutting Healthcare Diligence Time by 40%",
          metric: "40%",
          label: "faster diligence",
          link: "/cases/pe-healthcare-diligence",
          image: "/images/capabilities/cap-conference-data.jpg"
        },
        {
          title: "Standing Up a Carved-Out Distributor in Six Months",
          metric: "6 Months",
          label: "to standalone operations",
          link: "/cases/pe-distribution-digital",
          image: "/images/industries/deal-handshake.jpg"
        }
      ]}
      ctaTitle="Ready to lift value in the hold?"
      ctaDescription="Let's talk about turning your value-creation plan into results on the ground."
    />
  );
}
