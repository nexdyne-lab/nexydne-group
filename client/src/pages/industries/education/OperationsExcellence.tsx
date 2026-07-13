import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  {
    slug: "university-student-success",
    title: "Helping 18% more students reach graduation",
    industry: "Education",
    metric: "18%",
    image: "/images/industries/edu-whiteboard.jpg",
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
    image: "/images/industries/team-strategy-board.jpg",
  },
];

const related = [
  { name: "Customer Intelligence", href: "/industries/education/customer-intelligence" },
  { name: "Data Transformation", href: "/industries/education/data-transformation" },
  { name: "Strategy & Growth", href: "/industries/education/strategy-growth" },
];

export default function EducationOperationsExcellence() {
  return (
    <IndustryCapabilityTemplate
      industry="Education"
      industrySlug="education"
      capability="Operations Excellence"
      capabilitySlug="operations-excellence"
      heroSubtitle="Admissions files re-keyed by hand, financial-aid verification that stalls for weeks, registration exceptions routed through email, transcript requests worked one at a time — the administrative load is quietly consuming the staff time and budget that should go to students. We help institutions redesign and automate the back office so capacity flows back to the mission."
      heroImage="/images/industries/edu-whiteboard.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "The cost problem in education is an operations problem.",
        image: "/images/insight-ai-powered-operations.jpg",
        paragraphs: [
          "Tuition discounting is at record highs, public funding is volatile, and no board will approve unlimited headcount. Yet the work has grown: aid verification, compliance reporting, degree audits, and student-services casework all landed on the same staff. The institutions staying financially healthy are the ones treating administrative process as something to be engineered, not endured.",
          "We start by mapping where the time actually goes — the aid file that touches six people, the registration override that waits three days — then automate the repetitive parts and redesign the flow around the student. The result is faster aid packaging, shorter service queues, and cleaner compliance, with staff freed from re-keying to do the advising and problem-solving only people can do.",
        ],
      }}
      offeringsHeading="How we build operations excellence for education."
      offeringsIntro="Each capability is a working system, delivered by the team that will help you run it."
      offerings={[
        {
          title: "Process Discovery & Mining",
          description:
            "See exactly how an admissions file, aid package, or registration exception moves through your offices — and where days disappear.",
          href: "/solutions/process-optimization/process-discovery-mining",
        },
        {
          title: "Intelligent Automation Design",
          description:
            "Automate aid verification, application intake, transcript processing, and degree audits so staff stop re-keying between the SIS and every other system.",
          href: "/solutions/process-optimization/intelligent-automation-design",
        },
        {
          title: "Workflow Optimization",
          description:
            "Redesign enrollment, financial-aid, and student-services workflows around the student instead of the org chart.",
          href: "/solutions/process-optimization/workflow-optimization",
        },
        {
          title: "AI-Powered Decision Support",
          description:
            "Give aid officers, advisors, and registrars the recommended next action, drawn from policy and the full student record.",
          href: "/solutions/process-optimization/ai-powered-decision-support",
        },
        {
          title: "Continuous Improvement Programs",
          description:
            "Stand up the metrics and cadence that keep service queues short and processing times falling after go-live.",
          href: "/solutions/process-optimization/continuous-improvement-programs",
        },
        {
          title: "Change Management & Training",
          description:
            "Bring faculty, aid staff, and registrars along so redesigned processes stick and shadow workflows do not creep back.",
          href: "/solutions/process-optimization/change-management-training",
        },
      ]}
      stats={[
        { number: "40–60%", label: "reduction in manual handling on financial-aid and admissions processing" },
        { number: "days → hours", label: "turnaround on aid verification and registration exceptions" },
        { number: "20%+", label: "of staff capacity redirected from paperwork to student support" },
      ]}
      casesHeading="Operations excellence, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Education leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Operations practice",
        href: "/capabilities/operations",
      }}
      cta={{
        heading: "Free capacity for students, not paperwork.",
        body: "Tell us which process is eating your team — aid verification, registration, transcripts, service casework. Our Education team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
