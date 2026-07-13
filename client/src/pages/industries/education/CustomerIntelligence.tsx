import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  {
    slug: "consulting-knowledge-management",
    title: "Transforming knowledge management for a global consulting firm",
    industry: "Professional Services",
    metric: "3x",
    image: "/images/industries/edu-whiteboard.jpg",
  },
  {
    slug: "healthcare-data-analytics",
    title: "Unlocking healthcare insights with real-time data analytics",
    industry: "Healthcare",
    metric: "25%",
    image: "/images/industries/women-laptops.jpg",
  },
  {
    slug: "accounting-audit-automation",
    title: "How audit automation helped an accounting firm scale 2x without hiring",
    industry: "Professional Services",
    metric: "2x",
    image: "/images/industries/people-commute.jpg",
  },
];

const related = [
  { name: "Operations Excellence", href: "/industries/education/operations-excellence" },
  { name: "Data Transformation", href: "/industries/education/data-transformation" },
  { name: "Strategy & Growth", href: "/industries/education/strategy-growth" },
];

export default function EducationCustomerIntelligence() {
  return (
    <IndustryCapabilityTemplate
      industry="Education"
      industrySlug="education"
      capability="Customer Intelligence"
      capabilitySlug="customer-intelligence"
      heroSubtitle="Every institution touches a learner dozens of times — an inquiry, an application, an aid offer, a first-week nudge, an advising hold, a re-enrollment reminder — yet those touchpoints live in admissions, the registrar, the LMS, and student services as separate records. We help schools and platforms unify them into one learner view and turn it into enrollment, yield, and completion."
      heroImage="/images/industries/team-strategy-board.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "Enrollment and completion are won learner by learner, not campaign by campaign.",
        image: "/images/insight-data-culture.jpg",
        paragraphs: [
          "The old enrollment playbook — buy a name list, blast a funnel, count deposits in the spring — is losing to demographic headwinds and rising skepticism about value. The institutions holding enrollment and lifting completion do something different: they read the signals a specific student is sending, from the first campus-visit click to a mid-semester drop in LMS activity, and they act on them while there is still time to matter.",
          "We connect your CRM, SIS, and learning platform into one learner profile and put it to work: behavioral segmentation that tells advising and financial aid where to spend scarce attention, predictive models that flag melt and at-risk students weeks before a withdrawal, and personalization that makes every learner feel known rather than processed — from prospect through alumnus.",
        ],
      }}
      offeringsHeading="How we build customer intelligence for education."
      offeringsIntro="Each capability is a working system, delivered by the team that will help you run it."
      offerings={[
        {
          title: "Customer Data Platform",
          description:
            "Unify CRM, SIS, LMS, and student-services records into one trusted profile that spans prospect, applicant, enrolled, and alumnus.",
          href: "/solutions/customer-intelligence/customer-data-platform",
        },
        {
          title: "Personalization Strategy",
          description:
            "Tailor outreach, aid packaging, and advising nudges to each learner so the institution feels personal at scale — not automated.",
          href: "/solutions/customer-intelligence/personalization-strategy",
        },
        {
          title: "Behavioral Segmentation",
          description:
            "Group students on real engagement and intent — not just test scores and geography — to focus recruitment and retention effort where it converts.",
          href: "/solutions/customer-intelligence/behavioral-segmentation",
        },
        {
          title: "Predictive Analytics & Modeling",
          description:
            "Model yield, summer melt, and attrition risk to reach the right learner before deposit season or a quiet withdrawal.",
          href: "/solutions/customer-intelligence/predictive-analytics-modeling",
        },
        {
          title: "Journey Analytics & Optimization",
          description:
            "Map the path from inquiry to enrollment to completion and fix the friction — a stalled application, an aid hold — that silently loses students.",
          href: "/solutions/customer-intelligence/journey-analytics-optimization",
        },
        {
          title: "Voice of Customer",
          description:
            "Turn surveys, advising notes, and course feedback into a live signal on what helps students persist and what drives them away.",
          href: "/solutions/customer-intelligence/voice-of-customer",
        },
      ]}
      stats={[
        { number: "15%+", label: "lift in retention on optimized student-success programs" },
        { number: "3–5 pts", label: "improvement in admit-to-enroll yield from targeted outreach" },
        { number: "30 days", label: "earlier detection of at-risk students before withdrawal" },
      ]}
      casesHeading="Customer intelligence, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Education leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Customer Intelligence practice",
        href: "/solutions/data-driven-customer-intelligence",
      }}
      cta={{
        heading: "Turn scattered learner data into enrollment and completion.",
        body: "Tell us where the learner view breaks down — a leaky admissions funnel, a retention gap, an advising blind spot. Our Education team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
