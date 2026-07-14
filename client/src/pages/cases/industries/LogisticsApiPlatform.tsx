import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, Target, Users, TrendingDown, Zap, CheckCircle, TrendingUp } from "lucide-react";

export default function LogisticsApiPlatform() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="API Platform Accelerates Partner Integration | Technology Case Study"
      seoDescription="A 150-employee logistics company's partner integrations were slow and bespoke. An API platform cut partner onboarding time 85% and enabled 45 integrations, building a real partner ecosystem."
      canonical="/capabilities/technology/case-studies/logistics-api-platform"
      industry="Logistics"
      industryLink="/industries/transportation-logistics"
      title="How a Logistics Company Cut Partner Onboarding Time by 85% With an API Platform"
      subtitle="Each new partner integration was a slow, custom project, capping how fast the ecosystem could grow. An API platform made onboarding fast and repeatable."
      heroImage="/images/capabilities/cap-warehouse-robot.jpg"
      metrics={[
        { value: "85%", label: "Faster Onboarding" },
        { value: "45", label: "API Integrations" },
        { value: "Ecosystem", label: "Enabled" },
        { value: "Repeatable", label: "Integration" }
      ]}
      clientContextTitle="Every Partner a Custom Project"
      clientContextIntro="A 150-employee logistics company wanted to grow through a partner ecosystem, but every new partner integration was a slow, bespoke engineering project. Onboarding a partner took months of custom work, which capped how quickly the ecosystem — and the revenue it could drive — could grow."
      clientContextBody="The bottleneck was architectural. Without a standard integration platform, each partner connection was built from scratch, so cost and time scaled linearly with the number of partners and the engineering team became the constraint on growth. Partners, for their part, faced a slow, painful onboarding that discouraged some from joining at all. The company needed an API platform that turned partner integration from a custom project into a fast, repeatable process — enabling many integrations and a real ecosystem."
      clientProfile={{
        industry: "Logistics Company",
        companySize: "~150 Employees",
        projectDuration: "7 Months",
        additionalInfo: "Partner API Platform",
        additionalLabel: "Integration Layer"
      }}
      challengeTitle="Why the Ecosystem Couldn't Grow"
      challenges={[
        { icon: Clock, title: "Months per Integration", description: "Each partner connection was a slow, bespoke engineering project." },
        { icon: Target, title: "No Standard Platform", description: "Without reusable integration, cost and time scaled with every new partner." },
        { icon: Users, title: "Engineering as the Constraint", description: "The team's capacity capped how fast the ecosystem could grow." },
        { icon: TrendingDown, title: "Painful Partner Onboarding", description: "A slow, difficult onboarding discouraged some partners from joining." }
      ]}
      approachTitle="Build an API Platform for Partners"
      approachIntro="We built an API platform that turned partner integration from a custom project into a fast, repeatable process — cutting onboarding time 85 percent and enabling 45 integrations."
      steps={[
        { step: "01", title: "Designing the API Platform", description: "We designed a standard, well-documented API platform partners could integrate against without bespoke work." },
        { step: "02", title: "Making Onboarding Repeatable", description: "We turned integration into a repeatable process, so each new partner followed a fast, standard path." },
        { step: "03", title: "Scaling the Integrations", description: "We enabled 45 integrations on the platform, building the ecosystem the company had wanted." },
        { step: "04", title: "Removing the Engineering Bottleneck", description: "We freed the engineering team from bespoke integration work, so ecosystem growth no longer depended on their capacity." }
      ]}
      resultsTitle="An Ecosystem That Scales"
      results={[
        { icon: Zap, value: "85%", label: "Faster onboarding", detail: "Partner integration time" },
        { icon: CheckCircle, value: "45", label: "Integrations", detail: "On the API platform" },
        { icon: TrendingUp, value: "Ecosystem", label: "Enabled", detail: "Growth no longer capped" },
        { icon: Target, value: "Repeatable", label: "Process", detail: "Not a custom project" }
      ]}
      quote="We wanted a partner ecosystem, but every integration was a months-long custom build, so our own engineering team was the limit on how fast we could grow. An API platform turned onboarding into a fast, standard process — eighty-five percent quicker — and we stood up forty-five integrations. The ecosystem could finally grow as fast as we could sign partners."
      quoteAuthor="VP of Technology"
      quoteRole="Logistics company"
      relatedStudies={[
        { title: "How a Healthcare Services Company Achieved Zero Incidents and Full HIPAA Compliance", metric: "Zero", label: "security incidents", link: "/capabilities/technology/case-studies/healthcare-security", image: "/case-healthcare-team.5797392b.jpg" },
        { title: "How a Specialty Insurer Sped Processing 70% and Saved $2.1M a Year", metric: "$2.1M", label: "annual savings", link: "/capabilities/technology/case-studies/insurance-modernization", image: "/images/industries/fin-handshake-city.jpg" }
      ]}
      ctaTitle="Is bespoke integration capping your partner growth?"
      ctaDescription="Let's build an API platform that makes onboarding fast and repeatable."
    />
  );
}
