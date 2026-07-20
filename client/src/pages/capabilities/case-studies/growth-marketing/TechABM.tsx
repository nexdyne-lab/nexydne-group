import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Users, Clock, Building2, DoorClosed, Crosshair, Search, Megaphone, Trophy } from "lucide-react";

export function TechABM() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Landing Enterprise Clients With Account-Based Marketing | Technology Case Study"
      seoDescription="An automation vendor's inbound engine couldn't reach enterprise buyers. A rigorous ABM program engaged 65% of target accounts, closed 12 enterprise wins, and grew deal size 4x."
      canonical="/capabilities/growth-marketing-sales/case-studies/tech-abm"
      industry="Technology, Media & Telecom"
      industryLink="/industries/technology-media-telecom"
      title="How a Tech Company Landed Enterprise Clients With ABM"
      subtitle="A workflow-automation vendor moved upmarket with rigorous account-based marketing — engaging 65% of priority accounts, closing 12 enterprise wins, and growing average deal size 4x."
      heroImage="/images/industries/tech-datacenter.jpg"
      metrics={[
        { value: "12", label: "Enterprise Wins" },
        { value: "4x", label: "Deal Size Increase" },
        { value: "65%", label: "Target Account Engagement" }
      ]}
      clientContextTitle="Inbound Couldn't Reach the Enterprise"
      clientContextIntro="A 140-employee technology company sells workflow-automation software to mid-size businesses and wanted to expand into enterprise accounts. Its inbound-heavy go-to-market couldn't reach enterprise decision-makers."
      clientContextBody="Enterprise buying was fundamentally different: longer timelines, committee decisions, multiple stakeholders to align, and an expectation of proactive outreach rather than passive content consumption. The sales team lacked the relationships and credibility to access C-suite executives, and inbound demos alone wouldn't move upmarket buyers."
      clientProfile={{
        industry: "Automation Software Company",
        companySize: "140 Employees",
        projectDuration: "Tiered ABM",
        additionalInfo: "Enterprise Move",
        additionalLabel: "Goal"
      }}
      challengeTitle="Why Moving Upmarket Was Hard"
      challenges={[
        {
          icon: Users,
          title: "Couldn't reach decision-makers",
          description: "Inbound marketing didn't get in front of enterprise C-suite buyers."
        },
        {
          icon: Clock,
          title: "Long, complex cycles",
          description: "Enterprise deals meant longer timelines and committee decisions."
        },
        {
          icon: Building2,
          title: "Many stakeholders to align",
          description: "Multiple stakeholders needed engaging and aligning across each account."
        },
        {
          icon: DoorClosed,
          title: "No executive credibility",
          description: "The sales team lacked the relationships to access senior executives."
        }
      ]}
      approachTitle="Rigorous, Tiered Account-Based Marketing"
      approachIntro="NEXDYNE built a rigorous ABM program — precise account selection, deep account intelligence, personalized content, and multi-channel orchestration tuned to enterprise buying."
      steps={[
        {
          step: "01",
          title: "Select the right accounts",
          description: "Firmographic and technographic analysis scored accounts on fit, intent, and relationship strength into tiered lists."
        },
        {
          step: "02",
          title: "Build account intelligence",
          description: "Org mapping, stakeholder identification, priority research, and intent monitoring shaped per-account plans."
        },
        {
          step: "03",
          title: "Personalize the content",
          description: "Industry use cases, ROI models, executive-level content, and custom landing pages addressed enterprise concerns."
        },
        {
          step: "04",
          title: "Orchestrate across channels",
          description: "Targeted advertising, personalized email, sales outreach with air cover, and executive events engaged stakeholders together."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Megaphone,
          value: "65%",
          label: "Priority accounts engaged",
          detail: "Building enterprise pipeline where none existed before"
        },
        {
          icon: Trophy,
          value: "12",
          label: "Enterprise wins",
          detail: "Creating reference accounts that accelerated future sales"
        },
        {
          icon: Crosshair,
          value: "4x",
          label: "Larger deal size",
          detail: "Fundamentally improving unit economics"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Improving Sales Win Rate With Process Optimization",
          metric: "45%",
          label: "higher win rate",
          link: "/capabilities/growth-marketing-sales/case-studies/software-sales-optimization",
          image: "/images/industries/meeting-topview.jpg"
        },
        {
          title: "Digital Marketing Transformation That Doubled Leads",
          metric: "2x",
          label: "lead volume",
          link: "/capabilities/growth-marketing-sales/case-studies/b2b-digital-marketing",
          image: "/images/capabilities/cap-mobile-woman.jpg"
        }
      ]}
      ctaTitle="Ready to move upmarket?"
      ctaDescription="Let's talk about what account-based marketing could do for your enterprise pipeline."
    />
  );
}

export default TechABM;
