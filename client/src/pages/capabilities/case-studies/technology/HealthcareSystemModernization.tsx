import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { ServerCrash, ShieldAlert, UserX, DollarSign, Layers, CloudCog, Rocket, ShieldCheck } from "lucide-react";

export function HealthcareSystemModernization() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Modernizing Core Healthcare Technology at Zero Downtime | Healthcare Case Study"
      seoDescription="A 12-hospital system ran core clinical systems on failing legacy infrastructure. A phased 24-month modernization reached 99.99% availability and cut infrastructure costs 40% with zero downtime."
      canonical="/capabilities/technology/case-studies/healthcare-system-modernization"
      industry="Healthcare"
      industryLink="/industries/healthcare"
      title="How a Healthcare System Modernized Core Technology With Zero Downtime"
      subtitle="A 12-hospital healthcare system modernized failing legacy infrastructure over 24 months — reaching 99.99% availability and cutting infrastructure costs 40% without a single unplanned outage affecting care."
      heroImage="/case-healthcare-analytics.0ceb030c.jpg"
      metrics={[
        { value: "40%", label: "Lower Infrastructure Cost" },
        { value: "99.99%", label: "System Availability" },
        { value: "60%", label: "Faster Deployments" },
        { value: "Zero", label: "Unplanned Downtime" }
      ]}
      clientContextTitle="A Technology Crisis"
      clientContextIntro="A regional healthcare system operating 12 hospitals and 85 outpatient facilities faced a technology crisis. Core clinical and administrative systems ran on aging infrastructure that was increasingly difficult and expensive to maintain, and outages were becoming more frequent — threatening patient care and compliance."
      clientContextBody="The organization needed to modernize its foundation while maintaining 24/7 operations across all facilities. Any significant downtime could impact care, violate HIPAA, and damage reputation in a competitive market. Previous modernization attempts had stalled on the complexity of healthcare IT, clinical-staff resistance, and fears of disrupting care. Leadership needed an approach that delivered results without unacceptable risk."
      clientProfile={{
        industry: "Regional Healthcare System",
        companySize: "12 Hospitals",
        projectDuration: "24-Month Program",
        additionalInfo: "Hybrid Cloud",
        additionalLabel: "Foundation"
      }}
      challengeTitle="Why Modernization Kept Stalling"
      challenges={[
        {
          icon: ServerCrash,
          title: "Failing legacy infrastructure",
          description: "Aging systems grew costly to maintain as outages became more frequent."
        },
        {
          icon: ShieldAlert,
          title: "Care and compliance at risk",
          description: "Any significant downtime threatened patient care and HIPAA compliance."
        },
        {
          icon: UserX,
          title: "Clinical-staff resistance",
          description: "Previous attempts stalled on the complexity of healthcare IT and staff concerns."
        },
        {
          icon: DollarSign,
          title: "Expensive legacy contracts",
          description: "Costly maintenance contracts drained budget without improving reliability."
        }
      ]}
      approachTitle="Phased, Safety-First Modernization"
      approachIntro="NEXDYNE designed a phased 24-month program prioritizing stability and safety — stabilizing first, building a modern hybrid-cloud foundation in parallel, then migrating in carefully planned waves."
      steps={[
        {
          step: "01",
          title: "Stabilize and govern",
          description: "Months 1–4 assessed critical vulnerabilities, fixed the highest-risk issues, and stood up clinical advisory and change governance."
        },
        {
          step: "02",
          title: "Build a hybrid-cloud foundation",
          description: "Months 5–12 built private cloud for clinical data, public-cloud integration, modern networking, and healthcare-grade security in parallel."
        },
        {
          step: "03",
          title: "Migrate in waves",
          description: "Months 13–20 migrated applications in planned waves during low-usage windows with clinical planning and intensive monitoring."
        },
        {
          step: "04",
          title: "Optimize and enable",
          description: "Months 21–24 added advanced monitoring and automation, trained IT staff, and established ongoing optimization."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: ShieldCheck,
          value: "99.99%",
          label: "System availability",
          detail: "Zero unplanned downtime affecting care across the migration"
        },
        {
          icon: DollarSign,
          value: "40%",
          label: "Lower infrastructure cost",
          detail: "From consolidation, cloud optimization, and retired contracts"
        },
        {
          icon: Rocket,
          value: "60%",
          label: "Faster deployments",
          detail: "Weeks to hours, with a HIPAA audit passed at zero findings"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Reaching 99.99% Uptime After Migrating to AWS",
          metric: "99.99%",
          label: "uptime",
          link: "/cases/healthcare-cloud-migration",
          image: "/case-medical-collaboration.9602cc8c.jpg"
        },
        {
          title: "Transforming DevOps to Cut Deployment Time 82%",
          metric: "82%",
          label: "faster deployments",
          link: "/case-studies/technology-devops-transformation",
          image: "/images/industries/tech-datacenter.jpg"
        }
      ]}
      ctaTitle="Ready to modernize without disruption?"
      ctaDescription="Let's talk about what a phased modernization could do for your reliability and cost."
    />
  );
}

export default HealthcareSystemModernization;
