import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { MapPin, Gauge, Smartphone, Swords, Video, ShieldCheck, CalendarCheck, Smile } from "lucide-react";

export function HealthcareTelehealth() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Launching a Telehealth Venture to Triple Patient Reach | Business Building Case Study"
      seoDescription="A 5-clinic healthcare network faced geography, capacity limits, and national telehealth competitors. A new telehealth platform reached 15,000 visits a month and tripled effective patient reach."
      canonical="/capabilities/business-building/case-studies/healthcare-telehealth"
      industry="Healthcare"
      industryLink="/industries/healthcare"
      title="How a Healthcare Network Launched a Telehealth Venture"
      subtitle="A regional healthcare network built a telehealth platform that complemented in-person care — reaching 15,000 virtual visits a month, tripling patient reach, and cutting no-shows 40%."
      heroImage="/case-doctor-consultation.799c1562.jpg"
      metrics={[
        { value: "15K", label: "Virtual Visits/Month" },
        { value: "3x", label: "Patient Reach" },
        { value: "40%", label: "Fewer No-Shows" },
        { value: "92%", label: "Patient Satisfaction" }
      ]}
      clientContextTitle="Care Limited by Geography"
      clientContextIntro="A regional healthcare network with 180 employees operating 5 clinics served a mix of urban and rural communities. Rural patients faced long travel times for routine care, and clinic capacity was maxed during peak hours yet underused at others."
      clientContextBody="Younger patients increasingly expected digital healthcare, and national telehealth competitors threatened the network's patient relationships. The organization sought to expand reach without proportional facility investment — building telehealth capabilities quickly, complementing rather than replacing in-person care, and maintaining clinical quality in a virtual setting."
      clientProfile={{
        industry: "Regional Healthcare Network",
        companySize: "5 Clinics",
        projectDuration: "HIPAA-Compliant",
        additionalInfo: "EHR-Integrated",
        additionalLabel: "Platform"
      }}
      challengeTitle="Why Reach Was Constrained"
      challenges={[
        {
          icon: MapPin,
          title: "Geography limited access",
          description: "Rural patients faced long travel times that kept them from routine care."
        },
        {
          icon: Gauge,
          title: "Peaky clinic capacity",
          description: "Clinics were maxed at peak hours and underutilized the rest of the day."
        },
        {
          icon: Smartphone,
          title: "Digital-first expectations",
          description: "Younger patients increasingly expected virtual, digital healthcare options."
        },
        {
          icon: Swords,
          title: "National competitors circling",
          description: "Telehealth entrants threatened the network's patient relationships."
        }
      ]}
      approachTitle="Virtual Care That Complements In-Person"
      approachIntro="NEXDYNE designed a telehealth model that complemented in-person care — identifying visit types suited to virtual delivery and building workflows that integrated the two seamlessly with triage."
      steps={[
        {
          step: "01",
          title: "Design for clinical quality",
          description: "Care protocols maintained quality virtually, with triage directing patients to the right modality."
        },
        {
          step: "02",
          title: "Build the platform",
          description: "Video consultation with clinical tools, EHR integration, capacity-optimizing scheduling, and patient mobile apps."
        },
        {
          step: "03",
          title: "Meet compliance and credentialing",
          description: "HIPAA compliance, quality monitoring, outcome tracking, and telehealth credentialing were built in across the platform."
        },
        {
          step: "04",
          title: "Drive adoption",
          description: "Provider training on virtual technique plus targeted patient outreach, awareness campaigns, and early-adopter incentives."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Video,
          value: "15K",
          label: "Virtual visits a month",
          detail: "Tripling effective reach without new facilities"
        },
        {
          icon: CalendarCheck,
          value: "40%",
          label: "Fewer no-shows",
          detail: "Improving both utilization and health outcomes"
        },
        {
          icon: Smile,
          value: "92%",
          label: "Patient satisfaction",
          detail: "Serving rural patients and capturing digital-first urbanites"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Launching a Patient Portal That Cut Admin Calls 65%",
          metric: "65%",
          label: "fewer admin calls",
          link: "/cases/healthcare-patient-portal",
          image: "/images/cases/healthcare-patient-portal-hero.jpg"
        },
        {
          title: "Reducing Patient Wait Times 35% With Predictive Analytics",
          metric: "35%",
          label: "shorter waits",
          link: "/cases/healthcare-provider-ai",
          image: "/images/cases/healthcare-provider-ai-hero.jpg"
        }
      ]}
      ctaTitle="Ready to expand access without expanding facilities?"
      ctaDescription="Let's talk about what a telehealth venture could do for your reach and utilization."
    />
  );
}

export default HealthcareTelehealth;
