import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  {
    slug: "hotel-revenue-transformation",
    title: "Lifting hotel revenue per room by 18%",
    industry: "Travel & Hospitality",
    metric: "18%",
    image: "/images/cases/hotel-revenue-transformation-hero.jpg",
  },
  {
    slug: "airline-loyalty-redesign",
    title: "Reviving a regional airline's loyalty program",
    industry: "Travel & Hospitality",
    metric: "40%",
    image: "/images/cases/airline-loyalty-redesign-hero.jpg",
  },
  {
    slug: "hotel-guest-experience",
    title: "Restoring personal service across a hotel group",
    industry: "Travel & Hospitality",
    metric: "+25pts",
    image: "/images/cases/hotel-guest-experience-hero.jpg",
  },
];

const related = [
  { name: "Pricing & Revenue Management", href: "/industries/travel-hospitality/pricing-revenue-management" },
  { name: "Customer Intelligence", href: "/industries/travel-hospitality/customer-intelligence" },
  { name: "Data Transformation", href: "/industries/travel-hospitality/data-transformation" },
];

export default function TravelHospitalityOperationsExcellence() {
  return (
    <IndustryCapabilityTemplate
      industry="Travel & Hospitality"
      industrySlug="travel-hospitality"
      capability="Operations Excellence"
      capabilitySlug="operations-excellence"
      heroSubtitle="In a hotel or an airline, operations is the product — the check-in line, the room turned on time, the flight that recovers from a delay, the housekeeper who is where the demand is. We help travel and hospitality operators run leaner service operations, schedule scarce labor against real demand, and automate the front-desk and back-office work that quietly erodes both margin and the guest experience."
      heroImage="/images/industries/meeting-topview.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "Service quality and unit cost are decided on the floor, in real time.",
        image: "/images/insight-ai-powered-operations.jpg",
        paragraphs: [
          "Every guest-facing failure — the twenty-minute check-in queue, the room not ready at 3 p.m., the missed turndown, the delay handled badly — traces back to an operating decision: how labor was scheduled, how a manual process broke under load, how the front desk was pulled away from the guest to chase a system. And in an industry running on thin frontline staffing, those decisions now get made with fewer people than the plan assumed.",
          "We redesign property, service, and back-office operations so the work fits the labor you actually have: demand-based scheduling that puts housekeeping and front-desk staff where the arrivals and departures are, intelligent automation that clears the repetitive front- and back-office tasks off the team, and decision support that helps managers protect service on the days when everything hits at once.",
        ],
      }}
      offeringsHeading="How we build operations excellence for travel and hospitality."
      offeringsIntro="Each capability is a working system, delivered by the team that will help you run it."
      offerings={[
        {
          title: "Process Discovery & Mining",
          description:
            "See how check-in, housekeeping, and back-office work actually flow — and where labor and guest time leak — before you redesign it.",
          href: "/solutions/process-optimization/process-discovery-mining",
        },
        {
          title: "Intelligent Automation Design",
          description:
            "Automate the front-desk and back-office tasks — folio handling, reconciliation, group blocks — so staff stay on the guest, not the screen.",
          href: "/solutions/process-optimization/intelligent-automation-design",
        },
        {
          title: "Workflow Optimization",
          description:
            "Rebalance housekeeping, front-desk, and service workflows to demand so rooms turn on time and queues never form.",
          href: "/solutions/process-optimization/workflow-optimization",
        },
        {
          title: "AI-Powered Decision Support",
          description:
            "Give property and duty managers demand-based labor and recovery guidance to protect service on the high-arrival days.",
          href: "/solutions/process-optimization/ai-powered-decision-support",
        },
        {
          title: "Continuous Improvement Programs",
          description:
            "Stand up the operating cadence that keeps service scores and labor productivity improving property by property, not once.",
          href: "/solutions/process-optimization/continuous-improvement-programs",
        },
        {
          title: "Change Management & Training",
          description:
            "Bring frontline teams and property managers along so new tools stick through peak season and high turnover.",
          href: "/solutions/process-optimization/change-management-training",
        },
      ]}
      stats={[
        { number: "10–20%", label: "reduction in labor cost per occupied room from demand-based scheduling" },
        { number: "30%+", label: "of front-desk and back-office manual tasks automated" },
        { number: "15%", label: "faster room-turn and check-in times at peak arrival" },
      ]}
      casesHeading="Operations excellence, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Travel & Hospitality leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Operations practice",
        href: "/capabilities/operations",
      }}
      cta={{
        heading: "Make the operation fit the labor you have.",
        body: "Tell us where operations strains — a check-in bottleneck, housekeeping coverage, a back-office process that breaks at peak. Our Travel & Hospitality operations team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
