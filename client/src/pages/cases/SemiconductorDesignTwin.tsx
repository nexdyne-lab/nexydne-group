import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function SemiconductorDesignTwin() {
  return (
    <CaseStudyTemplate
      client="Leading Semiconductor Manufacturer"
      industry="Semiconductor · Digital Twins"
      title="Chipmaker Accelerates Design Cycles with Digital Twins"
      subtitle="Virtual simulation of manufacturing processes improved yield and reduced time-to-market for next-gen processors."
      heroImage="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80"
      challenge={`A leading semiconductor manufacturer faced diminishing returns in Moore's Law. Developing new 3nm process nodes was becoming exponentially expensive and time-consuming. Physical prototyping cycles took months, and minor design flaws discovered late in the process cost millions in re-tooling and lost market opportunity.

They needed a way to simulate the entire fabrication process virtually, allowing engineers to test and optimize designs before committing to silicon.`}
      solution={`NEXDYNE implemented a physics-based digital twin of the fabrication plant and the lithography process.

Virtual Metrology used ML models to predict wafer quality metrics based on equipment sensor data, effectively creating "virtual measurements" for every step of the process without slowing down production for physical inspection. Process Simulation enabled engineers to simulate the impact of parameter changes (temperature, pressure, exposure time) on the final chip structure, optimizing recipes in the digital realm before committing to physical runs. Yield Prediction identified design patterns likely to cause manufacturing defects, allowing designers to modify layouts for higher manufacturability (DFM) early in the design cycle.`}
      impact={`First-time-right designs increased 25% as engineers validated designs virtually before fabrication, eliminating costly late-stage defects. Root cause analysis time decreased 30% when issues did occur, as engineers could replay fabrication steps in the digital twin to identify failure points. Engineering capacity increased 20% as virtual metrology freed engineers from time-consuming physical inspection workflows.

The digital twin became the company's primary innovation platform—enabling rapid experimentation with new process parameters and materials that would be prohibitively expensive to test physically. Engineers can now fail thousands of times in simulation to succeed once in the fab.`}
      metrics={[
        { value: "25%", label: "Increase in first-time-right designs" },
        { value: "30%", label: "Reduction in root cause analysis time" },
        { value: "20%", label: "Increase in engineering capacity" }
      ]}
      quote={{
        text: "The digital twin has become our playground for innovation. We can fail a thousand times in the simulation to succeed once in the fab, and that one success is all that matters.",
        author: "VP of R&D",
        role: "Semiconductor Manufacturer"
      }}
      tags={["Manufacturing", "Digital Twin", "AI", "Technology"]}
      relatedCapability={{
        title: "AI & Machine Learning",
        link: "/capabilities/ai"
      }}
    />
  );
}
