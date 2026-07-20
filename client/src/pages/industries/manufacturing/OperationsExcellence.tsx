import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  { slug: "automotive-smart-factory", title: "Lifting plant productivity by 40% at a vehicle maker", industry: "Manufacturing", metric: "40%", image: "/images/industries/mfg-robotics.jpg" },
  { slug: "semiconductor-quality-prediction", title: "Catching chip defects weeks before they appear", industry: "Manufacturing", metric: "92%", image: "/images/cases/semiconductor-quality-prediction-hero.jpg" },
  { slug: "industrial-connected-products", title: "Building a Recurring Services Business on Machines Already Sold", industry: "Manufacturing", metric: "2,700 machines on connected services", image: "/images/capabilities/cap-battery-factory.jpg" },
];

const related = [
  { name: "Data Transformation", href: "/industries/manufacturing/data-transformation" },
  { name: "Strategy & Growth", href: "/industries/manufacturing/strategy-growth" },
  { name: "Risk & Resilience", href: "/industries/manufacturing/risk-resilience" },
];

export default function ManufacturingOperationsExcellence() {
  return (
    <IndustryCapabilityTemplate
      industry="Manufacturing"
      industrySlug="manufacturing"
      capability="Operations Excellence"
      capabilitySlug="operations-excellence"
      heroSubtitle="The factory floor is where manufacturing margin is made or lost — and demand volatility, labor scarcity, and aging lines are squeezing all of it. We help manufacturers modernize planning, production, and maintenance with AI-driven operations and the automation to run at higher OEE and lower cost."
      heroImage="/images/industries/mfg-robotics.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "The smart factory isn't a moonshot. It's the next shift.",
        image: "/images/insight-ai-powered-operations.jpg",
        paragraphs: [
          "Most manufacturers do not have a technology problem — they have a data-and-decision problem on the floor. Planners work off yesterday's numbers, maintenance is calendar-based instead of condition-based, and the line's real bottleneck is invisible until it stops. The result is OEE stuck where it has been for years and cost that creeps every quarter.",
          "We rebuild the operating core: AI-driven planning and scheduling, predictive maintenance, and the automation that takes the manual work out of production and the back office. The goal is a plant that runs at higher OEE, absorbs demand shocks, and improves cost and service at the same time — not another dashboard on the wall.",
        ],
      }}
      offeringsHeading="How we build operations excellence for manufacturing."
      offeringsIntro="From process discovery to AI-driven scheduling, each capability is delivered by the team that will help you run it."
      offerings={[
        { title: "Process Discovery & Mining", description: "Surface the real bottlenecks and losses on the floor, from the machine and system data.", href: "/solutions/process-optimization/process-discovery-mining" },
        { title: "Intelligent Automation Design", description: "Automate planning, quality, and back-office work with RPA, AI, and orchestration.", href: "/solutions/process-optimization/intelligent-automation-design" },
        { title: "Workflow Optimization", description: "Redesign production and order flows to cut cycle time, changeover, and scrap.", href: "/solutions/process-optimization/workflow-optimization" },
        { title: "AI-Powered Decision Support", description: "Give planners AI-driven demand, scheduling, and predictive-maintenance signals.", href: "/solutions/process-optimization/ai-powered-decision-support" },
        { title: "Continuous Improvement Programs", description: "Stand up the lean and CI cadence that keeps OEE climbing shift over shift.", href: "/solutions/process-optimization/continuous-improvement-programs" },
        { title: "Change Management & Training", description: "Build the frontline capability that turns new tools into new floor behavior.", href: "/solutions/process-optimization/change-management-training" },
      ]}
      stats={[
        { number: "10–20 pts", label: "improvement in overall equipment effectiveness (OEE)" },
        { number: "4.2x", label: "faster end-to-end cycle times for our clients" },
        { number: "20–40%", label: "reduction in unplanned downtime" },
      ]}
      casesHeading="Operations, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Manufacturing leaders."
      related={related}
      generalPractice={{ label: "Explore our firm-wide Operations practice", href: "/capabilities/operations" }}
      cta={{ heading: "Run at higher OEE, at lower cost.", body: "Tell us what is limiting the line — a bottleneck, a maintenance model, a planning cycle. Our Manufacturing operations team will read your note and come back within two business days with a concrete first move, not a sales pitch." }}
    />
  );
}
