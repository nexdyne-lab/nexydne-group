import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export function MobilityModelCity() {
  return (
    <CaseStudyTemplate
      client="European Capital City Government"
      industry="Public Sector · Digital Twins"
      title="European City Optimizes Traffic with Digital Twin"
      subtitle="Real-time traffic simulation informed urban planning decisions, reducing congestion and emissions."
      heroImage="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600&q=80"
      challenge={`A rapidly growing European capital faced severe traffic congestion, leading to poor air quality and frustrated citizens. Traditional traffic management systems were reactive, adjusting signal timings only after jams had formed. The city planners wanted to implement ambitious sustainability goals—more bike lanes, pedestrian zones, and low-emission zones—but feared gridlock if they disrupted existing traffic flows without proper planning.

They needed a way to model the complex interactions of cars, public transit, cyclists, and pedestrians to make data-driven infrastructure decisions.`}
      solution={`NEXDYNE co-created a comprehensive mobility digital twin of the entire metropolitan area.

Multi-Modal Simulation aggregated data from GPS providers, traffic cameras, public transit sensors, and mobile network data to simulate the movement of millions of commuters across all modes of transport. Scenario Planning tools let planners test the impact of closing a street for a pedestrian zone, adding a new bus line, or changing traffic light logic before implementing changes in the real world. A Citizen Engagement portal made an interactive version of the model public, allowing citizens to visualize the benefits of proposed changes—for example, seeing how a new bike lane could reduce commute times by reducing car traffic.`}
      impact={`Peak congestion decreased 15% as the city implemented optimized signal timing and infrastructure changes validated through the digital twin. CO2 emissions fell 10% as traffic flowed more efficiently and more residents shifted to public transit and cycling, with public transit usage increasing 20%.

City planners gained the ability to test proposed changes digitally before committing capital, reducing costly infrastructure mistakes and accelerating the pace of the city's sustainability transformation. The public engagement portal increased citizen support for changes by letting residents see the projected benefits before construction began.`}
      metrics={[
        { value: "15%", label: "Reduction in peak congestion" },
        { value: "10%", label: "Decrease in CO2 emissions" },
        { value: "20%", label: "Increase in public transit usage" }
      ]}
      quote={{
        text: "The digital twin took the guesswork out of urban planning. We could show the public exactly why we were making changes and prove that the outcome would be better for everyone.",
        author: "Chief Urban Planner",
        role: "European Capital City Government"
      }}
      tags={["Public Sector", "Digital Twin", "Smart City", "Sustainability"]}
      relatedCapability={{
        title: "AI & Machine Learning",
        link: "/capabilities/ai"
      }}
    />
  );
}

export default MobilityModelCity;
