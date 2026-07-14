import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, AlertTriangle, TrendingDown, Users, TrendingUp, CheckCircle, Zap } from "lucide-react";

export default function CareerConnectEducationFeature() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Helping Career Connect Enroll and Inspire 15,000 Students | Community Case Study"
      seoDescription="NexDyne helped Career Connect, an education nonprofit, enroll and inspire 15,000 students and generate new programs across the country by strengthening its technology and operating model."
      canonical="/case-studies/career-connect-education"
      industry="Social Impact"
      industryLink="/industries/education"
      title="How We Helped Career Connect Reach 15,000 Students"
      subtitle="A mission-driven education nonprofit wanted to reach far more students and launch new programs nationally. Strengthening its technology and operating model helped it scale its impact."
      heroImage="/images/capabilities/cap-coder.jpg"
      metrics={[
        { value: "15,000", label: "Students Reached" },
        { value: "National", label: "Program Expansion" },
        { value: "Scaled", label: "Impact" },
        { value: "Mission", label: "Amplified" }
      ]}
      clientContextTitle="A Mission Held Back by Its Tools"
      clientContextIntro="Career Connect, an education-focused nonprofit, had a powerful mission — enrolling and inspiring students toward opportunity — but its ability to scale that mission was limited by the technology and operating model behind it. Manual processes and fragile systems capped how many students it could reach and how quickly it could launch new programs."
      clientContextBody="Nonprofits are often constrained not by commitment or ideas but by operational capacity, and Career Connect was no exception. Enrolling students, running programs, and expanding to new locations all leaned on manual effort and systems that did not scale, so growth meant more work rather than more reach. To pursue its ambition of inspiring far more students and generating new programs across the country, Career Connect needed a stronger technology and operating foundation — one that let it scale its impact rather than its overhead."
      clientProfile={{
        industry: "Education Nonprofit",
        companySize: "Mission-Driven Organization",
        projectDuration: "Community Engagement",
        additionalInfo: "Technology & Operating Model",
        additionalLabel: "Capacity Building"
      }}
      challengeTitle="Why Impact Was Capped"
      challenges={[
        { icon: Target, title: "Manual Processes", description: "Enrollment and program operations leaned on manual effort that did not scale." },
        { icon: AlertTriangle, title: "Fragile Systems", description: "The underlying systems could not support growth in reach or new programs." },
        { icon: TrendingDown, title: "Growth Meant More Work", description: "Reaching more students meant more overhead rather than more impact." },
        { icon: Users, title: "Ambition Outpacing Capacity", description: "The mission to reach far more students outran the operational capacity to do it." }
      ]}
      approachTitle="Strengthen the Foundation for Impact"
      approachIntro="We helped Career Connect strengthen its technology and operating model so it could scale its impact — helping it enroll and inspire 15,000 students and generate new programs across the country."
      steps={[
        { step: "01", title: "Assessing the Constraints", description: "We identified where technology and operations were capping the nonprofit's reach." },
        { step: "02", title: "Strengthening the Technology", description: "We helped modernize the systems so enrollment and programs could scale without proportional overhead." },
        { step: "03", title: "Improving the Operating Model", description: "We helped streamline how programs ran and expanded, so growth added reach rather than burden." },
        { step: "04", title: "Scaling the Mission", description: "We helped Career Connect reach 15,000 students and launch new programs nationally." }
      ]}
      resultsTitle="A Mission That Scales"
      results={[
        { icon: Users, value: "15,000", label: "Students reached", detail: "Enrolled and inspired" },
        { icon: TrendingUp, value: "National", label: "Expansion", detail: "New programs across the country" },
        { icon: CheckCircle, value: "Scaled", label: "Impact", detail: "Reach, not overhead" },
        { icon: Zap, value: "Stronger", label: "Foundation", detail: "Technology and operations" }
      ]}
      quote="Our mission was never in question — our capacity to scale it was. Strengthening the technology and the way we operate meant that growing meant reaching more students, not just adding more work. Helping fifteen thousand students and launching programs across the country became possible because the foundation could finally carry it."
      quoteAuthor="Executive Director"
      quoteRole="Career Connect (education nonprofit)"
      relatedStudies={[
        { title: "How an Innovative Public-Private Partnership Built More Resilient Local Food Systems", metric: "PPP", label: "public-private partnership", link: "/case-studies/sustainable-food-systems", image: "/images/capabilities/cap-food.jpg" },
        { title: "How Predictive Maintenance Cut Unplanned Downtime by 67%", metric: "67%", label: "less unplanned downtime", link: "/case-studies/manufacturing-predictive-maintenance", image: "/images/capabilities/cap-battery-factory.jpg" }
      ]}
      ctaTitle="Is your mission held back by its operating model?"
      ctaDescription="Let's strengthen the foundation so you can scale impact, not overhead."
    />
  );
}
