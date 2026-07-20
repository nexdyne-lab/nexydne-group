import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { TrendingDown, Clock, BarChart3, Users, CheckCircle, TrendingUp } from "lucide-react";

export default function PublicSectorSustainedAdoption() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Process Redesign Sustains 88% of Cycle-Time Gains a Year On | Public Sector Case Study"
      seoDescription="A federal agency had historically lost 40-60% of process gains within a year as staff reverted. A redesign anchored on a change-champion network and adoption dashboard sustained 88% of the cycle-time gain at twelve months."
      canonical="/cases/public-sector-sustained-adoption"
      industry="Public Sector"
      industryLink="/industries/public-sector"
      title="How a Federal Agency Made Its Process Gains Actually Stick"
      subtitle="The agency was good at redesigning processes and bad at keeping the improvements. A year later, staff had usually drifted back to the old workarounds. This time the gains held."
      heroImage="/images/cases/public-sector-sustained-adoption-hero.jpg"
      metrics={[
        { value: "88%", label: "Of Gains Sustained" },
        { value: "12 Mo", label: "Past Go-Live" },
        { value: "40-60%", label: "Typically Lost Before" },
        { value: "Cited", label: "Champions & Dashboard" }
      ]}
      clientContextTitle="Improvements That Never Lasted"
      clientContextIntro="A federal agency had run process-redesign programs before, and they followed a discouraging pattern. The redesign would deliver real cycle-time improvements at go-live, and then, over the following year, 40 to 60 percent of the gain would quietly evaporate as staff reverted to the workarounds they knew."
      clientContextBody="The agency did not have a design problem; it had a durability problem. Each program ended at go-live, the consultants left, and without ongoing reinforcement the new process decayed. There was no mechanism to notice the reversion until the numbers had already slipped, and no network of people inside the agency invested in keeping the new way alive. Leadership was clear that this engagement would be judged not on the improvement at launch but on how much of it remained twelve months later."
      clientProfile={{
        industry: "Federal Agency",
        companySize: "Large Government Operation",
        projectDuration: "10 Months",
        additionalInfo: "Multi-Office Process",
        additionalLabel: "Operating Scope"
      }}
      challengeTitle="Why Gains Kept Slipping Away"
      challenges={[
        { icon: TrendingDown, title: "Reversion to Workarounds", description: "Within a year, staff drifted back to old habits and 40-60 percent of the cycle-time gain disappeared." },
        { icon: Clock, title: "Programs That Ended at Go-Live", description: "Each effort stopped at launch, leaving no reinforcement to keep the new process alive." },
        { icon: BarChart3, title: "Slippage Noticed Too Late", description: "There was no live measure of adherence, so reversion was only visible once the numbers had already fallen." },
        { icon: Users, title: "No Internal Ownership", description: "No network inside the agency was invested in sustaining the new way of working." }
      ]}
      approachTitle="Design for the Twelfth Month, Not Go-Live"
      approachIntro="We designed the program around durability: a change-champion network embedded in the operating teams and an adoption dashboard that made adherence visible — the two mechanisms leadership later credited for the gains holding."
      steps={[
        { step: "01", title: "Redesigning the Process for Cycle Time", description: "We delivered the core process redesign that produced the cycle-time improvement, the same starting point prior programs had reached." },
        { step: "02", title: "Embedding a Change-Champion Network", description: "We built a network of champions inside the operating teams, giving the agency its own people accountable for keeping the new process alive after launch." },
        { step: "03", title: "Standing Up an Adoption Dashboard", description: "We instrumented adherence so any drift back toward workarounds showed up immediately, while it could still be corrected." },
        { step: "04", title: "Reinforcing Through the First Year", description: "We used the champions and the dashboard together to reinforce the new process through the twelve-month window where prior gains had always decayed." }
      ]}
      resultsTitle="Gains That Were Still There a Year Later"
      results={[
        { icon: CheckCircle, value: "88%", label: "Of gains sustained", detail: "At the twelve-month mark" },
        { icon: TrendingUp, value: "2-3x", label: "Better retention", detail: "Versus the 40-60% typically lost" },
        { icon: Users, value: "Network", label: "Champions embedded", detail: "Internal ownership after go-live" },
        { icon: BarChart3, value: "Live", label: "Adoption dashboard", detail: "Reversion caught early" }
      ]}
      quote="We had never struggled to improve a process — we struggled to keep it improved. Building a champion network inside our own teams and a dashboard that showed us the moment people started slipping back changed that. A year on, almost all of the gain was still there, which had simply never happened before."
      quoteAuthor="Deputy Director of Operations"
      quoteRole="Federal agency"
      relatedStudies={[
        { title: "How an Aerospace Manufacturer Unclogged Its Improvement Pipeline", metric: "8→71", label: "idea closures per quarter", link: "/cases/aerospace-ci-pipeline-rebuild", image: "/images/cases/aerospace-ci-pipeline-rebuild-hero.jpg" },
        { title: "How a Retail Bank Took Continuous Improvement Out of the Center and Into the Branches", metric: "380", label: "practitioners trained", link: "/cases/retail-banking-ci-capability-scaling", image: "/images/industries/fin-trader.jpg" }
      ]}
      ctaTitle="Do your process gains fade within the year?"
      ctaDescription="Let's design for durability, so the improvement is still there twelve months after go-live."
    />
  );
}
