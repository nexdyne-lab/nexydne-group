import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Split, Clock, Database, UserPlus, BookOpen, Wrench, Trophy, Gauge } from "lucide-react";

export function SoftwareSalesOptimization() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Sales Process Optimization That Lifted Win Rate 45% | Software Case Study"
      seoDescription="An enterprise software company's win rates ranged from 15% to 35% with 90-day cycles and 9-month ramps. Codifying top-performer behavior lifted win rate 45% and cut ramp to 4 months."
      canonical="/capabilities/growth-marketing-sales/case-studies/software-sales-optimization"
      industry="Technology, Media & Telecom"
      industryLink="/industries/technology-media-telecom"
      title="How a Software Company Lifted Win Rate 45% With Sales Process Optimization"
      subtitle="An enterprise software company codified its top performers' approach into a repeatable playbook — lifting win rate 45%, shortening sales cycles 28%, and cutting new-hire ramp from 9 months to 4."
      heroImage="/images/industries/meeting-topview.jpg"
      metrics={[
        { value: "45%", label: "Win Rate Improvement" },
        { value: "28%", label: "Shorter Sales Cycle" },
        { value: "$8.2M", label: "Revenue Impact" },
        { value: "4 mo", label: "New-Hire Ramp" }
      ]}
      clientContextTitle="Inconsistent by Rep"
      clientContextIntro="A 180-employee software company with $52M in revenue sells enterprise software to mid-size businesses. It had grown rapidly, but sales productivity was declining as the team scaled — top performers closed at 35% while others struggled at 15%."
      clientContextBody="Sales cycles had lengthened from 60 to 90 days as deals stalled, the CRM was poorly adopted so pipeline visibility was unreliable, and new-hire ramp had stretched to 9 months. Analysis of top-performer behavior revealed a fundamentally different approach: more time on discovery and qualification, earlier multi-stakeholder engagement, effective use of ROI models and success stories, and disciplined follow-up."
      clientProfile={{
        industry: "Enterprise Software Company",
        companySize: "$52M Revenue",
        projectDuration: "Playbook + Coaching",
        additionalInfo: "Repeatable Method",
        additionalLabel: "Output"
      }}
      challengeTitle="Why Performance Varied So Widely"
      challenges={[
        {
          icon: Split,
          title: "15% to 35% win rates",
          description: "Top performers closed at more than twice the rate of the rest of the team."
        },
        {
          icon: Clock,
          title: "Cycles from 60 to 90 days",
          description: "Deals increasingly stalled in evaluation, lengthening the sales cycle."
        },
        {
          icon: Database,
          title: "Poor CRM adoption",
          description: "Weak data entry made pipeline visibility and forecasting unreliable."
        },
        {
          icon: UserPlus,
          title: "9-month ramp",
          description: "New reps had to reverse-engineer success, stretching time to productivity."
        }
      ]}
      approachTitle="Codify What the Best Reps Do"
      approachIntro="NEXDYNE worked with top performers to document their approach in a repeatable playbook, then brought it to life through training, tools, and manager coaching — and turned the CRM into a selling tool."
      steps={[
        {
          step: "01",
          title: "Build the playbook",
          description: "Clear stages with exit criteria, discovery frameworks, stakeholder mapping, and objection-handling guides captured the winning approach."
        },
        {
          step: "02",
          title: "Enable the team",
          description: "Role-play training, ROI calculators, competitive battlecards, and a persona-organized content library operationalized the method."
        },
        {
          step: "03",
          title: "Make the CRM useful",
          description: "Simplified data entry, pipeline inspection to catch stuck deals early, and self-service dashboards turned reporting into selling."
        },
        {
          step: "04",
          title: "Coach to the method",
          description: "Pipeline-review training, weekly deal strategy sessions, peer learning, and certification validated adoption."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Trophy,
          value: "45%",
          label: "Higher win rate",
          detail: "From earlier qualification and better stakeholder engagement"
        },
        {
          icon: Gauge,
          value: "90%",
          label: "Forecast accuracy",
          detail: "As CRM adoption improved with a selling-focused design"
        },
        {
          icon: BookOpen,
          value: "4 mo",
          label: "New-hire ramp",
          detail: "Down from 9, with $8.2M in first-year revenue impact"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Landing Enterprise Clients With Account-Based Marketing",
          metric: "$18M",
          label: "pipeline created",
          link: "/capabilities/growth-marketing-sales/case-studies/tech-abm",
          image: "/images/industries/tech-datacenter.jpg"
        },
        {
          title: "Pricing Optimization That Improved Margins 8 Points",
          metric: "8 pts",
          label: "margin improvement",
          link: "/capabilities/growth-marketing-sales/case-studies/distribution-pricing",
          image: "/images/capabilities/cap-chess.jpg"
        }
      ]}
      ctaTitle="Ready to make every rep a top performer?"
      ctaDescription="Let's talk about what a codified sales method could do for your win rates and ramp time."
    />
  );
}

export default SoftwareSalesOptimization;
