import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, Users, Shield, TrendingDown, CheckCircle, TrendingUp } from "lucide-react";

export default function HealthCitizenDataScientist() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Health System Builds Citizen Data Scientist Bench | Data Training Case Study"
      seoDescription="A health system's central data team was overloaded. A 12-week immersive trained 80 clinicians and operations leads to build governed models, freeing the central team for higher-leverage work."
      canonical="/cases/health-citizen-data-scientist"
      industry="Healthcare"
      industryLink="/industries/healthcare"
      title="How a Health System Built an Internal Bench of 80 Citizen Data Scientists"
      subtitle="The central data team couldn't get to everything, and clinicians with the best questions couldn't build models themselves. A 12-week immersive changed who could do the work."
      heroImage="/case-medical-collaboration.9602cc8c.jpg"
      metrics={[
        { value: "80", label: "Practitioners Trained" },
        { value: "12 Wks", label: "Immersive Program" },
        { value: "Governed", label: "Models by Design" },
        { value: "Freed", label: "Central Team" }
      ]}
      clientContextTitle="The Best Questions, No Way to Answer Them"
      clientContextIntro="A health system had a central data-science team that was good and hopelessly oversubscribed. Meanwhile, the clinicians and operations leads who understood the problems best — where patients backed up, where staffing missed demand — had no way to build the models that could answer their own questions."
      clientContextBody="Every idea from the front line joined the central team's queue, and most never rose to the top. The result was a narrow throughput of data-science work, gated entirely by one team's capacity. But letting clinicians build models freely carried its own risk: ungoverned models in a clinical setting are dangerous. The health system needed to build a bench of capable citizen data scientists among its clinicians and operations leads — trained not just to build models, but to build governed ones — so the front line could act on its own insight safely, freeing the central team for the hardest problems."
      clientProfile={{
        industry: "Regional Health System",
        companySize: "~$680M Annual Revenue",
        projectDuration: "4 Months",
        additionalInfo: "80-Person Immersive",
        additionalLabel: "Capability Build"
      }}
      challengeTitle="Why Front-Line Insight Stayed Stuck"
      challenges={[
        { icon: Clock, title: "An Oversubscribed Central Team", description: "Every data-science idea queued behind one team's finite capacity, and most never rose to the top." },
        { icon: Users, title: "Insight Without Capability", description: "Clinicians who understood the problems best could not build the models to solve them." },
        { icon: Shield, title: "Ungoverned Models Are Dangerous", description: "Letting the front line build freely risked unsafe models in a clinical setting." },
        { icon: TrendingDown, title: "Narrow Throughput", description: "Data-science work was gated entirely by a single team's capacity." }
      ]}
      approachTitle="Train a Governed Citizen Bench"
      approachIntro="We ran a 12-week immersive that trained 80 clinicians and operations leads to build governed models themselves — freeing the central data team to tackle higher-leverage work."
      steps={[
        { step: "01", title: "Selecting the Cohort", description: "We identified 80 clinicians and operations leads with the domain insight and appetite to build models for their own areas." },
        { step: "02", title: "Running the 12-Week Immersive", description: "We delivered an immersive program that taught them to build real models, not just read dashboards." },
        { step: "03", title: "Embedding Governance", description: "We trained the cohort to build governed models within clear guardrails, so front-line model-building was safe in a clinical context." },
        { step: "04", title: "Freeing the Central Team", description: "As the citizen bench handled its own questions, we redirected the central data team to the hardest, highest-leverage problems." }
      ]}
      resultsTitle="Insight the Front Line Can Act On"
      results={[
        { icon: Users, value: "80", label: "Trained", detail: "Clinicians and ops leads" },
        { icon: CheckCircle, value: "12 Wks", label: "Immersive", detail: "To real model-building" },
        { icon: Shield, value: "Governed", label: "By design", detail: "Safe in a clinical setting" },
        { icon: TrendingUp, value: "Freed", label: "Central team", detail: "On the hardest problems" }
      ]}
      quote="The people who knew exactly what to ask — our clinicians and operations leads — could never get their questions answered, because everything sat in one team's queue. Training eighty of them to build governed models themselves, safely, meant the front line could act on its own insight, and our data scientists could finally focus on the problems only they can solve."
      quoteAuthor="Chief Analytics Officer"
      quoteRole="Regional health system"
      relatedStudies={[
        { title: "How a Manufacturer Cut Executive Close-to-Decision Time From 6 Days to 6 Hours", metric: "6 days → 6 hrs", label: "close-to-decision time", link: "/cases/manufacturer-exec-dashboard", image: "/images/capabilities/cap-robot-factory.jpg" },
        { title: "How a Health System Lifted Analytics Adoption 4x by Embedding It in the EHR", metric: "4x", label: "higher analytics adoption", link: "/cases/health-embedded-analytics", image: "/case-healthcare-team.5797392b.jpg" }
      ]}
      ctaTitle="Is your best insight stuck behind one data team?"
      ctaDescription="Let's build a governed citizen-data-scientist bench so the front line can act safely."
    />
  );
}
