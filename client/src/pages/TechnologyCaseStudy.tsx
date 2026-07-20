import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, Users, GitCompare, DollarSign, FileCode2, Workflow, Radar, Rocket } from "lucide-react";

export function TechnologyCaseStudy() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Cutting Deployment Time 82% With a DevOps Transformation | Technology Case Study"
      seoDescription="A 400-customer enterprise SaaS company deployed twice a month through a 2-person bottleneck, losing 30% of engineering to rollbacks. A DevOps transformation cut deployment time 82% at 99.95% uptime."
      canonical="/case-studies/technology-devops-transformation"
      industry="Technology, Media & Telecom"
      industryLink="/industries/technology-media-telecom"
      title="How a SaaS Company Cut Deployment Time 82% With DevOps"
      subtitle="A fast-growing B2B software company transformed its DevOps practices — cutting deployment cycles from 2 weeks to 2.5 days, reaching 99.95% uptime, and saving 40% on infrastructure."
      heroImage="/images/industries/tech-datacenter.jpg"
      metrics={[
        { value: "82%", label: "Faster Deployments" },
        { value: "99.95%", label: "System Uptime" },
        { value: "40%", label: "Lower Infrastructure Cost" },
        { value: "12x", label: "Deployment Frequency" }
      ]}
      clientContextTitle="Growth Outpacing Infrastructure"
      clientContextIntro="A B2B SaaS company providing workflow-automation tools to enterprises — 145 employees and 400+ enterprise customers — had grown 3x in two years, but its infrastructure hadn't kept pace. A 45-developer team spent more time on infrastructure maintenance than feature development."
      clientContextBody="Each deployment took 3–4 days of manual work, and only 2 senior engineers were authorized to deploy — limiting releases to twice a month. Environment drift caused features that worked in development to fail in production, with emergency fixes consuming 30% of engineering time. The team learned about outages from customers (23-minute average detection), and cloud costs grew 180% year-over-year against just 60% customer growth."
      clientProfile={{
        industry: "B2B SaaS Company",
        companySize: "145 Employees",
        projectDuration: "IaC + CI/CD",
        additionalInfo: "Terraform + K8s",
        additionalLabel: "Stack"
      }}
      challengeTitle="Why Shipping Was Slow and Risky"
      challenges={[
        {
          icon: Clock,
          title: "3–4 days per deployment",
          description: "Manual configuration and coordination limited releases to twice a month."
        },
        {
          icon: Users,
          title: "A 2-person bottleneck",
          description: "Only two senior engineers were authorized to deploy, constraining every release."
        },
        {
          icon: GitCompare,
          title: "Environment drift",
          description: "Dev-to-prod drift caused failures that consumed 30% of engineering time in fixes."
        },
        {
          icon: DollarSign,
          title: "Runaway cloud costs",
          description: "Cloud spend grew 180% year-over-year against just 60% customer growth."
        }
      ]}
      approachTitle="Infrastructure as Code, End to End"
      approachIntro="NEXDYNE implemented a comprehensive DevOps transformation — infrastructure-as-code, CI/CD automation, an observability platform, and cloud cost optimization."
      steps={[
        {
          step: "01",
          title: "Codify the infrastructure",
          description: "Terraform and Kubernetes put every environment in version-controlled templates, so any engineer could provision identical environments in minutes."
        },
        {
          step: "02",
          title: "Automate the pipeline",
          description: "End-to-end CI/CD with automated testing, security scanning, and staged rollouts enabled zero-downtime releases with automatic rollback."
        },
        {
          step: "03",
          title: "See problems first",
          description: "Integrated monitoring, logging, and tracing with AI anomaly detection caught issues before customers did, with automated runbooks."
        },
        {
          step: "04",
          title: "Optimize the cloud spend",
          description: "Right-sizing, reserved instances, and auto-scaling cut costs, with governance policies preventing resource sprawl."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Rocket,
          value: "2.5 days",
          label: "Deployment cycle",
          detail: "Down from 14, with deployment frequency up 12x"
        },
        {
          icon: Radar,
          value: "< 2 min",
          label: "Incident detection",
          detail: "Down from 23 minutes, at 99.95% uptime"
        },
        {
          icon: DollarSign,
          value: "40%",
          label: "Lower cloud spend",
          detail: "With engineering time on infrastructure down from 35% to 8%"
        }
      ]}
      quote="NEXDYNE didn't just fix our infrastructure — they transformed how our engineering team operates. We went from dreading deployments to shipping features multiple times a day with confidence. The ROI was evident within the first quarter."
      quoteAuthor="James Chen"
      quoteRole="CTO, WorkflowPro Technologies"
      relatedStudies={[
        {
          title: "Modernizing Core Healthcare Technology at Zero Downtime",
          metric: "99.99%",
          label: "availability",
          link: "/capabilities/technology/case-studies/healthcare-system-modernization",
          image: "/case-healthcare-analytics.0ceb030c.jpg"
        },
        {
          title: "Scaling a Fintech Platform to 50M Transactions a Day",
          metric: "50M",
          label: "daily transactions",
          link: "/cases/fintech-microservices",
          image: "/images/cases/fintech-microservices-hero.jpg"
        }
      ]}
      ctaTitle="Ready to ship with confidence?"
      ctaDescription="Let's talk about what a DevOps transformation could do for your velocity and uptime."
    />
  );
}

export default TechnologyCaseStudy;
