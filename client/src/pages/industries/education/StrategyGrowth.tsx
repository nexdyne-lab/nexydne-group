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
  { name: "Data Transformation", href: "/industries/education/data-transformation" },
];

export default function EducationStrategyGrowth() {
  return (
    <IndustryCapabilityTemplate
      industry="Education"
      industrySlug="education"
      capability="Strategy & Growth"
      capabilitySlug="strategy-growth"
      heroSubtitle="The traditional-age, full-pay, on-campus student is no longer enough to fill a class or fund a mission. We help institutions rethink the program portfolio, online and hybrid models, and workforce partnerships that open new enrollment pools and durable revenue — without diluting the academic brand that makes them worth choosing."
      heroImage="/images/industries/colleagues-walking.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "Growth in education comes from new models, not just a bigger funnel.",
        image: "/images/business-strategy-abstract.jpg",
        paragraphs: [
          "Demographic decline, price sensitivity, and open skepticism about the value of a degree are shrinking the pool every institution used to rely on. Buying more names and discounting more aggressively is a treadmill. The institutions growing through the cycle are expanding what they offer and who they serve — online completers, adult learners, employer cohorts, stackable credentials — and pricing those models to actually pay.",
          "We help you decide where to grow and how: which programs and modalities to launch, sunset, or scale; how to stand up online and hybrid offerings that protect quality and margin; and which employer and workforce partnerships turn a credential into a pipeline. The goal is a portfolio and revenue base that hold up as the traditional market keeps tightening.",
        ],
      }}
      offeringsHeading="How we build strategy and growth for education."
      offeringsIntro="Each capability is a working system, delivered by the team that will help you run it."
      offerings={[
        {
          title: "Growth Strategy",
          description:
            "Define where to grow across programs, modalities, and learner segments — and where to stop spending — to lift net enrollment.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/growth-strategy",
        },
        {
          title: "Business Model Innovation",
          description:
            "Design online, hybrid, subscription, and employer-cohort models that open new revenue pools beyond traditional tuition.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/business-model-innovation",
        },
        {
          title: "Strategic Planning",
          description:
            "Turn mission and market reality into a program portfolio and multi-year plan the cabinet and board can commit to.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/strategic-planning",
        },
        {
          title: "Organizational Transformation",
          description:
            "Reshape academic and administrative structures so new modalities and partnerships have somewhere to actually live.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/organizational-transformation",
        },
        {
          title: "Digital Strategy",
          description:
            "Build the online-learning and digital proposition that lets you reach adult and off-campus learners at quality and scale.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/digital-strategy",
        },
        {
          title: "Turnaround & Restructuring",
          description:
            "Stabilize the finances and rationalize the program portfolio when enrollment and revenue have fallen below the run rate.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/turnaround-restructuring",
        },
      ]}
      stats={[
        { number: "New pools", label: "adult, online, and employer-cohort learners beyond the traditional class" },
        { number: "18–24 mo", label: "typical path from new-program decision to first enrolled cohort" },
        { number: "Margin-tested", label: "every modality and program modeled to fund the mission, not just fill seats" },
      ]}
      casesHeading="Strategy and growth, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Education leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Strategy & Corporate Finance practice",
        href: "/capabilities/strategy-corporate-finance",
      }}
      cta={{
        heading: "Grow enrollment and revenue without diluting the mission.",
        body: "Tell us where the model is under pressure — a shrinking program, an online push, an employer partnership, a budget that no longer balances. Our Education team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
