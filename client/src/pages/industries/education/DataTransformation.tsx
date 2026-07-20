import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  {
    slug: "university-student-success",
    title: "Helping 18% more students reach graduation",
    industry: "Education",
    metric: "18%",
    image: "/images/cases/university-student-success-hero.jpg",
  },
  {
    slug: "university-online-programs",
    title: "Tripling a university's online program enrollment",
    industry: "Education",
    metric: "3x",
    image: "/images/industries/women-laptops.jpg",
  },
  {
    slug: "k12-adaptive-learning",
    title: "Personalized learning lifts district outcomes 25%",
    industry: "Education",
    metric: "25%",
    image: "/images/cases/k12-adaptive-learning-hero.jpg",
  },
];

const related = [
  { name: "Customer Intelligence", href: "/industries/education/customer-intelligence" },
  { name: "Operations Excellence", href: "/industries/education/operations-excellence" },
  { name: "Strategy & Growth", href: "/industries/education/strategy-growth" },
];

export default function EducationDataTransformation() {
  return (
    <IndustryCapabilityTemplate
      industry="Education"
      industrySlug="education"
      capability="Data Transformation"
      capabilitySlug="data-transformation"
      heroSubtitle="A single student lives as different records in the SIS, the LMS, the CRM, the aid system, and a dozen departmental spreadsheets — with different IDs and no agreed source of truth. We help institutions build one governed student record, FERPA-safe by design, that finally makes learning analytics and AI-driven advising trustworthy."
      heroImage="/images/industries/women-laptops.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "You cannot personalize learning on data you do not trust.",
        image: "/images/data-abstract.jpg",
        paragraphs: [
          "Every institution wants learning analytics, early-alert advising, and AI-assisted student support. Almost none can act on them, because the underlying data is fractured: the SIS knows enrollment, the LMS knows engagement, the CRM knows the funnel, and nobody has stitched them into a single student whose privacy is also protected. Dashboards built on that foundation are quietly wrong, and faculty learn not to trust them.",
          "We build the one-student-record foundation: integrating SIS, LMS, CRM, and aid systems into a governed platform, with the data engineering to keep it current and the governance to keep it FERPA-compliant. On top of it, learning analytics and clear reporting give advisors, deans, and provosts numbers they can actually stake a decision on — and a base that AI can safely learn from.",
        ],
      }}
      offeringsHeading="How we build data transformation for education."
      offeringsIntro="Each capability is a working system, delivered by the team that will help you run it."
      offerings={[
        {
          title: "Data Strategy",
          description:
            "Define the one-student-record vision, priorities, and roadmap that connect SIS, LMS, CRM, and aid data to real outcomes.",
          href: "/solutions/data-strategy",
        },
        {
          title: "Data Platform",
          description:
            "Stand up the modern platform that consolidates fragmented student and institutional data into one trusted, queryable source.",
          href: "/solutions/data-platform",
        },
        {
          title: "Data Engineering",
          description:
            "Build the pipelines that reconcile student IDs across systems and keep enrollment, engagement, and aid data current.",
          href: "/solutions/data-engineering",
        },
        {
          title: "Data Governance",
          description:
            "Put FERPA-aligned access, consent, and stewardship in place so student data is protected and audit-ready by design.",
          href: "/solutions/data-governance",
        },
        {
          title: "Data Visualization",
          description:
            "Give advisors, deans, and provosts early-alert and outcomes dashboards they trust and can act on.",
          href: "/solutions/data-visualization",
        },
        {
          title: "Data Solutions",
          description:
            "Deliver the learning-analytics and student-success use cases — from persistence models to program dashboards — on the new foundation.",
          href: "/solutions/data-solutions",
        },
      ]}
      stats={[
        { number: "1", label: "governed student record uniting SIS, LMS, CRM, and aid data" },
        { number: "FERPA", label: "privacy and access controls built into the platform, not bolted on" },
        { number: "weeks → minutes", label: "to answer cross-system questions about persistence and outcomes" },
      ]}
      casesHeading="Data transformation, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Education leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Data Transformation practice",
        href: "/capabilities/data-transformation",
      }}
      cta={{
        heading: "Build the one student record your analytics deserve.",
        body: "Tell us where the data fractures — mismatched IDs, a stalled LMS integration, dashboards no one trusts, a FERPA worry. Our Education data team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
