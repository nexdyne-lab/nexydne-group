import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Users, Target, AlertTriangle, BarChart3, CheckCircle, Zap } from "lucide-react";

export default function SustainableFoodSystemsFeature() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Building Resilient, Inclusive, Sustainable Local Food Systems | Community Case Study"
      seoDescription="NexDyne supported an innovative public-private partnership building resilient, inclusive, and sustainable local food systems, aligning stakeholders and strengthening the operating model behind the initiative."
      canonical="/case-studies/sustainable-food-systems"
      industry="Sustainability"
      industryLink="/industries"
      title="How an Innovative Public-Private Partnership Built More Resilient Local Food Systems"
      subtitle="A public-private partnership set out to make local food systems more resilient, inclusive, and sustainable. Aligning the many stakeholders and strengthening the operating model helped turn the ambition into progress."
      heroImage="/images/capabilities/cap-food.jpg"
      metrics={[
        { value: "Public-Private", label: "Partnership" },
        { value: "Resilient", label: "Food Systems" },
        { value: "Inclusive", label: "By Design" },
        { value: "Sustainable", label: "Local Supply" }
      ]}
      clientContextTitle="An Ambition Spanning Many Stakeholders"
      clientContextIntro="An innovative public-private partnership set out to build local food systems that were more resilient, more inclusive, and more sustainable. The ambition was compelling, but delivering it meant aligning a wide set of stakeholders — public agencies, private participants, and communities — each with different priorities and ways of working."
      clientContextBody="Multi-stakeholder initiatives like this succeed or fail on coordination. A shared goal is not enough when the participants operate on different incentives, timelines, and processes; without a clear operating model and genuine alignment, momentum dissipates into competing agendas. The partnership needed help turning a shared ambition into coordinated action — aligning the stakeholders around common goals and building the operating model that would let a complex, cross-sector effort actually make progress toward more resilient and inclusive local food systems."
      clientProfile={{
        industry: "Public-Private Partnership",
        companySize: "Multi-Stakeholder Initiative",
        projectDuration: "Community Engagement",
        additionalInfo: "Food Systems Resilience",
        additionalLabel: "Cross-Sector Program"
      }}
      challengeTitle="Why Coordination Was the Challenge"
      challenges={[
        { icon: Users, title: "Many Stakeholders", description: "Public agencies, private participants, and communities each had different priorities." },
        { icon: Target, title: "Different Ways of Working", description: "Participants operated on different incentives, timelines, and processes." },
        { icon: AlertTriangle, title: "Momentum at Risk", description: "Without alignment, a shared goal could dissipate into competing agendas." },
        { icon: BarChart3, title: "No Shared Operating Model", description: "A complex cross-sector effort needed a model to coordinate action." }
      ]}
      approachTitle="Align Stakeholders, Build the Model"
      approachIntro="We helped align the partnership's many stakeholders around common goals and build the operating model that let a complex cross-sector effort make real progress toward resilient, inclusive, and sustainable local food systems."
      steps={[
        { step: "01", title: "Understanding the Stakeholders", description: "We worked to understand the priorities and constraints of the public, private, and community participants." },
        { step: "02", title: "Aligning Around Common Goals", description: "We helped align the stakeholders on shared goals so effort pulled in one direction." },
        { step: "03", title: "Building the Operating Model", description: "We helped build the operating model that let a complex cross-sector partnership coordinate action." },
        { step: "04", title: "Turning Ambition Into Progress", description: "We helped the partnership move from a shared ambition to coordinated progress on food-system resilience." }
      ]}
      resultsTitle="Coordinated Progress on a Shared Ambition"
      results={[
        { icon: Users, value: "Aligned", label: "Stakeholders", detail: "Public, private, community" },
        { icon: CheckCircle, value: "Operating", label: "Model built", detail: "Coordinating cross-sector action" },
        { icon: Target, value: "Resilient", label: "Food systems", detail: "More inclusive and sustainable" },
        { icon: Zap, value: "Progress", label: "From ambition", detail: "Turned into action" }
      ]}
      quote="A shared goal was never going to be enough on its own — public agencies, private participants, and communities all work differently. The real work was aligning everyone around common goals and building a way to coordinate a genuinely complex, cross-sector effort. That is what turned a compelling ambition for resilient local food systems into actual progress."
      quoteAuthor="Partnership Coordinator"
      quoteRole="Public-private food-systems initiative"
      relatedStudies={[
        { title: "How Predictive Maintenance Cut Unplanned Downtime by 67%", metric: "67%", label: "less unplanned downtime", link: "/case-studies/manufacturing-predictive-maintenance", image: "/images/capabilities/cap-battery-factory.jpg" },
        { title: "How a Hospital Gained 45% Clinical Efficiency by Automating Its Workflows", metric: "45%", label: "clinical efficiency gain", link: "/cases/hospital-workflow-automation", image: "/case-healthcare-team.5797392b.jpg" }
      ]}
      ctaTitle="Is a multi-stakeholder initiative struggling to coordinate?"
      ctaDescription="Let's align the stakeholders and build the operating model that turns ambition into progress."
    />
  );
}
