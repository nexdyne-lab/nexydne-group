import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Code, Zap, TrendingUp, Users, Shield, Clock, Target, Cog } from "lucide-react";

export default function TechEngineeringTransformation() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Engineering Transformation | Technology Case Study"
      seoDescription="How a tech company achieved 3x faster release velocity through platform engineering, DevOps transformation, and developer experience optimization."
      canonical="/cases/tech-engineering-transformation"
      industry="Technology, Media & Telecom"
      industryLink="/industries/technology-media-telecom"
      title="Tech Company Achieves 3x Faster Release Velocity"
      subtitle="How platform engineering, DevOps transformation, and developer experience optimization accelerated innovation and reduced time-to-market."
      heroImage="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&q=80"
      metrics={[
        { value: "3x", label: "Faster Releases" },
        { value: "75%", label: "Less Deploy Time" },
        { value: "90%", label: "Test Automation" },
        { value: "4.5/5", label: "Developer Satisfaction" }
      ]}
      clientContextTitle="A Tech Company Slowed by Technical Debt"
      clientContextIntro="A fast-growing SaaS company had scaled from startup to $500M ARR in five years. But success had created problems: a monolithic codebase, manual deployment processes, and engineering teams spending more time on maintenance than innovation. Release cycles had stretched from weekly to monthly."
      clientContextBody="Developer productivity was declining. New engineers took 3 months to become productive. Deployments were risky all-hands events. The platform team was a bottleneck, and product teams waited weeks for infrastructure changes. The company was losing its competitive edge—unable to ship features as fast as smaller, more agile competitors."
      clientProfile={{
        industry: "Enterprise SaaS",
        companySize: "$500M ARR",
        projectDuration: "12 Months",
        additionalInfo: "400 Engineers",
        additionalLabel: "Engineering Team"
      }}
      challengeTitle="Scaling Pains"
      challenges={[
        {
          icon: Clock,
          title: "Slow Releases",
          description: "Monthly release cycles—competitors shipping weekly while features sat waiting for deployment."
        },
        {
          icon: Code,
          title: "Monolith Burden",
          description: "Single codebase with 2M lines of code—changes in one area broke unrelated features."
        },
        {
          icon: Users,
          title: "Onboarding Friction",
          description: "3 months for new engineers to become productive—complex setup and tribal knowledge."
        },
        {
          icon: Shield,
          title: "Deployment Risk",
          description: "Deployments were risky events requiring all-hands coordination and frequent rollbacks."
        }
      ]}
      approachTitle="Engineering Excellence at Scale"
      approachIntro="NexDyne led a comprehensive engineering transformation: platform engineering to enable self-service, DevOps practices to accelerate delivery, and developer experience improvements to boost productivity."
      steps={[
        {
          step: "01",
          title: "Platform Engineering",
          description: "Built an internal developer platform that provided self-service infrastructure. Product teams could provision environments, deploy services, and access observability without platform team involvement. Reduced infrastructure requests by 80%."
        },
        {
          step: "02",
          title: "Microservices Migration",
          description: "Decomposed the monolith into domain-aligned microservices. Established clear service boundaries, API contracts, and ownership. Teams could now deploy independently without coordinating with the entire organization."
        },
        {
          step: "03",
          title: "CI/CD Transformation",
          description: "Implemented trunk-based development with automated testing and continuous deployment. Every commit triggered automated tests; passing commits deployed to production automatically. Deployments became non-events."
        },
        {
          step: "04",
          title: "Developer Experience",
          description: "Created standardized development environments, comprehensive documentation, and automated onboarding. New engineers deployed code on day one. Developer satisfaction surveys guided continuous improvement."
        }
      ]}
      resultsTitle="Engineering Velocity Restored"
      results={[
        {
          icon: Zap,
          value: "3x",
          label: "Faster release velocity",
          detail: "From monthly to multiple daily deploys"
        },
        {
          icon: Clock,
          value: "75%",
          label: "Reduction in deploy time",
          detail: "From 4 hours to under 1 hour"
        },
        {
          icon: Shield,
          value: "90%",
          label: "Test automation coverage",
          detail: "Up from 40%—confidence in every deploy"
        },
        {
          icon: Users,
          value: "2 weeks",
          label: "New engineer productivity",
          detail: "Down from 3 months—faster onboarding"
        }
      ]}
      quote="We transformed from a company that dreaded deployments to one that deploys dozens of times per day without thinking about it. Our engineers spend time building features, not fighting infrastructure. We've regained the agility we had as a startup—at 10x the scale."
      quoteAuthor="Sarah Chen"
      quoteRole="VP of Engineering"
      relatedStudies={[
        {
          title: "Streaming Platform Launch for Media Company",
          metric: "8M",
          label: "subscribers in year one",
          link: "/cases/media-streaming-launch",
          image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=600&q=80"
        },
        {
          title: "Customer Experience Transformation for Telecom",
          metric: "40%",
          label: "reduction in churn",
          link: "/cases/telecom-customer-experience",
          image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&q=80"
        }
      ]}
      ctaTitle="Ready to Accelerate Your Engineering?"
      ctaDescription="Let's discuss how platform engineering can unlock your team's potential."
    />
  );
}
