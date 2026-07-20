import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  { slug: "healthcare-transformation", title: "Unifying scattered patient data to improve outcomes 35%", industry: "Healthcare", metric: "35%", image: "/images/cases/healthcare-transformation-hero.jpg" },
  { slug: "healthcare-readmission", title: "Cutting avoidable readmissions by 42% with better prediction", industry: "Healthcare", metric: "42%", image: "/images/cases/healthcare-readmission-hero.jpg" },
  { slug: "healthcare-revenue-cycle", title: "Recovering $32M a year in revenue already earned", industry: "Healthcare", metric: "$32M", image: "/case-healthcare-team.5797392b.jpg" },
];

const related = [
  { name: "Operations Excellence", href: "/industries/healthcare/operations-excellence" },
  { name: "Data Transformation", href: "/industries/healthcare/data-transformation" },
  { name: "Risk & Resilience", href: "/industries/healthcare/risk-resilience" },
];

export default function HealthcareCustomerIntelligence() {
  return (
    <IndustryCapabilityTemplate
      industry="Healthcare"
      industrySlug="healthcare"
      capability="Customer Intelligence"
      capabilitySlug="customer-intelligence"
      heroSubtitle="In healthcare, engagement is outcomes — a patient who understands, shows up, and adheres is a healthier patient and a lower cost. We help providers and payers unify patient and member data into one view and turn it into personalized, timely engagement across every channel of care."
      heroImage="/case-patient-care.b97e3209.jpeg"
      heroFocal="60% 50%"
      perspective={{
        heading: "Engagement isn't marketing in healthcare. It's the outcome.",
        image: "/images/insight-data-culture.jpg",
        paragraphs: [
          "A missed appointment, an unfilled prescription, a patient who does not understand the next step — each is a worse outcome and a higher cost, and each is a signal you already have somewhere in the record. The problem is that clinical, claims, access, and digital data all keep their own version of the patient, and none of them add up to a person you can reach at the right moment.",
          "We unify those signals into one patient or member view and put it to work: personalized outreach that improves show rates and adherence, segmentation that targets the interventions that matter, and predictive models that flag rising risk before it becomes an admission — across portal, phone, and point of care.",
        ],
      }}
      offeringsHeading="How we build patient and member intelligence for healthcare."
      offeringsIntro="Each capability is a working system, delivered by the team that will help you run it."
      offerings={[
        { title: "Customer Data Platform", description: "Unify clinical, claims, access, and digital data into one trusted patient or member view.", href: "/solutions/customer-intelligence/customer-data-platform" },
        { title: "Personalization Strategy", description: "Deliver personalized, timely outreach across portal, app, and care team.", href: "/solutions/customer-intelligence/personalization-strategy" },
        { title: "Behavioral Segmentation", description: "Segment on real behavior and risk to target the interventions that move outcomes.", href: "/solutions/customer-intelligence/behavioral-segmentation" },
        { title: "Predictive Analytics & Modeling", description: "Flag rising risk, gaps in care, and no-shows before they become costs.", href: "/solutions/customer-intelligence/predictive-analytics-modeling" },
        { title: "Journey Analytics & Optimization", description: "Map the care journey and fix the friction that loses patients between steps.", href: "/solutions/customer-intelligence/journey-analytics-optimization" },
        { title: "Voice of Customer", description: "Turn patient feedback and experience into a live signal on access and quality.", href: "/solutions/customer-intelligence/voice-of-customer" },
      ]}
      stats={[
        { number: "40%", label: "improvement in patient engagement on our platforms" },
        { number: "Fewer", label: "no-shows, gaps in care, and avoidable readmissions" },
        { number: "Earlier", label: "detection of rising-risk patients and members" },
      ]}
      casesHeading="Patient intelligence, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Healthcare leaders."
      related={related}
      generalPractice={{ label: "Explore our firm-wide Customer Intelligence practice", href: "/solutions/data-driven-customer-intelligence" }}
      cta={{ heading: "Reach every patient at the right moment.", body: "Tell us where engagement breaks down — access, adherence, follow-up. Our Healthcare data team will read your note and come back within two business days with a concrete first move, not a sales pitch." }}
    />
  );
}
