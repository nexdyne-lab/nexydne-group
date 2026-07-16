import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { CheckCircle2, Search, Cpu, FlaskConical, Gauge, Boxes } from "lucide-react";

export default function SemiconductorDesignTwin() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Accelerating Chip Design with a Fabrication Digital Twin | Manufacturing Case Study"
      seoDescription="A leading chipmaker faced months-long prototyping cycles and costly late defects. A physics-based fab digital twin lifted first-time-right designs 25% and freed 20% of engineering capacity."
      canonical="/case-studies/semiconductor-design-twin"
      industry="Manufacturing"
      industryLink="/industries/manufacturing"
      title="How a Chipmaker Accelerates Design Cycles with Digital Twins"
      subtitle="Virtual simulation of the manufacturing process improved yield and reduced time-to-market for next-gen processors — letting engineers fail a thousand times in simulation to succeed once in the fab."
      heroImage="/images/industries/mfg-robotics.jpg"
      metrics={[
        { value: "25%", label: "More First-Time-Right Designs" },
        { value: "30%", label: "Faster Root-Cause Analysis" },
        { value: "20%", label: "More Engineering Capacity" }
      ]}
      clientContextTitle="Diminishing Returns at the Cutting Edge"
      clientContextIntro="A leading semiconductor manufacturer faced diminishing returns in Moore's Law. Developing new 3nm process nodes was becoming exponentially expensive and slow — physical prototyping cycles ran for months, and a minor design flaw caught late cost millions in re-tooling and lost market opportunity."
      clientContextBody="The manufacturer needed to simulate the entire fabrication process virtually, so engineers could test and optimize designs before committing to silicon. Without it, every late-discovered defect was a multi-million-dollar setback and every prototype cycle was months the market wouldn't wait for."
      clientProfile={{
        industry: "Semiconductor Manufacturer",
        companySize: "Advanced 3nm Nodes",
        projectDuration: "Innovation Platform",
        additionalInfo: "Physics-Based Twin",
        additionalLabel: "Simulation Model"
      }}
      challengeTitle="Why Development Kept Slowing"
      challenges={[
        {
          icon: FlaskConical,
          title: "Months-long prototype cycles",
          description: "Physical prototyping took months, making each iteration slow and painfully expensive at the leading edge."
        },
        {
          icon: Gauge,
          title: "Costly late-stage defects",
          description: "Minor flaws discovered late in the process forced re-tooling that cost millions and surrendered market timing."
        },
        {
          icon: Search,
          title: "Slow root-cause analysis",
          description: "When issues arose, tracing them back through the fabrication process was painstaking and time-consuming."
        },
        {
          icon: Boxes,
          title: "Inspection bottlenecks",
          description: "Physical metrology slowed production and tied up engineers in inspection instead of design."
        }
      ]}
      approachTitle="A Physics-Based Twin of the Fab"
      approachIntro="NEXDYNE built a physics-based digital twin of the fabrication plant and the lithography process — turning the fab into a place engineers could experiment freely before touching silicon."
      steps={[
        {
          step: "01",
          title: "Virtual metrology",
          description: "ML models predicted wafer-quality metrics from equipment sensor data — 'virtual measurements' for every step, without pausing production for physical inspection."
        },
        {
          step: "02",
          title: "Simulate process changes",
          description: "Engineers simulated how parameter changes — temperature, pressure, exposure time — affected the final chip, optimizing recipes digitally before any physical run."
        },
        {
          step: "03",
          title: "Design for manufacturability",
          description: "Yield prediction identified layout patterns likely to cause defects, so designers could modify for manufacturability early in the cycle."
        },
        {
          step: "04",
          title: "Replay failures to find causes",
          description: "When issues did occur, engineers replayed fabrication steps in the twin to pinpoint failure points fast."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: CheckCircle2,
          value: "25%",
          label: "More first-time-right designs",
          detail: "Validated virtually before fabrication"
        },
        {
          icon: Search,
          value: "30%",
          label: "Faster root-cause analysis",
          detail: "By replaying fabrication steps in the twin"
        },
        {
          icon: Cpu,
          value: "20%",
          label: "More engineering capacity",
          detail: "As virtual metrology freed engineers from inspection"
        }
      ]}
      quote="The digital twin has become our playground for innovation. We can fail a thousand times in the simulation to succeed once in the fab, and that one success is all that matters."
      quoteAuthor="VP of R&D"
      quoteRole="Semiconductor Manufacturer"
      relatedStudies={[
        {
          title: "Improving Fleet Maintenance with Digital Twins",
          metric: "20%",
          label: "higher availability",
          link: "/case-studies/airline-maintenance-analytics",
          image: "/images/industries/aero-rocket.jpg"
        },
        {
          title: "Optimizing City Traffic with a Mobility Digital Twin",
          metric: "15%",
          label: "less peak congestion",
          link: "/case-studies/mobility-model-city",
          image: "/images/industries/auto-robotics-team.jpg"
        }
      ]}
      ctaTitle="Ready to move your hardest problems into simulation?"
      ctaDescription="Let's talk about what a fabrication digital twin could take off your critical path."
    />
  );
}
